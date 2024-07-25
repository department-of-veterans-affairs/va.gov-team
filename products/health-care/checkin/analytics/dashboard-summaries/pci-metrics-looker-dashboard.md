# PCI Metrics Looker Studio Dashboard Summary

This Looker Studio dashboard displays timeline series graphs for PCI metrics as outlined below; these metrics are captured in this [CIE Reporting Metrics spreadsheet](https://docs.google.com/spreadsheets/d/1dj3CpR-wLljqydLhwO4GEgvmzLBOUSHIqxM1LIYmHTc/edit?gid=737742016#gid=737742016) and used as the data source for the Looker Studio dashboard.

- [Check-in](#check-in)
- [Pre-Check-in](#pre-check-in)
- [Travel via Check-in](#travel-via-check-in)
- [Various](#various)

## Check-in
  
  #### Check-in Audience & Completions
  - Blue line shows the total number of Veterans who successfully verified their identity in eCheck-in
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_sessions_create_count_success' and represents the number of successful calls to the API to verify a Veteran's identity in eCheck-in
    - Source is the "Check-in Audience" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the total number of Veterans who successfully completed the eCheck-in workflow 
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_checkins_create_count_success' and represents the number of successful calls to the API to check in a Veteran
    - Source is the "Check-in Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

  #### Check-in Verifications, Conversions, & Errors
  - Blue line shows the percentage of Veterans who successfully verified their identity from all Veterans who attempted to verify their identity
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_sessions_create_count_success / (vets_api.statsd.api_check_in_v2_sessions_create_count_failure + vets_api.statsd.api_check_in_v2_sessions_create_count_success) * 100
    - Source is the "Check-in Verification Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the percentage of Veterans who successfully completed eCheck-in from all  Veterans who successfully verified their identity
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_checkins_create_count_success / vets_api.statsd.api_check_in_v2_sessions_create_count_success * 100
    - Source is the "Check-in Conversion Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Red line shows the percentage of errors
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_checkins_create_count_failure / (vets_api.statsd.api_check_in_v2_checkins_create_count_failure + vets_api.statsd.api_check_in_v2_checkins_create_count_success) * 100
    - Source is the "Check-in Error Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

## Pre-Check-in
  #### Pre-Check-in Audience & Completions
  - Blue line shows the total number of Veterans who successfully verified their identity in Pre-Check-in
    - Value comes from StatsD metric 'vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success' and represents the number of successful calls to the API to verify a Veteran's identity in Pre-Check-in
    - Source is the "Pre-Check-in Audience" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the total number of Veterans who successfully completed the Pre-Check-in workflow 
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_pre_checkins_create_count_success' and represents the number of successful calls to the API to complete pre-check-in for a Veteran
    - Source is the "Pre-Check-in Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

  #### Pre-Check-in Verifications, Conversions, & Errors
  - Blue line shows the percentage of Veterans who successfully verified their identity from all Veterans who attempted to verify their identity
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_sessions_create_count_success / (vets_api.statsd.api_check_in_v2_sessions_create_count_failure + vets_api.statsd.api_check_in_v2_sessions_create_count_success) * 100
    - Source is the "Check-in Verification Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the percentage of Veterans who successfully completed eCheck-in from all  Veterans who successfully verified their identity
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_checkins_create_count_success / vets_api.statsd.api_check_in_v2_sessions_create_count_success * 100
    - Source is the "Check-in Conversion Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Red line shows the percentage of errors
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_checkins_create_count_failure / (vets_api.statsd.api_check_in_v2_checkins_create_count_failure + vets_api.statsd.api_check_in_v2_checkins_create_count_success) * 100
    - Source is the "Check-in Error Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

## Travel via Check-in

  #### Travel Audience & Completions
  - Blue line shows the total number of Veterans who reached the "Would you like to file a travel reimbursement claim?" page in eCheck-in and continued the workflow
    - Value comes from the GA4 metric of all Veterans who clicked 'Yes' or 'No' (as translated) on the "Would you like to file a travel reimbursement claim?" page
    - Source is the "File Buttons" tab in the [PCI Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
  - Green line shows the total number of Veterans who successfully submitted a travel reimbursement claim via eCheck-in  
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v0_travel_claim_submit_claim_count_success' and represents the number of successful calls to the BTSSS API to submit a claim
    - Source is the "Travel Claim Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

  #### Travel Verifications, Conversions, & Errors
  - Blue line shows the percentage of Veterans who successfully verified their identity from all Veterans who attempted to verify their identity
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_sessions_create_count_success / (vets_api.statsd.api_check_in_v2_sessions_create_count_failure + vets_api.statsd.api_check_in_v2_sessions_create_count_success) * 100
    - Source is the "Check-in Verification Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the percentage of Veterans who successfully completed eCheck-in from all  Veterans who successfully verified their identity
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_checkins_create_count_success / vets_api.statsd.api_check_in_v2_sessions_create_count_success * 100
    - Source is the "Check-in Conversion Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Red line shows the percentage of errors
    - Value comes from StatsD metric calculation vets_api.statsd.api_check_in_v2_checkins_create_count_failure / (vets_api.statsd.api_check_in_v2_checkins_create_count_failure + vets_api.statsd.api_check_in_v2_checkins_create_count_success) * 100
    - Source is the "Check-in Error Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

## Various
  - Check-in & Pre-Check-in Link Clicks
    - Purple line shows the total number of clicks on ???
    - Orange line shows the total number of clicks on????
  - PCI Customer Satisfaction Score
    - Average Veteran satisfaction score from Medallia survey results (1-5)
  - PCI Downtime
    - Blue line shows the percentage of time any of the PCI applications (i.e. eCheck-in or Pre-Check-in) were not available to Veterans (i.e. 100 minus the uptime)
