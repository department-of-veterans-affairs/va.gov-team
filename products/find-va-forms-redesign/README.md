# Product outline: Redesign the Find a VA Form page https://www.va.gov/vaforms/

Search research indicates that the VA forms page consistently gets high organic search traffic. However it has almost no or very little conversion value. Because this page already gets high organic traffic and has high potential to provide better conversion:

- we want to redesign experience on this page to the new VA.gov look and feel.
- we want to create new content on this page to drive traffic to top tasks and to the top digital versions of form applications.
- we want to add analytics tracking to all links and downloads.

Search research attached as FYSA:
Analytics Veterans Affairs Forms Page Organic Nov2018-May2019.pdf

vaforms-org-search-keywords-SEMRush.png

Legacy issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/1482

Current epic: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/1632

Also tracked in Master DEPO intake board:
https://github.com/department-of-veterans-affairs/digitalservice/issues/921

## This is the folder for all background, historical, discovery documents for this product. 


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



## Status/Decisions:

## 03/06/2020

"Soft" launched forms search behind basic credentials/access input. This option also keeps the page hidden from search engines and IA, and clearly indicates to visitors that this isn't publicly available yet. 

URL to https://www.va.gov/find-forms  and basic access credentials shared with forms working group. Email invitation to larger VA LOB groups will be sent this week. 

## 03/05/2020

VSP "staging" review call with @ncksllvn @AkucherGCIO @meganhkelley @jenniferlee-dsva @andreahewitt-odd 

Clarified what we mean by "staging" and "soft launch" for this forms experience.

__Decisions:__
- No blocker for soft launch.
- Timing of when "staging review" should ideally happen: closer to public 'go-live' launch. (Concrete ETA unavailable at this time bc we're dependent on Lighthouse forms API getting read access to DB.)
- Meghan and Andrea recommended sharing designs with Emily Wagoner and Crystabel Reiter during Design Intent reveiw well in advance of staging review. 

Background: This is largely due to our product being a Drupal page, which does not flow downstream into staging.va.gov. All the Drupal hosted content lives in prod environment. If we make changes in staging, it would have to be re-built from scratch in Drupal prod (bc content in Drupal doesn't flow from 'up' staging to prod). 


## 03/04/2020

Soft launch sync - call with @ncksllvn @jenniferlee-dsva @Kelson Adams @Aruna Kucherlapati @Andrew F  @Kelly Lein and @Kevin Walsh

Discussed: prod soft launch using no-index robots.txt - hidden page vs. new CMS demo environment. 

__Decision: We'll continue with original prod hidden page approach. New CMS demo environment sounds cool, but still unstable.__ 

## 02/04/2020

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



## __01/30/2020__

Summarizing several recent discussions. 

1/
We will not launch search experience until there is better parity between the live Find a VA form search and the new modernized API driven MVP form search. Ticket here: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5277  @ncksllvn will share findings with API team. 

2/
@kevwalsh @ncksllvn @JeffBrauer and the Lighthouse team are meeting to discuss a build approach for the form detail landing page template - to be built in Drupal, with API integration between API and Drupal. Technical backend implementation being explored. 

3/
Per DEPO discussion 1/29 with Dave Conlon, Jeff Barnes, Kevin Hoffman, and Chris Johnston, we will build the form detail landing page in Drupal - w/Drupal engineering support from VAMC upgrade team. This is a short term solution while longer term hiring and DEPO logistics finalized. 

4/
3 typical search flows documented by @mnorthuis here: https://whimsical.com/Bn5zRk2PDzuSjpu1d5q4Pu





## __01/22/2020__

Summary from  follow up discussion with @kevwalsh @ncksllvn @kelsonic @Karak888 @mnorthuis and @jenniferlee-dsva   

Follow up to: How should/do we build the form detail landing pages in Drupal, if we use Drupal?

We determined that the static content on the form detail landing pages should be built in Drupal. This provides better access to update/edit static content as needed. The dynamic content will still be pulled via the API as REACT components. 

The standard helpful links can be created to use the same content links that's used on the search page (under the section "Manage your VA and...")

__Next step - Nick to investigate with API team implementation using ^ approach for the form detail landing pages.

## __01/14/2020__

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


## __01/14/20__

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


