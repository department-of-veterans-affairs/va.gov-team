# Feature flags

### Communication Channels
- Github Label: N/A
- Keywords: feature flags, build flags, prod flag

### Points of Contact
- DSVA Product Owner: Leah Bannon leah.bannon2@va.gov, Patrick Bateman patrick.bateman@va.gov
- Ad Hoc Product Manager: Ryan Luu ryan.luu@adhocteam.us
- Engineering POCs:
  - Jeff Balboni jeff@adhocteam.us
  - Rian Fowler rian.fowler@adhocteam.us

### Narrative
We have a wide variety of products on VA.gov and enhancements to those products are happening all the time. In order to test those enhancements before they go live for Veterans, we need a way to limit the changes to just appearing on our staging or dev environments. We use feature or build type flags to accomplish this. All changes to the VA.gov site are deployed to production every day, but some of those changes are essentially turned off in production because they are hidden by a flag.

#### Current Status

Our current feature flag approach is very rudimentary and will likely become more sophisticated as the platform matures.

Currently, we often use build type flags instead of true "feature" flags. This allows us to hide features or applications for the different environments, because we have a build type associated with each.

### How to Access / Test

See our [front end feature flag documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags). This is a feature of the VA.gov platform and isn't directly testable right now.
