
# Sprint 0 Product Brief: Getting Out/Transitioning User State

[Epic: Getting Out/Transitioning User State#4492](https://app.zenhub.com/workspaces/va-mobile-epics-636d76f8c818bf0010e50a41/issues/gh/department-of-veterans-affairs/va-mobile-app/4492)


## Problem Statement

There is a transition that service members who are preparing to leave active duty (called [“Getting Out” in the Veteran lifecycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) or ETS/ETSing) experience where they are beginning to interact with VA services  but are not yet classified as Veterans. This period is considered a “[moment that matters](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)” which may have a significant impact on Veterans’ experience. We also know that transitioning service members experience varying degrees of support during this “Getting Out” process and a lack of ongoing benefits training leaves Veterans at a loss for what they're eligible for and how to get started with benefits.<sup> 1,2,3,4,5</sup>

During this transition period, service members may have signed up for benefits (often through a pre-discharge claim<sup>6</sup>) and/or have credentials (like DSlogin or ID.me) that they can use to get into the VA Mobile app. While we know that every service member goes through this transition period, we are not sure *what* exactly folks in this stage experience when they visit the VA Mobile app or how many people are visiting the app during this transition period. For those Veterans who have made a pre-discharge claim, the period lasts 90-180 days. In the case of others, we are not sure how long the period lasts.

Because these folks can log into the VA Mobile app, they are a use case we should consider including in our scope. We would like to understand more about the current experience for folks who are in the Getting Out/Transitioning user state and address any potential issues.



1. [Review of User Research: VA Mobile App Personalization (Jul 2022)](https://docs.google.com/presentation/d/1J10VcE7PGN9emVT1vtqO4-5XRYc3Jycm5zJ4QJnc19g/edit#slide=id.g1402a2576fa_0_20)
2. [Veteran health experience and patient portal research (VA internal, March 2021)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/OCTO%20health%20research%20report%2022%20Mar%202021.pdf)
3. [Harvard-VA Executive Presentation - Meeting veterans where they are: their smartphones (Harvard Students, May 2020](https://docs.google.com/presentation/d/161RAuAzRjqx3qeS-w3O1rYMZSDh8QoTu/edit#slide=id.g8407c2ba46_0_473))
4. [Benefit planning, applications, and claims research - VCRD D5 Research Readout (Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
5. [Digital Health Modernization Generative Research Study 1 #6 (VA internal, Dec 2020)](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/6)
6. [Pre-Discharge Claim | Veterans Affairs](https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/) 

### Current Experience



* We’re not sure - we have not specifically designed for this experience in the VA Mobile app, so this needs discovery/investigation.

### Pain Points



* We’re not sure - we haven’t specifically researched this experience in the VA Mobile app and we are not currently tracking this.
* Anecdotally, during the Blind/Low-vision study, we spoke with a research participant who was in this transition period (they reported that they had completed a [Pre-Discharge Claim](https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/)) who had a friend who had recently discharged recommend they download the VA mobile app. While they could log into the app with their credentials, every section showed a generic loading error message. The app did not acknowledge their in-between state or set expectations by explaining what might be causing the errors.  \
We’re not sure if this experience was limited to this particular user or reflects the experience of all folks in this transition stage.


## Assumptions and Level of Confidence



* A significant enough number of Veterans who are getting out/transitioning are downloading and accessing the VA Mobile app.
* Transitioning service members who have credentials that allow them to log into the VA Mobile app are “app users” whose experience we should consider (or at least future app users) in terms of our app’s desired scope.
* The current experience for transitioning service members in our app needs consideration and improvement (we have not designed specifically for this use case).
* The number of Veterans who are [digital natives](https://en.wikipedia.org/wiki/Digital_native) (born during or after 1990) is increasing, and as a result, Veterans transitioning out of service may have greater comfort with and expectations of mobile (and of the VA Mobile app) as a medium/tool.
* A poor experience in the VA mobile app in this context will erode trust in VA and cause new/potential users to abandon our app and seek other channels for support (never to return).
* We can do something in the VA mobile app to positively impact the user experience based on information that is exposed to the client when someone logs in without introducing unnecessary technical complexity.


## Risks



1. The number of Veterans who are getting out/transitioning that are downloading and accessing the VA Mobile app isn’t significant enough to invest in improving the experience, so we spend time researching or building something unnecessarily complex  that isn’t worth the effort compared to the impact it makes.
2. If we don’t officially address who we consider to be “app users” before beginning this work, we could end up creating a solution for use cases that are not in scope of the app.
3. The signals we get back from the various APIs may limit what we can do in terms of addressing specific contexts.


## Business Goals



* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):
    * <span style="text-decoration:underline;">Logged-in users</span> can easily track applications, claims, or appeals online
    * Logged-in users can update their personal information easily and instantly
    * Veterans and their families can find a single, authoritative source of information
    * Logged-in users have a personalized experience, with relevant and time-saving features
    * Veterans and their families trust the security, accuracy and relevancy of VA.gov


## Roadmap

TBD

**V1**

* 

**V2 and beyond**

* 


## Technical Approach



* Discovery with cross-functional teams (internal mobile team, SIS and other partners)
* TBD


## Measuring success 



* **Recently transitioned Veterans who are app users report a positive/supported user experience.**
* **Number of complaints about the app being broken, down, or unavailable from transitioning Veterans decreases across channels (app stores, reddit).**
* ***How can we measure whether improving the transition experience improves the lived experience of specific underserved Veteran groups?***

	


## Stakeholders



* VA Mobile Product Owners
* Veterans Experience Office? They may have thoughts on what’s lacking/how they help bridge the knowledge gap. 


## Important Links

[Getting Out/Transitioning - Desk Research](desk-research/) 
