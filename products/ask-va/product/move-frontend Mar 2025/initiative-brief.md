# Ask VA: Move frontend to VA.gov (Phase 1)	
This doc gives an overview of the **Move frontend to VA.gov (Phase 1)** Ask VA initiative. View Ask VA's product outline [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md).

- Start date: June 2023
- Launch date: ~~April 9, 2025~~ May 21, 2025
   - **Note**: We initially launched on April 9, then we rolled back due to a security PII issue. [Read our postmortem here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2025/2025-04-11%20-%20AskVA%20OOB%20vulnerability%20patch.md). We relaunched fulled on May 21, 2025. 

**Jump to:**
- [Overview](#overview)
- [Problem statement](#problem-statement)
- [Outcomes](#Outcomes)
- [Measuring success](#measuring-success)
- [Release plan](#release-plan)
- [Team and VA partners](#team-and-va-partners)

## Overview
This initiative brings current form functionality to the VA.gov platform and complete an integration with the existing backend MS Dynamics CRM. We'll identify design and content enhancements that can be made. Unless something is critical to usability, we won't make major changes that will affect current workflows used by CRM agents when answering user inquiries.

## Problem statement
**Background**: The current implementation of Ask VA (AVA) lives in a standalone Microsoft portal. It's not consistent with the VA design standards, is not mobile friendly, and has accessibility issues.  

**Solution**: Bring the Ask VA frontend to VA.gov. Update the frontend to align with the VA.gov modernized platform, making it easier for Veterans and all users to use the tool and resolve their concerns. 

## Outcomes
- **User experience outcomes**: Ensure users have an easy and accessible interaction with Ask VA.
- **Functional outcomes**: Ensure the system operates correctly and efficiently with Ask VA.
- **Business outcomes**: Ensures increased efficiency for VA customer support. 

### User experience outcomes
|Outcome|Description|
|:---|:---|
|Easy to find|Users can more easily locate Ask VA because it's on VA.gov.|
|Quick to complete|Users complete a shorter form compared to the current Ask VA form.|
|Clear instructions and information|Users have clearer instructions for Ask VA.|
|Mobile-friendly|Users can use Ask VA on a mobile or non-desktop device more easily.|
|Accessibility|Users who use assistive technology or who may have cognitive/physical disabilities can easily use Ask VA.|
|Easy to track|Authenticated users and unauthenticated users can more easily check the status of their question|

### Functional outcomes
|Outcome|Description|
|:---|:---|
|Form submission (CRM integration)|All form submissions are correctly routed and include all inputted information from the VA.gov frontend.|
|Retrieving questions to display in inbox (CRM integration)|Users can see all their previous questions in their inbox after logging in to VA.gov.|
|Check question status unauthenticated (CRM integration)|Users can check the status of their questions using a question number on the unauthenticated landing page on VA.gov.|
|Successful integrations with non-CRM APIs|The system successfully retrieves data from other APIs, such WEAMS for school facilities or VA Profile for personal information.|

### Business outcomes
|Outcome|Description|
|:---|:---|
|Improved customer support efficiency|The multiple Ask VA teams collaborate together to deliver a better Ask VA digital customer support experience.|
|Improved user satisfaction|Users are more satisfied with Ask VA as compared to the current Ask VA portal.|
|Improved trust in VA|Users trust VA and VA services more after getting answers through Ask VA.|
|Improved scalability|Ask VA handles more questions without a proportional increase in resources, due to an efficient CRM integration.|
|Improved flexibility|Ask VA's flexibility in integrating with other systems and APIs allows for more efficient future enhancements and expanded services.|

## Measuring success
Objectives and Key results (OKRs) help us measure success of specific targeted objectives for a specific initiative or time period. 

This initiative aligns with the following 2025 OCTO OKRs: 
- Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
   - Key result 1 (Satisfaction): Improve satisfaction with our web and mobile products by 5 points.

It also includes these OKRs: 
- Objective: Users complete the form more easily
   - Key result (Form completion rate): Increase the percentage of successfully sent questions by 5 points
   - Key result (Accurate routing): Increase percentage of questions that are routed successfully by submitters
- Objective: Integrate with enterprise assets, such as VA Profile, as necessary and possible for Phase 1
   - Key result: Explore integrations with enterprise assets (VANotify, VA Profile, My VA, Medallia feedback surveys)
   - Key result: Execute successful integration with VA Profile
   - Key result: Execute successful integration with Medallia feedback surveys
- Objective: Integrate successfully with Ask VA Dynamics CRM backend
   - Key result: Develop and deploy API endpoints to send and receive data from AVA Dynamics CRM
   - Key result: There are 0 fatal errors in sending or receiving data needed for VA agents to answer submitter questions
	
|Key result|Baseline (ask.va.gov)|Initial canary release (3/27/25 to 4/9/2025)|Second release (5/21/2025 to 6/17/2025)|
|:---|:---|:---|:---|
|Satisfaction|12/16/25 to 4/9/25: 23%, 3150 responses|3/27/25 to 4/9/25: 25%, 16 responses|5/21/25 to 6/17/25: 11%, 201 responses|
|Form completion rate|[May to October (6 months)](https://dvagov.sharepoint.com/:x:/s/AskVA/EZEzfaI8u3lJvPx3il1VOFIBEHvGZXQmDr7aZrCwQMeZyg?e=absywx): 35%|3/27/25 to 4/9/25: 25%|x|
|Accurate routing|2024: 93%|x|x|

## Release plan
Review our release plan [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/release-plan.md).

## Team and partners
### Our team
|Role|Assigned|Contact|
|:---|:---|:---|
|Product owner (OCTO), Designer|Becky Phung||
|Product owner (VES)|Natalie Morales||
|Program manager|Megan Siddle|megan.siddle@oddball.io|
|Product manager|Ariel Martinez|ariel.martinez@thoughtworks.com|
|Lead engineer|Joseph Hall|joe.hall@thoughtworks.com|
|Frontend engineer|Eddie Otero|eddie.otero@oddball.io|
|Frontend engineer|Hemesh Patel|hemesh.patel@docme360.com|
|Backend engineer|Khoa Nguyen|khoa.nguyen@oddball.io|
|Data engineer (part-time)|Jacob Cheriathundam|jacob@docme360.com|
|UX designer|Thomas Michaud|thomas.michaud@oddball.io|
|UX researcher & designer|Tyler Gindraux|tyler@bluetiger.digital|

### VA partners
We closely work with the Ask VA CRM development team. Learn more about our partnership [in this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696976895933/4f5410b3e8770441f4101cbabd565aa0cd13dac7).
