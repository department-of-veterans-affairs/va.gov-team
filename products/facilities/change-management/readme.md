# CHANGE MANAGEMENT DOCUMENTATION IS SOMEWHAT LEGACY INFO

Change management documentation in this area was created in 2022, when the Facilities contract included dedicated change management personnel.

Facilities products represent the bulk of the Editor base in the Drupal CMS. 
Any changes to Facilities products in Drupal DO REQUIRE change management activity. 

## Editor base
Drupal editors fall into several categories: 
* VHA (Veterans Healthcare Administration): 
    * VHA DM leadership / National VAMC leadership - own VAMC centralized content, but do not manage it in Drupal. Content is managed through the contract team for Facilities.
    * VAMC Facility editors - Manage local VAMC system and facility level content
* RCS (Rehabilitation Counseling Services): a sub-divison of VHA that manages Vet Centers
    * RCS leadership - do not participate directly in Drupal very often, but govern national content.
    * Vet Center editors - Manage local Vet Center content, including Mobile vet centers, outstations, and satellite locations
* VBA (Veterans Benefit Administration): 
    * National leadership - Have responsibilities for approving edited local content
    * VBA Facility editors - Manage local Regional office content, and will help with other facility types when they are modernized.
* NCA (National Cemetery Association): 
    * Digital owners - primarily manage NCA's TeamSite, but do make edits in Drupal when Operating Statuses for Cemeteries need to be updated for presentation in the Facility Locator


## Abbreviated modern process
1. Assess the scope of the change you are making, whether new feature launch or existing feature modification.
2. Confer with Sitewide PO to create a change management scope. This could include: 
    * Drupal Knowledge Base article creation or edits
    * Editor office hours presentation
    * Requesting a task order from administration leadership to enable Editors to perform specific work.
    * Release notes on the [CMS Announcements page](https://prod.cms.va.gov/help/cms-announcements)
    * CMS Helpdesk engagement to open outreach JIRA tickets with specific Editors
3. According to your scope / plan: engage with administration leadership as appropriate to forewarn the change and timing, gain any necessary approvals, and plan communication with editors / expected turnaround time. 
4. Track communications and ensure Helpdesk is aware of launch timing and any Editor-facing communications being sent.
5. Execute the comms plan after launch.


## Legacy process


**All Change Management Runbook Issue Templates:** 
- [Runbook - Change Management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/change-management/readme.md) <- You are here
- [Change Management Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/change-management/change-management-research.md)
- [Change Impact Assessment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/change-management/change-impact-assessment.md)
- [Change Management Journey Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/change-management/change-management-journey-map.md)
- [Communications Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/change-management/communications-plan.md)
- [Knowledge Base](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/.github/ISSUE_TEMPLATE/knowledge-base-article.md)
- [Post-Launch Assessment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/change-management/post-launch-assessment.md)

# NOTE
This template will be the last one to complete because it should link to the "create a new issue" links for all the other templates

# Template name: Runbook - Change Management
- **About:** Use this template when starting a new change management process. This will create a high-level checklist to guide you through building tickets for upcoming sprints.  
- **Issue default title:** [PRODUCT/INITIATIVE] Change Management Runbook
- **Assignees**: n/a
- **Labels:** Change management
- **Template content:** 

## Description

Here are the steps to follow when setting up a new change management process:
- [ ] Pre-work: Validate that the change in question meets the [triage criteria for applying a change management approach](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?assignees=&labels=Epic%2C+Needs+refining&template=cms-epic.md&title=%3CInsert+summary+of+epic%3E)
- [ ] Pre-work: Make sure you and your Product Owner are aligned on the [roles and responsibilities for change management](https://docs.google.com/spreadsheets/d/1BDmdiQcjKAijBGRrq0HsfRZP_bqDm1Ul/edit#gid=1182457863)
- [ ] Pre-work: Size the change (M, L, XL) based on the degree and complexity of the change<br>
See previous change management tickets for examples.
- [ ] Create a Change Management [Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/.github/ISSUE_TEMPLATE/change-management-epic.md) for your product/initiative and link to initiatives's super epic
- [ ] Add the issue to the [VA.gov CMS Change Management Airtable](https://airtable.com/appJCOGGJRTAwcH2v/tblPHoElsBWwr83Z0/viwSfROR69D6seBkB?blocks=hide) for quarterly tracking and reporting 
- [ ] Create Change Management Runbook ticket<br>
  Description
  
  As a team, we need to understand the impacts of this change on the people using the CMS so we can design the appropriate communications and training approach.

  Acceptance Criteria
  
  - Github issue templates created covering each step of the change management process
  - Requires Product Owner review
 
- [ ] Create a _Change Management Research_ issue
    - [ ] Add research questions to UX Research Plan and Conversation Guide

- [ ] For Large/XL complex changes involving beta testing and client stakeholders:
    - [ ] Create a _Change Impact Assessment_ issue
    - [ ] Create a _Change Management Journey Map_ issue

- [ ] Create a _Communications Plan_ issue
- [ ] Create a _Knowledge Base_ issue (if applicable; includes video if required)
- [ ] Create a _Post-Launch Assessment_ issue

## Acceptance Criteria
- [ ] All tickets have been created and assigned

### Team
Please check the team(s) that will do this work.

- [ ] `CMS Team`
- [ ] `Public Websites`
- [ ] `Facilities`
- [ ] `User support`
