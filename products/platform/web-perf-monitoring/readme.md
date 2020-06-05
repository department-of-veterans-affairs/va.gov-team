# Web Performance Monitoring v0.2
Provide standards and monitoring to help measure, evaluate, and govern website performance. 

## Performance Standards
In order to track and monitor performance VSP has researched and documented a list of success metrics along with recommended thresholds that webpages should meet.

List of [Performance Metrics and Thresholds](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/speedcurve/performance-standards.md#metrics)

## Performance Monitoring
By leveraging the software application, [SpeedCurve](https://www.speedcurve.com), VA will monitor and track the top 10 landing pages on va.gov weekly against our performance standards. Alerts will generate if any of the pages dips below the performance metrics. The FE Tools team will then triage and optimize sub-performing webpages.
All applications launching on the platform will go through performance testing to ensure it meets the VA's performance standards

[Why did we choose Speedcurve?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/web-perf-monitoring/web-perf-monitoring-product-outline.md)

### Track Performance
- Teams will have access to a performance budget dashboard which tracks their performance each week against [VSP standard performacne metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/speedcurve/performance-standards.md#metrics)

### Test Performance
- Speedcurve allows teams to easily test the performacne impact of new code through their "Changes" and "Benchmarking" capabilities. 

### Optimize Performance
- Speedcurve provides an emmense amount of detail to help quickly identify the root of performance issues.
  - Slowest and Largest Requests
  - 3rd party blocking Requests and Long Tasks
  - Hero Rendering Times
  - Rendering Times
  - Page Load Times
  - Time to interactive
- Speedcurve includes the full suite of Lighthouse Audit scores and recommended optimizations


## Product Guides\Documentation:
- [VSP User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/speedcurve/user-guide.md)
- Speedcurve's [Get Started with Synthetic monitoring](https://support.speedcurve.com/en/articles/946252-get-started-with-synthetic-monitoring)



## Product Responsibility (Last updated: 1-16-20 )
- Troubleshooting: #vsf-product-support
- Onboarding: #vsf-product-support
- Maintenance: #vsf-product-support or #vsp-tools-fe
- Training Documents: #vsf-product-support
- Product Feedback or New Feature Requests: #vsf-product-support

## Examples or References of usage:


## Version Notes:
### Release v0.2
- Create top 10 landing pages for va.gov in speedcurve and activate alerts to be sent to leadership and FE Tools Team
- Add a step to the collaboration cycle to test performance before launching a new application to production.

### Release v0.1
- Establish VSP performance standards
- Rollout Speedcurve to Facility Locator Team for feedback around setup and usage


## Feature Requests:
- BE engineers would like a tool that connects the FE and BE like Datadog or New Relic

