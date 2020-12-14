# Summary of Identity Team Sentry Error Hackathon November 2020

## Why have a Sentry Error Hackathon
- Lots of noise
    - Sentry is an excellent solution to use to record different types of errors from your applications and add contextual data that would otherwise be time consuming to put together manually. This type of solution is often a double edged sword in how it collects errors and then how it alerts you to them. We found that within the Identity team we getting hundreds of thousands of error messages a week, but many of them were either not labeled with the correct criticality of the error, the error message did not contain enough information to discern what actually caused the error, and there wasn't a full understanding of how to trace and troubleshoot the errors. This all leads to the errors becoming mostly noise and distracting from making progress on the Identity Teams current goals of a successful rollout of a single signon function for all of va.gov.
- Lack of knowledge about errors by new team members
    - Most of the Identity Team has rolled over to new members. Only one member of the team outside of the PM has been on the team longer than 3 months. The knowledge of the errors, their purpose, and priority is not known by the entire team. We felt an event such as a hackathon could facilitate the knowledge transfer and provide an opportunity to apply this new knowledge to validate the team could cover down on all aspects of Sentry errors related to the Identity team.
- Focus effort into one task to reduce context switching. 
    - The act of context switching for engineering tasks is often discussed as to one of the impediments to progress. Even simply thinking about an outstanding issue that requires more than a few minutes to resolve can cause context switching fatigue. By scheduling and conducting an event such as a hackathon, it allows engineers to focus on other tasks knowing that any concerns or issues they have regarding Sentry errors are going to be addressed during a dedicated session. The other added benefit is that participants do not need to feel rushed when it comes to digging into solutions. Often during research meetings the solution is timeboxed to what we can come up with inside an hour. The hackathon purposely allows a large block continuous time resulting in deep thought, research, and more robust solutions for any given issue. 

## Prior to the event
- Documented an agenda, classified errors into buckets, access requirements, goals, and several other important items which allowed for the team to hit the ground running at the start of the hackathon
- Validated all required participants could attend 
## What happened during the event
- Overview of the errors
- Mapped out how to troubleshoot
- Documented where the code is referenced as well as added to the documentation within the error buckets section
- Blew away the timeline, best thing that could have occurred as everyone was very engaged in the conversation
## Walked away with 4 attack plans, one for each bucket
- **MVI/MPI errors**
    - Note: The errors and methods are being renamed from MVI to MPI. When determining numbers of errors ensure you are searching for both message:"MPI::Errors" and message:"MVI::Errors"
    - [Failed to fetch error](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15883)
        - message:"MVI::Errors" has accounted for roughly `3k errors` over the month of November. `22` of these errors were classified at the level of "warning", the remaining are classified as "Error".
        - message:"MPI::Errors" is the new label for what used to be called MVI errors. The naming change for most methods which impact this sentry error were flipped around Nov 18th. We have seen a total of `36 errors` since the name change to MPI.
    - The other label for this set of errors has [Argument Error](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=3&query=is%3Aunresolved+assigned%3A%23vsp-identity+message%3A%22ArgumentError%22&statsPeriod=30d) in the title. An engineer made a change to how the error was calling out what the issue was during the week of Nov 23rd. Since then we have seen only `5` of these types of events alert. They do however allude to some internal system making an invalid request to MPI (controlled by IAM).
- **Keepalive errors**
    - [SSOe Errors](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16388)
        - The SSOe error accounts for `over a million errors` during the month of November. This is a very noisy error that often hides much more serious concerns. 
        - As part of this [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/15013) we will reduce the noise by reclassifying the error level of about `148K errors`. They will be classified as informational instead of error.
        - Other PRs will be started to further clean up these errors to reduce the noise and allow the team to target real issues.
- **Non-errors**
    - These are items that paint the picture of what may have occurred as a result of another error. These should not be alerting and classified as "info".
- **To be resolved**
    - These errors do not have a bucket and should be investigated with reasonable priority to ensure we determine what is occuring.

## To do:
- Feedback session
- Complete the documentation for the error buckets
- Complete the other two attack plans with issues in GH
- Conduct another hackathon to attack the other two buckets


