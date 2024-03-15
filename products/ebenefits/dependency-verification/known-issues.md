# Dependency Verification
Understanding of the problem space

When dependency status of veterans changed, veterans would not update those changes with the VA, so certain payments, which factor number of dependents into the calculated amount, were over paying veterans. This error would be caught at a later date and veterans would be asked to essentially pay back the amount they were overpaid. This is an obvious source of consternation for the veteran and also creates costly administrative back and forth as support staff try to explain and resolve the issues.

Goals
- Remind all veterans who submitted dependency information a chance to update that information once a year to avoid overpayments.
- Reduce administrative transactions costs dealing with the overpayment issue

Original solution approach was for a global modal on a yearly time trigger to pop up inviting the veteran to change their dependents information. Form was embedded in the modal. This would give veterans the opportunity to change their dependents information if anything had changed.
- it was a global feature
- It would pop up on any page entry point on the site
- The design for this modal was fully developed and I believe the code sits on staging
- It would maximize the number of veterans who fit the primary use case being reminded to change their info

Roadblocks
- After QA-ing the solution approach with other teams it was determined that a global modal would be disruptive to the overall VA experience because there were already multiple modals across the site
- There was concern with the modal approach in general

Consequences
- What was supposed to be a global pop up that would come up anywhere on the site was eventually constrained to a single page, the dependency verification landing page.
  - But for any use who ends up on this page, the most likely user journey is they're going there to change their dependency information anyway
  - So the planned "solution" was targetting the users who needed to be reminded the least, they were already thinking about their dependents info if they are navigating to this page.
- Decision was made to abandon that solution approach

Recommended alternatives
- Email/Text Notifications: notify veterans via email and provide link to existing dependents page to change info.
- Authenticated experience team global on-site notification feature
