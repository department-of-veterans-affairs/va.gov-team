# Research Plan for Authenticated Experience Profile: Profile Hub usability study [Date TBD]

## Background

When we launched [Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account#readme) in 2020, the profile went from a single page to a multi-page section with the intent of solving a number of problems:

- address a self-imposed split between Profile and Account pages to better match peoples’ expectations
- improve the organization and findability of Profile features, especially Direct Deposit
- more effectively employ the design system to improve the readability of the page

With that launch, the URL `va.gov/profile` began redirecting veterans automatically to the first section of the profile. Back then, it was a section with personal & contact information combined. Currently, people land on the `Personal information` section.

While shifting to multiple sections with vertical navigation solved the problems listed above, a few information architecture and usability issues have come up as a result:

- **People are using search to find things that are already in profile.** Our review of search analytics suggests that the navigation isn't offering enough contextual clues to users, or simply isn't being noticed. [link to search results reseach?]
- **Collapsed Profile menu on mobile may lead people to think Personal information is all there is in Profile**. We have observed in usability testing that people often don't realize the Profile menu is collapsed, and they think the `Personal information` section is the only section of the Profile.  We think this might be one reason why we see people searching with keywords for content in sections that are already part of the Profile. [link to usability study results?]
- **The current page structure breaks accessibility best practices, which makes it likely for people using screen readers to miss the Profile menu as well.** Sending people directly into `Personal information` from any Profile link causes an accessibility issue known as the [“hubless spoke”](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41697) problem. 
	- Because the Profile navigation menu appears to people using screen readers before the page’s `H1` – `Personal information` – in the DOM, this makes it difficult for screen readers to interpret and read the page structure correctly. 
	- Unless a person knows to navigate 'upwards' in the page structure after they’ve opened the page, they may never realize that there even is a navigation menu that lives above the `H1`. 
	- This increases the likelihood that the navigation could be skipped altogether if people navigate by heading, which is a common form of navigation style.  [Profile Hub epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593)

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/README.md#measuring-success).

### OCTO Priorities 

The profile hub supports the following OCTO priorities **TBD**

North stars
- **Obj. 1: Increase the accessibility, reliability, and security of Veteran’s digital services.**
- **Obj. 2: Reduce the time it takes for Veterans to find, use, and receive VA services.**  
- Obj. 3: Deliver higher-quality health care and faster, more accurate benefits decisions by increasing VA staff access to the right information, in the right format, at the right time.
- **Obj. 4: Make OCTO a healthier and more effective civic tech team.**

Goals 
1. Veterans and their families can apply for all benefits online
2. Veterans can manage their health services online
3. Logged-in users can easily track applications, claims, or appeals online
4. **Logged-in users can update their personal information easily and instantly**
5. **Veterans and their families can find a single, authoritative source of information**
6. **Logged-in users have a personalized experience, with relevant and time-saving features**
7. Veterans and their families trust the security accuracy and relevancy of VA.gov
8. Platform users can build and deploy high-quality products for Veterans

### Veteran Journey

This research involves navigating personal information on VA.gov, and applies to any life stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up through Aging.

## Research Goals	

Our goals are to:
- Evaluate the effective is the structure, hierarchy, and section overviews of the hub page are in helping people complete common tasks
- Evaluate how well the proposed navigation changes perform across participant types (sighted and AT) and screen sizes (desktop and mobile)

### Outcome
What we learn will inform the direction of this proposed design concept: we will either move forward with this design, making iterations as needed, or choose not to pursue this direction.

### Research questions

Regarding overall structure:
- How effective is the structure and hierarchy of the hub page? 
	- Is the hub page scannable/consumable by sighted and AT participants? 
- How effective are the section overviews in giving users the gist of what’s within each one?
	- Do participants resort to using search to complete any tasks?
	- How useful are the deep links? Are they confusing?

Regarding the side navigation menu:
- How well does the proposed navigation concept perform across all users and screen sizes (i.e., a menu-less hub page with navigable  sections)?
	- Is it disorienting to sighted and/or AT participants to go from an overview-style page with no nav menu to an individual section with side navigation menu? Is the left navigation menu needed on hub page?
	- Does it introduce friction for mobile users to scroll the hub page’s section overviews without the benefit of a menu? 
	- Are there any differences in usability between large and small screens?

### Hypothesis

We hypothesize that Profile Hub will resolve the structural and organization issues detailed in the background section above by:
- Providing short overviews (accompanied by key deep links) of each section will reduce the need for people to search from the profile page for content that lives within their profile.
- Improving the page hierarchy will make the Profile content more more scannable for sighted mobile users.
- Creating a true landing page for Profile will give people who use screen readers the context they need to understand everything available to them and will resolve the issues encountered with items living above the H1 header.

We assume that:
- All participants will find the hub’s section overviews helpful in completing common tasks and will not resort to using search to find something.
- All participants will be fine without a sidebar nav menu on the hub page and they won’t be confused by having a sidebar nav menu appear within the sections.
- AT participants in particular will find the hub’s structure clear, and are able to understand the contents within the Profile.
- Participants using a mobile device will not find it inconvenient to scroll in order to see the hub’s overviews of each section.


## Methodology	

Usability study with a coded prototype (on production behind a feature flag).

### Location

Remote research study using Zoom

### Research materials

TO BE UPDATED

*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

*Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.*  

- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

## Recruitment	

### Recruitment approach

We will use Perigean to recruit Veterans for this moderated study. We are looking to include as participants some historically under represented groups for this:

- Assistive Tech users (screen zoom, and screen reader in particular)
- mobile users

### Recruitment criteria

Schedule 16 Veterans for a minimum of 13 successfully completed sessions. **TBD**

**Primary criteria (must-haves)**

- All participants must be LOA3 (identity verified) on VA.gov. Participants will likely not know what this means, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see any sections in profile other than Account Security, they are LOA3 and can participate in testing.
- All participants must be comfortable providing the email address they use to sign into VA.gov. We need this information 2-3 days before the study begins in order to give participants access to the prototype in production.
- All participants must able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.
	- Participants should be understand that facilitators and observers will be able to see their VA account information, and be comfortable with this.
- ~33% of participants should be able to participant from a desktop device.
- ~33% of participants should be able to participate from a non-desktop device (tablet or mobile phone).
- ~33% of participants should be able to participate from a desktop device using a screen reader

Our primary diversity and inclusion criteria: 

**TO BE UPDATED/still refining**

- 5 mobile users (none of these can be screen reader users)
- 8 total desktop users which includes
    - 4 sighted desktop users
    - 4 screen reader users

#### Secondary criteria (nice-to-haves)

Gender
- 8 women, 8 men

Inclusion
- 10 participants who identify as other than white
- 5 participants who identify as other than straight/heterosexual and cisgender
- 8 participants age 55+
- 8 participants who identify as having a cognitive disability
- 5 participants who do not have a college degree
- 5 participants who live in a rural area

**Screener Questions**

[if using cohorts, they can be in each recruitment request ticket per cohort]

---
## Timeline
*Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.* 

### Prepare

- Prototype date finalized:

* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research:

### Length of sessions

**TBD**

- Cohort 1 and 2: sighted participants
    - Session length: **60-minute** sessions
    - Session buffer: **60-minute breaks** in between
    - Max sessions per day: 4
- Cohort 3: screen reader participants
    - Session length: **90-minute** sessions
    - Session buffer: **60-minute breaks** in between
    - Max sessions per day: 2

### Availability

***Table***
 
## Team Roles	

- Moderator: Pam Drouin
- Research guide writing and task development: Pam Drouin
- Participant recruiting & screening:	Perigean
- Project point of contact: Pam Drouin
- Participant(s) for pilot test: TBD
- Accessibility specialist: TBD
- Note-takers:	TBD
- Observers: TBD

***List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side* 

