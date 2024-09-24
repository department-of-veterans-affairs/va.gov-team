# Ask VA variation points
Last updated by @beckyphung: September 24, 2024

This document shows the different points at which the Ask VA form and dashboard changes. Our team is using this document to ensure we have adequate test coverage before we launch the redesigned Ask VA front-end on VA.gov in January 2025. 

We're drafting test scripts based on this document. They'll either be automated or manual, depending on what we can automate before launch. 

[View the original Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726092793555/33edcc869ba8093c26a7f5c95426045014966078?sender=u44efa807e992cacf10cf3697) this doc is based on.

Jump to: 
- Form variations
- Dashboard variations

## Form variations
These are points at which the form may change for the submitter.

- Answer to `Who is your question about?`
- Whether submitter signs in or not (authentication)
- Answer to `What is your relationship to the Veteran?`
- Whether submitter has Name, Date of Birth, and Social Security Number
- Answers to `Category`, `Topic`, and `Subtopic`
- Answer to `How should we contact you?`

|Point when form changes|Different options|Result|Reference|
|:--|:--|:--|:--|
|Answer to `Who is your question about?`|Myself, Someone else, or It's a general question|Different form pages and/or questions in flow|[Form flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=u44efa807e992cacf10cf3697)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Information shouldn't be prefilled and certain pages shouldn't appear if users are unauthenticated|[How prefill works (Github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/How%20prefill%20works.md) and [Your personal information (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=3236-14648)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Different landing page|[Home page (Unauthenticated) (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=3312-56070) and [Dashboard without cards](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=157-3146&node-type=canvas&t=zM02niVhCfrNIhD2-0)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Different content on the confirmation page|[Confirmation page (Figma)](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=6-25025)|
|Whether submitter signs in or not (authentication)|Authenticated or Unauthenticated|Authenticated users ONLY for these categories: Education benefits and work study & Debt for benefit overpayments and health care copay bills|❔ Not sure if this is documented anywhere|


## Dashboard variations
These are points at which the dashboard may change for the submitter.

- Whether submitter has previous inquiries
- Whether submitter signs in or not (authentication)
- Replies: Whether agent has replied yet
- Replies: Whether business line has enabled or disabled
- Number of previous inquiries a submitter has
