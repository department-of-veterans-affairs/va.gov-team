----

# We're moving our docs! 
### Find [the latest version of this page](https://vfs.atlassian.net/wiki/spaces/pilot/pages/1884586101/Swagger+Implementation) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## vets-api/app/swagger/requests/profile.rb
````ruby
module Swagger
  module Requests
    class Profile
      include Swagger::Blocks

      swagger_path '/v0/profile/email' do
        operation :get do
          extend Swagger::Responses::AuthenticationError

          key :description, 'Gets a users email address information'
          key :operationId, 'getEmailAddress'
          key :tags, %w[
            profile
          ]

          parameter :authorization

          response 200 do
            key :description, 'Response is OK'
            schema do
              key :'$ref', :Email
            end
          end
        end
      end
    end
  end
end
````

## vets-api/app/swagger/schemas/email.rb
````ruby
module Swagger
  module Schemas
    class Email
      include Swagger::Blocks

      swagger_schema :Email do
        key :required, [:data]

        property :data, type: :object do
          key :required, [:attributes]
          property :attributes, type: :object do
            property :email, type: :string, example: 'john@example.com'
            property :effective_at, type: :string, example: '2018-02-27T14:41:32.283Z'
          end
        end
      end
    end
  end
end
````


## vets-api/app/controllers/v0/apidocs_controller.rb
````ruby
...

# A list of all classes that have swagger_* declarations.
SWAGGERED_CLASSES = [
  ...
  Swagger::Requests::Profile,
  Swagger::Schemas::Email,
  ...
].freeze

...
````
