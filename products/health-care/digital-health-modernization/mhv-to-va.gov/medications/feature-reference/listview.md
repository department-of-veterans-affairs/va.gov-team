# View medications list feature

## Overview

Ability to refill prescriptions
## User stories

- As a Veteran, I can submit refill requests in line for VA prescriptions that are currently active and have refills left, understand whether they are in the process of being refilled, and when the medication has been dispensed.
- As a Veteran, I can submit a refill-all active prescription with refills left, confirm that is the transaction needed, and submit,
- As a Veteran, I know when recently dispensed VA prescriptions have been shipped by CMOP or local VA facility, and I can track their shipment progress and any changes that may occur with the shipment.

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- When a med is active, a refill is not in process, and there are refills left, a user should be able to request a refill by pressing a button. 
- For the first version of this tool, a user must click refill on each individual meds. There is no bulk med refill functionality.
- When a prescription refill is in process, remove the ability to refill and provide a pithy explainer that the refill is in process. The button should be replaced by the estimated fill date. 
- Once a med has been dispensed, start the process over again.
### Non-functional


## Specifications

[User flow](https://www.sketch.com/s/c117249d-4845-4740-a3e2-78ebde262de3/a/GoqqApY) 

[Page template](https://www.sketch.com/s/c117249d-4845-4740-a3e2-78ebde262de3/p/21DEC478-8C80-4CE4-8412-DBBCE5F17DEA/canvas)

[Page content]

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->



## Alerts and conditional states
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

