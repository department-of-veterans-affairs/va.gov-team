# Identity GitHub Support Ticket Metrics

**UXR: Josh Matulonis**
Mar 14, 2024

## [Platform GitHub Support - Dashboard](#platform-github-support---dashboard)
## [VA Chatbot KPIs](#va-chatbot-kpis)	


**Suggestions for Identity GitHub Support Ticket Metrics**
- Total Open Tickets
- Total Closed Tickets
- Tickets by Status
- Tickets by Team
- Ticket Requests by Product

- Total Number of Tickets Closed - Remove
- Average Days to Close Tickets - Remove


## Platform GitHub Support - Dashboard

**Platform Support GitHub Ticket & Support Satisfaction Survey Domo Dashboard**

- The GitHub dataset comes from a data set in BigQuery, powered by data related to GitHub requests. 

- The columns the dataset has are open_date, platform_teams, creator, close_date, label_value, ticket_rank, assignees, days_to_close, ticket_number, title, body, all labels, URL, milestone_number, milestone, state, update_date, BATCH_ID, and Batch_last_run.

- BigQuery DB used: BQ - Github issues 2

- The dataset for the survey portion of that dashboard is manually updated once a week. 
- The survey flows into Optimal Workshop where I export the current dataset and input it into Domo. 
- It is essentially an excel file that feeds a dataset (with some ETL work) (edited) 



The following is from VA Platform Support

The new Platform Feedback survey in Slack empowers VFS team members to directly provide information about issues related to Platform products and services as they encounter them. This real-time feedback mechanism enables the Platform to swiftly identify and address problematic issues. VFS team members are encouraged to share their pain points, frustrations, compliments, and suggestions, contributing to a better work environment.

Here’s how to give feedback in Slack:

From the Bookmark in #vfs-platform-support:
Navigate to the #vfs-platform-support channel in Slack.
Locate the Platform Feedback bookmark at the top of the channel (see images below).
Click on the bookmark to open the survey in Slack.
Fill out the survey and submit!

For Power Users! From Within Any Channel:
Simply start typing “/platformfeedback” in any channel.
Click on the Platform Feedback workflow highlight when it appears.
This summons the same feedback form without leaving your current channel.
Why might VFS team members want to give feedback about the Platform?
By providing feedback as they encounter issues, VFS team members help uncover blockers. These could include:
Specific processes that are slow, flawed, or need improvement.
Outdated documentation that requires updates.
Not finding a resource
Not locating or receiving the help needed to understand something
Who sees the information?
Platform’s Service Design Team (SDT) analyzes the collected data from submissions to present to Platform leadership and Platform teams for measuring progress and guiding improvements.
/platformfeedback




https://va-gov.domo.com/page/1729270793

Metrics:
- Total Open Tickets
- Tickets by Status
- Total Closed Tickets
- Total Number of Tickets Closed
- Average Days to Close
- Average Days to Close Tickets

- Tickets by Team
- Ticket Requests by Assignee
- Did users complete the survey?
- How long did the survey take participants?

**Support Survey**
- “Are users satisfied with the support they receive?”
- Average Satisfaction Rating (percentage)
- Participant satisfaction with the survey (5 Point Scale of Very Satisfied to Neither Satisfied nor Dissatisfied to Very Dissatisfied)

**Comments from Participants**
- Survey Comments and Reasoning
- “Add a comment about the quality of service you received.” (Optional)
- “If you answered anything other than Very Satisfied, what could our team do to make your experience one that warrants a Very Satisfied response?”

**Support Survey Recommendation - (for Identity Support)**
- Rate your satisfaction with the support you received.  (5 Point Scale of Very Satisfied to Neither Satisfied nor Dissatisfied to Very Dissatisfied) 
- “If you answered anything other than Very Satisfied, what could our team do to make your experience one that warrants a Very Satisfied response?”
- “Add a comment about the quality of service you received.” (Optional)




## VA Chatbot KPIs

About the Chatbot Medallia Survey = Survey is not deployed at random, meaning users must actively seek it out in order to submit a response. In general, this may lead to more negative responses than an intercept survey would provide, as only users who have had negative experiences will attempt to provide feedback.

- Data sources – Google Analytics, Medallia
﻿
- Date range – Grouped by month, shows the most recent complete month.
    - NOTE: Chatbot launched in March 2022, but some metrics related to engagement only available from November 2022 onward, when "Start Chat" button tagging was implemented.
﻿
- “Sessions” or “visits” are used interchangeably. 
- They are Google Analytics’ way of grouping a user’s behaviors for each discrete visit to the website. 
- A session will end when the user navigates away from VA.gov, is inactive for 30 minutes, or at midnight.

**Highlights**

- Click-thru rate to Chatbot = percent of "Contact Us" visits where a link to Chatbot was clicked.
﻿- Chatbot engagement rate = percent of "VA Chatbot" visits where text was sent.

**Visits to key pages**
- New vs. returning visits to Chatbot
- Messages sent to Chatbot

**Task Completion**
- How useful were the Chatbot’s responses?
- Avg. interactions per engaged visit = text submissions per visit where the “Start Chat” button was clicked. 
    - Does not include visits where chat was not started, or where "Start Chat" was bypassed by logging in.
- Percent of visits where Chatbot was clicked = percent of visits where "Start Chat" clicking visits in which the user also clicked a link suggested by the Chatbot.
- Which Chatbot links were clicked most often?
- Top links clicked from Chatbot

**Ease of use**
- Did users engage with the Chatbot after clicking “start chat”?
- Chats started by interaction status
- Avg. Chatbot engagement time by interaction status


- How often are users logged in when visiting the Chatbot?
- Percent authenticated Chatbot pageviews


- Findability
- User satisfaction
