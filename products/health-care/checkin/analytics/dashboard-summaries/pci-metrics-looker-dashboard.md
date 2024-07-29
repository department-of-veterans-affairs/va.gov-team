# PCI Metrics Looker Studio Dashboard Data Sources Summary

This [PCI Metrics Looker Studio Dashboard](https://lookerstudio.google.com/reporting/07cf45d3-d464-4e0b-b905-40bcf34f4602/page/TlJ0C) displays timeline series graphs for PCI metrics as outlined below; these metrics are captured in this [CIE Reporting Metrics spreadsheet](https://docs.google.com/spreadsheets/d/1dj3CpR-wLljqydLhwO4GEgvmzLBOUSHIqxM1LIYmHTc/edit?gid=737742016#gid=737742016) and used as the data source for the Looker Studio dashboard.

## Table of Contents

- [Check-in](#check-in)
- [Pre-Check-in](#pre-check-in)
- [Travel via Check-in](#travel-via-check-in)
- [PCI Combined](#pci-combined)

## Check-in
  
  #### Check-in Audience & Completions
  - Blue line shows the total number of Veterans who successfully verified their identity in eCheck-in
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_sessions_create_count_success' and represents the number of successful calls to the API to verify a Veteran's identity in eCheck-in
    - Source is the "Check-in Audience" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the total number of Veterans who successfully completed the eCheck-in workflow 
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_checkins_create_count_success' and represents the number of successful calls to the API to check in a Veteran
    - Source is the "Check-in Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

  #### Check-in Verifications, Conversions, & Errors
  - Blue line shows the percentage of Veterans who successfully verified their identity from all Veterans who attempted to verify their identity in eCheck-in
    - Value comes from StatsD metric calculation
      vets_api.statsd.api_check_in_v2_sessions_create_count_success / 
      (vets_api.statsd.api_check_in_v2_sessions_create_count_failure + vets_api.statsd.api_check_in_v2_sessions_create_count_success) * 100
    - Source is the "Check-in Verification Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the percentage of Veterans who successfully completed eCheck-in from all Veterans who successfully verified their identity
    - Value comes from StatsD metric calculation
      vets_api.statsd.api_check_in_v2_checkins_create_count_success / 
      vets_api.statsd.api_check_in_v2_sessions_create_count_success * 100
    - Source is the "Check-in Conversion Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Red line shows the percentage of errors that occured during the calls to the API to check in a Veteran
    - Value comes from StatsD metric calculation
      vets_api.statsd.api_check_in_v2_checkins_create_count_failure / 
      (vets_api.statsd.api_check_in_v2_checkins_create_count_failure + vets_api.statsd.api_check_in_v2_checkins_create_count_success) * 100
    - Source is the "Check-in Error Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

## Pre-Check-in
  #### Pre-Check-in Audience and Completions
  - Blue line shows the total number of Veterans who successfully verified their identity in Pre-Check-in
    - Value comes from StatsD metric 'vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success' and represents the number of successful calls to the API to verify a Veteran's identity in Pre-Check-in
    - Source is the "Pre-Check-in Audience" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the total number of Veterans who successfully completed the Pre-Check-in workflow 
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_pre_checkins_create_count_success' and represents the number of successful calls to the API to complete pre-check-in for a Veteran
    - Source is the "Pre-Check-in Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

  #### Pre-Check-in Verifications, Conversions, and Errors
  - Blue line shows the percentage of Veterans who successfully verified their identity from all Veterans who attempted to verify their identity in Pre-Check-in
    - Value comes from StatsD metric calculation
      vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success / 
      (vets_api.statsd.api_pre_check_in_v2_sessions_create_count_failure + vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success) * 100
    - Source is the "Pre-Check-in Verification Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Green line shows the percentage of Veterans who successfully completed Pre-Check-in from all Veterans who successfully verified their identity in Pre-Check-in
    - Value comes from StatsD metric calculation
      vets_api.statsd.api_check_in_v2_pre_checkins_create_count_success / 
      vets_api.statsd.api_pre_check_in_v2_sessions_create_count_success * 100
    - Source is the "Pre-Check-in Conversion Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Red line shows the percentage of errors that occured during the calls to the API to complete pre-check-in for a Veteran
    - Value comes from StatsD metric calculation
      vets_api.statsd.api_check_in_v2_pre_checkins_create_count_failure/ 
      (vets_api.statsd.api_check_in_v2_pre_checkins_create_count_failure + vets_api.statsd.api_check_in_v2_pre_checkins_create_count_success) * 100
    - Source is the "Pre-Check-in Error Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

## Travel via Check-in

  #### Travel Audience and Completions
  - Blue line shows the total number of Veterans who reached the "Would you like to file a travel reimbursement claim?" page in eCheck-in and continued the workflow
    - Value comes from the GA4 metric of all Veterans who clicked 'Yes' or 'No' (as translated) on the "Would you like to file a travel reimbursement claim?" page
    - Source is the "File Buttons" tab in the [PCI Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
  - Green line shows the total number of Veterans who successfully submitted a travel reimbursement claim via eCheck-in  
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v0_travel_claim_submit_claim_count_success' and represents the number of successful calls to the BTSSS API to submit a claim
    - Source is the "Travel Claim Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

  #### Travel Verifications, Conversions, and Errors
  - Blue line shows the percentage of Veterans who reached the "Would you like to file a travel reimbursement claim?" page and chose to file a travel reimbursement claim (clicked "Yes")
    - Value comes from the GA4 metric of all Veterans who clicked 'Yes' (as translated) on the "Would you like to file a travel reimbursement claim?" page
    - Source is the "File Buttons" tab in the [PCI Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
  - Green line shows the percentage of Veterans who successfully submitted a travel reimbursement claim from all  Veterans who clicked 'Yes' on the "Would you like to file a travel reimbursement claim?" page
    - Value comes from the calculation
      vets_api.statsd.api_check_in_v0_travel_claim_submit_claim_count_success / File Buttons (Yes, Si, or Oo) * 100
    - Sources are
      - "Travel Claim Completions" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
      - "File Buttons" tab in the [PCI Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA) where link test is 'Yes', 'Si' or 'Oo'
  - Red line shows the percentage of errors that occured during the calls to the BTSSS API to file a travel reimbursement claim for a Veteran
    - Value comes from StatsD metric calculation
      vets_api.statsd.worker_checkin_travel_claim_btsss_timeout / 
      vets_api.statsd.api_check_in_v0_travel_claim_submit_claim_count_success * 100
    - Source is the "Travel Claim Error Rate (%)" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)

## PCI Combined
  #### Check-in & Pre-Check-in Link Clicks
  - Purple line shows the total number of clicks on the check-in link by Veterans
    - Value comes from StatsD metric 'vets_api.statsd.api_check_in_v2_sessions_show_count_success'
    - Source is the "Check-in Link Clicks" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  - Orange line shows the total number of clicks on the pre-check-in link by Veterans
    - Value comes from StatsD metric 'vets_api.statsd.api_pre_check_in_v2_sessions_show_count_success'
    - Source is the "Pre-Check-in Link Clicks" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
  
  #### PCI Customer Satisfaction Score
  - Blue line is the average Veteran satisfaction score from the Medallia survey results (1-5)
    - Value comes from the calculation
      AVG(Satisfaction by Directory Overview (from the Intercept Survey) + Satisfaction by directory (from the Feedback Survey))
    - Source is the [Medallia Report](https://va-gov.domo.com/page/825663825?userId=748391715)
  
  #### PCI Downtime
  - Blue line shows the percentage of time any of the PCI applications (i.e. eCheck-in or Pre-Check-in) were not available to Veterans 
    - Value comes from the calculation
      100 - Veteran facing - Mobile check-in: Uptime (Actual, not Objective)
    - Source is the "Veteran facing - Mobile check-in: Uptime" box in the [PCI Metrics Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1719328454518&to_ts=1721920454518&live=true)
    
