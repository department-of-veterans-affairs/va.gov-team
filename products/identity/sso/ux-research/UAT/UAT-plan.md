# UAT Plan for SSO-Login, SSOe, March 26, 2020

[Per VSP guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#what-is-uat), during typical user acceptance testing (UAT), actual users test the service/tool/feature to make sure it can handle required tasks in real-world scenarios in the production environment, athough [there are times when UAT may be conducted with a non-Veteran audience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#recruiting). Because SSOe is mostly comprised of back-end development work (there is only one UI element, a modal, that will be part of the SSOe launch), we have decided to move forward with UAT with a non-Veteran audience. 

That being said, we are leveraging prior research done with Veterans around logon that made us aware of some instance SSOe must account for, especially for assistive device users. 

### What product & team is this UAT for?
- SSO-Login Team
- Outbound and Inbound SSOe (single sign-on from VA.gov to other VA sites, from other sites to VA.gov) 

### Product Background
VA.gov aims to provide a unified digital portal with access to all VA services. In certain instances, however, Veterans are directed out of the VA.gov platform in order to message their healthcare provider (MHV), check on the status of benefits claims (eBenefits), or access health tools that have moved to My VA Health (Cerner). When users need to navigate between multiple platforms to access benefits and tools, they are in many cases asked to re-authenticate each time. This results in a fragmented experience that may discourage users from interacting with the VA online. The goal of SSOe is seamless navigation for any user redirected between health tools or benefits housed on multiple platforms.

### Purpose 
**Make sure SSOe works in production.**

## Pre-Tests

SAFARI, IE, Edge or FF (chrome is not needed)
1. User signs in to VA.gov
2. User opens "My Health" in new tab. (right click)
3. User clicks on APPOINTMENTS.
4. User clicks on “Schedule or Cancel a VA appointment” link (in blue bux not the CTA button)
 -Are they redirected to old VAOS?
5. User signs out
NOTE: If user has different authentication credentials try each one.
----

## Test Set-Up
NOTE: This set up is to be used for UAT completed before features are launched to 100% of users. In these cases a developer must be present for testing.

Chrome browser instructions below for Step 2 in other browsers [check this how to.](https://balsamiq.com/support/faqs/browserconsole/)

1. Open browser & enter VA.gov
2. Go to View > Developer > Developer tools 
3. Go to Application (possibly Storage in other browsers)
4. Under Storage go to Cookies
5. Click the va.gov url
6. Copy "FLIPPER_idname" value and paste in chat window in Zoom to person conducting UAT session
7. UAT lead uses this value to "turn on" SSOe for UAT paricipant
8. Close developer toolbar
9. Refresh page
10. Begin UAT flow

## UAT Test Flow

1. User signs in to VA.gov
 - Check for modal
2. User opens "My Health" in new tab. (right click)
3. User clicks on APPOINTMENTS.
4. User clicks on “Schedule or Cancel a VA appointment” link (in blue bux not the CTA button)
 - Are they redirected to old VAOS?
5. Return to MHV Home
-------
1. Click on Labs and Tests
 - User should be at MHV homepage logged in.
2. Click on prescriptions
-------
1. Open new tab.
2. Go to to My healtheVet home page: https://www.myhealth.va.gov/mhv-portal-web/home

REPEAT: With different credentials and browsers.

## Reference Test Rails Cases

The 4 flows below chart out how users could test both outbound and inbound SSOe with one type of credential. Ideally, each flow should have two testers go through it, one in Chrome and one in Safari. This would make for a total of 8 moderated UAT sessions run by the SSOe team. 

### Flow 1: ID.me

#### Complete the following test cases: 

**Outbound**

- [C318, ID.me,  LOA3 Sign in to VA.gov](https://dsvavsp.testrail.io/index.php?/cases/view/318&group_by=cases:section_id&group_order=asc&group_id=60)
- [C351, ID.me LOA3 VA.gov Modal UX](https://dsvavsp.testrail.io/index.php?/cases/view/351&group_by=cases:section_id&group_order=asc&group_id=60)
- [C321, ID.me LOA3 Navigate to MHV in new tab](https://dsvavsp.testrail.io/index.php?/cases/view/321&group_by=cases:section_id&group_order=asc&group_id=60)
- [C322, ID.me LOA3 Navigate to MHV via My Health](https://dsvavsp.testrail.io/index.php?/cases/view/322&group_by=cases:section_id&group_order=asc&group_id=60)

eBenefits Tests:
- [C320, ID.me LOA3 View claims/appeals](https://dsvavsp.testrail.io/index.php?/cases/view/320&group_by=cases:section_id&group_order=asc&group_id=60)
- [C323, ID.me LOA3 Navigate to eBenefits](https://dsvavsp.testrail.io/index.php?/cases/view/323&group_by=cases:section_id&group_order=asc&group_id=60)

**Inbound**

- [C361, ID.me LOA3 Inbound session from MHV](https://dsvavsp.testrail.io/index.php?/cases/view/361&group_by=cases:section_id&group_order=asc&group_id=68)


### Flow 2: MHV Premium

#### Complete the following test cases: 
 
**Outbound**

- [C328, MHV Premium Sign in to VA.gov](https://dsvavsp.testrail.io/index.php?/cases/view/328&group_by=cases:section_id&group_order=asc&group_id=83)
- [C351, ID.me LOA3 VA.gov Modal UX](https://dsvavsp.testrail.io/index.php?/cases/view/351&group_by=cases:section_id&group_order=asc&group_id=60)
- [C330, MHV Premium VA.gov health dashboard](https://dsvavsp.testrail.io/index.php?/cases/view/330&group_by=cases:section_id&group_order=asc&group_id=83)
- [C331, MHV Premium Navigate to MHV in new tab](https://dsvavsp.testrail.io/index.php?/cases/view/331&group_by=cases:section_id&group_order=asc&group_id=83)

eBenefits Test:
- [C333, MHV Premium Navigate to eBenefits](https://dsvavsp.testrail.io/index.php?/cases/view/333)

**Inbound**

- [C360, MHV Premium Inbound session from MHV](https://dsvavsp.testrail.io/index.php?/cases/view/360&group_by=cases:section_id&group_id=68&group_order=asc)


### Flow 3: DS Logon

#### Complete the following test cases: 

**Outbound**

- [C341, DSLogon Premium Sign in to VA.gov](https://dsvavsp.testrail.io/index.php?/cases/view/341&group_by=cases:section_id&group_id=83&group_order=asc)
- [C351, ID.me LOA3 VA.gov Modal UX](https://dsvavsp.testrail.io/index.php?/cases/view/351&group_by=cases:section_id&group_order=asc&group_id=60)
- [C342, DSLogon Premium VA.gov account page](https://dsvavsp.testrail.io/index.php?/cases/view/342)
- [C343, DSLogon Premium Navigate to MHV](https://dsvavsp.testrail.io/index.php?/cases/view/343)

eBenefits Test:
- [C344, DSLogon Premium Navigate to eBenefits](https://dsvavsp.testrail.io/index.php?/cases/view/344)

**Inbound**

- [C363, DSLogon Premium (Mapped UUID) Inbound session from MHV](https://dsvavsp.testrail.io/index.php?/cases/view/363)


## Output
- UAT testing summary (results of each moderated session, noting passes and fails)
- Tickets for any fixes that need to be implemented for SSOe to launch


## Things to Consider
In addition to ensuring SSOe is usable and achieves its stated goals, we may ask the following:
- Do our testers find the SSOe redirects to be confusing or otherwise detremential to their experience? 

## Method
- User acceptance testing - goal is to ensure SSOe works in production.
- Remote moderated _and_ unmoderated, via Zoom. Will seek to ensure all credential types are tested, and conduct a couple moderated sessions to benefit from seeing a testers flow as they navigate SSO, but also ask for unmoderated testers to ensure we're able to get folks who have all the credential types we need.
- Testing will take place on VA.gov. We'll need to work with testers before they test to get their Google ID number so we can turn on SSOe in production for them. 

## Participants and Recruitment
#### Participant criteria
- At least 4, ideally 8, participants across DEPO and Ad Hoc
- Must have their own MHV, ID.me, or DS Logon account

#### What is your recruitment strategy?
- Will put out a call on Slack across DSVA and Ad Hoc, seeking users who have their own accounts to test with

## Timeline
#### Dates
- We are seeking to launch SSOe to 1% of users in late May, and want to start UAT around mid-May

#### Stimuli for testing
- Production environment (we can turn on SSOe for individual users using the feature flipper)

#### Length of sessions
- About 20 minutes, maximum of 45 minutes 

#### Availability
- Dates can be set pending completion of SSOe work

#### Pilot
- Test cases run by SSO-Login team with test credentials will serve as pilot 

### Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker

- Moderator: Alexis James, Patrick Vinograd, Bridget Hapner, Eric Buckley, Dan Hinze may all serve as moderators 
- Research guide writing and task development (usually but not always same as moderator): Bridget Hapner
- Participant recruiting & screening: Bridget Hapner and Alexis James
- Project point of contact: Alexis James
- Participant(s) for pilot test: N/A
- Note-takers: SSO-Login team may all serve as note-takers, a note taker will be designated prior to each session
- Observers: N/A

