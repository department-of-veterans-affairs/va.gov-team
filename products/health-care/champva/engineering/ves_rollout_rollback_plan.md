## VES Rollout and Rollback

VES is expected to be ready for integration in Production starting September 15th, 2015.  At this time, we will need to enable the [champva_send_to_ves](https://api.va.gov/flipper/features/champva_send_to_ves) Flipper toggle in Production.

### Rollout

There are several planned Out-of-offices during the VES release window, so we're opting here for a small rollout to begin with, ramping up quickly if the integration appears to be working.

Given this, the current rollout plan is to enable the above Flipper toggle for 10% of users, 100% of the time, and monitor traffic on this [DataDog](https://vagov.ddog-gov.com/dashboard/gmp-4du-pvm/ivc-champva-10-10d-form-dashboard) dashboard.  This is to ease troubleshooting/recovery burden on the team in case of failures.

After a full day of traffic with no errors, we will bump the toggle to 50% of users.

After one more full day of traffic with no errors, we will bump the toggle to 100% of users.

### Rollback

If issues are discovered during a rollout, we will disable the above Flipper toggle to stop all traffic to VES until any issues are resolved.  Once we have fixes deployed to production, we will re-enable the toggle and ramp up daily from 10%, to 50%, and then 100%.
