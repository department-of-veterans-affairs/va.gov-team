# Cerner Rollout VA.gov Updates: Phase 1 Knowledge Transfer

## **Background**

The SSO/Login team designed new patterns on VA.gov health pages (Prescriptions, Medical Records, etc) so that users who are patients at a Cerner facility are guided to the right place and receive the right information on the VA.gov page.  

The Public Websites team will be implementing these changes when the first Cerner facility launches (timeline TBD, point of contact is Lauren Alexanderson), and we're doing a short discovery activity to better understand the implications of this work.

#### What's Changing

- Making updates to static healthcare content on the unauthenticated site.
- Updating content in alert boxes on these pages for authenticated users.
- Adding a second call to action to alert box component.

### Discovery Goals

- Understand design and UX work done to date.
- Determine if we need to make accommodations to the designs for this first phase of work.

## Findings

#### Static content changes on unauthenticated site

This is outlined in the [desktop prototype](https://adhoc.invisionapp.com/share/DYVMI5OXEQN#/screens/409123884_Unauthenticated_Pages). These are straightforward, one-time content updates that should be made to Drupal pages once the changes are rolled out.  

**Considerations**

- No accessibility concerns identified.
- We should reevaluate content in the mock-ups to ensure it still aligns with the roll out and functionality that is coming.

#### Updating content in alert boxes on these pages for authenticated users.

The content updates in alert boxes are text changes that provide context to the calls-to-action at the bottom of the alert box (detailed below). After testing 3 variations of these boxes with users, the team decided to move forward with the approach reflected in the [desktop prototype](https://adhoc.invisionapp.com/share/DYVMI5OXEQN#/screens/409123884_Unauthenticated_Pages), and in the [mobile prototype](https://adhoc.invisionapp.com/share/5QWAJJQNG2J#/409260607_M-Authenticated_Pages_-_Alerts).  

The SSO/Login team worked closely with content to make the headings as succinct as possible, but they're still very long and hard to scan. Our content guidelines don't specifically provide a recommendation for alert box headings, but [do advise 70 characters or less](https://design.va.gov/content-style-guide/page-titles-and-section-titles#section-titles) for sub-section titles. A consult with our a11y specialist revealed the length of these headings, especially with the bold font style, will be challenging for users with cognitive considerations to read.

**Recommendations**

- We should consider changing the headings:
  - Ideally, to "According to our records, you're registered at a medical center that is using the new My VA Health portal", with a sub-heading that then reads:  This facility, [Facility name], is using this as of [date].
  - Alternatively, we could make the heading one sentence and move the second sentence to a new line.
- The messaging in the designs accommodates the use case of a user being registered at one Cerner facility, and one non-Cerner facility. We should re-think the copy for users who may be registered at 2 Cerner facilities.
- The content has dates in it, so we can't necessarily "set-and-forget". For examples, headings say "Beginning on July 15, 2020...".  We should have document our plan to address this.

#### Adding a second call to action to alert box component.

On relevant pages with alert components, logged-in Veterans who are registered at a Cerner facility will now see two call-to-action buttons. One button will send them to My VA Health (aka Cerner), and the other leading them to MHV.

**This design hasn't gone through a formal VSP or VSA accessibility review as of 6/15/20**.  Some accessibility considerations were identified during a quick gut-check meeting on 6/12/20 with Jennifer Strickland, captured below.

- We should also consider changing the buttons to links to encourage users to read the contextual text instead of just clicking a button.
- There is a cognitive dissonance between the headings above the buttons, and the buttons themselves, and there is opportunity to be less ambiguous and more clear about what will happen when a user clicks the button.
- The mark-up should ideally reflect to the user that they have two options between the calls to action (for screenreader and cognition).
  - This means some text needs to be added to clearly reflect the users has two options, and
  - The two options should be in a list element.

**Recommendations**

- Request a complete accessibility review before launching.
- Since this design was tested with users, include buttons rather than links for launch. Use data post-launch to determine if we have a usability issue, or include this in a future, related usability test to see if a link approach is indeed more clear.
- We should re-evaluate the copy to ensure we're making to clear to users that they have two options.
- We should ensure the mark-up will make it clear to screenreader that there is a list of options.

#### Additional Takeaways

- Some facilities are only rolling out certain services on My VA Health, for example scheduling. This means a patient at that facility will see the new alert box pattern on the scheduling page, but not on the Medical record page.

- Historical data older than 3 years will not be moved to the new system, so patients will have to access two systems depending on the date range they're looking for. 

  - The current alert box content/pattern doesn't explain this or give users a way to select a date range.
  - Previous iterations of this design had a box explaining why they were seeing the MHV button when looking for older records.  People found that confusing.

  **Recommendation: **Conduct additional usability tests with Veterans prior to launching a solution with this.

- The VA knows the facilities where a patient is registered, but a patient has no way to disassociate themselves with a facility on their own.  If a patient registered at a Cerner facility at any point, they'll see this new messaging, even if they haven't been to that facility in years.

## Appendix

Documents reviewed:

- [Desktop Invision](https://adhoc.invisionapp.com/share/DYVMI5OXEQN#/screens/409123884_Unauthenticated_Pages)
- [Mobile Invision](https://adhoc.invisionapp.com/share/5QWAJJQNG2J#/409260607_M-Authenticated_Pages_-_Alerts)
- [High level site map for MHV + Cerner patient](https://adhoc.invisionapp.com/share/VMW6WMI9NDU#/screens/407257731_No_Notifications_High_Level_Site_Maps_For_A_MHV_-_Cerner_Patient)

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/sso) 

- [Handoff document](https://docs.google.com/document/d/11OGKfLk0fKd08pqCKT0Wvrt9ze2vZW_PSEn2kJdK714/edit#) from SSO/Login team to Public Websites

