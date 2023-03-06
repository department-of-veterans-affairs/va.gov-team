# Staging Review

Expected Review Date: 03/16/2023
Product Code:
- https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv/landing-page

## Summary

The MHV on VA.gov Landing page team is launching an MVP of the *authenticated*
experience for the landing page at `/my-health/`. In addition to requiring
authentication, the landing page will launch behind a feature flag.

The landing page also supports feature flags that can cause toggling of
individual links, though per-link feature flags won't be used at first. When
other MHV apps are ready to do phased rollout, feature flags will be updated to
allow the landing page to link to the new applications.

## Artifacts

### Staging URL

<https://staging.va.gov/my-health/>


### QA Regression Test Plan

TODO: Link to TestRail plan


### E2E Test Participation

Per the [Frontend Support Dashboard](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/):

| Application |	Lines |	Functions |	Statements | Branches |
| mhv/landing-page | 100.00%	| 100.00%	| 100.00%	| 84.62% |

### Complete Privacy, Security and Infrastructure Readiness Review

TODO: Include readiness review