# Work in Progress

## Description: 
In the event that VAHB Mobile Flagship Teams have multiple large features ready to go out in a release, VAHB Mobile QA and Release team recommends only allowing a single large feature out at a time which means staggering large changes across multiple releases. This is the recommendation as combining multiple large features in a single release will lead to additional coordination across teams / documents, testing effort, increased complexity in understanding which of the multiple features is causing the problem, and also awareness on introducing too much change at a single time for Veterans. 

However in the event that there is a situation to not follow VAHB Mobile QA and Release Team recommendation, then need to set some standards and requirements in order to launch multiple big changes in a single release. 

## Requirements:
- Need to be behind a feature flag so that if there is an issue they can be turned off in production
- Projects have monitoring and analytics in place to track success / failure 
- Have a rollback plan in the event of an issue 

## Notes: 
- Requested by Tim Wright during May 2024 SoS meeting
- Team Product Managers need to coordinate several sprints before release
   - Coordiante amongst their team's QA
   - Ensure App Store, Call Center, and other documentation accounts for all changes and not just theirs
- Merging multiple large features together will lead to merge conflicts, fixes across multiple features
