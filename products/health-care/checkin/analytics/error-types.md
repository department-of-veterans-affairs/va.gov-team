# Error Types in VA.gov Application 

## Pre-Check-In

| Error | Page | Description | Status | Notes |
| ------- | ----- | ----- | ----- | ----- |
| No Token | www.va.gov/health-care/appointment-pre-check-in/error?error=no-token | Veteran attempted to access pre-check-in without a UUID. This occurs when a Veteran reopens their mobile web browser and an expired pre-check-in session attempts to load. | Active | ![image](https://user-images.githubusercontent.com/86678742/228847384-5ac8d5c1-7424-44e4-a263-6944acfbb73f.png) |
| Link Expired | www.va.gov/health-care/appointment-pre-check-in/error?error=pre-check-in-expired | Can't find a LoROTA entry for the supplied UUID (either it has been deleted or never existed |Active | ![image](https://user-images.githubusercontent.com/86678742/228847286-63b3929c-092b-4cf1-a463-5ec797a31966.png)|
| Session Error | www.va.gov/health-care/appointment-pre-check-in/error?error=session-error |
| Appt. Cancelled | www.va.gov/health-care/appointment-pre-check-in/error?error=appointment-canceled | Veteran attempted to complete pre-check-in, but the appointment had since been canceled by the clinic or Veteran. | Active |
| Max Login Attempts | www.va.gov/health-care/appointment-pre-check-in/error?error=max-validation | Veteran had 3 failed identity verification attempts & their LoROTA entry has now been deleted | Active | ![image](https://user-images.githubusercontent.com/86678742/228847135-2553d207-220f-4fa7-b820-a1c149634db1.png) |
| Completion Error | www.va.gov/health-care/appointment-pre-check-in/error?error=error-completing-pre-check-in |
| ???  | www.va.gov/health-care/appointment-pre-check-in/error?error=error-fromlocation-precheckin-introduction |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error?error=pre-check-in-past-appointment |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error?error=reload-data-error |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error?error=no-token&next=loginmodal |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error/ |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error?error=validation |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error?error=lorota-fail |
| ??? | www.va.gov/health-care/appointment-pre-check-in/error?error=bad-token |

Source: [Direct link to Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22appointment-pre-check-in~2Ferror%22,0%5D%5D/)

## eCheck-in

| Page | Description | Status | Notes |
| ----- | ----- | ----- | ----- |
| No Token | www.va.gov/health-care/appointment-check-in/error?error=no-token | Veteran attempted to access eCheck-in without a UUID. | Active |  ![image](https://user-images.githubusercontent.com/86678742/228847775-466ee3f8-2518-45ac-99b9-8b5607788926.png) |
| Link Expired | https://va.gov/health-care/appointment-check-in/error?error=uuid-not-found | Can't find a LoROTA entry for the supplied UUID (either it has been deleted or never existed - Veteran can get this error when they access a check-in link after the job runs to delete the LoROTA entry (when does this happen??)| Active | ![image](https://user-images.githubusercontent.com/86678742/228847914-a8ef6260-8045-48f5-a5db-f7dbadcb326c.png) |
| Can't Get Appt. Info | www.va.gov/health-care/appointment-check-in/error?error=cant-retrieve-check-in-data |  | Active | ![image](https://user-images.githubusercontent.com/86678742/228848037-b615b654-154e-487b-a10e-6135c5b6b6e0.png)|
| Need to Update Info | www.va.gov/health-care/appointment-check-in/see-staff/ | Veteran has answered "No" to any of the contact verification questions and must now check-in with an MSA | Active | ![image](https://user-images.githubusercontent.com/86678742/228848135-6d2951d4-79d5-4288-9fda-c202f15132d7.png) |
| Session Error | www.va.gov/health-care/appointment--check-in/error?error=session-error |  |  |  |

Source: [Direct link to Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22appointment-check-in~2Ferror%22,0%5D%5D/) 
