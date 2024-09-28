# Data and Analytics: User Behavior

## Overview
At a high level, the primary question we need to answer is this – **are we seeing a reduction in the use of the legacy credentials and an increase in use of the modern credentials such that we can comfortably retire the legacy credentials on the desired timeline?**

To help us answer the above, we need to be able to clearly answer the following questions:

* How many authentications are we seeing across VA web/mobile properties for each credential service provider (DSL, MHV, ID.me, Login.gov)?
* How many users are signing into VA web/mobile properties with each credential type?
* How many users have each credential type? Of those users, how many who only have the legacy credentials at baseline sign up for the modern credentials through the transition period?,

Additionally, a secondary question related to user behavior we’d like to be able to answer is this:

* By reducing the number of credential service providers, have we improved the user experience of sign in?


## Data Points

Jump to:

* [Authentication totals](#authentication-totals)
* [Credential usage](#credential-usage)
* [Credential ownership](#credential-ownership)
  * [Email addresses](#email-addresses)
* [User experience impact](#user-experience-impact)

### Authentication Totals

> How many authentications are we seeing across VA web/mobile properties for each credential service provider (DSL, MHV, ID.me, Login.gov)?

**Data points needed:**

* Total DSL authentications across VA web/mobile properties
* Total MHV authentications across VA web /mobile properties
* Total ID.me authentications across VA web/mobile properties
* Total Login.gov authentications across VA web /mobile properties

**How we might get this data:**

Given that there are multiple authentication partners within VA who have overlapping data sets, Tom recommends requesting a weekly report from Login.gov, ID.me, and MHV to get insight into their metrics. He also recommends OCTO count all authentications at the point of integration instead of at the application level, which has historically caused issues because of how applications have overlapping, non-unique numbers that are hard to parse. Through having both CSP data and our data, we can compare and then see what we’re missing.

### Credential Usage

> How many users are signing into VA web/mobile properties with each credential type?

**Data points needed:**

* Number of unique users who have used DSL to sign into VA web/mobile properties
* Number of unique users who have used MHV to sign into VA web/mobile properties
* Number of unique users who have used ID.me to sign into VA web/mobile properties
* Number of unique users who have used Login.gov to sign into VA web/mobile properties

**How we might get this data:**

Tom recommends a similar approach to what he suggested for authentication data, though he notes that MPI is the best data source for users. Not all MVH data is in MPI, however, so we would have to do an overlay and comparison based on ICN.

### Credential Ownership

> How many users have each credential type? Of those users, how many who only have the legacy credentials at baseline sign up for the modern credentials through the transition period?

**Data points needed:**

Number of verified users (with ICN) who have:

* **Only** a MHV account, and no modern credential
* **Only** a DS Logon account, and no modern credential
* **Either** a MHV or DS Logon account, and no modern credential
* **Both** a MHV or DS Logon account, and no modern credential
* **A verified** Login.gov account
* **A verified** ID.me account
* **Either** a verified Login.gov and ID.me account
* **Both** a verified Login.gov and ID.me account

**How we might get this data:**

We would take the same approach here that we would for the user data above.

#### Email addresses

>What are the email addresses of the users who only have MHV or DSL and have not yet signed up for a modern credential?**

**Data points needed:**

* Email addresses for users who have an MHV credential and neither ID.me or Login.gov
* Email addresses for users who have a DSL credential and neither ID.me or Login.gov

**How we might get this data:**

Tom says this data is available by accessing user data in MPI, getting a list of user ICNs, and doing an email look up for each. Because email is not a requirement for a MHV account, we won't have one for everybody and will have to rely on other means for outreach (e.g. phone, mail, see if a MHVC knows them and can do direct outreach).

### User experience impact

> By reducing the number of credential service providers, have we improved the user experience of sign in?

**Data points needed:**

* Customer satisfaction scores for authentication/login.

**How we might get this data:**

This data currently lives within Medallia, and is viewable in this [all-VA.gov report](https://va-gov.domo.com/page/1030131175). I’m unsure of the specifics around how this is aggregated, but it may be possible to easily pull this into another report.