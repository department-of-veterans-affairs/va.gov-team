# Project Outline: My VA Dashboard 2.0 Redesign

Last updated March 12, 2021

## Communications

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

## Table of Contents

# Executive Summary 
- [Problems](#problems)
- [User Problem Statements](#user-problem-statements)
- [Business Goals](#business-goals)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Solution Approach](#solution-approach)
- [OKRs & KPIs](#okrs--kpis)

# Implementation Information
- [Status](#status)
- [Discovery](#discovery-1)
- [Product](#product)
- [Development](#development)
- [Design](#design)

## Problems

Based on the research that informed [the Personalization 2.0 strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md#observations-the-my-va-dashboard) and our own observations, these are the main problems with the My VA dashboard:

- Many people don't use the My VA dashboard (~8% of users who visit VA.gov go to MyVA). This is likely has do to with us not guiding people there and the clunky design.
- My VA is designed like a content page even though it is tool- and task-based. This clunky design keeps people from using this page even though it has useful information about their benefits.
- The design also has made this page hard to scale, so we're not currently able to grow and curate based on user needs. 
- Important content is burried on My VA because of the visual design. We have a lot of good status content in there, but it feels buried if you don't know what you are looking for.

## User Problem Statements

### High level user goals

From countless user interviews that have been done over the years, we know people come to VA.gov to complete tasks specific to their benefits. We also know that people want to see information that is personally relevant to them, and they don't want to be bogged down by links or suggestions that don't apply to them. These goals can be summed up in these user statements:

- As a veteran, I want to be able to log in to VA.gov and easily find the tools and tasks that apply to my specific experience at the VA.
- As a veteran, I want to be able to log in to VA.gov and easily see status updates and notifications that apply to my specific experience at the VA.
- As a veteran, I want to be able to log in to VA.gov, quickly complete whatever I came to do, and then get back to the rest of my life.

### More specific user goals

But what does this actually mean? What are these "tasks that apply to my specific experience at the VA" (aka the jobs)? We have heard the following primary user goals from [our My VA discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md) and [other user research that has been done previously](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md):

- As a veteran, I want to see if the VA has given/is going to give me the financial compensation I have earned. I do this by:
  - Checking to see if my disability claim has been updated or accepted.
  - Checking to see if my disability rating has changed (as a proxy metric for whether the claim has been accepted or not).
  - Checking to see if my GI bill benefits have been paid out, and what my balance is. 

- As a veteran with VA health care, I want to manage my health online. I do this by:
  - Refilling prescriptions online, and checking to see if that refill has been issued.
  - Sending messages to my medical team and checking to see if anyone has replied.
  - Managing my VA health appointments.

- As a veteran, I want to easily be able to access my personal documents so I can use them to apply for other benefits, prove I am a veteran to an outside group, etc.

- As a veteran, I want to learn what other VA benefits I am entitled to that I do not already receive, and what other VA services might be offered to me. I also want it to be clear how I go about getting those benefits/services.

## Business Goals

### High level goals

- To lay a foundation for a user dashboard for veterans that can accomodate growth and modification over time without quickly becoming unwieldy or cluttered.
- To lay a foundation for user dashboard that could eventually be adapted to serve other user types once we're able to support more roles and permissions.
- To create a strong enough user dashboard that the exsiting homepage no longer has to serve as a task router.

### My VA product goals (aka My VA's "jobs")

- To show the status of a veteran's benefits. 
- To elevate updates on a veteran's benefits, including updates on where an application/claim is in process, updates on payments, or updates related to health care information.
- To provide meaningful next steps on any statuses or updates.
- To prioritize benefits and use cases we know are most common based on user research.
- To show information in a curated, personalized way (eg. Don't show "Apply for health care" if they are enrolled in health care).

### My VA design goals

The following design goals came out of the [Personalization 2.0 strategy from 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md):

1. **Reduce redundancy** — Specifically, we should reduce redundancy between the My VA dashboard and the VA.gov homepage. This will happen in phases. As we redesign and re-launch the My VA dashboard, this frees up the homepage to be less task-management focused. As the homepage evolves away from a task management focus, it will be less redundant with My VA so both the homepage and My VA will have their own clear, unique purposes. However, in order for the homepage to evolve, we have to redesign My VA first.
2. **Elevate personally relevant information** — Users should more easily be able to scan/evaluate their information.
3. **Scale gracefully** — Our designs should allow for future updates and expansion, as new features are being added to VA.gov all the time.
4. **Prioritize wayfinding** — We should make it easy for users to find the My VA dashboard.
5. **Effectively use visual space** — We should avoid a single-column, "content page" approach. Design updates should more effectively employ the design system and update it as needed.

## Assumptions

- People prefer the homepage to My VA. It's both more usable and more visually appealing.
- People are reliant on the top 20 tasks on the homepage to navigate the site, and we should be mindful of this as we approach a redesign.
- Status update/alert information is hard to find on My VA.
- This work, from a wayfinding/UX perspective, will be more successful if we accompany it with an authenticated tools menu/nav, but that may not necessarily be part of V1 of this project.
- This project needs improved wayfinding and improved visual design to be successful. If we can make the page more usable, we can increase usage, but only if people can find this page in the first place.

## Questions

### Design/IA

- How do veterans conceptualize the difference between a dashboard and a profile? What kind of information do they expect to see on each page?
- Do things like "Your dependents" and "Your disability rating" need to be displayed on the new dashboard, or should they be displayed on the VA.gov profile, or both?
- How could an authenticated tool bar/menu fit into the current navigation before Mikki/Ryan/Jen are able to revisit the IA and flatten the IA/nav across the board?
- Is the dashboard really the notification center? Are those two different projects, or the same project?
- How will we show notifications? Where will they "live"? How will they be marked as read/dismissed?
- What info needs to appear as a widget vs. just a link on the new dashboard?
- What works well about the current homepage that veterans don't want to change? What would veterans change about the homepage as it is now?
- How can the initial phase of the 2.0 redesign account for future growth and improvements?

### Technical

- What data do we have access to now that we can show on the dashboard? 
- Is there data we have but aren't leveraging?
- Is there data that we don't have and need?
- What data might we want for future phases/improvements?
- Is a progressive web app something we should consider in the future?

### PM

- What staging users will we need, and who can help us get those set up?
- How do we appropriately involve stakeholders, both within DEPO and outside of DEPO, in this project? How do we do this in a way that doesn't allow the homepage to become a dumping ground?
- How can we make this a seamless transition for veterans (from the existing logged-in homepage to the new logged-in homepage)?

## Solution Approach

### Discovery

- We are starting this project with a comprehensive round of discovery to help us answer questions around veteran needs and expectations, DEPO stakeholder needs and expectations, how we should involve stakeholders outside of DEPO, relevant past research and context setting, and existing models for usable and useful logged-in experiences.
- Right now, I imagine that we will only be leveraging data and tools we have access to right now on VA.gov and not integrating entirely new data/backend systems that don't already exist or aren't already in the works. While the new logged-in homepage will grow and change over time, I think this will be a helpful line for us to draw for what is included in an initial build and what we may want to build and include in future phases.

### Phase 1 plan

**In scope**

- Updating the My VA dashboard redesign, including the following sections:
  - Your applications
  - Your claims
  - Health enrollment status (eg. enrolled; application pending, etc)
  - Prescriptions
  - Secure messages
- Add the following information
  - Overall disability rating
  - Show appointments
- A very basic first-time user experience that will account for users who have no benefits and no applications in flight.

**Out of scope**

- **As of 10.7.2020**: Any updates to the homepage in a logged-in state.
- Doing anything with the Find VA benefits content that currently exists on My VA.
- Incorporating any new data or integrations that do not already exist on VA.gov, with the exception of disability rating and scheduling appointments.
- Navigation work.
- Notification center work.

## OKRs & KPIs

Work in progress can be found here

https://docs.google.com/spreadsheets/d/1B6c1rY-1l64cWhHO7D8WjA328zwfdAhSgKkPatIKmts/edit#gid=1242119200

--- 

## Go-to-market Strategy

*How are Veterans and others using this product going to know it exists?*

- My VA already exists on VA.gov. However, as part of this redesign, we will be adding a link to My VA to the unauthenticated navigation to enhance discoverability.
- Additionally, we will work with the VA comms team to figure out the right plan for notifying veterans of the newly redesigned page.
- [Link to release plan when it's ready]

-*What marketing, outreach, or communications are necessary for this product to be successful?*

- We will work with VA comms to figure this out.

## Target Launch Date
*What is your target launch date of your MVP/iteration?*

- We are targeting early June 2021 for our initial launch.

*What is your date for when you'll evaluate impact after launch?*

- There is no singular date for this. We will continually evaluate this feature post-launch.

## Post-launch evaluation plan

- TBD

--- 

# Implementation Info

## Status

- **Summer 2019**: Personalization 2.0 initial discovery/strategy completed.
- **March 2020**: Kicked off logged-in homepage discovery
- **April 2020**: DEPO stakeholder interviews complete
- **May 2020**: Research review, comparative analysis, analytics review, and user research.
- **June 2020**: Discovery and final readout complete.
- **July 2020**: Project on hold while we get Profile 2.0 ready for QA and other pre-launch tasks. 
- **August 2020**: Design onboarding; technical discovery.
- **September 2020**: Initial design explorations; design intent platform checkpoint; design for health care section begins in earnest; continued discussion around technical approach.
- **October 2020**: Project pivots from logged-in homepage redesign to My VA dashboard 2.0.
- **November 2020**: Create high-level explorations and conduct research on newsfeed vs. traditional direction.
- **December 2020**: Move forward with traditional direction
- **January 2021**: Designs completed; Frontend build begins; Copy work begins; Staging use cases put together
- **February 2021**: InVision prototypes finalized; Frontend build continues; Usability test prep review; Usability testing

## Discovery

- [Personalization 2.0 discovery write-up (2019)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)
- [Logged-in homepage discovery write-up (Spring 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/discovery-summary.md)
- November 2020 design exploration research

## Product 

### Logged-in homepage > My VA pivot

Initially, this project was scoped to be a logged-in homepage redesign. However, as of 10.7.2020, we have pivoted the project back to a My VA dashboard redesign.

**Why**

- This largely comes down to concerns about how we would have managed two different versions of the homepage, both from a technical perspective and from an organizational perspective. Organizationally, there are other teams at the VA who help manage the current homepage and we didn't want the user dashboard to get overtaken by outside needs/demands since it would have technically also been a homepage.

**How this aligns with auth exp team goals**

- A big goal of this project was removing the redundancy between the homepage and My VA in a logged in state. While we need to accept that redundancy might exist for more time, because we are redesigning My VA to be more effective and scalable, the homepage can now evolve over time, which may mean moving away from a task management focus (pending research, organizational discussions, etc). Greater variation between the homepage and the logged-in user dashboard would move us towards our goal of removing redundancy.
- If user research proves that people who login from their homepage would prefer to be redirected to their dashboard instead of staying on the homepage, then this will move us towards our goal of elevating personal information. As we add features to the user dashboard as the site grows over time, and as the homepage moves away from a task management focus, we'll have even more reason to land people logging in from the homepage on their dashboard.
- None of this stops us from pursuing the other goals of drastically improving the user dashboard and improving the logged-in experience. This is still seriously valuable work.

**Other thoughts**

- Ultimately, this approach is going to be easier for both development and design, and I think it's more "MVP", so that's good.
- Naturally, I am disappointed, as I've had big dreams of a new logged-in homepage. But I do think this makes sense from an organizational perspective and from a design/dev perspective, so that's also good.
- Users still win with a newly designed dashboard, so we're not leaving them behind.
- The logged in experience will continue to evolve. This is not an end game, and there are a lot of ways in which I think we can take this initial approach and continue to improve how people log in and manage their benefits.

## Development

### How to Access and Test

[Staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)
[Test cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/qa/MyVA%20-%20test%20cases.md)

### API Calls and Dependent Systems

The My VA 2.0 redesign reflects existing integrations on VA.gov. This is the list of what is included as part of the My VA 2.0 redesign and what systems we rely on to get that information:

**Disability rating**

- **We show**: Overall disability rating
- **Parent tool**: [View your VA disability ratings](https://www.va.gov/disability/view-disability-rating/)
- **System that supplies this info**: [What VA system/database do we get this from?]

**Claim status**

- **We show**: Most recently updated claim; Overall number of open claims
- **Parent tool**: [Claim status tool](https://www.va.gov/claim-or-appeal-status/)
- **System that supplies this info**: [What VA system/database do we get this from?]

**Secure messages (health care)**

- **We show**: Latest message; Total unread messages
- **Parent tool**: [MHV secure messaging tool](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging-spotlight)
- **System that supplies this info**: [What VA system/database/integration do we get this from?]

**Appointments (health care)**

- **We show**: Next appointment; Total upcoming appointments
- **Parent tool**: [VA Online Scheduling (VAOS)](https://www.va.gov/health-care/schedule-view-va-appointments/)
- **System that supplies this info**: [What VA system/database/integration do we get this from?]

**Prescription refills (health care)**

- **We show**: Latest refill update for prescriptions with a status of **Active: Submitted** or **Active: Refill in process**; Total number of prescriptions with a status of **Active: Submitted** or **Active: Refill in process**
- **Parent tool**: [MHV prescriptions tool](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/managing-your-prescription-refills)
- **System that supplies this info**: [What VA system/database/integration do we get this from?]

**Applications in progress**

- **We show**: Benefit applications people have started on VA.gov but have not completed
- **Parent tool**: All benefit applications on VA.gov
- **System that supplies this info**: VA.gov saved-in-progress applications

## Design

### Important docs

- [My VA use cases MURAL board](https://app.mural.co/t/vsa0499/m/vsa0499/1597156877591/25248822b34df6bbf8041a9b11b3150974e51efb)
- [My VA data points spreadsheet](https://docs.google.com/spreadsheets/d/1fO3VxUj8U2M268GnpmNmlL8Jdl8E1as33SzuwoTneV8/edit#gid=1279308525)
- My VA InVision documentation 
  - [Desktop](https://vsateams.invisionapp.com/share/RNZWCZBXZJ6#/screens/443777220)
  - [Mobile](https://vsateams.invisionapp.com/share/XNZWCYAYD45#/screens/443913926_My_VA_Mobile_Icons)

### Screenshots

### Before

#### My VA

*All widgets*

![My VA 1.0 all widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/screenshots/Dashboard-Updated-All%20Features.png)

*Empty state*

![My VA 1.0 empty state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/screenshots/Dashboard-Updated-Empty%20states.png)

### After

