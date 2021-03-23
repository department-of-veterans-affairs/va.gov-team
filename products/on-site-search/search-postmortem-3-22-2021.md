# Search results not displaying

Date: 3/22/2021

Authors: Samuel Suddath

Status: Resolved

## What happened

As part of an ongoing effort to update the analytics tracking for Site-wide and other search applications, there have been numerous analytics tagging changes over the past few months. With this most recent change to search event tagging, a bug was introduced that caused the Search API results to error out during the event logging portion, preventing search results from rendering.

### What went wrong

This issue did not appear in local frontend or automated testing, as search results are not displayed unless the entire FE and BE are running simultaneously. Additionally the current suite of FE tests are targeted at the user's search experience, and not the search results page. This led to us not catching this issue until it was already on staging and analytics tagging testing was being run (issue was noticed at 3:22pm). After investigation and discovering this issue was universal and had been pushed to production with the 3:23 wets-website release, we created and deployed a fix in this [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/16466). After all tests passed, the PR was merged at 5:31pm, and the off-schedule production deploy began. This deployment was concluded and tested at 7:12pm. 

## Solution

By testing manually I confirmed that the issue existed in an event logger and was being caused by a variable being set to undefined when typeahead was not in use. We fixed this by adding null checking to the variable to prevent future runtime errors.

Once we added this code, we were able to test locally with the full BE and FE running and confirm that search results were being rendered appropriately with this fix. We then completed and merged in the pull request. Once we received approval for an off-schedule front-end deployment it was initiated and completed, removing the issue from production. The slack thread detailing this is here: [slack](https://dsva.slack.com/archives/CBU0KDSB1/p1616442541363800)

### What went right

After discovering that search results were not being rendered correctly, I quickly identified the issue, opened and merged a pull request implementing the fix, then deployed it.
The recovery was quick, with total downtime being approximately 3 hours and 50 minutes.

### Lesssons

1. A PR review environment without socks where features like feature toggles and vets-api endpoints are accessible could have allowed for more thorough testing by developers and any other stakeholders without having to rely on local environment testing that doesn't match a production environment. Having to sping up a BE and FE environment locally that don't match the production environment allows for testing gaps that bugs can slip through

2. Allocating time to write a solid test suite to ensure this won't happen again should be a priority

### Timeline (EST)

-  3:23pm Production deploy went live, search results ceased to be rendered
- ~4:00pm Issue was found through manual testing
- ~4:30pm Pull request was created and issue was pushed
- ~5:30pm Pull Request was merged into Master
-  5:34pm off-schedule deploy was requested and initiated
-  7:12pm Production deploy of fix went live, search results were being rendered correctly
