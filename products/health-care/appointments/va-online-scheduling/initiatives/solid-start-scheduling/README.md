
# New Statuses Initative Brief - Solid Start Scheduling

---

## Outcome Summary

To reduce the number of calls that VASS agents make and increase Veteran self appointment selection, the goal of this initiative is for transitioning service members to be able to schedule phone appointments with Solid Start (VASS) staff to learn more about what VA offers.

**Related/Associated product(s)**
[Appointments product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/vaos-product-outline.md)

## Problem
As outlined in the Solid Start Act, how VA outreachs to new Veterans is changing and this initiative is part of this new process. VA will reach out to Veterans three times during the first year of their transition, letting them know about what VA can offer them, and allow them to schedule a phone appointment with agents to learn even more. Currently, agents spend a lot of time reaching out to these Veterans and Veterans don't have a self-service way to reach out themselves to these agents.

## Supporting Veteran Feedback

## Desired User Outcomes

- Veteran can easily schedule a phone appointment.

## Undesired User Outcomes

- Login is so complicated for these Veterans that they abandon scheduling, thus not finding out what VA has to offer.

## Desired Business Outcomes

- TBD

## Undesired Business Outcomes

- TBD

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
  - API team's contract ends December 2025, so additional API changes after that date might be difficult to implement.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):

### What're you building
Using a LoROTA (low risk one time authentication) approach, send Veterans a series of three emails over the course of the first year of their transition letting them know about what VA can offer them and allowing them to schedule a phone appointment with agents to learn even more. Create the scheduling workflow, then send confirmation and appointment reminder emails to Veterans. Enable Veterans to cancel this appointment.

### Go-to-market
>
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
Veteran outreach is built into the workflow with the initial emails.

## Launch Planning

### Collaboration Cycle

- Kickoff ticket
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

- Pending Epic
- [Figma](https://www.figma.com/design/Z96Oy8JRzQNXQueV0LcNBR/Solid-Start-Scheduling--VASS--%7C-Appointments?node-id=12157-38855&t=c7EFK1RjEAHjz0jw-1)

---

#### Communications

- Team Name: Unified Appointments Experience team
- GitHub Label(s):
- Slack channel: #unified-appointment-experience, #unified-appointment-experience-ux
- Product POCs: Kay Lawyer and Kristen McConnell

#### Stakeholders

- National Call Center (NCC) stakeholders for the VASS program
- Outreach, Transition, and Economic Development (OTED)
