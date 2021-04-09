----

### We're moving our docs! Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Authorization.721387554.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Authorization

Authorization is a process of permitting an identity, asserted through authentication, of accessing a specified resource. Requests to Vets-API integration endpoints must be authorized based on the provided [Authentication](authentication.md) information. Vets-API provides authorization functions through Policy classes in `app/policies`.

## All Actions

```ruby
# app/policies/my_integration/prescriptions_policy.rb

module MyIntegration
  PrescriptionsPolicy = Struct.new(:user, :scope) do
    # MHV provides a "Basic" account type which should not access prescriptions resources
    RX_ACCOUNT_TYPES = %w[Premium Advanced].freeze

    def access?
      # False when the current_user is a ne
      RX_ACCOUNT_TYPES.include?(user.mhv_account_type) && user.va_patient?
    end
  end
end
```

```ruby
# app/controllers/my_integration/prescriptions_controller.rb

module MyIntegration
  class PrescriptionsController < ApplicationController
    # :prescriptions.to_s.camelize.constantize => MyImplementation::Prescriptions
    before_action { authorize :prescriptions, :access? }

    def index
      ...
    end
  end
end
```


## Within an Action

```ruby
# app/controllers/my_integration/prescriptions_controller.rb

module MyIntegration
  class PrescriptionsController < ApplicationController  
    def index
      render_unauthorized unless current_user.authorize(:prescriptions, :access?)
      ...
    end
  end
end
```

## Authorization Errors

Authorization errors are automatically added to instrumentation in the rack middleware layer. Dashboards have been created in Grafana to be able to view these in a graphical representation.

In addition to instrumentation, we also log Authorization errors to Sentry as warnings.

## Limitations

There are certain limitations of authorization and in some circumstances it is worth considering alternatives, such as a 404 Not Found.

Raising an error that says a user is not authorized to access something implies that that resource exists. In certain circumstances we would not want to leak this information and it would be preferable to instead use a 404 Not Found.

For example,
Open up your web browser in incognito mode and attempt to access a resource known to exist such as: https://github.com/department-of-veterans-affairs/va.gov-team

You should see a 404 Response.

## Further Reading

1. https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/reference-documents/auth/authentication-and-authorization.md

<hr>

Back: [Vets API Authentication](authentication.md)

Next: [Vets API Documentation](documentation.md)
