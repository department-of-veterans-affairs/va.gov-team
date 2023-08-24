# 526 Failure re-try batching and triage handoff

## Purpose

A collection of key take aways from the knowledge transfer between Kyle Soskin
and Sam Stuckey, specificaly relevant to the work of batch retrying historical
failed 526 submissions, as well as on going triage.

## Context

### The Work

The following detail what happened, how it was being addressed, and why we are now transfering this work to a new team
- [Historical Epic](https://app.zenhub.com/workspaces/benefits-team-1-6138d7b57a2631001a4b7562/issues/gh/department-of-veterans-affairs/va.gov-team/44994)
- [Transitional Ticket](https://app.zenhub.com/workspaces/benefits-team-1-6138d7b57a2631001a4b7562/issues/gh/department-of-veterans-affairs/va.gov-team/62593)

### TL;DR
In mid 2022 it was discovered that we had roughly ~150k failed user submissions
in our 526 form that had never been addressed.  These failures had presented to
end users as non-failures with a message to the effect of "We cqn't submit this
now, but we will keep trying.  Due to a lack of cohesive monitoring these
failures quitely piled up where no one was looking, leaving vetterans in the
dark about the status of their claims.  THis problem is coliquially known to the team (now) as the "black hole" problem, as
these submissions had effectively vanished.  See the afforementioned tickets for more context
on the bug and the initial strategy to address it.

For these historical failures, after de-duping the original 150k (Some vets had
tried multiple submissions), Kyle Soskin from veteran-benefits-team-1 was tasked with
a multi faceted project to begin correcting this problem. A major part of this
work has been enabling the VBA to manually resubmit these forms. Our part of this process (or more specificially, Kyle's part until now)
was / is to run a time consuming and semi-manual process wherin we use
 our existing code (via a production rails console) to generate PDFs which are in turn sent in
bacthes to VBA for re-submission (how they actually leverage these files towards
resubmitting is a black box and beyond the scope of our work.  
This process requires enhanced security credentials, 
knowledge of our existing available infrastructure for generating these PDFs,
and some proprietery scripting by kyle. Until now, the onus for this work, as
well as related or adjacent triage, was falling soly on him due to the siloing
of this knowledge.

The purpouse of this knowledge transfer is to
1. Allow Kyle to be moved off on to other work, and Sam to pick up where he left
   off.
2. Allow Sam the insight needed to document and potentially automate this
   process.
3. Ultimately De-silo the knowledge and hopefully remove the need for dangrous production access

## The Batch Resbumission Flow

This 'batching' work described above, roughly entails:
1. getting / building a list of submission IDs to target for the batch
2. Login to a Production connected Rails Console
3. Import the IDs from step 1.
4. Enque the jobs using Sidekiq and existing application objects
5. Pull a list of successfully uploaded filenames from the S3 bucket
6. generate signed links to these batches in S3
This allows our VBA counterparts to easily pull these batched fils

**NOTE:**
Downstream services are
- EVSS 526 PDF document generation
    - `<evss url>/rest/form526/v2/getPDF`
- Lighthouse Backup submission endpoint
    - `asdf`

TODO: break down each of these steps with code

### 1. Create a list of submission ids to process
At the moment, this is simply taking a subsection of the yet to be unprocessed
submission failures from the original ~40k

### 2. Confirm with EVSS that we are ok to run this job
This is important and could go anywhwere before step 4. A slack message in the
appropriate channel should do. We will be hitting EVSS over and over to generate
our 526 PDFs, and if we hit their rate limit we could not only break our job,
but bring down our production app!

### 3. Login to a production connected Rails Console
There are currently two options for doing this

1. ArgoCD.  This is the more universally available way to do this. To login to an ArgoCD terminal
   a. request access by following the steps here

2. AWS CLI.  This option requries access to an intermediary server that run your
   rails console.  This option is deprecated but noted here for posterity, as it
   is the method primarily used up till now

   a.  [Ensure you have AWS CLI access following the steps here](https://depo-platform-documentation.scrollhelp.site/developer-docs/aws-shell-access#AWSShellAccess-CLIUsage)
   b. [wipn8923] - TODO: get this worked out with Kyle


### 4. Import the IDs from step 1
If you are using ArgoCD, you will need to copy paste them in.  ArgoCD has a
paste limit that at the time of writting this is ~200 lines.  

If you are using the AWS CLI you can simply load them in from a local text file
using something like the following:

```
```

### 5. Enqueue the jobs using application logic

This work can be broken into 3 parts
1. Create a sidekiq batch
2. Loop over the submission Ids
3. Enqueue a Job (as a part of the batch) for each ID.  That code looks like this

```
File.read('my_incomming_job_ids.txt').lines.map(&:chomp)

```

This code will handle the PDF generation, ziping, and upload of each new
submission.  On the VBA end, they will download this file (using the links we
will generate in step 6) and run their manual process on it.

Additionally, by creating a sidekiq batch we are able to view the progress of
this work in real time at https://api.va.gov/sidekiq/batches 
    NOTE: viewing sidekiq requires special access.  If you do not have access [follow the steps here to get it.](https://depo-platform-documentation.scrollhelp.site/developer-docs/sidekiq-ui-access)


### 4. Pull a list of filenames from s3

This command, run locally with the appropriate AWS access should pull a list of
all the files in `$bucket` (where bucket where we uploaded the files in step 3.

Note that `my_local_file.txt` is an empty file, the name is arbitrary as long as
it matches with step 6


```
aws s3 ls $bucket > my_local_file.txt
```

If you do not have the appropriate AWS access credentials, [follow the steps here to get it](https://depo-platform-documentation.scrollhelp.site/developer-docs/aws-shell-access)

### 5. Generate signed links for each S3 upload

This allows our VBA counterparts to easily pull these batched fils.  We are currently using the following script;

```
# read the ids into an array
ids = File.read('my_local_file.txt').lines.map(&:chomp)
# create a Sidekiq::Batch, which gives us some special organizational tools in the sidekiq UI
batch = Sidekiq::Batch.new
# define our throttling.  If we don't, we will bring down EVSS / Lighthouse so don't skip this step.  
# Even with throttling, we still want to be sure we have confirmed that we are performing our job at a good time of week / day
throttle = Sidekiq::Limiter.concurrent('Form526BackupSubmission', 32, wait_timeout: 120, lock_timeout: 60)
ids.each do |id|
    batch.jobs do
      throttle.within_limit do
          Sidekiq::Form526BackupSubmissionProcess::NonBreakeredForm526BackgroundLoader.perform_async(id)
      end
    end
end
```

Note the reference to the text document generated (list of uploads) from step 5.
The name used doesn't matter, as long as it matches between steps 5 and 6.

