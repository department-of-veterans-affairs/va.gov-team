# Weekly sync: Facilities / CMS

<details><summary>About this meeting</summary>

- Fridays 10am:30am-11am ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh
- Standing agenda: 
  - Status of cross-cutting issues, including CMS backlog review 
  - How we work refinement
  - Training needs
  
</details>

<details><summary>Parking lot</summary>
* [#4084 Prevent h2/h3s in Facility "prepare for your visit" accordions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4084) (and associated FE ticket [#18986](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18986)) (moved here January 27)
* #Type of care (Vet Center) field. [#19284](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19284) and [#4147](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4147) (moved here February 3)
* Breadcrumb cross-team spike 
 * [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (moved to parking lot Feb 3)

</details>

## February 24 2021

VAMC System
* Policies page content model documentation

Vet Centers
* TBD

## February 17 2021

Content model / FE changes
* Look back at `fieldDate` [PR #16015](https://github.com/department-of-veterans-affairs/vets-website/pull/16015) and method 
* Facility health services cutover
* FYSA: Policies page content model documentation ready by Feb 26 at latest. 

Vet Centers
* ~Review CMS goals and backlog for Sprint 26.~
* Review Discovery questions/hypotheses.

## February 10 2021

All was handled async: 

* ~Results of Pittsburgh spelunking. (separate meeting, Stan to schedule)~
* Feedback on [Content model changes documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)? 
* ~fieldDate removed? If so, CMS will merge our PR.~
* broken link checks in FE PRs. 

## February 3 

### General

Seeking input on [Content model changes documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)

We can use this framework to discuss content model refactoring epics below.

### Upcoming demo environment training 

* Tentatively 12pm ET Thursday February 11th. 
  

### Content model refactoring 

* VAMC System Policies 
  * CMS team will be documenting content model in our Sprint 26, so FE can start in March. 

### Vet Centers

* #Type of care (Vet Center) field. [#19284](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19284) and [#4147](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4147)
  * Decision: Facilities team will delay the FE work until transformers are out. CMS team will put the depracation of the parent terms in the icebox. 
* CMS roadmap work in progress. 


### Other

* [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (moved to parking lot)
* `fieldDate` on Event listing
  * CMS still has field_date on Event content type, but will remove it once Facilities strips it out of FE


## January 27 2021 

### Upcoming demo environment traings (moving from Devshop to Tugboat)

- CMS team will be scheduling a demo environment training the second week of February.
- Who's interested in attending? We can't guarantee a time that will fit for everyone, but we'll do our best, and a recording will be made available. 

### VAMC System

* Pittsburgh spelunking
  * VAMC upgrade team is reviewing Pittsburgh for content changes (IA and otherwise) and will report back after this sprint. 
  * Eg Surgery health service, which got added, explaining the elective surgery process, so that Veterans can understand what they are getting to.

#### Content model refactoring 

* [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md) not ready yet, but CMS team will demo something on Friday and share it out, and will ask for feedback in your next sprint. 

* Facility health service cutover
  * What's remaining? When? What support is needed from CMS? 
  * For appointments intro text, Erie and Pittsburgh are being done by Dave/VAMC, and VAMC will clean up others as part of launch. 
  * Dave will remove second service locations from University Drive health services 
  * Move some blobby content from Pittsburgh (Dave)
  * Phone number issue in flight (Gibran), no questions
  * Once that is done, we can turn off blobby content in editing page, and remove staging only link, and make sure that blobby content can still be read somewhere--Tugboat environment, proofing page, disabled on editing page. **Kev will write issue (CMS #4146) **. 
  * Pittsburgh editors (Ryan and Shelley) will review training for health services. They may have help desk questions. 
  * **Kev and Michelle to review for anything missing** 
  * FE issues to remove blobby GraphQL/Transformer / liquid template code
  * CMS to remove blobby field and data altogether. 

* Policies page [#3684](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3684)
  * Basically "ready" for FE development, but we should arrange a spike for how FE might think about "Centralized content" more broadly. 
  * Policies currently uses Detail page. New content type "VAMC Policies" with new fields. 
    * "Entity field fetch" is new for transformers and graphql. 
    * **Kev to write an issue for Steve to document content model for FE devs** (CMS #4145)
  * Policies pages will be swapped out (old to new) on a VAMC system by system basis ("manually").  

* VHA health service type of care [#1981](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1981)
  * VHA health service “type of care"
  * **Kev will create an issue to change label to "Type of care (VAMC)" and add a new field "Type of care (Vet Center)" #4147**
  * Type of care is currently both a parent and an attribute, the FE uses the parent
  * System health services could be refactored now to group by attribute not parent.
  * FE could just ignore the 5 terms that don’t have Type of care values (which are the parents)
  * Then CMS can safely delete Parent terms. https://prod.cms.va.gov/vha-health-services
  * This FE work can wait until Vet Centers get built, CMS team will continue to support both structures

#### IA governance

* Review [epic for hardening menu governance](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427), and [hypotheses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/facilities-collaboration/menu-governance-hypothesis.md) (Kevin) 
* Review [Unique content validation](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4073) epic, spike #4074 candidate for next sprint

#### Accessibility

* [#4084 Prevent h2/h3s in Facility "prepare for your visit" accordions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4084) (and associated FE ticket [#18986](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18986))



### Vet Centers [#4080](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4080)

Schedule another meeting to discuss: 

* Review rough CMS sprint cadence (forthcoming, from Kevin)
 * Vet Center services design

## January 22 2021

### Vet Centers

- IA?

### VAMC product 

- IA governance with Mikki
- update on GraphQL limit testing

Content model changes
- [Review shared documentation for content model changes](https://dsva.slack.com/archives/CDHBKAL9W/p1610492404381400)
- VAMC health service appointments intro text
  - 100% additive 
  - will get slightly refactored at some point once we make the default text editable by a CMS editor 
- Health service taxonomy "Type of Care" refactoring - create shared runbook
  - Health services page FE work to use new "type of care" attribute as a grouping mechanism, including Transformer work.
  - [more steps TBD]
  - Final step: CMS team deletes deprecated parent taxonomy terms. 
- VAMC Policies Page refactor - create shared runbook. This is the first of many top task pages.
  - New content types (VAMC Policies Page + Centralized content), which in tandem will replace all /[health-care-system]/policies
  - Content migation analysis for all existing VAMC policies page to see how much diversity there is, which would suggest the appropriate approach (automated migration?)
  - New FE templates for VAMC Polices Page content type, graphql, transformers
  - [more steps TBD]
  - Final step: CMS team swaps old Policies nodes with new Policies nodes. 

## Week of Jan 11

- Facility status live training (to include Dave, Stan, Lisa, Michelle, CMS to reach out to PW to see if others need to join)
  - Michelle met with Dave yesterday to confirm content
  - Verify the list of attendees. Michelle: confirmed, it's just the Vet Center folks from the email Michelle sent. 
  - VBA training possibly later. 
  - Date: Dave has a preference for the week of inauguration. Week of 25th, for roughly one hour in the afternoon to meet all time zones. Dave is handling schedules. 
    - Michelle will gets some options, and David Addison will schedule.
- Process for managing this doc (Kevin)
  - Anyone can update 
  - Kevin will post in vsa-facilities on Thursdays with draft agenda
- GraphQL query limit monitoring
  - A limit unbeknownst to CMS team that the query only returns 2000 nodes with stand-alone URLs. Never a problem until Erie, and some pages were missing. Investigation found the limit. Michael bumped that limit to 5000 nodes. Neil's research from 6 months ago didn't acknowledge that 2000 nodes limit, so we don't know where the limit is. Core CMS team is now testing where the actual limit is. CMS ops team can bump that limit locally for tests.
  - We'll provide updates to Michelle and Dave when we have them. 
  - We'll know when we hit this limit because FE will stop building. 
  - CMS Core team issue for test: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3961
  
Content model
- Action items from [time zone retro](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/facilities-collaboration/post-mortem-dec-2020.md)
- Health service taxonomy "Type of Care" refactoring - create shared runbook
  - Health services page FE work to use new "type of care" attribute as a grouping mechanism, including Transformer work. 
  - Final step: CMS team deletes deprecated parent taxonomy terms. 
- VAMC Policies Page refactor - create shared runbook
  - New content types (VAMC Policies Page + Centralized content), which in tandem will replace all /[health-care-system]/policies
  - Content migation analysis for all existing VAMC policies page to see how much diversity there is, which would suggest the appropriate approach (automated migration?)
  - New FE templates for VAMC Polices Page content type, graphql, transformers
  - [more steps]
  - Swapping of old nodes with new nodes. 

### TBD
