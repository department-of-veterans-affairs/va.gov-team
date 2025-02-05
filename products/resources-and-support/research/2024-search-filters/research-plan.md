# Research Plan for Resources & Support Search Enhancements
**Product Team:** Sitewide Public Websites 
<br>**Timeframe:** February 2025

## Background
Initially called the "Learning Center", Resources & Support (R&S) leverages a variety of Drupal content types to provide an unauthenticated self-serve library with targeted, supplemental information to help Veterans and other beneficiaries understand their VA benefits. Since launching in 2020, R&S has expanded to include 100 published articles (as of December 2024). We expect the number of articles will continue to grow via the ongoing migration of content to VA.gov from legacy sites. 

CAIA's recent work to evaluate the content that is currently in the Benefit Hubs (428 published articles as of December 2024) determined that as much as 50% of the content is expected to be moved into R&S. This anticipated growth accelerated the prioritization of ensuring the R&S experience adequately supports discoverability and Veteran understanding.

**Read more:**
- [Resources & Support product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/readme.md)
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
1. Get user feedback on the new filter design and functionality to find information
2. Understand which of the search, filtering, and browsing options users choose to interact with and in what order
3. Learn if the labels and groupings of filters align with user mental models
 
### Outcome
Validate the proposed design so we can start building it. There may be a second round of usability testing once it is built in Staging to get feedback from assistive tech users.

### Research questions

**Goal 1. Get user feedback on the new filter design and functionality to find information**
- Do users understand how to access the filter overlay modal?
- Do users understand the and/or logic between filters across/within filter groups?
- Do users understand the Apply filters, Clear all, and X buttons in filter overlay modal?
- Do users understand how to dimiss a filter once it's applied?
- Do users understand how the filter chips on results/detail pages (w/X) work vs. on the landing page (w/o X)?

**Goal 2. Understand which of the search, filtering, and browsing options users choose to interact with and in what order**

- What do people do first--searching, filtering, or browsing? 
  - Do people ever use filters before searching? Why or why not?
  - What do people do next?

Observe the usage of the following navigation items:
- Header
  - Hamburger menu 
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
  - Clear all chips
- Filter overlay modal
  - X (close) button in top right
  - Collapse all/expand all accordions
  - Individual accordions
  - Individual filters--select one or multiple
  - Apply Filters button
  - Clear All button
- Detail page
  - Breadcrumb
  - Filter chips
    
**Goal 3. Learn if the labels and groupings of filters align with user mental models**
- Do users understand the filter group meanings: Audience, Benefit, Topic?
- Do users of each audience type choose the filter that aligns with them?
- Do users understand the individual filter labels?
- What search terms do users put in the search box?
- How do search terms overlap with or differ from filter labels?
- Are there other filters that users expect that are missing?

**Other questions**
- Do users find the information they are looking for, regardless of which path they take to get there?
- Do different user groups (Veterans, family members and caregivers, service members) have different outcomes?
- Are there other factors (e.g., frequency of VA.gov use, VA benefits received) that affect how easily users are able to find relevant information?
- What are user expectations of the scope of R&S search vs. site-wide search?
- What are users' previous experiences with searching/browsing for information on VA.gov?

### Hypotheses
1. Users will understand the search, filtering, and browsing functionality available to them 
2. Users will understand the labels of filters and filter groups 
3. Users are able to find the information that they're looking for

## Methodology	
We will conduct **remote moderated usability testing** to observe research participants using a mobile prototype. 

### Location
Sessions will be conducted remotely over Zoom with transcripts please. 

### Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/conversation-guide.md)
- [Link to mobile prototype](https://www.figma.com/proto/cg8VNnxFOxw7lb10FVHpi5/Resources-support?node-id=1014-7143&node-type=frame&t=Hqo6gTwXj6DNmGNd-0&scaling=scale-down&content-scaling=fixed&page-id=504%3A6304&starting-point-node-id=1014%3A7143&show-proto-sidebar=1&disable-default-keyboard-nav=1&hide-ui=1)
	
## Recruitment

### Recruitment approach
We would like Perigean to recruit **14 people** who meet the below criteria in order to get **10 completed sessions**: 
- 7 Veterans
- 2 Service members
- 3 Caregivers of a Veteran
- 2 Family members of a Veteran

We would like Perigean to walk the participants through 
- Downloading the Zoom mobile app before entering the session
- Enabling settings for screen sharing on their mobile device

### Required criteria (in decreasing order of priority)
  - *Primary criteria (must-haves):*
    - **NONE** need to use a screen reader or screen magnifier to access the Internet 
    - **ALL** must have a mobile device (smartphone or tablet) and be willing to use it for the session and... 
      - Have Zoom downloaded to their mobile device prior to the session and know how to share their screen 
      - Are willing to share over Zoom a web browser window on their mobile device 
      - Have a working microphone on their mobile device 
    - **AT LEAST 7** must be on a smartphone (i.e., not a tablet)
  
  - *Secondary criteria (nice-to-haves):*
     - At least 4 people have a cognitive disability (e.g., TBI) 
     - At least 4 people are age 55 or older 
     - At least 2 people are age 35 or under 
     - At least 2 people don't have any degree or vocational training after high school 
     - At least 2 people live in a rural or remote area 
     - At least 3 people of color 
     - At least 2 women 
     - At least 2 people are LGBTQ+ 

### Screening Questions

1. Do you use screen reader or screen magnifier technology to use the Internet? 
    1. No *(ask next question)*
    2. Yes *(disqualify)*

1. For this meeting, you'll need a mobile device with Zoom installed that can screen share and has a working microphone. What kind of device will you be using? *(RECORD)*
    1. Smartphone *(RECRUIT at least 7 and ask next question)*
    1. Tablet *(RECRUIT at most 6 and ask next question)*
    1. Computer *(disqualify)*

1. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these. 
     1. No
     2. Yes *(RECRUIT and RECORD as having a cognitive disability)*

1. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve. 
     1. No  
     1. Yes *(RECRUIT 2 and RECORD as LGBTQ+)*

## Timeline

### Prepare
Before recruitment starts, we would like to **request a kickoff call with Perigean** to align on recruitment criteria and terminology for screener questions in the survey and emails that will be sent to Veterans. We would also like to discuss the relative priorities of recruitment criteria and how the criteria are prioritized when recruiting replacements for participants who cancel in advance.  

Dave and Rodney are available for a kickoff call during any of these times: 
- **Mon Feb 10** 10 am - 5 pm ET
- **Tue Feb 11** 10 am - 1 or 2-5 pm ET

Please invite Rodney Little and Dave to the kickoff call.

**Prior to the kickoff call, we would like a link or screenshot of the recruitment survey** for this study so we can review it beforehand.

We have scheduled 3 **pilot tests**:
- Pilot 1: **Feb 6 at 4 pm ET** with Rocio De Santiago
- Pilot 2: **Feb 7 at 2 pm ET** with Steven Strailly
- Pilot 3: **Feb 12 at 4 pm ET** with Lee DeIarm

### Research sessions
Planned dates of research: **February 18-24, 2025** 

We would like to request that **Perigean calls each participant** to remind them about the session, in addition to emailing them. And please include the session time **in each participant's own time zone** (from their address).


### Length of sessions 
* Session length: **60 minutes** 
* Buffer time between sessions: 30 minutes
* Maximum sessions per day: 4

### Availability

Team Availability | Time Slots (ET)
------------------|-------------- 
Feb 18, 2025 | 9-10, 1:30-2:30, 4-5, 5:30-6, 6:30-7:30 
Feb 19, 2025 | 9-10, 10:30-11:30, 4-5, 5:30-6, 6:30-7:30 
Feb 20, 2025 | 9-10, 10:30-11:30, 12-1, 1:30-2:30, 4-5, 5:30-6, 6:30-7:30 
Feb 21, 2025 | 9-10, 4-5, 5:30-6, 6:30-7:30 
Feb 24, 2025 | 9-10, 10:30-11:30, 12-1, 1:30-2:30, 4-5, 5:30-6, 6:30-7:30 
	
## Team Roles
- **Moderator:** Rodney Little 
- **Research guide writing and task development:** Cindy Merrill
- **Participant recruiting & screening:** Perigean
- **Project point of contact:** Cindy Merrill *only thru Feb 7*, Rodney Little, and Dave Pickett 
- **Participant(s) for pilot test:** Rocio De Santiago, Steven Strailly, and Lee DeIarm
- **Accessibility specialist:** N/A
- **Note-takers:** Perigean
- **Observers:** We will have a sign-up sheet for observers 

## Approvals
- Michelle Middaugh (Sitewide PO) on Jan 31, 2025
- Shane Strassberg (VA Research Ops) on Feb 4, 2025
