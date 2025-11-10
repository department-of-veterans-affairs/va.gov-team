# Domain specific time constraints in web to prevent latency issues for OH users

## Background

To improve UX associated with MR on web and VAHB ~for patients registered at Oracle Health facilities~ for all patients (confirmed w Marci and Mark Dewey in slack 11/6), we will limit how many days worth of data will show/load in **two domains only** (at this time): 

1. Labs and tests
2. Notes and care summaries

Currently there is a date picker implemented in staging for 30 day increments for labs and tests. ~Engineers have made a bet/hypothesized that the amount of records displayed at one time could increase from this 30 day interval to 90 days. We won't know for sure if 90 days is the sweet spot for avoiding latency until we're testing MHV with Trusted Users in December.~ In medical records design sync today 11/10, Patrick Bateman said they've increased the time constraint up to a year without issue so far (where?) and since that mental model will be easier for Veterans (choosing a year instead of a seemingly random 90 day interviewal), we plan to use the already existing in MR in the blue button report flow `date range select` component with options: `Last 3 months` `Last 6 months` `Last 12 months` and `Custom year`. This component is not in VADS but is in the MR tool. Used on the Labs & tests and Care notes & summaries pages, the `date range select` component will be slightly different from what is in the BB report flow in that: (1) there will be no option in the dropdown for `all time` and (2) instead of the `custom` option which opens fields for start and end dates, we'll use a `custom year` option which will allow for the user to type in a year and then click a button to run the search. 

[VAHB has a PR open right now to add a 90 day interval filter](https://github.com/department-of-veterans-affairs/va-mobile-app/pull/11817) for labs and tests. ~One difference that exists between planned designs for web vs. VAHB is VAHB plans to set as default that users can review the last 90 days of labs and tests before engaging with the filter.~ ~Decision made during call on 11/6 to align web with VAHB's plan: default when users arrive on page is to have past 90 days of data populated.~ Now that we are using the existing `date range select` component, the default view will be the first option in the dropdown of this instance of the component, which is the last 30 days.

## Some UX concerns to address with addition of the time constraining filter

### If users want more than 1 year of data
We need to direct them to download their records. At this point, designs do this with an additional info component directly below the filter and directly above the filter results: "Need more results?"

### If users are unclear about why we're constraining their data in this way
Description (hint text) added to the dropdown field that we can only show 1 year of data at a time. What specifics could be additionally helpful here?

~### If users want data that goes back further than 2.2 years
Custom date field will need to be part of the design on web to allow users to access these older records. Users will not be able to access records older than 2.2 years on VAHB.~ No longer relevant 11/10

## Decisions
- ~At this point there's no added benefit that we can imagine for VistA users if we were to add time based filters for the VistA experience. For this reason, we're planning at this time to only show the time based filters for OH and hybrid users. (11/4 - Becky & Marci)~ Change in decision from Marci in slack: "it sounds like the date picker will need to be there for all users due to the new backend". Liz Townsend agreed but added some more clarifying info:  "On thing to note is that yes, it will be for both VistA + OH patients for the new backend, which we are rolling out in chunks. So the existing experience (for VistA only users) will remain no date picker until we turn on the feature flags for all users and transition everyone over to the new Unified Data BE system. If that makes sense. I'm not sure what the timeline is for transitioning everyone over vs. just the 6 OH pilot sites for now (personally, I've been focused more on getting it out for the pilot sites deadline :cold_sweat:)."
- Add default view to web ~as it is planned for VAHB: when the date picker is present (labs and tests and notes and care summaries), users arriving on those domain pages will get a list of all items from the past 90 days. (11/6 - meeting with engs Liz Townsend, Adrian Rollett and Mark Dewey, in addition to Becky, Marci, David Koger and others)~ so when users arrive on the page, the last 30 days of records are present. This was decided in MR UX sync call on 11/10
- Will not add a date picker to the vitals domain for now and we'll see what happens with vitals in testing; Victoria Boland shared that there is BE filtering on OH for vitals so we don't need to also do this. We'll need to validate after env refresh (11/6 - meeting with engs Liz Townsend, Adrian Rollett and Mark Dewey, in addition to Becky, Marci, David Koger and others)
- We won't show a filter accordion to house the date picker at this point. Thinking is this is not really a filter, but more of a search affordance. (11/6 meeting)

## Questions: Some answered and remaining open questions
### Plan for web currently is to add 90 day interval filters to the two domains listed above. Any reason we should do something different? 
No, plan remains for web to add to labs and tests and notes and care summaries (11/6)

### For web, do we want to match VAHB's planned default for what users will experience when arriving on these pages (labs and tests and notes and care summaries)?
~Yes, decision made in call on 11/6~ New default view was chosen on 11/10: Past 30 days

### How far back should the date picker go? 
Engineers can't know how far back records might go so we've had to decide on a standard. Mark Dewey and Patrick Bateman decided 2.2 years back for 90 day intervals that can be picked from the dropdown. For mobile, that will be it (data goes back only 2.2 years). For web, ~a custom date field will need to be used to get anything further back in time (will be set up to also run only 90 day intervals)~ now that we can allow users to review records from 1 year of time, on web they can go back as far as they want in yearly increments.

### Is the custom date option shown in designs already in the design system? We won't be able to go through CC so we need to use something already sanctioned/standardized.
~Start date field we'd want to validate is in VADS.~ Even though it is not in VADS, Robyn Singleton approved use of this `date range select` since it is already in use in MR tool.

### Why is latency an issue for OH patients only?
