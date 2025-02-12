# How exactly do vets-api users work?

##### Want more info? Talk to my source, Trevor Bosaw.

## Overview
Lets say a user logs in with credential_a (let’s just say idme). We store their `idme_uuid` in a database record called a `UserVerification` *(a user will have one `UserVerification` for every credential)*. If they have both an id.me and a login.gov login, they will have two `UserVerification` records)
Each `UserVerification` is associated with a `UserCredentialEmail`, representing the email associated with the credential that logged in *(this would be the email they used to sign into id.me if they logged in with id.me)*. Each `UserVerification` is associated with a `UserAccount`
If the user is verified, the UserAccount will store the user’s ICN.  Multiple `UserVerification` may be associated with the same `UserAccount`, if the user’s ICN is the same.

When a user authenticates, we set `user_uuid = idme_uuid`, if `idme_uuid` doesn't exist *(this will only happen for login.gov accounts, dslogon and mhv accounts still have an underlying `idme_uuid`)*, then `user_uuid = logingov_uuid`. The `User` redis model will expire either 24 hours after it was created, or when the session ends, but `user_uuid` is persistent between sessions.


## Relevant Models

### User
The model teams like ours touch 90% of the time. Shortlived Redis store meant to represent a user's *session* on vets-website.  Frequently expires while backend teams try to handle it, endlessly frustrating.
#### Record Type: Redis
#### Attributes

  - uuid (persistent. Used by us to relate InProgressForms to Form5655Submissions)
  - last_signed_in
  - mhv_last_signed_in
  - account_uuid
  - account_id
  - user_account_uuid
  - user_verification_id
  - fingerprint
  - needs_accepted_terms_of_use
  - credential_lock  
---
### UserVerification
#### Record Type: ActiveRecord
#### Relationships:
- belongs_to :user_account
- has_one :user_credential_email
#### Attributes:
- id: primary key
- user_account_id: foreign key
- idme_uuid: foreign key(?)
- logingov_uuid: foreign key(?)
- mhv_uuid: foreign key(?)
- dslogon_uuid: foreign key(?)
- verified_at: time stamp
- backing_idme_uuid: ?
- locked: boolean
---
### UserCredentialEmail
#### Record Type: ActiveRecord
#### Relationships:
- belongs_to :user_verification
#### Attributes
- user_verification_id: foreign key
- credential_email: ecrypted string
---
### UserAccount
#### Record Type: ActiveRecord
####
- has_many :user_verifications
- has_many :terms_of_use_agreements
- has_one :user_acceptable_verified_credential
#### Attributes
  - id: primary key
  - icn: string
---
