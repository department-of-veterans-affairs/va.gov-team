# 526-4142 Production Operations
## Scenarios
Scenario | Notes | Triage
-------- | ----- | -------
526 and 4142 Successful | 526 is successfully submitted via EVSS. 4142 is successfully submitted through ICMHS | Statistics can be found in DB table TBD
526 Successful, 4142 failed | 526 is successfully submitted via EVSS. 4142 is successfully submitted through ICMHS | Statistics can be found in DB table TBD
526 Successful, 4142 successful via ICMHS but fails in downstream system | 526 is successfully submitted via EVSS. 4142 is successfully submitted through ICMHS | Statistics can be found in DB table TBD, ICMHS can be polled to determine status
526 failed, 4142 not attempted | 526 fails via EVSS. 4142 is not attempted. | Statistics can be found in DB table TBD
4142 downstream error (invalid zip code) | |
4142 downstream error (meta-data mismatch) | |
