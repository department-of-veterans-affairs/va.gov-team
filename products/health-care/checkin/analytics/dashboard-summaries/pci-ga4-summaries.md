# PCI GA4 Dashboards Summary

The following Google Analytics 4 dashboards contain metrics for Patient Check-in and OH Travel.

## Table of Contents
- [Check-in](#check-in)
- [Check-in with Travel](#check-in-with-travel)
- [Pre-Check-in](#pre-check-in)
- [PCI Funnels](#pci-funnels)
  
## Check-in
- [PCI Check-in Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/v08dnfMeRpi0OZRusDBV9w)
- Tabs
  - Pageviews - total number of pageview for pages that match this **regular** expression '.\*health-care/appointment-check-in/(verify|arrived|contact-information|emergency-contact|next-of-kin|details).\*'
  - Details Pageviews - total number of pageviews for the appointment details page specifically (needed because of the appended UUID) using this **regular** expression '.\*health-care/appointment-check-in/appointment-details.\*'
  - Complete Pageviews - total number of pagesview for the completion page specifically (needed because of appended UUID) using this **regular** expression '.\*health-care/appointment-check-in/complete.\*'
  - Expandables - total number of expands/collapses on collapsible controls using this **regular** expression '.\*health-care/appointment-check-in/(verify|arrived|contact-information|emergency-contact|next-of-kin|details|appointment-details|complete).\*'
  - Arrived Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/arrived'
  - Contact Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/contact-information'
  - EC Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/emergency-contact'
  - NOK Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/next-of-kin'
  - Details Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/details'
  - Appt Details Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/appointment-details'
contains

## Check-in with Travel
- [PCI Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
- Tabs
  - Pageviews - total number of pageview for pages that match this **regular** expression '.\*health-care/appointment-check-in/(travel-review|travel-pay|travel-mileage|travel-vehicle|travel-address|travel-agreement).\*'
  - Expandables- total number of expands/collapses on collapsible controls using this **regular** expression '.\*health-care/appointment-check-in/(travel-review|travel-pay|travel-mileage|travel-vehicle|travel-address|travel-agreement).\*'
  - File Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/travel-pay'
  - Mileage Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/travel-mileage'
  - Vehicle Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/travel-vehicle'
  - Address Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/travel-address'
  - Review Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-check-in/travel-review'

## Pre-Check-in
- [PCI Pre-Check-in Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/fBTnZD1-T3SQ5HtcKHsT_A)
- Tabs
  - Pageviews - total number of pageview for pages that match this **regular** expression '.\*health-care/appointment-pre-check-in/(verify|introduction|contact-information|emergency-contact|next-of-kin|complete).\*'
  - Details Pageviews - total number of pagesview for the completion page specifically (needed because of appended UUID) using this **regular** expression '.\*health-care/appointment-pre-check-in/appointment-details.\*'
  - Expandables- total number of expands/collapses on collapsible controls using this **regular** expression '.\*health-care/appointment-pre-check-in/(verify|introduction|contact-information|emergency-contact|next-of-kin|complete).\*'
  - Intro Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-pre-check-in/introduction'
  - Contact Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-pre-check-in/contact-information'
  - EC Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-pre-check-in/emergency-contact'
  - NOK Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'health-care/appointment-pre-check-in/next-of-kin'

## OH Travel
- [OH Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/iAXzqTMmQUCANjIKJbm3pA)
- Tabs & their regular expression filter
  - Pageviews - total number of pageview for pages that match this **regular** expression '.\*my-health/appointment-travel-claim/(verify|travel-pay|travel-mileage|travel-vehicle|travel-address|travel-review|travel-agreement).\*'
  - Complete Pageviews - total number of pagesview for the completion page specifically (needed because of appended UUID) using this **regular** expression '.\*my-health/appointment-travel-claim/complete.\*'
  - Expandables- total number of expands/collapses on collapsible controls using this **regular** expression '.\*my-health/appointment-travel-claim/(verify|travel-pay|travel-mileage|travel-vehicle|travel-address|travel-review|travel-agreement|complete).\*'
  - File Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'my-health/appointment-travel-claim/travel-pay'
  - Mileage Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'my-health/appointment-travel-claim/travel-mileage'
  - Vehicle Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'my-health/appointment-travel-claim/travel-vehicle'
  - Address Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'my-health/appointment-travel-claim/travel-address'
  - Review Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression '.*my-health/appointment-travel-claim/travel-review'
   
## PCI Funnels
- [PCI & OH Travel Funnels](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/8tsu4m2kR5eLtCmD9xzRcA)
- Check-in Funnel Steps
  - Step 1: Verify - /health-care/health-care/appointment-check-in/verify
  - Step 2: Landing Page - either of these 2
    - /health-care/health-care/appointment-check-in/appointments (new landing page)
    - /health-care/health-care/appointment-check-in/arrived (old landing page)
  - Step 3: Arrived? - /health-care/health-care/appointment-check-in/arrived
  - Step 4: Contact Info? - /health-care/health-care/appointment-check-in/contact-information
  - Step 5: EC Info? - /health-care/health-care/appointment-check-in/emergency-contact
  - Step 6: NOK Info? - /health-care/health-care/appointment-check-in/next-of-kin
  - Step 7: Check in - /health-care/health-care/appointment-check-in/details
  - Step 8: Complete - /health-care/health-care/appointment-check-in/complete
- Travel via Check-in Funnel Steps
  - Step 1: Verify - /health-care/health-care/appointment-check-in/verify  
  - Step 2: File Claim? - /health-care/health-care/appointment-check-in/travel-pay
  - Step 3: Mileage Only? - /health-care/health-care/appointment-check-in/travel-mileage
  - Step 4: Own Vehicle - /health-care/health-care/appointment-check-in/travel-vehicle
  - Step 5: Own Address? - /health-care/health-care/appointment-check-in/travel-address
  - Step 6: Review Claim - /health-care/health-care/appointment-check-in/travel-review
  - Step 7: Check in - /health-care/health-care/appointment-check-in/details
  - Step 8: Complete - /health-care/health-care/appointment-check-in/complete
- Pre-Check-in Funnel Steps
  - Step 1: Verify - /health-care/health-care/appointment-pre-check-in/verify
  - Step 2: Landing Page - one of these 2
    - /health-care/health-care/appointment-pre-check-in/appointments (new landing page)
    - /health-care/health-care/appointment-pre-check-in/introduction (old landing page)
  - Step 3: Contact Info? - /health-care/health-care/appointment-pre-check-in/contact-information
  - Step 4: EC Info? - /health-care/health-care/appointment-pre-check-in/emergency-contact
  - Step 5: NOK Info? - /health-care/health-care/appointment-pre-check-in/next-of-kin
  - Step 6: Complete - /health-care/health-care/appointment-pre-check-in/complete
- **DRAFT** OH Travel Funnel Steps
  - Step 1: Verify - /my-health/appointment-travel-claim/verify
  - Step 2: File Claim? - /my-health/appointment-travel-claim/travel-pay
  - Step 3: Mileage Only? - /my-health/appointment-travel-claim/travel-mileage
  - Step 4: Own Vehicle - /my-health/appointment-travel-claim/travel-vehicle
  - Step 5: Own Address? - /my-health/appointment-travel-claim/travel-address
  - Step 6: Review Claim - /my-health/appointment-travel-claim/travel-review
  - Step 7: Complete - /my-health/appointment-travel-claim/travel-agreement

   

