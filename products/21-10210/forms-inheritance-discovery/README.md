

# Form inheritance discovery


## Now (12/15/2025)

### Design + Tech Debt (VA Form 21-10210)

Category: Imposter Components 
- Back/Continue buttons not DST components → Open tech Debt
- Text inputs not va-text-input [#94347](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94347#issue-2566774275) → Open Debt
- Text areas not va-textarea [#94349](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94349#issue-2566774375) → Open Debt
- Date inputs not va-date [#94348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94348#issue-2566774326) → Open Debt
- Radios not va-radio [#94346](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94346#issue-2566774219) → Open Debt
- Colab Cycle feedback: Design components and patterns in code are outdated. [#60737](https://github.com/department-of-veterans-affairs/ va.gov-team/issues/60737) → Open Debt

Category: Content
- Missing punctuation in questions [#94360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94360) → Open Debt
- Extraneous comma in submission  [#94358](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94358) → Open Debt
- Misplaced punctuation in intro (#94357) → Open Debt Figma

Category: Outdated Patterns
- DOB should use memorable date (#60737) → Open Debt
- Minimal header implementation → Done
- Upgrade to v3 components → Done

Category: Documentation Debt
- Figma intro text not using standard styles → Open Debt
- Design and Engineering content is in sync in staging → Open Debt

Category: Monitoring
- Colab Cycle feedback: 3 Audit current security controls [#495](https://github.com/department-of-veterans-affairs/va.gov-team/issues/495)

### Tshirt size estimation
_Teams often start with T‑shirt sizes during early planning, then refine into story points later._
* 👕 Small = Design
* 👕 Medium = Content
* 👕 Small = Monitoring
* 👕 Extra Large = Engineering

### Aditional notes:

Design flow and Figma components largely comply with expected VADS standards, but several imposter components and outdated patterns still require replacement with DST v3 elements to ensure consistency. Content patterns and punctuation remain out of sync, with Figma text differing from staging and production; labels and body text need edits to correct punctuation, misplaced commas, and em dash usage so that design and content align across all environments.


## Next

- Write tickets for epic
- Endpoint API Spike
- Mini project plan