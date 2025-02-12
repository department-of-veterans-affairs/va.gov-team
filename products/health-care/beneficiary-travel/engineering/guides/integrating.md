# Integrating with the vets-api Travel Pay module

In this guide, you'll learn how to integrate with the shared Travel Pay module that integrates with the Travel Pay API. 

## Context
The shared Travel Pay module includes a set of services and clients for use by other controllers. The controller included in the module only expects to support the main VA.gov Travel Pay experience 
([see this ADR for details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/adrs/adr1_shared_module_access.md)). This guide describes
how you can build a controller that leverages the shared Travel Pay module.

### The Service
The Travel Pay service supports using a custom client number (something the API requires to differentiate traffic) [via a constructor argument (fix this link)](). It is the main class you'll be
integrating with in the common case. It includes necessary business logic that is required across a large number of cases. Any further translation must be implemented by you.

### The Client
The Travel Pay client is the class that makes the actual calls to the upstream Travel Pay API. There is no business logic included in the shared Travel Pay Client.

## How To

### Integrating with the service
To integrate with the Travel Pay Service from the main rails app of vets-api, write a controller similar to the following:

```ruby
module V0
  class YourController < ApplicationController

    private
    # The service that retrieves the appropriate tokens 
    def travel_pay_token_service
      client = TravelPay::TokenClient.new(Settings.travel_pay.client_number)
      @token_service ||= TravelPay::TokenService.new(client, @current_user)
    end


  end
end
```
