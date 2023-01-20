# User Model Public Methods

# General Attributes
`uuid`: the uuid for the User model

`last_signed_in`: set at the creation of an authenticated session; UTC Time

`inherited_proof_verified`: a record of whether the user has completed the MHV inherited_proofing flow; boolean

`in_progress_forms`: retrieves a user's in-progress forms - default storage time is 60 days

# Identity Account
`account`: creates or returns the user's account

`account_uuid`: the uuid of of the user's account

`account_id`: account.id

# User Account & User Verification
`user_verification`: retrieves the user's verification info based on the CSP they authenticated with

`user_account`: the user's user_account, found through the user verification that belongs to the account

`user_verification_id`: user_verification uuid

`user_account_uuid`: user_account.id, found through the user verification that belongs to the account

# Sign in Service
`fingerprint`: request IP, set during session creation & later validated against

# UserIdentity Sourced Attributes
- Many of these attributes are sourced from UserIdentity with MPI as a backup, others are soley sourced from UserIdentity.
## User Data
`address`: a user's address, always formatted with `street` / `street2` / `city` / `state` / `country` / `postal_code`, even if blank

`postal_code`: user's ZIP or non-US postal code

`full_name_normalized`: object containing user's names; `first` / `middle` / `last` / `suffix`

`common_name`: user's full name as a spaced string

`first_name`: user's first name

`middle_name`: user's middle name

`last_name`: user's last name

`suffix`: user's suffix, if any

`email`: user's primary email

`birth_date`: iso8601-formatted date string; YYYY-MM-DD

`gender`: user's gender; `M`/ `F` / `nil`

`home_phone`: user's primary phone number

`ssn`: user's social security number

`ssn_normalized`: user's social security number, normalized to remove any non-digit characters

`all_emails`: a normalized array of the user's UserIdentity-sourced & Vet360-sourced email addresses

## IDs & Accounts Information
`identity`: finds & stores the user's UserIdentity

`loa`: VA.gov internal LoA; `1` (unverified) / `3` (verified)

`loa3?`: whether or not VA.gov considers a user verified; boolean

`birls_id`: Beneficiary Identification Records Locator Subsystem (BIRLS) id

`icn`: Master Persons Index (MPI) id

`mhv_icn`: the user's ICN as supplied by MHV; this is validated against the MPI ICN (`icn`) - MPI is the source of truth 

`mhv_account_type`: MHV account level if user has an MHV account; `Basic` / `Advanced` / `Premium`

`mhv_correlation_id`: My HealtheVet (MHV) id

`participant_id`: Also know as `vba_corp_id`, Veterans Benefits Administration (VBA) Corporate Database (Corp DB) id

`sec_id`:

`sign_in`: an info hash containing the following attributes
  * `service_name`: the CSP used to authenticate; `logingov` / `idme` / `dslogon` / `mhv`
  * `auth_broker`: `iam` (SSOe) / `sis` (Sign in Service)
  * `account_type` (SSOe only): the user's DSLogon / MHV account type, or `N/A` for ID.me & Login.gov
  * `client_id` (SiS only): the client using the VA.gov SiS service; `web` / `mobile` / `mobile_test`

`vha_facility_ids`: a user's VHA facility ids

`vha_facility_hash`: a hash of the user's VHA facility ids mapped to the Vista Account Number(s) they have for each VHA facility

`va_treatment_facility_ids`: treatment subset of the user's `vha_facility_ids`

`va_patient?`: true if the user has 1 or more treatment facilities, false otherwise; boolean

`cerner_id`: user's Cerner id

`cerner_facility_ids` user's Cerner facility id(s)

`multifactor`: if the user completed 2FA for their current session; boolean

`authn_context`: CSP & LoA/IAL of the user's login method

`idme_uuid`: the user's ID.me uuid; as ID.me provides 2FA for DSLogon & MHV logins users that use those CSPs will also have an idme_uuid

`logingov_uuid`: the user's Login.gov uuid

`verified_at`: timestamp of user's Login.gov IAL2 verification, used with SSOe logins to auto-upcert

`edipi`: user's Electronic Data Interchange Personal Identifier (EDIPI) id, primary DoD id a veteran inherits from active service

# MPI Sourced Attributes

## IDs & Accounts Information
`active_mhv_ids`: MHV ids that MPI has returned as active

`historical_icns`: the user's historical ICNs

`mhv_ids`: all of a user's MHV ids, including inactive

`relationships`: queries user relationships from MPI, then BGS if ineligible to query MPI

`mhv_account_state`: possible values - `DEACTIVATED`, `MULTIPLE`, `NONE`, `OK`

`mpi_profile?`: whether or not VA.gov has received MPI profile data for the user; boolean

`icn_with_aaid`: the ICN string provided by MPI with the ID status removed; `'12345678901234567^NI^200M^USVHA'`

`vet360_id`: a user's Vet360 correlation id

`search_token`:  the search token given in the original MPI response message, can be used in subsequent MPI requests

`person_types`: the person types that the user's MPI profile represents; `VET`, `PAT`, `DEP`

`mpi_status`: the status of the last MPI response

`mpi_error`: the error experienced from the last MPI response

## create / update / destroy commands
`mpi_add_person_proxy`: a call to the MPI Add Person Proxy endpoint

`set_mhv_ids`: updates user mpi_profile to include a new mhv_id in the case of a newly created MHV account

`invalidate_mpi_cache`: wipes VA.gov's MPI information for the user, any futher MPI information will invoke a new MPI endpoint call

`recache`: re-caches the MPI response, use in response to any local changes that have been made

`destroy`: destroy both UserIdentity and self

## Direct MPI Attribute & IDs
`ssn_mpi`

`birth_date_mpi`

`edipi_mpi`

`given_names`: one or multiple first/given names for the user

`first_name_mpi`: `given_names&.first`

`middle_name_mpi`: all of the user's `given_names` after the first, joined into a spaced string

`gender_mpi`

`last_name_mpi`

`mpi_birls_id`

`mhv_ien`

`mhv_iens`

`mpi_participant_ids`

`mpi_edipis`

`mpi_birls_ids`

`mpi_icn`

`normalized_suffix`: possible values - `JR.`, `Sr.`, `III`, `II`, `IV`

`deceased_date`: user's date of death
  
# eMIS attributes
`military_person?`: boolean for user being/not being considered a military person, by eMIS

`veteran?`: true if user is a title 38 veteran

# EVSS attributes
`pciu_email`: user's email, sourced from EVSS::PCIU service

`pciu_primary_phone`: user's primary phone, sourced from EVSS::PCIU service

`pciu_alternate_phone`: user's secondary phone, sourced from EVSS::PCIU service

`power_of_attorney`: queries EVSS for current information on the user's power of attorney

# Validations
`ssn_mismatch?`: compares identity-sourced & mpi-sourced ssns 

`id_theft_flag`: presence/absence of an ID theft flag from MPI, will prevent login

# Authorizations
`can_access_user_profile?`: checks if user currently has an LoA set & is therefore authenticated

`can_access_id_card?`: boolean, checks if a veteran is LoA3, has an edipi, & and is one of `V1`/`V3`/`V6` for their title 38 status

`can_access_vet360?`: boolen; checks for `loa3?`, `icn`, and `vet360_id`

`served_in_military?`: boolean; checks for `edipi`, `veteran?`, and `military_person?`

`flipper_id`: Flipper feature access id, defaults to user's `email`, then `account_uuid`

# My HealtheVet
`mhv_account`: initializes / stores a user's MHVAccount, using their `mhv_correlation_id`

`mhv_last_signed_in`: used for MHV audit logging; UTC Time

# Vets360
`vet360_contact_info`: a user's contact info as sourced from the VAProfile Contact Information Service (Vets360)

`va_profile_email`: a user's Vets360 email address
