# My HealtheVet on VA.gov: Authenticated landing page rollout plan

Last Updated: 4/11/2023

## Overview
This document describes the phased rollout for the new My HealtheVet authenticated landing page on VA.gov. The authenticated landing page functions as a front door to other applications and content, whether hosted on VA.gov or in the existing My HealtheVet portal. As individual My HealtheVet tools are migrated from the existing My HealtheVet portal to MHV on VA.gov, this authenticated landing page will be updated to direct users to the correct version of each tool. Applications will connect to the landing page by the time they each reach Phase 2. 

## Objectives
The authenticated landing page will follow the phased rollout approach followed by other VA.gov products and features. In doing so, we intend to:
1. Validate the persistence of authenticated sessions between VA.gov and the existing My HealtheVet portal;
2. Validate that analytics tools are correctly capturing user behavior so as to generate accurate metrics;
3. Observe unmoderated production traffic to identify unexpected or unintended behavior;
4. Gather qualitative feedback from production users; and
5. Identify opportunities for incremental improvements using quantitative and qualitative data generated from the phased rollout.

## Rollout Phases

### Phase 0
During this phase, a trusted group of existing MHV users will be granted access to the authenticated landing page in production and asked to complete a basic set of functionality tests.
#### Entry criteria
- Page matches initial design
- Successful functional testing lower environments
- Access to page is fully gated
#### Exit criteria
- Trusted users have completed functionality tests
- Issues encountered during functionality testing have been documented
- Implementation of analytical tools has been tested and validated

### Phase 1 
The authenticated landing page is made available to a small increment of daily production traffic (1 – 5%, or <500 users per day). Individual sessions are monitored closely for errors and unexpected or unintended behavior.
#### Entry criteria
- Issues identified in previous phase have been remediated or otherwise resolved
- All critical accessibility findings have been addressed 
- Explainer content is located on or linked from the page
- My HealtheVet Coordinators and Champions have been briefed
- Contact center documentation has been distributed
#### Exit criteria
- At least 10,000 sessions have been observed
- Issues have been documented
- Qualitative moderated usability testing has started
- Product success metrics have been defined

### Phase 2
The authenticated landing page is made available to 10% of daily users (<3,000 users per day). 
#### Entry criteria
Issues identified in previous phase have been remediated or otherwise resolved
Automated monitors and related alerts have been established
Product success metrics have been implemented in a dashboard
#### Exit criteria
At least 50,000 additional sessions have been observed
Issues have been documented
Qualitative moderated usability testing has completed

### Phase 3
The authenticated landing page is made available to 25% of daily users (<10,000 users per day).
#### Entry criteria
Issues identified in previous phase have been remediated or otherwise resolved
Monitors have been updated, if applicable
Recommendations derived from usability testing have been ticketed
#### Exit criteria
At least 100,000 additional sessions have been observed
Issues have been documented
Usability testing recommendations have been implemented or otherwise resolved

### Phase 4
The authenticated landing page is made available to 50% of daily users (<20,000 users per day).
#### Entry criteria
Issues identified in previous phase have been remediated or otherwise resolved
Monitors have been updated, if applicable
#### Exit criteria
At least 100,000 additional sessions have been observed
Issues have been documented

### General availability
The authenticated landing page is available to all users.
### Entry criteria
Issues identified in previous phase have been remediated or otherwise resolved
Monitors have been updated, if applicable
OCC and OCIO leadership approval
