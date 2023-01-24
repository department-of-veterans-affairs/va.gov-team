# Project outline: Profile Personal Information Revision

Last updated: October 12, 2022 

## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statements](#user-problem-statements)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Design](#design)

## POCs

- **Github labels**: vsa-authenticated-exp
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

### VA Profile

|Name|Role|Email|
|----|----|-----|
|Barbie Flowers| IT Product Manager – VA Profile|barbara.flowers3@va.gov|
|Mike Richard| VA Profile PM | Michael.Richard2@va.gov|
|Josh Lindsey | VA Profile lead engineer| Joshua.Lindsey@va.gov|

### LGBTQ health services

|Name|Role|Email|
|----|----|-----|
|Lexi Matza | Deputy Director, LGBTQ Health Services | alexis.matza@va.gov |
|Michael Kauth| Director, LGBTQ Health Services |michael.kauth@va.gov|

### VEO

|Name|Role|Email|
|----|----|-----|
|Melissa Rebstock | VBA/VEO lead | melissa.rebstock@va.gov |
|Laurie Baker | VBA partner | laurie.baker@va.gov |

## Overview

In June 2021, VEO came to VA.gov to talk about integrating preferred name, pronouns, gender identity, and sexual orientation into the VA.gov profile. The LGBTQ Health Services office is trying to mitigate issues around Veterans showing up to health appointments and being addressed improperly, causing distress to both patients and staff who are working with inaccurate and outdated information. 

**Note**: As of March 2022, it has been determined that we will only be adding preferred name and gender identity to start, as they are already approved for data collection via the 10-10EZ health care application. Pronouns and sexual orientation, however, are not approved as part of any VA forms and need to go through PRA approval before we can add them to VA.gov. The current plan is for the health care folks to get pronouns and sexual orientation added to the 10-10EZ, at which point we can add these fields to VA.gov.

## User problem statements

- As a Veteran, I want to be able to easily manage and update my preferred name, pronouns, gender identity, and sexual orientation so that the VA has accurate information for me.
- As a Veteran, I want to be able to easily manage and update my preferred name, pronouns, gender identity, and sexual orientation so that I am addressed accurately in my business with the VA.

## User outcomes

### Desired User Outcomes

- People are able to maintain accurate information in their VA records.
- People have peace of mind that they will be addressed accurately and respectfully when interacting with the VA.

### Undesired User Outcomes

- People feel that the options in the VA.gov profile don't accurately represent how they identify themselves.
- If this information is not updated in all VA systems, it may result in some departments not having accurate Veteran data.

## Business outcomes

### Desired Business Outcomes

- VA employees have peace of mind that they are accurately addressing Veterans.

### Undesired Business Outcomes

- This information is not updated in all VA systems, resulted in some departments not having accurate Veteran data.

## Measuring success

[Personal information Google Analytics dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/-x0K5pQPRTaQCa_WzXnEDg/a50123418w177519031p176188361/_u.date00=20220615&_u.date01=20220714/)

### Objective: Allow people to more accurately define themselves within the VA.

**KPI**: See 10,000 updates to each new personal information field in the first 3 months after launch.

**Assessment**: KPI partially met. We exceeded expectations for gender identity, and had many fewer updates for preferred name. We can use these metrics as a baseline for expected behavior going forward.

|Field name|Updates in first month after launch to 100% (6/27/22 - 7/26/22)| Second month after launch (7/27 -/22 - 8/26/22)| Third month after launch (8/26/22 - 9/26/22)|
|----------|------------|------------|------------|
|Preferred name|6,384|6,598|6,386|
|Gender identity|12,248|12,770|12,436|

**KPI**: We see at least a 95% success rate for retrieving and saving this information from the backend.

**Assessment**: Goal met.

|Field name|Success rate in first month after launch to 100% (6/27/22 - 7/26/22)| Second month after launch (7/27 -/22 - 8/26/22)| Third month after launch (8/26/22 - 9/26/22)|
|----------|------------|------------|------------|
|Retrieval rate for preferred name & gender identity|98%|98%|98%|
|Save rate for preferred name|99%|99%|99%|
|Save rate for gender identity|99%|98%|99%|


**KPI**: We don't see a significant reduction in mailing/home address, mobile phone, or email address updates since those have been moved off of the landing page of the profile.

[Contact information report](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)

**Assessment**: While there were fluctuations, we didn't see significant and consistent drops over time to contact information, so it does not appear that Contact Information took a hit by moving to a different URL.

|Field name| Monthly updates 1 month pre-launch (5/15/22 - 6/14/22) | First month after launch to 100% (6/27/22 - 7/26/22)| Second month after launch (7/27 -/22 - 8/26/22)| Third month after launch (8/26/22 - 9/26/22)|
|----------|------------|------------|------------|------------|
|Mailing address|29,950|29,168|32,204|28,038|
|Home address|30,000|27,990|31,145|28,067|
|Mobile phone|14,616|13,256|15,023|14,376|
|Email address|14,497|11,850|13,466|12,437|

## Solution approach

We will be incorporating the following metrics into the VA.gov profile: preferred name, pronouns, gender identity, and sexual oritentation. Additional details:

- This will be supported by MPI as these these data points currently exist in MPI.
- We will begin the front-end work as soon as the designs are finalized, and the back-end work to connect with MPI will follow shortly thereafter, depending upon BE engineer availability since the Profile team does not have a dedicated BE engineer.

### Key dates

- June 2021: Request made to the VA.gov auth experience team
- October 2021: New profile team onboarded and project kickoff
- Fall 2021: Design; Frontend build; Backend on hold as we wait for MPI to be ready to start integration
- December 2021: User testing on interface designs; discussions begin with MPI
- January 2022: Continued design updates and FE build; It is determined that VA Profile, not MPI, will support the backend
- February 2022: Backend development begins; Continued delays and back and forth between MPI and VA Profile, though VA Profile remains the backend supporting this work.
- March 2022: PRA determination made that we need approvals for pronouns and sexual orientation before we can continue with adding them to VA.gov; Still moving forward with preferred name and gender identity; Final design updates; Continued FE and BE build
- April 2022: Wrapping up backend integration; Integrating the frontend with the backend.
- May 2022: QA
- June 15, 2022: Launch to 25%
- June 21, 2022: Launch to 50%
- June 27, 2022: Launch to 100%

## Design

### Before

![image](https://user-images.githubusercontent.com/73354907/138468318-01facf5a-71a8-4ae3-956e-3daf2cc7ddd4.png)

### After

- [Personal information design files](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)

![New Personal Information section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/images/Personal%20information_1.jpeg)
