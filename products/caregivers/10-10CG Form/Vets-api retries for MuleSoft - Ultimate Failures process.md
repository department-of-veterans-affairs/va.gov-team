# Vets-api retries - catastrophic failures

In the summer of 2022, the 10-10 Health Apps team is implementing the retry capability, so that vets-api can retry calling MuleSoft when there is a response _other than_ status codes `201` or `202`.

<details>
     <Summary>More details on codes from MuleSoft</Summary>

>Mule application will only generate 201 or 202 when it was able either:
>- Process Message
>- Queue message to SFDC
>- Create a DTC ticket
>
>Mule will never generate any other code if it is functional.
>
>VA.GOV needs to retry if:
>- It can’t connect to Mule and get 5xx error
>- The connection timed out after 5 minutes and Mule did not respond
>
>In the event that MuleSoft fails to return a successful response within a given timeframe, there is an alternative process in place to ensure that the application is >sent to the Caregiver teams without further intervention from the applicant.
     
</details>     

- Vets-api will perform retries in the intervals below:  

 |# | Next retry backoff | Total waiting time|
 |---|-------------------|------------------|
 1 |       0d 0h 0m 20s |       0d 0h 0m 20s
 2 |       0d 0h 0m 26s |       0d 0h 0m 46s
 3 |       0d 0h 0m 46s |       0d 0h 1m 32s
 4 |       0d 0h 1m 56s |       0d 0h 3m 28s
 5 |       0d 0h 4m 56s |       0d 0h 8m 24s
 6 |      0d 0h 11m 10s |      0d 0h 19m 34s
 7 |      0d 0h 22m 26s |       0d 0h 42m 0s
 8 |      0d 0h 40m 56s |      0d 1h 22m 56s
 9 |       0d 1h 9m 16s |      0d 2h 32m 12s
10 |      0d 1h 50m 26s |      0d 4h 22m 38s
11 |      0d 2h 47m 50s |      0d 7h 10m 28s
12 |       0d 4h 5m 16s |     0d 11h 15m 44s
13 |      0d 5h 46m 56s |      0d 17h 2m 40s
14 |      0d 7h 57m 26s |        1d 1h 0m 6s

<details>
     <Summary>Current Automatic Job Retry library - Table for approximate retry waiting times</Summary>
 
(https://github.com/mperham/sidekiq/wiki/Error-Handling#automatic-job-retry)
 
- Hint: This table was calculated under the assumption that `rand(10)` always returns 5. See `Sidekiq::JobRetry#delay_for` for the current formula.
     
 |# | Next retry backoff | Total waiting time|
 |---|-------------------|------------------|
 1 |       0d 0h 0m 20s |       0d 0h 0m 20s
 2 |       0d 0h 0m 26s |       0d 0h 0m 46s
 3 |       0d 0h 0m 46s |       0d 0h 1m 32s
 4 |       0d 0h 1m 56s |       0d 0h 3m 28s
 5 |       0d 0h 4m 56s |       0d 0h 8m 24s
 6 |      0d 0h 11m 10s |      0d 0h 19m 34s
 7 |      0d 0h 22m 26s |       0d 0h 42m 0s
 8 |      0d 0h 40m 56s |      0d 1h 22m 56s
 9 |       0d 1h 9m 16s |      0d 2h 32m 12s
10 |      0d 1h 50m 26s |      0d 4h 22m 38s
11 |      0d 2h 47m 50s |      0d 7h 10m 28s
12 |       0d 4h 5m 16s |     0d 11h 15m 44s
13 |      0d 5h 46m 56s |      0d 17h 2m 40s
14 |      0d 7h 57m 26s |        1d 1h 0m 6s
15 |     0d 10h 41m 46s |     1d 11h 41m 52s
16 |      0d 14h 5m 20s |      2d 1h 47m 12s
17 |     0d 18h 13m 56s |       2d 20h 1m 8s
18 |     0d 23h 13m 46s |     3d 19h 14m 54s
19 |      1d 5h 11m 26s |      5d 0h 26m 20s
20 |     1d 12h 13m 56s |     6d 12h 40m 16s
21 |     1d 20h 28m 40s |       8d 9h 8m 56s
22 |       2d 6h 3m 26s |    10d 15h 12m 22s
23 |      2d 17h 6m 26s |     13d 8h 18m 48s
24 |      3d 5h 46m 16s |      16d 14h 5m 4s
25 |     3d 20h 11m 56s |     20d 10h 17m 0s

</details>

### Procedure
- An early alert is triggered by having >5 application submissions with 3+ retries over a period of 10 hours, posted to the Slack Channel **#health-tools-1010-apm**
     - The 10-10 Health Apps team will begin a review of the failures
     - The 10-10 Health Apps team will determine if a "maintenance" banner be in place to stop further applications from being submitted and failing
     - Once the 10-10 Health Apps team's review determines that the MuleSoft team needs to be involved, an update will be posted to the Slack channel **vecms-carma_vadotgov_development_external** and an email will be sent to the audience below:
          - Patrick Bateman
          - Heather Justice
          - Lihan Li
          - Matt Long
          - VACARMAOperationsTeam@va.gov
          - DTCMulesoftSupport@va.gov
     - Once the coordination begins, the teams can determine whether to start the process of retrieving failed PDF documents to send via an encrypted email to **vha12cspcarmaehr@va.gov** for manual processing

- After 1 day of failed retries, any alerts will be posted to the Slack Channel **#health-tools-1010-apm**.  The alerts will also be emailed to the audience below:
     - Patrick Bateman
     - Heather Justice
     - Lihan Li
     - Lisa Zapson
     - Matt Long
     - Nick Osmanski
     - VACARMAOperationsTeam@va.gov
     - DTCMulesoftSupport@va.gov


- Upon receiving the alert and determining that we have a catastrophic failure, the 10-10 Health Apps team will retrieve the PDF application file from the Production environment.  This PDF will be sent via an encrypted email to **vha12cspcarmaehr@va.gov**, including the timestamp of the submission from VA.gov.  The team will also request that a "maintenance" banner be in place to stop further applications from being submitted and failing.  


- The 10-10 Health Apps team will post all updates in the Slack channel **vecms-carma_vadotgov_development_external**.
     - 10-10 Health Apps team to notify channel of alert being received, tagging the channel with “@here”
     - 10-10 Health Apps team to notify audience of PDF being sent via an encrypted email to CSP at **vha12cspcarmaehr@va.gov**
     - 10-10 Health Apps team to notify audience of the 'Maintenance" banner set in place to stop access to the online application
     - 10-10 Health Apps team to assist with any triage to resolve failures causing retry expiration
