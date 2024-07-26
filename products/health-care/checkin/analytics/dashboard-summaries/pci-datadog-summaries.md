# PCI Datadog Dashboards Summary

The following Datadog dashboard contains metrics for Patient Check-in (eCheck-in & Pre-Check-in) and OH Travel. Each of these values comes from a StatsD metric, as outlined below,

- [PCI Metrics](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719411940765&to_ts=1722003940765&live=true)
 
## Check-in
- Check-in Link Clicks: vets_api.statsd.api_check_in_v2_sessions_show_count_success
- Check-in Audience: vets_api.statsd.api_check_in_v2_sessions_create_count_success
- Check-in Completions: vets_api.statsd.api_check_in_v2_checkins_create_count_success
- Check-in Verification Rate (%): a / (a + b) * 100
  - a = vets_api.statsd.api_check_in_v2_sessions_create_count_success
  - b = vets_api.statsd.api_check_in_v2_sessions_create_count_failure
- Check-in Conversion Rate (%) (%): a / b * 100
  - a = vets_api.statsd.api_check_in_v2_checkins_create_count_success
  - b = vets_api.statsd.api_check_in_v2_sessions_create_count_success
- Check-in Errors: vets_api.statsd.api_check_in_v2_checkins_create_count_failure
- Check-in Error Rate (%): a / (a + b) * 100
  - a = vets_api.statsd.api_check_in_v2_checkins_create_count_failure
  - b = vets_api.statsd.api_check_in_v2_checkins_create_count_success
  
## Pre-Check-in
- Check-in Link Clicks: vets_api.statsd.api_pre_check_in_v2_sessions_show_count_success
- Check-in Audience: vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success
- Check-in Completions: vvets_api.statsd.api_check_in_v2_pre_checkins_create_count_success
- Check-in Verification Rate (%): a / (a + b) * 100
  - a = vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success
  - b = vets_api.statsd.api_pre_check_in_v2_sessions_create_count_failure
- Check-in Conversion Rate (%) (%): a / b * 100
  - a = vvets_api.statsd.api_check_in_v2_pre_checkins_create_count_success
  - b = vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success
- Check-in Errors: vets_api.statsd.api_check_in_v2_pre_checkins_create_count_failure
- Check-in Error Rate (%): a / (a + b) * 100
  - a = vets_api.statsd.api_check_in_v2_pre_checkins_create_count_failure
  - b = vets_api.statsd.api_check_in_v2_pre_checkins_create_count_success
  
## Travel via eCheck-in
- Travel Claim Completions: vets_api.statsd.api_check_in_v0_travel_claim_submit_claim_count_success
- Travel Errors: vets_api.statsd.worker_checkin_travel_claim_btsss_timeout
- Travel Claim Error Rate (%): a / (a + b) * 100
  - a = vets_api.statsd.worker_checkin_travel_claim_btsss_timeout
  - b = vets_api.statsd.api_check_in_v0_travel_claim_submit_claim_count_success
  
## OH Travel
- TBD
