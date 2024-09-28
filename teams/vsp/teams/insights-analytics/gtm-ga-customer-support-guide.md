# Google Analytics & Tag Manager Customer Support Guide

## Table of Contents
### 1. [Initial Ticket Review, Cleanup, and Triage](#1-initial-ticket-review-cleanup-and-triage)
### 2. [Data Layer Specification / Design](#2-data-layer-specification--design)
### 3. [Google Tag Manager and GA Configuration](#3-google-tag-manager-and-ga-configuration)
### 4. [QA Testing and Publishing](#4-qa-testing-and-publishing)
-----------------------------
<br>

## 1. Initial Ticket Review, Cleanup, and Triage
#### 🔴 _BEFORE you start any hands-on work on a GH ticket, be sure the following have been executed..._

- [ ] Start Toggl time entry for ticket number using our convention
- [ ] Modify (and save) the GH ticket title and/or description if not enough context is provided as to the product/app/tool needing analytics service
- [ ] Ensure the correct GH ticket template was used for the request:
   - [ ] _If the correct request was not used, either ask team to resubmit using the correct ticket or adjust markdown to reflect correct ticket_
- [ ] Ensure any ticket...whether it be for GTM implementation, GA/DOMO access, offboarding, and/or reporting and dashboarding has the correct **`analytics-insights`** label to represent our team's queue
- [ ] Add an additional label to convey further context into the scope of the ticket, from one of the following:
   - [ ] **`collaboration cycle`**: _For any new product/app/tool on VA.gov that is launching -- as all products are expected to go through the [collaboration cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle)_
   - [ ] **`collab cycle review`**: _For any new product/app/tool on VA.gov that is launching -- as most product will ultimately conduct a collab cycle review before launch_
   - [ ] **`analytics request`**: _For requests of our team of ANY service from VFS team_
   - [ ] **`gtm`**: _For requests of our team of updating and/or validating gtm tracking_
   - [ ] **`access request`**: _For requests of our team to supply and/or remove Google Analytics and/or DOMO access_
   - [ ] **`kpi-dashboard`**: _For requests of our team to develop/update/iterate on a KPI dashboard_
   - [ ] **`needs grooming`**: _For any request that requires further grooming / clarification of scope before beginning work, call out this ticket during planning & grooming sessions and remove remove this label once fully understood_
   - [ ] **`design system`**: _For any request that is going to involve design system updates in correlation with analytics or direct vsp design system team involved_
   - [ ] **`bug`**: _For any request that is a FIX (tracking was previously working as expected and/or an implementation request has already created and closed and something needs to be revisited_
   - [ ] **`blocked`**: _For any request that becomes BLOCKED for any reason: technical, non-technical
       - _Also shift to **BLOCKED** column on board and leave a comment for WHY the ticket is blocked, CC relevant team members in tag_
   - [ ] **`bigquery`**: _For any request that will involve BigQuery work_
   - [ ] **`documentation`**: _For any request that is PRIMARILY documentation involved
   - [ ] **`needs-data-layer-spec`**: _For any request that is awaiting delivery of a data layer specification and/or requires custom data layer design/delivery to VFS devs
- [ ] Ensure the ticket has been applied to one of three of our relevant project boards: [Tracking & Access Board](https://github.com/department-of-veterans-affairs/va.gov-team/projects/20), [Dashboarding and Reporting](https://github.com/department-of-veterans-affairs/va.gov-team/projects/32), [Initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/projects/31)
- [ ] If you have capacity, assign the ticket to yourself or assign the relevant person, OR call out during next grooming / planning session for assignment discussion
   - [ ] _At this time it's also a good idea to comment @ the stakeholder letting them know you will review this during next planning / grooming_
- [ ] Add sprint label if applicable
- [ ] Review and identify Key Performance Indicators (KPIs) from product documentation and/or wireframes
    -  _Verify you have a clear and precise understanding of their KPIs/success metrics and subsequently recognize the products/apps/tools/components that need tracking in order to fulfill their KPI in order to create better efficiency for
      delivering a KPI dashboard in the future_
    - _If needed, setup a meeting to walkthrough the product/app/tool and answer any questions and/or document questions in GH ticket and tag @ relevant personnel to confirm any clarifying questions_
    - _If no product documentation is provided and a meeting is not possible, ensure at the very least items/components/areas of the application that need tracking have been identified within the ticket_

 ---------------------------------------------------

## 2. Data Layer Specification / Design
#### 🔴 _AFTER above step 1 (review, cleanup, triage) steps have been executed..._

### General
- Almost every ticket will more than likely need _some_ data layer specification provided, that said now with our [design system standardization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/ga-events-data-dictionaries.md#design-system-component-tracking), some will require much less custom `recordEvent` pushes than others based on the amount of customization requested
- Nonethless, when a data layer specification is supplied, a comment should be left clearly calling out the specification for VFS developers to implement with a tag to the appropriate developer (reference [the VFS team list](https://www.va.gov/atlas/product_directory/team_members)
- One of the first things that is good to identify is whether the page is a static page or not AND if it's available within staging currently -- this will help identify how much of the app will automatically be tracked, see sections below for each scenario
- The following table should serve as a reference for documenting the data layer:

| Description & Screenshot of Interaction | Data Layer Event | Dev Notes
| -- | -- | -- |
_Click on X_ | `'event': 'event-goes-here'` | _Any notes the developer should be aware of or specific instructions go here_
_Specific interaction goes here_ | `'event': 'event-name-goes-here',`<br>`'data-layer-variable-here': 'value here'` | _Specify an example value or description of how to dynamically populate if not obvious_
_Loading indicator displayed_ | `'event': 'loading-indicator-displayed'` | **AUTOMATICALLY TRACKED WITH DESIGN SYSTEM -- set `disableAnayltics` to false to enable analytics

#### 🔴 If the product/app/tool IS NOT yet available within staging...

##### Forms
- If the product is a **new forms library form**: indicate to VFS dev via a GH comment the [standardized forms system / forms library events](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/tracking-form-events.md) should be utilized and supply a relevant product prefix
    - _Reference existing product prefixes within our event dictionary and concatenate the new form name as part of the prefix, i.e `disability-21-686c-`_
    - _Be sure to use suggest the more product prefixes where capable or introduce a new one if not, these can be found within GTM within the `Form Event Occurred` trigger_
    - _Teams can certainly use their own product prefixes if they wish, but if there is opportunity to further consolidate to avoid GTM changes, please suggest them do so_
- If the team is requesting additional customization, allocate a data layer variable to collect the relevant data
    - _Determine if there is first an already existing generic data layer variable that can be resused_

##### API Calls
- If the team is looking to track API calls, we should aim to leverage our event `EV - Product-Based API Calls` event as much as possible
    - _Reference existing product prefix documentation as well_
- Propose an event structure that is the minimal amount of hits while still fulfilling their KPIs
    - _As an example, teams such as Authenticated Experience have used API call events both at the start and successful call...this is more than likely not necessary_
    - _More than likely, a successful and failed API call event will do the trick_
    - _If teams are looking to capture **product API errors**, instruct them to use a secondary `error-key` data layer variable to give context to what error occured. The error key should follow a syntax of `<error_code>_DESCRIPTION_OF_ERROR`, i.e `403_FORBIDDEN`...the codes and description will vary based on error codes returned for the product and a re flexible_

##### How To Wizards
- How to wizards will start to roll out with mostly all new forms moving forward, reference our [How to Wizard events](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/tracking-how-to-wizards.md) and instruct devs to implement
     - 💡 _At some point we should look to bake these in similarly to our forms library tracking_

##### Search
- Our search tracking should be standardized across VA.gov, when a new search product is introduced supply our [search data layer specification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/ga-events-data-dictionaries.md#search-events)

##### Drupal Content + Design System Components
-  If you **know the product will be leveraging design system components**, call out the item within the data layer specificaion but let the VFS developer analytics will already be tracked according to the design system
-  If you **know the product is going to be a Drupal page and will not be using design system components**, go ahead and document the data layer specification ahead of time per other guidelines and conventions

#### 🔴 If the product/app/tool IS already available within staging...
- If the page is a Drupal page, it could have some event listeners already deployed but more than likely not and proceed with documenting the data layer
- If the page is an app page, do a quick preview mode audit of the page to determine which components they're interested in are already tracked. Call these out as part of the data layer specification
    - If the components that need tracking are any of our "opt-in" components (i.e Form Controls, Progress Bar, and/or Loading Indicator), inform the developer within the developer notes this will just be a matter of setting the `disableAnalytics` flag to `false`
- Otherwise, reference specific application specifications where appropriate above

 ---------------------------------------------------

## 3. Google Tag Manager and GA Configuration
#### 🔴 _Can be executed after step 2 and data layer is being implemented_

##### Forms
- If a new form is introduced with no prior prefix, add new prefix to the `Form Event Occurred` trigger and `Form - Action` lookup table
   - _Form actions should be generic to reflect the product or benefit hub where appropriate_
   - _Be sure the exception within the trigger is updated if there is also a product API call event with a similar prefix added_
- Otherwise, no GTM changes should be necessary if the team is not implementing any further customization upon submission
- If the team is requesting additional customization upon submission, create a new data layer variable if needed and include in form tag


#### Where GTM Config Changes Should Not Be Necessary
- Unless the team is requesting additional customization outside of what is already collected as part of our design system standardization, there should not need to be any data layer changes for any design system components used and listed [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/ga-events-data-dictionaries.md#design-system-component-tracking)

### Where Additional GA configuration May Be Necessary

#### Forms
- When a new form is implemented, in order for the VFS team to be able to leverage the funnel visualization report within Google Analytics, a `Destination` goal must be implemented
   - The destination goal should be implemented within the proper proper Google Analytics view that most closely fits their product, for example, if a new health care form, the goal should be implemented within the Health Care Modernized View in **BOTH** Production and Non-Production views.
   - Ensure the goal is implemented using `RegEx` matching and does not restrict any query parameters that may be included within the URL, i.e `^/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346/introduction.*
   - Ensure the Goal ID and set ID are matched in both non-production and production
- If the team had additional customization implemented, ensure custom dimensions and the proper scope have been implemented in both non-production and production and have been made active according _(GTM should also reflect this)_


#### Misc
- If a new Information Architecture is implemented as part of a product roll-out it may be necessary to create a new Google Aanlytics view
   - _As of this writing (5/12/2021), Careers & Employment, Service Member Benefits & Family Member Benefits views should be implemented in an upcoming release_
   - _Ensure proper Google Analytics filters are applied to properly segment the traffic_
- If **a reporting request**, it may be necessary to setup a segment and/or sequence segment for folks to segment the user traffic as necessary
- If **a reporting request**, and there is an issue with high cardinality, consider creating an unsampled report
- If there are query parameters that would create very high cardinality AND/OR **risk PII INGESTION** they may need to be included in `Excluded URL query parameters`
   - If the data is necessary and not PII, consider repurposing to custom dimension or hashing if PII
   - Excluded Query parameters should be added to all of the following views in **BOTH** Non-Production and Production:
         - [ ] `WBC - VA.gov Modernized View`
         - [ ] Relevant product views
         - [ ] `va.gov - Test View`
         - [ ] `Exclude Internal Dept. of VA ISP - VA.gov Production`
         - [ ] `va.gov - Unfiltered view`
- If a `true` or `false` boolean value scenario, consider utilizing a custom metric with a value of 1 in lieu of a custom dimension
- If an expansion of cross-domain tracking, consider updating the `Referral Exclusion List`

-----------------------------
## 4. QA Testing and Publishing

### Process
- ❗ #1 CARDINAL RULE: **NO QA, NO CLOSURE**
   - _Not to be taken lightly...absolutely **NO** ticket should be closed without QA, it is our duty and responsibility to test both the data layer and GTM tagging with every request_
- Following your GTM implementation and implementation of the data layer, it is the original ticket owner's responsibility to:
   - [ ] _Shift the ticket to `VSP - Revew QA` column_
   - [ ] _Unassign themselves and assign the appropriate team member with capacity for QA_
   - [ ] _Document within a GH comment tagging the team member and calling out any adhoc complex testing that needs to take place / writing out the test cases clearly_
   - [ ] _It is alright if the original ticket owner **QA's the data layer**, but another team member should **ALWAYS** QA the GTM tagging before closing_
- At times the data layer QA and GTM QA may happen at very different times due to volume & capacity, but ideally both can be tackled at the same time for efficiency purposes
- Some resemeblance of the following QA test template should be utilized and documented within **EVERY** ticket:

| Description & Screenshot of Interaction | Data Layer Screenshot | GTM Tag Screenshot | DL Test Status | GTM TEST Status | Test Notes
| -- | -- | -- | -- | -- | -- |
_Click on X with test user Y_ | _Screenshot IMG_ | _Screenshot IMG_ | ✔️ **PASS** | ✔️ **PASS** | _i.e Custom Dimension value 123 has correct dynamical value_
_Specific interaction goes here_ | _Screenshot IMG_ | _Screenshot IMG_ | ⚠️ **DOES NOT PASS** | ✔️ **PASS** | _i.e Custom Dimension value 123 has correct dynamical value_
_Loading indicator displayed_ | _Screenshot IMG_ | _Screenshot IMG_ | ✔️ **PASS** | ✔️ **PASS** |


### 💡 💭 🤔 Testing To-Dos, Tips, & Considerations
- If a test case **DOES NOT PASS** next steps have clearly been identified and documented with the relevant team member and/or VFS developer to reach closusre
- Ensure testing that requires specific test users for [specific test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts.md) are leveraged
    - _Ensure the test users used are documented for reuse_
    - _Ensure you have a clear understanding of what attributes a test user has, and what functoinality should / should not occur as a result -- this is often documented along with the user account_
    - _Be sure to ask product owners if there is specific test users for a given application that represent Veterans with specific user attributes that need to be considered_
- 💡 Think about other areas of the application **BOTH local and site wide that may be affected from your testing** -- and call those out and/or document where appropriate
    - ⚠️ _REMEMBER: Just because you're testing 1 specific use case and that use case works as expected, that doesn't mean there aren't other areas of the site that are not affected and may not be working as expected_
- Ensure sure your test case descriptions clearly articulate the test case for both techical and non-technical readers to understand
- Ensure test cases are reflective of the full user journey / experience and KPIs the team is looking to capture
- Ensure screenshots clearly identify all testable components, using multiple within a single grid row if necessary
- Use boxes, arrows, and highlighters where necessary to showcase specific components that need attention
- Ensure any custom dimensions / metrics are tested and clearly documented

### ☑️ CHECKLIST BEFORE CLOSING ANY TICKET
- [ ] QA of both the data layer and tagging has been documented
- [ ] Content grouping has been updated & tested at both the benefit hub and product level
- [ ] Any **NEW** data layer specification that has been added has been reflected in our event data dictionary for future reuse
     - [ ] _Open a PR to our event labels documentation for review with the relevant changes_
- [ ] Custom dimensions have been made active and index numbers are accurate
- [ ] Google Analytics annotation has been written and applied to the appropriate GA views
- [ ] GTM workspace has the necessary GH ticket number and the description provides clear context as to what was implemented
- [ ] Publish has pushed to all environments from the "bottom up" -- first dev, staging, and -> then production
- [ ] If a design system component interaction, ensure the component library version and event source has been passed with the event
- [ ] If any additional communication with VFS stakeholders and/or downstream communication is necessary -- it's been documented before closing
