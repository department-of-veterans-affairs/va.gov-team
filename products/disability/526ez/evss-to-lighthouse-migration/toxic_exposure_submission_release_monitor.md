## Toxic Exposure 1.0 Submission Release Monitoring Tasks

Tasks

1. Each Friday before EST COB, share application health metrics for the previous week relative to the release with OCTO, including any baseline metrics that are applicable
2. Share application health metrics as needed ad hoc, as this may sometimes be necessary
Make any necessary changes to our monitoring, alerting, and dashboards to accurately monitor the release and respond to any stakeholder questions
Perform manual remediation when necessary
Update Release Monitoring documentation, or other documentation as needed - be proactive
Respond to Slack messages as needed
The next business day after the team has incremented to 75%, help gather release metrics
update release increment metrics here: Monitoring Toxic Exposure Release
Looking at the lighthouse traffic to determine errors coming in


# To pull Friday Application Health Metrics
1. Log into Argo and run this script with that week's dates:
```
start_time = DateTime.parse('2024-09-27 00:00:00')
end_time = DateTime.parse('2024-10-03 23:59:59')
records = Form526Submission.where(created_at: start_time..end_time)
lighthouse_primary = records.where(submit_endpoint: 'claims_api')
backup = records.accepted_to_backup_path
lighthouse_backup = backup.select{|s| s.form['form526']['form526']['startedFormVersion'].present?}
failures = records.failure_type
lighthouse_failures = failures.select{|s| s.form['form526']['form526']['startedFormVersion'].present?}
puts  "total records: #{records.count}"
puts "2. lighthouse primary: #{lighthouse_primary.count}"
puts "total backup: #{backup.count}"
puts "3. lighthouse backup: #{lighthouse_backup.count}"
puts "total failures: #{failures.count}"
puts "4. lighthouse failures #{lighthouse_failures.count}"
te_records = lighthouse_primary + lighthouse_backup + lighthouse_failures
puts "1. lighthouse total: #{te_records.count}"
```
And draft a message using this template with the output for numbers 1-4. 
Baseline
EVSS submissions from April 1 to July 31
209,770 total submissions (primary, backup, and failure)
99.04% used the primary path (207,772)
0.94% used the backup path (1,959)
0.00019% completely failed (4)

Toxic Exposure
Toxic Exposure N% incremental rollout (Date 1 - Date 2):
Lighthouse total submissions: (#1)

Primary Path Submissions
N% used the Lighthouse primary path (2,993) (#2)

Backup Path Submissions
N% used the Lighthouse backup path (68) (#3)

Failures
N% of Lighthouse submissions failed (14) (#4)

Technical Notes:
Here, add notes about technical fixes, issues we're experiencing, details for remediating them

Next Steps:
Next steps for the release, including details on anything mentioned in Technical Notes

2. Group failures by user to get a sense of impact to Veterans:
```
   # Total failure grouping
failures_grouped_by_user = failures.group_by(&:user_uuid)
failures_grouped_by_user = subs.group_by(&:user_uuid)
failures_grouped_by_user.each {|k, v| puts "#{k}: #{v.count}"};nil
```
