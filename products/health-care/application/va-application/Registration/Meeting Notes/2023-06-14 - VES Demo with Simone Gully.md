## 6/14/2023 VES demo with Simone Gully (care of VES Modernization team!)

### Notes
- Simone Gully provided demo of how to add a Veteran for Enrollment in VES

- Search - SSN, LN, FN, Birth sex
     - Add new person (if not found)
     - Enter everything on application
          - Includes Veteran indicator (Y, N)
          - Enrollment route = Y
          - Do not use Address fields, use something else for validation
     - Search done to see if any possible matches, if none then “add”
          - Search VBA for any other possible matches with service history

- After adding, go to eligibility (then demographics, then enrollment = Left to Right, Top to Bottom)
     - Veteran indicator Y/N carries over
     - Enrollment path = Y to Do you wish to enroll
     - Once set, it must be cancelled or declined before changing to No, MUST BE IN WRITING BEFORE CANCELLING/DECLINING - Painpoint for Veteran
     - Eligibility status - Enrollment = Pending Verification (always)
          - For Registration Only = Verified
     - Reason - for adding new person, always select “Pending proof of military service”
          - If Reg Only = Verified, Reason disappears
- Identity Traits tab (MVI owns this term) - One hour allowed to complete page and details
     - If a change is needed after one hour, must open MVI Toolkit ticket to have the data corrected
     - Name, SSN, Birth sex, SIGI, DOB, Place of Birth CIty and state, Mother maiden name, race, ethnicity
     - Pseudo SSN reason is used only when non-veteran
- Personal tab
     - Emergency response used as directed (last time was hurricane katrina)
     - Benefit applied for - dropdown = enrollment (has other options like dental)
     - Revenue team will manage indian health question
     - Employment status - this is not on Online form
          - Asks for employer, and address info
- Address tab
     - Enter Mailing address first
          - If homeless or no address, enter facility address and have Other for Bad address reason (indicator)
          - If mail comes back, bad address reason = undeliverable
          - There is a field for “Source of change” - VAMC, HEC, etc
               - If VAMC, must enter Site
          - Mailing and Residential are required
          - If provided PO Box only, Residential address will be the Facility
     - Confidence level should be above 80% on address validation
Can still add even if not found
- Associates tab
     - If provided (not on online form)
     - NoK, Emergency contact, Guardian, Attorney (POA or other legal representative)
- Insurance
     - Private and Medicare
- Save input, then perform searches again with all data partners to see if 
- Military tab
     - If data was found from VBA, will populate (including whether they are active duty)
     - Discharge due to disability and Military Disability retirement questions are either verified with VBA or DD214
     - Agent Orange and Radiation dropdowns used for Pact Act
     - Eligible for Class II Dental Y/N = 90 days from separation date to receive dental care
     - Getting ready to add “Uncharacterized” to the discharge character list
     - Period of service is based on separation date
- Financial tab
     - Income year already set (last year, no matter what the current date is)
     - SSN is required for dependents including spouse for income verification
     - Test effective date = application signature date
     - Facilities approve hardships
     - IVM - if done, data would be shown
     - Co-pay exempt/non-exempt will show
     - Means test will show if dr visit copay is exempt
     - Thresholds are based on residential address
- Eligibility tab
     - Verify record
     - If priority group 8B or 8G, keep on Pending Verification
     - Active duty, blue water, demobilization, OTH and Pact will stay on Pending
     - When changing to verified, method (DD214, etc) is entered
     - Must have service connected evaluation (most recent) with disability rating
     - Have to add SC disabilities for calculations for Community care and Copays
     - Can enter other non-veteran indicators (if Veteran and employee for example)


