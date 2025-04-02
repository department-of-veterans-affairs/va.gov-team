# VA.gov `user_uuid` Refactor

## What is happening?

The OCTO Identity team is refactoring the `User` model `uuid` // `user_uuid` attribute to change the source of the uuid & reduce its usage overall. At present the `user_uuid` is taken from the Credential Service Provider (CSP) uuid of the CSP that the user has authenticated with and assigned to the `User` Redis-backed instance upon its creation; with this change the `User` instance will instead be assigned the uuid of its `UserAccount` instance, or `user_account_id`.

## What is needed from my team?

The Identity team has identified the areas of code that need changing but we often lack the domain expertise to know the potential ramifications of `user_uuid` changes. We can provide guidance, examples, and in some cases will be able to construct review-ready PRs ourselves, but will in many instances need individual teams to author PRs for code under their jurisdiction in order to complete the transition without a loss in service.

The most noticeable aspect of this change is to the many database tables that use the `user_uuid` to save & query records - these tables and the vets-api models they're backing will all need to be updated to 
1. include the `user_account_id` in their schema
2. verify that all records possess  a `user_account_id` & source it if it is absent
3. change the identifying attribute to the `user_account_id` & remove the `user_uuid` attribute.

Most vets-api tables have already been updated to include the `user_account_id`; the Identity team will assist in assessing the status of the records your team manages and getting them fully updated with `user_account_id`s if necessary.

## Why is the `user_uuid` being changed?

Updating the sourcing & usage of `user_uuid` increases the overall security posture of the Veteran experience in a number of ways.

1. Decoupling the CSP uuid from its extensive usage via `user_uuid` in the VA.gov codebase will allow for future features that are currently obstructed by the necessity of a CSP interaction. 

2. The `UserAccount` is a VA.gov internal record and therefore more appropriate to back VA.gov user records than external uuids.

3. The source of `user_account_id` is stored in the vets-api database instead of on the temporary Redis model backed by an external CSP source, making is easier and safer to reference, manage, and query.

## How is this change being made?

The Identity team has several backend engineers working together to make repeated passes of the vets-api codebase, identifying areas that need to be changed and writing PRs for them. We've been starting with the lowest-hanging fruit and places where the `user_uuid` is being used explicitly as a CSP uuid (ie. calling MPI with a `user_uuid` passed in as an ID.me uuid) and coming up with solutions for them.

The main phase of the project is verifying that ActiveRecord tables that include `user_uuid` are properly filled out with `user_account_id` values and backfilling records that are missing `UserAccount` information. After ensuring that 100% of affected records have `user_account_id` values updates will be made to vets-api code to switch record creation & querying to using the new uuid value and drop the duplicate `user_uuid` references.

## Who made this decision?

The decision to migrate the VA.gov `user_uuid` off of CSP backing and onto `UserAccount` backing was made by Tom Black, VA.gov Identity Product owner.

## Where is the code that is affected?

The Identity performed an [initial audit](./vets_api_csp_uuid_reliance.md) in late 2024 that identifies where `user_uuid` is used in the vets-api codebase and the nature of its usage.
