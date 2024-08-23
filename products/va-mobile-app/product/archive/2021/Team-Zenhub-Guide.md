# [Archive] Mobile Team - Zenhub Guide


# Overview

In August, 2021, the VA Mobile app team overhauled its use of Zenhub as a product management tool. Each phase of work was designed to solve a few key challenges:

**Phase 1:** Migrate repositories: Migrate all issues from va.gov-team to va-mobile-app, to solve:

* Laggy, slow board due to many teams using a single, shared repo
* Board did not display va-mobile-app PRs
* Difficult to find closed issues because of a single, shared repo across dozens of teams

* Note that we still use the va.gov-team repo for our product documentation beyond Zenhub

**Phase 2:** Set up multiple boards to more fully use Zenhub functionality, to allow us to:

* Track a more granular view of progress across UX and Engineering work
* Allow a single user story to float from UX to Engineering

We also conducted a general inventory and clean up, which included closing redundant or old issues, creating a new set of clear labels, setting up the Releases and Sprints features, and so on.

The following documentation is meant to serve as a guide for our team and stakeholders to understand how to read and use our Zenhub boards.

## Sample progression of issues across the board



![image](https://user-images.githubusercontent.com/7320097/131267743-ac87e88d-70d6-48e5-b482-a9a33b8ae697.png)

![image](https://user-images.githubusercontent.com/7320097/131267753-6d49e8fd-4f03-44c6-91c9-850490a874d7.png)



# Boards

We use multiple boards (“workspaces” in ZH-speak) to allow UX and Engineering teams to track their work in a more granular manner than a single, combined board. Though the same issues exist on every board, but we use filters and the “workflow” feature in ZH to sort them into different columns (“pipelines”) on each board. For example, an issue in the Backlog column of the UX board will appear in the Pre-Engineering column of the Engineering board.

Here’s what you can expect to find on each board:


## [Product View board ](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/board?notFullScreen=false&repos=292052392&showPRs=false&showPipelineDescriptions=false&showReleases=false&showReviewers=false)


<table>
  <tr>
   <td>What is this board used for?
   </td>
   <td>A broad view of all current and upcoming work across Engineering and UX teams.
   </td>
  </tr>
  <tr>
   <td>Who uses this board?
   </td>
   <td>Product managers, UX/Eng managers, VA Product Owners
   </td>
  </tr>
  <tr>
   <td>When is this board used?
   </td>
   <td>Grooming/Refinement: move issues from the New Issues column into Icebox or Product Management for incomplete stories; or UX Backlog or Eng Backlog for fully refined stories (title + description are complete, labels, epics, and estimates are present) \
 \
Release sign off: check box on the release ticket
   </td>
  </tr>
</table>


Here’s what belongs in each column of the Product board:


<table>
  <tr>
   <td><strong>Column/Pipeline Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Criteria for Inclusion</strong>
   </td>
  </tr>
  <tr>
   <td>New Issues + New Epics
   </td>
   <td>New issues or epics added mid-sprint that have not yet been refined, groomed, or reviewed
   </td>
   <td>These issues may be fragments, or contain incomplete information
   </td>
  </tr>
  <tr>
   <td>Icebox
   </td>
   <td>Epics and issues that are initial ideas, not fully refined, and/or not expected to be prioritized in the next 1-3 sprints
   </td>
   <td>See above
   </td>
  </tr>
  <tr>
   <td>Epics - In Progress
   </td>
   <td>Epics that are actively being worked on in this or the upcoming sprint
   </td>
   <td>These Epics should include a clear title and brief description
   </td>
  </tr>
  <tr>
   <td>Product Management
   </td>
   <td>Issues or Epics that the product team needs to research, execute, or align with POs about prioritizing
   </td>
   <td>These issues may be fragments, or contain incomplete information
   </td>
  </tr>
  <tr>
   <td>UX Backlog - Ready to work
   </td>
   <td>Issues that have been refined and are likely to be prioritized in upcoming sprints for the UX team
   </td>
   <td>These issues should include a full definition, and be tagged with the right epic, label, and estimate (for UX work only)
   </td>
  </tr>
  <tr>
   <td>Current Sprint - UX
   </td>
   <td>Issues that have been prioritized for the current sprint and are being worked on by the UX team.
   </td>
   <td>See above, plus issues should be assigned to an individual
   </td>
  </tr>
  <tr>
   <td>Hand off needed from UX to Eng
   </td>
   <td>Issues with completed UX work that are ready to be reviewed by the engineering team to carry forward
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Eng Backlog - Ready to work
   </td>
   <td>Issues that have been refined, with UX work complete, and are likely to be prioritized in upcoming sprints for the Eng team
   </td>
   <td>These issues should include a full definition and epic, with the label changed from UX to Eng, and estimate changed to reflect new Eng work
   </td>
  </tr>
  <tr>
   <td>Eng Backlog - Bugs
   </td>
   <td>Bugs that have not yet been prioritized by the team
   </td>
   <td>These issues should include info on what happened, steps to reproduce, desired behavior, and screenshots, as well as a bug severity label 
   </td>
  </tr>
  <tr>
   <td>Current Sprint - Eng
   </td>
   <td>Issues that have been prioritized for the current sprint and are being worked on by the Eng team
   </td>
   <td>See above, plus issues should be assigned to an individual
   </td>
  </tr>
  <tr>
   <td>Under Review/QA
   </td>
   <td>Issues open to the team for review and testing. Code complete, pending feedback.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Ready for Release
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Closed
   </td>
   <td>Issues where all work is complete
   </td>
   <td>All acceptance criteria are met
   </td>
  </tr>
</table>



## [UX Board](https://app.zenhub.com/workspaces/va-mobile-ux-60fed87c42104e0017e04ef9/board?notFullScreen=false&repos=292052392&showPRs=false&showPipelineDescriptions=false&showReleases=false&showReviewers=false)


<table>
  <tr>
   <td>What is this board used for?
   </td>
   <td>A granular look at the flow of work once it has been picked up by the UX team
   </td>
  </tr>
  <tr>
   <td>Who uses this board?
   </td>
   <td>UX team
   </td>
  </tr>
  <tr>
   <td>When is this board used?
   </td>
   <td>Sprint pre-planning and planning: Tag sprint label to issues in the Backlog; move from Backlog to Current Sprint columns \
 \
Throughout the sprint: by the UX team to track their work
   </td>
  </tr>
</table>


Here’s what belongs in each column of the UX board:


<table>
  <tr>
   <td><strong>Column/Pipeline Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Criteria for Inclusion</strong>
   </td>
  </tr>
  <tr>
   <td>New Issues
   </td>
   <td>New issues or epics added mid-sprint that have not yet been refined, groomed, or reviewed
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Icebox
   </td>
   <td>Epics and issues that are initial ideas, not fully refined, and/or not expected to be prioritized in the next 1-3 sprints
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Epics
   </td>
   <td>Epics that are actively being worked on by any team, in this or the upcoming sprint 
   </td>
   <td>Epics should include a clear title and brief description
   </td>
  </tr>
  <tr>
   <td>Backlog - Ready to work
   </td>
   <td>Issues that have been refined, and are likely to be prioritized in upcoming sprints for the UX team
   </td>
   <td>These issues should include a full definition, epic, label, estimate
   </td>
  </tr>
  <tr>
   <td>Current Sprint - Discovery
   </td>
   <td>Issues that have been prioritized for the current sprint for the UX team and require research and discovery work
   </td>
   <td>Same as above, plus assignee
   </td>
  </tr>
  <tr>
   <td>Current Sprint - UI/UX
   </td>
   <td>Issues that have been prioritized for the current sprint for the UX team, and cover UI/UX work
   </td>
   <td>Same as above
   </td>
  </tr>
  <tr>
   <td>Ready to hand off to Eng
   </td>
   <td>Issues with completed UX work that are ready to be reviewed by the engineering team to carry forward
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>With Eng
   </td>
   <td>Issues that are in the backlog or in progress for the Eng team
   </td>
   <td>These issues should include a full definition and epic, with the label changed from UX to Eng, and estimate changed to reflect new Eng work
   </td>
  </tr>
  <tr>
   <td>QA
   </td>
   <td>Issues open to the team for testing. Code complete.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Closed
   </td>
   <td>All work is complete
   </td>
   <td>
   </td>
  </tr>
</table>



## [Eng Board](https://app.zenhub.com/workspaces/va-mobile-eng-60f1a34998bc75000f2a489f/board?notFullScreen=false&repos=292052392&showPRs=false&showPipelineDescriptions=false&showReleases=false&showReviewers=false)


<table>
  <tr>
   <td>What is this board used for?
   </td>
   <td>A granular look at the flow of work once it has been picked up by the Engineering team
   </td>
  </tr>
  <tr>
   <td>Who uses this board?
   </td>
   <td>Engineering team
   </td>
  </tr>
  <tr>
   <td>When is this board used?
   </td>
   <td>Sprint pre-planning and planning: Tag sprint label to issues in the Backlog; move from Backlog to Current Sprint; Tag QA issues with Release date \
 \
UX to Eng Hand off: Review tickets in Handoff column, re-label, re-estimate, move to Eng Backlog column \
 \
Throughout the sprint: by the Eng team to track their work
   </td>
  </tr>
</table>


Here’s what belongs in each column of the Eng board:


<table>
  <tr>
   <td><strong>Column/Pipeline Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Criteria for Inclusion</strong>
   </td>
  </tr>
  <tr>
   <td>Pre-Engineering
   </td>
   <td>Issues or epics that are new, icebox-ed, or with UX
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Epics
   </td>
   <td>Epics that are actively being worked on by any team, in this or the upcoming sprint 
   </td>
   <td>Epics should include a clear title and brief description
   </td>
  </tr>
  <tr>
   <td>Needs Handoff Meeting
   </td>
   <td>Issues with completed UX work that are ready to be reviewed by the engineering team to carry forward
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Backlog - Ready to work
   </td>
   <td>Issues that have been refined, with UX work complete, and are likely to be prioritized in upcoming sprints for the Eng team
   </td>
   <td>These issues should include a full definition and epic, with the label changed from UX to Eng, and estimate changed to reflect new Eng work
   </td>
  </tr>
  <tr>
   <td>Bug Backlog
   </td>
   <td>Bugs that have not yet been prioritized by the team
   </td>
   <td>These issues should include info on what happened, steps to reproduce, desired behavior, and screenshots, as well as a bug severity label 
   </td>
  </tr>
  <tr>
   <td>Current Sprint Work
   </td>
   <td>Issues that have been prioritized for the current sprint for the Eng team but are not yet being worked on
   </td>
   <td>These issues should include a full definition, epic, label, estimate, and assignee
   </td>
  </tr>
  <tr>
   <td>In Progress
   </td>
   <td>Issues that have been prioritized for the current sprint for the Eng team and are actively being worked on
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Code Review
   </td>
   <td>Issues open to the team for review. Code complete, pending feedback.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>QA
   </td>
   <td>Issues open to the team for testing. Code complete.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Awaiting QA Build
   </td>
   <td>Issues tested and ready to be deployed to production
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Closed
   </td>
   <td>All work is complete
   </td>
   <td>
   </td>
  </tr>
</table>



## [Epic Board](https://app.zenhub.com/workspaces/va-mobile-epic-view-610c326ab97401001446efa6/board?notFullScreen=false&repos=292052392&showPRs=false&showPipelineDescriptions=false&showReleases=false&showReviewers=false)


<table>
  <tr>
   <td>What is this board used for?
   </td>
   <td>A high level view of epic-level priorities across the team
   </td>
  </tr>
  <tr>
   <td>Who uses this board?
   </td>
   <td>Product Managers, VA Product Owners
   </td>
  </tr>
  <tr>
   <td>When is this board used?
   </td>
   <td>Updated manually each sprint by Product Managers
   </td>
  </tr>
</table>


Here’s what belongs in each column of the Epic board:


<table>
  <tr>
   <td><strong>Column/Pipeline Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>New Epics
   </td>
   <td>New issues or epics that have not yet been refined, groomed, or reviewed
   </td>
  </tr>
  <tr>
   <td>Icebox
   </td>
   <td>Epics and issues that are initial ideas, not fully refined, and/or not expected to be prioritized in the next 1-3 sprints
   </td>
  </tr>
  <tr>
   <td>Product Management
   </td>
   <td>Epics that the product team needs to research, execute, or align with POs about prioritizing
   </td>
  </tr>
  <tr>
   <td>Next Q Priorities
   </td>
   <td>TBD - Epics that are not in progress currently, but that should be a priority for the next quarter
   </td>
  </tr>
  <tr>
   <td>UX Backlog - Ready to work
   </td>
   <td>Epics that have been refined and are likely to be prioritized in upcoming sprints for the UX team
   </td>
  </tr>
  <tr>
   <td>In Progress - UX
   </td>
   <td>Epics that have been prioritized and are being worked on by the UX team.
   </td>
  </tr>
  <tr>
   <td>Hand off needed from UX to Eng
   </td>
   <td>Completed UX work that is ready to be reviewed by the engineering team to carry forward
   </td>
  </tr>
  <tr>
   <td>Eng Backlog
   </td>
   <td>Epics that have been refined, with UX work complete, and are ready to be prioritized in upcoming sprints for the Eng team
   </td>
  </tr>
  <tr>
   <td>In Progress - Eng
   </td>
   <td>Epics that have been prioritized and are being worked on by the Eng team
   </td>
  </tr>
  <tr>
   <td>Under Review/QA
   </td>
   <td>Epics open to the team for review and testing. Code complete, pending feedback.
   </td>
  </tr>
  <tr>
   <td>Done or Closed
   </td>
   <td>Epics where all work is complete
   </td>
  </tr>
</table>



# How we use various Zenhub features


<table>
  <tr>
   <td><strong>Zenhub Feature</strong>
   </td>
   <td>
    <strong>How we use it</strong>
   </td>
  </tr>
  <tr>
   <td>Columns (aka Pipelines)
   </td>
   <td>Used to indicate the work status of a ticket
   </td>
  </tr>
  <tr>
   <td>Epics
   </td>
   <td>Timeboxed group of work containing multiple issues
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Small chunk of work, in the form of a user story, task, or bug. May also be referred to as “ticket” or “story”
   </td>
  </tr>
  <tr>
   <td>Labels
   </td>
   <td>An evergreen theme that indicates a type of work, either by functional area (UX, Eng), feature type (Identity, Secure Messaging), type of work (Spike, Tech debt), priority area (Accessibility, Analytics), and so on.
   </td>
  </tr>
  <tr>
   <td>Sprints
   </td>
   <td>We do not use this feature as it does not carry across multiple boards
   </td>
  </tr>
  <tr>
   <td>Milestones
   </td>
   <td>2 week timebox indicating a sprint, starting on a Wednesday and ending on a Tuesday. We use this instead of the Sprints feature because Milestones flow across boards and Sprints do not
   </td>
  </tr>
  <tr>
   <td>Assignees
   </td>
   <td>The person or people expected to complete the work contained in an issue
   </td>
  </tr>
  <tr>
   <td>Releases
   </td>
   <td>Dates when we release a new version to the app store; assigned to issues that will go into that release; all issues within a Release can be seen by filtering the Product board or by navigating to the ZH Release Report
   </td>
  </tr>
  <tr>
   <td>Estimates
   </td>
   <td>We use the Fibonacci sequence to provide relative estimates of effort for an issue. The estimate should be an approximation of the amount, complexity, and risk/uncertainty surrounding the work.
   </td>
  </tr>
</table>




* Epic: 
* Labels: evergreen theme, such as the functional area (UX), feature type (identity), or bug severity
* Releases: issues that will be included for the release date indicated
* Sprints: issues that are prioritized for the 2 week timebox of a sprint


# Adding an issue to the board.

Anyone on the team may add a new issue to the board. You may use an Issue template to create a New Bug Report, ticket for a Common COmponent, Epic, or Issue (user story). Keep these guidelines in mind:



* **Any non-bug new issue should go into the New Issues column (Pipeline) of the Product board** so that the Product team can groom/refine it and prioritize for the next sprint.
    * Exceptions may be made if the issue is capturing a task that has already been prioritized and is actively being worked on.
* **Bugs should be added to the Bug Backlog column**
* Please be sure to include at a minimum:
* Title: Clear headline of what this piece of work is about
* Description: What is the problem/issue to be solved, who are we building this for, intent, overall benefit
* Acceptance Criteria: Should be clear and concise, have measurable results, allows the delivery team know they have completed the story...what defines "done"?
* Labels: UX, Eng, feature or Bug (at a minimum(
* Epic: If you know what epic this issue should go in, add it, otherwise it can be filled out later
