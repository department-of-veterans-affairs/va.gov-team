### How to Apply Wizards: Implementation Tracker


| TEAM                | BAM 1                             | BAM 1                     | BAM 2                   |  eBenefits                                       |
| -------------       | -------------                     | -------------             | -------------           | -------------                                    |
| <b>Product<b>           | Disability (526)                  | HLR                       | Education (1990, STEM)  | Personalized Care & Planning (Ch 36/31) |
| <b>Product Leads<b>       | Hashimoto/Self/Majewski           | Hashimoto/Self/Majewski   | Self/Keeler             | Jason Wolf           
| <b>UX Spec (via Prototype)<b> | Done                   | Done                      | Done                    | Done
| <b>User Test (via Prototype)<b>| Done                  | Done                      | Done                    | Done
| <b>Development<b>  |100% Complete(2/2)                 | 100% Complete (2/2)       | 50% Complete/Hold       | 90% Complete
| <b>Staging Review/Q-A<b> | In Review                  | In Review                       | TBD                     | TBD
| <b>Site Links(PW)<b>   | In progress                       | In progress               | In progress             | In progress
| <b>Target Launch Date<b>        | February (BDD)                          | February (HLR)                 | Q1 2021            |Ch 31 (February) <br> Ch 36 (Launched 1/4)


## Reference Links

- [IA documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/websites-apply-wizard.md) for implementation teams; also includes some UX documenation
- Additional UX guidance captured in [UXPin documentation](https://preview.uxpin.com/ca08f3dbf63475b2b62f3e8c00050ad1b19c4cb5#/pages/132986657/documentation/no-panels?mode=i) (using Edu flow as an example)
- Content outlines of wizard user flows
    - [Education wizard content outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/content-outlines/education-forms-wizard.md)
       - [Development Guide Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16473)
     - [Disability wizard content outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/content-outlines/disability-form.md)
     - [Higher Level Review wizard content outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/content-outlines/higher-level-review-form-wizard.md)
       -  [Development Guide Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16517)
     - [Chapter 31 wizard content outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/content-outlines/chapter%2031-form-wizard.md)
     - [Chapter 36 wizard content outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/content-outlines/chapter%2036-form-wizard.md)
- [Usability Study Synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/files/5548107/Wizard.Migration.Usability.Study.Synthesis.pdf)
- [Updated Analytics Data Layer Implementation spec](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/tracking-how-to-wizards.md)
  
- Disability ([on Staging](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction))
  - [Wizard prototype](https://preview.uxpin.com/e8c5c39f8978d9c1a3f9bd200db25376170a6860#/pages/133183067/simulate/sitemap?mode=i)
- HLR (application almost ready, but Wizard dev has not yet started.)
  - Staging URL will be https://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction
  - [Wizard prototype (Invision)](https://vsateams.invisionapp.com/share/W5U21BDFTQK#/screens/430329538)
  - Wizard dev ticket is https://github.com/department-of-veterans-affairs/va.gov-team/issues/12925
- Education ([on Staging](https://staging.va.gov/education/apply-for-education-benefits/application/1990/introduction))
  - [Wizard prototype](https://preview.uxpin.com/ca08f3dbf63475b2b62f3e8c00050ad1b19c4cb5#/pages/133085100/simulate/sitemap?mode=i)
  - Rogers STEM ([is live on VA.gov](https://www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction))
- Personalized Care & Planning Guidance (Chapter 36) 
  - ([new Wizard prototype](https://preview.uxpin.com/2dbde8d15bf667f5c584fe4a8a6d011cf9f0a14d#/pages/132088565/simulate/sitemap))
  - https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction
veterans / am3rica

- Platform Review/Feedback
  - [IA Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12244)
  - [Content Feedback](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12243)
    - Public Websites [Content Intake Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13028)
  - [Analytics Instrumentation Plan](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13060)
  - [Accessibility Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12211)
  - [Q-A Test Cases](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13124)


  - Platform IA review of the Education Wizard has surfaced some important questions about user flow:
    - Should the user need to [click a button to open the Wizard](https://staging.va.gov/education/apply-for-education-benefits/application/1990/introduction) -- or should the Wizard be [open by default](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)?
    - What happens to a user who completes the wizard and wants to ignore the wizard recommendation?  The Wizard -- in effect -- disappears from the page when user clicks on the Apply Now button.
    - What happens to a user who completes all the questions in the wizard but wants to start over to see more options? Currently, they can re-click the buttons to see additional options -- but do we need to add a "start over" option for the wizard? (Any evidence this is happening now?)
    - Are we clear enough about what benefit the the Wizard is recommending after the user completes the questions?
    - Are we ok with the current session state logic (e.g., once the user clicks the Apply Now button, the Wizard disappears from the Introduction page for that current session)? What happens if they land on the app page and decide they made a mistake and want to take the Wizard again by clicking back? Would it be better just to keep the Wizard on the page persistently?
    - What about a user who walks away from the Wizard before completion and comes back 30 minutes -- or two hours later? Will it still be available to pick up from where they left off?

