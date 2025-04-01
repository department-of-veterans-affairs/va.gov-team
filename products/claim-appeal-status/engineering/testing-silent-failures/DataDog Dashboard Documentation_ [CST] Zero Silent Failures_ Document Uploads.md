# **DataDog Dashboard Documentation:** \[CST\] Zero Silent Failures: Document Uploads

## **Overview**

The purpose of this dashboard is to track the status of document uploads to EVSS and Lighthouse, and also to track the status of failure notification emails sent to users via VA Notify.

**Note:** all graphs are scoped to the *$env* variable which is set in the main dashboard view by the *“env”* select box in the upper left corner of the UI. This selects which environment to include in the results: *production*, *staging*, *sandbox*, or *dev*.

**How to view related logs for a graph metric:** Click on a bar in a bar graph and click “View Related Logs”.

***TO-DO: Make a doc on how to go about creating graphs and monitors***

---

## **Dashboard Details**

* **Dashboard Name:** \[CST\] Zero Silent Failures: Document Uploads  
* **Dashboard URL:** [https://vagov.ddog-gov.com/dashboard/pps-nf7-ppr/cst-zero-silent-failures-document-uploads?fromUser=false\&refresh\_mode=sliding\&from\_ts=1742304965297\&to\_ts=1742391365297\&live=true](https://vagov.ddog-gov.com/dashboard/pps-nf7-ppr/cst-zero-silent-failures-document-uploads?fromUser=false&refresh_mode=sliding&from_ts=1742304965297&to_ts=1742391365297&live=true)

---

## **Graphs and Metrics**

### **\[EVSS\] Evidence Submission Records Created**

* **Purpose:** This shows how many records were created in the EvidenceSubmissions table that have been uploaded to EVSS  
* **Metrics Included:**  
  * ***vets\_api.statsd.cst\_evss\_document\_uploads\_evidence\_submission\_record\_created***: This StatsD metric is logged by the *create\_initial\_evidence\_submission* function in **app/services/evss\_claim\_service.rb** when a record has been created in the EvidenceSubmissions table.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Evidence Submission Records Created**

* **Purpose:** This shows how many records were created in the EvidenceSubmissions table that have been uploaded to Lighthouse  
* **Metrics Included:**  
  * ***vets\_api.statsd.cst\_lighthouse\_document\_uploads\_evidence\_submission\_record\_created***: This StatsD metric is logged by the *create\_initial\_evidence\_submission* function in **lib/lighthouse/benefits\_documents/service.rb** when a record has been created in the EvidenceSubmissions table.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[EVSS\] Evidence Submission Records QUEUED**

* **Purpose:** This shows how many records were updated to QUEUED status in the EvidenceSubmissions table that will be uploaded to EVSS  
* **Logs Included:**  
  * `"EVSS - Updated Evidence Submission Record to QUEUED"`: This is logged by the *update\_evidence\_submission\_with\_job\_details* function in **app/sidekiq/evss/document\_upload.rb** right before a document upload to EVSS occurs.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Evidence Submission Records QUEUED**

* **Purpose:** This shows how many records were updated to QUEUED status in the EvidenceSubmissions table that will be uploaded to Lighthouse  
* **Logs Included:**  
  * `"LH - Updated Evidence Submission Record to QUEUED"`: This is logged by the *update\_evidence\_submission\_with\_job\_details* function in **app/sidekiq/lighthouse/evidence\_submissions/document\_upload.rb** right before a document upload to Lighthouse occurs.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[EVSS\] Evidence Submission Records FAILED**

* **Purpose:** This shows how many records were updated to FAILED status in the EvidenceSubmissions table that will be uploaded to EVSS  
* **Logs Included:**  
  * `"EVSS - Updated Evidence Submission Record to FAILED"`: This is logged by the *update\_evidence\_submission\_for\_failure* function in **app/sidekiq/evss/document\_upload.rb** when Sidekiq retries exhaust trying to upload a document to EVSS.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Evidence Submission Records FAILED**

* **Purpose:** This shows how many records were updated to FAILED status in the EvidenceSubmissions table that will be uploaded to Lighthouse  
* **Logs Included:**  
  * `"LH - Updated Evidence Submission Record to FAILED"`: This is logged by the *update\_evidence\_submission\_for\_failure* function in **app/sidekiq/lighthouse/evidence\_submissions/document\_upload.rb** when Sidekiq retries exhaust trying to upload a document to Lighthouse.   
  * `"BenefitsDocuments::UploadStatusUpdater" @payload.status:FAILED`: This is logged by the *log\_status* function in **lib/lighthouse/benefits\_documents/upload\_status\_updater.rb** when we poll Lighthouse to check the status of document uploads and receive a *FAILED* status.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[EVSS\] Evidence Submission Records SUCCESS**

* **Purpose:** This shows how many records were updated to SUCCESS status in the EvidenceSubmissions table that will be uploaded to EVSS  
* **Logs Included:**  
  * `"EVSS - Updated Evidence Submission Record to` SUCCESS`"`: This is logged by the *update\_evidence\_submission\_for\_success* function in **app/sidekiq/evss/document\_upload.rb** when a document upload has completed to EVSS without error.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Evidence Submission Records PENDING**

* **Purpose:** This shows how many records were updated to PENDING/IN\_PROGRESS *(we refer to this status as pending in the logs, but the actual value in the DB is IN\_PROGRESS)* status in the EvidenceSubmissions table after a document has been uploaded to Lighthouse.  
* **Logs Included:**  
  * `"LH - Updated Evidence Submission Record to PENDING"`: This is logged by the *update\_evidence\_submission\_for\_in\_progress* function in **app/sidekiq/lighthouse/evidence\_submissions/document\_upload.rb** after a document has been successfully sent to Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Evidence Submission Records SUCCESS**

* **Purpose:** This shows how many records were updated to SUCCESS status in the EvidenceSubmissions table after the Lighthouse polling job updates those records to a success status.  
* **Logs Included:**  
  * `"BenefitsDocuments::UploadStatusUpdater" @payload.status:SUCCESS`: This is logged by the *update\_status* function in **lib/lighthouse/benefits\_documents/upload\_status\_updater.rb** after a document has been successfully sent to Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **Evidence Submission Records Deleted**

* **Purpose:** This shows how many records were deleted by our cron job after they’ve been in SUCCESS status for 60 days.  
* **Logs Included:**  
  * `vets_api.statsd.worker_cst_delete_evidence_submission_records_count`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/delete\_evidence\_submission\_records\_job.rb** after an *EvidenceSubmission* record has been successfully deleted from the *EvidenceSubmission* table.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **Evidence Submission Records Deletion Errors**

* **Purpose:** This shows how many records had errors when our cron job tried to delete them from the *EvidenceSubmissions* table.  
* **Logs Included:**  
  * `vets_api.statsd.worker_cst_delete_evidence_submission_records_error`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/delete\_evidence\_submission\_records\_job.rb** after an *EvidenceSubmission* record had an error when the cron job tried to delete it from the *EvidenceSubmission* table.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Pending Documents Polled**

* **Purpose:** This shows how many pending records were polled by our document status polling job.  
* **Logs Included:**  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_polled`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were polled from Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Pending Documents Failed**

* **Purpose:** This shows how many records were marked *FAILED* by our document status polling job.  
* **Logs Included:**  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_marked_failed`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were marked *FAILED* by Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Pending Documents Completed**

* **Purpose:** This shows how many records were marked *SUCCESS* by our document status polling job.  
* **Logs Included:**  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_marked_completed`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were marked *SUCCESS* by Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Documents Failed**

* **Purpose:** This shows the percentage of records that were marked *FAILED* by our document status polling job out of all documents polled.  
* **Logs Included:**  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_marked_failed`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were marked *FAILED* by Lighthouse.  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_polled`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were polled from Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** 0% \- TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Documents Completed**

* **Purpose:** This shows the percentage of records that were marked *SUCCESS* by our document status polling job out of all documents polled.  
* **Logs Included:**  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_marked_completed`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were marked *SUCCESS* by Lighthouse.  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_polled`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when a batch of pending *EvidenceSubmission* records were polled from Lighthouse.  
* **Interpreting Data:**  
  * **Normal Range:** TBD \- 100%  
  * **Warning Threshold:** TBD

### **\[EVSS\] Email sent to VA Notify**

* **Purpose:** This shows the number of emails we sent to VA Notify.  
* **Logs Included:**  
  * `"EVSS::FailureNotification email sent"`: This is logged by the *perform* function in **app/sidekiq/evss/failure\_notification.rb** when an email is sent to VA Notify.  
  * `"EVSS::DocumentUpload va notify failure email queued"`: This is logged by the *record\_email\_send\_success* function in **app/sidekiq/lighthouse/evidence\_submissions/failure\_notification\_email\_job.rb** when a failure email is sent to VA Notify. This is a cron job that sends emails out when *EvidenceSubmission* records *upload\_status* is marked *FAILED* and *va\_notify\_id* and *va\_notify\_date* are nil  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[EVSS\] Email not sent to VA Notify**

* **Purpose:** This shows the number of emails we sent to VA Notify.  
* **Logs Included:**  
  * `"EVSS::FailureNotification email could not be sent"`: This is logged by the *sidekiq\_retries\_exhausted* function in **app/sidekiq/evss/failure\_notification.rb** when this Sidekiq job’s retries are exhausted (meaning it failed to send over and over) and an email is **not** sent to VA Notify.  
  * `"EVSS::FailureNotification email error"`: This is logged by the *perform* function in **app/sidekiq/evss/failure\_notification.rb** when an error occurs during our attempt to send a failure notification email to VA Notify.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[EVSS\] Document Upload Exhaustion Handler Failed**

* **Purpose:** This shows the number of records marked *FAILED* when the document uploader’s Sidekiq retries are exhausted.  
* **Logs Included:**  
  * `"EVSS - Updated Evidence Submission Record to FAILED"`: This is logged by the *sidekiq\_retries\_exhausted* function in **app/sidekiq/evss/document\_upload.rb** when this Sidekiq job’s retries are exhausted (meaning it failed to upload over and over).  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Email sent to VA Notify**

* **Purpose:** This shows the number of emails we sent to VA Notify.  
* **Logs Included:**  
  * `"Lighthouse::FailureNotification email sent"`: This is logged by the *perform* function in **app/sidekiq/lighthouse/failure\_notification.rb** when an email is sent to VA Notify.  
  * `"Lighthouse::EvidenceSubmissions::DocumentUpload va notify failure email queued"`: This is logged by the *record\_email\_send\_success* function in **app/sidekiq/lighthouse/evidence\_submissions/failure\_notification\_email\_job.rb** when a failure email is sent to VA Notify. This is a cron job that sends emails out when *EvidenceSubmission* records *upload\_status* is marked *FAILED* and *va\_notify\_id* and *va\_notify\_date* are nil  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Email not sent to VA Notify**

* **Purpose:** This shows the number of emails we sent to VA Notify.  
* **Logs Included:**  
  * `"Lighthouse::FailureNotification email could not be sent"`: This is logged by the *sidekiq\_retries\_exhausted* function in **app/sidekiq/lighthouse/failure\_notification.rb** when this Sidekiq job’s retries are exhausted (meaning it failed to send over and over) and an email is **not** sent to VA Notify.  
  * `"Lighthouse::FailureNotification email error"`: This is logged by the *perform* function in **app/sidekiq/lighthouse/failure\_notification.rb** when an error occurs during our attempt to send a failure notification email to VA Notify.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Document Upload Exhaustion Handler Failed**

* **Purpose:** This shows the number of records marked *FAILED* when the document uploader’s Sidekiq retries are exhausted.  
* **Logs Included:**  
  * `"LH - Updated Evidence Submission Record to FAILED"`: This is logged by the *sidekiq\_retries\_exhausted* function in **app/sidekiq/lighthouse/evidence\_submissions/document\_upload.rb** when this Sidekiq job’s retries are exhausted (meaning it failed to upload over and over).  
  * `"Lighthouse::EvidenceSubmissions::DocumentUpload exhaustion handler email error"`: This is logged by the *sidekiq\_retries\_exhausted* function in **app/sidekiq/lighthouse/evidence\_submissions/document\_upload.rb** when this Sidekiq job’s retries are exhausted (meaning it failed to upload over and over) and an EvidenceSubmission record couldn’t be updated.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **VA Notify Delivered**

* **Purpose:** This shows the number of emails that VA Notify tells us was delivered via our custom callback class.  
* **Logs Included:**  
  * `vets_api.statsd.callbacks_cst_document_uploads_va_notify_notifications_delivered`: This is logged by the *call* function in **lib/lighthouse/benefits\_documents/va\_notify\_email\_status\_callback.rb** when the **notification.status** is *delivered*.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **VA Notify Temporary Failures**

* **Purpose:** This shows the number of emails that VA Notify tells us had a temporary failure via our custom callback class. This means they will continue to try to send the email.  
* **Logs Included:**  
  * `vets_api.statsd.callbacks_cst_document_uploads_va_notify_notifications_temporary_failure`: This is logged by the *call* function in **lib/lighthouse/benefits\_documents/va\_notify\_email\_status\_callback.rb** when the **notification.status** is *temporary-failure*.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **VA Notify Permanent Failures**

* **Purpose:** This shows the number of emails that VA Notify tells us had a permanent failure via our custom callback class. This means they will not continue to try to send the email.  
* **Logs Included:**  
  * `vets_api.statsd.callbacks_cst_document_uploads_va_notify_notifications_permanent_failure`: This is logged by the *call* function in **lib/lighthouse/benefits\_documents/va\_notify\_email\_status\_callback.rb** when the **notification.status** is *permanent-failure*.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **VA Notify Other Status**

* **Purpose:** This shows the number of emails that VA Notify told our custom callback a status that was not included in their documentation. This could indicate an unhandled error on their end.  
* **Logs Included:**  
  * `vets_api.statsd.callbacks_cst_document_uploads_va_notify_notifications_other`: This is logged by the *call* function in **lib/lighthouse/benefits\_documents/va\_notify\_email\_status\_callback.rb** when the **notification.status** is something other than *delivered,* *permanent-failure, or temporary-failure*.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[EVSS\] Evidence Submission Upload Failures**

* **Purpose:** This shows how many records were updated to FAILED status in the EvidenceSubmissions table that will be uploaded to EVSS  
* **Logs Included:**  
  * `"EVSS - Updated Evidence Submission Record to FAILED"`: This is logged by the *update\_evidence\_submission\_for\_failure* function in **app/sidekiq/evss/document\_upload.rb** when Sidekiq retries exhaust trying to upload a document to EVSS.  
  * `Vets_api.statsd.silent_failure_avoided_no_confirmation service:claim-status* function:evss::documentupload_document_upload_failure*`: This is logged by the *update\_evidence\_submission\_for\_failure* function in **app/sidekiq/evss/document\_upload.rb** when Sidekiq retries exhaust trying to upload a document to EVSS.   
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

### **\[Lighthouse\] Document Upload Exhaustion Handler Failed**

* **Purpose:** This shows the number of records marked *FAILED* when the document uploader’s Sidekiq retries are exhausted.  
* **Logs Included:**  
  * `"LH - Updated Evidence Submission Record to FAILED"`: This is logged by the *sidekiq\_retries\_exhausted* function in **app/sidekiq/lighthouse/evidence\_submissions/document\_upload.rb** when this Sidekiq job’s retries are exhausted (meaning it failed to upload over and over).  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

## **Monitors**

### **\[Lighthouse\] \[Documents Uploads\] High Amount of Documents Marked Failed**

* **Purpose:** This sends alert to our *\#benefits-management-tools-notifications* Slack channel when the number of document uploads marked failed by our Lighthouse polling job exceeds a certain threshold.  
* **Logs Included:**  
  * `vets_api.statsd.worker_lighthouse_cst_document_uploads_pending_documents_marked_failed`: This is logged by the *perform* function in **app/sidekiq/lighthouse/evidence\_submissions/evidence\_submission\_document\_upload\_polling\_job.rb** when Lighthouse reports that the documents have *FAILED* in their system.  
* **Interpreting Data:**  
  * **Normal Range:** TBD  
  * **Warning Threshold:** TBD

