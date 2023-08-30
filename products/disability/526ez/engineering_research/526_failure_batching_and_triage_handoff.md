# 526 Failure re-try batching and triage handoff

## Purpose

A collection of key take aways from the knowledge transfer between Kyle Soskin
and Sam Stuckey, specificaly relevant to the work of batch retrying historical
failed 526 submissions, as well as ongoing triage.

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
failures quitely piled up where no one was looking, leaving veterans in the
dark about the status of their claims.  This problem is coliquially known to the team (now) as the "black hole" problem, as
these submissions had effectively vanished.  See the afforementioned tickets for more context
on the bug and the initial strategy to address it.

For these historical failures, after de-duping the original 150k (Some vets had
tried multiple submissions), Kyle Soskin from veteran-benefits-team-1 was tasked with
a multi faceted project to begin correcting this problem. A major part of this
work has been enabling the VBA to manually resubmit these forms. Our part of this process (or more specificially, Kyle's part until now)
was / is to run a time consuming and semi-manual process wherin we use
our existing code (via a production rails console) to generate PDFs which are in turn sent in
bacthes to VBA for re-submission (how they actually leverage these files towards
resubmitting is a black box and beyond the scope of our work.)

This process requires enhanced security credentials, 
knowledge of our existing available infrastructure for generating these PDFs,
and some proprietery scripting by kyle. Until now, the onus for this work, as
well as related or adjacent triage, was falling soley on him due to the siloing
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
3. Import the IDs from step 1 into the console environment.
4. Enque the jobs using Sidekiq and / or existing application objects.
5. Pull a list of successfully uploaded filenames from the S3 bucket
6. generate signed links to these batches in S3. This allows our VBA counterparts to easily pull these batched fils

**NOTE:**
Downstream services are
- EVSS 526 PDF document generation
    - `<evss url>/rest/form526/v2/getPDF`
- Lighthouse Backup submission endpoint
    - `asdf`

TODO: break down each of these steps with code

### 1. Create a list of submission ids to process
At the moment, this is simply taking sub-sections of the yet to be unprocessed
submission failures from the original ~40k.  After an itteration, we are typically left with some failures which we
may included in a subsequent retry list.

### 2. Confirm with EVSS that we are ok to run this job
This is important and could go anywhwere before step 4. A slack message in the
appropriate channel should do. We will be hitting EVSS over and over to generate
our 526 PDFs, and if we hit their rate limit we could not only break our job,
but bring down our production app!

### 3. Login to a production connected Rails Console
There are two options for doing this, with the former being the "right" way, and the latter being the "godmode" way

#### ArgoCD - the right way

This is the more universally available way to do this. To login to an ArgoCD terminal
   - request access by following the [steps here](https://depo-platform-documentation.scrollhelp.site/developer-docs/vets-api-on-eks#VetsAPIonEKS-Access)
   - [go to the web interface and use the available shell](https://argocd.vfs.va.gov/applications/vets-api-prod)
   
#### AWS CLI - god mode
This option requries access to an intermediary server that run your rails console.  This option is deprecated but noted here for posterity, as it is the method primarily used up till now.  The intermediary server that runs the Bash / Rails terminals in this option are hosted on an old EC2 instance that predates our Kubernetees deployment.  These old servers can only be deployed by VA dev ops folk and are not intended to be accessed by us. However, under the righ circumstances we may be given access, as in this case.

   - request AWS production access via [these steps]
   - [Follow these steps to tunnel into a production server](https://depo-platform-documentation.scrollhelp.site/developer-docs/aws-shell-access#AWSShellAccess-CLIUsage) or use the below TL;DR steps

[TODO] - proof this:
**TL;DR**
- install dependencies
    - `brew install jq`
    - `brew install awscli`
    - Docker
- Start Docker in the background (the subsequent steps will use it)
- pull 'devops' repo  
    - `git clone https://github.com/department-of-veterans-affairs/devops`
- authenticate your machine using the devops script
    `source devops/utilities/issue_mfa.sh AWS_USERNAME AWS_2FA_CODE`
- tunnel into prod server
    - `devops/utilities/ssm.sh vets-api-server prod`
    - you will most likely be presented with 1 or more servers to choose.
      Choose the last one on the list, as it is most likely the one that is
      working.  You may have to try others, since this is not a recommended or
      actively maintained workflow
    - `sudo su` become super user
    - `docker exec -it vets-api bash`
- start your rails console
    - `bin/rails c`

### 4. Import the IDs from step 1
If you are using ArgoCD, you will need to copy paste them in.  ArgoCD has a
paste limit that at the time of writting this is ~200 lines.  

If you are using an AWS CLI interface, you can pull the IDs (step 1) directly into a text file, which you can then load using `File.load(my_ids_file.text).lines.map(&:chomp)` or something similar.

### 5. Enqueue the jobs using application logic

There are two ways to do this

#### Use Sidekiq

WARNING: using sidekiq allows for throttling, however EVSS has a concurrency limit of 64 threads.  If we are not careful, between our script and 
normally running production requests, we could hit this limit with catastrophic resuslts (EVSS goes down in production).

This work can be broken into 3 parts
1. Create a sidekiq batch
2. Loop over the submission Ids
3. Enqueue a Job (as a part of the batch) for each ID.  That code looks something like this

```
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

This code will handle the PDF generation, ziping, and upload of each new
submission.  On the VBA end, they will download this file (using the links we
will generate in step 6) and run their manual process on it.

Additionally, by creating a sidekiq batch we are able to view the progress of
this work in real time at https://api.va.gov/sidekiq/batches 
    NOTE: viewing sidekiq requires special access.  If you do not have access [follow the steps here to get it.](https://depo-platform-documentation.scrollhelp.site/developer-docs/sidekiq-ui-access)

Or...

#### Run the jobs one at a time, without Sidekiq

WARNING: This process uses the servers /tmp file directory.  Sidekiq will automagically clean up these temp files 
after each run.  **However** if you are running the jobs inline (this option) you will need to manually clear out your temp files.  Note that if your temp files are being created inside of the service you are running, you may have to monkey patch it in order to ensure that `/tmp` files are cleared out after each itteration.

An example of how you can do this would be
```
# Copy pasted from lib/sidekiq/form526_backup_submission_process/processor.rb, but updated to unlink files 
class NonBreakeredProcessor < Processor
  def get_form526_pdf
    headers = submission.auth_headers
    submission_create_date = submission.created_at.iso8601
    form_json = JSON.parse(submission.form_json)[FORM_526]
    form_json[FORM_526]['claimDate'] ||= submission_create_date
    form_json[FORM_526]['applicationExpirationDate'] = 365.days.from_now.iso8601 if @ignore_expiration
    resp = get_from_non_breakered_service(headers, form_json.to_json)
    b64_enc_body = resp.body['pdf']
    content = Base64.decode64(b64_enc_body)
    file = write_to_tmp_file(content)
    docs << {
      type: FORM_526_DOC_TYPE,
      file:
    }
    # THIS IS THE BIT WE ARE ADDING TO CLEAN UP OUR TEMP FILES!!!
    file.unlink   
  end
end

def get_from_non_breakered_service(headers, form_json)
  EVSS::DisabilityCompensationForm::NonBreakeredService.new(headers).get_form526(form_json)
end

class NonBreakeredForm526BackgroundLoader
  extend ActiveSupport::Concern
  include Sidekiq::Worker
  sidekiq_options retry: false
  def perform(id)
    NonBreakeredProcessor.new(id, get_upload_location_on_instantiation: false,
                                  ignore_expiration: true).upload_pdf_submission_to_s3
  end
end

# HERE IS WHERE WE RUN THE JOBS ONE AT A TIME
ids.each do |id|
    Sidekiq::Form526BackupSubmissionProcess::NonBreakeredForm526BackgroundLoader.new(id).perform
end
```

### 6. Pull a list of filenames from s3

Regaurdless of which method you used in step 5, you will now need to get a list
of S3 file names and send them to VBS.

This command, run locally with the appropriate AWS access should pull a list of
all the files in `$bucket` (where bucket where we uploaded the files in step 3.

Note that `my_local_file.txt` is an empty file, the name is arbitrary as long as
it matches with step 6


```
aws s3 ls $bucket > my_local_file.txt
```

If you do not have the appropriate AWS access credentials, [follow the steps here to get it](https://depo-platform-documentation.scrollhelp.site/developer-docs/aws-shell-access)

### 7. Generate signed links for each S3 upload

This allows our VBA counterparts to easily pull these batched fils.  We are currently using the following script;

```
concurency=24
count=0

function getaws {
  echo -n "."
  URL=$(aws s3 presign s3://dsva-vagov-prod-claims-and-appeals/$1.zip --expires-in 86400)
  echo "$1,\"${URL}\"" >> out2.txt
}

for ID in $(cat my_files_from_the_last_step.txt); do 
  # if [ ${ID} -lt 712710 ]; then
  #   continue
  # fi
  count=$((count+1))
  getaws $ID &
  if [ $count -eq $concurency ]; then
    wait
    count=0
  fi  
done

```

Note the reference to the text document generated (list of uploads) from step 5.
The name used doesn't matter, as long as it matches between steps 5 and 6.

## Suggested Improvements

[TODO]
- automate this
- remove the commandline
- monitoring?

