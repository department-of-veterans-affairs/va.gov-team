# IVC Form Resubmissions
**Date:** 6/3/2024
## Options

### 1. Error Message
This option requires the smallest amount of work and it's been discussed before. We just ensure that the messaging when an error occurs is worded well enough so the applicant/veteran knows to try again later avoiding us having to develop any logic to resubmit automatically.

### 2. Email List
This option will only be for the user's that fill in their email on specific forms. But we could then gather the list of emails and trigger a templated email or just send the list to someone who can write them individually. It's the easiest option with little to no LOE but email is optional and only on some forms.

### 3. Backup Bucket
There could be a few scenarios where form(s) could fail to upload to Pega's S3 bucket. AWS could have outages across the country but this is extremely rare more likely than not, Pega altered some permissions or keys without knowing how it would affect our connection therefore throwing a 500 error. One solution could be to utilize a VA bucket as a haven for files that fail to go to Pega. So if the code returns a 500 for whatever reason it triggers the file(s) failing to be sent to our own bucket for later resubmission once the issue has been resolved. This has a medium LOE (Level of effort) if we still have to handle metadata, if not low.

### 4. Meta Storage
If we don't want to take the backup bucket route we could store the entire JSON into a meta column in the database. This would require storing every piece of PII imaginable. Then we would have to write a Sidekiq job of sorts that would loop over the flags DB rows and generate a PDF for resubmission. However, with this approach, it will be difficult with supporting docs as they are uploaded by the user and not generated so they would have to somehow resubmit those files. This would be high level of LOE

For discussion of options for this spike: https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/83319
