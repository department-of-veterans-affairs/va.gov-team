# Preneed Product Outline
- GitHub Label: pre-need
- Slack channel: #va-gov-mbs
- **Vets.gov link**: [Live application on staging](https://staging.vets.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction)  
- **Analytics link**: [GA Conversion Funnel](https://analytics.google.com/analytics/web/#/report/conversions-goal-funnel/a50123418w107014820p157543929/_.goalOption=2)
- Demo video link: https://youtu.be/Sc5T030PBYo
- Application Guide: [Here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/preneed-app-guide.pdf)
---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement
Veterans (and their loved ones) want to choose which VA cemetary they'd like to be buried preemptively, but currently they need to submit a paper form in order to receive this benefit; as a result Veterans have a difficult time applying to determine their preneed eligibility.

### User Goals
- Quickly submit a preneed eligibilty application as a veteran, dependent, or on behalf of a Veteran
- Received an eligibility determiniation within 45 days.

### Business Goals
- Transform the preneed application intake process from paper to digital
- Reduce the amount of time NCA staff has to spend following up with Veterans to correct errors that occur from paper submission

## Assumptions
- NCA/EOAS has the capacity to process the new applications that will be coming from vets.gov (they currently have a 35,000 application backlog as of 8/9/18)

## Requirements and Constraints
- The EOAS backend service takes over a month to get a change into Production. Enhancements must be addressed with this in mind.

## Solution Approach
- Focus the enhancement of the first iteration of the preneed application on enable logged in and logged out users to submit a singular user submission. 

## Value Propositions
- Reduces the burden of applying for preneed applications by enabling a digital submission
- Reduces the burden of processing preneed applications by avoiding manual transfer from paper to EOAS backend
- Ultimately reduces the time it takes for users to get their preneed eligibility determination

## KPIs
- Increase the number of digital Preneed Submissions
- Reduce the number of paper Preneed Submissions
---

# Implementation Info

## Status
- The application is live in production https://www.vets.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction

## Solution Narrative
- This feature was originally scoped to allow multiple people to file applications in one submission (primary use case: a Veteran and their spouse both applying to determine their eligibility). Due to complications with handling form and file submission failures, the MVP has been re-scoped to a single applicant. The resources below all point to the original intent of multi-applicant submission.

## Team

- **VA Executive Sponsor** `*`: Ouslander, Michael S. Michael.Ouslander@va.gov 
- **VA Policy Expert(s)**: 
- **VA Digital Strategist(s)** `*`: Matt Dingee 
- **Product Manager** `*`: Hughes, Catherine (Cat) M. (BAH) Catherine.Hughes2@va.gov
- **Design Lead**: Yamrus, Carly (BAH) <Carly.Yamrus@va.gov>
- **Eng Lead**: Santiago, Kenneth (Booz Allen Hamilton) Kenneth.Santiago@va.gov
- **VA Web Comms Partner**: 
- **VA Contact Center Liason**:
- **Production Testing Partner(s)**: BTRS - Rhonda Jones 
- **Content Writer(s)**:
    - Stewart, Kelby R. (BAH) <Kelby.Stewart@va.gov>
    - Downs-bowen, Jessica A. (booz Allen Hamilton Inc) <Jessica.Downs-Bowen@va.gov>
- **Front and Back-end Engineer(s)**: 
    - Santiago, Kenneth (Booz Allen Hamilton) Kenneth.Santiago@va.gov
    - Antonioli, Adam M. (BAH) <Adam.Antonioli@va.gov>
    - Boardman, Jordan [USA] <Boardman_Thomas@bah.com>
    - Fewin, Connor J. (BAH) Connor.Fewin@va.gov
  - **Stakeholders**:
    - Office/Department:
      - OIT and NCA/BTRS and NCSO
    - Contact(s):
      - OIT
        - Ouslander, Michael S. Michael.Ouslander@va.gov
      - NCA/BTRS
        - Wilson, Ginger Ginger.Wilson@va.gov
        - Jones, Rhonda M. Rhonda.Jones1@va.gov
      - NCA/NCSO
        - Dalrymple, Jay Jay.Dalrymple@va.gov
        - Ridgeway, Kevin Kevin.Ridgeway@va.gov


`*` = approval required for launch


## Resources and Documentation

- [Original paper form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/va40-10007.pdf)
- [User journey](https://app.moqups.com/greg@adhocteam.us/KRUytqSJgf/view/page/aa9df7b72)
   - Outlines the process of a person learning about, applying for, and receiving the benefit
- [Application flow]
   - https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1674680396503/7020ee7494584418ae4fd09eb378770b63585b0a?sender=hughescatherine1856 
- [Form logic diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/design/form-logic.png)
   - Shows how the original data fields map to those presented in the online form, and changes based on conditional logic
- [Form inventory](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/design/pre-need-burial-form-outline-revised.xlsx)
   - Detailed inventory of form fields, accepted values, requirements, and conditional logic
- [Sketch file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/design/pre-need-mockups.sketch)
   - Not completely up to date on some elements like content and field requirements, but demonstrates the desired flow for multiple applicant form submission
- [Marvel prototype](https://marvelapp.com/2084724)
   - Visual representation of the application flow. **Note:** the only scenario built is a Veteran and spouse applying together

### Screenshots
#### Before
#### After
- https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1674680396503/7020ee7494584418ae4fd09eb378770b63585b0a?sender=hughescatherine1856 
