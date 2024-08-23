# IIR GI Bill Statement of Benefits Work   
April - June 2024

---

## Error / Error Messaging
Status: Corrected and launched in April 2024 
Mockups: [Figma](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=52%3A1612&mode=design&t=K9LfE3IQAM24IuF8-1) “Error Messaging Mockups”

**Summary:**
* Users attempting to access their GI Bill Statement of Benefits would encounter an error that said “We’re sorry. Our system isn’t working right now. Please try again or check back soon.” (See: [Staging Screenshots](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=2%3A3557&mode=design&t=K9LfE3IQAM24IuF8-1))
* IIR developer was able to further sort errors into three categories, so we were able to determine what trigger was causing the error
  1) Scheduled system downtime
  2) System failure (general)
  3) Benefit tool is not available, based upon 5 parameters (In processing, sign in name mismatch, no application, ineligible, family member or dependent)
* Mockups were created to match the errors we were able to define. CAIA approved messaging.
* **Next steps:** Additional work could be done to further investigate the error breakdown. Several of the errors have been rolled up in a singular reason, due to the system being unable to differenatiate. There is some indication that will be better in the future as backend systems are updated.

## Content Updates / Restructuring
Status: IIR FE has completed and launched the changes recommended by design in June 2024   
Mockups: Figma “[Additional Tickets](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=82%3A1294&mode=design&t=K9LfE3IQAM24IuF8-1)”

**Summary:**
* While conducting research, a designer noticed a few items that need to be addressed on the GI Bill Statement of Benefits
  1) Content updates - [Ticket 562](https://github.com/department-of-veterans-affairs/va-iir/issues/562)
        * CAIA reviewed the content and did not determine that there was an immediate need to rewrite the page; however, they did note that the restructuring proposed would better serve users, i.e. clear headers would provide a better accessibility experience and the “Need Help” component could be updated to the version that is currently in use
        * The link to “How can I see my Post-9/11 GI Bill benefit payments?” should be updated and we have provided the correct link in the mockups, as well as updated the link content.
        * Headings have been corrected in the mockups
        * **As of June 2024, the updated page is live**
  2) TTY Link for deaf and hard of hearing users - [Ticket 79972](https://github.com/department-of-veterans-affairs/va.gov-team/issues/79972)
        * Added to the mockups
        * This is a small adjustment that just needs to be added to the “Need Help” component.
        * **As of June 2024, the updated page is live**
* **Next steps:** IIR Front End has implemented the changes to the GIBS page.

Additionally, CAIA and our FE noted that the Enrollment History should potentially be showing something other than a summary card component (when the history is populated, it shows an accordion of the users' "change history" and total of on-campus hours); however, the staging users we had available to view the benefits page only showed the summary box. There's a potential for improvement to ensure users understand what change history is, as well as updating the messaging in the summary box, but we don't have the visibility to determine the proper treatment for enrollment history. We included a screenshot and some of the considerations in our Figma file under [Enrollment History-WIP](https://www.figma.com/design/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?node-id=368-1484&t=ksos2T9ij1wlfcwW-1).  **This will require further investigation to correct.**

## Information Architecture / URLS
Status: CAIA working on audit; IIR implementing changes to breadcrumb content and urls    
Additional Information: “[Staging Screenshots](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=2%3A3557&mode=design&t=K9LfE3IQAM24IuF8-1)” & “[Additional Tickets](https://www.figma.com/file/fY52BhHs0EI9ODWrqKZnZV/GI-Bill-Statement-of-Benefits?type=design&node-id=82%3A1294&mode=design&t=K9LfE3IQAM24IuF8-1)”

**Summary:**
* While reviewing the flow to access user benefits, we noticed there were discrepancies in the H1s, URLS, and breadcrumbs
* CAIA is correcting the breadcrumbs leading up to the GI Bill status page, but was initially unable to change the URL for [https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/status](https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/status) because it is not managed in Drupal.
    * Contact: Kristin Ouellette Muskat with CAIA can provide more details about their audit
* For example, prior to the eventual change, the urls did not match the H1s:    
    * URL: [https://staging.va.gov/education/about-gi-bill-benefits/post-9-11/](https://staging.va.gov/education/about-gi-bill-benefits/post-9-11/)
        * H1: Post-9/11 GI Bill (Chapter 33)
    * URL: [https://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit/](https://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit/)
        * H1: Check Post-9/11 GI Bill Statement of Benefits
    * In May 2024, the URLS were corrected by another team. The link "va.gov/education/gi-bill/post-9-11/ch-33-benefit/” was updated to “va.gov/education/check-post-9-11-gi-bill-benefits/." The breadcrumb link redirect the began triggering a broken link error within the cms helpdesk workflow. After it was brought to our attention, IIR agreed to investigate and is in the process of determining how to correct so that we can address the breadcrumb errors in conjunction with the page restructuring. 
* **Next Steps:** IIR looking into pathways to fix the breadcrumbs. Per our FE/BE engineers, the breadcrumbs do not live within the content of the page, so they are looking to gain access. The fixes are straightforward, just updating urls and content, but we need to find the origin. **As of 6/24/24, the [ticket](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/702) is still open.**

---

Updated:    
Liza McRuer, IIR, June 25, 2024 - Updated with details and links around enrollment history    
Liza McRuer, IIR, June 24, 2024 - Updated with additional details on the work the team completed   
Liza McRuer, IIR, May 21, 2024 - Updated with additional work the team was able to complete prior to handoff   
Liza McRuer, IIR, April 25, 2024 - Added information about the Enrollment History summary box as a potential error; updated status on error messaging      
Liza McRuer, IIR, April 17, 2024 - Creation of file   
