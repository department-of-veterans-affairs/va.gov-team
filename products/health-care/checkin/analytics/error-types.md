# Error Types in VA.gov Application 

## Pre-Check-In

| Error | Page | Description | Status | Notes |
| ------- | ----- | ----- | ----- | ----- |
| Link Expired | www.va.gov/health-care/appointment-pre-check-in/error?error=pre-check-in-expired <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=pre-check-in-expired&next=loginmodal&postlogin=true | Can't find a LoROTA entry for the supplied UUID (either it has been deleted or never existed |Active | ![image](https://user-images.githubusercontent.com/86678742/229578284-48a106f5-0710-4535-bafe-95d292e41465.png) |
| Max Login Attempts | www.va.gov/health-care/appointment-pre-check-in/error?error=max-validation | Veteran has 4 failed identity verification attempts & their LoROTA entry has now been deleted | Active | ![image](https://user-images.githubusercontent.com/86678742/229578833-8c7151b0-9821-4a8f-b6fc-2352ceceb9b1.png) |
| No Token | www.va.gov/health-care/appointment-pre-check-in/error?error=no-token <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=no-token&postlogin=true <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=no-token&next=loginmodal | Veteran attempted to access pre-check-in without a UUID. This occurs when a Veteran reopens their mobile web browser and an expired pre-check-in session attempts to load. | Active | ![image](https://user-images.githubusercontent.com/86678742/229577939-fda59630-a85e-4b8d-ae52-53758a40c633.png) |
| Malformed Token | www.va.gov/health-care/appointment-pre-check-in/error?error=bad-token | Happens when the token is not in the form of a GUID | Active | ![image](https://user-images.githubusercontent.com/86678742/229578961-180fd5f6-5d09-42f7-b787-379691a5db1e.png) |
| Session Error | www.va.gov/health-care/appointment-pre-check-in/error?error=session-error <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=session-error&next=loginmodal | | | ![image](https://user-images.githubusercontent.com/86678742/229577719-207b0b29-ea8b-4d78-bb59-efdd5a3056fd.png) |
| Appt. Cancelled | www.va.gov/health-care/appointment-pre-check-in/error?error=appointment-canceled | Veteran attempted to complete pre-check-in, but the appointment had since been canceled by the clinic or Veteran. | Active | ![image](https://user-images.githubusercontent.com/86678742/229578416-dc2d202c-5404-4c74-8922-a49c688a2219.png) |
| System | www.va.gov/health-care/appointment-pre-check-in/error?error=error-completing-pre-check-in  | | | ![image](https://user-images.githubusercontent.com/86678742/229579333-e14208f1-6473-4254-bb48-d651e03a75cd.png) |
| System | www.va.gov/health-care/appointment-pre-check-in/error?error=lorota-fail  | | | ![image](https://user-images.githubusercontent.com/86678742/229579333-e14208f1-6473-4254-bb48-d651e03a75cd.png) |
|  | www.va.gov/health-care/appointment-pre-check-in/error?error=validation <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=validation&next=loginmodal | | | ![image](https://user-images.githubusercontent.com/86678742/229578577-29dd58d7-1b9c-4a69-b0c5-eb8877b4297c.png) |
| | www.va.gov/health-care/appointment-pre-check-in/error?error=error-fromlocation-precheckin-introduction  | | | ![image](https://user-images.githubusercontent.com/86678742/229579333-e14208f1-6473-4254-bb48-d651e03a75cd.png) |
| | www.va.gov/health-care/appointment-pre-check-in/error?error=pre-check-in-past-appointment  | | | ![image](https://user-images.githubusercontent.com/86678742/229579333-e14208f1-6473-4254-bb48-d651e03a75cd.png) |
| | www.va.gov/health-care/appointment-pre-check-in/error?error=reload-data-error  | | | ![image](https://user-images.githubusercontent.com/86678742/229579446-a570eb77-791b-40e7-afe0-2779429cca75.png) |
| | www.va.gov/health-care/appointment-pre-check-in/error/ <br><br> www.va.gov/health-care/appointment-pre-check-in/error?type=expired <br><br> www.va.gov/health-care/appointment-pre-check-in/error?next=loginmodal | | | ![image](https://user-images.githubusercontent.com/86678742/229579475-6c45cac6-509e-4194-8cdb-4a298d6bf577.png) |
| | www.va.gov/health-care/appointment-pre-check-in/error?error=uuid-not-found | | | ![image](https://user-images.githubusercontent.com/86678742/229579446-a570eb77-791b-40e7-afe0-2779429cca75.png) |
| | www.va.gov/health-care/appointment-pre-check-in/error?error=reload-data-error <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=reload-data-error&next=loginmodal&postlogin=true | | | ![image](https://user-images.githubusercontent.com/86678742/229579446-a570eb77-791b-40e7-afe0-2779429cca75.png) |


Source: [Direct link to Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22appointment-pre-check-in~2Ferror%22,0%5D%5D/)

## eCheck-in

| Error | Page | Description | Status | Notes |
| ------- | ----- | ----- | ----- | ----- |
| Link Expired | https://va.gov/health-care/appointment-check-in/error?error=uuid-not-found | Can't find a LoROTA entry for the supplied UUID (either it has been deleted or never existed - Veteran can get this error when they access a check-in link after the job runs to delete the LoROTA entry (when does this happen??)| Active | ![image](https://user-images.githubusercontent.com/86678742/228847914-a8ef6260-8045-48f5-a5db-f7dbadcb326c.png) |
| Max Login Attempts | www.va.gov/health-care/appointment-check-in/error?error=max-validation | Veteran has 4 failed identity verification attempts & their LoROTA entry has now been deleted | Active | ![image](https://user-images.githubusercontent.com/86678742/228847135-2553d207-220f-4fa7-b820-a1c149634db1.png) |
| Need to Update Info | www.va.gov/health-care/appointment-check-in/see-staff/ | Veteran has answered "No" to any of the contact verification questions and must now check-in with an MSA | Active | ![image](https://user-images.githubusercontent.com/86678742/228848135-6d2951d4-79d5-4288-9fda-c202f15132d7.png) |
| Can't Get Appt. Info | www.va.gov/health-care/appointment-check-in/error?error=cant-retrieve-check-in-data <br><br> www.va.gov/health-care/appointment-check-in/error?error=cant-retrieve-check-in-data&next=loginmodal | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| No Token | www.va.gov/health-care/appointment-check-in/error?error=no-token <br><br> www.va.gov/health-care/appointment-check-in/error?error=no-token&next=loginmodal | Veteran attempted to access eCheck-in without a UUID. | Active |  ![image](https://user-images.githubusercontent.com/86678742/228847775-466ee3f8-2518-45ac-99b9-8b5607788926.png) | | |
|  | www.va.gov/health-care/appointment-check-in/error?error=validation <br><br> www.va.gov/health-care/appointment-pre-check-in/error?error=validation&next=loginmodal | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| Malformed Token | www.va.gov/health-care/appointment-pre-check-in/error?error=bad-token | | | ![image](https://user-images.githubusercontent.com/86678742/229581260-25a406db-5112-4435-8e22-a2391e1a83bf.png) |
| Session Error | www.va.gov/health-care/appointment-check-in/error?error=session-error |  |  | ![image](https://user-images.githubusercontent.com/86678742/229581337-ecb9cf09-678b-488f-98d6-9ea8b52bcf5f.png) |
| | www.va.gov/health-care/appointment-check-in/error/ <br><br> www.va.gov/health-care/appointment-check-in/error?next=loginmodal&postlogin=true | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| | www.va.gov/health-care/appointment-check-in/error?error=reload-data-error | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| | www.va.gov/health-care/appointment-check-in/error?error=refresh-on-details | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| | www.va.gov/health-care/appointment-check-in/error?error=no-next-of-kin | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| | www.va.gov/health-care/appointment-check-in/error?error=error-fromlocation-landing | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |
| | www.va.gov/health-care/appointment-check-in/error?error=error-completing-check-in | | | ![image](https://user-images.githubusercontent.com/86678742/229581416-fd753c04-8d6e-462c-b0b1-68e80b93e942.png) |


Source: [Direct link to Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.dateOption=last7days&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22appointment-check-in~2Ferror%22,0%5D%5D/) 
