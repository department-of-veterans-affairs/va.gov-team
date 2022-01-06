# User Accounts

## Confirm Data Consistency

* Tests of consistency and current proof at this state on production:
  * Current number of `UserAccount`, `UserVerification`, and `DeprecatedUserAccount` records (after roughly 24 hours of being live):
![accounts_number](consistency_1.png)
  * Non-verified and verified `UserAccounts`:
![user_accounts_number](consistency_2.png)
  * Non-verified and verified `UserVerifications`:
![user_verifications_number](consistency_3.png)
  * Confirm that all `UserAccount` records that do not have an `icn` (non-verified `UserAccounts`), match up with non-verified `UserVerifications` and `DeprecatedUserAccounts`:
![user_account_deprecated_match](consistency_4.png)
  * Confirm that there are a modest number of `UserVerifications` that share a `UserAccount` (and no cases of more than 4 `UserVerifications`, or one per authentication type, per `UserAccount`). These represent verified `UserVerifications`that are correlated to verified `UserAccounts` amongst different credentials:
![multiple_user_verifications_user_accounts](consistency_5.png)
  * Confirm there are no non-verified `UserVerification` records that share the same `UserAccount`:
![no_non_verified_user_verification](consistency_6.png)
  * Confirm all `UserAccount` records have a unique `icn` (or `nil`):
![user_account_unique_icn](consistency_7.png)
  * Confirm there are no `DeprecatedUserAccounts` with a verified `UserAccount`:
![no_deprecated_user_accounts_verified](consistency_8.png)
  * Confirm there are no `DeprecatedUserAccounts` with a `UserVerification` that has a `verified_at` value earlier than its `created_at` value (`verified_at` before `created_at` is possible when a `UserVerification` is verified upon creation, where the `verified_at` field it set immediately before object creation). This case is important because a `DeprecatedUserAccount` should only be created when a `UserVerification` is first set up as non-verified, and set up with a non-verified `UserAccount`, then later is verified. This is a weird query so the inverse is also queried to prove that all `DeprecatedUserAccount` records exist with a `verified_at` value greater than `created_at`:
![no_verified_at_deprecated_accounts](consistency_9.png)