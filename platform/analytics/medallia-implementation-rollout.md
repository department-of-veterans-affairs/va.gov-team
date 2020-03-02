# Medallia Implementation Rollout for Platform

## Background
VSP Analytics & Insights uses the survey tool, ForeSee to track user satisfaction and sentiment on VA.gov. Currently, surveys and resulting satisfaction data is limited to VA.gov generally, and only a pilot 5 star comment card is in place to track a few product homepages.

The Veteran Experience Office (VEO) is looking to the Digital Service to expand measurement of VA's digital touchpoints through Medallia, their digital CX tool. VSP will work with Medallia representatives and the VBA office to stand up Medallia and then implement Medallia-run surveys on VA.gov alongside VSA strategy. VSP will eventually sunset ForeSee usage and by replaced by Medallia as the main survey tool.

## Goal
Medallia can be used as the VA's main survey tool for VA.gov's survey. VSP Analytics & Insights can implement surveys on VA.gov that capture both VA.gov sentiment as a whole and specific VA.gov application sentiment to provide form or page specific feedback so that Veteran-facing Services teams can improve their digital tools using veteran-provided feedback. For this to occur, VSP Analytics & Insights should be able to export data and run reports from the survey results.

## Phases Summary
**Phase 1** - Stand up Medallia digital instance
- Implement Medallia instance to allow VSP to create surveys without Front End engineering dependencies
- Test with a new VSA designed survey (1 VSA product)
- Dependency on VSP Front End Tools Team

**Phase 2** - Integrate Medallia Experience Cloud
- Integrate the experience cloud instance to be able to understand user reporting
- Test survey implementation with corresponding analysis feedback with 2-4 VSA products
- Begin full collaboration with VSA

**Phase 3** - Test new surveys
- Implement new VSA designed surveys
- Go/No Go for Phase 4:
    - [ ] VSP can use Medallia to create surveys on VA.gov that match ForeSee capabilities and meet the acceptance criteria listed below
    - [ ] VSP can run reports on CX data captured by Medallia surveys

**Phase 4** - Sunset ForeSee and Medallia Maintenance
- VSP implements new surveys and maintains VSA created survey strategy
- Medallia implementation to be added to VSP collaboration cycle
- ForeSee surveys on VA.gov will be sunsetted and historical data will be extracted

## Phase 1 Acceptance Criteria
- [ ] Role access (maintenance, view-only, etc.) can be assigned
- [ ] Users can create surveys (with unique survey questions) on Medallia
- [ ] Users can assign surveys to different URLs and can trigger surveys based on VA.gov user behavior
- [ ] Users can display surveys on VFS team applications - users can embed, add surveys as additional layers, or add survey buttons on a VA.gov URL.

## Phase 2 Acceptance Criteria
- [ ] Users can export export CSVs with raw data
- [ ] Users can create customized reporting on Medallia
- [ ] Medallia is integrated with Google Analytics (and BigQuery or Domo)

## Phase 3 Acceptance Criteria
- [ ] Onboarded VFS teams have at least 1 live VA.gov survey where they can pull product specific user data

Data should include:
- [ ] Date & time
- [ ] URLs (or products/forms; specific to surveys)
- [ ] VA.gov unique user feedback (no PII)
- [ ] Authenticated vs. Unauthenticated
- [ ] Device Used
- [ ] Survey Questions & Corresponding Answers

---

### Links
- [VSignals Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/analytics-tools/vsignals.md)
- [Medallia Kickoff with VBA Notes](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4649#issuecomment-576377268)
- [Shared Phase 1 Implementation Issue with Front End](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/analytics-tools/vsignals.md)

### Notes:
- Survey strategy is under VSA [here](https://docs.google.com/document/d/1KCvHwlIaoEzpg9xjUsGu1raEORXh1jJKyWULi7jZMUw/edit)
