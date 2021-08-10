# Health Apartment Team 101
Formerly known as Digital Health Modernization

## Introduction
In November 2020, the Department of Veterans Affairs (VA) Office of the Chief Technology Officer (OCTO) created a team called “Digital Health Modernization” to simplify Veterans’ online health experience. This document describes the history and implications of Digital Health Modernization’s work between November 2020 and August 2021. If you’re working on those implications, this was written for you. Thank you for your work.

## Goals of this Document
People working on the health apartment understand:
- The vision
- The concept
- The health landscape at the VA

People working on the health apartment know:
- Who decided we should do this
- How they decided
- Why they decided

People working on the health apartment have clear roles
- There is a clear list of problems that need to be solved in order to build the apartment
- People who need to know more know where to look or who to ask

# Executive Summary
TBD

# Mission
The Health Apartment Team’s mission is to simplify the health experience for Veterans.

To get the health care they need, Veterans must find, register for, and learn to use a number of different websites and software products. Our generative research from late 2020 shows that Veterans find it extremely difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that Veterans feel discouraged to apply for, manage, and maximize their benefits.

Consider booking a doctor’s appointment: One system locates nearby facilities. Another schedules appointments. Another handles follows-ups like messages and prescriptions. And another reimburses travel expenses. That’s a lot for Veterans to learn. It’s also difficult for VA staff to support so many siloed systems.

We aim to reduce the number of websites, products, and interfaces Veterans must use in order to get health care and manage their health.

To this end, the Office of Connected Care (OCC, which owns My HealtheVet) and OCTO (which owns VA.gov) leadership agreed to combine My HealtheVet (MHV) and the health-related things on VA.gov into a health section of VA.gov that maintains the MHV brand. We call this new section of VA.gov the “health apartment.”  This concept will bring the fragmented pieces of the health experience together; it will give Veterans one place to get and manage health care. OCTO and OCC share this vision.

Our vision for the Health Apartment Team is that you will design the apartment and test it with Veterans to see how well it meets their needs before we take expensive and difficult-to-revoke steps to rebuild MHV’s website inside VA.gov. This team will validate or invalidate the product vision and ship a proof of concept to production.

# Vision
The health “apartment” brings all health things under the same umbrella as benefit things (VA.gov), but gives health a distinct section.

During a series of workshops held in Spring 2021, OCC and OCTO leadership aligned on a shared vision to simplify the Veteran digital health experience. The health “apartment” concept will unify all health things into a distinct, MHV-branded section of VA.gov. The result will be that Veterans can manage all of their benefits, including health care, from a single website. The wireframe below illustrates what this could look like.



The “health apartment” concept that the Health Apartment Team will design and test as a proof of concept, then iterate on and build. (See the Mural.)

These things will move into the health apartment, which will be branded as “My HealtheVet”:
- My HealtheVet content and functionality (starting with Appointments, Prescriptions, Secure Messaging, and Records — known as “the big four” since they are top tasks)
- Health-related things on VA.gov (examples: apply for health care, medical copays, travel pay, order hearing aid batteries and prosthetic socks)

The health apartment will be designed with intuitive and meaningful pathways to content closely related to health that lives elsewhere on VA.gov (examples: disability, claims, Veterans Health Library).

In conversations with OCTO and OCC staff, we heard that the “health apartment” appealed to them for a few reasons:
- All things health are in one place.
- The concept scales to provide a holistic experience with other VA benefits.
- For users, it will feel similar to My HealtheVet.
- It makes it easier for My HealtheVet to retain its brand.

## How do we get there? << section in progress >>
Incrementally. It will take intense collaboration and planning, with the Health Apartment Team working closely with multiple teams in OCTO and OCC. These 3 VA employees will support and guide the Health Apartment Team:
- A product person from OCC
- An engineer from OCC
- A designer from OCTO

In the workshops, OCTO-OCC leadership supported the idea of moving appointments into the health apartment first for a few reasons:
- Appointments is one of the “big four” Veteran top task areas (scheduling, managing, cancelling, rescheduling, etc.).
- Both My HealtheVet and VA.gov have appointments functionality (some of it redundant).
- VA Online Scheduling (VAOS), the appointments tool with more functionality, is already part of VA.gov.

With the consensus on appointments, OCTO and OCC will begin to move toward the health apartment concept beginning in late July or early August 2021. The MHV and VAOS teams will conduct comparative analyses of existing appointments tools and their notifications. The purpose of this work is to:
- Find gaps in functionality between MHV appointments and VAOS
- Understand user needs
- Recommend ways to address gaps
- Propose functionality in MHV that should not move into the apartment (if applicable)
- Define the core sets of functionality for appointments and appointments notifications

At the same time, the points of contact for aligning the appointments roadmaps are creating a plan to consolidate web appointments into VAOS and retire My HealtheVet appointment functionality.

Also the VA.gov team is working on sitewide notifications. In the health apartment vision, centralized notifications are a key driver of Veteran value. The health apartment will help us implement them in a way that maximizes value and minimizes duplicate notifications.

Before moving any My HealtheVet and VAOS products in production, the Health Apartment Team will design and test the apartment concept to ensure that it’s viable, intuitive, easy to use and navigate, and clearly understood by Veterans.

## How should the work proceed?
The DHM Team communicated the model below to the MHV team. This model should not be re-thought until a proof of concept has been shipped. In the model, the work proceeds this way:

- Now / this quarter / planned work
  - Ship an apartment proof of concept (that’s you, dear reader)
  - Analyze differences between current appointments tools and their notifications
- Next / after this quarter / intended work
  - Detailed plan to rebuild MHV website MVP inside VA.gov apartment
  - Presumed MVP scope is appointments, prescriptions, medical records and secure message happy paths all functional on VA.gov
- Later / 2-5 year time horizon / envisioned work
  - Integrate or deprecate the long tail of MHV tools and content
  - Integrate Community Care (VA-funded healthcare at non-VA facilities)
  - Integrate Cerner electronic health record management system (there is a long-term effort to install this at all VA facilities)

The Health Apartment Team can use this model over time, always having buckets of planned, intended, and envisioned work.


Slide from the DHM Team’s presentation to the My HealtheVet Team about the health apartment concept on July 15, 2021.

## What success might look like
We envision the Health Apartment Team evaluating and learning as they iterate, asking after each planned phase:
- What went well?
- What did not?
- Should we adjust the health apartment vision?

In this context of continuous iteration, the DHM Team shared thoughts with the MHV Team about what success might look like.


Slide from the DHM Team’s presentation to the My HealtheVet Team about the health apartment concept on July 15, 2021.

Here’s the thinking behind the graphic above.

### Why was the planned work planned first?
- It’s critical to validate the design with real user feedback before jumping in headfirst.
- VA.gov’s information architecture and navigation need love before they’re ready to integrate the health apartment concept.
- Creating the “apartment” before we move products onto VA.gov means products can move asynchronously. This simplifies planning, a lot.
- Moving products from My HealtheVet to VA.gov will succeed only with input from the My HealtheVet Team.

Since the work for appointments and appointment notifications will start before the Health Apartment Team onboards, it will pave the way for the health apartment in a few important ways. First, the work will be done by the first blended team between OCTO and OCC/My HealtheVet. Second, we will understand the My HealtheVet appointments infrastructure better. Third, we will have more insight into the needs of users of appointments functionality.

### What’s the thinking behind the intended work?

Because some work needs more planning and validation before it’s actionable, the Digital Health Modernization Team recommends these activities (shown as “intended” above):
- Adopt formal, shared success metrics.
- Shift or rebuild Secure Message, Prescription Refill and Medical Records functionality in the “apartment.”
- Do an opt-in beta test for My HealtheVet users of the products in 2).
- Follow with an opt-out beta test for My HealtheVet users of the products in 2).
- Formally launch the My HealtheVet apartment on VA.gov and deactivate non-apartment instances of those products on My HealtheVet.

Note that making the intended work actionable requires (a) learnings from shipping the “apartment” section and (b) OCTO-OCC leadership to help with planning. The leadership group plans to meet every 6 weeks to check in with the Health Apartment Team, as well as the points of contact for aligning these sections of the OCTO and OCC roadmaps: appointments, notifications, PGHD (patient-generated health data), secure messaging, and pharmacy.
And what’s the thinking behind the envisioned work?
Xxxx

<< Meg is here. >>

~~~~~~~~
Notes to write from…   

Envisioned work:
Our North Star is having all health web tools in the “apartment.”
•   	Our goal is an accessible, usable, discoverable
My HealtheVet-branded section of VA.gov that contains all web health tools.
•   	We intend for teams who own those tools now to help move them to VA.gov and continue to own them afterwards.
•   	This will never be fully true — the VA is too big for perfect consolidation — but will help us decide what work to plan and how.

Notes from 4th workshop:
APT concept… what does success look like? AJ - 1 appts tool on web, MHV branded, and it’s in VA.gov.

End of notes ^

~~~~~~~~~~~~

# Team History
The Digital Health Modernization team formed in late 2020 to create a product strategy for Veterans to manage their health care on VA.gov. Following the vision set forth in the Digital Modernization Strategy, we aim to give Veterans one place to manage all of their VA benefits.

The following describes the key milestones of the team’s journey.

## Key Milestones
Mapping the Health Landscape | October - November 2020
- Conducted OCTO stakeholder interviews to understand the intersection of health and VA.gov
- Began mapping the health landscape
- Gathered baseline web analytics

Discovery Research | December 2020
- Conducted generative research with Veterans and caregivers

OCTO Big Rock Planning | January 2021
- OCTO Health Big Rocks planning
- Co-created recommendations with OCTO-DE crews

DHM Product Strategy | February - March 2021:
- Created product strategy and roadmap documents
- Github product repo
- Microsoft Teams: Digital Health Modernization Phase 1

DHM Product Vision | April - June 2021:
- Designed and held vision workshops

Appointments Consolidation | July 2021:
- Began collaborating with MHV

## Vision Workshops
From April to June 2021, OCTO’s Digital Health Modernization (DHM) Team led a series of 4 workshops with OCTO and OCC leadership to define a vision for simplifying the health experience for Veterans, as well as a path forward for realizing that vision.

The workshop series was designedThe DHM Team formed in late 2020 to help OCTO and OCC align and work together. In the past, OCTO and OCC have operated independently, both creating software, often with overlapping content and functionality. Equally dedicated to improving the health experience for Veterans, OCTO and OCC have complementary skill sets:
- OCC has medical expertise and has cultivated a vision for patient engagement. This office manages VA’s patient portal, My HealtheVet, which has 5 million registered users (about half of the Veterans who get health care from VA). In addition to medical expertise, OCC has deep technical expertise and knowledge of VistA, VA’s electronic health records system slated to be replaced by Cerner.
- OCTO has design and technical expertise, which have led to success in tackling difficult user experience challenges using modern technologies and processes.

The 4 workshops yielded the vision for the health apartment, and OCTO and OCC leadership aligned on next steps. Here’s a summary of what we covered:
- Workshop 1: Discussed existing fragmented health landscape and brainstormed what success looks like as OCTO and OCC work together going forward.
- Workshop 2: Considered 3 concepts for combining My HealtheVet and the health-related things on VA.gov into a new health section of VA.gov. The health apartment concept gleaned 80% consensus. After this workshop, the DHM Team met with groups in OCTO to get feedback on the health apartment concept and get their ideas on projects that would move us towards the apartment.
- Workshop 3: Reviewed project ideas and decided these 3 areas are top priority: notifications, appointments, and the health apartment.
- Workshop 4: Looked at OCC’s and OCTO’s roadmaps and chose these areas to align our roadmaps on in the near term: appointments, notifications, PGHD (patient-generated health data), secure messaging, and pharmacy. And we designated OCTO and OCC points of contact for each of these 5 areas.

The workshops brought OCTO and OCC together on vision and a path forward. Since these two offices have different cultures and ways of working, the Health Apartment Team will need to be flexible and creative as they collaborate with partners throughout OCTO and OCC.  

In our first workshop with OCTO and OCC leadership, the theme “hide the plumbing” emerged. If we design an exceptional health experience, Veterans will not need to navigate the VA and its product silos. Instead there will be one user experience — no redundant tasks or multiple communication channels. We heard this during the leadership workshops:  

**"Veterans do not need to know that we are several different teams. To them, their digital interactions feel created by the same VA."**

In addition to hiding the plumbing, leadership agreed that VA should provide a personalized experience for all benefits. In our generative research, we observed that participants struggled to understand their eligibility for VA benefits. In particular, participants were confused about the nuanced ways health care and disability eligibility differ. These findings underscore the value of providing a personalized view of VA benefits that also shows the connections between health care and disability benefits.   

For the second OCTO-OCC leadership workshop, we created 3 concepts for how to “hide the plumbing” and connect health with other VA benefits. All the concepts would:
- Improve the Veteran health experience
- Make My HealtheVet’s and VA.gov’s designs more similar
- Result in the My HealtheVet and VA.gov teams working together more closely

Leadership evaluated the 3 concepts anonymously, and there was 80% consensus on the “health apartment” concept. Their evaluation was based on these criteria:
How well each concept supported specific top tasks or scenarios
Which concept best fits user needs

… following this style, we’ll want to add details for workshops 3-4 here.

# The Bigger PictureR

The Digital Health Modernization program is much bigger than the initial DHM team. In addition to requiring a close partnership with My HealtheVet and the Office of Connected Care, this work will impact most VA.gov teams. The following describes how the Health Apartment™ work is situated within the Office of the CTO’s strategic initiatives, and how it intersects with ongoing work on VA.gov.
Where is this work situated? Parent Organizations
OCTO
The vision for the health apartment supports OCTO’s mission, vision, and North Star goals for serving Veterans.

OCTO vision: Every Veteran is guaranteed access to self-service benefits and accurate data.
OCTO mission: Continuously deliver high-quality digital experiences for the benefit of all Veterans and their families.
OCTO’s North Star goals:
-    	Increase the usage and throughput of VA services.
-    	Decrease the time Veterans spend waiting for an outcome.
-    	Increase the quality and reliability of VA services.

## Digital Modernization Council
For the past few years, OCTO has led the Digital Modernization Council, working with executives across VA to modernize online services for Veterans. The Digital Modernization Strategy, defined in July 2017, continues to guide our design and technology decisions:

VA will deliver self-service tools on par with top private sector companies and will have the best online experience in the federal government.
Every digital service will be customized to the individual using it.
Interacting with VA digital services will feel like navigating TurboTax, not filling out a form.

Which teams and projects are impacted by this work?

Change this to:
Appointment consolidation
VAOS + MHV
Notifications
Appt focused: VAOS, MHV, My VA, VA Notify
Beyond that: My VA + VA Notify?
Profile?
Sign-in
Identity strategy
Login.gov research
Mobile app discovery
Flagship mobile app
Bottom up approach for “apartment” concept (health + benefits together)
Check-in
MVP for appointment journey?
VAOS (VA Online Scheduling)

OCTO Crew
Health
Lauren Alexanderson, Crew Lead
OCTO Team Lead
Lauren Alexanderson
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments
Slack Channel
#vaos-team


Background on appointments in VA.gov and MHV
Consolidation work
Connect with Notifications work
My VA

OCTO Crew
Account Experience
Kevin Hoffman, Crew Lead
OCTO Team Lead
Samara Strauss
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va
Slack Channel
#vsa-auth-exp


Background
My VA is an authenticated product on VA.gov that offers Veterans a personalized landing page. This page is meant to do the following:
Elevate action items
Communicate benefit status and updates
Provide personalized suggestions

In the future, My VA is intended to evolve into the authenticated homepage for VA.gov. However, the current iteration of My VA is a separate dashboard that lives side-by-side with the authenticated homepage. Read more about this distinction here.

This year (2021), the team is making progress toward that future-state goal by iterating on a couple of key areas. First, the team iterated on the overall design of My VA, which launched in June of 2021. The team has already seen some early success in engagement with the product as a result.

Second, the team is exploring how to better elevate action items within My VA. This exploratory design research will lay the foundation for how VA.gov will surface notifications -- a key part of the Health Apartment design concept.
Next Steps
Health Apartment connect with My VA team and review exploratory research to inform proof of concept.

VA Notify

OCTO Crew
Account Experience
Kevin Hoffman, Crew Lead
OCTO Team Lead
Shane Elliot
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify
Slack Channel
#va-notify-public


VA.gov Profile

OCTO Crew
Account Experience
Kevin Hoffman, Crew Lead
OCTO Team Lead
Samara Strauss
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile
Slack Channel
#vsa-auth-exp


Anything actionable here?

Identity

OCTO Crew
Account Experience
Kevin Hoffman, Crew Lead
OCTO Team Lead
John Rahaghi
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/login
Slack Channel
#vsp-identity


Background on identity strategy (link to doc)
Current SSOe work?
Login.gov discovery research
Long term migration and need for service design?
VA Flagship Mobile App

OCTO Crew
Mobile
Leanna Miller, Crew Lead
OCTO Team Lead
Leanna Miller
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app
Slack Channel
#va-mobile-app


Kind of a proof of concept for the “apartment” vision (health + benefits colocated)
VA.gov + MHV teams worked on secure messaging together
Up next: exploring login (connect with Identity team above)
Check-In

OCTO Crew
Health
Lauren Alexanderson, Crew Lead
OCTO Team Lead
Patrick Bateman
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md
Slack Channel
#check-in-experience


Connect with appointment/notifications work?
Debt Resolution - Medical Copays

OCTO Crew
Benefits Tools
Zach Goldfine, Crew Lead
OCTO Team Lead
Matt Self
GH Repo
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/Product_Outline_Medical_Copays.md
Slack Channel
#vsa-debt


Future state vision for financial hub
Link to discovery research and usability test findings
Connecting with Chip Harmon from MHV to discuss linking from MHV > VA.gov


# Recommendations
If the current product person were to remain in his role, this is what he’d advocate.
Team
Do something scrum-like rather than kanban-like for iteration planning. The org understands it better. You’ll have an easier time partnering with feds.
Use Github Issues or Max.gov JIRA for project management. Those two tools are open to all people you will collaborate with eventually. No other tool is.
Use MS Teams and Mural for document collaboration. Do not use Google Docs. Many VA feds cannot use Google Docs. It’s perceived as rude.
Use Zoom or Teams for video meetings. Those tools work for virtually all VA feds. Other tools may not.
Send a weekly email explaining what the team worked on and why you did it that way (ex., this is why we did a concept test; this is what we learned). Part of the value of this engagement is patterning good product development behavior.

## Product
Early on in proof of concept design, inventory and prioritize technical risks. The concept was developed by non-technical staff and does not account for them.
Early on in proof of concept design, identity metrics we think (1) can actually be measured without earth-shattering effort and (2) reasonably capture Veteran-facing benefit or harm plausibly caused by software we release.
Identify a Fed (strongly preferably a Veteran, mildly preferably a member of Office of Connected Care / VHA) and groom them to own the resulting health “apartment” on VA.gov from a strategic product management perspective. This thing will grow large and complex. Minimally, it will need someone at the helm able to make difficult decisions in order to keep it maintainable and consistent. Ideally, it will need a steward / champion to evolve and disseminate the vision.
People will throw risks and concerns at you left and right. To the maximum extent possible, address these by shrinking the problem rather than growing the solution.
Build bearing in mind that the front-end-as-perceived-by-Veterans may later need to draw data from several, unrelated backend systems (ex., facilities using VistA as their EHR, and those using Cerner — as well as potentially Community Care facilities using a variety of EHRs, though that’s more pie in the sky at this point)
Organization
Adopt an OCTO-wide planning cadence (probably quarterly) so that cross-team consequences of doubling the complexity and user count of VA.gov can be planned and prioritized in a way that respects teams’ existing commitments
Adopt a formal top-down method for prioritizing cross-team work in OCTO, in sync with the planning cadence. This initiative will not always be in individual teams’ best interest to work on, but it will be in the office’s best interest to override that kind of local optimization.

## Portfolio
The following are descriptions of what we believe would result in a coherent and cohesive user experience for Veterans, assuming the health apartment is (viable and) a vehicle for perhaps the most important Veteran benefit: Healthcare. These are not supported by specific research, testing or ideation. The intent in writing this down is to spark thinking about how the apartment, and the promise of the apartment, might inspire us to change other aspects of VA.gov.
Authenticated Experience / My VA / Home
My VA (or something that replaces it) becomes the home / destination page for users who complete sign up, and users who sign in from the homepage
The home page must not contradict information displayed in the health apartment (ex., if there are 2 unread health messages that show in the apartment, and the home page displays unread message count, there should be at least 2 unread messages indicated on the home page)
The authenticated homepage should not otherwise be constrained by the apartment vision. The team that owns the authenticated home should be free to determine the most valuable things to put on it based on Veteran research and best judgment
Sitewide Navigation
Conduct primary taxonomy research (ex., card sorts) based on hypothetical future available tasks and topics, including the health apartment tasks and tools, not “top tasks” currently on VA.gov. Analytics don’t see what people can’t find in nav.
Re-organize main nav based on ^
Notifications
Scope sitewide notifications to transactional notifications only. Use other channels for marketing. Don’t yield on this. Respect Veterans’ attention, and our need to preserve an effective communication channel for things that really matter.
If there’s a sitewide UX component, put it in the nav / header (rendered on every page). Do not bury it on a page.That defeats the purpose.
Consider being opinionated rather than implementing user preferences or configurability may become a quagmire and our users may shoot themselves (and us) in the foot by making bad decisions (yes, I am the nanny state). Ex., if your appointment was canceled we are going to notify you immediately on all applicable channels there is no setting for this; vs. option for notification for ANY claims changes vs. only if it has reached final status or needs an action from you.

Profile
Login
Legal and Privacy
Marketing
Support

# Appendix
Digital Modernization Strategy

Web Brand Consolidation

Cerner EHR Migration

Mission Act and Community Care
