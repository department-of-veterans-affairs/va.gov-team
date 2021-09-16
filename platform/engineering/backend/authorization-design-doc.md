----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Authorization-Design-Doc.1887338517.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Authorization Design Doc

**Author**: Alastair Dawson 

## Overview

### Goal

Separate the concern of authorization from the protected service.

### **Background**

Endpoints are currently protected at a high level by authentication from a SAML provider. 
Once a user logs in services they have access to are included in the navigation on the front-end. 
Requests to those service endpoints are then rechecked against user attributes from the back-end service classes. 

The logic for navigation filtration lives in the `User` object and gets called by the `UserSerializer`. 
Some of that logic is shared by the back-end services, although many supplement it with additional 
checks on the user and other submitted parameters. This has lead to a bit of a fractured authorization 
story; business rules for authorization are not currently self documenting or easily discoverable. 

Although we have auth checks in the services themselves it's more secure, and efficient, to return 
an error before a controller action if called. This will allow services to more closely follow the 
single responsibility principle, reduce service code, and make test cases more succinct.

### High level design
*   Extract the authorization methods from the `User` object and service classes into a policy per service. 
*   Add before_filters in service controllers to check the related policy file.
*   Update application controller to raise 403 Forbidden errors when the auth framework rejects a user.
*   Update UserSerializer to use the policy classes rather than the methods on User.

## Specifics

### Detailed Design
The [Pundit gem](https://github.com/elabs/pundit) provides a set of helpers hook into Rails using regular Ruby classes.
The standard usage of the Pundit is to depend on ActiveRecord based models to check authorization.
As most vets-api resources are accessed through services we'll need to use the [headless policies](https://github.com/elabs/pundit#headless-policies)
feature. Below is an example of updating the EVSS letters service to use pundit.

The policy file, for EVSS all routes check the same policy method `can?`:
```ruby
EVSSPolicy = Struct.new(:user, :evss) do  
  def can?  
    user.edipi.present? && user.ssn.present? && user.participant_id.present?  
  end  
end
```

If some endpoints required different authorization, additional methods could be added:
```ruby
EVSSPolicy = Struct.new(:user, :evss) do  
  def can?  
    user.edipi.present? && user.ssn.present? && user.participant_id.present?  
  end  

  def can_update_ssn?  
    user.ssn.present?  
  end
end
```

Shared authorization can be defined in base controllers:
```ruby
module V0
  class EVSSController < ApplicationController
  
  private

  def authorize_user  
    authorize :evss, :can?  
  end
end
```

A child controller can then a before_action for all endpoints:
```ruby
module V0  
  class LettersController < EVSSController  
    before_action :authorize_user
```

If a controller actions doesn't need authorization we can use before_action filters to skip them:
```ruby
before_action :authorize_user, except:[:index]
```

If an action has different auth rules there are two options. We can either add another before_action 
filtered for that action.
```ruby
before_action :authorize_user, except:[:update_ssn]
before_action :authorize_user_ssn, only:[:update_ssn]
```
Or call the pundit authorize method from within the action's method:
```ruby
def update_ssn
  authorize :evss, :can_update_ssn?
end
```

ApplicationController will need to be updated to catch `Pundit::NotAuthorizedError` errors:
```ruby
va_exception =
  case exception
  when Pundit::NotAuthorizedError
    Common::Exceptions::Forbidden.new('User does not have access to the requested resource')
  when ActionController::ParameterMissing
    Common::Exceptions::ParameterMissing.new(exception.param)
```

## Alternatives and Future work

An alternative discussed at the Ad Hoc/vets.gov day is to break authorization out into a micro service. 
As vets-api currently stands this may be premature optimization. If vets-api's services get broken out/extended 
with a Zapier like directory of VA APIs this may make more sense. Authorization could be part of smart 
reverse proxy. With the proxy first checking that user has access to the request endpoint. Once approved 
the request is then forwarded on to the appropriate app/micro service.

