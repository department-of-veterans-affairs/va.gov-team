# Find a Form monitoring
Oct 2023

[Public Websites Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/szu-xny-9fu/public-websites-dashboard?refresh_mode=sliding&from_ts=1698247139212&to_ts=1698250739212&live=true)

## Sentry Find Forms errors report
https://sentry.vfs.va.gov/organizations/vsp/discover/results/?id=19&project=4&statsPeriod=24h
What is: 
* Report generated via JS in the Find a Forms product, that reports any failures defined in the code. 

### Causes for each of the errors in the FE code the errors will occur in this order. 

1. `Fetch API for forms data` continue if valid or set `formPdfIsValid` to false.
2. `Fetch API for valid PDF` continue if valid or set `formPdfUrlIsValid` to false.


**Find Forms - Form Detail - onDownloadLinkClick function error** (Any API error from above)
- When a user clicks on the download PDF button and the API call to see if the download URL is valid is not successful

**Find Forms - Form Detail - invalid PDF accessed** (`formPdfIsValid = false and formPdfUrlIsValid = true `)
- When a user accesses an invalid PDF but the URL is valid

**Find Forms - Form Detail - invalid PDF link**  (`formPdfIsValid = true and formPdfUrlIsValid = false `)
- When a user accesses a valid PDF with an invalid URL

### Said backwards: In the FE code: 
* We call vets-api (v0/forms) to see if the form exists. `Fetch API for forms data`:
    * If we get an API response with specific metadata in it: `formPdfIsValid` = true
    * If we get an API response, but not the right metadata: `formPdfIsValid` = false 
    * If we get an API error response, we fail out, and report to Sentry: **Find Forms - Form Detail - onDownloadLinkClick function error** 
      * We don't always know _why_ this happens. 
      * Most seen error in Sentry 
* If we didn't error out (if `formPdfIsValid` = true OR false), we use the data we received in the first call, and call Lighthouse with it, to determine if there's a valid PDF at the URL we recieved from vets-api: `Fetch API for valid PDF` continue if valid or set `formPdfUrlIsValid` to false.
  * If `formPdfIsValid` = true, and Lighthouse returns a URL: `formPdfUrlIsValid`= true: user gets to download the form
  * If `formPdfIsValid` = true, and LH returns an error: `formPdfUrlIsValid`= false: we return  **Find Forms - Form Detail - invalid PDF link** to Sentry
    * This can be when FormsDB server is down, or Forms Mgrs changed a PDF filename, and the CMS hasn't caught up with overnight data sync.
  * If `formPdfIsValid` = false, and `formPdfUrlIsValid` = true: we send **Find Forms - Form Detail - invalid PDF accessed** to Sentry
    - When a user accesses an invalid PDF but the URL is valid. This is weird and we can't find examples of this happening. 

Also noting from [Slack](https://dsva.slack.com/archives/CUB5X5MGF/p1695317588946409?thread_ts=1695237179.624729&cid=CUB5X5MGF): Daniel's understanding is that the /v0/forms endpoint is "public facing" api that requires no API key, and is owned by PW. This is a proxy that passes requests to the /servicies/va_forms/... route which is Lighthouse owned.

### Implications
* **onDownloadLinkClick** function error = failure at `v0/forms` vets-api level, follow up with Platform team
* **invalid PDF link** = failure at Lighthouse level, follow up with Lighthouse Forms team (#va-forms in DSVA slack).

## Alarming
As of Oct 2023, Sentry will not email / post to Slack. So: we've set Datadog up to pull in Sentry data, in order to get alarms, e.g. the 3 monitors below.


## Datadog: Sentry Forms: Find Forms - Form Detail - onDownloadLink Click Error Monitor
https://vagov.ddog-gov.com/monitors/165098
What is: 
* Sentry-based Datadog report. We pull in Sentry data, every 5 minutes (minimum possible)
* Warns / fails if we receive errors over a threshold

## Datadog: Sentry Forms: Find Forms - Form Detail - invalid PDF link Error Monitor
https://vagov.ddog-gov.com/monitors/167982
What is: 
* Sentry-based Datadog report. We pull in Sentry data, every 5 minutes (minimum possible)
* Warns / fails if we receive errors over a threshold

## Datadog: Sentry Forms: Find Forms - Form Detail - invalid PDF accessed Error Monitor
https://vagov.ddog-gov.com/monitors/167983
What is: 
* Sentry-based Datadog report. We pull in Sentry data, every 5 minutes (minimum possible)
* Warns / fails if we receive errors over a threshold



## Datadog: Forms API error test
https://vagov.ddog-gov.com/monitors/160197
What is:
* Synthetic test
* Sends GET to https://api.va.gov/v0/forms
* Reports 200, 429, or 502 responses

## Datadog: VA Forms index: rate limit
https://vagov.ddog-gov.com/monitors/160407
What is:
* Metric monitor
* Warns / errors when we approach rate limit for Lighthouse Forms API

Mitigation if warn/error: 
* request API limit increase: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/troubleshooting.md#request-api-limit-increase
* Notify Platform team via Plat support request, to investigate any suspected DOS activity, if spike is that high. (?) verify this plan

## Datadog: [Synthetics] GET vets-api /v0/forms (prod)
https://vagov.ddog-gov.com/monitors/91169
What is:
* Synthetic test
* Sends GET to https://api.va.gov/v0/forms
* Successful if we get a 200 response
