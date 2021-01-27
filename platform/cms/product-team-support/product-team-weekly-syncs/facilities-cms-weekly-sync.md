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

</details>

## January 27 2021 

### Upcoming demo environment traings (moving from Devshop to Tugboat)

- CMS team will be scheduling a demo environment training the second week of February.
- Who's interested in attending? We can't guarantee a time that will fit for everyone, but we'll do our best, and a recording will be made available. 



### VAMC System

* Pittsburgh spelunking

#### Content model refactoring 

* [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md) not ready yet, but we'll demo something on Friday and share it out. 
* Facility health service cutover
* Policies page [#3684](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3684)
  * Basically ready for FE development, but we should arrange a spike for how FE might think about "Centralized content" more broadly. 
* VHA health service type of care [#1981](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1981)
  * VHA health service “type of care"
  * Type of care is currently both a parent and an attribute, the FE uses the parent
  * System health services could be refactored now to group by attribute not parent.
  * FE could just ignore the 5 terms that don’t have Type of care values (which are the parents)
  * Then CMS can safely delete Parent terms. https://prod.cms.va.gov/vha-health-services 

#### IA governance

* Review [epic for hardening menu governance](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427), and [hypotheses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/facilities-collaboration/menu-governance-hypothesis.md) (Kevin) 
* Review [Unique content validation](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4073) epic, spike #4074 candidate for next sprint

#### Accessibility

* [#4084 Prevent h2/h3s in Facility "prepare for your visit" accordions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4084) (and FE ticket, https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-team/18986) 



### Vet Centers [#4080](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4080)

* Review rough CMS sprint cadence (forthcoming, from Kevin)
* Vet Cetner services design

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
