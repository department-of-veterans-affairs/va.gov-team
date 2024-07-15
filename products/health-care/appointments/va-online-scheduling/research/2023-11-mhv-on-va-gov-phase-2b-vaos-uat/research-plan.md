# Research Plan for Appointments on MHV on VA.gov UAT

## Background

VA Online Scheduling allows Veterans who are logged into VA.gov to schedule and manage their appointments.

The VAOS team recently released features to help Veterans:
- Navigate between MHV on VA.gov and MHV.
- Navigate to My VA Health (Cerner).
- Navigate between the details pages and their appointment lists.
- Print their appointment lists.

This study will test that those features are meeting Veteran's needs.

Additionally, we want to generate some insights around how Veterans choose facilities or providers. This will help inform our approach to improving these flows in future initiatives.

Also see:
- Phased Rollout for MHV on VA.gov - [Phase 1B](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?wid=5-1680618107842)
- [Phase 1B user flow](https://www.figma.com/file/0wG5mpi760FGvVh89phapu/User-flow-for-MHV-Portal-to-Appointments?type=whiteboard&node-id=935-2137&t=1fcwxkJG1yqTgL37-4)
- [New appointments list navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/navigation-link/add-navigation-links-mhv.md)
- [Add Cerner navigation option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/cerner-navigation-mhv-on-va.gov/cerner-navigation-initiative-brief.md)
- [Print appointment list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/print-appointment-list/initiaitve-brief-print-appointment-list.md) 

### OCTO Priorities 

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

- Veterans and their families can find a single, authoritative source of information
- Logged-in users have a personalized experience, with relevant and time-saving features

Increase 📈

-   Veteran satisfaction with VA.gov: by providing an after visit summary, a print functionality on the appointment list page, and ease of navigation with updated breadcrums.

Decrease 📉

-   Call center volume, wait time, and time to resolution: by providing the right information about appointments when Veterans need it.

### Veteran journey

Veterans may interact with VAOS at different stages across the [veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up

-   MTM: Attending to health needs

Taking care of myself

-   MTM: Recognizing and addressing mental health needs
-   MTM: Managing health issues

Putting down roots

-   Maintaining my emotional health
-   Engaging VA to access benefits and services

Retiring

-   MTM: Taking care of my health
-   MTM: Managing my declining health

## Research goals

**UAT:** Verify via UAT that logged in Veterans are able to utilize recently added features and data is populating as expected.

**Mental Model Study:** Understand Veteran's mental models as they choose a facility or provider when scheduling an appointment. 

### Research questions

**UAT:**
1. Are participants able to navigate between to the appointments feature from My VA and MHV on VA.gov?
1. Are participants able to navigate their appointments lists?
1. Can participants easily print their appointments lists?
1. Are users at Cerner facilities able to navigate to My VA Health?

**Mental Model Study**
1. Does the process of selecting a clinic (VistA) or provider (community care) meet participant expectations?
1. What other information would be helpful when scheduling with a provider or clinic?

### Outcome

We will use the _UAT_ findings to validate or improve:
- the breadcrumb and URL updates for MHV on VA.gov.
- the descriptive back link navigation on the details pages.
- the print button design.

We will use the _mental model study_ findings to:
- better understand participant expectations around facility and clinic selection.
- better understand participant expectations around community care provider selection.
- identify pain points or potential improvements, and use this to inform our approach to improving the scheduling process.

### Hypotheses

1. Participants will be able to easily navigate to the appointments tool from all entry points.

2. Participants will be able to easily print a list of their appointments. 

3. Participants at Cerner facilities will be able to easily navigate to My VA Health.

4. The process of selecting a facility, clinic, or provider during scheduling will meet participant expectations.

## Method

We'll run a moderated test in two parts: an evaluative UAT study and a generative mental model study.

### Location

Remote, over Zoom.

### Research materials

- [Conversation guide](conversation-guide.md)
- [Task tracker](https://docs.google.com/spreadsheets/d/1i4vXL-1MkC-QhdzWUneLyfaopI5UL0JPAI7uHux90DE/edit#gid=0)
- [Observer Signup sheet](https://docs.google.com/spreadsheets/d/1psKVN-csDpXjvwFOEgGBUAdCzaF9M_Ua27pujRqaNzQ/edit?usp=sharing)
- [Mural board for observer notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689954776087/f9c46f95011f1ba2bbe090a71496336e8cf98718?sender=ab46bdc2-9241-4530-b4ae-5f5482510528)

## Recruitment

### Recruitment approach

Perigean will:
- recruit 16 total participants for this study.
- schedule a brief kickoff call to run through the recruitment criteria before recruiting.

### Recruitment criteria

**Primary criteria**

All participants must have upcoming appointments at the time of the study:

**Screener Q1:** Have you been to a VA healthcare facility for a medical appointment in the last 12 months?
```
   - Yes (Go onto Screener question 2)
   - No (Disqualify)
```

**Screener Q2:** Do you have any upcoming VA medical appointments scheduled for December 2023 or later?
```
   - Yes (Go onto Screener question 3)
   - No (Disqualify)
```

All participants must be willing to log into their account and share information about their appointments with the research team.

**Screener Q3:** Are you willing have the research team see your upcoming VA medical appointments during the study? Any personal health information you share will be redacted from the study.
```
   - Yes (Go onto Screener question 4)
   - No (Disqualify)
```
**Screener Q4:** Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?

```
   - Yes (Go onto Screener question 5)
   - No (Disqualify)
```
At least 2 participants must have upcoming appointments at facilities that use the Cerner EHR.

**Screener Q5:** Do you have upcoming appointments at any of the following facilities?
- Mann-Grandstaff VA Medical Center in Spokane, Washington
- Jonathan M. Wainwright Memorial VA Medical Center in Walla Walla, Washington
- VA Central Ohio Healthcare System in Columbus, Ohio  
- Roseburg VA Health Care System in Roseburg, Oregon
- VA Southern Oregon Rehabilitation Center and Clinics in White City, Oregon

**Secondary criteria:**

- At least 4 participants who attend sessions on a mobile device.
- At least 4 participants with a cognitive disabilty
- At least 2 Screenreader users
- At least 2 screen magnification users
- At least 1 LGBTQ+ Veteran
- At least 1 Native Veteran
- At least 1 who lives in a rural area

## Timeline

### Prepare

Test materials will be finalized by November 17th, 2023

Pilot participant email: TBD
Date and time of pilot session: TBD

### Research sessions

Research sessions will begin on or after Nov.30th, 2023

### Length of sessions

1 hour.

### Availability

Monday - Friday, 8:00 am - 5:00 pm EST

NOT AVAILABLE:
- Tuesday, 28 Nov 8:00 am - 2:00 pm EST
- Wednesday, 29 Nov All Day


Please add a 30 minute buffer between sessions.

Please do not schedule more than 3 sessions per day.

## Team roles


-   Moderators: 
    - Melissa Lefevre melissa.lefevre@adhocteam.us
    - Ciera Maddox ciera.maddox@adhocteam.us
    - Peter Russo peter.russo@adhocteam.us

-   Research guide writing and task development 
    - Melissa Lefevre melissa.lefevre@adhocteam.us
    - Ciera Maddox ciera.maddox@adhocteam.us
    - Peter Russo peter.russo@adhocteam.us

-   Participant recruiting & screening: Perigean

-   Project point of contact: Peter Russo peter.russo@adhocteam.us

-   Participant(s) for pilot test: TBD

-   Note-takers:
    - Melissa Lefevre melissa.lefevre@adhocteam.us
    - Ciera Maddox ciera.maddox@adhocteam.us
    - Peter Russo peter.russo@adhocteam.us

-   Observers: 
    - Jeff Roof jeff.roof@adhocteam.us
    - Kristen McConnell Kristen.Mcconnell@va.gov
    - Sara Sterkenberg sara.sterkenburg@adhocteam.us

