# How to Manually Update Representative Data

Until the ARM products are connected to the Accreditation API, the representative data powering Find a Rep, Appoint a Rep and Rep status will need to be manually updated. This update currently takes place weekly on Fridays. 

## While connected to the VA network
Users must be connected to the VA network (either on-site or via VPN) to access the Accreditation report.

### Ensure Access
If a user does not have access to https://ogccowbd1.dva.va.gov/Reports/report/Accreditation/Accreditation they should request it from GCLAWS.  Once access is granted they can proceed.

### Download the Accreditation data as an Excel file
The report can be found at https://ogccowbd1.dva.va.gov/Reports/report/Accreditation/Accreditation.  Click on the export menu with the 💾 icon and select "Excel" to download the report as an Excel file.

### Remove unnecessary data from the file
Open the file in Excel, if you are using a remote desktop it should be available.  

Delete the followling sheets:
- Accr Attorney Diagram
- Accr Claim Agent Diagram
- Accr Representatives Diagram
- Accr Vet Service Org Diagram

Delete the listed columns from each of these remaining sheets:

**Sheet: Attorneys**
- AccrAttorneyId
- DateOrigAccredited
- DateRecertified
- DateRecertDue
- PersonID

**Sheet: Agents**
- AccrClaimAgentId
- DateOrigAccredited
- DateRecertified
- DateRecertDue
- PersonID

**Sheet: Representatives**
- AccrRepresentativeId
- PersonID
- DateOrigAccredited
- DateRecertified
- DateRecertDue
- RepVSOID
- OrganizationID
- CertifyingOfficial.LastName
- CertifyingOfficial.FirstName
- CertifyingOfficial.MiddleName

**Sheet: VSOs**
- VSOID
- CertifyingOfficialID
- RecognitionDate
- CertifyingOfficialLastName
- CertifyingOfficialFirstName
- CertifyingOfficialFaxNumber
- CertifyingOfficialWorkNumber
- CertifyingOfficialMiddleName

Save the file before continuing.

### Email file from remote desktop
1. Open Outlook
1. Create a new email
1. Attach the updated Excel file
1. Enable message encryption.  If you skip this step the email is unlikely to be received.
1. Send the email to your contractor company email address.

## While not connected to the VA network

### Download the file

1. Open the email and click "Read the message" button.
1. On the page that opens, click the "Sign in with a one time passcode" button.
1. Check your email for the one-time passcode and enter it on the website.
1. In the message preview shown, click on the down caret (▼) and choose Download.

### Commit the new file to the va.gov-team-sensitive repository

1. Rename the downloaded file to "rep-org-addresses.xlsx".
1. Create a new branch "update_accreditation_data_<Today's date>" and check it out.
1. Inside the va.gov-team-sensitive repo replace the file at `products/accredited-representation-management/data/rep-org-addresses.xlsx` with the newly downloaded file.
1. Push the changes to the remote repository.
1. Create a pull request to merge the changes into the main branch.
1. If all checks pass, merge the pull request.
