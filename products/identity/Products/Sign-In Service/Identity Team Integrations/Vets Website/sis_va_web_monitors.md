# SiS VA Web Monitoring

## [SiS VA Web Monitoring Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kdx-9e6-5hg/identity-va-sis-web-log-queries?fromUser=false&refresh_mode=sliding&live=true)

## SiS VA Web Alerts

[Identity - SiS Web CSP Success Rate Monitor](https://vagov.ddog-gov.com/monitors/426315) - triggers per CSP on <= 30% callback success

### SiS Web Error Spike Monitors

Anomaly monitors for spikes in StatsD error rates over the past 15 minutes. Only `/authorize` & `/callback` contain the `client_id` necessary to isolate to web.

- [Identity - SiS Web Authorize Error Spike Monitor](https://vagov.ddog-gov.com/monitors/426316)
- [Identity - SiS Web Callback Error Spike Monitor](https://vagov.ddog-gov.com/monitors/431929)

## Prod - Auth Counts && Success Rates

### General Data and CSP Tracking

Web Prod CSP Counts - tracks successful authentications per CSP over time.
  - includes month-before comparison

Web Prod CSP Return Rates - tracks authentication CSP return rate (error & successful) over time.
  - includes month-before comparison

Web Prod CSP Success Rates - tracks per CSP authentication success rate over time.
  - includes month-before comparison

SiS Web Authentication Time - average time to complete successful web SiS authentication.

SiS Web Unique User Auth/Refresh - counts total number of unique users by ICN that have interacted with SiS web via authenticating a new session and/or refreshing an existing session.

Web CSP Stats - Table tracking authentication attempts, callback responses, and their success rate per CSP.

### Device & Browser Tracking

Web Prod Browser Success Rates - tracks web client auth success % by browser type (Safari, Mobile Safari, Chrome, etc.)

Web Authentication Attempts - bar graph widget tracking web authentication attempts.

SiS Web Auth Attempts - Browser Types - bar graph charting authentication attempts by browser type.

SiS Web Auth Attempts - OS Types - bar graph charting authentication attempts by OS type.

SiS Web Auth/Refresh By Country - map showing count of SiS web callback & refresh calls by country

## Prod - Errors

SiS Web - Error Rates - tracks error rates of different SiS routes (authorize, callback, token, etc.) for web.

Callback Error Rates by Browser - error rate for `/callback` calls for vaweb clients, parsed by most common browsers

- Safari
- Mobile Safari
- Chrome
- Chrome Mobile
- Edge
- Firefox
- Google
- Samsung Internet

SiS Web Route errors - lists the count of errors by the error message. Widgets for
  - callback
  - token
  - refresh

SiS Web Errors by IP Provider - bar graph tallying SiS controller errors by IP provider (Comcast, Verizon, etc.)

## Web SiS - Staging

Web Staging CSP Counts - tracks successful authentications per CSP over time.
  - includes month-before comparison

Web Staging CSP Return Rates - tracks authentication CSP return rate (error & successful) over time.
  - includes month-before comparison

Web Staging Browser Success Rates - tracks authentication success % by browser, parsed by most common browsers

- Safari
- Mobile Safari
- Chrome
- Chrome Mobile
- Edge
- Firefox
- Google
- Samsung Internet
