# Ask VA replies from 1-1-23 to 9-1-23
Last updated: 9/6/23

## Overview
We recommend continuing to allow submitters to reply to inquiries both by email (unauthenticated) and the AVA dashboard (authenticated) in Phase 1. We reviewed: 
- The extent to which submitters use the reply feature
- Security risks with allowing unauthenticated resplies

Disabling email replies will have a larger impact on the unauthenticated submitter experience and on categories that receive more unauthenticated replies than authenticated.

## Background
After submitting an inquiry, a submitter can possibly follow-up with their inquiry with a reply. They can reply in two ways: 
- As an unauthenticated user by replying to an email notification
- As an authenticated user by logging into ask.va.gov and replying in the Ask VA dashboard

Inquiries are linked to VA business line queues in the CRM system. Business lines can enable or disable whether a submitter can reply to an inqury. Most queues in CRM accept replies but some don't.

## Recommendations
|Phase|Recommendation|
|:--|:--|
|Phase 1|Continue to allow submitters to reply to inquiries via email (unauthenticated) and the AVA dashboard (authenticated).|
|Phase 2 and beyond|Determine risk mitigation strategies for replies from unauthenticated users while still prioritizing a simple, easy user expereince for submitting inquiries.|

## Key takeaway 1: The percentage of replies from unauthenticated vs. authenticated users varies greatly by category.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/d00dccad-c70c-4d83-a7b4-2624b8ed1957)

## Key takeaway 2: Out of total replies from submitters, 88% come from authenticated users and 12% come from unauthenticated users.
Note: This is largely due to a higher number of replies that come through categories like `Education`, `Compensation`, and `Debt`.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/35c9a7c8-8ba2-48e5-893f-274ce2fee157)

## Key takeaway 3: Distribution of replies by category is uneven.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135838070/074da549-d232-402f-8dbf-d8075fa48c01)


## Risks
- Submitters who don't log in can submit an inquiry or reply to an inquiry with PII/PHI in the response.
- Asking submitters to authenticate is an extra step that places additional burden on submitters.
- Submitters can reply with email attachments, which may contain viruses or malware.
- Submitters could flood the email inbox with replies. 

## Notes on the data
The data excludes replies: 
  - Outside of the reply period
  - Where the inquiry number in the subject line doesn't match one in CRM
  - To categories that don't allow replies
    
The data includes replies:
  - Only from 2023. There was a large jump in reply data from pre-2023 to 2023, so we decided to just review 2023 data.
  - From the AVA system
  - From submitters where replies are enabled or inside the reply period

Note: The category in the data is the LAST category that an inquiry lands at after potentially being rerouted.

## Data
View the data visualizations in [this Excel Workbook in SharePoint](https://dvagov.sharepoint.com/:x:/s/AskVA/Eb9YcXZwO_pEjXpqnJt3PDEBYvC_2U8TI2sA-ID2HSVyYw?e=SJh3lA).
Make sure you're connected to the VA network to open it.


