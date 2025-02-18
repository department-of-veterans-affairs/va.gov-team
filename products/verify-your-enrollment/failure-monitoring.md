# VYE Failure Monitoring

One thing that we would like to avoid with any VFS is a silent failure. That is, an error to which the veteran is not alerted. This document outlines the main actions and events that occur in the VYE module, and highlights the possible errors that might arise. By systematically enumerating these cases, we can hopefully add sufficient monitoring (e.g. Datadog) to ensure that any silent errors are caught and resolved.

Due to the nature of how the VYE module interacts with external systems (e.g. BDN), there is a fair amount of asynchronous processing. These asynchronous tasks need extra attention, since a failure will not be immediately visible to a veteran using the website. For completeness, we'll go through all synchronous and asynchronous events.

## Synchronous Events

These generally occur when a veteran is using the VA website and submits a form or clicks a button or similar.

### User Submits an Address Change

| | |
| --- | --- |
| Controller | `Vye::V1::AddressChangesController` |
| BDN/DGIB | BDN users only |
| Failure Mode(s) | `AddressChange` record not created (e.g. invalid params) |
| Silent? | No, user will see error/alert message on front-end |
| Monitoring | Lookup in Datadog by controller/service |

### User Submits an Direct Deposit Change

| | |
| --- | --- |
| Controller | `Vye::V1::DirectDepositChangesController` |
| BDN/DGIB | BDN users only |
| Failure Mode(s) | `DirectDepositChange` record not created (e.g. invalid params) |
| Silent? | No, user will see error/alert message on front-end |
| Monitoring | Lookup in Datadog by controller/service |

### User Submits an Award Verification

| | |
| --- | --- |
| Controller | `Vye::V1::VerificationsController` and `Vye::V1::DgibVerificationsController` |
| BDN/DGIB | BDN and DGIB users |
| Failure Mode(s) | `Verification` record not created/updated (e.g. bad cert-through date) |
| Silent? | No, user will see error/alert message on front-end |
| Monitoring | Lookup in Datadog by controller/service |

## Asynchronous Events

A series of scheduled sidekiq jobs are used to synchronize data between BDN, TIMS, and `vets-api`.

### MidnightRun::IngressBdn

This job is resposible for downloading the latest `WAVE.txt` file and ingesting the records into a new `BdnClone`.

| Failure Mode |  |
| --- | --- |
| Fail to download WAVE.txt | Would result in a failed Sidekiq that could be monitored via Datadog or Sidekiq dashboard. Also, can search for logs that start with `Vye::MidnightRun::IngressBdn` |
| UserProfile info conflict | Occurs in `Vye::LoadData#load_profile`. Can be tracked in Datadog by looking for log lines of the form `UserProfile(%<user_profile_id>u) updated %<changed_attributes>p from BDN feed line: %<locator>s'` |
| Fail to load user record from WAVE.txt | This could happen in `Vye::LoadData` and will be caught as an exception. To investigate, look at Sentry, or logs of the form "Loading data failed:...", or StatsD metrics of `vye.load_data.failure.bdn_feed` |

### MidnightRun::IngressTims

This job is resposible for downloading the latest `tims32towave.txt` file and ingesting any `PendingDocument` records.

| Failure Mode |  |
| --- | --- |
| Fail to download tims32towave.txt | Would result in a failed Sidekiq that could be monitored via Datadog or Sidekiq dashboard. Also, can search for logs that start with `Vye::MidnightRun::IngressTims` |
| Fail to load user record from tims32towave.txt | This could happen in `Vye::LoadData` and will be caught as an exception. To investigate, look at Sentry, or logs of the form "Loading data failed:...", or StatsD metrics of `vye.load_data.failure.tims_feed` |

### DawnDash

This job is responsible for activating the latest `BdnClone` and  uploading the latest `AddressChange`, `DirectDepositChange`, and `Verification` record to S3.

| Failure Mode |  |
| --- | --- |
| Failed to find ingested `BdnClone` to activate | Will raise an `BndCloneNotFound` error and result in a failed job. Monitor with either Datadog or Sidekiq dashboard. Other activation stuff can be tracked by searching for logs start with "Vye::BdnClone:" |
| Failed to upload report files to S3 | This should result in an exception being raised and killing the job. So it can be tracked via the Sidekiq dashboard or Datadog. Also, searching for logs that start with "Vye::BatchTransfer::Chunk#upload" will give more insight. |

### SundownSweep

This job is responsible for cleaning up old/unneeded `BdnClone`s, deleting old files from S3, and purging stale verifications. These are mostly maintainance tasks to keep the size of database tables and S3 buckets in check. There is no real 'failure' mode as far as the user is concerned since the data in question has already been processed. Still, to monitor the progress of there tasks, search for the logs that begin with "Vye::SundownSweep::ClearDeactivatedBdns", "Vye::SundownSweep::DeleteProcessedS3Files", and "Vye::SundownSweep::PurgeStaleVerifications" respectively.