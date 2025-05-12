# Centralizing information and online flows for VA forms


## Background/Problem statement

The VA.gov experience includes information about and access to various VA forms, primarily related to applying for and managing benefits.  Information about these forms appears on multiple content pages, and the forms themselves are not located in a consistent or predictable place within the site IA.  As OCTO continues to digitize critical and supplemental forms that Veterans and their beneficiaries utilize to apply for and manage their benefits, we need to ensure that these forms, and the supporting information about the forms, are are easily findable.  

### Problem 1:  
The information related to VA forms - including what ways a form can be submitted, what information is needed for those forms, and what additional or supplemental forms may be needed - is scattered across multiple pages and often duplicated.  We need to streamline the information so it is provided at the right time in the experience and can be efficiently maintained. 

**Current content pages that contain information related to the submission of a specific form**
1) The "How to apply" page in benefits hubs
    - Examples:
      - [Disability > How to file a claim](https://www.va.gov/disability/how-to-file-claim/), [Health care > How to apply](https://www.va.gov/health-care/how-to-apply/)
      - Sometimes the "how to apply" is not on a dedicated page in the hub such as the [Burials and memorials > Veterans burial allowance](https://www.va.gov/burials-memorials/veterans-burial-allowance/) page
2) Form introduction pages
3) The "About form" page within the find a form experience




### Problem 2: 
The modernized VA.gov benefit experience was built with a benefit-centric organization structure - visitors first select a benefit, then find tasks and information related to that benefit.  OCTO and other teams across VA, are digitizing forms that are not related to any benefits, are related to multiple benefits, are not OMB forms, or are for non-Veteran or non-beneficiary audiences.  In these cases, the benefit-centric IA of VA.gov does not have a clear home for these types of forms.  

**Our Current approach to organizing forms that are not related to a specific benefit**

1) Place the form at the root level of the site as a stand-alone feature.
    - Examples:
      - The forms related to managing dependents - forms 21-686c and 21-674 - live at the root level of the site - https://www.va.gov/view-change-dependents/ - because it is related to multiple benefit categories.
      - The Financial Status report - VA form 5655 - that can be submitted in support of requesting financial assistance with VA debt lives at https://www.va.gov/manage-va-debt/ because it is related to multiple benefit categories.
    - This approach is not scalable over time and creates a number of issues for findability of the form.
      - The existing primary navigation structure does not account for items outside of the benefit categories, so visitors must first select a benefit.  For tasks related to at least 1 benefit, this may be ok, but for tasks that are not specific to a benefit - such as submitting an FSR form 5655 related to debt - there is no clear way to navigate to it.
      - Continuing to place individual items at the root level of the site creates a very broad Information Architecture that creates issues in navigation design. A focused navigation menu (i.e. just benefit categories) doesn't include everything making it challenging to know where to go, while a full navigation menu has too many items at varying levels of specificity (i.e. benefit categories, tasks, and general) making it hard to sift through.
2) Create a section for a group of forms.
    - Examples:
      - The "Supporting forms for claims" section was created to house a number of forms being digitized that were related to multiple benefit types at https://www.va.gov/supporting-forms-for-claims/
      - The Records hub - https://www.va.gov/records/ - houses a few forms and links off to others
    - While this approach provides a landing page with access to all of the different forms, it doesn't always help findability of these forms.
      - The concept of "supporting forms for claims" has very little search value - it as simply a title given to this group of forms.  Visitors are searching for specific forms or looking for informaiton on all the forms for specific use cases - i.e how do I apply for disability with PTSD.  It is also not readily accessible via primary navigation.  A site visitor would need to navigate to a benefit hub, find a link in relevant content, then link over to the specific forms in this section.  
    - Organizing the forms in these areas has challenges.
      - The Records hub is governed by the same hub/spoke structure as other benefit hubs (i.e. Get, Manage, Resources) which creates a confusing structure between what is getting records and what is managing records.
      - There are 9 forms now available from the supporting forms for claims page, and as more launch, there is a need to organize them in a way that helps visitors scan the list of what's available to find the specific form they need. Given many of these forms are for different benefits or different scenarios, organizing them all on one page is challenging. 
      - There could be benefits to having pages that bring together links to related forms for various scenarios (i.e. additional forms needed for your disability claim vs forms related to requesting your medical records), but organzing the forms themselves in this way is not scalable given forms can live in multiple scenarios.
3) Force a form into a benefit hub
    - Examples:
      - The Pre-need Determination for Eligibility for Burial in a VA Cemetery form - form 40-10007 - is applicable to both Veterans and qualified family members.  The form is currently placed within the Veteran burials and memorials hub and the family member benefit hub sends visitors to that section of the site for informaiton and to apply. 
      - A new form flow for requesting a medallion at a private cemetery has a form for a cemetery representative to review and approve that request. The plan is to build that review form flow within the Burials and memorials hub because there isn't a home for the audience.
    - This is not a pattern we want to continue - the Veteran and beneficiary space of the site is intended to house only those features supporting the Veterans and their family or caregivers.
    - This flow will also live within this area of the IA but will not have any entry points to it, meaning that the cemetery officials can only access the approval form via a link in an email.  This IA approach does not provide any room for future growth of a landing page that allows a cemetery representative to access this review form at any time, see any requests in process, or access any other related information or forms.

                    

## Goals

The goal of this initiative is to streamline content and establish a scalable IA for forms information, digitized forms, and form-related tools.  This includes establishing corresponding guidance and governance.  This will help us:
- serve relevent content at the right time in the experience
- reduce duplication of information across the experience
- improve findability of forms and form-related tools
- allow for easier contribution to the digital forms space for teams across VA 
- reduce number of similar pages appearing in search results 


## Proposed solution

- Eliminate the "How to apply" page by reorganizing and structuring and better utilizing the form introduction page and Drupal "About form" page to serve relevant information in a timely manner 
- Establish a forms directory in the VA.gov IA house all OMB forms - including the PDFs and online experiences - in addition to form related tools (i.e. form search and pdf uploads)


### Hypotheses

- Centralizing digitized forms will make it easier for site visitors to find forms and applications.
- Centralizing form-related tools and information will make it easier for visitors to understand all the ways they can complete a form (paper or online) as well as how to submit a completed form (mail or upload).
- Centralizing form-related information will reduce duplicative information across multiple pages resulting in simplified search results and easier findability of key pages, as well as reduce content maintenance.


### Impacted products/experiences

- Individual form flows aross the modernized experience
- Find a form search and about form pages
- Upload completed forms tool
- Content strategy for the how to apply, about form, and form introduction pages


### Challenges/things to solve for

**Hard-coded IA on digitized forms and tools**
- There is no easy way to "move" existing online forms or tools within the IA of the site.  Changing the URLs to move a page/form flow to a new location in the IA requires engineering resources to change the URL in the code, test the changes, and implement redirects.  As well as follow-on content and IA work to update entry points in navigation as well as referring links across the site. 

**Compound forms - form flows that include more than 1 VA form**
- Some online form flows include more than 1 VA form in the flow.  This creates a challenge around where to place that digitized form within this centralized forms space and how to create a relationship between more than 1 information page about the form.  There are different types of compound forms:
  - Additional form is included as a distinct form/flow in the experience via messaging, content, or navigation
    - [Supplemental claim form](https://www.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/) includes the authorization to disclose information to VA form (21-4142, 21/4142a)
    - [Disability claim form](https://www.va.gov/disability/file-disability-claim-form-21-526ez/) - this forms simply provides a message indicating that the intent to file (form 21-0966) was submitted automatically, but for other sub-forms it presents a card display indicating which forms are needed, the status, and helps the user to walk through each sub-form
    - [Disability claim form](https://www.va.gov/disability/file-disability-claim-form-21-526ez/) - this form also 
  - Additional forms is not represented as a distinct form/flow in the experience, the forms appear as a "merged" experience 
    - [Dependents forms 686 and 674](https://www.va.gov/view-change-dependents/add-remove-form-21-686c/) - this form asks questions initially and serves up the proper form questions based on answers
    - [Non-VA medical info release forms 21-4142 and 21-4142a](https://www.va.gov/supporting-forms-for-claims/release-information-to-va-form-21-4142/) - this form does not indentify which form you are completing
  - Forms that are available as a stand-alone form or compound form
    - [Non-VA medical info release forms 21-4142 and 21-4142a](https://www.va.gov/supporting-forms-for-claims/release-information-to-va-form-21-4142/) - this form is available on its own or as part of the disability claim form

**Secondary form flows for different audiences**
-  Some forms trigger a second form flow once they are submitted.  An example would be a request/application form flow that once submitted sends a notification/email to a reviewer or approval who then needs to complete a form flow.  This creates a challenge around how to provide entry points to different forms, especially when they are for different audiences.  This also creates a challenge in determining if the approver form should be in the centralized forms experience or if it should be part of an admin experience for that office.

**Form upload feature**
- Currently the form upload feature requires knowledge of the specific form that is being uploaded.  It acquires that information by only allowing access to it from a specific form detail page.  The navigational structure of this feature has been challenging due to the need to dynamically generate a URL based on the unique form.  Ideally there would not be a need to generate a unique URL, and instead use a form number passed via a parameter based on navigation path or from a user selection would. 

**Placement of key benefit forms**
- There may be some benefit to keep core benefit applications within their specific benefit hubs.  These forms are oftent compound forms and benefit from the close connection to the benefit hub structure.  


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

## Next steps

### Research and data analysis

**Compile existing data and feedback**
- Review Medallia data and past research for feedback related to
    - findability of forms, the supporting forms pages, and the find a form pages
    - understanding of how to submit a form and what formats the forms are available in
    - usability/usefulness of the supporting forms for claims experience
    - usability of the find a forms experience
    - clarity of what's next after submitting or uploading a form
- Review analytics for
  - how frequently are visitors searching for forms and what specific forms are searched for the most
  - what are navigation paths within the supporting forms and find a forms experiences
  - how well utilized is the supporting forms for claims page
  - how often are visitors existing the site from the find a forms or supporting claims pages

Other questions...
- What forms receive the most feedback on being difficult to find?
- What tasks related to forms are the most difficult to complete?

**Usability research (TBD)**
- Gather feedback on prototype related to 
 - Navigation/wayfinding
   - Can visitors find both online and PDF forms?
   - Can visitors navigate from the benefit hubs to the forms space and is that navigation clear?
   - Is linking from a benefit hub to the centralized forms space jarring and are visitors able to navigate back when needed?
 - Content
   - Do visitors clearly understand the ways they can apply?
   - Do visitors understand everything they need to complete an online form?
   - Are form instructions clear?


### Design & IA

- IA and navigational design for the centralized forms structure, including solving for challenging use cases such as compound forms, approver flows, and placement of key benefit forms
- Experience design for the centralized forms landig page, search, about pages, and form upload

### Content 

- Create audit of existing content across the "How to apply", "About form", and form introduction pages
- Map out content structure for a revised template for the "About form" and form introduction pages that consolidates all needed information
- Create new content for the revised "About form" and form introduction pages
- Populate applicable "About form" pages in Drupal
- Work with product teams to implement revised content for form introduction pages
- Archive and redirect "How to apply" pages
- Additional work related to new centralized forms experience
- Updates to design system to reflect new standards, patterns and templates

### Engineering

- Modifications to drupal template and front-end experience for the "About form" page 
- Implementation of new content for the form introduction pages across product teams
- Move online forms into centralized forms space (URL changes, breadcrumb updates, redirects, referral link updates, etc)
- Work related to any changes in the forms search feature
- Work related to any changes in the form upload tool
- Integration of the forms search a nd form upload features into the centralized experience (URLs, breadrumbs, redirects, referral links, etc)
