# Work in Progress

## Description: 
In the event that VAHB Mobile Flagship Teams have multiple large features ready to go out in a release, VAHB Mobile QA and Release team recommends only allowing a single large feature out at a time which means staggering large changes across multiple releases. This is the recommendation as combining multiple large features in a single release will lead to additional coordination across teams / documents, testing effort, increased complexity in understanding which of the multiple features is causing the problem, and also awareness on introducing too much change at a single time for Veterans. Basically a lot of effort and coordination is required to compensate for the risk this introduces. 

However in the event that there is a situation to not follow VAHB Mobile QA and Release Team's recommendation, then certain standards and requirements must be met in order to launch multiple big changes in a single release. 

## Requirements:
- Features need to be behind a feature flag
     - VAHB Mobile app needs ability to turn one or both features off if necessary 
- Features have applicable monitoring and analytics in place to track success / failure
     - Flagship / external team need to be confident that they can monitor their work and deliniate between their feature and the other features
- Features need a documented rollback plan in the event of an issue
     -  Needs to ensure it does not impact the other features
- All PMs of the Features need to have coordinated and agreed to do this, if it becomes possible, and accepting the risks  
- All impacted VA POs of the Features need to agree to do this, if its possible, and accepting the risks  
- Intent to do this needs be communicated at least 2 sprints ahead of time to the Release Manager
     - Even if there is a possibility both won't be ready at the same time
     - PMs should have already communicated with one another before this and agreed to this plan
- QA must have successfully tested both feature at the same time with no bugs being found
     - QA will need no less than 2 sprints for testing the cominbation of all the features    

## Notes: 
- Requested by Tim Wright during May 2024 SoS meeting
- Team Product Managers need to coordinate several sprints before release
   - Coordiante amongst their team's QA
   - Ensure App Store, Call Center, and other documentation accounts for all changes and not just theirs
- Merging multiple large features together will lead to merge conflicts and fixes across multiple features

