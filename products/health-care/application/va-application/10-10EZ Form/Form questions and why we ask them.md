## Form questions and why we ask them
- Last updated: 7/10/2024 by Heather Justice (@hdjustice)

Below is a chart of all the 10-10EZ form questions, why we ask them and a resource for the information (notes, Mural, Stakeholder name, etc), if available.  This can be updated by anyone at anytime when a reason is provided or a field is being removed or added.

---

<details>
  <Summary>Veteran Info</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Veteran Info| First Name | Y | Y | We need to know the Veteran's name for ID verification| Seems obvious? |
|Veteran Info| Middle Name | N | Y |Assists with differentiating from other Veterans with similar first & last names | Seems obvious? |
|Veteran Info| Last Name | Y | Y |We need to know the Veteran's name | Seems obvious? |
|Veteran Info| Suffix | N | Y |Assists with differentiating from other Veterans with similar names | Seems obvious? |
|Veteran Info| Date of birth | Y | Y |We need to know the Veteran's DOB for ID verification | Seems obvious? |
|Veteran Info| Social Security Number | Y | Y |We need to know the Veteran's SSN for ID verification | Seems obvious? |
|Veteran Info| Confirm your information before you continue | Y | N |This is a read-only page that appears for both auth & unauth users, consistency and to avoid the duplicate question pattern we had before for unauth users | [GH Ticket #63312](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63312) |
|Veteran Info| (Birth) City | N | N | **Believe it is for additional ID purposes** | **TBD** |
|Veteran Info| (Birth) State/Province/Region | N | N | **Believe it is for additional ID purposes** | **TBD** |
|Veteran Info| Mother's Maiden Name | N | N | **Believe it is for additional ID purposes** | **TBD** |
|Veteran Info| What sex were you assigned at birth | Y | Y | **TBD** | **TBD** |
|Veteran Info| What is your race, ethnicity or origin | N | N | **TBD** | **TBD** |

</details>

<details>
  <Summary>Veteran Mailing Address</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Mailing Address|Country | Y | Y |To send decision letters, enrollment handbook and any other important health related information| **TBD**
|Mailing Address| Street Address | Y | Y |Same as above | Same as above
|Mailing Address| Street Address Line 2 | N | Y |Same as above | Same as above
|Mailing Address| Street Address Line 3 | N | Y | Same as above | Same as above
|Mailing Address| City | Y | Y |Same as above | Same as above
|Mailing Address| State/Province/Region | Y | Y | Same as above | Same as above
|Mailing Address| Postal Code | Y | Y |Same as above | Same as above
|Mailing Address| Is your home address the same as your mailing address? | Y | N | Veterans who reside outside of the U.S. can get VA care through the VA Foreign Medical Program, we need to know if they reside inside or outside of the U.S.| [Veterans Living Abroad - VA page](https://www.benefits.va.gov/persona/veteran-abroad.asp#:~:text=Getting%20healthcare%20overseas,treatment%20of%20service%2Dconnected%20disabilities.)

</details>

<details>
  <Summary>Veteran Home Address</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Home Address|Country | Y | Y | Veterans who reside outside of the U.S. can get VA care through the VA Foreign Medical Program, we need to know if they reside inside or outside of the U.S.| [Veterans Living Abroad - VA page](https://www.benefits.va.gov/persona/veteran-abroad.asp#:~:text=Getting%20healthcare%20overseas,treatment%20of%20service%2Dconnected%20disabilities.)
|Home Address| Street Address | Y | Y | Same as above | Same as above
|Home Address| Street Address Line 2 | N | Y | Same as above | Same as above
|Home Address| Street Address Line 3 | N | Y | Same as above | Same as above
|Home Address| City | Y | Same as above | Y | Same as above
|Home Address| State/Province/Region | Y | Y | Same as above | Same as above
|Home Address| Postal Code | Y | Y | Same as above | Same as above

</details>

<details>
  <Summary>Veteran Contact info</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Contact Info|Email Address | N | Y | We will use email as another means of communication, especially for application submission statuses (success & failure)| **TBD**|
|Contact Info|Home telephone number | N | Y | We will use home phone as another means of communication | **TBD**|
|Contact Info|Mobile telephone number | N | N? | We will use mobile phone as another means of communication | **TBD**|

</details>

<details>
  <Summary>Veteran VA Compensation</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Compensation | Do you recive VA disability compensation?| Y | N (can be autodetected at the start of the application) | Determine Short form flow, benefits eligibility/priority group, copays | **TBD**|
|Compensation|Do you receive a Veterans pension from the VA?| Y | N | Determine benefits eligibility/priority group, copays | **TBD**|

</details>

<details>
  <Summary>Veteran Service History</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Svc History|Last branch of service | Y | Y | **TBD** | **TBD** |
|Svc History|Service start date | Y | Y | **TBD** | **TBD** |
|Svc History|Service end date | Y | Y | **TBD** | **TBD** |
|Svc History|Character of service | Y | Y | **TBD** | **TBD** |
|Svc History|Service History (check boxes) | N | Y, Southwest Asia and post-November 1998 items| Determine benefits eligibility/priority group, copays | **TBD**|

</details>

<details>
  <Summary>Toxic Exposure</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Toxic Exposure| Do you want to answer questions about your military service history and exposure to any toxins or other hazards?| Y | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|Did you take part in any of these cleanup or response efforts | N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|Did you serve in any of these Gulf War locations?| N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|(GW Locations) Service start date| N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|(GW Locations) Service end date| N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|Were you deployed in support of any of these operations?| N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|Did you serve in any of these locations where the military used the herbicide Agent Orange?| N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|Have you been exposed to any of these toxins or hazards?| N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|Enter any toxins or hazards you’ve been exposed to | N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|(Other toxins) Exposure start date |N | N | Determine benefits eligibility/priority group, copays | **TBD**|
|Toxic Exposure|(Other toxins) Exposure end date |N | N | Determine benefits eligibility/priority group, copays | **TBD**|

</details>

<details>
  <Summary>File Upload</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|File Upload|Upload your discharge papers | N | N | Helps staff to verify military service and speed up application process | **TBD**|

</details>

<details>
  <Summary>Financial Disclosure</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household|Do you want to share your household financial information?| Y | N | Determine benefits eligibility/priority group, copays | **TBD**|

</details>

<details>
  <Summary>Spouse info</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Spouse| First name|Y| N |TBD** | **TBD**|
|Household-Spouse| Middle name|N| N |TBD** | **TBD**|
|Household-Spouse| Last name|Y| N |TBD** | **TBD**|
|Household-Spouse| suffix|N| N |TBD** | **TBD**|
|Household-Spouse| Date of birth|Y| N | **TBD** | **TBD**|
|Household-Spouse| Date of marriage|Y| N | **TBD** | **TBD**|
|Household-Spouse|Did you live with your spouse for all or part of 2023?|Y| N | Determine whether the Spouse is a dependent in the previous year, which can have an impact on income thresholds and copays | **TBD**|
|Household-Spouse|Do you currently have the same address as your spouse?|Y| N | Determine whether the Spouse is a dependent in the previous year, which can have an impact on income thresholds and copays | **TBD**|
|Household-Spouse|Did you provide financial support to your spouse in 2023 even though you didn’t live together?|Y| N | Determine whether the Spouse is a dependent in the previous year, which can have an impact on income thresholds and copays | **TBD**|
|Household-Spouse|Country | Y | N | To send decision letters, enrollment handbook and any other important health related information| **TBD**
|Household-Spouse| Street Address | Y | N | **TBD** | **TBD**|
|Household-Spouse| Street Address Line 2 | N | N | **TBD** | **TBD**|
|Household-Spouse| Street Address Line 3 | N | | N | **TBD** | **TBD**|
|Household-Spouse| City | Y | N | **TBD** | **TBD**|
|Household-Spouse| State/Province/Region | Y | N | **TBD** | **TBD**|
|Household-Spouse| Postal Code | Y | N | **TBD** | **TBD**|
|Household-Spouse| Phone number | Y | N | **TBD** | **TBD**|

</details>

<details>
  <Summary>Dependent info</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Dependent| Do you have any/another dependents to report? | Y | N | **TBD** | **TBD**|
|Household-Dependent| First name|Y| N | **TBD** | **TBD**|
|Household-Dependent| Middle name|N| N | **TBD** | **TBD**|
|Household-Dependent| Last name|Y| N | **TBD** | **TBD**|
|Household-Dependent| suffix|N| N | **TBD** | **TBD**|
|Household-Dependent| What is the dependent’s relationship to you?|Y| N | **TBD** | **TBD**|
|Household-Dependent| Social Security Number|Y| N | **TBD** | **TBD**|
|Household-Dependent| Date of birth|Y| N |TBD** | **TBD**|
|Household-Dependent| When did they become your dependent?|Y| N | **TBD** | **TBD**|
|Household-Dependent| Is your dependent living with a permanent disability that happened before they turned 18 years old?|Y| N | **TBD** | **TBD**|
|Household-Dependent| Did your dependent live with you in 2023?|Y| N | **TBD** | **TBD**|
|Household-Dependent| Did your dependent earn income in 2023?|Y| N | **TBD** | **TBD**|
|Household-Dependent| If your dependent didn’t live with you in 2023, did you provide any financial support?|N| N | **TBD** | **TBD**|

</details>

<details>
  <Summary>Dependent Income</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Dependent Income| Enter your dependent’s gross annual income from 2023|Y| N |**TBD** | **TBD**|
|Household-Dependent Income| Enter your dependent’s net annual income from a farm, ranch, property or business from 2023|Y| N |**TBD** | **TBD**|
|Household-Dependent Income| Enter your dependent’s other annual income from 2023|Y| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Dependent Education Expenses</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Dependent Education expense| If your dependent is between 18 and 23 years old, were they enrolled as a full-time or part-time student in 2023?|N| N |**TBD** | **TBD**|
|Household-Dependent Education expense| Enter the total amount of money your dependent paid for college, vocational rehabilitation, or training (like tuition, books, or supplies)|N| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Veteran Income</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Veteran Income| Enter your gross annual income from 2023|Y| N |**TBD** | **TBD**|
|Household-Veteran Income| Enter your net annual income from a farm, ranch, property or business from 2023|Y| N |**TBD** | **TBD**|
|Household-Veteran Income| Enter your other annual income from 2023|Y| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Spouse Income</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Spouse Income| Enter your gross annual income from 2023|Y| N |**TBD** | **TBD**|
|Household-Spouse Income| Enter your net annual income from a farm, ranch, property or business from 2023|Y| N |**TBD** | **TBD**|
|Household-Spouse Income| Enter your other annual income from 2023|Y| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Deductible Expenses</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Household-Deductibles| Enter the amount you or your spouse (if you’re married) paid in non-reimbursable medical expenses in 2023|Y| N |**TBD** | **TBD**|
|Household-Deductibles| Enter the amount you paid for your own college or vocational education in 2023|Y| N |**TBD** | **TBD**|
|Household-Deductibles| Enter the amount you paid in funeral or burial expenses in 2023|Y| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Medicaid & Medicare</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Insurance| Are you eligible for Medicaid?|Y| N |**TBD** | **TBD**|
|Insurance| Are you enrolled in Medicare Part A (hospital insurance)?|Y| N |**TBD** | **TBD**|
|Insurance|What is your Medicare Part A effective date?|Y| N |**TBD** | **TBD**|
|Insurance| What is your Medicare claim number?|Y| N |**TBD** | **TBD**|

</details>

<details>
<Summary>Private Insurance</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Insurance| Do you have health insurance coverage?|Y| N |**TBD** | **TBD**|
|Insurance| Name of insurance provider|Y| N |**TBD** | **TBD**|
|Insurance| Name of policyholder (the person whose name the policy is in)|Y| N |**TBD** | **TBD**|
|Insurance| Policy Number|Y| N |**TBD** | **TBD**|
|Insurance| Group Code|Y| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Preferred Facility</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Preferred Facility| I’m enrolling to get minimum essential coverage under the Affordable Care Act. (check box)|N| N |**TBD** | **TBD**|
|Preferred Facility| State (select)|Y| N |**TBD** | **TBD**|
|Preferred Facility| Center or Clinic (select) |Y| N |**TBD** | **TBD**|
|Preferred Facility| Do you want VA to contact you to schedule your first appointment? |N| N |**TBD** | **TBD**|

</details>

<details>
  <Summary>Review & Agreement</Summary>

| Form Subsection | Form Question| Required? | Prefillable?| Why we ask | Resource link/name|
|---------------------|---------------------|---------------|---------------|-----------------|---------------|
|Review & Agree| I confirm that I agree to the statements listed here. The information is true and correct to the best of my knowledge and belief. I’ve read and accept the privacy policy.|Y|| N |**TBD** | **TBD**|

</details>




