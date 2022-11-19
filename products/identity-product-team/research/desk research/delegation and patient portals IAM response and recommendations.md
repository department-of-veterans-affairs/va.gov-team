# Delegation and Patient Portals
IAM response to Team Connect Pain Points Review 
<br> Version 1.0 
<br> Jun 25, 2021

#### I.	INTRODUCTION	1
#### II.	IAM Response and Recommendations	2
#### III.	Patient and Portal Flow	3
#### IV.	Delegate and Portal Flow	4

## INTRODUCTION
Dr. Jolie Haun and Team Connect performed an independent review of a Delegation Pilot involving the IAM Veteran Delegation Tool (VDT) and MyHealtheVet (MHV). The review was based on detailed interviews with users and yielded a report that included pain points that covered 
- Need for better overall guidance for veterans and prospective delegates before starting the delegation process
- Difficulty determining the correct which sign-in partner to use
- Difficulty registering with a sign-in partner
- Lengthy MHV registration processes
- Usability concerns with VDT
- Usability concerns with IAM electronic signature
- Usability concerns with MHV for Delegates
- Confusion among clinicians when Delegates used MHV Secure Messaging on behalf of a veteran

These were presented as “IAM VDT Pain Points and Recommendations” but in fact address the full impact of Delegation across a range of systems.   As the Pilot was executed with MHV, interactions with Cerner Patient Portal were not addressed. However, Delegations stored in VDT apply to Cerner. 
Note that the Team Connect report included other Pain Points related to Delegation, include some directed usability of MHV and Secure Messaging after the delegation is in place – these are not addressed in this response. 

## IAM Response and Recommendations  
This document provides a response to the Pain Points document by putting the pain points in a context of overall busines flow. The IAM team has done this in hopes of providing a fruitful basis for analysis of changes needed across the board to provide a robust solution to support a successful rollout of delegation for patient portals. 

### IAM Recommendations 
1. Cerner Patient Portal must be included in any thinking about the future, and material must be provided to patients and delegates about which portal to select as part of setting up a Delegate 
2. Based on the feedback in the report, and additional complexity introduced by the presence of the Cerner option, there will need to be a single home source of information for Patients and Delegates about the choice of portals, end-to-end process across multiple systems and other helpful information. This information has not been fully assembled as of this writing, and there is no specific location set up for it to be hosted.  It is possible that such information might reside on va.gov 
3. In an initial IAM technical review of As-Is flows in this document flows, IAM architecture emphasized the need to maintain identity integrity throughout. One specific recommendation is to have Delegate portal account registration be based on the Delegate’s SecID (a user identifier issued by IAM). 

### Suggested Path Forward
The Pain Points related to establishing portal accounts and the delegation relationship crop up in different ways for the patient and the delegate. The best way to ensure each pain point is fully addressed in work going forward is to lay out the full patient flow and the full delegate flow and illustrate where the pain points occur for each type of stakeholder. Here are the key steps as illustrated in the As-Is diagrams below

### Patient Steps
1. Establish SSOe-Enabled Patient Portal Account
2. Send Email Invitation
3. Create and Sign Delegation Form
4. Notification that Delegate has accepted

### Delegate Steps
1. Receive Invite
2. Create Sign-In Partner Account
3. Indicate Interest in acting as Delegate
4. Confirm Delegation
5. Navigate to Portal
6. Delegate Create Portal Acct & View Patient Record

The diagrams below include a lane titled “Portal Guidance for patients and delegates(va.gov?)." This is a placeholder for TBD location for the information and guidance referenced in Recommendation 2 above. 

## Patient and Portal Flow

<img width="778" alt="Screen Shot 2022-11-19 at 9 24 25 AM" src="https://user-images.githubusercontent.com/10949237/202855566-20dc7d11-72ac-45da-9d64-f2ad571c12a2.png">

## Delegate and Portal Flow

<img width="677" alt="Screen Shot 2022-11-19 at 9 25 13 AM" src="https://user-images.githubusercontent.com/10949237/202855615-d980afa7-5f07-4166-bd06-a207317b09b8.png">
