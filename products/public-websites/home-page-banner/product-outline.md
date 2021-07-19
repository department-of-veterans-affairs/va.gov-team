## Product Outline

Since the launch of VA.gov, the Website has provided "emergency communications/messaging" from VA leadership by deploying a Home Page banner alert 

**How might we make the Veteran experience of starting online applications more seamless and successful?**


## Solution

We want to move/consolidate these pre-requisite Wizard steps with the application tool landing page in order to:

1/ Make the Veteran experience of starting their online application more seamless. (Today, they have to find the Wizard on a content page, and from there, fill out the wizard and then are sent to the tool landing page.)

2/ Make apply online CTAs from tier 2 content and other content outside of the benefit hubs more clear and direct. Example: from our mvp form detail landing pages or from the modernized mvp form search results.

There are three benefits where the wizards (react widgets) will be moved from the content (e.g. How To and Eligibility) to the application introduction pages:

**Disability**
https://va.gov/disability/eligibility
https://va.gov/disability/how-to-file-claim
--> Moving to: https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction

**Higher Level Review**  
[Invision mockup of new Wizard in development](https://vsateams.invisionapp.com/share/W5U21BDFTQK#/screens/404075662)
https://www.va.gov/decision-reviews/higher-level-review/
--> Moving to: URL TBD

- [Discovery Epic with Solution User Flows](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6315)

**Education**
https://va.gov/education/eligibility
https://va.gov/education/how-to-apply 
--> Moving to: https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction

Important to note for the Education application flow:

- There are six different types of education benefits that the applying veteran may be qualified to receive via the Wizard
- New functionality will need to be implemented (e.g. a cookie) to ensure that the Wizard does not display again on one of those application pages, if the veteran has already completed the Wizard process via the original landing page

Example:

1/ From the GI Bill content page, the user clicks on a link to go to the GI Bill application page.
2/On that page, I answer the Wizard questions.
3/ The Wizard determines that the user should actually be filing out the Post-9/11 education form and links the user to that application.
4/ The user clicks over to the Post-911 education application start page. The Wizard does not display on this page because the app page knows I've already completed the Wizard.
5/ The user fills  out the correct education form.

**Wizard to Correct Form Visual Guide**
[https://app.zenhub.com/files/133843125/195a43c0-4a84-4611-a44e-4f9472e09135/download](https://app.zenhub.com/files/133843125/195a43c0-4a84-4611-a44e-4f9472e09135/download)

**Personalized Care & Planning Guidance (Form 28-8832)** 
Of note, a new "gating wizard" is also being introduced on the new PCPG page.  Here is a [flow diagram](https://xd.adobe.com/view/879cf230-f3ce-4204-79ba-c3453b0bcc09-f1ad/screen/28f5d3f7-c2c1-49c0-bfa1-3791dba4dd7e/).


## High Level User Story/ies

- As a user, I need to apply for the correct benefit online in a way that is quick, easy and ideally error-proof.

## Requirements

- Per @AZSchneider, ideally must preserve the ability to throttle traffic to impacted app pages via Flipper
- For the content elements and structure on the Application page with the Wizard embedded, @andaleliz recommends the approach -- with H2's -- outlined by @sporeboy [here.](https://xd.adobe.com/view/17b9e3b9-abb2-4c17-6619-adcc54353687-6188/screen/4daff902-5ad6-4593-9444-a57502bc84df/8832-Wizard-1ALT-3)
- Once a user has completed the wizard, the wizard should be hidden during their current session (e.g. based on MDN’s description of session storage here https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## Hypothesis or Bet
**If** the Wizards are moved to the application page **then**  there will be a reduction in the number of ineligible/incorrect applications received by VA benefits administrators.

## OKR
_Drive more online use of benefits applications as they are more discoverable, resulting in more correct or eligible applications received_
 - Increase usage of how to apply wizards
 - Reduced bounce rate from wizards
 - Reduction in number of "incorrect" applications received (veterans are applying for the wrong benefits because they are not using the gating wizards.

_Success Metrics Note:_  The Analytics team is recommending the tagging/tracking approach already taken with the education benefits wizard -- e.g. GA can report on “Started Education How To Apply - Did not Complete [Funnel Segment]” --  a good proxy for success if we apply this across the HLR and Disability wizards as well. The KPI would be to show reduced bounce rate on the Wizards – implying that a more informed veteran would then be prepared to apply (e.g. reduction in ineligibles).

## Definition of done
The how to apply wizards are live in production across the identified pages, resulting in reduced Wizard bounce rates.

*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## Screenshots

- Mural board flow diagrams are [available here](https://app.mural.co/t/vsa8243/m/vsa8243/1585244567898/2167d6cafb30ce4a81e2ea8a082a6a832293e11c).

**Disability - New User Flow**
<img width="1072" alt="Screen Shot 2020-05-29 at 3 27 05 PM" src="https://user-images.githubusercontent.com/63107147/83297663-f71eb900-a1c0-11ea-8a95-58cc3225b745.png">

**Education - New User Flow**
<img width="1068" alt="Screen Shot 2020-05-29 at 3 27 22 PM" src="https://user-images.githubusercontent.com/63107147/83297705-0c93e300-a1c1-11ea-99d4-9eef787c68c6.png">

**Higher Level Review - New User Flow**
<img width="1068" alt="Screen Shot 2020-05-29 at 3 27 13 PM" src="https://user-images.githubusercontent.com/63107147/83297734-1ae1ff00-a1c1-11ea-8ade-7fb5624863e4.png">

## Status 

- Cross-product Implementation Tracker is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/status_reports/implentation_tracker.md)
- Status meeting notes kept [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/status_reports/status.md).
- Collab Cycle checklist [here.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7549)


*Take into consideration Accessibility/QA needs as well as Product, Technical, and Design requirements.*

## How to configure this issue
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `tools-be`, `tools-fe`,`content-ia`, `service-design`, `vsa-*`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)
