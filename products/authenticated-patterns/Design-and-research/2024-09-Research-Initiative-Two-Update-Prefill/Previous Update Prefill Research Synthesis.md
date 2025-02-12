# Previous Research Synthesis - What we know about Update Prefill
## Authenticated Experience Design Patterns (AEDP) Team 9.11.2024

### Introduction
The AEDP team identifies design patterns used throughout VA.gov, improves them for a wider audience, and recommends them to the USWDS for inclusion in their pattern library. Our process began with collecting all the potential patterns that could be considered and prioritizing them as a team based on both importance and feasibility (see [Pattern Prioritization mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719935240619/2a4978c3cf5c7320fbf5c37f26fa0860d0798589?sender=u4cef3aa06e6e500fdad48741)). 

From the workshop, we prioritized [Help users to... Know when their information is Prefilled](https://github.com/orgs/department-of-veterans-affairs/projects/1314?pane=issue&itemId=71462355) (AKA Prefill) as our first pattern, knowing that this should be followed up with [Help users to… Update Prefilled Information](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/22) (AKA Update Prefill). 

This document details previous research we have done on this pattern. It will later include content that describes our reasoning for creating the testing prototype that will be built out.

### Why Update Prefill?
The Prefill and Update Prefill patterns are closely related. The Prefill pattern helps users know when their information is prefilled in their authenticated forms through alerts and prefilled fields. The Update Prefill pattern helps users edit this prefilled information by letting the user know what happens when they edit prefilled information and confirming the change has been made. 

The current update process often takes on the List and Loop pattern, but there are also instances of in-line editing in production that the Design System team generally wants to avoid. There are a variety of ways this is implemented throughout VA.gov currently, so there are many forms for us to choose from to create our next testing prototype.

### Variations Seen in Production
The ['Update prefilled information' in the Wild mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538218743/e8a34db6e16086f9122fd2e0927edf5607bfa273?sender=u4cef3aa06e6e500fdad48741) has screenshots of forms that currently use this pattern. Those forms include:
- 526EZ - File for disability compensation
- 10-10EZ - Apply for VA healthcare
- 21P-527EZ - Apply for Veterans Pension benefits
- 26-1880 - Request a Certificate of Eligibility
- 10182 - Request a Board Appeal
- Order medical supplies form
  
### What is Prefill versus Update Prefill?
#### Prefill
Our team has defined the following elements to be part of the Prefill pattern (Note: the actual screenshots may change depending on the research findings):

- Info Alert component

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Info%20Alert%20Component.png" width="600" />

- Component to show prefilled data

  - Locked (uneditable) state
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Locked%20State.png" width="600" />

   - Content guidance on how to change uneditable info

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/How%20to%20change%20locked%20data.png" width="600" />

   - Editable state
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Editable%20state.png" width="600" />
     
   - Content guidance on where the edit will save

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Where%20the%20edit%20saves.png" width="600" />

#### Update Prefill
These are the elements which we consider to be part of the Update Prefill pattern:
- Edit prefilled info page

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Edit%20prefilled%20info.png" width="600" />

- Format of providing old data to edit (See above)
- Confirmation message when edit is complete

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Confirmation%20message.png" width="600" />

- (potentially) Option to select where the edit saves

### Ongoing Slack Conversations on Update Prefill
Teams such as the Platform Design System, Forms, Ask VA, Accredited Representative Management, and the Benefits team have all been engaged in recent conversations in Slack regarding this pattern. 

Many questions focus on the Phone Number component and how using different labels could mess up the Profile data. There are also questions about updating prefilled info in the middle of a form, and if a user needs to keep selecting 'Continue' in order for the edit to save to their profile. 

These conversations are tracked in the ['Update prefilled information' in the Wild mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538218743/e8a34db6e16086f9122fd2e0927edf5607bfa273?sender=u4cef3aa06e6e500fdad48741). 


To be added in future sprints...

### Creating our Testing Plan
Our current testing plan is laid out in the [Update prefilled information Discovery mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538963593/ec6a1e4d13493cc9fbb07898a31120cec2bf69c0?sender=u4cef3aa06e6e500fdad48741).

We will update it as the results from our Prefill research study are disseminated. 

### CAIA Feedback


### The Final Prototype


#### The green task tests the following variations:


#### The yellow task tests the following variations:


#### The purple task tests the following variations:


### Additional Relevant Murals


