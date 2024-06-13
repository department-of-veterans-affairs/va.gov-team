# IIR GI Bill Statement of Benefits Work   
April 2024

---

## Error / Error Messaging
Status: Dev to launch  
Mockups: [Figma](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=52%3A1612&mode=design&t=K9LfE3IQAM24IuF8-1) “Error Messaging Mockups”

**Summary:**
* Users attempting to access their GI Bill Statement of Benefits would encounter an error that said “We’re sorry. Our system isn’t working right now. Please try again or check back soon.” (See: [Staging Screenshots](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=2%3A3557&mode=design&t=K9LfE3IQAM24IuF8-1))
* IIR developer was able to further sort errors into three categories, so we were able to determine what trigger was causing the error
  1) Scheduled system downtime
  2) System failure (general)
  3) Benefit tool is not available, based upon 5 parameters (In processing, sign in name mismatch, no application, ineligible, family member or dependent)
* Mockups were created to match the errors we were able to define. CAIA approved messaging.
* **Next steps:** IIR in process of launching fixes

## Content Updates / Restructuring
Status: Design/Recommendations Complete    
Mockups: Figma “[Additional Tickets](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=82%3A1294&mode=design&t=K9LfE3IQAM24IuF8-1)”

**Summary:**
* While conducting research, a designer noticed a few items that need to be addressed on the GI Bill Statement of Benefits
  1) Content updates - [Ticket 562](https://github.com/department-of-veterans-affairs/va-iir/issues/562)
        * CAIA reviewed the content and did not determine that there was an immediate need to rewrite the page; however, they did note that the restructuring proposed would better serve users, i.e. clear headers would provide a better accessibility experience and the “Need Help” component could be updated to the version that is currently in use
        * The link to “How can I see my Post-9/11 GI Bill benefit payments?” should be updated and we have provided the correct link in the mockups. Potentially the link content should change, too, if we are not sending a user to eBenefits.
        * Headings have been corrected in the mockups
  2) TTY Link for deaf and hard of hearing users - [Ticket 79972](https://github.com/department-of-veterans-affairs/va.gov-team/issues/79972)
        * Added to the mockups
        * This is a small adjustment that just needs to be added to the “Need Help” component.
* **Next steps:** These are minor content and restructuring changes that could be implemented in the interim to a full content audit. IIR does not currently have the capacity to execute on changes. Additionally, CAIA noted that the Enrollment History may also supposed to be showing something other than a summary card component (i.e. a list of enrollment history); however, the staging users we were able to use to show the benefits page vs the error only had the summary box. There's a potential for an issue there, but we don't have the visibility.

## Information Architecture / URLS
Status: CAIA working on audit; assistance required for some changes    
Additional Information: “[Staging Screenshots](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=2%3A3557&mode=design&t=K9LfE3IQAM24IuF8-1)” & “[Additional Tickets](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=82%3A1294&mode=design&t=K9LfE3IQAM24IuF8-1)”

**Summary:**
* While reviewing the flow to access user benefits, we noticed there were discrepancies in the H1s, URLS, and breadcrumbs
* CAIA is correcting the breadcrumbs leading up to the GI Bill status page, but is unable to change the URL for [https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/status](https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/status) because it is not managed in Drupal.
    * Contact: Kristin Ouellette Muskat with CAIA can provide more details about their audit
* For example, 
    * URL: [https://staging.va.gov/education/about-gi-bill-benefits/post-9-11/](https://staging.va.gov/education/about-gi-bill-benefits/post-9-11/)
        * H1: Post-9/11 GI Bill (Chapter 33)
    * URL: [https://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit/](https://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit/)
        * H1: Check Post-9/11 GI Bill Statement of Benefits
    * CAIA is in the process of swapping the URLs here so they match the page content
* **Next Steps:** CAIA is aware of the IA and content issues and is fixing some in the course of their work, but recommend checking in with them to make sure they know what’s being updated and who is able to fix what. 


---

Updated:    
Liza McRuer, IIR, April 25, 2024 - Added information about the Enrollment History summary box as a potential error; updated status on error messaging   
Liza McRuer, IIR, April 17, 2024 - Creation of file
