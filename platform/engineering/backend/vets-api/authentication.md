----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Authentication.721420316.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Authentication


Authenticated requests to Vets-API provide access to a `User` object containing information about the user who made the request. Your integration may utilize this object to pass Veteran information to your service for authentication or processing purposes. By default, all controller actions are non-public facing and require authentication.


From any controller, the
`User` object can be obtained with the `current_user` method:

```ruby
module MyService
  class ExamplesController < ApplicationController
    def index
      # The @user variable is assigned the currently authenticated User object
      @user = current_user
      render json: { status: 'ok' }
    end
  end
end
```

## Levels of Assurance

Vets-API provides guarantees that the user initiating the request is correlated to the identifying information within the User object. There are four possible Levels of Assurance provided based on the mechanism by which the user authenticated. Ensure you are familiar with each of them, and validate the proper LOA requirements appropriately in your integration's policies. Please see [Authorization](authorization.md) for details on how to provide services only to users authenticated with the proper LOA.

**Level 1:** There is no identity proofing requirement at this level. However, the fact that the user is able to authenticate to the identity provider gives some assurance. It means the identity provider has some relationship with the user because they have issued them a credential (username and password). Credentials are required to login.

**Level 2:** In addition to level 1, identity proofing requirements are introduced, requiring presentation of identifying materials or information. Credentials are required to login. (Vets.gov does not support this level of assurance currently).

**Level 3:** In addition to level 2, identity proofing procedures require verification of identifying materials and information. Both in-person and remote registration are permitted. Level 3 requires the same evidence for issuing credentials as Level 2; however at this level verification of the documents or references through record checks is required. ID.me facilitiates this through an industry recognized standard known as FICAM. Credentials are required are to login.

**Level 4:** In addition to level 3, remote registration is not permitted at this level. The applicant must appear in-person to register. A new recording of a biometric of the applicant at the time of application is also required to ensure the applicant cannot repudiate the application. Credentials and a cryptographic key card associated with the credentials are required to login. (Vets.gov does not support this level of assurance currently).

### Synthesis by Vets.gov

Vets.gov only recognizes level 1 and level 3. A user signing in through third parties such as MHV or DS Logon might be considered as identity proofed and categorized as level 3.

#### MHV has 3 basic account levels:

1. Basic: This user is essentially equivalent to LOA1 described above. Anyone can create an account at this level.
2. Advanced: This user is the same as a basic account, but it has been correlated to a record in the main veteran index providing some higher degree of assurance that MHV recognizes. In addition, these users are VA Patients.
3. Premium: This user is the same as Advanced, but the user has been identity proofed either in-person or by way of FICAM identity proofing.

Vets.gov only recognizes account level of Premium as being equivalent to LOA3.

#### DS Logon

Similar to MHV, DS Logon has different account levels. These account levels correspond to similar levels of assurance as described above.

Vets.gov recognizes account levels of 2 or higher as being equivalent to LOA3.


## Overriding Authentication

Authentication is required by default for all requests to Vets-API. To bypass authentication and provide a public endpoint, you can skip the authentication process.

```ruby

# config/routes.rb
...
namespace :v0, defaults: { format: 'json' }
  ...
  namespace :my_service do
    resources :examples, only: [:public]
  end
  ...
end
...

# app/controllers/my_service/example_controller.rb
module MyService
  class ExamplesController < ApplicationController
    skip_before_action :authenticate

    # This endpoint is publicly available
    def public
      render json: { status: 'world readable' }
    end
  end
end
```

## Profile Data Sources

The User object is serialized out to JSON as user profile data. The data is derived from a number of different sources including but not limited to the following:

- The SAML Response returned from the identity provider. (ID.me)
  - See `UserIdentity`: only attributes coming from the IDP should ever be stored on UserIdentity

- The Master Veteran Index (MVI)
  - See `mvi/service`: This data is fetched once per day and is cached in Redis.

- EVSS
  - TODO: write a description here

Rules of precedence are available in the User object.

## User Object Reference

TODO: RDoc reference link

## Further Reading

1. https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/reference-documents/auth/authentication-and-authorization-simplified.md

<hr>

Back: [Vets API Development](development.md)

Next: [Vets API Authorization](authorization.md)
