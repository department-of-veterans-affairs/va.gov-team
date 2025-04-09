# Verify Your Enrollment Failure Playbook
_last updated: 2025-04-09_  

## Audience 
VEBT Team members responsible for monitoring Verify Your Enrollment Application. Specifically, that portion of the application that deals with BDN data. The failure mode discussed in this document is only applicable to BDN users, and will become moot when DGIB is fully deployed (hopefully in August 2025).

# Required access
```
- [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/ufn-etf-53s/toms-vye-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1744045219183&to_ts=1744218019183&live=true)
- [Slack](dsva.slack.com) channel: `#vye-alerts`
- Production rails console (in the event manual intervention is needed)
```

# Failure Mode

Within the VYE code, there is a Sidekiq job called `Vye::DawnDash::EgressUpdates`. This job is responsible for taking data submitted by BDN users and uploading it to an S3 bucket where it will later be retrieved and processed by another system. In the event that the S3 upload fails, the user data will not reach the intended system. No data is lost, and the job will simply try to upload the data again the next day. But in the event that the upload persistently fails, this is how one might go about figuring out what users are impacted.

# Steps

- Use [VYE dashboard](https://vagov.ddog-gov.com/dashboard/ufn-etf-53s/toms-vye-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1744045219183&to_ts=1744218019183&live=true) or Sentry or Sidekiq Admin to determine that `Vye::DawnDash::EgressUpdates` has failed.
- Using the error tracking or stack trace, confirm that it was indeed the S3 upload that failed. This is perhaps the only real failure mode, as it's the only place it needs to interact with an external system. If the job fails in another spot it's likely some sort of bug caused by a recent code change.
- Assuming it's the S3 upload that failed, and that it's failed consistently, and intervention is needed; in order to get a list of affected users you'll need to get into a production rails console.
  - `Vye::Verification.export_ready`, `Vye::DirectDepositChange.export_ready`, and `Vye::AddressChange.export_ready` will get you a list of the records are need to be sent to S3. Each of these records has a `user_info` field, which in turn has a `user_profile` attribute. So to get a full list of users you might do something like `Vye::Verification.export_ready.map(&:user_profile)`.
  - With a list of affected users in hand, discuss next steps towards resolution. If a persistently failing S3 upload is the problem, then simply fixing that bug and allowing the `EgressUpdates` job to complete successfully should be sufficient.
  - Note that the data coming from BDN (a very old Cobol system) is pretty sparse. Neither `UserProfile` nor `UserInfo` records have an email field on them. So automated VA notify emails to alert these users to the issue is not possible.