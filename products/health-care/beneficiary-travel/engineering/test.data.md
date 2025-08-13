# Test data

## Quick Started

- Can use any test user that is in MPI and can have appointments made in test VistA 500 or VistA 983
- Teams are responsible for their own test data


## Patient Check-In Testing docs

### PCI Testing Procedure

1. Have an Appointment in the CHYSHY VistA(s), using the clinincs RClinic1, RClinic2, RClini3
1. Submit your claim
1. Clean up claim created for the user in the [BTSSS CRM](https://dvagov-btsss-qa.crm9.dynamics.com/main.aspx?appid=410c62d5-3681-4423-9170-6801d95cacbe&forceUCI=1&newWindow=true&pagetype=entitylist&etn=contact&viewid=00000000-0000-0000-00aa-000010001004&viewType=1039)

Contact Mark Dewey to get access to the BTSSS CRM 

### [WIP] Testing procedure. 

1. Create Appointment in the CHYSHY VistA(s), using the clinincs RClinic1, RClinic2, RClini3
1. Create an appointment in the PCI check in tool for staging. 
1. Do the check in process, the claims should be submitted after the button for check in is selected. 
1. Clean up claim created for the user in the [BTSSS CRM](https://dvagov-btsss-qa.crm9.dynamics.com/main.aspx?appid=410c62d5-3681-4423-9170-6801d95cacbe&forceUCI=1&newWindow=true&pagetype=entitylist&etn=contact&viewid=00000000-0000-0000-00aa-000010001004&viewType=1039)

Contact Mark Dewey to get access to the BTSSS CRM 

## All Teams - Get access VistA

You will need to fill out a VA9957 form to gain access to the CHYSHR VistA. For best results, do all of these steps on the VA Network using a Desktop in the CAG or AVD, as you'll need to use your PIV credentials to sign the form prior to submission.

1. Download and fill out the form [VA9957 pdf](https://dvagov.sharepoint.com/:b:/r/sites/OITEPMOETS/Shared%20Documents/VA9957.pdf)
    1. Fill out section 1, 2, and 3; [Here is a picture of what to put for section 1 and section 3](./VA9957.section.1.and.3.PNG)
    2. Unless you know them, you can leave items B, D, E and K blank.
    3. For G your Expiration Date is your PIV card expiration date
    4. For H your Contractor Name Employer is the name of your prime in your contract
    5. For I your Contractor Address is the address of your companies physical address
    6. For J your AD Username is the Alias within Outlook Address; you can get to this by doing the following...
       1. Go to Outlook -> Address Book -> Search for your name -> Select your name -> Use the Alias noted as your AD Username
2. Sign and get your VA/OCTO team member to sign and approve (For the travel pay team you can ask Kay Lawyer or Mark Dewey)
3. Submit the signed document at https://dvagov.sharepoint.com/sites/OITEPMOETS/SitePages/SupportRequests.aspx?csf=1&web=1&e=cURoZY&CID=29acea24-f7c1-413f-8091-8579cb0c34c7 by creating an Enterprise Support Request. Please note that you will have to create 2 of these requests! One for Database CHYSHR/983 and one for Database DAYTSHR/984.
    1. This requires you to be on the network to access.
    2. Tips for Filling out the Enterprise Support Request 
       1. Request Type: Test Center Request - Select **"VistA Database User Access Request"**
       2. Created By Network User ID - Enter your AD Username
       3. Request Summary - Enter **"Access to CHYSHR and DAYTSHR"**
       4. Requester Network User ID - Enter your AD Username
       5. Request Description - Enter **"Need access to test travel pay reimbursement in SQA/staging"**
       6. VASI ID - Enter **"2103"**
         1. [VASI link for future reference](https://vaww.vear.ea.oit.va.gov/#system_and_application_domain_vasystems_na.htm)
     7. VASI System Name - Select **"2103"**
     8. Additional VASI IDs - N/A
     9. Project ID - leave blank
     10. Project Name - Enter **"Travel Pay on VA.gov"**
     11. VA Sponsor Organization - Select **"OIT"**
     12. Database Name - Enter **"CHYSHR/983"**
     13. User Name - Enter your AD Username
     14. User Account Operation - Select **"Modify"**
     15. Access Type - Check off **"VistA Database"**
     16. Add your signed VA9957
     17. Submit the Request
4. Wait till the request gets approved. If you have not been approved within 1 month, the email address to follow up is OITCRRIVVTCECS@va.gov. CC: your OCTO Eng lead and OCTO POs on the follow up email.
5. You will receive an email with connection details, including your access and verify codes once your access has been approved.

## Connect to VistA

### IMPORTANT NOTES: 

- All GFEs (and CAG/AVD Desktops) come with Reflection Workspace installed. Find this software on your GFE.  
- Your Reflection Workspace may come already configured to access a VistA or it may be a blank workspace.

### Connect

1. Open the Reflection Workspace App.
1. Select File->New (if it doesn't open automatically with the "Create New Document" modal opened)
1. Create a new session of type VT terminal.
1. The Connection type should be Secure Shell.
1. The Host name/IP Address is in your access email as Server. _NOTE: If the Server name does not work, use the IP Address_ 
1. The User Name will be the VistA database in lowercase.
1. The SSH configuration scheme is blank.
1. Click OK/Create.
1. You should get a Banner then a Password Box.
1. Password will be the VistA database again in lowercase.

The terminal will connect and you see a shell-like prompt that you can type commands

1. Enter your Access Code from your access email. _NOTE: You must type these commands in, copy/paste will not work, even if you have copy/paste CAG priveleges._
1. Then enter your Verify Code from your access email.
1. THE FIRST TIME YOU LOGON YOU WILL NEED TO CHANGE THE VERIFY CODE.
1. Enter the code from the email.
1. Enter a new code in the same type of format.
1. Retype the new code.
1. You should be in VistA commands and navigate the system 
 

## Create an appointment 

> To add appointments for a test patient, they will need to be in MPI and the Enrollment System

1. Connect to the VistA
1. Navigate the menu to get to the `Make Appointment` menu using the following commands
  1. PIMS
  1. Scheduler Manager Menu
  1. Appointment Menu
  1. Make Appointment (this may take two tries due to how the VistA is configured)
1. Select Clinic,
   - PCI has two clinics to chooes from `RCLINIC1` and `RCLINIC2`
   - For Travel Pay from Past Appointments:
     1. Enter `chy test`
     2. Select from one of the options provided
1. Select patient by entering  `last name`, `first name`. This will a search of MPI for that patient. You don't have to type the full name, but if multiple patients are found they a list of selectable patients are displayed
1. Answer `YES` to `IS THIS APPOINTMENT FOR A SERVICE CONNECTED CONDITION`
1. For PCI: Enter `YES` for `IS THIS A 'NEXT AVAILABLE' APPOINTMENT REQUEST?`; For Travel Pay from Past Appointments, select `NO`
1. Select a date, you can use the exact date format or any of the VistA Shorthands.
    1. For future you can use `T@1045` syntax. That will create an appointment for `today at 10:45AM`
    2. For past, use the `MMDDYYYY@Time` format; `07152025@0830` will make an appointment for July 15, 2025 at 8:30 am.
    3. Times are in the VAMC's local timezone
1. Keep the defaults for the rest of the questions (keep hitting enter)
1. When you get to select a clinic, you have created an appointment


## Users in the BTSSS system for PCI

> These are Veterans that are in the ES, MPI, CHYSHR & BTSSS 


| name           | ICN               | DoB        | SSN         | DoB In PCI VistA | Assigned to      |
| -------------- | ----------------- | ---------- | ----------- | ---------------- | ---------------- |
| John Tyler     | 1013755700V648353 | 01/23/1988 | 751-03-6208 | 01/23/1988       | Adrian           |
| John Adams     | 1013753884V701540 | 01/23/1988 | 498-74-2261 | 01/23/1989       | Brian            |
| James Monroe   | 1013755637V279586 | 01/23/1988 | 640-10-5797 | 01/23/1990       | Kanchana         |
| James Madison  | 1013742142V598816 | 01/23/1988 | 585-97-6215 | 01/23/1991       | Gaurav           |
| Andrew Jackson | 1013755655V483370 | 01/23/1988 | 222-01-4198 | 01/23/1992       | John             |
| -------------- | ----------------- | ---------- | ----------- | ---------------- |----------------  |
| James Polk          | 1013769163V350835 | 01/23/1988  | 001-40-5257 | 01/23/1988         | Lori             |
| James Buchanan      | 1013769822V476185 | 01/23/1988  | 006-14-2896 | 01/23/1988         | Shawn            |
| Rutherford B. Hays | 1013769825V989251 | 01/23/1988  | 379-03-1812 | 01/23/1988         | Ben, Zach        |
| Franklin Pierce     | 1013769808V549653 | 01/23/1988  | 520-84-5793 | 01/23/1988         | Ben, Zach |
| Millard Fillmore    | 1013769801V197302 | 01/23/1988  | 520-11-8319 | 01/23/1988         | Ya-ching, Kelly, Christina |

## Users for Travel Pay from Past Appointments

The default Staging user for Travel Pay from Past Appointments is Nolle Barakat, but any staging user also used by the appointments team will work (i.e. Judy Morrison).

