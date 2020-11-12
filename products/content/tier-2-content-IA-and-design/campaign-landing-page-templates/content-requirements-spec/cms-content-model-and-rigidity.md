# On this page

1. [Panels](#panels)
2. [Other issues](#other-issues)

# Panels

**Q:** Shall we prioritize the four _required_ panels, then tackle the 7 _optional_ ones? That would unblock FE development. Can content for these panels be prioritized as well? 

**A:**

## 1. Hero (required)

**Q:** Image: What size does the front end neeed? What aspect ratio? 

## 2. Why this matters (required)

**Q:** "This page is for" panel: Can this reuse the audience taxonomies from Resources & support? Some of the labels are different, but we strongly recommend aligning this (should be a Content & IA collaboration)

**A:**

**Q:** Social media: it's indicated as optional... should that just be a boolean? Under what circumstances would an editor _not_ want social media links?

**A:**

## 3. What you can do (required)

No questions. 

## 4. Video (optional)

"Duration" and "intro text" fields are not yet supported (see Resource and support product, similar issue.) We can add these fields to the video component CMS-wide, with the idea that in the future this content could be pulled in via Youtube API. 

Q (for Jen and Ryan): Does the video caption come from YouTube -- or is it a custom field for authors to input -- or is it both -- by default, the YT caption is pulled in, but author has the option to write-over.

For MVP, this will need to be a manual copy/paste. 


## 5. Spotlight (optional)

**Q:** The "Read the press release for details" link field is a CTA, and we'd recommend storing it as a separate field from the "Spotlight intro text" field field, especially if that `>` carat is desired. Then the intro text field can be set to plain text.  

**A:**

## 6. Stories (optional)

**Q:** Is the plan still to link out to other stories? see also "8. Events" below. 

**A:** 

**Q:** If the plan is still to link out to other stories, can we standardize around the 140 character count used in other places here? 

**A:**

## 7. Downloadable resources (optional)

The most challenging part of this will be some new content attributes for downloadable files. 

**Q:** Do we still expect Spanish language items? If so, can they just go in their own panel? 

**A:**

**Q:** Has this gone through accessibility review? Eg "Download (PDF)"

**A:**

**Q:** Can we standardize around the 140 character count used in other places here? 

**A:**

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

**Q:** The "Q&A group" component allows Q&As to be displayed as accordions, or not, via a boolean. We assume this is still desired. 

**A:**




## 10. Connect with us (optional)

We should try to standardize this with the display of the "Connect with us" component on benefits landing pages, such as www.va.gov/health-care

Currently, all but the phone number are contained within the component, albeit with slightly different wording. 

**Q:** Can this be standardized with Connect with us on Benefits Landing Pages?

**A:**

**Q:** What kind of flexibility around phone numbers is required, and is this 100% needed for MVP?

**A:**



## 11. VA Benefits panel (required)

No questions.


# Other issues

## Metadata


**Q:** What should the meta title pattern be? Should it be automated or should someone be able to specify it? We assume the latter. 

**A:**


**Q:** What should the meta description pattern be? Should it be automated or should someone be able to specify it? We assume the latter. 


**A:**

**Q:** We assume meta image should be drawn from the hero image. Any other specs? 

**A:**


**Q:** any other meta specs? 

**A:**


## MVP governance

Sections: [what sections do these belong to, during MVP?]
Role: [who can edit during MVP?] 
URL alias: [what is the url alias pattern?]

