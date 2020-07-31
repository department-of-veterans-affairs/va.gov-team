# Medallia Implementation Rollout for Platform

## Background
VSP Analytics & Insights uses the survey tool, ForeSee to track user satisfaction and sentiment on VA.gov. Currently, surveys and resulting satisfaction data is limited to VA.gov generally, and only a pilot 5 star comment card is in place to track a few product homepages.

The Veteran Experience Office (VEO) is looking to the Digital Service to expand measurement of VA's digital touchpoints through Medallia, their digital CX tool. VSP will work with Medallia representatives and the VBA office to stand up Medallia and then implement Medallia-run surveys on VA.gov alongside VSA strategy. VSP will eventually sunset ForeSee usage and will replace the tool by Medallia as the main survey tool.

## Goal
Medallia can be used as the VA's main survey tool for VA.gov's survey. VSP Analytics & Insights can implement surveys on VA.gov that capture both VA.gov sentiment as a whole and specific VA.gov application sentiment to provide form or page specific feedback so that Veteran-facing Services teams can improve their digital tools using veteran-provided feedback. For this to occur, VSP Analytics & Insights should be able to export data and run reports from the survey results.

## Phases Summary

1. [Phase 1 - Stand Up the Digital Instance](#phase-1---stand-up-the-digital-instance)
2. [Phase 2 - Test New Surveys](#phase-2---test-new-surveys)
3. [Phase 3 - Expand Surveys](#phase-3---expand-surveys)
4. [Phase 4 - Maintain Medallia & Sunset ForeSee](#phase-4---maintain-medallia-and-sunset-foresee)

### Phase 1 - Stand Up the Digital Instance
- Receive access for VSA, VSP, DEPO
- Create draft of questions & align between VSA & VSP
    - Align with OMB/VEO requirements
		- Henna & Halfaker
    - Align with OPIA requirements
		- Josh Tuscher & Gary Hicks
    - Draft for Product Specific questions
		- Forms
		- Content
- Explore survey trigger options
- Integrate Medallia instance to allow VSP to create surveys without Front End engineering dependencies
- Integrate the experience cloud instance to be able to understand user reporting
- Test OPIA & VEO survey

#### Acceptance Criteria
- [ ] Role access can be assigned
- [ ] VFS can create surveys on Medallia
- [ ] VFS can view CX data
- [ ] VFS can access survey results
#### Go/No Go
- [ ] Is monitoring and alerting configured and working as expected?
- [ ] Are you ready to monitor analytics data for trends and problems?
- [ ] Are you confident it can handle the traffic?
- [ ] Is the release plan complete and ready to execute against?
- [ ] Did you see the KPI metrics populating?
- [ ] Are there any Sev1 bugs or accessibility issues outstanding?
#### Rollout KPIs
ForeSee's intercept survey receives ~60-80 responses per day
- OPIA survey hits .5 or 1% of VA.gov users after 3 days, receiving responses from ~100 users
- VEO survey hits .5 or 1% of VA.gov users after 3 days, receiving responses from ~100 users

### Phase 2 - Test New Surveys
- Test survey implementation with corresponding analysis feedback with 2-4 VSA products, both forms and content
- Explore options for receiving benefit-hub satisfaction data

#### Acceptance Criteria
- [ ] VSP can implement multiple types of product specific surveys
- [ ] VSP can view product specific CX data
- [ ] A path forward for collecting benefit-hub satisfaction data
#### Go/No Go
- [ ] Is monitoring and alerting configured and working as expected?
- [ ] Are you ready to monitor analytics data for trends and problems?
- [ ] Are you confident it can handle the traffic?
- [ ] Is the release plan complete and ready to execute against?
- [ ] Did you see the KPI metrics populating?
- [ ] Are there any Sev1 bugs or accessibility issues outstanding?
#### Rollout KPIs
ForeSee's Comment Card survey receives ~30 responses for every 3 day increment. This is for 35 different URLs.
- Forms survey receives ~10 responses after 3 days
- Content survey receives ~10 responses after 3 days

### Phase 3 - Expand Surveys
- Implement surveys for all individual products that are currently receiving ForeSee Comment Card feedback so that VFSs don't lose data when ForeSee is sunsetted
- Hubs/Products Currently receiving Comment Card Feedback (as of 6/18/20):
    - Decision Reviews
    - Disability
       - Appeals
    -  Health Care
       - VAOS
    -  Facility Locator
    -  Education
       -  GI Bill Comparison Tool

#### Acceptance Criteria
- [ ] VSP can implement multiple types of product specific surveys
- [ ] VSP can view product specific CX data
- [ ] The path forward for collecting benefit-hub satisfaction data is implemented
#### Go/No Go
- [ ] Is monitoring and alerting configured and working as expected?
- [ ] Are you ready to monitor analytics data for trends and problems?
- [ ] Are you confident it can handle the traffic?
- [ ] Is the release plan complete and ready to execute against?
- [ ] Did you see the KPI metrics populating?
- [ ] Are there any Sev1 bugs or accessibility issues outstanding?
#### Rollout KPIs
ForeSee's Comment Card survey receives ~30 responses for every 3 day increment. This is for 35 different URLs.
- All product specific surveys together receive ~30 responses after 3 days

### Phase 4 - Maintain Medallia and Sunset ForeSee
- VSP implements new surveys and maintains VSA survey strategy
- Medallia implementation fully replaces ForeSee implementation in the Collaboration Cycle
- ForeSee surveys on VA.gov will be sunsetted and historical data will be extracted into BigQuery

## Acceptance Criteria - Initiative Complete:
- [ ] Medallia strategy is a norm on the Collaboration Cycle (or embedded in rollouts)
- [ ] ForeSee data is extracted for historical information
---

### Links
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/medallia-product-outline.md)
- [VSignals Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/analytics-tools/vsignals.md)
- [Medallia Kickoff with VBA Notes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4649#issuecomment-576377268)
- [Shared Phase 1 Implementation Issue with Front End](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/analytics-tools/vsignals.md)

### Notes:
- Survey strategy is under VSA [here](https://docs.google.com/document/d/1KCvHwlIaoEzpg9xjUsGu1raEORXh1jJKyWULi7jZMUw/edit)
