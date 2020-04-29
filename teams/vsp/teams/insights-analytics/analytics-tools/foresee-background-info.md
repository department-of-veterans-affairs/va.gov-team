# Foresee Discovery

## Meeting Information
7/23/19
Attendees: 
 - Joanne
 - Leah
 - Amy
 - Jon
 - ForeSee SME/POC
 
## ForeSee Description
ForeSee CX Suite provides user given survey data from va.gov.
 
## Conversation Guide

**Additional Background**
- Foresee's current VA survey was created for the relaunch (Nov '18)
- Other orgs run their own portion: MyHealtheVet, VBA, Vantage Point
     - MHV looks at demographic information and is feature driven for satisfaction with the site
     - VBA runs a specific version of their own website
     - Pittsburgh.gov is going to have its own survey

**Does the Foresee survey capture users across the site or just part of the site?**
- Across the site

**Which pages does the survey appear on?**
- At the end of a full user cycle

**How many pages do users have to see before they see the Foresee prompt? If they close it, how long before they see it again?**
- Surveys are distributed at a sampled rate via sessions, not users. Foresee doesn't recognize if a user has been on their phone vs the computer.
Survey Conditions:
  - Users have to navigate through at least 3 pages. Users are randomly and anonymously chosen. If the user declines the survey, Foresee cookies the user for 90 days until they receive the modal again.

**How are the surveys formatted? What is the user experience for the surveys?**
- The surveys are really long and meant to be issued after users use the site. Surveys are 20 questions long.
- The surveys establish baselines for satisfaction using benchmarks set again the rest of the government.

**Given the survey length, what is the return on surveys?**
- While the sampling rate is low, the current survey has a really high return rate. The modal popup goes to .5 or 1% of users every month.

**Is there product specific data that is captured? If so, where can we find it? If not, can we create surveys to improve products? For example, is there product specific data on Education or Claims?**
- There is a "star rating" comment card system (beta) that is located on current hubs (VA.gov Stars Only survey under `Feedback Surveys`)
    - We can work with Jeff on tailoring the surveys to individual parts of the site.
    - There is a 2 week delay when providing questions
    - If we have a standard questionnaire that spans the different products, we can put them together to approve the questions all at once.
  
**What is the difference between VA Main 2 and Modernized?**
- VA Main 2 is the va.gov-wide survey that gets distributed. The "Modernized" dashboard is simply a differently filtered view of VA Main 2.

**How is CSAT determined? Is there an API where we can pull the CSAT or a formula where we can calculate the CSAT based on the satisfaction questions?**
- CSAT is Foresee proprietary data. The 3 satisfaction questions roll into the score but how it is calculated is not disclosed.

### Resources
- [Developer Info](https://developer.foresee.com/docs)

## Examples of questions that can be asked on Foresee:
- Customer Satisfaction 1-10 Scale
- Multiple Choice
- Open Ended
- Customer Experience 1-5 Star Rating
