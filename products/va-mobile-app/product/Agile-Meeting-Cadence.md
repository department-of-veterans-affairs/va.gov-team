# Mobile Team - Meeting Cadence


# Overview

In August, 2021, the mobile team is poised to grow substantially. The following is intended to clarify goals, cadences, and attendees for meetings to help the team stay in sync without overloading anyone’s calendars.

## Sample Meeting Cadence in Practice

![image](https://user-images.githubusercontent.com/7320097/132521348-20eafae5-6526-4244-8a86-af4efe1b7aae.png)


# Week A (when a new sprint begins)


## Internal AH Sprint Pre-Planning

**When:** Monday, before Sprint Pre-Planning

**Who:** Ad Hoc manager team (combination of Delivery PMs and Eng+UX Managers)

**Zenhub Board:** UX, Eng

**Before this meeting, managers are expected to:**



* Close issues that are completed
* Know which issues that will be complete by the end of the sprint
* Ensure any priority issues that need to be in Backlog are present and refined
* Ensure issues in Backlog and Current Sprint have been estimated and are labeled with UX/Front-end/Back-end

**Agenda:**



* Product team:
     * Shares priorities for the upcoming sprint
     * Updates the Epic-level board
* UX:
    * Review issues in UX Current sprint and tag to next sprint if needed (using ZH milestones)
    * Review issues in UX Backlog and tag to next sprint
    * Ensure all issues for next sprint are estimated, labeled, and assigned
* Eng:
    * Review issues in Eng Current sprint and tag to next sprint if needed
    * Review of issues in Eng Backlog and tag to next sprint
    * Ensure all issues for next sprint are estimated and labeled (Eng team self-assigns once they begin work)
* QA:
    * Tag FE issues tagged to the next sprint with the Release that is 4 weeks away

**Post this meeting, managers are expected to:**
    * Update the Mobile App Sprint Pre-Planning Review deck with Sprint Objectives & Outcomes

## Sprint Pre-Planning and Product Sync between Managers and VA

**When:** Tuesday, day before Sprint Planning

**Who:** VA Product Owners; representative subset of Ad Hoc Practice Management (Product/UX/Eng Managers)

**Mobile App Sprint Pre-Planning Review deck used**

**Zenhub board used:** Product board (if needed)

**Before the meeting:**



* Issues will be tagged to the next sprint, representing the team’s hypothesis about what to prioritize

**Agenda:**



* Review the previous sprint accomplishments
* Review next sprint Objectives & Outcomes  
* VA POs and team adjust if needed and align on issues for the next sprint
* If needed, review issues in the Product Management columns of the Product board to answer any open questions
* VA shares any updates, discussion on new priorities and stakeholder landscape


## Demo

**When:** Tuesday, last day of the sprint

**Who:** VA Product Owners; Additional VA Stakeholders; Full team

**Agenda:** Team shares new and interesting work they’d like to highlight (UX, FE, BE); Team shares 1-2 sentence summary of what went out in that day's release, using the ZH Release Report


## Retro

**When:** Tuesday, last day of the sprint

**Who:** Internal (non VA) team only

**Agenda:** Open discussion on what has gone well, what has been challenging, and discussion of action items


## Sprint Planning

**When:** Wednesday of a new sprint

**Who:** Full team; VA Product Owners are optional

**Sprint Planning Review deck used:** Review Sprint Objectives

**Zenhub board used:** UX board + Eng board 
 

**Before the meeting:**



* Team will have conducted Sprint Pre-Planning with VA POs to gain alignment on priorities
* Issues labeled with the new Sprint will be moved from the UX and Eng Backlogs into the UX and Eng Current Sprint columns on each board
* Any issue labeled with the new Sprint is fully estimated, labeled, and assigned (*note that Eng tickets get assigned during the sprint as the team picks them up)

**Agenda:**



* Product team shares sprint objectives
* Using the UX and Eng boards, review issues that have been tagged to the next sprint
* Ensure full team is aware of what work they will be picking up
* Full team has opportunity to ask any questions about the upcoming sprint and adjust any estimates that are incorrect


# Week B (sprint is continuing)


## Grooming/Refinement

**When:** Monday

**Who:** Internal Ad Hoc manager team (combination of Delivery PMs and Eng+UX Managers)

**ZH Board used:** Product

**Agenda:**



* Review all new issues in the New Issues column in the Product board
* Move any Issues that will not be a priority in the next 1-3 sprints to the Icebox column
* Move any Issues that require input from the VA POs to the Product Management column
* Move Issues that may be prioritized in the next 1-3 sprints to the UX Backlog or Eng Backlog columns
    * Ensure these issues are complete with a clear title and description, correct label, and estimation
* Review any blocked issues
* Review tickets tagged to the next Release (3 weeks away) to ensure accuracy

**After the meeting:**



* If there are any outstanding tickets that remain a mystery, Managers will check with their team members to fill in the details and move to the correct Backlog or Icebox
* If there are any major changes to the next release, Delivery PM to flag to VA PO


## Program Check in

**When:** Tuesday (likely the same time as Sprint Pre Planning, for consistency)

**Who:** AH Program Manager, AH Practice Leadership, VA POs

**Agenda:**



* Give and receive general feedback
* Check in on delivery (share any notable changes to sprint or upcoming release)
* Bubble up generalized feedback from Retro
* VA shares any updates, discussion on new priorities and stakeholder landscape


## Release Sign off

**When:** Monday or Tuesday, the week before the next release is submitted to stores

**Who:** 1 Delivery PM, 1 designated UX person, 1 QA, VA PO

**Process:**

* Release Sign off ticket is auto generated 13 days prior to the release and assigned to AH PM Delivery lead, UX lead, Engineering lead, and VA POs
* All tasks on the ticket should be completed the Tuesday before the release (1 week prior) and before sending to the App store for review 
* All boxes on Release ticket are checked ([sample here](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/1427)) 
    * Define version number - automation system defines the version
    * Create release branch - completed by the engineering team 
    * What’s new content - completed by PM delivery lead 
      * The standard template for writing What's new content is as follows
      * You can now [describe xyz new feature(s)]. We’ve also [enhanced or improved abc] and fixed a few bugs.
      * If there aren't any new features, use standard messaging 'We added general improvements and fixed a few bugs' (if applicable)
    * Other Content updates - UX team currently updates and then sends to engineering
    * PR opened for review - completed by engineering team
    * Severe Bugs: completed by PM delivery lead
      * Add sev-1 and/or sev-2 bugs that have been fixed and will be part of the release  
* QA Sign Off - QA will sign off once all tickets have passed and or identified issues have been addressed 
* PM Sign Off - AH PM will perform high level validation of critical feature/bug tickets.  Coordinate with QA and review test results.  
* VA POs Sign Off - PM will coordinate with VA POs once QA & PM sign off's are complete.  During this time we should also confirm that POs are ok with the What's new content text and make necessary changes as needed.  

Add Release date to tickets
* Tag all the tickets that will be part of the release with the release/date (ideally the Tuesday 2 weeks before the sprint) 
    * Filter by sprint and tickets that have been merged to the develop branch by 10:30 PM pacific time the Tuesday 2 weeks before the release date
       * Example Sprint = 10/27/21 - 11/9/21 (Release date 11/23/21)
       * All stories that are closed or in the Ready for QA column and the merge date is on or before 10:30 PM pacific time
* Note that all issues within the Release can be viewed by filtering the Product board with the Release tag, or by checking the Release Report
* Update [Release Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/releases/release-summary.md)
 GitHub page with overview of what is going in the sprint
   


## UX to Eng Hand-off

**When:** Thursday (?)

**Who:** Eng Managers and involved UX team members, + 1 Delivery PM to relabel and manage tickets

**ZH board:** Product

**Agenda:**



* UX team walks through each issue to be handed off, ensures that Eng managers understand it
* Issues are re-labeled from UX to Eng, and re-estimated for Eng work (if possible, otherwise this can be addressed during Grooming)
* Issues are moved from Needs Handoff Meeting to Backlog-Ready to Work columns


# Weekly or as Needed (or in progress)


## Feature-specific Check ins

**When:** As needed

**Who:** Discovery PM and team members as needed; VA Product Owners

**Agenda:** Discussion of ongoing discovery work and next steps


## Bug Prioritization (TBD)

TBD - developing this process


## Quarterly Planning & Roadmapping (TBD)

**When:** at the end of each quarter

**Agenda:**



* Review epic-level ideas in Icebox
* Brainstorm new epic-level ideas, based on:
   * Veteran perspective: User interviews, app feedback
   * Updates from other teams building other digital properties at VA
   * VA organizational priorities and policies

* Review overall mission, vision, and objectives
* Determine which epics should be prioritized for the next quarter
