# SSOe Outage on VA.gov

### Version History
| Version Number | Author(s)                                              | Revision Date | Description of Change                                                                      |
|----------------|--------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------|
|       0.1      | Joe Niquette |    5/12/23    | Initial creation, approval verbally given to team by Chris Johnston. This document formally acknowledges that approval by the PR approval of Thomas Black.                                                                           |
|      1.0      |        Joe Niquette                                |   10/03/24    | Re-approval by Tom Black

## Background

[VA.gov](http://va.gov/) currently has two options to broker authentication for users in production. The current main authentication broker is called SSOe and supported by a technology called ISAM. The second authentication broker solution is called Sign in Service and was created and is maintained by VA.

## Policy

The Sign in Service solution will be enabled on [VA.gov](http://va.gov/) to serve 100% of all authentication attempts if any of the following conditions are met:

1. Overall SSOe authentication success rate is below 40% over a 15 minute period per the stats measured within Datadog [here](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?from_ts=1683826599660&to_ts=1683840999660&live=false&tile_focus=8901858802204074) AND SiS authentication success rate is above 50% over the same 15 minute period per the stats measured within Datadog [here](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?from_ts=1683826760454&to_ts=1683841160454&live=false&tile_focus=407386167409660).
    1. The Sign in Service will be returned to 0% of all [VA.gov](http://va.gov/) authentications once SSOe authentication success rate has reached a success rate of 50% over a 15 minute period.
2. Any of the credential providers within SSOe fall below 40% return rate as measured in Datadog [here](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?from_ts=1683826700579&to_ts=1683841100579&live=false&tile_focus=169965705415635) AND the same credential provider is above 50% return rate as measured in Datadog [here](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?from_ts=1683826700596&to_ts=1683841100596&live=false&tile_focus=1254326522330070).
    1. The Sign in Service will be returned to 0% of all [VA.gov](http://va.gov/) authentications once SSOe authentication success rate for the impacted credential has reached a success rate of 50% over a 15 minute period.
3. On a by exception basis as approved by Tom Black, [VA.gov](http://va.gov/) Identity Product Owner and Lead Product Engineer.
    1. The Sign in Service will be returned to 0% of all [VA.gov](http://va.gov/) authentications within 30 minutes of Tom Black requesting the service be returned to 0% via the #vsp-identity slack channel or via email to [mfa-identity@oddball.io](mailto:mfa-identity@oddball.io)

## Execution

The [VA.gov](http://va.gov/) Identity team will be responsible for monitoring the stats for both authentication solutions within [VA.gov](http://va.gov/). If the conditions are met per the policy section above, the team is authorized to turn on Sign in Service to 100% of all authentications on [VA.gov](http://va.gov/) via the flipper [here](https://api.va.gov/flipper/features/sign_in_service_enabled). The service will remain on until the above conditions are met at which time the [VA.gov](http://va.gov/) Identity team will modify the value within the flipper to return all [VA.gov](http://va.gov/) authentications to utilize SSOe.

## Renewal Instructions

Every year this policy will be reviewed to determine if this policy should be modified and/or continue to exist within its current form. The next review will be one year after the original approval date of 5/10/2023. Failure to obtain approval within 10 business days of the policy review date will result in the policy no longer being approved.

## Approval

Tom Black
Office of the CTO - Digital Experience

10/03/2023
