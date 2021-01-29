
# Content model changes in VA.gov CMS

This document outlines collaboration patterns between 🌐VFS product teams and ⚙CMS for situations that require changes to the content model. 

As of January 2021, this documentation only addresses vets-website changes, not changes involving Lighthouse or other Content API consumers, nor upstream content partners such VA Forms database or VAST. 


## What does CMS team need to know?

CMS team will document the following information in their CMS team epics. 

Initial meetings between VFS Product team and CMS team will discover the answers to these questions, which will determine the correct approach and runbook for each situation. 



1. Content model 
    * Provide sample content/data for analysis.
    * Does the proposal include a change to a field or bundle used by multiple products? If yes, we need a design-systemesque approach to deciding if this will be a new variant or refactoring an existing pattern. 
2. Content entry / migration
    * Will content entry be manual? If so, who will manually migrate content, and when. 
    * Automated? What is the source content? 
3. Who is the PM and FE engineering team responsible for implementing this? What experience do they have with these kinds of changes? 
4. Which services consume this content by push or pull?  (ie: vets-website, Lighthouse, others?). 
5. What type of change is this? 
    * Additive: New fields and/or bundles being added that didn’t exist before.
    * Subtractive: Field(s) being removed.
    * Refactoring: (replacing parts of the content model with new parts)
    * Combination of a,b,c.
6. Editorial experience and changement
    * Which CMS editors will be affected by this change?
    * Will CMS users notice this change? If yes: 
        * CMS team will prepare a CMS announcement about it. 
        * CMS design team will evaluate editorial experience design needs.
    * If this is a refactoring change, can the editorial experience support ‘parallel’ content models simultaneously (old and new) without being confusing or adding too much cognitive load to users? CMS design team may be involved in this decision.
    * If this is an additive change, can/should the editorial experience support fields in the CMS UX that don’t yet “do” anything? 
    * Will any training be required? If yes, a training issue will be created.


## Non-breaking changes

100% additive. New fields or bundles are added to CMS.  If the timing of this depends on more than just the timing of a code release, then a feature flag will be needed, so use the General Implementation Steps under the "Breaking change" section.


### CMS / Product team steps



1. All questions are answered and design models from above are completed.
2. ⚙ Add content model and **release**.
3. ⚙ Populate with sample data unpublished.
4. ⚙ Create demo environment and publish sample data.
5. 🌐 Use data from demo environment to create front end graphQL / Transformer and template changes.  Put in draft 🌐 PR.
6. ⚙Set demo environment to use 🌐 PR.
7. Product owner approves based on the demo environment.
8. 🌐 Merge PR.
9. ⚙ Update training materials. (if needed)
10. ⚙ Permission updates to reveal new feature and release.
11. ⚙ Issue CMS announcement. (if needed)

## 
Breaking change (potentially)


Breaking changes occur when it’s more than one step from each team. For example: CMS team change, then FE change, then CMS change. 


### CMS / Product team steps



1. All questions are answered and design models from above are completed.
2. ⚙ Add new content model field and **release**.
    1. Editorial considerations may dictate what fields are hidden initially.
    2. Add feature flag set to FALSE
3. ⚙ Populate with sample data unpublished.
4. ⚙ Create demo environment
    3. Publish sample data.
    4. Set feature flag to TRUE
5. 🌐 Use data from demo environment to create front end graphQL / Transformer and templates.  Put in draft 🌐 PR.
    5. Wrap new template code and query/transformer in feature flag check (using a full if else so that it is clear what gets removed and what stays).
6. ⚙Set demo environment to use 🌐 PR.
7. Product owner approves based on the demo environment.
8. 🌐 Merge 🌐 PR.
9. ⚙ When 🌐 PR has reached prod and PO timing is correct, set feature flag to true.
10. ⚙ Remove old field entity. 
11. ⚙ Update training materials. (if needed)
12. ⚙ Permission updates to reveal new feature and release.
13. ⚙ Issue CMS announcement notes. (if needed)
14. 🌐 submit 🌐 PR to remove feature flag logic.
15. ⚙ Submit ⚙PR to remove old fields, logic, and feature flag and **release.**


## Feature flags

[Feature flags](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/interfaces.md#featureflags) are preferable over if prod statements in vets-website templates, because they allow the CMS to specify what flag to use on any environment.  Demo and local sandboxes can simulate prod, rather than prod being the only thing that can simulate prod.


## Related documentation



1. [How to use feature flags](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/interfaces.md#featureflags)
2. [CMS team process for deleting fields](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/remove-depracated-fields.md) 


## Appendix 1: Example epics 2020/2021 


<table>
  <tr>
   <td><strong>Epic with link</strong>
   </td>
   <td><strong>Team / Product</strong>
   </td>
   <td><strong>Date</strong>
   </td>
   <td><strong>Breaking</strong>
<p>
<strong>/ non-breaking</strong>
   </td>
   <td><strong>Type of change</strong>
   </td>
   <td><strong>Migration</strong>
   </td>
   <td><strong>Change management for editors</strong>
   </td>
   <td><strong>Feature flag?</strong>
   </td>
  </tr>
  <tr>
   <td>Facility Health services content model hardening
   </td>
   <td>VAMC system
   </td>
   <td>Q3/Q4 2020
   </td>
   <td>Breaking
   </td>
   <td>Refactoring (mostly additive)
   </td>
   <td>Manual
   </td>
   <td>3 teams, phased into VAMC system dual state launch. 
   </td>
   <td>Should have been used, but wasn’t. 
   </td>
  </tr>
  <tr>
   <td>VHA health service “Type of care” field
   </td>
   <td>VAMC system / Vet Centers
   </td>
   <td>Q1 2021
   </td>
   <td>Breaking
   </td>
   <td>Refactoring
   </td>
   <td>Automated
   </td>
   <td>None needed
   </td>
   <td>Not needed
   </td>
  </tr>
  <tr>
   <td>Time zone
   </td>
   <td>VAMC system & outreach hub
   </td>
   <td>Q3 2021
   </td>
   <td>Breaking
   </td>
   <td>Refactoring 
   </td>
   <td>Automated
   </td>
   <td>CMS announcement sent
   </td>
   <td>Should have been used, but wasn’t. 
   </td>
  </tr>
  <tr>
   <td>Intro text for Rich text field in Benefits Hubs
   </td>
   <td>Benefits hubs
   </td>
   <td>Q3 2020 - Q1 2021
   </td>
   <td>Breaking
   </td>
   <td>Refactoring 
   </td>
   <td>Automated
   </td>
   <td>TBD
   </td>
   <td>Should have been used, but wasn’t. 
   </td>
  </tr>
  <tr>
   <td>Policies Top task page
   </td>
   <td>VAMC system
   </td>
   <td>Q1 2021
   </td>
   <td>Non-breaking
   </td>
   <td>Addiitive (adding a new content type)
   </td>
   <td>Manual (publish new content, archive old and remove alias, then update alias on new)
   </td>
   <td>CMS announcement, updates to training. 
   </td>
   <td>Not needed (additive)
   </td>
  </tr>
  <tr>
   <td>Content listing pages
   </td>
   <td>VAMC system
   </td>
   <td>Q1 2020
   </td>
   <td>Breaking
   </td>
   <td>Additive (6 new content types)
   </td>
   <td>Manual
   </td>
   <td>CMS announcement
   </td>
   <td>Should have been used
   </td>
  </tr>
</table>

