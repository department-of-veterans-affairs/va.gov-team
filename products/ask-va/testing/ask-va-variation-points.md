# Ask VA variation points
Last updated by @beckyphung: October 1, 2024

10/1 update: We started outlining the full scope of testing in the [Ask VA Phase 1 testing scope tracker Excel file in SharePoint](https://dvagov.sharepoint.com/:x:/s/AskVA/EbbW0jyxC7tDvWNf346N4kkBYx7ZAff9Pt5pTOX7fODjIA?e=cX2e51).

- **What**: This document shows the different points at which the Ask VA form and dashboard change.
- **Why**: Ensure we have adequate test coverage for front-end variations before launch in January 2025.
   - This document **does not** include back-end variations and integration testing.
- **How**: Draft test scripts based on this document, which will be automated or manual, depending on what we can automate before launch.

[View the original Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726092793555/33edcc869ba8093c26a7f5c95426045014966078?sender=u44efa807e992cacf10cf3697) this doc is based on.

Jump to: 
- [Form variations](#form-variations)
- [Dashboard variations](#dashboard-variations)
- [Comparing this doc to CRM test plan](#comparing-this-doc-to-crm-test-plan)

## Form variations
These are points at which the form may change for the submitter.

- Answer to `Who is your question about?`
- Whether submitter signs in or not (authentication)
- Answer to `What is your relationship to the Veteran?`
- Whether submitter has name, date of birth, and Social Security Number data
- Answers to `Category`, `Topic`, and `Subtopic`
- Answer to `How should we contact you?`

|Point when form changes|Different options|Result|Reference|
|:--|:--|:--|:--|
|Answer to `Who is your question about?`|Myself, Someone else, or It's a general question|Different form pages and/or questions in flow|[Form flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=u44efa807e992cacf10cf3697)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Information shouldn't be prefilled and certain pages shouldn't appear if users are unauthenticated|[How prefill works (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/How%20prefill%20works.md) and [Your personal information (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=3236-14648)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Different landing page|[Home page (Unauthenticated) (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=3312-56070) and [Dashboard without cards](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=157-3146&node-type=canvas&t=zM02niVhCfrNIhD2-0)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Different content on the confirmation page|[Confirmation page (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=6-25025)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Authenticated users ONLY for these categories: Education benefits and work study & Debt for benefit overpayments and health care copay bills|🟡 Add link to documentation|
|Answer to `What is your relationship to the Veteran?`|Personal (I'm the Veteran OR  I'm the family member of a Veteran) or Business (I'm connected to the Veteran through my work)|If Business, prefill for `Phone number`, `Email address`, and `School facility`. Check that updates are reflected in CRM.|[How prefill works: Additional prefill within the form (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/How%20prefill%20works.md#additional-prefill-within-the-form)|
|Answer to `What is your relationship to the Veteran?`|Personal (I'm the Veteran OR  I'm the family member of a Veteran) or Business (I'm connected to the Veteran through my work)|Different form pages and/or questions in flow|[Form flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=u44efa807e992cacf10cf3697)|
|Whether submitter has name, date of birth, and Social Security Number data|Submitter has all fields or only some fields|Personal information is included only if submitter has all data fields|[How prefill works: Additional prefill within the form (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/How%20prefill%20works.md#additional-prefill-within-the-form)|
|Answers to `Category`, `Topic`, and `Subtopic`|Different Category, topic, and subtopic answers|Different form pages and/or questions in flow|[Form flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=u44efa807e992cacf10cf3697) and [Field rules (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Field%20rules.md)|
|Answers to `Category`, `Topic`, and `Subtopic`|Different Category, topic, and subtopic answers|Whether attachments are allowed or not|🟡 Add link to documentation|
|Answer to `How should we contact you?`|Phone, Email, or U.S. Mail|Different content on the confirmation page|[Confirmation page (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=6-25025)|

## Dashboard variations
### Point when dashboard changes
These are points at which the dashboard may change for the submitter.

- Whether submitter has previous inquiries
- Whether submitter has previously submitted a business inquiry
- Replies: Whether agent has replied yet
- Replies: Whether business line has enabled or disabled
- Number of previous inquiries a submitter has
- Different statuses
- Whether inquiry has attachments

|Point when dashboard changes|Different options|Result|Reference|
|:--|:--|:--|:--|
|Whether submitter had previous inquiries|Submitter has 0 inquries or previous inquiries|If at least 1 previous inquiry, cards appear in dashboard|[Home page (Unauthenticated) (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=3312-56070) and [Dashboard without cards](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=157-3146&node-type=canvas&t=zM02niVhCfrNIhD2-0)|
|Whether submitter has previously submitted a business inquiry|Submitter has 0 business inquiries or at least 1 business inquiry|If at least 1 business inquiry, Business and Personal tabs appear|[Dashboard: With cards and sorting (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131181)|
|Replies: Whether agent has replied yet|Agent has replied or not|If no replies, only 1 accordion appears|[Review and send reply (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131182)|
|Replies: Whether business line has enabled or disabled|Enabled or disabled|If disabled, then submitter can't reply. Also, can only reply within window.|🟡 Add link to documentation|
|Number of previous inquiries a submitter has|5 or more inquiries|If 5 or more inquiries, add pagination|[With cards and sorting (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131181&node-type=canvas&t=ZvNhhwfSwvWrr6ND-0)|
|Different statuses|In progress, Replied, Reopened|Correct status appears based on status and settings in CRM|[Statuses and triggers (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Statuses%20and%20triggers.md)|
|Whether inquiry has attachments|Inquiry has attachments or not|Show attachments if an inquiry has them|[Review & send reply (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131182)|

### Agent action when dashboard changes
CRM agents perform the following actions that will change the dashboard. 
- CRM agent changes business inquiry

|Agent action when dashboard changes|Result|Reference|
|:--|:--|:--|
|`Mark as Business Inquiry`|Moves inquiry from Personal to Business tab|🟡 Add link to documentation|
|`Hide Business Inquiry`|Removes inquiry from dashboard|🟡 Add link to documentation|
|Add a private note|This **does not** appear as a reply to the inquiry|🟡 Add link to documentation|
|`Solve`|Changes inquiry status to `Replied` on the front-end|[Statuses and triggers (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Statuses%20and%20triggers.md)|
|`Transfer Submitter`|Transfers submitter inquiries to other submitter's dashboard|🟡 Add link to documentation|
|`Split Inquiry`|Creates new inquiry with different inquiry number and queue|🟡 Add link to documentation|

## Comparing this doc to CRM test plan
### Not included in Ask VA variations points doc
[View the CRM team's testing approach in Word](https://dvagov-my.sharepoint.com/:w:/g/personal/shelby_carl_va_gov/EXQdtcz1ksFKpTiRiE8kkhABaZZlCNK0RTt3L7n77L-eqQ?e=3qRcZH).
#### Sign In 
- Signing with different identity credentials (DS Logon, ID.me, Login.gov)
#### Inquiry Submit 
- Submitter is new to AVA and Veteran is new to AVA
- Submitter is new to AVA and Veteran is known to AVA
- Submitter is known to AVA and Veteran is new to AVA
- Submitter is known to AVA and Veteran is known to AVA
- Submitter w/o a VA Profile
   - BP note: I think an authenticated submitter will always a VA profile.
- Submitter updating their information on VA Profile
   - BP note: Asked in comment if this is referring to the profile on VA.gov.
- Required fields
#### CRM Actions
- All fields display correctly/are populated
#### Inquiry Correspondence
- Formatting between CRM and portal is correct
- Correspondence history shows correspondence from before portal changeover
#### Reporting
- Queue Trackers
#### Other Regression Tests 
- Flag for Supervisor
- Override SLA 
- Re-Route 
- Inquiry Print 
- Correspondence History 
- Queue settings allow re-routes 
- MPI match works on inquiry from new portal 

### Somewhat included in both
- Standard texts are updated (links); Correspondence from Portal to CRM; and Correspondence from CRM to Portal populates  
   - BP note: We don't note checking emails yet, but we will check that replies are shown in an inquiry on the [Review & send reply page (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131182)
  
### Included in both
|Name in Ask VA variation points doc|Name in CRM test plan doc|
|:--|:--|
|Whether submitter had previous inquiries|Previous inquiries are on dashboard |
|Different statuses|Statuses|
|Whether inquiry has attachments|Attachments|
|Answer to `What is your relationship to the Veteran?`|Submitter needs to update SFC or SOS|
|Replies: Whether business line has enabled or disabled|Queue settings- portal behavior & Queue settings are respected|
|Agent action when dashboard changes section|Inquiry Actions|
