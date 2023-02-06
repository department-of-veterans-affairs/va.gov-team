## Navigation


### Implementation plan for Step 3

[Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/nav-and-IA-updates/nav-and-IA-product-brief.md)


### Goal

The current navigation and Information Architecture of the app were created as needed as part of the MVP and initial following features. In order to properly scale the app over time, we want to ensure we put thought into the way the app is organized. Through research with Veterans, we have determined a way of organizing the app to achieve the following goals:



* Make moving within the app and finding specific content easier and simpler
* Allow for easier app scaling for future features
* Create a better space to add personalized content in the future, such as a more robust Homepage


### Design, Research & Content

The purpose of our work was to inform the information architecture, content and design of the VA Mobile app in order to deliver a solution that is usable, useful, and extensible. We conducted user research and design activities collaboratively to explore the opportunity space and deliver a solution that is user-centered and achieves product goals. Then we created the artifacts and plans necessary to build that vision.



* [VA Mobile App: Information Architecture & Navigation - High Level Project Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/High%20Level%20Project%20Summary.md) 
    * Research Findings:
        * [VA Mobile App IA & Navigation: Open Card Sort Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/information-architecture/open%20card%20sort/Card-Sort-Research-Plan.md) (10/21)
        * [VA Mobile App IA & Navigation: Closed Card Sort Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/information-architecture/closed%20card%20sort/closed-card-sort-research-plan.md) (3/22)
        * [VA Mobile App IA & Navigation: Usability Findings ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/usability-testing/new%20navigation%20usability/usability-findings.md)(9/22)
    * Design & Content Artifacts:
        * [VA Mobile App - Navigation UI Direction Recommendation](https://docs.google.com/presentation/d/1H-eNY4buJG0pHvHKYyPWpfNrpuuwUpBpr-w8Ph4QjiM/edit#slide=id.p1)
        * [VA Mobile App - Navigation Changes (Sprint Demo)](https://docs.google.com/presentation/d/1_XMxwrmv914uZAoWFkCmKs8ETFOHosR6Aq23iqKmblU/edit#slide=id.p1) 
        * [VA Mobile App - Detailed Sitemap (Mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1655989910332/d0f78565904f80b730fb70285eef9f4002279aef?sender=kelly3569)
        * [IA/NAV - Screen Templates (Figma)](https://www.figma.com/file/cdp7Be4UdYesq9fXeqaOgt/IA%2FNAV-Screen-Templates?node-id=0%3A1)
        * [VA Mobile App - IA/Screen Audit (dGoc)](https://docs.google.com/spreadsheets/d/1nLZdbcZS2nAnsVz12TwsHF2OU5nNeWZoJ0bSFuiKF_A/edit#gid=0) 
        * [Profile section updates (Figma)](https://www.figma.com/file/LKmqgew3L2nSBl0qF6YOwI/IA%2FNav-Hotspot-Wireframes?node-id=3%3A1207&t=8VKVNW2rbOqNpbUJ-1)
        * [Onboarding section updates (Mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1664460149585/3a7a29557abdb9d68d950a31175cbe04058933eb?sender=kelly3569)
    * Planning Artifacts
        * [Q4 SoS Board](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1663951893633/1e4d4d146f595417cc84bab7dcf4ab6379ceadf7?sender=kelly3569)
        * [Navigation: Proposed UX + ENG collaboration/handoff process](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1654631352596/47efe3e3d0f502c2a04b29ccd51c16dd5b7c2cab?sender=kelly3569)


### Process


#### Technical Approach

Navigation changes are global. In order to reduce confusion and complexity, there will be no other large feature development during its implementation. The entire Front End team will swarm nav work until it is complete. 


##### Navigation Code Branch

We will create a separate code branch for the navigation work.  This will allow us to make changes but also preserve the ability to push out emergency fixes if needed during our development of the navigation work.

The order of operations will focus on updating the structure before updating the content of the screens.

Sequence:



1. Work with Eng and UX to conduct Spikes to clarify unknowns
    1. ✅completed during Step 2
2. Build screen templates
    2. Can be done prior to turning off automatic releases
3. Change screens structure and apply templates
    3. Must turn off automatic releases prior to starting these tickets
4. Update individual screen functionality where needed
    4. Move bottom bar buttons


#### QA Strategy

Due to the scale of changes in the app, we have put extra thought into our strategy for testing this feature.  Our testing will follow these steps:



1. Create test cases for changes in navigation including new location of pages and features
2. Create test cases for new screens
3. Update RC Regression tests for the new navigation flow
4. Execute test cases as changes and new pages are implemented
5. UX will perform Visual QA
    * Will add comments in GitHub to avoid duplicate tickets by multiple testers

Additional information on the Test plan is outlined in ticket [4079](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/department-of-veterans-affairs/va-mobile-app/4079).

We will not be able to do a phased rollout for this feature.  We will plan to release to 100% of users once all testing has been performed, necessary bugs fixed, and other pre-release activities completed.


#### UAT Plan

Because we are not testing any Veteran-specific data that we are unable to access with test users, we are not planning formal UAT for this feature.  If we find any areas during implementation that we see as particularly risky, we will plan extra testing in that area.


#### Timeline

Sprint Capacity for FE Team: ~**99 pts per Sprint**

Ticket Estimates: **275 pts of work**

Target number of Sprints: ~**3 Sprints** of dedicated FE work

Risks to timeline:



* Unknown OOO
* Prod bugs


#### Pre-launch Activities


##### App Store Updates

App Store descriptions and images will be updated once closer to completion of the feature.  [This user story](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/department-of-veterans-affairs/va-mobile-app/4130) will track the work to update the App Store information.  These updates will also be applied to the [VA App Store](https://mobile.va.gov/app/va-health-and-benefits).


##### Call Center Documentation

Call Center documentation will be updated once closer to completion of the feature. There are two separate Call Centers that need to be updated.  We will learn more about this process as part of the current Rx efforts.   [This user story](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/department-of-veterans-affairs/va-mobile-app/4151) will track the work to update the Call Center documentation.


##### Release Notes

Release Notes will be written once closer to completion of the feature.  [This user story](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/department-of-veterans-affairs/va-mobile-app/4102) will track the work to create Release Notes.


#### Post-launch Monitoring

See [Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/nav-and-IA-updates/nav-and-IA-product-brief.md) for Metrics we plan to track, including baselines.

Plan for monitoring going forward:



* Metrics are collected and reviewed **monthly**.  App Store Reviews can be monitored on a **weekly** basis for the first month, then monthly after that.


#### Stakeholders



* VA Mobile POs - Chris Johnston & Rachel Han
    * This feature involves changes to in-app functionality only so external groups should not need to be notified, apart from updating the [VA App Store](https://mobile.va.gov/app/va-health-and-benefits) content and updating Call Centers.
    * Do we want to work with anyone in VA for marketing?


#### Questions



* Who do we work with to update the [VA App Store](https://mobile.va.gov/app/va-health-and-benefits)?


#### Step 3 Gate Review

Once the implementation of this feature is mostly complete, we will have the Step 3 Gate Review to discuss moving to Step 4 (Launch).  During that review we will do the following:



* Will occur at the SoS meeting
* Review any bugs that we will launch with
* Review phased release plan
* Review success measures and monitoring plan
