# Weekly sync: Public Websites / CMS

<details><summary>About this meeting</summary>

- Wednesdays 10am ET 
- Meeting owner: Clarence Maeng
- Facilitator: Kevin Walsh
- Standing agenda: 
  - Product by product, including CMS backlog review (eg: CLP, [Resources & support](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2915&repos=154174777), Outreach Hub, Benefit Hubs, VA Forms, etc)
  - How we work
  - etc.
  
</details>

<details><summary>Parking lot</summary>
 

</details>


<details><summary>Relevant CMS product backlogs and docs</summary>
  
- [**Resources & support** CMS backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2915&repos=154174777)
- [**Campaign Landing Page MVP** CMS backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2275,154174777_2274,154174777_2273,154174777_1475&filterLogic=any&repos=154174777)
  - [CLP FE documentation](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1607363793772/b7f9e809d68ace9c8d75ab649a758ed7653c8461)
  - [CLP CMS content model and rigidity decision logs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/cms-content-model-and-rigidity.md)                         
- [**VA Forms** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA%20Forms)
- [**Benefits hubs** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3A%22Benefit+hubs%22)
- [**Outreach hub** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3A%22Outreach+hub%22+)
- [**Banners and alerts** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/Banners%20and%20alerts)
- [**VA.gov homepage** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA.gov%20homepage)
- [**VA.gov megamenu** CMS backlog](https://github.com/department-of-veterans-affairs/va.gov-cms/labels/VA.gov%20megamenu)

</summary>

</details>

## Wednesday, March 10

### CLP

 * Backlog issues (via Staging review)
   * Accessibility
   * Design/UX issues [#20883](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20883)
     * Images should always be the same size/ratio
     * Videos require intro text
     * Is there any way to format the bottom-most section the same way we do on VA.gov?
     * in regards to the back to top component, is there a way to align the button the right-most "column" like this:
     * On mobile, in the What you can do section, can we make the spacing in the gray boxes equal above and below? the spacing we have on desktop is perf if we can replicate that.
     * Download (PDF) links should be aligned at bottom of box?
   * CMS AX or FE Ex
      * Creating Events issues (e.g., unable to specify a URL link for "Where" unless it is a VAMC location) -- see Mission Act, Facebook Live event 
 * Beta on-boarding and user testing.
   * Two sessions set for this week -- Tim Hudak/VEO today; Bronwynn Emmet/OPI on Thursday
   * Awaiting response on scheduling from Sandy Tadeo/VBA
   * Awaiting new hire for VHA
 * Start to "harden" our MVP and post-MVP Product & Service Roll-Out Plan
   * Draft is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/product-service-rollout.md) 
 * CLP pre-MVP Production Build and Release for COVID Vaccine Awareness (or Hesitancy)
   * Wholly produced and managed by PW and Sitewide Content
   * Likely build and launch in March
   * Need to ensure Analytics -- including campaign tracking (UTM) -- are in place
   * Risks?
  

## Wednesday March 3

### CLP

 * Creating Events issues (e.g., unable to specify a URL link for "Where" unless it is a VAMC location)
   * 
 * Review product guide (John)
   * incorporated into training materials
   * will iterate after reviewing with Sandy's team
 * Beta user testing and onboarding.
   * VEO session this afternoon (agenda and facilitiation) (John)
     * Focused mainly on the powerpoint and then look at FE build.   
   * VBA session usability testing (to be scheduled) (CMS team)
     * John will schedule this today.   

If there's time 
 * URL design and governance - based on h1? request and review process?
   * Final word for MVP: We will create a hard-coded, rigid URL for each CLP while we learn.  From there, we take learnings and decide:
     - Whether to keep having humans create URLs, or
     - Whether there is a good, low-risk way to auto-generate URLs, or
     - Whether there is a combo approach. [Could Drupal suggest non-duplicate URL(s) that can then be modified? Or is there code that could plug into Drupal to help do this? This way, stop words like "and," "the," and "or" can be removed by a human or by the suggestion functionality; then the URL would be checked again to be sure the URL isn't a duplicate in Drupal. The human would make sure the URL isn't the same as a legacy URL.]
    * Next step: CMS team will start auto-generating URLs based on [name of campaign] (aka H1), which will replaces spaces with dashes, no special characters, all lower case. And generate for the 4 existing CLPs. 
    * Breadcrumbs: Home > [name of campaign]
 * Request form for new CLPs: what fields? 
   - Who (is requesting)? (Note: Must come from VACO Digital Comms lead)
   - What (is campaign)?
   - When (does it start/end)?
   - Goals of the Campaign?
   - How will it be communicated to Veterans? (Social Media, Email, etc.)
   - Do you plan to build your Campaign Landing Page all at once or in stages (add content/panels post-launch)?
   - What is lifespan? Maintain (keep updating), Re-use (seasonal), Archive (preserve as is) or Retire (remove)?
   - Do you heavily review/edit content before its published?
   - Who is the intended audience? 
   - Who are the editors?
   - **Next steps**: CMS team will prototype this and consider some other questions that may be relevant for CMS implementation.
* Customer satisfaction survey: gather key data factors from users in the build process and then again in the post launch phase.
   - CMS can share our past surveys--questions and data. 
  

## Wednesday February 24

CLP editorial experience CMS epic [#2274](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2274)
* Inline adding of promos and downloads in PR 
* Other items added to Sprint 27, need prioritization. (done, async on Slack)


"CLP service design"

* **Create CLP Product Guide PPT/PDF** for call center — this could be translated into a user guide for the CMS learning center  (with additional instructional add-in/editing/formatting) — I hope to get this completed this week.
  * Similar to the R&S product guide.  
* **Produce CLP Product Video for call center** — this could be posted in the CMS learning center if it fits.  BTW: Is this something your team creates?
  * Not required for call center.  
* **Training and help desk**  
  * No videos required for first cohort (VBA Sandy, VHA Jeff Grandon and JHL mid-march(?), VEO Tim Hudak)
  * Randi and John will walk through, be on call, and provide procedural PDF. 
  * CMS helpdesk still needs to be looped in, John and Randi can cc the VACMS support email. 
* **Accounts on prod** 

Phase 2 cohort
* Spin-up the “**Request for CLP page builder**” online form (optimally) .  
  * Talking to DEPO folks about whether we can use smartsheet — as seen here.
  * Kev to create an issue for the request form
* **Required fields** during content creation process.
* Three stakeholder groups. Will all be part of the VACO groups (VHA, VBA, NCA central office)
* Todo: determine what “**training/certification**” must be done by CLP users before we give them the keys.


Questions about these: 
- who owns what (CMS/PW)
- what’s needed for beta group vs the next cohort of users




## Wednesday February 17

 * CLP alpha user review (John and Randi's comments) - [See google doc](https://docs.google.com/document/d/1gUTTX0-8Cm-nBVQ5CI_k15bgqSXHpGNm/edit)
 * CLP beta user onboarding (any updates)

## Wednesday February 10

### CLP

- CLP Start to finish
  - John shared [this graphic](https://dsva.slack.com/archives/C52CL1PKQ/p1612966331368900?thread_ts=1612965801.368000&cid=C52CL1PKQ)t
  - The request form will contain context about the purpose (and constraints!) of a CLP. 
  - A how to video?
  - John's estimate is max 12 CLPs per year (but probably less, 8-10?)
  - Where do Training / guides fit into this? 
- Character count on Benefits detail page intro field


Covered Feb 9 asynchronously / on call about content model doc

- Any further feedback on Content model changes documentation? 
- Any more FE or Content support needed for CLP? 
  - Eg: Video bundle now has field_publication_date for CLP
- Past events (for Outreach hub)
  - CMS team will build a tool to manually archive past events on prod, but this may not make it into next sprint ([4212](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4212)).  After that, we'll go ahead and archive past outreach events, and let that team know ([#4213](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4213))
  - CMS team will initiate a spike [4214](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4214) into how best to manage past events across CMS in an automatic way, and we will need product-specific feedback. 

## Wednesday February 3

### How we work

New documentation: [Content model changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)

### Upcoming demo environment trainings

Are there any short-term needs?

### CLP

Requirements 
- [x] Form validation errors with closed fieldsets #4137 @kaise-lafrai  **DONE**
- [ ] Support "Publication date" for videos. **Next up**

Enhancements
- [ ] Evaluate possibility of improving hero image cropping help text, as an alternative to #3969 **needs issue**
- [ ] #3762 Link summary required fields

## Resources and support

- [x] Defect: Related information field should be required on Q&A nodes #4090  

### Video for R&S and CLP

- #3950 Address block styling in Limited rich text editor
 
### Benefits detail pages

### Forms

- [ ] Migration defect: Forms flagged as deleted not being archived by nightly forms migration #4083  @swirtSJW 


## Wednesday January 27

### Upcoming demo environment trainings

- who's in? 

### CLP

- IA URL
  - meeting later today, but:
  - will be part of "Managed experience" for users
  - form to request a CLP? will flow through Public Websites

### Video for R&S and CLP

- Inline video adding is delayed until Drupal 9, unless we build it custom for Drupal 8. expected in April 2020
- Editors for CLP and R&S will need to add media to media library, first, then link it to Media list and CLP content types via those forms
- Not required for CLP MVP
 
### Benefits detail pages

- CMS technical debt: Intro text refactor #939

## Wednesday January 20 10:30am ET

### Campaign landing page MVP

- Review CMS backlog for current sprint #1475
- Help text for "Add a link to an external blog or other list of stories" field clarification
- FE support
  - ongoing asynchronous is working
  - two main concerns: 1) designs are very custom, not much design system, lots of custom CSS. 2) Accessibility audit ongoing. 
- Test users update from John
  - VBA and VHA, meetings ongoing with Randi and John
  - nothing ready in Feburary (use Teamsite for now)
  - After Kelson finishes FE and CMS team finishes with backend, Randi and John will rebuild test. 
  - Test users will prototype alphas in second half of February, hopefully. 
  - We'll figure out how the keys are given, and the "managed experience".

### Resources & support
- Any updates?

### Benefits detail pages

- CMS technical debt: Intro text refactor #939

### How we work

- content model refactoring documentation
- `if prod` vs feature flags
  - next steps: Swirt will connect with Ethan about past use and bring to another meeting or the above documentation. 

## Wednesday January 13 10am ET

### Campaign landing page MVP

- Question for Ryan T: Should an image be required for the Hero panel? If not, what color/gradient choice should be implemented?
- Defects identified will be resolved in prod by today
- Next steps

### Resources & support

- 

### Benefits detail pages

- 

## Wednesday January 6 10am ET

### Campaign landing page MVP

- [Review sprint 23 backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?epics=154174777_2275,154174777_2274,154174777_2273,154174777_1475&filterLogic=any&repos=154174777)
  - 3921 Link teaser should allow 3 (3 pts)
  - 3922 Events entity browser missing some events (per John, this has been resolved)
  - 3924 Max 2 related benefits (needs refining)
  - 3926 Broken link checker false positive (8 pts)

- Questions from Public Website Team: 
  - What FE actions (if any) are needed to build accordions FAQ’s?: determined to be handled by PW team

  - Is layout/view already mobile capable or will a mobile version needed to be considered during FE build?: determined to be handled by PW team

  - What are the 508 & a11y considerations? (Previous discussions/findings?): determined to be handled by PW team

  - Have we consider CTA tracking and analytics per campaign i.e. how do we make this turnkey for analytics tracking requests/reviews.: determined to be handled by PW team and PO

  - What is the current planned "governance" considerations? What should be considered/known as we build FE elements?: determined to be handled by PW team and PO

### Resources & support

- What's left?: all major functionality has been built with the exception of videos, which will be revisited after the February Drupal update

### Benefits detail pages

- Tech debt: swapping out `field_intro_text` with `field_intro_text_limited_html`
  - Background: the old intro text field allows html that it shouldn't. Tech debt from the original Benefits Hub build. CMS team did half the work to fix this in Q2 2020. Would like to finish this out. 
    - Content with invalid html (tocs and buttons) was moved December 30 to appropriate places in the content. #3903 (basically done)
    - next steps: FE template should use the new field. CMS team can handle the liquid template, but not the transformer. #1166 (quick template work, but will require transformer adjustment).
    - Then CMS team can remove the old field from CMS, and the script that copies each edit over to new field. (#1421)
- CMS team to communicate through PW intake process. 

## Wednesday Dec 23 10am ET

### Campaign landing page MVP

- Review notes from John and Randi from content entry

### Resources & support

### Other

## Wednesday Dec 16 10am ET
 
 
### Resources & support 1.1

CMS work for MVP 1.1 will be done this sprint

 * Curating taxonomy terms to R&S homepage (CMS work done... ready for FE)
 * Taxonomy term listing bugs (done, pending some confirmation)
 * Add non-beneficiaries tags (in PR)
 
One tech debt issue slated for next sprint. 


### Other
 * Holiday schedules for this meeting 


### Campaign landing page MVP

 * High level update: 
    * MVP content model 99% complete (pending Audience tag), some editorial experience and contextual content strategy work in progress.
    * Sample test content is up at https://prod.cms.va.gov/campaign/test 
 * Clarify specs for 
   * "Why this matters panel": 
     * Audience field: should it allow both beneficiaries and non-beneficiary audiences? #3774
     * Social media links hardcoded or optional?  (needs CMS issue if it's optional)
   * Event teaser design & content model
 * CMS Team Sprint 21 update and Sprint 22 priorities
    * Content model documentation for FE devs not complete, may not be finished this sprint. What level of fidelity do we want?  
      * Decision: for now, we have enough fidelity, and will add more during a "FE support" phase. 
 

### Other? 
 
## Wednesday Dec 9 10am ET

### Other? 

- COVID Vaccines

### How we work

- Process for managing this doc (Kevin)
- Review intake process for FE and product issues reported via CMS helpdesk. 

### Resources & support

- Beneficiary and non-beneficiary tags
  - Non-beneficiary tags is in PR, should be out by rest of the week
  - Beneficiary tags 
- Homepage FE updates
  - new issue for CMS: Add a curation boolean to both Audience and Non-beneficiary 

  
### Campaign landing page MVP

- CMS Sprint 21 scope & progress
  - [Content model documentation for FE devs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1607363793772/b7f9e809d68ace9c8d75ab649a758ed7653c8461) (Kevin) 
  - Content entry & editorial experience design... should they go together or not?
    - followup at 12:30 with John
- Getting content model to 100% -- progress report. (Kevin)
- Backlog review for Sprint 22 and beyond

