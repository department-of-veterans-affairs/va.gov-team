### Feature toggle updates
| Percentage | Date       |
| ---------: | ---------: |
|         0% | 03/08/2024 |

## Current Status
### 06/04/2024
Lighthouse has updated their service in all environments to accept the participantId in place of the file number for document uploads. We have also deployed our code to account for those changes and should be doing a small test (1% of users) in production shortly

### 03/08/2024
We are currently waiting on Lighthouse Benefits Documents API to be updated to accept the Participant ID of the user as the main Identifier. Currently they only accept the users' File Number, which poses an issue for us currently because we are expected to support NVCs (Non-Veteran Claimants) going forward, and NVCs by definition do not have a file number. They are still working on this change and have not yet given us a firm timeline of when this work will be done.

### Next Steps
Once they have completed their work, we will need to look into the best way to store document submission metadata for the purposes of 1) being able to keep track of the status of the document as it makes it's way into the eFolder, and 2) being able to remediate failed submissions in the event that issues are found / failures arise

## Previous Statuses
