## MHV-Secure Messaging FE Product (WEB)

**Product Information:**

**Summary:**
Secure Messaging on VA.gov will provide Veterans with the same ability to securely contact their VA health care providers as on MyHealtheVet (MHV) today. The new application will employ modern technology and user-centered design to ensure that the tool is accessible, straightforward, and simple to use. Moving this product out of MyHealtheVet and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.

**SM Github Page:** https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product

**Current Product Brief**: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/oh_recipient_groups/initiative-brief.md

**Contacts (POC):**
**OCTO PO:** Patrick Bateman
**PM**: Stacy Blackwood
**Lead Dev:** Alex Morgun


**Data flow diagram that shows your product’s relationship to Platform (MHV SM Mobile)**


**Github Link to Technical Information and Diagrams:**

https://github.com/department-of-veterans-affairs/mhv-developer-docs/tree/main/technical-documentation/secure-messaging

**SM Interface API Control:**

https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/sm/ICDs


**List repos maintained by your team, provide links:**

Update Here



 **AWS Resources (MHV-WEB)**

Updated Here



**Datadog:** Datadog used for analytics. Follows all vets-api/platform analytics standards.

 **Tools/Connections/Environment:**


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





## MHV VAHB Mobile Product (Mobile Application)
 

**Mobile Product Information**: (Secure Messaging Product)

-Over** 50% of traffic** to VA websites comes from users on mobile devices. This traffic is typically driven by users that want to complete quick transactions, such as viewing Claims Status or Facility Locator.

-Mobile team: An OCTO-led team that owns all experiences in VA: Health and Benefits mobile app.

For More information on Web and Mobile Collobaration: https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Contributing/

**Contacts:**

** ENG Mobile Lead:** Jayson Perkins 
 **Main Slack Channel**: #va-mobile-app channel 

** Product Manager**: Stacy Blackwood
** Main Slack Channel**: #mhv-secure-messaging


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


**For Mobile:** _The below tools and connection items would be things already covered by vets-api and the va mobile app repos._


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











# SM Clinician (Liferay Portal) Product Information

**Point of Contact:** Clint Wilde (Lead Engineer for SM Team)


**SM Clinician Product Information:**

Update Here


**Provide a data flow diagram that shows your product’s relationship to Platform**

Architectural Diagrams for SM Clinician: https://github.com/department-of-veterans-affairs/mhv-developer-docs/tree/main/technical-documentation/secure-messaging


**Repos for SM Clinician and Liferay**

Point of Contact: Clint Wilde (For SM Team)


https://github.com/department-of-veterans-affairs/mhv-smcp-liferaysso-hook
https://github.com/department-of-veterans-affairs/mhv-smc-liferay-login-jsp-fragment
https://github.com/department-of-veterans-affairs/mhv-sm-clinician-messagemgmt-portlet
https://github.com/department-of-veterans-affairs/mhv-sm-clinician-liferay-theme
https://github.com/department-of-veterans-affairs/mhv-smc-misc-modules
