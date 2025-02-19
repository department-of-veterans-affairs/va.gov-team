# How to Test EVSS Silent Failure Work in Staging

## EVSS - Testing upload success 
### When cst_send_evidence_submission_failure_emails is enabled
1. Make sure you have ArgoCD Access
    1. If you dont have access you can go to [this](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&projects=&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D) link and create a github ticket to get access
3. Make sure you have SOCKS ACCESS
    1. If you dont have access you can go to [this](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&projects=&template=socks-access-request.yml&title=SOCKS+access+for+%5Bindividual%5D)
5. Run SOCKS by opening an SSH Tunnel
   ```
   // Go into devops/utilities
    cd devops/utilities
    
    // If you havent added jq or awscli then brew install them
    brew install jq
    brew install awscli
    
    // Generate temporary credentials for AWS 
    // Replace the User Name with your AWS user name ex: Jim.Frank
    // Replace the MFA Code with the 6 digit code that you see on your MFA app for // AWS
    source ./issue_mfa.sh <User Name> <MFA Code>
    
    //Get a list of the current forward proxy instances in staging
    // NOTE: The private ip addresses will be used below and q key with the enter key  // lets you exit
    // EX: 
    // Instance ID		Private Ip	Name
    // i-00c543a63d6753411	10.247.35.112	dsva-vagov-staging-deployment-vagov-staging-fwdproxy-20240312-201722-asg
    
    ./ssm.sh fwdproxy staging
    
    // This command will create the ssh tunnel
    // Note: In the IP Address replace the . with -
    // EX:10.247.35.112 => 10-247-35-112
    ssh -L 4447:localhost:4433 ip-<IP Address>.us-gov-west-1.compute.internal
    // When it asks you "Are you sure you want to continue connecting?" type yes
    
    // If you have issues with the above command then run one of the following socks commands
    vtk socks on
    vtk socks setup
   ```
6. Go to [ArgoCD](https://argocd.vfs.va.gov ) and login
7. Search for the project `vets-api-staging`
8. Selected a pod with `vets-api-web` and select `Exec`
9. A new screen will open up with a terminal, type in `bundle exec rails c` (this will load the rails console)
10. 14. Run `EvidenceSubmission.count` and note how many records there are
11. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is disabled
    2. `cst_send_evidence_submission_failure_emails` is enabled
8. Go to Staging and log into a user that has a claim.
9. Select a claim from the claim status tool list,navigate to the Files Tab and upload a file
10. Afterwards go back to [ArgoCD](https://argocd.vfs.va.gov ) and login
11. Search for the project `vets-api-staging`
12. Selected a pod with `vets-api-web` and select `Exec`
13. A new screen will open up with a terminal, type in `bundle exec rails c -- sandbox` (this will load the rails console)
14. Run `EvidenceSubmission.count` you should see the additional record added to your count
    1. To find your specific record you can do `EvidenceSubmission.last` OR `EvidenceSubmission.where(claim_id: <YOUR_CLAIM_ID)` OR `EvidenceSubmission.where(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)`
    2. The new records `upload_status` should be SUCCESS and there should be a `delete_date`
   
## EVSS - Testing upload failure for type 1 and 2 and the document upload failure email
### When cst_send_evidence_submission_failure_emails is enabled
1. Perform steps 1-14 noted in the **Testing upload success section**
2. Create an ID.me Account in Staging 
3. Within the ArgoCD terminal using rails console run the following commands to change the record to a failure and run the document upload failure email cron job...
   ```
   // Find your evidence submission passing in your claim id and tracked item id if necessary
   es = EvidenceSubmission.find_by(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)

   // Create a new personalisation with a date_failed
   new_personalisation = JSON.parse(es.template_metadata)['personalisation']
   new_personalisation['date_failed'] = "<YOUR_DESIRED_DATE>" // Example: "February 12, 2025 4:47 p.m. EST"
   
   // Update your evidence submission record template_metadata with a new personalisation
   es.update(template_metadata: { personalisation: new_personalisation }.to_json)
   
   // Update your evidence submission record from a successful record to a failed record
   // Set the acknowledgement_date and failed_date to a date that you want (if your hoping to run the failure email job next consider
   // setting the failed_date to es.created_at date so that the job will process your record
   es.update(upload_status: 'FAILED', delete_date: nil, acknowledgement_date: <DESIRED_DATE>, failed_date: <DESIRED_DATE>, error_message: 'EVSS::DocumentUpload document upload failure')

   // After the update check each field to make sure it is updated correctly

   // If you have an ICN in staging, look up your account id using your icn and update the evidence submission record with your account id
   // This will make it so that when we run the failure email cron job, you will receive the email
   account_id = UserAccount.find_by(icn: "<YOUR_ICN>").id
   es.update(user_account_id: account_id)

   // Run this command to run the failure notification email job that sends a document upload failure email to a user
   Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob.perform_async
   ```
4. 
