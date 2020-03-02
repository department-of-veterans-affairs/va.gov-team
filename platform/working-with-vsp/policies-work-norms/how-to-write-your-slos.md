## How to write your SLOs

Status: **DRAFT**

Last updated: **2019 May 13**

## SLO Guidance

### SLOs vs SLAs

**SLOs**: service level **objectives**. These are targets that a service team wants its system to achieve, and will measure and report its performance against those targets. However, there are no consequences if the objective is not met --- these are aspirational but realistic goals that the service team is communicating _should be_ the performance of the measured service.

**SLAs**: service level **agreements**. These are targets that a service team intends its system to hit, with **consequences** if those targets are not hit.

### What kinds of measurements should an SLO include?

SLOs should measure _user-experienced performance_:

- **User-experienced**: this refers to the user of the system and what they perceive.

  For a backend, the user is typically another service making programmatic calls. The perceived performance of the system is typically measured in availability, latency, and error rates.

  For a website/frontend/user application, the metrics might be:

  - Page load time (latency)
  - Page load success rate (availability / error rate)
  - Success rate of user actions, such as logging in, or submitting claims in an application.

- **Performance**: this refers primarily to technical performance metrics, such as availability/error rates, and latency. This _excludes_ categories such as product success metrics that indicate whether a service is understandable to users, easy to navigate or whether a product or feature meets a service objective of the VA.

### How should these metrics be measured?

#### Availability / error rates

Availability, at its simplest, should be a measurement of:

```
|all requests| - |failed requests|
----------------------------------
         |all requests|
```

This ratio is typically reported every pre-determined period of time (such as one day, or one quarter) that can describe the performance of the system with a large enough granularity to see trends over time. _Is the system improving week-to-week as reliability improvements are made? Has our system’s availability worsened this quarter compared to last quarter?_

_Note: this is explicitly **not** time-based. If a service is entirely unavailable for an hour of peak traffic, that will hurt the availability metric much more than an hour unavailable during off-hours. This reflects the fact that SLO measures \_user-experienced performance_.\_

- **all requests**: all requests made to this service in the given time period, as perceived by the user.

  For a backend, this typically corresponds 1:1 with API calls.

  For a frontend/website, this typically corresponds to _page loads_ or _user actions_, as opposed to _HTTP requests_, since a single user-perceived event (i.e. _loading VA.gov_ or _logging in_) consists of many HTTP requests.

- **failed requests**: the subset of all requests that failed to be correctly served.

  For a backend, this typically means requests that either:

  - return a response code indicating service failure (i.e. an HTTP 5xx response class), or
  - return an error in the response data

  For a frontend, this typically means that the user action failed in ways caused by the* service*, not the _user_. For example, when a user fails a login attempt, if that failure is due to:

  - user error (i.e. an invalid password), that is _not_ a failed request
  - anything else, that is a **failed request**

  _Note: for some services, it might be useful for the SLO template to **explicitly** define which response codes are considered "failed"._

#### Latency

Latencies are typically considered as a distribution, often with a long tail tail that spikes upwards in latency. For the purposes of user-perceived reliability, latency should be measured in an SLO against a few chosen percentiles, including at least one percentile to cover "typical cases" and another percentile to cover

For example, if an SLO that declared its latency as:

"90% @ 200ms, 99% @ 1500ms"

This would indicate an objective that 90% of all requests to this service are responded to in under 200ms, and 99% of all requests are responded to in under 1500ms.

For backend services, latency should be measured as end-to-end as is visible from the backend service itself. That is, latency should be measured as the time from when the incoming request was first received to the time when that request has been responded to.

For user actions served by frontend services (such as a login event or form submission), measurement can get closer to the _user-perceived latency_ by measuring the event’s latency from the client browser rather than from the backend service. This adds some variability due to network latency and client network situations, but provides a more realistic view of latency as experienced by users.

For webpage loads, _user-perceived latency_ is more complicated to measure. This can typically be measured a number of ways:

- Time to First Byte (TTFB), which indicates that the HTTP response has been built and is starting to be streamed to the user. This measures server latency more than end-to-end user experience, and can be measured easily from external probers sending requests to the website.
- [First Contentful Paint (FCP)](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint). This measures the time to the first visual content rendered in the browser, which provides the user feedback that the page is successfully loading. This can be measured more easily from client-side using performance tools or analytics libraries.

* [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event), an event triggered when a webpage has fully loaded and is completely ready to interact with. This can be measured more easily from client-side using performance tools or analytics libraries.

#### Reporting

Availability and latency metrics should be aggregated over periods of time that are large enough to see trends useful for strategic decision-making about reliability.

Typically, these time periods should be **daily**, **monthly**, and/or **quarterly**.

Reporting SLOs over these time periods may require changes as to how SLO data is recorded, depending on the system used for aggregating data.

## SLO Template

**Instructions**: Copy this table for use as an SLO, adding rows as needed for each backend service method, page load, or user action that should be measured.

Each row should have an availability target, and one or more latency targets. Include notes describing how availability and latency are measured, particularly for any potential ambiguity.

<table>
  <tr>
   <td>
   </td>
   <td>Availability 
   </td>
   <td>Latency 
   </td>
  </tr>
  <tr>
   <td>[Request being measured: backend method(s) for backend services, page load, user action for frontend services]
   </td>
   <td>[target success rate]
   </td>
   <td>
<ul>

<li>[percentile] @ [target latency]

[If relevant, notes on how this latency is measured]

</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
<ul>

<li>[percentile] @ [target latency]
</li>
</ul>
   </td>
  </tr>
</table>

### Example: backend service

<table>
  <tr>
   <td><strong><code>WidgetsService</code></strong>
   </td>
   <td>Availability 
   </td>
   <td>Latency 
   </td>
  </tr>
  <tr>
   <td><code>CreateWidget

UpdateWidget

DeleteWidget</code>

   </td>
   <td>99.95%
   </td>
   <td>
<ul>

<li>90% @ 300ms

<li>99% @ 1000ms
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>GetWidget</code>
   </td>
   <td>99.99%
   </td>
   <td>
<ul>

<li>90% @ 50ms

<li>99% @ 250ms
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>ListWidgets</code>
   </td>
   <td>99.99%
   </td>
   <td>
<ul>

<li>90% @ 200ms

<li>99% @ 2000ms
</li>
</ul>
   </td>
  </tr>
</table>

### Example: GI Bill Comparison Tool

<table>
  <tr>
   <td>
   </td>
   <td>Availability 
   </td>
   <td>Latency 
   </td>
  </tr>
  <tr>
   <td>GI Bill Comparison page load
   </td>
   <td>99.9%
   </td>
   <td>
<ul>

<li>90% @ 300ms

<li>99% @ 1000ms

(measuring DOMContentLoaded)

</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>School search results returned
   </td>
   <td>99.9%
   </td>
   <td>
<ul>

<li>90% @ 50ms

<li>99% @ 300ms
</li>
</ul>
   </td>
  </tr>
</table>
