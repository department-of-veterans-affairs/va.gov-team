# RFC: Dynamic Adaptation of Service Based Applications with PagerDuty and Prometheus

- Date: 2021-01-26
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/18515

## Background
As part of VAOS, we currently allow users to submit community care requests using the appointment request flow. 

We would additionally like to allow users to select their community care provider as part of this flow. However, this
depends on an additional service integration via Lighthouse to PPMS. 

You can think of provider selection as a progressive enhancement on the existing appointment request flow. 

## Motivation
If PPMS is down for either scheduled maintenance or we determine significant performance degradation we would like for 
the application to dynamically adapt by providing a message saying that provider selection is currently not available, 
and allow the user to continue with their appointment request without selecting a provider.

There are many other places where we could potentially leverage this adaptability across VA.gov. 

## Scope
This integration will require 
- Prometheus AlertManager
- PagerDuty and AlertManager integration using "global event routing" or [rulesets](https://support.pagerduty.com/docs/rulesets)
- Vets-Api support of retrieving incidents via PagerDuty and surfacing them to the FE.

- FE changes to support application adaptability will be out of scope for the purposes of this RFC.

## Design
- Setup Prometheus alerts based on relevant queries related to:
  1. PPMS maintenance
  2. PPMS errors exceeding threshold
  3. PPMS latency exceeding threshold
  4. Active circuit breaker "skip" on PPMS service
- Verify that PagerDuty and AlertManager are properly integrated with rulesets to manage for VAOS independent of any other
groups that have a service dependency on PPMS data (ie. Facility Locator)
- Build on the existing PagerDuty api integration in vets-api to additionally support retrieving active incidents for a
given team (VAOS). It will be important to create the appropriate event rule. Perhaps in some of the cases we would want
to be notified with a page, but in other cases we would expect the application to adapt dynamically based on the fired 
events.

## Risks
- ??

## Alternatives
- ??
