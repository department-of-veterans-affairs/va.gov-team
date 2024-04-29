# Project outline: Save in Progress (SiP) Configuration Enhancement (WIP)

**Last updated: April 25, 2024 - first published**

### Communications

- **GitHub Label**: authenticated-exp; my-va-dashboard
- **Slack channel**: accountexp-authexp
- **Development Epic**: [#60509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60509)
- **Collab Cycle Epic**: [#81670](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81670)

### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Problem](#problem)
- [Solution approach](#solution-approach)
- [User Outcomes](#user-outcomes)
- [Impact](#impact)
- [Security](#security)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

Following up from Angela's work on the benefit application drafts section documentation ([60510](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60510)), it was determined that the current process to configure a form as "save in progress" (SiP) is not as streamlined as it could be. The team performed [technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/sip_process_improvements.md) to determine the best way to improve the process for ourselves and other teams who want their digitial forms to be able to show up as "drafts" when "saved in progress" on My VA. This has become a problem over time as teams often don't know their forms are not appearing as they should when saved in draft state and often come to us one-off to triage why the forms isn't appearing.

## Problem
Veterans have the ability to start a digital form (or application), save it and come back to it at a later time to complete. When a digital form is saved as a draft it should appear in the "Benefit Application Drafts" section on My VA. However, we learned in recent months that the process for a form to be configured properly to appear on My VA is not as straight-forward as it can or should be. 

Currently, the SiP configuration works as follows:

**From the My VA side:**

In order to render the [ApplicationsInProgress](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx) component:
1. The logged in user's saved forms are retreived from the Redux store.
2. We iterate over these saved forms and use the metadata defined in the [My VA helpers file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/helpers.jsx) to render the data for that form in the UI.

**From the respective forms team side:**

When a developer creates a new SiP form, they have to follow the procedure outlined [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) in order to get that form to show up in My VA. The current process for that engineer is very tedious - requiring them to scroll a lot within the `platform/forms/constants.js` file to hunt down specific info about the form (e.g. if it's SiP enabled, what the common name is, where it should link to).

## Solution approach
We came up with three options and settles on the most simple solution to improve this process for all teams.

A relatively simple solution would be to create a separate object in the [platform constants](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/constants.js) that lists all of the SiP forms along with their metadata. Instead of simply mapping a form name to a string, we could map a form name to an object that contains all of the information that we need on My VA. In other words, the solution is to consolidate all of that information (e.g. if the form is SiP enabled, what the common name is, where it should link to) into one place (i.e. a new object) instead of having the info across multiple objects.

Pro: A developer would only need to add to this constant file and have no need to update My VA code.
Con: Not too different from how we do things now, you're just updating a different file, but at least it's all in one place.

## User Outcomes

### Desired User Outcomes
The process to have digital forms configured properly to be able to appear as drafts on My VA is more streamlined and as automatic as possible.

### Undesired User Outcomes
We break the configuration process.

## Impact
The SiP configuration is critical for any team managing digital forms. We will need to communicate this configuration change widely so that teams will understand the impact.

1. For digital forms that are already configured properly and are appearing as intended as drafts on My VA in the Benefit Application Drafts section, the teams that own/manage those forms do not need to do anything once we implement this enhancement. In other words there is no impact to existing properly configured forms.
2. For newly digitized forms or forms that are not displaying as intended (as drafts on My VA in the Benefit Application Drafts section), these teams need to be made aware that a change to the configuration process occurred. The [platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) on this config will be updated once implemented, announced in Team of Teams and on Slack.

_More scenarios to come pending further technical discussion._


## Security
[Security Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/claim-status-lighthouse-migration/launch-materials/claim-status-lighthouse-migration-security-playbook.md)

## Measuring Success

TK

## Key deliverables

- [Technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/sip_process_improvements.md) 
  

### Key Dates

- Technical Discovery: October 2023
- Formal kick-off: April 2024
- ..
   
## Screenshots
Not applicable: There will not be any visual changes to My VA when this work is complete.

### Before
Not applicable

### After
Not applicable
