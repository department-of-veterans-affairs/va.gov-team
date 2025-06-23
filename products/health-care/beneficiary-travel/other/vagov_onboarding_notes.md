## Context
Travel Pay (BTSSS) on VA.gov is a migration/modernization effort intended to reimagine how the existing BTSSS portal could perform better and provide a more modern user experience on VA.gov. Migration is not complete yet: there is the legacy system ("the portal") and the modern system ("travel pay on VA.gov").

## Is there a VA.gov or SQA Environment connected to AccessVA?

### Given Context
Right now, Veterans can select the sign in option on VA.gov and can log in with ID.me or Login.gov. This then redirects through AccessVA to the AccessVA sign-in options.

_Can this workflow be tested in lower environments?_

### Answer
1. **Redirecting doesn't happen automatically**: For Travel Pay (BTSSS) the redirect doesn't happen automatically. Veterans visit the travel pay page, sign in through ID.me or Login.gov, see a link to the legacy BTSSS portal, click that, and are taken to the existing legacy BTSSS portal.
2. **It is possible to connect via link to the SQA AccessVA environment from staging VA.gov**: This is really up to you. For BTSSS we didn't have a need to test the link to the existing QA environment of the legacy BTSSS portal, so we linked to the prod legacy portal link from staging VA.gov. You can control the link yourself (See the technical notes below).
3. **SSO & deeplinking**: If a Veteran signs in with ID.me or Login.gov, they _should_ maintain their session and not have to sign in again when navigating to the portal. This only works between same identity provider (e.g. ID.me). We are unable to deeplink (i.e. navigate to specific part of the legacy portal "deeper" than the homepage), though that may be due to the way the legacy application was built.

## What is the correct process for us to initiate the intake for VA.gov to add content to the VA.gov homepage?

### Answer
I'd start with the content team [centralized content team](https://dsva.slack.com/archives/C01K37HRUAH). There may be an intake process, especially if you're adding links to the home page. 

## How can we get the form made available on VA.gov?

### Answer
There is a [collaboration cycle process](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/) that should be followed. It includes things like design intent review, architecture intent review, etc. The final step is the staging review, where they review your form, the entry points, identify accessbility concerns, address content issues. After that you'll need a rollout plan. We use feature flags that allow a percentage rollout and typically rollout first to 5% of logged in users, then 25%, then 50%, etc..

## Technical Notes

### Can a lower env VA.gov talk to a lower env AccessVA?
**AccessVA SQA**: https://sqa.eauth.va.gov/accessva/?cspSelectFor=oauth.YOUR_APP

**Static page**: The static page is maintained by the [centralized content team](https://dsva.slack.com/archives/C01K37HRUAH). You'll likely have to go through an intake process with them if you haven't already. That slack channel is a good place to start. You'll also need to create and register a widget to get the sign in functionality on the page. They can help guide you through that as well.

**Frontend Code locations for the BTSSS widget on the [static page](https://staging.va.gov/health-care/file-travel-pay-reimbursement/)**. To link out to the VCAP claimant portal from VA.gov in a similar way, you'd create your own folder like this one:
* [Main Folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/static-pages/BTSSS-login)
  * [UnauthContext]() - for when the Veteran hasn't signed in to VA.gov yet (see image)
  <br/>
  <img width="400" alt="image" src="https://github.com/user-attachments/assets/486bb2d3-4188-483b-b433-c93cdc2058a8" />
  
  * [AuthContext](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/BTSSS-login/AuthContext/index.jsx) - for when the Veteran has already signed in to VA.gov (see image)
  <br/>
  <img width="433" alt="image" src="https://github.com/user-attachments/assets/ddd62d08-d924-41d7-b0a7-e178124583fb" />

  
