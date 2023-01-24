# Certificate of Eligibility changelog
**VSA eBenefits Team | July 21, 2021**

---

## Summary
- Incorporated recommendations from usability testing
- Reconciled prototype flow and content with feature in staging
- Incorporated new design direction from Sitewide content team regarding intro page layout and copy
- Created new user flow diagram to illustrate use cases
- Revised initial/unauthorized state for VA Form 26-1880 introduction screen
- Revised authenticated state for intro screen
- Added "Denied" state for "Eligibility/MyCOE" screen
- Reorganized upload screen to place dropdown selector and upload button immediately below list

## References

[Reference mockups](https://preview.uxpin.com/65c0623a799c268173fe1a3cb4375f9ce00ad820#/pages/137557312)

[Amended userflows](https://xd.adobe.com/view/03f5874d-242c-4e74-9616-641276b2b238-56a6/)

## Changelog

### Throughout
- Add padding/margin to last element before blue footer (increase whitespace to at least 56px)

### Landing page/content
- All new content for "How do I get my VA home loan COE?" section
- Content will be added to other static content (Drupal) pages as they are identified

### Intro screens/states
- Added unauthenticated
- Unauthenticated state has no subway map or login widget
- Unauthenticated has all new content
- Authenticated state has all new content (incl. subway map)

### Eligibility/MyCOE screen
- Added "Denied" state to go with auto, available and pending
- Denied state has placeholder copy/content
- **Auto state:** New copy for alert box- 
- **Auto state:** "Make changes..." link need line-break drop it just below paragraph
- **Auto state:** "Find regional center..." link need line-break drop it just below paragraph

### Form screens
- **Step 1:** Stakeholders want prefilled fields vs. static info
- **Step 1:** All new copy, including chapter heading
- Need padding margin between "Finish application..." link and buttons
- Place "Finish application..." link below buttons (Confirmed in library file; changed?)
- For SIP text, use copy/formatting from prototype
- Use correct content/copy for "Need help?" section at bottom
- **Step 1:** Address info; "United States" should be default selection for country dropdown
- **Step 1:** Address and contact info split across two screens (See prototype)
- **Step 1:** Remove contact preferences screen
- **Step 2:** Service selection; add bolding per prototype
- **Step 2:** Match list/loop pattern and content to prototype (Has this changed?)
- **Step 2:** Remove Purple Heart screen
- **Step 3:** Loan history; add bolding per prototype
- **Step 3:** Loan intent; add bolding per prototype
- **Step 3:** Loan history; remove additional info accordion
- **Step 3:** Loan history info; Match headers and txt to prototype, including bolding
- **Step 3:** Loan history info; Match label text
- **Step 3:** Loan history info; Add VA loan number
- **Step 4:** Remove "Do you want to upload..." screen
- **Step 4:** Match document upload formatting and text to prototype

### Confirmation screen
- Match content and formatting to prototype

---

<!--
ToDo:
- Check spinner text
- Confirm size on PDF download link (Can we do that?)
- Get document list

-->
