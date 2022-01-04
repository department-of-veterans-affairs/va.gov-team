# My VA UX Documentation

Tressa Furner - January 3, 2022

`WIP`

Hello! This is a rough outline of what exists on My VA and why we did what we did for MVP. I haven't included links to research because you should be able to find those in GH. I'm happy to add any additional things in here if it's helpful! 


## Overall

### Related Links

- [My VA GH folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)
- [Latest sketch file](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9)
- [Pre-Redesign My VA Data Points outlined](https://docs.google.com/spreadsheets/d/1fO3VxUj8U2M268GnpmNmlL8Jdl8E1as33SzuwoTneV8/edit#gid=1721169854)
- [My VA Updates spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/MyVA%20Updates%20(2).xlsx) - this is documentation around what should be on the My VA 2.0 dashboard broken down by time sensitivity and if it was requested in research. We didn't end up using all of these for some technical restrictions, but it gives you an idea of thought process.
- [All mocks for My VA redesign](https://tressa207096.invisionapp.com/board/My-VA-cks43eb5j00dq14wk7uuvf965) - this document has most of the process that we went through for the redesign if you want to poke around.

### Future additions to My VA

- [Education section](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/education/discovery-and-research) - this was put off because no one knows where data points are being pulled from. We cannot implement this section until the DGIB team has a clear understanding of what currently does/does not exist in their API.
- Dependent information
- Different user roles dashboards (e.g. caregiver, dependents)
- VA Home loan information
- Personalized records section
- Appeal hearings information
- Elevating cancelled appointments
- Including doctor name and appt type in appt card
- More specifics around prescriptions (e.g. when a prescription has been filled, what prescriptions are current vs expired)
- Selecting a preferred healthcare facility
- Benefit eligibility
- A functioning and robust onsite notifications hub! 
- An overall structure that truly only highlights time-sensitive action items

### Things you should know

- Users have repeatedly said they only want to see things that are actionable or a problem on their dashboard.
- Users have repeatedly said that they would like to see My VA first-thing after they log in.
- People appreciate redundancy when it comes to important or time-sensitive information.
- Users have mentioned wanting to be able to 'customize' their dashboard - this is not something that is technically feasible right now.
- Users really want to see their drs. name and appointment type in relation to their upcoming appointment. Currently this doesn't exist in VAOS, but hopefully eventually will.
- Users are totally fine to click into the tool pages to get more information. On a dashboard they just wanted a summary of their benefits, elevation of any time-sensitive action items/problems and to be able to easily access the additional things that they want to see.


## Health care - Overall MVP

### Overview

- All of the different health care information is really complicated and nuanced! 
- We are pretty limited on the actual details that we can show in each section.
- The DHM team is working to create a 'health care apartment' that lives on VA.gov.  This is part of a larger effort to retire MHV. This integration will definitely need to be taken into consideration when figuring out next steps for My VA and the overal IA of the logged-in experience.

### Currently Showing

- Disability rating
- Onsite Notifications
- Claims & appeals
- Health care
- Benefit payment and debts (WIP)
- Benefits you might be interested in (WIP)

### Future goals

- Having the ability to elevate more specific information within each section! 
- Selecting a preferred facility


## Disability rating - MVP

### Currently Showing

- Percentage of service connection

**Future goals**

- None really! This tested great and users can easily access the information that they need. 


## Claims and appeals - MVP

### Overview

- Claims are really complicated and there are a ton of different statuses that are not documented *anywhere*. (Believe me, I asked everyone) There is some documentation around what statuses exist around appeals, [which you can see in this document.](https://docs.google.com/spreadsheets/d/15_KjIF68VmxzjJcBDOQUOMkrgj1UplkvFI6AwS-uU0M/edit#gid=871749236)
- Worked mostly with Christian Valla and Kevin Stachura on CST

### Currently Showing

- One most recent claim (in the grey card)
- Link to view details of most recent claim
- Link to view all claims and appeals

### Technical limitations

- Unable to elevate one claim status over another because we don't have a firm grasp on each status

### Future goals

- It would be really great to be able to call out any action item/time sensitive status of all the claims that a user has - not just show general claims information of a single claim. We didn't do this for MVP because of the technical lift and the generally bad documentation around what claim statuses exist. In order for this to work, the CST (claim status tool) team needs to have a better grasp of all of the available.
- Call out more information about appeals! Appeal hearings are a super big deal and should definitely have a dominant place on My VA. 


## Onsite Notification - WIP

### Overview

- This is an extremely complicated effort. We've made the decision to have all notifications go through VA notify so that there is a centralized place that all of this information is stored as we move this work through the rest of the site.
- Currently not all notifications live in VA Notify, some live in Vet Text. VA Notify is in the middle of an effort to consolidate everything into a single place within VA Notify. They've created a CMS to track all of this. The overview can be seen here. 
- VA Notify is extremely limited on what information they can show. They can't show *any* PII, so we can't really either. 
- The MVP for this work is Debt resolution. Right now the only thing that is actually available through VA Notify is that a new debt has been added. 
- [A full list of what notifications exist in VA Notify or VetText is here.](https://docs.google.com/spreadsheets/d/1sEkNQvcPNhQ9R-CC-SRdrQiF4DNeix6HDC-WvWRWByo/edit#gid=300051516) 
- There is a whole slew of notifications that should be added down the line. [The list can be seen here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-discovery-questions.md#potential-action-items) This is based off of what currently is shown on My VA - there are obviously a lot more that are not accounted for.

### Currently Showing

- A new debt has been added notification
- Link to manage VA debt

### Technical limitations

- Can't show any PII
- Can't show any specific info about actual debt
- Can't link to specific debt

### Future goals

- Add additional notifications and build out a more robust onsite notifications center
- Have onsite notifications within tools (ie if a user has an appeal hearing coming up, that notification would show on their CST page)


### Health care - Appointments MVP

### Overview

- Everything is pulled through VAOS which also has a lot of technical limitations
- There are a lot of different types of upcoming appointments [which are documented here.](https://docs.google.com/spreadsheets/d/1wOPhbYkBgI4h3cr06kRGmWyKquEai-JiEgPK4gT30qI/edit#gid=0)
- Worked mostly with Peter Russo on VAOS

### Currently Showing

- Next appointment
- Link to view and manage all appointments

### Technical limitations

- Unable to link directly to a specific appointment (this is something VAOS is working on, hopefully this will be a funcationality in the future)
- Unable to show Dr. name or type of medical practice (often times the Dr doesn't get assigned to the patient until the very last minute, users can't make an appointment with a specific dr usually)

### Future goals

- Include dr name and type of medical practice
- Show cancelled appointments

## Health care - Messages MVP

### Overview

- Everything is pulled through MHV
- Users didn't really care to see all of the information about their messages, just that they had new messages. 
- Didn't work with anyone directly here - Erik checked all of this in the code. I know Lauren Alexanderson works (or worked?) on this though. 

### Currently Showing

- If a user has new messages, we show the number of new messages as a link to view them
- If a user has NO new messages, we just show a link to 'Send a secure message to your health care team'.

### Technical limitations

- Nothing major here

### Future goals

- Eventually there will be a larger messaging system for the whole VA (e.g. a place where users could recieve correspondence about their education benefits or appeals hearings etc). Once this is in place then we'll need to figure out how to integrate a messaging section not specific to health care (maybe combine the two? or maybe keep them separate?).


### Health care - Prescriptions MVP

### Overview

- We ended up not being able to show many specifics when it comes to prescriptions because there are a lot of moving parts that aren't super accurate. The only thing that we could for sure show is if a prescription had been shipped, but users didn't find that to be useful. 
- There a few different statuses that could be elevated when it comes to prescriptions, but (if I remember correctly) we couldn't get reliable access to all of these. [All of the statuses I could find are in this document.](https://docs.google.com/spreadsheets/d/15_KjIF68VmxzjJcBDOQUOMkrgj1UplkvFI6AwS-uU0M/edit#gid=871749236)
- In MHV it only shows prescriptions tracked through MHV, but there are several other places that prescriptions are tracked. So even if we could reliably show all the prescription info from MHV, it still wouldn't give the user a clear an accurate picture because it potentially wouldn't even include all of their prescriptions.
- The prescriptions tool in MHV is fairly outdated and doesn't updated often, so it often isn't acccurate for users. 
- Users only want to know if there's an action item or a problem with their prescriptions (e.g. they need dr approval or a prescription refill is about to expire)
- Can work with Lauren Alexanderson, she connected us to the prescriptions team but I can't remember the specific person we worked with.

### Currently Showing

- Link to MHV prescriptions page

### Technical limitations

- Can't accurately show prescription info because it's not all stored in MHV
- Can't accurately show statuses or details about prescriptions

### Future goals

- Be able to accurately display useful prescription info! Specifically be able to call out any issues or time-sensitive action items for prescriptions.

## Health care - Additional Links MVP

### Overview

- These were taken directly from the homepage

### Currently Showing

- Get your lab and test results
- Get your VA medical records
- Request travel reimbursement (will launch with the payment info section)

### Technical limitations

- None

## Benefit payments and debts - WIP MVP

### Overview

- [GH Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history)
- [Discovery synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-discovery-synthesis.md)
- Payment information is being pulled 2 different APIS. 
    - Debt: Debt tool API
    - Payment history: BGS (Benefits Gateway Services)
- There may be other data that we are not getting and might need to add it (like deductions for VA insurance or VA debt) - that investigation is recent and on-going
- Contacts:
  - Ebn-migration: Jason Wolf (PM I think?) or Kathleen Crawford (FE developer), slack channel: #vsa-ebn-migration
  - Debt: Denise Coveyduc (PM) or Riley Orr (Designer), slack channel: #vsa-debt
 
### Currently Showing

- Number of outstanding debts
- Link to manage debts
- One most recent payment
- Link to view all payments
- Link to manage direct deposit

### Technical limitations

- We can only show what currently exists on the payment history tool and debt tool. The debt team is set to launch some new features in 2022 so that will give us more to work with. 

### Future goals

- Include medical copays (the debt team should have this launched early 2022)
- Include debt payment history (the debt team should have this launched early 2022)
- Include VA home loan information
- Include more education benefit specific information (this should likely just live in the GI Bill section whenever that gets implemented)


## Onsite Notifications - WIP MVP

**Related Links**

- [Notification GH Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications)
- [Action items work/research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/action-items-discovery)
- [Action items spreadsheet](https://docs.google.com/spreadsheets/d/1sEkNQvcPNhQ9R-CC-SRdrQiF4DNeix6HDC-WvWRWByo/edit#gid=724842135)
- [Notes from VA Notify Meetings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/mvp/design/va-notify-meeting-notes.md)
- [VA Notify GH board](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/board?repos=133843125,261511794) - this will give you an idea of what features VA Notify are working to include
- [VA Notify Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify#readme)


## Benefits you might be interested in - MVP

### Overview

- This is pretty straightforward, I know you just did some work on this to update it. 

### Currently Showing

**Applications in Progress**

- 'What benefits does the VA offer' more info dropdown 
- Application in progress
- Link to continue application

**VA benefits you might be interested in**

- Disability Compensation
- Education Benefits
- Health care benefits

### Technical limitations

- We can't detect what benefits users are eligible for

### Future goals

- Benefit eligibility 
- Smart benefit suggestions is something that users have mentioned a lot
