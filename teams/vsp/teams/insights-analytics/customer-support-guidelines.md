# Customer support guidelines

*Who this is for:* This documentation is to support VSP Analytics & Insights with guidelines as they work through customer support requests.

Resources: Please see the [Team Charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/analytics-insights-team-charter.md) for prioritization and the [team RACI sheet](https://docs.google.com/spreadsheets/d/1JdNPKo9y-4o2c_HaWIne2L6H310fhRn2M51e5NvHdxE/edit#gid=0) for specific responsibilities.

---

## Rotation Responsibilities

If you are on Rotation, you are responsible for 
- Updating the [customer support tracker](https://www.google.com/url?sa=t&rct=j&esrc=s&source=appssearch&uact=8&cd=0&cad=rja&q&sig2=cbQjnVK0JLUOHGGqJ6Y92w&ved=0ahUKEwjy6MSzopztAhWxQKsCHdWmCeM4ABABKAAwAA&url=https://drive.google.com/a/adhocteam.us/open?id%3D1BmFJKmkJsgXaj_kebn16veLVJ5H52wlCjmbpS5JdXKo%26usp%3Dchrome_omnibox&usg=AOvVaw3M4ssAuoz4H98w0TKceJzJ) with new requests from the week
- Updating the #vfs-platform-support Slack channel description with your name
- responding to customer inquiries & requests within the business day (your time zone):

**Slack**

- Update the support tracker with new requests and update your- Respond to Slack messages to all customers, including VFS teams and VSP teams.

  - The customer should have a response within 2-3 hours during the business day.
  - These channels should be monitored: `#vfs-platform-support`, `#vfs-analytics`, `#vsp-analytics`
  - Please add the following tags to your Slack keywords: `analytics`, `google analytics`, `google tag manager`, `domo`, `bigquery`. This allows you to be notified when someone types out one of these keywords.

  You **<u>do not</u>** need to respond right away, and you **<u>do not</u>** need to provide an answer right away. It's okay for the VFS customer to get a notice that you've seen the message but not have their question answered right away.

  - If the request is going to take you longer than 10-15 minutes to complete, please direct them to fill out one of our issue templates.
  - If you get a DM, please redirect the VFS customer to `#vfs-platform-support`.
  - If you see a question you do not know the answer to, please still respond to the requester within 2-3 hours in the business day:
    - You can copy & paste this response:
      - "Good afternoon/morning, [@username], thanks for your question. We'll need to do some digging and may have to triage you to the right people, but we'll get back to you."
    - Please share the request with the Product Manager or the DEPO lead if you are unable to find an appropriate response.

Here are some responses you can copy and paste:

- "Hi [@username], we should be able to take a look at this tomorrow. Could you please submit this as a Github issue using this template [add template link]?"
- "Hey [@username], thanks for sending this over. Can you please submit this as a Github issue using this template [add template link], and we'll be able to take a look at it this week."
- "Hey [@username], thanks! Can you please submit this as a Github issue using this template [add template link], and we'll get back to you on this."

*Slackbot*
- A VSP slackbot is currently piloting with the VSP engineering teams. We will look to change our customer support cadence once we are able to use the bot. [Github documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/customer-support-tracking)

**Zenhub**

- Monitor the Github Project Board/Zenhub for new access/offboarding issues.
  - If one of the following requests is made, please pull this into your queue and complete the request within 2-3 business days:
    - Google Analytics access
    - Domo access
  - If an `offboarding` request is made, please have the request completed the same or following business day.
  - You **<u>do not</u>** need to assign yourself to other new issues.

**All communications sources (Slack, Github, Email)**

- If someone reaches out for reporting, implementation, or a discussion/workshop, please have them fill out a Github issue. Please **do not** take the request yourself. We will groom these requests into our queue the following Planning or Grooming session.
- If someone emails you, in your response, please CC the Product Manager (and your DEPO lead if the PM is out of office).
- <u>All requests that will take longer than ~15 minutes should have a Github issue. All other requests should be tracked via the Slackbot or the Customer Support tracker.</u>

### Github Templates

Outside of access requests, anything that will take you longer than 5-10 minutes should have an issue template filled out. Please escalate to your Product Manager (@joanne on Slack) or your DEPO lead (@Rachael on Slack) if you receive pushback.

[**Google Tag Manager Implementation Request**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+collaboration-cycle%2C+collab-cycle-review&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BTeam+Name+-+Feature+Name%5D)

- VFS Use: To request specific Google Tag Manager implementation during builds.

[**KPI Dashboard Request**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+kpi-dashboard&template=analytics-request-kpi-dashboard.md&title=Analytics+KPI+dashboard+request+for+%5BTeam%5D)

- VFS Use: To request a KPI dashboard creation or iteration on Domo. 

[**Access Request**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request&template=analytics-request-google-analytics-domo-access.md&title=Request+access+to+Google+Analytics+and%2For+Domo)

- VFS Use: To request access to Google Analytics and/or Domo.

[**General Analytics Request**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request&template=analytics-general-request-template.md&title=General+Analytics+Request+for+%5Bperson+or+team%5D)

- VFS Use: A catch all for all other analytics requests, specifically:
  - A one-time analytics report. 
    - This can be on Domo, on Google Analytics, or an Excel sheet. If it's on Domo, please add the team's report as a sub-page to their product KPI dashboard. If they don't have a KPI dashboard already, please ask them to request one as well or redirect to the Anaytics Product Manager.
  -  An analytics meeting.
    - This can be an Analytics Orientation, Google Analytics overview, KPI setting workshop, a discussion on GTM work, a discussion on general analytics use, etc. (See Triaging for assignment details)
  - Clarification on reporting.
    - This is if the team already has numbers pulled, a report, or is looking at data and wants a QA on if they're reading the data correctly or if the numbers are accurate.


### Triaging 

#### GTM Implementation Cadence

- Tickets will not be auto-assigned.
- We will pull tickets into the Sprint every Planning & Grooming session, and assign during these sessions.
- If a ticket is assigned to you, you are in charge of seeing the implementation through to closing. This includes, but is not limited to:
  - VFS team meetings for introductions and alignment
  - Writing the Data Layer spec
  - Implementing GTM tagging
  - Configuring GA & any GA reporting
- The original assignee will hand off the ticket to another Implementation Specialist to QA
*- Each person originally assigned is responsible for unassigning and reassigning to the QA person. If the work is ready to be QA'd, please flag the team in Slack on #vsp-analytics and someone with capacity will help QA. If you are QA-ing, please try to complete initial QA within 5 business days.*

#### Domo Dashboarding Cadence

- Tickets will not be auto-assigned
- We will pull tickets into the Sprint every Planning & Grooming session.
- Please see the RACI sheet for specific responsibilities. 
  - The Product Manager will triage the tickets during Planning & Grooming
  - The Data Engineer will build the dashboard
  - The Implementation Specialists will QA the data
  - The Product Manager & Data Engineer will onboard & train the requester
  
#### General Analytics Request Cadence

- Tickets will not be auto-assigned
- Depending on the complexity of the request, we will pull tickets into the Sprint during Stand Ups, otherwise every Planning & Grooming session.

**Analytics Meeting Requests**

The following team members should be added to the corresponding meetings:

(Please see RACI sheet for this information as well)

- Analytics orientation: Product Manager
- Google Analytics overview: Implementation Specialist
- KPI setting workshop: Product manager and Implementation Specialist _or_ Data Engineer
- GTM discussion: Implementation Specialist
- General analytics question: Implementation Specialist (for GA data); Data Engineer (for all other data)

### Zenhub Board

- Support tickets will not be auto-assigned
- Support work will be assigned and closed during Grooming & Planning.
- If the work that you are doing needs to be reassigned or change swim lanes, and it is **not** Grooming or Planning session day:  
  - You are responsible for changing swim lanes in the VSP Analytics & Insights Github Project board. 
  - You are responsible for assigning a teammate for QA or for the next step in the dashboarding cadence. 
  - You are responsible for unassigning yourself when your work is completed.
- Closing tickets:
  - You may close the ticket when the Definition of Done is completed.
  - Please leave a comment on the work being completed within the ticket before closing.
  - Please collaborate with the requester so that we have acknowledgement that they received the services they needed. A response is not necessary in the ticket, but we do need a comment from the person working on the ticket that they have spoken with the requester. (i.e. "We're closing this issue, but please let us know if you need anything else."). If your work is completed and the requester has not responded by the next Planning or Grooming session, we will close the ticket during Planning or Grooming.
