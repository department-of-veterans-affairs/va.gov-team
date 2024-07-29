# BTSSS (VA.gov) Incident Response Playbook

## Product Description
The BTSSS (aka Travel Pay) feature allows Veterans who meet certain criteria to be reimbursed for traveling to appointments. At the time, the features include:
* Claim Status

## Routes to code
- [Frontend application](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/travel-pay)
- [Backend application](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/travel_pay)

## Contacts

### Team Members:
- DSVA Product Lead: Kay Lawyer (katherine.lawyer@va.gov)
- Team Product Manager: Ayush Chakravarty (ayush.chakravarty@adhocteam.us)
- Tech Lead: Kevin Duensing (kevin.duensing@adhocteam.us)
- OCTO Tech Lead: Mark Dewey (mark.dewey@va.gov)

### Outage Contacts:
- OCTO Tech Lead: Mark Dewey (mark.dewey@va.gov)
- Tech Lead: Kevin Duensing (kevin.duensing@adhocteam.us)

## Troubleshooting

### Errors and Metrics
[Datadog Monitors](https://vagov.ddog-gov.com/monitors/manage?q=travel%20pay&order=desc)

### Issue investigation steps
- Flag to the platform team and security team that there is an incident using standard VA.gov practices
- Roll the offending code back and/or disable the `travel_pay_power_switch` feature flag.
- Coordinate with all necessary teams to identify the root cause of the issue
- Design and implement a fix
- Deploy the fix in coordination with VA.gov platform standards

### Flipper Features and Rollback
#### Feature flag
| Toggle name | Description |
| ----------- | ----------- |
| [travel_pay_power_switch](https://api.va.gov/flipper/features/travel_pay_power_switch) | Main switch for the Travel Pay feature on VA.gov using the new BTSSS (travel pay) API. Enabled - Requests are handled as normal. Disabled - Requests are not handled. Server returns a 503 (Service Unavailable) until re-enabled. |

Feature disabled upon critical security incidents and PII incidents.

#### Rollback
Our PM, Engineering Lead, Research Lead, and stakeholders will monitor analytics both on Google Analytics and DataDog. If they see a spike in errors or unexpected behavior, they will flag to the engineering team that there is a problem. The engineering team will do the following:
#### If a critical severity issue
1. The feature toggle will be disabled for all users
2. Debugging will start immediately
3. The fix will be tested and deployed through normal CI/CD practices
4. The feature toggle will be re-enabled, possibly at a lower percentage of logged-in users
#### If a high-severity issue
1. The feature toggle will remain enabled, possibly at a reduction of availability (e.g. lowered percentage of logged in users)
2. The offending commit will be reverted through normal `git` operations
3. Remove offending code by deploying the revert commit
4. A fix will be highly prioritized and worked on
5. The fix will be tested and deployed through normal CI/CD practices
#### If a low-severity issue
1. The toggle will remain enabled with no reduction in availability
2. A fix will be prioritized and worked on
3. The fix will be tested and deployed through normal CI/CD practices, with no interruption to feature uptime.

## Security
- Product will utilize the following PII consistent with other applications of VA.gov:
  - ICN
  - Travel claim number
    - Never logged
    - Only shown to fully authenticated Veterans
    - Verified that claim numbers are shown only to the Veterans that own them
