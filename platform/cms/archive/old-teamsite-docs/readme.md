# Teamsite Product Outline

## Communication Channels 
- Github Label: team-site
- Slack Channel: [#platypus-tools-team](https://dsva.slack.com/channels/platypus-tools-team)
- Keywords: Teamsite

## Points of Contact
- VA Business Stakeholders
  - Teamsite Manager: Josh Tuscher Joshua.Tuscher@va.gov 
- DSVA Product Owner: Chris Johnston Christopher.Johnston2@va.gov 
- Ad Hoc Product Manager: Ryan Luu ryan.luu@adhocteam.us
- Engineering POCs:
  - Frontend: Rian Fowler rian.fowler@adhocteam.us

## Narrative
To achieve consistent navigation and branding across VA.gov pages, a client side script is used to overwrite the Teamsite header and footer. The [Teamsite Overview](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/architecture/teamsite/#teamsite-overview) covers the high level technical challenges.

## Current Status

- No major updates since January. 
- Development is complete but VA.gov header has not been released to all Teamsite pages.

## How to Access / Test

| Site | Production | Test (staging) |
| --- | --- | --- |
| Veterans Health Adminstration | https://www.va.gov/health | https://staging.va.gov/health/?targetEnvironment=vagovstaging |
| Veterans Benefits Administration | https://benefits.va.gov/benefits/ | https://benefits.va.gov/benefits/?targetEnvironment=vagovstaging |
| National Cemetary Administration | https://www.cem.va.gov/ | https://www.cem.va.gov/?targetEnvironment=vagovstaging | 
| Choose VA | https://www.choose.va.gov/ | https://www.choose.va.gov/?targetEnvironment=vagovstaging |

_All Teamsite pages on www.va.gov will show the header. There is not a complete list of Teamsite pages on www.va.gov._

_See [Teamsite Behavior and Whitelisting Pages](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/architecture/teamsite/#teamsite-behavior-and-whitelisting-pages) for information on how to add the VA.gov header to additional subdomains_

## Error Handling
- Not defined at this point

## Monitoring/SLO information 
- No thresholds have been set for the injected header up to this point
