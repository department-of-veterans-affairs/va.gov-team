# COE Design Doc

**Author(s):** Jesse Cohn 
**Last Updated:** 5/24/21  
**Status:** Draft

**Approvers:** 
- Jason Wolf [ ]
- Jesse Cohn [ ]
- Micah Chiang [ ]
- Jim Adams [ ]
- Kathleen Crawford [ ]

_The intended audience for this document are software engineers, but it should make sense to anyone familiar with software development._

## Background
Veterans need asssistance in getting a home loan, first step is to check for eligibility to get one through the VA. Ideally they should be able to get one online and find out quickly what their next steps are based on their specific information. This eligibility is provided through a Certificate of Eligibility, otherwise known as a COE.

### Where we come in
Since the Veteran's process for viewing thier COE currently depends on the eBenefits platform, we need to build the functionality for the Veteran to view and download their COE on VA.gov. We intend to build this using the specs contained in this document.

### Objectives
- If they have been approved, allow Veterans to download their fully filled out COE as a PDF
- If they have not been approved, tell the Veteran why they were not approved for a COE
- If they have not been approved based on missing information, allow the Veteran to fill out a form to submit the missing information


### High Level Engineering Spec
To build the COE applicaiton and achieve the objectives mentioned above we need a few distict pieces of functionality which will be shown in greater detail later. Let's go objective by objective.

` - If they have been approved, allow Veterans to download their fully filled out COE as a PDF`

We need to be able to check if the Veteran is approved for a COE and then allow them to download a PDF version of that COE. Thankfully the LGY team has provided us with an endpoint that can handle all of the checking as well as handle creation of the PDF, we just need to build the back end and UI needed to utilize them.

###Back End

Since an endpoint exists already that handles much of the logic for deciding approval status we simply need to create an endpoint for the front end to hit that will
  - receive the call from the front end
  - using the profile data make a call to the LGY service
  - pass the returned data from the LGY service to the front end
  
Initial api call from VA.gov to LGY requires ICN and EDIPI, and returns a status of `eligible`, `ineligible`, or `unable to determine`.
  
**Unanswered question** what do we do if LGY returns `ineligible`? What do we do on the front end if it returns `unable to determine`


###Front End

We need to build a UI that will alow the user to see if they have been approved for a COE AND also download tht COE in a PDF. The front end will
  
- send a call to the back end
- based on the data returned from the back end tell the user if they are eligible for a COE
- If the user IS approved for a COE, give them a link to download it
  
Question - How do we `give them a link to download` the COE?
  
Answer - We have been given a second service from LGY that provides the PDF version of the COE.
  
**Uanswered question** Can the back end get both the eligibility AND a link to the pdf version of the COE so that the front end only needs to make one call?


<!--
_A high-level description of the system. This is the most valuable section of the document and will probably receive the most attention. You should explain, at a high level, how your system will work. Don't get bogged down with details; those belong later in the document._

_A diagram showing how the major components communicate is very useful and a great way to start this section. If this system is intended to be a component in a larger system, a diagram showing how it fits in to the larger system will also be appreciated by your readers._

_Most diagrams will need to be updated over time as the design evolves, so please create your diagrams with a program that is easily (and freely) available and attach the diagram source to the document to make it easy for a future maintainer (who could be you) to update the diagrams along with the document._

## Specifics
_Nothing goes here; all the content belongs in the subsections._

### Detailed Design
_Designs that are too detailed for the above High Level Design section belong here. Anything that will require a day or more of work to implement should be described here._

_This is a great place to put APIs, communication protocols, file formats, and the like._

_It is important to include assumptions about what external systems will provide. For example if this system has a method that takes a user id as input, will your implementation assume that the user id is valid? Or if a method has a string parameter, does it assume that the parameter has been sanitized against injection attacks? Having such assumptions explicitly spelled out here before you start implementing increases the chances that misunderstandings will be caught by a reviewer before they lead to bugs or vulnerabilities. Please reference the external system's documentation to justify your assumption whenever possible (and if such documentation doesn't exist, ask the external system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

### Code Location
_The path of the source code in the repository._

### Testing Plan
_How you will verify the behavior of your system. Once the system is written, this section should be updated to reflect the current state of testing and future aspirations._

### Logging
_What your system will record and how._

### Debugging
_How users can debug interactions with your system. When designing a system it's important to think about what tools you can provide to make debugging problems easier. Sometimes it's unclear whether the problem is in your system at all, so a mechanism for isolating a particular interaction and examining it to see if your system behaved as expected is very valuable. Once a system is in use, this is a great place to put tips and recipes for debugging. If this section grows too large, the mechanisms can be summarized here and individual tips can be moved to another document._

### Caveats
_Gotchas, differences between the design and implementation, other potential stumbling blocks for users or maintainers, and their implications and workarounds. Unless something is known to be tricky ahead of time, this section will probably start out empty._

_Rather than deleting it, it's recommended that you keep this section with a simple place holder, since caveats will almost certainly appear down the road._

_To be determined._

### Security Concerns
_This section should describe possible threats (denial of service, malicious requests, etc) and what, if anything, is being done to protect against them. Be sure to list concerns for which you don't have a solution or you believe don't need a solution. Security concerns that we don't need to worry about also belong here (e.g. we don't need to worry about denial of service attacks for this system because it only receives requests from the api server which already has DOS attack protections)._

### Privacy Concerns
_This section should describe any risks related to user data, PII that are added by this new application. Think about flows of user data through systems, places data is stored and logged, places data is displayed to users. Where is user data stored or logged? How long is it stored?_

### Open Questions and Risks
_This section should describe design questions that have not been decided yet, research that needs to be done and potential risks that could make make this system less effective or more difficult to implement._

_Some examples are: Should we communicate using TCP or UDP? How often do we expect our users to interrupt running jobs? This relies on an undocumented third-party API which may be turned off at any point._

_For each question you should include any relevant information you know. For risks you should include estimates of likelihood, cost if they occur and ideas for possible workarounds._

### Work Estimates
_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives
_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

### Future Work
_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._
-->

