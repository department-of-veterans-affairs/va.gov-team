# Overview of IVC CHAMPVA module

This document provides a basic overview of the structure and behavior of the IVC CHAMPVA vets-api module.

See also: [IVC CHAMPVA README](https://github.com/department-of-veterans-affairs/vets-api/blob/4d9e337e812b55d78037e3880e335afcec01c42d/modules/ivc_champva/README.md?plain=1#L1)

## Purpose

The purpose of the IVC CHAMPVA module is to accept and process IVC CHAMPVA forms. These include:

- 10-10d Application for CHAMPVA benefits
- 10-7959c Other Health Insurance Certification
- 10-7959a CHAMPVA Claims
- 10-7959f-1 Foreign Medical Program Registration
- 10-7959f-2 Foreign Medical Program Claims

## Approach

The module takes the following approach to processing forms:

1. Initially, a form is added to the module via a [rake task](https://github.com/department-of-veterans-affairs/vets-api/blob/4d9e337e812b55d78037e3880e335afcec01c42d/modules/ivc_champva/lib/tasks/forms.rake#L9). This rake task accepts a target form PDF document as input and generates all the necessary classes/supporting files to represent this form on the backend. Once a form is added, the frontend should provide a corresponding form UI ([see for example, 10-10d](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ivc-champva/10-10D))
2. The [uploads controller](https://github.com/department-of-veterans-affairs/vets-api/blob/4d9e337e812b55d78037e3880e335afcec01c42d/modules/ivc_champva/app/controllers/ivc_champva/v1/uploads_controller.rb#L29) accepts submissions and, based on the form ID presented at submit time, creates an instance of the appropriate form class.
    - This form class allows the uploads controller to take the form data submitted and stamp it into the appropriate PDF file via a `.json.erb` mapping file ([example](https://github.com/department-of-veterans-affairs/vets-api/blob/4d9e337e812b55d78037e3880e335afcec01c42d/modules/ivc_champva/app/form_mappings/vha_10_10d.json.erb#L1)).
3. The uploads controller also accepts supporting documents which may be uploaded midway through a form submission via the frontend. Files sent to this endpoint are associated with a particular form submission via UUID in the `IvcChampvaForm` database table.
4. Once a form is submitted, the filled form PDF and any related supporting documents are shipped to an S3 bucket controlled by DOCMP. At this point, it is up to DOCMP to collect the files and ingest them into their Pega document storage application.
 
## Appendix

Repositories
- [Backend code (vets-api)](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/ivc_champva)
- [Frontend code (vets-website)](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ivc-champva)

Documentation on Pega
- [Checking submissions in the Pega UI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/checking_submissions_in_pega_ui.md)
- [JWTs for Pega Status Update API endpoint](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/pega_jwt_gen_for_ivc_endpoint.md)
- [STS certs for Pega](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/sts_sis_pega_certificate_background.md)
- [Callback between vets-api and Pega ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/ADR-callback-api-to-receive-status-from-pega.md)
- [Resolving missing Pega statuses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/resolving-missing-pega-status.md)
- [Pega AWS S3 Connection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/PEGA_AWS_S3_connection.md)
