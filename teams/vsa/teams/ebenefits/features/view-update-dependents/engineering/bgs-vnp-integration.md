***WIP***

## Form 686 Submission
## Initial Plan/Notes for Integrating with BGS VNP Services

- Get access to EVSS source code in Rational.  Perform initial code review.
  - There are a LOT of "streams" in the EVSS (CM) project in Rational.  
  - Within the EVSS (CM) project, the `EVSS_Sustainment_CM` stream is similar to the "trunk".  (This is where code gets branched off to be worked on, and then merged back in when a task is complete.)
  - The `EVSS_Sustainment_CM` stream contains *at least* two projects specific to 686: 
  
    | Project Name  | Description                                                                   |
    | ------------- |-------------------------------------------------------------------------------|
    | `evss-wss-wss-686-services`| implements the back-end REST services supporting the 686 process |
    | `evss-wss-wss-686-webparts`| the front-end components for the 686                             |

- Prepare questions for EVSS Sustainment team related to code structure, formatting, etc.
  - Can the `EVSS_Sustainment_CM` stream be checked out into Eclipse as a project, rather than browsing files in the repository?
  - Can the project be setup/configured to run locally?
  - There are multiple projects under `evss-wss-wss-686-services`, what are the main differences between the `wss-686-services`, `wss-686-api`, and `wss-686-services-web` projects? 
  - Is the user able to complete part of the form, save it, and come back to it later?  
  - What gets called when the user clicks submits (and save, if applicable).
- Schedule meeting with EVSS Sustainment team for demo/walkthrough.  
- Review eBenefits code.
  - Understand the workflow and code setup, in order to trace the steps from UI process and what gets called on the backend.
  - Understand requirements for formatting and validating data.
  - Understand how VNP plays a role in the form 686 submission process.
  - Document each step in the process flow of submitting a completed 686 on eBen.
  - Understand error handling!
- Create plan for implementing in vets-api.
  - Confirm/validate that ECSP requests have been submitted and access has been granted to vets-api for all required endpoints. (Testing on dev?)
  - Create new endpoints within vets-api for each of the steps that currently exist in eBen.
  - Add service endpoints to lighthouse-bgs as needed.

## Prerequisites
In order to access the EVSS source code, Rational training courses must be completed in TMS (at the time of this writing there are six required courses).  Completion certificates must be sent to the Rational Tools team with a request to access Rational and the EVSS (CM) project.  A request also needs to be submitted to the Rational Tools team for access to download Eclipse with integrated Rational plugins installed (or a request can be made to download the standalone Rational plugins if a version of Eclipse is already installed).  Once access has been granted, Eclipse needs to be installed and configured properly in order to view EVSS source code and work items.
