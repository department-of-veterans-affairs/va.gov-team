# SiS VA Mobile Monitoring

## [SiS VA Mobile Monitoring Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kdx-9e6-5hg?fromUser=false&refresh_mode=sliding&live=true)

## SiS VA Mobile Alerts

[Identity - SiS Mobile CSP Success Rate Monitor](https://vagov.ddog-gov.com/monitors/392531) - triggers per CSP on <= 30% callback success

- DSLogon permanently muted

### SiS Mobile Error Spike Monitors

Anomaly monitors for spikes in StatsD error rates over the past 15 minutes. Only `/authorize` & `/callback` contain the `client_id` necessary to isolate to Mobile.

- [Identity - SiS Mobile Authorize Error Spike Monitor](https://vagov.ddog-gov.com/monitors/395241)
- [Identity - SiS Mobile Callback Error Spike Monitor](https://vagov.ddog-gov.com/monitors/431895)

## Prod - Auth Counts && Success Rates

### General Data and CSP Tracking

Mobile Prod CSP Counts - tracks successful authentications per CSP over time.
  - includes month-before comparison

Mobile Prod CSP Return Rates - tracks authentication CSP return rate (error & successful) over time.
  - includes month-before comparison

Mobile Prod CSP Success Rates - tracks per CSP authentication success rate over time.
  - includes month-before comparison

SiS Mobile Authentication Time - average time to complete successful mobile SiS authentication.

SiS Mobile Unique User Auth/Refresh - counts total number of unique users by ICN that have interacted with SiS Mobile via authenticating a new session and/or refreshing an existing session.

Mobile Prod CSP Stats - Table tracking authentication attempts, callback responses, and their success rate per CSP.

### Device & Browser Tracking

Mobile Device Stats - Table tracking authentication, callback, & refresh counts, using auth/callback to calculate success %.

Mobile Authentication Attempts - two bar graph widgets tracking iOS/Android authentication attempts.

SiS Mobile Auth Attempts - Browser Types - bar graph charting authentication attempts by browser type.

SiS Mobile Auth Attempts - OS Types - bar graph charting authentication attempts by OS type.

SiS Mobile Auth/Refresh By Country - map showing count of SiS callback & refresh calls by country

## Prod - Errors

SiS Mobile - Error Rates - tracks error rates of different SiS routes (authorize, callback, token, etc.) for VAMobile.

Mobile Device Errors - raw error count & return % by iOS/Android, overall Mobile error & not return %s.

SiS Mobile Route errors - lists the count of errors by the error message. Widgets for
  - callback
  - mobile
  - refresh

SiS Android/iOS Refresh error count widgets

SiS Mobile Errors by IP Provider - bar graph tallying SiS controller errors by IP provider (Comcast, Verizon, etc.)

## Mobile SiS - Staging

Mobile Staging Stats (Logs) - Android/iOS auth attempt, refresh success, and authentication success % table.

SiS iOS/Android auth attempt count widgets.