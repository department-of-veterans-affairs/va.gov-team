# DNS Pattern for API for Vets.gov

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | 08/04/2016 |
|**Revisit Decision:**| No | **Revisit Date:** | N/A |

**Revisit Criteria:** N/A

**Decision Makers:** @robbiethegeek, @ShawnArnwine, @awong-dev, @ayaleloehr, @shauni


---

## Current URLs (tl&dr)
- prod: api.vets.gov
- staging: staging-api.vets.gov
- development: dev-api.vets.gov

## History

There was a lot of discussion around what the pattern for the URLs for the API for Vets.gov should be.
- https://dsva.slack.com/archives/vetsdotgov/p1463585218000451
- https://dsva.slack.com/archives/vetsgov-api/p1469651479000138
- https://dsva.slack.com/archives/vetsdotgov/p1463580241000440

The pattern has been decided that it is ([staging|dev]-)api.vets.gov.

### Contributing Factors

- Consistency of the configurations on the NGINX proxy configs
  - api.vets.gov and dev-api.vets.gov 
  - not api.vets.gov and dev.vets.gov/api 
- SSL wildcard certificate
  - https://en.wikipedia.org/wiki/Wildcard_certificate
    - we have a wildcard SSL certificate for vets.gov and that covers *.vets.gov
    - which is why we can't have
      - prod: api.vets.gov
      - dev: dev.api.vets.gov
      - would require a rewrite for dev to have HTTPS for development.
  
