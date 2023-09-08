# UAT Plan for 527EZ and 530 Temporary Deactivation

[Per VSP guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#what-is-uat), during typical user acceptance testing (UAT), actual users test the service/tool/feature to make sure it can handle required tasks in real-world scenarios in the production environment, athough [there are times when UAT may be conducted with a non-Veteran audience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#recruiting).

Because the temporary deactivation of the pension and burial forms only affects a few pages with in the forms flows and the changes are minor, 
we will conduct UAT testing in production with test accounts. 

### What product & team is this UAT for?
- Pension (527EZ) and Burial (530) digital forms
   - Temporary deactivation of forms (remove access on VA.gov)
   - New review form pages for users with in-progress forms
   - Email to users with in-progress applications

### Product Background
The digital pension (527EZ) and burial (530) forms on VA.gov are outdated and do not align with the current version of the paper forms. Because of this, the digital forms cannot be process when submitted, which leads to additional claim development for 100% of these digital claims.
The forms will be temporarily deactivated, and users with in-progress forms will be sent an email notifying them of the deactivation, instructing them to submit a paper form, and directing them to view review their in-progress claim information via a new review page.

## Pre-Tests

SAFARI, IE, Edge or FF (chrome is not needed?)
1. Test email to users with in-progress forms (test link to pdf, test link to "how to apply")
2. Test an authenticated user viewing the "how to apply page".
3. Test an unauthenticated user viewing the "how to apply page".
4. Test an authenticated user with an in-progress form opening form review page (burial or pension)
5. Test an unauthenticated user with an in-progress form opening form review page (burial or pension)

----

## Test Set-Up (UPDATE)
NOTE: This set up is to be used for UAT completed before features are launched to 100% of users. In these cases a developer must be present for testing.

Chrome browser instructions below for Step 2 in other browsers [check this how to.](https://balsamiq.com/support/faqs/browserconsole/)

1. Outline steps

## UAT Test Flow
### Authenticated User with in-progress form
1. User receives email notifying them the form has been deactivated and they need to submit their claim via paper form (test both users with email addresses within claim form and users with email on MyVA profile)
2. User clicks link within email to download pdf
3. User clicks link within email to learn "how to apply" for a VA burial allowance and sees updated information
5. User opens form review page (burial or pension) and sees their in-progress form summary and updated deactivation information

### Authenticated User without in-progress form
1. User visits "how to apply" page and sees updated information
2. User visits review page and sees updated information

### Unauthenticated User
1. Users visits in-progress form and is redirected to "how to apply" page and sees updated information (is this correct?)
2. Users vists "how to apply" page and sees updated information

REPEAT: With different credentials and browsers.

## Reference Test Rails Cases (UPDATE)

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


## Method (UPDATE)
- User acceptance testing - goal is to ensure UI elements, url redirects, and review page updates work in production.
- Remote moderated _and_ unmoderated, via Zoom. Will seek to ensure all credential types are tested, and conduct a couple moderated sessions to benefit from seeing a testers flow as they navigate SSO, but also ask for unmoderated testers to ensure we're able to get folks who have all the credential types we need.
- Testing will take place on VA.gov. We'll need to work with testers before they test to get their Google ID number so we can turn on SSOe in production for them. 

## Participants and Recruitment (UPDATE)
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
