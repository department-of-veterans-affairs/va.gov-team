# Ask VA variation points
Last updated by @beckyphung: September 26, 2024

This document shows the different points at which the Ask VA form and dashboard changes. Our team is using this document to ensure we have adequate test coverage for front-end variations before we launch the redesigned Ask VA front-end on VA.gov in January 2025. This document **does not** include back-end variations and integration testing.

We're drafting test scripts based on this document. They'll either be automated or manual, depending on what we can automate before launch. 

[View the original Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726092793555/33edcc869ba8093c26a7f5c95426045014966078?sender=u44efa807e992cacf10cf3697) this doc is based on.

Jump to: 
- [Form variations](#form-variations)
- [Dashboard variations](#dashboard-variations)
- [Comparing CRM combined test plan scope](#comparing-crm-combined-test-plan-scope)

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
|Answer to `What is your relationship to the Veteran?`|Personal (I'm the Veteran OR  I'm the family member of a Veteran) or Business (I'm connected to the Veteran through my work)|If Business, prefill for `Phone number`, `Email address`, and `School facility`|[How prefill works: Additional prefill within the form (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/How%20prefill%20works.md#additional-prefill-within-the-form)|
|Answer to `What is your relationship to the Veteran?`|Personal (I'm the Veteran OR  I'm the family member of a Veteran) or Business (I'm connected to the Veteran through my work)|Different form pages and/or questions in flow|[Form flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=u44efa807e992cacf10cf3697)|
|Whether submitter has name, date of birth, and Social Security Number data|Submitter has all fields or only some fields|Personal information is included only if submitter has all data fields|[How prefill works: Additional prefill within the form (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/How%20prefill%20works.md#additional-prefill-within-the-form)|
|Answers to `Category`, `Topic`, and `Subtopic`|Different Category, topic, and subtopic answers|Different form pages and/or questions in flow|[Form flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=u44efa807e992cacf10cf3697) and [Field rules (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Field%20rules.md)|
|Answers to `Category`, `Topic`, and `Subtopic`|Different Category, topic, and subtopic answers|Whether attachments are allowed or not|🟡 Add link to documentation|
|Answer to `How should we contact you?`|Phone, Email, or U.S. Mail|Different content on the confirmation page|[Confirmation page (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=6-25025)|

## Dashboard variations
These are points at which the dashboard may change for the submitter.

- Whether submitter has previous inquiries
- Whether submitter signs in or not (authentication)
- Replies: Whether agent has replied yet
- Replies: Whether business line has enabled or disabled
- Number of previous inquiries a submitter has

|Point when form changes|Different options|Result|Reference|
|:--|:--|:--|:--|
|Whether submitter had previous inquiries|Submitter has 0 inquries or previous inquiries|If at least 1 previous inquiry, cards appear in dashboard|[Home page (Unauthenticated) (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=3312-56070) and [Dashboard without cards](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=157-3146&node-type=canvas&t=zM02niVhCfrNIhD2-0)|
|Whether submitter has previously submitted a business inquiry|Submitter has 0 business inquiries or at least 1 business inquiry|If at least 1 business inquiry, Business and Personal tabs appear|[Dashboard: With cards and sorting (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131181)|
|Replies: Whether agent has replied yet|Agent has replied or not|If no replies, only 1 accordion appears|[Review and send reply (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131182)|
|Replies: Whether business line has enabled or disabled|Enabled or disabled|If disabled, then submitter can't reply|🟡 Add link to documentation|
|Number of previous inquiries a submitter has|5 or more inquiries|If 5 or more inquiries, add pagination|[With cards and sorting (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-131181&node-type=canvas&t=ZvNhhwfSwvWrr6ND-0)|

# Comparing CRM combined test plan scope
