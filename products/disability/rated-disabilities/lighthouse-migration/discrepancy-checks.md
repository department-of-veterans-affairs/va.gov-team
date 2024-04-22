### Feature toggle updates
| Percentage | Date       |
| ---------: | ---------: |
|        10% | 04/05/2024 |
|         0% | 03/28/2024 |
|        10% | 03/28/2024 |
|         1% | 02/29/2024 |
|        10% | 02/29/2024 |
|         1% | 02/28/2024 |

## Updates
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
