## Preface:

The purpose of this document is to recommend what is needed for an MVP to fulfill the mission of the Contact Center Lead.  This is to be the liaison between the Call Center(s) and development teams to escalate Tier 2 and Tier 3 issues.

This document is only a recommendation and will be updated accordingly.


## Current State of Contact Center:

There are many different call centers that handle different aspects of the VA.  For this document, the Whitehouse VA Hotline will be the only Call Center we are referring to as it is the only one capable of handling va.gov issues (at a very high level).

*A new call center is being proposed in Salt Lake City, UT that will be the va.gov dedicated help line, Opening TBD*

There is currently no way for a call center representative to escalate a va.gov issue to the VSP team.  They work solely in SalesForce logging every issue with detailed case notes.
 

## Proposed Changes to Implement Intake into Triage

In order for the Call Center Lead to integrate the issues surfaced through the call center into the triage process, the following steps are proposed.


### Immediate
- Call Center Lead Needs access to the SalesForce instance that is used by the White House VA Hotline
  - UPDATE: Because the SalesForce instance is only accessible on the VA Network, we are waiting for the current call center lead to get her PIV card to access the network.  In the meantime the PM for Triage has been granted access to SalesForce for discovery purpose.
  
  
- Investigate best Approach for immediate daily Reporting to Call Center Lead
  - CURRENT REPORT: There is already a report built that filters cases based off of the following Criteria
    - Case Category = "Other"
    - Subject CONTAINS "va.gov"
  - REQUESTED REPORT: Create new report to ensure the capture of all va.gov issues
    - Case Category = "Other"
    - Subject CONTAINTS "va.gov" OR Case Note Contains "va.gov"
  - Compare both reports to determine how call center reps are reporting issues through SalesForce and begin viewing reports daily to surface any issues that are noted.
  
This Immediate plan would allow us a minimal viable product that would give the triage team insight into call center issues.
  
  *Because there has been no concrete training to call center staff on how to "tag" cases, there is little confidence that va.gov issues are created the same way.  There needs to be investigation into the data to determine any patterns that CURRENTLY exist for immediate issue discovery.*
  
  
  ### Future Steps
- Document a Standardized approach for Call Center Reps on how to tag cases so that they are populated in any pre built reports.  Limited to SalesForce development.
  - Best approach would be to update SalesForce with a dedicated field that would allow those cases to be populated on pre built report.
  - Second best approach is to have a standard utilizing an existing field.
  
  
- Training the Call Center Reps

- Creating a feedback Loop to let the Call Centers know an issue has been resolved.
 

In the future, if Call Centers are transitioned to Microsoft Dynamics, the Contact Center Lead will need access to that platform/program in order to continue the mission.


## Outstanding Questions:

- What is the current state of transition from SalesForce to Microsoft Dynamics?
- Will this transition be within the next 6 months?
- Is there the ability to make edits in the current SalesForce platform?
- Are there reports currently being provided to VSP from WHH that reflects amount of calls, breakdown of call types, escalated - call types, talk time, abandoned calls details, or repeat issues? 
- Access to reporting or data that is being provided to the VA is needed.
- How often is this data being reported to the VSP teams?
- What timeframe is being reported to the VSP teams?
