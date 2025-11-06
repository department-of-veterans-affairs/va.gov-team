# Domain specific time constraints to prevent latency issues for OH users

## Background

To improve UX associated with MR on web and VAHB for patients registered at Oracle Health facilities, we will limit how many days worth of data will show/load in two domains: 

1. Labs and tests
2. Notes and care summaries

Currently there is a date picker toggle implemented in staging for 30 day increments for labs and tests. Engineers have made a bet/hypothesized that the amount of records displayed at one time could increase from this 30 day interval to 90 days. We won't know for sure if 90 days is the sweet spot for avoiding latency until we're testing MHV with OH family and friends users in December. 

[VAHB has a PR open right now to add a 90 day interval filter](https://github.com/department-of-veterans-affairs/va-mobile-app/pull/11817) for labs and tests. One difference that exists between planned designs for web vs. VAHB is VAHB plans to set as default that users can review the last 90 days of labs and tests before engaging with the filter. 

## Some UX concerns to address with addition of the time constraining filter

### If users want more than 90 days of data
We need to direct them to download their records. At this point, designs do this with an additional info component directly below the filter and directly above the filter results: "Need more results"

### If users are unclear about why we're constraining their data in this way
Description (hint text) added to the dropdown field that we can only show 90 days of data at one time. What specifics  could be additionally helpful here?

## Decisions
At this point there's no added benefit that we can see for VistA users if we were to add time based filters for the VistA experience. For this reason, we're planning at this time to only show the time based filters for OH and hybrid users. 

## Remaining questions
### Plan currently is to add 90 day interval filters to the two domains listed above. Any reason we should do something different? 
### For web, do we want to match VAHB's planned default for what users will experience when arriving on these pages (labs and tests and notes and care summaries)?
### Why is latency an issue for OH patients only?


