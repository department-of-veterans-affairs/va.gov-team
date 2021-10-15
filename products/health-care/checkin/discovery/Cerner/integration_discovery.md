# Cerner Integration

## Potential Integration Routes

### Millenium

Millenium is Cerner’s implementation of the HL7® FHIR® standard.

#### Opportunities

- This is likely to be the most direct path to Cerner data access.

#### Challenges

- May require ATO/other approvals for use.

#### Resources

[Api Docs](https://fhir.cerner.com/millennium/overview/)

### VA Clinical Health API (FHIR)

The Clinical Health API allows you to develop clinical-facing applications which pull patient demographic and health information for clinical settings.

#### Opportunities

- This would likely be the lowest lift from a administrative/security perspective.

#### Challenges

- The API currently only provides `GET` endpoints, with no ability to write demographic updates
- Depending on the source, data may be available in real-time or up to 48 hours after entry

#### Resources

- [Api Docs](https://developer.va.gov/explore/health/docs/clinical_health?version=current)
- [Clinic Status](https://github.com/department-of-veterans-affairs/health-apis-vista-fhir-query/wiki)
