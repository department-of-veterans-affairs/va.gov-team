# looking for issues in general
## in Graphana
### [Form 526 Disability Compensation Grafana dashboard](http://grafana.vfs.va.gov/d/000000066/form-526-disability-compensation?orgId=1&from=now-7d&to=now)
#### `User completion rate`
On the `User completion rate` graph, we're looking at the drop-off between these events.  There will always be a drop-off between Intent to file created & Valid form submitted  (users who start the form but choose not to finish) but a steep drop-off signifies that something is preventing users from completing. 

* Intent to file created (a user starts the form)
* Valid form submitted (vets-website submits valid json to vets-api, a.k.a the user submits)
* Submission Completely Accepted by EVSS (the submission received by vets-api is successfully accepted by EVSS)

####  Unsuccessful Api requests for from 526EZ-all-claims app

* v0/users#show - 401 means that the user's session timed out
* v0/disability_compensation_forms#submission_status - 404 means that the sidekiq job hasn't started by the time the user first polls the status, not a big deal if there's just a few, but if there's a ton then it means that sidkiq is likely backed up

* v0/disability_compensation_forms#submit_all_claim - 500 should be zero, if not look at Sentry
* v0/disability_compensation_in_progress_forms#show - 503 means EVSS is not up. We try to get a veteran's rated disabilities when they start & resume the form.  We allow the veteran to continue if they're resuming the form but not if they're just starting it. 

### saved/valid claim (User submissions)
the success rate of submissions from vets-website to vets-api
failures should be 0, if not we need to look at what vets-api and vets-website disagree on in the schema.

### SubmitForm526 worker results 
the most likely failure point - a major work in progress. 
[the 526: Reduce form526 Submission Errors, Technical Debt, and Improvements epic ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9903) is a good table of contents for all EVSS form 526 submission errors. 
 
... to be continued ...

# Finding the issue of a particular user

The contact center will provide us with an id - most often the `Application ID number` in vets-api the `Application ID number` is actually the `InProgressForm` id.  This number is just the primary key of the InProgressForm and can be public. 

Start a rails prod console:
````bash
devops/utilities/issue_mfa.sh User.Name ######
devops/utilities/ssm.sh vets-api-worker prod auto
sudo su
docker exec -it vets-api bash
rails console --sandbox
````

starting with `Application ID number`
````ruby
# id = InProgressForm id from contact center
id = 3134522
# find the in-progress form.  If you don't find the form either they successfully submitted or they started over. Look at the metadata, anything interesting?
ipf = InProgressForm.find(id)  
````
starting with EDIPI
````ruby
edipi= 123456
acct = Account.where(edipi: edipi).first
ipf = InProgressForm.where(user_uuid: acct.idme_uuid)
````

next steps:
````ruby
# see if they've had any recent submissions, successful or otherwise
fss = Form526Submission.where(user_uuid: ipf.user_uuid)
# check the job status & errors of the last recent attempt
fss.last.form526_job_statuses.last.error_message
````

if we see an identiy related error like `Error calling external service to establish the claim during Submit` (useful, huh?) we can check the identity info (check for multiple birls id's)
````ruby
acct = Account.where(idme_uuid: ipf.user_uuid).first
# OR acct = Account.find_by("idme_uuid = ? OR sec_id = ? OR logingov_uuid = ?", uuid, uuid, uuid)
response = MPI::Service.new.find_profile_by_edipi(edipi: acct.edipi).profile
````

More details about form526_job_statuses error messages in  [the 526: Reduce form526 Submission Errors, Technical Debt, and Improvements epic ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9903)

[find vets-api sentry issues by user_uuid](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=3&query=is%3Aunresolved+user%3A%22id%3Aaaaaaaaaaaaa%22&statsPeriod=14d)

if you want to ask EVSS to investigate something the `Form526Submission - auth_headers["va_eauth_service_transaction_id"]` will help them find the event

Occasionally we'll see id's like `25b9d12f6eb44c2707e90a53` this is a sidekiq id and we can find the related job & form with
`Form526JobStatus.where(job_id: ids)`
