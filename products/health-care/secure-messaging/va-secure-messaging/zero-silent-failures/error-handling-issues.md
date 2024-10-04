# SM Patient API Error handling

Current Status: Looks to be *fine*, but I am not convinced this is not an issue.

## What is wrong

There is a misalignment in how error handling is happening between va.gov and the SM Patient API

va.gov clients are assuming RESTful best practices being followed. The API team has deviated from those best practices. The SM API is swallowing potential errors during API requests. When swallowing these errors, we logging the errors, but are returning a `200 OK` response to the client that everything went okay. This type of error handling has been communicated to the FE team and could lead to errors be silent.

[Slack thread about this](https://dsva.slack.com/archives/C05TU9FPZU0/p1727122736647299?thread_ts=1727122506.525729&cid=C05TU9FPZU0)

## Current state + example

> When creating a new message

* The website [dispatches the new message](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-secure-messaging/components/ComposeForm/ComposeForm.jsx#L249)
* Vets-api acts as a pass through
* SM API handles the request
  * In doing so, it calls[a Service method](https://github.com/department-of-veterans-affairs/mhv-sm-patient-api/blob/0474aa290b0eab1ea1ab838fb0c413f4513be62b/src/main/java/gov/va/med/mhv/sm/patient/service/SendMessageService.java#L146) to create the message. There is try/catch block that catches all errors. If this is the trigger, then the MEssageDTO never gets and ID. this DTO is still returned to the client without and id, but with a 200 success, even though the call actually failed

## How to fix this

### Stop gap

* [ ] SM API team works through identifying how the API endpoints that are being response when there is an error
* [ ] FE team in the vets-api can do a check if the IDs exist and throw an error

### Real fix

* [ ] the API teams updates the error handling to use RESTful and VA best practices

## Resources
