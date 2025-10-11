## MHV-Secure Messaging FE Product (WEB)

## Product Information

**Summary:**
Secure Messaging on VA.gov will provide Veterans with the same ability to securely contact their VA health care providers as on MyHealtheVet (MHV) today. The new application will employ modern technology and user-centered design to ensure that the tool is accessible, straightforward, and simple to use. Moving this product out of MyHealtheVet and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.

**SM Github Page:** https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product

**Current Product Brief**: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/oh_recipient_groups/initiative-brief.md

**Contacts (POC):**
**OCTO PO:** Patrick Bateman
**PM**: Stacy Blackwood
**Lead Dev:** Alex Morgun

## Data flow diagram that shows your product’s relationship to Platform 


**Github Link to Technical Information and Diagrams:**

https://github.com/department-of-veterans-affairs/mhv-developer-docs/tree/main/technical-documentation/secure-messaging

**SM Interface API Control:**

https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/sm/ICDs


## Repo Listing


**List repos maintained by your team, provide links**

none

**List repos used by your team, provide links**

https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv-secure-messaging
https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/sm
https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/my_health

**Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable**

VFS Platform

**List other groups you know use your repos**

Please see VFS Platform

 ## AWS Resources (MHV-WEB)

**List AWS services used**

-Parameter store for API keys, environment URLs. No PII.
-Forward-proxy service running on AWS EC2 instances

**Describe named instances of each service used**

N/A

**Which of your resources handle PII? List the types of PII**

Upstream service MHV SM Patient API is storing all the data

**Do you utilize any other cloud resources beyond VA.gov?**

No

**Datadog:** Datadog used for analytics. Follows all vets-api/platform analytics standards.

 ## Tools/Connections/Environment


1. List CI/CD or Infrastructure as Code tools

- VA.gov Continuous Integration Process
- VA.gov Staged Continuous Deployment


2. Describe where each tool is hosted and if they handle PII

- vets-website Github Actions - Continuous Integration
- vets-website Github Actions - Continuous Deployment
- vets-api deployment documentation
  
  
4. List software included in deployment or generate SBOM

- The deployment includes the main application code and its dependencies
- vets-website dependency graph
- vets-api dependency graph

  
5. List all packages/plugins/modules/gems/etc. Include version numbers

 - package.json for version reference
 - Gemfile.lock for version reference
 - packages/gems used below 🔽

**vets-website/mhv-secure-messaging Packages Used**

@datadog/browser-rum

@department-of-veterans-affairs/component-library/contacts

@department-of-veterans-affairs/component-library/dist/react-bindings

@department-of-veterans-affairs/mhv/exports

@department-of-veterans-affairs/platform-forms-system/ui

@department-of-veterans-affairs/platform-monitoring

@department-of-veterans-affairs/platform-monitoring/DowntimeNotification

@department-of-veterans-affairs/platform-monitoring/exports

@department-of-veterans-affairs/platform-site-wide/actions

@department-of-veterans-affairs/platform-site-wide/PageNotFound

@department-of-veterans-affairs/platform-site-wide/utilities

@department-of-veterans-affairs/platform-testing/helpers

@department-of-veterans-affairs/platform-testing/react-testing-library-helpers

@department-of-veterans-affairs/platform-user/profile/backendServices

@department-of-veterans-affairs/platform-user/RequiredLoginView

@department-of-veterans-affairs/platform-user/selectors

@department-of-veterans-affairs/platform-utilities/environment

@department-of-veterans-affairs/platform-utilities/exports

@department-of-veterans-affairs/platform-utilities/featureFlagNames

@department-of-veterans-affairs/platform-utilities/ui

@department-of-veterans-affairs/platform-utilities/ui/index

@testing-library/dom

@testing-library/react-hooks

@testing-library/react

@testing-library/user-event

~/applications/mhv-secure-messaging/reducers

~/platform/mhv/unique_user_metrics

~/platform/user/authentication/selectors

chai

date-fns

dompurify

enzyme

lodash

moment-timezone

moment

platform/forms-system/src/js/web-component-patterns/fullNamePattern

platform/mhv/components/MhvPageNotFound

platform/mhv/components/MhvServiceRequiredGuard

platform/monitoring/DowntimeNotification/actions

platform/monitoring/record-event

platform/site-wide/drupal-static-data/source-files/vamc-ehr/selectors

platform/site-wide/drupal-static-data/source-files/vamc-ehr/utils

platform/site-wide/va-footer/components/CrisisPanel

platform/startup/router

platform/testing/unit/react-testing-library-helpers

platform/user/cerner-dsot/selectors

platform/utilities/cerner

platform/utilities/feature-toggles/featureFlagNames

platform/utilities/scroll

platform/utilities/ui

prop-types

react-linkify

react-redux

react-router-dom

react

redux-mock-store

redux-thunk

redux

sinon

text/rtf

**vets-api - Gems used in lib/sm**

common/client/base

common/client/concerns/mhv_session_based_client

sm/client_session

sm/configuration

vets/collection

common/client/configuration/rest

common/client/middleware/request/camelcase

common/client/middleware/request/multipart_request

common/client/middleware/response/json_parser

common/client/middleware/response/raise_error

common/client/middleware/response/mhv_errors

common/client/middleware/response/snakecase

sm/middleware/response/sm_parser

common/client/session

**vets-api - Gems used in modules/my_health files that use or inherit from SMController**

sm/client (directly required by modules/my_health/app/controllers/my_health/sm_controller.rb)

my_health/mhv_controller_concerns (included)

json_api_pagination_links (included)

common/exceptions (used via Common::Exceptions)

application_controller (inherited)

(other gems are likely required transitively by the parent ApplicationController, but not directly in these files)



**List the connections your team makes/maintains with systems outside the Platform AWS**

-Application makes connection to MHV SM Patient API. I believe it is outside of platform AWS, however it is hosted within VA AWS


**Environment**

-Are these connections Internal or External to the VA?

Internal

-**Do you have a POC? Please list**

#mhv-secure-messaging-api Slack channel

-**Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)**

-This information can be provided by DSVA Platform Support

**List the types of PII shared (in each direction) with this connection**

-Patient name (in some responses)

-Patient associations with care teams and care team names (PHI)

-SM message body (PHI, potentially containing PII)

-SM message subject (PHI, potentially containing PII)

-Custom folder names (PHI)

**Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it**

-Not aware, perhaps VFS Platform or PO may have more details







 

## Mobile Application VAHB Product Information (Secure Messaging Product)

## Product Information

-Over** 50% of traffic** to VA websites comes from users on mobile devices. This traffic is typically driven by users that want to complete quick transactions, such as viewing Claims Status or Facility Locator.

-Mobile team: An OCTO-led team that owns all experiences in VA: Health and Benefits mobile app.

For More information on Web and Mobile Collobaration: https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Contributing/

**Contacts:**

**ENG Mobile Lead** Jayson Perkins 
**Main Slack Channel** #va-mobile-app channel 

**Product Manager** Stacy Blackwood
**Main Slack Channel** #mhv-secure-messaging


## List repos maintained by your team, provide links

**Repos Mobile Team uses**:

A. **List repos used by your team and associated Links**:

https://github.com/department-of-veterans-affairs/va-mobile-app

**POC**: VA Flagship Mobile Team or Jayson Perkins (Mobile Lead)

https://github.com/department-of-veterans-affairs/vets-api

**POC**: department-of-veterans-affairs/backend-review-group or Jayson Perkins
Other teams that use these repos for mobile work - VA Flagship Mobile Team



## Data flow diagram that shows your product’s relationship to Platform (MHV SM Mobile) 

B. **Mobile API services data flow**:
https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services



## AWS

1. List AWS services used
2. Describe named instances of each service used
3. Which of your resources handle PII? List the types of PII
4. Do you utilize any other cloud resources beyond VA.gov?

Parameter store for some API keys. No PII.

**Google:** Firebase for mobile frontend analytics. None of the SM events record PII.

**Datadog:** Mobile API uses Datadog for analytics. Follows all vets-api/platform analytics standards.

## Tools/Connections/Environment


**For Mobile:** _The below tools and connection items (1-10) would be things already covered by vets-api and the va mobile app repos._


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











