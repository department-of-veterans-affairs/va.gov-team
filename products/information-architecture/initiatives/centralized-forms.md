# Centralizing VA forms

## Background

OCTO continues to digitize critical and supplemental forms that Veterans and their beneficiaries utilize to apply for and manage their benefits.  In addition, OCTO and other teams across VA, are looking to digitize forms that are not related to any benefit, are related to multiple benefits, are for non-Veteran or beneficiary audiences, etc.  The modernized VA.gov benefit experience was built with a benefit-centric organization structure - visitors first select a benefit, then find tasks and information related to that benefit.  This creates a challenge when determining where in the IA to place these digitized forms that ensures the visitors that need them can find them. 
- reporting harassment
- forms for school certifying officials
- forms for approvers such as cemetery memorial requests
- forms for non-benefit applications or certifications such as accredited representatives


Current approach to organizing forms that are not related to a single benefit

- Place the form at the root level of the site as a stand-alone feature.
  - Examples:
    - The forms related to managing dependents lives at the root level of the site - https://www.va.gov/view-change-dependents - because it is related to multiple benefit categories.
    - The harassment reporting form was built at the top level in the IA of VA.gov at https://www.va.gov/report-harassment/ (actual digitized form on hold) because it does not relate to any benefit categories.
  - This approach is not scalable over time and creates a number of issues for findability of the form.
    - Continuing to place individual items at the root level of the site creates a very broad Information Architecture that can increase cognitive load as visitors try to sort through numerous menu options to find something specific.  Imagine a navigation menu with a list of 30 items - some are benefit categories, some are specific tasks, and some are general items.
    - The existing primary navigation structure does not account for items outside of the benefit categories, so there is no place to include navigational links to these top level features.  Visitors  either need to access these forms via a crosslink in related benefit categories, a direct link placed in the header, home page or footer, or via search.
    - The benefit-centric navigation model makes it difficult to determine where to even start looking.  For a form used for something like harassment reporting, this adds cognitive load on top of an already very sensitive topic. 

- Create a section for a group of forms.
  - Examples:
    - The "Supporting forms for claims" section was created to house a number of forms being digitized that were related to multiple benefit types at https://www.va.gov/supporting-forms-for-claims/.
    - The Records hub - https://www.va.gov/records/ - houses a few forms and links off to others.
    - The school administrators section of the site - https://www.va.gov/school-administrators/ - was created to house information related to school certifying officials as well as digitized forms they use. 
- While this approach provides a landing page with visibility and access to all of the different forms, it does not help findability of these forms.
    - The concept of "supporting forms for claims" does not have any search value.  Visitors are searching for specific forms or looking for informaiton on all the forms for specific use cases - i.e how do I apply for disability with PTSD.
    - Organizing the forms in these areas has challenges.  The Records hub is governed by the same hub/spoke structure as other benefit hubs (i.e. Get, Manage, Resources) which creates a confusing structure between what is getting records and what is managing records.
    - There are 9 forms now available from the supporting forms for claims page, and as more launch, there is a need to organize them in a way that helps visitors find the specific form they need. Given many of these forms are for different benefits or different scenarios, organizing them all on one page is challenging. In addition, these forms are often part of larger form flows and the current content and length of the page makes it challenging to detail out this information.
    - There could be benefits to having pages that bring together links to related forms for various scenarios (i.e. additional forms needed for your disability claim vs forms related to requesting your medical records), but organzing the forms themselves in this way is not scalable given forms can live in multiple scenarios.


Build a non-Veteran/beneficiary form flow in the Veteran experience
  - Example:  A new form for requesting a medallion at a private cemetery can be submitted by a Veteran's family member but as part of that request, a cemetery representative must review and approve that request. The plan is to build that review form flow within the Burials and memorials hub.
  - This is not a pattern we want to continue - the Veteran and beneficiary space of the site is intended to house only those features supporting the Veterans and their family or caregivers.
  - This flow will also live within this area of the IA but will not have any entry points to it, meaning that the cemetery officials can only access the approval form via a link in an email.  This IA approach does not provide any room for future growth of a landing page that allows a cemetery representative to access this review form at any time, see any requests in process, or access any other related information or forms.

                    

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

