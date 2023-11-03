# Header / Footer Monitoring
Oct 2023

## Datadog: [Synthetics] Injected Header and Footer Test on https://benefits.va.gov/benefits/
https://vagov.ddog-gov.com/monitors/161580
What is: 
* Synthetic test, runs daily
* Verifies presence of injected header / footer on this TeamSite subdomain, fails if any error
  * May sometimes error if page load is slow and JS to inject the header/footer doesn't complete within timeout

Mitigation: 

## [Synthetics] Injected Header and Footer Test on https://www.va.gov/health/
https://vagov.ddog-gov.com/monitors/161582
What is: 
* Synthetic test, runs daily
* Verifies presence of injected header / footer on this TeamSite subdomain, fails if any error
  * May sometimes error if page load is slow and JS to inject the header/footer doesn't complete within timeout
