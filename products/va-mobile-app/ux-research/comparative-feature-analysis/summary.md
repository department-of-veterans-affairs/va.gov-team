# Comparative Feature Analysis Summary

August 12, 2020

# Background and goals
We undertook an audit of native mobile apps of all kinds to answer the following questions: 
1. How do other successful apps handle the types of features we plan on including in an MVP flagship VA mobile app?
2. What do these apps do well that we can apply to our context? What can we do better?

## Analysis Summary

![Image Chase and NYT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Auth-Unauth-Features.png)
| **VA feature applicability** | Combination of auth + unauth features | 
|:---|:---|
| Apps we looked at | Chase Bank, The New York Times | 
| What we learned | In the **Chase** app, since a majority of features are sensitive things like bank balances, the home screen is biometric sign in & users need to log in even to use features that don't require auth, like location finder. In the **NYT app**, the aunauth state affords readers mostly the same experience. Because being signed in isn’t as central to the UX, things aren’t hidden behind it. Users hit a paywall only when they've consumed a certain amount of articles. | 
| Takeaway | Because our app is focused on Veterans who are already engaged with VA and our features are focused on delivering them personalized information, we should require authentication to use the app while making VCL and Facility Locator accessible from the sign in page. |

![Image GruhbHub and Doordash](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Tracking-Status.png)
| **VA feature applicability** | Tracking a status | 
|:---|:---|
| Apps we looked at | GrubHub, Door Dash, Amazon | 
| What we learned | Food delivery apps prioritize a visual display of what progress need to happen for the task to be completed, include a title of the current step in the process, provide an ETA for task completion, and an action button to get in contact with a person who can help. | 
| Takeaway | We have most of the information we need in the CST design already. We should maintain the experience of VA.gov for the app of offering three tabs of information: Status, Files, and Details. We should display Status first and include a clear visual element on that tab.  |
| Other | The [status tracking audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/April-2020-dicovery-concept-usability/Comparative%20analysis_%20Status%20tracking.pdf) performed by the Claim Status Tool team is helpful to review as well.  |

![Image Documents 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Documents-To-Consumer.png)
| **VA feature applicability** | Documents (app to user) | 
|:---|:---|
| Apps we looked at | ComEd, Collective Health | 
| What we learned | The home screen of the **ComEd** app displays the latest bill balance in text and provides a CTA to the full bill, which is the exact same bill that comes in the paper mail. **Collective Health** displays an insurance card and pulls information from that card into a text table below the actual image of the insurance card. | 
| Takeaway | Displaying PDF documents is a convention that banking and utilities use. We can take this approach for VA.gov profile documents. If possible, we can surface some information from within the document - the title at a minimum, anything else would be a bonus.  |

![Image Documents 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Documents-From-Consumer.png)
| **VA feature applicability** | Documents (user to app) | 
|:---|:---|
| Apps we looked at | Chase Bank | 
| What we learned | Chase has a screen just for depositing with a blank spot for the screenshots that are needed for the document to be accepted. | 
| Takeaway | We should be very clear about what a user needs to upload via the app for the document to be considered accepted by VA. We should offer a list of files needed if there are multiple, and house CTAs to upload along with a description of why that document is needed on a detail screen, allowing users to focus on uploading one file at a time. |

![Settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Profile.png)
| **VA feature applicability** | Settings | 
|:---|:---|
| Apps we looked at | Slack, Medium, LinkedIn | 
| What we learned | **Slack** titles utility/profile features as “You” used as a catchall to get to all of your personal information (profile, notifications, etc). In **ComEd’s** app, Notifications, Account, and Help is grouped together under ‘More’. In the **Medium** app, On the Profile screen the link to the actual profile is up top and all utilities are below like settings, help, etc.  | 
| Takeaway | We recommend pursuing a bottom tab navigation & allotting one space for 'More' (and testing that name with Vets). Housing all utilities under it is the most efficient use of space and a standard way to group profile and utility features. |

![Home screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Homescreen.png)
| **VA feature applicability** | Home screen (single purpose) | 
|:---|:---|
| Apps we looked at | Utilities (ComEd, People's Gas), Fitness (FitBit) | 
| What we learned | **ComEd and Peoples Gas** both lead with the next amount due on the homescreen. Because the apps are focused on one utility they center the most relevant piece of information from billing and put it front and center. **FitBit** is similar - there are community & premium features but the core metric of steps per day is shown as a dashboard on the home screen.  | 

| **VA feature applicability** | Home screen (multi-purpose) | 
|:---|:---|
| Apps we looked at | One Medical, State Farm | 
| What we learned | **One Medical** has made their main features - ones to allow patients to coordinate care - a the home screen, and offers several CTAs to different options. **State Farm** follows a similar approach. There are CTAs to claims, ID cards, and roadside assistance on the homepage.  | 
| Takeaway | Since our app will offer users the option to complete different tasks that are unrelated from each other, and there is no one, cear central metric or task we can put front and center, we should treat the home screen as jumping off place that offers the most highly used features. Because our app’s purpose is to enable Vets to do things quickly, we should lean into notifications when they exist and make it very clear, when a user returns to the app, what has changed since their last visit and what they need to pay attention to. |


![Home screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/Facility-Locator.png)
| **VA feature applicability** | Facility locator | 
|:---|:---|
| Apps we looked at | UPS Dropbox locations (Rent the Runway), Navigation (Google Maps) | 
| What we learned | **Rent the Runway** take the approach of giving minimal information - all the user needs to know is where to go and if the location is open/closed. **Google Maps** takes the approach of giving as much information as possible to help the user make a decision about where they want to go. | 
| Takeaway | We know from Facility Locator user research that Vets commonly use FL to pan visits to new VAMCs, and want to get as much information as they can. We should consider replicating the VA.gov FL experience and pull data fields from the Access VA API and Facilities API.  |

| **VA feature applicability** | Managing notifications | 
|:---|:---|
| Apps we looked at | Medium| 
| What we learned | Medium gets very granular about notifications, allowing users to have a lot of control over exactly what they hear about. | 
| Takeaway | While we should test this with Veterans, it seems as though for the types of notifications we’re offering, we could offer the option for them to be turns on or off at the category level (e.g. all claims notifiations, all health notifications, etc).  |

| **VA feature applicability** | Veterans Crisis Line | 
|:---|:---|
| Apps we looked at | VA.gov | 
| What we learned | VA.gov offers a consistent CTA to talk to the Veterans Crisis Line about the main navigation on the mobile site, spanning the width of the device. This echos the desktop experience, where the CTA is also persistent and available on every page. | 
| Takeaway | We should consider integrating VCL as one of the main bottom bar navigation items in the MVP app so it’s always accessible.  |




