## MVP initiative 
- [MVP Problem Statement](#mvp-problem-statement)
    - [KPIs](#kpis)
    - [Go To Market Strategy](#go-to-market-strategy)
- [MVP and Enhancements](#mvp-and-enhancements)
    - [Content Catch Up and Clean Up](#content-catch-up-and-clean-up)
    - [Find a VA Form PDF Download Instructions ](#find-a-va-form-pdf-download-instructions)
    - [Find A VA Form PDF Audit](#find-a-va-form-pdf-audit)
    - [PDF Download Research Study](#pdf-download-research-study)
    - [Transforming Search Terms Iteration 2](#transforming-search-terms-iteration-2)
    - [Use Administration Field for Related To Info](#use-administration-field-for-related-to-info)
    - [Transforming Search Terms Iteration 1](#transforming-search-terms-iteration-1)
    - [Sort By Date](#sort-by-date)
    - [Post-MVP](#post-mvp)
    - [MVP](#mvp)
- [Search Landing Page MVP Status and Decisions](#mvp-search-landing-page-status-and-decisions)
- [Form Detail Page MVP Status and Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-01-mvp/form-detail-landing-pages/status-and-decisions.md)


----

## MVP Problem Statement 
Search research indicates that the VA forms page consistently gets high organic search traffic. However it has almost no or very little conversion value. Because this page already gets high organic traffic and has high potential to provide better conversion:

- we want to redesign experience on this page to the new VA.gov look and feel.
- we want to create new content on this page to drive traffic to top tasks and to the top digital versions of form applications.
- we want to add analytics tracking to all links and downloads.

Search research attached as FYSA:
[Analytics Veterans Affairs Forms Page Organic Nov2018-May2019.pdf](https://github.com/department-of-veterans-affairs/vets.gov-team/files/3352350/Analytics.Veterans.Affairs.Forms.Page.Organic.Nov2018-May2019.pdf)

[vaforms-org-search-keywords-SEMRush.png](https://user-images.githubusercontent.com/43381063/60547498-e08c8b00-9ced-11e9-8962-4c37d0e8e3cd.png)

Legacy issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1482

2020 Redesign MVP epic: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/1632

Also tracked in Master DEPO intake board:
https://github.com/department-of-veterans-affairs/digitalservice/issues/921


### KPIs
**Metrics**:
- Standard Domo Dashboard - https://va-gov.domo.com/page/1964748112?userId=666442134 (filter by Find a VA Form)
- Custom Domo Dashboard - https://va-gov.domo.com/page/1785082329
**[Google Analytics Find a Form Dashboard 1.0](https://analytics.google.com/analytics/web/#/dashboard/MHSfv0WxQySyKRB5IYyw1Q/a50123418w177519031p176188361/)**
**Overarching goal**: improve form (potentially benefit) discoverability in order to get more people to an (the right?) application experience\
**Signal**: are people downloading form applications or starting a new benefit application\
- Custom Google Analytics Reports (open Google Analytics
   - Ensure that you're in the All VA.gov Website Data [Production] view and then import the below files into your profile.

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

------


## MVP and Enhancements
**Mapping of VA.gov digital products/tools to VA forms are listed here (SharePoint). See tab/sheet called "VA.gov tools mapped to VA forms."**  Note that you must be logged into the VA network to access.

[VA.gov Product Directory-SharePoint (See last tab in sheet)](https://dvagov.sharepoint.com/:x:/s/CTOTeam/EfFzSYBuL5pHqbGtTBpk7EkBXfw_f8r5QR2C8VJCzifbAg)

(Prior iterations of above info should be considered deprecated.)

### Content Catch Up and Clean Up
Deprioritized epic, 2022. 
- Go-live: TBD
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21758)
- Adding description, metadata, related forms content to forms that were not considered high-priority during the MVP, but receive >200 downloads per month
- Started in March, 2021
- John Hashimoto was working with Content team and VA stakeholders to get content approved and entered into CMS
- Content updates were divided into three batches, each of which was reviewed and edited by the Content team.
- Content was then sent to VA stakeholders to be reviewed and updated if needed
- Final touches would be put on by Content
- John Hashimoto would enter updates into Drupal content management system and publish
- Most of the activity was tracked in the [Content request on GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22726)
- Status as of October 25, 2021:
   - [Batch 1](https://github.com/department-of-veterans-affairs/va.gov-team/files/6400288/VA.gov_Find_a_Form_Content_Batch-1_VBA.docx)
      - Batch 1 first draft was provided by Content on Jun 7
      - Batch 1 was [reviewed by VA stakeholders and feedback received Jul 2, 2021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24880#issuecomment-881525086)
      - Content team made final adjustments and provided to John Hashimoto on Jul 13, 2021
      - Batch 1 was sent to VBA for final review on Jul 13, 2021
      - Tweaks were received from VBA on Jul 20, 2021
      - Final Content touches were made on July 27, 2021
      - Content was added to CMS on July 30, 2021
      - [Changes were confirmed on Aug 3, 2021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24880#issuecomment-891982422)
   - [Batch 2](https://github.com/department-of-veterans-affairs/va.gov-team/files/6400291/VA.gov_Find_a_Form_Content_Batch.2_VHA.docx)
      - [Batch 2 draft ready for VA review was provided by Content on Jun 19, 2021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22726#issuecomment-879354958)
      - Batch 2 was sent to Janel Keyes at VA on July 19, 2021
      - John Hashimoto's last day was Aug 6, 2021

   - [Batch 3](https://github.com/department-of-veterans-affairs/va.gov-team/files/6400294/VA.gov_FaF_Content_Update_Batch-3_VBA.docx)
     - Batch 3 was reveiwed and edited by Content - [copy was received on Oct 20, 2021](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22726#issuecomment-947757189)
     - Batch 3 has not been sent to the VA Stakeholders for review & updates


### Find a VA Form PDF Download Instructions 
- Go-live: Dec 2021
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26816)
- Introduces a modal which is invoked upon clicking a link to download a PDF on the Find a VA Form search page or any of the form detail pages.
- Modal provides a warning that some PDFs will not work correctly unless downloaded and opened in Adobe Acrobat Reader DC for Mac or Windows
- Modal provides links to download Adobe Reader, a Resources & Support article with more details about using PDFs, and a link to download the PDF form.
- Sets a cookie to prevent the modal from appearing to the same user again within 24 hours

### Find a VA Form PDF Audit
- Conducted September 2021
- Follow-up exercise after research study revealed issues that were not anticipated.  This audit was conducted for the purpose of determining how widespread the the issues observed were in PDF forms available from find Find a VA Form.
- [Audit information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-09-pdf-audit/pdf_audit_2021.md)

### PDF Download Research Study
- Conducted July 27 - 30 2021 by Cindy Merrill
- [GitHub Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27480)
- [Complete research documentation in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form/post-mvp-releases/research)
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-plan.md)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/conversation-guide.md)
- [Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/topline-summary.md)
- [Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md)
- [Team Sync Presentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-readout-full.pdf)
- [Presentation for Sprint Demo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/readout-short-for-sprint-demo.pdf)
- [Findings Presentation for VA Stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-readout-full-VA-sync-mtg_Aug30.pdf)
   - Note: This presentation had not yet been held as of Oct 25, 2021 due to Product Owner change that occured just as the study wrapped up, and a subsequent team change in October 2021.


### Transforming Search Terms Iteration 2
- Go-live: Jul 6, 2021
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25954)
- Front-end search algorithm changes from March update were incorporated into the Forms API and removed from the Front-End code so that all API users could benefit from the improvements.
- Forms API modifications took advantage of PostGres features to handle minor misspellings, disregard placement/omission of dashes
- UI updates to make action links, buttons and text links consistent with other search tools
- Forms API team added a new keyword field to their PostGres database that allowed the VA to add additional keywords that were not already part of the form name, description, or how the form is used.

### Use Administration Field for Related To Info
- Go-live: Mar 24, 2021
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21366)
- Added the Administration field to the fields included in search so that we could provide "Related To" information about each form to show if the form was related to Health, Education, etc.

### Transforming Search Terms Iteration 1
- Go-live: Mar 17, 2021
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17244)
- Updated the search algorithm on the front-end so that a valid search term could be passed to the Forms API to produce a better search result

### Sort By Date
- Go-live: Feb 11, 2021
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17732)

### Post-MVP 
- Go-Live: Jan 18, 2021
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16930)
- This iteration connected the search page to the form details pages

### MVP
- [GitHub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1632)
- *What is your target launch date of your MVP/iteration?*
  - April 2020
- *What is your actual launch date of your MVP/iteration?*
  - June 8, 2020 (Find VA Forms Search landing page)
  - September 9, 2020 (Batch 1 detail pages for "top" MVP forms) [list of forms](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13285#issuecomment-694987577) | [content details](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/form-detail-landing-pages/final-docs#content-for-top-mvp-forms)
  - September 22, 2020 (Batch 2 form detail pages) [list of forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/form-detail-landing-pages/WIP-content-docs/v4-VA-forms-DB-export-April-2020-new-fields-minus-top-forms.xlsx) | [content details](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/form-detail-landing-pages/final-docs#content-for-the-other-400-forms)
  - October 15, 2021 (Bulk redirect to form detail pages)
- *What is your date for when you'll evaluate impact after launch?*


------

------

## MVP Search Landing Page Status and Decisions

### 05/22/23 - Form flags in CMS
- Documented form flags and processes in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1666820558104/5b87095d4d16ad7c8e7825567bd84ff53be71724?sender=u0b235d03cbd64f7f93673243)
- Determined the "Changed name" flag is needed for the Sitewide Content team, they should be informed of Form name changes so that they can update related content

### 08/10/22 
Updated README to reflect new Public Websites team in place since April 2022.

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


