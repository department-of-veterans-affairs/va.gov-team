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

The purpose of this knowledge transfer is to
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
- Generate AWS credentials
   - Get your creds from AWS
      - [Login to the AWS IAM dashboard](https://console.amazonaws-us-gov.com/iamv2/home?region=us-gov-west-1#/home)
      - Visit the Users tab in the sidebar
         - <img width="673" alt="Screenshot 2023-09-06 at 2 02 43 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/3119948f-c484-4d67-b0e6-d578910003c5">
      - Search for your User
         - <img width="700" alt="Screenshot 2023-09-06 at 2 03 00 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/c4bf5813-232b-4cdd-a769-7f707f8f7712">
      - Find the security credentials tab in the middle of the page
         - <img width="778" alt="Screenshot 2023-09-06 at 2 04 34 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/a40e7a3b-b70e-43f8-a235-eb7ddd59e69b">
      - Create an access key.  This will generate an AWS access key and an AWS secret key.  Store these somewhere safe (not in code)
          - <img width="724" alt="Screenshot 2023-09-06 at 2 05 16 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/37de7a72-5899-4965-a6bc-07f64aa12ccb">
    - Set up your local AWS credentials
      - Run `aws configure` and enter the credentials you just generated for the first two values.
         - <img width="442" alt="Screenshot 2023-09-06 at 2 06 34 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/47b903c8-d505-4be0-b401-5cb2f357e617">
      - For the third value, `region` enter `us-gov-west-1` as shown above
      - No value is required for the fourth value (`Default output format`) so you can hit enter.
      - You should see a message in your terminal to the effect of "Credentials will expire in 12 hours"   
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
    - `bin/rails c --sandbox`
    - NOTE: the `--sandbox` flag should be used if you are not explicitly attempting to modify local data, E.G. if you are just enqueuing jobs to third party services, and you are ok with READ ONLY on the local DB, then `--sandbox` is what you want.  If you are not using `--Sandbox`, then you are doing something terribly dangerous and should probably yell at your manager.

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
ids = File.read('/tmp/batch3_ids.txt').lines.map(&:chomp)
c = ids.size
i = 0
ids.each do |id| 
    begin
        puts "#{id} ... #{i+=1} / #{c}"
        pp Sidekiq::Form526BackupSubmissionProcess::NonBreakeredProcessor.new(id, get_upload_location_on_instantiation: false, ignore_expiration: true).upload_pdf_submission_to_s3
    rescue => e
      pp e
    end
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

Or, to get just the ids, you can use
```
aws s3 ls s3://dsva-vagov-prod-claims-and-appeals/ | awk '{print $NF}' | sort -n  | sed 's/.zip//g' > load3/in_s3.txt
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

### 8. Parse errors
We now have a list of failures:
```
[85750, "vagov-b3012465-f498-4ab6-935a-de0283cef9b9"],
 [86898, "vagov-b607140a-b469-461a-830e-1c2ae7d7ea49"],
 [87840, "vagov-b098b273-08e1-4706-87bd-f4092a6220ad"],
 [97878, "vagov-e3c47c26-1591-4add-9c39-1075a4e3daa9"],
 [97918, "vagov-505f191a-783e-4a3e-86dc-8333f4d359e9"],
 [99117, "vagov-3a69083f-7d6b-460c-9fd3-1cdfb572fcf4"],
 [104052, "vagov-e217772a-6cf6-4d38-acfb-f009666fbbcd"],
 [107762, "vagov-b4ae86b5-6f08-4e40-98b1-6acf928b264b"],
 [108115, "vagov-01b0412d-45a5-49c6-8803-fc5ef118ecb6"],
 [108930, "vagov-f95d97a9-3b9b-4462-b051-30147cd2edc3"],
 [109582, "vagov-cc83c3bd-1947-42e6-9659-4c04a3c9ca25"],
 [110571, "vagov-6749fbaf-043e-4c3a-8dc8-b4c3591f4b84"],
 [110644, "vagov-43be57c3-06de-4b74-bc66-00db1ba31176"],
 [112330, "vagov-946ec550-25cd-4fe6-9d88-45d2063b2a32"],
 [113964, "vagov-7aa23aeb-c3c5-4517-a5d9-76819cccd105"],
 [114308, "vagov-63fa14de-a893-4557-9a0c-f4c708d9a84a"],
 [116155, "vagov-2fce09b7-9fdd-4edb-ae1e-2f45d390b36e"],
 [117804, "vagov-79b6bf3b-e6b5-42c5-a795-7b6144542c35"],
 [119929, "vagov-8afe114f-c941-42cb-9fe7-d437b4f251f5"],
 [129288, "vagov-6503db8c-abb4-4289-8856-ececdafd417d"],
 [130002, "vagov-13e38ac2-b2a9-4142-a912-d635e5e62d2b"],
 [130644, "vagov-08a3d6ec-a231-4775-ae6c-8610463fd1f3"],
 [131364, "vagov-cd07508e-b6fd-4f78-ade0-644e0715e79f"],
 [134070, "vagov-26a22943-5565-499c-9dc5-fe986a7bb7d9"],
 [139410, "vagov-c8c78013-6b3b-45e4-8887-1127974bebcb"],
 [142045, "vagov-d621cf24-64c3-4cd5-9dbb-194ceac95255"],
 [143295, "vagov-caebf905-e158-46da-809e-da565df0d9b2"],
 [146806, "vagov-790531ca-82c0-4d52-a705-d5249671cbd4"],
 [150360, "vagov-2a76bd72-e5bf-43d0-a95b-b77db3be2521"],
 [180309, "vagov-2629f032-318e-46e0-85da-c87efa2e2f26"],
 [195586, "vagov-6661e723-bac8-47e3-b34d-29a96cd5cc1f"],
 [214755, "vagov-df88255f-d9be-44e1-89ce-8e3062fff9c4"],
 [249854, "vagov-e1977058-cc00-40f0-990c-31ffc84799ec"],
 [254224, "vagov-7a239075-bff6-4a5d-ab11-6589e18ccb86"],
 [279841, "vagov-2bcb022c-295b-4092-b424-274c0ab17c79"],
 [306036, "vagov-94f0f6db-b4c2-4d63-b59a-eba241a3daf7"],
 [317054, "vagov-389df609-547e-43a8-b047-32456ad035fd"],
 [357143, "vagov-b653a042-e221-4696-b206-96152a8a3e1f"],
 [358557, "vagov-40bdf62a-95f2-451c-82f3-00a60be56e1a"],
 [359814, "vagov-c2fef899-7269-4370-9df7-6c6b10bcff82"],
 [381731, "vagov-a5257d72-5131-4546-af37-97d678ac479c"],
 [390698, "vagov-27e26f8f-4c93-4a4e-a78a-6fec9eef1ef7"],
 [399679, "vagov-646ffcae-ed15-43ef-adda-cc97cc2d2d0a"],
 [436270, "vagov-b08e0a5c-893d-49cf-b6ca-b02cd71bac77"],
 [439273, "vagov-17aa3092-c900-4d4b-8b39-041db09e33dd"],
 [474157, "vagov-30ed5b49-5cde-4a1c-86e5-80015d03efe0"],
 [519584, "vagov-2e143e9c-18ab-4647-8830-ba2d0634bd7c"],
 [606940, "vagov-b4beb5d1-2104-4c60-914d-959df8192247"],
 [608364, "vagov-fc965208-f21f-40c7-9c7a-14c84661094a"],
 [693418, "vagov-90d1a683-ff7d-4afc-ace1-cb8db2a40cfd"],
 [719168, "vagov-22af936b-9cb4-4ee8-9449-c0551c14c330"],
 [721649, "vagov-3f78751e-f125-42c5-ab0c-da98ef81e41b"],
 [722733, "vagov-4fffecc0-6167-40b6-8cd9-c187a9eead2b"],
 [722916, "vagov-b1df3ead-5e06-4a54-bfa3-1fc991979df0"],
 [724029, "vagov-9b97bb74-2ad9-4254-b285-14770455e90c"],
 [725625, "vagov-16fb62ff-246c-4486-be41-86c8effe3f8e"],
 [725710, "vagov-dc390ebe-1d18-4d41-b978-5ea3171db5de"],
 [728742, "vagov-48f489d7-9b81-4d48-b265-873ad5a9b470"],
 [729048, "vagov-49456494-36f0-4790-948c-688dc853a395"],
 [729120, "vagov-022be4e9-bc4b-465a-810f-4f9755774e08"],
 [729443, "vagov-edf51454-e126-4c67-bca8-d1327d138c19"],
 [729706, "vagov-1d0a43b1-b40b-487a-8806-9f589587b7f8"],
 [731149, "vagov-c7ae530e-a0e8-4e5e-ab3b-c48ac25bfed6"],
 [731345, "vagov-2e52736c-84dc-4dc1-959b-f1fe3e680475"],
 [731582, "vagov-f23c3928-38d5-4a98-b668-e8c6eb588273"],
 [732909, "vagov-9d4362a3-c7ea-4e12-882f-f10aa33ba3ff"],
 [734123, "vagov-d43608d2-7915-481e-be88-f0af632ea406"],
 [734541, "vagov-8d2ab325-b257-4c63-b9c5-328b610e35c4"],
 [735836, "vagov-cd6b5fb0-eaa8-40c8-b497-ecf97552e338"],
 [737552, "vagov-27e374fe-f6df-4195-81a6-3912916ee9a7"],
 [740892, "vagov-b7829908-f833-4b69-a9b6-47a5b3d447b5"],
 [741359, "vagov-309486e0-692b-4a53-b359-a04d5a07c0ea"],
 [741701, "vagov-d3f9897c-66ab-41f3-9ce4-c213f5adaae5"],
 [742721, "vagov-91f7f13f-caf8-4981-88ee-f521239e696c"],
 [742964, "vagov-39027fad-0e49-4616-a6ea-b84437074ba8"],
 [744789, "vagov-d4ed397a-f565-46a3-bf42-5a31a232f11e"],
 [745170, "vagov-6b93799c-3de9-4a0c-aec4-d4a1f5ea35c2"],
 [746494, "vagov-2f9946e8-cf13-421d-a2e5-a7fbaa69749b"],
 [746895, "vagov-5dd23060-054d-4c9f-9b06-5352050eef3a"],
 [746990, "vagov-d4af53bd-b7b9-4b19-a038-6a9564805574"],
 [749898, "vagov-19be0e52-7a03-454e-a450-68a79d96d373"],
 [750361, "vagov-006cac39-a856-4d8a-9e89-29e33400e400"],
 [752565, "vagov-62c3a088-a0ca-4cc2-a531-37dc457e3594"],
 [754586, "vagov-2e6a7a77-b87e-45f1-9ba3-88f156556dd8"],
 [755797, "vagov-c2f0e33c-d51b-4c8b-a566-e1d7642ceb4e"],
 [758526, "vagov-603d4f76-e1fa-4b76-a8fd-effb1b7b020c"],
 [764064, "vagov-6230eefa-b7a6-409e-b334-b9b16650e28d"],
 [765271, "vagov-d5cb565b-40d4-49c8-9a89-5c57fb66256b"],
 [767446, "vagov-a553085c-9adb-4b2d-bd9a-9f0b350fdd88"],
 [771677, "vagov-29e45670-4fe1-44b7-98d8-6b9e6d4fc66f"],
 [771815, "vagov-ee28e09f-ec73-4b77-9ef3-458cb16cb42a"],
 [773762, "vagov-47bacc0c-38af-4a44-b0f9-77edb9cb6ced"],
 [832370, "vagov-15422f8b-b78d-42b0-903a-d5bcdc6d1e6f"],
 [832391, "vagov-7cd024f7-4e68-4302-875c-33676c9fd8b9"],
 [832430, "vagov-652cf4e5-1e70-43aa-b612-bb2e27e7a20f"],
 [836026, "vagov-2f65109d-29d7-45e8-ac49-b47eb4ecdff3"],
 [836262, "vagov-3f601ced-8ed1-497e-a06d-b44640fbfd7d"],
 [836915, "vagov-877b49f5-b578-4193-b597-2c7be1a54725"],
 [839995, "vagov-4ba06546-1dc5-4182-96bb-d65774b29f11"],
 [840725, "vagov-767f19c6-28f6-4ac8-8eed-8237bddbcd81"],
 [840994, "vagov-8fa5d7a9-276a-4b7f-a94a-1c4df1b7da91"],
 [843787, "vagov-6833701f-0a3b-4533-b0f6-ef24a3c3c505"],
 [844286, "vagov-dd9e1221-911d-40ed-9080-7bca3d595cc9"],
 [845290, "vagov-ed92db7d-278e-45dd-a62a-0cde03063566"],
 [847142, "vagov-bd3b2fbd-29a8-4d2c-a633-59c337ca93a0"],
 [847318, "vagov-b2e427f6-9de0-437b-bdff-b1d16b485c91"],
 [847753, "vagov-29260ac7-f535-4914-aea7-5573339fec0d"],
 [852107, "vagov-93d95e48-8621-4f1f-919c-1f796c8701d7"],
 [852290, "vagov-1eeab9c9-f18b-4be7-9a93-9129fd5e9a4b"],
 [852446, "vagov-27092aa7-70ec-4c6c-b04a-046db073d9fb"],
 [853081, "vagov-2f51f6b2-bbe7-4d96-adf6-b5d4e40aaa1a"],
 [853566, "vagov-83138a2f-dfbd-4211-abe2-acbcd5635500"],
 [854599, "vagov-6dc170d6-c89d-470e-9385-f59339d6b607"],
 [855050, "vagov-fe8f37a3-f9cb-4138-8980-155fae017c18"],
 [855313, "vagov-9395d240-6030-4bd1-b168-87df7d36ab7f"],
 [855792, "vagov-ddb60742-2e3d-4714-b912-5bcbb00aea08"],
 [858600, "vagov-610ce185-415c-47b2-8e86-74f70745995b"],
 [858624, "vagov-468ef553-8098-4fb9-b028-624800e436b3"],
 [859018, "vagov-723a9b79-d5be-422b-bf21-27d22359c371"],
 [859074, "vagov-e95779f6-aec3-4c40-8deb-edceded17145"],
 [859178, "vagov-e5443fb7-fd37-4119-bb27-373bcce575d3"],
 [860017, "vagov-400a9ac7-9c0a-476a-ab4f-371b4638dbb9"],
 [861598, "vagov-fd7060d4-e770-4571-b022-10e55ea21906"],
 [863865, "vagov-2e261fb4-1c8b-4a19-9507-e9e64bed8c72"],
 [863947, "vagov-475c182c-5ec3-47af-aff8-448c4d9facb8"],
 [864820, "vagov-ad72dd90-800d-492c-9896-0b349df82928"],
 [865293, "vagov-9487d2ec-b7d2-4414-9cd5-4a67fdb1f4a7"],
 [866082, "vagov-b582e593-c482-4801-ac6f-bc52c09413ba"],
 [866909, "vagov-9f899e7a-2566-44aa-955d-79d3a1e1f60c"],
 [867069, "vagov-df119590-e644-4172-9a34-3b1428bcb403"],
 [867093, "vagov-c9f2c955-c78a-4a1d-a5d7-826e50818c0a"],
 [869619, "vagov-bed0de44-0c13-4662-b685-3272b2982506"],
 [870841, "vagov-242f8bd7-fecd-4d4a-aee3-22135a4f2a18"],
 [870875, "vagov-93bb5921-b76e-4463-8ffb-ea6a55121f76"],
 [871176, "vagov-98c7a05c-3568-41ac-909c-3e9db527e9e3"],
 [872081, "vagov-4931f226-c22e-4b50-807d-1f06daf4dec3"],
 [872354, "vagov-22cacea8-3b93-4bd6-99bd-6b97ef0ce4e9"],
 [872371, "vagov-7a7bc370-b65f-4f72-b3ea-07f73e77039a"],
 [905683, "vagov-fda3cba9-6888-4864-9992-0485e5af47bb"],
 [908143, "vagov-7c8d82da-d1ec-4b9d-896c-ead92ceed897"],
 [972101, "vagov-ede52e48-bc83-485d-8ff2-e18a0e0a9be1"],
 [999535, "vagov-830fe963-c8f9-41f8-a3ed-06aca2ecb8b7"],
 [1032567, "vagov-754cb6f8-690a-4505-a919-d49dadd72f07"],
 [1059984, "vagov-f5d189a3-02c2-46ab-a2b7-ea0a83d66791"],
 [1098932, "vagov-47d6dc43-d3c2-4891-b2c4-4e509a198ccf"],
 [1329408, "vagov-a06ec2d9-5171-492a-9191-05bd9bbfe8a8"],
 [1402011, "vagov-7636a237-fe08-4c2b-850a-a996555fd67b"],
 [1445614, "vagov-c3d37e21-890b-4984-900b-62d6d5e6d57b"],
 [1459358, "vagov-8c551d85-50e3-4356-9b28-52d5072ca9b6"],
 [1460508, "vagov-fb59d634-33e0-4b3c-80ef-741ec970d627"],
 [1483646, "vagov-d4b11154-3d13-4574-a7e3-f20cfa7dcb4d"],
 [1652421, "vagov-1b6cfd49-70ae-4558-a1f2-e3b48b0e4a78"]
```

This list has failed for unknown reasons.  EVSS is investigating on their end.  Ongoing work is to sync with their team and resolve the EVSS errors, and ultimately rerun this list.

[Slack thread with EVSS on what failed and why, and what are next steps are]([url](https://dsva.slack.com/archives/C8R3JS8BU/p1693925034499719))

## Suggested Improvements

- automate this.  We should be able to put this batching / rerunning script in the apps `/script` directory, put the failure ids in a document in S3, and run it all with a single command instead of all this copy pasting.
   - TODO: spike this

