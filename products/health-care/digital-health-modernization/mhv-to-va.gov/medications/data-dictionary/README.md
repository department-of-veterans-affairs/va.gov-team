# Medications on VA.gov | Medications Data Dictionary

A place to document the mapping of medications data presented within the UI across systems upstream to vets-website and vets-api (www.va.gov, api.va.gov).


## System Diagram

```
[www.va.gov UI] <-> [api.va.gov API] <-> [MHV API] <-> [VA/EHR Systems]
```

## Web URLs

The Medications on VA.gov application exists across the following URLs

host: `{dev,sandbox,staging,www}.va.gov`

- [`/my-health/medications/`](web-root-path.md) - root path for the Medications on VA.gov
- [`/my-health/medications/refill`](web-refill-path.md) - first Medications link at `/my-health`
- [`/my-health/medications/prescription/:id`](web-prescription-path.md)
- [`/my-health/medications/prescription/:id/documentation`](web-prescription-documentation-path.md)

To visit the staged Medications refill page, navigate to:

[`https://staging.va.gov/my-health/medications/refill`](https://staging.va.gov/my-health/medications/refill)

## Mobile Views

- [Prescriptions list](mobile-prescriptions-list.md)
- [Prescriptions details](mobile-prescriptions-details.md)
- [Refill request](mobile-refill-request.md)

## Prescription Data Objects and EHR mapping

[API to EHR Map](api-data-objects.md)

## Resources

### Staging User Credentials

- [Staging User Credentials](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/medications/test-accounts.md)
- [Lighthouse | Test User Portal](https://dev.lighthouse.va.gov/test-user-portal)

### Medications on VA.gov | Front-end

- repository: [github.com/department-of-veterans-affairs/vets-website](https://github.com/department-of-veterans-affairs/vets-website)
- front-end app: [vets-website/src/applications/mhv-medications](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv-medications)

### Medications on VA.gov | Backend API

- repository: [github.com/department-of-veterans-affairs/vets-api](https://github.com/department-of-veterans-affairs/vets-api)
- backend api: [vets-api/modules/my_health](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/my_health)
- open-api/swagger: [department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/)
  - `/my-health` open-api docs: `{dev-,sandbox-,staging-}api.va.gov/my_health/apidocs.json` - paste into swagger UI, above
  - `/mobile` open-api docs: [link](https://github.com/department-of-veterans-affairs/vets-api/blob/update-rx-policy-spec/modules/mobile/docs/openapi.json)
