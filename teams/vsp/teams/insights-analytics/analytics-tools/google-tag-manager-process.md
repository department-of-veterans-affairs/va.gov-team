# Google Tag Manager and Google Analytics Internal Processes for VFS Implementations

*Overview*: This resource outlines suggested processes for the Analytics-Insights team to guide and implement common VFS requests.

## Helpful Artifacts in Planning Google Tag Manager Implementation:
- Review the the VFS team's KPI Pre-Workshop Planning and KPI Workshop readouts
- Read through the user story and acceptance criteria within the _Analytics Implementation and QA_ request issue
- Review wireframe, product outline, and/or dev or staging link that are included in issue; if not referenced, it is strongly encouraged to request it prior to the discovery meeting

## Planning dataLayer Requirements and Google Tag Manager Configuration for VFS Forms and Global Navigation Elements
After completing the discovery call and completing adjustments to acceptance criteria, the Analytics-Insights team should begin crafting dataLayer requirements for the FE team.

### dataLayer Requirements
After consulting with the VFS Product Manager and FE team members, the Analytics-Insights team member should begin drafting dataLayer events and, where applicable, dataLayer variables. These requirements should be provided to the VFS team in the _Analytics Implementation & QA_ issue. 

### Google Tag Manager Configuration 
As the VFS team is implementing the requirements, the Analytics-Insights team should begin configuration of the new or revised Google Tag Manager tag(s), trigger(s), and/or variable(s). There are several shared configurations that can be leveraged across VFS forms products or global navigation elements. These are outlined below. Implementation for other use cases will be noted. 

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
| .*schedule-new-appointment-started | Interactions |
| .*howToApply-applyNow$ | Transactions | 

Other events that do not fall into these buckets are then placed into a default Event Category for "API Calls". 

*Event Action uses the variable `Form - Action`*

| Event Prefix | Event Action (output)|
|--|--|
| edu.* | Forms - Education |
| burials.* | Forms - Burials | 
| preneed.* | Forms - Burials | 
| (hca|vaos).* | Forms - Health Care |
| pensions.* | Forms - Pensions | 
| disability.* | Forms - Disability |

*Event Label uses the `event` that triggered the tag*. This is helpful for debugging and for reporting in the Behavior>Top Events report in Google Analytics.

#### Navigation Click 
The Navigation Click tag tracks common design library elements used across VA.gov. These elements are utilized most frequently to track interactions across Modernized headers, menus, and other public website content like accordions and banners. Navigation elements for VFS forms may be housed within the Forms Tag as noted above. Please reference the "Navigation Lookup Table" variable in GTM for the complete list of all events and corresponding Event Actions. 

*To-do's for Analytics-Insights Team:*
1. Design library elements that have not been captured in this list should be added to the Google Tag Manager variable "Navigation Action Lookup". 
2. Ensure dataLayer requirements use the `nav-` prefix

#### Non-Form Products
Configuration for non-form products include implementation for the Facility Locator, GI Bill Comparison Tool, Authenticated Experience products, and the login process. These products are typically configured as distinct tags, triggers, and variables. Where applicable, custom dimensions can also be added to these tags to track hit, session, or user-scoped traits. 

*To-do's for Analytics-Insights Team:*
1. Provide dataLayer requirements to VFS teams that follow the `product prefix-interaction suffix`. For example, the event for MyHealtheVet logins is `login-attempted-mhv`.  
2. Add conditions to triggers, like page paths where the trigger should fire, if applicable.

## Publishing Workspace
Google Tag Manager environments were established, so that the Analytics-Insights team can publish their active workspace to Staging, in lieu of relying on the Preview link to complete validation. These changes should then be published to Production if no further changes are made.

