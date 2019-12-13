# So You Want to Login to eBenefits

That's great! It's also the only way to know what the current Veteran experience and expectations looks like, so...

## If you ARE on the VA network...

There is a mock service you can use that does not require a login:
* Access PINT1: http://vaebnapp7.aac.va.gov:9001/mock-csp/index.jsp 
* Access PINT2: http://pint2.vaenapp30.aac.va.gov:9001/mock-csp/index.jsp

Please note that in either case, MVI does routine maintenance on Monday afternoon, starting around 2:30/3pm, at which time these services are unavailable.

## If you are NOT on the VA network...

* Access PINT2: https://pint.ebenefits.va.gov/ebenefits-portal/pint1 OR https://pint.ebenefits.va.gov/ (if you need to try both, you'll need to have a new session open with a cleared cache to enter the other site. 


## Alternative Way to Login: Logging into Mock CSP

Logging into Mock CSP for getting easier access to eBenefits. 
 
1. Log into the CAG

2. Open Firefox or IE11

3. Go to the location for the desired environment, a form will be displayed:
- INT: http://vaausessapp800.aac.va.gov:8001/mock-csp/index.jsp
- CV: http://vaausessapp801.aac.va.gov:8001/mock-csp/index.jsp Changed to Mock IAM on 1/4/2017 (see below)
- QA1: http://vaausessapp700.aac.va.gov:8001/mock-csp/index.jsp
- QA2: http://vaausessapp701.aac.va.gov:8001/mock-csp/index.jsp
- PINT1: http://vaausessapp600.aac.va.gov:8001/mock-csp/index.jsp
- PINT2: http://pint2.vaausessapp601.aac.va.gov:8001/mock-csp/index.jsp
- PERF: http://vaausessapp500.aac.va.gov:8001/mock-csp/index.jsp
- DEMO: http://vaausessapp400.aac.va.gov:8001/mock-csp/index.jsp
- PreProd: http://vaausessapp300.aac.va.gov:8001/mock-csp/index.jsp

4. Select a name from the drop down, the user details will populate the form.

5. Click "Send to eBenefits" to get logged in using the selected user's credentials.

https://csra-evss.atlassian.net/wiki/download/attachments/3346063/image2016-1-11%2011:17:50.png?version=1&modificationDate=1452547068617&cacheVersion=1&api=v2

## Login with any of the following fake users (this is not real PII):

|username|password|DOB|SSN|Security Question Answers|
|---|---|---|---|---|
|herman.stevens|FGhj(999)|12/15/1946| 796049726 | TBD|
|dave.stewart|FGhj(999)|4/22/1992| 796110951 | TBD|
|jon.caldwell|FGhj(999)|9/1/1963| 796173307 | TBD|

Scenario A: Stevens Herman: A user with Veteran status logs in to submit a claim for the first time. This user has never filed a disability compensation claim before. 

Scenario B: Stewart Dave: A user with Veteran status logs in and has a disability claim application in progress. The user should also have 3-5 existing conditions for which a claim decision is complete.

Scenario C: Jon C Caldwell: A user with Veteran status logs in and does not have any claim applications in progress, but does have 5-10 existing conditions for which a claim decision is complete.


 
