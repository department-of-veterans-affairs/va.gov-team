# So you have a Jumbo PR

Find which of the following applies to you -

- I can break my PR up into smaller pieces :point_right: [Break PR Into Smaller Pieces](#break-pr-into-smaller-pieces)
- The changed lines of code in my PR is not an accurate measurement how much effort is required to review it 
    - :point_right: [Change How LoC is Calculated](#change-how-loc-is-calculated)
    - :point_right: [Appeal a Jumbo PR Denomination](#appeal-a-jumbo-pr-denomination)
- There is no way my PR can be broken up into smaller pieces :point_right: [File for a Jumbo PR Override](#file-for-a-jumbo-pr-override)


## Change How LoC is Calculated
### Example
You added a large test file (`.csv`) that is not included in the [exclusions list](#jumbo-pr-calculation-rationale)

### What to Do
1. Open a separate PR that changes how the Danger Bot calculates total LoC by [modifying the `Dangerfile`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/Dangerfile)
2. Add a comment in your PR that links to the Danger Bot PR

### What to Expect
The platform team will review that PR inside the normal 24 hour cycle. If that PR is approved, you may then merge to `master` and pull those changes into your Jumbo PR branch which should now pass the Danger Bot LoC check.


## Appeal a Jumbo PR Denomination
### Example
Your PR is mostly repetitive rspec code that isnt very complex.

### What to Do
Having > `1000` LoC, doesn't always mean the review will be difficult to review. In this case:

1. [Open a ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) in the `va.gov-team` repo
2. Use the "Jumbo PR Appeal" GitHub issue template
3. Prefix the title with "Jumbo PR Appeal:"
4. Add the GitHub label "Jumbo PR Appeal"
5. Add a comment in your PR that links to the appeal GitHub issue

### What to Expect
1-3 days for the platform team to review your appeal. If the appeal is granted, the danger-bot CI check will be dismissed and your PR reviewed normally.


## File for a Jumbo PR Override

### Example
There is no possible way your PR can be broken up and must be reviewed as is.

### What to Do

1. create a doc explaining why? (TBD)
2. The platform team will review that doc (1-2 days)
3. Schedule an in-person meeting with the BE utility dev & BE team product owner for a more in depth look at the PR & feature
4. PR will occur normally

### What to Expect
3-7 days. This includes

- in person meeting
- longer back-and-forth comments on the PR


## Break PR Into Smaller Pieces

### What to Do
1. Close the Jumbo PR
2. Link back to the Jumbo PR in any future smaller chunk PRs

### Thank You!

We know it can mean more work to break your PR up - hats off to you! We find that smaller PR's results in:

- less overall time taken to get code reviewed, merged and deployed
- more iterative code testing w/ small bits of code being deployed daily
- more insightful review feedback comments


## Jumbo PR Calculation Rationale

We use lines of code (`LoC`) as a measurement for its simplicity & transparency. We ignore the following when calculating LoC:

```
EXCLUSIONS = ['Gemfile.lock', '.json', 'spec/fixtures/', '.txt', 'spec/support/vcr_cassettes/', 'app/swagger', '.csv']
```
:warning: [The `Dangerfile` for actual calculation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/Dangerfile) should be considered the source of truth, not this document! :warning:

You can expand the comment from the bot to see exactly how your LoC were calculated.
[screen shot of expanded comment]


### Alternative Measurements
#### Code Climate

`codeclimate` has a number of code quality metrics that that we could use over LoC, but doing so would be more complicated and less transparent. LoC is far from perfect, but we wanted a _rough_ estimate to:

1. Protect reviewers from being expected to review large / complex PRs
2. Give PR authors transparency into the process and provide clear options for moving forward
