# Google Analytics 360 Plan
We want to create a google analytics plan to measure VA web properties usage, behavior, conversions, etc. Currently, most VA sites use a combination of the DAP analytics program and their own GA measures. Vets.gov has its own GA360 account through Empirical Path.

## Goals
1. Establish a baseline for current performance across va.gov (including subdomains like benefits.va.gov), eBenefits, MyHealtheVet, and vets.gov
2. Implment a GA strategy that allows for measurement across these properties in a "merged" va.gov
3. Measure key performance indicators (KPIs) across these properties to show the impact of the merger project

## Current Plan
*As descirbed in an email to Chip at MHV*

#### Purpose
As part of VA’s Digital Modernization effort the Web Brand Consolidation working group has identified an opportunity to implement a VA-wide GA 360 account. Implementing this account will provide key VA properties (VA.gov, MHV, eBN) access to unsampled data, enhanced custom reports, and the higher granularity in tracking success metrics and user behavior across VA websites.
 
#### Implementation Details
The Web Brand Consolidation working group (supported by DSVA staff) is extending access to the GA 360 license currently used on vets.gov to other VA web properties (starting with MyHealtheVet, eBenefits, and VA.gov). The first step in enabling GA 360 is to add the Google Tag Manager code snippet (JavaScript) globally in the HTML source code. Then the vets.gov contractor (AdHoc) and the GA 360 vendor (Empirical Path) will work with each property to ensure the GTM snippet is installed correctly. Next, these contractors will make necessary customizations to Google Tag Manager, Google Analytics, and Google Analytics 360 Administrative interfaces including adding new or upgrading existing GA properties to GA 360. VA Digital Service (DSVA) staff will oversee the implementation effort and coordinate with VA stakeholders to create custom reports and ensure they get the maximum benefit of the combined dataset.
 
## How does this work?
The plan is to have Nebula (with oversight from Merger) implement the GA scripts on other VA properties. Specifically Mina (Adhoc) is working with Nedie at EP to get this done. Once the code is in place, we can create custom reports for the stakeholders and implement "dashboard" or view for both our baseline and KPIs for measuring improvement.

## Current list of projected baseline measures/KPIs
https://github.com/department-of-veterans-affairs/digitalservice/blob/master/projects/Merger/analytics/metrics_baseline.md
