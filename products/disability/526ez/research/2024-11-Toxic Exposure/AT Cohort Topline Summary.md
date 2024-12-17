# AT Toxic Exposure Topline Summary

[research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-11-Toxic%20Exposure/AT-%20Research%20Plan.md) [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2024-11-Toxic%20Exposure#:~:text=..-,AT%2D%20Conversation%20Guide.md,-Update%20AT%2D%20Conversation) [interview transcripts](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x01200073ECFC0A16DB51439C06C6FDC0E92947&id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2F0%20%2D%20Benefits%20Portfolio%20%2D%20General%2FResearch%20Recordings%20%2D%20Veteran%2DStaff%2DVSO%2F2024%2D11%20526%20Toxic%20Exposure%20Research%20Study&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72)

This topline summary is a high level, top of mind summary of trends found in the sessions, but is not the final result of working with the data discovered. The information in this document may change following a deeper review and analysis of the data gathered.

**The goal of this document is:**

- To make sure everyone who observed the study is in alignment with the perceived findings  
- To gain insight from team/stakeholder/designers and determine specific directions to pursue as we analyze the data  
- To jump start synthesis by quickly organizing high level themes

---

## Prioritization of Initial Findings

We’ve categorized each finding as high, medium, or low priority, based on the severity, frequency, and impact to the user experience. 

**High priority**: **Fix issues that block key tasks or frustrate most users.**

* Severity: The issue severely disrupts user tasks, causing users to abandon tasks, leading to frustration, or blocking critical functionality.  
* Frequency: The problem occurs frequently across sessions, impacting many users.  
* User Impact: It affects core functionality or important user goals. The user experience is degraded.


**Medium priority: Address issues that affect the experience but don't fundamentally stop user goals.**

* Severity: The issue affects the user experience but doesn’t completely block critical tasks.  
* Frequency: The problem occurs occasionally or only with certain user groups or conditions.  
* User Impact: It creates mild frustration or confusion but doesn't drastically impact user success or satisfaction.

**Low priority: Tackle minor issues when there is time or during minor design refreshes.**

* Severity: The issue has minimal impact on task completion and doesn’t affect user satisfaction in a meaningful way.  
* Frequency: The problem is rare, occurring only in edge cases or for a small group of users.  
* User Impact: Users can complete their tasks with minimal disruption.

<img width="582" alt="Screenshot 2024-12-17 at 10 47 07 AM" src="https://github.com/user-attachments/assets/b4293e62-b5e9-41ba-936d-1839f9d624e2" />


## Detail of Initial Findings

DBEX-TREX is proud to have wrapped up our first Assistive Technology research sessions in at least two years\! The learning curve to plan and facilitate a thoughtful, valuable AT study is steep. While we learned a lot, the study did not go according to plan. 

- Only 3 out of 7 participants completed all the tasks, although 1 did not use any AT during the session, resulting **in 2 out of 7 AT true completes**  
- 2 out of 7 participants were blocked by login/staging  
- 2 out of 7 participants did not complete task 4 (editing from the summary screen)


In order to ensure we have large enough of a sample size to identify insights specific to the Toxic Exposure flow, we are incorporating feedback we received from CAIA during mobile and desktop pilots. 

- [Mobile pilot takeaways](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97151#issuecomment-2499099484)  
- [Desktop pilot takeaways](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97152#issuecomment-2512263856) 

### High Priority

**Logging onto staging was time-consuming and frustrating for participants.**

- Walking participants through the login process was the most difficult part of every session. The process took up to 45 minutes, blocking 2 participants and preventing 2 others from completing the full session.  
- Dictating and zoom chatting the staging website and login criteria was slow and error-prone, despite participant focus and positive attitude.   
- Recruitment emails from Perigean do not use accessible links (lacking descriptive link text; too much text).  
- In the future, we will ensure our timeline allows for time to build an accessible prototype and work with Perigean to streamline emails. 

**The 526ez is not accessible for Siri-users.** 

- We learned from Tracy at the start of the study that the digital 526ez cannot be navigated by Siri.   
- As a result, we cancelled one session in advance and were forced to end a screen reader session early when we learned that P9 struggled to type (letter-by-letter data entry).   
- In the future, we will explore what it takes to make our form accessible to Siri users.

**Error validation messages caused confusion for AT users as they completed the date ranges.**

- As soon as a user begins to enter data, the date range component shows a premature error message, confusing 2 out of 5 AT users.  
- This error message contributed to participants believing the fields were required, not optional.  
- 2 participants expected the year to be "YY" instead of "YYYY."  
- Consider changing the date component from “MM DD YYYY” to “MM YYYY”.

### Medium Priority

**The "2 out of 5" step indicator in the form stepper created uncertainty for users about their current location and progress in the TE flow.**

- 4 out of 5 Veterans using AT were surprised when the progress indicator did not change as they navigated through the TE flow. The users expected to see the progress numbers to change.

**Location pages- especially Gulf War- were burdensome to review and complete.**

- P5 selected 7 locations on the Gulf War page. As she continued to navigate through the form, she regretted selecting so many locations, stating it would take her months to collect the relevant dates.  
- 3 out of 5 AT users (2 screen readers and 1 alternative navigation) shared that the Gulf War page in particular was laborious. 2 of these participants didn't expect to complete the page given their own military service.

**Design elements like the “I’m not sure” checkbox, “approximate” date, and additional info were intended to reduce the cognitive burden of recall– but did not work as intended.**

- Language for “approximate” dates, optional fields, and I’m not Sure checkbox were intended to act as “comfort choices” for Veterans who did not remember exact information.   
- However, this content did not have the desired effect of comfort, leaving Veterans confused or assuming VA was looking for ways to deny benefits.   
- The meaning of "I'm not sure" varied by participant. One saw it as  grounds for disqualification; another imagined checking the box would slow adjudication.

### Low Priority

**Nearly half of AT users shared that they often ask for help from others in a real life scenario.**

- For our AT recruitment, we required that all participants report daily use of their AT and (a majority) had 5+ years of experience.   
- P1, P8, and P9 shared that, typically, they would ask a loved one for help to complete the form. P1 and P9 were blocked by staging and P8 did not complete the full set of tasks.   
- In the future, we will consider asking on the screener if participants would expect the support of a caregiver/loved one. Then, we could include them in order to observe a more realistic environment for the AT user. 
