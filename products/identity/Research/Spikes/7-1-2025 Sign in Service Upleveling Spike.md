# IAL/LOA Authentication Strategy for Sign in Service

* Current behavior for Sign in Service
  * `ID.me`
    * `loa1`
      * Authenticate with: `http://idmanagement.gov/ns/assurance/loa/1/vets`
    * `loa3`
      * Authenticate with: `http://idmanagement.gov/ns/assurance/loa/3_force`
    * `min`
      * First, authenticate with: `http://idmanagement.gov/ns/assurance/loa/1/vets`
      * Then, if credential has `credential_ial_highest` as `classic_loa3`
        * Check if user has previously logged in with verified credential
          * If so, use mapped ICN to retrieve attributes (search for ICN by `idme_uuid`)
        * Else, re-authenticate with: `http://idmanagement.gov/ns/assurance/loa/3` 
          * No login credentials are necessary, ID.me session is still active
  * `Login.gov`
    * `ial1`
      * Authenticates with: `http://idmanagement.gov/ns/assurance/ial/1`
    * `loa3`
      * Authenticates with: `http://idmanagement.gov/ns/assurance/ial/2`
    * `min`
      * First, authenticate with: `http://idmanagement.gov/ns/assurance/ial/1`
        * If user has previously logged in with verified credential, use mapped ICN to retrieve attributes (search for ICN by `logingov_uuid`)
      * Then, if credential has `verified_at` set (not nill)
        * Check if user has previously logged in with verified credential
          * If so, use mapped ICN to retrieve attributes (search for ICN by `logingov_uuid`)
        * Else,  re-authenticate with: `http://idmanagement.gov/ns/assurance/ial/2` 
          * No login credentials are necessary, Login.gov session is still active

* Proposed Behavior (only changes to above are shown)
  * `ID.me`
    * `min`
      * Authenticate with: `http://idmanagement.gov/ns/assurance/loa/1/vets` and with `comparison:minimum`
        * Credential returns with highest available level (`loa1`, or `loa3`)
  * `Login.gov`
    * `min`
      * Authenticate with: `http://idmanagement.gov/ns/assurance/ial/0`
        * Credential returns with highest available level (`ial1`, or `ial2`)


* Other options
  * Login.gov credential has `verified_at` field, which could let us know if verification details have chaned
    * We could use this to mostly authenticate at `ial1` for users we have previously logged in with verified credential, but log in at `ial2` when we detect changed credential information
      * ID.me credential doesn’t appear to have the proper field for this though
  * We could log in at `ial2/loa3` if the user hasn’t logged in with a verified credential after a certain period of time (like 30 days, 90 days, or some other period of time)
