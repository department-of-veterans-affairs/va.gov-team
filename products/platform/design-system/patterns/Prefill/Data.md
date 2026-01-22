# Prefill Data - Frequently Asked Questions

Last updated: 11/03/2025

Definitions:
- **VA.gov Profile:** This is what the Veteran sees and interacts with. It contains user information including personal information and account settings. It focuses on allowing users to view and manage their information and preferences for the VA. (https://www.va.gov/profile) slack: #accountexp-authexp
- **VA Profile team:** API team. They handle all the data storage and management. slack: #va-profile
- **My VA** is the personalized authenticated homepage. It focuses on personalized, dynamic, actionable user tasks that are time sensitive. (this is not the same as VA.gov/profile)
- **ICN** Integrated Control Number. Format 17 alpha-numeric internal control number (ICN) [format: 10 digits + "V" + 6 digits] 
- **MPI** MPI is the authoritative identity service within VA, establishing, maintaining and synchronizing identities for all VA persons of interest (e.g. veterans, beneficiaries, dependents, employees, contractors, health professional trainees). ([Source](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000303997/M22-4-Addendum-Glossary-Appendix-B-Common-Terminology?query=ICN#M))

**1. Is it true that if a person is LOA3 verified, VA.gov profile has name, dob, ssn data to display to Veterans?**   
   - **This is mostly correct**.
   - VA.gov/profile will always have last name. (and probably a first name, but not always, as not everyone has a first name)
   - VA.gov/profile will likely always have full birthday due to the requirements in ID.me and Login.gov, but legacy systems like BIRLS may only have birth month and birth year, but not birth date
   - VA.gov/profile may not always have an SSN due to out of country Benefit recepients; Users who sign up with ID.me & login.gov will have an SSN is as it is required; MHV login did not require SSN. But VA.gov/profile will not display the SSN to the user. 
   - Digitized Forms that use central mail, would be rejected without a first name, or an SSN/File Number. 

**2. If VA.gov/profile is only displaying data, where is all of the various bits of data coming from?**
   - [See data sources in this sharepoint doc](https://dvagov.sharepoint.com/:x:/r/sites/AuthenticatedExperience2/Shared%20Documents/AE%20Governance/2025%20Profile%20Features.xlsx?d=w0b56d65e21674dab9ff8cd2e84f69ab2&csf=1&web=1&e=58gbK5)
     
**3. What information does the ID.Me or Login.gov service pass on to VA.gov/profile (to display & update) or the VA API Profile (to store) (if anything)?**
   - There is no automagic connection between ID.me or Login.gov; they are disconnected once the credential handshake takes place.

**4. What is the minimum amount of information an LOA1 user can see/interact with and add to their VA.gov/profile ?**
   - LOA1 users do not see their profile on VA.gov. They're forced into Account security and can't access the profile. Due to this LOA1 users cannot edit or see any information we have on file for them in their profile.

**5. What is the minimum amount of information an LOA3 user can see/interact with and add to their VA.gov/profile ?**

**6. What is MPI?**
   - MPI = Master Person Index
   - [Master Patient Index/Patient Demographics Technical Manual](https://www.va.gov/vdl/documents/Infrastructure/Master_Patient_Index_(MPI)/rg1_0_pm.pdf)
   > Regarding the Master Person Index (MPI), the VHA Directive 1906 describes MPI's role as the authoritative source for personal identity information in VA health IT systems. It outlines how changes (e.g., address, date of death) are managed for consistency and synchronization across VA systems. ([Source](https://www.va.gov/VHAPUBLICATIONS/ViewPublication.asp?pub_ID=8787))
   
**7. How does MPI interact with VA.gov/profile?  How does MPI interact with VA Profile API?**   
    - VA.gov/profile does not interact with MPI
    - VA Profile API uses MPI as the authoritiative source. We have 1:1 correlation when everything is working correctly

**8. Do Veterans who have never interacted with Veteran Health IT Systems have an MPI?**   
   - Generally, no. Veterans who have never interacted with VA health systems typically do not have a record in the VA MPI
   - HOWEVER, some individuals who have never sought VA health care may still have an MPI record if their info came from external sources (for example, DEERS feeds or certain VBA corporate data exchanges). In those cases, an ICN can be assigned. 

**9. What percentage of VA.gov/profile or VA Profile API have the following information:**   
   - Full name - Have to ask MPI
   - DoB - Have to ask MPI
   - SSN - Have to ask MPI
   - Address: 96%
   - Any telephone number: 86%
   - Email address: 72%

**10. If a person has an ICN, does that mean they are LOA3?**   
Yes, if the person is LOA3 on va.gov, they have an ICN. You should never have a person as LOA3 on va.gov that does not have an ICN. There are situations where MPI might be down (the source of ICN) and we wouldnt have an ICN, but this doesnt mean they dont have a verified account.

## Table showing the difference between no auth, loa 1, loa 3

|                | No Auth | LOA 1  | LOA 3 |
|----------------|---------|--------|-------|
| VA.gov/Profile | ❌      | ❌     | ✅     | 
| Prefill        | ❌      | ❌     | ✅     |
| My VA          | ❌      | ✅     | ✅     |
| Form statuses  | ❌      | ✅     | ✅     |
  

## Forms and their authentication level
    
| Form Number | Auth Level | New prefill | Old Prefill | No prefill |
|-------------|------------|-------------|-------------|------------|
| [686c-674](https://staging.va.gov/manage-dependents/add-remove-form-21-686c)                                                             | LOA3 | | ✅  | |
| [5655 Financial Status Report](https://staging.va.gov/manage-va-debt/request-debt-help-form-5655)                                        | LOA3 | | | |
| [10182](https://staging.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182)                                            | LOA3 | | ✅ | |
| [10-10CG](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg)    | LOA3 | | | |
| [10-10D](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/champva/apply-form-10-10d)                           | No Auth + LOA1 |  |✅ | |
| [10-10EZ](https://staging.va.gov/health-care/apply-for-health-care-form-10-10ez)                                                         | No Auth + LOA1 |  |✅ | |
| [10-10EZR](https://staging.va.gov/my-health/update-benefits-information-form-10-10ezr)                                                   | LOA3 | |  ✅ | |
| [10-7959A](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/champva/file-champva-claim-10-7959a)               | No Auth + LOA1 | | ✅ | |
| [10-7959C](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c)      | No Auth + LOA1 || ✅  | |
| [10-7959f-1](https://staging.va.gov/health-care/foreign-medical-program/register-form-10-7959f-1)                                        | LOA1 | | ✅ | |
| [10-7959f-2](https://staging.va.gov/health-care/file-foreign-medical-program-claim/file-claim-form-10-7959f-2)                           | LOA3 | | ✅ | |
| [20-0995](https://staging.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995)                               | LOA3 | | ✅ | |
| [20-0996](https://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996)                          | LOA3 | | ✅ | |
| [20-10206](https://staging.va.gov/records/request-personal-records-form-20-10206)                                                        | LOA3 | | | |
| [20-10207](https://staging.va.gov/supporting-forms-for-claims/request-priority-processing-form-20-10207)                                 | LOA3 | | | |
| [21A](https://staging.va.gov/representative/accreditation/attorney-claims-agent-form-21a)                                                | LOA3 |  | ✅ | |
| [21-22/21-22A](https://staging.va.gov/decision-reviews/get-help-with-review-request)                                                     | LOA3 |  | ✅ | |
| [21-4142](https://staging.va.gov/supporting-forms-for-claims/release-information-to-va-form-21-4142)                                     | LOA3 | | | |
| [21-0845](https://staging.va.gov/supporting-forms-for-claims/third-party-authorization-form-21-0845)                                     | LOA3 | | | |
| [21-0966](https://staging.va.gov/supporting-forms-for-claims/intent-to-file-form-21-0966)                                                | LOA3 | | ✅ | |
| [21-0972](https://staging.va.gov/supporting-forms-for-claims/alternate-signer-form-21-0972)                                              | LOA1 | | | |
| [21-10210](https://staging.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210)                                       | LOA1 | | | |
| [21P-0537](https://staging.va.gov/supporting-forms-for-claims/marital-status-questionnaire-21p-0537)                                         | No Auth + LOA1 |  | ? | |
| [21P-0847](https://staging.va.gov/supporting-forms-for-claims/substitute-claimant-form-21P-0847)                                        | No Auth + LOA1 | | | |
| [21P-526EZ](https://staging.va.gov/disability/file-disability-claim-form-21-526ez)                                                       | LOA3 | | ✅ | |
| [21P-527EZ](https://staging.va.gov/pension/apply-for-veteran-pension-form-21p-527ez)                                                     | LOA3 | | ✅ | |
| [21P-530ez](https://staging.va.gov/burials-memorials/veterans-burial-allowance/apply-for-allowance-form-21p-530ez)                       | LOA1 | | ✅ | |
| [21P-530](https://staging.va.gov/burials-and-memorials/application/530)                                                                  | LOA3 | | ✅ | |
| [22-1990](https://staging.va.gov/education/apply-for-gi-bill-form-22-1990)                                                               | LOA1 | | ✅ | |
| [22-1990e](https://staging.va.gov/family-and-caregiver-benefits/education-and-careers/transferred-gi-bill-benefits/apply-form-22-1990e)  | LOA1 | | ✅ | |
| [22-1995](https://staging.va.gov/education/apply-for-education-benefits/application/1995)                                                | No Auth + LOA1 | | ✅ | |
| [22-5490](https://staging.va.gov/family-and-caregiver-benefits/education-and-careers/apply-for-dea-fry-form-22-5490)                     | LOA1 | | ✅ | |
| [22-5495](https://staging.va.gov/education/apply-for-education-benefits/application/5495)                                                | No Auth + LOA1 | | | |
| [22-10203](https://staging.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203)            | No Auth + LOA1 | | ✅ | |
| [22-10215](https://staging.va.gov/school-administrators/85-15-rule-enrollment-ratio)                                                         | No Auth + LOA1 | | | |
| [22-10275](https://staging.va.gov/school-administrators/commit-principles-of-excellence-form-22-10275)                                    | No Auth + LOA1 | | | |
| [22-10297](https://staging.va.gov/education/other-va-education-benefits/vet-tec-2/apply-for-program-form-22-10297)                        | LOA1 |  | ✅ | |
| [22-10282](https://staging.va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282)                        | No Auth + LOA1 | | | |
| [25-8832](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-25-8832)                    | LOA1 | | | |
| [26-1880](https://staging.va.gov/housing-assistance/home-loans/request-coe-form-26-1880)                                                   | LOA1 | | | |
| [26-4555](https://staging.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555)                              | LOA1 |  | ✅ | |
| [28-1900](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900)                                    | LOA3 |  | ✅ | |
| [40-0247](https://staging.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/request-certificate-form-40-0247)    | No Auth | | | |
| [40-10007](https://staging.va.gov/burials-memorials/pre-need-eligibility/apply-for-eligibility-form-40-10007)                            | LOA3 |  | ✅ | |
| [After visit summary](https://staging.va.gov/my-health/medical-records/summaries-and-notes/visit-summary)                                | LOA3 | | | |
| [Appointments](https://staging.va.gov/my-health/appointments)                                                                            | LOA3 | | | |
| [Ask VA](https://staging.va.gov/contact-us/ask-va)                                                                                       | No Auth + LOA1 |  | ✅ | |
| [Check-in](https://staging.va.gov/health-care/appointment-check-in)                                                                        | No Auth | | | |
| [Claims Status](https://staging.va.gov/track-claims)                                                                                     | LOA1 | | | |
| [COVID Screener](https://staging.va.gov/covid19screen)                                                                                   | No Auth | | | |
| [COVID Vaccination](https://staging.va.gov/health-care/covid-19-vaccine)                                                                 | No Auth | | | |
| [Coronavirus Research](https://staging.va.gov/coronavirus-research/volunteer)                                                            | No Auth | | | |
| [Debt](https://staging.va.gov/manage-va-debt/summary)                                                                                    | LOA1 | | | |
| [Decision Review onramp](https://staging.va.gov/decision-reviews/explore-disability-claim-decision-review-options)                             | No Auth | | | |
| [Discharge Wizard](https://staging.va.gov/discharge-upgrade-instructions/introduction/)                                                    | No Auth | | | |
| [Discover Your Benefits](https://staging.va.gov/discover-your-benefits)                                                                     | No Auth | | | |
| [Education 35% exemption](https://staging.va.gov/school-administrators/35-percent-exemption)                                 | No Auth | | | |
| [Education Letters](https://staging.va.gov/education/download-letters/letters)                                                           | LOA1 | | | |
| [Enrollment verification](https://staging.va.gov/education/verify-school-enrollment/enrollment-verifications)                             | LOA1 | | | |
| [Form Upload](https://staging.va.gov/find-forms/upload)                                                                                  | LOA3 |  | ✅ | |
| [GI Bill Comparison](https://staging.va.gov/education/gi-bill-comparison-tool)                                                           | No Auth | | | |
| [GI Bill School Feedback Tool](https://staging.va.gov/education/submit-school-feedback)                                                        | No Auth + LOA1 |  | ✅ | |
| [GI Bill Status](https://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit)                                                       | LOA1 | | | |
| [Hearing Aid Batteries](https://staging.va.gov/health-care/order-hearing-aid-or-CPAP-supplies-form)                                      | LOA3 |  | ✅ | |
| [Health Questionnaire](https://staging.va.gov/health-care/healthcare-questionnaire)                                                      | No Auth | | | |
| [Income Limits](https://staging.va.gov/health-care/income-limits)                                                                           | No Auth | | | |
| [Letters](https://staging.va.gov/records/download-va-letters)                                                                            | LOA1 | | | |
| [MHV Medical Records](https://staging.va.gov/my-health/medical-records)                                                                  | LOA3 | | | |
| [MHV Medications](https://staging.va.gov/my-health/medications)                                                                          | LOA3 | | | |
| [MHV Secure Messaging](https://staging.va.gov/my-health/secure-messages)                                                                 | LOA3 | | | |
| [MHV](https://staging.va.gov/my-health)                                                                                                  | LOA3 | | | |
| [My VA](https://staging.va.gov/my-va)                                                                                                    | LOA1 | | | |
| [Payment History](https://staging.va.gov/va-payment-history/payments)                                                                    | LOA1 | | | |
| [Rated Disabilities](https://staging.va.gov/disability/view-disability-rating/rating)                                                      | LOA1 | | | |
| [Travel Pay](https://staging.va.gov/my-health/travel-pay)                                                                                | LOA3 | | | |
| [VA Profile](https://staging.va.gov/profile)                                                                                             | LOA1 | | | |
| [Yellow Ribbon](https://staging.va.gov/school-administrators/submit-yellow-ribbon-program-agreement-form-22-0839)                        | No Auth | | | |
| [VA Home loan](https://staging.va.gov/housing-assistance/home-loans/check-coe-status/your-coe)                                             | LOA1 | | | |
| [Virtual Agent](https://staging.va.gov/contact-us/virtual-agent)                                                                           | LOA1 | | | |



## Summary

- **LOA3: 29 forms** (high-security, requires full identity verification)
- **LOA1: 12 forms** (requires basic authentication only)
- **No Auth + LOA1: 22 forms** (accessible without auth, enhanced with basic login)
- **No Auth: 14 forms** (purely unauthenticated access)
- **Prefill: 32 fprms** (0 following new pattern)








   
 
