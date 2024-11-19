# Change Log for SSIT Data & Reporting 
A change log to document data and reporting changes, such as: query updates, reporting cadence changes, and updates to Domo charts. 

## Change Log

| #  | Date of Change | Description of Change       | Reason for Change                      | Author of Change |
|----|----------------|-----------------------------|----------------------------------------|------------------|
| 1  | 2024-11-12     |MHV removed the filter for username/password, resulting in the inclusion of users without these credentials in the 11/12 data drop | This filter change on MHV’s end has expanded our weekly reports to now encompass users without a username/password. We’re awaiting an updated dataset from MHV that will allow us to distinguish users by account status (Premium/Basic Matched) and filter data as needed to gain clearer insights. | MHV    |
| 2  | 2024-11-18     | Added two cards based on the comprehensive weekly data set, one for for users with Basic Match and one for users with MHV Premium. Users with no UID and password are filtered out. | Demonstrate split between users with MHV Basic Match and Premium credentials. Data also now includes users with no UID or password but they are being filtered out on both charts until we have more data from CDW to match against these users.      | John Marchi    |
| 3  | YYYY-MM-DD     | Brief description of change | Explanation for the modification       | Author's Name    |
