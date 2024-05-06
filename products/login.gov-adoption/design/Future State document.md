# Future State document In-Person Identity Proofing Future State Flow 

Date Last Modified May 5, 2024 
Designed by: 
Sofia Kirkman, Service Designer 
Josie Griffith, UX Designer 

 
## Context

In-Person Identity Proofing (IPP) is a prototype  in person identity verification service that will be piloted in two phases: first at the Fayetteville VA Medical Center in Fayetteville, AR on May 20-23,204 and then at Long Beach VA Medical Center in Long Beach, California on a date yet to be finalized. During our pilot phase, we aim to test the feasibility of the main flow of the service which is considered to be a “happy path.” On the happy path, a Veteran will learn about what in person proofing is, discover what they need to bring to their walk-in appointment, select a preferred proofing site (with limited options for pilot), confirm their selection, and receive confirmation details via email. Once the Veteran arrives at their proofing site, an authorized VA staff member, referred to as aProofing Agent, will meet them and verify their identity using the forms of identification and the confirmation case number that the Veteran provides. The Proofing Agent will validate the Veteran’s information against information on the Master Person Index database (MPI) which they will access via the Identity Management Toolkit (IAM Toolkit).

## Purpose

We have thoroughly considered the optimal pathway for Veterans and Proofing Agents to follow for Pilot 1, but we are aware of alternative pathways that will not be tested for feasibility or quality due to time constraints, limited resources, and dependencies on other VA services that we have yet to collaborate with. In this document, we will capture the future state of our service. We will demonstrate understanding of how alternative and additional pathways may be integrated with the current service to improve the overall robustness and inclusivity. We prioritized pathways that we discovered through our user research, but we also include pathways that show how our service can anticipate future needs of the VA and Veteran users.
For now, this is a living document that will be iterated on up until August 17, 2024, the end of the CEDAR Identity contract. Keeping this document iterative through agile practices ensures that we stay up to date on the best ways to make these future state pathways possible. This document also serves to illustrate the pathways forward for In-Person Identity Proofing if integrated into the VA product ecosystem and made available to the public.

## Walk in User Flow

After conducting SME interviews and Proofing Agent Usability Tests with MHV Coordinators, we learned that VA Staff are used to Veterans walking in to verify their identity. In fact, MHV Coordinatorsexpect that the majority of Veterans would walk in without an appointment for In-Person Identity Proofing even if an appointment option is offered. Veterans need a way to learn about In-Person Identity Proofing  as an option even if they are already onsite at a VA Medical Center. Our team designed a flow that would allow Veterans to discover In-Person Proofing, complete their intake process, and see a Proofing Agent all within the same day if they are already onsite. We present the following use case: 
Darryl is a male 87 year old Veteran who has been using DS Logon to access VA.gov. He hears about In Person Proofing from his doctor while he is at his local VA Medical Center. His doctor recommends him to create a modern credential and verify his identity so that he can maintain his access to his healthcare and benefits on VA.gov. Darryl is confused by the shift to modern credentials and wants to talk to another person to guide him through the process. His doctor refers him to the front desk who can help him get started with the proofing process.
As Darryl checks out from his appointment, the front desk refers to a note from the doctor and tells Darryl how he may set up a modern credential. They hand him a pamphlet which contains steps and information for gaining a modern credential and verifying it. Darryl doesn’t use a smart phone, but fortunately he is with his son, Jamie. Jamie helps his father use his own smartphone. Once Jamie finishes creating a basic modern credential, Jamie asks for directions from the front desk to the Proofing Agent within the facility, but he sees there is signage that points to where he needs to go to meet the Proofing Agent.
Darryl has brought his driver’s license, which is unexpired, with him but he relies on Jamie to help him retrieve his social security number which fortunately only needs to be recalled verbally and not shown. Jamie is relieved because Darryl has all of the documents he needed to get verified that day, but he is also reassured by the Proofing Agent that they could help Darryl verify remotely if Darryl could not recall his SSN on his own. Darryl wishes that this service accepted more forms of identification though because he is not driving anymore and he is not planning on renewing his license after it expires. Darryl is pleased because he was able to take care of a crucial process with the help of his son and a trained VA staff member whom he trusts. 

New additions:
Pamphlets (paper and digital) with step by step guidance for creating and verifying an account
Signage guiding the applicant to the Proofing Agent
Training for VA staff to educate and assist Veterans in creating verified modern credentials 
Option for more accepted forms of identification

[insert photo of flow]

## Reschedule User Flow

During usability testing with Veterans, we heard many Veterans ask about what they would need to do if they had made a walk-in appointment through the In-Person Proofing application, but they later realized they could not make the appointment. The appointment change could be due to a sudden emergency, illness, or other time conflicts. Veterans need a pathway where they can reschedule their walk in and receive a new confirmation email with their updated details. To respond to this need we present the following use case as a solution:

Hunter is a 50 year old female Veteran who had a Login.gov account, but she never verified it because she was used to using My HealtheVet (MHV) to sign in to VA.gov. After learning from friends and online from VA News Login.gov and ID.me are more secure sign-in credentials for protecting her information, she tries using her Login.gov account to sign in. She encounters a prompt that tells her she needs to verify her account and she clicks on a link that sends her to Login.gov where she was presented with several verification options. She chose in person because she was skeptical of identity fraud. She used the in-person proofing application to set up a walk-in appointment at her closest VA Medical Center. 
A few days later, Hunter realizes that she needs to go out of town on business so she would not be able to make her walk-in appointment within the next 10 business days. She wants to make sure that she would not lose her ability to come in again, so she goes back to the In-Person Proofing Application to find out what she needs to do.
On the application’s landing page, she sees there is an option to reschedule her appointment. When she clicks on that button, she is taken to the page where she may select the date she would like to come in. She successfully chooses a new date and receives an email that contains the details for her updated walk-in appointment.

New additions: 
New page accessible from the application landing page that  allows Veterans to reschedule their appointment without having to go through the entire In-Person Identity Proofing process again 
A date range feature that allows Veterans to pick a date range that works best for them rather than immediately starting the 10 day window from the present time and/or a date range field that allows Veterans to manually type in a preferred 10 day window of time. 

[insert photo of flow]

## Bundling Appointment Flow (In Progress)
