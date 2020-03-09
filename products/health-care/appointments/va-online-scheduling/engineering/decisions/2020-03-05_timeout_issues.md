# Releasing with timeout issues not fully resolved

As previously discussed, there are two endpoints as part of VAOS that encounter long timeouts. One is fetches clinics and the other fetches PACT team assignment information. The clinics endpoints has about a 25 second latency, whereas the PACT team call is more like 50 seconds.

The solution to addressing this problem is in flight. It is expected to released later this week and it involves changes to CDW, an upstream dependency. Assuming data integrity of those changes suffices we will merge: https://github.com/department-of-veterans-affairs/vets-api/pull/4004 which will reset the default to 15 seconds for all timeouts. However, in the interim, we will lower the threshold from 55 seconds to 30 seconds for both PACT and clinics and timeouts as part of: https://github.com/department-of-veterans-affairs/vets-api/pull/4006 and be prepared to no longer make the PACT team calls based on this FE change: https://github.com/department-of-veterans-affairs/vets-website/pull/11711. We'll only merge the FE PR if we know definitively that the CDW changes will not be taking affect before our launch date of 3/11/2020.

What are some possible impacts?

Well a long timeout has been shown to cause issues to the stability of the platform. However in discussions with Andrew Gunsch, we're comfortable with the risk since the initial rollout only targets 5% of users and is not expected to result in more than 400 users using the service in a given week. We also have sufficient monitoring in place to roll back and disable the feature should there be instability issues in production.

It is expected that the CDW changes will go live sometime in the near future, at which point we will likely just stick with the 15 second default timeout values and the other PRs can be closed.

## Technical Details

Our technical discovery on the PACT call is documented in [PACT Service Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/pact_service_discovery.md).

## Possible Solutions and Temporary Workarounds

- All of the details are provided above.

## Ideal and Viable Solutions.

N/A

## Final Decision

Andrew Gunsch on 3/5/2020
