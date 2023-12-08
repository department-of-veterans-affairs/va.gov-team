## ID Page errors

The ID page (visible at https://www.va.gov/health-care/apply/application/id-form when logged out) hits the `GET /health_care_applications/enrollment_status` endpoint when the ID form is submitted. Handling of errors from the endpoint are described below.

### 404

A 404 from `GET /health_care_applications/enrollment_status` is not an error in this case. Instead the 404 Not Found means that there was no record found in ESR that matches the credentials entered into the ID form. In this case the "error" is handled by forwarding the user to the first page of the health care application, prefilling the health care application with the info they entered in the ID form.

### 429

A 429 from `GET /health_care_applications/enrollment_status` is a rate limit error if there are too many requests made with similar creds to prevent brute force attacks from revealing any veteran PII. In this case users are prompted to sign in.

![429 error](./ID-page-429.png)

### 500

A 500 from `GET /health_care_applications/enrollment_status` is a legit server error, either from from ESR or our own server. In this case users are presented with a general error message.

![500 error](./ID-page-500.png)
