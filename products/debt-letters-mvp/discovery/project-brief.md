# Debt Letters Discovery Project Brief

This doc should be filled out during different stages of the discovery sprint process. See the [Discovery Sprint How-to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) for details on the whole process.

## PROJECT BRIEF
_To be filled out with a VA.gov lead prior to starting discovery work._

### Project Name
Debt Letters MVP

### Problem Statement / How Might We statements
MVP:
- How might we better inform Veterans of their debts to the VA? 
- How might we make it simpler for Veterans to **view** their debts to the VA?

Vision:
- How might we better inform Veterans of their debts to the VA? 
- How might we make it simpler for Veterans to **view, interpret, and pay** their debts to the VA?

### What Sprint Teams Are Associated with this Discovery? 
* Benefits and Memorials 2

### Discovery Sprint Roles
See also: Discovery Sprint How-to about [makeup of a discovery sprint team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md).

* Product Lead: Matt Self 
* Discovery Sprint Lead: Leah Keeler
* Engineer: 
* Designer: Rebecca Walsh & Riley Orr
* Researcher: Rebecca Walsh & Riley Orr
* Other people from the Sprint Team:
* SME: 

### Stakeholders
#### VA business owner: 
Jason Hoge (?)

#### Stakeholders who will be involved or interviewed:
|                     | Title                                      | Project Role               | Meeting Notes | Interview Notes |
|---------------------|--------------------------------------------|----------------------------|---------------|-----------------|
| Jason Hoge          | Chief of Treasury, Education, and Outreach |                            |               |                 |
| Minh Bang           | Program Analyst                            | Technical SME              |               |                 |
| Thomas Corley       | IT Project Manager                         |                            |               |                 |
| Melissa Rebstock    | VEO Executive Partner                      |                            |               |                 |
| Shay Norton-Leonard |                                            | Education Service Debt POC |               |                 |
| Sarah Haddock       |                                            |                            |               |                 |
| Todd Bruggeman      |                                            |                            |               |                 |
| Jennifer Powell     |                                            |                            |               |                 |
| Paul Kimball        |                                            |                            |               |                 |
| Joseph Veit         |                                            |                            |               |                 |
  


## DISCOVERY PLANNING
_To be filled out by Discovery Sprint Team._

### Project Details

#### What do we know?
* The VA sends out millions of letters (~2.5MM) yearly and have approximately 600,000-700,000 accounts of active debt at a time.
* Debts originate from several departments and for many reasons:
  * Education 
  * Compensation and Pensions
  * ???
* Before sending the debt to DMC, departments often try to recoup the debt on their own first, so Veterans may have recieved prior debt notices before DMC steps in.
* Once a debt _is_ sent to DMC, the DMC has 5 letter templates that are sent out.
  * If a Veteran has a benefit to offset in order to pay the debt (Active Debtor), one letter is sent to the Veteran:
    * 101 - Informs the Veteran of the debt and automatic 12-month repayment plan.
    * _Note: Veterans are able to negotiate different payment plans with the DMC if need be._
  * If a Veteran does not have a benefit to offset (Inactive Debtor), three letters will be sent ot the Veteran:
    * 100 - Informs the Veteran of the debt and repayment information
    * 117 - 30 days after, a reminder 
    * 123 - 30 days after, an overview of the next steps of the debt (i.e. being sent to Treasury, credit bureaus)
  * If a Veteran's debt increases, they recieve another letter (130)
* The DMC tries to recoup the debt for 120 days before:
  * The debt must be reported to credit bureaus, causing a credit score decrease for the Veteran
  * The debt must be sent to the Department of Treasury, which can look for other sources of income to debit. A debt going to the Department of Treasury can take on a 30-32% fee to the debtor.
* A debt will remain in the VA's system indefinitely until it is paid. A debt deemed 'uncollectible' can go inactive until the Veteran receives benefits again.

#### What don't we know?
##### Business Side:
* Should we be taking into account letters sent prior to DMC's?
* Where are all of the payments happening?
* Can these letters be delivered as HTML pages instead of PDFs?
* How much letter history are we going to show?

##### Technical Side:
* Can letters be categorized and put into the correct sequence?
* Does PDF preview exist?

##### Veteran Side:
* Why do Veterans seek out historical letters online?
* What sort of goals do Veterans have when seeking historical letters?
* What are Veteran's perspectives on:
  * Incurring debt with the VA
  * The letters themselves
  * Paying the debt (ability to do so, knowledge of doing so, ease of doing so)

#### Are any of the above assumptions that need to be verified?
* Do Veterans want or need to see actual PDF letters in order to achieve their goals?

#### How are we going to find out answers?
Now:
* In-depth key stakeholder interviews
* Call center interviews

Later:
* Interviews at the beginning of each usability session

#### What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
* Any Veteran who has incurred a debt with the VA

#### Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
**Now:**
* Stakeholders (list TBD)
* Call center folks who deal with debt

**Later:**
* Veterans who have debts with the VA (a mixture of inactive and active debtors)

#### What secondary research should we do (google, facebook, internal documents)?
* [Review letters issued](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp/discovery/letter-samples)
* Review reports about debt over time
* Review any available call center records surrounding debt letters

#### Are there any intentional project constraints (things we're intentionally deeming out of scope)?
* Letters and processes that come before DMC intervention (?)
* Letters outside of the 5 standard templates (?)

#### Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?
* COVID-19 may impact scheduling with stakeholders, call center employees, and Veterans difficult.
* Complicated backend subtleties revealed over time may impact potential design directions.


### Timeline
See also: [sample discovery sprint schedule](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/sample-discovery-sprint-schedule.md).

* Are there any hard and fast deadlines for completing the discovery work?
* When will the following take place?
  * Discovery Prep: Sprint 20 (4/8/20 - 4/14/20)
  * Discovery (ideally 1-2 weeks): Sprint 21 (4/15/20 - 4/28/20)
  * User Research: Sprint 2
  * Complete & Readout: 

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)
