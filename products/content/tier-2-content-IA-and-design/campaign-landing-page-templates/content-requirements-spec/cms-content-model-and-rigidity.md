# On this page

1. [Panels](#panels)
2. [Other issues](#other-issues)

# Panels

**Q:** Shall we prioritize the four _required_ panels, then tackle the 7 _optional_ ones? That would unblock FE development. Can content for these panels be prioritized as well? 

**A:**. Yes.  The required panels are:

- Hero Banner
- Why This Matters to You
- What You Can Do
- VA Benefits

[Up-to-date design comps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/CLP-Maximal-markup-updated-060320.pdf)

## 1. Hero (required)

**Q:** Image: What size does the front end need? What aspect ratio? 


**Q:** Image: How important is support for truly responsive images (Content API serving different image densities for different screen sizes) 



## 2. Why this matters (required)

**Q:** "This page is for" panel: Can this reuse the audience taxonomies from Resources & support? Some of the labels are different, but we strongly recommend aligning this (should be a Content & IA collaboration)

**A:** 

CLP (in design comp)
- Veterans
- Family caregivers
- Transitioning service members

R&S

- Beneficiaries audiences:
  - All Veterans
  - Former prisoners of war
  - Gulf War Veterans
  - Incarcerated Veterans
  - Korean War Veterans
  - LGBTQ Veterans
  - Minority Veterans
  - Native American Veterans
  - Vietnam War Veterans
  - Women Veterans
  - World War II Veterans
  - Family members and caregivers
  - Service members
- Non-beneficiaries audiences:
  - TBD

**Q:** Social media: it's indicated as optional, so should that just be a boolean? Under what circumstances would an editor _not_ want social media links?

**A:** Yes, make it boolean/optional.

## 3. What you can do (required)

No questions. 

## 4. Video (optional)

"Duration" and "intro text" fields are not yet supported (see Resource and support product, similar issue.) We can add these fields to the video component CMS-wide, with the idea that in the future this content could be pulled in via Youtube API. 

Q (for Jen and Ryan): Confirm the video caption comes from YouTube --  or is it both? (e.g., by default, the YT caption is pulled in, but author has the option to write-over.)  (Latest comps: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/CLP-Maximal-markup-updated-060320.pdf)

For MVP, this will need to be a manual copy/paste. 


## 5. Spotlight (optional)

**Q:** The "Read the press release for details" link field is a CTA, and we'd recommend storing it as a separate field from the "Spotlight intro text" field field, especially if that `>` carat is desired. Then the intro text field can be set to plain text.  

**A:** OK

## 6. Stories (optional)

**Q:** Is the plan still to link out to other websites, eg www.blogs.va.gov? 

**A:** Yes.

**Q:** If so: can we standardize around the 140 character count used in similar places in this design, instead of 100?

**A:** Yes.

**Q:** If not: that means editors will need to add stories to CMS, and we'll need to decide where to pull these teaser texts from. 

**A:** 

## 7. Downloadable resources (optional)

The most challenging part of this will be some new content attributes for downloadable files. 

**Q:** Do we still expect Spanish language items? If so, can they just go in their own panel? 

**A:** Yes, if you mean this be a separate panel option.

**Q:** Has this gone through accessibility review? Eg "Download (PDF)" is probably not accessible. 

**A:** This is based on the Find a Form tool download feature -- and yes, that went through accessibility review.

**Q:** Can we standardize around the 140 character count used in other places here, instead of 100? 

**A:** Yes

## 8. Events (optional)

**Q:** Where do these events link to? will they be modernized va.gov event detail pages? 

**A:**


**Background:**

CMS can support CMS-managed events, but it poses some tricky editorial experience, content model, and governance issues for a product that is otherwise just a single page:
1. Events in Drupal currently require an Event listing landing page. This design does not contain that. We could potentially create a "hidden" one, but that's not ideal
2. Chicken and egg editorial experience problem: do you have to create an event first, then link it from here? Or vice verse? An inline form for creating events would not be a great editorial experience because the event form is so long. 
3. How do we deal with past events? if only two events are allowed, what kind of logic should be put in place if there are both past and future events? It's going to be expensive to create an intuitive editorial experience around that. Even if we can "get away" with an editorial experience that is non-intuitive for MVP, we should not be creating product debt by adopting an architecture here that will be expensive for later (there is already a significant amount of debt associated with the event content type). 


## 9. FAQs (optional)

We will be reusing the component created for Resource and support, with the new reusable Q&A. 

The rigidity of "either 0 FAQs or 3-10" is somewhat complex and expensive to implement. We recommend going with clear guidelines / help text instead of enforced rigidity (form validation) for MVP.  

**Q:** Are guardrails acceptable for # of questions? 

**A:**

**Q:** The "Q&A group" component allows Q&As to be displayed as accordions, or not, via a boolean. We assume this is option is still desired. 

**A:**




## 10. Connect with us (optional)

We should try to standardize this with the display of the "Connect with us" component on benefits landing pages, such as www.va.gov/health-care

Currently, all but the phone number are contained within the component, albeit with slightly different wording. 

**Q:** Can this be standardized with Connect with us on Benefits Landing Pages? 

**A:** To confirm: only email and social accounts are part of the existing benefits landing page component -- there is no option to add phone number and multiple social accounts, correct?   

**Q:** What kind of flexibility around phone numbers is required, and is this 100% needed for MVP?

**A:** Not needed for MVP (demo/prototype) -- but will be needed for first production-ready release.



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


## MVP governance

Sections: [what sections do these belong to, during MVP?]
Role: [who can edit during MVP?] 
URL alias: [what is the url alias pattern?]

