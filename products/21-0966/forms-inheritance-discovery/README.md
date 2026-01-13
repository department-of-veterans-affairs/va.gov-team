# 21-0966 Form Inheritance Discovery

## Now (01/12/2026)

### Table of Contents

- [Design Findings](#design-findings)
- [Technical Findings](#technical-findings)
- [Level of Effort](#level-of-effort)
- [Next](#next)

## Design Findings

What are all the scenarios that each visitor type could submit this form for?

Veteran
* For themselves

Spouse
* For themselves
* On behalf of the Veteran?

Child
* For themselves
* On behalf of the Veteran?

Fiduciary
* On behalf of the Veteran
* On behalf of the spouse/child of a Veteran

Veteran Service Officer
* On behalf of the Veteran
* On behalf of the spouse/child of a Veteran

Alternate Signer
* On behalf of the Veteran
* On behalf of the spouse/child of a Veteran

Third-party
* On behalf of the Veteran
* On behalf of the spouse/child of a Veteran


**User flow**

There appears to be two different paths for these forms: one path via the public-facing va.gov website and a second specifically for accredited representatives.
Meeting with engineering lead Justin and another previous lead engineer on the accredited representative portal, determined that the forms are separate, the portal follows updates from the VA forms pool.

* Portal https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710857598969/32219746df15eb2602a01b1b3b1b3ccf9fa8760d

In Figma, there are two paths, our primary support will be for the VA.gov Form
VA.gov forms & Accredited Representatives on the portal

At this time, there are no open tickets
* https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues?q=label%3A21-0966



## Technical Findings


### I. Component and Pattern Modernization
**No** imposter component found within 21-0966
### II. Code Quality and Maintenance
#### ESLint and Manual Review

Missing prop validations
- `confirmVeteranPersonalInformation.js`

Importing libraries that are not being utilized
- `import React from 'react'` when React isn't being used

Missing page `types` to pages
* `veteranBenefitSelectionCompensation.js`
* `veteranBenefitSelectionPension.js`
### III. Documentation and Readability

#### Comments Review and Update

No comments are written in the files. 

Recommendation: Add comments throughout `*.js` and `*.unit.spec.jsx` files

### IV. Technical Debt and Other Fixes

#### Refactor moment.js to date-fns
Files that should update to utilized date-fns from moment.js (deprecated within 526)
* `confirmVeteranPersonalInformation.js`
#### Remove Unused Library
Files that requires removing unused libraries
- remove `import React from 'react'`
	- `confirmVeteranPersonalInformation.js`
	- `reviewVeteranEmailAddress.js`
	- `survivingDependentBenefitSelection.js`
	- `thirdPartyPreparerFullName.js`
	- `thirdPartyVeteranBenefitSelection.js`
	- `veteranBenefitSelection.js`
#### Add Prop validations
- `confirmVeteranPersonalInformation.js`
#### Incorrect File Extension
`src/applications/simple-forms/21-0966/routes.jsx` is utilizing jsx when there is not react code within this file. Refactor the name of the file to only `*.js`

#### **Security** Risks

**Finding:** As a user who has selected the option "I’m representing a Veteran who intends to file a VA claim" or "I’m representing a Veteran’s spouse or child who intends to file a VA claim (called the claimant in this form)" and goes through the intent to file, the user can unmask the veteran's social security number. This is a huge security concern.

**Recommendation:** Address the unmasking vulnerability and restrict signers from modifying Social Security numbers.

***Note:*** image below is on local with test data and no actual real person information.
**url:** `/supporting-forms-for-claims/intent-to-file-form-21-0966/veteran-identification-information

<img width="1402" height="852" alt="Image" src="https://github.com/user-attachments/assets/b4a97437-c555-4b79-8270-04ef03db42eb" />

### V. Lighthouse and Accessibility run

***Findings:*** Poor performance as was between 30-40 out of 100 on average. Accessibility was 100/100. Best practices was scored as 92/100. SEO scored a 91/100

**Recommendation:** Optimize form performance. Accessibility testing (Lighthouse and manual) shows no issues; however, performance metrics are below target. Identify and implement solutions to reduce load times and improve responsiveness.

**Report:** [Lighthouse Report.pdf](https://github.com/user-attachments/files/24571422/Lighthouse.Report.pdf)

### VI. Technical Debt Severity Prioritization


| Severity | Finding / Concern                                                                    | Recommendation                                                                                                                                                                                                                                                                                         | Rationale                                                                                                                                                            |
| -------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High     | Editing of veteran's social security number as someone who is representing a veteran | Audit signer permissions regarding SSN modification. If editing is possible: 1) Fix the data unmasking defect, and 2) Restrict SSN write-access to high-permission roles.                                                                                                                              | High-risk security finding: Direct exposure of PII and threat to data integrity. Failure to remediate carries a severe impact on compliance and institutional trust. |
| Medium   | Cypress test are currently being skipped                                             | Re-enable skipped Cypress tests in the CI pipeline once the form is successfully deployed to production.                                                                                                                                                                                               | ensure no regression testing with new integration of simple form                                                                                                     |
| Low      | Removal of unused libraries                                                          | Remove the `import React from 'react'` from files:<br><br>- `confirmVeteranPersonalInformation.js`<br>- `reviewVeteranEmailAddress.js`<br>- `survivingDependentBenefitSelection.js`<br>- `thirdPartyPreparerFullName.js`<br>- `thirdPartyVeteranBenefitSelection.js`<br>- `veteranBenefitSelection.js` | Standardized implementation according to modern best practices, providing a slight optimization to the production bundle                                             |
| Low      | Refactor moment.js to date-fns                                                       | Utilize `date-fns` centralized date utility in 526 and remove deprecated use of moment.js in file `confirmVeteranPersonalInformation.js`                                                                                                                                                               | Refactor code to utilize date-fns as moment.js (deprecated from 526)                                                                                                 |
| Low      | Minimal to no comments throughout 0966                                               | Add comments throughout `*.js` and `*.unit.spec.jsx` files                                                                                                                                                                                                                                             | Standardized implementation according to modern best practices                                                                                                       |
| Low      | Missing Prop validations                                                             | Add Prop validations for `confirmVeteranPersonalInformation.js`                                                                                                                                                                                                                                        | Standardized implementation according to modern best practices                                                                                                       |
| Low      | Missing page `types`                                                                 | Add page `types` to the schema's in files:<br>* `veteranBenefitSelectionCompensation.js`<br>* `veteranBenefitSelectionPension.js`                                                                                                                                                                      | Standardized implementation according to modern best practices                                                                                                       |



## Level of Effort

Teams often start with T-shirt sizes during early planning, then refine into story points later.

* 👕 Design = Small
* 👕 Content = Small
* 👕 Monitoring = Medium
* 👕 Engineering = Large


## Next

* Write tickets for epic
* Identify research opportunities
* Review user stories and writing KPI's
* Plan roadmap
