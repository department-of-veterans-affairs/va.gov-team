### 8/26 Update

#### Team: BAM 2 (PM: Leah Keeler + Developer: Craig Wheeler)
- **Education (Form 1990)**: Initial dev is complete and on staging at: https://staging.va.gov/education/apply-for-education-benefits/application/1990/introduction and undergoing Collab Cycle review and iteration.  The wizard also applies to the following Education benefits forms:
  - 0994 (Apply for VET Tech)
  - 1990e (Apply to use transferred education benefits)
  - 1990n (Apply for Education  Benefits under the National call to service program)
  - 1995 (Manage your Education Benefits)
  - 5490 (Apply for Education Benefits as an Eligble Dependent)
  - 5495 (Dependents' Request for Change of Program or Place of Training)
  
#### Team: Booz Allen (PM: Amy Knox)
- **Rogers STEM Scholarship (Form 22-10203)**: Initial dev on only the application page -- **the Wizard will come in follow up phase** -- is at: https://staging.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction. (U/P is veterans / am3rica) This form will launch prior to a deadline of October 1.  A prototype is [here.](https://bahdigital.invisionapp.com/share/AUIADV5GTC2#/screens).  The STEM product will use a slightly modified version of the Education wizard (e.g. slight differences in the wizard content).

#### Team: BAM 1 (PM: Luke Majewski + Developer: Robin Garrison)

- **Disabilty (Form 526)**: Initial dev is complete and on staging at https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction

- **Higher Level Review (Form 20-0996)**: In development, but not yet in staging at https://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction


SEQUENCING RECOMMENDATIONS: 
- Because the Education wizard and STEM scholarship are inter-linked, and STEM has a hard live date of October 1 -- launch STEM first, while making recommended changes, refinements to Education Wizard in September.   Then, couple the launch of the moved Education and Wizard in Oct/Nov.
- And since Disability and Higher Level Review are not coupled Education, focus near-term attention/effort on these products, with goal to launch in September.


#### Team: eBenefits (PM: Jason Wolf + Designer/Researcher: Jim Adams)
- **Apply for Education and Career Counseling (CH36 & CH31)**: Is in early development and will go into usability testing soon. Product outline [here](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/7232) and design user flow for the planned wizard is [here.](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/9979)  NOTE: This team is self-contained in their project -- probably no need to track.


### 8/24 Update

- **Education Wizard:**  IA, content, accessibility and analytics tickets have been generated per the Collab cycle review and the tasks will be worked into upcoming sprints.
   - The analytics team (Jon W) wants to a create a dataLayer taxonomy generic enough to be reused across How To Wizards, starting the Edu version.  A meeting is set for 8/31 to map that plan.

- **Disabilty (Form 526)**: BAM 2 (Robin Garrison) has actually completed the work - https://github.com/department-of-veterans-affairs/vets-website/pull/13963 and is waiting for the e2e tests to pass, then it'll be ready to merge. Up next: a content review, and because of our situation, we'll also need to update the content that is rendered - all-claims/original-claim vs BDD text

- **Higher Level Review:** Per BAM 2, code needs a bit more development work, but it's close to done. The wizard hasn't been moved to the introduction page yet. This may become a higher priority in a later sprint.


### 8/12 Update

- Education Wizard (BAM 2/Leah K.) is now going through the agreed upon steps in Collab Cycle process, including:
  - IA Review [#12244](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12244)
  - Content Review [#12243](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12243) & [#12448](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12248)
  - Analytics implementation and Q-A [#12317](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12317)
  - Accessibility will occur during Staging Review when all work is done [#12449](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12249)

*(Note: Minor content changes are being implemented to the [STEM scholarship portion](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/stem/stem-standalone-10203/10203_product_outline.md) of the Education Wizard to more strongly articulate the stringent requirements for eligibility.  About 90% of applications received for the scholarship are from Veterans who do not meet the requirements.)*
  
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
  
