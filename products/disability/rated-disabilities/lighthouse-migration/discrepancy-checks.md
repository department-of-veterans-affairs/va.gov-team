### Feature toggle updates
| Percentage | Date       |
| ---------: | ---------: |
|         0% | 03/28/2024 |
|        10% | 03/28/2024 |
|         1% | 02/29/2024 |
|        10% | 02/29/2024 |
|         1% | 02/28/2024 |

## Updates
#### 03/28/2024
The monitor went off twice after bumping the feature toggle to 10%, but I found that when I went to investigate I got the same number of ratings from both services. I am planning on updating the logging to include the number of ratings from both services to see if that helps to shed some light on what is happening. After that is in place the feature toggle can be set back to 10%.

#### 03/28/2024
Lighthouse deployed a set of updates that should fix the issues that have been observed around returning the incorrect disability evalutation for an individual rating. Bumping the feature toggle back up to 10% to see if that will help us discover discrepancies more quickly


### Revision History
| Revision         | Deploy Date |
| ---------------: | ----------: |
| [4](#revision-4) |  02/28/2024 |


## Change log
#### Revision 4
Date Deployed: _02/28/2024_ \
PR: [https://github.com/department-of-veterans-affairs/vets-api/pull/15699](https://github.com/department-of-veterans-affairs/vets-api/pull/15699)

Description of changes: I wasn't aware previously that Disability Ratings could have a `rating_end_date` that was in the future. EVSS still returns these ratings so the step where we consider any disability rating with a non-null `rating_end_date` is no longer completely valid. Updated the check to also consider the claim active if the `rating_end_date` is a future date
