# VA Digital Modernization

## VA.gov Relaunch Rollout Plan

## NSOC scoped (Domains, Connections, ESCCB)

This document presents the general connectivity changes required for each phase of the rollout, and associated timeline. It is designed to aid in collaborative discussion and involvement to establish risks and required changes.

Note: Provided and discussed on September 6, 2018 with NSOC. No major concerns raised. Incorporated suggestions.

### Overview

![Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/rollout/nsoc-scope.png)

1. Existing vets.gov domains will be redirected to corresponding va.gov domains.
2. `www|va.gov` requests will be handled by application servers within the VA Enterprise Cloud.
3. Unhandled requests will be routed to the previous VA.gov design through the EWIS proxy.
4. All domains will have associated internal DNS configuration applied.

### Timeline

#### Start State

Active development on current AWS environment on `dev-preview.va.gov` and `preview.va.gov`. `dev-preview.va.gov` routes traffic to our current development environment, and `preview.va.gov` routes traffic to our current staging environment. 

#### Service Proxies to VAEC

All service proxies will be moved to the VAEC pending ESCCB approval and associated configuration updates. All current AWS environments will utilize these VAEC connections to access VA services. This is the first major stage of the Vets.gov VAEC migration. 

#### EWIS Proxies to VAEC

`preview.va.gov` requests route EWIS destined traffic via internal network connection to EWIS. We expect a significant performance improvement to non-native requests by avoiding a second internet-based request for current va.gov resources. 

#### Reverse Proxies to VAEC

*September 11, 2018*

`dev.va.gov`, `dev-api.va.gov`, `dev-preview.va.gov` are routed to the VAEC development environment. `staging.va.gov`, `staging-api.va.gov`, and `preview.va.gov` are routed to the VAEC staging environment. 

`preview.va.gov` utilizes the `staging-api.va.gov` domain for API requests.

#### NSOC Web Flow Updates

NSOC will evaluate network routing and DNS for `dev.va.gov`, `staging.va.gov`, `preview.va.gov`, and `www|va.gov` to improve EWIS proxy performance.  (Kevin Williams)

#### Production Environment Preview

*September 25, 2018*

DNS updates route `preview.va.gov` to the production VAEC environment for selected testing.

`preview.va.gov` utilizes the `api.va.gov` API domain for API requests.

#### Partial Production Traffic Routed to EWIS proxy

Percentage of production `va.gov` traffic is routed to EWIS proxy for testing and establishing performance baseline for monitoring and alerting configuration during the final rollout.

We will increase the percentage of traffic incrementally toward 100%. At the end of this process, all production traffic to `www|va.gov` will be directed through the production VAEC to EWIS (with no content changes).

#### Load Testing

Our team will notify VA Gateway Ops of test parameters, and perform a load test on `dev.va.gov` and potentially `staging.va.gov` after NSOC Web Flow Updates are confirmed in place. Information will be used to update monitoring and alerting configurations for production traffic.

#### Vets.gov Directs Limited Production Traffic to Preview

*October 17, 2018 - No Infrastructure Changes Required*

`vets.gov` visitors will be invited by banner to try the `preview.va.gov` site. Expect an increase in traffic to `preview.va.gov` and `api.va.gov`. Our teams will be monitoring closely and actively addressing issues.


#### VA.gov Directs Limited Production Traffic to Preview

*October 23, 2018 - No Infrastructure Changes Required*

`www|va.gov` visitors will be invited by banner to try the `preview.va.gov` site. Additional increase in traffic to `preview.va.gov` and `api.va.gov`, as well as continued monitoring.

#### VA.gov Routes to Production VAEC

*November 7, 2018*

DNS updates route `www|va.gov` traffic to production VAEC environment. All `www|va.gov` traffic is expected to be handled by the new system. Active monitoring and response.
