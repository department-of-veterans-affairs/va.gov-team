## MHV-Secure Messaging FE Product (WEB)

**Mobile Product Information**: 


List repos maintained by your team, provide links:

**Repos Mobile Team uses**:

A. **List repos used by your team and associated Links**:



## MHV VAHB Mobile Product (Mobile Application)

**Mobile Product Information**: 


List repos maintained by your team, provide links:

**Repos Mobile Team uses**:

A. **List repos used by your team and associated Links**:

https://github.com/department-of-veterans-affairs/va-mobile-app

**POC**: VA Flagship Mobile Team or Jayson Perkins (Mobile Lead)

https://github.com/department-of-veterans-affairs/vets-api

**POC**: department-of-veterans-affairs/backend-review-group or Jayson Perkins
Other teams that use these repos for mobile work - VA Flagship Mobile Team



**Data flow diagram that shows your product’s relationship to Platform (MHV SM Mobile)**

B. **Mobile API services data flow**:
https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services

C. **AWS Resources (MHV-Mobile Product)**


1. List AWS services used
2. Describe named instances of each service used
3. Which of your resources handle PII? List the types of PII
4. Do you utilize any other cloud resources beyond VA.gov?


**AWS:** Parameter store for some API keys. No PII.

**Google:** Firebase for mobile frontend analytics. None of the SM events record PII.

**Datadog:** Mobile API uses Datadog for analytics. Follows all vets-api/platform analytics standards.

D. **Tools/Connections/Environment:**


1. List CI/CD or Infrastructure as Code tools
2. Describe where each tool is hosted and if they handle PII
3. List software included in deployment or generate SBOM
4. List all packages/plugins/modules/gems/etc. Include version numbers
5. Are these connections Internal or External to the VA?
6. Do you have a POC? Please list
7. List the connections your team makes/maintains with systems outside the Platform AWS
8. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
9. List the types of PII shared (in each direction) with this connection
10. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it




**For Mobile:** _The above tools and connection items would be things already covered by vets-api and the va mobile app repos._








# SM Clinician (Liferay Portal) Product Information
