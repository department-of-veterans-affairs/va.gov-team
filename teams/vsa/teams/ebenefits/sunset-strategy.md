# eBenefits: Sunset Strategy

``` diff 
- WIP: Please PR with changes
```

## Features Status for eBenefits

🚲 **[EBN Staging](https://pint.ebenefits.va.gov/domain1/mock-csp/index.jsp)** _(VA network only)_  
🚗 **[EBN dashboard](sqa.eauth.va.gov/ebenefits/apply)**   
✈ **[User EBN dashboard](sqa.eauth.va.gov/ebenefits/profile)**     
🚀 **[Performance Dashboard](https://app.datadoghq.com/dashboard/eih-ad2-764/ebenefits-migration-team-ebn?from_ts=1646849056120&to_ts=1646935456120&live=true)**   
📈 **[Analytics Dashboards](https://analytics.google.com/analytics/web/?authuser=1#/a50123418w177519031p176188361/report/dashboard)**    
🔥 **[Incident Response](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/dependency-claims/incident-response.md)**  _Sensitive_   

| Feature                                             | Portfolio     | Launch Status | Redirect Status (on EBN)    | Link to transition doc | --    | Notes 
| --------------------------------------------------- | ------------- | --------- | --------- | --------- | --------- | -----
| Submit Disability Comp (526ez Original Claim)       | vsa-bam-1     | **(COMPELETE 07072020)**        | Messaging with link to VA.gov; redirect install on Jan 20, 2022        | Transition doc (coming soon)        | --        | --
| Submit BDD Claim (526ez)                            | vsa-bam-1     | **(COMPELETE 15112020)**        | --        | Transition doc (coming soon)        | --        | --
| View Rated Disabilities                             | vsa-ebenefits | **(COMPELETE 05022020)**; redev to BGS FY2022        | Redirected        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/rated-disabilities-transition.md)        | --        | Requested with MR
| BGS Platform Integration                            | vsa-ebenefits | **(COMPELETE)**        | N/A        | Transition doc (coming soon)        | --  | --
| View Dependents on Award                            | vsa-ebenefits | **(COMPELETE)**        | Redirected on Nov 3, 2021        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/view-add-dependents-transition-design.md) | --  | --
| Modify Dependents (686c/ 674)                       | vsa-ebenefits | **(COMPELETE)**        | Redirected on Nov 3, 2021        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/view-add-dependents-transition-design.md) | --  | (EBN using 2014 686c), BGS integration
| Dependency Verification                             | vsa-ebenefits | **(COMPELETE)**        | N/A        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/dependency-verification/dep-ver-transition-design.md)  | -- | New CFO priority as of Q4 2020, depends on Modify Dependents
| Pension Automation: Dependency Claims               | vsa-ebenefits | **(COMPELETE)**        | Redirected on Nov 3, 2021        | Transition doc (coming soon) | -- | New USB priority as of Q4, inflates scope of Modify Dependents
| View My Payments                                    | vsa-ebenefits | **(COMPELETE 01082020)**        | Redirected        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/view-payments-transition.md)        | -- | No stakeholder POC
| Apply for PCPG CH36 (8832)                          | vsa-ebenefits | **(COMPELETE 01042020)**        | Redirected        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/README.md)        | -- | Jan 4 2021 launch via LoB request
| Apply for VRE CH31 (1900)                           | vsa-ebenefits | **(COMPELETE 05172020)**        | Redirected        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/research-design/ch31-transition-design.md) | -- | New VRE (CMS) integration was required; CMS pilot May 12 (Cleveland)
| Orientation for VRE CH31                            | vsa-ebenefits | **(COMPELETE)**         | N/A        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/research-design/ch31-transition-design.md) | -- | New VRE business requirement as of Q4
| Update Direct Deposit (EDU)                         | vsa-authd-exp | **(COMPELETE)**  | N/A | -- | -- | BGS Integration, new research
| View My Documents                                   | vsa-bam-2     | In discovery        | --        | --        | -- | Partially complete in Claim Status Tool, requires research on deltas
| View POA (Representative)                           | vsa-ebenefits | In dev        | --        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-POA/README.md) | -- | Lighthouse integration (BGS)
| Search for POA                                      | vsa-ebenefits | In dev        | --        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-POA/README.md) | -- | Lighthouse integration (BGS)
| Modify POA (22/ 22a)                                | vsa-ebenefits | In dev        | --        | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-POA/README.md) | -- | Lighthouse integration (BGS)
| Order Hearing Aid Batteries (2346)                  | vsa-bam-2     | **(COMPELETE 07202020)**        | Redirected        | --        | --        | --
| Order Prosthetic Socks (2345)                       | vsa-bam-2     | **(COMPELETE 07202020)**        | not yet redirected        | --        | --        | Deprecated with launch of Hearing Aids
| Calculate Home Loan Benefit                         | vsa-ebenefits | Not started | -- | -- | -- | Requires Discovery, possible new LGY integration required
| Request Certificate of Eligibility (1880)           | vsa-ebenefits | In dev | -- | [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/coe-transition-design.md) | -- | FE mostly done, waiting on BE / API
| View Specially Adapted Housing Grant Status         | vsa-ebenefits | In discovery | -- | [Transition Doc](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/vsa/teams/ebenefits/features/view-apply-SAHG/README.md) | -- | ~~Requires Discovery, possible new LGY integration required~~ ~~(confirmed to be shelved, per Randy Cope at LGY)~~   **No longer to be shelved, available for engagement**
| Apply for Specially Adapted Housing Grant (4555)    | vsa-ebenefits | In discovery | -- | [Transition Doc](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/vsa/teams/ebenefits/features/view-apply-SAHG/README.md) | -- | ~~Requires Discovery, possible new LGY integration required~~ ~~(confirmed to be shelved, per Randy Cope at LGY)~~   **No longer to be shelved, available for engagement**
| View Dependent Benefits Letter                      | combination   | **(COMPELETE)** | --        | --        | --        | [Location on VA.gov](https://staging.va.gov/records/download-va-letters/)
| _SEP Features Placeholder_                          | vsa-ebenefits           | Discovery complete        | --        | --        | --        | Hold for now per Matt Self and Dror M.

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

## Complete: External to VA.gov (non-VA specific)

| Feature
| ------
| VGLI/ SGLI Policy Management
| WAVE Enrollment Verification
| Join Burn Pit Registry
| Transfer Post-911 GI Bill Benefits

## WIP: EVSS Roadmap (Lighthouse has taken over this)

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


