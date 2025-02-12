## vets-api error matrix

Common errors and the reasons for these errors.
| Endpoint | Response Code | Description |
| -------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v0/caregivers_assistance_claims/create | 403 | Invalid CSRF token. |
| v0/caregivers_assistance_claims/create | 422 | Form validation error. The claim data failed when validating against the form schema. |
| v0/caregivers_assistance_claims/create | 503 | Backend Service Outage. The Veteran was unable to be found in the MPI lookup. This error means no SSN or TIN was supplied, the supplied value was not found in MPI, or there was an error in the MPI search. We intentionally return a generic error when the value is not found as a security precaution. |
| v0/caregivers_assistance_claims/create | 504 | Gateway Timeout |
| v0/caregivers_assistance_claims/download_pdf | 403 | Invalid CSRF token. |
