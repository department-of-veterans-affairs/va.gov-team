# Overview

We did a bit of research into how we will interact with the Lighthouse API so that we are better prepared for building the BE component of View Representative. This is split into two parts, 1. The questions we have that are still outstanding and 2. What our findings so far have been.

### The Lighthouse Endpoint

The documentation for the Lighthouse Endpoint we will hit for View Representative can be found [here](https://developer.va.gov/explore/benefits/docs/claims?version=current)

## Questions still outstanding
1. Currently the Lighthouse api does not return any of the first name, last name or any other data about the current representative for a Veteran. Can Lighthouse add this data to the returned payload from the current endpoint and if so how long will it take to add this?
2. Do we have the first name and last name for each representative that currently exists in the LIghthouse database?


## BE Research findings

<details><summary>Current Call</summary>


<p>This is the call to get the current representative for a Veteran</p>

```python
curl --location --request GET 'https://sandbox-api.va.gov/services/claims/v0/forms/2122/active' \
--header 'apikey: 3N0pHYwZ9Bd0YG5Z8lNL3nTJgJuTJgZA' \
--header 'X-VA-First-Name: Jeffery' \
--header 'X-VA-Last-Name: Hayes' \
--header 'X-VA-Birth-Date: 1937-09-25' \
--header 'X-VA-SSN: 796131729' \
--header 'X-VA-LOA: 3'
```

<p>Here is the data structure that is returned by this call</p>

```JavaScript
{
  "data": {
    "id": "b33bd19f-72bc-4e10-b0eb-8e26f4a378e6",
    "type": "claims_api_power_of_attorneys",
    "attributes": {
      "status": "updated",
      "date_request_accepted": "2021-03-11",
      "representative": {
        "service_organization": {
          "poa_code": "1AQ",
          "first_name": "John",
          "last_name": "Doe"
        }
      },
      "previous_poa": null
    }
  }
}

```

</details>

