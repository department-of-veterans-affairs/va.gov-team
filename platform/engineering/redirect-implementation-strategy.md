# Redirect Implementation Strategy

Last update: 1/14/20 — see change history below

---

## About this doc

If you are a team member interested in requesting a URL redirect, please see the [Requesting Redirects document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md). **All URL redirects are routed through the platform team and handed off to the appropriate engineer to implement.**

This document outlines our current redirect implementation strategy, as well as areas where we hope to refine the process. This document replaces the previous [Redirects Strategy Suggestion](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/redirects-strategy.md).

### User story

As a veteran, I want to make sure that my old www.something.va.gov or www.va.gov/something bookmarks take me to the correct resources on www.va.gov so that I can discover/apply/track/manage my benefits.

---

## Examples of redirects - current approach

|Current Page/URL | Redirect to | Type of redirect|
|---|---|---|
|www.va.gov/*| www.va.gov/* | Server side redirect|
|benefits.va.gov/* | www.va.gov/* | Client side page-level redirect (temporary solution)|
|pittsburgh.va.gov/* | www.va.gov/* | Server side for entire subdomain (not page-level)|
|ebenefits.va.gov/* | www.va.gov/* | Do not expect to route this through platform team|

**The following subdomains are ones where we are able to implement server-side redirects.**

- pittsburgh.va.gov _VSP team is gaining access to this domain December 2019._
- explore.va.gov _Was a .NET website. VSA Public Websites implemented a full domain redirect by modifying the .NET web.config (XML file)._

_Upcoming redirects for entire subdomains, planned to be done server-side in 2020._
- www.altoona.va.gov
- www.coatesville.va.gov
- www.philadelphia.va.gov
- www.erie.va.gov
- www.lebanon.va.gov
- www.butler.va.gov
- www.wilkes-barre.va.gov
- www.wilmington.va.gov
- www.montana.va.gov

---

## Notes on implementation by type

![Redirect Implementation Strategy Flow Chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/redirect-implementation-workflow.png)

### 1) Server-side redirects within www.va.gov 

_When to do this?_
- This is the default, preferred path for www.va.gov/* -> www.va.gov/*
- Actual example: www.va.gov/healthbenefits/index.asp  →  www.va.gov/health-care
- Include pages managed within the Drupal CMS (which handles URL changes but does not deploy redirects to the website as of 12/13/19) or not

_How does this work technically?_
- Traffic to www.va.gov hits the VA gateway, is routed to our reverse proxy, where it is redirected according to rules that our operations team maintains in the [devops repo](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml#L69). 
- Note that redirects get pushed out with deployment of “revproxy” — different schedule from vets-website.
- If the initiating page is managed by the Drupal CMS, the URL change is made in the CMS _and_ the redirect is added to the devops repo

_What team is responsible?_
- Work is routed from VSP to VSA Public Websites team for implementation (label ticket with vsa-public-websites). VSA Public Websites team to pull in VSP Ops as needed. Requesting team (whether that is VSA Public Websites or another VFS team) is responsible for communication with VA stakeholders as needed.

_Any other notes_
- Level of difficulty: low
- Redirects for pages within the Drupal CMS require very close coordination between the engineer making the change in the devops repo and the person changing the URL within the Drupal CMS. [Here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/redirect-implementation-timing-drupal-2019.png) is a diagram made by the CMS team in December 2019, showing the current redirect scenarios involving Drupal.
- The Drupal-specific timing difficulties here will be addressed when VSP Ops works on their initiative to make Drupal the source of truth for redirects in 2020.

### 2) Client-side redirects within www.va.gov

_When to do this?_
- We shouldn’t do this, because server-side redirects are the preferred method and we have the technical ability to always do these server-side. If this type of redirect comes up, consult VSP Ops and VSA Public Websites for instruction.

_How does this work technically?_
- N/A

_What team is responsible?_
- VSP Ops and VSA Public Websites to provide expertise if this comes up because it shouldn’t need to exist.

_Any other notes_
- The previous list of this type of redirects have been re-implemented server-side (October/November 2019). 
- Level of difficulty: N/A

### 3) Server-side redirects from subdomains (subdomain.va.gov)

_When to do this?_
- Server-side redirects are preferred when we have the required technical contacts and access. For page-level redirects from subdomains, we will use client-side redirects temporarily. For redirects of entire subdomains, server-side (as outlined here) is strongly preferred/required. 

_How does this work technically?_
- Option 1: The platform team takes control of the entire subdomain. Example: pittsburgh.va.gov (traffic to pittsburgh.va.gov hits the VA gateway, is routed to other servers, where a server-side permanent redirect is put in place that forwards the traffic along to a www.va.gov route and our servers)
- Option 2: For a .NET website, modify the .NET web.config (XML file). Example: explore.va.gov
- Option 3(?): Can a server-side redirect be implemented in TeamSite?

_What team is responsible?_
- Collaboration between VSP Ops, DEPO, and whatever veteran-facing team is requesting the redirect, if applicable (such as VSA facility pages). 

_Any other notes?_
- Note that in these full domain redirect cases, ATO and ESECC approval must be considered
- For the majority of page-level redirects from subdomains (subdomain.va.gov), this is not feasible in the short term because it requires access to and relationships with technical stakeholders on the relevant teams. These contacts should be actively sought out via DEPO.
- Level of difficulty: high (dependent on VA stakeholders)

### 4) Client-side redirects for subdomains (subdomain.va.gov)

_When to do this?_
- When a page-level redirect is needed on a subdomain (subdomain.va.gov) when we don’t have a technical or TeamSite contact to help us implement that server-side, and when the redirect needs to happen before such contact can be made.

_How does this work technically?_
- [Vets-website domains list](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json) (This is a list of domains that load our header/footer, but is not comprehensive of domains that load our JavaScript).
- [Client-side redirects file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/disabilityRedirects.json)

1. A request comes in for benefits.va.gov
2. The page at benefits.va.gov is returned to the user's browser
3. The page begins loading, including downloading images, and JavaScript files
4. Our JavaScript code for rendering the WBC header/footer is loaded into the user's browser
5. Our JavaScript code begins executing -
   - Is there a client-side redirect for this page? If so, do the redirect
   - Is this subdomain supposed to render our header/footer? If so, render it.
   - Otherwise, do nothing. Just let the page render as usual.

_What team is responsible?_
- Work is routed from VSP to VSA Public Websites team for implementation (label ticket with vsa-public-websites). VSA Public Websites team to pull in VSP Ops as needed. Requesting team (whether that is VSA Public Websites or another VFS team) is responsible for communication with VA stakeholders as needed.

_Any other notes_
- This is not ideal, as it depends on our JavaScript running correctly in order for a user to be redirected properly. It also depends on the legacy page staying live. Should be considered temporary solution.
- In November 2019, Public Websites team worked with TeamSite stakeholder Sandy Tadeo to test archiving a TeamSite page that had a client side redirect on it. The result was that sometimes the page would load a 404 for the user before redirecting. As a result of this test, the team determined **not** to move forward with archiving redirected TeamSite pages. Instead, Public Websites will implement the client side redirect, with additional ask of VA stakeholder to: A) Replace their page content with a 'redirect' message and B) Update their print materials and nav links with the new URL
- Level of difficulty: low


---

## Areas to refine/things to do

- Improve the redirect process from subdomains such that server-side redirects can be the default.
- Make contacts and relationships with TeamSite engineers ~to explore how to archive or delete legacy pages so that content editors don’t continue to update them.~
- ~Find out what happens when a TeamSite page with a client-side redirect to www.va.gov/ is archived or deleted.~
- _Above points (crossed out) have been tested 11/19, we won't be deleting or archiving, see full details above under "4) Client-side redirects for subdomains - Any other notes"_
- Consider using welcome modals for cases where an entire subdomain is redirected. Explore.va.gov does this via [query parameter](https://www.va.gov/?from=explore.va.gov).
- Gain a better understanding of analytics and SEO impacts of implementing and changing redirects.
- Make Drupal CMS the source of truth for server-side www.va.gov/ redirects.
- Document prefix vs. match implementation and where redirects are stored (to be linked in this document). 
- Investigate Gateway redirects as another option.
- Investigate what our process was in order to get our header/footer JavaScript file included in TeamSite pages (which we now also use for client-side redirects). Maybe there's a clue there as to how to implement server-side redirects for subdomains

## Change history

_1/13/20 — Megan made some tweaks for clarification._

_12/13/19 — Megan updated to be inclusive of when URL changes are made in the Drupal CMS, which currently just fits into the server-side redirects within va.gov process below._

_11/26/19 — Team met to review process and ensure that everyone's on the same page. Megan Kelley, Nick Sullivan, Wyatt Walter, Jennifer Lee, Patrick Bateman, Mikki Northuis, TJ Rice, Kara Kemahli, Bill Fienberg were present._ 
