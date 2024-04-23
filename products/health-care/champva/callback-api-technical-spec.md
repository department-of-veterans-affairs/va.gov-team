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
       )
   ```
   - Ticket: TBD
   - Code: TBD
5. Add `post 'forms/process', to: 'forms#process'` to routes.rb and then send that endpoint to PEGA to add to their lambda. 
   - We should have PEGA send us JSON formatted payload like below (PM Note: consider including timestamp, PEGA batch ID and PEGA case id(s)):
     ```
     {
       "uuid": "12345678-1234-5678-1234-567812345678",
       "file_names": ["file1.pdf", "file2.pdf"],
       "status": "processed"
     }
     ```
   - Define a callback endpoint (ex: config/routes.rb):
     ```
     Rails.application.routes.draw do
     post '/status_updates', to: 'status_updates#receive' 
     # ... existing routes
     end
     ```
   - TBD
6. Define the Callback URL. Within the configuration of our external service for PEGA, we will need to specify the URL of the callback endpoint. Example: https://api.va.gov/ivc-pega-updates
   - TBD
7. Create a new controller to handle the request from PEGA. Could look something like this if we want to validate via bearer token. We can also wrap anything we'd like it a DataDog trace.
   - Likely auth path https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication#Authentication-OverridingAuthentication
   - Example:
    ```
    class FormsController < ApplicationController
      before_action :authenticate_request
    
    def receive
      request_id = params[:request_id]
      status = params[:status]

      status_request = StatusRequest.find_by(request_id: request_id)
      if status_request
        status_request.update(status: status)
        render json: { message: 'Status updated successfully' }, status: :ok
      else
        render json: { error: 'Status request not found' }, status: :not_found
      end
   end
    
      private
    
      def authenticate_request
        token = request.headers['Authorization']
        unless valid_token?(token)
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end
    
      def valid_token?(token)
        # Logic to validate bearer token
        # For example, you might use JWT gem for token validation
        # Return true if token is valid, false otherwise
        # Example:
        # JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
        true # Replace with your validation logic
      rescue JWT::DecodeError
        false
      end
    end
    ```
   - TBD 
8. After an update from PEGA we can check all the rows in the table for the UUID they sent us and if all the files related are "processed" we can trigger `VANotify::EmailJob.perform_async()` to 
   send an email to the Veteran. We will need a new template created by person X (Ex: preneeds_burial_form_email: preneeds_burial_form_email_template_id)
   After we have the database updated by PEGA requests we can then start utilizing the data to actually notify the veteran using Sidekiq. We will want to create one or two Sidekiq jobs.
9. Clean Up Job (CRON) - We don't want the data rows to remain in the table for over 60 days after being processed, due to our ATO requirements. We can use the status and updated_at column to distinguish what can be purged from the database.
10. Email - If we don't do inline VANotify email then we'll want to kick off a job instead that handles that process and can retry if there are errors.
