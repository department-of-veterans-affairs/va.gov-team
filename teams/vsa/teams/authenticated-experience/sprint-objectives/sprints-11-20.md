# Authenticated Experience Sprint Objectives: Sprints 11 – 20

A high-level summary of the goal the DSVA Product Lead would like to accomplish during a sprint which helps:

- Team deliver value every Sprint
- Development Team stay focused
- Product Owner determine priority

## Sprint 11 (12/18 - 12/31)

Note: Code freeze between 12/23 - 1/3/2020.

### Time off

Sprint is 9 days with Christmas holiday.

- Arthur: Dec 19, 23 – 26; 5 days of availability
- Brad: Dec 18; 8 days of availability
- Erik: Dec 23 – 24; 7 days of availability
- Justin: Dec 26 – 27; 7 days of availability
- Lihan: 26 – 31; 5 days of availability
- Samara: Dec 24 – Dec 27; 6 days of availability
- Tressa No time off except 12/25; 8 days of availability 

We can either cancel grooming altogether or move to Dec 23. Sprint planning for Sprint 12 should be moved to Jan 2.

### Order of priorities

1. Get address validation ready for QA
2. Direct deposit updates
3. Create a plan for APO/FPO/DPO build + ticket writing

### Direct Deposit

**Erik**

- Ramp up to 100% [#3969](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3969)
- FE for routing number error [#4109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4109)

### Address validation

To the best of our ability, this sprint's objective is to make sure all existing bugs are fixed/updates are implemented and ready for QA. **Note**: Having the feature fully ready for QA depends on VA Profile fixing some issues on their end. We can not be ready for QA without them. We'll consider the objective met here if things remain open only as a result of the VA Profile dependency.

- Use only candidate api for address validation api [#4060](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4060)
- Address validation: Continue, Cancel, and X buttons are broken [#4205](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4205)
- Address validation: Copy is missing a period [#4211](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4211)
- Validation Keys do not work to override addresses in the profile [#4245](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4245)
- Do not show the user any suggestions that are not "CONFIRMED" as deliverable [#4250](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4250)
- User should see the address they entered when going back to edit their address [#4271](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4271)
- Sometimes we get validation keys but can't force the addresses through [#4278](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4278)
- Implementing address validation modal confirmation screen [#4282](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4282)
- Review the flow for Address Validation Modal [#4283](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4283)
 
### APO/FPO/DPO

**Arthur and Justin**

- Planning: Figure out what build out looks like for benefit application updates (Arthur and Justin)
    - Who is doing this? 
    - What do we have to coorinate with other teams?
    - Create tickets  

**Erik or Brad**

- FE profile update (Erik or Brad)
    - Note: This update can be built but not launched in sprint 11. This needs to be gated and can not go out before the benefit application updates. 
- (*If our team is doing the work*) Start FE build (Erik or Brad) 

### Onboarding Tressa

**Tressa**

- General Onboarding [#4086](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4086)
- Exploring VA.gov 

**Samara**

- Team intro
- Handoff of Profile 2.0

### Monitoring, maintenance, bug fixes, hardening, 508, etc.

## Sprint 12 (1/2 - 1/14)

### Address validation

#### QA

**Tze**

*Question: When is Tze planning to conduct QA? Does he have time off during this sprint?*

- Conduct QA and create tickets for bugs
  - Bug tickets should be assigned to Justin, Arthur, and Samara

**Arthur**

- Help manage the QA process
  - Pay attention to bug tickets that come in, and give direction/guidance as necessary for fixes. 
  - As tickets/fixes go out, validate user-facing fixes in staging.
 
 **Brad**

Erik may end up helping with some of this.

- Start working on bug fixes as they come in.
  - (Note: no tickets to create yet. Tze will be creating bug tickets as they come in) 

- Pre-launch
  - Analytics
  - Etc

### Error Matrix

- Justin to implement Lisa's feedback from [#3892](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3892#issuecomment-565577038)
