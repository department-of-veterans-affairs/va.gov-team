# ARM: Consuming the Accreditation API – Architecture Intent

For the past 1.5 years, we've relied on a weekly `.XLSX` file from the Office of General Counsel (OGC) containing updated representative and organization data. We sanitize this data and push it to the `va.gov-teams-sensitive` repository. A Sidekiq job runs daily to check if the file has been updated in the last 24 hours. If it has, we retrieve the file, iterate through specific sheets, compare the data, and update records in the `veteran_representatives` and `veteran_organizations` tables as needed.

We are now replacing the manual `.XLSX` file update process with an automated integration that consumes the new Accreditation API developed by OGC. Additionally, we will discontinue the use of the `veteran_representatives` and `veteran_organizations` tables, which were originally created by Lighthouse and later heavily modified by us, in favor of three new tables: `accredited_individuals`, `accredited_organizations`, and `accreditations`. These new tables offer a more structured and flexible data model. Once the transition is complete, we will revert the Lighthouse tables to their original state before our modifications and remove all related code from the `veteran` module, as it will no longer be needed.

To provide context, here are the current record counts in the staging environment, which should be pretty close what's in production:

#### Record Counts in Staging

- **`veteran_representatives`:** 14,191
- **`veteran_organizations`:** 110

This document outlines our approach to transitioning from the `.XLSX` ingest process to automatically consuming the Accreditation API.

---

## Seeding the New Tables

To avoid unnecessary API calls to the Address Validation API, we will prepopulate the new `accredited_individuals`, `accredited_organizations`, and `accreditations` tables using data from the legacy `veteran_representatives` and `veteran_organizations` tables.

### Steps:

1. **Create a Rake Task**  
   Develop a Rake task to migrate records from the legacy tables to the new schema:

   - Populate the `accredited_organizations` table.
   - Populate the `accredited_individuals` table and create corresponding records in the `accreditations` join table.

2. **Implement Batch Processing**  
   Use Rails' `find_in_batches` and `insert_all` methods to process records in chunks of 1,000. For example:

   ```ruby
   OldModel.find_in_batches(batch_size: 1000) do |batch|
     transformed_records = batch.map do |record|
       {
         new_field1: record.field1,
         new_field2: record.field2,
         # Other necessary transformations
         created_at: Time.current,
         updated_at: Time.current
       }
     end

     # Efficiently insert the transformed batch into the new table
     NewModel.insert_all(transformed_records)
   end
   ```

   This Rake task will be executed once.

### Benefits of This Approach:

- **Optimized Memory Usage** – Only 1,000 records are processed at a time, preventing memory overload.
- **Improved Performance** – Batch inserts reduce the number of database queries, enhancing efficiency.
- **Simplicity** – The migration is an in-place operation, avoiding the complexity of background job systems like Sidekiq.

---

## Daily Sidekiq Job for Accreditation API Integration

A new daily Sidekiq job will fetch data from the Accreditation API to update the `accredited_individuals`, `accredited_organizations`, and `accreditations` tables.

### Modifications & Logic Adjustments:

#### Soft Deletion

- Add an `is_active` column (default: `true`) to the `accredited_individuals` and `accredited_organizations` tables.
- If an individual or organization is missing from the API response, mark its `is_active` column as `false` rather than deleting the record.

If there's a security concern with persisting inactive individuals indefinitely, we could implement one of the following solutions:

**Secure Soft Deletion:** Instead of simply setting `is_active = false`, null out non-encrypted data fields while storing the original record in an encrypted JSON blob for more secure long-term storage. This ensures that sensitive information is not easily accessible while still retaining the ability to restore or audit historical data if needed.

**Inactive Tables for Historical Data:** Instead of soft deleting records, move inactive representatives and organizations to dedicated `inactive_accredited_individuals` and `inactive_accredited_organizations` tables. These tables would have the same structure as the active ones but store records in an encrypted format. Once a record is moved to its corresponding inactive table, it would be deleted from the active dataset.

Out of these two potential solutions, _Secure Soft Deletion_ would be easier to implement and require fewer schema changes. _Inactive Tables for Historical Data_ would provide better organization and a clearer distinction between active and inactive records.

### Import Logic Updates

Retain core logic from the existing `.XLSX` import process, with the following modifications:

- Insert new records for individuals and organizations that do not yet exist.
- Mark records as inactive (`is_active = false`) if they exist in our database but are absent from the Accreditation API response.
- Compare `raw_address` values to detect address changes.
- Compare `phone` values instead of `phone_number`, since `phone_number` is no longer in use.
- Compare individual names to account for changes (e.g., due to marriage).

### Additional Considerations

- Retain the existing Sidekiq job structure for record updates.
- Determine the appropriate handling of the `can_accept_reject_poa` field.
- If the Accreditation API response includes `created_at` and `updated_at` fields for each record, we can optimize updates by skipping records that have not been created or modified in the last 24 hours, reducing unnecessary processing.

By implementing this architecture, we ensure data consistency, streamline the update process, and improve overall system reliability.

## Architecture Intent Checklist

- Product description
  - [x] As mentioned above, for the past 1.5 years, we've relied on a weekly `.XLSX` file from the Office of General Counsel (OGC) containing updated representative and organization data. We sanitize this data and push it to the `va.gov-teams-sensitive` repository. A Sidekiq job runs daily to check if the file has been updated in the last 24 hours. If it has, we retrieve the file, iterate through specific sheets, compare the data, and update records in the `veteran_representatives` and `veteran_organizations` tables as needed.
  - [ ] Link to Collaboration Cycle Request issue
- UX design description
  - [x] NA ~For user-facing changes, link to UX prototype or wireframes if available~
  - [x] Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
    - None.
- Frontend changes
  - [x] NA ~Identify any significant code changes~
  - [x] NA ~Identify any new design system components needed or changes to current components~
  - [x] NA ~Describe any product analytics being gathered~
- Backend changes
  - [x] Does the project introduce any new or unusual infrastructure dependencies?
    - No.
  - [x] Do you need to poll any APIs for status?
    - No.
  - [x] NA ~Are you handling all failure and error cases while in custody of your users's data?~
- Internal API changes
  - [x] NA ~List new or modified APIs in `vets-api`~
  - [x] Are you deprecating or removing any APIs?
  - No.
  - [x] NA ~Do you have API documentation?~
  - [x] NA ~Describe expected call patterns~
- External API changes
  - [x] List new or modified APIs for upstream or external systems. OGC's Accediation API
  - [x] Describe expected call patterns
    - Base URL: `https://ogccotst1.dva.va.gov:4501`
    - [x] `GET` paginated results from `/api/v2/accreditations/Agents`
    - [x] `GET` paginated results from `/api/v2/accreditations/Attorneys`
    - [x] `GET` paginated results from `/api/v2/accreditations/Representatives`
    - [x] `GET` paginated results from `/api/v2/accreditations/VeteranServiceOrganizations`
  - [x] What PII or PHI will be transmitted to/from the external systems? Representative and Organization data is transmitted from the Accrediation API but all of the information is public, and is the very content that is served in our Find a Representative search results.
- Background jobs
  - [x] List any required background processing
    - [x] The `Veteran::Organizations::QueueUpdates` and `Veteran::Representatives::QueueUpdates` Sidekiq jobs will be a replaced by new Sidekiq job that iterates through the 4 new Accrediation API endpoints, diffs each record against its corresponding record in our tables, and batches chunks of records to the existing `Veteran::Organizations::Update` and `Veteran::Representatives::Update` Sidekiq jobs (which will need to be modified).
  - [x] NA ~Describe error and dead letter handling~
- Data storage
  - [x] Describe new or modified databases, tables or columns
    - [x] New table: `accredited_individuals`
    - [x] New table: `accredited_organizations`
    - [x] New table: `accreditations`
  - [x] Describe indexes and constraints
    - [x] Indexes and constraints for `accredited_individuals`
      - `t.index ["full_name"], name: "index_accredited_individuals_on_full_name"`
      - `t.index ["location"], name: "index_accredited_individuals_on_location", using: :gist`
      - `t.index ["poa_code"], name: "index_accredited_individuals_on_poa_code"`
      - `t.index ["registration_number", "individual_type"], name: "index_on_reg_num_and_type_for_accredited_individuals", unique: true`
    - [x] Indexes and constraints for `accredited_organizations`
      - `t.index ["location"], name: "index_accredited_organizations_on_location", using: :gist`
      - `t.index ["name"], name: "index_accredited_organizations_on_name"`
      - `t.index ["poa_code"], name: "index_accredited_organizations_on_poa_code", unique: true`
    - [x] Indexes and constraints for `accreditations`
      - `t.index ["accredited_individual_id", "accredited_organization_id"], name: "index_accreditations_on_indi_and_org_ids", unique: true`
      - `t.index ["accredited_organization_id"], name: "index_accreditations_on_accredited_organization_id"`
  - [x] Identify PII and PHI and where and how it will be stored, processed, expired and deleted
    - The following PII is representative and organization data (and is not veteran data) and is publically available and is served up in our Find A Representative search engine.
    - If the data expires it will be soft-deleted by changing a record's `is_active` value from `true` to `false`
    - None of the data will be deleted.
      - [x] PII and PHI in `accredited_individuals`
        - "first_name"
        - "middle_initial"
        - "last_name"
        - "full_name"
        - "email"
        - "phone"
        - "address_type"
        - "address_line1"
        - "address_line2"
        - "address_line3"
        - "city"
        - "country_code_iso3"
        - "country_name"
        - "county_name"
        - "county_code"
        - "international_postal_code"
        - "province"
        - "state_code"
        - "zip_code"
        - "zip_suffix"
        - "raw_address"
        - "lat"
        - "long"
        - "location"
      - [x] PII and PHI in `accredited_organizations`
        - "name"
        - "phone"
        - "address_type"
        - "address_line1"
        - "address_line2"
        - "address_line3"
        - "city"
        - "country_code_iso3"
        - "country_name"
        - "county_name"
        - "county_code"
        - "international_postal_code"
        - "province"
        - "state_code"
        - "zip_code"
        - "zip_suffix"
        - "raw_address"
        - "lat"
        - "long"
        - "location"
      - [x] PII and PHI in `accreditations`
        - NA
- Libraries and dependencies
  - [x] List new or updated dependencies.
    - None.
- Metrics, logging, observability, alerting
  - [x] We'll continue to get alerts in the OCTO [#benefits-representation-management-notifications](https://dsva.slack.com/archives/C06QG3C318D) channel which provides a summary of organization updates as well as error notifications for representative and organization updates.
- Infrastructure and network changes
  - [x] We submitted a New BPE Connection request to ESECC so we can hit the new Accreditation API from vets-api staging and production environments. Our requests were approved and the network changes were performed many months ago.
- Test strategy
  - [x] We'll update the RSPEC unit tests that currently cover the `.XLSX` `veteran_representatives` and `veteran_organizations` table updates and we'll write additional tests as necessary
  - [x] We'll do manual testing locally and in staging before running the new Sidekiq job in production
  - [x] NA ~Describe required test data and test user accounts~
- Rollout plan
  - [ ] List scope of any feature flags
  - [x] NA ~Identify other teams to coordinate with~
  - [x] NA ~IDescribe rollback plan~
    - We don't need a rollback plan. We simply won't start using the new tables until we've confirmed they've been populated successfully.
- Internal administration tasks
  - [x] What maintenance or administration tasks do you anticipate will need to be performed periodically?
    - None.
  - [x] Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.). NA
- Security
  - [x] What questions do you have regarding items on the [security checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#security-checklist)?
  - [x] Are there any other security concerns about your project that you want to discuss?
    - Yes. If an individual becomes 'inactive' we'd like to 'soft delete' their record for historical purposes, so their record could potentially live indefinitely. Is it okay to store an 'inactive' record as-is (not encrypted) or would you rather us encrypt it?
  - [ ] What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture?

---

## Diagrams

### Achitecture Diagram

![Image](https://github.com/user-attachments/assets/e3dce52a-7d3b-47b9-a662-0bf1fdf86194)

### Sequence Diagram

![Image](https://github.com/user-attachments/assets/f468424e-33f4-4092-bf3a-6d4b8e757577)

## **Supplemental Explanation of the Achitecture and Sequence Diagrams**

### **Actors Involved**

- **Vets-API Server**: The main application that interacts with external APIs and databases.
- **Sidekiq Server**: Handles background job processing with two separate jobs:
  1. **`QueueUpdates` Job**: Fetches accreditation data, compares it to existing records, and queues updates.
  2. **`Update` Job**: Processes updates, validates addresses, and inserts/updates records in the database.
- **PostgreSQL Database**: Stores accreditation records.
- **Accreditation API**: Provides accreditation records.
- **Lighthouse Address Validation API**: Validates addresses for accreditation records.

---

### **Process Overview**

A **daily scheduled Sidekiq job** (`QueueUpdates`) is triggered to fetch accreditation data, compare it against existing records, and queue updates. A second Sidekiq job (`Update`) is responsible for processing the updates.

#### **1. Fetch Accreditation Data (`QueueUpdates` Job)**

- The **QueueUpdates** Sidekiq job runs daily and calls four Accreditation API endpoints:
  - `GET /api/v2/accreditations/Agents`
  - `GET /api/v2/accreditations/Attorneys`
  - `GET /api/v2/accreditations/Representatives`
  - `GET /api/v2/accreditations/VeteranServiceOrganizations`
- Each API response is **paginated**, and the job iterates through all pages to retrieve all records.
- The fetched data is **temporarily stored in memory**.

#### **2. Compare and Identify New or Changed Records**

- The job processes the fetched records in **chunks**.
- An **ActiveRecord query** retrieves existing records in bulk using a **unique identifier** (e.g., `registration_number`, though the actual column may differ):
  ```ruby
  Representatives.where(unique_identifier: [1, 2, 3])
  ```
- Each fetched record is compared against its corresponding record in the **Representatives** or **Organizations** table.
- If a record is **new** or has **changed**, it is added to an array (e.g., `new_or_changed_records`).

#### **3. Queue Updates for Processing**

- The **QueueUpdates** job processes the `new_or_changed_records` array in **chunks** and enqueues batches for the `Update` Sidekiq job.

#### **4. Validate and Upsert Data (`Update` Job)**

- The `Update` Sidekiq job processes each batch of records by:
  1. **Validating addresses** for new or changed records using the **Lighthouse Address Validation API**.
  2. **Transforming data** to match the structure of the database.
  3. **Performing a bulk upsert** (insert/update operation):
     ```ruby
     Representatives.upsert_all(array_of_shaped_data)
     ```
  4. **Confirming successful updates** in the PostgreSQL database.

---

### **Key Benefits**

✅ **Efficient API Data Retrieval**: Uses batch processing and in-memory storage.  
✅ **Optimized Database Queries**: Fetches existing records in bulk to minimize query overhead.  
✅ **Incremental Updates**: Only new or modified records are updated, reducing unnecessary writes.  
✅ **Batch Processing**: Minimizes Sidekiq job load by processing updates in chunks.

---

This **clear separation of concerns** between `QueueUpdates` and `Update` ensures that the system remains **scalable, efficient, and easy to debug**. 🚀 Let me know if any refinements are needed!
