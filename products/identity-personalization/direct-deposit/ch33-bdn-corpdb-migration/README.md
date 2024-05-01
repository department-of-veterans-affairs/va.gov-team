# Project Outline - Ch33 Migration to CorpDB

**Last updated 4/30/2024** -- updated timeline
## Table of Contents 
- [Communications](#communications)
- [Roles](#roles)
- [Overview](#overview)
- [Teams and responsibilities](#teams-and-responsibilities)
- [Outstanding questions](#outstanding-questions)
- [Comms schedule](#comms-schedule)
- [Assumptions and risks](#assumptions-and-risks)
- [Timeline](#timeline)
- [Measuring Success](#measuring-success)
- [Key Deliverables / Artifacts](#key-deliverables--artifacts)
- [Design Links](#design-links)
- [Key Dates](#key-dates)


## Communications 
- **Github labels:** authenticated-experience, profile, direct-deposit
- **Slack channel:** #edu-direct-deposit-migration

## Roles 

### Partners
|Name|Role/Team|
|:--|:--|
|Sarah Haddock|VBA VACO|
|Steve Wayland|VBA VACO|
|John Dell|BIS (formerly BGS) technical contact|
|Janey Coutinho| Lighthouse|
|Andrew Ramos|LightHouse|
|Lori Glover|LightHouse|
|Danielle Thierry| Content|
|Riley Ross| GI Bill (1990) application|
|Julie Strothman| 526/527 needs|
|Catherine Trombley| VBA Comms|
|Lindsey Slaughter| VBA Comms|

## Overview 
Chapter 33 (Ch33) education benefits are paid to veterans using a system called BDN. BDN is a legacy system that is gradually being retired and various benefits are migrating to newer payment/management systems. VBA is starting with the largest EDU portfolio, Ch33 and migrating payment processing from BDN to CorpDB where payments will run through eMPWR. In this new system, there can only be ONE set of payment instructions. As an example, Comp&Pen (C&P) benefits have already been migrated to CorpDB.

Today, if veterans receive CH33 and C&P benefits, there are two separate payment processes running, one from BDN and the other from CorpDB. This allows veterans to input separate payment information for each benefit. As the VA migrates CH33 to the new system, payment instructions for both types of benefits must be identical.  

### Problem Statement 
CorpDB limits the payee information per person to one set of payment instructions, any veteran that receives both C&P and CH33 benefits must have ONE set of payment instructions on file in CorpDB. 

### Proposed Solution 
CH33 EDU benefits likely need to pass information through Lighthouse. We will reduce FE complexity as well by combining everything into one form. 

## Teams and responsibilities

### Authenticated experience (VA.gov profile)

Leads: Chante Lantos-Swett, Travis Cahill, (Samara Strauss supporting) 

The VA.gov profile team is responsible for the following:

- Overall coordination of this effort (through Samara)
- Updating the profile interface to combine the education and disability direct deposit forms into one
- Updating connections to Lighthouse to allow education benefit recipients to update direct deposit
- Coordinating testing across systems
- Launching and monitoring functionality

### Sitewide/Content

Leads: Danielle Thierry, Beth Potts, Randi Hecht

The Sitewide/content team is responsible for:

- Content/communications guidance around external comms
- Content updates for VA.gov

### Lighthouse

Leads: Janet Coutinho, Lorri Glover, David Lennon

Lighthouse is responsible for:

- Updating their code to allow education benefit recipients to update direct deposit via the existing comp & pen integration
- Coordination with BGS
- Working with us on all testing and validation
- Support as needed through this engagement

### BGS

Lead: John Dell

- Updating their code to allow education benefit recipients to update direct deposit via the existing comp & pen integration
- Coordination with Lighthouse
- Working with us on all testing and validation
- Support as needed through this engagement

### GI Bill (1990) form team

#### Overview

Lead: Riley Ross

- The DGIB (Digital GI Bill) team sits outside of OCTO, so we need to be in close communication with them on what they are or are not able to do by April 20th.

#### Work needed

- This team is responsible for updating the Chapter 3 GI Bill (1990) form to send direct deposit info to CorpDB.
- According to Riley Ross as of 2/20/24, the intent is for the weekend of 4/27 to cutover the backend of the 1990 form so that instead of updating the BDN, it updates Corporate.

#### Risks

- If this work can't or doesn't happen in time, it reflects badly on VA.gov even though this works sits outside of OCTO. We need to clearly communicate with Riley and team so we can support the 1990 form in whatever way is needed.

### 526/527 team

#### Overview

Lead: Julie Strothman

For both 526 (Disability Comp) and 527 (Pension):
- A VSR updates CorpDB when an award is made: They replace whatever's on file with the account specified in the claim.
- The VSR includes a sentence in the award highlighting that we used the direct deposit information they provided on the application. This will override the current direct deposit account they have on file if it is different from what is submitted in the most-recent claim.

#### Work needed

- On the 526, we already note that this new account won't be updated in all VA systems right away. There may be some updates to the language here. Similar language should be added to the 527.
  - Note: This can be done any time and is not affected by the April 20th deadline. 
- For both 526 & 527, we think we should add something to the effect of "Do you already receive GI Bill or other education payments? If you get a new compensation award based on this application, your direct deposit information will be updated to this account for your GI Bill payment too."
  - This should be done after the April 20th launch, as this information isn't true until the edu direct deposit data migrates to CorpDB.

## Outstanding questions
Answers in italics 
### Code

- Exactly what needs to be updated, and how long will this take? _see timeline below, we should be running again by mid May 2024_
- Will education benefits be allowed `add` functionality now in addition to `edit`? _Yes_
- What can we get done by April 20th without potentially compromising the veteran experience? _We'll add an alert and EDU updates will go offline from 4/20 until roughtly mid-May_

### Testing/Launch

- How can we adequately test this code end-to-end? _We will have a round of UAT testing with users who have C&P, EDU, both benefits, and neither of these benefits._ 
- Is there any way to do a phased launch (likely no), or do we have to cut over at 100%? _Yes_
     - when shutting down the page we'll have to flip that to 100% _We're shutting down the entire page on 4/26 given concerns uncovered in our QA testing. We've [documented launch concerns here](https://docs.google.com/document/d/1EQmmak_0xuhhxS7iFp0AxUV2qW07OAGor5aWtUUwusc/edit?usp=sharing)_
     - for migrating to the single form, we could do a phased launch _Yes_
- Given that BDN is migrating to CoprDB on a Saturday, how should we handle this on the frontend so we are not updating our interface on a Friday/over a weekend when no one is here to monitor the launch? _This is no longer a concern as we've determined the entire page will need to be turned off starting on the 26th before we can begin UAT testing on the 29th_

### Contact centers

- What capabilities, if any, will the contact centers have to update edu information after April 20th?
- As a result, how should we be directing people on VA.gov?
#### _Answers for CC_ 
- _Contact centers will be able to update the information, we've been instructed to send veterans to the national hotline and the call center will forward the data to the Education Call Centers (ECC)_


## Assumptions and risks

### Lighthouse

We will only be able to meet the April 20th deadline if the following is true for Lighthouse:

1. We are not pointing to a new BGS service and using the existing endpoint
2. We are not removing any of the checks we have in place eg. BNPayment, has index, has address as we cant assess what impact this has on the existing service
3. We will provide the Open sec on the new endpoint, but cant commit to having documentation updated
4. Any additional work identified will require additional time

### BGS

As of 2.21.24, we are awaiting an estimate from BGS, but the following release schedule puts our work at risk:

- BGS requires 1-month lead-time for anything going to production.
- In order to meet the April 20th target date, we would need all changes to be in BGS, Lighthouse, and VA.gov and fully tested **by March 13th** in order to meet the next prod release of **April 13th**.
- This would only leave us about 3 weeks for VA.gov, BGS, and Lighthouse to do all of our work and testing, which is unrealistic.

## Comms schedule

VBA will be sending out comms to folks who have both comp & pen and education benefits to let them know they need to reconcile their bank information. The points of contact are Catherine Trombley and Lindsey Slaughter and can be reached via Teams or email. This is the schedule they will be using for weekly comms:

- Monday- Email to School Certifying Officials w/ updated lists (if possible)
- Tuesday- Text message to students remaining
- Wednesday- robo-dial to students remaining (when avail)
- Thursday- Email to students remaining
- Friday- robo-dial to students remaining (when avail)


<details>

<summary><h3>Initial 2.20.24 email issue</h3></summary>

On 2.20.24, VBA sent an email blast at 4:50 PM ET to at least 50K veterans letting them know they need to update their C&P and edu direct deposit info so it matches. This resulted in a huge amount of traffic -- and lots of errors -- as a result of us not being prepared for the traffic increase. Most importantly, everything was resolved and back to normal quickly, as we worked with Lighthouse to increase the rate limit for C&P updates, which is what was causing the errors. [Details here](https://dsva.slack.com/archives/C03P6C3FYMR/p1708467123800059).

- [Datadog: Direct deposit data on 2.20.24 from 2:00 PM ET to 4:00 PM ET](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?refresh_mode=paused&view=spans&from_ts=1708455600000&to_ts=1708462800000&live=false)
- [Datadog: Direct deposit data on 2.20.24 from 5:00 PM ET to 7:00 PM ET](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?refresh_mode=paused&view=spans&from_ts=1708466400000&to_ts=1708473600000&live=false)

#### C&P retrievals

For C&P retrievals, we roughly doubled the amount of retrievals we got from 2:00 - 4:00 ET to 5:00 - 7:00 ET, which is shortly after the email blast went out. Our success rate was only about 70% during the first two hours after the email blast went out.

#### C&P Updates

The email blast resulted in roughly **four-times** the amount of updates we normally receive in a two hour period for comp & pen direct deposit. The rate limit was raised around 6:00 pm ET, which is when errors dropped off dramatically.  Our success rate was only about 60% during the first two hours after the email blast went out.
#### Edu retrievals

Education direct deposit retrievals roughly doubled from the two hours prior to the email blast to the two hours after. The success rate was about 99%, as this endpoint didn't have the same rate limit issue.

#### Edu updates

Education direct deposit updates went up dramatically from the two hours prior to the email blast to the two hours after. We saw almost **17-times** the amount of updates we normally do. The success rate was about 98%, as this endpoint didn't have the same rate limit issue.

</details>

## Timeline

This is a rough timeline of how this might work assuming there are no roadblocks and everything goes according to plan.


|Week| Anticipated Tasks | Actual/Changes |
|----|-------|---|
|Week 1 (Feb 19 -23)| Planning; Discovery||
|Week 2 (Feb 26 - Mar 1)|BGS kicks off work; Collab kickoff; VA.gov design begins||
|Week 3 (Mar 4-8)| BGS work complete; VA.gov design complete||
|Week 4 (Mar 11 - 15| Lighthouse work begins; VA.gov frontend build begins||
|Week 5 (Mar 18 - 22)| Lighthouse work complete; VA.gov frontend build complete EXCEPT for connecting frontend to backend|BGS code complete|
|Week 6 (Mar 25 - 29)| VA.gov backend build ||
|Week 7 (Apr 1 - 5)| VA.gov frontend connected to backend||
|Week 8 (Apr 8 - 12)|VA.gov QA; UAT prep|BGS code launched Sunday 4/14|
|Week 9 (Apr 15 - 20)| Staging review; UAT recruiting; Security review; BDN migrates to CorpDB on April 20th|UAT proposal submitted, turn of EDU section on 4/20|
|Week 10 (Apr 22 - 26)| BGS code complete date for CI is April 25th|Staging Review 4/23, ~4/26 va.gov to turn off the entire page, BDN migrates to CorpDB 4/27~ The migration didn't go as well as planned and may take another month. As updates trickle in we'll update the timeline|
|Week 11 (Apr 29 - May 3)|On hold waiting for BGS CI|~Running UAT, can only happen post migration, BIS and LH working on an additional indicator, if all goes well we'll launch as soon as we recieve positive results, ideally relaunching the page starting on 5/1 if possible~|
|Week 12 (May 6 - 10)|BGS CI launch May 11th|~BIS to launch additional C&P inidicator in May~|
|Week 13 (May 13 - 17)|UAT; VA.gov goes to production|~testing needed again for the C&P indicator~|
|Week 14 (May 20 - 24)| | |
|Week 15 (May 27 - 31)| | |
|Week 16 (June 3 - 7)| | |


### Proposed collab cycle touchpoints

Given the short timeline, I propose that we only go through the following collab cycle touchpoints.

- [Kickoff](https://dsva.slack.com/archives/C06JV0KHZNF/p1708460001226429)
- [Staging review](https://dsva.slack.com/archives/C06JV0KHZNF/p1713214486307419)
- [Privacy/Security review](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/1625)
- [Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76630) 

#### What about design and research touchpoints?

Given the tight timeline, I think we need to make our best guess on design. We can gather *light* usability feedback during UAT, and implement improvements post-launch. We can also do more comprehensive testing and updates post-launch. The only pre-launch issues we should be concerned with are accessibility or security launch blockers.

## Measuring Success 
Since this feature already exists, we're simply modifying from two forms to one, the main thing we're going to monitor is for any adverse performance metrics.  

- [Direct deposit for comp & pen Goggle Analytics (GA) dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Direct deposit for edu GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/qEpkRFroTOSTpgaBDHXK4A/a50123418w177519031p176188361/)

## Key Deliverables / Artifacts 
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76202)
- [Mural Note Taking](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707938676024/48a9e34150b8a3058c8709b241373cb9515afee6?sender=uaa72d11015d3f7c704a64191)
- [Current User Flow](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-1&mode=design&t=PHWgrsxoEHDjP36q-0)
- [QA spreadsheet](https://docs.google.com/spreadsheets/d/1rOD8w0YNTlfbefVK7t2RsWoYK_ui1gTkVhCXlJE5VDg/edit#gid=0)
- [QA folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/ch33-bdn-corpdb-migration/qa)
- [Pre-migration User Flow](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-1&mode=design&t=PHWgrsxoEHDjP36q-0) 
- slack channel [#edu-direct-deposit-migration](https://dsva.slack.com/archives/C06JV0KHZNF)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/ch33-bdn-corpdb-migration/release-plan/README.md)
- [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/1625)

## Design Links 
|Figma Page|Description|
|:--|:--|
|[EDU Migration Notice](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=142-8730&mode=design&t=JuuOAYyUZN5gcDIC-0)|Alert displaying from mid-March until 4/20 advising users of the pending migration|
|[EDU Downtime](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=234-1394&mode=design&t=JuuOAYyUZN5gcDIC-0)|Updated UI for EDU from blocking users from online updates, directs users to call|
|[Post Migration Single Form](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=239-9210&mode=design&t=JuuOAYyUZN5gcDIC-0)|After Ch33 benefits migrate to CorpDB, we'll have a new UI that uses one form to update EDU and C&P|
 

## Key Dates 
- February 15, 2024: First alerted of the BDN > CorpDB migration
- Febryuary 16, 2024: Initial calls with Lighthouse, BGS, and stakeholders
- February 20, 2024: Formal planning and coordination begins
- April 20, 2024: Set date for migration of BDN to CorpDB
- April 26, 2024: Last day anything can be sent to BDN
