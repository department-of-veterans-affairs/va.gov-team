# Find a Form monitoring
Oct 2023

## TOC: 
* [Public Websites Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/szu-xny-9fu/public-websites-dashboard?refresh_mode=sliding&from_ts=1698247139212&to_ts=1698250739212&live=true)
* [Sentry monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/monitoring.md#sentry-find-forms-errors-report)
* [Datadog monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/monitoring.md#datadog)
* [Flagged Forms queues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/monitoring.md#flagged-forms)


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

## Datadog
As of Oct 2023, Sentry will not email / post to Slack. So: we've set Datadog up to pull in Sentry data, in order to get alarms, e.g. the 3 monitors below.

### Datadog: VA.gov find a form success rate below threshold
https://vagov.ddog-gov.com/monitors/169456
What is: 
* Monitor that checks for 200 (success) responses from the `v0/forms` API endpoint
* Alarms if success rates fall below 97%

To triage: 
* Scroll down to Status & History. Click-drag and highlight the red or orange warn/error timeframe, to zoom/highlight it
* This will modify the date/timestamp in the "UTC" field right above the toolbar. Click in that field to highlight / copy the timeframe for use on other screens. 
* Go to https://vagov.ddog-gov.com/apm/home?env=eks-prod
  * Click through to vets-api, paste the timeframe - look for any big picture errors that might indicate vets-api latency is the problem
  * Go back to APM Home, filter / click through to [Lighthouse Forms](https://vagov.ddog-gov.com/apm/services/lighthouse-forms/operations/rack.request/resources?env=eks-prod&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21f%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%29%2Cversion%3A%211%29&view=spans&start=1704215278963&end=1704218878963&paused=false), paste the timeframe
* Check for error states / API response errors / logs


### Datadog: Sentry Forms: Find Forms - Form Detail - onDownloadLink Click Error Monitor
https://vagov.ddog-gov.com/monitors/165098
What is: 
* Sentry-based Datadog report. We pull in Sentry data, every 5 minutes (minimum possible)
* Warns / fails if we receive errors over a threshold

### Datadog: Sentry Forms: Find Forms - Form Detail - invalid PDF link Error Monitor
https://vagov.ddog-gov.com/monitors/167982
What is: 
* Sentry-based Datadog report. We pull in Sentry data, every 5 minutes (minimum possible)
* Warns / fails if we receive errors over a threshold

### Datadog: Sentry Forms: Find Forms - Form Detail - invalid PDF accessed Error Monitor
https://vagov.ddog-gov.com/monitors/167983
What is: 
* Sentry-based Datadog report. We pull in Sentry data, every 5 minutes (minimum possible)
* Warns / fails if we receive errors over a threshold



### Datadog: Forms API error test
https://vagov.ddog-gov.com/monitors/160197
What is:
* Synthetic test
* Sends GET to https://api.va.gov/v0/forms
* Reports 200, 429, or 502 responses

### Datadog: VA Forms index: rate limit
https://vagov.ddog-gov.com/monitors/160407
What is:
* Metric monitor
* Warns / errors when we approach rate limit for Lighthouse Forms API

Mitigation if warn/error: 
* request API limit increase: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/troubleshooting.md#request-api-limit-increase
* Notify Platform team via Plat support request, to investigate any suspected DOS activity, if spike is that high. (?) verify this plan

### Datadog: [Synthetics] GET vets-api /v0/forms (prod)
https://vagov.ddog-gov.com/monitors/91169
What is:
* Synthetic test
* Sends GET to https://api.va.gov/v0/forms
* Successful if we get a 200 response

## Flagged Forms
Manual monitoring process to review forms that are flagged during migration from Forms DB (> Lighthouse) into Drupal. We care about 3 classes of changes: 

### 1. **Changed Title**

https://prod.cms.va.gov/admin/content/va-forms/changed-title

**Why**: Forms may be referred to by their Title in copy around VA.gov. If a form title changes, the Sitewide Content team may need to adjust site copy for those references.

**Mitigation:** Confirm if Form Title (node title) in Drupal is updated as well. Flag for the Content team. If they have no concerns, the flag can be removed.

### 2. **Changed filename**

https://prod.cms.va.gov/admin/content/va-forms/changed-filename

**Why:** The PDF filename in the Forms DB is used to generate a URL for that PDF on VA.gov. If the filename changes, the old URL will 404. That's bad if anyone (Veterans, Veteran support organizations, etc) have bookmarked a form link. It also affects SEO for that form.

**Mitigation:** Reach out to the [Forms Manager](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form#forms-managers) for the listed Administration (cc the Public Websites VA PO), and ask if the Forms Mgr is able to revert the filename.
* If so: wait til the revert appears in Drupal, confirm the old PDF URL works on VA.gov, and remove the Changed Filename flag.
* If not: Ask VA PO whether we should redirect the old PDF URL to the new URL. That's a VA judgment call.

### 3. **New/Deleted forms**

https://prod.cms.va.gov/admin/content/va-forms/new-deleted

**Why:** To maintain good SEO, forms should always live at the same URL. The "Row ID" field in the Forms DB ties to the Row ID field in Drupal. In the past, sometimes a Forms Mgr has archived a form, and recreated it by the same name / same metadata, with a new Row ID. This generates a VA.gov url like va.gov/find-forms/form-name-0.  That `-0` happens when 2 pieces of content have identical names in Drupal, and is bad for SEO.

**Mitigation:** Reach out to the [Forms Manager](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form#forms-managers) for the listed Administration (cc the Public Websites VA PO), and ask them to revert to the old form. (Archive the new/recreated form; unarchive the previous version of the form at the original row ID.)
* If a New form appears that isn't a dupe of an archived form: leave the flag. The Sitewide Content team also uses this queue to review which new forms might warrant having their own published page.
* If a Deleted form isn't duplicated by a new form: remove the Deleted flag. 

