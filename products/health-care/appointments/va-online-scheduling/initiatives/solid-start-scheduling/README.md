
# New Statuses Initative Brief - Solid Start (VASS) Scheduling

---

## Outcome Summary
To reduce the number of calls that VASS agents make and increase Veteran self appointment selection, the goal of this initiative is for transitioning service members to be able to schedule phone appointments with Solid Start (VASS) staff to learn more about what VA offers.

**Related/Associated product(s)**
[Appointments product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/vaos-product-outline.md)

## Problem
The [Solid Start Act](https://www.congress.gov/117/plaws/publ205/PLAW-117publ205.pdf) aims to improve how VA reaches out to new Veterans. VA will reach out to Veterans three times during the first year of their transition letting them know about what VA can offer them and allow them to schedule a phone appointment with agents to learn even more. Currently, agents spend a lot of time attempting to reach these Veterans and contact information wasn't up-to-date making this outreach difficult. The Solid Start Act is also improving our access to more accurate contact information, which is making a workflow like this finally possible.

## Supporting Veteran Feedback

## Desired User Outcomes
- Veteran can easily schedule a phone appointment.
- Veteran have access to and are reminded of their appointment information after they schedule.

## Undesired User Outcomes
- Login is so complicated for these Veterans that they abandon scheduling, thus not finding out what VA has to offer.
- Veterans schedule the appointment, but don't get a reminder and no show.

## Desired Business Outcomes
- Reduce time agents spend calling to schedule appointments
- More Veterans engage with Solid Start program.

## Undesired Business Outcomes
- Call center agent workload is negatively impacted.

---

## Measuring Success

### Key Performance Indicators (KPIs)
>
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Reduce time agents spend calling to schedule appointments | Baseline | Target | Link to data source (e.g. GA, Domo)
(Need to review with business stakeholders)

---

## Discovery

### Assumptions/Risks
>
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>.
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it):
  - These transitioning service members have not engaged with VA before and might not see value in taking the time to engage to learn more.
- **Usability Risks** (can people figure out how to use it):
  - Since these Veterans aren't actively engaged with VA for some benefits or service, then log in must be very simple for them to complete the call to action, which is scheduling a phone appointment.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - API team's contract ends December 2025, so additional API changes after that date will be difficult to implement.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):

### What're you building
Using a [One-time passcode approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/solid-start-scheduling/engineering/api-authenicate.md), send Veterans a series of three emails over the course of the first year of their transition letting them know about what VA can offer them and allowing them to schedule a phone appointment with agents to learn even more. Create the scheduling workflow, then send confirmation and appointment reminder emails to Veterans. Enable Veterans to cancel this appointment.

### Go-to-market
>
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

Veteran outreach is built into the workflow with the initial emails.

## Launch Planning

### Collaboration Cycle

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117928)
- PO Sync
- Architecture Review
- Design Intent
- Midpoint
- Staging
- Release

### Timeline
>
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

-

#### Initiative Launch Dates

- *Target Launch Date*
  - Q2 2026
- *Actual Launch Date*
  - tbd

---

### Additional resources

- [Pending Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116989)
- [Figma](https://www.figma.com/design/Z96Oy8JRzQNXQueV0LcNBR/Solid-Start-Scheduling--VASS--%7C-Appointments?node-id=12157-38855&t=c7EFK1RjEAHjz0jw-1)

---

#### Communications

- Team Name: Unified Appointments Experience (UAE) team
- GitHub Label(s):appointments
- Slack channel: #unified-appointment-experience, #unified-appointment-experience-ux
- OCTO Product POCs: Kay Lawyer and Kristen McConnell
- UAE Product: Dotti Cummings and Mike Marinos

#### Stakeholders

- National Call Center (NCC) stakeholders for the VASS program
- Outreach, Transition, and Economic Development (OTED)
