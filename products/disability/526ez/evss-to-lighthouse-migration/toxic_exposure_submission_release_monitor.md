## Toxic Exposure 1.0 Submission Release Monitoring Tasks

Daily to-do:
1. Log into ArgoCD and check for failures with `Form526Submission.failure_type` -- You can compare this day-to-day and keep tabs on new failures (note that the order of the failures can change as submissions fail the backup path). I've been keeping track of these in a running spreadsheet in CAG entitled [](). This spreadsheet is only shared between Seth, Aurora, and Tommasina to keep access minimal.
2. Investigate new failures: first check the submission is valid with `sub.form_content_valid?` Then look at errors in the job statuses with `sub.form526_job_statuses.where(job_class: 'BackupSubmission', status: 'exhausted')&.last&.bgjob_errors&.values&.last.try(:[], 'error_message')`
3. Ideally, you can map these new failures back onto non-200 statuses in DataDog. If they are mapped appropriately, [what action do we want here?]; if you can't trace them, [ what action do we want here?]
4. If there are failures that new merged code will fix, first attempt to run the submission through the primary path again. If that fails, try running the submission through the backup path again. Last, if that does not work, you can run the DumpSubmissionToPdf script in Argo, and then log into CAG to transfer from S3 to Sharepoint making sure to follow Emily's Remediation Steps exactly.
5. If you get to finish that work, then check Slack for any messages from Watch Officers and/or OCTO Stakeholders. If there's a substantial change in failures (maybe greater than 3? new failures day-to-day?), run the Group Failures by User script pasted beflow to see how many Veterans were impacted, and draft a response along with next steps and run it by Jared and team.
6. If it's Friday, run the Application Health Metrics script and prepare an update for OCTO.

   
Tasks

1. Each Friday before EST COB, share application health metrics for the previous week relative to the release with OCTO, including any baseline metrics that are applicable
2. Share application health metrics as needed ad hoc, as this may sometimes be necessary
3. Make any necessary changes to our monitoring, alerting, and dashboards to accurately monitor the release and respond to any stakeholder questions
4. Perform manual remediation when necessary
5. Update Release Monitoring documentation, or other documentation as needed - be proactive
6. Respond to Slack messages as needed
7. The next business day after the team has incremented to 75%, help gather release metrics
8. Update release increment metrics here: Monitoring Toxic Exposure Release
9. Looking at the lighthouse traffic to determine errors coming in


### To pull Friday Application Health Metrics
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

### Template: 
#### Baseline 
EVSS submissions from April 1 to July 31: 209,770 total submissions (primary, backup, and failure)
- 99.04% used the primary path (207,772)
- 0.94% used the backup path (1,959)
- 0.00019% completely failed (4)

#### Toxic Exposure
Toxic Exposure N% incremental rollout (Date 1 - Date 2):
Lighthouse total submissions: (#1)

##### Primary Path Submissions
N% used the Lighthouse primary path (2,993) (#2)

##### Backup Path Submissions
N% used the Lighthouse backup path (68) (#3)

##### Failures
N% of Lighthouse submissions failed (14) (#4)

#### Technical Notes:
Here, add notes about technical fixes, issues we're experiencing, details for remediating them

#### Next Steps:
Next steps for the release, including details on anything mentioned in Technical Notes


2. Group failures by user to get a sense of impact to Veterans:
```
   # Total failure grouping
failures_grouped_by_user = failures.group_by(&:user_uuid)
failures_grouped_by_user = subs.group_by(&:user_uuid)
failures_grouped_by_user.each {|k, v| puts "#{k}: #{v.count}"};nil
```
3. To find XX date issues:
```
#        want to look through the array of submission ids at their forms to see if any key contains 'xx'
     def recurse_through(arg, &closure)
       if arg.instance_of?(Hash)
         arg.each_value { |value| recurse_through(value, &closure) }
       elsif arg.instance_of?(Array)
         arg.each { |value| recurse_through(value, &closure) }
       else
         yield arg
       end
     end

  failed_date_subs = []
  subs.each do |sub|
    recurse_through(sub.form['form526']['form526']) do |value|
      if value.is_a?(String) && value.downcase.match?(/['x']{2}/)
        puts "found xx date: #{value}"
        puts sub.id
        failed_date_subs << sub.id
      end
    end
  end
```
