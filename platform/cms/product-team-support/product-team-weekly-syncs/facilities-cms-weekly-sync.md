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
  
## January 22 2021

### Vet Centers

- IA?

### VAMC product 

- IA governance with Mikki
- update on GraphQL limit testing

Content model changes
- Review shared documentation for content model changes 
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
