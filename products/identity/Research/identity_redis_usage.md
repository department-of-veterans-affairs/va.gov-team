# Identity-Owned `vets-api` Redis Models

## Introduction

This report documents the various `octo-identity`-owned models in `vets-api` that are backed by the VA.gov Redis cache. Each area of code is examined in the context of the following questions:

1. What are the impacts if a redis entry associated with the model is unexpectedly evicted?
2. Can the model be recreated easily if the redis entry is unexpectedly evicted?
3. Do we have any evidence that redis entries associated with the model have been unexpectedly evicted?

[Github issue ticket](https://github.com/department-of-veterans-affairs/identity-documentation/issues/496)

## Analysis Results

**Note:** All models inheriting from `Common::RedisStore` (`lib/common/models/redis_store.rb`) share the following behaviors:

- If loaded and invalid (fails `object.valid?`), the object is immediately deleted from Redis (`Common::RedisStore.find`).
- TTL is not auto-extended unless the object is explicitly saved (`Common::RedisStore#save`).

### `IAMSession`

**Model file:** `app/models/iam_session.rb`
**Redis TTL:** 30 minutes - `iam_session.each_ttl: 1800`
**Redis key:** Token (within `iam-session` namespace)

1. **Impact if evicted:**
   - The user's IAM SSOe OAuth session is lost; the user will need to re-authenticate to establish a new session. (see: session management in `lib/iam_ssoe_oauth/session_manager.rb`)
2. **Can it be recreated easily?**
   - Only by re-authenticating and obtaining a new OAuth token/session from IAM. (see: session creation in `lib/iam_ssoe_oauth/session_manager.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Inherits from `Session` with no IAM-specific Redis changes.

### `IAMUser`

**Model file:** `app/models/iam_user.rb`
**Redis TTL:** 30 minutes - `iam_user.each_ttl: 1800`
**Redis key:** UUID (within `iam-user` namespace)

1. **Impact if evicted:**
   - If IAMSession exists but IAMUser is missing, authentication will succeed but return `nil` for `@current_user`, causing the request to fail when the controller tries to use the user object. (see: `find_or_create_user` in `lib/iam_ssoe_oauth/session_manager.rb`, `authenticate` in `modules/mobile/app/controllers/mobile/application_controller.rb`)
2. **Can it be recreated easily?**
   - Yes, by rebuilding from the associated `IAMUserIdentity` and IAM profile. (see: `build_from_user_identity` in `app/models/iam_user.rb`, `create_user_session` in `lib/iam_ssoe_oauth/session_manager.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Sets an explicit expiration timestamp in Redis using `expireat`, based on the OAuth token's expiry. (see: `set_expire` in `app/models/iam_user.rb`)

### `IAMUserIdentity`

**Model file:** `app/models/iam_user_identity.rb`
**Redis TTL:** 30 minutes - `iam_user_identity.each_ttl: 1800`
**Redis key:** UUID (within `iam-user-identity` namespace)

1. **Impact if evicted:**
   - IAM SSOe OAuth users will be returned but will lack identity attributes (email, icn, etc.) until the session is rebuilt. Authentication will not fail, but user data will be incomplete. (see: session and identity logic in `lib/iam_ssoe_oauth/session_manager.rb`, `app/models/iam_user_identity.rb`)
2. **Can it be recreated easily?**
   - Yes, by re-introspecting the user's OAuth token and rebuilding the identity from the IAM profile. (see: `build_from_iam_profile` in `app/models/iam_user_identity.rb`, `create_user_session` in `lib/iam_ssoe_oauth/session_manager.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Sets an explicit expiration timestamp in Redis using `expireat`, based on the OAuth token's expiry. (see: `set_expire` in `app/models/iam_user_identity.rb`)

### `MPI::Data`

**Model file:** `app/models/mpi_data.rb`
**Redis TTL:** 24 hours - `mpi_profile_response.each_ttl: 86400` (success), 30 minutes - `mpi_profile_response.failure_ttl: 1800` (failure)
**Redis key:** ICN/EDIPI/UUID (within `mpi-profile-response` namespace)

1. **Impact if evicted:**
   - Minimal impact - User model attributes (ICN, EDIPI, participant_id, cerner_id, etc.) will still work but with higher latency as they fall back to direct MPI service calls. The system gracefully handles missing cache by calling MPI directly. (see: `response_from_redis_or_service` in `app/models/mpi_data.rb`, User model delegation in `app/models/user.rb`)
2. **Can it be recreated easily?**
   - Yes, automatically rebuilt from the MPI service using the `CacheAside` pattern. When cache is missing, `do_cached_with` calls `find_profile` (which hits MPI service) and then caches the response for future use. (see: `do_cached_with` in `lib/common/models/concerns/cache_aside.rb`, `find_profile` in `app/models/mpi_data.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Uses different TTLs for success vs failure responses. (see: `record_ttl` in `app/models/mpi_data.rb`)
- Implements `CacheAside` pattern with automatic fallback to MPI service. (see: `Common::CacheAside` include in `app/models/mpi_data.rb`)
- Cache key prioritization: ICN → EDIPI → Login.gov UUID → ID.me UUID → User UUID. (see: `get_user_key` in `app/models/mpi_data.rb`)

### `SAMLRequestTracker`

**Model file:** `app/models/saml_request_tracker.rb`
**Redis TTL:** 1 hour - `saml_request_tracker.each_ttl: 3600`
**Redis key:** UUID (within `saml_request_tracker` namespace)

1. **Impact if evicted:**

   * SSOe authentication flow will lose context about the original request (redirect URLs, client ID, transaction IDs), potentially causing users to be redirected to default locations instead of their intended destination. The system has fallback logic that uses default values when the tracker is missing, but this means losing the original request context. (see: `initialize_tracker` fallback logic in `lib/saml/url_service.rb`)
2. **Can it be recreated easily?**

   - No, the tracker contains request-specific context (redirect URLs, client ID, transaction IDs) that cannot be reconstructed from the SAML response alone.
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Automatically sets `created_at` timestamp when saving, used for calculating request age. (see: `save` method in `app/models/saml_request_tracker.rb`)

### `Session`

**Model file:** `app/models/session.rb`
**Redis TTL:** 30 minutes - `session_store.each_ttl: 1800`
**Redis key:** Token (within `vets-api-session` namespace)

1. **Impact if evicted:**
   - SSOe authentication will fail as the session object is required to load the current user. The system will force re-authentication when the session is missing. (see: `validate_session` in `app/controllers/concerns/authentication_and_sso_concerns.rb `)
2. **Can it be recreated easily?**
   - No, sessions contain unique tokens and timestamps that cannot be reconstructed. A new session would need to be created through the full authentication flow. (see: `secure_random_token` method in `app/models/session.rb` that generates a random token UUID)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Has a maximum session lifetime of 12 hours (`MAX_SESSION_LIFETIME = 12.hours`) that prevents sessions from being extended beyond this limit. (see: `within_maximum_ttl` validation in `app/models/session.rb`)

### `SignIn::CodeContainer`

**Model file:** `app/models/sign_in/code_container.rb`
**Redis TTL:** 30 minutes - `sign_in_code_container.each_ttl: 1800`
**Redis key:** Code (within `sign_in_code_container` namespace)

1. **Impact if evicted:**
   - SiS authentication will fail as the code container is required to validate authorization codes and exchange them for access tokens. The token endpoint will reject the request with "Code is not valid" error. (see: `validate_code_container` in `app/services/sign_in/code_validator.rb`)
2. **Can it be recreated easily?**
   - No, the code container contains a unique authorization code that cannot be reconstructed. A new authorization flow would need to be initiated. (see: `create_code_container => login_code` in `app/services/sign_in/user_code_map_creator.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Automatically destroyed after successful validation to prevent code reuse. (see: `ensure` block in `app/services/sign_in/code_validator.rb`)

### `SignIn::StateCode`

**Model file:** `app/models/sign_in/state_code.rb`
**Redis TTL:** 1 hour - `sign_in_state_code.each_ttl: 3600`
**Redis key:** Code (within `sign_in_state_code` namespace)

1. **Impact if evicted:**
   - SiS authentication will fail as the state code is required to validate the CSP response to `vets-api`. The callback endpoint will reject the request with "Code in state is not valid" error. (see: `validate_state_code `in `app/services/sign_in/state_payload_verifier.rb`)
2. **Can it be recreated easily?**
   - No, the state code contains unique a random hex value that cannot be reconstructed. A new authorization flow would need to be initiated. (see: `state_code` method in `app/services/sign_in/state_payload_jwt_encoder.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Automatically destroyed after successful validation to prevent reuse. (see: `ensure` block in `app/services/sign_in/state_payload_verifier.rb`)

### `SignIn::TermsCodeContainer`

**Model file:** `app/models/sign_in/terms_code_container.rb`
**Redis TTL:** 30 minutes - `sign_in_terms_code_container.each_ttl: 1800`
**Redis key:** Code (within `sign_in_terms_code_container` namespace)

1. **Impact if evicted:**
   - SiS authentication will fail for users who need to accept the terms of use, as the terms code container is required to authenticate users during the terms acceptance flow. The terms endpoint will reject the request when the terms code is missing. (see: `authenticate_one_time_terms_code` in `app/controllers/v0/terms_of_use_agreements_controller.rb`)
2. **Can it be recreated easily?**
   - No, the terms code container contains a unique terms code that cannot be reconstructed. A new authorization flow would need to be initiated. (see: `create_terms_code_container => terms_code` in `app/services/sign_in/user_code_map_creator.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Automatically destroyed after successful validation to prevent reuse. (see: `ensure` block in `app/controllers/v0/terms_of_use_agreements_controller.rb`)

### `SingleLogoutRequest`

**Model file:** `app/models/single_logout_request.rb`
**Redis TTL:** 12 hours - `saml_store.each_ttl: 43200`
**Redis key:** UUID (within `single-logout-request` namespace)

1. **Impact if evicted:**
   - **No impact** - This model appears to be unused/dead code.

      * The `slo_url` method that creates SingleLogoutRequest has no invocations in the legacy `SAML::URLService` class. (see: `slo_url `method in `lib/saml/url_service.rb`)
      * The `user_logout` method that would consume SingleLogoutRequest is defined along with `sessions/saml_callback` but never called. While there is a `saml_slo_callback` route defined, the corresponding controller method is missing from SessionsController, making the entire SAML logout callback flow non-functional. (see: `user_logout `method in `app/controllers/v1/sessions_controller.rb `is defined but never called,`saml_slo_callback `route exists in `config/routes.rb` but the controller method is missing)
      * A search of logs generated by the `user_logout` method (`"SLO callback response"`) for the past month returned no hits. The current logout flows (SSOe and SiS) do not use this model.
2. **Can it be recreated easily?**
   - Not applicable - The model is unused in the current authentication flows.
3. *(Eviction evidence: not applicable in codebase)*

### `User`

**Model file:** `app/models/user.rb`
**Redis TTL:** 30 minutes - `user_b_store.each_ttl: 1800`
**Redis key:** UUID (within `users_b` namespace)

1. **Impact if evicted:**
   - SSOe & SiS authentication fail; SSOe forces re-auth, SiS gracefully recreates from MPI. (see session logic in `app/services/sign_in/user_loader.rb`, `app/controllers/concerns/authentication_and_sso_concerns.rb`)
2. **Can it be recreated easily?**
   - Yes, from MPI and linked objects. (see: recreation logic in `app/services/sign_in/user_loader.rb`)
3. *(Eviction evidence: not applicable in codebase)*

### `UserIdentity`

**Model file:** `app/models/user_identity.rb`
**Redis TTL:** 30 minutes - `user_identity_store.each_ttl: 1800`
**Redis key:** UUID (within `user_identities` namespace)

1. **Impact if evicted:**
   - SSOe & SiS authentication will both fail; SSOe forces re-auth, SiS gracefully recreates from MPI. (see: `UserIdentity` usage in `app/services/sign_in/user_loader.rb`, `app/controllers/concerns/authentication_and_sso_concerns.rb`)
2. **Can it be recreated easily?**
   - Yes, it is a collection of attributes that can be sourced from MPI with any one of several different UUIDs. (see: `UserIdentity` attributes and recreation logic in `app/services/sign_in/user_loader.rb`)
3. *(Eviction evidence: not applicable in codebase)*

### `UserProfileAttributes`

**Model file:** `app/models/user_profile_attributes.rb`
**Redis TTL:** 24 hours - `user_profile_attributes.each_ttl: 86400`
**Redis key:** UUID (within `user_profile_attributes` namespace)

1. **Impact if evicted:**
   - Background jobs (like VBA submission) will fall back to form data to reconstruct user attributes. No user-facing impact as long as form data is available. (see: `modules/debts_api/app/sidekiq/debts_api/v0/form5655/vba_submission_job.rb`)
2. **Can it be recreated easily?**
   - Yes, from form data or user attributes. The system gracefully handles missing cache by reconstructing from available data sources. (see: `build_user_from_form_data` in `modules/debts_api/app/sidekiq/debts_api/v0/form5655/vba_submission_job.rb`)
3. *(Eviction evidence: not applicable in codebase)*

**Model-specific Redis behavior:**

- Cache writes go through a service object rather than direct Redis methods. (see: `UserProfileAttributeService.cache_profile_attributes` in `lib/user_profile_attribute_service.rb`)

## Suggested Improvements

### IAMUser

- **Short-term:** Update authentication to fail if IAMUser is missing when IAMSession exists, rather than returning nil. Add explicit validation in `find_or_create_user`.
- **Long-term:** Implement graceful recreation of IAMUser if missing, by rebuilding from IAMUserIdentity and the IAM profile, without requiring full re-authentication.

### IAMUserIdentity

- **Short-term:** Update authentication to fail if IAMUserIdentity is missing when IAMSession exists, rather than returning a user with missing identity attributes. Add explicit validation in `find_or_create_user`.
- **Long-term:** Implement graceful recreation of IAMUserIdentity if missing, by re-introspecting the OAuth token and rebuilding the identity, without requiring full re-authentication.

### SingleLogoutRequest

- **Long-term:** Deprecate and remove unused/dead code. The model is created but never consumed, the corresponding `saml_slo_callback` controller method is missing, and the entire SAML logout callback flow is non-functional. Clean up related unused code including the `user_logout` method and `slo_url` method that creates but never uses SingleLogoutRequest objects.

### User

- **Long-term:** Implement graceful recreation of User if missing, by rebuilding from UserIdentity and MPI, without requiring full re-authentication.

### UserIdentity

- **Long-term:** Implement graceful recreation of UserIdentity if missing, by rebuilding from MPI and linked objects, without requiring full re-authentication.
