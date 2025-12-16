# Adding a Maintenance Window

## This document applies to Forms 21P-601 and 21P-0537 

This document broadly outlines the process for creating a maintenance window for an individual BIO-HEART team form.

## What is a maintenance window?

A maintenance window is a designated time span added to a service in Pager Duty that tells applications on VA.gov whether or not a particular dependency (service) is available.

## How are maintenance windows used in BIO HEART forms?

We use maintenance windows to block access to the BIO HEART team's forms on VA.gov. This is useful for when we are experiencing an issue in production and we need to prevent users from encountering that issue.

## How to set a maintenance window

1. Go to https://ecc.pagerduty.com/service-directory (must be on VA network)
2. Find the service in the Service Directory that needs maintenance (e.g., either [21P-601](https://ecc.pagerduty.com/service-directory/P4KLGTI) or [21P-0537](https://ecc.pagerduty.com/service-directory/PLXK55G))
3. In the service, click `Add a Maintenance Window`
4. Specify the time for the window
5. The rest will be handled automatically, with an alert popup beginning to show on the app 1 hour before the window is set to begin.

## Screenshots

| Warning before window| Message during window|
|-|-|
|<img width="1239" height="1160" alt="Image" src="https://github.com/user-attachments/assets/428a6787-4146-4999-9514-17665c276bc7" />|<img width="897" height="735" alt="Image" src="https://github.com/user-attachments/assets/de0c95a3-3461-412e-9eb2-d1fc531b45c2" />|
