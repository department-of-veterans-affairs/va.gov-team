# IAM SSOe CAR

# IAM SSOe CAR

This document lists out the items that IAM reports to their leadership in regards to SSOe. The intent is to ensure the new SiS has at least the same reporting coverage as IAM does.

---

The following metrics are found on the [IAM CAR Site](https://iamportal.iam.va.gov/iamv2/reports/CAR_embed_SSOe.php) for SSOe:

- SAML requests vs. responses (percentage)
    - Oauth: [https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658261796443&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658247396443&fullscreen_widget=7560467443695130&from_ts=1658246505012&to_ts=1658260905012&live=true](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658261796443&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658247396443&fullscreen_widget=7560467443695130&from_ts=1658246505012&to_ts=1658260905012&live=true)
- SAML responses to [VA.gov](http://va.gov/) by CSP
    - Oauth: [https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658261796443&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658247396443&fullscreen_widget=7560467443695130&from_ts=1658246505012&to_ts=1658260905012&live=true](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658261796443&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658247396443&fullscreen_widget=7560467443695130&from_ts=1658246505012&to_ts=1658260905012&live=true)
- Authentications by CSP in graph form broken down by hour
    - This appears to be number of successful authentications
        - Oauth: [https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658262579536&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658248179536&fullscreen_widget=3227399081996584&from_ts=1658246505012&to_ts=1658260905012&live=true](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658262579536&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658248179536&fullscreen_widget=3227399081996584&from_ts=1658246505012&to_ts=1658260905012&live=true)
    - They also have an additional graph for this broken down by deployed ISAM server. We will not provide this type of information as our instances do not run independently in a way that is distinguishable to rails
        - We should consider if this could help detect a bad node
- Authentications by CSP method Totals
    - Oauth: [https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658262579536&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658248179536&fullscreen_widget=3227399081996584&from_ts=1658246505012&to_ts=1658260905012&live=true](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?fullscreen_end_ts=1658262579536&fullscreen_paused=false&fullscreen_section=overview&fullscreen_start_ts=1658248179536&fullscreen_widget=3227399081996584&from_ts=1658246505012&to_ts=1658260905012&live=true)
    - They also have an additional graph for this broken down by deployed ISAM server. We will not provide this type of information as our instances do not run independently in a way that is distinguishable to rails
        - We should consider if this could help detect a bad node
- Authentications by Assurance level in graph form broken down by hour
    - Oauth: Need to create
- Authentications by Assurance level Totals
    - Oauth: Need to create
- IDme LOA3 authentications per app
    - Oauth: Need to create
- IDme LOA1 authentications per app
    - Oauth: Need to create
- IDme brokered MHV LOA3 authentications per app
    - Oauth: Need to create
- IDme brokered MHV LOA1 authentications per app
    - Oauth: Need to create
- IDme brokered DSLogon LOA3 authentications per app
    - Oauth: Need to create
- IDme brokered DSLogon LOA1 authentications per app
    - Oauth: Need to create
