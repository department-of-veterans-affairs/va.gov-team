# Special Issue Discovery

This document is to consolidate information around the handling of "special issues", especially in relation to the 526 application. It is the output of discovery story [#77175](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/77175) which seeks to better understand how EVSS handles them, how LH plans to handle them, and what the 526 app sends.

## Questions

 1. Does EVSS set any flashes or special issues based on any logic, or do they just accept flashes & special issues from the submission system ([thread](https://dsva.slack.com/archives/C1VBAHWQL/p1709238467657079))?
- EVSS does not have any logic on flashes. EVSS does not automatically calculate any special issues. It has to be explicitly specified.
- EVSS accepts the following special issues: 
	- "ALS"
	- "GWPAH"
	- "HEPC"
	- "POW"
	- "PTSD_1"
	- "PTSD_2"
	- "PTSD_4"
	- "PTSD_3"
	- "RRD"
	- "PACT"
	- "EMP"
 2. How is LH setting special issues ([thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1709239412795819))?
- LH removed specialIssues in their v2 design (of the /submit request) as they learned that their third party consumers should not be allowed to set those. 
- They had planned to manage setting those internally at a future time.
 3. What is needed from 526?
- Vets.gov is currently only sending special issues "POW" and "RRD" (which will soon transition to "EMP" ([thread](https://dsva.slack.com/archives/C1VBAHWQL/p1708023898273619)))
	- "RRD" (soon to be "EMP") is added to the submit request automatically if pending claims are found for the user
	- "POW" is added to each condition that the user selects as connected to their POW experience, which ultimately determines the output for 21-526EZ question 16 (column 2) in VBMS
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/3ee576af-f9d9-4a7c-b476-d8938649ba44)
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/5b5534c8-dd2f-4261-91da-8aa2f399e534)
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/0aa0b954-4368-4145-b06c-33e74dc77c7e)

## Threads and docs

- [Story](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/77175): Discovery into special issues being sent from 526 via EVSS #77175
- [Story](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/76051): Discovery: Some flashes not being sent to VBMS from va.gov #76051
- Slack [thread](https://dsva.slack.com/archives/C1VBAHWQL/p1709238467657079) with EVSS
- Slack [thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1709239412795819) with Lighthouse
- Slack [thread](https://dsva.slack.com/archives/C1VBAHWQL/p1708023898273619) for RRD/EMP

## Scripts

Below are some ruby scripts run in Argo production/staging terminals to determine special issue usage

