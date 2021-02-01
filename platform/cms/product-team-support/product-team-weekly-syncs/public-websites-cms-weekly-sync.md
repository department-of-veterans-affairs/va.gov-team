# Weekly sync: Public Websites / 

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

## Wednesday February 10

### CLP

- Training / guides. 

## Wednesday February 3

### How we work

Per slack, review of [content model changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-team-support/content-model-changes.md)

### Upcoming demo environment trainings

Are there any short-term needs?

### CLP

- #3762 Link summary required fields

### Video for R&S and CLP

- #3950 Address block styling in Limited rich text editor
 
### Benefits detail pages


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

