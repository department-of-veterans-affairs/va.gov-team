# Project outline: Profile Personal Information Revision


Last updated October 22, 2021

### Communications

- **GitHub Label**: vsa-authenticated-exp; profile
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Marci McGuire |Product Manager| marci.mcguire@gcio.com|
|Christina Gesnalske| Designer | ? |
|Zach Morel | FE Engineer | zach.morel@gcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
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
- [Key deliverables](#key-deliverables)
- [Key dates](#key-dates)
- [Screenshots](#screenshots)

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

OKRs and KPIs TBD

## Solution approach

We will be incorporating the following metrics into the VA.gov profile: preferred name, pronouns, gender identity, and sexual oritentation. Additional details:

- This will be supported by the **VA Profile backend**.
- These data points currently exist in MPI but not in VA Profile, so VA Profile will need to implement these data points and establish a read/write relationship with MPI. 
- VA Profile will be beginning this work along with us in Fall 2021, so our timeline for this work is dependent on completion of the integration of this data into the VA Profile backend.
- As a result, the auth experience will begin and complete as much of the design and fronted aspects of this work as we can while the backend is being built. We'll then integrate with the backend and complete all necessary testing and collab cycle processes before launching this work into production.

## Key deliverables

- Discovery
- Design documentation
- Technical documnentation
- How to access and test
- Release plan

## Key dates

- June 2021: Request made to the VA.gov auth experience team
- October 2021: New profile team onboarded and project kickoff
- Fall 2021: VA Profile begins implementation of this work

## Screenshots

### Before

![image](https://user-images.githubusercontent.com/73354907/138468318-01facf5a-71a8-4ae3-956e-3daf2cc7ddd4.png)

### After
