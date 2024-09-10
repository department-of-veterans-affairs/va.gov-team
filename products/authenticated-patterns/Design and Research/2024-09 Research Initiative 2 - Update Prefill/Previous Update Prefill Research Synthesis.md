# Previous Research Synthesis - What we know about Update Prefill
## Authenticated Experience Design Patterns (AEDP) Team 9.10.2024

### Introduction

The AEDP team is tasked with taking the best design patterns used (both officially and unofficially) on VA.gov, improving them for a wider audience, and recommending them to the USWDS for inclusion in their pattern library. Our process began with collecting all the potential patterns that could be considered and prioritizing them as a team based on both importance and feasibility (see [Pattern Prioritization mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719935240619/2a4978c3cf5c7320fbf5c37f26fa0860d0798589?sender=u4cef3aa06e6e500fdad48741)). We emerged from that workshop with Prefill as our first pattern, and we quickly determined that this should be followed up with ([Help users to… Update Prefilled Information](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/22)). This document details our understanding around the previous research we have done on this pattern and will later include content that describes our reasoning for creating the testing prototype that we will build out.

### Why Update Prefill?

Once our team decided on Prefill as our first pattern, it was easy to see that Update Prefill should be the next in line as the two are closely related. The current update process often takes on the List and Loop pattern, but there are also instances of an in-line edit process used in production. There are a variety of ways this is implemented throughout VA.gov currently, so there are many forms from us to choose from in order to create our next testing prototype.

### What is Prefill versus Update Prefill?

Our team has defined the following elements to be part of the Prefill pattern:
- Info Alert component (with a few content variations)
- Component to show prefilled data
  - Locked state
      - Guidance on how to change info that is uneditable on VA.gov 
  - Editable state
      - Guidance on where the edit will save 

These are the elements which we consider to be part of the Update Prefill pattern:
- Edit prefilled info page
- Format of providing old data to edit
- Confirmation message when edit is complete
- (potentially) Option to select where the edit saves

### Ongoing Slack Conversations on Update Prefill
Teams such as the Platform Design System, Forms, AskVA, Accredited Representative Management, and the Benefits team have all been engaged in recent conversations in Slack regarding this pattern. Many questions focus on the Phone Number component and how using different labels could mess up the Profile data. There are also questions about updating prefilled info in the middle of a form, and if a user needs to keep selecting 'Continue' in order for the edit to save to their profile. These conversations are tracked in the ['Update prefilled information' in the Wild mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538218743/e8a34db6e16086f9122fd2e0927edf5607bfa273?sender=u4cef3aa06e6e500fdad48741). 

### Variations Seen in Production
The same mural mentioned above also contains screenshots of a variety of forms that currently use this pattern. Those forms include:
- 526EZ - File for disability compensation
- 10-10EZ - Apply for VA healthcare
- 21P-527EZ - Apply for Veterans Pension benefits
- 26-1880 - Request a Certificate of Eligibility
- 10182 - Request a Board Appeal
- Order medical supplies form
  

To be added in future sprints...

### Creating our Testing Plan
Our current testing plan is laid out in the [Update prefilled information Discovery mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538963593/ec6a1e4d13493cc9fbb07898a31120cec2bf69c0?sender=u4cef3aa06e6e500fdad48741), but we will be updating it as the results from our Prefill research study are disseminated. 

### CAIA Feedback


### The Final Prototype


#### The green task tests the following variations:


#### The yellow task tests the following variations:


#### The purple task tests the following variations:


### Additional Relevant Murals


