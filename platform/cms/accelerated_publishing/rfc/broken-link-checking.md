# RFC: Broken Link Checking for VA.gov content

- Date: 2023-12-13
- Related Issue: [Accelerated Publishing broken link checking (epic)](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14454)
- Status: Draft

## High Level Summary
The current system Content Build uses to check links will no longer work once we begin transitioning to Next Build. This RFC proposes replacing that checker with a scan that runs from outside the VA Network and reports broken links on a regular basis (hourly or more frequently).

**Advantages**
- The new report would include external and internal links together
- For production, the scan would run from outside the VA internal network, and so it would more closely reflect what the Veteran experiences than the current check

**Challenges**
- Broken link scans will no longer take place at build time, which means that broken links may be present on VA.gov for slightly longer before detected


## Background

_Explain the current state of the feature._

We currently have two link checking systems in place around CMS and Content Build: a Content Build broken link check plugin and a Drupal module [Node Link Report](#nlb).

### Content Build broken link checks

Content Build runs a [broken link check](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/plugins/modify-dom/check-broken-links/index.js) for every build via a custom plugin. This works as follows:

1. Content Build has knowledge of every page & file it is handling in the form of a list of paths
2. Content Build parses each HTML page, finds any links it thinks are internal to  pages, images, or other files, and checks each of those links to see if it is in the list from
3. If it does not find that item in the list from step 1, it is a broken link.

## Motivation

_Why do we want to change the current implementation? What problem(s) does the change solve?_

### Issues with Content Build broken link checking

The current broken link check plugin for Content Build has a number of limitations:

1. This process cannot check broken links that are external to the va.gov domain, because it inherently only has knowledge of what Content Build is currently building.
2. The process relies of having _total_ knowledge of all files. It cannot run broken links checks on a single page, for example, because if it is only building a single page, it has no way to know whether the other destinations are valid.
3. Because of the above point, it is also not possible to use Content Build link check if some portion of the total site pages are being built by another system.
4. Inserting this at build time adds time to deploy. It is difficult to determine exactly how long the current broken link check process takes, but it is in the range of 2-3 minutes.

### Reasons motivating the change

As part of the [Accelerated Publishing Initative](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6577), we are creating a new build application for VA.gov content ([Next Build](https://github.com/department-of-veterans-affairs/next-build)). The move to the new system poses some challenges for the current broken link checking system:

1. Moving from Content Build to Next Build will happen incrementally. There will be a period during which both systems will be responsible for portions of CMS content. This presents problems for points 2. and 3. above. Content Build _requires_ building the entire set of CMS pages in order to do its link checks; but, Content Build will no longer have the entire set of CMS pages once we start shifting some content to Next Build.
2. The speed gains of Next Build / Accelerated Publishing will come from "incremental publishing". Put simply, Content Build operates by publishing every single CMS page every single publishing run. Most of this publishing is not useful, because nothing has changed in the content. With Next Build, we will transition to a paradigm where we only build pages that have changes. This should drastically reduce the amount of pages that a single publishing run requires. However this also means these pages will be built in small batches. This also presents problems for points 2. and 3. above.
3. Finally, link checking can be a time-consuming process. With our stated goal of increasing publishing speed and being able to expand the amount of content the CMS can maintain, we want to avoid adding time to publishing. Rather than checking links at build time and having it add to that build time, it would be good to test for broken links independently.

### Problems to solve

In summary, the problems that the current system has are:

- Content Build will no longer have complete knowledge of all pages, and so any pages that have migrated to Next Build will be flagged as broken links by Content Build
- We will still have to test for broken links for the site as a whole.
- Running full broken links checks at build time is too slow for an accelerated publishing scenario.

## Design

_Explain the proposed changes in enough detail so that a team member with working knowledge
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

### Link Checking Features

Our system must do the following

- It must operate on the entirety of va.gov content, regardless of what system the page was built by.
- It must not create an impediment to the build process.
- It must report the broken links into a central location that can respond to the issues.

Problems we are not looking to solve at this time:

- This proposal does not aim to change how broken links are reported. Currently broken links are reported into a Slack channel for triage by User Support, and we would continue to do that. Updating the notifications is a worthy project, but outside of scope here.

### Crawler Proposal

A straight-forward way would be to create a site crawler that checks va.gov pages, follows any links found, and reports any that return a non-200/300 response. This would operate as a CI process on VA.gov's published content.

All content published by Content Build and Next Build is listed in sitemap.xml files. These URLs can be read by a site crawler and the contents of the URL scanned.

Advantages:

- This would be relatively simple to create, with some caveats (for example, Node Link Report gives many false broken link alerts due to remote servings giving bad responses which [necessitates a long list of ignored domains](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/config/sync/node_link_report.settings.yml#L7-L98); we may run into similar problems)
- May be able to be largely addressed by of-the-shelf software. or entirely. [The Node.js ecosystem has several broken link checking packages](https://www.npmjs.com/search?q=broken%20link), for example.
- Both internal and external links would be collected together into one report.

Challenges:

- Content would no longer be checked as it is built, which is an expectation VA.gov has due to the current architecture.
- Determining how frequently to scan will require some experimentation.
- This sort of checker would create additional traffic to the site. This should not present a problem to our current S3-as-web server architecture, but we should validate that the reverse proxy will not have trouble with the additional traffic, and we should ensure this traffic is ignored by analytics systems.

### Build time Proposal

We could check links on pages as they are built. However, these checks would need to check against the live production site, which requires making a request to a URL and verifying the response. This is _significantly_ slower than the current Content Build system.

It is only recommended that we do this when we move to an incremental publishing scenario, and also that the link checks happen independently of deployment. In other words, link checks would be triggered by publishing of pages, but they would happen after deployment, rather than before.

Advantages:

- Errors would be caught at build time and rectified sooner.

Challenges:

- Publishing new groups of pages that link to each other could present challenges, as they are not on production yet and cannot be checked there.
- Broken link reports would come in quick bursts, which could present challenges to CMS User Support, who are currently responsible for triaging broken link issues.
- This would not capture broken links due to pages that are *removed*; those require a full site scan.

### Combined proposal

These two proposals could both be put into use and compliment each other, each used appropriately.

For example, the situation which presents the greatest liklihood for larger scale broken link issues are code changes. Therefore, any deployment of code changes to Next Build should have a full broken link scan as part their staging process and after deploy, one that checks both Next Build and Content Build content.

Build-time checking is more appropriate for small content changes througout the day. We would still recommend a full scan nightly, to catch anything that may have not been caught by small-scale scans.

## Risks

_What are the risks of the proposed changes?_

Some of these risks have been discussed above.

1. The current system (build everything and check everything) is inherently a problem for speedy publishing, but it _does_ check every internal link every publishing run. What we are proposing would actually capture more broken links than the current system, but there is potential for a broken link to be live on VA.gov for longer before it is reported.
2. The current system has existed in its current form for some time and over time has reached something like stability. We would be building a new system, and inevitably there will be issues that will need to be resolved as the new system comes into use.
3. Depending on architecture choices, we risk reintroducing slowdown into the publishing process. We want to avoid this as much as possible while ensuring the integrity of linked content on VA.gov.

## Alternatives

_What other alternatives solutions were considered, why weren't they chosen?_


### Keeping the old system

We considered an architecture for Content Build and Next Build where the two systems would be more tightly coupled. In particular, Next Build content would be included as part of the 'files' that Content Build manages. This would effectively allow the Content Build broken link system to continue, because it would have access to all files at once.

We abandoned this idea because it would make Next Build dependent on Content Build, which means we would see no speed gains from Next Build. It is also generally a good idea to ensure that systems are not interdependent on each other, as they become harder to disentangle later. Our goal ultimately is to retire Content Build, and so we do not want to depend on its systems for this critical functionality.

### <a name="nlb"></a>What about Node Link Report?

[Node Link Report](https://www.drupal.org/project/node_link_report) is a helpful Drupal module that checks in-page content and provides notifications if it contains broken links. It checks internal and external links, with some limitations.

There is no problem with Node Link Report continuing to operate as it is now. This RFC does not propose any changes to the VA.gov CMS's use of Node Link Report.
