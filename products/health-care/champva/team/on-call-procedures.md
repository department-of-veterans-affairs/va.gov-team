# Commands for the Rails Console on Argo

## Production Access

Access to the Rails console in the production environment is restricted.  

The following rules apply:

- We need to have at least two people on a Teams call peering for running production rails console/terminal commands.
- One of our engineers may act as one of the two people.
- We are first to reach out to the [federal engineer closest to our project](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/key-personnel.md#federal-engineer-fe-closest-to-our-project) for assistance.
- If they are unavailable or don't have rails access, we can reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) for rails console access.

Reminder to never record any screen sharing that includes PII and PII can only be sent in Teams, never in Slack or email.

## Launching the console

1. On the VA network login to: argocd.vfs.va.gov/applications/vets-api-prod?resources
2. Find a pod that starts with `vets-api-web` and click on it
3. Choose terminal
4. From here, you can use the below commands:
    - To log in to the rails console: `bundle exec rails console`
    - To find a user by uuid: `IvcChampvaForm.where(form_uuid: 'xyz').where(pega_status: nil)`

## To check for submissions with missing PEGA status in Rails console: 

```ruby
# Create an instance of the production support helper class (only need to do once per console session)
msc = IvcChampva::ProdSupportUtilities::MissingStatusCleanup.new
```

```ruby
# Collect and display any submissions with missing statuses
missing = msc.get_missing_statuses

## EXAMPLE OUTPUT:
# ---
# Sponsor Surname missing PEGA status on 1/1 attachments - test@email.com
# Form UUID:   7c30a37a-75e8-4314-94ae-da3cb27c5dcf
# Form:   10-10D
# Uploaded at: 2025-03-12 14:02:38 UTC
# S3 Status:   ["S3 UploadFile failure for 7c30a37a-75e8-4314-94ae-da3cb27c5dcf_vha_10_10d1.pdf: upload failure"]
```

> [!TIP]
> If the output of `get_missing_statuses` shows an S3 status field of `['200']`, this indicates all files in the batch made it to S3 successfully. This may mean that the Pega lambda is stuck and needs to be manually re-run by the DOCMP team.

## To view all submissions associated with an email address:

With an instance of `MissingStatusCleanup` defined:

```ruby
user_subs = msc.get_batches_for_email(email_addr: 'test@email.com')

## EXAMPLE OUTPUT (note the "Uploaded at" times, "Form", and number of attachments.
## This looks like a successful auto-retry)
# ---
# Sponsor Surname missing PEGA status on 1/1 attachments - test@email.com
# Form UUID:   7c30a37a-75e8-4314-94ae-da3cb27c5dcf
# Form:   10-10D
# Uploaded at: 2025-03-12 14:02:38 UTC
# S3 Status:   ["S3 UploadFile failure for 7c30a37a-75e8-4314-94ae-da3cb27c5dcf_vha_10_10d1.pdf: upload failure"]
# ---
# Sponsor Surname missing PEGA status on 0/1 attachments - test@email.com
# Form UUID:   848e3c45-f8db-4bc1-af56-2733b77cc9b8
# Form:   10-10D
# Uploaded at: 2025-03-12 14:02:56 UTC
# S3 Status:   ["[200]"]
```

## To clear a missing status:

First, gather a collection of batches

```ruby
batches = msc.get_batches_for_email(email_addr: 'test@email.com') # OR: batches = msc.get_missing_statuses
```

Then, identify the `form_uuid` of the batch you want to manually process and pass it to `manually_process_batch` like so:
```ruby
msc.manually_process_batch(batches['7c30a37a-75e8-4314-94ae-da3cb27c5dcf'])

## EXAMPLE OUTPUT:
# Setting 7c30a37a-75e8-4314-94ae-da3cb27c5dcf_vha_10_10d1.pdf to 'Manually Processed'
```
