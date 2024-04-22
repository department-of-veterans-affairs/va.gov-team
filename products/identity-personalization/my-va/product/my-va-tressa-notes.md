# My VA UX Documentation

**Last updated: February 15, 2024 - added Figma link**

### Related Links

- [My VA GH folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)
- [Latest Figma file](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=9-15723&mode=design)
- [Pre-Redesign My VA Data Points outlined](https://docs.google.com/spreadsheets/d/1fO3VxUj8U2M268GnpmNmlL8Jdl8E1as33SzuwoTneV8/edit#gid=1721169854)
- [My VA Updates spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/MyVA%20Updates%20(2).xlsx) - this is documentation around what should be on the My VA 2.0 dashboard broken down by time sensitivity and if it was requested in research. We didn't end up using all of these for some technical restrictions, but it gives you an idea of thought process.
- [All mocks for My VA redesign](https://tressa207096.invisionapp.com/board/My-VA-cks43eb5j00dq14wk7uuvf965) - this document has most of the process that we went through for the redesign if you want to poke around.


### Things you should know

- Users have repeatedly said they only want to see things that are actionable or a problem on their dashboard.
- Users have repeatedly said that they would like to see My VA first-thing after they log in.
- People appreciate redundancy when it comes to important or time-sensitive information.
- Users have mentioned wanting to be able to 'customize' their dashboard - this is not something that is technically feasible right now.
- Users really want to see their drs. name and appointment type in relation to their upcoming appointment. Currently this doesn't exist in the VA Online Scheduling Tool (VAOS), but hopefully eventually will.
- Users are totally fine to click into the tool pages to get more information. On a dashboard they just wanted a summary of their benefits, elevation of any time-sensitive action items/problems and to be able to easily access the additional things that they want to see.

## Sections

We currently show the following:

- Disability rating
- Onsite Notifications (WIP)
- Claims & appeals
- Health care
- Benefit payment and debts (WIP)
- Apply for VA Benefits
    - Applications in progress
    - Benefits you might be interested in

The digital health modernization team is working to create a 'health care apartment' that lives on VA.gov.  This is part of a larger effort to retire MHV. This integration will definitely need to be taken into consideration when figuring out next steps for My VA and the overal IA of the logged-in experience.

## Disability rating

- We currently show percentage of service connected disability.
- **Parent tool**: [View your VA disability ratings](https://staging.va.gov/disability/view-disability-rating/)

## Claims and appeals

- Claims are really complicated and there are a ton of different statuses that are not documented *anywhere*. (Believe me, I asked everyone) There is some documentation around what statuses exist around appeals, [which you can see in this document.](https://docs.google.com/spreadsheets/d/15_KjIF68VmxzjJcBDOQUOMkrgj1UplkvFI6AwS-uU0M/edit#gid=871749236)
- Worked mostly with Christian Valla and Kevin Stachura on the Claim status tool team.
- **Parent tool**: Claim status tool

**Currently Showing**

- One most recent claim (in the grey card)
- Link to view details of most recent claim
- Link to view all claims and appeals
- **Technical limitations**: Unable to elevate one claim status over another because we don't have a firm grasp on each status

**Future goals**

- It would be really great to be able to call out any action item/time sensitive status of all the claims that a user has - not just show general claims information of a single claim. We didn't do this for MVP because of the technical lift and the generally bad documentation around what claim statuses exist. In order for this to work, the CST (claim status tool) team needs to have a better grasp of all of the available.
- Call out more information about appeals! Appeal hearings are a super big deal and should definitely have a dominant place on My VA. 

## Onsite Notification - WIP

- This is an extremely complicated effort. We've made the decision to have all notifications go through VA notify so that there is a centralized place that all of this information is stored as we move this work through the rest of the site.
- Currently not all notifications live in VA Notify, some live in Vet Text. VA Notify is in the middle of an effort to consolidate everything into a single place within VA Notify. They've created a CMS to track all of this. The overview can be seen here. 
- VA Notify is extremely limited on what information they can show. They can't show *any* PII, so we can't really either. 
- The MVP for this work is Debt resolution. Right now the only thing that is actually available through VA Notify is that a new debt has been added. 
- [A full list of what notifications exist in VA Notify or VetText is here.](https://docs.google.com/spreadsheets/d/1sEkNQvcPNhQ9R-CC-SRdrQiF4DNeix6HDC-WvWRWByo/edit#gid=300051516) 
- There is a whole slew of notifications that should be added down the line. [The list can be seen here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-discovery-questions.md#potential-action-items) This is based off of what currently is shown on My VA - there are obviously a lot more that are not accounted for.
- **Parent tool**: VANotify

**Currently Showing**

- A new debt has been added notification
- Link to manage VA debt

**Technical limitations**

- Can't show any PII
- Can't show any specific info about actual debt
- Can't link to specific debt

**Future goals**

- Add additional notifications and build out a more robust onsite notifications center
- Have onsite notifications within tools (ie if a user has an appeal hearing coming up, that notification would show on their CST page)

**Related Links**

- [Notification GH Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications)
- [Action items work/research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/action-items-discovery)
- [Action items spreadsheet](https://docs.google.com/spreadsheets/d/1sEkNQvcPNhQ9R-CC-SRdrQiF4DNeix6HDC-WvWRWByo/edit#gid=724842135)
- [Notes from VA Notify Meetings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/mvp/design/va-notify-meeting-notes.md)
- [VA Notify GH board](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/board?repos=133843125,261511794) - this will give you an idea of what features VA Notify are working to include
- [VA Notify Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify#readme)

## Health care

### Appointments

- Everything is pulled through VAOS which also has a lot of technical limitations.
- There are a lot of different types of upcoming appointments [which are documented here.](https://docs.google.com/spreadsheets/d/1wOPhbYkBgI4h3cr06kRGmWyKquEai-JiEgPK4gT30qI/edit#gid=0).
- Worked mostly with Peter Russo on VAOS.
- **Parent tool**: VAOS

**Currently Showing**

- Next appointment
- Link to view and manage all appointments

**Technical limitations**

- Unable to link directly to a specific appointment (this is something VAOS is working on, hopefully this will be a funcationality in the future)
- Unable to show Dr. name or type of medical practice (often times the Dr doesn't get assigned to the patient until the very last minute, users can't make an appointment with a specific dr usually)

**Future goals**

- Include dr name and type of medical practice
- Show cancelled appointments

### Messages

- Everything is pulled through MHV
- Users didn't really care to see all of the information about their messages, just that they had new messages. 
- Didn't work with anyone directly here - Erik checked all of this in the code. I know Lauren Alexanderson works (or worked?) on this though. 
- **Parent tool**: MHV secure messages

**Currently Showing**

- If a user has new messages, we show the number of new messages as a link to view them
- If a user has NO new messages, we just show a link to 'Send a secure message to your health care team'.

**Technical limitations**

- N/A

**Future goals**

- Eventually there will be a larger messaging system for the whole VA (e.g. a place where users could recieve correspondence about their education benefits or appeals hearings etc). Once this is in place then we'll need to figure out how to integrate a messaging section not specific to health care (maybe combine the two? or maybe keep them separate?).

### Prescriptions

- We ended up not being able to show many specifics when it comes to prescriptions because there are a lot of moving parts that aren't super accurate. The only thing that we could for sure show is if a prescription had been shipped, but users didn't find that to be useful. 
- There a few different statuses that could be elevated when it comes to prescriptions, but (if I remember correctly) we couldn't get reliable access to all of these. [All of the statuses I could find are in this document.](https://docs.google.com/spreadsheets/d/15_KjIF68VmxzjJcBDOQUOMkrgj1UplkvFI6AwS-uU0M/edit#gid=871749236)
- In MHV it only shows prescriptions tracked through MHV, but there are several other places that prescriptions are tracked. So even if we could reliably show all the prescription info from MHV, it still wouldn't give the user a clear an accurate picture because it potentially wouldn't even include all of their prescriptions.
- The prescriptions tool in MHV is fairly outdated and doesn't updated often, so it often isn't acccurate for users. 
- Users only want to know if there's an action item or a problem with their prescriptions (e.g. they need dr approval or a prescription refill is about to expire)
- Can work with Lauren Alexanderson, she connected us to the prescriptions team but I can't remember the specific person we worked with.
- - **Parent tool**: MHV prescriptions tool

**Currently Showing**

- Link to MHV prescriptions page

**Technical limitations**

- Can't accurately show prescription info because it's not all stored in MHV
- Can't accurately show statuses or details about prescriptions

**Future goals**

- Be able to accurately display useful prescription info! Specifically be able to call out any issues or time-sensitive action items for prescriptions.

### Additional Links

These were taken directly from the homepage.

**Currently Showing**

- Get your lab and test results
- Get your VA medical records
- Request travel reimbursement (will launch with the payment info section)

## Benefit payments and debts - WIP

- [GH Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history)
- [Discovery synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-discovery-synthesis.md)
- Payment information is being pulled 2 different APIS. 
    - Debt: Debt tool API
    - Payment history: BGS (Benefits Gateway Services)
- There may be other data that we are not getting and might need to add it (like deductions for VA insurance or VA debt) - that investigation is recent and on-going
- Contacts:
  - Ebn-migration: Jason Wolf (PM I think?) or Kathleen Crawford (FE developer), slack channel: #vsa-ebn-migration
  - Debt: Denise Coveyduc (PM) or Riley Orr (Designer), slack channel: #vsa-debt
 - **Parent tools**: Payment history (BGS backend) and debt management tool
 
**Currently Showing**

- Number of outstanding debts
- Link to manage debts
- One most recent payment
- Link to view all payments
- Link to manage direct deposit

**Technical limitations**

- We can only show what currently exists on the payment history tool and debt tool. The debt team is set to launch some new features in 2022 so that will give us more to work with. 

**Future goals**

- Include medical copays (the debt team should have this launched early 2022)
- Include debt payment history (the debt team should have this launched early 2022)
- Include VA home loan information
- Include more education benefit specific information (this should likely just live in the GI Bill section whenever that gets implemented)

## Apply for benefits

**Currently Showing**

- Applications in progress, including links to continue applications
- 'What benefits does the VA offer' more info dropdown 
- VA benefits you might be interested in, including links to Disability Compensation, Education Benefits, and Health care benefits
- **Parent tool**: ALl applications on VA.gov

**Technical limitations**

- We can't detect what benefits users are eligible for

**Future goals**

- Benefit eligibility 
- Smart benefit suggestions is something that users have mentioned a lot

## Potential future additions to My VA

These are suggestions based on what we've heard in user research ([December 2020 exploration research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#additional-insights), [March 2021 usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-research-findings.md#features-users-expected-to-see-that-were-missing), and [July 2021 notifications discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#things-veterans-mentioned-theyd-want-to-see-as-an-alert)). Depending on further research and how the VA.gov profile develops over time, we may add some of the following to My VA:

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
