# Handling Edge Cases in the Design System Governance Process

Most of the time, this is the happy path flow for a VFS team who wants to create a new pattern or adjust an existing pattern for their solution to better meet the needs of their users:

1. Draft new/adjusted pattern
1. Get new/adjusted pattern approved through design reviews in the collaboration cycle
1. Use that new/adjusted pattern in the isolated code for the feature
1. Submit a proposal for a new/adjusted pattern to the [Design System Governance Process board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3)
1. That's it! VSP will work through the backlog to take the proposed new/adjusted pattern and transform it into re-usable code in the Design System

In that happy path ^ scenario, we should as a result never see un-approved pattern additions or changes to the Design System. However, the problem is that sometimes for step 3, it's impossible for a VFS team to just make the change in their isolated code for the feature.

- Example 1: sometimes the code changes have to be made directly in the forms library for it to render for that feature
- Example 2: sometimes the feature itself is a global element stored only in the design system

The ideal state we want to work toward is one in which we've cleaned up the Design System and have separated out individual features into isolated places, so that the Design System truly  only houses reusable patterns that folks can draw from to use in their isolated features. But we're not there yet.

### So for now, given the current state of things, how do we handle these edge cases?

When a VFS team has a new/adjusted pattern approved through the collaboration cycle, and in order to effect that change for their feature they have to make changes to code housed in the Design System, we should:

- A) block their launch until their proposed new/adjusted pattern gets approved through our Design System Governance Process
- B) prioritize reviewing the new/adjusted pattern asap so the VFS team can move on, and so we don't have un-approved code in the Design System
- C) allow the VFS team to do carry on and do their thing, but flag the updated code in another way so that we can review it at some point in the future
  - For this, would we need a new label or pipeline in the [Design System Governance Process board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3)? Or could we use our existing infra to handle this?

