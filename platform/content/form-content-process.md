
## Content process for modernizing VA.gov forms

Form stakeholders are: VA form owners and subject matter experts, VA employees processing form, VA employees that help Veterans to complete the form <br>

Form users are: Veterans, Veteran family members, Veteran caregivers, VA employees who help Veterans to complete the form

## Project kickoff and discovery

-----

At the beginning of form or tool work, the product team holds a kickoff to determine discovery steps and project end goal (for example, goal is to allow Veterans to fill out and submit a disability compensation form online).

1. As part of this discovery work, product teams have meetings with VA form stakeholders. The content writer/editor should be a part of this meeting to better understand the following: 
- Is the paper form currently undergoing revisions? 
- Identify use cases for the form. Who uses the form and why and when? 
- What kind of communication or follow up happens after the form is submitted? How are updates communicated to the Veteran? 
- How is the paper form currently processed offline? (This might help inform what type of information may need to go on the form Confirmation page.) 
- Where does this form fit into the larger way or services people currently get the benefit? 
- Review the paper form and form fields to understand how each field is used and for what end
(Ask: Do all form fields translate to online application? Are there any form fields that we don’t need for the online form?)
- Discuss if any of the form language, labels, or questions are confusing 
- Identify related and potentially dependent questions
- Discuss if there is any specific content that should be included on the online's form Introduction page (additional eligibility information?) 
- Discuss if there is any specific content that should be included on the online's form Confirmation page (other related benefits a user  might be eligible for?)


## Determine scope

-----

After the discovery phase, we determine the scope of the project and begin to create issues to track the work. Since content and design work closely with form migrations, I've included some design steps below, so content editors have a picture of the larger process. 

**DESIGN**:
Identify if new functionalities are required for this form. If so, discuss with developer and work on mockups about what the pattern would look like.  

- Use design review process to get feedback from design team
- Check with design system to make sure new patterns aren't reiventing the wheel. 
	

**CONTENT and DESIGN**: 
Content editor begins to create an outline in Github for the form or tool, with a list of content and interaction notes. See an example here: [Design and content specifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/spec-template-mainpage.md).

- Identify how form questions and fields will be rendered (e.g. radio buttons, drop-down fields)
- Identify questions that are dependent on other questions or responses
- What paper instructions need to appear on the online form? 
- What form question/labels need a plain-language edit?  
- Refer to the VA.gov form label masterlist to see if a label or question has already been standardized or gone through a plain language edit. <br>
[See VA.gov form label masterlist of plain language form fields](https://design.va.gov/patterns/form-labels) 
- Discuss with designer what content should go on the form Introduction (subway map) page
- Discuss with designer what content should go on the form Confirmation page

**CONTENT and DESIGN**: 
Discuss the entry and exit points for the form/tool. How will users get to it? It's recommended that an I/A specialist is part of this conversation.  

- Does the form or tool require changes to the navigation or if there any part of the form/tool that requires an applicant to step out of the form (a form within the form)? 
- What related static content needs to be updated to support the form/tool? (For example, do we need to add a CTA button or wizard to Eligiblity and How to Apply pages? Does any Eligiblity or Apply static content need to be added or rewritten to support the tool?) (**Please coordinate with the VSA-public-websites team for all static content. That team is reponsible for writing static page content and updates**)
- Does a new static landing page need to be created to take users to the form/tool? (**If so, please coordinate with the VSA-public-websites team for all static content. That team is reponsible for writing static page content and updates**)
	
	
**CONTENT/DESIGN/DEVELOPER**: 
Discuss if any specific error messaging need to be written for the form/tool or can you pull messaging from our [Error message dictionary](https://design.va.gov/patterns/messaging-dictionary).


## Content review/edit and prototype

-----

**CONTENT EDITOR** does a plain-language and VA.gov voice/tone edit on the Github outline. Using the edited outline, designer creates a high-fidelty prototype of the form/tool. 

**CONTENT EDITOR** begins to write the form’s Introduction and Confirmation pages following guidance here:<br> 
[Form introduction page template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-introduction-page-template.md) <br>
[Form confirmation page guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-confirmation-page.md)

**PRODUCT TEAM PM** schedules a Collaboration Cycle Pre-usability Review with the VSP Platform team once the mockup is ready for review and before user testing sessions begin. 


## Usability testing

-----

We usually do several rounds of usability testing. For the first test, we use the prototype. 

**CONTENT WRITER** should attend some usability sessions so they can look out for language or instructions that still might be unclear, and for questions or labels that need further tweaking.

[Guidance on observing research sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/howto-observer-instructions.md)

**CONTENT WRITER** should update the form Github outline with any content iterations or feedback that comes out of usability testing and research synthesis reports. This is to ensure we are tracking content revisions and feedback in **one single outline** (not in the protoype mockup). 

[Research synthesis how to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/synthesis/how-to-do-research_synthesis.md)


**CONTENT/DESIGN/IA**: 
Finalize form URL and the URL for any new static pages that need to be created. Collaborate with VSP Information Architecture to begin to finalize URLs and other key details. 


## Build files

-----

Once usability sessions are complete, any content updates from the usability session should be input into the Github outline. Developers will use this outline to build out the application/tool in code.  

1. As chapters are built, developer should assign **CONTENT WRITER or EDITOR** as reviewer. 
2. Content writer/editor review PRs and provide additional edits, as needed. 

#### Revision rounds

**CONTENT WRITER** continues to review PRs and provide edits until all changes have been correctly input. 


## VSP Staging review

-----

Once developers build the individual form chapters and design and copy have signed off on them, the developers merge the PRs into a staging environment. This is where the e2e proofread pass happens. 

Content editor looks again at the form in staging. It should include the full flow:

- Static landing pages that take a user into the application or tool
- Form Introduction page
- Form chapters
- Form Confirmation page

This proofread pass is to ensure all edits made in the individual chapter screens make sense with the overall form flow and functionality.
Once changes are implemented, the content editor should review screens again to ensure all changes have been correctly input.


**PRODUCT TEAM PM** schedules a Collaboration Cycle Staging Review with the VSP Platform team before form or tool launches.




