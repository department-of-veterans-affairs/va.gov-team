# Research Plan for Resources & Support Search Enhancements
**Product Team:** Sitewide Public Websites 
<br>**Timeframe:** January 2025

## Background

Initially called the "Learning Center", Resources & Support (R&S) leverages a variety of Drupal content types to provide an unauthenticated self-serve library with targeted, supplemental information to help Veterans and other beneficiaries understand their VA benefits. Since launching in 2020, R&S has expanded to include 100 published articles (as of December 2024). We expect the number of articles will continue to grow via the ongoing migration of content to VA.gov from legacy sites. 

CAIA's recent work to evaluate the content that is currently in the Benefit Hubs (428 published articles as of December 2024) determined that as much as 50% of the content is expected to be moved into RR&S. This anticipated growth accelerated the prioritization of ensuring the R&S experience adequately supports discoverability and Veteran understanding.

**Read more:**
- [Resources & Support product brief](https://github.com/department-of-veterans-affair=s/va.gov-team/blob/master/products/resources-and-support/readme.md)
- [Resources & Support search enhancements initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/resources-and-support/initiatives/2024-search-experience-enhancements-Phase-1)

### OCTO Priorities 

Objective 1: Our digital experiences are the best way to access VA health care and benefits. 

### Veteran Journey

- Getting Out
- Starting up
- Taking care of myself
- Putting down roots
- Reinventing myself
- Retiring
- Aging
- Dying

## Research Goals	

1. Confirm if the designs of the filter drawer and filter chips support user understanding of functionality
2. Understand which of the search, filtering, and browsing options users choose to interact with
3. Learn if the labels and groupings of filters align with user mental models
 
### Outcome

Validate the proposed design so we can start building it. There will be a second round of usability testing once it is built in Staging.

### Research questions

**Goal 1. Confirm if the designs of the filter drawer and filter chips support user understanding of functionality**
- Do users understand how to access the filter drawer?
- Do users understand the and/or logic between filters across/within filter groups?
- Do users understand the Apply filters, Clear all, and X buttons in filter drawer?
- Do users understand how to dimiss a filter once it's applied?
- Do users understand how the filter chips on Detail pages function?
- Are these understandable on both mobile and desktop?
  - Desktop would have hover states on components
  - Destop has filter drawer as a modal on right side of screen

**Goal 2. Understand which of the search, filtering, and browsing options users choose to interact with**
- Header
  - Hamburger menu (mobile)
  - Mega menu (desktop)
  - Search button (desktop)
- Landing page
  - Search box
  - Show filters button
  - Featured links
  - Common topics
  - Browse by benefit
- Results page
  - Breadcrumb
  - Search box
  - Show filters button
  - Dismissible filter chips
  - Clear all chip
- Filter drawer
  - X (close) button in top right
  - Collapse all/expand all accordions
  - Individual accordions
  - Apply Filters button
  - Clear All button
- Detail page
  - Breadcrumb
  - Filter chips
    
**Goal 3. Learn if the labels and groupings of filters align with user mental models**
- Do users understand the filter group meanings: Audience, Benefit, Topic?
- Do users of each audience type choose the filter that aligns with them?
- Do users understand the individual filter labels?
- What search terms would users put in search box?
- How do search terms overlap with or differ from filter labels?
- Are there other filters that users expect that are missing?

**Misc questions that cut across goals**
- Do users find the infomation they are looking for, regardless of which path they take to get there?
- Do diferent user groups (Veterans, family members and caregivers, service members) have different outcomes?
- Are there other factors (e.g. frequency of VA.gov use, VA benefits received) that affect how easily users are able to find relevant information?
- What are user expectations of the scope of R&S search vs site-wide search?
- What are users previous experiences with searching/browsing for information on VA.gov?

### Hypothesis - WIP
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.
- What do you already know about this problem space?
- What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)
- Write a generalized statement that combines what you know + what you think will happen during the study. 
- Remember to constrain the hypothesis to the goals of your study!

## Methodology	

- Semi-structured interviews 
- Usability testing 

### Location
Remote via Zoom

### Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/conversation-guide.md)
- [Link to mobile prototype](https://www.figma.com/proto/cg8VNnxFOxw7lb10FVHpi5/Resources-support?node-id=1014-7143&node-type=frame&t=Hqo6gTwXj6DNmGNd-0&scaling=scale-down&content-scaling=fixed&page-id=504%3A6304&starting-point-node-id=1014%3A7143&show-proto-sidebar=1&disable-default-keyboard-nav=1&hide-ui=1)
	
## Recruitment - WIP

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach - WIP
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Pro tip:
- For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants. 
- Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria - WIP
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

**Secondary criteria (nice-to-haves)**
What criteria would strengthen your results? 

## Timeline - WIP
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare - WIP
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions - WIP
* Planned dates of research:

### Length of sessions - WIP
* Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) 
* Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)

### Availability - WIP
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles - WIP

**Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Send emails only for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- **Moderator:** Dave Pickett
- **Research guide writing and task development:** Dave Pickett
- **Participant recruiting & screening:** Perigean
- **Project point of contact:** Dave Pickett 
- **Participant(s) for pilot test:** 
- **Accessibility specialist:** N/A
- **Note-takers:** Perigean
- **Observers:** I will have a sign-up sheet for obeservers 
