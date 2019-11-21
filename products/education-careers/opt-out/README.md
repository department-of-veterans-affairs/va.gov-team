# Colmery Act Opt Out Outline
- GitHub Label: `opt out`
- Slack channel: #opt-out
- Vets.gov live link: https://vets.gov/education/opt-out-information-sharing/
- Application guide: [Link](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Education/Colmery%20Act%20Opt%20Out/Opt%20Out%20Application%20Guide.pdf)

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
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
There is a legislative requirement that Veterans must be able 'request to opt-out of information sharing with educational institutions' mandated to start on 8/1/2018.

## Solution Goals
### User Goals
Help users understand what information they are currently sharing with the VA/educational institutions and make it simple for them to opt out of sharing their info with educational institutions

### Business Goals
Comply with the legislative requirement before 8/1/2018 and improve the processing of this data through the use of automated processing (stretch goal depending on technical constraints).

## Assumptions
- The Edu backend systems are in place to handle this data
- There is an office that has people to manually review this opt out information

## Requirements and Constraints
- Shay & the stakeholder group have asked us to submit this data like the 1990 - turned into a spool (text) file and sent
- Stakeholders don't want to make the opt-out form prominent on the Vets.gov website

## Discovery Takeaways
- [Q&A with EDU Stakeholders (Shay/Luke)](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10779#issuecomment-399450617)

## Solution Approach
- A form that allows both logged in users and non logged in users to access the tool and opt out of sharing their VA Data with educational intitutions

#### User Value
- Users will have control of whether or not their information is accessible by educational institutions

#### Business Value
- The Stakeholders don't want to heavily publicize this tool because it prevents the educational institutions from accessing valuable Veterans data.

## KPIs
- Number of opt outs
- % of users that opt out after reaching the opt-out landing page

---

# Implementation Info

## Team

- **VA Policy Expert(s)**: Shay Norton [shay.norton@va.gov](mailto:shay.norton@va.gov )
- **VA Digital Strategist(s)** `*`: Matt Self [matthew.self2@va.gov](mailto:matthew.self2@va.gov)
- **Product Manager** `*`: Ryan Luu [ryan.luu@adhocteam.us](mailto:ryan.luu@adhocteam.us)
- **Design Lead**: Emily Waggoner [emily@adhocteam.us](mailto:emily@adhocteam.us)
- **Eng Lead**: Lihan Li [lihan@adhocteam.us](mailto:lihan@adhocteam.us)
- **VA Web Comms Partner**: 
- **VA Call Center Liason**: Aubrey Arcangel [aubrey@thesocompany.com](mailto:aubrey@thesocompany.com)
- **Production Testing Partner(s)**:
- **Content Writer(s)**: Peggy Gannon [peggy@thesocompany.com](mailto:peggy@thesocompany.com)
- **Front-end Engineer(s)**: 
  - Rian Fowler [rian.fowler@adhocteam.us](mailto:rian.fowler@adhocteam.us)
- **Back-end Engineer(s)**:
  - Lihan Li [lihan@adhocteam.us](mailto:lihan@adhocteam.us)
  - Johnny Holton [johnny@oddball.io](mailto:johnny@oddball.io)

`*` = approval required for launch

## Resources and Documentation

- Discovery and Research
- Technical Documentation
- Product specs
- Design
- Roadmap
- ATO documentation

### How to access in staging
- Link: https://staging.vets.gov/education/opt-out-information-sharing/

### Screenshots
**Intro**
![](Design/intro_opt-out.png)

<br>

**Modal**
![](Design/modal_opt-out.png)

<br>

**Applicant Info**
![](Design/applicant-info_opt-out.png)

<br>

**Review & Submit**
![](Design/review_opt-out.png)

<br>

**Confirmation**
![](Design/confirmation_opt-out.png)
