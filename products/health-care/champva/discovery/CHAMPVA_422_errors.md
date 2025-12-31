# 422 Errors Investigation

During the month of December 2025, the team noticed an uptick in 422 response codes across the CHAMPVA forms portfolio. This documents the findings of those 422's with next steps for root cause identification.

## `Common::Exceptions::ValidationErrors: Validation error`

This error makes up 100% of the 422's generated in the past two months.

**Datadog Screenshot**

<img width="963" height="205" alt="image" src="https://github.com/user-attachments/assets/08ed8f1a-d7d6-4ba4-a162-e3065e79be56" />

**Source**

`IvcChampva::V1::UploadsController#submit_supporting_documents`

https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/app/controllers/ivc_champva/v1/uploads_controller.rb

**Forms Affected**

- 10-10D
- 10-7959C
- 10-7959F-2
- 10-7959A
- 10-10D-EXTENDED

## Notes

Coming [through the logs](https://vagov.ddog-gov.com/apm/traces?saved-view-id=4178), the file size doesn't appear to be the issue. Here is a screenshot from Datadog of a trace of a 422 error. Note the file size is relatively small, only `264kb`

<img width="1281" height="438" alt="image" src="https://github.com/user-attachments/assets/66d5d5d4-828b-4664-a785-ab276877a364" />

We need to understand which validation is failing for these requests.

## What is the user seeing when they receive a 422

The frontend [fileUploadUi](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/definitions/file.js) is used to handle file uploads in our forms.

It will display the message return from the API response. In this case, the user is seeing a message `Common::Exceptions::ValidationErrors: Validation error` which isn't helpful.

## What's Next

- Add more logging to the `#submit_supporting_documents` method to [log the validation error messages](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/app/controllers/ivc_champva/v1/uploads_controller.rb#L334)
- Change the error message returned in the 422 response to include the specific validation error messages and not a generic `Common::Exceptions::ValidationErrors: Validation error`
  
