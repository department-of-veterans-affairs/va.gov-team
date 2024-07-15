# Research Plan for Identity, Manage Signed-in Devices, 2011-11

## Background
This research will test an MVP of a "sign out of all devices" button, as well as projected future state that will include information about each device signed in and controls to sign out of each single device.

Currently, users are signed out after 30 minutes of inactivity on the VA.gov website on the desktop browser, which use SSOe as a sign in mediator. When using the VA mobile app, which uses SiS as the mediator, a user's session is maintained for 45 days. With the current setup, the risks associated with being signed into multiple devices is minimal. However, once SiS is pushed to production on VA.gov, a user's session on the desktop will also be maintained for 45 days. While this increase the user experience, it also increasing security concerns, especially around if a user signs in using a shared device or a bad actor is able to gain access to the account. Adding a sign out of devices buttons allows the user to better control their account.

[product info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/30ab41e6c605715935e19f185ba3d6530dc55b81/products/identity/Product%20Briefs/Sign%20in%20Service.md)

### OCTO Objectives 

- Veterans and their families can apply for all benefits online
- Veterans can manage their health services online
- Veterans and their families trust the security, accuracy, and relevancy of VA.gov


### Veteran Journey

Securely accessing VA online services can happen at any stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). The option to log out of all devices will apply to every who signs into VA online and uses the authenticated experience.

## Research Goals	

- Explore Veterans' knowledge of personal device management as well as management of concurrent sessions on multiple devices.
- Explore Veterans' understanding of the use cases for device management and the security implications of multiple active sessions on various devices. 
- Test the user flow for how a Veteran would access device management and signing out of multiple devices at once.

### Outcome

Learn how to effectively communicate to the Veterans the need for device management as well as to uncover how to improve the user experience with various audiences as they navigate through the flow for managing their devices and active signing in sessions.

### Research questions

- Are there any potential concerns about ending sessions and signing people out of their accounts on all devices? (Review previous research on stickiness of sessions).
- Does the prototype allow users to successfully navigate to and utilize the proposed user flow for managing their devices?
- What updates to the user flow could we incorporate to make it more intuitive for Veterans?
- Is there any confusion regarding connected applications and device management?


### Hypothesis

- Veterans will be split on their understanding of a rationale for signing out of all devices.
- Most Veterans will never have used the option of signing out of all of their devices on other websites.
- Veterans will need an explanation of the implications of signing out of all their devices in order to make an informed decision to proceed.
- Veterans will expect the platform to take accountability for their security e.g. if there are suspected instances of malware, phishing scams, etc. the VA.gov website will automatically end all user sessions and inform the Veteran.
- Veterans are willing to sacrifice security for convenience of not having to sign back into their devices.

## Methodology	

Remote usability testing will evaluate the prototype with participants. We’ll use Perigean’s Zoom account for these remote sessions. We plan to test with both mobile and desktop users and with assistive tech users.


### Research materials 

- [prototype](https://www.figma.com/file/gHOZKVka8PnVblchp0dZbJ/Logout-Device?type=design&node-id=0-1&mode=design&t=qruKbF1Z413n4Hlt-0)
- [conversation guide]()

## Recruitment	

### Recruitment approach

We will use Perigean to recruit Veterans for this moderated study. We are looking to include as participants some historically under represented groups for this:

- Mobile users
- Cognitive disabilities

### Recruitment criteria

15 Veterans for at least 12 completed sessions

**Primary criteria (must-haves)**
All participants:
- Must have a computer or mobile phone and be willing to complete their sessions on this device
- Must be willing to share a web browser window on the Zoom call
- Must have a working microphone
- Must have Zoom downloaded to their computer prior to the session and know how to share their screen
- In addition, our primary product criteria includes:
   - Must be Veterans
   - Must have signed into VA.gov in the last 6 months, for any reason


Our primary diversity and inclusion criteria:
- 6 mobile users (none of these can be screen reader users)
- 2 cognitive disabilities


### Screener Questions

- Do you often have trouble remembering things, learning new things, concentrating, or making decisions? [YES, NO] Note: We ask this question because we want to make sure that our tools work for people who live with challenges like these.
- We're looking for at least 2 "YES" for this study

## Timeline

### Prepare

- Pilot participant email:
- Date and time of pilot session:


### Length of sessions
- Session length: **60-minute** sessions 
- Session buffer: **60-minute breaks** in between
- Max sessions per day: 4

  
### Availability
November 13 - 21, 2023

Team Availability | Time (EST)
------------------|--------------
Mon | 9am - Noon, 1 - 7 pm
Tue | 9am - Noon, 1 - 7 pm
Wed | 9am - Noon, 1 - 7 pm
Thur| 9am - Noon, 1 - 7 pm
Fri | 9am - Noon, 1 - 5 pm

Pilot Session | Time (EST)
--------------|----------
tbd | tbd
	
## Team Roles	
- Moderators: Clayton Zook, Charlye Tran
- Research guide writing and task development: Charlye Tran
- Participant recruiting & screening: Perigean
- Project point of contact: Charlye Tran
- Participant(s) for pilot test: 
- Accessibility specialist (for sessions where support for assistive technology may be needed): tbd
- Note-takers: Clayton Zook, Charlye Tran, Josh Matulonis
- Observers: Tom Black
- Team member emails:
clayton.zook@oddball.io
charlye@bluetiger.digital
josh.matulonis@oddball.io
thomas.black2@va.gov
