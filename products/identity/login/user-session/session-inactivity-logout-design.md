# Session Expiration & Renewal
## Use Cases
As a Veteran...

1.  I want my vets.gov session to be terminated if I go idle, so that my account remains secure.
2.  I want my vets.gov session to remain valid so long as I am using vets.gov, so that I don't need to keep logging in.
 - I want my vets.gov session lifetime to be capped, so that an attacker could never have an indefinite session if they steal my session token.
3.  I want to be notified before my session is terminated for being idle, so that I can prevent my session termination.


## Feature 1 : Automatic Session Extension
- For every request that contains a valid `Authorization` header, `vets-api` will set the expiration time for the existing session equal to `Time.now + 1.hour`
  - ~~A [new convenience API](#new-api) will be created for the front-end to explicitly extend the session~~
- A hard expiration for the session shall be **12 hours** for security purposes

### ~~New API!~~
| ~~Route~~       | ~~PUT /v0/sessions/renew~~ |
|-------------|-------------------------|
| ~~Headers~~     | ~~`Authorization : Token token=abcd1234`~~ |
| ~~Description~~ | ~~Extends time to live (ttl) of the Session by 1 hour.~~ |

#### ~~Returns~~
- ~~`204 NO CONTENT` if success~~
- ~~`409 CONFLICT` with json `{errors: {"created_at": "is more than the max of 12 hours ago. Session is too old"}}` if session is too old~~

## Feature 2 :Automatic Session Destroy
After prolonged browser inactivity of **8 minutes**, a modal popup will appear with an inactivity warning giving the user **2 minutes** to act.  _Text and appearance TBD._
If no action is taken, the session will be destroyed [using the existing logout API](../reference_documents/Auth/authentication_and_authorization.md#logout-flow).
