# View medications list feature

## Overview

Ability to refill prescriptions
## User stories

- As a Veteran, I want to be able to view all medications from VA, community, and private providers
- As a Veteran, I want to view relevent information about medications as available, including name, images (or a11y equivalent), descriptions.)

| Feature | Usage | 
|---|---|
|[Detail view for VA prescriptions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/feature-reference/VA-meds-detail-list-view.md) | View details for medications adninistered by VA |
|[Detail view for non-VA prescriptions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/feature-reference/Non-VA-meds-list-detail-view.md) |View details for medications administered outside of VA|

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- The user must be able to :
  - See their full medications list 
  - View details for each medication (VA and non. VA)
  - Go to refill prescriptions from this page
  - Go to secure messages to renew prescriptions from this page

### Non-functional


## Specifications

[Page template](https://www.sketch.com/s/c117249d-4845-4740-a3e2-78ebde262de3/p/21DEC478-8C80-4CE4-8412-DBBCE5F17DEA/canvas)

[Page content]

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->



## Errors and alerts 
[User flow](https://www.sketch.com/s/c117249d-4845-4740-a3e2-78ebde262de3/p/5FC7ADD6-6C9A-4EC3-A47A-9AF8379062CC/canvas)
<!-- Any alerts that could display for this feature and what triggers them. -->

### Alert that user is not registered at a VA facility
<!-- Add a new section for each alert -->

**Alert trigger**


**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** [https://staging.va.gov/my-health/medications?next=loginModal&oauth=false]

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

**Endpoints**
`



## Development testing


### [Call name] call

  
<details>
  <summary><b>VCR cassette</b></summary>

```
[Add VCR cassette]

```
</details>

<details>
  <summary><b>Example test for "[Call name]" that corresponds to the above VCR cassette.</b></summary>

```
[Add example test]
```
</details>

