# Platform Security request for information
- The team met with the Platform Security team on 7/28/2025.  They are looking for specific information, which we have outlined here.

**DO NOT INCLUDE PII HERE** - AWS Instances, CI/CD, etc cannot be linked here- must be shared on VA Network

- Reach out to #platform-security channel for questions
     - POC: Kenneth Mayo

### Products
- What is the name of your product(s)/system(s)?
     - 10-10 Health Enrollment
          - 10-10EZ - Veteran health care application
          - 10-10EZR - Health benefits update form (Veteran health care)
          - 10-10CG - Program of Comprehensive Assistance for Family Caregivers application

- Describe its purpose in a few sentences.
     - 10-10EZ
          - This is an online form for Veterans to fill out and submit with the intention of enrolling in VA health care
     - 10-10EZR
          - This is an online form for Veterans, who are enrolled in VA health care, to provide updates to their personal information on their health record, such as income and deductibles, marital status/spouse information, dependents, next of kin, emergency contact, private health insurance.
     - 10-10CG
          - This is an online form for Veterans and their caregivers to fill out and submit with the intention of enrolling in the PCAFC program (to support caregivers while they provide care for Veterans)

- If you represent multiple products, please describe the relationship between them, if there is any.
     - There is no direct relationship between the products themselves. They are not reliant on each other.
     - The 10-10EZ and 10-10EZR both do connect through vets-api to VES (Veteran Enrollment System) and the forms themselves are very similar in structure, for the sake of consistency.

- What is the expected duration of your project? This information helps us understand how our processes need to adapt
     - Our project (contract) is set to end 8/13/2025.
     - Our products are intended to remain on VA.gov indefinitely

### AWS Resources
- List AWS services used
     - S3
     - Parameter Store
     - EC2
- Describe named instances of each service used
- Which of your resources handle PII? List the types of PII
     - S3
          - Veteran Document Uploads
     - EC2
     - Records in the database- personal information logs
- Do you utilize any other cloud resources beyond VA.gov?
     - Argo CD

### Repos
- List repos maintained by your team, provide links
     - NA
- List repos used by your team, provide links
     - https://github.com/department-of-veterans-affairs/vets-website
     - https://github.com/department-of-veterans-affairs/vets-api
     - https://github.com/department-of-veterans-affairs/vets-json-schema
     - https://github.com/department-of-veterans-affairs/content-build
     - https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests
     - https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/

- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable
     - N/A
- List other groups you know use your repos
     - N/A

### Tools

- List CI/CD or Infrastructure as Code tools
- Describe where each tool is hosted and if they handle PII
- List software included in deployment or generate SBOM
     - All software included and used by our team is part of Platform and managed by them.
- List all packages/plugins/modules/gems/etc. Include version numbers
     - https://github.com/department-of-veterans-affairs/vets-website/blob/main/package.json
     - https://github.com/department-of-veterans-affairs/vets-api/blob/master/Gemfile

### Connections

- List the connections your team makes/maintains with systems outside the Platform AWS Environment
     - https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/content_security_policy_vagov-prod.yml
     - Datadog |(External)
     - Sentry|(External)
     - Mapbox|(External)
     - MuleSoft|(External)
     - Okta | (External)
     - Google Analystics (GA)|(External)
     - PagerDuty|(External)
     - Domo|(External)
     - Veterans Enrollment System |(Internal)
     - BEP (Formerly called BGS) |(Internal)
     - VA Lighthouse |(Internal)
- Do you have a POC? Please list
- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
- List the types of PII shared (in each direction) with this connection
     - https://github.com/department-of-veterans-affairs/vets-json-schema/blob/f1c0e22c567c1ae861dba2b1682ef5a633e48a9d/src/schemas/10-10EZ/schema.js
     - https://github.com/department-of-veterans-affairs/vets-json-schema/tree/f1c0e22c567c1ae861dba2b1682ef5a633e48a9d/src/schemas/10-10EZR
     - https://github.com/department-of-veterans-affairs/vets-json-schema/tree/f1c0e22c567c1ae861dba2b1682ef5a633e48a9d/src/schemas/10-10CG
- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it
     - N/A

- Provide a data flow diagram that shows your product’s relationship to Platform
     - [10-10CG Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/cac6665ca728cc2df0f6c1a45c6a8931cd5868ca/products/caregivers/engineering/architecture/10-10CG%20Sequence%20Diagram.md) 
     - [10-10EZ Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/cac6665ca728cc2df0f6c1a45c6a8931cd5868ca/products/health-care/application/va-application/engineering/architecture/10-10EZ%20Sequence%20Diagram.md)
     - [10-10EZR Architecture Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Engineering/Architecture%20Diagram.md)
