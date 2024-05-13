# Preliminary Form Improvements: CHAMPVA Registration (VA Form 10-10d)

This document lists first-impression quick fixes to Form 10-10d discovered during user research. **It is not intended to serve as a research report and does not cover all research findings**. It is not the result of full analysis but rather documents gut-feeling best guesses by researchers.


## Bug Fixes



1. The dropdown to select a state works fine on the first page where it appears, but it turns into a text input box that only accepts two capitalized letters on subsequent pages.
    * **Recommendation**: Ensure the input to select a state is a drop-down on all pages. 
2. Different pages are jumping all over after interacting with elements or clicking buttons. 
    * **Recommendation:** The user should consistently land in the same place after interacting with an input (either at the top of the page or with the thing they just changed centered).
3. Error messaging is triggered while users input information rather than after they’ve finished.
    * **Recommendation:** Ensure error messaging is only triggered when the user leaves the input (i.e., after they’ve put in their information).
4. The Medicare card upload shows “complete” even if the user uploaded only the front or only the back (CHAMPVA needs both the front and the back of the card to process the application).
    * **Recommendation:** Separate Medicare upload confirmation messages for the front and back of the card. Only show “complete” if they upload that side of the card.
    * Place data validation on the page that requires users to select an item with both the “front” and “back” labels before they can advance to the next page.
5. On the review page, content in the accordions still reads “Gender” rather than “Sex listed at birth.”
    * **Recommendation:** Ensure the content on the review screen matches the content on the form itself.
6. The form initiates data validation errors that may not be necessary.
    * **Recommendation:** Verify that all error messages are appropriate and triggered at the right time.
7. The address pages currently have three address lines. This may have been a spillover from changes to the address section for FMP.
    * **Recommendation:** Remove the third address line from the address fields.
8. There seems to be some issue with populating the dynamic content on some upload pages. In particular, we noticed some content was being cut off once the marriage certificate was uploaded.
    * **Recommendation:** Make sure that dynamic content is populating appropriately throughout the form. Below is an example screenshot:
      
![union between Sarah Conner sponsor and .](https://github.com/department-of-veterans-affairs/va.gov-team/assets/147765613/1f7569e0-6ecf-4ab3-8e3f-27db0896e5c2)

9. Some participants were confused after inputting information for a second applicant on what to do next. There is no confirmation that the form accepted the information, and the fields do not collapse when entry is finished like the first applicant; users are forced to press continue with all of the input fields still expanded.
    * **Recommendation**: Provide the users with feedback that the information has been captured successfully. 


## Other form improvements


### Content considerations



10. Some participants seemed to be confused when two pages had the same heading, one after the other. This happened most frequently with “Relationship to Sponsor”: when the first answer was “child,” another page with the same heading appeared asking the participant to clarify that relationship (e.g., biological child, stepchild).
    * **Recommendation:** Ensure each page has a unique heading.
11. Some participants missed the “Outstanding documents” on the document upload screen at the end of the flow.
    * **Recommendation**: Consider adding contextual "The following documents are missing" for content on the supporting documents acknowledgment page and make it stand out visually.
12. No participants added a VA file number for anyone beyond the Sponsor. Some were confused by it and didn’t know if not inputting one would cause issues for their application.
    * **Recommendation:** Remove “VA file number” from all applicant pages.
13. At least 5 participants wanted to know what documents they would need ahead of time or were concerned that their session would time out if they had to look for documents that weren’t right in front of them.
    * **Recommendation:** Provide users with a list of necessary documents before starting the application. 
14. Participants wanted to know how long it would take to process their application. Some anticipated it would take 30-90 days, even with the digital form.
    * **Recommendation:** Provide an estimate of how long processing will take on the confirmation page and in a confirmation email. Consider offering instructions on how to check up on the status of their application.
15. The document upload drop-down on the birth certificate page also mentions a Social Security card, but the card isn’t mentioned anywhere else on the page. This confused some participants.
    * **Recommendation:** Ensure all options are listed in the content and that nothing appears as an option in the drop-downs that aren’t listed elsewhere.
16. Some participants weren’t sure if their document upload had gone through.
    * **Recommendation:** Add a confirmation message on the document upload screens when participants have successfully uploaded each individual document and all documents that are asked for on that screen.
17. Most participants didn’t initially notice “required” vs. “optional” document uploads. Those who did notice stated that they’d send in optional documents anyway because they assumed that if the VA asked for those documents, they would need them. 
    * **Recommendation:** To mitigate confusion, consider removing the content on the form mentioning Optional/Required files. 
18. Some participants included children who didn’t live with them on their application (e.g., adult children living at college or minor children who lived with a different parent). In these cases, participants were confused about whose contact information and addresses they should enter for the applicant.
    * **Recommendation:** Explain how contact information and addresses will be used so users are able to make informed choices on which information to provide.


### Design considerations



19. Participants were annoyed that they had to type in their address again after typing the same address for their sponsor.
    * **Recommendation**: Offer the ability to select a previous address after the sponsor's address rather than after the first applicant.
20. Participants were confused that they were sent to the 10-7959c (OHI) upload screen even if they answered that they didn’t have other health insurance. That confusion grew if they realized it was required. Some participants were also confused that they had to fill out the form once they’d already uploaded their Medicare card, stating that they thought that should be enough information and they shouldn’t have to fill out the form.
    * **Recommendation**: If the user only has Medicare and no other OHI, consider not requiring them to fill out the OHI form.
21. At least 4 participants initially missed the “Add an applicant” button on the list-and-loop pattern.
    * **Recommendation:** In the short term, make the button stand out more (it is currently a white button with light blue text and outlines). In the long term, consider switching to the new list-and-loop pattern or work on a new variant. 
22. Some participants weren’t sure if they’d successfully added an applicant, even after selecting the “Add an applicant” button and entering the information on the first screen.
    * **Recommendation:** Add a confirmation message or some sort of feedback when a user has successfully added a new applicant so they can recognize that their action was successful.
23. The confirmation screen has positive messaging even when required fields remain. This could lead to users not realizing they have outstanding tasks to complete.
    * **Recommendation** Ensure that messaging on the confirmation screen tonally and visually matches the state of completion of the entire CHAMPVA application, not just that they have submitted 10-10d.
24. Participants expected that, if they logged in, Sponsor information and any other relevant information in their account would pre-populate.
    * **Recommendation:** Ensure the application pre-populates appropriately when participants log in. 
25. Many participants didn’t notice or struggled to find the “Start your application without signing in.” They almost immediately clicked on “Sign in to check your application status” instead, even though the scenario set by researchers was that they had never applied for CHAMPVA before. Many had to be told where to find the “Start your application without signing in” link so they could continue the test.
    * **Recommendation:** Increase the prominence of the “Start your application without signing in” link. Consider moving the “Sign in to check your application status” lower on the page to reduce distraction.
26. Some participants expressed frustration when they had to enter information they thought the VA already had (e.g., a list of their dependents) or information they’d entered earlier on the form (e.g., re-entering contact info and Medicare info on the OHI form).
    * **Recommendation:** In the future, connect as many VA systems as possible so users don’t have to enter redundant information and can instead confirm their information or select from a list. Additionally, move forward on integrating 10-7959c into 10-10d. 
27. Some participants wanted the questions about their relationship to the Sponsor to appear earlier in the flow so that the form would tailor language and questions appropriately (e.g., not requiring contact information for minor dependents).
    * **Recommendation:** Explore reordering questions on the flow to streamline the user experience based on previous entries.
28. Some participants expected the application wouldn’t let them advance unless they provided the required uploads and were surprised when they weren’t stopped.
    * **Recommendation:** Consider making required document uploads required to move ahead in the application, or including a checkbox that forces users to confirm that they know they’re skipping a required upload.
