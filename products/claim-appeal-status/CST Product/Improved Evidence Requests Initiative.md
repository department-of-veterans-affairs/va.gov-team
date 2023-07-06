# 
CST: Improved Evidence Requests Initiative   

* GitHub Label: cst-evidence-requests
* Slack channel: [#](https://lighthouseva.slack.com/messages/CJD573TMZ)benefits-team-1
* Product: CST
* GitHub Issue: 

# Executive Summary

# Problem Statement(s)

* As a veteran with an open disability claim, I encounter evidence requests in the CST that seem urgent but lack specific information, leaving me uncertain and concerned about what I need to submit to the VA.
* As a veteran with an open disability claim, when I see specific evidence requests in the CST, I'm unclear about the reason for the request and what constitutes strong evidence, leading to delayed responses, weak submissions, or both.
* As a veteran with an open disability claim, I notice evidence requests in the CST directed at third parties, such as physicians or records keepers, but I'm unsure if I need to take any action to facilitate these requests, causing confusion about my role in the process.
* As a contact center representative, I handle numerous calls from veterans puzzled by evidence requests in the CST, resulting in long calls to clarify action items and recipients, which prevents me from attending to veterans with other pressing needs.

# Desired Outcomes

* Veterans can effortlessly differentiate between evidence requests intended for themselves and those meant for third parties.
* Veterans can quickly identify evidence requests that necessitate action on their part versus those that simply provide updates or notifications from the VA.
* Veterans can easily understand the items being requested, the reasons behind the request, and the criteria for strong submissions for each type of evidence.
* Upon logging into the CST, veterans promptly discover evidence requests that require them to submit documents.
* Less calls related to evidence requests come through in the contact center because CST is able to better meet veterans’ needs

# Audiences Served
* Veterans with pending disability compensation claims.
* VA Call Center staff

# Assumptions

# Core Bet

Our core bet is that if veterans are able to clearly identify when requests for evidence are being made, what the specific requests are, who they are for, and how to fulfill those requests such that their submissions are thorough and accurate, they will submit more and better evidence in support of their claim. 

## How we will know if we are right (KPIs)

### VBMS Events Metrics

* Veteran clarity on evidence requests: Measure the percentage of veterans who report a clear understanding of evidence requests, including the purpose, recipient, and specific requirements of the request. This can be measured through post-interaction surveys or user interviews.
* Response time to evidence requests: Track the average time taken by veterans to respond to evidence requests after the improvements are made. A decrease in response time may indicate that veterans are better able to understand and fulfill the requests.
* Quality of submitted evidence:
    * Evaluate the quality of the submitted evidence based on a pre-defined rubric that takes into account relevance, completeness, and clarity. An increase in the average quality score would indicate that veterans are submitting more thorough and accurate evidence.
    * Track the number of follow up requests to provide additional evidence after initial requests are made. Fewer follow up requests suggest the veteran submitted enough evidence the first time.
* Claim processing time: Measure the average time taken to process claims after the improvements are implemented. A decrease in processing time could indicate that the submitted evidence was adequate for rating purposes. 

### Contact Center 

* Contact center call volume and duration: Monitor the number of calls received by the contact center related to confusion about evidence requests and the average call duration. A decrease in call volume and duration would suggest that the CST improvements are helping veterans better understand the requests.

### Site Metrics

* Bounce rate: Measure the percentage of visitors who leave the CST page without interacting or taking any action. A decrease in the bounce rate would suggest that users are finding the updated information on evidence requests more engaging and helpful.
* Time on page: Track the average amount of time users spend on the evidence request page. An increase in time on page could indicate that veterans are spending more time understanding the requests and the guidance provided.
* Pageviews per session: Monitor the average number of evidence request-related pages viewed during a user session. An increase in this metric could indicate that users are exploring the guidance and resources provided in more depth.
* Evidence Submission Conversion Rate: Measure the percentage of visitors who successfully submit evidence after viewing the evidence request page. An increase in the conversion rate would suggest that the updated information and guidance are helping veterans better understand and fulfill the requests.
* Journey to Evidence Submission: Monitor the sequence of pageviews leading up to an evidence submission to identify any potential barriers or points of confusion.
* Repeat Evidence Submissions: Track the number of users who submit evidence multiple times, which could indicate confusion about what evidence is required.
* Medallia feedback and ratings: Collect user feedback and ratings on the evidence request page to gauge the overall satisfaction and understanding of the updated content. Higher ratings and positive feedback (or reduced negative feedback on evidence requests)  would indicate that the improvements are meeting veterans’ needs.

# Discovery Takeaways

## Research

## Open Questions

* How might we leverage the data schema of the claim status end point to provide a more nuanced window into what is currently called the “evidence gathering” phase? 

# Solution Approach

## Prototype

### Hypotheses to test

* Veterans will have an easier time referencing their claims to call center staff if we provide their claim ID in CST.
* Veterans will submit more compelling evidence if they better understand the background processes driving the claims process and where specific evidence requests fit into that process. 
* Veterans will submit better evidence if they are shown the difference between weak and compelling evidence.
* Veterans will reduce redundant submissions and know what new piece of evidence they need to submit if they can view and download previous files they’ve uploaded.
* Veterans will be less confused about evidence requests if we make it extremely clear whether the request is for them or a third party and what the request is. 
* Veterans will take action to submit requested evidence if evidence requests are easier to find in the UI. 

# MVP

## Phase 1: Light Changes to the Claims Listing Page 

### Hypotheses to test

1. Veterans will be less confused about evidence requests if we make it extremely clear whether the request is for them or a third party and what the request is.
    * KPIs: 
        * Veteran clarity on evidence requests (VBMS Events Metrics)
        * Contact center call volume and duration (Contact Center)
        * Bounce rate
        * Time on page
        * Medallia feedback and ratings 

### Proposed In-scope functional requirements

1. Bring claim card titles in-line with acceptable accessibility standards
2. Change the card sorting logic to move those claims with open evidence requests to the top of the stack.
3. Change claim tab titles so they meet accessibility standards.

## Phase 2: Major Changes to the Claims Detail View

### Hypotheses to test

2. Veterans will take action to submit requested evidence if evidence requests are easier to find in the UI.
    * KPIs:
        * Evidence Submission Conversion Rate (Site Metrics)
        * Journey to Evidence Submission (Site Metrics)
        * Repeat Evidence Submissions (Site Metrics)

### Proposed In-scope functional requirements

1. Redesign the claims detail view to break the page into two main parts:
    * The first part should clearly tell the veteran what outstanding requests they need to take action on.
    * The second part should show other open requests intended for third parties.
    * Action alerts for new evidence submission requests will be pulled to the the top of the page

These improvements to the user interface will directly contribute to our ability to test the above hypotheses and track the corresponding KPIs.


### Additional opportunities after technical discovery

### Out of scope

### Possibly in-scope pending technical discovery and feasibility assessment

### Hypotheses to test

## Post
