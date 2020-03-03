
## Content process for modernizing VA.gov forms

Form stakeholders are: VA form owners and subject matter experts, VA employees processing form, VA employees that help Veterans to complete the form <br>

Form users are:  Veterans, Veteran family members, Veteran caregivers, VA employees who help Veterans to complete the form

## Project kickoff and discovery

At the beginning of form work, the product team holds a kickoff to determine discovery steps and project end goal (for example, goal is to allow Veterans to fill out and submit a disability compensation form online).

1. As part of this discovery work, product teams have meetings with  VA form stakeholders. Content writer/editor should be a part of this meeting to better understand the following: 
- Is the paper form currently undergoing revisions? 
- Identify use cases for the form. Who uses the form and why and when? 
- What kind of communication or follow up happens after the form is submitted? How are updates communicated to the Veteran? 
- How is the paper form currently processed offline? (This might help inform what type of information may need to go on the form confirmation page.) 
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
	

**DESIGN and CONTENT**: 
Begin to create an outline for each form’s required chapter and create a list of copy needs and interaction notes. See example, [Design and content specifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/spec-template-mainpage.md).

- Identify how form questions and fields will be rendered (e.g, as radio buttons vs text box vs drop down)
- Identify questions that are dependent on other questions 
- What instructions need to appear on the online form? 
- What form question/labels need a plain language edit?  
- Refer to the VA.gov form label masterlist to see if a label or question has already be standardized/plain-language. <br>
[See VA.gov form label masterlist for canonical list of plain language form fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/VA.gov-form-labels.md) 
- Discuss what content to include on the form Introduction page
- Discuss what content to include on the form Confirmation page

**CONTENT and DESIGN**: 
Discuss the entry and exit points for the form. How will users get to the form?

- Does the form require changes to the navigation or if there any part of the form that requires an applicant to step out of the form (a form within the form)? 
- What related static content needs to be updated to support the form? (for example, adding CTA buttons or wizard to Eligiblity and How to Apply pages)
- Does a new static landing page need to be created or updated for the form's launch? (**If so, please coordinate static page updates with the vsa-public-websites team**)
	
**CONTENT/DESIGN/DEVELOPER**: 
Discuss if any specific error messaging need to be written for the form or can you pull messaging from our [Error message dictionary](https://design.va.gov/patterns/messaging-dictionary).


## Plain-language editing and prototype

Content editor does a plain-language edit on the form outline in Github. Using the edited outline, designer creates a high-fidelty prototype of the form. 

Content editor also begins to write the form’s introduction page and confirmation page following guidance here:<br> 
[Form introduction page template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-introduction-page-template.md) <br>
[Form confirmation page guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-confirmation-page.md)

Product team PM schedules a pre-usability check in with Platform team before user testing sessions. 


## Prototype usability testing

We usually do several rounds of usability testing. For the first test, we use a prototype. 

Content writer/editor should attend some usability sessions so they can look out for language or instructions that still might be unclear, and for questions or labels that need further tweaking. 

Content writer should update the form Github outline with any content iterations or feedback that comes out of usability testing. This is to ensure we are tracking content revisions and feedback in one single outline (not in the protoype mockup). 


**CONTENT/DESIGN/IA**: 
Finalize form URL and the URL for any new static pages that need to be created. Collaborate with VSP Information Architecture to begin to finalize URLs and other key details. 


## Build Github files

Once usability sessions are complete and usability feedback/iterations have been implemented into the form Github outline, developers will use this outline to build the form in Github.  

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




