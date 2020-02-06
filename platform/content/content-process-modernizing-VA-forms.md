
## Content process for modernizing VA.gov forms

Form stakeholders are: VA form owners and subject matter experts, VA employees processing form, VA employees that help Veterans to complete the form <br>

Form users are:  Veterans, Veteran family members, Veteran caregivers, VA employees who help Veterans to complete the form

## Project kickoff and discovery

At the beginning of form work, the product team holds a kickoff to determine discovery steps and project end goal (for example, goal is to allow Veterans to fill out and submit a disability compensation form online.) 

1. As part of this discovery work, product teams have meetings with stakeholders to discuss the following: 
- Is the paper form currently undergoing revisions? 
- Identify use cases for the form. Who uses the form and why and when? 
- What kind of communication or follow up happens after the form is submitted? How are updates communicated to the Veteran? 
- How is the paper form currently processed offline? 

- What’s the backend process for the form?  (We need to identify how data needs to be collected based on the BE process)

- Review paper form and form fields to understand how each field is used and for what end 
(Ask: Do all form fields translate to online application? Are there any form fields that we don’t need for the online form?)

- How could the form be tweaked to easily relieve burden from VA employees
- Discuss if any of the form language or questions are confusing to you
- Identify related and potentially dependent questions
- Discuss if there is any specific content that should be included on the form Introduction page
- Discuss if there is any specific content that should be included on the form Confirmation page

2. Sometimes, as part of discovery work, the designer will hold user interviews or surveys to identify the paint points for the user (Most common pain points for users are:

	- Knowing which form they should use and when
	- Understanding confusing questions on a form 
	- Knowing when and how they will hear back about the status of their application 

## Determine scope

After the discovery phase, we determine the scope of the project and begin to create issues to track the work.

**DESIGN**: identify scope of project. Identify if new functionalities are required for this form. If so, discuss with developer and work on high fidelity mockups about what the pattern would look like.  

	• Get feedback from design team
  	• Check with core team to make sure new patterns aren't reinventing the wheel
  	• Test new functionalities, if necessary
	
**DESIGN**: 
Use design review process to confirm that functionalities identified as out-of-scope are truly non-critical to the success of the form process.

**DESIGN**: 
Create an outline for each form’s required chapter

	 • Identify how form questions/fields will be rendered (e.g, radio button vs. free form vs. drop down)
	 • Identify questions that are dependent on another question
	 
**DESIGN and CONTENT**: 
Create a list of copy needs (Do we need to plain language any of the form instruction, questions, or labels? or are the form fields straightforward and can be used for online form)

[See VA.gov form label masterlist for canonical list of plain language form fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/VA.gov-form-labels.md) 

**DESIGN and CONTENT**: Discuss the entry and exit points for the form? How will users get to the form?

  	- Does the form require changes to navigation or require an applicant to step out of the form flow (for example, to read additional content or to download another form) 
  	- Do we need to create a new static landing page for the form? If so, content to work with public-website team on any static pages needed to support the form. 
	- What related static content needs to be updated to support the form (for example, adding CTA button to Eligibility and How to Apply pages)
	- Does the form require a simple apply button or, in the case of EDU forms where there are several forms, do we need an apply “wizard” to guide users to the correct form? 
	
**DESIGN/CONTENT/DEVELOPER**: 
Discuss if we need to write any specific error messaging for this form or can we pull messaging from our [Error message dictionary](https://design.va.gov/patterns/messaging-dictionary).

**DESIGN**: 
Determine the usability testing and stakeholder review timing 

**DESIGN/CONTENT/IA**: 
Determine form URL and the URL for any new static pages that need to be created to support the form.  

## Plain-language editing and prototype

Designer begins to create form chapter outlines in Github. Example, [526-ez chapter outlines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/design/all-claims/chapter-outlines).

Using these chapter outlines, content editor does a plain language edit on all the form’s instructional text and form fields. Using the content editor's recommended plain-language edits, designer creates a prototype of the form in a high fidelity environment. 

Content editor also begins to write the form’s introduction page and confirmation page. 

Content editor copy edits and reviews the prototype before usability testing and stakeholder reviews. 

## Prototype usability testing and stakeholder review

We usually do several rounds of usability testing. For the first test, we use a prototype. During testing, we look for unclear language and if we need to tweak questions. 
We look to see if the form patterns are clear and are working. 
We’ll hold a 2nd round of user testing on the prototype if necessary. 

After (or at the same time as) user usability testing, the prototype is shared with stakeholders for their feedback. 
There is usually a round or two of iterations to the prototype before the form's content and design are built in Github files and merged into a staging environment. 


## Build Github files

Once final iterations have been implemented into the form prototype, the form's content and design is built into Github.  
Developers build a form chapter by chapter, using the prototype design and edited content.

1. As chapters are built, developer will assign content editor and designer as reviewer. 
2. Content editor and design review PRs, and provide additional edits, as needed. 

### Revision rounds

Content editor continues to review PRs and provide edits until all changes have been correctly input. 
Designer will also review PRs to ensure design and form flow works. Design will provide necessary changes or tweaks as needed. 

## Proofread staging review

Once developers build the individual form chapters and design and copy have signed off on them, the developers merge the PRs into a staging environment. This is where the content e2e proofread pass happens. 

Content and design look again at the form in staging. It should include the full flow:

- Form Introduction page
- Form chapters
- Form Confirmation page

This proofread pass is to ensure all edits made in the individual chapter screens make sense with the overall form flow and functionality.
Content editor will upload all proofread changes to a e2e proofread ticket for the developer to implement. 
Once changes are implemented, the content edit will review updated screens to ensure all changes have been correctly input. 


## Usability testing and stakeholder review (part 2)

Ideally, content should have reviewed all parts of a form in staging before another round of usability testing and stakeholder review happens, but sometimes that doesn’t always happen. 
After this 2nd round of user testing and stakeholder review, there might be more content/design revisions to implement. 
Implement user and stakeholder feedback. And hold a 2nd round of user testing on the form in staging environment, if necessary. 


