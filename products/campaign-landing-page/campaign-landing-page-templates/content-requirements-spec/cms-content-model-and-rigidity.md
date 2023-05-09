# On this page

1. [Panels](#panels)
2. [Other issues](#other-issues)
3. [Governance](#governance)

# Panels

**Q:** Shall we prioritize the four _required_ panels, then tackle the 7 _optional_ ones? That would unblock FE development. Can content for these panels be prioritized as well? 

**A:**. Yes.  The required panels are:

- Hero Banner
- Why This Matters to You
- What You Can Do
- VA Benefits

[Up-to-date design comps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/CLP-Maximal-markup-updated-060320.pdf)

## 1. Hero panel (required)

Panel is required; image is optional. 

**Q:** Image: What size does the front end need? What aspect ratio? 

**A:** Short term: Focus on this product for now.   Use one of existing aspect ratio specs (this should account for full width).   No responsive need as we hide it on smaller screen sizes.  (Ryan will get back w/ chosen aspect ratio)    

- Long term for other projects: Consider as part of a more global design system process.

**Q:** Image: How important is support for truly responsive images (Content API serving different image densities for different screen sizes) 

**A:** Not needed for CLP.

## 2. Why this matters (required)

**Q:** "This page is for" panel: Can this reuse the audience taxonomies from Resources & support? Some of the labels are different, but we strongly recommend aligning this (should be a Content & IA collaboration)

**A:** 
CLP (in design comp) - Leverage R&S or allow it to be free-form, with specs to restrict to no more than three audience types -- and a character count restriction; we need to define sentence casing; we will provide examples in the product guide.

Examples:
- Veterans
- Family caregivers
- Transitioning service members

**Update December 16** Add a new non-controlled Audience vocabulary. New field to allow between one and 3 audiences. 


**Q:** Share on Social media: it's indicated as optional, so should that just be a boolean? Under what circumstances would an editor _not_ want social media links?

**A:** Yes,**absolutely** make it boolean/optional.

**Update December 16:** this will be hardcoded on FE. 

## 3. What you can do (required)

No questions. 

## 4. Video (optional)

"Duration" and "intro text" fields are not yet supported (see Resource and support product, similar issue.) We can add these fields to the video component CMS-wide, with the idea that in the future this content could be pulled in via Youtube API. 

**Q:** Pull from YouTube (like R&S) or require (or allow) author to write?

**A:** Requirement is to pull from YouTube (like R&S) **but for MVP, let's require the author to copy/paste the description/duration from YouTube.** (Note: We will solve the dynamic info pull from YT API for R&S and CLP post-MVP -- ideally the follow-on point release.)

## 5. Spotlight (optional)

**Q:** The "Read the press release for details" link field is a CTA, and we'd recommend storing it as a separate field from the "Spotlight intro text" field field, especially if that `>` carat is desired. Then the intro text field can be set to plain text. 

**A:** OK

## 6. Stories (optional)

**Q:** Is the plan still to link out to other websites, eg www.blogs.va.gov? 

**A:** Yes! (We are **not** doing the same thing here as VAMC.)

**Q:** If so: can we standardize around the 140 character count used in similar places in this design, instead of 100?

**A:** Yes.

**Q:** If not: that means editors will need to add stories to CMS, and we'll need to decide where to pull these teaser texts from. 

**A:** 

## 7. Downloadable resources (optional)

The most challenging part of this will be some new content attributes for downloadable files. 

**Q:** Do we still expect Spanish language items? If so, can they just go in their own panel? 

**A:** Yes, if you mean this be a separate panel option. (One download per card/block)

**Q:** Has this gone through accessibility review? Eg "Download (PDF)" is probably not accessible. 

**A:** The comp is not correct; Ryan will update the comp to reflect spec.  **MVP Requirement: Author puts URL in for PDF.**

(Note: These PDFs can come from various VA PDF data sources -- not just CMS.  We don't want the user to have to upload those PDFs into the CMS -- they should be able to link to the where the forms are located (could be in VA forms federated database -- e.g. user pastes url for the PDF.  We don't want VA stakeholders to create duplicate versions of PDF -- just point to one source of truth.)

Use Cases:
1. For MVP: Author has assets already available in legacy publications database -- they should be able to link to this as a downloadable asset
2. For MVP: Author has assets already in Drupal CMS; author should be able to point to that asset (requirement is the author must use the in production URL not the node URL)

3. **This is another problem to solve not to be considered for CLP** Author uploads asset into the CMS via this CLP page building tool 

**Q:** Can we standardize around the 140 character count used in other places here, instead of 100? 

**A:** Yes!


### Update Dec 2 - 

CLP editors can add external documents as media entities, which will ask for media title, description, and URL. PDFs only.  



## 8. Events (optional)

**Q:** Where do these events link to? will they be modernized va.gov event detail pages? 

**A:** For MVP: Editors can select existing events in Drupal (VAMC or Outreach Hub events).

**Update Dec 16:** No "Where" field on FE teaser/thumbnail template 

**Background:**

CMS can support CMS-managed events, but it poses some tricky editorial experience, content model, and governance issues for a product that is otherwise just a single page:
1. Events in Drupal currently require an Event listing landing page. This design does not contain that. We could potentially create a "hidden" one, but that's not ideal
2. Chicken and egg editorial experience problem: do you have to create an event first, then link it from here? Or vice verse? An inline form for creating events would not be a great editorial experience because the event form is so long. 
3. How do we deal with past events? if only two events are allowed, what kind of logic should be put in place if there are both past and future events? It's going to be expensive to create an intuitive editorial experience around that. Even if we can "get away" with an editorial experience that is non-intuitive for MVP, we should not be creating product debt by adopting an architecture here that will be expensive for later (there is already a significant amount of debt associated with the event content type). 


## 9. FAQs (optional)

~We will be reusing the component created for Resource and support, with the new reusable Q&A.~ 

~The rigidity of "either 0 FAQs or 3-10" is somewhat complex and expensive to implement. We recommend going with clear guidelines / help text instead of enforced rigidity (form validation) for MVP.~

~Q&As cannot be added "on the fly".~

Decision November 24: Use Q&A approach currently in use on Benefits Detail Pages, which, are not reusable, but hide all the additional options for other answer types. 




## 10. Connect with us (optional)

We should try to standardize this with the display of the "Connect with us" component on benefits landing pages, such as www.va.gov/health-care

Currently, all but the phone number are contained within the component, albeit with slightly different wording. 

**Q:** Can this be standardized with Connect with us on Benefits Landing Pages? 

**A:** To confirm: only email and social accounts are part of the existing benefits landing page component -- there is no option to add phone number and multiple social accounts, correct?   

**Q:** What kind of flexibility around phone numbers is required, and is this 100% needed for MVP?

**A:** Not needed for MVP (demo/prototype) -- but will be needed for first production-ready release.


**For MVP:**

Editors will select one of four administrations (VBA, VHA, NCA or "Veterans Affairs") and the content will be pulled from the same place as the Benefits Hubs landing pages "Connect with us" component.

Editors will not be able to specify a specific social media handle (eg facebook for Mental Health awareness month)



## 11. VA Benefits panel (required)

No questions.


# Other issues

## IA & Content

**Q:** How will the URL be specified?

**A:** TBD

**Q:** Will new content be created to support CLPs and where will that content sit (directory/URL)?

**A:** New content created: No, this will be a single landing page linking to existing content.

**Q:** Will CLP expire or live on?

**A:** An "expiration" feature is not necessary.  However, it is possible we -- with the VA user/stakeholder -- will review the performance of their individual CLPs after a period of time for its performance and usefulness and remove it.  One other possibility: Some CLP's will be annual in nature "Veteran Mental Health Awareness Month" -- whereby the content on the CLP would be over-written or updated. 

**Q:** How will CLPs be found?

**A:** Search, Offline Marketing/Communications.  CLPs will not sit in the primary VA.gov navigation.

**Q:** Will CLPs sit in a new sub-directory? 

**A:** TBD

## Metadata


**Q:** What should the meta title pattern be? Should it be automated or should someone be able to specify it? We assume the latter. 

**A:** Someone should be able to specify it.

**Q:** What should the meta description pattern be? Should it be automated or should someone be able to specify it? We assume the latter. 

**A:** Someone should be able to specify it.

**Q:** We assume meta image should be drawn from the hero image. Any other specs? 

**A:**


**Q:** any other meta specs? 

**A:**


# Governance

**Editorial Workflow Role Assignments:** 

For MVP - The only editors will be Content Admins, except possibly for editorial experience testing.

Post-MVP: CMS team will support Public Websites team with guidelines. 

**User Administration Policy:** 

For MVP - Public websites POs request new users to be added, and decide on their editorial workflow roles.  

Post MVP: CMS team will support the Public Websites team in the design of a User Administration policy.

**Content creation:** 

For MVP - editors will be Content Admins. 
* Content Admins will implement whatever IA is designed by the Content & IA team.

Post MVP - A content lifecycle document should describe the method by which Campaign Landing Pages are “applied for”, created, edited, and published.

**Sections/content ownership:**

For MVP - Proposal: MVP content will live in a new Section called “Campaign Landing Pages” under DEPO > Public Websites > 

Post-MVP: Sections can be added elsewhere in the Sections hierarchy, such as under VHA > Campaign Landing Page, depending on editor base.  

**Content lifecycle:** 

For MVP -  sunset will be sunset manually, if at all. 

**CMS Team point-of-contact:**   

Kevin Walsh



