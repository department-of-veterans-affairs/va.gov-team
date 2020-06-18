# 10-10CG Phase 2 Release Plan

## Objectives
- **Meet best practices with regard to privacy, accessibility, usablity, and other VA.gov standards**
  - Bet: Ensure the online form meets all best-practices for accessibility and usability
  - Bet: Conduct a review with the VA.gov 508 Office
  - Bet: Implement the [information architecture plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/caregiver-10-10cg.md)
  - Bet: Participate in a VSP Privacy and Security Review and address recommendations
  - Create a Product Guide to better assist users that call the VA.gov Contact Center for help completing the form
  - Bet: Participate in a VSP Staging Review and address recommendations
- **Give the Caregiver Program team real-time and historical insight into the form usage**
  - Bet: Implement Google Analytics tagging to the online form so we can track user interactions
  - Bet: Implement StatsD logging to track and source backend errors
  - Bet: Create a dashboard to be able to track user interactions in real time
- **Gain better insight into how users will interact with the form**
  - Bet: Run a user research study with the coded form to validate and test hypotheses about the user experience
  - Bet: Provide the program team with recommendations based off of user research
- **Provide CSCs with as much information as possible to better adjudicate applications**
  - Bet: Provide historical record of application by sending PDF of 10-10CG to CARMA
  - Bet: Persist a record of each application on the VA.gov backend
- **Conduct thorough testing to ensure we're ready for the public-facing release**
  - Bet: Test the functionality built by the Public Websites team to show/hide the form as needed
  - Bet: Continue to conduct end-to-end testing with CARMA
  - Bet: Create an easier way to refresh the token that connects VA.gov and CARMA to ensure reliable connectivity

## Key
| Symbol | Meaning |
| --- | --- | 
| :white_check_mark:| Complete |
| :zap: | To Do
| :no_entry_sign:| blocked |

## User Stories
| Description| Status |
| --- | --- |
| **Veterans and caregivers will be able to:** | 
| Provide feedback to the Caregiver Program team on the current online form implementation through user research | :zap: |
| Call the Contact Center with any questions about filling out the form | :zap: |
| Know earlier on in the form whether they'll be able to to submit online (stretch) | :zap: |
| Access and submit the form in Production when approved by the Program team| :zap: |
| **Business will be able to:** | 
| Receive a paper version of the 10-10CG with filled in information | :zap: |
| Read through a write up of user feedback provided through user research | :zap:
| Ensure the connection between VA.gov and CARMA can be easily maintained |:zap: 
| Have a real-time source of information on how many users have accesed the form, and what errors they have faced |:zap: 




