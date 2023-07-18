## 526EZ Entry Error Discovery

Ticket https://github.com/department-of-veterans-affairs/va.gov-team/issues/56676

### Summary

Several surveyed veterans report being prevented from beginning the Form 526 flow for applying for disability benefits because of missing identification information in the VA system.

When this happens, they are prompted to contact a call center and given opaque and incorrect messaging about what to tell a representative to resolve the problem.

<img width="894" alt="Screenshot 2023-05-26 at 11 22 21 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/8537428/fb370e3d-335c-4450-8807-67307f831186">

### Approach

I reviewed the branching logic in both the **vets-api** and **vets-website** repos, cross referencing the message components in the front end with the data that drives them on the backend . Note there is some abstraction happening on the back end that makes this difficult to track this down. The front end messages are based on a list of “services” on a user profile (“evss-claims” etc.), but in the back end **those represent missing data on the user that the front end probably has anyway (dob, paritcipant_id)**


### Findings Summary


After documenting how and when these messages are displayed, I’m recommending:

1. At a minimum, changes are made in both vets-website and potentially vets-api to give veterans more detail on exactly what information the VA is missing. I’ve begun architecting the solution to this which will live in an epic in ZenHub
2. (More extensive) we could provide a way for them to provide this data in a form but the existing architecture makes this a larger undertaking. And some of the data the veteran may not have access to. We could ask for SSN or DOB at least if those are missing.
3. Additionally, we could investigate why this data is missing in the first place. Is there somewhere else in the system it should be created?
4. Finally, it may be worth auditing what identification information is actually needed downstream of a claim; some of these data points seem redundant.

### Overview

As briefed in the discovery ticket, there are several versions of this message, all of which are generally unhelpful/inaccurate. These messages are displayed when a veteran’s user record in the vets-api is missing some of the following personal data:

* Date of Birth
* SSN
* BIRLS ID (Beneficiary Identification and Records Locator (Sub)System)
* EDIPI (Electronic Data Interchange Personal Identifier)
* Participant ID

However, the messaging often doesn’t specify which data is missing, and in some cases can misreport what the issue is. Additionally, these messages vary in which phone numbers they provide for the user (note phone numbers are referenced dynamically in the code and pulled from the component library @department-of-veterans-affairs/component-library/contacts’):

---

#### 1. Date of birth missing
"We need some information for your application

We’re sorry. We can’t find your date of birth in our records. You won’t
be able to continue your application for disability compensation until
you update your VA account with your date of birth.

Please call us at
CONTACTS.VA_BENEFITS
CONTACTS['711']

We’re here Monday through Friday, 8:00 a.m. to 9:00 9:00 p.m. ET."

**Note this message is accurate in describing the missing data.**

---
#### 2. DOB present, any of these missing: EDIPI, SSN, or Participant ID:

"We need more information for your application

We don’t have all of your ID information for your account. We need this
information before you can file for disability compensation. To update your
account, please call the {srSubstitute('MyVA411', 'My V. A. 4 1 1.')}{' '}
main information line at <va-telephone contact={CONTACTS.HELP_DESK} /> (
<va-telephone contact={CONTACTS['711']} tty />) and select 0. We’re here
24 hours a day, 7 days a week.

Tell the representative that you may be missing your EDIPI number or BIRLS ID"

**Note BIRLS ID is incorrect here and SSN is not mentioned at all. Also note contact numbers are different - this number is for the help desk, not VA benefits, and the hours are different**

---

#### 3. All of the above present, but also missing BIRLS ID:

"We need some information for your application

We need more information from you before you can file for disability compensation.
. Please call Veterans Benefits Assistance at{' '}
<va-telephone contact={CONTACTS.VA_BENEFITS} /> (
<va-telephone contact={CONTACTS['711']} tty />
), Monday through Friday, 8:00 a.m. to 9:00 p.m. ET to update your
Account."

**Note this message does not provide any helpful information on what is missing.**


### Recommendations (in order of commitment)

#### 1. Standardize boilerplate form language

At the very least, we should settle on shared boilerplate language at the top of all of these messages, regardless of what data is missing. Something like this:

We don’t have all of your ID information for your account. We need this
information before you can file for disability compensation. To update your
account, please call …


#### 2. Display exactly what data is missing at the bottom

Ex. Tell the representative that we may be missing your SSN and EDIPI

Note it feels more appropriate to say “we” may be missing your data, rather than “you” as it says now. Presumably if they have signed into VA.gov, there is a reasonable expectation we have the data we need for them to complete an application. If we’re missing it somewhere, it’s likely because record keeping elsewhere in the VA system isn’t validating or creating the data.

Note this approach requires a decent amount of refactoring but not an extensive amount.

#### 3. For information the veteran might have, such as DOB and SSN, provide a way for them to submit that data.

Note I believe this would probably require building a separate form and more extensive refactoring.








