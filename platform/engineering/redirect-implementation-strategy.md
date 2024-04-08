# Redirect Implementation Strategy

Last update: 5/4/23 — see change history below

---

## Requesting a Redirect

**All URL redirects are routed through the Sitewide Content & IA team and handed off to the appropriate engineer to implement.**

If you are a team member interested in requesting a URL redirect, please read the [Redirects IA Context & Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md). 

## Redirect Context
This document outlines our current redirect implementation strategy, as well as areas where we hope to refine the process. This document replaces the previous [Redirects Strategy Suggestion](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/redirects-strategy.md).

### Problem statement
Pages from legacy VA sites or TeamSites may be replaced by content within the modernized VA.gov site. We want to preserve SEO while ensuring Veterans receive the latest modernized information possible.

### User story
As a veteran, I want to my old www.subdomain.va.gov or www.va.gov/something bookmarks take me to the most up to date resources on www.va.gov, so I can discover/apply/track/manage my benefits.



---

## Redirect Types / Examples

| Jump link | Type of redirect / implementation required | Current Page/URL | Redirect to | Code / owner |
|---|---|---|---|---|
|[1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#1-same-domain-redirect-redirect-within-wwwvagov) | Same-domain redirect within VA.gov <br>(Server-side)|www.va.gov/* | www.va.gov/* | IA must signoff on the request.<br/> Code is in devops repo:  [/ansible/deployment/config/revproxy-vagov/vars/redirects.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml). <br/>Any Platform or VFS engineer with repo access may modify.  |
|[2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#2-vetsgov-cross-domain-redirect-page-level-redirect-from-vetsgov-to-wwwvagov) | Vets.gov cross-domain redirect, page level <br>(Server-side) | vets.gov/* | www.va.gov/* | IA must signoff on the request.<br/> Code is in devops repo:  [ansible/deployment/config/revproxy-vagov/vars/vetsgov-redirects.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/vetsgov-redirects.yml). <br/>Any Platform or VFS engineer with repo access may modify.<br/>These were more typical during the era when vets.gov content was migrating to become va.gov content. As of 2024, only system error pages (e.g. 404, 502, etc) live in the vets-gov repository and we should no longer see redirects like this. |
|[3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#2-vetsgov-cross-domain-redirect-page-level-redirect-from-vetsgov-to-wwwvagov) | Full site redirect of a subdomain to va.gov <br>(Server-side)| pittsburgh.va.gov | www.va.gov | WebOps must handle full subdomain redirects. Instructions at the jump link.|
|[4a](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#4-page-level-cross-domain-redirects-from-subdomains-subdomainvagov-to-wwwvagov) | Page-level cross-domain redirect w/ injected header <br>(Client-side) | benefits.va.gov/* (TeamSite loading proxy-rewrite) | www.va.gov/* | IA must signoff on the request.<br/> Code is in vets-website repo:  [src/applications/proxy-rewrite/redirects/crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json). <br/>Any Platform or VFS engineer with repo access may modify. |
|[4b](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#4-page-level-cross-domain-redirects-from-subdomains-subdomainvagov-to-wwwvagov) | Page-level cross-domain redirect w/o injected header <br>(Client-side )| subdomain.va.gov/* (TeamSite not loading proxy-rewrite) | www.va.gov/* | TeamSite admins must execute. Follow [WebOps KB article](https://vaww.webops.va.gov/apps/kbx/kbarticle.cfm?get=2018-CST-0416041924) steps. |
|[5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#5-redirects-from-subdomains-subdomainvagov-to-subdomains-subdomainvagov) | Subdomain > Subdomain redirect | subdomain.va.gov/* | subdomain.va.gov/* | TBD nature of the subdomain, details at the jump link. | 
|[6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md#6-other) | Any subdomain redirect that is not a TeamSite loading proxy-rewrite | | | ESECC, details  at the jump link |



---

## Implementation by type
![Redirect Implementation Strategy Flow Chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/redirect-implementation-workflow_2024-04-08.png)
Created in [Redirects flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712355321178/b6aa216997ca0ac53a0e70272f0fc63086179b07?sender=u0b235d03cbd64f7f93673243)


**Architecture diagram:**

![image](https://user-images.githubusercontent.com/12773166/124171506-e7c60b00-da65-11eb-9ed3-b537c6ec5a5e.png)

### 1) Same-domain redirect: Redirect within www.va.gov 

_Server-side or client-side_
- Server side

Any redirects that were previously created client-side have been re-implemented server-side (October/November 2019). 

_When to do this?_
- When redirect is within VA.gov, e.g. www.va.gov/* -> www.va.gov/*
- Actual example: www.va.gov/healthbenefits/index.asp  →  www.va.gov/health-care
- When a Drupal CMS page URL is updated. Drupal handles URL changes but does not deploy redirects to the website as of 12/13/19.

_How does this work technically?_
- Traffic to www.va.gov hits the VA gateway, is routed to our reverse proxy, where it is redirected according to rules that Devops team maintains in the [devops repo](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml#L69). 
  - [revproxy README](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/deployment/config/revproxy-vagov/vars) - follow conventions
  - `To` should always have a trailing `/` in order to avoid an unnecessary + extra redirect.
  - Consider if redirect is/should be case sensitive or case insensitive. If case sensitive, do not use the `matcher` field or use regex in the `src` field. If case insensitive, use the `matcher: "~*"` and **with** regex in the `src` field, such that the value looks like `^/path/?$`.
- Devops revproxy code for Server-side redirects is deployed via [Jenkins](http://jenkins.vfs.va.gov/job/deploys/) revproxy jobs. (Jan 2023) Deploy = weekly, Wed 10a ET.
- If the initiating page is managed by the Drupal CMS, the URL change is made in the CMS _and_ the redirect is added to the devops repo


_What team is responsible?_
- Sitewide Content IA team approves requests and assigns work to the Public Websites team. Requesting team is responsible for communication with VA stakeholders as needed. 
- [Redirects IA Context & Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md) contains more workflow details.

_Any other notes_
- Level of difficulty: low
- Redirects for pages within the Drupal CMS require very close coordination between the engineer making the change in the devops repo and the person changing the URL within the Drupal CMS. 
  - ![Redirect Drupla plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/redirect-implementation-timing-drupal-2019.png) 
  - Diagram is a plan that is implemented in the CMS but not yet in nginx.
- The Drupal-specific timing difficulties here will be addressed when VSP Ops works on their initiative to make Drupal the source of truth for redirects in 2020.


### 2) Vets.gov cross-domain redirect: Page-level redirect from vets.gov to www.va.gov 

_Server-side or client-side_
- Server side

_When to do this?_
- When `from` URL domain is vets.gov

_How does this work technically?_
- Same as #1, within VA.gov, but via modifying [vetsgov-redirects.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/vetsgov-redirects.yml)
  - There are options for `rewrite` and `retain_path`. If you have questions on what values to use for those options, you can reach out to VSP Devops, Mikki Northuis, and the redirect request's stakeholder(s) for clarity.

_What team is responsible?_
_Any other notes_


### 3) Full site redirects from subdomains (subdomain.va.gov) to www.va.gov 

_Server-side or client-side_
- Server side. Requires technical contacts and access to the hosting server.


_When to do this?_
- When a full site is ready to migrate content to the modernized www.va.gov site.

_How does this work technically?_
- Option 1: The platform team takes control of the entire subdomain. Example: pittsburgh.va.gov (traffic to pittsburgh.va.gov hits the VA gateway, is routed to other servers, where a server-side permanent redirect is put in place that forwards the traffic along to a www.va.gov route and our servers)

- Option 2: For a .NET website, modify the .NET web.config (XML file). Example: explore.va.gov

- Option 3: If a full site is in TeamSite, the WebOps team can redirect the site. Follow [WebOps KB article steps](https://vaww.webops.va.gov/apps/kbx/kbarticle.cfm?get=2018-CST-0416041924) to request the redirect.

_What team is responsible?_
- If a subdomain or .NET site: Public Websites, working with Platform Devops, and whatever veteran-facing team is requesting the redirect, if applicable (such as VSA facility pages).
- If a TeamSite: WebOps

_Any other notes?_
- Note that in these full domain redirect cases, ATO and ESECC approval must be considered
- Level of difficulty: high (dependent on VA stakeholders)


#### 2019 note from prior PW team
The previous Public Websites team (GovCIO) noted that they were able to implement server-side redirects for the following subdomains:

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



### 4) Page-level cross-domain redirects from subdomains (subdomain.va.gov) to www.va.gov 

_Server-side or client-side_
- Client-side. 

_When to do this?_
- When a single page within a TeamSite should redirect to www.va.gov, and that TeamSite loads proxy-rewrite JS. 
  - You can verify if a site loads proxy-rewrite by checking the [proxy-rewrite-whitelist.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json).
  - Typically these sites will display the injected modernized header/footer, but in some cases, sites may load the proxy-rewrite JS but not yet display the injected header. Proxy-rewrite-whitelist.json is the source of truth.
- When a single page within a TeamSite does _not_ load proxy-rewrite JS. In this case: Follow [WebOps KB article steps](https://vaww.webops.va.gov/apps/kbx/kbarticle.cfm?get=2018-CST-0416041924) to file a WebOps ticket that will be directed to TeamSite admins for assistance.

_How does this work technically?_
- Client-side redirects file: vets-website proxy-rewrite [crossDomainRedirects.json]](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json)

1. A browser requests subdomain.va.gov
2. The page at subdomain.va.gov is returned to the user's browser
3. The page begins loading, including downloading images, and JavaScript files
4. Proxy-rewrite JavaScript code for rendering the modernized header/footer is loaded into the user's browser
5. Proxy-rewrite JS code begins executing -
   - Is there a client-side redirect defined in [crossDomainRedirects.json]](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json)? If so, do the redirect
   - Is this subdomain supposed to render our header/footer? If so, render it.
   - Otherwise, do nothing & let the page render as usual.

Consider if the redirect should be a `catchAll`. Example [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json#L1174)

_What team is responsible?_
- Public Websites, in collaboration with whatever veteran-facing team is requesting the redirect.  Requesting team is responsible for communication with VA stakeholders as needed.

_Any other notes?_
- For the majority of page-level redirects from subdomains (subdomain.va.gov), this is not feasible in the short term without TeamSite/proxy-rewrite JS because it requires access to site hosting and relationships with technical stakeholders on the relevant teams. These contacts should be actively sought out via OCTODE.
- Client-side redirects are not ideal, as it requires JavaScript to be enabled & running correctly in order for a user to be redirected properly. It also depends on the legacy page staying alive. Should be considered temporary solution.
  - In November 2019, Public Websites team worked with TeamSite stakeholder Sandy Tadeo to test archiving a TeamSite page that had a client side redirect on it. The result was that sometimes the page would load a 404 for the user before redirecting. As a result of this test, the team determined **not** to move forward with archiving redirected TeamSite pages. Instead, Public Websites will implement the client side redirect, with additional ask of VA stakeholder to: 
    - A) Replace their page content with a 'redirect' message and 
    - B) Update their print materials and nav links with the new URL

_Any other notes_
- Level of difficulty: low if proxy-rewrite is in play; high if not (dependent on VA stakeholders)


### 5) Redirects from subdomains (subdomain.va.gov/* ) to subdomains (subdomain.va.gov/* )

This type of request has additional nuances. 

**If the subdomain is not a TeamSite**
Then the owners of the subdomain may be able to perform the redirect. This requires stakeholder involvement. 

**If the subdmoain _is_ a TeamSite**
WebOps will not act on this, as they only handle full-site redirects.

The administrators of the TeamSite should be able to add the redirect, according to TeamSite owners Sandeep Kotian & Brad Smelley. When the request is filed via WebOps, WebOps will send to TeamSite (Sandeep), who will identify the TeamSite admins for that domain. 

If the TeamSite admins are unable to update the site, they may request a client-side redirect, via the same technical process as #4 above, using Client-side redirects file: vets-website proxy-rewrite [crossDomainRedirects.json]](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json). 
- Example: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11662. To date (Jan 2023) this approach is theoretically viable but in practice, we have not been able to get it working.


### 6) Other

For any subdomain redirect that is not a TeamSite using proxy-rewrite JS (aka displaying the injected header): 

You need to contact the Gateway Ops team. File an ESECC (Enterprise Security External Control Council) request for the redirect via [https://www.esecc.va.gov](https://www.esecc.va.gov). Your main point of contact for this request will be Boris Ning. This request typically takes between 2 - 8 weeks to fulfill.
   1. Have you read your ESECC checklist?
       1. Yes
   2. Change Type
       1. Domain Name Server
   3. Type of Submission
       1. New
   4. Name the Connection
       1. new domain redirection for va.gov
   5. **WARNING:** We have never done this process before. Contact Public Websites and Boris Ning to ensure this is done correctly so as to prevent any delays with the redirect implementation.

Some extra contact information: VA TIC Gateway Operations
   1. Phone: 304 262 5282
   2. Email: [VANSOCOperationsGateWay@va.gov](mailto:VANSOCOperationsGateWay@va.gov)
   3. ServiceNow Assignment Group: `IO.NETWORK.NOC.TICGATEWAY`


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

_5/4/23 - @jilladams updated table of examples and references to match narrative details lower in page._

_1/6/23 - @jilladams updated to consolidate info from VSA Public Websites implementation notes. Updated technical notes for current._

_1/13/20 — Megan made some tweaks for clarification._

_12/13/19 — Megan updated to be inclusive of when URL changes are made in the Drupal CMS, which currently just fits into the server-side redirects within va.gov process below._

_11/26/19 — Team met to review process and ensure that everyone's on the same page. Megan Kelley, Nick Sullivan, Wyatt Walter, Jennifer Lee, Patrick Bateman, Mikki Northuis, TJ Rice, Kara Kemahli, Bill Fienberg were present._ 
