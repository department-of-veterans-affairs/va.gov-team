# Design/content punchlist for VA Form-28-1900 (Chapter 31) / production environment
**VSA eBenefits Team | August 2021**

`James Adams, designer/researcher`

---

## Introduction screen
- [x] **Confirm:** styling of info-box (Note: Since you’re signed in to your account...); should it have the info icon and different spacing?
- [x] Change green button text to: "Apply for Veteran Readiness and Employment"
- [x] **Confirm:** Should "If you're not sure this is the right form, you can go back and answer the questions again," link be included?
- [x] Change "To apply by mail" to H2
- [x] **Confirm** Formatting/spacing is off for "Department of Veterans Affairs" address block; match prototype
- [x] Use download link styling for "Download VA Form 28-1900 (PDF)"
- [x] Be sure of sentence case throughout

### Subway map
- [x] Change first sentence under (1) Prepare to: "When you apply, be sure to have these on hand:"
- [x] **Confirm:** Change "Prepare, Apply, VA review..". headers to H3 (20px) 
- [x] Lower-case the "R" in "Review"

## Wizard
- [x] Intro (Wizard state) copy is different from both mocks and prototype; use content from XD Orientation mocks
- [x] Orientation shows when “Neither” option is selected; the user needs to be a Veteran or service member to continue
- [x] 2A. Other “no” responses also reveal the Orientation module; should we encourage “No” respondents to continue?
- [x] ~~Orientation continues to show when user backs-up to change response.~~ **NOTE:** Steve mentioned a while ago that we should just keep showing the orientation once it's been revealed.
- [x] Padding/margin issues throughout; refer to mocks
- [x] Card is oddly formatted with action link; refer to mocks. **Note:** These are default platform styles for responsive browser sizing.
- [x] 5A. Should “Apply online…” text say “Apply fo Veterans…” like the second action link?
- [x] ~~**Confirm** Why are there “Slide” numbers? Rephrase "slide"~~ **Note:** We had an a11y ticket a few months ago that called for these additions to help SR users better understand the orientation and where they are in it.
- [x] “Orientation” sits on right top of each panel--increase margin/padding
- [x] Follow system date styling on slide 2
- [x] Lower-case the “T” on slides 5, 6, 7, 8, 9 (Be sure of sentence case throughout)
- [x] Agree that there should be a “done” panel/slide
- [x] Cap “Only if different…”?
- [x] Address block differences? “Street” vs. “Street address”; state/province/region?
- [x] “Required” dropped to next line on moving question
- [x] ~~Really big text box for 1 two-digit number on years of education question~~ **Note:** We have since moved to a dropdown with more descriptive options.

## Form
- [ ] **Confirm:** Contact info for "Need help?" section above footer
- [x] Change first chapter title to: "Step 1 of 4:  Applicant information"
- [x] ~~**Confirm:** Vertical positioning of "Finish this application later;" above or below buttons?~~ **Note:** This requires a platform level change
- [x] Add copy above address fields per prototype, starting with: "Mailing address"
- [ ] **Confirm** Can we pre-select U.S. for country? **Note:** Can, but would require more effort than is feasible in this ticket
- [x] Move "(Required)" to immediately after, "Are you moving in the next 30 days?"
- [ ] Use Bitter vs. Source Sans on Comm prefs screen lead-in: "VR&E has two communication options to make counseling easier:" **Note:** Mockup uses Source Sans.
- [ ] Position "(*Choose at least 1)" immediately after: "When is the best time for you to meet with your  counselor?" **Note**: This ends up wrapping due to container constraints
- [x] Lower-case "I" in: "Applicant information" (Be sure of sentence case throughout)
- [x] Lower-case "I" in: "Additional information" (Be sure of sentence case throughout)
- [x] Lower-case "P" in: "Communication preferences" (Be sure of sentence case throughout)

---
