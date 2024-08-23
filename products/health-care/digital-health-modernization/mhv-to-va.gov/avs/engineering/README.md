# AVS Engineering

## Overview

The AVS application provides a read-only, responsive, accessible view of a patient's [After Visit Summary](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs#overview-and-problem-statement) on VA.gov. When AVSs are printed by providers, a PDF document is created and stored in [VistA Imaging](https://dvagov.sharepoint.com/sites/vhahealth-information-management/SitePages/VistA-Imaging.aspx). Additionally, the AVS backend writes data to a JSON representation which is stored by the AVS backend. When Veterans view their past appointments on VA.gov, the appointments app queries the AVS backend by VistA station number and appointment IEN to see if an AVS document is available for that appointment. If one is available, a link to the AVS application is presented on the appointment details page.

## Automated Testing

- [Frontend tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/avs/tests)
  - Since the AVS is not an interactive application, there are only basic end-to-end tests that confirm accordion & redirect behaviors and run accessibility checks. The bulk of the testing is done in unit tests that confirm how and when data in the JSON document is displayed.
- [Backend specs](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/avs/spec)

## Alerting and Monitoring

- [VA.gov AVS dashboard](https://vagov.ddog-gov.com/dashboard/afd-cht-fsb/vagov-after-visit-summary)
- [VA.gov monitors](https://vagov.ddog-gov.com/monitors/manage?q=service%3Aafter-visit-summary&order=desc)
- [vets-api APM](https://vagov.ddog-gov.com/services/service/after-visit-summary?env=eks-prod)
- [AVS Backend logs](https://vetext.ddog-gov.com/logs?query=service%3Aavs-web-apache-prod%20%22%2Favs%2Fapi%22%20)

## Architecture

### Architecture Diagram

```mermaid
flowchart TB
    subgraph VeText
    avs-api["AVS API"]<-->AvsApplication["AVS Application"]
    AvsApplication["AVS Application"]<-->VistA
    AvsApplication["AVS Application"]<-->Krames["Krames API"]
    AvsApplication["AVS Application"]<-->DocDB
    end
    subgraph VA.gov
    avs-fe["AVS Frontend (React)"]<-->vets-api
    vets-api<-->fwdproxy["HaProxy (fwdproxy)"]
    end    
    fwdproxy<-->avs-api
```

### Sequence Diagram

```mermaid
sequenceDiagram
    participant Veteran
    participant Frontend
    participant vets-api
    participant haproxy
    participant AVS Backend

    Veteran->>Frontend: Request After-Visit Summary page for ID
    Frontend->>vets-api: Send request for ID
    vets-api->>haproxy: Send request for AVS backend
    haproxy->>AVS Backend: Proxy request for data
    AVS Backend-->>haproxy: Return data as JSON
    haproxy-->>vets-api: Return data as JSON
    vets-api-->>Frontend: Return data as JSON
    Frontend-->>Veteran: Display After-Visit Summary page
```

## Incident response  

### Points of contact for system and dependent VA backends

- VA.gov AVS
  - [AVS Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/README.md#communications)
- Platform team (vets-website, vets-api, fwdproxy)
  - [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)
- AVS Backend
  - tag `@vetext-tier-3-team` in [#vetext-production-support](https://dsva.slack.com/archives/C052BC1893K)

### API Docs

- vets-api: https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/?url=https://dev-api.va.gov/my_health/apidocs#/
- AVS backend: https://pvs.va.gov/avs/api/openapi

