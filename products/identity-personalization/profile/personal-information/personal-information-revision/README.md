# Project outline: Profile Personal Information Revision

Last updated: January 5, 2022 

### Communications

- **GitHub Label**: vsa-authenticated-exp; profile
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Marci McGuire |Product Manager| marci.mcguire@gcio.com|
|Christina Gesnalske| Designer | christina.gednalske@adhocteam.us |
|Adam Whitlock | FE Engineer | adam.whitlock@adhocteam.us |
|Tom Harrison| BE Engineer | tom.harrison@adhocteam.us |
|Melissa Rebstock | VBA/VEO lead | melissa.rebstock@va.gov |
|Laurie Baker | VBA partner | laurie.baker@va.gov |
|Lexi Matza | Deputy Director, LGBT Health Program | alexis.matza@va.gov |

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Design](#design)

## Overview

In June 2021, VEO came to VA.gov to talk about integrating preferred name, pronouns, gender identity, and sexual orientation into the VA.gov profile. The LGBTQ Health Services office is trying to mitigate issues around Veterans showing up to health appointments and being addressed improperly, causing distress to both patients and staff who are working with inaccurate and outdated information.  

## Problem Statement

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

- The VA is in compliance with executive order mandating this work.
- VA employees have peace of mind that they are accurately addressing Veterans.

### Undesired Business Outcomes

- This information is not updated in all VA systems, resulted in some departments not having accurate Veteran data.

## Measuring success

### Objective: Allow people to more accurately define themselves within the VA.

**KPI**: See 10,000 updates to each new personal information field in the first month after launch.

|Field name| Number of updates in first month after launch (dates TBD)|
|----------|------------|
|Preferred name| |
|Pronouns| |
|Gender identity| |
|Sexual orientation| |

**KPI**: We don't see a significant reduction in mailing/home address, mobile phone, or email address updates since those have been moved off of the landing page of the profile.

[Contact information report](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)

|Field name| Average monthly updates (total events) between Oct - Dec 2021 | # of monthly updates (total events) 1 month post-launch |
|----------|------------|------------|
|Mailing address | ~28,500 updates | |
|Home address | ~28,500 updates | |
|Mobile phone | ~14,000 updates | |
|Email address |~15,500 updates | |

## Solution approach

We will be incorporating the following metrics into the VA.gov profile: preferred name, pronouns, gender identity, and sexual oritentation. Additional details:

- This will be supported by MPI as these these data points currently exist in MPI.
- We will begin the front-end work as soon as the designs are finalized, and the back-end work to connect with MPI will follow shortly thereafter, depending upon BE engineer availability since the Profile team does not have a dedicated BE engineer.

### Key dates

- June 2021: Request made to the VA.gov auth experience team
- October 2021: New profile team onboarded and project kickoff
- Fall 2021: Design; Frontend build; Backend on hold as we wait for MPI to be ready to start integration
- December 2021: User testing on interface designs; back end begins integration with MPI

## Design

### Before

![image](https://user-images.githubusercontent.com/73354907/138468318-01facf5a-71a8-4ae3-956e-3daf2cc7ddd4.png)

### After

- [Personal information design files](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)
