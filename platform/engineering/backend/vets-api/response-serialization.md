----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Response-Serialization.721420368.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Response Serialization

## Tooling

Responses to requests must be JSON formatted.  To that end, we use `ActiveModel::Serializer` to consistently structure and serialize our endpoint responses.  

This adheres to the JSON API specification.  It also ensures that endpoint responses will always follow the `"data": "attributes": ...` [schema pattern](http://jsonapi.org/format/#document-top-level).  

For example, here is a sample response body:

```javascript
{
  "data": {
    "type": "phones",
    "id": "1"
    "attributes": {
      "number": "4445551212",
      "extension": "101",
      "country_code": "1"
    }
  }
}
```

## Creating a Serializer

Serializers are defined in the `app/serializers` directory, and should be namespaced to the integration.  Serializers should only contain information relevant to the endpoint.

Here is a sample model, and its associated serializer:

```ruby
# lib/my_integration/facility.rb
#
module MyIntgration
  class Facility
    include Virtus.model(nullify_blank: true)

    attribute :name
    attribute :latitude
    attribute :longitude
    attribute :internal_rating
  end
end

# app/serializers/my_integration/facility_serializer.rb
#
module MyIntegration
  class FacilitySerializer < ActiveModel::Serializer
    attribute :latitude
    attribute :longitude
    attribute :name
  end
end
```

You'll note that the `:internal_rating` attribute was omitted from the serializer.  Reason being, it is not required for presentation to the end user.

## Workflow

Our standard is for calls to any External Service Clients {TODO - add content} to return native Ruby objects. This allows new
endpoints and integrations to utilize existing clients, and aids the testing
process.

The conversion of these Ruby objects to a JSON response is done in the controller.

Here are a few sample implementations:

```ruby
# app/controllers/my_integration/facilities_controller.rb
#
module MyIntegration
  class FacilitiesController < ApplicationController
    def index
      facilities = facilities_service_client.for_user(current_user)

      render(
        json: facilities,
        serializer: ActiveModel::Serializer::CollectionSerializer,
        each_serializer: MyIntegration::FacilitySerializer
      )
    end

    def show
      facility = facilities_service_client.get(id: params[:id])

      render json: facility, serializer: MyIntegration::FacilitySerializer
    end

    private

    def facilities_service_client
      MyIntegration::Facilities::Service.new
    end
  end
end

```

## Limiting Serialized Data

Not all data returned by an External Service is necessary to include in
an endpoint's response.

For instance, personally identifiable information (PII) can present security concerns.  Making this data available may unnecessarily burden future auditing, in case of a breach.

Additionally, large lists of ancillary details increase the response size, and negatively impact performance.

For these reasons, be sure to only define attributes within the Serializer that are required for consumers.

<hr>

Back: [Vets API Request Processing](request-processing.md)

Next: [Vets API Service Objects](service-objects.md)
