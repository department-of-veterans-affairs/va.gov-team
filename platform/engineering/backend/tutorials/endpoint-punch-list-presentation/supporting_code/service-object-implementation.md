
----

# We're moving our docs! 
### Find [the latest version of this page](https://vfs.atlassian.net/wiki/spaces/pilot/pages/1885700252/Service+Object+Implementation) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## vets-api/lib/evss/pciu/service.rb
```ruby
require 'common/client/base'

module EVSS
  module PCIU
    class Service < EVSS::Service
      include Common::Client::Monitoring

      configuration EVSS::PCIU::Configuration

      # Returns a response object containing the user's email address and
      # its effective date
      #
      # @return [EVSS::PCIU::EmailAddressResponse] Sample response.email_address:
      #   {
      #     "effective_date" => "2018-02-27T14:41:32.283Z",
      #     "value" => "test2@test1.net"
      #   }
      #
      def get_email_address
        with_monitoring do
          raw_response = perform(:get, 'emailAddress')

          EVSS::PCIU::EmailAddressResponse.new(raw_response.status, raw_response)
        end
      rescue StandardError => e
        handle_error(e)
      end
    end
  end
end
````

## vets-api/lib/evss/pciu/configuration.rb
````ruby
module EVSS
  module PCIU
    class Configuration < EVSS::Configuration
      self.read_timeout = Settings.evss.pciu.timeout || 30

      def base_path
        "#{Settings.evss.url}/wss-pciu-services-web/rest/pciuServices/v1"
      end

      def service_name
        'EVSS/PCIU'
      end

      def mock_enabled?
        Settings.evss.mock_pciu || false
      end
    end
  end
end
````

## vets-api/lib/evss/configuration.rb
````ruby
require 'common/client/configuration/rest'

module EVSS
  class Configuration < Common::Client::Configuration::REST
    ...

    def connection
      @conn ||= Faraday.new(base_path, request: request_options, ssl: ssl_options) do |faraday|
        faraday.use      :breakers
        faraday.use      EVSS::ErrorMiddleware
        faraday.use      Faraday::Response::RaiseError
        faraday.response :betamocks if mock_enabled?
        faraday.response :snakecase, symbolize: false
        # calls to EVSS returns non JSON responses for some scenarios that don't make it through VAAFI
        # content_type: /\bjson$/ ensures only json content types are attempted to be parsed.
        faraday.response :json, content_type: /\bjson$/
        faraday.use :immutable_headers
        faraday.adapter Faraday.default_adapter
      end
    end
  end
end
````
## config/initializers/breakers.rb
````ruby
services = [
...
  EVSS::Configuration.instance.breakers_service,
...
 
]
````

## vets-api/lib/evss/pciu/email_address_response.rb
````ruby
require 'evss/response'

module EVSS
  module PCIU
    class EmailAddressResponse < EVSS::Response
      attribute :email_address, Hash

      def initialize(status, response = nil)
        email_address = response&.body&.dig('cnp_email_address')

        super(status, email_address: email_address)
      end
    end
  end
end
````

## vets-api/config/settings.yml
````yml
...
# Settings for EVSS
evss:
  pciu:
    timeout: 30
  mock_pciu: false

...
````
