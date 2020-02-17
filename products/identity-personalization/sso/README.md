# SSO Product Outline

_Last updated ~October 2019_


# Context


## Background

VA.gov aims to provide a unified digital portal with access to all VA services. In certain instances, however, Veterans are directed out of the VA.gov platform in order to message their healthcare provider (MHV), check on the status of benefits claims (eBenefits), and more. 

VA.gov, MHV, and eBenefits each have separate but overlapping login flows. With VA.gov and MHV, users have the option to log in using one of 3 credentials: ID.me (a third party identity provider), MHV's native credential, or DS Logon (an authentication system run by DoD). Login to eBenefits occurs solely through the DS Logon credential. 


## Users

*   Anyone logging in to access VA services, including Veterans, dependents, caregivers, clinicians, and other agency users (DoD, DHS)


## Business Stakeholders

*   Technical staff: Developers maintaining authentication and identity services within and across each platform


##  Existing user pain points



1. **Many variations of navigating from one site to another among VA.gov, MHV, and eBenefits do not persist a user's session.**

    **This is the case  for both inter-site linking and direct navigation (e.g. user opening a new tab)**

*   Navigation _from_ any site _to_ VA.gov does not result in the user being logged in.
*   Navigation _from_ VA.gov _to_ eBenefits does not result in the user being logged in.
*   Navigation _from_ VA.gov _to_ MHV works (user is logged in) if the user has an existing MHV account ID that can be resolved in MVI.
*   Navigation _from_ MHV _to_ eBenefits works (user is logged in) but only for DS Logon credentials, and probably not via direct navigation.
2. **Users navigating from any site to MHV may be asked to create an additional MHV credential even if sufficient information exists to sign them in.**
3. **Users see a different sign-in look and feel across VA.gov, MHV, eBenefits, and AccessVA.**


## Business pain points



*   Developers of each of these sites bear the costs of the complexity and variance of log in options


# Strategy


## Mission

_The problem we’re trying to solve; why we’re doing this work. Describes an intent and sets a direction. How might we...?_

There are a number of instances when a user who has already logged in on VA.gov, eBenefits, or MHV, will need to log in again if they move from one platform to another. This results in a fragmented experience and may discourage users from interacting with the VA online. How might we reduce this friction between platforms to make it easier for users to access services?


## Vision

_What we hope to achieve, or enable, through our work. A vision should be ambitious and serve as a rallying point for the team._

To enable session continuity across VA.gov, MHV, eBenefits, and future platforms (such as the Cerner portal aka _My Health VA_) so that users moving from one site to another do not need to reauthenticate.


## North Star Metric

_The key result we will track and hope to see from our work_

Reduced re-directs to login pages for authenticated users (likely VA.gov > MHV and VA.gov > eBenefits)


## Desired Outcomes

**Hypothesis:**

Creating session continuity across sites will lower the barriers to entry to accessing digital services and improve overall satisfaction of users

**Objectives**

1. Full SSO interoperability between VA.gov and MHV, between VA.gov and eBenefits, and between MHV and eBenefits

2. SSO solution that will ensure session continuity between existing sites and new platforms (such as Cerner)

**KPIs (in addition to north star metric)**

*   lower traffic to MHV Create Account page and eBenefits login page
*   reduced bounce rate for MHV Create Account page and eBenefits login page
*   reduced calls to help desk about login-related issues


