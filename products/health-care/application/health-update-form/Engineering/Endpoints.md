Here is the list of endpoints used for EZR form:
  * POST /v0/form1010_ezrs
    - Called in order to pass EZR form submission data from `vets-website` to `vets-api`. From there, the data is formatted and then sent to the Veteran Enrollment System's API.
  * GET /v0/in_progress_forms/10-10EZR
    - Called in order to fetch in-progress EZR form data. The backend finds the `InProgressForm` record based on the `form_id` and the user's `uuid` and returns the form data to the frontend.
  * **TBD**: POST /v0/form1010_ezrs/download_pdf
