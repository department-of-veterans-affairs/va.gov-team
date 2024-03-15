# Identity Sign-in Data Flow

The purpose of this document is to outline the sign in flow. The document will be broken out into subsections beginning with for each of [currently] three sign methods.

## Routes

The front-end makes a request `/sessions/{type}/new` where `type` corresponds to one of the following: [mhv, dslogon, idme, mfa, verify, slo].

For purposes of Sign-in Data Flow, our focus here is exclusively on `mhv`, `dslogon`, `idme`, and `verify`.

The first three of these are used to redirect the user to sign-in at the appropriate sign-in site, if the sign-in is successful we then look to see if the account has been identity proofed already via ID.me. This is determined by checking whether loa_current < loa_highest (typically loa_current will be 1 and loa_highest will be 3). LOA stands for Level of Assurance and is documented at [arch.idmanagement.gov](https://arch.idmanagement.gov/usecases/) and in  [Understanding LOA on VA.gov](understanding-LOA-on-vetsdotgov.md)

If loa_current < loa_highest, we immediately redirect the user to the verify endpoint on ID.me which fetches additional FICAM (Federal Identity, Credential, and Access Management) verified attributes in the SAML (Security Assertion Markup Language) payload. The SAML payload will include these additional attributes and whatever attributes were available from either MHV or DSLogon in the initial payload.
If loa_current is not less than loa_highest, then things get a little bit nuanced and will be enumerated below for each of the sign-in methods.

## My HealtheVet (MHV)

My HealtheVet has 3 basic account levels (more are on the way). These account levels are one of `Basic`, `Advanced`, and `Premium`.

VA.gov considers only a `Premium` account as sufficiently identity proofed to not require additional verification via ID.me to qualify as being LOA3. In short, `Premium` is essentially equivalent to LOA3.

This is a sample SAML response returned from via ID.me from MHV sign-in:

```ruby
          'mhv_icn' => ['1012853550V207686'],
          'mhv_profile' => ['{"accountType":"Premium","availableServices":{"21":"VA Medications","4":"Secure Messaging","3":"VA Allergies","2":"Rx Refill","12":"Blue Button (all VA data)","1":"Blue Button self entered data.","11":"Blue Button (DoD) Military Service Information"}}'],
          'mhv_uuid' => ['12345748'],
          'email' => ['kam+tristanmhv@adhocteam.us'],
          'multifactor' => ['false'],
          'uuid' => ['0e1bb5723d7c4f0686f46ca4505642ad'],
          'level_of_assurance' => []
```

The first 3 fields are derived entirely by MHV.

- `mhv_icn` - corresponds to the ICN used to query MPI.
- `mhv_profile` - a hash that includes the account level and a list of available services for querying MHV APIs.
- `mhv_uuid` - a primary key that is equivalent to `mhv_correlation_id`

The remaining 4 fields are ID.me specific attributes.

- `email` - is the email associated with the ID.me wallet at the time of sign-up.
- `multifactor` - is a boolean value that lets us know whether or not this wallet has multifactor enabled or not so that we could prompt the user to add it to their account when they visit their account profile page.
- `uuid` - this is a unique identifier that ID.me users, note that this is the SAME uuid that va.gov uses corresponding to the user session.
- `level_of_assurance` - this is the ID.me LOA, and this is used to determine whether or not loa_current < loa_highest (available), or whether or not we need to do the additional redirect through ID.me for FICAM verified attributes. If the user is `Advanced` or `Basic`, the user is characterized as being LOA1 until this verify step is completed. If a user has never completed the verify step and it is required for a service they wish to access, the FE will present the user with link to verify. This same URL is used for putting the user through the FICAM process whereby they verify SSN and other attributes and used for redirecting the user when loa_current < loa_highest.

### Complexities with MHV & the Master Veteran Index (MPI)

Because we do not receive baseline attributes in the SAML response from MHV we must query MPI for the same baseline attributes that are typically available for other sign-in methods.

Additionally, because we only query MPI when a user is LOA3, Basic and Advanced users who have not FICAM verified their accounts will only be identified by their email address upon sign-in.

The cannonical `first_name`, `last_name`, `ssn`, `date_of_birth` and other key attributes follow the following model of cannonicity

#### User is `Premium`

- If we can successfully query MPI with the ICN, then the attributes are derived from MPI.

#### User is `Advanced` or `Basic`

- If the user has previously identity proofed with ID.me, we will automatically fetch the needed attributes from ID.me but we will still use the ICN provided to query MPI. When this happens, we trust the FICAM attributes over anything that is provided by MPI, but we additionally check to make sure that SSN from the SAML attributes corresponds to those in MPI. If they do not, eventually, we will not allow this user to login.

- If the user has not previously identity proofed with ID.me we will derive all of our values from the SAML assertion. We do not do lookups in MPI if a user is not LOA3. These users will be prompted to verify their identity when they try to access a service that requires LOA3.

## DS Logon

DS Logon account levels that correspond to the NIST (National Institute of Standards and Technology) LOA levels, LOA1, LOA2, and LOA3. VA.gov considers LOA2 and LOA3 as being sufficiently verified and will allow these users the same level of access as LOA3 (defacto LOA3).

This is a sample SAML response returned via ID.me from DS Logon sign-in:

```ruby
    'dslogon_status' => ['SPONSOR'],
    'dslogon_assurance' => ['2'],
    'dslogon_gender' => ['male'],
    'dslogon_deceased' => ['false'],
    'dslogon_uuid' => ['1016980877'],
    'dslogon_birth_date' => ['1973-09-03'],
    'dslogon_fname' => ['KENT'],
    'dslogon_lname' => ['WELLS'],
    'dslogon_mname' => ['Mayo'],
    'dslogon_idtype' => ['ssn'],
    'dslogon_idvalue' => ['796178410'],
    'uuid' => ['cf0f3deb1b424d3cb4f792e8346a4d71'],
    'email' => ['fake.user@va.gov'],
    'multifactor' => ['false'],
    'level_of_assurance' => []
```

The first 11 of these fields in the SAML assertion (prefixed with dslogon_) are derived by DS Logon and should be mostly self explanatory. The remaining 4 fields are derived by ID.me and were previously described.

As mentioned before, dslogon_assurance of 2 or higher corresponds to va.gov LOA3. These users do not require FICAM identity verification through ID.me and va.gov will trust the attributes provided. Only an level of assurance of 1 would require verification.

### DS Logon & MPI

If a user signs in with either a dslogon_assurance of 2 or 3, or signs in with dslogon_assurance of 1 but has verified their identity through ID.me's FICAM process, these users are characterized as LOA3 by va.gov.

VA.gov will attempt to query MPI using an probabilistic search of MPI based on 4-5 qualifying components of their SAML assertion: first_name, last_name, ssn, birth_date, and gender. Failure to match MPI will result in the user not getting logged in. Furthermore, if the probabilistic search returns a result in which the SSN does not match the SSN of the SAML assertion precisely, the user will not be logged in and will encounter an error. If a query results in duplicate results being returned by MPI, this too, means that the user will not be logged in.

## ID.me

ID.me account levels correspond to the NIST LOA levels, LOA1, LOA2, and LOA3. VA.gov only ever receives one of LOA1 or LOA3 from ID.me

This is a sample SAML response returned from ID.me sign-in (some of these may be null depending on the level of assurance):

```ruby
      'uuid'               => ['1234abcd'],
      'email'              => ['john.adams@whitehouse.gov'],
      'fname'              => ['John'],
      'lname'              => ['Adams'],
      'mname'              => [''],
      'social'             => ['11122333'],
      'gender'             => ['male'],
      'birth_date'         => ['1735-10-30'],
      'level_of_assurance' => [3],
      'multifactor'        => ['true']
```

All of these fields in the SAML assertion are derived by ID.me and should be mostly self explanatory. 

Users having level_of_assurance of 3 correspond to va.gov LOA3. These users have already completed identity verification.

### ID.me & MPI

If a user signs in with either a level_of_assurance 3 or signs in with level_of_assurance 1 but has verified their identity through ID.me's FICAM process, these users are characterized as LOA3 by va.gov.

VA.gov will attempt to query MPI using a probabilistic search of MPI based on 4-5 qualifying components of their SAML assertion: first_name, last_name, ssn, birth_date, and gender. Failure to match MPI will result in the user not getting logged in. Furthermore, if the probabilistic search returns a result in which the SSN does not match the SSN of the SAML assertion precisely, the user will not be logged in and will encounter an error. If a query results in duplicate results being returned by MPI, this too, means that the user will not be logged in.



### VA Profile 
If MPI returns a vet360_id we can use it to get a user's contact information from VA-Profile (formerly Vet360).  

This is data from VA Profile we serialize to the User.  Consider (https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) the authoritative source of this documentation, under the vet360_contact_information attribute.
