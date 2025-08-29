# 10-10CG Phase 2 Working Plan - in progress


## Hypotheses/Bets
- **Meet best practices with regard to privacy, security, accessibility, usablity, and other VA.gov standards so that we can be confident in our users' success during launch**
  - Bet: Ensure the online form meets all best-practices for accessibility and usability
  - Bet: Conduct a review with the VA.gov 508 Office
  - Bet: Implement the [information architecture plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/caregiver-10-10cg.md)
  - Bet: Participate in a VSP Privacy and Security Review and address recommendations
  - Create a Product Guide to better assist users that call the VA.gov Contact Center for help completing the form
  - Bet: Participate in a VSP Staging Review and address recommendations
- **Give the Caregiver Program team real-time and historical insight into the form usage so that we can prioritize changes as needed**
  - Bet: Implement Google Analytics tagging to the online form so we can track user interactions
  - Bet: Implement StatsD logging to track and source backend errors
  - Bet: Create a dashboard to be able to track user interactions in real time
- **Gain better insight into how users will interact with the form so that we can prepare for the public-facing release**
  - Bet: Run a user research study with the coded form to validate and test hypotheses about the user experience
  - Bet: Provide the program team with recommendations based off of user research
- **Provide CSCs with as much information as possible so that CSCs can better adjudicate applications**
  - Bet: Provide historical record of application by sending PDF of 10-10CG to CARMA
  - Bet: Persist a record of each application on the VA.gov backend
- **Conduct thorough testing so that we can ensure we're ready for the public-facing release**
  - Bet: Test the functionality built by the Public Websites team to show/hide the form as needed
  - Bet: Continue to conduct end-to-end testing with CARMA
- **Add enhancements to the code so that it will be easier to make changes in the future**
  - Bet: Create an easier way to refresh the token that connects VA.gov and CARMA to ensure reliable connectivity
  - Bet: Frontend code refactor
  - Bet: Backend code refactor
  
  
  ## Stretch Goals
  - Update application processing flow to limit the amount of time the user spends waiting for a confirmation
  - Allow user to print a copy of the submitted information (needs grooming)
  - Allow user to print a pre-filled PDF if the submission did not go through (needs grooming)



