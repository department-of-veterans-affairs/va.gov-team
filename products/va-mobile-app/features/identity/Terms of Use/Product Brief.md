# Sprint 0: Term of Use 

[Epic: 6120](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6120)


### Background

VA would like all users utilizing VA.gov and its surrounding sites and services to be presented with a unified version of the Terms and Conditions.  Additionally, they want to be able to track acceptance on a user-by-user basis, including when revisions are made to the terms and conditions and updates are presented to the user.

**Initiative Goal:**

Present Veterans with the ability to accept or not accept TOU.  

* Accepting TOU, Veterans can continue to use online servicing for all VA applications (i.e., web, mobile, etc) 
* Not accepting TOU, Veterans will no longer have access to **online** self servicing tools but will continue to have access to VA services.

**User Experience:** [Web Figma Prototype](https://www.figma.com/proto/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?type=design&node-id=381-37&t=D8gUnfhvZbyOxtRu-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A493)

**What does this mean for Mobile?**

* Minimal work for mobile. The TOU experience will be incorporated as part of the sign in experience as a webview (not building out in native mobile app components).

**User Experience**

    * Upon login; user will be prompted with VA Online Services Terms of Use
        * If the user Accepts, they are able to continue servicing on the VAHB app.
        * If the user Declines, they will be logged out of the VAHB app and messaging displayed explaining what’s next.
    * Users will have the opportunity to accept TOU if they previously declined.

**Engineering/QA**

* FE: TBD
* BE: N/A
* QA: Potential testing 

**Content** 


* Content will need to review TOU to ensure it’s explicit that VA: Health and Benefits mobile app is included in these terms and to ensure that the copy that is shown is broad and not VA.gov-specific.
    * Rachel Han brought this up during our demo meeting with the Core Identity Team on 8/31. Tom Black from Core Identity took note of this. Danielle Thierry from CAIA was also notified.
    * If any content changes are needed, Misty will need to work with Danielle to update. Danielle will help coordinate between Core Identity and legal SMEs.

**UX:** N/A


### Risks: 


### Roadmap

**Identity Timeline:** Target production rollout early October


### Technical Approach

* Testing coordination 
* Dependent on decision to be made to include a link out to TOU, then this will require FE development


### Stakeholders

* Carnetta Scruggs 
* Tom Black, Core Identity Team
* Danielle Thierry, CAIA (Sitewide Content) Team
* Alexander Garcia, Identity Core Team Lead Frontend Engineer


### Open Questions


1. Identity Team: Is there a need to delete authentication and when does it become enforceable? May want to consider doing staggered deletion objects
* Will this work for people who are still on the version of the app that use IAM? Joe Niquette: we are not asking IAM to enforce ToU for mobile users, but we may need to if you can’t force them to create a new session that goes through our USiP
    * How many people are still on IAM?
* Would we want to give users the ability to link out to review TOUs at a later time?  If so, what is the web URL.  Joe Niquett: as for linking to a version of the Terms of Use, we are not hosting a static version as of now, but this requirement may come from the business/legal side in the future. The only version we plan to host is the viewable form within the ToU page itself

**Action Items:**

* Provide the identity team with current links we show on mobile today regarding TOU.  What info do we show in privacy policy [https://www.va.gov/privacy-policy/](https://www.va.gov/privacy-policy/) . Done 9/6

See #va-mobile-app thread: https://dsva.slack.com/archives/C018V2JCWRJ/p1694012886473069


### Measuring success 

	What metrics can we watch to see if our efforts are reaching the desired outcomes?


### Important Links
