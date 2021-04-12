----

### We're moving our docs! Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Documentation.721780779.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Documentation

All endpoints exposed through Vets-API must be thoroughly documented with [Swagger](https://swagger.io/). The goal is to provide enough information for another engineer to create an independent integration with your service. This documentation also serves as the starting point for final review of the integration. At a minimum this should include:

* A thorough and understandable `summary` of the endpoint
* All input `parameters`
* All possible success and error `responses`.


A Swagger document is a computer-readable collection of documentation details for an API. Documentation callouts within Vets-API provide the information required to generate this [Vets-API document](https://dev-api.va.gov/v0/apidocs).

The Vets-API developers use the [Swagger Blocks](https://github.com/fotinakis/swagger-blocks) gem as a DSL to define our Swagger documentation. This document will cover an example using that DSL.

There are two essential components to integrate documentation with the existing Vets-API documentation:

* Define the Swagger document
* Include the documented class in the `SWAGGERED_DOCUMENTS` list

### Defining the Swagger document
This example is defined inline with the controller

```ruby
# app/controllers/v0/my_integration/facilities_controller.rb
module V0
  module MyIntegration
    class Facilities < ApplicationController
      include Swagger::Blocks

      swagger_path '/facilities' do
        operation :get do
          key :tags, %w[my_integration.facilities]
          key :summary, 'Get a list of facilities'
          key :operationId, 'getFacilities'

          parameter do
            key :name, :filter
            key :description, 'When provided, filter facilities that contain this value in their name.'
            key :required, false
            key :type, :string
          end

          response 200 do
            key :description, 'Facility list'

            schema do
              key :type, :array

              items do
                key :'$ref', :Facility
              end
            end
          end

          response 401, description: "Unauthorized Request"
          response 403, description: "Bad Authorization"
          response 503, description: "Service Unavailable"
        end
      end

      def index
        facilities = facility_service.find_all(filter: params[:filter])
        render json: facilities,
               serializer: ActiveModel::Serializer::CollectionSerializer,
               each_serializer: MyIntegration::FacilitySerializer  
      end

      # Define a schema we can refer to multiple times

      swagger_schema :Facility do
        property :name, type: :string
        property :score, type: :number
        property :available, type: :boolean
      end

      private
      def facility_service
        MyIntegration::FacilityService.new(current_user)
      end
    end
  end
end
```
### A note about `tags`
Tags are used to group your endpoints with a service. It's important that tag names be unique and descriptive. Before you choose your tag names, check the [existing documentation](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/) for tag names (`authentication`, `user`, `profile`, etc) and ensure your tag names don't collide. A recommended approach for doing this is to namespace your tags with your integration name using dot notation. In the example above this would be `my_integration.facilities`. Each `operation` requires a `tag`. Tags can be reused across operations but it's not recommended to have multiple tags for a single operation.

### Include the documented class in the `SWAGGERED_DOCUMENTS` list

```ruby
# app/controllers/v0/apidocs_controller.rb
...
    SWAGGERED_CLASSES = [
      ...
      V0::MyIntegration::Widgets
    ]
...

```

## Viewing Documentation
### Online
[Interactive documentation](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/) is available through Swagger UI.

### Local
[Instructions](https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/swagger) for viewing documentation locally in your development environment are available in the documentation repository's readme.

<hr>

Back: [Vets API Authorization](authorization.md)

Next: [Vets API Forms](forms.md)
