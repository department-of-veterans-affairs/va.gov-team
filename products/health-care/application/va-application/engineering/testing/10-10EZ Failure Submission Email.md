## Testing the 10-10EZ Failure Submission Email

The failure email is triggered when the `HealthCareApplication` model attribute `state` is updated to `failed`, and the form has an `email` set.

To test this functionality, you can manually update a `HealthCareApplication` model to mimic a failure. From the rails console:

No name with email:

```
form = {:email => 'my.email@va.gov'}.to_json
hca = HealthCareApplication.first
hca.update(form:, state: 'failed')
```

Set the Veteran name with email so it displays the salutation in the email:

```
form = {:veteran=>{:email=>"my.email@va.gov", :fullName=>{first: 'John', last: 'Smith'}}}.to_json
hca = HealthCareApplication.first
hca.update(form:, state: 'failed')
```

These will trigger the `VANotify::EmailJob` sidekiq job which queues up VANotify to send the email.
