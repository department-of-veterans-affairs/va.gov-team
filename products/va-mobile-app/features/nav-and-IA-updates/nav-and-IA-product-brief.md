# **Navigation Product Brief**

### Product Overview


#### Outcomes


- The mobile app needs a **flexible infrastructure that evolves and supports Veteran needs over time** 
- Veterans want to focus on primary tasks, free from distractions of finding the thing 
- A new navigation model should seamlessly support the app experience rather than adding complexity of unfamiliar patterns
- The mobile app needs room to grow as we expand our feature set 

#### Bets


* Adding Benefits category and rearranging features within this umbrella increases findability 
* New IA and tab-bar design allows for extra space to add another category or search 
* New **screen templates provide consistency** and support getting a task done
* Differentiated home screen and category screens create a visual hierarchy that lets Veterans know where users are at in the app at a glance 
* Updated content for back buttons and screen titles will make it clearer to navigate around the app and provide a more accessible experience. 


#### Risks


* Current app users are well versed in the current navigation/IA
* New navigation design may bring up technical and accessibility challenges. How might we continue to prioritize accessibility? 



#### Measurement 

**North Star:** Users can find things easily and quickly within the app (even if/when personalized content is not present).

**Objective 1:** Findability over time remains the same or gets better

Leading indicators (quant)



* **KR: <span style="text-decoration:underline;">Category level traffic</span>** will remain the same or increase (with the exception of Profile) 
    * Home - 5,526,709 views ([Oct 1st - Oct 31st 22](https://analytics.google.com/analytics/web/#/p265787033/reports/explorer?params=_u..nav%3Dmaui%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20221001%26_u.date01%3D20221031&r=all-pages-and-screens&ruid=85114BBE-2F4B-42D6-AF54-5A24E62195CF&collectionId=3022309925))
    * Benefits (new)
        * Claims - 4,769,141 views (Oct 1st - Oct 31st 22)
        * Letters - 861,999 views (Oct 1st - Oct 31st 22)
    * Health - 2,148,832 views (Oct 1st - Oct 31st 22)
    * Profile - 2,225,605 views (Oct 1st - Oct 31st 22)
* **KR**: <span style="text-decoration:underline;">Amount of Secure Messages sent</span> stays consistent
    * We want to track if the number of Secure Messages sent changes drastically because we are changing how the button works.  We want to ensure less messages aren’t sent because the button is harder to find/use
    * [137,085 in Sept 22](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Dashboard/)
    * 155,852 in Oct 22

* **KR**: <span style="text-decoration:underline;">Amount of updates to Direct Deposit</span> stays consistent
    * We want to track if the number of Direct Deposit updates changes drastically because we are changing where that information is located (from Profile to the new Payment ssection).  We want to ensure there isn't a drastic decrease of updates indicating that users can't find where to make changes.
    * [2775 in Sept 22]([https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Dashboard/](https://analytics.google.com/analytics/web/#/p265787033/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..startRow%3D0%26_u.comparisonOption%3Ddisabled%26_r..dataFilters%3D%5B%7B%22type%22:1,%22fieldName%22:%22customDimensionsGroup1Slot01%22,%22evaluationType%22:1,%22expressionList%22:%5B%22production%22%5D,%22complement%22:false,%22isCaseSensitive%22:true,%22expression%22:%22%22%7D%5D%26_u.date00%3D20220901%26_u.date01%3D20220930&r=top-events&ruid=BFA0B975-82E6-4C3B-AD42-ED07A0C253C2&collectionId=3022309925))
    * 2940 in Oct 22

**Objective 2:** Number of people using the app (and features within it) isn’t impacted negatively

Trailing indicators (quant)



* **KR: <span style="text-decoration:underline;">Monthly Active Users</span>** number remains the same or doesn’t decrease
    * [508k](https://analytics.google.com/analytics/web/#/p265787033/reports/dashboard?params=_u..nav%3Dmaui%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20221001%26_u.date01%3D20221031&r=lifecycle-engagement-overview&ruid=6CC58A40-221B-4699-91DF-147FF07DE9B2&collectionId=3022309925) monthly average users (Oct 31st 22)
* **KR:** <span style="text-decoration:underline;">App store Star Ratings</span> don’t change drastically 
    * [4.8 stars iOS](https://appstoreconnect.apple.com/apps/1559609596/appstore/activity/ios/ratingsResponses?m=) 51,977 Ratings (Oct 31st 22)
    * [4.6 stars Android](https://play.google.com/store/apps/details?id=gov.va.mobileapp) 14.6K reviews (Oct 31st 22)

**Objective 3:** Users do not have difficulty using the navigation 

Trailing indicators (qual)



* **KR:** <span style="text-decoration:underline;">App store reviews</span> do not mention it’s difficult to find things in the app
* **KR:** In future feature usability tests, users do not have difficulty finding things 

**Notes:**



* We expect traffic to decline for certain parts of the app and level out over time, specifically Profile. High traffic features, such as letters, are being moved from Profile to Benefits, and anticipate a bump in traffic to Benefits. 
* Without usability tests, these measures don’t give us the explicit confirmation if users can find what they are looking for 


#### Significant Decisions

**What navigation model should we use?**

We conducted a card sorting activity in early 2022 to understand how participants would group and name the current features within the VA mobile app. Our final proposal included a model that is flexible, category-driven, maps to existing tools and avoids scalability issues. 



**How should we implement navigation work? \
How should we release navigation work?**



* Verified our bets with usability testing
* Heuristics for whether to fix something on the first go
* Time boxing

What is the criteria for releases? 



* What do we monitor for each release phase?


#### **Research**

~~We recommend an approach that combines personalization concepts and navigation validation into one study.~~ 



* ~~Learn what personalized information is most valuable to Veterans using the app ~~
* Validate that Veterans can successfully navigate their way through the app
    * Can people find the things that are moving? (ex: letters will no longer be in Profile)

~~A risk in combining these efforts is that we might receive negative feedback about the navigation model as we are working on it. However, based on previous tree test results, we have relatively high levels of confidence that the new navigation model will meet user needs. ~~

We will conduct a [research study to evaluate the usability of the proposed navigation pattern and information architecture](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-research/usability-testing/new%20navigation%20usability) (based on the Closed Card Sort findings) using a series of tasks the participants will be asked to complete. The tasks will require the participant to explore each part of the proposed IA and navigation, and they represent a combination of features with the highest engagement as well as features that have moved locations. This includes:



1. Update your email address (Profile - new location in nav UI)
2. Check your disability rating (moved from Profile to Benefits) 
3. Check the date of your upcoming doctor appointment (Health)
4. Check your most recent disability payment (moved from Profile to new category, Payments)
5. Check the status of your disability claim (new category name: Benefits)

We will also determine if any significant navigational barriers exist for participants who are current users of the mobile app vs participants who are not users of the mobile app.


#### **Implementation Plan**

See Step 3 Implementation Plan

UX/Design

The UX team will complete an audit of the current app to understand the scope of changes and identify where the new navigation model is not an easy translation. Rather than make wireframes/designs of every screen in the app, we want to efficiently communicate necessary changes by only wireframing hotspots, areas in the app where we expect to have more friction with the new navigation model.  



* **Global templates**
    * Moving forward, there will only be 8-10 types of screens in the app
    * UX will create high fidelity designs for these templates
        * Home
        * Category
        * Feature
        * Child
        * Full screen subtask (single task)
        * Full screen subtask (multistep)
        * Panel (full)
        * Panel (half)
    * The audit spreadsheet will include a list of screens that details what changes need to be made, including type, transition, and nav-related content
* **Hotspots**
    * Based on the app audit, these are places in the app where we expect to have more friction with the new navigation model 
    * Wireframes/high fidelity designs will be created for these areas to be reviewed by Product, ENG and QA
    * Preliminary hotspots for design spikes:
        * Profile (low hanging fruit) 
        * Settings
        * Claims
        * Letters
        * Secure messaging 


#### Step 2 tasks



1. Figure out solution for surfacing Disability rating higher up
2. 9/29 - (UX handoff) WIP engineering feasibility and accessibility review of templates (needs to be scheduled, can be canceled later if not needed)
3. 9/29 - Research synthesis to evaluate and inform any additional changes to the IA
4. Update screen templates
    1. [List of templates for V1](#bookmark=id.ked0dpgaftx5)
5. Triage hotspots
6. Evaluate content for accessibility from the list of [triaged hotspots](https://docs.google.com/spreadsheets/d/1nLZdbcZS2nAnsVz12TwsHF2OU5nNeWZoJ0bSFuiKF_A/edit#gid=0)
    2. Matt to follow up on this with Holly and Misty
    3. May already be done 
7. Create preliminary QA test plan
8. Create engineering tickets as we go along and send to UX handoff and estimation
9. Create Step 3 delivery plan
10. Step 2 gate review

Engineering 

Navigation changes are global. In order to reduce confusion and complexity, there will be no other large feature development during its implementation. The entire FE team will swarm nav work until it’s complete. 

The order of operations will focus on updating the structure before updating to the content of the screens. We will start with the global screen template changes, and work our way down to the component level. 



* **V1 - IA changes (updates to top level navigation)**
    * _Unsure how we ticket this work_
    * Design deliverable:
        * Sitemap that shows the hierarchy of each screen in the app: [VA Mobile App - Detailed sitemap (future state 6-23-22)](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/3323)
            * Basically done, but still going through findings to verify
            * Analytics need to be determined for current state vs. new state - Holly working through this  
        * [VA Mobile App - IA Audit](https://docs.google.com/spreadsheets/d/1nLZdbcZS2nAnsVz12TwsHF2OU5nNeWZoJ0bSFuiKF_A/edit#gid=0): contains current locations & new locations for screens
    * Dev-ready?
        * Ready for estimation
        * Estimated
        * Tickets ready
* **V1 - Build screen template components (if not already created)**
    * 
* **V1 - Update screen templates**- each screen will receive their new template and transitions
    * Tickets will be divided into sections (ex: “Health Screens” or  “Claims Screens”) and one engineer can work on an individual section
        * Acceptance criteria for tickets will live in the audit spreadsheet, which identifies each screen in the app
    * Design deliverables: 
        * Early stage template review with engineering 
        * High fidelity designs for all screen templates
            * Have templates done for Home, Category, and Future State (?) screens
            * Have it designed in target state style, but not current state style, so will need to work on that
        * Audit spreadsheet that outlines changes to screens that will be an easy translation
* **V1 - Address hotspots (probably dont have anything in this section. It should mostly be cleaned up with templates and site map by the time we are in Step 3)**
    * Inventory of hotspots **✓**
    * Each hotspot will have it’s own ticket 
    * Design deliverables:
        * High fidelity design for all screens that are not an easy translation
* **V2 - UI changes** (ex: changes to the homescreen or category screens)
    * UI changes will be tracked in individual tickets
    * Design deliverables: 
        * High fidelity designs
* **V2 - Component changes **
    * Component level changes will be tracked in individual tickets
    * Will go through the component committee process

We are mapping out the best way to work with each other here- [Proposed UX + ENG handoff process ](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1654631352596/47efe3e3d0f502c2a04b29ccd51c16dd5b7c2cab?sender=uf0bfcbdeb88abc2073131412)

**Things to consider:**



* Will need a way to track minor things that are not working so we can follow up and fix them after launching 

QA



* QA should happen each sprint that there’s testable work
    * If this project is pushed in an XL branch, sprint testing will focus on ticket-specific testing
    * If this project is in develop behind a feature flag, sprint testing will focus on:
        * Feature flag off: basic regression testing (to make sure that the feature flag is working as intended), and ticket-specific testing for elements that aren’t behind the feature flag (such as component changes)
        * Feature flag on: ticket-specific testing for what’s behind the feature flag
* After each ‘big’ chunk of Eng work is done (ex: all IA changes in; all screens updated to use new templates; etc), QA will do holistic testing (end-to-end, likely running the RC script + targeted other workflows) to make sure the app is functioning well & working cohesively.
* All of the above testing will be necessary to sign off on feature tickets. If all of the above testing is happening in an XL, will need to add a further sprint for merging to develop and re-running the ‘big chunk’ testing in the develop branch.


#### **Release Plan**

See Rollout & Migration Plan

How might we release navigation changes to users in a stable, cohesive way? 

We want to prioritize small, iterative changes over big bang reveals when possible. 



* Most features are related, but don’t pose obvious dependencies on each other
* IA changes arguably the most important, we could change the organization of the screens within the app without making any other changes 
    * assuming QA does not reveal issues we didn’t anticipate

Option 2 was originally preferred

 * Smaller changes over several releases
 * Gives us time to triage issues, and makes it easier to pinpoint what’s causing issues 
 * Focused monitoring 
 * Delivers value when a feature is production ready, rather than waiting for everything to be done
     * Screen template changes are most likely to inject additional hotspots that we will need to resolve and anticipate to be the trickiest to implement  

**Decision for Option 5** - Due to increased complexity of trying to separate IA changes from screen template changes, we will be releasing them both together.  .


<table>
  <tr>
   <td>
   </td>
   <td><strong>Release 1</strong>
   </td>
   <td><strong>Release 2</strong>
   </td>
   <td><strong>Release 3</strong>
   </td>
   <td><strong>Release 4</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Option 1</strong>
   </td>
   <td>Everything Everywhere All at Once
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Option 2</strong>
   </td>
   <td>IA changes
   </td>
   <td>Screen templates + Screen transitions
   </td>
   <td>UI Changes + Content Updates
   </td>
   <td>Hotspots, one by one
   </td>
  </tr>
  <tr>
   <td><strong>Option 3</strong>
   </td>
   <td>IA changes + Screen templates + Screen transitions 
   </td>
   <td>UI Changes + Content Updates
   </td>
   <td>Hotspots, one by one
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>Option 4</strong>
   </td>
   <td>Screen templates + Screen transitions 
   </td>
   <td>IA changes
   </td>
   <td>UI Changes + Content Updates
   </td>
   <td>Hotspots, one by one
   </td>
  </tr>
  <tr>
   <td><strong>Option 5</strong>
   </td>
   <td>IA changes + Screen templates + Screen transitions + high-priority Hot Spots
   </td>
   <td>UI Changes + Content Updates as needed
   </td>
   <td>Holistic updates to areas of the app that need further attention
   </td>
   <td>
   </td>
  </tr>
</table>


**Questions**



* Can we roll this out to a smaller group of users first?
    * Tbd 
    * We could possibly do open betas 
    * Remote configuration isn’t a good fit for global changes 
* What’s the impact on previous versions of the app once the new nav is released? Should we institute a forced update? 
    * No forced update needed from a technical perspective 
        * Not changing endpoints, shape of the data
    * From a product standpoint, if we ever did force an update, this would be a good opportunity to get everyone using the app 2.0 
