# Handling Edge Cases in the Design System Governance Process

Most of the time, this is the happy path flow for a VFS team who wants to create a new pattern or adjust an existing pattern for their solution to better meet the needs of their users:

1. Draft new/adjusted pattern
1. Get new/adjusted pattern approved through design reviews in the collaboration cycle
1. Use that new/adjusted pattern in the isolated code for the feature
1. Submit a proposal for a new/adjusted pattern to the [Design System Governance Process board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3)
1. That's it! VSP will work through the backlog to take the proposed new/adjusted pattern and transform it into re-usable code in the Design System

In that happy path ^ scenario, we should as a result never see un-approved pattern additions or changes to the Design System. However, the problem is that sometimes for step 3, it's impossible for a VFS team to just make the change in their isolated code for their feature.

- Example 1: sometimes the code changes have to be made directly in the forms library for it to render for that feature
- Example 2: sometimes the feature itself is a global element stored only in the design system

There may be an ideal state of Design System and its forms library element that might prevent these edge cases from occuring. But, we're not prioritizing discovery or implementation around that yet. So...

## For now, how do we handle these edge cases?

When a VFS team has a new/adjusted pattern approved through the collaboration cycle, and in order to effect that change for their feature they have to make changes to code housed in the Design System, we first determine w/the VFS team whether the change they're asking for is a launch blocker for them

### For desired changes that are launch-blocking
**If it would impact multiple features/teams**, then follow Path A: the VFS team can't launch until this gets reviewed by the design system council
- For example: forms library changes, buttons, error messaging

**If it would not impact multiple features/teams**, then follow Path B: the VFS team can change the code, submit a ticket in the Proposals column w/the "code new" label, and the design system council will review it later
- For example: global elements like the header

### For desired changes that are not launch-blocking
Follow Path C: the VFS team can't change the code, but should submit a ticket in the Proposals column w/the appropriate label, and the design system council will review it later
- For example: minor visual bugs
