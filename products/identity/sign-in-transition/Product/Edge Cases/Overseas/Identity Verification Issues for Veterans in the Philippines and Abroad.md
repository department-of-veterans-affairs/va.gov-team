# Identity Verification Issues for Veterans in the Philippines and Abroad
**Edge Case:** [Veterans Living Abroad](https://jira.devops.va.gov/browse/SITEC-13)\
**Created**: 9 April 2025  
**Last Updated:** 13 May 2025   
**Contributors:** Matthew Declercq

## Situation

Veterans living in the Philippines and other countries outside the US actively face challenges as they attempt to verify their identity and access VA services. Currently, ID.me stands as the sole service that verifies identities outside the US. Veterans actively navigate a specific international verification process, uploading either two primary documents or one primary document alongside two secondary ones, adhering to NIST-defined document standards. Following the upload, Veterans connect with an ID.me trusted referee through a video call. Beyond this demanding verification process, Veterans overseas encounter unusually high issues with SMS-based multi-factor authentication (MFA). Throughout the secure sign-in transition, the VA actively collaborates with staff at the Manila Outpatient Clinic to tackle issues and lower verification barriers for Veterans. 

As of April 14, 2025, the percentage of Veterans in Manila who still actively need to switch to modern credentials has decreased to 38%, down from 49.22% in January.

## Summary of Support Efforts to Date

*Data gathered from SSiT Inbox*

* A customized set of communications resources (email, social media posts, and telephone scripts) was sent to Manila to help ensure Veterans bring all necessary documentation  
* A video walkthrough of the international verification process using Philippines documents was made available for Veterans  
* A direct access link to ID.me support agents was made available during Manila’s 12/17 and 1/14 Sign Up Day Events  
* FAQs were updated on [Creating an Account](https://www.va.gov/resources/creating-an-account-for-vagov/#:~:text=If%20you%20live%20outside%20the%20U.S.%2C%20don%E2%80%99t%20have%20a%20Social%20Security%20number%2C%20or%20don%E2%80%99t%20have%20a%20current%20driver%E2%80%99s%20license%20or%20other%20state%2Dissued%20ID%2C%20you%E2%80%99ll%20need%20to%20choose%20ID.me.%C2%A0) support page to inform Veterans they must use ID.me if they are outside of the US  
* ID.me has confirmed Philippines drivers licences, passports, and VHIC cards can be used for identity verification

## Known Persisting Issues

* Long wait times with ID.me for document review and trusted referee video verification  
* MFA codes and document upload links sent via SMS are not delivered reliably to Veterans in the Philippines. In October, Jeannette Bruno reached out to ID.me to get a better understanding of the issue.   
* ID.me trusted referees are not always accepting Philippines documents that are on the approved document list

## Suggestions to Help Veterans

1. **Meet with Stephanie from Manila VA Medical Facility** - Gather frontline feedback and deepen understanding of the current identity verification challenges.
2. **Establish a Feedback Loop from the Field** - Create a recurring channel with Manila clinic staff (e.g. recurring sync, shared doc) to capture and escalate emerging issues. 
3. **Collaborate with ID.me on SMS Reliability** - Work with ID.me to identify a list of all countries where SMS delivery is unreliable. Assess whether delivery can be improved, explore deprioritizing SMS MFA in those regions, and develop guidance for staff and Veterans accordingly.
