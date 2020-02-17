# SSO Product Outline

_Last updated February 2020_

#### Communications
- Team Name: SSO/Login
- GitHub Label: SSO-Login
- Slack channel: DSVA #va-sso
- Product PoCs: Lauren Alexanderson

#### Team Members
- Product: Ambika Roos
- UX: Bridget Hapner
- Engineering: Patrick Vinograd, Eric Buckley, Dan Hinze


# Context


## Background

VA.gov aims to provide a unified digital portal with access to all VA services. In certain instances, however, Veterans are directed out of the VA.gov platform in order to message their healthcare provider (MHV), check on the status of benefits claims (eBenefits), or access health tools that have moved to My VA Health (Cerner).

VA.gov, MHV, and eBenefits each have separate but overlapping login flows. With VA.gov and MHV, users have the option to log in using one of 3 credentials: ID.me (a third party identity provider), MHV's native credential, or DS Logon (an authentication system run by DoD). Login to eBenefits occurs solely through the DS Logon credential. 


## Users

*   Anyone seeking to access authenticated VA services, including Veterans, dependents, caregivers, clinicians, and other agency users (DoD, DHS)

*   Technical staff: Developers maintaining authentication and identity services within and across each platform


##  Problem Statements


#### User Pain Points
1. **Many variations of navigating from one site to another among VA.gov, MHV, and eBenefits do not persist a user's session.**

    **This is the case  for both inter-site linking and direct navigation (e.g. user opening a new tab)**

*   Navigation _from_ any site _to_ VA.gov does not result in the user staying logged in.
*   Navigation _from_ VA.gov _to_ eBenefits does not result in the user staying logged in.
*   Navigation _from_ VA.gov _to_ MHV works (user remains logged in) if the user has an existing MHV account ID that can be resolved in MVI.
*   Navigation _from_ MHV _to_ eBenefits works (user is logged in) but only for DS Logon credentials, and probably not via direct navigation.
2. **Users navigating from any site to MHV may be asked to create an additional MHV credential even if sufficient information exists to sign them in.**
3. **Users see a different sign-in look and feel across VA.gov, MHV, eBenefits, and AccessVA.**


#### Business pain points



*   Developers of each of these sites bear the costs of the complexity and variance of log in options


# Strategy


## Mission

_The problem we’re trying to solve; why we’re doing this work. Describes an intent and sets a direction. How might we...?_

Navigating from VA.gov to eBenefits, MHV, or My VA Health can result in a fragmented experience that may discourage users from interacting with the VA online.


## Vision

_What we hope to achieve, or enable, through our work. A vision should be ambitious and serve as a rallying point for the team._

Seamless navigation for any user accessing health tools or benefits housed on multiple platforms (VA.gov, MHV, My VA Health).


## North Star Metric

_The key result we will track and hope to see from our work_

1. Reduced re-directs to login pages for authenticated users (likely VA.gov > MHV and VA.gov > eBenefits)
2. My VA Health?? (Standalone login page and updates to VA.gov Health pages)


## Desired Outcomes

**Hypothesis:**

1. Creating session continuity across sites will lower the barriers to entry to accessing digital services and improve overall satisfaction of users
2. Creating clear CTAs and messaging on VA.gov Health Pages will ease the transition for users who are patients at a Cerner facility and must therefore access their health tools via a new portal

**Objectives**

1. Full SSO interoperability between VA.gov, MHV, eBenefits, and My VA Health (Cerner): users moving from one site to another either by redirect, or by direct navigation (opening a new tab), do not need to re-authenticate
2. SSO solution that will ensure session continuity between existing sites and new platforms
3. Create a standalone, URL-based Login page that acts as the front door for Cerner health tools (and also acts as a landing page for users who decline EULA, do not have an EDIPI record, or who have logged out of Cerner)
4. Seamless redirects at the appropriate stages for authenticated users who need to move from VA.gov to My VA Health (Cerner) or to MHV from VA.gov health pages: users whose health tools are housed either in MHV or in My VA Health can easily access what they are looking for without needing to understand the intricacies of the difference between each platform

**KPIs (in addition to north star metric)**

*   lower traffic to MHV Create Account page and eBenefits login page
*   reduced bounce rate for MHV Create Account page and eBenefits login page
*   reduced calls to help desk about login-related issues


