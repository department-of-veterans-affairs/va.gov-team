# Onboarding

## ePAS and VAEC/AWS Access

### Introduction

The questions of evil and of suffering have troubled humankind since time immemorial; many religions and philosophical systems have been founded in an attempt to grapple with them. Questions like: does true evil exist? is suffering a necessary component of existence? is there meaning to my suffering? is there an afterlife in which wrongdoers are punished for their transgressions and the meek and decent salved and restored? It is not the role of this document to provide answers to these questions, for I haven't any; but these are questions you may ask yourself as you navigate the process of onboarding into the VA Enterprise Cloud.

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

**Prerequisites**: PIV Card

As far as I can tell, actually being able to use GFE or use the VA network via GFE is not required for this step, so you may be able to complete it early in the process.

As of March 2024, this is the process:

- Access MyVA Elevated Privileges at https://epas.r02.med.va.gov/apps/myva/ (only within the VA network).
  - It's not referred to as ePAS here; https://epas.r02.med.va.gov/ uses the words "Electronic Privilege Access System" but refers to this application as MyVA.
- Click "Submit Request."
- Fill in your information on the "Assignee" tab.
  - Note your Domain Name.
  - For Expiration Date, I put the expiration date on my PIV card.
  - For NMEA #1, check out the instructions when you mouseover the light bulb.
    - You probably need to append a 0 to the domain name.
    - You probably need to check "Create".
  - Your COR name, if you don't have it handy, should be available to your PM or DM. You might find it in your (`dsvagovcloud`) AWS onboarding ticket.
- Click the "Roles" tab.
  - The area we're concerned with is the "Groups that represent a role" section on the right.
  - Under "Systems Reside In", specify "VA Enterprise Cloud".
  - Click "Select Groups to Add".
  - The groups we're requesting will depend on the current status of the `vaec-cms` -> `vaec-cie` migration (see [#77640](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77640)).
    - If `vaec-cms` is still active:
      - Search for "AWS-4328" and select `AWS-432896750513-adfs-project-administrators`. This will give you read-write access to `vaec-cms` resources.
    - If `vaec-cie` is still active:
      - Search for "AWS-23951" and select `AWS-239516274380-adfs-project-administrators`. This will give you read-write access to `vaec-cie` resources.
- Click "Save and Submit" at the **top** of the screen.
- Wait for approval.
