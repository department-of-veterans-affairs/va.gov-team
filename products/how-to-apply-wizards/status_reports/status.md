### 10/23 Update

  - User Testing recruitment is underway; sessions are scheduled to start on Nov. 2
  - Disability and Education Wizard prototype/specs are done -- we only have to incorporate changes from usability.
  - Button issue (which is on how to apply pages) - Mikki wants to have a conversation about what each Apply Online Button now says (questions about character count, etc.)


### 10/8 Update

  - Liz completed UX/Content refinements outlined for the Education Wizard via an page-by-page [interactive prototype](https://preview.uxpin.com/ca08f3dbf63475b2b62f3e8c00050ad1b19c4cb5#/pages//simulate/no-panels?mode=i)
  - Liz walked FE engineers Craig Wheeler (Education) and Robin Garrison (Disabilty/Appeals) through the prototype outlining the changes this week — and they are up-to-speed and confident about how to implement.  John is following up with the PMs for both teams to get a sense of implementation timelines.
      - Designer Kevin Stachura of BAM 1 will create hi-fi mock-ups and documentation based on the HLR flow (#13382).  HLR is a new online application scheduled to go into UAT ~October 15th, with a staged production roll-out targeted for early November. (Note: It was determined that the UAT session would not be effective as a proxy for veteran user testing.)
  - Liz is now working to determine if she can conduct a light-weight usability session with a small group of veterans to get insight into some [key questions.]( https://github.com/department-of-veterans-affairsz/va.gov-team/blob/master/products/how-to-apply-wizards/discovery/research/wizard-research-plan.md) 
- John is following up with ...
  - Analytics to make sure they understand the changes given the possible implications to the original [instrumentation approach.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13060)
  - Jen Lee to confirm that there is no hard deadline driving our progress/delivery date for Education and Disability (e.g. Links from the Find a Form page).
 - Next up for Liz and team:
   - [Disability prototype with refinements](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/13378)
   - [Chapter 31/36 prototype with refinements](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/13381)

### 10/2 Update

- In meeting with Matt Self, we finalized two requirements:
  - The wizard should be placed on all education form application pages.
  - The skip button should be a global element for the wizard.
- Rationale: One of the key drivers of this initiative is to reduce number of “incorrect” applications for benefits (e.g. the veteran is not eligible), so the Wizard should serve as a lite-weight gating tool.  The  skip button makes this relatively frictionless.
- Follow up: John and Matt to connect with Amy Knox and Luke Tickner early next week to make sure there is alignment/agreement on this "global approach" as Amy had indicated earlier that she did not believe the Wizard was necessary for the Rogers STEM application.

### 9/29 Update
- As time/capacity allows (balancing #1 PW priority Learning Center and Iris), Liz (with Peggy and Mikki's help) is continuing to work on UX comps and Content documentation to detail changes and enhancements -- with focus on Disability and Education.

  - Wizard migration - create consistent alerts, and provide messaging to indicate where the user is going across wizards va.gov-team #13379
  - Wizard migration - UX deliverables for education flow va.gov-team #13374
  - Write documentation for teams implementing wizard migration effort va.gov-team #13375
  - Wizard migration - UX deliverables for disability flow va.gov-team #13378
  - Wizard migration - UX deliverables for Chap 31 and Chap 36 va.gov-team #13381
  - Wizard migration - UX deliverables for HLR form va.gov-team #13382

 -  Ideally, user testing with veterans will be conducted prior to launch (or after launch) to address questions and/or validate assumptions as [outlined here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/discovery/research/wizard-research-plan.md)
 - In order to conduct upfront testing, we will need resource help -- either from a new UX/Researcher who is expected to join the Public Websites team in Oct-Nov timeframe or via another team involved in Wizard development (Liz to see if BAM 2/Education team can be of assistance).

### 9/10 Update

- John made Jen Lee aware that Platform review will result in more design/content work; we now need to determine if Liz has capacity and priority to tackle this effort in current or next PW sprint.
- Mikki continues to review Wizards in progress and provide detailed IA and usability feedback as captured in [the Mural here](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1599137761089/b5b2662802d862b436660938241e79d1ef4ecf31).
- Liz has created tickets for specific design tasks that will help define and illustrate the changes needed to address IA and content concerns/feedback. Those tickets include:
 - #13374
 - #13375
 - #13378
 - #13379
 - #13381
 - #13382
- Peggy has now provided high-level Content feedback for the [Education Wizard](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12243), [Disability Wizard](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12248), and [VRE Wizards](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12642). She'll review content again/provide additional edits as needed once mockups are ready for review.  

### 9/3 Update

Summary recap of Platform review meeting held to discuss IA/UX/Content feedback. Participants included -- Platform reviewers (Mikki/Peggy) and Public Websites (Liz/John):

- The move of the How to Apply Wizards from the How To content pages to the actual Apply Now pages introduces more complexity than anticipated based on the variety of use cases (example: authenticate, start application, go back to Wizard because as a user I am confused).
- Additionally, with multiple product teams implementing the Wizards at the same time (also not anticipated), the need to establish design pattern guidance (along with a fresh look at the Wizards as common react component) is needed.
- As a result, the team has outlined the following steps to ensure successful, steamlined implementation AND to ensure we deliver improved outcomes for servicemembers who are applying for benefits at VA.gov:
  - **More time/effort will be needed to articulate and illustrate "design system" level changes (including IA/UX, Content and Functional) to the Wizards** that takes into account the new complexity and use cases introduced by moving Wizards to the applicaton pages.
  - Changes outlined so far (some of which will require additional definition and illustration):
    - Tell the user in more explicit terms what form/application they are being routed to when they complete the wizard.  Currently, this is not clear in many cases.
    - Add the ability for the user to "retake/start-over" the Wizard 
    - Keep the Wizard persistent on the page so the user can go back and re-use it during their session (this will mean eliminating the session state cookie and exploring an alternative option that only hides the wizard on the immediate next form a user is routed to)
    - Make sure the Wizard is open by default as seen [here](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
    - Make sure the text for the “Already know this is the right form” text goes above the Wizard (specific guidance about the treatment for this text will be provided)
    - Determine with Matt Self if the Education Wizard is needed on all application pages.  For example, does the Wizard need to be on highly specific scholarship pages, including:
      - 0994 - Apply for VET Tech
      - 1990n - Apply for Education Benefits under the National call to service program
      - Form 22-10203 - Apply for Rogers STEM Scholarship
- Next steps planned by the meeting participants:
  - Mikki will translate her IA recommendations into a format that allows for wider communication -- and use by Liz/Peggy/Danielle
  - Liz will create more specific design comps detailing important guidance/requirements
  - Peggy will work with Danielle to provide more specific content guidance for the teams
  - John will provide this update to the all product leads (Education, Disability, eBenefits) as it may impact expectations and timelines -- and they can provide SME guidance on key questions -- e.g.should the Education Wizard go on all or select benefits pages?
  - We will conduct usability testing with veterans to ensure we can validate key changes outlined above before going back to the product implementation teams to finalize development for staging review.   This will likely result in delayed implementation for the Education and Disability teams.
  - We will provide more details to all the involved product teams (BAM 1/2, Booz-Allen and eBenefits) at a meeting set for next Thursday at 10am EST.

### 9/1 Update

Summary recap of the “synergy” meeting held with key players involved in Wizard work across the portfolio [(as captured here)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/status_reports/implentation_tracker.md).  Participants included -- Platform reviewers (Mikki/Peggy), BAM 1 & 2 implementation team, Booz Allen implementation team and Public Websites (John, Liz & Danielle):

- Goals of meeting:
  - Provide cross-product visibility and updates as there is currently active Wizard work across the portfolio (Education, Disability, eBenefits)
  - Improve coordination and collaboration to leverage reusable work and Platform components/guidance (Analytics, IA/UX, Content, Accessibility)
  - Track sequencing of implementation and target launches for awareness

- Meeting notes:

  - Rogers STEM Scholarship team (Amy + Neel) will implement content changes to the Education wizard -- prior to its move to the apply page — ahead of that team’s planned Flipper-managed roll-out launch starting next week through mid-Sept. 
  - Public Websites (John, Liz + Danielle)  will work with Platform (Mikki, Peggy) to finalize the user flow, content changes as required/needed.  (I will schedule a follow-on conversation for us after Labor Day — e.g., to sync on whether there is need for “start over” in wizard and any other open items)
  - Accessibility feedback from Jen S. is ticketed here (#12211) (@Leah Keeler)
  - Analytics has created a "one size fits all" instrumentation data taxonomy for all Wizards.  
  - There will be close product/dev coordination/collaboration between BAM 2 (Education) + BAM 1 (Disability, HLR) as we complete the builds/refinements for staging review, ideally in September.  (Note: @Luke Majewski says the new HLR wizard will go live with the application — they are inextricably bound)

### 8/31 Update

- [Content intake ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13028) was created and John walked/talked Daneille through the project/effort with goal to unify all the work across the Education, Disability wizards as much as possible.
- Meeting held with Analytics team to review their initial dataLayer taxonomy approach for instrumenting all the wizards in a unified, consistent manner.  The approach will, in effect, track all the interactions (e.g. radio buttons and any hotlinks to pages) in the wizards.   This will enable insight into:
    - Overall usage of the Wizard
    - Number/Percent Complete 
    - Numbeer/Percent Abandoned (not completed during session)
    - Of those completed (answered final question, given link to "correct" form:
      - Clicks to Apply
      - Does not Click to Apply
    - Number/Percent who clicks on Link to Apply, but then comes back and uses Wizard (during session)
    - The visitor ID will be leveraged to understand who paused on completing the wizard (for up to 30 minutes) while they did something else -- e.g. looked up information for the application, asked their spouse a question, took a phone call) -- before returning to complete the app. (This should not be considered abandonment).

- The analytics team will provide the new datalayer taxonomy to BAM 1 and BAM 2 so they can implement in tandem -- and testing/verficaton can be done in conjunction vs. staggered fashion.

- For 9/1 meeting, some key points to cover:

  - Rogers STEM application will go live on -- or around Sept 10 -- without the Wizard.  There are no plans to add the Wizard to the introduction page.
  - The Education Wizard needs to be updated to reflect (a) revised text for the Rogers STEM scholarship and (b) a link to the new online application (Note: Amy needs to provide new text and URL to Craig for implementation)
  - Platform IA review of the Education Wizard has surfaced some important questions about user flow:
     - Should the user need to click a button to open the Wizard -- or should the Wizard be open by default?
     - What happens to a user who completes the wizard and wants to ignore the wizard recommendation?
     - What happens to a user who completes all the questions in the wizard but wants to start over to see more options?  Currently, they can re-click the buttons to see additional options -- but do we need to add a "start over" option for the wizard?  (Any evidence this is happening now?)
     - Are we ok with the current session state logic (e.g., once the user clicks the Apply Now button, the Wizard disappears from the Introduction page for that current session)?  What happens if they land on the app page and decide they made a mistake and want to take the Wizard again by clicking back?  Would it be better just to keep the Wizard on the page persistently?
     - What about a user who walks away from the Wizard before completion and comes back 30 minutes -- or two hours later?  Will it still be available to pick up from where they left off?


### 8/26 Update

#### Team: BAM 2 (PM: Leah Keeler + Developer: Craig Wheeler)

- **Education (Form 1990)**: Initial dev is complete and on staging at: https://staging.va.gov/education/apply-for-education-benefits/application/1990/introduction and undergoing Collab Cycle review and iteration.  The wizard also applies to the following Education benefits::
  - 0994 - [Apply for VET Tech](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/introduction)
    - Note: Wizard should **not** move to this page
  - 1990e - [Apply to use transferred education benefits](https://www.va.gov/education/apply-for-education-benefits/application/1990E/introduction)
    - Note: Wizard should move to this page
  - 1990n - [Apply for Education Benefits under the National call to service program](https://www.va.gov/education/apply-for-education-benefits/application/1990N/introduction)
     - Note: Wizard should **not** move to this page
  - 1995 - [Manage your Education Benefits](https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction)
     - Note: Wizard should move to this page
  - 5490 - [Apply for Education Benefits as an Eligible Dependent](https://www.va.gov/education/apply-for-education-benefits/application/5490/introduction)
     - Note: Wizard should move to this page
  - 5495 - [Dependents' Request for Change of Program or Place of Training](https://www.va.gov/education/apply-for-education-benefits/application/5495/introduction)
     - Note: Wizard should **not** move to this page
  - Form 22-10203 - [Rogers STEM Scholarship](https://staging.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction)
    - Note: Wizard should **not** move to this page
    
#### Team: Booz Allen (PM: Amy Knox)

- **Rogers STEM Scholarship (Form 22-10203)**: Initial dev on only the application page -- **the Wizard will come in follow up phase** -- is at: https://staging.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction. (U/P is veterans / am3rica) This form will launch prior to a deadline of October 1.  A prototype is [here.](https://bahdigital.invisionapp.com/share/AUIADV5GTC2#/screens).  

  - When do you plan to launch the Apply for Roger STEM scholarship page/form?  Sept 10

  - Do you plan to put the Education Wizard -- or a more specific eligibility wizard -- on the page?  We don't think it makes sense. All the content is on the apply page -- the Wizard will be repetitive.   Plus, many applicants will come from the 1990 page, where they would have just used the Wizard.


  - Why the STEM and Education Wizard should ideally launch together?  Because ... the Education Wizard should link to the new [page here](https://staging.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction) instead of the more general Manage Your Education Benefits page [here.](https://staging.va.gov/education/apply-for-education-benefits/application/1995)
    - Also, the Education Wizard will need to be updated to reflect slightly new content about the Rogers STEM scholarship.
  
  - QUESTION: Which team should update the Education Wizard to reflect STEM changes -- BAM 2 or Booz Allen?



#### Team: BAM 1 (PM: Luke Majewski + Developer: Robin Garrison)

- **Disabilty (Form 526)**: Initial dev is complete and on staging at https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction

- **Higher Level Review (Form 20-0996)**: In development, but not yet in staging at https://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction


***POSSIBLE SEQUENCING RECOMMENDATIONS:*** 
- Because the Education wizard and STEM scholarship are inter-linked, and STEM has a hard live date of October 1 -- launch STEM first, while making recommended changes, refinements to Education Wizard in September.   Then, couple the launch of the Education and STEM wizards in Oct/Nov.
- And since Disability and Higher Level Review are not coupled to Education, focus near-term attention/effort on these products, with goal to launch in September.


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
  
