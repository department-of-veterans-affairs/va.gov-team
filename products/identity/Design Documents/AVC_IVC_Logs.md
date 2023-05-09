# AVC_IVC Docs

- AVC: Acceptable Verified Credential - A verified IAL2 Login.gov account
- IVC: IDme Verified Credential - A verified LOA3 ID.me account

## User AVC Updated 

### StatsD Keys:

#### MHV

- `user_avc_updater.mhv.ivc.added`: ivc added for a user with previously only a mhv verified account.
- `user_avc_updater.mhv.avc.added`: avc added for a user with previously only a mhv verified account.

#### DSLOGON

- `user_avc_updater.dslogon.ivc.added`: ivc added for a user with previously only a dslogon verified account.
- `user_avc_updater.dslogon.avc.added`: avc added for a user with previously only a dslogon verified account.

#### MHV & DSLOGON

- `user_avc_updater.mhv_dslogon.ivc.added`: ivc added for a user with previously only a mhv or dslogon verified account.
- `user_avc_updater.mhv_dslogon.avc.added`: avc added for a user with previously only a mhv or dslogon verified account.

#### ID.me

- `user_avc_updater.idme.ivc.added`: ivc added for a user with only an id.me verified account.
- `user_avc_updater.idme.avc.added`: avc added for a user with an existing id.me verified account that added a new login.gov account

#### Login.gov

- `user_avc_updater.logingov.ivc.added`: ivc added for a user with an existing login.gov verified account that added a new id.me account
- `user_avc_updater.logingov.avc.added`: avc added for a user with only a login.gov verified account.


### Log

#### Message
`[UserAcceptableVerifiedCredentialUpdater] - User AVC Updated`

#### Payload
```json
{
  "added_type": "The type of UAVC added. (avc  ivc)",
  
  "added_from": "The CSP type the user had before adding this UAVC (idme, logingov, dslogon, mhv)",
  
  "backing_idme_uuid": "The backing_idme_uuid on MHV or DSLOGON verifications",
  
  "dslogon_uuid": "UUID of users DSLOGON account. Only present if added_from is dslogon",
  
  "user_account_id": "UUID of the vets-api user_account",
  
  "idme_uuid": "UUID of users IDME account, if present.",
  
  "logingov_uuid": "UUID of users LOGINGOV account, if present",
  
  "mhv_uuid": "UUID of users MHV account. Only present if added_from is mhv"
}
```
---
## StatsD Totals Keys (From Daily Sidekiq Job)

### Base key:
`user_avc_totals.{provider}.{scope}.total` 

### `provider` options:

- `all` - All verified acounts 
- `idme` - ID.me verified accounts
- `logingov` - Login.gov verified accounts
- `mhv` - MyHealtheVet verified accounts
- `dslogon` - DS Logon verified accounts
- `mhv_dslogon` - MyHealtheVet and DS Logon combined

### `scope` options:

- `with_avc` : Accounts that have an `acceptable_verified_credential_at` 
- `with_ivc` : Accounts that have an `idme_verified_credential_at` 
- `without_avc` : Accounts that do not have an `acceptable_verified_credential_at` 
- `without_ivc` : Accounts that do not have an `idme_verified_credential_at` 
- `without_avc_ivc` : Accounts that do not have an `acceptable_verified_credential_at`   nor `idme_verified_credential_at` 
