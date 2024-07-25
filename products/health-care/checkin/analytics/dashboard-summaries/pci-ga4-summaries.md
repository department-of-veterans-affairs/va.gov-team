# PCI GA4 Dashboards Summary

The following Google Analytics 4 dashboards contain metrics for Patient Check-in and OH Travel.
 
  ## Check-in
  - [PCI Check-in Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/v08dnfMeRpi0OZRusDBV9w)
  - Tabs
    - Pageviews - total number of pageview for pages that match this **regular** expression '.\*health-care/appointment-check-in/(verify|arrived|contact-information|emergency-contact|next-of-kin|details).\*'
    - Details Pageviews - total number of pageviews for the appointment details page specifically (needed because of the appended UUID) using this **regular** expression '.\*health-care/appointment-check-in/appointment-details.\*'
    - Complete Pageviews - total number of pagesview for the completion page specifically (needed because of appended UUID) using this **regular** expression '.\*health-care/appointment-check-in/complete.\*'
    - Expandables - total number of expands/collapses on collapsible controls using this **regular** expression '.\*health-care/appointment-check-in/(verify|arrived|contact-information|emergency-contact|next-of-kin|details|appointment-details|complete).\*'
    - Arrived Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/arrived'
    - Contact Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/contact-information'
    - EC Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/emergency-contact'
    - NOK Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/next-of-kin'
    - Details Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/details'
    - Appt Details Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/appointment-details'
contains
  ## Pre-Check-in
  - [PCI Pre-Check-in Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/fBTnZD1-T3SQ5HtcKHsT_A)
  - Tabs
    - Pageviews - total number of pageview for pages that match this **regular** expression '.\*health-care/appointment-pre-check-in/(verify|introduction|contact-information|emergency-contact|next-of-kin|complete).\*'
    - Details Pageviews - total number of pagesview for the completion page specifically (needed because of appended UUID) using this **regular** expression '.\*health-care/appointment-pre-check-in/appointment-details.\*'
    - Expandables- total number of expands/collapses on collapsible controls using this **regular** expression '.\*health-care/appointment-pre-check-in/(verify|introduction|contact-information|emergency-contact|next-of-kin|complete).\*'
    - Intro Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-pre-check-in/introduction'
    - Contact Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-pre-check-in/contact-information'
    - EC Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-pre-check-in/emergency-contact'
    - NOK Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-pre-check-in/next-of-kin'

  ## Travel via eCheck-in
  - [PCI Travel Metrics GA4 Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
  - Tabs
    - Pageviews - total number of pageview for pages that match this **regular** expression '.\*health-care/appointment-check-in/(travel-review|travel-pay|travel-mileage|travel-vehicle|travel-address|travel-agreement).\*'
    - Expandables- total number of expands/collapses on collapsible controls using this **regular** expression '.\*health-care/appointment-check-in/(travel-review|travel-pay|travel-mileage|travel-vehicle|travel-address|travel-agreement).\*'
    - File Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/travel-pay'
    - Mileage Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/travel-mileage'
    - Vehicle Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/travel-vehicle'
    - Address Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/travel-address'
    - Review Buttons - total number of button clicks for the "Have you arrived..." page using this **contains** expression 'appointment-check-in/travel-review'

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
   


