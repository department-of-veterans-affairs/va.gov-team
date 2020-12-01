# Handling edge cases in the Design System Governance Process

The Design System Governance Process is based on a happy path flow for VFS teams to request a new pattern or adjust an existing pattern. This happy path does not always accomodate certain VFS team edge case scenarios. We're not currently prioritizing Design System and Forms Library improvements that would prevent these edge cases. This document explains how we handle edge cases based on whether the required changes are launch-blocking and their impact to other teams or features.

## Overview of happy path to submit new/adjust an existing pattern
**This is the happy path flow** for a VFS team that wants to create a new pattern or adjust an existing pattern for their solution to better meet the needs of their users:
1. Draft new/adjusted pattern
1. Get new/adjusted pattern approved through design reviews in the Collaboration Cycle
1. Use that new/adjusted pattern in the isolated code for the feature
1. Submit a proposal for a new/adjusted pattern to the [Design System Governance Process board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3)

That's it! VSP works through the backlog and transforms proposed new/adjusted patterns into re-usable code in the Design System. 

## Edge cases not accounted for in the happy path

Edge cases arise when, in step 3 of the happy path, **teams can't isolate the required changes in their code.**

- **Example 1:** code changes that must be made **directly in the forms library** for it to render for that feature
- **Example 2:** the feature is a **global element** stored only in the design system


## Edge case governance process

### For application changes that are launch-blocking

When a VFS team needs application changes that diverge from existing design system patterns to launch, the following guidance summarizes their options:

#### If the application change _can_ be made without impacting multiple features/teams:

If the VFS team is able to make the change within their own application code, they should do so.

VSP will evaluate if this application change should **also** be made to the design system in the future, but without launch-blocking the VFS team in the meantime. To track this, the VFS team should [submit a ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3) in the Proposals column with the `code new` label. The VSP design system council will review the request at a later date.

- **Example:** global elements like the header, new components for a specific application

#### If the application change _cannot_ be made without impact to other features/teams:

For application changes where the implementation affects additional features/teams, this should be treated as a design system change. Therefore, the VFS team can't launch until this gets reviewed by the design system council.

- **Example:** forms library changes, buttons, error messaging

### For changes that are not launch-blocking
The VFS team can't change the code, but should [submit a ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3) in the Proposals column w/the appropriate label. The design system council will review the request at a later date.
- **Example:** minor visual bugs

### Escalation path for decision-making
For assistance in deciding on the best solution, escalate to any VSP DEPO lead.
