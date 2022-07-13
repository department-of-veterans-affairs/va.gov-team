# Title - Mulesoft failures

In the summer of 2022, the 10-10 Health Apps team is implementing the retry capability, so that vets-api can retry calling MuleSoft when there is no response (or an error??).
In the event that MuleSoft fails to return a successful response within a given timeframe, there is an alternative process in place to ensure that the application is sent to the Caregiver teams.

Vets-api will perform retries in the intervals below:
- 1 minute after first failed response
- X minutes later
- X minutes later
- X minutes later
- X minutes later
- X minutes later

After 24 hours of retries, any alerts will be posted to the Slack Channel #health-tools-1010-apm.  The alerts will also be emailed to the audience below:
- Patrick Bateman
- Heather Justice
- Mark Fallows
- Lihan Li
- Lisa Zapson
- Matt Long
- Nick Osmanski
- Thamaraiselvi Kaliannan
- Caitlin Reyna
- Mili Ridoutt
- Ruman Khan
- Igor Khurgin
- Paul Kuprionas
- Ramesh Dugar
- Ranganathan Balasubramanian
- Sreeni Komma
All communications and failure remediation triage will occur in Slack Channel vecms-carma_vadotgov_development_external.

Upon receiving the alert, the 10-10 Health Apps team will retrieve the PDF application file from the Production environment.  
We will then send (link to file location, or 7zip file with aes256 encryption) to CARMA(?) for processing.  Since all applications are digitized and sent to CARMA this way, the processing steps will not change in the event of failures.

The 10-10 Health Apps team will post all updates in the Slack Channel vecms-carma_vadotgov_development_external.
- 10-10 Health Apps team to notify channel of alert being received, tagging the channel “@here”:
- 10-10 Health Apps team to notify of next step being taken
- 10-10 Health Apps team to update with step taken and any results
- 10-10 Health Apps team to assist with any triage to resolve failures causing retry expiration
