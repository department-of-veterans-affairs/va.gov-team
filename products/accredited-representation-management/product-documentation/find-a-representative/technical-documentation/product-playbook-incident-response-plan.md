# Find a Representative Playbook/Incident Response Plan

## Product Description

**Product Overview:** [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/product-outline-find-a-representative.md)

## Contacts

- _All team members can also be reached via the Accredited Representation Management team DSVA Slack channel: [`#benefits-representation-management`](https://dsva.slack.com/archives/C05L6HSJLHM)_

### Team Members

- DSVA Product Lead: Jennifer Bertsch, jennifer.bertsch@va.gov
- Team Product Manager: Lindsay Li-Smith, lindsay.li-smith@oddball.io
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management#team-members)

### Outage Contacts:

- Accredited Representation Management team Lead Engineer: Holden Hinkle, holden.hinkle@oddball.io
- Accredited Representation Management team Frontend Engineer: Colin O'Sullivan, colin.osullivan@adhocteam.us
- Accredited Representation Management team Backend Engineer : Jonathan VanCourt, jonathan.vancourt@adhocteam.us

## Troubleshooting

### Errors and Metrics

This section will focus on how to identify and measure errors and performance metrics for the "Find a Representative" feature.

#### Error Logging

- **Sentry Integration:** Ensure Sentry is properly integrated into both vets-api and vets-website. Sentry will capture any runtime errors, performance issues, or exceptions in the application.
- **Error Alerts:** Set up Sentry alerts to notify the team via email or Slack when critical errors occur or when error rates exceed a predefined threshold (NOTIFICATIONS HAVE NOT BEEN SETUP YET).
- **Error Types and Frequencies:** Regularly review error logs to identify common or recurring issues. Pay special attention to error types, frequencies, and the severity of impacts on users.

#### Performance Metrics

- **Datadog Monitoring:** Utilize Datadog to monitor the application's performance. Track metrics like response times, server load, and API call frequencies.
- **Thresholds and Anomalies:** Set performance thresholds in Datadog. Receive alerts when metrics fall outside of these thresholds, indicating potential performance issues (NOTIFICATIONS HAVE NO BEEN SETUP YET).
- **User Journey Tracking:** Monitor key user journeys to ensure the feature is performing as expected. This can include tracking the success rate of searches for accredited representatives.

#### Feedback Loop

- **User Feedback:** Incorporate user feedback regarding the "Find a Representative" feature provided through the 'Feedback' widget on the VA.gov website.
- **Analytics:** Use Google Analytics to track user engagement and behavior on the "Find a Representative" feature pages. This will help in understanding how users interact with the feature and where they might encounter issues.

### Issue Investigation Steps

This section outlines the steps to investigate and resolve issues related to the "Find a Representative" feature.

#### Initial Assessment

- **Identify the Issue:** Use Sentry and Datadog alerts to identify the issue. Determine whether it's an API failure, a frontend error, or a performance bottleneck.
- **Impact Analysis:** Assess the impact of the issue. Determine how many users are affected and the severity of the impact on the feature's functionality.

#### Detailed Investigation

- **Log Analysis:** Review Sentry logs to pinpoint the error's origin. Look for stack traces, error messages, and the conditions under which the error occurred.
- **Reproduction:** Attempt to reproduce the issue in a test environment based on the information from Sentry and user reports.
- **Cross-Reference Metrics:** Use Datadog to cross-reference performance metrics around the time the issue occurred. This can help identify if the issue is isolated or part of a larger systemic problem.

#### Resolution and Follow-Up

- **Fix Implementation:** Once the issue is identified and understood, develop a fix. This could involve code changes, configuration updates, or infrastructure adjustments.
- **Testing and Deployment:** Test the fix thoroughly in a staging environment before deploying to production.
- **Monitoring Post-Fix:** Closely monitor Sentry and Datadog after deploying the fix to ensure the issue is resolved and no new issues have arisen.
- **Postmortem Analysis:** Conduct a postmortem analysis to understand the root cause and document learnings. Update the playbook accordingly to improve response for future incidents.

### Flipper Features and Rollback
- Enables Find a Representative tool - `find_a_representative_enabled`
- Enables Find a Representative frontend - `find_a_representative_enable_frontend`
- Enables Flag a Representative feature for Find a Representative tool - `find_a_representative_flag_results_enabled`

### How to Get All Flagged Rep Data From Production
If you have access to vets-api production, connect to a pod terminal, run `bundle exec rails console`, then copy/paste the following script. If you don't have access to vets-api production, contact Platform Support via the 'Office of CTO @ VA #vfs-platform-support' Slack channel and ask them to run it for you.

```ruby
require 'csv'

data = RepresentationManagement::FlaggedVeteranRepresentativeContactData.all.map do |record|
  [record.id, record.ip_address, record.representative_id, record.flag_type, record.flagged_value, record.created_at, record.updated_at, record.flagged_value_updated_at]
end

sorted_data = data.sort_by { |record| record[0] }

headers = ['ID', 'IP Address', 'Representative ID', 'Flag Type', 'Flagged Value', 'Created At', 'Updated At', 'Flagged Value Updated At']

def push_to_csv(file_name_number, headers, sorted_data_chunk)
  CSV.open("flagged_data-#{file_name_number}.csv", 'wb') do |csv|
    csv << headers

    sorted_data_chunk.each do |row|
      csv << row
    end
  end
end

file_name_number = 1

sorted_data.each_slice(500) do |chunk|
  push_to_csv(file_name_number, headers, chunk)
  file_path = File.expand_path("flagged_data-#{file_name_number}.csv")
  puts "CSV file created successfully. Download it from: #{file_path}"
  file_name_number += 1
end
```

This will create a number of csv files. The output will look like this:

```
CSV file created successfully. Download it from: /app/flagged_data-1.csv
CSV file created successfully. Download it from: /app/flagged_data-2.csv
```

Once the script has run, exit the Rails console and run the following command for each csv file created, like this:
```shell
cat /app/flagged_data-1.csv
cat /app/flagged_data-2.csv
# etc
```

Each time you `cat` the file, select the output, copy it, and email it via a onceler link (https://onceler.app.cloud.gov/) to the VA.gov email address that belongs to the person requesting the data.

## Security

No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
