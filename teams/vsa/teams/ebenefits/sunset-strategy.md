# eBenefits: Sunset Strategy

``` diff 
- **WIP:** Please PR with changes
```

## Features Status for eBenefits

_Targets are dates in FY2020 unless otherwise noted, and indicated by fiscal quarters (Q2 = Jan, Feb, Mar 2020, etc.)_  
**EBN dashboard:** sqa.eauth.va.gov/ebenefits/apply  
**User EBN dashboard:** sqa.eauth.va.gov/ebenefits/profile  

| Feature                                             | Portfolio     | Launch Status | Redirect Status (on EBN)    | --       | --    | Notes 
| --------------------------------------------------- | ------------- | --------- | --------- | --------- | --------- | -----
| Submit Disability Comp (526ez Original Claim)       | vsa-bam-1     | **(COMPELETE 07072020)**        | Messaging with link to VA.gov; redirect install on Jan 20, 2022        | --        | --        | --
| Submit BDD Claim (526ez)                            | vsa-bam-1     | **(COMPELETE 15112020)**        | --        | --        | --        | --
| View Rated Disabilities                             | vsa-ebenefits | **(COMPELETE 05022020)**; redev to BGS FY2021        | Ready for redirect        | --        | --        | --
| BGS Platform Integration                            | vsa-ebenefits | **(COMPELETE)**        | N/A        | --        | --  | --
| View Dependents on Award                            | vsa-ebenefits | **(COMPELETE)**        | Redirected on Nov 3, 2021        | --        | --  | --
| Modify Dependents (686c/ 674)                       | vsa-ebenefits | **(COMPELETE)**        | Redirected on Nov 3, 2021        | --        | --  | (EBN using 2014 686c), BGS integration
| Dependency Verification                             | vsa-ebenefits | **(COMPELETE)**        | N/A        | --  | -- | New CFO priority as of Q4 2020, depends on Modify Dependents
| Pension Automation: Dependency Claims               | vsa-ebenefits | **(COMPELETE)**        | Redirected on Nov 3, 2021        | -- | -- | New USB priority as of Q4, inflates scope of Modify Dependents
| View My Payments                                    | vsa-ebenefits | **(COMPELETE 01082020)**        | Redirected        | --        | -- | No stakeholder POC
| Apply for PCPG CH36 (8832)                          | vsa-ebenefits | **(COMPELETE 01042020)**        | Redirected        | --        | -- | Jan 4 2021 launch via LoB request
| Apply for VRE CH31 (1900)                           | vsa-ebenefits | **(COMPELETE 05172020)**        | Redirected        | --        | -- | New VRE (CMS) integration was required; CMS pilot May 12 (Cleveland)
| Orientation for VRE CH31                            | vsa-ebenefits | **(COMPELETE)**         | --        | -- | -- | New VRE business requirement as of Q4
| Update Direct Deposit (EDU)                         | vsa-authd-exp | **(COMPELETE)**  | -- | -- | -- | BGS Integration, new research
| View My Documents                                   | vsa-bam-2     | --        | --        | --        | -- | Partially complete in Claim Status Tool, requires research on deltas
| View POA (Representative)                           | vsa-ebenefits | In dev        | --        | -- | -- | Lighthouse integration (BGS)
| Search for POA                                      | vsa-ebenefits | In dev        | --        | -- | -- | Lighthouse integration (BGS)
| Modify POA (22/ 22a)                                | vsa-ebenefits | In dev        | --        | -- | -- | Lighthouse integration (BGS)
| Order Hearing Aid Batteries (2346)                  | vsa-bam-2     | **(COMPELETE 07202020)**        | Redirected        | --        | --        | --
| Order Prosthetic Socks (2345)                       | vsa-bam-2     | **(COMPELETE 07202020)**        | not yet redirected        | --        | --        | Deprecated with launch of Hearing Aids
| Calculate Home Loan Benefit                         | vsa-ebenefits | Not started | -- | -- | -- | Requires Discovery, possible new LGY integration required
| Apply for Certificate of Eligibility (1880)         | vsa-ebenefits | In dev | -- | -- | -- | Requires Discovery, possible new LGY integration required
| View Specially Adapted Housing Grant Status         | vsa-ebenefits | Not started | -- | -- | -- | ~~Requires Discovery, possible new LGY integration required~~ ~~(confirmed to be shelved, per Randy Cope at LGY)~~   **No longer to be shelved, available for eneagement**
| Apply for Specially Adapted Housing Grant (4555)    | vsa-ebenefits | Not started | -- | -- | -- | ~~Requires Discovery, possible new LGY integration required~~ ~~(confirmed to be shelved, per Randy Cope at LGY)~~   **No longer to be shelved, available for eneagement**
| View Dependent Benefits Letter                      | combination   | Q2 FY2021 | --        | --        | --        | [Confirm complete?](https://staging.va.gov/records/download-va-letters/)
| _SEP Features Placeholder_                          | TBD           | --        | --        | --        | --        | --

## Complete: Applications and Features

| Feature
| ------
| View My Payments 28122020
| Apply for PCPG CH36 (8832) 28122020
| View Rated Disabilities 05022020
| Discover State Benefit info 23062020
| Order Hearing Aid Batteries (2346) 07202020
| View Claim Status
| View DIC Claim Status 
| View Appeal Status                         
| View Decision Review Status                    
| Apply for Disability Compensation (Prior Claimant)
| Upload Supporting Documents for Disability Claim
| Update Personal Contact Information 
| Update Direct Deposit (Comp & Pen)
| Download VA Letters
| View Post GI Bill Enrollment Status and Entitlement

## Complete: Links to Other Systems

| Feature
| ------
| VGLI/ SGLI Policy Management
| WAVE Enrollment Verification
| Join Burn Pit Registry
| Transfer Post-911 GI Bill Benefits

## WIP: EVSS Roadmap

| Service                                             | Notes 
| --------------------------------------------------- | -----
| rated_disabilities                                  | Ready for deprecation
| dependents                                          | May be deprecated once 686c is launched
| disability_compensation_form                        | Needs migration plan
| gi_bill_status                                      | Needs migration plan
| intent_to_file                                      | Matching BGS service
| letters                                             | Needs migration plan
| pciu                                                | Migrate to fallback strategy of VA-Profile > BGS::EbenefitsAddressUpdateWebService
| pciu_address                                        | Migrate to fallback strategy of VA-Profile > BGS::EbenefitsAddressUpdateWebService
| ppiu                                                | Matching BGS service for both Comp and Ch33
| reference_data                                      | Needs migration plan
| vso_search                                          | May be deprecated as part of 21-22/a work


