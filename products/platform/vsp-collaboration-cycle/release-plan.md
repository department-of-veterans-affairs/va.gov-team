# VSP Collaboration Cycle - Release Plan

---

## Phase I: moderated production testing

_Plan: For moderated production testing, we will meet individually with each VSA team to explain the VSP Collaboration Cycle, determine how it applies to that team's work, gather feedack, and iron out any remaining issues._

### Planning:
- Desired date range or test duration: 2 weeks, beginning the week of 2/17/20
- Desired number of users: 8 teams; ~50 users including DEPO team members
- How you'll recruit the right production test users: all VSA teams, in collaboration with VSA leadership
- How you'll conduct the testing: meet with VSA teams individually to explain the process
- How you'll give the test users access to the product in production w/o making it live on VA.gov: resources will be live in `va.gov-team` repository 

### Results:
- Number of users: 10 teams
- Number of bugs identified / fixed: N/A
- Types of errors logged: [Feedback from teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/vsp-collaboration-cycle/qualitative-feedback.md)
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
  * Discussed with VSP Insights & Analytics team that more guidance is needed on Contact Center review process (based on frequency of questions asked about it during moderated testing)

## Phase II: unmoderated production testing

_Plan: For unmoderated production testing, we will have ask all VSA teams to follow the VSP Collaboration Cycle._

### Planning:
- Desired date range: 2 weeks, beginning the week of 3/2/20 (time range will overlap with above as we finish conducting moderated testing with VSA teams)
- Desired number of unique users: 8 teams; ~50 users including DEPO team members
- How you'll make the product available in production while limiting the # of users who can find/access it: resources will be live in `va.gov-team` repository 
- Planning "success" criteria (by the numbers):
  - 1. < 20% of collaboration point survey respondents say `I'm not sure` regarding which collaboration point they just completed _(note: we will also note the approximate percentage of respondents who answer this question incorrectly, but because the survey is anonymous we will not have accurate data)_
  - 2. Qualitative feedback from collaboration cycle survey
  - 3. Average elapsed time between request submitted and meeting (as applicable) scheduled < 24 hours
  - 4. Average elapsed time between request submitted and meeting (as applicable) occured < 4 business days
 

### Results:
- Number of unique users: 10 teams
- Actual results (per your "success criteria") — *numbered as above*
  * 1. 0% of collaboration point respondents said `I'm not sure` regarding which collaboraiton point they just completed. *However,* our response rate on the post-Collaboration Point Survey (which is separate from the rollout survey) is pretty awful — as of 4/21/20, 12 completed surveys out of 636 "participants" (survey opens). That is a 98% abandonment rate — we can fairly safely assume that the quantitative data here is not significant, and that we need to examine other ways of gathering quantitative data moving forward. 
  * 2. [Qualitative feedback from moderated testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/vsp-collaboration-cycle/qualitative-feedback.md) shows that the logistics and process pieces have room for improvement. Multiple respondents noted that feedback was useful when given. 
  * 3. Based on manual "spot check" of 10 Collaboration Points that occured in late March/early April, average elapsed time betweem request submitted and meeting scheduled was **less than 2 hours**
  * 4. Based on manual "spot check" of the same 10 Collaboration Points, average elapsed time between request submitted and meeting occured was **5 business days** — note that all meetings seem to have taken place within the team's timeline. Some were scheduled far in advance due to team preference, some were rescheduled due to team request. This measurement does not seem to be a very accurate way of gauging "how much we're blocking people," bc each scenario is so different.
  * NOTE that the above "spot check" points only included: Project Kickoffs, Design Intent Collabs, Usability Test Preps, and Staging Reviews — these are the Collab Points that Andrea and Megan have the most visibility into and control over (logistically).
  * NOTE that 9 of 10 of the spot checked request tickets are still open (expected process is that they will be closed upon completion of feedback).
- Types of errors logged: See qualitative feedback (linked above). 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? Yes
- If yes, what: 
  * Collaboration Cycle Zenhub Label
  * Added release plan as artifact to privacy and security
  * Moved privacy and security template into sensitive repo
  * Added another review group calendar block
  * Fixed the title of the usability test prep template
  * Began using collaboration point tracker

## Hard Launch (Go Live!) 

_After completing a Go/No Go meeting, our hard launch will mean that we roll this process out to all remaining VFS teams._ 
* Because we don't have enough bandwidth as a platform to simultaneously be running two processes at once, we rolled this out to more teams than we expected during moderated testing so Hard Launch was limited and not really treated as a release stage. The only changes made during "Go Live" were a rollout to 1 additional full team (Lighthouse) and 2 Product Managers for future consideration.
* Post-launch KPI reporting is listed in moderated testing, above. 

### Planning:
- Desired date: by end of March 2020
- Post-launch KPI 1: xx lorem ipsum
- Post-launch KPI 2: xx lorem ipsum
- Post-launch KPI 3: xx lorem ipsum
- etc
- Go / No Go: (ready / not ready)[link to the Go No Go meeting doc]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum
