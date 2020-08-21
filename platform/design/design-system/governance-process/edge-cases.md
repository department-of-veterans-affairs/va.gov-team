# Handling edge cases in the Design System Governance Process

The Design System Governance Process is based on a happy path flow for VFS teams to request a new pattern or adjust an existing pattern. This happy path does not always accomodate certain VFS team edge case scenarios. We're not currently prioritizing Design System and Forms Library improvements that would prevent these edge cases. The following process explains how we handle edge cases based on their urgency and impact to other teams.

## Overview of happy path to submit new/adjust an existing pattern
This is the happy path flow for a VFS team that wants to create a new pattern or adjust an existing pattern for their solution to better meet the needs of their users:
1. Draft new/adjusted pattern
1. Get new/adjusted pattern approved through design reviews in the Collaboration Cycle
1. Use that new/adjusted pattern in the isolated code for the feature
1. Submit a proposal for a new/adjusted pattern to the [Design System Governance Process board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3)

That's it! VSP works through the backlog and transforms proposed new/adjusted patterns into re-usable code in the Design System. 

## Edge cases not accounted for in the happy path

Edge cases arise when, in step 3 of the happy path, teams can't isolate the required changes in their code.

- Example 1: code changes that must made directly in the forms library for it to render for that feature
- Example 2: the feature is a global element stored only in the design system


## Edge case governance process

### For changes that are launch-blocking
**If it would impact multiple features/teams:** \
The VFS team can't launch until this gets reviewed by the design system council.
- Example: forms library changes, buttons, error messaging

**If it would not impact multiple features/teams:** \
The VFS team can change the code. [Submit a ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3) in the Proposals column with the `code new` label and the design system council will review the request when it is prioritized.
- Example: global elements like the header

### For changes that are not launch-blocking
The VFS team can't change the code, but should [submit a ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3) in the Proposals column w/the appropriate label. The design system council will review the request when it is prioritized.
- Example: minor visual bugs

### Escalation path for decision-making
Escalate to any VSP DEPO lead if a decision is needed on the correct path to pursue.
