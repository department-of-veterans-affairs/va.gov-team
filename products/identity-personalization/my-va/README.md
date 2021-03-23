# Product outline: My VA

Last updated March 23, 2021

### Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0; my-va-dashboard
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|AJ Jakabcin |Product Manager| ana@adhocteam.us |
|Liz Lantz |Discovery researcher| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Cassandra Allen |Designer| callen@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie| FE Engineer|	shallie@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

### Table of Contents

- [Overview]()
- [Problem Statement]()
- [Opportunities]()
- [User Outcomes]()
- [Business Outcomes]()
- [Measuring Success]()
- [Solution Narrative]()
- [Screenshots]()

## Overview

My VA provides Veterans with a direct route to their most critical tasks and updates based on their unique circumstances at the VA.  

## Problem Statement

When Veterans log into VA.gov, [they expect to be met with an experience that reflects their personal circumstances at the VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans). However, they currently see a generalized homepage with tasks that may or may not apply to them. There is no way for them to easily see a consolidated view of their benefit statuses or the tasks that need their attention or action.


Opportunities
"How might we... _______" statement re-framing the challenge as an opportunity
We can fix this by providing veterans with an action-focused personalized landing page when they are logged in to VA.gov. This landing page should do the following (in priority order):

Top priority: Elevate action items 

There are two kinds of action items we need to prioritize:

Actions a Veteran needs to take to help move along processes related to their benefits: Veterans may or may not know they need to take these actions, so we need to prompt them accordingly.

Examples: Alerting Veterans to unread messages; Prompting Veterans to upload evidence to a disability claim.

Actions a Veteran intends to take when they come to VA.gov: Veterans come to VA.gov with their own set of priorities. We can elevate popular actions so that Veterans can easily complete common tasks on VA.gov.

Examples: Check claim status; refill a prescription; change an address.

Communicate benefit status & updates that don’t require action

In addition to seeing important actions, Veterans expect to be able to quickly assess the current status of their benefits at the VA. They also expect to see updates to their benefits even if those updates do not require any action from them. 

Examples of benefit status: Whether a Veteran receives a benefit, has an application in progress, or has not received or applied for a benefit.

Examples of updates that don’t require action: A change in disability rating; A prescription has shipped.

Suggestions

The VA may have suggestions for Veterans on how they can maximize their benefits or care, and some of these may make sense to elevate on My VA. However, these suggestions do not have anything to do with processes a Veteran might already have in flight, and these are lower priority than other notifications or benefit status information.

Examples: Sign up for a COVID vaccine; benefit eligibility or recommendations.
Desired User Outcomes
Why would a user want to use this?

-	Primarily, a Veteran would want to use the personalized landing page described above because it would save them time when interacting with the VA. The more we surface, consolidate, alert, and guide up front, the quicker Veterans can complete tasks, receive benefits, and get back to their lives. 

With this problem solved, what should users be able to do/achieve that they couldn't before?
-	With this problem solved, Veterans will more easily be able to see if there is information that needs their attention at the VA, which may result in quicker task completion.
-	With this problem solved, Veterans will more easily be able to understand the current status of all their benefits at the VA at a glance instead of having to track this information down in different places.
-	With this problem solved, Veterans may be able to more fully engage with the VA.
User statements

-	As a veteran, I want to be alerted if the VA needs me to do something so I can move along tasks related to my benefits and care (eg. upload claim evidence; refill a prescription, show up at an appointment).
-	As a veteran, I want to be alerted if the VA has updated something related to my benefits, even if I don’t need to do anything about it.
-	As a veteran, I want to see information and tasks that are personally relevant to my benefits when I log in to VA.gov
-	As a veteran, I want the VA to tell me whether there is a way I can maximize my benefits and care instead of the VA relying on me to do that work.
Undesired User Outcomes
-	We do not want Veterans to feel that this page is another place they have to check or another place that may have duplicative information to other parts of the VA universe. We want this page to clarify, not cause confusion or add to their cognitive load.
-	Additionally, if the page becomes too cluttered or cumbersome, it may slow down Veterans instead of expediting their experience.
Desired Business Outcomes
Why would your business want this to exist?
-	Done well, a personalized landing page should help fulfill our second and third north star objectives: reducing time to outcomes and maximizing user satisfaction. 
With this problem solved, what should your business be able to do/achieve that they couldn't before?
-	Done well, a personalized landing page should help us more effectively guide Veterans to relevant tasks and benefit information that will help us maximize desired outcomes (eg. greater interactions and conversions). 
Undesired Business Outcomes
-	We do not want this page to become a dumping ground for everything the business wants to get in front of users. This page should remain user-centric and prioritize desired user journeys over getting everything we want in front of users.
-	We do not want this page to be co-opted by groups outside of VA.gov.
-	We do not want this page to be turned into a benefit eligibility engine.
 
Measuring Success
Key Performance Indicators (KPIs)
What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes? What are the most important metrics that track with this product/initiative's success?
-	Increased usage
o	Increase in % of logged-in users who view My VA
o	Increase in % of logged-in users who view My VA vs. the homepage
o	Increase in key interactions (clicks into claims, messages, prescriptions, appointments)
-	Increased info/task findability
o	Reduced searches for items added to My VA
o	Reduced searches for items better elevated on My VA
-	Benefit/task conversion (future)
Baseline KPI Values
-	My VA interactions
-	My VA searches
-	% of users who view My VA vs. the homepage (logged-in users only)
Objectives and Key results (OKRs)
What are the measurable targets you're aiming for that delivers value for Veterans?
-	Current objectives for My VA 2.0 redesign
 
Assumptions
Include indication of which assumption you think is most risky. 
I think the most risky assumptions are:
-	Veterans will use My VA over the homepage, especially with the homepage in its current iteration.
-	My VA coexisting with the homepage will not cause confusion or issues with wayfinding. 
-	My VA will be the primary place on VA.gov people expect to receive benefit updates and notifications.
Solution Approach
Your Solution Approach should describe how you'll validate that assumption w/your initial set of functionality
-	We are currently working on the My VA 2.0 redesign, which aims to restructure the IA and content on My VA, add information users expect to see, and update the overall design. We are also adding My VA to the unauthenticated navigation, which will hopefully guide more users to the page. This effort aims to increase usage of, and interaction with, this page.
-	After the My VA 2.0 redesign launch, our plan is to make smaller, iterative improvements to My VA, test those improvements, and adjust accordingly. We’ll take this experimental approach to help us determine if and how the overall jobs of My VA might change and how we can best update the page going forward. 
 
Go-to-market Strategy & Launch Dates
-	My VA already exists on VA.gov. The next work to go-to-market will be the My VA 2.0 redesign. The release plan and exact launch dates are still TBD. 
 
Solution Narrative
Current Status
-	The My VA 2.0 redesign is currently undergoing usability testing and initial build. 
Key Decisions
-	In October 2020, we determined that My VA and the logged-in homepage would continue to live side by side and that My VA would not replace the logged-in homepage at this time. The reasoning was three-fold: first, we hypothesized that people would still want access to the current homepage when they were logged in. Second, since many teams at the VA have input into the homepage, we were concerned that this might result in content that was not personally relevant to Veterans showing up on their My VA dashboards. Finally, the team was not confident in our ability to support two different versions (logged-in/logged-out) of the homepage at the same URL at this time.
 
Screenshots
Before
After
 
Communications
Team Members
Stakeholders



 


You can ignore this unless there are comments you want to come back and address

My VA Prod Outline, V1

Overview
A brief description of the product.

What it is now

My VA is a logged-in dashboard where Veterans can see a consolidated view of benefit statuses, updates, and opportunities at the VA.

What it could be

My VA is the personalized logged-in homepage for all VA.gov users.

Why this distinction matters:

-	If My VA is either the de-facto logged-in homepage (ie. the current homepage still exists, but with different goals/jobs/design) or actually the logged-in homepage (ie. when you go to VA.gov logged-in, you see My VA), that may change the jobs of the page.
-	In the future, there will be other user types beyond veterans. This page will need to serve their needs.

Problem Statement
In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address.

Current problem statements

-	As a veteran, I want to see information and tasks that are personal or relevant to me and my circumstances at the VA when I log in to the website.
-	As a veteran, I want to be alerted to important status updates and notifications around my benefits, especially if they are related to my claims or medical care.

Future problem statements

-	As a veteran, I want to see information and tasks that are personal or relevant to me and my circumstances at the VA when I log in to the website.

Why I removed updates and notifications:

-	While we certainly need to elevate updates and notifications within VA.gov, this might not necessarily happen on My VA depending on how we scale updates and notifications. This job could be:
o	Shifted to a more dedicated tool like a notification center, OR 
o	Covered by other notification indicators in the navigation (eg. if we add a messaging/inbox functionality, we might show a numeric indicator in the nav near the inbox.), OR 
o	Some other approach that more readily elevates all notifications and updates, not just the high priority ones we currently have on My VA.
-	This might or might not happen, and this doesn’t need to be decided now either way. But, IMO, this is the biggest potential shift to My VA’s jobs.

Personas
Who are the users of this product?

Current users

-	Veterans
-	Service members transitioning to civilian life (secondary)

Future users

-	Veterans
-	Service members transitioning to civilian life
-	Caregivers
-	Spouses
-	Dependents
-	POAs
-	VSOs
-	…any probably many more

Why this distinction matters:

-	My VA will need to scale to serve more than just the veteran population.

Measuring Success

Key Performance Indicators (KPIs)
What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes? What are the most important metrics that track with this product/initiative's success?

Current KPIs

-	Number of interactions with My VA CTAs.
-	% of logged-in users who interact with My VA.
-	Reduced searches for key functionality from My VA.

Potential future KPIs

All of the above, plus:

-	Interaction parity with or superiority over the existing homepage (eg. If there is a link to Claims on My VA and a link to claims on the homepage, the link on My VA receives more clicks, therefore indicating it is the preferred user path into that tool). 
-	Increased conversions for key actions TBD.

Baseline KPI Values
Baseline values for those most critical metrics, if possible.

-	My VA interactions
-	My VA searches
-	% of users who view My VA vs. the homepage (logged-in users only)
![image](https://user-images.githubusercontent.com/34068740/112195531-73ffa100-8be0-11eb-90cc-02184d83c36a.png)
