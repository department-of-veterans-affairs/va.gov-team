# Profile Service Maintenance and Outage Procedures FE Docs

- [Purpose](#purpose)
- [Overview](#overview)
- [Process](#process)


# Purpose
This document provides an overview of the front-end structures methodologies for handling a service outage or maintenance period.

# Overview
Systems go down, and services need to be taken offline to do maintenance periodically. When these things occur, the Profile and Authenticated Experience team needs to react appropriately by pulling down affected features, or even the whole profile if necessary. User's should be able to easily understand that a feature is down and are given other information around the outage when possible.

Components and code related to providing outage information.

[DowntimeBanner.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/alerts/DowntimeBanner.jsx) - allows a section to be shown as down with an end time for the outage shown

[TemporaryOutage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/direct-deposit/alerts/TemporaryOutage.jsx) - this was a temporary outage alert for specifically the direct deposit, but for future outages could be moved to a more universal folder for usage in other parts of the application.

# Process

There are two methods for showing outage alerts or guarding a section of the profile due to maintenance.

- Using the [Downtime Notifications - Tool](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/downtime-notifications)
	- These outages or maintenance windows are driven by PagerDuty and they have [documentation around managing those windows](https://support.pagerduty.com/docs/maintenance-windows)
	- If this method is used it will take down all of profile, which may not be what is desired.

- Using a Feature Toggle in combination with corresponding React Component / Logic.
	- This requires more manual work of implementing and setting the feature toggle, but it can allow more granular control over what sections are taken offline.
		- The general workflow would be: create toggle on FE and BE, hook into the feature toggle and conditionally render the alert instead of the particular section, and then after the outage, remove the toggle and related code if needed.
	- This method was used with the TemporaryOutage component and hooked into a feature toggle named `profile_hide_direct_deposit_comp_and_pen` but it could be modified on a case by case basis via PR to be used in another section of the profile.
	- [Sample implementation in direct deposit](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/direct-deposit/DirectDeposit.jsx) 


# Future considerations

- We would like to make the TemporaryOutage a bit more flexible and reusable for different outage scenarios. This might look like passing children to the outage component, mapping it to a set of feature toggles, or just generalizing its layout for reuse.
- Making PagerDuty more granular?
