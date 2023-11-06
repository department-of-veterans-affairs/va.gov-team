
# Discussion about data from VSignals
Date: July 24, 2023  
Attendees: Kophie Mathis and Robyn Singleton

## What are the sources of data that Kophie is using to put together his dashboards?
Shortest answer is all of the data is coming from VSignals, which receives an average of 30,000 comments per month that Kophie is solely responsible for sorting through and communicating through his dashboards. 

![Screenshot 2023-08-03 at 10 13 26 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/7259804b-fe0a-45cf-8a70-075f1c54e83d)

### Weekly Python text summary review
We have a custom AI that finds the top 20 most common areas for pharmacy, or secure messaging. Common words and sentence structure. Very high level, in a more exploratory phase.  

### Weekly export survey data from MyHealtheVet VSignals
Kophie manages this in an excel spreadsheet, which he also uses to funnel data into dashboard

### Coordinator feedback from MHV Neighborhood
Microsoft Teams site for coordinators to collaborate together. I've told them ahead of time I may take snippets of their conversations.

### Gather Help Desk info from MHV Analytics Dashboard
The Help Desk publishes their most common call topics once a month. It's usually sign-in related. Kophie looks at most common, but also any trends out of the ordinary and then try to identify what is going on.

### Other sources
For example, Google Analytics

## Now let's cover the two dashboards

### The Feedback Dashboard
It's published monthly, try to get it published in the first 2-3 days of the following month. If you're looking for VA.gov-specific area sets for implementation, you probably want to go with the historical (top left). We're not really developing new features for MHV, but I'm still reporting that. This dashboard doesn't have any PII or PHI so getting access is relatively straightforward.

With this dashboard, Kophie is working next to add a search function as well as some AI feature.

![Screenshot 2023-08-03 at 11 01 37 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/856214a4-e73c-41ff-8545-7b908b379ca2)

So what kind of content makes it into the top 10?  
1. The amount of feedback we get about a specific topic, if it feels like a significant percentage of the 30,000
2. But, very rarely do the top comments ever really change, so another way content makes it into top 10 is when we release a new product or feature, I'll add that topic area to the month's dashboard. For example, after visit summary (relatively new on MHV): thinks he gets 9/30,000 per month, it's getting slowly rolled out.
3. What I think is more interesting about a new feature or an improvement that doesn't have a lot of comments around it. For example, a Vet that made a suggestion about adding an AI chatbot so users don't have to call the help desk. Often users' ideas.

### 2nd Dashboard
This one is harder to get access to, "locked down," because they haven't yet set permissions and the data contains PHI. Permissions are going to be implemented in the future. Provides raw scores: who has accessed the site (and other analytics), customer satisfaction surveys, HRC data (which he uses to identify trends), then the major product lines have their own dashboard space as well. 

## What is happening with this data when MHV moves over to VA.gov
Two things that Kophie worries about:
1. How is the feedback getting to me (Kophie)?
2. And how do Veterans know where their feedback is going? _Shows example of feedback button at bottom the VA.gov screens._

For MHV feedback buttons, Kophie is working on getting them routed to him/his data set because he worries about the other feedback buttons going into the void/never being read (I, Florence, believe that Medallia receives and processes the feedback button data).

He and Chante are talking about wanting these dashboards to continue to make sense of the data for wider audience consumption (stakeholders, POs, etc).

---
# Meeting on Tier 3 issues
Date: July 28, 2023  
Attendees: Florence McCafferty, Sean Good, Melissa Ashton, David Rawlins

## What makes an issue a "Tier 3" issue?
- Can be a Veteran issue, clinician, coordinators (different flows/ways of handling)
- These issues are usually account-specifics; might see trends for a bug, but usually one-off problems
- Veteran tier 3 issues come through the MHV HRC help desk: First tier 1, if they can't solve it the issue goes to tier 2, and then finally tier 3
- At this stage, the issues go to Melissa Ashton: she addresses the issue or triages it and gets it to the right people who are likely to be able to address it

Tier 3 Ticket example: Veteran calls in and can't see an appointment they have scheduled. Tier 1 and Tier 2 goes in and looks around, thinks issue is in platform or appt modules, can't solve it because they don't have the knowledge or access. Could be the way the appointment was logged into the system; some appointments are labeled a certain way when providers don't want the Veteran to be able to view them. Tier 1 and 2 staff are unable to view this level of detail to help users with this type of problem. 

## Where are Tier 3 issues tracked and shared?  
MS Dynamics; share out during weekly scrum of scrums meeting where weekly numbers are shown and broken down by team; there is also a weekly slide presentation (Melissa creates this report). I asked Melissa if she could send me a copy of the next report so I could see if that info might be useful to our team.

---
# Meeting with Patty Henry
Date: June 21, 2023
Attendees: Patty and Florence

## Is it possible for me to get data from HRC-run MHV helpdesk about Veteran issues with the MHV apps?
- The helpdesk gives "us" a usage report every month; it's pretty bare bones, with a grouping of categories and numbers that correspond with those categories
- Thinks I probably won't be able to get access to the more nitty gritty of user issues
- Patty will get in touch with Theresa Hancock to ensure there's no concerns, and if there are none, she will share the HRC monthly report and the customer satisfaction survey report with me via email
- I'm wondering also if Nicole Ortego might be able to answer questions about HRC data and potentially getting more specifics about tickets; App Dynamics is the name of the tool where ticketing happens and more specific details about each ticket lives (Patty believes I won't be able to get access since it's run by a contracting company)

## Customer satisfaction survey
- They use V Signals
- There is a static survey button on every page (for proactive users), and also every certain number of users is automatically offered a survey (for reactive users)
- Kophie Mathis does a report and dashboard on customer satisfaction findings regularly

## Besides MHV helpdesk, Patty recommends I get data from the following:
- My VA health helpdesk (Cerner): contact Kelsi Hampton
- Customer satisfaction survey results: contact Kophie Mathis
- Sylvia Palmer, just a poc who might be of help; she used to be a supervisor at HRC helpdesk and now she is a MHV employee

-----
# Meeting with Susan Haidary
Date: June 5, 2023
Attendees: Susan Haidary, Florence McCafferty, Patrick Bateman

## How do users primarily get support?
- Number 1: Call help desk
- If lucky, user can access coordinator at a CBOT and coordinator gets the info needed to address the issue
- If the issue is technical, it is escalated to tier 3 (POC re: tier 3: Sean Good)

## What are the different contact centers/help desks that serve MHV?
### MHV Help Desk
- POC: Patty Henry
- Run by HRC (Health Resource Center)
- Veterans call into this help desk, as do Coordinators on Veterans' behalf (user issues)
- Concern/issue is associated with a ticket

### "Contact us" form on MHV
- This goes into IRIS system
- No ticketing system when they use this form 

### Secure messaging support
- Help desk does not offer user support around Secure Messaging
- Instead, there is a secure messaging field questions group that communicates via email listserv

### MHV Neighborhood Channel on Teams
- Coordinators helping each other with questions about problems users are running into

### Coordinators
- If users reach out to a coordinator at a CBOT, the coordinator will chase down answers for them
- At this point, we haven't been able to learn how coordinators are tracking or reporting back the issues that they are helping users with 

## Remaining questions
- How can we get access to data from the HRC-run MHV call center? (Patty Henry might be able to answer this question)
- Is it possible for us to get access to the Secure Messaging user support email listserv?
- How do central office folks keep track of what coordinators are hearing from Veterans (specifically about using MHV)?
