# Decision to Not Implement Notifications

## What was the feature?

The feature enabled veterans who had logged into Vets.gov in the past to receive notifications when changes occurred to the status of their claim(s).

## Why wasn't it done?

There were two primary reasons, as [Carl mentioned in Issue #308](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/308#issuecomment-269705390):

1. Vets.gov is not a system of record.
2. Guaranteed EVSS performance problems.

To be able to detect changes in claim, Vets.gov would need to store information about each claim so that there was something to diff/compare against EVSS queries to detect changes. This long term storage was not covered in our ATO and there is a philosophical leaning by the team to not duplicate data in Vets.gov when possible.

Despite that, we may have fought the ATO battle to store data if not for the [severe performance problems](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/308#issuecomment-269831550) querying EVSS would have caused. This implementation would have required Vets.gov to query EVSS for every veteran that logged in ever, every day at least once. For notifications, this would be a poor design pattern. A more ideal pattern is to have the system persisting the original change to push notifications out to observers/subscribers of changes, and thereby exponentially decreasing the O(n) performance of the routine.

It was determined that until the underlying system of record can push change notifications, this feature would not be implemented.
