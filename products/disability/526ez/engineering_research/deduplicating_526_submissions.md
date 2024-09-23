# Identifying and Tagging Duplicates of Form526Submission

This document outlines how we identify duplicate submissions and what we do with them. This process was developed during the 2024 "silent failure" remediation, Code Yellow.

## De-duplicating / Finding Sameness

I’ll use the terms "de-duping" and "determining sameness" interchangeably. Both refer to the process of identifying which 526 Submissions from a given set can be considered duplicates or the same.

### Scope

De-duplication only looks at the form content of a submission record, i.e., the JSON that is returned when calling `.form` on a `Form526Submission` instance.

Our de-duplication starts with a Git-style "diff" between two or more submissions for a given user. These diffs are not as literal as they would be in Git, but instead include some blacklisting and whitelisting of attributes that we care about.

### Included

- Vet PII
- Vet contentions, i.e., the disabilities they are claiming
- References to Veteran-uploaded data

### Excluded

- Content of Veteran-uploaded supporting documentation
- Hashes and timestamps that have no practical bearing on sameness
- Values determined by OCTO leadership to be unimportant ([see our coded 'blacklist' for more](TODO - link to script))

## How This All Works

The following objects are required for our de-duplication process:

- [Submission Difference Report](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/deduplication/submission_difference_report.rb) - creates a Git-style diff between submissions
- [Duplicate Set Builder](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/deduplication/duplicate_set_builder.rb) - accepts the diff report and reduces it to an array of "duplicate sets"
- [Time and Status Sorter](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/deduplication/time_and_status_sorter.rb) - applies rules about what can be ignored

### In Theory

The process can be described by the following steps:

1. Pass a `user_uuid` into the Duplicate Set Builder. This uses the Submission Diff Report under the hood. It will return an array of "dupe sets." These dupe set arrays contain submission IDs grouped by sameness. Every submission in a dupe set is duplicate-type relative to the other submissions in that set.

2. Each dupe set can then be passed into the Time and Status Sorter. This applies rules about whether or not the submission is a duplicate of a successful submission and when a submission was created relative to the others in the dupe set. This step is necessary only if you plan on performing remediation and/or duplicate tagging on members of this dupe set. The rules applied here come from our Code Yellow de-duping for remediation and should be validated with OCTO before being applied in production.

3. Step 2 returns an array of hashes. Each hash is keyed with `ignore` and `investigate`. The `ignore` submissions have been identified as unimportant according to the rules applied by the Time and Status Sorter. The `investigate` submissions are those that require remediation. This will always be 1 or 0 submissions per dupe set. There can be multiple `investigate` submissions for a user with many dupe sets, but only 1 or 0 within a given dupe set.

#### NOTE on De-duplicating Without Remediation or Tagging

If you only want to group submissions by sameness (e.g., you are reviewing submissions that have succeeded and do not require remediation or tagging), you can skip steps 2 and 3. The results of the `DuplicateSetBuilder` do not consider success, and would be what you're looking for.

### In Practice

Here is a practical example of how you would run this code (this example assumes you are using the Rails command line).

```ruby
# Step 0
# - Paste the SubmissionDifferenceReport object into your console
# - Paste the DuplicateSetBuilder object into your console
# - Paste the TimeAndStatusSorter object into your console

# Step 1 - Group by duplicate
uuid = 'abc123' # user we are de-duping
dupe_sets = DuplicateSetBuilder.new(uuid:).run

# Step 2 - Find the submission to remediate
sortings = {}
dupe_sets.each_with_index do |dupe_set, idx|
  sortings["set_#{idx}"] = TimeAndStatusSorter.new(dupe_set:).run
end

# Step 3
# You can now remediate your `investigate` submissions
# You can now tag your `ignore` submissions as duplicates
```

## Tagging Duplicates

When we have a set of ignorable submissions, we want to mark them as such in the database so they will no longer be reported as "needing remediation" in our [State Snapshot](TODO - link). To do this, we leverage the `Form526SubmissionRemediation` model. For each duplicate, simply create an associated remediation with the value of `ignored_as_duplicate` set to true.

### In Practice

Assuming you have a group of submission IDs to ignore, you can run the following code to tag them as duplicates:

```ruby
ignorable_duplicates = [<array of submission ids>]

ignorable_duplicates.each do |id|
  red = Form526SubmissionRemediation.new(form526_submission_id: id, ignored_as_duplicate: true)
  red.add_context_to_lifecycle('Marking batch of duplicates per OCTO instructions')
  red.save!
end
```

NOTE: Context is required for any instance of Remediation, even when `ignored_as_duplicate` is set to true.

## Limitations

De-duping uses a set of agreed-upon rules. These were created in collaboration with myself and our OCTO success team during the [2024 Code Yellow remediation of 526 Submission Failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md).

These rules influence the functionality of the `DuplicateSetBuilder` and the `TimeAndStatusSorter`. The issue is that these rules were never intended to be permanent. They focus on (whitelisting) certain form values while ignoring (blacklisting) others. This was necessary during Code Yellow to narrow down a massive data set to something manageable.

While these rules are *probably* still applicable, any duplicate tagging should be cleared with OCTO success partners. This is because when we mark a submission as a duplicate, we are effectively saying, "Don’t bother processing this." This can be risky.

