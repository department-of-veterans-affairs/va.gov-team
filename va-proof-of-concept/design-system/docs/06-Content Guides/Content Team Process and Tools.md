# Phase 1 of Content Creation

### Content Team drafting and internal review

**Summary: Content Team writes the content and copyedits it for site style, including plain language. It goes from rough draft to polished first draft ready for SME review.**

Tools used: Word and Pivotal Tracker

#### Tasks in Word:

- Write the content.
- Edit (showing what’s changed with track changes).
- Comment/ask clarifying questions in the margin within the Word doc.
- Add a date and draft # stamp (manually changing the doc’s name according to our naming conventions).

#### Tasks in Pivotal Tracker:

- After each editing pass, hand off the Word doc to the next person.
- Upload each version after any editing pass (a record of edits at each stage).
- Communicate among content team members in Pivotal Tracker (outside the Word doc).




---



# Phase 2 of Content Creation

### Concurrence process with SMEs

**Summary: Content Team emails the copy deck to SMEs and requests their review. They email it back to us with changes tracked and comments in the margin.**

Tools used: Word and Email

#### Tasks:

- SMEs edit (we consider the SME edits to be suggested edits for us to vet according to our site style and plain-language mandate).
- SMEs comment/put questions in the margin.
- Content Team reviews SME edits, comments, questions.
- Content Team and SMEs pass the Word doc (copydeck) back and forth via email.
- Content Team and SMEs communicate in email when delivering the copy deck back and forth.
- Content Team vets and selectively incorporates SME edits in the copy deck (accepting or rejecting SME edits and rewriting as needed).


**Sample copy deck:**

https://github.com/department-of-veterans-affairs/vets.gov-content/blob/master/templates-and-guides/writing-and-review-templates/Copy_deck_template.docx



---



# Phase 3 of Content Creation

### Staging the content

**Summary: Content Team transfers content from the Word doc to github.**


Tools used: Github and Heroku

#### Tasks:

- Stub out each page in Github.
- Upload content from the copy deck into each stubbed out page.
- Add markdown to achieve bullets, subheads, tables, blue call-out box, address blocks, appropriate spacing, etc.
- Preview each page (Heroku or other preview functionality) after it’s stubbed out.
- Proofread each page in this staging environment (again using preview). Make sure content as it was written in Word works with a new look and feel as a Web page; fix typos, grammatical and syntax errors, plain-language needs, and incorrect formatting.




---



# Phase 4 of Content Creation

### SME review of staged content followed by Content Team incorporation of their edits

**Summary: We send SMEs a Heroku link to the staging environment for their final approval of new content. We also send them a feedback form for compiling any feedback they have. When we receive their feedback in the form, we vet it and then incorporate as appropriate in the Github file.**

Tools used: Email, Heroku, and Word Feedback Form

#### Tasks:

- SMEs review staged content.
- SMEs fill out SME Feedback Form with any last requests/edits to communicate to the Content Team before content goes live.
- Content Team incorporates SME feedback as appropriate into Github files.
- Content Team reviews to make sure edits show on the page as intended.

**SME Feedback Form:** <https://github.com/department-of-veterans-affairs/vets.gov-content/blob/master/templates-and-guides/writing-and-review-templates/SME_content_feedback_template.docx>



---



# Phase 5 of Content Creation

### Final proofread before pages go live

**Summary: This is the last stop before content goes live. The proofreader reads through all the words on each page and clicks on every link to make sure it goes to the right place.**


Tools used: Github and Heroku

#### Tasks:
- Proofread all pages in staging.
- Go into files in the branch to make any prooffixes.
- Commit changes to the PR.
- Preview changes made.




---



# Content Updates to Published Pages

### Making changes to existing content

**Summary: This could originate as stakeholder request or as a DSVA, Ad Hoc, or Content Team initiative (for vets.gov style consistency or plain-language efforts).**


Tools used: Content Update Request Form (CURF), Github,and Heroku

#### Tasks:
- Stakeholder submits change request using CURF.
- Content Team receives an email with the form request for a content change.
- Content Team member creates a new branch, updates Github file, and opens pull request.
- Content Team member reviews changes to make sure they didn’t introduce typos or formatting problems and that they otherwise accurately fulfilled the request.

**Content UpdateRequest Form:**
<https://form.jotform.com/63385439158163>

**Content Update RequestProcess:**
<https://github.com/department-of-veterans-affairs/vets.gov-content/blob/master/templates-and-guides/guides/content-update-form-process.md>



---



# Required functionality with a CMS

- All edits are visible/tracked (as in Word with track changes and in Github with commits/history)
- Preview (as we have now with Heroku)
- Permissions control or approval step (either limit who can make changes or have a     Content Team approval step, so that content can’t go live without appropriate editorial oversight)
- Side by side preview of any two versions
- Accessibility for stakeholders (eliminate the need for CURF submission), DSVA, Ad Hoc,     and So Co
