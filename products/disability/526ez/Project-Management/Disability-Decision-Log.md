# Disability Benefits Decision Log

## Decision Log

This Decision Log is used to record details of important decisions made throughout the life of the project. A decision log can provide quick and easy access to specific details about decisions made in the past if questions come up afterward.

Not every decision a project makes gets recorded in the Decision Log. When to include an item in the log involves striking a balance between what is valuable to have recorded versus what is too detailed. An entry should be recorded here in the following types of scenarios:

- When a decision has a large impact on the direction/timeline/scope/cost of the project.
- When multiple alternative options are considered and we want to keep a record of why we settled on the chosen option.
- For decisions that may be confusing or not clear to all stakeholders.
- For decisions that impact the what or how we achieve a deliverable/milestone, especially when that differs to stakeholder expectations. 
- For decisions that may not seem significant but have the potential to cause issues if not understood.



| Date | Decision Title | Summary | Decision & Reasoning | Made By | Status
|---|---|---|---|---|---|
|7.10.25| 429 errors handling |  LH Benefits Documents API - 429 errors.| Emily agreed with Kyle S. to leaving it as is and only handle the actual silent failures, if they occur. | Emily | <code>Resolved</code>
|6.12.25| ZSF backup email and texts| All work on ZSF backup email and text notifications is paused until further notice| Emily requested to pause work on this epic and work until enablement has time to discuss platform wide guideance with OCTO | Emily | Open
|5.16.25 |4142 version update |  Decision Reviews team taking lead on Backend | The 4142 backend is shared by the Decision Reviews and Disability teams and both teams share similar code pathways. DR will refactor both nearly-identical 4142 processors for 0995 and 526 forms. The design work for shared components to create a consistent UI experience, will be come at a later juncture. But Disability will begin to explore the frontend experience content design in the interim  | Grace Xu & Kyle Soskin | <code>Resolved</code>
|5.8.25 |Notifying IPF users |  Users with an In-Progress form won't be notified about a new form | We’re putting this on hold for now. The rationale is it’s too difficult to provide folks with the right details to make an empowered decision, and for the most part VBA can process legacy 0781/a effectively enough without having to have folks submit new 0781s. This may be potentially revisited once we’ve rolled out the 0781 at 100% to new users. | Emily Theis & David Reis | <code>Resolved</code>

Old decisions: 
- May 30 - 5103 Claim Certification (Paper Form Sync)
  
	5103 Claim language, keep the first paragraph’s copy verbatim with the paper form. We will edit the language in the last paragraph which refers to the pages and boxes on the paper form.

- May 9 2024 - TE Release

	If LH /submit endpoint isn’t ready by end of June, DBEX teams will not re-pipe the TE solution to use EVSS. VA’s expectation is that TE solution is complete and ready by end of June for LH’s /submit production release

- May 9 2024 - TE Release
  
	Targeting Thursday June 27th for 1st phase TE canary release

- May 9 2024 - Benefits Claims endpoint

	Begin work on this when Mark comes back May 13th.

- May 2, 2024 - TE rollout

	Once TE is on for a given Veteran’s claim, it stays on, and trumps wether or not the feature flag is on for them.

- May 1, 2024 - Date ranges in 526 Section IV

	The date range fields on 526 pages for paper form sections 15b, and 15c, and 15d will not be populated in the PDF. Instead, all toxic exposure date ranges will be populated in 15e. We are doing this to allow Veterans to enter all relevant dates for a given location/exposure at one time and to ensure all data is maintained and clear for VSR review, rather than split between fields. - JP

- Apr 30, 2024 - Toxic Exposure incremental release
  
	First release only to Vets who begin a new 526 form, when successful release to Vets who have an In Progress Form (IPF) 

- April 26, 2024 - Behavior of secondary disabilities
  
	a) For TE MVP, don't change the current behavior of the front end replacing SECONDARY with NEW in the JSON that is sent to LH for writing to the PDF
b) Write the same content as for the NEW radio selection in column 2
c) Retain the "secondary to [selected disability]" append to the Column 3 text, which will also include any further description from the front end
Backlog item to fix this in the future: #82435






