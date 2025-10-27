# Research Plan for Veteran Facing Forms Team, Review Page, Fall 2024 

## Background ##
In numerous studies new variations of the review page have been presented to users, but the work has never been completed or considered successful. In its current state, the review page has numerous bugs that require re-architecting the entire page and flow. The page also has numerous 508 defects. And, as the VA Design System has evolved, there is a desire to practice the "one thing per page" principle in the editing process as well.

Because of these needs and due to technical constraints, the VFF team is implementing a new version of the review page that we call the "hub and spoke" model. In this model, users can edit the contents of a single form page back on the original form page, and after the edits are made, they will return to the review page. If there are conditional pages that require subsequent edits, the user will be alerted to those changes after they return to the review page and will go to these new pages to make updates one-by-one. Previous studies have had users have to navigate through an entire chapter (or the entire form) to edit a single page in a form flow.

This study is split into two interconnected parts that we will call "part a" and "part b". Both parts share the same research goals, research questions, and hypotheses. Part a will be remote, unmoderated first click testing with non-AT/sighted users and part b will be remote, moderated task-based usability testing. In both parts, we will present users with similar tasks and the same screens from new “hub and spoke” review page model. We hope to verify that this new review page model can lead to AT users and non-AT users successfully and confidently completing tasks.

Again, this study is split into two parts:
1. Part a: ~54 (6 cohorts, separated by age) non-AT/sighted Veterans will participate in remote, unmoderated first click testing using Optimal Workshop (Chalkmark).
2. Part b: 4-5 assisted technology-using Veterans will participate in remote, moderated task-based usability testing using Zoom.

Particularly, we hope to:
- Reduce cognitive load on users wanting to review or change their answers after they've walked through an entire form.
- Make it easier for users to edit or change answers.
- Build in accessible features so that any edit links and error states are accessible by default.

[Link to review page product brief](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/Review%20Page/Product%20Outline.md).
## OCTO Priorities
Which OCTO priorities does this research support?
This research supports 2 of the 2024 OCTO Objectives:
1. Our digital experiences are the best way to access VA health care and benefits.
2. Our platforms are the best way to deliver products at VA.
### Veteran Journey
Where does your product fit into the Veteran journey? Are there moments that matter?
Since Veterans can submit forms with VA between 180 and 90 days before separating from the military, this work impacts the Veteran journey from serving, to getting out, and all the way to dying as survivors can also file forms on their own behalf. This work especially maps to the taking care of myself part of the Veteran journey.
Key moments this research touches in the Veteran journey are:
1. Engaging VA to access benefits and services
2. Finding additional sources of income
3. Taking care of my health
4. Taking care of my family
5. Planning for longer term care
6. Deciding how and where to be memorialized
## Research Goals
What are you trying to learn from this research?
1. Evaluate the usability of the "hub and spoke" model for the form review process for non-AT using/sighted Veterans (part a) and AT-using Veterans (part b).
2. Validate that Veterans can successfully understand complex patterns displayed on the review page (for example: File upload and list and loop) and edit form responses in those patterns even if all the information/features of that content is not replicated on the review page.
3. Validate that Veterans can successfully answer new questions that may be required due to changing an answer during the review process.

## Outcome

### How will this research advance your product to the next phase in the design process? What will you do with your learnings?
We believe the results from the study will allow us to verify the design changes we’ve made in the new review page “hub and spoke” model are usable for on-AT using/sighted Veterans (part a. and AT-using Veterans (part b). If we don’t reach our success benchmarks for tasks across both parts of the study, we’ll flag the design elements involved in that task for future work and research.

## Research questions
### GOAL 1: Evaluate the usability of the "hub and spoke" model for the form review process for users.
1. Can participants successfully navigate to content in the form, modify that content, and return to the review page?
2. How confident are participants in this task?
3. Do participants try to interact with the progress bar as a way to navigate through the form in a non-linear way?

### GOAL 2: Validate that participants can interact with content on the review page they've already reviewed mid-form (File upload and list and loop) even when all the information/features of that content are not replicated on the review page.
1. Can participants successfully complete a task where they have to update list and loop content?
2. If not, where else are they clicking instead?
3. Do participants think their form data is incomplete when not all of the data from the form appears on the review page for file upload and list and loop?

### GOAL 3. Understand the Veteran expectation for answering new questions that may be required due to changing an answer during the review process.
1. Do participants successfully complete a follow up task(s) that an error/alert message(s) ask them to complete?

## Hypothesis
1. We hypothesize that Veterans will be able to successfully edit/change their answers and then return to the review page.
2. We hypothesize that even when not all form content is visible on the review page (for example, in a list and loop), Veterans will have enough context to understand where and how to review/change/edit answers in a given form flow.
3. We hypothesize that Veterans will correctly respond to alert messages telling them they need to complete additional follow up task(s) that an error/alert message(s) ask them to complete.

## Methodology
1. Part a: ~54 (6 cohorts, separated by age) non-AT/sighted Veterans will participate in remote, unmoderated first click testing using Optimal Workshop (Chalkmark). They will complete tasks using screenshots taken from Figma that will require them to click once on a screenshot and then answer 1-2 follow-up questions after each task to glean participants' impressions of the ease of the task and their confidence that where they clicked is correct.
2. Part b: 4-5 assisted technology-using Veterans will participate in remote, moderated task-based usability testing using Zoom as well as the assistive technology of their choice. A mock up of the review page will be in Codespace. Participants will complete tasks and then answer 1-2 follow-up questions after each task to glean their impressions of the ease of the task and their confidence that they completed it correctly. 

### Location
- Part a: Remote, Unmoderated, Optimal Workshop 1st click testing
- Part b: Remote, moderated task-based usability testing in Zoom
- Point of contact: Jaci Wilkinson & Beth Pandone
- Title of part a study in Optimal Workshop: Form review page (in Platform Support folder)
- Equipment used by participants in research: browser of choice
