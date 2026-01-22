# Onboarding

## Prod support resources and steps

[Current Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/zero-failures/production-support-playbook.md)

- Get Access Pager Duty
  - [ecc.pagerduty.com](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-PagerDuty) 
  - https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-PagerDuty
  - Teams to be added to
    - ecc.pageryduty - PCI-API - PBIMUWN
    - ecc.pagerduty - CIE - P5TJKID
- Get Access DataDog 
  - https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog
  - This will likely get you vagov datadog and it would be nice to have tevi and vetext datadog access too
- Add Slack Channels
   - [#check-in-production-support](https://dsva.slack.com/archives/C02UP02HHGX)
   - [#check-in-monitoring](https://dsva.slack.com/archives/C04G3EY2F5W)
   - [#check-in-experience-apm](https://dsva.slack.com/archives/C02U11L00TF)

- Adjust alert settings in slack and pagerduty so that you are notified when on call.
  - Response time should be within 15 minutes

## Dashboards

bookmark these

- [Check in travel](https://vagov.ddog-gov.com/dashboard/5pd-req-u6d/check-in-travel-claims?fromUser=false&refresh_mode=sliding&from_ts=1760028402822&to_ts=1760042802822&live=true)
- [Check in](https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api?fromUser=false&refresh_mode=sliding&from_ts=1760028495865&to_ts=1760042895865&live=true)
- [Community care direct scheduling](https://vagov.ddog-gov.com/dashboard/t4t-axu-zvb/vaos-community-care-direct-scheduling?fromUser=false&refresh_mode=paused&from_ts=1756904152500&to_ts=1756915094727&live=false)

## Holiday freeze

When there is a federal holiday we should silence alerts.
[Docs](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/docs/holiday-alerting-freeze.md)


## ePAS and VAEC/AWS Access

### Introduction

The broader process is documented elsewhere and should be provided to you as a neat (albeit possibly daunting) ticket. This document picks up where that one leaves off.

### Terminology

- **AVD**: Azure Virtual Desktop, another way of screen-sharing into a virtual machine on the VA network. Windows-only and the new standard.
- **AWS**: Amazon Web Services. We currently interact with 2-3 AWS accounts:
  - `dsvagovcloud`, which contains some public-ish services
  - `vaec-cms`, which is a legacy AWS account
  - `vaec-cie`, to which `vaec-cms` resources will soon be migrated
- **CAG**: Citrix Access Gateway, a way of screen-sharing into a virtual machine on the VA network. Essential for Mac and Linux users, and therefore deprecated.
- **ePAS**: Electronic Privilege Access System. Also referred to as ePAS. The word "ePAS" does not appear anywhere in the actual ePAS interface, but only pages linking to it; it is referred to as "MyVA Elevated Privileges."
- **GFE**: Government-Furnished Equipment, a laptop that you can use to access the VA network over a VPN using your PIV card.
- **MEA**: Mail-Enabled Account, your normal user account within the VA network.
- **NMEA**: Non-Mail-Enabled Account, an account with elevated privileges within the VA network.
- **PAS**: Another name for ePAS. Commonly seen as "PAS 2.0."
- **PIV**: Personal Identity Verification, a smart card with your face and information that you can use as a passkey to various services.
- **RAPortal**: Remote Access Information and Media Portal, at https://raportal.vpn.va.gov/
- **RAP SSP**: Remote Access Portal Self-Service Portal, at https://vaww.ramp.vansoc.va.gov/selfservice/
- **RESCUE**: Remote Enterprise Security Compliance Update Environment, or the VPN you use from GFE. Nothing to do with support or recovery.
- **ServiceNow**: The ticketing system used within the VA network for at least some of the work.
- **VPN**: Virtual Private Network, a way of virtually joining a remote network (in this case, the VA network) from your local network (generally your home network).
- **yourIT**: Another name for ServiceNow, I guess.

### Required Trainings (in TMS)
- 3867205 Training for Elevated Privileges for System Access
- 1016925 Information Security Role-Based Training for Software Developers

### GFE

**Prerequisites**: PIV card, CAG or AVD access via PIV to the VA Network, VA email address, etc

You should request a GFE laptop, or have one requested for you, as part of your onboarding. This laptop will allow you to connect directly to the VA network over a VPN using your PIV card. You'll need to go to a nearby VA office (you can specify) and pick up the laptop, but you need an appointment to do so. Therefore, you should wait to be contacted.

As of March 2024, this is the process:

- Your delivery manager, contracting company's IT staff, or someone else will open a ServiceNow ticket (aka yourIT) along the lines of _New Hire Equipment Request for Firstname McLastname (MEA)_.
  - Of course, you will need to log in to the VA network and check your VA email via CAG or AVD in order to see emails concerning this ticket.
  - The ticket will be closed without comment; do not be concerned, as mysterious forces are at work. 
- At some point, you may receive an automated email from an inventory tracking system named Maximo, operated by the VA EAWM (Enterprise Asset and Work Management) organization.
  - This email will direct you to sign for the laptop, even though you haven't received it yet.
    - This is probably inaccurate; my understanding is that you need to sign for the laptop when it is in your physical possession. When you physically receive the laptop, you will be directed to click the link and sign for the laptop.
- Someone from the IT department at the VA office should contact you. From there, you can make an appointment to pick up the laptop.
  - Check your VA email regularly.
  - Check Microsoft Teams.
  - Check with your DM, contracting company's IT staff, etc.
  - Check your phone messages.
  - Contact will probably not occur via DSVA Slack, contractor email, carrier pigeon, message wrapped around the shaft of an arrow shot into your home office, text, etc. I don't know how contact is actually supposed to happen. The only contact I received was an email to my VA email account stating that they were unable to contact me, and they never responded to my emails. I contacted my contracting company's onboarding liaison, but I probably should've contacted the employee via Teams.
- Pick up the laptop at the designated time and place.
  - You'll sign into the laptop using your PIV card to verify basic functionality.
  - Do not interpret this as evidence you can sign into the VA network via VPN. That is a different process.

### GFE VPN Access

**Prerequisites**: GFE, PIV Card

Now that you have your GFE, you can request the ability to use the VPN to connect to the VA network. You need access to the VA network to request access to the VA network. This means you cannot use your GFE to request access. Instead, you must request access via CAG or AVD.

Note also that the VPN is named "RESCUE." This _is_ the VPN you should use. This may be confusing to a new user, who might mistake it for a support or recovery system. Why the primary utility of this machine is named after something you do only as a last resort is not known.

As of March 2024, this is the process:

- Access the Remote Access Portal at https://vaww.ramp.vansoc.va.gov/selfservice/ (only within the VA network).
- In the upper left corner, you will see a link saying "Self Service Portal". Click it.
- Click the image captioned "Request Access".
- Check the checkbox for "VA-Issued Laptop/Desktop" and click "Submit".
  - Don't check any of the checkboxes for the remote access methods below.
- Wait for approval; at some point, you should receive an email to your contractor email address letting you know that your request has been approved.
- To use the VPN, open Citrix AnyConnect from the utility tray on your GFE laptop.
  - Note that the connection process is rather long and includes a security scan of your device, so if you're encountering connection errors attempting to access VA network resources, don't be concerned just yet.

### ePAS/PAS 2.0/MyVA Elevated Privileges

**Prerequisites**: PIV Card, required TMS trainings from above.

As far as I can tell, actually being able to use GFE or use the VA network via GFE is not required for this step, so you may be able to complete it early in the process. 

The required trainings from above _are_ required. In my case, I had to email my delivery manager and the COR the certificates from the required trainings before I could be approved.

Additionally, there are some videos in [this SharePoint](https://dvagov.sharepoint.com/sites/PrivilegeAccessSecuritySolution/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FPrivilegeAccessSecuritySolution%2FShared%20Documents%2FPAS%20Training%20Videos&FolderCTID=0x012000D6AC415BA544CD4B826753A9CDBA73A8) that I found helpful, specifically [this one](https://dvagov.sharepoint.com/sites/PrivilegeAccessSecuritySolution/_layouts/15/stream.aspx?id=%2Fsites%2FPrivilegeAccessSecuritySolution%2FShared%20Documents%2FPAS%20Training%20Videos%2F%233%20%2D%20How%20to%20request%20PAS%202%2E0%20access%20in%20ePAS%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview) about requesting access to PAS 2.0. I didn't see these shared or listed in any other location, but the latter was mentioned after my most recent rejection.

As of April 2024, this is the process:

- Access MyVA Elevated Privileges at https://epas.r02.med.va.gov/apps/myva/ (only within the VA network).
  - It's not referred to as ePAS here; https://epas.r02.med.va.gov/ uses the words "Electronic Privilege Access System" but refers to this application as MyVA.
- Click "Submit Request."
- Fill in your information on the "Assignee" tab.
  - Note your Domain Name.
  - For Expiration Date, I put the expiration date on my PIV card.
  - For NMEA #1, check out the instructions when you mouseover the light bulb.
    - You probably need to append a 0 to the domain name.
    - You probably need to check "Create".
  - _Also_ copy your MEA to a separate field (e.g. NMEA #2).
  - Your COR name, if you don't have it handy, should be available to your PM or DM. You might find it in your (`dsvagovcloud`) AWS onboarding ticket.
- Click the "Roles" tab.
  - The first roles we need to add are in the "Select a Standard Role" section on the left.
    - Production CyberArk User:
      - **Systems Reside In**: Infrastructure Operations
      - **Scope of Role**: CyberArk
      - **Role**: CyberArk
      - **Sub-Role**: CyberArk User
      - **Applies to**: Production
  - The second area we're concerned with is the "Groups that represent a role" section on the right.
    - VA PAS Users:
      - **Systems Reside In**: Infrastructure Operations
      - **Select Groups to Add**: Search for `VA PAS Users` and add it.
    - Other groups we're requesting will depend on the current status of the `vaec-cms` -> `vaec-cie` migration (see [#77640](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77640)).
      - `vaec-cms` administrators (if `vaec-cms` is still active and in use):
        - **Systems Reside In**: VA Enterprise Cloud
        - **Select Groups to Add**: Search for "AWS-4328" and select `AWS-432896750513-adfs-project-administrators`. This will give you read-write access to `vaec-cms` resources.
      - `vaec-cie` administrators (if `vaec-cie` is active and in use yet):
        - **Systems Reside In**: VA Enterprise Cloud
        - **Select Groups to Add**: Search for "AWS-23951" and select `AWS-239516274380-adfs-project-administrators`. This will give you read-write access to `vaec-cie` resources.
- Scroll down to the "Granted" section. We now need to provide details to justify our request and ensure the correct account is mapped to each requested role.
  - Production CyberArk User:
    - **Account**: Your MEA account (i.e. without 0). We are granted access via PIV card.
    - **Justification**:
      - Include the name of your NMEA account (i.e. with 0).
      - Second line gives detail. The words used in one of the videos were "VA PIV with PAS creates MFA into the password vault."
      - Third line is justification: "Needed for access to elevated privileges within the VA PAS solution."
  - VA PAS Users: (as above)
  - `vaec-cms`/`vaec-cie` administrators:
    - **Account**: Your NMEA account; we've gone through this process so that we can use our MEA account to use our NMEA account to manage something somewhere.
    - **Justification**: Your team membership and what you need access for.
- Click "Save and Submit" at the **top** of the screen.
- Wait for approval.

### PAS 2.0 Access

**Prerequisites**: All of above, plus the "Welcome to PAS 2.0" email.

If all goes well, your various accounts will be granted the appropriate groups and roles, and you will receive a "Welcome to PAS 2.0" email.

**Don't click anything just yet!** If you're the kind of person who lets their GFE idle overnight, you might encounter a problem where Citrix hangs and eventually returns an opaque "licensing failed" error. This is because credentials need to be synchronized between your various user accounts on and off your GFE, and this only happens at certain times. If this is you, reboot your GFE before you go any further.

Once you've rebooted, you should be able to log into CyberArk (using your PIV and your MEA account), and you should see your NMEA account in the main view, along with a "Connect" dropdown.

To get into AWS, this is the procedure:
- Login to CyberArk.

#### Old Procedure
- Click the Connect dropdown and select "Citrix".
- Wait for everything to happen. If you get the long hang and "licensing failed" failure, reboot again.
- Eventually, you should be able to access the Citrix Application Store.
- Select "Main Admin Tools". This will download a Citrix ICA file, which you should click and open.
- Citrix may take a long time to actually complete a connection to the environment.
  - This step may fail multiple times. In my case, it failed about five times in a row, always because the connection timed out.
  - Sometimes, I was logged out of CyberArk too and had to log back in there before I could re-attempt the connection to the Citrix Application Store and from there re-attempt a connection to the actual environment I was trying to reach.
- Eventually, you should arrive at a working desktop, at which point you can go to https://prod.adfs.federation.va.gov/adfs/ls/idpinitiatedsignon.aspx .
- From there, you can sign in and then select a specific application, e.g. AWS WebGov Cloud.
- You can select whichever account you want to access, e.g. `vaec-cms` or `vaec-cie`.

#### New Procedure
- Click the Connect dropdown and select "AWS GovCloud".
- From there, you can sign in and then select a specific application, e.g. AWS WebGov Cloud.
- You can select whichever account you want to access, e.g. `vaec-cms` or `vaec-cie`.

### GFE Admin Privileges

**Prerequisites**: GFE, Zero account

As a developer, you probably need administrator privileges on your GFE so that you can use the AWS CLI, etc.

To get admin access to your GFE, this is the procedure:
- Open `cmd.exe` and run `ipconfig /all`.
  - Copy down the value for "Host Name" (e.g. `CLE-LT02482093FW`)
- Navigate to the MyVA Elevated Privileges Site (https://epas.r02.med.va.gov/apps/myva/)
- Click "Submit Request"
- Fill out the first tab as you have before
- In the "Roles" tab:
  - Under "Administration Role for a workstation/machine" (middle column)
  - Select "Infrastructure Operations"
  - Provide the host name of your machine from above.
  - Click "Add Machine"
- Scroll down and ensure that the Account for the local machine is your NMEA (i.e. Zero) account.
- In "Justification/Details", write "I'm a developer and I need administrator privileges to install developer tools."
