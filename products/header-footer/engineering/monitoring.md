# Header / Footer Monitoring
Sept 2024

Monitoring listed below is specific to testing the Injected Header appearing successfully on 2 subdomains. 

The header on VA.gov is not monitored on its own, but presence / usability of the megamenu, Veterans Crisis Line modal, and Login modal are included in the [VA.gov homepage functional browser test](https://vagov.ddog-gov.com/synthetics/details/gsg-zui-hg8), which is described in more detail in [Homepage monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/engineering/monitoring.md).

## Datadog: [Synthetics] Injected Header and Footer Test on https://benefits.va.gov/benefits/
https://vagov.ddog-gov.com/monitors/161580
What is: 
* Synthetic test, runs daily
* Verifies presence of injected header / footer on this TeamSite subdomain, fails if any error
  * May sometimes error if page load is slow and JS to inject the header/footer doesn't complete within timeout


## [Synthetics] Injected Header and Footer Test on https://www.va.gov/health/
https://vagov.ddog-gov.com/monitors/161582
What is: 
* Synthetic test, runs daily
* Verifies presence of injected header / footer on this TeamSite subdomain, fails if any error
  * May sometimes error if page load is slow and JS to inject the header/footer doesn't complete within timeout

## Mitigation: 
If these break, it's either: 
1. A server problem, CORS or something went weird on the TeamSite for the domain
2. A markup problem where invalid markup breaks injection
3. A JS problem with injection

* Check for CORS errors. If none: 
* verify whether any recent changes to markup have shipped, and check if reverting those changes restores the injected head/foot
* If not: escalate to Platform support to investigate if any AWS server settings have changed that might affect or cause a CORS problem that would prevent proxy-rewrite from injecting the header/footer cross-domain
