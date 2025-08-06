# Platform Security request for information
- The team met with the Platform Security team on 8/4/2025.  They are looking for specific information, which we have outlined here.

**DO NOT INCLUDE PII HERE** - AWS Instances, CI/CD, etc cannot be linked here- must be shared on VA Network

- Reach out to #platform-security channel for questions
  POC:

What is the name of your product(s)/system(s)?

- 10-10 Health Enrollment
  - 10-10EZ
  - 10-10EZR
  - 10-10CG

Describe its purpose in a few sentences.
This is the healthcare application (1010EZ), healthcare update, and

If you represent multiple products, please describe the relationship between them, if there is any.

What is the expected duration of your project? This information helps us understand how our processes need to adapt

- Indefinite, for as long as VA.gov is being used to submit health enrollment applications (10-10EZ and 10-10EZR) to the Veteran Enrollment System (VES) and the Program of Comprehensive Assistance for Family Caregivers (PCAFC) form (10-10CG) submissions to the Caregiver Record Management Application (CARMA)

AWS Resources

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

Repos

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
- List other groups you know use your repos
  - N/A

Tools

- List CI/CD or Infrastructure as Code tools
- Describe where each tool is hosted and if they handle PII
- List software included in deployment or generate SBOM
  - All software included and used by our team is part of Platform and managed by them.
- List all packages/plugins/modules/gems/etc. Include version numbers
  - https://github.com/department-of-veterans-affairs/vets-website/blob/main/package.json
  - https://github.com/department-of-veterans-affairs/vets-api/blob/master/Gemfile

Connections

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
  - https://github.com/department-of-veterans-affairs/vets-json-schema/blob/f1c0e22c567c1ae861dba2b1682ef5a633e48a9d/src/schemas/10-10EZ/schema.js#L4
  - https://github.com/department-of-veterans-affairs/vets-json-schema/tree/f1c0e22c567c1ae861dba2b1682ef5a633e48a9d/src/schemas/10-10EZR
  - https://github.com/department-of-veterans-affairs/vets-json-schema/tree/f1c0e22c567c1ae861dba2b1682ef5a633e48a9d/src/schemas/10-10CG
- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it
  - N/A

Provide a data flow diagram that shows your product’s relationship to Platform
_ https://github.com/department-of-veterans-affairs/va.gov-team/blob/cac6665ca728cc2df0f6c1a45c6a8931cd5868ca/products/caregivers/engineering/architecture/10-10CG%20Sequence%20Diagram.md#L4
_ https://github.com/department-of-veterans-affairs/va.gov-team/blob/cac6665ca728cc2df0f6c1a45c6a8931cd5868ca/products/health-care/application/va-application/engineering/architecture/10-10EZ%20Sequence%20Diagram.md \* https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Engineering/Architecture%20Diagram.md
