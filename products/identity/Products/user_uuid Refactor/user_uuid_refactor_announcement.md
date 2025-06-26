
# VA.gov `User.uuid` Refactor

## What is happening?

The OCTO Identity team has refactored the `User` model's `uuid`  attribute & Redis key to change the source of the uuid. 

- The previous sourcing of `User.uuid` was taken from the user's Login.gov, ID.me, or DSLogon uuid.
  - These ids are generated and maintained externally from VA.gov by our Credential Service Providers (CSPs).
- The new sourcing of `User.uuid` is taken from the user's `UserAccount.id`, or `user_account_id`.
  - The `UserAccount` is a VA.gov-internal database record.
- In addition, the `Account` model has been removed entirely from `vets-api`.

## What does this change look like?

Most of `vets-api` has been updated in early 2025 to remove usages of the `Account` model & CSP uuids, as well as to update existing data records with `user_account_id`s for indexing.

Usage of `vets-api` `User` models is unaffected - they can continue to be queried and referenced as normal by their `uuid`. 

```ruby
@current_user = User.find('some-user-account-id')
# querying the UserAccount.id
@current_user.uuid == @current_user.user_account.id
=> true
# User model method for the same id is "user_account_uuid"
@current_user.uuid == @current_user.user_account_uuid
=> true
```
To query a `User`'s current CSP uuid go through their `UserVerification::credential_identifier`.

```ruby
idme_uuid = @current_user.user_verification.credential_identifier
=> "85c50aa76934460c8736f687a6a30546"
```

## Why has the `User.uuid` been changed?

Updating the sourcing & usage of `User.uuid` increases the overall security posture of the Veteran experience in a number of ways.

1. Decoupling the CSP uuid from its extensive usage via `User.uuid` in the VA.gov codebase will allow for future features that are currently obstructed by the necessity of a CSP interaction. 

2. The `UserAccount` is a VA.gov internal record and therefore more appropriate to back VA.gov user records than external uuids.

3. The source of `UserAccount.id` is stored in the vets-api database instead of on the temporary Redis model backed by an external CSP source, making is easier and safer to reference, manage, and query.

## Who made this decision?

The decision to migrate the VA.gov `User.uuid` off of CSP backing and onto `UserAccount` backing was made by Tom Black, VA.gov Identity Product owner.
