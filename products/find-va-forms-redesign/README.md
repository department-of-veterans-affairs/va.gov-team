# Product outline: Find VA Forms - Search Landing & Form Detail Pages

This is the folder for all background, historical, discovery, and status documentation for the Find a VA Form 2020 product redesign MVP. Refer to [State of the Product](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/State-of-the-Product.md) for the most up-to-date information about this product.

**Mapping of VA.gov digital products/tools to VA forms are listed here (SharePoint). See  tab/sheet called "VA.gov tools mapped to VA forms."**

[VA.gov Product Directory-Shared Library-SharePoint](https://dvagov.sharepoint.com/:x:/r/sites/VAgovProductDirectory-SharedLibrary/_layouts/15/doc2.aspx?sourcedoc=%7BA7445DE2-B970-474A-A5E8-6676ABD1D87D%7D&file=VA.gov-Product-Directory-11-13-20.xlsx&action=default&mobileredirect=true)

(Prior iterations of above info should be considered deprecated.)

## Table of Contents
- [Incident Response](#incident-response)
   - [Team](#team)
- [Problem Statement](#problem-statement)
    - [KPIs](#kpis)
    - [Go-To-Market Strategy](#Go-to-market-Strategy)
- [Launch Dates](#launch-dates)
    - [Post-MVP](#post-mvp)
    - [MVP](#mvp)
- [Architecture](#launch-dates)
   - [Data Flow Diagram](#data-flow-diagram)
   - [Drupal CMS Migration Documentation](#Drupal-CMS-Forms-Migration-Documentation)
   - [Content Flow Diagram](#Content-Flow-Diagram)
   - [Detail Page Content Architecture Diagram](#Detail-Page-Content-Architecture-Diagram)
- [Status and decisions](#status-and-decisions)

## Incident Response
As of 12/31/2020:

### Team
 - Team Name: Decision Tools
 - GitHub Label: [vsa-decision-tools](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/decision-tools)
 - Slack channel: [#vsa-decision-tools](https://dsva.slack.com/channels/vsa-decision-tools)
 

### Decision Tools Team Members
|Name|Role|
|----|----|
|John Hashimoto	| Decision Tools Product Owner|
|Marci McGuire	| Decision Tools Product Manager|
|Zachary Morel	|FE Engineer|
|Cassandra Allen| Design|

### Lighthouse API Team
|Name|Role|
|----|----|
|Lee DeBoom	|Vets API|
|Mark Viterna	|Team-Matsumoto - Benefits Intake/Forms API|
|Ryan Link	|Customer Success Manager, Lighthouse APIs [Oddball]|
|Nichole Harris	|Product Manager - Team-Matsumoto|

### Other Subject Matter Experts
|Name|Role|
|----|----|
|Jen Lee	| Former Product Owner|
|Brian Lloyd	| Former Product Manager|
|Mickin Sahni	| Former Product Manager|
|Mark Greenburg	|VA APIs|
|Nick Sullivan	|FE Engineer|
|Kelson Adams	| FE Engineer|
|Steve Wirt	| CMS: Drupal|
|Ryan Thurlwell	| Design Lead|
|Charley Stran	| Formerly supported Forms on Lighthouse API team|

__VA forms stakeholder working group includes:__
- Huber, Diane <Diane.Huber@va.gov>; 
- Walker, Stephen <Stephen.Walker4@va.gov>; 
- Ranes, Michelle M. <michelle.ranes@va.gov>
- Reid, Kevin <Kevin.Reid@va.gov>
- McCarthy, Brian <Brian.McCarthy4@va.gov>; 
- Smith, Jeremy <Jeremy.Smith@va.gov>; 
- Tuscher, Joshua (joshua.tuscher@va.gov); 
- VAVBAWAS/CO/PCO <PCO.VBACO@va.gov>; 
- Vaccaro-Palomaki, Missie <Missie.Vaccaro@va.gov>; 
- Smith, Gail T. (VACO) <gail.smith@va.gov>
---

## Problem Statement 
Search research indicates that the VA forms page consistently gets high organic search traffic. However it has almost no or very little conversion value. Because this page already gets high organic traffic and has high potential to provide better conversion:

- we want to redesign experience on this page to the new VA.gov look and feel.
- we want to create new content on this page to drive traffic to top tasks and to the top digital versions of form applications.
- we want to add analytics tracking to all links and downloads.

Search research attached as FYSA:
Analytics Veterans Affairs Forms Page Organic Nov2018-May2019.pdf

vaforms-org-search-keywords-SEMRush.png

Legacy issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1482

2020 Redesign MVP epic: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/1632

Also tracked in Master DEPO intake board:
https://github.com/department-of-veterans-affairs/digitalservice/issues/921


### KPIs
**[Google Analytics Dashboard](https://analytics.google.com/analytics/web/?authuser=1#/dashboard/MHSfv0WxQySyKRB5IYyw1Q/a50123418w177519031p176188361/)**

**Overarching goal**: improve form (potentially benefit) discoverability in order to get more people to an (the right?) application experience\
**Signal**: are people downloading form applications or starting a new benefit application\
**Metrics**:

*Find VA Forms - Search*
Search Relevancy
- % queries with no results
- % PDF downloads / successful queries
- % conversions to online benefit application experiences / successful queries
- % converions to logging-in following Find VA Form Search query (future, preferred)

Engagement
- % conversions to "Frequently used VA forms" / session
- % conversions to "Manage your VA and other information online" / session
- % conversions to "More information" / session

*Find VA Forms - Detail Landing Pages*

Acquisition
- Are people using Form Detail pages? - Ratio of traffic to Detail pages / Search query volume

Engagement
- % PDF downloads / queries
- % conversions to online benefit application experiences
- % converions to logging-in following Find VA Form Search query (future, preferred)

### Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
  - Will rely on redirects from legacy /vaforms/ experience to the new /find-forms capturing accrued SEO value. 
  - There's a link to the forms experience in the footer of VA.gov. That will be updated to reflect the new url 
  - Update VA.gov on-site search Top Recommendations to reflect /find-forms
  - Remove `no-index` on /find-forms to allow the new experience to searchable via Google (e.g. "va forms")
- *What marketing, outreach, or communications are necessary for this product to be successful?*
  - Comms with form working group necessary to ensure they're comfortable with parity of /vaforms vs. /find-forms searches

## Launch Dates
### Post-MVP
- *What is your target launch date of your MVP/iteration?*
  - Jan 12, 2021 (Add CTA links from Find a VA Form landing page to form detail pages and online tools)
- *What is your actual launch date of your MVP/iteration?*
  - Jan 21, 2021
- *What is your date for when you'll evaluate impact after launch?*
  - Feb, 2021 (initial evaluation)

### MVP
- *What is your target launch date of your MVP/iteration?*
  - April 2020
- *What is your actual launch date of your MVP/iteration?*
  - June 8, 2020 (Find VA Forms Search landing page)
  - September 9, 2020 (Batch 1 detail pages for "top" MVP forms) [list of forms](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13285#issuecomment-694987577) | [content details](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/form-detail-landing-pages/final-docs#content-for-top-mvp-forms)
  - September 22, 2020 (Batch 2 form detail pages) [list of forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/form-detail-landing-pages/WIP-content-docs/v4-VA-forms-DB-export-April-2020-new-fields-minus-top-forms.xlsx) | [content details](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/form-detail-landing-pages/final-docs#content-for-the-other-400-forms)
  - October 15, 202 (Bulk redirect to form detail pages)
- *What is your date for when you'll evaluate impact after launch?*

------
## Architecture
### Data Flow Diagram
 <img src="./find-va-forms-redesign/findvaform-q3-arch.png" alt="Find VA Forms Architecture"  width="50%"> 

### Drupal CMS Forms Migration Documentation
[Migrations: Forms](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/migrations-forms.md)

[Relationship Between VA Forms DB/Lighthouse API/Drupal](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5702)

### Content Flow Diagram
[Whimiscal VA Forms - content flow](https://whimsical.com/va-forms-content-flow-UpSBvigLWBK72p8ajG8v3a)

### Detail Page Content Architecture Diagram
[Whimsical diagram - form detail page content architecture](https://whimsical.com/forms-detail-page-content-architecture-Bn5zRk2PDzuSjpu1d5q4Pu)

------
## Status and decisions:

### 1/23/2021 Marci McGuire
The post-MVP enhancements to link the Find a VA Form search page to form details pages and online tools was launched on 1/21/2021

### 1/05/2021 Marci McGuire
The decision was made to exclude the ability to sort forms by date in the post-MVP launch.  That will come in late Jan/early Feb.

### 12/31/2020 Marci McGuire
We tentatively plan to launch Post-MVP enhancements on Jan 12, 2021, which will provide direct links from search results to form details page (where they exist) and the ability to sort results by **Form last updated** date.

### 2020/12/21 Marci McGuire
John Hashimoto and Marci McGuire agreed that the features being implemented were low-risk and don't warrant conducting user research.

### 06/22/20

Redirect of the forms search pages set for Thursday 6/25 implementation. Stakeholders notified. Per Kevin Reid, the Viewer page is not "owned" by the forms managers, so we will exclude that page from the redirects. 

[See ticket 5163 for reference](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5163)



### 6/18/20 

Historical - referencing for easy findability: 

Modern forms search IA and URL documentation: 
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/websites-forms-search.md


### 06/08/2020

Summary from a few different threads. 

1/ ROW ID (in VA forms db) - this is unique to each form in the VA forms db. Caveat: Due to human error, sometimes a form manager will delete a form and add the same form (updated version), thereby creating a new ROW ID even though it's the same form number. 

2/ Nightly data extract as a CSV enpoint - ISO approved. 

3/ DevOPs bug fixed; http: VBA forms fixed at the source. Parity btn legacy and modern search - will ungate 6/8. 

4/ LOE for manual content entry of rich form detail content fields done. PW content team will add the custom form detail fields for the top forms + 450 other non-top forms. 



### 05/26/2020

Ungating of search currently blocked by various API and form bugs. 

Important discovery: API is treating form numbers like they are unique 'form IDs,' but in actuality, form numbers are not unique to 1 form in the source VA forms database. EX: The English 10-10EZ form has the same form number as the Spanish 10-10EZ. Without a unique form ID per form PDF or form PDF URL, we have asked the forms managers to update certain duplicate form numbers to make them distinct. 

Other issues - legacy practices that were not cleaned up (e.g., www1. URLs, http:// URLs, etc.) 

Next step: Regroup needed on ungating plan. 


### 03/11/2020

Recap of redirect update w/ @mnorthuis from our Monday call:
- Per last Friday's call with Missie Vacaro-Palomaki (VACO forms manager) on the forms working group call, OPM, GSA, and other non-VA and other internal forms will continue to be available in public VA forms search. 
- Because they will continue to be in the DB, they will be available via organic search on VA.gov as dynamically generated template form detail landing pages (new pages w/new URLs).
- So we still need to determine the legacy form detail pages for these non-VA forms. Using our current strategy of redirecting 1:1 only the highest traffic forms, these legacy hybrid VA-OPM/GSA form detail landing pages will be default redirected to the new forms search page URL. (Where users can search for the OPM/GSA form, and will be able to find them via regular form search as they do today.)

Note: the super high traffic OPM forms (there are 2 of them) will be redirected 1:1, per prior decision. Those 2 high traffic OPM forms are on Mikki's spreadsheet: SF 180 (redirect to our military records page); and OF 306 (to the OPM form landing page)

### 03/06/2020

"Soft" launched forms search behind basic credentials/access input. This option also keeps the page hidden from search engines and IA, and clearly indicates to visitors that this isn't publicly available yet. 

URL to https://www.va.gov/find-forms  and basic access credentials shared with forms working group. Email invitation to larger VA LOB groups will be sent this week. 

### 03/05/2020

VSP "staging" review call with @ncksllvn @AkucherGCIO @meganhkelley @jenniferlee-dsva @andreahewitt-odd 

Clarified what we mean by "staging" and "soft launch" for this forms experience.

__Decisions:__
- No blocker for soft launch.
- Timing of when "staging review" should ideally happen: closer to public 'go-live' launch. (Concrete ETA unavailable at this time bc we're dependent on Lighthouse forms API getting read access to DB.)
- Meghan and Andrea recommended sharing designs with Emily Wagoner and Crystabel Reiter during Design Intent reveiw well in advance of staging review. 

Background: This is largely due to our product being a Drupal page, which does not flow downstream into staging.va.gov. All the Drupal hosted content lives in prod environment. If we make changes in staging, it would have to be re-built from scratch in Drupal prod (bc content in Drupal doesn't flow from 'up' staging to prod). 


### 03/04/2020

Soft launch sync - call with @ncksllvn @jenniferlee-dsva @Kelson Adams @Aruna Kucherlapati @Andrew F  @Kelly Lein and @Kevin Walsh

Discussed: prod soft launch using no-index robots.txt - hidden page vs. new CMS demo environment. 

__Decision: We'll continue with original prod hidden page approach. New CMS demo environment sounds cool, but still unstable.__ 

### 02/04/2020

Decision and next steps - re redirecting form detail landing pages. Call with  @ncksllvn @mnorthuis @mickin and @jenniferlee-dsva   

__We will do server-side redirects of form detail landing pages with the following approach:__
- For X number of high search value form detail landing pages, we will do 1:1 redirect mapping from the current legacy form detail landing page to the new. 
- For the remaining (562 - X) landing pages, we will do a default redirect to the new main search page URL (va.gov/find-forms)

__Next steps:__

1/ Determine the cut-off point for the X number of forms that will get the 1:1 redirect mapping. Jen will review the GA data that Nedie had provided previously and share out info to Mikki, Nick, and Mickin. 

2/ RE Drupal and dynamic URLs: Investigate how Drupal auto-generated URLs for the basic (not custom) template form detail landing pages can apply the URL pattern recommended by Mikki. @ncksllvn will loop @mnorthuis into ongoing conversations with @kevwalsh re API and other  implementation of form detail landing pages in Drupal. 

__There are 2 tickets tracking redirects:__
- [#5163](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5163) for the main forms search, results, and related pages
- [#3836](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3836) for the form detail landing pages



### __01/30/2020__

Summarizing several recent discussions. 

1/
We will not launch search experience until there is better parity between the live Find a VA form search and the new modernized API driven MVP form search. Ticket here: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5277  @ncksllvn will share findings with API team. 

2/
@kevwalsh @ncksllvn @JeffBrauer and the Lighthouse team are meeting to discuss a build approach for the form detail landing page template - to be built in Drupal, with API integration between API and Drupal. Technical backend implementation being explored. 

3/
Per DEPO discussion 1/29 with Dave Conlon, Jeff Barnes, Kevin Hoffman, and Chris Johnston, we will build the form detail landing page in Drupal - w/Drupal engineering support from VAMC upgrade team. This is a short term solution while longer term hiring and DEPO logistics finalized. 

4/
3 typical search flows documented by @mnorthuis here: https://whimsical.com/Bn5zRk2PDzuSjpu1d5q4Pu


### __01/22/2020__

Summary from  follow up discussion with @kevwalsh @ncksllvn @kelsonic @Karak888 @mnorthuis and @jenniferlee-dsva   

Follow up to: How should/do we build the form detail landing pages in Drupal, if we use Drupal?

We determined that the static content on the form detail landing pages should be built in Drupal. This provides better access to update/edit static content as needed. The dynamic content will still be pulled via the API as REACT components. 

The standard helpful links can be created to use the same content links that's used on the search page (under the section "Manage your VA and...")

__Next step - Nick to investigate with API team implementation using ^ approach for the form detail landing pages.

### __01/14/2020__

__Notes from Mikki re IA, URLs, canonicals, and redirects__
Recap from to our discussion with Michael Bastos, @ncksllvn @kelsonic, @mnorthuis, and @jenniferlee-dsva on 1/14/20:

We will move forward with Option A above with some additional details.

__Option A__

The core search form URLs listed below will be permanently redirected (301) to the new URL: www.va.gov/find-forms/

https://www.va.gov/vaforms/
https://www.va.gov/vaforms/default.asp
https://www.va.gov/vaforms/search_action.asp
https://www.va.gov/vaforms/search_action.asp[all-parameter-variations]
To support the technical implementation/API work, a duplicate version https://www.va.gov/vaforms/search_action.asp will be created for the API to hit and collect data.

URL: www.va.gov/find-form-data
This new duplicate page must have a "noindex" tag and be excluded from the xml sitemap. /JL note: this duplicate page can be removed once the API can point directly to the forms database, per Michael./ 

The many child URLs that act as search landing pages for specific forms – i.e. https://www.va.gov/vaforms/form_detail.asp?FormNo=22-1990 - will not be impacted by this form search work. Each individual variation/URL will be redirected to a specific new URL. This will be mapped out as part of the form search landing page work.


### __01/14/20__

Summary from  call with @kevwalsh @ncksllvn @kelsonic @Karak888 and @jenniferlee-dsva   

__Problem discussed: How should/do we build the form detail landing pages in Drupal, if we use Drupal?__

We walked through the form detail landing page content fields.  There are 2 kinds of form detail landing pages.

- 1/ Template basic landing page – dynamic. 

- 2/ Custom landing page – “additive” of the template basic version: a mix of the same dynamic fields, plus customized content. There are about 25- 30 of these custom landing pages for MVP. 

Kevin showed an example in the VAMC Pittsburgh site – how content is displayed in the CMS AX when there’s a mix of dynamic content from facilities API and other editable content fields. 

- This would be similar to how our custom landing pages could be built in the CMS for authoring and maintenance. 	
- Kevin’s initial informal assessment: low LOE for CMS team. (Unanswered Q: what’s the timeframe, would this be available for launching these landing pages in Q1?
- This option could be used for housing the template basic form landing pages as well (except nothing would be editable), and it would allow us to serve via CMS new basic pages with Mikki’s updated, modernized URLs. 

Nick brought up a potential option where everything, including customizable content, lives in GH/MD files. We didn’t discuss this option due to time.

__Next step: follow up conversation to investigate Nick’s suggestion, and to finalize decision on which approach to use.__

--- 
