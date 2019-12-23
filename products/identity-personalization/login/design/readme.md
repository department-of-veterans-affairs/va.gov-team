# Identity: Design
This document summarizes all of the design projects from mid-2018 to early-2019. 
* You may also want to refer to [Identity User Research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Research/README.md).
* For an overview of the Identity product, see the [Identity readme](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/README.md).

## Sign In modal

#### Live/current Sign In modal
This version on of the Sign In modal is currently live on VA.gov
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/User%20Login/design/VA.gov-sign-in-modal-2018.sketch)
* [User Research: Signing in with screenreaders](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/Research/508_Usability_Study)
* [User Research: UX review of Sign In process](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/Research/508_Usability_Study)

#### Redesigned Sign In modal
This is the redesigned version of the Sign In modal. The plan is to implement this new modal as an experiment. Our hypothesis is that the new, minimal design will increase Sign In / Create Account conversions.
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/User%20Login/design/2019/Sign_In_Modal.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/DNQJQQ79JKB#/347188092__SignInModal-Desktop_V3)

## Sign In error messages
These are all of the possible error messages that may occur during the Sign In process for VA.gov.
* [Documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Error%20Messages/Sign_In_Error_Handling.md)
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Error%20Messages/%2316239_Sign_In_Error_Messages.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/5TQPWHKDQPK)

## Sign In help desk request form
This is a redesign of the Sign In help desk request form. 
The current version of the form is located [here](https://www.accesstocare.va.gov/sign-in-help?_ga=2.218429854.623793107.1555443109-100322104.1541696342).
This work is blocked. See [#17146](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/vets.gov-team/17146). 
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/Help_Request_Form/Design)
* [Invision prototype](https://adhoc.invisionapp.com/share/EPQCP492AGH#/346186054_000_TOC)

## Confirm your email (email)
This confirmation email is sent to users who have signed in to VA.gov for the first time. 
The email was implemented and is owned by the ID.me team.
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/Design/VA.gov-Email-Notification-Confirm-Your-Email.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/QTPH67Y37GW#/335345958_VA-gov_-_Context_-_Confirm_Your_Email_Address_-_Notification)

## Contextual messages/CTAs: Health tools 
Contextual messages/CTAs appear on the health tool pages to prompt users to sign in, create an account, verify their identity, and create/upgrade their My HealtheVet account so that they can access health tools on My HealtheVet from VA.gov. The contextual messages/CTAs also include error messages. (These are closely related to the My Health link pages.)
* [Matrix](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/%5B%2311505%5D%20VA.gov%20MHV%20SSO%20Matrix.md)
* [Error message documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Error%20Messages/MhvAccountCreation_ErrorHandling.md)
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/Design/VA.gov_MyHealtheVet_SSO%20Scenarios_2019Apr10.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/EJO686H9AS3)
* [Research](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/SSO/Research)

## My Health link pages
When users are signed in to VA.gov, they have access to the My Health link in the header. Clicking this link navigate them to My HealtheVet as a signed in user. There are various path that a user may encounter depending on their level of access, which is captured in this flow.
* [Sketch](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/Design/VA.gov_MyHealth_Link_and_T%26C.sketch)
* [Invision](https://adhoc.invisionapp.com/share/9XRBC0J4TEH)

## Contextual messages/CTAs: Non-health tools 
Contextual messages/CTAs appear on some non-health tool pages to prompt users to sign in, create an account, or verifiy their identity so that they can check their GI benefits, apply for disability benefits, view claims and appeals, get a VA benefit letter, or apply for a Veteran ID card.
* [Documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/%5B%2314474%5D%20UX%20Matrix%20for%20Navigating%20to%20Tools%20Requiring%20Authentication.md)
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/Design/VA.gov%20-%20Non%20Health%20Tools.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/MUOC4SMW8SG#/322898547_TOC)

## Session timeout
This work includes a warning (required for 508 compliance) that pops up after users are inactive on VA.gov for more than 30 minutes. If the user's session expires, a Session Expired error page displays. 
* [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Session%20Expired/session_expired.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/9KQW9933PSE)

## Older resources
* [2017 - ID.me and Vets.gov Usability Research](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/Research/2017_ID.me%20Vets.gov%20Usability)
* [2017 - In-person proofing discovery](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/2017_Discovery_In-Person-Proofing)
