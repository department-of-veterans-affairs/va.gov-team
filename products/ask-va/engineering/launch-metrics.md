# Launch metrics
[View Ask VA Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard-playground?fromUser=false&refresh_mode=sliding&from_ts=1748523806804&to_ts=1748610206804&live=true)

## Definitions
- **Throughput**: Count of successful 2xx requests
   - Filter: `payload.action` is create OR unauth_create
- **Error Rate: Form Submissions (422, 5xx)**: Count of 4xx and 5xx errors DIVIDED BY total number of requests
   - Filter: `payload.action` is create OR unauth_create
- **Error Rate: Dashboard replies (422, 5xx)**: Count of 4xx and 5xx errors DIVIDED BY total number of requests
   - Filter: `payload.action` is create_reply
- **Error Rate: Authorization Related (401)**: Count of 401 errors DIVIDED BY total number of requests
   - Filter: None, include all `payload.action`
- **Error Rate: Other (404)**: Count of 404 errors DIVIDED BY total number of requests
   - Filter: None, include all `payload.action`
- **Latency: CRM**: AVERAGE of count of 2xx requests
   - Filter: `payload.action` is create, unauth_create, OR create_reply

## May relaunch
|Stage|Throughput|Error Rate: Form Submissions (422, 5xx)|Error Rate: Dashboard replies<br>(422, 5xx)|Error Rate:<br>Authorization Related<br>(401)|Error Rate:<br>Other<br>(404)|Latency: CRM|
|---|---|---|---|---|---|---|
|📍July 4, 9:01 am - July 11, 9:00 am|9972|0.22% (22)|0.16% (2)|1.36%|0.01%|1.22s|
|June 27, 9:01 am - July 4, 9:00 am|9926|0.43% (43)|0.07% (1)|1.44%|0.01%|1.23s|
|June 20, 9:01 am - June 27, 9:00 am|9986|0.62% (63)|0.12% (2)|1.17%|0.03%|1.23s|
|June 16, 9:01 am - June 20, 9:00 am|6891|0.23% (16)|0.2% (2)|1.39%|0.04%|1.20s|
|June 13, 9:01 am - June 16, 9:00 am|2581|0.08% (1)|0% (0)|1.3%|~0%|AVG 2.47s|
|June 11, 9:01 am - June 13, 9:00 am|4037|0.4% (16)|0% (0)|1.2%|0.02%|AVG 2.51s|
|June 9, 9:01 am - June 11, 9:00 am|4120|0.39% (16)|0.31% (2)|0.54%|0%|AVG 2.52s|
|June 6, 9:01 am - June 9, 9:00 am |2593|0.35% (9)|0%|0.35%|0%|AVG 1.16s|
|June 4, 9:01 am - June 6, 9:00 am |3796|0.18% (7)|0.18% (7)|0.34%|0%|AVG 1.20s|
|June 2, 9:01 am - June 4, 9:00 am |4326|0.33% (14)|0.15% (1)|1.13%|0.1%|AVG 1.20s|
|May 30, 9:01 am – Jun 2, 9:00 am|2780|0.3% (9)|0.3% (1)|1.2%|~0%|AVG 2.61s|
|May 29, 9:01 am – May 30, 9:00 am|1981|0.6% (12)|0.3% (1)|1.1%|0.01%|AVG 2.19s|
|May 28, 9:01 am – May 29, 9:00 am|2124|<0.5%|0%|1%|0.01%|AVG 2.25s|
|May 27, 9:01 am – May 28, 9:00 am|2200|0.5%|0%|0.7%|<0.5%|AVG 2.30s|
|May 23, 9:01 am – May 27, 9:00 am|2900|0.5%|0.3%|1%|<0.5%|AVG 2.90s|
|May 22, 9:01 am – May 23, 9:00 am|1720|0.5%|0.3%|1%|<0.5%|AVG 2.20s|
|May 21, 9:00 am – May 22, 9:00 am|1710|<0.5%|0%|<0.5%|<0.5%|AVG 2.28s|
|May 20, 9:01am - May 21, 9:00am|517|1%|0%|0.5%|<0.5%|AVG 2.65s|
|May 17, 12:00am ET - May 20, 9:00am ET|912|0%|0%|<0.5%|<0.5%|AVG 2.51s|
|Canary - 100%<br>(May 16)|414|0%|0%|0%|0%|AVG 2.46s|
|Canary - 100%<br>(May 15)|397|0%|0%|3.5% (14)|0%|~~AVG 2.7s~~ |

 
## Initial launch
Stage|Throughput|Error Rate: Form Submissions (422, 5xx)|Error Rate: Dashboard replies<br>(422, 5xx)|Error Rate:<br>Authorization Related<br>(401)|Error Rate:<br>Other<br>(404)|Latency: CRM|
|---|---|---|---|---|---|---|
|Canary - 10%<br>(Mar 27, 2:34pm - Mar 28, 10:46am)|36|0%|0%|2.4%|0%|AVG 2.7s|
|A: 25% of Traffic <br>(Mar 28, 10:47am - Apr 1, 1:35pm)|391|10.2%|0%|1.0%|0%||AVG 3.8s|
|B: 50% of Traffic <br>(Apr 1, 1:36pm - Apr 4, 10:43am)|696|1.4%|0%|0.7%|<0.5%|AVG 3.3s|
|C: 75% of Traffic<br>(Apr 4, 10:44am - Apr 9, 3:11pm)|1600|4.2%|0%|<0.5%|<0.5%|AVG 4.7s|
|D: 100% of Traffic<br>(Apr 9, 3:12pm - Apr 10, 9:00am)|914|0%|0%|<0.5%|<0.5%|AVG 4s|
|Post-Launch:<br>(Apr 10, 9:01 am – Apr 11, 9:00 am)|1,100|0%|0%|1%|<0.5%|AVG 4.1s|
