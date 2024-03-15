# Identity: Design
This document summarizes all of the design projects from mid-2018 to early-2019. 
* You may also want to refer to [Identity User Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/research).
* For an overview of the Identity product, see the [Identity readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/README.md).

## Sign In modal

#### Live/current Sign In modal
This version on of the Sign In modal is currently live on VA.gov
* [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/design/va.gov-sign-in-modal-2018.sketch)
* [User Research: Signing in with screenreaders]()
* [User Research: UX review of Sign In process]()

#### Redesigned Sign In modal
This is the redesigned version of the Sign In modal. The plan is to implement this new modal as an experiment. Our hypothesis is that the new, minimal design will increase Sign In / Create Account conversions.
* [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/design/sign-in-modal.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/DNQJQQ79JKB#/347188092__SignInModal-Desktop_V3)

## Sign In error messages
These are all of the possible error messages that may occur during the Sign In process for VA.gov.
* [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/sign-in-error-handling.md)
* [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/%2316239-sign-in-error-messages.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/5TQPWHKDQPK)

## Sign In help desk request form
This is a redesign of the Sign In help desk request form. 
The current version of the form is located [here](https://www.accesstocare.va.gov/sign-in-help?_ga=2.218429854.623793107.1555443109-100322104.1541696342).
This work is blocked. See [#17146](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/vets.gov-team/17146). 
* [Sketch file]()
* [Invision prototype](https://adhoc.invisionapp.com/share/EPQCP492AGH#/346186054_000_TOC)

## Confirm your email (email)
This confirmation email is sent to users who have signed in to VA.gov for the first time. 
The email was implemented and is owned by the ID.me team.
* [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso/design/va.gov-email-notification-confirm-your-email.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/QTPH67Y37GW#/335345958_VA-gov_-_Context_-_Confirm_Your_Email_Address_-_Notification)

## Contextual messages/CTAs: Health tools 
Contextual messages/CTAs appear on the health tool pages to prompt users to sign in, create an account, verify their identity, and create/upgrade their My HealtheVet account so that they can access health tools on My HealtheVet from VA.gov. The contextual messages/CTAs also include error messages. (These are closely related to the My Health link pages.)
* [Matrix]()
* [Error message documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/mhvaccountcreation-errorhandling.md)
* [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso/design/va.gov-myhealthevet-sso-scenarios-2019apr10.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/EJO686H9AS3)
* [Research]()

## My Health link pages
When users are signed in to VA.gov, they have access to the My Health link in the header. Clicking this link navigate them to My HealtheVet as a signed in user. There are various path that a user may encounter depending on their level of access, which is captured in this flow.
* [Sketch](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso/design/va.gov-myhealth-link-and-t%26c.sketch)
* [Invision](https://adhoc.invisionapp.com/share/9XRBC0J4TEH)

## Contextual messages/CTAs: Non-health tools 
Contextual messages/CTAs appear on some non-health tool pages to prompt users to sign in, create an account, or verifiy their identity so that they can check their GI benefits, apply for disability benefits, view claims and appeals, get a VA benefit letter, or apply for a Veteran ID card.
* [Documentation]()
* [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso/design/va.gov-non-health-tools.sketch)
* [Invision prototype](https://adhoc.invisionapp.com/share/MUOC4SMW8SG#/322898547_TOC)

## Session timeout
This work includes a warning (required for 508 compliance) that pops up after users are inactive on VA.gov for more than 30 minutes. If the user's session expires, a Session Expired error page displays. 
* [Sketch file]()
* [Invision prototype](https://adhoc.invisionapp.com/share/9KQW9933PSE)

