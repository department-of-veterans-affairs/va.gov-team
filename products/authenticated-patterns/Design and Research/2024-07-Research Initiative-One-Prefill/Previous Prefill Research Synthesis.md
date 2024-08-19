# Previous Research Synthesis - What we know about Prefill
## Authenticated Experience Design Patterns (AEDP) Team 8.12.2024

### Introduction

The AEDP team is tasked with taking the best design patterns used (both officially and unofficially) on VA.gov, improving them for a wider audience, and recommending them to the USWDS for inclusion in their pattern library. Our process began with collecting all the potential patterns that could be considered and prioritizing them as a team based on both importance and feasibility (see [Pattern Prioritization mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719935240619/2a4978c3cf5c7320fbf5c37f26fa0860d0798589?sender=u4cef3aa06e6e500fdad48741)). We emerged from that workshop with Prefill as our first component and this document details out why we chose this and how we determined our testing prototype. 

### Why Prefill?

Our team determined early on that Prefill was a pattern we wanted to work on first for a variety of reasons. To start, it was already a component being used throughout the site in a variety of ways. It gave the engineering team a leg up to be able to more easily investigate how it’s being used and how to make that current code more efficient. Additionally, it was closely tied to another pattern ([Help users to… Update Prefilled Information](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/22)) that the team wanted to tackle next, and it scored high on both importance and feasibility, so we decided to select Prefill and began investigating its history at VA.gov.

### Previous research conducted

[Previous Research on Prefill](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721244474954/caac99516209e8112055cd58d858c8e279552337?sender=u4cef3aa06e6e500fdad48741) is a mural that Morgan put together that captures the previous GitHub tickets, Slack conversations, and additional materials related to other potential patterns. While the component itself is utilized frequently across the site, there were only a few instances of it coming up in natural conversation in previous research sessions. Those research session happened with the following teams
- Disability Benefits Team 
- Ask VA Team
- Pension Benefits Team
- Veteran Facing Forms Team 

### Feedback from teams that use prefill

Those teams provided feedback in the [Prefill Feedback Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721841580875/c3be52d2e6ba2ab27b04562b9c97ee0f05f843eb?sender=u4cef3aa06e6e500fdad48741) that Christine put together to capture their experiences using the component in their product so far. Some of the big insights from those teams include:
- Veterans will login to take advantage of the prefill feature
- Veterans expect more information to be prefilled for them than what we provide
- Veterans are not clear on what happens to their prefilled data when they edit it (as in, where does it get saved - to the form or to their profile?)
- The intro page can host many alerts, and sometimes the prefill alert is deprioritized for other things in order to avoid alert fatigue
- There is a common use case where someone is completing a form on behalf of a Veteran so they create their own login, but there is not the ability to associate your ‘role’ or ‘relationship’ to the Veteran within the profile, so the wrong data would be prefilled on your behalf in those scenarios.

### Variations Seen in Production

Meanwhile, the engineering team searched the codebase for all the different places the prefill component was being used so that we could figure out which forms we to look at as examples of how it is used in production. They put together a [document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/patterns/prefill/Prefill-existing-usage-notes.md) that highlights all the times the component is used in production, and we used that to start looking at forms together in staging to find the different ways the component is implemented across the site. From that initial research, we discovered a few variations of ways this component was handled across the site including
- Where and how often the prefill alert messages were displayed
- How ‘locked’ data and ‘editable’ data were displayed
- What the ‘edit’ process was like
- Where the edited data is saved

### Creating our Testing Plan

As we reviewed the forms in staging that used this component, we felt that there were two that stood out as covering a variety of the implementations mentioned above: the [1010-EZR](https://www.figma.com/design/tggcJk382w9yQ0ElwKfh3N/10-10EZR?t=gTq087164JPEuRGd-0) (Update your VA Health Benefits Information) and the [10182](https://www.figma.com/design/BplQkEDZzD8NPPNmLrhvXv/Request-a-Board-Appeal-%2F-Notice-of-Disagreement-(VA-10182)?t=TlhWrvo22ysfsXXc-0) (Request a Board Appeal). The first shows both a version of prefilled data that is locked as well as unlocked, while the latter shows a method of editing the data that uses a workflow called ‘edit as a sub-task’ where the user is shown a new screen to edit their data on and then looped back to the previous screen to continue forward within the form after they complete their edits. We have used these two forms as a baseline and added some variations in the actual testing tasks to see what performs better with users. These variations include:
- How the prefilled data is displayed in both a ‘locked’ and ‘edit’ form ([Address block component](https://design.va.gov/components/address-block) versus gray block variation)
- The language used around why users cannot edit certain data
- The ‘edit’ process and how the previous ‘bad’ data is displayed on the edit page
- The location of the alert both on the page and within the overall form
- ‘Where’ the edit process happens (within a ‘profile-like’ setting or within the form itself)

### CAIA Feedback

The design team joined CAIA’s office hours on Tuesday, August 6th and got feedback on an alternate design to display prefilled data. While the idea of using the card component was explored previously, the use case doesn’t quite fit because cards are typically shown in multiples, while prefilled data is usually shown all together. However, the address component also doesn’t quite fit either because there can be more data prefilled than just addresses. CAIA recommended the use of a gray box that is similar to what Ask VA uses to display information the user previously provided (a very closely related use case). There are some additional questions pending for CAIA, and a [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90140) has been submitted to work with them in the future on some of the variations we created for this testing plan.

### The Final Prototype
The team settled on three task variations for this round of testing that we have named Green, Yellow and Purple. We will rotate the order that we show them so that we remove the possibility of biasing results based on what is seen first. The variations shown in each of the prototypes are listed out below. 

#### The green task tests the following variations:
- The unauthenticated alert
- The alert at the bottom of the Intro page to form 10-10EZR 
- The prefill alert only on the Intro page and NOT the subsequent form pages
- The ‘locked’ prefilled data view in the ‘address’ component
- The word ‘Note’ in bold
- The ‘editable’ prefilled data view in the ‘address’ component
- The ‘edit’ process happening within the ‘profile’ environment (nametag header, progress bar removed, and button text states ‘Save to Profile’)
- The ‘edit’ process provides data within the form fields
- ‘Success’ alert confirms their updated data saves to their profile 

#### The yellow task tests the following variations:
- The prefill alert is ONLY shown on the form pages, not on the Intro page
- The ‘locked’ prefilled data is shown in a gray box variation
- ‘Note’ is not bolded
- The information below the locked prefill data includes messaging around WHY we don’t allow edits to certain types of data
- The ‘editable’ prefilled data view in the gray box variation
- The ‘edit’ process keeps them within the form flow
- The ‘edit’ process provides data within the form fields
- ‘Success’ alert confirms their updated data saves to their profile 

#### The purple task tests the following variations:
- The prefill alert is shown at the top of the Intro page
- We let them know ahead of time that their changes will only affect this form
- There are multiple prefill data fields available to edit
- The ‘edit’ process provides old data within a locked gray box view
- ‘Success’ alert confirms change was only made within the form itself

### Additional Relevant Murals

[Prefill Discovery](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722517036440/a204683ebc4372199abf3ae7d7f8da6cbd60f6d5?sender=u4cef3aa06e6e500fdad48741) is a mural that Lynn and Becky worked on that defines our shared definition of ‘Prefill’, highlights current pain points and how we think we can solve and test them. It also contains a baseline user flow of the prefill process.

[Prefill in the Wild](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721249754513/f02ba038a943ebb6dbe07355b5b1d473f42dc16b?sender=u4cef3aa06e6e500fdad48741) is a mural that Christine created and the whole team has collaborated on to document different forms that use the prefill component currently and show the variations we see throughout VA.gov. It also tracks old and current conversations related to prefill and the relevant teams to those conversations. Additionally, Becky has detailed out the challenges, user needs and the things that patterns should help users do.

