# VA.gov messages read receipts
#### Overview
Va.gov will maintain currently functionality of read receipts on messages on VA.gov by Milestone 2 (June 4) to ensure users don't loose access to features.

---

## Outcome Summary
Patients can view if their message has been recieved and viewed by their care team.  

**Related/Associated product(s)**

[VA.gov messages product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)

## Problem
Uesrs on MHV Classic are used to read receipts for messages to understand if their care team has viewed the message.  Users expect this behavior on VA.gov and we have seen this through Medallia feedback.  

## Measuring Success

### Key Performance Indicators (KPIs)
- CSAT for VA.gov messages tool


## Discovery
### Assumptions/Risks

- We are unable to make API updates at this time to support read receipts at the thread level and understand this is a less ideal user expereince but consistent with what exists on MHV Classic.
- We understand that read receipts can not guarantee that a care team or provider has actually read the message.

### What're you building
Ability for a user to view a sent message and see if it has been viewed by their care team. This applies to both OH and VistA messages.

MVP - Include read receipt on the message details for consistent functionality as MHV Classic to move to Milestone 2.  Due to priorities and tech constraints we ackonledge this is not the best user experience and will prioritize future enhancements.
Considered adding read receipt as a third line in the accordion but this requires a larger engineering effort and will not meet Milestone 2 timelines.

Future Enhancement - Ideally a user wants to be able to view read receipts on the sent list to quickly be able to get a status of the conversation and not just the message level.  This is not possible without an API update.

#### Go-to-market 
- Internal communications to MHV Coordinators and help desk staff to ensure they are aware of how the feature works and can guide users who need help.

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107461)

### Timeline 
- **June 2025** - Launch MVP (read receipts on message level) on VA.gov. 
- **Summer/Fall 2025** - Future enhancement to update API to support read receipts at conversation level (thread) on VA.gov.

#### Initiative Launch Dates
- *Target Launch Date*
  - June 2025
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
MHV Classic 
![image](https://github.com/user-attachments/assets/b5721e2b-1943-45e1-9150-b98670b0f91f)

My VA Health 
![image](https://github.com/user-attachments/assets/fca5fd7f-513a-455f-8e6f-d551236a8cbc)


### After - [Figma](https://www.figma.com/design/b5zVnuG5nXshAwnkYd7JBY/Z---SM-threads?node-id=504-15240&t=6xclKdZbRqRG4JfI-0)

![image](https://github.com/user-attachments/assets/b7d34edd-f6d2-4e8a-b0a4-e123e77ac779)


---

#### Communications
- Team Name: MHV on VA.gov Messages team
- GitHub Label(s): mhv-va.gov-secure-messaging
- Slack channel: mhv-secure-messaging
- Product POCs: Patrick Bateman; Bryan Riley

#### Stakeholders  
- Office/Department: VHA Office of Connected Care
- Contact(s): Silvia Palmer
 
