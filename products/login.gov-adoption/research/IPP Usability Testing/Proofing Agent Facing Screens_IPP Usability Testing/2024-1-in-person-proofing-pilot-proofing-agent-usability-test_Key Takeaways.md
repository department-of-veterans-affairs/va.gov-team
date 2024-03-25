VA Staff Usability Test Key Takeaways 
======================================

Team

Secure Sign In Transition Team

Date

February 27-March 1, 2024

Seven feedback sessions completed, each session was 50 minutes

### [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/IPP%20Usability%20Testing/Proofing%20Agent%20Facing%20Screens_IPP%20Usability%20Testing/IPP%20Usability%20Test_Proofing%20Agent_Conversation%20Guide.md)

### [Prototype](https://va-in-person-identity-proofing.vercel.app/)

### Goal

In order to support Veterans who may be unable to verify their identity remotely, Office of the Chief Technology Officer has tasked the Secure Sign In Transition team with creating a custom service that meets NIST Identity Assurance Level 2 (IAL2) guidelines, [800-63](https://pages.nist.gov/800-63-3-Implementation-Resources/63A/ial2remote/), and enables Veterans to complete identity verification in person at VA facilities. The service consists of an In-Person Identity Proofing custom application and an appointment at a VAMC with a designated proofing agent. The custom application is a new product that will allow proofing agents to validate proofing documents and use the Identity Toolkit to help Veterans complete identity verification at VA sites. Secure Sign In Transition is a team within OCTO Identity and is working in partnership with Login.gov.\
Gather feedback on the Proofing Agent* facing side of the In-Person Identity Proofing (IPP) application to identify opportunities for improvement and enhance the user experience. Given MHV coordinators experience of upgrading My HealtheVet accounts and supporting Veterans we hope to gather insights on how to improve the usability and receptivity of the IPP application given their expertise with identity verification. MHV Coordinators were provided a link to the prototype application and were encouraged to use the think-aloud technique to share reactions to the screens they saw. Feedback was also gathered with follow up questions.

*Proofing agent, in the context of in person proofing, is akin to the trusted referee needed to assess risk and ensure compliance with IAL2 requirements.

### Feedback on IPP as a service

1.  Positive Response to IPP

The response to the proposed process and use of the IPP application was overwhelmingly positive and validated the need for an in person proofing option to help authorized VA staff complete verifying a Veterans identity. 

-   There is a huge need for a process that allows the Veteran to understand what they are doing and why 

-   Authorized VA staff expressed the great need for the IPP application not just for the Veteran, but so that they can help the Veteran complete the verification process 

-   "This [IPP] is only going to help in the end." (Participant 7)

-   "Actually this seems so much easier. When you do the online process, there's so much back and forth. You have to get a code to your phone, then you have to take pictures, and then there's always an error message. It's very involved. This seems much easier to me." (Participant 3)

1.  IPP was felt familiar to VA staff and VA staff referred to familiar experienced to help them navigate through the application

While IPP is a new application and process, VA staff were still able to understand the tasks and move through the process based on the way that they might complete identity verification currently. 

-   Some VA staff did not need the step by step instructional content designed in the IPP application to start validating a Veteran ID 

-   The process outlined within IPP application was familiar to authorized VA staff 

-   When verifying a Veteran's driver's license (DL), authorized VA staff did slow down and double check the requirements that the IPP application outlines in the form of a checklist 

-   "I would look for an input area to enter the ID information and the expiration date." (Participant 5)

1.  Confusion from both sides on what is verification

Verification continues to be a difficult concept and process to understand. To ensure that Veterans can complete verification, both VA staff and Veterans need to be provided more education. 

-   One participant confused verification with authentication suggesting that further education is needed for both VA staff and Veterans.

-   "They [Veterans] don't understand what is going on. The VA doesn't explain things the way they should or could, it just gives us a foot in the door." (Participant 4)

1.  Not every site is the same, makes IPP hard to be universally adoptable

Not all authorized VA staff  have access to the same resources, spaces, and staff to assist Veterans with the verification process. This could cause potential blockers for IPP to be a uniformed practice that all VA spaces and staff can implement. 

-   Some authorized VA staff might not have the technology IPP 

-   IPP is somewhat device dependant 

-   There are considerations for using IPP outside of VAMC's to verify Veteran identities 

-   "[I] go to VSO & outreach events and get people signed up." (Participant 6) 

### Feedback on features of the IPP service

1.  Internal Control Number (ICN) is familiar, Identity Access Management (IAM) toolkit is less familiar

When authorized VA staff were given instructions to look up Veteran information in the IAM toolkit, most were not familiar with using IAM for this task. They could understand the steps they needed to take when presented with instructional content laid out in the application. They were, however, more familiar with finding someone's ICN in other databases to complete the same task.  

-   IAM is not a standard tool used by authorized VA staff

-   VA staff have heard of IAM toolkit being used for staff look up, not Veteran

-   Authorized VA staff appear to be more comfortable using a known tool to look up ICNs, such as the MHV administrative portal or patient profiles, but can adapt if needed 

-   There will be a learning curve if IPP requires VA staff to use the IAM toolkit to complete the verification process 

-   "I don't know what this IAM toolkit is." (Participant 2)

1.  VHIC increases access as well as risk of fraud

Accepting Veteran Health Insurance Cards (VHIC) would be a preferred ID type for authorized VA staff to accept during the verification process, but it could potentially increase the risk of fraudulent activity.  

-   Authorized VA staff shared that in their experience, most Veterans have a VHIC which would be optimal for access. 

-   Authorized VA staff like the idea of accepting more than one form of identification

-   Even if a Veteran has a VHIC card and are able to also provide a proof of address, VA staff still raise concerns about potential fraudulent activity 

-   "VHIC, yes that is the most important one, most of them have one, usually out for every ten years." (Participant 4)

-   "Given my experience, VHIC is not strong because Veterans sell IDs, proof of address would not be enough." (Participant 5)

1.  Desire for error checking and more granular data fields provided by the application

VA staff expected error messages to pop up when they entered information incorrectly and more guidance or automation to standardize data entry and make it easier for manual input.

-   Need for app to check if errors are made

-   Need data field for suffixes, such as senior or junior 

-   Need application to automatically enter hyphen for social security number

-   Dates can be collected as both DD/MM/YYYY or MM/DD/YYYY, the application should provide guidance

-   "If I go to hit submit, that middle initial or middle name, I want it [the application] to ask that I'm sure I meant to leave this off." (Participant 5)

1.  Desire for more guidance on case number

VA staff wanted more information on how a Veteran can create a case number and access their case number after they elect to do in-person identity proofing should they need to support them. 

-   "If they show up, don't have their case number or some other issue with it, we can have them sign in and go to their Login.gov account. But would it be clear at that point how to get a new case number?" (Participant 3)

1.  Accordion menus caused confusion as a UI component

In trying to modernize VA applications while enabling simplicity, we tested an accordion component as a feature in the application to reduce information overload. However, this component confused participants as it was not common in VA products.

-   VA staff understood the purpose of the screens but did not feel the accordion menus made the task to be done easier

-   Some VA staff recognized the accordion menus but still did not immediately use it until prompted suggesting discomfort 

-   Upon opening the accordion menus on the first screen, VA staff expected to be able to start entering information right away and felt the information provided was redundant or excessive

-   VA staff suggested an information icon that is activated when a mouse is hovering is more familiar and would be welcomed

-   "You want me to open up this?" (Participant 4)

-   "Wow... polycarbonate card body [referring to content providing guidance on features that an authentic identification should have]? What does that mean... reads others and giggles... they can't be serious with this? This is funny [laughs] I'm sorry this is just funny to me. That seems a bit much." (Participant 3)

### Suggestions for IPP

1.  Alternative wording to consider

VA staff had varying responses to certain phrasing and the specific language that is used within the IPP application. 

-   The term "Proofing Agent" was not familiar to VA staff and some even warned that there could be potential confusion with benefits.

-   Authorized VA staff expressed that the way that the term "upgraded" is used for MHV might not be the best way to describe what verification is to Veterans.

-   "That would be great, if they knew, coordinator vs Proofing agent." (Participant 1)

-   [Commenting on the Veteran perspective] "I don't care about proofing, I just want my account updated to premium.' "Let's revisit wording because I don't know if they would really be relating to proofing agents even though that's what it is." (Participant 2)

1.  Opportunities to reduce work

When using the IPP application to complete the task of verifying a Veteran's identity, authorized VA staff called out ways in which they felt like the application had repetitive steps. 

-   Authorized VA staff assumed that parts of the application would be populated by the Veteran ahead of time to reduce duplicative data entry.

-   When asked to manually fill in certain information to verify a Veteran's identity, authorized VA staff stated that these steps where unnecessary or repetitive  

-   "I think it's overkill." (Participant 2)

1.  POA guidance needed

VA staff suggested providing guidance for how to navigate Veterans who are dependent on a caregiver with medical Power of Attorney (POA) as they often have to do workarounds for their current work. 

-   "Elderly people who are under the care of young ones. If they have a POA then that would be the hiccup. I'd have to get the POA and verify it with my people. Make sure it's on file and then verify it with their ID. (Participant 5)

-   "There have been times I haven't when a Veteran wasn't with them and I refused to... or others had to go verify with Veteran and make sure they are able to speak." (Participant 5)

1.  Retrieving correct email is a major pain point IPP needs to be ready for

Ensuring Veterans are using an email address they can access is already a concern for VA staff. VA staff already have workarounds for email retrieval processes and expect IPP to have one in place. 

-   Add prompt at beginning to confirm if they can access email address listed

-   VA staff already have workarounds for shared email addresses being used or changes in address and want to ensure that IPP addresses that

-   Ensuring correct email is already a high priority due to being a source of risk for fraud and expect to see email address with case number when they look up a Veteran in the IPP application

-   "A lot of them don't remember the emails they have...Vets have to make sure that the email is not shared or registered to anyone else...what happens if they can't access the email? They have to contact Login.gov." (Participant 4)
