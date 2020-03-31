#### Vets.gov Resource: This is an archived resource that was transferred from the Vets.gov repo.

# Architecture Overview

Vets.gov is using fairly standard Google Analytics (GA) implementation. We take advantage of Google Tag Manager (GTM) to simplify administration and deployment of instrumentation. We supplement the default events with a set of custom events fired from our JavaScript.

This document provides an architectural overview of how those pieces fit together for vets.gov's own account. It doesn't consider our unique configuration but provides some background on what the pieces are we use and how they relate. In particular, this overview tries to call out situations where the GA architecture may impact the data and reporting that we get.

This will ignore the DAP snippet from an architectural perspective. We simply include their snippet in our header and all further work is done by the DAP on our behalf.

## Client-side

### Summary

- GTM: Loads configuration that determines which triggers get reported as what tags to which GA properties
- GA snippet: Provides "out of the box" reporting on a standard set of triggers
- Vets.gov JavaScript: Provides custom events as additional, available triggers

### Initial setup in the browser
Vets.gov's static site builder (Metalsmith) includes a footer.html in all pages it builds that in turn loads a small JS file that includes the Google Tag Manager (GTM) snippet. All content pages and Single Page Apps built from the `vets-website` repository get the same snippet and the same Google Tag Manager container included.

When the user browser loads that snippet, it does two things:

1) Downloads our current configuration from GTM
2) Downloads the actual Google Analytics JavaScript

The GTM code then applies the configuration to GA. Any published changes to the GTM container will be downloaded immediately by new visitors. This lets us decouple analytics configuration changes from code deploys.

### Responding to user actions on a page
Once the configuration is loaded, GA fires off a standard set of initial events, including a page load. In GTM these are referred to as triggers. Triggers include events (both the standard GA ones and any custom ones we define) as well as other things that occur in the browser (such as third-party software integrations). For simplicity, this document will use triggers generically to mean `thing that happened in the browser` and event to mean `a custom event we put into our JavaScript`.

We use GTM to turn those triggers into "tags", which are then reported to different GA properties for reporting. Vets.gov sends all its tags to the main vets.gov property but also some other properties (e.g., for GIBCT we report directly to another GA account for use by VA stakeholders). In this way, GTM let's us turn on or off reporting of triggers at will.

To support our React-based single page apps, we have turned on reporting of History Change API calls (the trigger) as page views (the tag). This means that we treat the routes in the React code as if they were "real" pages from an analytics perspective. If we did not, then as "single page" apps we would only report the initial page landing. The DAP program does not treat History Changes as Page views, there our analytics account will not match the DAP reporting and the discrepancy is likely to be quite large.

We also push our own custom events from our JavaScript to report on user actions, downloads, etc. The code snippets looks like `window.dataLayer.push({ event: 'vets-custom-event' })`. That code essentially creates a new trigger in GTM that is available for reporting. **If GTM is not setup to report that trigger as a tag to our GA property, then nothing will show up in our GA reports.** To restate that for emphasis, our JavaScript makes the event available as a trigger, but only GTM can turn that into a tag that is reported. It is essential that our sprint teams coordinate with the analytics admins before production deployment of any new custom events so that they can be added to GTM for reporting ahead of time.

### Leaving a page
When the user leaves a page, GTM will process another set of standard events. However those events and any others batched for transmission may or may not ever get sent. They all live in JavaScript, and browsers stop executing the JavaScript on a page when the user navigates away from it. In most cases, things will execute completely and be reported properly during the teardown phase of the browser. Additionally, modern browsers support a function to enable things to be reported even after the page is unloaded to handle just these sort of cases.

Regardless of those facts, it is important to realize that any events that track exits of pages (e.g., our reporting of clicks on external links or file downloads) but not loads of new vets.gov pages will systematically under-report by an amount that we cannot know for sure from GA alone. The assumption is that the number of missed events is small and likely to decrease with time (as users move to more modern browsers). If there is a server-side action (e.g., a file download) that is being tracked (i.e., in Prometheus) you may see that difference manifest itself especially if the sample size is large.

## Server-side

Once those reported tags hit Google's servers, it does a variety of processing on them to turn them into the reports you see in the GA web interface. GA uses something equivalent to the "Lambda Architecture" for processing in the incoming data.

### Initial intake
At a conceptual level, GA stores a set of `(property_id, time_stamp, user_id, event_id, {key: value, ...})` tuples as rows in a giant database. The `{key: value, ...}` section can be thought of as an arbitrary set of metadata attached to it.

GA allows for filters at the time of initial intake. Those filters allow you to discard data (e.g., we drop all data reported from our non-production environment), rewrite fields, attach additional metadata, etc. The important thing to note is that anything done by those filters alters the data irrevocably because only the results of the filters (if anything ) version gets recorded in the database. These should be used with caution and adding a metadata field (often a custom dimension) is the safer route if possible.

### Realtime view
GA provides a real-time view of the past 30 minutes. This rolling window is essentially a stream processing of the incoming events. Because GTM changes take effect essentially immediately, the real-time view is useful for validating changes made to the configuration.

However, the real-time view is limited and not authoritative. The SLA for data ingestion is 8 hours and events may be buffered on the client side (e.g., loss of network connectivity) causing the reporting in the real-time view to be skewed.

### The main view
GA runs batch processes on the data to enrich it (e.g., geolocation of IP addresses), aggregate it, etc. The combined effect of the ingestion delays and batch processing mean that reports run on that day's data is almost never accurate. Even the prior day's data may still change slightly as data is processed.

More importantly that the ingestion delays, when calculating reports GA will sample data to reduce the costs of processing and decrease the time required to deliver results. This will cause the reports to change as the sampling processing pulls a different subset of data each time. Conceptually, instead of scanning all the tuples stored in its database, GA may take 10% of the data and then multiply the result by 10 to get the report at 1/10th the cost in 1/10th the time. The sampling causes the greatest impact on relatively rare data (e.g., visits to infrequently visited pages) because the sample pulled are much less likely to be representative for those rarer events.

Fortunately, Vets.gov is using the paid tier, which means we get unsampled reporting for all the default reports provided by GA. However, if you create a custom report or filter a standard report, then GA will again sample that data, which may cause inconsistencies from one run to another.
