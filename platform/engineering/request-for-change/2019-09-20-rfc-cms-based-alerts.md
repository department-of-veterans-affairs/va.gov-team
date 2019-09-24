# RFC: Manage alerts from the CMS

Date: 2019-09-20

## Background

### Alerts, in general
Veterans utilize VA.gov to learn about changes in operating status, event-based information, issues with tools and services on VA.gov, and other atypical interactions VA business lines. This includes everything from planned and unplanned changes in facility operating hours to form validation warnings.

VA.gov users view this information as "alerts", which are presented in various ways across the site, including page-width banners, inline alert boxes, and dedicated operating status pages. There are at least four different ways alerts become available to the user on VA.gov:

1. **Existing BRD process**. Included in page templates or React components that are delivered via the automated build, release, deploy (BRD) process (e.g. data validation alerts in a benefits application); [1]
1. **Teamsite**. Published on legacy VA.gov pages via the Teamsite CMS (e.g. facility operating statuses);
1. **Sourced from `va.gov-content` on load**. Rendered at page load with data pulled from the `va.gov-content` GitHub repository (e.g. the page-width [emergency banner on the homepage](https://github.com/department-of-veterans-affairs/vets-website/blob/225dcfc5cbfae4c28405e98300b66c8de734c16f/src/applications/static-pages/renderHomepageBanner.js)); and
1. **Sourced from Vets API on load**. Rendered at page load with data pulled from Vets API(e.g. automated or scheduled [downtime alerts](https://github.com/department-of-veterans-affairs/vets-website/pull/10446/files#diff-85b5e6f872d2b0f86442f96d50218eab) for various VA backends)).

With the exception of the Teamsite option for legacy pages, all of these implementations require an engineer to make a code change to update the content, behavior, or visibility of an alert. [2] Of course, Teamsite is not an option for updating alerts on Web Brand Consolidated (WBC) VA.gov pages and, as more content migrates to WBC VA.gov, Teamsite will become less relevant.

### Specific case
DSVA is working with the Pittsburgh VA Medical Center (PVAMC) to redesign the PVAMC facility pages on VA.gov. The redesign is being implemented in the Drupal-based VA.gov content management system (CMS). Once complete, PVAMC content managers will be able to utilize WYSIWYG tooling in the VA.gov CMS to make updates to the PVAMC facility pages, without engineer intervention. [3]

A common and high priority PVAMC content management task is to update operating status pages and banners to inform users of changes in facility hours or provide emergency response information. Because this delivery of this information to users is time sensitive, content managers must be able publish updates in ten minutes or less.

In addition to PVAMC, DSVA will be migrating the remaining ~170 VA Medical Centers' facility pages to the WBC VA.gov and training their respective content managers to use the VA.gov CMS. This significantly increases the likelihood that many similarly structured VA.gov pages derived from a shared content models and templates will be concurrently updated by disparate, isolated content managers across many VAMC's. This is particularly true in the case of regional or national emergencies.

--

[1] *These are not super relevant for this RFC, but worth noting because of sharing similar/same look and feel which may cause a Veteran to have similar expectations about how they might behave.*

[2] *Technically, a non-engineer comfortable with git and markdown or YAML could update the GitHub-based homepage banner. But those folks are few and far between in the VA content manager ranks.*


[3] *PVAMC's legacy VA.gov facility pages are managed via the Teamsite CMS.*

--

## Motivation
To satisfy this user story:

> *As a VA.gov content manager, I need to reliably publish content updates to VA.gov in less than ten minutes without relying on an engineer in order to deliver time-sensitive information to Veterans.*

This functionality does not currently exist. Each of the alert implementations discussed above has significant limitations in attempting to satisfy the story:

1. **Existing BRD process**. This takes more than ten minutes to run and rebuilds the entire site. Feels very weighty for what may regularly be a small update on a single page.
1. **Teamsite**. This is going away once legacy VA.gov pages are migrated to WBC VA.gov or retired.
1. **Sourced from `va.gov-content` on load**. Requires content managers to be comfortable with GitHub and markdown or YAML.
1. **Sourced from Vets API on load.** No logical connection between the CMS and Vets API exists.

## Possible design approaches

For the first two possibilities, assume that a change to a specific area of the content model causes the CMS to tell Jenkins kick off a specific pipeline with certain parameters. For the third, Jenkins is out of the loop.

### Single page BRD

Jenkins makes a GraphQL query the CMS content API based on given parameters, pulls _only_ the relevant content and flags, builds _only_ the corresponding templates, runs _only_ the relevant tests and checks, and uploads the HTML asset to the existing S3 bucket, overwriting the existing asset. As soon as upload is complete, the page begins being served to users. Alerts are rendered along with the rest of the static content on the page.

|Pros|Cons|
|----|----|
|Familiar architecture and process|Somewhat weighty process for minor updates|
|Can apply existing tests (e.g. link checker, 508)|Inherently slower b/c of tests and checks|
|No additional client requests needed after page download|
|Leverages benefits of GraphQL|

### Sourced from S3 bucket on load

Jenkins makes a GraphQL query to the CMS content API based on given parameters, pulls _only_ the relevant content and flags, builds one or more JSON, YAML, or other type of structured data file, and uploads to a dedicated S3 bucket, possibly overwriting the existing asset. On page load, a React component makes an asynchronous call to the S3 bucket, parses the payload for any relevant alert information, and renders the result (if applicable).

|Pros|Cons|
|----|----|
|Lightweight and fast|Need to track another kind of asset outside of source control|
|Leverages benefits of GraphQL|Adds more architectural and process complexity website management|
| |Requires at least one more client request after page download|

### Sourced from CMS content API on load

A React component makes an asynchronous call with page-specific parameters to api.va.gov (or some other middleware that shares network or environment access with the CMS content API) which, in turn, makes a GraphQL call to the CMS content API for _only_ the relevant content and flags. The payload is returned to the React component which renders the result (if applicable).

|Pros|Cons|
|----|----|
|Supports decoupled approach|Big departure from current architecture and process|
|Removes website/CMS interdependency if extended to all CMS data|Requires at least one more client request after page download
|Allows generic content to be easily consumed by other applications|Creates new threat vector for the CMS|
|Doesn't require tracking of additional asset|
|Leverages benefits of GraphQL||
