## 4142 Update (from 2018 PDF to 2024 PDF) Testing and Release Plan
Migrated from [Canvas](https://dsva.slack.com/docs/T03FECE8V/F090Z15ACGM)

### Expected outcomes
After the release is completed on June 25, 2025 at 10AM ET:
* Users starting new Supplemental Claims who complete the 4142 subflow will see the updated legalese on the UI and have the latest version of the 4142 form PDF completed and uploaded to Lighthouse on their behalf. 
    * Existing functionality is preserved, i.e.:
        * The 4142 submission is tracked in our database as a SecondaryAppealForm
        * The 4142 will continue to be correctly associated with their Supplemental Claim AppealSubmission.
        * Logging and metrics are working as expected in Datadog
* Users coming back to in-progress Supplemental Claims who had previously authorized/filled out information in the 4142 subflow before June 25, 10AM will:
    * Be redirected to the authorization screen and shown a banner alerting them to the updated legalese for them to review
    * Not have their in-progress form data impacted in any other way
* Users coming back to in-progress Supplemental Claims who had not previously authorized the 4142 flow before June 25, 10AM will see the updated legalese and have the latest version of the 4142 form PDF completed and uploaded to Lighthouse on their behalf if they complete the 4142 subflow. 

### Steps to release

Critical path to release day
1. Legalese approved :white_check_mark: 
2. Banner alert copy complete :white_check_mark: 
3. Backend PRs merged :white_check_mark: 
    1. [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/22527) for adding support for new 2024 version of the 4142 PDF merged :white_check_mark: 
    2. [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/22538) for refactoring ours and the 526 team's 4142 form processors, and adding feature flags for enabling the generation of the new 4142 (set to off by default in production) :white_check_mark: 
    3. [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/22595) for Rake tasks (helper scripts) to handle identifying and updating impacted in-progress Supplemental Claims (Doesn't do anything unless we run it; can merge to any environment safely) :white_check_mark: 
    4. NEW: [PR](https://github.com/department-of-veterans-affairs/va.gov-team/issues/111991) for fixing schema validation issue found in staging merged :white_check_mark: 
        1. NOTE: We found additional schema validation errors during testing. Deciding to proceed with release with the schema validation feature flag OFF since not validating against the 4142 schema is the [current behavior in production](https://github.com/orgs/department-of-veterans-affairs/projects/1434/views/3?filterQuery=label%3A%22team-DRAGONS%22+label%3Aengineering&pane=issue&itemId=115045954&issue=department-of-veterans-affairs%7Cva.gov-team%7C111991).
    5. NEW: [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/22695) for setting up configs for downtime notification/maintenance windows on the FE :white_check_mark: 
    6. NEW: [PR](https://dsva.slack.com/archives/C08SN3UD4G2/p1750097703920849?thread_ts=1749499092.300279&cid=C08SN3UD4G2) for fixing issue related to street2 found in testing and removing dependency from 526 team on our processor for backup submissions :white_check_mark: 
4. Frontend PRs merged
    1. [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/22631) for adding banner feature flag (off in production) merged :white_check_mark: 
    2. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/37072) for re-organizing FE files to support toggling changes with feature flag merged :white_check_mark: 
    3. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/36853/commits/a39dfad4cd9e7d6e88c9b49404e93950965ad528) combining banner and legalese updates behind feature flag merged :white_check_mark:
    4. NEW: [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/37146) for adding downtime notification/maintenance window on the FE merged :white_check_mark: 
    5. NEW: [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/37201) for adding the returnUrl logic to the FE (missed in first PR) merged :white_check_mark: 
    6. [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/37279) for updating release cutoff time for the FE banner :white_check_mark: 
5. Backend-specific testing in staging  :white_check_mark: 
    1. Validate PDF generation works as expected :white_check_mark:
        1. Validated old 4142s from SC flow are still being generated correctly with feature flag for generating 2024 version of PDF OFF :white_check_mark: 
        2. Validated old 4142s from 526 flow are still being generated correctly with feature flag for generating 2024 version of PDF OFF :white_check_mark: (confirmed with Kyle here) 
        3. Validated new 4142s from SC flow are being generated correctly with feature flag for generating 2024 version of PDF ON  :white_check_mark: 
        4. Validated new 4142s from 526 flow are being generated correctly* with feature flag for generating 2024 version of PDF ON :loading: (non-blocking for our release, dependent on 526 team)
            1. *Note: The 526 4142 flow is not collecting the conditionsTreated data on the FE atm, so those fields will be blank on the new 4142 until that fix is implemented 
        5. Jerry's [notes from backend-specific testing in staging for the SC flows](https://www.notion.so/kindsystems/E2E-Testing-Notes-0995-Flow-PDF-Update-2101e93f7cbb80a5bd5efb0bf60a9b7f?source=copy_link)
    2. Validate rake task works as expected in vets-api-staging Argo terminal  :white_check_mark:
        1. Open Rails console (bundle exec rails console) and run this query to list existing returnUrl counts: InProgressForm.where(form_id: "20-0995").map { |f| f.metadata["return_url"] }.tally
        2. Exit the console and run bundle exec rake decision_reviews:dry_run_supplemental_claims_update and validate output + cache file created
            1. Check the contents of the cache file: cat tmp/supplemental_claims_update_data.json
        3. Run bundle exec rake decision_reviews:update_in_progress_sc_from_cache and validate that forms have been updated by running the same tally query in Rails console and verifying the counts
        4. Run bundle exec rake decision_reviews:rollback_in_progress_sc_update and validate that forms have been changed back successfully by running the same tally query in Rails console and verifying the counts match the ones from the beginning
        5. Delete the created cache file: rm tmp/supplemental_claims_update_data.json
6. Frontend-specific testing in staging
    1. Validated updated legalese is not being shown if feature flag is OFF  :white_check_mark: 
    2. Validated updated legalese is shown if feature flag is ON :white_check_mark: 
    3. Validated banner alert on authorization screen is not shown for ANY user with an in-progress SC if feature flag is OFF  :white_check_mark: 
    4. Validated banner alert on authorization screen is shown ONLY for user with an impacted in-progress SC if feature flag is ON :white_check_mark: 
7. E2E testing in staging 
    1. Validate that downtime notification appears properly with a test scheduled maintenance window on the staging Decision Reviews PagerDuty service  :white_check_mark: 
        1. Validate behavior for users in the middle of completing a SC/cached browser session when there is a scheduled maintenance window on the staging Decision Reviews PagerDuty service :white_check_mark: 
            1. Users can continue their in-progress application during a maintenance window, so we should validate there are no users with in-progress forms prior to release
    2. With all feature flags OFF:
        1. A user starting a NEW SC who completes the 4142 sub-flow should NOT see the updated legalese or banner, and should have the old 2018 version of the 4142 PDF successfully generated and submitted to LH. The SC should also be successfully submitted to LH. :white_check_mark: 
    3. With all feature flags ON:
        1. A user starting a NEW SC who completes the 4142 sub-flow SHOULD see the updated legalese WITHOUT the banner alert, and should have the new 2024 version of the 4142 PDF successfully generated and submitted to LH. The SC should also be successfully submitted to LH. :white_check_mark: 
        2. A user returning to an IMPACTED in-progress SC SHOULD be redirected to the authorization screen WITH the banner alert AND updated legalese, and should have the new 2024 version of the 4142 PDF successfully generated and submitted to LH. The SC should also be successfully submitted to LH. :white_check_mark: 
        3. A user returning to a NON-IMPACTED in-progress SC should NOT be redirected to the authorization screen. If they choose to then navigate to the authorization screen they should see the updated legalese WITHOUT the banner, and if they complete the 4142 sub-flow should have the new 2024 version of the 4142 PDF successfully generated and submitted to LH. The SC should also be successfully submitted to LH. :white_check_mark: 

Release run of show 

* Pre-release:
    * Create calendar event and invite engineering team, Christian as optional :white_check_mark: 
    * Set up a 2 hour maintenance window in Pager Duty for the prod Decision Reviews Service. Validate that the window is showing up in the https://api.va.gov/v0/maintenance_windows :white_check_mark: 
    * Make sure you're logged in to theFlipper UI in production :white_check_mark: 
    * Ensure Flipper feature flag decision_review_track_4142_submissions is still flipped to ON in PROD so we can track 4142 submissions (aka SecondaryAppealForm records are created for 4142s) :white_check_mark: 
    * Have vets-api-prod Argo ready :white_check_mark: 
* Release:
    * Confirm that theproduction UIis displaying the maintenance window :white_check_mark: 
    * Handle in progress forms
        * Open Rails console (bundle exec rails console --sandbox)
            * Users cannot return to in-progress forms or start new ones during a maintenance window, but can continue their in-progress session during a maintenance window, so we should validate there are no users in-flight before beginning. The likelihood of this should be low since we'll set the maintenance window for a low-traffic time period to begin with.  :white_check_mark: 
                * Validate the current time in UTC: now = Time.now
                * Check the most recent InProgressForms to see if there are any updated within the last 30 minutes: InProgressForm.where(form_id: "20-0995").last(50).filter { |x| x.updated_at.between?(30.minute.ago, now) }.pluck(:updated_at).count
                    * Ideally this number is 0, but if it's not, we can wait and check periodically until it is.
                        * Query to identify if any of these IPFs would be impacted by the rake task: InProgressForm.where(form_id: "20-0995").last(50).filter { |x| x.updated_at.between?(30.minute.ago, now) }.filter { |d| d.data_and_metadata[:formData]['privacy_agreement_accepted'] && d.data_and_metadata[:formData]['view:has_private_evidence'] }
            * Confirm the count of total in-progress SCs (anticipate ~9000): InProgressForm.where(form_id: "20-0995").count :white_check_mark: exactly 9000!
            * Check the spread of return_urls: InProgressForm.where(form_id: "20-0995").map { |f| f.metadata["return_url"] }.tally :white_check_mark: 
        * Exit the console and run bundle exec rake decision_reviews:dry_run_supplemental_claims_update. Validate the output in the console and that the cache file was created. Note: this task will likely take a while to run, but should be <10 minutes total :white_check_mark: 
            * To check the cache file was created: ls tmp (look for supplemental_claims_update_data.json ) :white_check_mark: 
            * To list the first few lines of the cache file: head -20 tmp/supplemental_claims_update_data.json :white_check_mark: 
        * Run bundle exec rake decision_reviews:update_in_progress_sc_from_cache and validate that forms have been updated in Rails console :white_check_mark: 
            * Confirm the count of total in-progress SCs (anticipate ~9000): InProgressForm.where(form_id: "20-0995").count :white_check_mark: 
            * Check the spread of return_urls: InProgressForm.where(form_id: "20-0995").map { |f| f.metadata["return_url"] }.tally :white_check_mark: 
            * "/supporting-evidence/request-private-medical-records" count went from 20 => 1314, as expected
        * IF ISSUES OCCUR AND ROLLBACK IS NEEDED:
            * Run bundle exec rake decision_reviews:rollback_in_progress_sc_update and validate that forms have been changed back successfully by running the same tally query in Rails console and verifying the counts match the ones from the beginning
    * Turn on the following feature flags in production using theFlipper UI:
        * For the FE banner and new legalese to show: :white_check_mark: 
            * decision_reviews_4142_banner
        * For the BE to generate the new version of the PDF: :white_check_mark: 
            * decision_review_form4142_use_2024_template
    * End the maintenance window in PagerDuty and verify app is accessible :white_check_mark: 
        * Monitor the logs for any anomalies. 
            * Overall SC submission logs
            * 4142 Submit logs
        * If everything is looking good, save a few SecondaryAppealForm uuids to track their status. Once the status has been updated to "VBMS" (may take a day or so) we can send the associated user's file # to Amy and ask her for help spotchecking them. 

#### Engineering concerns
* Approved release time: June 25th 8AM-10AM ET  
* There may be a handful of users that may be in the middle of submitting forms during the release. 
    * While odds are low, there is one scenario we may be concerned about. 
        * ~~If a user happens to have progressed past the authorization screen, and is in the middle of completing the 4142 sub flow while we are turning the feature flags on in production, we will generate the newer version of the 4142 PDF for them without having shown them the updated legalese~~ → ADDRESSED (we will block users from entering the app during a scheduled maintenance window)
* Post-release, we should monitor logs carefully for continued successful submission of 4142s and supplemental claims
    * Note: If a 4142 fails to be generated, but the SC submission goes through, we don't currently have a way to view the payload so we can try to resubmit or recreate them, since the InProgressForm with the form data is deleted upon successful submission of the SC and queuing of the jobs to generate the 4142 PDFs.
