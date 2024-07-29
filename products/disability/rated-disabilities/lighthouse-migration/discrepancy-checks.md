### Feature toggle updates
| Percentage | Date       |
| ---------: | ---------: |
|        10% | 06/27/2024 |
|         0% | 06/24/2024 |
|        10% | 06/18/2024 |
|         0% | 05/23/2024 |
|        10% | 05/22/2024 |
|         0% | 05/16/2024 |
|        10% | 05/16/2024 |
|         0% | 05/06/2024 |
|        10% | 04/05/2024 |
|         0% | 03/28/2024 |
|        10% | 03/28/2024 |
|         1% | 02/29/2024 |
|        10% | 02/29/2024 |
|         1% | 02/28/2024 |

## Updates
#### 06/27/2024
Ali Mizan (Engineer working on VSHE API) reached out and let me know that the fix for this was deployed this morning. Turns out that there was an issue with the string that they were matching against ('1151 Service Denied' vs '1151 Denied'). Turned back on to 10% and will see what happens. At this point there hopefully won't be any issues

#### 06/24/2024
I'm finding that the '1511 Denied' ratings are still not being returned by Lighthouse. I reached out to let them know and am waiting on an update

#### 06/18/2024
LH fixed the issue with '1151 Denied' ratings not being returned by their service. It was in the same vein as the 'Not Service Connected' rating issue where they were being filtered out because they don't have an effective date

#### 05/23/2024
Found an issue where '1151 Denied' ratings are no longer being returned by Lighthouse. This is probably similar to the 'Not Service Connected' rating issue where these are being filtered out because they don't have an effective date

#### 05/22/2024
Lighthouse pushed their hotfix out on 05/20; going back to 10%

#### 05/16/2024
Found an issue where 'Not Service Connected' ratings were no longer being returned by Lighthouse. This is most likely because they didn't account for the fact that 'Not Service Connected' ratings will not have a begin date.

#### 05/16/2024
Lighthouse deployed the fix to update their service to not return ratings with no begin date. They also added a field to indicate whether a rating was static or not

#### 04/05/2024
Found an issue where Lighthouse sometimes returns ratings that don't have effective dates (beginDt). The BGS service EVSS uses filters those ratings out and Lighthouse will update their service to remove them as well

#### 04/05/2024
The latest revision of the discrepancy logging was deployed on 04/03/2024. Turned the feature toggle back on to 10% and am going to let it run over the weekend and see if it produces any results.

#### 03/28/2024
The monitor went off twice after bumping the feature toggle to 10%, but I found that when I went to investigate I got the same number of ratings from both services. I am planning on updating the logging to include the number of ratings from both services to see if that helps to shed some light on what is happening. After that is in place the feature toggle can be set back to 10%.

#### 03/28/2024
Lighthouse deployed a set of updates that should fix the issues that have been observed around returning the incorrect disability evalutation for an individual rating. Bumping the feature toggle back up to 10% to see if that will help us discover discrepancies more quickly


### Revision History
| Revision         | Deploy Date |
| ---------------: | ----------: |
| [5](#revision-5) |  04/03/2024 |
| [4](#revision-4) |  02/28/2024 |


## Change log
#### Revision 5
Date Deployed: _04/03/2024_ \
PR: [https://github.com/department-of-veterans-affairs/vets-api/pull/15699](https://github.com/department-of-veterans-affairs/vets-api/pull/15699)

Description of changes: Lighthouse pushed another round of changes and I found that the monitor went off a few times but after manually investigating, I wasn't able to find a difference in the number of ratings EVSS returned and the number of ratings Lighthouse returned, even after removing inactive ratings and ones with unwanted statuses. Updating the logging to include the number of individual ratings returned by both services and the IDs of the ratings. This should help narrow things down

#### Revision 4
Date Deployed: _02/28/2024_ \
PR: [https://github.com/department-of-veterans-affairs/vets-api/pull/15699](https://github.com/department-of-veterans-affairs/vets-api/pull/15699)

Description of changes: I wasn't aware previously that Disability Ratings could have a `rating_end_date` that was in the future. EVSS still returns these ratings so the step where we consider any disability rating with a non-null `rating_end_date` is no longer completely valid. Updated the check to also consider the claim active if the `rating_end_date` is a future date
