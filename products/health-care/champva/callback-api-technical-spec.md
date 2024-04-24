# Implementation Steps

Below is a living document that will be updated with specifics as changes are made.

1. Create a DB table `ivc_champva_forms` with columns [UUID (auto-generated), email, first_name, last_name, form_number, file_name, form_uuid, s3_status, pega_status, created_at, updated_at] :white_check_mark:
   - Ex: [AUTO, "veteran@aol.com", "John", "Smith", "10-10D", "a0a9682e-04f2-44ad-85ca-99e2d9ff6a21_vha_10_10d.pdf", a0a9682e-04f2-44ad-85ca-99e2d9ff6a21, "200", "pending", AUTO, AUTO]
   - Ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/80349 
   - Code: https://github.com/department-of-veterans-affairs/vets-api/pull/16367

3. Create a model called `IvcChampvaForm` to handle communication between the controller and database :white_check_mark:
   - Add validation on `email` as it will be unique and required
   - Add tests to ensure CRUD (Create, Read, Update, Delete) is functioning properly
   - Ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/80872
   - Code: https://github.com/department-of-veterans-affairs/vets-api/pull/16387
 
4. Update the `uploads_controller.rb` to insert new rows when uploading to PEGA's S3 bucket, more if there are multiple files.      
   -  This action should happen after we hit S3 so we can properly record the S3 status
   -  Example of INSERT:
   ```
   ::IvcChampvaForm.create!(
      form_uuid: @form_uuid,
      file_name: @file_name,
      status: "Submitted"
      ... 
    )
   ```
   - Ticket: TBD
   - Code: TBD
5. Add `post '/v0/ivc_champva_forms/status_updates', to: 'pega#update_status'` to routes.rb and then send that endpoint to PEGA to add to their lambda. 
   - We should have PEGA send us JSON formatted payload like below (PM Note: consider including timestamp, PEGA batch ID and PEGA case id(s)):
     ```
     {
       "form_uuid": "12345678-1234-5678-1234-567812345678",
       "file_names": ["file1.pdf", "file2.pdf"],
       "status": "processed"
     }
     ```
   - Ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/80948
   - Code: TBD
6. Create `pega_controller.rb` to handle the request from PEGA. We can also wrap anything we'd like it a DataDog trace.
   - Likely auth path https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication#Authentication-OverridingAuthentication
   - We will want to return `{status: 200}` or `{status: 500}`
   - Example:
    ```
    class PegaController < ApplicationController
      # skip_before_action :authenticate (By default there is auth, uncomment this to make it public)
    
      def update_status
         begin
          # Parse the JSON data
          data = JSON.parse(json_data)
      
          # Validate JSON structure
          unless data.is_a?(Hash)
            return JSON.generate({ status: 500, error: 'Invalid JSON format: Expected a JSON object' })
          end
      
          # Your logic to determine the status code
          if some_condition(data)
            response = { status: 200 }
          else
            response = { status: 500 }
          end
      
          # Convert the response to JSON format
          json_response = JSON.generate(response)
      
          # Return the JSON response
          return json_response
        rescue JSON::ParserError => e
          # Handle JSON parsing error
          return JSON.generate({ status: 500, error: "JSON parsing error: #{e.message}" })
        end
      end
    end
    ```
   - Ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/80948
   - Code: TBD
7. After an update from PEGA we can check all the rows in the table for the UUID they sent us and if all the files related are "processed" we can trigger `VANotify::EmailJob.perform_async()` to 
   send an email to the Veteran. We will need a new template created by person X (Ex: preneeds_burial_form_email: preneeds_burial_form_email_template_id)
   After we have the database updated by PEGA requests we can then start utilizing the data to actually notify the veteran using Sidekiq. We will want to create one or two Sidekiq jobs.
8. Clean Up Job (CRON) - We don't want the data rows to remain in the table for over 60 days after being processed, due to our ATO requirements. We can use the status and updated_at column to distinguish what can be purged from the database.
9. Email - If we don't do inline VANotify email then we'll want to kick off a job instead that handles that process and can retry if there are errors.
