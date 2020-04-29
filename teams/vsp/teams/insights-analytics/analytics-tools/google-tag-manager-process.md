# Google Tag Manager and Google Analytics Internal Processes for VFS Implementations

**Documentation Audience**: VSP Analytics & Insights

**Overview**: This resource outlines suggested processes for the VSP Analytics & Insights team to guide and implement common VFS requests for Modernized products. Implementation requests for MyHealtheVet, eBenefits, and legacy content are noted as well.

## What GTM Is NOT Needed For Tracking
- Tracking static page links that lead to one location 
  - _These types of requests should be pushed back on in lieu of utilizing Navigation Summary and/or Previous Page Reports_
- Direct conversion / funnel / abandon tracking
  - _These types of requests can be fulfilled with goal or custom funneling within Google Analytics_
- Search terms (maybe) 
  - _This is more commonly done at the view level within Google Analytics instead of GTM_
  - _That said, there may be cases in the future where we need to do search through GTM_
  
## TLDR - General Acceptance Criteria for VFS Implementation
- Meet with VFS team to scope dataLayer requirements
- Develop requirements and send to FE team
- In parallel, configure Google Tag Manager in new workspace and include issue number(s) in workspace title; add new custom dimension(s) where necessary in non-Production and Production Google Analytics properties
- Validate once it is ready on staging 
- Add new Google Analytics goal on non-Production and Production Google Analytics properties and validate
- Annotate in Google Analytics

## Helpful Artifacts in Planning Google Tag Manager Implementation:
- Review the the VFS team's KPI Pre-Workshop Planning and KPI Workshop readouts
- Read through the user story and acceptance criteria within the _Analytics Implementation and QA_ request issue
- Review wireframe, product outline, and/or dev or staging link that are included in issue; if not referenced, it is strongly encouraged to request it prior to the discovery meeting

## Planning dataLayer Requirements and Google Tag Manager Configuration for VFS Forms and Global Navigation Elements
After completing the discovery call and completing adjustments to acceptance criteria, the Analytics-Insights team should begin crafting dataLayer requirements for the FE team.

### dataLayer Requirements
After consulting with the VFS Product Manager and FE team members, the Analytics-Insights team member should begin drafting dataLayer events and, where applicable, dataLayer variables. These requirements should be provided to the VFS team in the _Analytics Implementation & QA_ issue. 

##### Example DL Reuirements Template
- In addition to this template, it's often a good idea to have a "Developer Notes" section of important things to the FE to know / keep in mind when implementing
- Each event / interaction should have it's own row clearly identifying the business use case and the event / variables that correspond
- Screenshots should be used where needed to give further context

Description of Interaction | dataLayer Example
------------ | ------------- 
_i.e Clicked primary CTA button on X page_ | `dataLayer.push({`<br>`'event': 'event-name-here-click'`<br>`});`
_i.e Clicked primary CTA button on X page_ | `dataLayer.push({`<br>`'event': 'event-name-here-click',`<br>`'other-variable': 'that-we-want-to-track'`<br>`});`

### Google Tag Manager Configuration 
As the VFS team is implementing the requirements, the VSP Analytics & Insights team should begin configuration of the new or revised Google Tag Manager tag(s), trigger(s), and/or variable(s). There are several shared configurations that can be leveraged across VFS forms products or global navigation elements. These are outlined below. Implementation for other use cases will be noted. 

#### Forms Tag
The Forms Tag applies to veteran-facing forms with multiple steps. The form tag is configured using `Form - Category` and `Form - Action` variables, which rely on RegEx patterns. These patterns look for event suffixes and prefixes to correctly categorize them into the right Event Category and Event Action. 

*To-do's for Analytics-Insights Team:*
1. The variables listed below should be updated to reflect new product suffixes or prefixes.
2. If a new user, session, or hit scoped trait is applicable to the form, the new custom dimension(s) should be created in Google Analytics Staging and Production properties, then added to the Forms tag. 

*Event Category uses the variable `Form - Category`*

| Event Suffix | Event Category (output)|
|--|--|
| .*submission-successful$ | Transactions |
| .*response-missing$ | Interactions |
| .*continue-application$ | Interactions |
| .*form-reapply$ | Interactions |
| .*file-uploaded | Interactions |
| vaos-(schedule-appointment-button-clicked\|schedule-another-appointment-button-clicked\|schedule-new-appointment-started\|past-appointments-legacy-link-clicked) | Interactions |
| .*howToApply-applyNow$ | Transactions | 

Other events that do not fall into these buckets are then placed into a default Event Category for "API Calls". 

*Event Action uses the variable `Form - Action`*

| Event Prefix | Event Action (output)|
|--|--|
| edu.* | Forms - Education |
| burials.* | Forms - Burials | 
| preneed.* | Forms - Burials | 
| (hca\|vaos).* | Forms - Health Care |
| pensions.* | Forms - Pensions | 
| disability.* | Forms - Disability |

Other events that do not fall into these buckets are given a default Event Action of "Forms".

*Event Label uses the `event` that triggered the tag*. This is helpful for debugging and for reporting in the Behavior>Top Events report in Google Analytics.

#### Navigation Click 
The Navigation Click tag tracks common design library elements used across VA.gov. These elements are utilized most frequently to track interactions across Modernized headers, menus, and other public website content like accordions and banners. Navigation elements for VFS forms may be housed within the Forms Tag as noted above. Please reference the "Navigation Lookup Table" variable in GTM for the complete list of all events and corresponding Event Actions. 

*To-do's for Analytics-Insights Team:*
1. Design library elements that have not been captured in this list should be added to the Google Tag Manager variable "Navigation Action Lookup". 
2. Ensure dataLayer requirements use the `nav-` prefix

The Navigation Click tag is a [non-interaction event](https://support.google.com/analytics/answer/1033068?hl=en#NonInteractionEvents), so they will not be factored in to bounce rate calculations.

#### Non-Form Products
Configuration for non-form products includes implementation for the Facility Locator, GI Bill Comparison Tool, Authenticated Experience products, and the login process. These products are typically configured as distinct tags, triggers, and variables. Where applicable, custom dimensions can also be added to these tags to track hit, session, or user-scoped traits. 

*To-do's for Analytics-Insights Team:*
1. Provide dataLayer requirements to VFS teams that follow the `product prefix-interaction suffix`. For example, the event for MyHealtheVet logins is `login-attempted-mhv`.  
2. Add conditions to triggers, like page paths where the trigger should fire, if applicable.
3. Apply custom dimensions if necessary

### QA Testing
As part of story validation, the Analytics & Insights team performs thorough QA of both the dataLayer and GTM workspace. This testing should be done within the staging environment and reflect as close to the final functionality as possible. The QA process can be deemed "done" when the following are done: 
1. The dataLayer events and variables have been validated according to relevant test scenarios.
2. The GTM configuration, by a different team member than the one who configured the workspace, has been validated according to the same relevant test scenarios. 
3. All test scenarios have been documented within the GitHub issue. Please see below for template. 

##### Edge Cases to Test / Ask yourself
1. **DL Bleed-over**: If multiple events fire on a page and are used within the same tagging, ensure DL variables DO NOT bleed-over into other irrelevant events. This can be solved by asking the developer to pass in `undefined` for events where the variable is not used
2. **Refresh**: Would a refresh negatively impact this data? Is it a risk we need to account for? 
3. **Funneling**: Would a user moving forward and backward within the form cause issues? 
4. **Authentication**: Does authentication impact this tracking?  

##### Example QA Template
- The folowing template can be used for both QAing the DL as well as GTM tagging
- Screenshots should clearly and concretely reflect the test case, which relevant pointers, arrows, boxes emphasizing these scenarios

Description of Interaction | Screenshot | Test Status
------------ | ------------- | -------------
_i.e Clicked primary CTA button on X page_ | Screenshot 1 here | ✔️ **PASS**
_i.e Scrolled down X page_ | Screenshot 2 here | ❌ **DID NOT PASS**

#### Implementation on MyHealthEVet, eBenefits, and other Legacy Content
VSP Analytics & Insights also receives infrequent requests to implement new tracking on MHV, eBenefits, and other legacy content. This activity should be configured within the "Brand Consolidation Legacy" (GTM-WZ6MXMD) container. Because the legacy content is not typically supported by VFS teams and does not have a structured dataLayer event configuration in place, VSP Analytics & Insights has usually relied on DOM scraping. If more complex implementation is required, additional discovery is required to connect with developers on those teams. 

## Publishing Workspace
Google Tag Manager environments were established so that VSP Analytics & Insights can publish their active workspace to Dev and Staging, in lieu of relying on the Preview link to complete validation. These changes should then be published to Production by a different team member than the one who configured the workspace if no further changes are made.
