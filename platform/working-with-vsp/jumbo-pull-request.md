## So you have a Jumbo PR

Find which of the following applies to you -

1. The changed lines of code in my PR is not an accurate measurement how much effort is required to review it :point_right: [Change How LoC is Calculated](#change-how-loc-is-calculated)

2. There is no way my PR can be broken up into smaller pieces - [File for a Jumbo PR Override](#file-for-a-jumbo-pr-override)

3. I can break my PR up into smaller pieces - [Break PR Into Smaller Pieces](#break-pr-into-smaller-pieces)


## Change How LoC is Calculated

Expected delay: 1-3 days

Open a separate PR that changes how the Danger Bot calculates LoC. The platform team will review that PR inside the normal 24 hour cycle. If that PR is approved, you may then merge to `master` and pull those changes into your Jumbo PR branch which should now pass the Danger Bot LoC check.


## File for a Jumbo PR Override

Expected delay: 3-10 days

1. doc? (TBD)
2. The platform team will review (1-2 days)
3. Schedule an in-person meeting with the BE utility dev & BE team product owner
4.

## Break PR Into Smaller Pieces

Close the Jumbo PR and be sure to add a link to it from any future smaller PR chunks.

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
[warn symbol][The `Dangerfile` for actual calculation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/Dangerfile) should be considered the source of truth, not this document! [warn symbol]

You can expand the comment from the bot to see exactly how your LoC were calculated.
[screen shot of expanded comment]


### Alternative Measurements
#### Code Climate

`codeclimate` has a number of code quality metrics that that we could use over LoC, but doing so would be more complicated and less transparent. LoC is far from perfect, but we wanted a _rough_ estimate to:

1. Protect reviewers from being expected to review large / complex PRs
2. Give PR authors transparency into the process and provide clear options for moving forward
