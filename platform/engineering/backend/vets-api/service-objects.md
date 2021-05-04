----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Service-Objects.721780810.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Service Objects

Calls to external service endpoints are done through service objects.

## Overview

The implementation of a service object includes the following dependencies:

- [Service classes](#service-classes)
- [Configuration classes](#configuration-classes)
- [Response classes](#response-classes)
- [Model classes](#model-classes)
- [Relevant updates to the `config/settings.yml` file](#updating-the-config-settings)

## Service Classes

There is a [`Common::Client::Base`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/base.rb) class that encapsulates our base logic for making and dealing with HTTP calls to external services.  

When implementing a new external service, you will create a new base service class for your external service.  This will inherit from `Common::Client::Base`.  

This new base service class will typically house any logic associated with customizing the:

- HTTP calls
- error handling
- logging

This new service class can also contain the actual service endpoints (i.e. `get_some_service`); however, it is more often the case that a new child service class will be created, that inherits from your new base class.  

This child class is typically where you will create the actual suite of service object endpoints (i.e. your `POST`s, `GET`s, etc.).

#### Sample Implementation

Let's say you are integrating an external service called "HealthCheck".  You would first create a new _base_ service class:

```ruby
# lib/my_integration/health_check/service.rb

require 'common/client/base'

module MyIntegration
  module HealthCheck
    class Service < Common::Client::Base
      def initialize(user)
        @user = user
      end

      def perform(method, path, body = nil, headers = {})
        # custom handling of HTTP POST/GET/PUT, etc. calls
        super(method, path, body, headers)
      end

      private

      def handle_error(error)
        ...
      end
    end
  end
end
```

Hypothetically "HealthCheck" offers multiple services.  For example, a sub-service around a user's profile.  As such, you would create a new child service class for the service object endpoints:

```ruby
# lib/my_integration/health_check/profile/service.rb

require 'common/client/base'

module MyIntegration
  module HealthCheck
    module Profile
      class Service < HealthCheck::Service
        include Common::Client::Monitoring

        configuration HealthCheck::Profile::Configuration

        def get_person_details
          with_monitoring do
            raw_response = perform(:get, 'person_details')

            HealthCheck::Profile::PersonResponse.new(raw_response.status, raw_response)
          end
        rescue StandardError => e
          handle_error(e)
        end
      end
    end
  end
end
```


## Configuration Classes

Configuration follows a similar pattern to our service classes.  There is a [`Common::Client::Configuration::REST`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb) class that encapsulates our base logic for HTTP client connection and settings. We use [Faraday](https://github.com/lostisland/faraday) as our HTTP client.

When implementing a new external service, you will create a new base configuration class for your external service.  This will inherit from `Common::Client::Configuration::REST`.  

This new base service class will typically house any logic associated with customizing the:

- Faraday connection object and settings
- headers

The external services root URL will be stored in the `config/setttings.yml` file.  This new configuration class can also contain the external service's base path, that comes off the root URL.  

If there will be more than one base path for this service, it is typical to create a new child configuration class that inherits from your new base configuration class.

This child class is where you still define your base path, and any other configuration that is unique to this child service.

#### Sample Implementation

Using the "HealthCheck" service, you would first create a new _base_ configuration class:

```ruby
# lib/my_integration/health_check/configuration.rb

require 'common/client/configuration/rest'

module MyIntegration
  module HealthCheck
    class Configuration < Common::Client::Configuration::REST
      ...

      def connection
        @conn ||= Faraday.new(base_path, headers: base_request_headers, request: request_options, ssl: ssl_options) do |faraday|
          faraday.use :breakers
          ...
          faraday.adapter Faraday.default_adapter
        end
      end
    end
  end
end
```

Next you would create a new child configuration class unique to the profile sub-service, for defining its base path, etc.:

```ruby
# lib/my_integration/health_check/profile/configuration.rb

module MyIntegration
  module HealthCheck
    module Profile
      class Configuration < HealthCheck::Configuration
        self.read_timeout = Settings.my_integration_health_check.profile.timeout || 30

        def base_path
          "#{Settings.my_integration_health_check.url}/profile/rest/v1"
        end

        def mock_enabled?
          Settings.my_integration_health_check.mock_profile || false
        end
      end
    end
  end
end
```


## Response Classes

Responses also follow a similar pattern to our service classes.  There is a [`Common::Models::Base`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/models/base.rb) class that encapsulates our base logic for defining attributes and serialization.  We use [Virtus](https://github.com/solnic/virtus) to define attributes on classes and modules.

When implementing a new external service, you will create a new base response class for your external service.  This will inherit from `Common::Models::Base`.  

This new base response class will typically house any logic associated with customizing the:

- initialization
- response statuses and checks

The response class converts the raw response from the external service into a native Ruby object.

If there will be sub-services for this external service, it is typical to create a new child response class that inherits from your new base response class.

This child class is where you will convert the response to Ruby, and leverage any new model classes that you create.

#### Sample Implementation

Using the "HealthCheck" service, you would first create a new _base_ response class:

```ruby
# lib/my_integration/health_check/response.rb

require 'common/client/concerns/service_status'
require 'common/models/base'

module MyIntegration
  module HealthCheck
    class Response < Common::Base
      include Common::Client::ServiceStatus

      attribute :status, Integer

      def initialize(status, attributes = nil)
        super(attributes) if attributes
        self.status = status
      end

      def ok?
        status == 200
      end

      def response_status
        ...
      end
    end
  end
end
```

Next you would create a new child response class unique to the profile sub-service, to convert the raw response to Ruby, set the status, etc.:

```ruby
# lib/my_integration/health_check/profile/person_response.rb

require 'health_check/response'

module MyIntegration
  module HealthCheck
    module Profile
      class PersonResponse < HealthCheck::Response
        attribute :person, HealthCheck::Models::Person

        attr_reader :bio

        def initialize(status, response = nil)
          @bio = response&.body&.dig('bio')

          super(status, person: build_person)
        end

        def build_person
          Vet360::Models::Person.new(
            ...
          )
        end
      end
    end
  end
end
```


## Model Classes

Models also follow a similar pattern to our service classes.  There is a [`Common::Models::Base`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/models/base.rb) class that encapsulates our base logic for defining attributes and serialization.  We use [Virtus](https://github.com/solnic/virtus) to define attributes on classes and modules.

When implementing a new external service, you will create a new base models class for your external service.  This will require `Common::Models::Base`.  

This new base model class will typically `include` all of the validation, serialization, and attribute libraries that will be used for all of your models.

These models are vehicles to convert responses received from an external service into native Ruby objects, so that we can set attributes, conduct validations, use dot notation, build out custom methods for the attributes, etc.

After you've created the base model class, you will then create any new children model classes that inherit from your new base model class.

#### Sample Implementation

Using the "HealthCheck" service, you would first create a new _base_ model class:

```ruby
# lib/my_integration/health_check/models/base.rb

require 'common/models/base'

module MyIntegration
  module HealthCheck
    module Models
      class Base
        include ActiveModel::Validations
        include ActiveModel::Serialization
        include Virtus.model(nullify_blank: true)
      end
    end
  end
end
```

Next you would create any new child model classes:

```ruby
module MyIntegration
  module HealthCheck
    module Models
      class Person < Base
        attribute :name, String
        attribute :address, String
        ...

        validates :name, presence: true
        ...
      end
    end
  end
end
```

## Updating The Config Settings

As this will be a brand new external service, you'll need to update our `config/settings.yml` file with the service's root URL.  You'll also include keys and values for any usage of `Settings` in your configuration classes.

#### Sample Implementation

```
# Settings for HealthCheck
my_integration_health_check:
  url: https://health_check/api/v1
  profile:
    timeout: 30
    mock_profile: false
```

See the [Settings Documentation](settings.md) for more details.

<hr>

Back: [Vets API Response Serialization](response-serialization.md)

Next: [Vets API Settings](settings.md)
