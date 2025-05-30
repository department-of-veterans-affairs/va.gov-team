# Launch metrics
[View Ask VA Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard-playground?fromUser=false&refresh_mode=sliding&from_ts=1748523806804&to_ts=1748610206804&live=true)

## May relaunch
|Stage|Throughput|Error Rate: Form Submissions (422, 5xx)|Error Rate: Dashboard replies<br>(422, 5xx)|Error Rate:<br>Authorization Related<br>(401)|Error Rate:<br>Other<br>(404)|Latency: CRM|
|---|---|---|---|---|---|---|
|📍May 29, 9:01 am – May 30, 9:00 am|1981|0.6% (12)|0.3% (1)|1.1%|0.01%|AVG 2.19s|
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
