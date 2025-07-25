# Identity-Owned `vets-api` Redis Models

[Github issue ticket](https://github.com/department-of-veterans-affairs/identity-documentation/issues/496)

This report documents the various `octo-identity`-owned models in `vets-api` that are backed by the VA.gov Redis cache. Each area of code is examined in the context of the following questions.
1.   What are the impacts if a redis entry associated with the model is unexpectedly evicted?
2.   Can the model be recreated easily if the redis entry is unexpectedly evicted?
3. Do we have any evidence that redis entries associated with the model have been unexpectedly evicted?

## `User`
* `app/models/user.rb`

The user model is the main point of interaction with user attributes by `vets-api` business logic, its attributes are mostly derived from linked `UserIdentity` and MPI profile objects.
1.   If the `User` is no longer present SSOe & SiS authentication will both fail. SSOe will throw an error & force re-authentication which will create a new `UserIdentity`, SiS will gracefully re-create it with MPI-sourced attributes.
2.  Yes.
3. 

## `UserIdentity`
* `app/models/user_identity.rb`

The user identity stores session and user attributes for a user; it is instantiated at the same time as the `User` model is & is intended to persist alongside it.
1.   If the `UserIdentity` is no longer present SSOe & SiS authentication will both fail. SSOe will throw an error & force re-authentication which will create a new `UserIdentity`, SiS will gracefully re-create it with MPI-sourced attributes.
2.   Yes, it is a collection of attributes that can be sourced from MPI with any one of several different uuids.
3. 
 

## `IAMUserIdentity`
* `app/models/iam_user_identity.rb`

## `IAMUser`
* `app/models/iam_user.rb`

## `IAMSession`
* `app/models/iam_session.rb`

## `UserProfileAttributes`
* `app/models/user_profile_attributes.rb`

## `MPI::Data`
* `app/models/mpi_data.rb`

## `SAMLRequestTracker`
* `app/models/saml_request_tracker.rb`

## `Session`
* `app/models/session.rb`

## `SignIn::CodeContainer`
* `app/models/sign_in/code_container.rb`

## `SignIn::StateCode`
* `app/models/sign_in/state_code.rb`

## `SignIn::TermsCodeContainer`
* `app/models/sign_in/terms_code_container.rb`

## `SingleLogoutRequest`
* `app/models/single_logout_request.rb`
