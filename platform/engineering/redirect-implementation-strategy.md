# Redirect Implementation Strategy [DRAFT]

Created by: Mikki Northuis, Megan Kelley _(Wyatt, Nick, please add your name here when you’ve taken a look, made edits you want to make, and are ready to give this doc a thumbs up!)_

Last updated: 11/12/19

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
|benefits.va.gov/* | benefits.va.gov/* | Do not expect to route this through platform team|

**The following subdomains are ones where we are able to implement server-side redirects.**

- pittsburgh.va.gov _VSP team is gaining access to this domain December 2019._
- explore.va.gov _TeamSite owner implemented redirect in TeamSite_

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

### 1) Server-side redirects for www.va.gov 

_When to do this?_
- This is the default, preferred path for www.va.gov/* -> www.va.gov/*
- Actual example: www.va.gov/healthbenefits/index.asp  →  www.va.gov/health-care

_How does this work technically?_
- Should be implemented in Drupal CMS by end of year. 
- Traffic to www.va.gov hits the VA gateway, is routed to our reverse proxy, where it is redirected according to rules that our operations team maintains in the [devops repo](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml#L69). 
- Note that redirects get pushed out with deployment of “revproxy” — different schedule from vets-website.

_What team is responsible?_
- Work is routed from VSP to VSA Public Websites team for implementation (label ticket with vsa-public-websites). VSA Public Websites team to pull in VSP Ops as needed.

_Any other notes_
- Note that server-side redirects are “greedy” (your browser will never load a client-side redirect if it conflicts with the server-side)
- Level of difficulty: low

### 2) Client-side redirects for www.va.gov

_When to do this?_
- We shouldn’t do this. If this type of redirect comes up, consult VSP Ops and VSA Public Websites for instruction.

_How does this work technically?_

_What team is responsible?_
- VSP Ops and VSA Public Websites to provide expertise if this comes up because it shouldn’t need to exist.

_Any other notes_
- The previous list of this type of redirects have been re-implemented server-side (October/November 2019). 
- Level of difficulty: N/A

### 3) Server-side redirects for non-www. subdomains

_When to do this?_
- Server-side redirects are preferred when we have the required technical contacts and access. For page-level redirects from subdomains, we will use client-side redirects temporarily. For redirects of entire subdomains, server-side (as outlined here) is strongly preferred/required. 

_How does this work technically?_
- Option 1: The platform team takes control of the entire subdomain. Example: pittsburgh.va.gov (traffic to pittsburgh.va.gov hits the VA gateway, is routed to other servers, where a server-side permanent redirect is put in place that forwards the traffic along to a www.va.gov route and our servers)
- Option 2: A TeamSite owner implements the redirect in TeamSite. Example: explore.va.gov

_What team is responsible?_
- Collaboration between VSP Ops, DEPO, and whatever veteran-facing team is requesting the redirect, if applicable (such as VSA facility pages). 

_Any other notes?_
- Note that in these full domain redirect cases, ATO and ESECC approval must be considered
- For the majority of page-level redirects from non-www. subdomains, this is not feasible in the short term because it requires access to and relationships with technical stakeholders on the relevant teams. These contacts should be actively sought out via DEPO.
- Level of difficulty: high (dependent on VA stakeholders)

### 4) Client-side redirects for non-www. subdomains

_When to do this?_
- When a page-level redirect is needed on a non-www. subdomain when we don’t have a technical or TeamSite contact to help us implement that server-side, and when the redirect needs to happen before such contact can be made.

_How does this work technically?_
- [Vets-website domains list](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json) (may or may not be comprehensive).
- [Client-side redirects file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/disabilityRedirects.json)

1. A request comes in for benefits.va.gov, which lives on a server located on Mars
2. The page at benefits.va.gov is returned to the user's browser
3. The page begins loading, including downloading images, and JavaScript files
4. Our JavaScript code for rendering the WBC header/footer is loaded into the user's browser
5. Our JavaScript code begins executing -
   - Is there a client-side redirect for this page? If so, do the redirect
   - Is this subdomain supposed to render our header/footer? If so, render it.
   - Otherwise, do nothing. Just let the page render as usual.

_What team is responsible?_
- Work is routed from VSP to VSA Public Websites team for implementation (label ticket with vsa-public-websites). VSA Public Websites team to pull in VSP Ops as needed.

_Any other notes_
- This is not ideal, as it depends on the header/footer loading correctly in order for a user to be redirected properly. It also depends on the legacy page staying live (we suspect the legacy page can be archived but not deleted from TeamSite; that needs to be validated). Should be considered temporary solution.
- Level of difficulty: low


---

## Areas to refine/things to do

- Improve the redirect process from non-www. subdomains such that server-side redirects can be the default.
- Make contacts and relationships with TeamSite engineers to explore how to archive or delete legacy pages so that content editors don’t continue to update them.
- Find out what happens when a TeamSite page with a client-side redirect to www.va.gov/ is archived or deleted.
- Consider using welcome modals for cases where an entire subdomain is redirected. Explore.va.gov does this via [query parameter](https://www.va.gov/?from=explore.va.gov).
- Gain a better understanding of analytics and SEO impacts of implementing and changing redirects.
- Implement server-side www.va.gov/ redirects in Drupal CMS.
- Document prefix vs. match implementation and where redirects are stored (to be linked in this document). 
- Investigate Gateway redirects as another option.
