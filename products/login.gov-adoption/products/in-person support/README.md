## Background

The VA has prioritized investment in the adoption of Login.gov as the primary sign-in method for Veterans accessing their benefits, because it is built on secure, modern technology and integrates easily with other government applications, requiring only one set of login credentials to be used across many sites. Login.gov currently offers remote identity verification along with an in-person option at United States Post Offices, however, these sites are not always prepared to accommodate the needs of Veterans. Consider that:
 - Login.gov relies primarily on remote identity verification, currently. 
  - The current USPS in-person support is offered as a backup, not a primary method of identity proofing.
During our discovery phase, we learned that Veterans are seeking a channel where they can rely on attendants to help them through identity verification.
The number of controls required in NIST 800-63 when identity proofing remotely presents significant challenges. As of the May 2023 Login.gov identity verification report:
Of the applicants that tried to submit documentation, less than 53% successfully completed the process;
Further, ~27% of applicants abandon the process without even attempting to upload their documents.
The draft revision 4 of NIST 800-63 is indicating that an in-person proofing option is required to meet IAL2.

How might we meet Veterans where they are and create a means for Veterans to complete identity verification in person?

## Current Status

We are building an application from the ground up that supports Login.gov users to opt into in person proofing after they are prompted to verify. For our pilot, our target population include veterans who have had a Login.gov account but who have not yet verified their accounts. In addition to the veteran facing application, we are also building screens so that proofing agents may take Veterans through all verifications steps needed to upgrade to an IAL2 account. 

We have created a prototype of our application in Figma using USWDS and Login.gov components since long term this will be a proofing solution for all Login.gov users. We are planning out usability studies in advance of pilot implementation and an observational onsite study.


