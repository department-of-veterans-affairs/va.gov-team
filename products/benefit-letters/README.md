# Your VA letters and documents
[historical documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Records/VA%20Documents%20and%20Letters/README.md)

## Communications
- GitHub Label: Letters and documents
- Slack channel: benefits-management-tools

## The Problem / Product Overview
Veterans need to readily access verification letters provided by VA to obtain additional benefits and services. By integrating with backend EVSS services, we can provide information currently stored in eBenefits to Veterans logged into va.gov.

**Note:** no other actor besides a Veteran is a consideration at this time. This restriction will not explicitly change until the overall focus of va.gov changes to serve the needs of multiple user types.

## Keywords
Letters, Documents, Documents and Letters, VA Letters, VA Documents, VA Docs, VA Letters &amp; Documents Your VA Letters and Documents

## Links
* Production: https://va.gov/records/download-va-letters/
* Staging: https://staging.va.gov/records/download-va-letters/

## Current features
The first page of the application displays and allows veterans to change their address on file (technically, through the EVSS `pciu_address` service). This is so that the letters that can be downloaded on the second page of the application have the veteran's corrected address.

The VA letters and documents information will be retrieved from the service provided by the EVSS team. In addition to the Veteran's address on file with eBenefits, the Veteran will be provided links all applicable letters. The business logic for determining which links to display will be determined by EVSS and only those letters for which the Veteran is authorized will be displayed (see Available Letters)

For each letter for which the Veteran is authorized:
* A link to download the letter will be displayed
* A brief description of the letter will be displayed

For each letter for which the Veteran is authorized but cannot view at this time due to backend constraints, an informational message in plain language will be displayed.

For any information expected above but not provided from the service call, users will be presented with informational messages in plain language directing them to possible remedies.

Only a logged-in user identity proofed at LOA3 and with a correlated identity in MVI can access this information. It is accessible via:

* Their user profile
* While browsing benefits information at va.gov overall

An anonymous user (not logged in) will be prompted to login to view this information:
* While browsing benefits information at va.gov overall

Basic click tracking is in place for interactions.
508 compliance standards are met.

## Features not currently included
* Retrieving letters for for a user other than the logged in, identity proofed Veteran

## Constraints
* The va.gov implementation team is constrained by the EVSS team for the creation of backend services.
* A production release is constrained by an updated MOU, PIA, PTA, and ATO documents.

## Available Letters
A veteran's eligibility and service history would determine which letters they are able to see. Available letters might include:

* **Benefit Summary and Service Verification Letter:** This letter shows your service history and some VA benefits information. You can customize this letter and use it for many things.
* **Benefit Verification Letter:** This letter shows the benefits you’re receiving from VA.
* **Civil Service Preference Letter:** This letter shows that you’re a disabled Veteran and you qualify for preference for civil service jobs.
* **Commissary Letter:** This letter will help get you access to local base facilities, including the commissary and post exchange.
* **Minimum Essential Coverage Letter:** This letter shows that you have Minimum Essential Coverage (MEC) as provided by VA. MEC means that your health care plan meets the health insurance requirements under the Affordable Care Act.
* **Proof of Creditable Prescription Drug Coverage:** This letter proves that you qualify for Medicare Part D prescription drug coverage.
* **Proof of Service Card:** This card shows that you served honorably in the Armed Forces. You can use it as proof of status to receive discounts at certain stores or restaurants.

## APIs
See the [EVSS letters and GIBS error messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/letters-and-gibs-error-messages-mapping.md) mapping for details about EVSS endpoints and data provided.

## Error Handling
vets-api -> vets-website: List of error codes, descriptions, and UIs

## Service-Level Objectives (SLOs)
The general site-wide availability and latency objectives that are monitored in Datadog apply to Your VA letters and documents as well. See here for details.

Additionally, there are a few monitored SLOs specifically applicable to the Letters application:
* **Availability:** Letters backend service [5xx errors are at 100% of budget](https://vagov.ddog-gov.com/monitors/282691)
* **Latency:** Percent of requests served in under 10 seconds should not drop to or below 95% of total requests for more than 5 consecutive minutes [NOTE: The EVSS latency threshold was changed from 10 to 100 seconds in Datadog.]
  * [EVSS Letters latency](https://vagov.ddog-gov.com/monitors/193373)
  * [Lighthouse Letters Generator latency](https://vagov.ddog-gov.com/monitors/193367)
* A number of [additional monitors](https://vagov.ddog-gov.com/monitors/manage?q=letters&order=desc) have been set up for latency, low download counts, and high error counts. These monitors encompass EVSS and Lighthouse.

## KPIs

_tbd_

## Technical Decisions

See the [swagger docs for EVSS's `lettergenerator` services ](https://pint.ebenefits.va.gov/wss-lettergenerator-services-web/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-lettergenerator-services-web/rest/swagger.yaml#/) (must be on VA network) -or- [copy](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/index.html?url=https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/veteran-military-records/swagger-va-letters.yaml)

## Product Decisions
_tbd_ Link to our decision brief for the consolidation to one step when it's available.

## Team

- OCTO Product Owner: Amy Lai
- OCTO Design Lead: Julie Strothman
- OCTO Eng Lead: Cory Sohrakoff
- Product Manager: Saliha Ghaffar
- Design Lead: Shawn Collins
- Content Lead: Rick Allen
- Engineering Lead: Stacy Wise
- Engineers: Jane Cho, Ian Donovan, Trevor Pierce
   
## Screenshots

### Before

### After
