### 8/12 Update

- Education Wizard (BAM 2/Leah K.) is now going through the agreed upon steps in Collab Cycle process, including:
  - IA Review [#12244](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12244)
  - Analytics implementation and Q-A [#12317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12317)
  - Content Review [#12243](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12243)
  - Accessibility will occur during Staging Review when all work is done

*(Note: Some minor content changes will be implemented to the STEM scholarship portion of the Education Wizard to more strongly articulate the stringent requirements for eligibility.  About 90% of applications received for the scholarship are from Veterans who do not meet the requirements.)*
  
- Disabilty & HLR (BAM 1/Luke W.) is in sprint planning this week.


### 8/3 Update

- Collaboration Cycle [Project Kickoff](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116450) held on Friday, August 7th with Liz, Mickin, Leah, Luke, Jason and Matt.   
- Meeting highlights:
  - All agreed that each Wizard (Education, Disability, HLR and Personal Career Counseling) should separately go through the collab cycle
  - For Education, which is fully developed and feature flagged in staging, all agreed to the following cycle touchpoints, with Leah Keeler taking the lead:
      - IA (Mikki), with recommended changes for linking and content anticipated
      - Content (Peggy), additional content changes are possible to support the new location of the Wizard with Public Websites team involved
      - Accessibility (Jen), recommended changes are expected (Jen says some refinements are long overdue) -- but the team may prioritize these in the backlog as opposed to slow the launch.
      - Analytics (Jon/Brian), will want to determine if the product funnel analysis will need to be refined
      - Q-A (Tze), will conduct testing
  - Per Luke W., dev work on the HLR and Disability Wizards is now slated for BAM 1's next sprint. He believes doing the work in tandem by his dev team makes most sense (vs. moving one of the Wizards to BAM 2 or Public Websites).   Luke does say he may need some design guidance via Liz on his team's implementation.
  - Per Jason W., the new Chapter 31/36 will also feature a Wizard that is in progress.   This page needs to be live by October 1, so his team -- while following many of the same conventions -- will continue speeding ahead. 
- Next steps for the Education/BAM 2 team:
  - Leah is creating all the needed tickets and is expecting the resulting reviews/change requests to delay launch by 1-2 sprints.
  
### 7/31 Status Meeting with Wizard Product/Development Leads
** Participants:
- John Hashimoto (Public Websites)
- Leah Keeler (GI Bill & Other Education - 1990)
- Luke Majewski (Higher Level Review/20-0996 & Disability Compensation/21-526ez )
- Jason Wolf (Personalized Career Planning/Chapter 36)
- Matt Self was unable to attend

** Topics:

- The collab cycle process/kick-off did not happen prior to dev start and as a result we are moving quickly to close that gap.  This may have implications on the dev work already committed.
  - Our goal: To [unify the collab cycle process](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7549) as much as possible across the various efforts to ensure we leverage commonalities and avoid future speed bumps.
- Teams also provided updates on their timelines with the possibility that Public Websites might take-up the Disability effort if necessary to maintain momentum.

## Meeting Notes

- There are two active development projects involving "how to apply Wizards" -- Education and Personalized Career Planning/Chapter 26.  The work on HLR and Disability has been delayed due to other priorities.
  - Per Leah Keeler, the [Education Wizard dev work](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11227) is nearly complete and could be deployed as soon as the week of August 10th -- assuming no issues.
  - Per Jason Wolf, the [Personalized Career dev work] is complete and in staging.
  - Per Luke Wajewski, the HLR and Disability work has not yet been initiated but he believes the work is bound/integrated, so there would be no great benefit in uncoupling the effort (e.g. Public Websites taking on the Disability Wizard work).
- The Education work (via Mahariel Rosario) did result in some valuable new enhancements/updates to the code that could be leveraged by the other teams and Leah will connect the dev leads from Education and HLR/Disability to collaborate. Details:
  - First, I created a WizardContainer component and placed that on the introduction page.  The WizardContainer holds the content surrounding the wizard and renders the actual Wizard .
  - The Wizard takes in the radio button components (called pages) and renders out the next page depending on where you are in the wizard.
  - I then created  setWizardStatus and setBenefitReferred functions and their get counterparts.
  - This approach allows any form that wants to use the same questions, content,  design, and display logic as the education benefits wizard to reuse the wizard container I made.
  
