# Research Plan for Authenticated Experience My VA - Dot Indicator/Slim Alert, March 2024
_This includes additions to and revisions of the original plan created by Angela Agosto in October 2023_

## Background
The Authenticated Experience and MHV landing page teams recently shared a common need for an indicator on our pages for unread or unseen things. We realized that both authenticated landing pages could benefit from a badge-like component that is either a dot or a number to indicate this next to certain links. [The Authenticated Experience team conducted an experiment](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator#project-outline-create-dot-indicator) with a red dot next to our "Go to your inbox" link to indicate unread messages in September 2023 and saw a [47% increase in clicks](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator#measuring-success) as compared to our previous unread messages link. 

With the initial experiment deemed a success, we are looking to potentially expand upon the dot indicator, identify when it's appropriate to use different types of badges or indicators, and learn more about the accessibility implications of this indicator.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/dot-indicator). 

#### Slim Alert in Claims Status Cards
In addition, we are using this as an opportunity to test a new, experimental component in the VA Design System, [the slim alert contained with claims status cards](https://design.va.gov/components/card#claims-status) recently introduced by the Benefits team. As this is another type of notification that prioritizes the attention of users (specifically when more evidence/info is required from Veterans), it's fitting to include this in the study as well and gain an understanding of how the messaging of the slim alert is perceived.

### OCTO Priorities 

Especially since My VA is now the next destination when a Veteran logs into VA.gov, it is critical that we present the most relevant updates as quickly and clearly as possible on the page. Accomplishing this through the use of indicators, if successful, would fulfill [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) of solidifying the VA.gov platform and enhancing Veterans’ personalized online experiences.

### Veteran Journey
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals and Questions	
<b> 1. Determine the effectiveness of dot and badge indicators to draw attention to important updates and when it's appropriate to use each kind of indicator. </b>
 - Where on VA.gov do users expect to see these types of notifications?
 - What do users think a dot means in different use cases? What about a badge?
 - How do users expect a dot or a badge indicator to disappear?
 - Are there instances where a dot or a badge introduces confusion rather than being useful?

<b> 2. Test with assistive tech users and colorblind participants in order to determine the accessibility implications of the dot or badge indicator. </b>
 - What aria labels would give a screen reader user as close to the same experience as a sighted user? When should aria labels be surfaced in the order of the page?
 - How do screen reader users experience dot and badge indicators as notifications on other websites? What's an ideal experience and what's not ideal?
 - Does colorblindness prevent users from being able to see and interpret a red dot or badge indicator? What colors are most accessible for them to interpret notifications on other websites and apps?

<b> 3. Gain understanding of how slim alert banners embedded in claims cards are interpreted by users in order to assess how we might use/improve them for My VA </b>
-  How do Veterans with experience in filing claims understanding the messaging displayed? 
- What additional information might be valuable for Veterans to see on these banners and cards?

### Outcome
We will be sharing our research findings with other VFS teams who are interested in an indicator, such as the cartography team. From there we will decide (collaboratively) if it makes sense to proceed with experimental design to add an indicator to the VA.gov design system.

### Hypothesis
[Past research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#key-findings) for My VA tells us that users want to see timely personalized updates upon logging into VA.gov. They expect a mix of links and widgets to complete tasks on their homepage, and want clear labels to understand next steps. It is our hope that additions like indicators for unread, unseen, and important things will help to deliver this kind of personalized and streamlined experience that users expect when logging into VA.gov.

We hypothesize that:
- There will be a need for more than one type of indicator, i.e. both a badge with a count and a dot, as we've seen in other popular design systems, such as [Material Design](https://m3.material.io/components/badges/overview).
- We expect that we may need to use a dark red color for the indicator to be useful for colorblind and low vision users, but that they will still be able to see and interpret the indicators.
- We expect that the aria labels we have implemented for dot and badge indicators will deliver as close to the same experience as possible for screen reader users as a sighted user would have.
- We expect that there may be interesting findings for <b>when</b> screen reader users would like to be alerted to indicators. We think there may be a better way to announce indicators than waiting until a user navigates to the specific link where the indicator is.
- We expect the new content in claim card slim alerts for evidence requests will will be effective in conveying that a claim requires Veteran attention/action to provide more documentation and details. 

## Methodology	
We will conduct one-on-one remote usability sessions via Zoom for this study. We need to test with assistive tech users in code to answer some of our research questions but we likely cannot use real user accounts because it would be difficult to find users who meet the specific criteria and won't have dismissed indicators already. Therefore, we plan to use CodePen for user testing. 

### Research materials
- [Link to conversation guide for sighted users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/research/2024-03%20Dot%20Indicator%20and%20Slim%20Alert%20Usability%20Study/dot-indicator-convo-guide.md)
- [Linked to conversation guide for screen reader users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/research/2024-03%20Dot%20Indicator%20and%20Slim%20Alert%20Usability%20Study/dot-indicator-convo-guide-for-screen-readers.md)

### Recruitment approach
We will target Veterans who use assistive tech (screen readers and magnification tools, colorblind users, and those with cognitive impairments to answer our accessibility research questions. We will use Perigean to recruit them.

### Recruitment criteria
Total Requested: 16 (NOTE: this ultimately became 22, due to no shows, cancellations, and the need for more assistive tech users)
Completed Sessions Needed: 12 (including at least 3 screen reader users, 3 magnification/zoom users, 3 colorblind users, 2 cognitively impaired users)
User type: Veterans only

[Link to recruitment request ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/411)

## Timeline
Research dates: 

### Prepare
Please schedule a 15-minute kick-off session between us and Perigean. Potential dates and times for kick-off meeting:
3/1/24 1PM ET and on, 3/4/24 any time, 3/6/24 (specific times subject to change), 3/7/24 (specific times subject to change)

Pilot session info:
* Pilot participant email: Steven Straily, steven.straily@agile6.com
* Date and time of pilot session: 2/23/24

### Length of sessions
* Session length: 60 minutes, for all user types
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 4

### Availability
Testing should take place from March 11th - March 15th, March 18th-19th, with 3-4 tests each day. 
	
## Team Roles	
Please list the people who will be serving in each role.
- Moderator: Matt Marino (matt.marino@adhocteam.us)
- Research guide writing and task development: Matt Marino and Angela Agosto	
- Participant recruiting & screening: Perigean
- Project point of contact: Matt Marino
- Participant(s) for pilot test: Steven Straily, Jamie Klenetsky Fay (CAIA, screenreader)
- Accessibility specialist (for sessions where support for assistive technology may be needed):	TBD (likely Jamie Klenetsky Fay)
- Note-takers: TBD
- Observers:	
samara.strauss@va.gov
ana@adhocteam.us
allison@cityfriends.tech
daniel.miller@agile6.com
