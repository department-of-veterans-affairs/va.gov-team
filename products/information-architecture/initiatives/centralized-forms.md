# Centralizing VA forms

## Background

OCTO continues to digitize critical and supplemental forms that Veterans and their beneficiaries utilize to apply for and manage their benefits.  In addition, OCTO and other teams across VA, are looking to digitize forms that are not related to any benefit, are related to multiple benefits, are for non-Veteran or beneficiary audiences, etc.  The modernized VA.gov benefit experience was built with a benefit-centric organization structure - visitors first select a benefit, then find tasks and information related to that benefit.  This creates a challenge when determining where in the IA to place these digitized forms that ensures the visitors that need them can find them. 
- reporting harassment
- forms for school certifying officials
- forms for approvers such as cemetery memorial requests
- forms for non-benefit applications or certifications such as accredited representatives


Some approaches utilized to accomodate forms that do not have a 1:1 relationship to a benefit category:

- Place the form at the root level of the site.
  - The harassment reporting form was built at the top level in the IA of VA.gov at https://www.va.gov/report-harassment/  (actual digitized form on hold).
  - This approach is not scalable over time, and creates a number of issues for findability of the form.
  - Forms not part of a benefit hub mean they are generallly not part of the main navigation of the site.  Visitors would either need to access these forms via a direct link in a prominent place, or via search. This makes it difficult to determine where to even start looking.  For a form related to harassment, this adds cognitive load on top of an already very sensitive topic. 

- Create a section for a group of forms.
  - The "Supporting forms for claims" section was created to house a number of forms being digitized that were related to multiple benefit types at https://www.va.gov/supporting-forms-for-claims/.
  - While this approach has worked by providing a landing page with visibility and access to all of the different forms, it has quickly outgrown its space.
  - There are 9 forms now live in this space, and as more launch, there is a need to organize them in a way that helps visitors find the specific form they need. In addition, these forms are often part of larger form flows.


- aligning the page with the VA.gov look and feel
- driving traffic to top tasks and to the top digital versions of form applications with new content (because the page already had consistently high organic search traffic and the potential to provide better conversion)
- adding analytics tracking to all links and downloads

                    

## Goals

The goals of this iteration are
- to create a centralized place for all digitized forms and form-related tasks (i.e. form search, pdf download, pdf upload, online completion)
- to eliminate the need to categorize by benefit or create unique spaces (i.e. /supporting-forms-for-claims/) for each new group of forms
- to eliminate the duplication of content that exists for benefit applications between the form detail page (about pg), the how to apply page, and the introduction pages of the online forms
- to reduce the number of pages fighting for search ranking 
- to allow for growth of and wider contribution to the digital forms space

## Proposed solution

- Create a single space in the IA for placement of all online forms and applications, as well as all form and application related tools.
- This space would allow visitors to 
  - search for a specific form
  - download the most recent PDF of a form
  - complete the form online
  - upload a completed pdf form
  - see related forms or other ways to complete a form (i.e. as part of a compound form flow)


## Hypotheses

- Centralizing all digitized forms will make it easier for Veterans and their beneficiaries, as well as other audiences, to find forms and applications.
- Centralizing all form-related tools and information will make it easier for visitors to understand all the ways they can complete a form (paper or online) as well as how to submit a completed form (mail or upload).
- Centralizing all form-related information will reduce duplicative information across multiple pages resulting in simplified search results and easier findability of key pages, as well as reduce content maintenance.
- 



## Challenges

- Hard-coded IA on existing digitized forms
  - There is no easy way to "move" existing digitized forms within the IA of the site.  Changing the URLs to move a page/form flow to a new location in the IA requires engineering resources to change the URL in the code, test the changes, and implement redirects.  As well as follow-on content and IA work to update entry points in navigation as well as referring links across the site.
-
- Compound forms - form flows that include more than 1 VA form
  - A main form with a supplemental form included - i.e. the Pension application also includes the intent to file
  - Two forms merged into a single flow - i.e. the dependents forms 686 and 674, or the non-VA medical info release forms 21-4142 and 21-4142a
  - Forms that can be completed independently or as part of a larger form/application - i.e. the intent file form 21-0966
  - Forms that are a part of multiple larger forms/applications - i.e. the intent to file form 21-0966 is part of the disability and pension applications

-  Approval flows
  -  forms that require reviews


## Impacted products/experiences

- Individual form flows aross the modernized experience
- Find a form search and about form pages
- Upload completed forms tool
- Content strategy for the how to apply, about form, and form introduction pages

## Measuring Success

### Desirable outcomes
- Increased findability of specific forms
- Improved search results
- Increased discoverability of form-related tools
- Increased discoverability of related forms or other ways to complete forms
- Increased understandability of of form-related content 
- Decreased content maintenance time of duplicative form related information
- Decreased maintainance of referring links
- Decreased IA design time 


## Current experience

### Current IA for digitized forms and form-related tools

https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696009952077/c8bad5a3f7128491afb4c6a1d749acbaba480d81?wid=0-1723147246499

### Form-related content pages

- How to apply pages
  - How to apply pages are often stand-alone pages specifically for a benefit application that includes instructions on the various ways to apply.  This information can also be embedded in other pages about a benefit or form. 
  - Stand-alone examples: [How to apply for VA health care](www.va.gov/health-care/how-to-apply/), [How to file a VA disability claim](https://www.va.gov/disability/how-to-file-claim/)
  - Embedded examples: [Survivors Pension](https://www.va.gov/family-and-caregiver-benefits/survivor-compensation/survivors-pension/), [Supporting forms for VA claims](https://www.va.gov/supporting-forms-for-claims/)
  - [Standards for a stand-alone how to apply page are available in the design system](https://design.va.gov/templates/forms/how-to-apply)
-
- Form introduction pages
  - Every online application or form has an /introduction page that includes information about the online form experience.
  - Examples: [Apply for VA health care](www.va.gov/health-care/apply-for-health-care-form-10-10ez/), [Request priority processing for an existing claim](https://www.va.gov/supporting-forms-for-claims/request-priority-processing-form-20-10207/introduction)
  - [Standards for the form introduction template are available in the design system](https://design.va.gov/templates/forms/introduction)
-
- About form detail pages
  - Detail pages in the [Find a VA form experience](https://www.va.gov/find-forms/) provide brief information about a form, access to the most recent PDF, and a link to the online form or upload tool when applicable.
  - Example: [About VA Form 10-10EZ](www.va.gov/find-forms/about-form-10-10ez/), [About VA Form 20-10207](https://www.va.gov/find-forms/about-form-20-10207/)
  - Standards for the about form detail page are not officially established.

      
### Find a form experience 

- [Find a VA form](www.va.gov/find-a-form/)


### Upload form experience

- [Upload a VA form](https://www.va.gov/find-forms/upload/)

