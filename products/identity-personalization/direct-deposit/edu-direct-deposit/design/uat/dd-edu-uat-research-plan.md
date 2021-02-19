# Research plan for user acceptance testing (UAT) of Direct Deposit for Educational Payments (DD-EDU) feature
**VSA AuthdExp/eBenefits Teams | February 2021**

`James Adams, designer | Slack: @Jim Adams | GH: Sporeboy`

---

`Work in-progress`

### Background
Recipients of VA compensation and pension (C&P), or educational (EDU) payments can elect to have deposits made directly to their checking or savings account via Electronic Funds Transfer (EFT). Management of EDU payments is being migrated from eBenefits to be co-located with the C&P direct deposit feature in VA.gov profile. Users will be able to view and edit their direct deposit information for both types of payments in their profile.

#### Note regarding UAT
We're requesting that Perigean recruit Veterans who need to **change their direct deposit information for educational payments.** This can be done in-person at a VA facility, via phone using the VA hotline, or online using the VA.gov direct deposit feature. We realize that it may be difficult to find Veterans with such specific needs.

We will be testing an actual, functioning form that will change users' bank information for direct deposits. We will be asking our partners to keep watch for the submissions coming out of UAT, while we watch for problems and errors in real time. We will be observing the transaction, But not recording it, and this will also be clearly communicated to the UAT participant.

In the event that we don’t get any Veterans that meet our criteria, or we can't find any who are comfortable displaying live/personal data, we may toggle the feature “on” to as tiny a percentage as possible, capture a small number of submissions during a "quieter" time of the week, and then revert back to eBenefits while we take some time to validate the small number of naturally gained submissions. With feature toggles we can control access quickly and with granularly. Again, we want to keep the data being collected real and accurate. In this scenario, it may take longer to get the volume of valid VA.gov submissions to 100%, but as our confidence in the new feature increases, we should be able to accelerate to full deployment. 

### Goals
The goal of User Acceptance Testing (UAT) is to determine if the new direct deposit feature is intuitive and functional for users needing to change their bank information for their educational payments.

### Method
Participants needed to change their bank information will be recruited and given access to the new feature on VA.gov. We'll moderate UAT remotely using Zoom. Users will step through the screening wizard, then complete the inline form and submit their change(s). Remote observers may be in attendance.

#### Success criteria

Users will:
- Navigate to the tool
- Select the payment type needing to be updated
- Navigate the form
- Review and submit form
- Form will successfully submit for processing

#### The process

- There will be a quick introduction to UAT
- The user will log into VA.gov
- The participant will be guided to the direct deposit feature
- User will step through the edit-info form and submit their changes
- There will be a quick Q/A and wrap-up 
- Success will be measured as 80% of participants can successfully submit their DD changes

### Participants & recruiting
Participants will be recruited via Perigean. The study will require Veterans (or dependents) who have a need to change their direct deposit information. Sessions will run between 10 and 20 minutes depending on potential technical issues; sessions should be scheduled for 30 minutes, and at least 30 minutes apart.

Recruit for a **minimum of 5** fulfilled sessions using the following criteria:

#### Must have for participants
- Are you a Veteran, service member or a dependent? (pass = yes)
- Do you receive educational VA payments via direct deposit? (pass = yes)
- Do you need to change the direct deposit information for your educational VA payments? (pass = yes)

#### Good to have for participants

- At least one woman
- At least one person of color
- At least one participant 35 or under and 1 participant over 55
- At least one person that does not have a college degree (to include enlisted Vets)
- At least one person that has a college degree (to include of officer Vets)
- At least one person who lives in a rural or remote area
- At least one person who lives in a major metropolitan area

#### Recruitment requirements

- Participants can use any device with a browser (desktop, laptop, tablet, phone)
- The participants have Zoom downloaded prior to the session (including mobile)
- The participants know how to screenshare

#### Team Availability

Please allow 30 minutes between sessions. `Dates TBD`

| Dates | Times (EDT) |
| --- | --- |
| February XX, 2021 | 9 AM to noon |
| February XX, 2021 | 9 AM to noon |
| March XX, 2021 | 9 AM to 5 PM |
| March XX, 2021 | 9 AM to 5 PM |
| March XX, 2021 | 9 AM to 5 PM |

### Team members/roles
- James Adams | email: jadams@governmentcio.com -- Moderator, researcher
- Samara Strauss | email: samara.strauss@va.gov -- DEPO lead
- Matt Shea | email: matt.shea@adhocteam.us -- Product manager
- Shawna Hein | email: shawna@adhocteam.us -- VSA design lead
- Erik Hansen | email: erik@adhocteam.us -- Frontend engineer
- Sandra Hallie | email: shallie@governmentcio.com -- Frontend engineer
- Lihan Li | email: lihan@adhocteam.us -- Backend engineer
- Peggy Gannon | email: peggy@thesocompany.com -- VSP content
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/uat/dd-edu-uat-convo-guide.md)

---
