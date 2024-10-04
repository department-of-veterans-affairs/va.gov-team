# Queries

* Count Total Submissions
  * `DebtsApi::V0::Form5655Submission.count`
* Count Submissions with error messages
  * `DebtsApi::V0::Form5655Submission.where.not(error_messge: ['', nil]).count`
* Pull all orders that have error messages and select their id, created_at, and error_message
  * `result = DebtsApi::V0::Form5655Submission.where.not(error_message: ['', nil]).select(:id, :created_at, :error_message).order(created_at: :desc)`
* Display all records as an array of hashes:
```
cool = result.map do |sub|
  sub.as_json
end

# This will output a BUNCH of data where you will have to hold 'return'
# to get through all of the records. The spreadsheet has this data.

pp cool
```

### Query for errored forms in a certain timeframe:
```
result = DebtsApi::V0::Form5655Submission.where.not(error_message: ['', nil]).where(created_at: 1.week.ago..Time.now)

# then you can do something like this:
result.map(&:error_message)

# Which returns the below
["Outage detected on Debts beginning at 1726167220",
 "Gateway timeout",
 "the server responded with status 500",
 "Gateway timeout",
 "Gateway timeout",
 "Gateway timeout",
 "Gateway timeout",
 "Gateway timeout"]
```

## List from Slack
- [x] What each of the silent failures we have identified are?
  - In spreadsheet
- [x] Date failures occurred? (ideally we want to review all data we have - portal launched in January 2021 and first FSR experience which was VBA only launched on Nov 16, 2021 - VHA was added into the mix with the Combined FSR launch on September 19, 2022: In case those dates help at all)
  - In spreadsheet
- [x] How many Veterans/submissions were impacted?
  - 1505 (All time out of 62096)
- [ ] Has the failure been resolved?
- [ ] How do we plan to address future failures?

- There is more information in the documentation including a checklist which we've [copied here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/back-end/silent-errors/checklist.md)!

## Fix Sharepoint Submission Errors
If you see a sharepoint error when you're pulling errors. You can get the submission id from the record and use it to retry a submission.

```
form_submission = DebtsApi::V0::Form5655Submission.find(<id for errored submission>)
sharepoint_request = DebtManagementCenter::Sharepoint::Request.new

sharepoint_request.upload(
        form_contents: form_submission.form,
        form_submission:,
        station_id: form_submission.form['facilityNum']
      )
```

## Todo
We should get in contact with our partners and find out the following:
* What are the resolution cut off dates? Meaning, is there a timeframe where forms are no longer relevant?
* We could pull ids for forms in error and see if there was an issue with submission to our partners. This is what we did when we had that sharepoint issue a month or so back. They were able to get us submission ID'
* Get PR for exhaustion metrics merged
* Get PR up for better error messaging
