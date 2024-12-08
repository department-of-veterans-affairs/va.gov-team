# RFC: Benefits Evidence and Ancillary Documents Handling and Technical Details

- Date: 2024-09-23
- Related Issue: 

## Background
Evidence and ancillary forms filled out on veterans/users behalf, are collected, generated, stored, and sent in many different ways across products/forms.

For a better user experience, and for the sake of less technical complexity, some amount of technical and architectural decisions should be agreed upon and implemented across all products and forms. Ideally, where possible, sharing code to reduce complexity and drift. But at the very least should operate similarly. This RFC aims to describe and gain concensus on the full evidence and ancillary form lifecycle. 

## Definitions
Evidence: Any document uploaded by a user, that vets-api is responisble for transmitting down- or up- stream. Examples could include a medical document, buddy statement, scanned-in filled-out form, digitally filled-out form, and other various documents. 

Ancillary Document: Any document that has an official VA designated form number, that we fill-out and transmit somewhere, based on information the end-user enters into the frontend. Depending on the form/situation, the end-user may or may not know they filled this form out, or that one was filled out on their behalf. Examples include form 21-4142, form 21-0781, and other forms that we take information and stamp onto a PDF to transmit.

Documents: May be used to refer to both evidence and ancillary documents collectivly.


## Motivation

* Reduced code complexity
* Align on shared strategy
* Consistent fronend experience for the end users
* Elimination of silent failure (through status polling)


## Design

### Frontend Accepting of Benefits documents
#### Validation
Validation should be kept to a minimum on the frontend only to the most obvious issues, such as:
* Filesize not exceeding X
* Document extension supported
* Document not password protected (or password collected if so, since we NEED to check this here)

All other checks should be done by the system downstream that is ultimately responsible for accepting the file or not. We should not try to maintain separate lists of requirements that can get out of sync. We should, after initial validation above, check the file against a validation endpoint for the downstream system. 

You may think, "why not just actually upload it here and rely on the error checking there, instead of uploading twice (once to validate and once to upload)". In places where this is possible, this should be done, however many evidence documents cannot be uploaded without first knowing a claim ID which must be sent with the document to be uploaded, which is not yet known at document upload time, and only later known after initial form submission. 

Single source of truth for document requirements eliminates or greatly reduces the chance of us accepting a document, and then not being able to send it somewhere. We also can (if desired) reject the file and report the reason why, live on the frontend to the end user, if it is an actionable error. 
We will need to decide what to do in case the validation endpoint is not reachable, between taking it and hope it works later, or disallow uploads at that time since we cannot ensure it will succeed. 

CarrierWave should be used to upload evidence to AWS S3, and should also include virus scanning. Example [here.](https://github.com/department-of-veterans-affairs/vets-api/blob/f9b931187f2525bf3c5187b37731286e9d1b6d16/app/uploaders/form1010cg/poa_uploader.rb) 

#### Document Storage Location
The document has to live somewhere when it is uploaded. For some amount of time this is usually the filesystem of the vets-api server. The document can be there temporarily but all efforts should be made for it to upload to S3 and reference to it be kept in the DB so it can be pulled down for use later. The filesystem is not reliable enough to be used as a store for user submitted files. It goes away on pod reboots and deploys, which could cause any evidence stored on the filesystem to be lost.  


### Transmittal of Benefits Documents

#### Authenicated/LOA3 User Document Uploads
[Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs?version=current) is preferred as it directly puts the documents into the system(s) of record (VBMS/BGS).

[Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs?version=current) goes to Central Mail, similar to if something was mailed in or faxed, it has more human and system touch-points and therefore is slower and more prone to error(s). 

For some documents, this is required, such as 21-4142, since it requires manual action be done by a person. This is also appropriate for documents which fail to go the primary/Documents API path (due to error, data issues/discrepancies, downtimes, network issues, etc)


#### Unauthenticated User Document Uploads
As of now we are not sure the unauthenticated document upload should be any different that authenitcated. We still have a duty to ensure that the document gets where it was going, and potentially a duty to notify the uploader if we cannot.


#### Other considerations
All documents that cannot go their primary path (Documents API) should have a backup path/failsafe by attempting submission via the benefits intake API, unless your primary path is the benefits API or something that uses the benefits API downstream.

Any document that exhausts all sending options, requires action on the systems part to notify the user of this failure, prompting the user to reattempt some other way.

Monitoring of each and every total-failure/exhaustion event should be setup, with investigation and remediation of the error casuing the failure to be a top priority. Remediation of the CAUSE of the error is to prevent the same error from affecting future users, this is not the same as resending or reattempting after failure, since that will not be acceptable after failure emails start going out, as it will cause duplicates to be sent. (TBD on if this is true or not, duplicates may be better than nothing if the user does not act on the email to reattempt, this is a VA business choice).


### Post-transmittal validation and status checking

Lighthouse only supports async acceptance of documents, given that, as a steward of the info we accept, we must rely on polling (or an event bus or webhook, if one comes into existence) to keep track of what we send to the downstream systems. 

Failure should be defined by either 
* Inability to get to the downstream system: refusal (or inability due to an error) to accept the file from the downstream service (Lighthouse in most cases here). In this case, we can either choose to immediately determine that this failure cannot be resolved and move onto the next step in the process, or we can retry some number of times in an attempt to resubmit. 
* Downstream Issues: Acceptance by 1 or more downstream system, but the file erroring, or not reaching the system of record, in some predefined amount of time.

Exhaustion can be determined by systematic polling and maintaining of statuses via a state system/machine, or database records.  
We should maintain the state of every document we send via polling, until it reaches a final state. 
We should poll until the state represents that the document made it into the system of record.
After some predetermined amount of time, we should assume if something has not made it to the final state/system, we should treat it as a failure. And move to the next step in the process (backup process if in primary path, email user notification if in the backup process). This duration and what action to take should be defined by the VA stakeholders, and may be different per form, evidencetype, etc.

Every consequential step of every process should log something (may need further defined)

#### Post failure actions
This RFC is only to define the process of accepting evidence from a user, storing it, accounting for the status of it making it where it needs to, and enabling the VA stakeholders to define an action to take upon failure. The exact action is not yet known, and it is not yet clear if it will be the same across all forms. Some examples of actions that **_could_** occur once failure is determined via polling or time passing: 

* Send an email to the user
* Send some other thing in if possible ("hey this user tried to upload filename.jpg but it failed" -> eFolder)
* Put a flash on the users account
* Something else



## Risks
##### Overwhelming Lighthouse API by making too many polling requests.
This risk has been mitigated by ensuring both sides support bulk requests for the vets-api backend system to make single bulk requests for information without making too many requests. For example, we may make a request like: 

```
request_lighthouse_evidence_status(id: LighthouseDocumentUploads.pending.pluck(:lighthouse_uuids))
```

Lighthouse's [Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs?version=current) supports this already via their `/uploads/status` endpoint. 


## Alternatives

#### Overall comment
The priority was to get to a working way to determine end-to-end accounting of claims/evidence as soon as possible. Polling was selected by the VA as the quickest practical path to acheive that. 

##### Event Bus (kafka, pub/sub topic model)
Event bus would be a more ideal solution. Polling is often messy or sloppy and not great from an engineering standpoint. However, since most APIs already support a status or introspection endpoint, and also since most APIs are not able to support/prioritize event bus support, this was ruled out as not feasible, even though it is a better solution technically. 

##### Webhooks 
Webhooks would be a more ideal solution. Polling is often messy or sloppy and not great from an engineering standpoint. However, since most APIs already support a status or introspection endpoint, and also since most APIs are not able to support/prioritize adding webhook/callback support, this was ruled out as not feasible, even though it is a better solution technically. It would also be a slightly higher level of effort as callback endpoints would need made in vets-api, but we do not belive that to be the major considerationa s to why this was not selected. 

#### Reliance on Emails will cause people to not investigate errors causing more failures over time instead of less
If we use the failure emails as a crutch (IE "oh we can just investgate that later, the user got an email and can handle it") we may inadvertently shift more burden to the end users, and put less priority and effort into bug fixes and investigation into failures. 

This risk can be mitigated by monitoring and alerting, and someone ensuring the monitors and alerts are actioned and given priority. 


## Appendix/Additional info
### Various existing polling stuff
* 526 happy path pdf to LH generation upload tracking (in prod)
https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/poll_form526_pdf.rb
* 526 backup path polling implementation (in prod)
https://github.com/department-of-veterans-affairs/vets-api/blob/aaceb9279c03cd5e1f6903cf57e0b6846a8f8ccc/app/sidekiq/form526_status_polling_job.rb#L5
* 526 evidence / ancillary forms polling (in development)
https://github.com/department-of-veterans-affairs/vets-api/blob/aaceb9279c03cd5e1f6903cf57e0b6846a8f8ccc/app/sidekiq/lighthouseform526_document_upload_polling_job.rb
* Decision review evidence and submission polling
https://github.com/department-of-veterans-affairs/vets-api/pull/18421/files
* Burial/Pensions/Simple forms (just submissions, no evidence yet)
https://github.com/department-of-veterans-affairs/vets-api/blob/aaceb9279c03cd5e1f6903cf57e0b6846a8f8ccc/modules/pensions/app/sidekiq/pensions/pension_benefit_intake_job.rb

