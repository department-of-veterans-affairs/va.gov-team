
## Content process for modernizing VA.gov forms

Form stakeholders are: VA form owners and subject matter experts, VA employees processing form, VA employees that help Veterans to complete the form <br>

Form users are:  Veterans, Veteran family members, Veteran caregivers, VA employees who help Veterans to complete the form

## Project kickoff and discovery

At the beginning of form work, the product team holds a kickoff to determine discovery steps and project end goal (for example, goal is to allow Veterans to fill out and submit a disability compensation form online).

1. As part of this discovery work, product teams have meetings with  VA form stakeholders. Content writer/editor should be a part of this meeting to better understand the following: 
- Is the paper form currently undergoing revisions? 
- Identify use cases for the form. Who uses the form and why and when? 
- What kind of communication or follow up happens after the form is submitted? How are updates communicated to the Veteran? 
- How is the paper form currently processed offline? 
- Review the paper form and form fields to understand how each field is used and for what end 
(Ask: Do all form fields translate to online application? Are there any form fields that we don’t need for the online form?)
- Discuss if any of the form language, labels, or questions are confusing 
- Identify related and potentially dependent questions
- Discuss if there is any specific content that stakeholders think should be included on the online's form Introduction page
- Discuss if there is any specific content that stakeholder think should be included on the online's form Confirmation page


## Determine scope

After the discovery phase, we determine the scope of the project and begin to create issues to track the work. Since content and design work closely with form migrations, I've included some design steps below, so content editors have picture of the larger process. 

**DESIGN**:
Identify if new functionalities are required for this form. If so, discuss with developer and work on high fidelity mockups about what the pattern would look like.  

- Use design review process to get feedback from design team
- Check with design system to make sure new patterns aren't reiventing the wheel. 
	

**DESIGN**: 
Create an outline for each form’s required chapter. See example, [526-ez chapter outlines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/design/all-claims/chapter-outlines).

- Identify how form questions and fields will be rendered (e.g, as radio buttons vs text box vs drop down)
- Identify questions that are dependent on other questions 

	 
**CONTENT and DESIGN**: 
Create a list of copy needs: 

- What instructions need to appear on the online form? 
- Do form question/labels need a plain language edit?  
- Refer to the VA.gov form label masterlist to see if a label or question has already be standardized/plain-language. 
[See VA.gov form label masterlist for canonical list of plain language form fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/VA.gov-form-labels.md) 
- Discuss what content will be included on the form Introduction page
- Discuss what content will be included on the form Confirmation page

**CONTENT and DESIGN**: 
Discuss the entry and exit points for the form. How will users get to the form?

- Does the form require changes to the navigation or if there any part of the form that requires an applicant to step out of the form (a form within the form)? 
- What related static content needs to be updated to support the form? (for example, adding CTA buttons or wizard to Eligiblity and How to Apply pages)
- Does a new static landing page need to be created or updated for the form's launch? (*If so, please coordinate with the vsa-public-websites team*)
	
**CONTENT/DESIGN/DEVELOPER**: 
Discuss if any specific error messaging need to be written for the form or can you pull messaging from our [Error message dictionary](https://design.va.gov/patterns/messaging-dictionary).


## Plain-language editing and prototype

Content editor does a plain language edit on all form chapter outlines in Github. Using the content editor's recommended plain-language edits, designer creates a prototype of the form in a high-fidelity environment. 

Content editor also begins to write the form’s introduction page and confirmation page. *See examples here: this resource is still a WIP*. 

Content editor copy edits and reviews the prototype before usability testing and stakeholder reviews. 

Product team PM schedules a pre-usability check in with Platform team before user testing sessions. 


## Prototype usability testing

We usually do several rounds of usability testing. For the first test, we use a prototype. 

Content writer/editor should attend some usability sessions so they can look out for language or instructions that still might be unclear, and for questions or labels that need further tweaking. 

There is usually a round or two of iterations to the prototype before the form's content and design are built in Github files and merged into a staging environment. 


**CONTENT/DESIGN/IA**: 
Finalize form URL and the URL for any new static pages that need to be created to. Collaborate with VSP Information Architecture to begin to finalize URL and other key details. 


## Build Github files

Once usability feedback/iterations have been implemented into the prototype, the form's content and design is built out into Github.  
Developers build a form chapter by chapter, using the edited prototype.

1. As chapters are built, developer should assign content writer/editor and designer as reviewer. 
2. Content writer/editor review PRs and provide additional edits, as needed. 

### Revision rounds

Content editor continues to review PRs and provide edits until all changes have been correctly input. 

## Staging review

Once developers build the individual form chapters and design and copy have signed off on them, the developers merge the PRs into a staging environment. This is where the e2e proofread pass happens. 

Content editor looks again at the form in staging. It should include the full flow:

- Form Introduction page
- Form chapters
- Form Confirmation page

This proofread pass is to ensure all edits made in the individual chapter screens make sense with the overall form flow and functionality.

Content editor will upload all proofread changes to a e2e proofread ticket for the developer to implement. 
Once changes are implemented, the content editor should review screens again to ensure all changes have been correctly input. 

Product team PM schedules a staging review with Platform team before form is rolled out to users.




