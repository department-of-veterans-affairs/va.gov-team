# Post-MVP Status and Decisions


## 9/8/2021 Marci McGuire
The PDF user research study revealed that almost every test user overlooked three PDF download/Adobe Reader information, regardless of where it was positioned (top of page or next to each PDF link) or how it was styled. The recommendation from the study was to use a modal that would have to be viewed.  After discussing the research findings with Ryan Thurwell (DEPO Design Lead) and Angela Fowler (Accessibility Specialist), we all agreed this was a good use case for a modal.  The modal would be invoked when attempting to download a PDF.  It would provide brief info about downloading & using Adobe Reader, a link to download Adobe Reader, a link to a Resources & Support page about PDFs, and a link to the PDF form itself.

## 8/1/2021 Marci McGuire
The PDF user research study uncovered a wide variety of previously-observed and completely unexpected challenges with users downloading, saving, and opening PDF forms on various operating systems and browsers.  Because we only tested four forms (less than 1%) during the hour-long sessions, John Hashimoto and Marci McGuire agreed it made sense to audit all of the forms available via Find a VA Form to determine how many exhibit the issues observed during user testing.  Upon taking over as Product Owner, Dave Conlon agreed having a sense of how many forms were impacted, as well as how often they were downloaded, would be useful to the VA.  
   - The detail results of this in-depth audit is located here (open in Excel for full functionality): 
[PDF_Audit_Sept_2021.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/7374196/PDF_Audit_Sept_2021.xlsx)
   - A high-level overview of the audit findings are located on the first tab.  
   - The second tab contains all the elements evaluated and the findings.
   - The third tab gives a brief history of PDF for context to show how far behind the current version some of the forms are.
   - Below is a graph showing the most significant findings.  

![image](https://user-images.githubusercontent.com/73354907/137933538-8111891b-a457-4845-bbb3-99aea2bf9a02.png)


## 7/27/2021 Marci McGuire
User research study was conducted from July 27-30.  It was intially meant to test two different ways of informing users that some PDFs could not be completed correct inside a web browser.  After inital internal testing was conducted, the decision was made to introduce a third option and use the test to document some of the specific issues users encountered while attempting to fill out and/or download PDF forms.


## 7/6/2021 Marci McGuire
Transforming Search Terms Iteration 2 was launched.  This update entailed the following:
- Front-end search algorithm changes from March update were incorporated into the Forms API and removed from the Front-End code so that all API users could benefit from the improvements.
- Forms API modifications took advantage of PostGres features to handle minor misspellings, disregard placement/omission of dashes
- UI updates to make action links, buttons and text links consistent with other search tools
- Forms API team added a new keyword field to their PostGres database that allowed the VA to add additional keywords that were not already part of the form name, description, or how the form is used.


## 6/1/2021 Marci McGuire
After receiving several anectodal reports and experiencing first-hand issues with some PDF forms, John Hashimoto and Marci McGuire agreed it made sense to do a new user research session in which we would ask users to open several different PDF forms.  This session would not only allow us to confirm that users are experiencing issues, but also support exploring other options for electronic forms.

## 04/07/2021
In conjunction with the Accessibility, IA and Content teams, we made a decision to temporarily archive form detail pages for Spanish language forms in the CMS as there is currently no template for creating detail pages in Spanish.  As a result, detail pages for Spanish forms contain a mix of Spanish text derived from the CMS custom metadata and English from the detail page template in the CMS. A [backlog ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25008) was created to create a Spanish page template with assistance from the Globalization team. Redirects were also created to point all of the URLs back to the Find a VA Form search landing page.  Forms impacted:

- https://www.va.gov/find-forms/about-form-10-0137-espanol
- https://www.va.gov/find-forms/about-form-10-10ez-espanol
- https://www.va.gov/find-forms/about-form-21p-0510-espanol
- https://www.va.gov/find-forms/about-form-21p-0512s-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0513-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0514-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0516-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0517-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0518-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0519c-1-espanol
- https://www.va.gov/find-forms/about-form-21p-0519s-1-espanol

## 3/24/2021 Marci McGuire
_Use Administration Field for Related To Info_ was launched.  For this change, the Forms API team modified their search to include the Administration field.   THe Front End made a change to add "Related To" in the search results and on the form detail pages to show which VA administration a form was related to (ex. Benefits, Health Care, Education).

## 3/17/2021 Marci McGUire
_Transforming Search Terms Iteration 1_ was launched.  This updated the search algorithm on the front-end so that a valid search term could be passed to the Forms API to produce a better search result.  This change was made to address the problem wherein users did not know the way the form name were formatted in the database, and by leaving out or adding a character, could end up with no results.

## 2/11/2021 Marci McGuire
_Sort by Date_ was introduced to the search results. This fulfilled a request to enable external user of VA forms - such as a state Veterans benefit agency or a Veterans claims agent service - the ability to sort forms to see which were the most current.

## 1/23/2021 Marci McGuire
The post-MVP enhancements to link the Find a VA Form search page to form details pages and online tools was launched on 1/21/2021 and included the ability to sort forms by date.

## 1/05/2021 Marci McGuire
The decision was made to exclude the ability to sort forms by date in the post-MVP launch.  That will come in late Jan/early Feb.

## 12/31/2020 Marci McGuire
_Post-MVP enhancements_ were launched on Jan 18, 2021, which provide direct links from search results to form details page (where they exist) and the ability to sort results by **Form last updated** date.

## 2020/12/21 Marci McGuire
John Hashimoto and Marci McGuire agreed that the features being implemented to connect the search landing page to detail page are low-risk and don't warrant conducting user research.


