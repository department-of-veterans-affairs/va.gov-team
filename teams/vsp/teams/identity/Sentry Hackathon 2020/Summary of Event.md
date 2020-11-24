# Summary of Identity Team Sentry Error Hackathon November 2020

## Why have a Sentry Error Hackathon
- Lots of noise
    - Sentry is an excellent solution to use to record different types of errors from your applications and add contextual data that would otherwise be time consuming to put together manually. This type of solution is often a double edged sword in how it collects errors and then how it alerts you to them. We found that within the Identity team we getting hundreds of thousands of error messages a week, but many of them were either not labeled with the correct criticality of the error, the error message did not contain enough information to discern what actually caused the error, and there wasn't a full understanding of how to trace and troubleshoot the errors. This all leads to the errors becoming mostly noise and distracting from making progress on the Identity Teams current goals of a successful rollout of a single signon function for all of va.gov.
- Lack of knowledge about errors by new team members
    - The other major reason to conduct the event was that most of the team nearly completely rolled over to new team members with the exception of one person. It was critical for all the team members to work with this one individual to 
- Focus effort into one task to reduce context switching

## Talk about what we did before the event to prepare
- Error buckets and relevance, refer to the individual bucket pages themselves for more details
- Documented access requirements
## Discuss some of the things we did during the event
- Overview of the errors
- Mapped out how to troubleshoot
- Documented where the code is referenced as well as added to the documentation within the error buckets section
- Blew away the timeline, best thing that could have occurred as everyone was very engaged in the conversation
## Walked away with 4 attack plans, one for each bucket
- Created issues for 2 of the attack plans
- Document 2 here
  - Reduced the noise, making them more actionable. Talk about number of events were errors, and how many are errors now
- Knowledge
  - An understanding of the errors and what we should care about
  - Tasks like these in isolation are mundane and sometimes difficult to tackle alone, with the hackathon we were able to work as a team and focus on single agenda for a 4 hour block. This normally takes a few weeks to get through with other priorities coming into play. Other important factor is that we didn't allow this to consume other priorities time because we only worked on it during the hackathon.
    - Reduced context switching 
## To do:
- Feedback session
- Complete the documentation for the error buckets
- Complete the other two attack plans with issues in GH
- Conduct another hackathon to attack the other two buckets
