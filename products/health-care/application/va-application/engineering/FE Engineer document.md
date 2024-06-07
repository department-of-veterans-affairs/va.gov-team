# 10-10EZ

Also found in this [HCA developer folder](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/README.md)

## Description

Mission: Make it easier for Veterans and Caregivers to apply for, track, and manage care-related benefits.

## Slack Channels

- [1010-health-apps](https://dsva.slack.com/archives/CMJ2V70UV)

## Approval Groups

- [VSA BAM 1](https://github.com/orgs/department-of-veterans-affairs/teams/vsa-bam-1-frontend)
- [VSA Caregiver](https://github.com/orgs/department-of-veterans-affairs/teams/vsa-caregiver-frontend)

## Project Documentation

- [Figma File](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=0-1)
- [Content Source or Truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10EZ/10-10EZ-application-copy.md)
- [Project Documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Good to knows

### Project URLS

``` markdown
/health-care/apply/application/introduction
```
### Enrollment System WSDL
- [Enrollment System - EE Summary WSDL](https://ves.va.gov/esr-ws/spring-ws/getEESummary/eeSummary.wsdl)
     - Must be on VA Network to access

### How to run locally

Follow the standard directions to run the app. The API needs to be running in order to run the app locally.

### VA Forms

We are using version 1 of the forms library, Formation. This is a straight forward standard form. We are using [the vets-json-scheam](https://github.com/department-of-veterans-affairs/vets-json-schema) to validate the shape of the data.  

### What API(s) does this use?

The data ends up in the ESR (Enrollment).

Not sure what Vets-API endpoints are used.

### Feature toggles

We have a feature toggle for multiple address field, `multiple_address_10_10ez`, Its currently enabled in all environments.

### How to test new features?

Each feature should have unit tests and e2e tests. We can use the Review Instances to review before merging a PR.
Engage Joshua Faulkner/Enrollment System team for testing new features before going live.  Our staging is connected to the ES SQL environment.

### 10-10EZ Schema information

**States list for drop-downs**

The state list in the schema is supposed to be what the 10-10ez accepts
- Currently (as of 7/2022), the Enrollment System can only accept the 50 US States, Washington DC and 'Other'
     - "Washington DC" translates to state code "DC" in the backend
     - "Other" translates to state code "FG" in the backend to signify a foreign country, province or other location that is not the 50 US states & DC
- Any other values should be put in another schema. 
- The Enrollment system may have future work to expand the acceptance of other countries/provinces/regions, however this is not yet in place

### Useful acronyms, terms and/or tips

- Application registry - Updates to the application URL, breadcrumb titles, menu titles and other page attributes can be found within the `content-build` repo in a file called `registry.json`.
