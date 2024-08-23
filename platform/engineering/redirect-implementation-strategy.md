# Redirect Implementation Strategy

Last update: 8/5/24 — see change history below

---

## Redirects at VA
At VA, redirects can be executed server-side or client-side.
A server-side redirect uses a status code that is sent to a browser to let it know that the page that's being requested has moved or is no longer available, and tells the browser what page/URL to render instead. Server-side redirects are preferred.  Server-side redirects can be implemented as temporary or permanent.

A client-side redirect is carried out using Javascript. This primarily applies to TeamSite pages that use the injected header & footer. In these cases, the requested page begins to load, and Javascript present on the page can check for any documented redirects for the current page. If one exists, the user will be redirected. Client-side redirects should only be used when absolutely necessary.

The implementation approach generally depends on where the page you are redirecting lives. 

Before implementing a redirect, you must submit the request for approval.  Review the redirect request and approval information. 
Please refer to the redirect standards on the VA design system when planning a redirect.


## Requesting a Redirect

**All URL redirects are routed through the Sitewide Content & IA team and handed off to the appropriate engineer to implement.** Please file a [redirect request Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl&labels=sitewide+CAIA%2C+Sitewide+IA%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request), as first step.

If you are a team member interested in requesting a URL redirect, please read the [Design System guidance for Redirects](https://design.va.gov/components/url-standards/redirects).

---

## Redirect Types / Examples / Documentation

| Type of redirect / documentation link, Server or Client side	| Current Page/URL	| Redirect to	| Type of redirect |
|---|---|---|---|
| 0. Redirect a document to any other page or document |  |  |  |
| 1. **VA.gov to VA.gov page-level redirect**<br/><br/> A page on our servers redirects to another page on our servers | www.va.gov/* | www.va.gov/* | Server-side <br/>[Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#1-vagov--vagov-redirect)  |
| 2. **VA.gov page-level cross-domain redirect**<br/><br/> A page on our servers redirects to a VA.gov subdomain page | www.va.gov/* | subdomain.va.gov/* <br/>TeamSite not loading proxy-rewrite | Server-side <br/>[Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#2-vagov--subdomain-page-level-cross-domain-redirect)  |
| 3. **Page-level cross-domain redirect for a subdomain that loads proxy-rewrite JS**<br/><br/>Subdomain page redirects to a page on our servers | benefits.va.gov/* <br/> TeamSite loading proxy-rewrite | www.va.gov/* | Client-side <br/>[Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#3-subdomain--vagov-page-level-cross-domain-redirect-for-a-subdomain-that-loads-proxy-rewrite-js)  |
| 4. **Page-level cross-domain redirects for a subdomain that does not load proxy-rewrite JS**<br/>Subdomain page redirects to a page on our servers | subdomain.va.gov/* <br/>TeamSite not loading proxy-rewrite | www.va.gov/*  | Client-side <br/><br/>[Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#4-subdomain--vagov-page-level-cross-domain-redirect-for-a-subdomain-that-loads-proxy-rewrite-js). <br/>WebOps must identify TeamSite owners to create the redirect.  |
| 5. **Page-level cross-domain redirect**<br/><br/>Subdomain page redirects to a  subdomain page  | subdomain.va.gov/* | subdomain.va.gov/* | Client-side <br/>[Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#5-subdomain--subdomain-page-level-redirect)  |
| 6. **Full subdomain redirect to a page on our servers** | pittsburgh.va.gov | www.va.gov | Server-side <br/>[Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#6-full-site-redirects-from-subdomains-subdomainvagov-to-wwwvagov)<br/>WebOps must identify TeamSite owners to create the redirect.  |
| 7. **Vets.gov page redirect** to a page on our servers | vets.gov/* | www.va.gov/*  | Server-side <br/>[Jump to documentatio](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#7-vetsgov-cross-domain-redirect-page-level-redirect-from-vetsgov-to-wwwvagov)n |
| 8. Other  |  |  | [Jump to documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/redirect-implementation-strategy.md#8-other) |

### 0. Redirecting documents
**We do not create redirects for any documents like PDFs.**

VA has millions of documents available online.  It is not sustainable for us to manage the continuous changes of those documents.  If a document’s path has changed, or the document has been removed, the owner of that document will need to correct the issue or  implement the redirect.

Here are some tips to provide stakeholders across VA to help them avoid 404s or needing a redirect:
1. Avoid changing the name of a document – this includes changing the casing in the document name - unless absolutely necessary.  Changing the name of file changes the path, or, URL of the file and will result in a 404 error.
2. Avoid using dates in file names for files that change periodically.  An alternative is to keep current info in a file that’s always named the same (i.e. current-rates.pdf) and move outdated information to a dated file (i.e. rates-2022.pdf). This will allow all links to always point at the same file and always get accurate information.  Links to the old information can be added if needed.
3. Follow URL standards to avoid issues with casing or special characters.  For example, avoiding spaces in files names, using all lower case letters, and including dashes to separate words, ensures a more readable file name. 
    * The file “/how-to-apply-for-benefits.pdf” reads exactly that way in a URL
    * The file “/How to apply for benefits.pdf ” will read “How%20to%20apply%20for%20benefits.pdf  . 
4. Avoid moving or deleting a file if possible. Deleting files will result in all links pointing to the file to result in a 404. If this is unavoidable, the best solution is to implement a redirect.  If that is not an option, here are a few suggestions to reduce the frustration of a 404:
    * Update or remove all internal links so there are no internal referring links to the invalid file.  Note that this will not help any external links, but will ensure our experience is intact.
    * Replace the original file with a new updated information in a file with the exact same name.
    * Replace the original file with a file with the exact same name that includes helpful information such as why the document was removed or a link to a related page or document


## Implementation by type
Created in [Redirects flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712355321178/b6aa216997ca0ac53a0e70272f0fc63086179b07?sender=u0b235d03cbd64f7f93673243)
![Redirects flow_2024-07-31_21-31-35](https://github.com/user-attachments/assets/06e159ff-70e6-48b9-ad80-529f1da109d3)

**Architecture diagram:**

![image](https://user-images.githubusercontent.com/12773166/124171506-e7c60b00-da65-11eb-9ed3-b537c6ec5a5e.png)

### 1. VA.gov > VA.gov Redirect
_Server-side or client-side_
- Server side

_When to do this?_
- When redirect is within VA.gov, e.g. www.va.gov/* -> www.va.gov/*
- Actual example: www.va.gov/healthbenefits/index.asp  →  www.va.gov/health-care
- When a Drupal CMS page URL is updated. Drupal handles URL changes but does not deploy redirects to the website as of 12/13/19.

_How does this work technically?_
* IA must signoff on the request.
* Code is in [vsp-platform-revproxy/template-rendering/revproxy-vagov/vars/redirects.yml](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/redirects.yml). Any Platform or VFS engineer with repo access may modify.
  * Refer to the [revproxy README](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/README.md) for more information on conventions and considerations, such as trailing slashes, child pages, and case sensitivity.
* Traffic to www.va.gov hits the VA gateway, is routed to our reverse proxy, where it is then redirected. 

If the initiating page is managed by the Drupal CMS, the URL change is made in the CMS and the redirect is added to the vsp-platform-revproxy repo.

_What team is responsible?_
* Sitewide Content IA team approves requests and assigns work to the appropriate team to implement the redirect. 
* Requesting team may be responsible for the redirect code change, and is responsible for communication with VA stakeholders as needed.

_Other notes_
* Level of difficulty: low

#### Redirects for pages within the Drupal CMS 
Redirects for pages within the Drupal CMS require very close coordination between the engineer making the change in the vsp-platform-revproxy repo and the person changing the URL within the Drupal CMS. 

The diagram reflects a plan that is implemented in the CMS but not yet in nginx. The Drupal-specific timing difficulties here will be addressed if / when Platform works on an initiative to make Drupal the source of truth for redirects:

![Redirect Drupla plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/redirect-implementation-timing-drupal-2019.png) 



### 2. VA.gov > Subdomain: Page-level cross-domain redirect
_Server-side or client-side_
- Server side

_When to do this?_
- When a single page within www.va.gov should be redirected out to a subdomain 

_What team is responsible?_
* IA must signoff on the request.
* Code is in [vsp-platform-revproxy/template-rendering/revproxy-vagov/vars/redirects.yml](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/redirects.yml). Any Platform or VFS engineer with repo access may modify.
  * Refer to the [revproxy README](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/README.md) for more information on conventions and considerations, such as trailing slashes, child pages, and case sensitivity.


### 3. Subdomain > VA.gov: Page-level cross-domain redirect for a subdomain that loads proxy-rewrite JS

_Server-side or client-side_
- Client-side. 

_When to do this?_
- When a single page within a TeamSite should redirect to www.va.gov, and that TeamSite loads proxy-rewrite JS. 
  - You can verify if a site loads proxy-rewrite by checking the [proxy-rewrite-whitelist.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json).
  - Typically these sites will display the injected modernized header/footer, but in some cases, sites may load the proxy-rewrite JS but not yet display the injected header. `proxy-rewrite-whitelist.json` is the source of truth.

_What team is responsible?_
- IA must signoff on the request.
- Code is in vets-website repo: [src/applications/proxy-rewrite/redirects/crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json). Any Platform or VFS engineer with repo access may modify.

_How does this work technically?_
Changes are made in Client-side redirects file: vets-website proxy-rewrite [crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json)

1. A browser requests `subdomain.va.gov/page`
2. The page at subdomain.va.gov is returned to the user's browser
3. The page begins loading, including downloading images, and JavaScript files
4. Proxy-rewrite JavaScript code for rendering the modernized header/footer is loaded into the user's browser
5. Proxy-rewrite JS code begins executing -
   - If there is a client-side redirect defined in [crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json), the redirect will execute.

Consider if the redirect should be a `catchAll`. Example [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json#L1186)

_Other notes_
- Level of difficulty: low
- Client-side redirects are not ideal, as it requires JavaScript to be enabled & running correctly in order for a user to be redirected properly. It also depends on the legacy page staying alive. Should be considered temporary solution.
  - In November 2019, Public Websites team worked with TeamSite stakeholder Sandy Tadeo to test archiving a TeamSite page that had a client side redirect on it. The result was that sometimes the page would load a 404 for the user before redirecting. As a result of this test, the team determined **not** to move forward with archiving redirected TeamSite pages. Instead, Public Websites will implement the client side redirect, with additional ask of VA stakeholder to: 
    - A) Replace their page content with a 'redirect' message and 
    - B) Update their print materials and nav links with the new URL

### 4. Subdomain > VA.gov: Page-level cross-domain redirect for a subdomain that does not load proxy-rewrite JS

For subdomains that do not use the Injected Header. 

_Server-side or client-side_
- Client-side. Requires identifying the TeamSite admin.

_When to do this?_
- When a single page within a TeamSite should redirect to www.va.gov, and that TeamSite **does not load** proxy-rewrite JS. 
  - You can verify if a site loads proxy-rewrite by checking the [proxy-rewrite-whitelist.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json).

_What team is responsible?_
- IA must signoff on the request.
- Requesting team must follow [WebOps KB article](https://vaww.webops.va.gov/apps/kbx/kbarticle.cfm?get=2018-CST-0416041924) steps to file a WebOps ticket to start the process.
  - WebOps must help identify the owner of the TeamSite.
  - TeamSite admins who are identified will then be asked to execute the redirect. 

_Other notes_
- Level of difficulty: high, and dependent on VA stakeholders



### 5. Subdomain > subdomain page-level redirect

_Server-side or client-side_
- Client-side. Requires identifying the subdomain admin, whether TeamSite or otherwise

_What team is responsible?_
* **If the source subdomain is not a TeamSite:** The owners of the subdomain may be able to perform the redirect. This requires stakeholder involvement and a technical contact with admin access to the source server, to implement the redirect.

* **If the subdomain is a TeamSite:** Requesting team must follow [WebOps KB article](https://vaww.webops.va.gov/apps/kbx/kbarticle.cfm?get=2018-CST-0416041924) steps to file a WebOps ticket to start the process. 
  * WebOps must help identify the owner of the TeamSite. 
  * TeamSite admins who are identified will then be asked to execute the redirect.
    * If the TeamSite admins are unable to update the site, they may request a client-side redirect, via the same technical process as Subdomain > VA.gov page-level redirects above, using Client-side redirects file: vets-website proxy-rewrite [crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json), Example: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11662. To date (Jan 2023) this approach is theoretically viable but in practice, we have not been able to get it working.

_Other notes_
- Level of difficulty: high, and dependent on VA stakeholders


### 6. Full site redirects from subdomains (subdomain.va.gov) to www.va.gov 

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
- If a TeamSite: WebOps and whatever veteran-facing team is requesting the redirect, if applicable (such as VSA facility pages).

_Other notes_
- Note that in these full domain redirect cases, ATO and ESECC approval must be considered
- Level of difficulty: high, and dependent on VA stakeholders

### 7. Vets.gov cross-domain redirect: Page-level redirect from vets.gov to www.va.gov 

_Server-side or client-side_
- Server side

_When to do this?_
- When `from` URL domain is vets.gov

_What team is responsible?_
* IA must signoff on the request.
* Code is in the devops repo: [vetsgov-redirects.yml](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/vetsgov-redirects.yml)
  * Any Platform or VFS engineer with repo access may modify.
  * There are options for `rewrite` and `retain_path`. If you have questions on what values to use for those options, you can reach out to VSP Devops, Mikki Northuis, and the redirect request's stakeholder(s) for clarity.

_Other notes_
- Vets.gov redirects were more typical during the era when vets.gov content was migrating to become va.gov content. As of 2024, only system error pages (e.g. 404, 502, etc) live in the vets-gov repository and we should no longer see redirects like this.


### 8. Other
For other types of redirects not documented here, you may need to contact the Gateway Ops team. File an ESECC (Enterprise Security External Control Council) request for the redirect via [https://www.esecc.va.gov](https://www.esecc.va.gov). Your main point of contact for this request will be Boris Ning. This request typically takes between 2 - 8 weeks to fulfill.
   1. Have you read your ESECC checklist?
       1. Yes
   2. Change Type
       1. Domain Name Server
   3. Type of Submission
       1. New
   4. Name the Connection
       1. new domain redirection for va.gov

**WARNING:** This process is not well understood. Contact Boris Ning to ensure this is done correctly so as to prevent any delays with the redirect implementation.

Some extra contact information: VA TIC Gateway Operations
   1. Phone: 304 262 5282
   2. Email: [VANSOCOperationsGateWay@va.gov](mailto:VANSOCOperationsGateWay@va.gov)
   3. ServiceNow Assignment Group: `IO.NETWORK.NOC.TICGATEWAY`


### If you need an Out of Band deployment (off cycle deploy)
* Open a #vfs-platform-support request, "Off-out-band deployment." Example: https://dsva.slack.com/archives/CBU0KDSB1/p1664314493443639
* Open an [OOB Github request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=frontend%2C+operations%2C+platform-tech-team-support&projects=&template=OOB-Deploy-Request.md&title=OOB+Deploy+Request), and link to the Platform support thread.
* Plan to write a [post-mortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/1c1242cafc9f1d614abd933db5c92d13e1a2a19a/Postmortems/README.md) within 3 business days to describe why OOB was required.


---

## Areas to refine/things to do

- Improve the redirect process from subdomains such that server-side redirects can be the default.
- Make contacts and relationships with TeamSite engineers ~to explore how to archive or delete legacy pages so that content editors don’t continue to update them.~
- ~Find out what happens when a TeamSite page with a client-side redirect to www.va.gov/ is archived or deleted.~
- _Above points (crossed out) have been tested 11/19, we won't be deleting or archiving, see full details above under "4) Client-side redirects for subdomains - Any other notes"_
- Gain a better understanding of analytics and SEO impacts of implementing and changing redirects.
- Make Drupal CMS the source of truth for server-side www.va.gov/ redirects.
- Document prefix vs. match implementation and where redirects are stored (to be linked in this document). 
- Investigate Gateway redirects as another option.
- Investigate what our process was in order to get our header/footer JavaScript file included in TeamSite pages (which we now also use for client-side redirects). Maybe there's a clue there as to how to implement server-side redirects for subdomains

## Change history
_8/5/24 @randimays Removed guidance for welcome modals when entire subdomain is redirected per MichelleM's direction_

_8/1/24 - @randimays Minor copy updates from technical review_

_7/31/24 - @jilladams Updated copy to match upcoming guidance changes from https://github.com/department-of-veterans-affairs/va.gov-team/issues/83498_

_7/10/24 - @jilladams updated paths to point to new revproxy repo: https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/tree/main_

_5/4/23 - @jilladams updated table of examples and references to match narrative details lower in page._

_1/6/23 - @jilladams updated to consolidate info from VSA Public Websites implementation notes. Updated technical notes for current._

_1/13/20 — Megan made some tweaks for clarification._

_12/13/19 — Megan updated to be inclusive of when URL changes are made in the Drupal CMS, which currently just fits into the server-side redirects within va.gov process below._

_11/26/19 — Team met to review process and ensure that everyone's on the same page. Megan Kelley, Nick Sullivan, Wyatt Walter, Jennifer Lee, Patrick Bateman, Mikki Northuis, TJ Rice, Kara Kemahli, Bill Fienberg were present._ 
