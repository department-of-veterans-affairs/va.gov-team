# Phased rollout

## Helpful Links

- Feature flipper: [`bcas_letters_use_lighthouse`](https://api.va.gov/flipper/features/bcas_letters_use_lighthouse)
- DataDog Dashboard: [Benefits - Management Tools -  Letters](https://vagov.ddog-gov.com/dashboard/86n-b39-hhn/benefits---management-tools---letters?fromUser=true&refresh_mode=sliding&from_ts=1746109974694&to_ts=1746196374694&live=true)

## Phase I: Canary (1%)
### Planning: 
Desired date range or test duration: 3/10-3/11 2025

Actual date range of test duration: 

Desired number of users: 500  

How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  

#### DataDog:

> See "Helpful Links" section above for the dashboard!
     
- Index error rate: < 2.5%
- Download error rate: < 0.3%
- Call center complaints: 0

### Results:  

- **2025/03/10** - BMT1 began the Canary phase as planned
- **2025/03/12** - Canary phase considered successfully completed; BMT1 moved on to phase II below

## Phase II: 25% - 100%
### Planning 
Desired date range or test duration: ~_3/11/24 - 3/25/24  2025_~ &nbsp; 05/06/2025 - 05/13/2025

Desired number of users: 600, 1000, 1400
- In this phase we will expand the release at increments of 25%, allowing at least one full business day to gather the necessary data to ensure the information coming through to end users matches expected behavior.

What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
#### Data Dog

> See "Helpful Links" section above for the dashboard!

- Index error rate: < 2.5%
- Download error rate: < 0.3%

### Anticipated timeline

- [x] **2025/05/06** - Lighthouse team plans to deploy required change to production
- [x] **2025/05/07** - BMT2 to increase to 25%; monitor DataDog as described above
- [x] **2025/05/08** - BMT2 to increase to 50%; continue to monitor DataDog
- [x] **2025/05/09** - BMT2 to increase to 75%; continue to monitor DataDog
- [x] **2025/05/12** - BMT2 to increase to 100%; continue to monitor DataDog through the remainder of the week

### Results:

- **2025/03/12** - BMT1 moved to 25%
- **2025/03/13** - a [bug](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105208) was discovered on the BMT side, which caused a rollback to 0%
- **2025/03/24** - BMT1 returned to 25% after resolving the bug above
- **2025/03/25** - another [bug](https://dsva.slack.com/archives/C02CQP3RFFX/p1742925759539209) was discovered on the Lighthouse side
- **2025/03/26** - Rolled back to 0% for [a few reasons](https://dsva.slack.com/archives/C04KHCT3ZMY/p1743012653750079) related to the previous discoveries
- **2025/03/31** - BMT1's period of performance ends; BMT2 assumes responsibility for the completion of the rollout
- **2025/05/08** - Mobile traffic turned on to 50% and both web and mobile began seeing an increase in `502` and `504` errors; error rates on Download reached 0.78%, but fell to 0.74% overnight
- **2025/05/09** - A handful of `502`/`504` errors appeared at 10:30 AM ET, but when Stacy's self-imposed 11 AM ET assessment came around, she felt comfortable and increased to 75% as planned; bumped traffic to 75% at approx. 11:30 AM ET
- **2025/05/12** - Increased traffic to 100%
- **2025/05/13** - Critical issues were discovered with the Benefits Summary Letter; consequently, both web and mobile rolled back to 0% while the issues are being worked out
    - Slack threads regarding these issues:
        - https://dsva.slack.com/archives/C02CQP3RFFX/p1747159220624239
        - https://dsva.slack.com/archives/C02CQP3RFFX/p1747167993375199
- **2025/06/12** - Lighthouse released a fix for the BSL; tested with an employee who is also a Veteran to verify the letter content was corrected ✅
- **2025/06/13** - Rolled to 50% for the day; error rate hung right around 1.15% for most of the day, which sits above our 0.3% threshold.  Opted to return to 0% over the weekend.
- **2025/06/18** - Lighthouse released a fix for the `422` errors in the late afternoon; opted to hold on rollout until Monday, 6/23, due to the holiday on 6/19 and the number of folks out of the office on 6/20
- **2025/06/23** - Rolled to 50% for the day
- **2025/06/24** - Went to 100%; some `422` errors persist, but fewer than we were seeing previously.  We continue to monitor.
