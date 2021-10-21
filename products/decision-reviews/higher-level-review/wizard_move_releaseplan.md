# Do I need a staged rollout?

**No.**



#### Exceptions

Right now, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

Other exceptions to this requirement can be approved by DEPO VSP leads.

### Planning

- Desired date range: _\[11/01/21 - 11/30/21\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \feature flag]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: error rate < 5%.

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: N/A
- Percentage of Users (and roughly how many users do you expect this to be): 10% (

#### Results: N/A
-

### Stage B: N/A

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Rollout Plan

1. Notify Public Websites team - site is ready to go live
2. Turn off feature toggles
3. Landing page live
4. Monitor Google Analytics and Grafana/Sentry for errors

#### Rollback Plan

1. Ask Public Websites to unpublish 
2. Turn off feature flags

#### Marketing Plan N/A

1.


#### Results: N/A
- 

## Go Live!

### Planning:
- Desired date: 11/20/21


