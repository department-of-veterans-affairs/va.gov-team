# Research Plan for VSP Ops, Centralized Logging, Q2 2021

Service Design

May 2021


## Goals	



1. What product [tool/service/document/process] & Platform team are you doing this research for?  \
This research is in support of Centralized Logging for the Platform’s Operations team.   \

2. Background:  \
Current logging solutions on the Platform are overly complex and insufficient for current needs. Because of the complexity and difficulty of accessing logs, development teams rely heavily on the Platform Operations team, rather than being able to self serve. It is challenging to leverage existing log data to understand how applications and infrastructure is running so that they can take steps to improve the application software on their own. 
    1. Centralized logging will:
        1. improve developer experience on the platform with reliable access to highly-accurate log data, 
        2. provide powerful tools for searching and analyzing logs through a centralized interface, and 
        3. streamline developer operations and systems engineering with easy-to-use, web-based tools and data visualization.
    2. Loki can be used for the following types of scenarios: 
    3. Debugging and troubleshooting
        4. Example: Why did my application crash?  Why can’t customers reach my service?
    4. Monitoring & alerts _(?)_
        5. Example: Set a threshold for errors & get alerts when exceeded

    The Platform Ops team has also developed a [Centralized Logging with Loki User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/logging/centralized-logging-user-guide.md) to assist VFS engineers. The guide contains basic instructions on viewing, querying and analyzing Loki logs in Grafana. Advanced topics are listed as coming soon. We need to know if enough information is included in the user guide to enable VFS engineers to use Loki logs successfully (access Loki logs in Grafana, find the right data, perform basic queries, make sense of the data).


        	

3. Research questions: 
    5. Can VFS engineers get to the critical info they need to identify and resolve application issues solely using Loki log data and/or Loki user guide provided by Platform?
    6. Is there info missing from the logs that is critical to helping VFS engineers identify and/or resolve application errors on their own? 
    7. Is there info missing from the User Guide that is critical to helping VFS engineers use Loki logs in Grafana? 

 



4. Hypothesis:

    We hypothesize that by implementing a centralized logging solution and providing a Loki user guide, VFS Engineers will be able to get the critical information they need to better troubleshoot, debug, and improve the quality of their software without direct support from Platform Ops.



## Method	



1. What method of research are you planning? 	
    1. Directed interviews and usability testing with high-fidelity prototypes (i.e., Loki logs in the staging environment and user guides), moderated remotely.
    2. Should we consider creating a simple feedback survey for users that can’t / don’t want to sit for a usability test, but still want to give feedback to Ops? Ops could just distribute the URL to users as needed and re-use it for future releases/features.
2. Why this method? How does this methodology help you answer your research questions? 	

    A short interview will allow us to gather information about whether or not the new Loki logs will be useful to VFS engineers in their daily work and determine whether the logs introduce new problems / disruptions to VFS engineers existing workflows.  \
 \
Then, conducting a short usability test will allow us to test the task of using the information provided in the logs and/or user guides to troubleshoot an issue. 

3. Where are you planning to do your research? 

    Research will be conducted remotely via Zoom and recorded. 

4. What will you be testing?  \
Loki logs in Grafana for the staging environment and related user guides/docs.


## Participants and Recruitment	



1. Participant criteria: What are you looking for in a participant?	 \
(Mention: Number of participants, practice areas, VFS team, VFS product. Please keep in mind that we have a limited number of VFS teams, and we should avoid going to the same people and teams back-to-back.)
*   3-5 VFS participants - list pending
    *   2-3 BE Engineers
    *   1-2 FE Engineers
2. What is your recruitment strategy? 	 \
Jesse to generate a list of potential participants and share with Service Design team. SD team to Slack message potential participants with a link to book a time/date in Google Calendar (via Appointment Slots). Will consider [past participation with studies](https://docs.google.com/spreadsheets/d/1V8Nswcbcp-SzQBTBUZNCnCCcs9WwbJ2CrAEbdFSNmMI/edit#gid=775867416).


## When? 	



1. Timeline: What dates do you plan to do research? 	 \
(Schedule your research at least 1 week in advance if possible to give your participants time to organize their calendars) 

    The research will be conducted between May 3 - 18, 2021. We will recruit participants for sessions from May 10 - 14, 2021. 

2. Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 	

    May 3, 2021  \


3. Length of Sessions: How long do you estimate each session will be? (This helps with scheduling) e.g. 30 minutes, &lt; 1 hour, up to 2 hours, up to 4 hours) 

    25 minutes  \


4. Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Keep in mind that VFS team members are also remote and live in different time zones. Try and keep research sessions during normal working hours.	

    Several appointment slots set up for week of May 10 - 14, 2021.

5. Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 	

    TBD 



## Team Roles	

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need help finding someone to take notes for you, contact the Design Lead** 	

Moderator:	



*   Research guide writing and task development (usually but not always same as moderator): Rebekah Hickey, Jonathan Nelson 
*   Participant recruiting & screening: 
*   Project point of contact: Jonathan 
*   Participant(s) for pilot test:  TBD
*   Note-takers: Rebekah
*   Observers: James Chasia, Michael Manalo, Naomi

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**


## Resources	


### Project Brief 	

[#17389 - Centralized Logging - Log all of the things in STAGING (using Loki)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17389)

Additional information about Loki: [An (only slightly technical) introduction to Loki, the Prometheus-inspired open source logging system](https://grafana.com/blog/2020/05/12/an-only-slightly-technical-introduction-to-loki-the-prometheus-inspired-open-source-logging-system/)


### Convo Guide		

_[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/research/centralized-logging/conversation-guide.md]_


### **Synthesis**	

_Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)_


### Lessons Learned	

_Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.	_ \



### Read-Out/Results	

_Read-out presentation should live in the appropriate product repo and folder; paste a link to it here._
