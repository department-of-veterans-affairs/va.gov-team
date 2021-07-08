# Issues found in UAT
June 23, 2021

- 'View lab results' and 'View medical records' behave differently - one opens in another tab, another opens in the same tab 
    - Action: Ticket [#26228](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26528) /PR: [176070](https://github.com/department-of-veterans-affairs/vets-website/pull/17670) 
- We discovered that there is an additional very old my va page that is still live. 
    - Action: We passed this information on to the appropriate parties. 
- The claims/appeals APIs are *very* slow - Erik is working on a potential solution to this. 
   - Action: Requested assistance from analytics team to see if we have capability of tracking how frequently the API fails to retrieve c/a data, we want to track this and monitor in GA
- We should also hide the education benefit block if a user has started an edu benefit application. 
    - Action: Created [#26652](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26652) to address this in an upcoming sprint)
