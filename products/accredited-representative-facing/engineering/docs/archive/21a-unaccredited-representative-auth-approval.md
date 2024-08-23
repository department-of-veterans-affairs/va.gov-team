## Slack Thread Reference
This document came from [this #arp-identity-integration thread](https://dsva.slack.com/archives/C06NBCMA7LL/p1722984081769339) during the ARP production rollout approval.

## Use Cases
> List out the use cases, or link to them in your product doc

For use cases, see the relevant [use cases product doc]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/ARP-21a-accreditation-use-cases.md)).


## Architecture diagrams
> Show system dependencies, especially related to our SiS service

The below more or less match the default Identity use case examples that were given [here]([url](https://dsva.slack.com/archives/C06NBCMA7LL/p1723052514419079?thread_ts=1722984081.769339&cid=C06NBCMA7LL)), with added specificity for the ARP client.
[ARP Sign in Service Client Authentication Flows.odg](https://github.com/user-attachments/files/16619538/ARP.Sign.in.Service.Client.Authentication.Flows.odg)
![image](https://github.com/user-attachments/assets/8cea1442-d44d-4049-a7ee-e3c8d79ef8b2)
![image](https://github.com/user-attachments/assets/387b4da4-a108-4d74-8fbe-a9fdea7bcc1f)

## Monitoring
> Any planned performance monitoring metrics or links in Datadog, if they exist already

[Datadog Dashboards](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1723575764670&to_ts=1723590164670&live=true)

The ARP sign-in path hits the same code paths as other VA.gov applications and can be differentiated by client_id, much like `vamobile`. The same [Identity StatsD constants]([url](https://github.com/department-of-veterans-affairs/vets-api/blob/8eabc0ecb4eb01f7aa6db6d37b1d9d6cb14655f4/app/services/sign_in/constants/statsd.rb#L5)) and Datadog dashboards can be utilized to monitor ARP user sign-in.


