# Search experience redirecting to home page / search not completing

Date: 12/16/2020

Authors: Samuel Suddath

Status: Resolved

## What happened

As part of an ongoing effort to create a Search Type Ahead POC, there have been multiple implementations of the search experience over the last few weeks.
The latest implementation involved a switch to using the Downshift component for combobox functionality, which required a change in the way our search component initiated a search / analytics tagging event.
With this new implementation, a default event short circuited our search on the typeahead-disabled search experience and instead redirected users to the va.gov home page.

### What went wrong

Although this issue was fixed in the typeahead search experience, it was NOT caught and fixed on the default search experience, leading to site-wide search not allowing users to complete their search query.
This issue began when Production was deployed at 3:10pm est December 16th. I noticed the issue at 5:15pm est, and created / tested a fix in this [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/15387).
This issue was resolved as part of an off-schedule production deploy at 7:58pm.

## Solution

By testing manually we confirmed that a default event was short-circuiting the search event. We added a fix consolidating the default search event for the typeahead-disabled search experience form and added in a prevent default call to allow the desired search event to propogate.

Once we added this code, we were able to test locally and confirm that search functionality was recovered with this fix. We then completed and merged in the pull request. Once we received approval for an off-schedule front-end deployment it was initiated and completed, removing the issue from production. The slack thread detailing this is here: [slack](https://dsva.slack.com/archives/CBU0KDSB1/p1608164617039500)

### What went right

After discovering that site-wide search was broken, we quickly identified the issue, opened and merged a pull request implementing the fix, then deployed it.
The recovery was quick, with total downtime being approximately 4 hours and 45 minutes.

### Lesssons

1. A formal action plan for when issues like this occur would be an excellent addition to the Onboarding Process.

2. A VSP-owned autocomplete component that addresses all accessibility issues while still allowing for analytics tagging could prevent many of the iterative efforts that led to a bug slipping through the cracks. Testing the Downshift component is closer to Black-box testing than typical component testing, and a dedicated component with interior visibility could allow for a much more comprehensive automated test suite to catch these issues before they become a problem.

3. A PR review environment without socks where features like feature toggles and vets-api endpoints are accessible could have allowed for more thorough testing by both developers, and any other stakeholders without having to rely on local environment testing that doesn't match a production environment. Not having access to feature toggles in a local build is a serious slow-down to testing.

4. Allocating time to write a solid test suite to ensure this won't happen again should be a priority

### Timeline (EST)

- 3:10pm Production deploy went live, search efforts were redirected
- ~5:15pm Issue was found through manual testing
- ~6:00pm Fix for issue was added to Pull Request
- ~7:00pm Pull Request was merged into Master
- 7:23pm off-schedule deploy was requested and initiated
- 7:58pm Production deploy of fix went live, search capabilities were reinstated
