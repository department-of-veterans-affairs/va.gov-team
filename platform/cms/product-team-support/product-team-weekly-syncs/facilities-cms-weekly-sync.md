# Weekly sync: Facilities / CMS

<details><summary>About this meeting</summary>

- Wednesday 2:30pm ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh

</details>

<details><summary>Parking lot</summary>

* New lighthouse fields, where does it live? Does it need to be migrated from Lighthouse to CMS, does va.gov connect directly to lighthouse? 
* What VAMC environment can be used to 

* [#4084 Prevent h2/h3s in Facility "prepare for your visit" accordions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4084) (and associated FE ticket [#18986](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18986)) (moved here January 27)
* #Type of care (Vet Center) field. [#19284](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19284) and [#4147](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4147) (moved here February 3)
* Breadcrumb cross-team spike 
 * [#16020 breadcrumb](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16020) (moved to parking lot Feb 3)
5. Using API for online scheduling information
6. Staff profiles https://github.com/department-of-veterans-affairs/va.gov-team/issues/17116 https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5450 


</details>

## August 25 
VAMC
* Top tasks: Register for care, Billing and insurance, Medical records office
  * Coordination of remaining steps [6072](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6072)
* Hi-res images
  * Current Facilities sprint (beginning 8/25)
    * Remove hyperlinks for staff without bios [#29102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29102)
    * Hi res image download rendered as a link without href [#29079](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29079)
  * Validation on CMS side
    * presence of hi-res image
    * link to image
  * Social media meta tag audit planned for next sprint, 8/30, [#6171](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6171)

Vet Centers
* Required compoenets/content for publishing
  * service list
  * "Prepare for your visit" accordions (Appointments, parking/transportation, what to bring)
  * CAP images
  * at least one local spotlight
* District 1 kickoff planned for late October, FYI

Other
* Topic for the future: site monitoring (related to broken VAMC Locations List pages)

## August 18
 
 Vet Center
 * Editors are using "Prepare for your visit" as a way around the national services taxonomy, eg MVC services on http://preview-prod.vfs.va.gov/preview?nodeId=3821 
 * Restricting number of "Prepare for Visit" Accordions to 5
 * Also a candidate for hardening - required or nationalized accordions
 * "What to bring" is national
 * 3 other standard "accordions" - Parking, Transportation, Appointments - needs more thinking and looking at the data coming in from District 5

VAMC
 * Staff profiles for care coordinators (and other non-leadership staff profiles)
   * Profiles without bios - no FE urls. This has been in Facilities backlog, to be refined but no timeline 
   * Content model for staff profiles - should potentially wait for other products that could dictate needs for staff profile. 


 * Making service taxonomy national content visible inline to editors
   * **CMS team** -  to refine these stories for VAMC and Vet Centers 
 * Common content creation errors
   * Link creation (inline links, appropriate labels, etc)
     * CMS team epic - how might we reduce use of absolute URLs, "click here" link labels, etc, through link experience, form validation or other ckeditor features, training, KB articles.
     * Style guide already has good guidance.
   * Rich text formatting (bullets)
     * CMS team - research CK editor plugin to apply bullets automagically, à la MSWord. 
     * CMS team - bullets could be mentioned in rich text KB article 
 * Tracking and validate changes in VAST [VAMC facility map fails to load on some detail views #28558](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28558#issuecomment-901097646)
   * CMS issue: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4369  
 * Social media meta tag overview 
   * Descriptions
   * Images
   * etc. 
 * Elaborating on the content intent in the editorial experience
   * Vet Center editorial experience study in a few months? Dashboards, content strategy guidance, etc.
   * another example: banners in VAMC product.  


## August 11
  * Fix for grainy photos and potential risks
    * Story pages need to maintain current product design (2:1, full width)

## August 4

**VAMC**
* Followups to broken VAMC Locations List pages
  * Post mortem
  * Tech debt/defects related to CMS #1005 (January 2020!) refactoring of List pages.
    * Automated testing to check Locations List page (not just individual Locations)
    * Facilities will validate other 5 List pages (Health Services, News releases, Events, Stories, Leadership)
 
* Dynamic side nav [##17746](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17746)
  * Discovery determined this work may be more effort than it is worth
  * May need to look at creating runbook tracking the individual tasks needed for new/merged faciities?
  * A CMS-based dynamic approach is blocked by some Accelerated Publishing work. 
  * Facilities team to log this in the icebox for now

CMS/VAMC/Facilities upgrade team can collaborate on a "how to spin up a VAMC site" runbook
  * VAMC upgrade team will get ball rolling on this. 

**Vet Centers**

Product iteration, still in ideation:
* Required Prepare for your visit, eg parking
* Nationalizing at least one of the Prepare for your visit accordions (what to bring)
* Required services for Vet Centers
  * Research happening about whether or not local description should be required to augment national description 
  * Editors _maybe_ wouldn't be able to remove/delete that service.


Meta description for Vet Centers Locations page 
 * Content input in [comment here on #27812](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27812#issuecomment-891111897)
 * **CMS team** to audit description and og:description for all content types, current state and what it should be.  
   * More of a site-wide issue than a Vet Center issue.  

How to direct Vet Centers for facility data changes
 * Email api@va.gov (current guidelines in CMS UI) or VSSC? 
 * Decision: continue to email api@va.gov and Lighthouse will respond with instructions
 * Facilities team can leapfrog Lighthouse with a data call to Vet Centers (other than District 5) by having them review data in Facility Locator, prior to onboarding to CMS. 
 * Potential editorial experience change: "Once data has changed upstream, it can take up to 48 hours to make its way here." and/or "Requests to change this data take time to process, etc".

Facility status "more info" field
 * Should CMS harden character count to 300 (instead of soft limit) or should Lighthouse relax their character count?
 
VAMC banner alerts
 * possibly refactor VAMC product to use the new banner content type and bring in situation updates in a different way. 
 * should we impose character limits and dismissible by default in the meantime for VAMC banners to match guardrails from new banner alert type?

Emergency communications more generally
 * what is the right experience for veterans and VAMC editors and how it relates to overall comms
 * what can go into a bottom of page 

Promotional content
 * can VAMC leverage https://design.va.gov/components/promo-banners for marketing content like VA Health Chat app (currently a banner alert at https://www.va.gov/wilmington-health-care/) 


**Other?**
* Hardening/engineering sync
