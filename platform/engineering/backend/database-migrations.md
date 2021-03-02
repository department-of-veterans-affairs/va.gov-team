# Database Migrations

`vets-api` should not require downtime for database updates. All database modifications must be performant and not negatively affect normal site operation. The Vets engineering team ensures the continued availability of database resources through these documented development patterns and procedures.

## Deployment

To account for the varying complexities with migrations defined below, Rails database migrations for vets-api are triggered by a manual process for development, staging, and production deployments. Review instance deployments will automatically trigger database migrations.

## Hot Compatibility

As a result of deployment patterns (blue/green or rolling deployment) multiple versions of `vets-api` may run at the same time. Since the database is a shared resource, it's critical all running versions of `vets-api` maintain compatibility with the running schema. Introduction of a non-compatible change necessitates a series of deployments and a coordinated bump of the `vets-api` minor version.

## Automatic Protection

The [`strong_migrations`](https://github.com/ankane/strong_migrations) gem prevents several classes of migrations that are known to cause issues. This is not a catch-all, and database migrations must still undergo thoughtful review.

## Constraints

Postgres constraints aside from null are currently out of the scope of the `vets-api` implementation and these guidelines. Implementation of constraints should be limited to performance optimization, and must be thoroughly evaluated on a case-by-case basis.

## Structuring Schema Migrations

Database migration rollback will not be performed on development, staging, or production environments. Using the `down` or `change` method of a Rails migration may be useful for local development, but other environments must always move forward.

## Data Migrations

Data migrations must be included as a rake task outside of rails database migrations. They must be triggered manually by the Platform team.

    # lib/data_migrations/user_status_default_update.rb
    # frozen_string_literal: true
    module DataMigrations
      module UserStatusDefaultUpdate
        module_function

        def run
          User.where(status: null).
            update_all(status: 'active')
        end
      end
    end

    # rakelib/user_status_default_update.rake
    namespace :data_migration do
      task user_status_default_update: :environment do
        DataMigrations::UserStatusDefaultUpdate.run
      end
    end

Removal of both files is the responsibility of the developer who built the upgrade following confirmation of deployment to production.

## Schema Updates

Schema update operations involve a multistep process:

  1. Add migration to `vets-api`
  1. Ensure existing versions of `vets-api` operate properly with new schema changes
  1. Ensure new code changes continue to permit operation of old versions
  1. Deploy to production with minor version bump (manual specification of version)
  1. Perform database migration with rake db:migrate
  1. Perform any required data migrations with independent rake task
  1. Remove backwards-compatibility conditionals and procedures in `vets-api`
  1. Deploy application to production
  1. Perform additional data migration with independent rake task

##### Before making schema updates

Review the checks from `strong_migrations` [here](https://github.com/ankane/strong_migrations#checks) before making your changes. Below are specific instructions for making certain kinds of changes within `vets-api`.

### Tables

#### Table Addition

##### Good

1. Add the database migration to create the new table

        class CreateFutureClaims < ActiveRecord::Migration
          def change
            create_table :future_claims do |t|
              t.user_uuid null:false
            end
          end
        end

2. Deploy to production. A minor version bump is not necessary (but should be considered to prevent deployment of an old version of the application)

Old versions of the application will not be affected by new table creation. This operation can be considered generally safe!

#### Table Removal

Old versions of the application will error when attempting to write or read records from a table dropped during a migration.

##### Good

1. Remove existing ORM models and any related integrations
2. Deploy to production and bump the minor version of the release
3. Create a migration to remove the table:

        class DropFutureClaims < ActiveRecord::Migration
          def change
            remove_table :future_claims
          end
        end

4. Deploy to production
5. Run migrations

### Indexes

Index updates must always be included in a separate migration. This permits disabling the DDL transaction selectively for the update.

#### Index Addition

Index addition is generally safe, but must be performed with the `concurrently` algorithm and outside of the DDL transaction to avoid locking. Take care to ensure that the application is not capable of writing non-unique values and that existing data is unique when generating a unique index.

##### Good

1. Create the new index:

        class AddIndex < ActiveRecord::Migration
          disable_ddl_transaction!

          def change
            add_index :users, :first_name, algorithm: :concurrently
          end
        end

2. Deploy to production. A minor version bump is not required.

#### Index Removal

Removing an index can also be performed with `concurrently` outside of the DDL transaction:

##### Good

1. Remove the existing index:

        class RemoveIndex < ActiveRecord::Migration
          disable_ddl_transaction!

          def up
            remove_index :users, :first_name, algorithm: :concurrently
          end
        end

2. Deploy to production. A minor version bump is not required.

### Columns

#### Adding a column with a default value

A new column with a default value requires that postgres update all existing records in the table along with the schema update. This may cause performance issues.

##### Bad

    # Adds a boolean to a benefits submission for the fake "chapter 9999" form
    class AddChapter9999ToEducationBenefitsClaims < ActiveRecord::Migration
      def change
        add_column :education_benefits_claims, :chapter9999, :boolean, default: false
      end
    end

##### Good

1. Create the new column without a default value

        class AddChapter9999ToEducationBenefitsClaims < ActiveRecord::Migration
          def change
            add_column :education_benefits_claims, :chapter9999, :boolean
          end
        end

2. Add a migration to set the default value for all new records (this does not update existing records)

        class AddChapter9999EducationBenefitsClaimsDefault < ActiveRecord::Migration
          def up
            change_column_default :education_benefits_claims, :chapter9999, false
          end
        end

3. Create a data migration

        # lib/data_migrations/chapter9999_education_benefits_default.rb
        # frozen_string_literal: true
        # TODO: delete after running
        module DataMigrations
          module Chapter9999EducationBenefitsDefault
            module_function

            def run
              EducationBenefitsSubmission.where(chapter9999: null).
                update_all(chapter9999: false)
            end
          end
        end

        # rakelib/submission_dependent_type_change.rake
        namespace :data_migration do
          task chapter9999_education_benefits_default: :environment do
            DataMigrations::Chapter9999EducationBenefitsDefault.run
          end
        end

4. Deploy to production and bump the minor version number
5. Run the production database migrations
6. When all application instances are running on the same minor version, perform the data migration

        $ RAILS_ENV=production bundle exec rake data_migration:chapter9999_education_benefits_default

7. Remove data migration module and task

#### Adding a column without a default value

1. Create the new column

        class AddNoteToEducationBenefitsClaims < ActiveRecord::Migration
          def up
            add_column :education_benefits_claims, :note, :text
          end
        end

2. Deploy to production. A minor version bump is not required.

Postgres will lock on `ALTER TABLE`, but the operation can complete quickly and does not require updates to data on disk.

#### Adding a non-null column with a default (:dragon:)

##### Bad

    class AddStatusToUser < ActiveRecord::Migration
      def change
        add_column :users, :status, :string, null: false, default: 'active'
      end
    end

This requires rewriting values for each existing row.

##### Good

1. Add the column without a default or constraint

        class AddStatusToUser < ActiveRecord::Migration
          def change
            add_column :users, :status, :string
          end
        end

2. Add the default for new records

        class AddDefaultStatusToUser < ActiveRecord::Migration
          def change
            change_column_default :users, :status, 'active'
          end
        end

3. Create a data migration

        # lib/data_migrations/user_status_default_update.rb
        # frozen_string_literal: true
        # TODO: delete after running
        module DataMigrations
          module UserStatusDefaultUpdate
            module_function

            def run
              User.where(status: null).
                update_all(status: 'active')
            end
          end
        end

        # rakelib/user_status_default_update.rake
        namespace :data_migration do
          task user_status_default_update: :environment do
            DataMigrations::UserStatusDefaultUpdate.run
          end
        end

4. Deploy to production
5. Run the database migrations
6. When all instances are running the latest version of the application, run the data migration

        $ RAILS_ENV=production bundle exec rake data_migration:user_status_default_update

7. Set the not null constraint

        class ChangeUsersStatusNotNull < ActiveRecord::Migration
          def change
            change_column_null :users, :status, true
          end
        end

8. Deploy to production
9. Run the database migrations

No default is specified, so no default values must be written by postgres. However, the existing application versions will error when attempting to add a new record to the `users` table since they are not aware of the `email` column.


#### Adding a non-null column without a default

##### Bad

    class AddEmailToUser < ActiveRecord::Migration
      def change
        add_column :users, :email, :string, null: false
      end
    end

No default is specified, so no default values must be written by postgres. However, the existing application versions will error when attempting to add a new record to the `users` table since they are not aware of the `email` column.

##### Good

1. Add the column without a default or constraint

        class AddEmailToUser < ActiveRecord::Migration
          def change
            add_column :users, :email, :string
          end
        end

3. Create a data migration to populate the new field

        # lib/data_migrations/user_status_default_update.rb
        # frozen_string_literal: true
        # TODO: delete after running
        module DataMigrations
          module UserEmailPopulation
            module_function

            # Populate user email address from external service
            def run
              User.where(email: null).
                find_each do |user|
                user.email = user.external.email
              end
            end
          end
        end

        # rakelib/user_email_population.rake
        namespace :data_migration do
          task user_status_default_update: environment do
            DataMigrations::UserEmailPopulation.run
          end
        end

4. Deploy to production
5. Run the database migrations
6. When all instances are running the latest version of the applicadtion, run the data migration

        $ RAILS_ENV=production bundle exec rake data_migration:user_status_default_update

7. Set the not null constraint

        class ChangeUsersStatusNotNull < ActiveRecord::Migration
          def change
            chagne_column_null :users, :status, true
          end
        end

8. Deploy to production
9. Run the database migrations

#### Changing a column type (:dragon:)

Changing the column type is a complicated process to perform properly with hot-compatibility. It involves adding a new column with the new type, providing backwards-compatible support for the old column, and then performing a subsequent rename operation.

##### Bad

    class UpdateTemporaryDependentsInteger < ActiveRecord::Migration
      def change
        change_table :submissions do |t|
          t.change :dependents, :integer
        end
      end
    end

After migration, the old version of the application may attempt to write an invalid value to the dependents column, causing an error on insert/update. While this can be mitigated in this example by consistent type checking outside of the database, the process can cause more problematic failures for more complex changes. Additionally, postgres will lock the table and rewrite all records with this operation, which can block requests.

##### Good

1. Create a new column with the new type (for a column with a default value, the default must be backfilled in a separate operation - see Adding a column with a default value)

        class AddTemporaryDependentsInteger < ActiveRecord::Migration
          def change
            add_column :submissions, :dependents_int, :integer
          end
        end

2. Write to both columns

        class Submission
          ...

          def dependents
            self[:dependents_int] || self[:dependents].to_i
          end

          def dependents=(v)
            self[:dependents] = v
            self[:dependents_int] = v.to_i
          end
        end

3. Create a data migration

        # lib/data_migrations/submission_dependent_type_change.rb
        # frozen_string_literal: true
        # TODO: delete after running
        module DataMigrations
          module SubmissionDependentTypeChange
            module_function

            def run
              Submission.connection.execute <<-QUERY
                UPDATE submissions
                  SET dependents_int = dependents::int;
              QUERY
            end
          end
        end

        # rakelib/submission_dependent_type_change.rake
        namespace :data_migration do
          task submission_dependent_type_change: :environment do
            DataMigrations::SubmissionDependentTypeChange.run
          end
        end

3. Deploy the changes to production, bump the minor version number.
4. When no instances are running on the old version, run the data migration

        $ RAILS_ENV=production bundle exec rake data_migration:submission_dependent_type_change

5. Utilize the new column exclusively

        class Submission
          ...
          def dependents
            dependents_int
          end

          def dependents=(v)
            self[:dependents_int] = v
          end
        end

6. Drop the old column, add a new one with the proper type

        class ChangeDependentsType < ActiveRecord::Migration
          def change
            remove_column :submissions, :dependents
            add_column :submissions, :dependents, :integer
          end
        end

7. Write to both columns

        class Submission
          ...
          def dependents
            self[:dependents] || self[:dependents_int]
          end

          def dependents=(v)
            self[:dependents] = v
            self[:dependents_int] = v
          end
        end

8. Create a data migration

        module DataMigrations
          module SubmissionDependencyIntToDependencyUpdate
            module_function

            def run
              Submission.connection.execute <<-QUERY
                UPDATE submissions
                  SET dependents = dependents_int;
              QUERY
            end
          end
        end

9. Deploy the changes to production, bump the minor version number again.
10. When no instances are running on the old version, run the data migration

        $ RAILS_ENV=production bundle exec rake data_migration:submission_dependency_int_to_dependency_update

11. Remove hot compatibility code from the model

        class Submission
          ...
        end

12. Deploy the changes to production. All instances are now reading and writing
    exclusively to the new column with the proper type.

13. Remove the column

        class RemoveTemporaryDependentsInteger < ActiveRecord::Migration
          def change
            remove_column :submissions, :dependents_int
          end
        end


8. Deploy the changes to production, and bump the minor version number one last time to ensure older versions of the application are not deployed alongside this one.


#### Changing a column default

There are no issues changing a column default outside of null constraints provided the old version of the application can function with the new default value after migrations are performed.

    class ChangeUsersStatusDefault < ActiveRecord::Migration
      def change
        change_column_default :users, :status, 'pending'
      end
    end

