## Findings

### Background

This spike was broadened to more generally investigate the slow page load times [reported by Google Analytics](https://dsva.slack.com/archives/C022AC2STBM/p1657219769104509?thread_ts=1657202157.985829&cid=C022AC2STBM). There are several common causes of poor web application performance:

- network speed and/or latency
- application bundle size (how much code the browser has to download)
- application complexity (how much work the code makes the browser do)
- API request latency (how long it takes the browser to receive a response when calling vets-api/CHIP endpoints)

### Network speed & latency

#### Findings

VA.gov applications static assets (html, javascript and css) are served with [Amazon S3 website hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). 

#### Recommendations

S3 website hosting is highly performant and there are limited avenues for improvement:

- Use a CDN to cache assets at the edge, geographically closer to users
  - Platform has [not currently prioritized CDN implementation](https://dsva.slack.com/archives/C01SR56755H/p1657292847810999)
- Serve assets using [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2)
  - This can be accomplished by using a CDN that supports HTTP/2, such as Cloudfront

### Application bundle size

#### Findings

##### Vets-website

Unfortunately, vets-website applications have a very large bundle size and quite poor performance as reported by the [daily lighthouse scans](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/lighthouse-performance-report/). A comparative review showed that check-in's performance is in line with other vets-website applications.

##### Check-in
We use the following non-react dependencies:

- date-fns (300b)
- i18next (33kB)
- @sentry/browser (68kB)

#### Recommendations

We could explore removing `@sentry/browser`, but it would be unlikely to make a noticeable difference for end users and is quite small in comparison to the default vets-website bundle size of ~1.6MB. Our options are currently limited due to vets-website dependencies - if a lighter-weight header and/or footer are made available, we should prioritize their use with our app. More broadly, we should advocate for and support any and all platform web performance initiatives we can.

### Application Complexity

#### Findings

This area was not extensively researched, preliminary findings indicate that the sheer size and number of required assets dominate the time spent.

#### Recommendations

We may choose to revisit this if and when the main application bundle size can be significantly reduced. Page-to-page performance is good, which indicates that we probably don't have significant issues with application complexity.

### API request latency

#### Findings

This area is worthy of its own spike, but is generally outside of our team's direct control. The TEVI team is meeting today to investigate abnormally long CHIP API requests/timeouts that tend to occur on hourly intervals. Additionally, they have an initiative in progress to front Vista-API with API Gateway, which will reduce some network roundtrips for VistA API calls.

#### Recommendations

Provide support for the TEVI team as needed, continue to monitor request timings.
