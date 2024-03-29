# Callback API to receive application status from PEGA
## Status
What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?

## Context
What is the issue that we're seeing that is motivating this decision or change?
We need the ability to receive form status updates from PEGA that can be used to notify users

## What options were considered?
1. LightHouse Delivery Infrastructure
- We originally looked into LHDI because they were already processing forms and we didn't want to reinvent the wheel. After discussing this process with Steve Albers (Benefits Engineer OCTO) he doesn't think leveraging LH makes sense.

   For starters, it's adding pipeline complexity to a process that starts on va.gov and should end on va.gov. Furthermore,
     LH engineers would need to update the code on their end for each form we send them. Finally, we aren't sending LH any information currently before submitting to PEGA's S3 and we don't know how difficult or how long it will take to accomplish this.

2. Redis
   - This was easily dismissed because it only holds data in it for up to 30 days. Forms take longer to process.
     

## Decision
What is the change that we're proposing and/or doing?
I think it makes the most sense to leverage a new va.gov database table to be the source of truth for the form's statuses.

## Implementation Steps
Note: Below is just some pseudo code to get whats in my brain on paper.
1. Create a DB table like `ivc_forms` with columns [UUID (auto-generated), form_UUID, file_name, email, status, created_at, updated_at]
   - Ex: [AUTO UUID, a0a9682e-04f2-44ad-85ca-99e2d9ff6a21, a0a9682e-04f2-44ad-85ca-99e2d9ff6a21_vha_10_10d.pdf, veteran@aol.com, "pending", AUTO, AUTO]
2. Update the uploads_controller.rb to insert new rows, more if there are multiple files, like below (Don mentioned Burals team is doing something similar and will investigate):
    ```
    Class::Model.create!(
          form_uuid: @form_uuid,
          file_name: @file_name,
          status: "Submitted"
        )
    ```
3. Add `post 'forms/process', to: 'forms#process'` to routes.rb and then send that endpoint to PEGA to add to their llambda.
3a. We should have PEGA send us JSON formatted payload like below:
    ```
    {
      "uuid": "12345678-1234-5678-1234-567812345678",
      "file_names": ["file1.pdf", "file2.pdf"],
      "status": "processed"
    }
    ```
5. Create a new controller to handle the request from PEGA. Could look something like this if we want to validate via bearer token:
    ```
    class FormsController < ApplicationController
      before_action :authenticate_request
    
      def process
        # Your processing logic here
        # Maybe send VANotify Email
        render json: { status: 'processed' }, status: :ok
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
6. After an update from PEGA we can check all the rows in the table for the UUID they sent us and if all the files related are "processed" we can trigger `VANotify::EmailJob.perform_async()` to send an email to the Veteran. We will need a new template created by person X (Ex: preneeds_burial_form_email: preneeds_burial_form_email_template_id)
After we have the database updated by PEGA requests we can then start utilizing the data to actually notify the veteran using Sidekiq. We will want to create one or two Sidekiq jobs.
1. Clean Up Job (CRON) - We don't want the data rows to remain in the table after being processed over 60 days based on our ATO. We can use the status and updated_at column to distingush what can be purged from the database.
2. Email - If we don't do inline VANotify email then we'll want to kick off a job instead that handles that process and can retry if there are errors.

## Consequences
What becomes easier or more difficult to do because of this change?
