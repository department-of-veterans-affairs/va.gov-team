# Secure Sign In Transition Team-In Person Proofing Pilot

[Sophia Philip](https://dsva.slack.com/team/U05HPDPB91S) & [Gus Schissler](https://dsva.slack.com/team/U061Z6S2X46)

Jump to:

* [Hypothesis and conclusions](#hypothesis-and-conclusions)
* [Insights](#insights)
* [Recommendations](#recommendations)
  * [For the IPP Service](#recommendations-for-the-in-person-proofing-service)
  * [For the application](#recommendations-for-the-application)
  * [For OCTO Identity](#recommendations-for-octo-identity)
  * [For the VA](#recommendations-for-veteran-affairs)
  * [For OCTO Research](#recommendations-for-octo-research)
* [Methodology](#methodology)
* [Demographics](#demographics)
* [Appendix](#appendix)
  * [Intercept interviews](#appendix-1-intercept-interviews)
  * [Observation Study](#appendix-2-observational-study)
  * [Shadowing Sessions](#appendix-3-shadowing-sessions)



In Person Proofing (IPP) is a service that provides an in person method for validating a login.gov account. A Veteran must have a validated account in order to access their benefits on VA.gov (as well as services at other federal and state agencies).

The Secure Sign in Transition team has built a prototype service and application that allows for Veterans to verify their Login.gov account in person at a VA Medical center as an addition to the verification services that currently exist virtually on Login.gov and in person at United States Post Offices.

This service uses a Veteran-facing application (called "Intake) and a VA Staff member application (called "Proofing") to guide both participants through the steps needed to verify a Veteran's Login.gov account in a way that satisfies [NIST Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) for Identity Assurance Level 2

## Research Goals

1. Learn how Veterans and VA staff experience in-person proofing by simulating a real-world experience.
2. Prove that Veterans who elect in-person proofing can have an easy, streamlined, and secure experience when verifying their identity in person with a VA staff member.
3. Identify improvements for the application and service in preparation for a scaled service rollout to VA facilities.

## Research Questions

1. How might we learn from a pilot where the service functions in an uncontrolled environment with organic interactions between stakeholders?
2. How might we identify usability problems through on-site testing in advance of building out a production-ready version of the application?

## Methodology (summary)

The research team conducted moderated research sessions in person at the Baltimore VA Medical Center between June 10 and June 14, 2024. We asked participants to go through the In Person Proofing process facilitated by the Baltimore My HealtheVet coordinator with a test account for Login.gov. After the service was finished, participants filled out a survey.

An expanded methodology section can be found at the end of this document: [Methodology](#methodology)

Additional research activities included:

* 11 [Intercept Interviews](#appendix-1-intercept-interviews)
* 5 [Observational Studies](#appendix-2-observational-study)
* 3 [Shadowing Sessions](#appendix-3-shadowing-sessions)

## Hypothesis and Conclusions

||||
|--- |--- |--- |
|Participant Role|Hypothesis|Outcome|
|VA Staff|VA staff will be able to easily navigate through the in-person proofing application and complete verification without training.|Mostly True|
|VA Staff|If verification is completed successfully, VA staff will experience either no change or positive change in attitudes toward the identity verification process.|True|
|VA Staff|VA staff will anticipate questions from the Veterans and have a standard explanation for identity verification.|Mostly True|
|Veterans & Caregivers|Veterans will be able to easily navigate through the custom application and complete verification.|Mostly True|
|Veterans & Caregivers|If verification is completed successfully, Veterans will experience either no change or positive change in attitudes toward the identity verification process.|Mostly True|
|Veterans & Caregivers|Veterans will understand why they are completing identity verification and what benefits it will provide to them.|Somewhat True|

### 1. VA staff will be able to easily navigate through the in-person proofing application and complete verification without training.

**Mostly true.** 

The VA staff member responded with positive feedback in the surveys that they completed on the first and last day of the pilot. Their responses changed from “very confident” to “extremely confident” in using the application. They responded with “very confident” in response to the survey question of other VA staff being able to use the application. 

>“The IPP application process was very straightforward” (VA staff survey response)

>“The process gets easier after I complete the IPP each time” (VA staff survey response)

Two Veterans noted that the VA staff seemed confident in using the IPP application.

>“They knew what they wanted, which format to ask for + the info needed to verify me.” (P2, survey response). 

The VA staff did mention that “mandatory training” should be provided and that the “ICN [Internal Control Number]” was something they had not heard of. The VA staff did not know about nor were they able to access the Identity Toolkit as it was not available to them. Instead, the VA staff used the CPRS, Computerized Patient Record System, to retrieve participant information. The CPRS can only pull patient information for Veterans who have a My Health_e_Vet account. As a result, two participants were unable to be located in CPRS as one (P2) had a deactivated MHV account due to inactivity while another (P4) never created a MHV account. The VA staff attempted to find the participants’ information by reaching out to the eligibility department via Microsoft Teams. An alternative pathway for VA staff to verify Veterans’ information against MPI needs to be identified in order to ensure VA staff’s ease of use.

### 2. If verification is completed successfully, VA staff will experience either no change or positive change in attitudes toward the identity verification process.

**True**

In their survey responses, the VA staff described the in-person identity proofing service positively. They also noted on the first and last day that in-person identity proofing will make verification easier for Veterans and encourage them to create accounts for VA.gov.

>“I am confident that the IPP will reduce the stress for older veterans when they are trying to verify their identity” (VA staff survey response)

>“This will make the verification process easier and less stressful for veterans who are not tech savvy” (VA staff survey response)

### 3. VA staff will anticipate questions from the Veterans and have a standard explanation for identity verification.

**Mostly True.**

The VA staff already provides support to Veterans to verify for their sign-in accounts and are prepared to answer questions regarding verification. Their level of confidence in explaining the in-person identity proofing service increased from “very confident” to “extremely confident” between the first and last day of the pilot. However, they did note that multi-factor authentication is confusing to older Veterans. This response suggests that more content and support is needed for MHV Coordinators to ensure Veterans understand both verification and authentication.

>“Many older veterans still do not understand the purpose of multi-factor authentication after explaining it to them.” (VA staff survey response)

### 4. Veterans will be able to easily navigate through the custom application and complete verification.

**Mostly True.**

All participants (P1-5) expressed positive views on navigating the application in both moderated sessions and surveys

>“Pretty easy for those who have never used the system” (P3).

Three participants (P1, P2, and P4) got confused on the site selection screen. The screen has a map with a red location pointer already populated even though no site is selected, the search bar has pre-populated gray placeholder text to demonstrate example text but participants were unsure if they could edit the text. P4 noted that some people might not know that “postal” code is the same as a zip code.

>“It was an easy process that was basically very intuitive (all but the screen w/ the map on it).” (P1 survey response)

P1 and P2 did not agree with the terminology of “registering” for a “walk-in appointment”.  P1 suggested that the term “appointment” be dropped. P2 said the text content needed to clarify whether registering was verification or just setting up the verification appointment. 

>“Confused by the steps to set up a walk-in appointment, register here or in-person? Which are we doing?” (P2)

### 5. If verification is completed successfully, Veterans will experience either no change or positive change in attitudes toward the identity verification process.

**Mostly True.**

Four out of five participants (P1, P2, P4, and P5) shared a positive attitude in response to the in-person proofing service. Some (P2, P4, and P5) commented that providing an in-person option would be helpful for Veterans who might need it due to lack of comfort with technology or access to technology. P1 noted that the way the in-person identity proofing service was set up, in a private room, and the manner in which private information was collected added to their sense of security. P1 and P5 both raised concern over the constant risk Veteran Affairs still must navigate to protect Veterans’ data.

>“Room was conducive to conducting in-person identity verificationWell lit, well ventilated, comfortable chair, most importantly privacy was no[sic] compromised” (P5, survey response)

>“Experience with the VA has been good with regard to identity security... can never, however, say extremely confident as I know there are forces out there chipping away at our cybersecurity for various nefarious purposes.” (P1, survey response) 

### 6. Veterans will understand why they are completing identity verification and what benefits it will provide to them.

**Somewhat true**

Four participants (P1, P2, P4, P5) expressed mixed levels of understanding of why they are completing identity verification. All understood the benefits that verification would provide.

>“You think I could explain why a Veteran would need to get verified in order to ensure the right person is at appointments, getting meds...etc. but also to safeguard benefits.” (P2 survey response)

Confusion arose in understanding the difference between the four sign-in options and whether verification could be done online instead of in person. Speaking with the VA staff addressed that confusion but two participants expected more information to be provided, P2 and P4. 

>“I'm not sure why we could not do the verification online if I had multiple ID options to cross check my verification - eg SSN, DOB, service, other identifiers plus two-factor auth - but I could see why others might want to verify with a person.” (P4 survey response)

One participant (P5) felt that the requirements for identity verification and the repetition of being verified and authenticated multiple times are not clearly explained by Veteran Affairs resulting in a negative view toward verification.

>“Yeah. Yeah. Why? And that should we treat veterans this way? Why do we have to torture them…what's the rationale for having to enter the information and verify it every single time?” (P5)

## Insights

Our research has generated the following insights:

1. [In-Person Identity Proofing is simple and straightforward](#1-in-person-identity-proofing-is-simple-and-straightforward)
2. [IPP is so quick and easy, it’s not worth doing as a standalone service](#2-ipp-is-so-quick-and-easy-its-not-worth-doing-as-a-standalone-service)
3. [Security is improved with human interaction but feels slow with technological steps](#3-security-is-improved-with-human-interaction-but-feels-slow-with-technological-steps)
4. [“Last four” is ubiquitous, ICN is not](#4-last-four-is-ubiquitous-icn-is-not)
5. [Veterans developed expectations for IPP based on interactions with analogous services](#5-if-verification-is-completed-successfully-veterans-will-experience-either-no-change-or-positive-change-in-attitudes-toward-the-identity-verification-process)
6. [IPP is not for everyone, but providing it as an option ensures inclusion](#6-ipp-is-not-for-everyone-but-providing-it-as-an-option-ensures-inclusion)

Insights are supported by evidence found in the moderated sessions, surveys completed by VA staff and Veterans, and the [intercept interview](#appendix-1-intercept-interviews) data collected during the pilot.

### 1. In-Person Identity Proofing is simple and straightforward

All five participants and the VA staff commented that the in-person identity proofing application and service is simple and straightforward. The service was perceived as an “easy process that was basically very intuitive” (P1) and will “reduce the stress for older Veterans” (VA Staff, survey response) when verifying. Overall, the “flows make sense” and “having a live person to answer questions is always helpful” (P5). After completing the moderated session, 3/5 participants responded in the survey that their experience using the application and completing the service was “very easy”. All participants (5/5) responded to the survey that they were either “very confident” or “extremely” confident that other Veterans could use the in person service to complete identity verification.

Certain pain points were identified during the service.

* The map component and search bar on the site selection screen during the intake process caused confusion. P1, P2, P3, and P4 did not initially understand that they could enter in their own zip code and were confused by the example text that was pre-populated. Participants expected site options to be close to their home zip code and were confused that we had limited the selection to around the pilot location in Baltimore.
* The term “walk-in appointment” and “register” confused P1 and P2. P1 recommended dropping the term “appointment” and P2 said the text did not clarify if they would be registering online or in-person.
* P1 was frustrated having to switch between their smartphone and the computer, noting that the need to verify to set up their test Login.gov account and then verify again to login and begin in-person proofing process was “stupid”. P2 also noted that the service could be “simpler” if we “cut down the steps” for in-person proofing verification.
* P1, P2 and P5 recommended simplifying the pamphlet material as it was “too long” (P5) and needed more “screenshots” (P1).
* P5 was “annoyed” at the process described to create a new confirmation case number if a Veteran lost theirs or realized they could not come in-person in the next ten business days. “I need to be inconvenienced and complete this verification again…it’s not my fault (P5). P5 said they expected “this information to be stored and the data retrieved” so that someone who is “truly digitally illiterate” can be helped by the technology to set up a new time. They also commented that “suppose you’re a person that depends on accessible transportation...I don’t know what the lead time is” needed in order to get transportation to a VA in ten business days. Without more guidance and support from the in-person identity proofing service, this can leave disabled Veterans excluded.

### 2. IPP is so quick and easy, it’s not worth doing as a standalone service

Two participants in the moderated pilot sessions (P1 and P4) and two participants in the intercept interviews (P2i) expressed positive views toward in-person identity proofing, but did find it valuable enough to travel to their local VA solely to use the service.

P1 commented that the service was “so short” that it’s “not worth my time”. P2i from intercept interviews said “I wouldn’t want to get locked out of this system and come all the way here just to get back in”.

### 3. Security is improved with human interaction but feels slow with technological steps

During the research activities leading up to this pilot, we heard many Veterans express concerns around identity theft. We learned that several Veterans are hesitant to share information or engage with VA virtually due to their own experience with identity fraud or their awareness of the potential risk of fraud.

In order to meet NIST 800-63 guidelines for identity assurance level 2 standards, the in-person proofing service requires the Veteran to provide a non-expired state issued identification and their entire social security number. One participant, who had experienced identity theft, responded to the need to provide the entire social security number as “concerning” (P5).

The VA staff, P1, and P5 noted that they are used to providing their last name and last four digits of their social security number.

One intercept interviewee stopped using Login.gov because of similar requirements,

>“I started to use it [Login.gov] to order…CPAP supplies and hearing aid supplies, but I found it too intrusive. It was asking [for] my social security number, driver's license, and it was too intrusive. So I said, forget that crap. It wasn't useful to me and I could make a phone call and, and not, that wasn't as intrusive and I got the same results. So basically, it [Login.gov] pissed me off and it was a waste of time." (P11i)

The participants’ and VA staff’s reactions suggest that requiring more information for in-person identity verification may be met with suspicion as it is unfamiliar and could be misunderstood as identity theft or intrusion.

During the pilot, we had each Veteran fill out a survey at the end of their session where they could indicate their comfort level with sharing their information in the service space and rate their confidence in the VA staff to ensure that the process was secure. 3/5 Veterans reported that they felt very secure and comfortable sharing their information while 2/5 Veterans reported they felt somewhat secure. All Veterans reported that they felt between moderately confident and extremely confident in the VA staff’s ability to ensure a secure process: 2/5 felt moderately confident, 2/5 felt very confident, and 2/5 felt extremely confident. Those that rated moderate comfortability or moderate confidence elaborated on why they did not give a higher rating:

>“Security is always in question especially when you think it's lock tight.” (P2)

>“I think the staff member was fine - the issue was that he had no recourse or option or agency to troubleshoot ‘on the spot’ - since I did not have a MyHealtheVet account.” (P4)

We expect that some Veterans will resemble Participant 2 in that they will always consider security risks even if a service is supposedly “lock tight.” We learned from Participant 4, however, that if a Veteran is not found on a database, their faith in the VA staff could become compromised which could affect their sense of security. Participant 4 became aware that they would not have been able to successfully verify with their real information if the Proofing Agent could only search for them through MyHealtheVet. This finding suggests that VA staff may need various options for looking up a Veteran’s identity in case they have a profile in one database and not another.

Even though Veterans felt fairly secure with the interaction that took place with the VA staff, several of them reflected on how frustrating security measures can be overall, namely multi-factor authentication and identity verification. These security measures provide several points of friction throughout the process for Veterans:

* One Veteran (P4) entered the wrong verification code and took two attempts to sign in to her test Login.gov account
* One Veteran (P2) expressed confusion and frustration as he took several attempts to make a secure password
* P2 also became annoyed that they had to verify and authenticate their identity multiple times setting up the test Login.gov account.
* One Veteran (P1) became frustrated by switching their attention between their smartphone and their computer when they were sent a multi-factor authentication. code. When they accidentally entered the code on their computer instead of their phone, they said “that was stupid.”
* P1 also did not want to create a second authentication method.

The aforementioned points are just a few examples of how security measures can create moments of frustration and pause for a Veteran. Veterans understand that these security measures are meant to help prevent identity fraud, but they often stand in the way of what the Veteran wants to accomplish. Two participants reported some level of hesitancy or resistance to verification overall even though they understood the purpose for it:

>“I understand it, but me putting it in words for others; at this time I would just not be that confident.” (P1)

>“We treat veterans this way? Why do we have to torture them and nauseate them?...what's the rationale for having to enter the information and verify it every single time?” (P5)

Overall, participants were open to sharing information and interacting with the Proofing Agent, but they were frustrated by the repetitive security tasks involving technology. This finding suggests that Veterans could be open to engaging with security measures if they require a  one-time interaction and if they can interact with another person. More in-person services could be developed to improve Veterans’ sense of security, while digital security steps should be simplified or reduced to decrease friction points during the Veteran workflow.

### 4. “Last four” is ubiquitous, ICN is not

Based on prior research in [subject matter expert interviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/in-person-proofing/research/2023-12-in-person-proofing-pilot-SME%20Interviews) and [interviews with identity stakeholders across VA](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1662672336538/e4ac10ef97031dabf115f7e1429d2a353db7ff52?sender=u99cd1ac4f5c240d8dffd4204), Identity Toolkit was selected as the best tool for verifying a Veteran’s identity given it requires authorized access and uses the Master Person Index as its database for Veteran’s personal identifying information. Identity Toolkit is an internal VA tool that has integrated with MPI and enables validating a Veteran’s identity attributes. Access to this tool requires a VA PIV as well as having an Identity Verifier role. This toolkit supports LOA2 validation, which doesn’t provide as much identity assurance as IAL2. In order to ensure Identity Assurance Level 2 verification, the participant needed to provide their entire social security number, a non-expired state-issued identification during the proofing agent process, and the VA staff needed to find their Internal Control Number (ICN) in a database that matched the information the participant provided.

However, the VA staff member that participated in the pilot did not have access to the Identity Toolkit and had never heard of it. They also noted that they had never heard of an ICN, and neither had other staff at the VAMC. Instead, the VA staff used the CPRS, computerized patient record system, to look up all participants. This system included the ICN as part of its data.

The CPRS can only pull patient information for Veterans who have a My Health_e_Vet account,and as a result, two participants were unable to be located in CPRS. The VA staff attempted to find the participants’ information by reaching out to the eligibility department via Microsoft Teams. The MHV Coordinator used the MHV platform and the information they learned from the eligibility department that P2 had a deactivated MHV account due to inactivity while P4 never created a MHV account.

The process outlined for the in-person proofing service in order to meet security assurance is not similar to what VA staff and Veterans are used to and leads to confusion.

>“I think I have the VA health card but I don’t carry it on me because they never ask for that. They always say last name, last four [digits of social security number] and date of birth…Military ID has identifying numbers, benefits number, DoD number. I don’t see why we couldn’t...use this?” (P5)

Upon learning about the need to locate the internal control number, a participant perceived the term ICN as “worse than human subject research” and like “triple factor authentication” (P4).

In order to make adopting in-person identity proofing easier, the VA staff member encouraged “mandatory IPP training for all staff” and “if ICN number will be required there should be a standardized and easier way to get the number” (VA staff survey response).

VA staff also recommended “passport and other forms of federal/state ID should be considered” (VA staff survey response) as required unexpired state-issued identification is not standard at Veteran Affairs facilities.

### 5. Veterans developed expectations for IPP based on interactions with analogous services

Several Veterans formed expectations of IPP as a complete service based on how they have interacted with other in-person services at VA such as benefits enrollment, prescription refills, and identification acquisition. Common themes came up between participants from moderated sessions and participants from intercept interviews in regards to where IPP should take place and how long it should take:

>“[It has to be] easy to find. Come off the elevator, go to the right.. Get off the escalator. There it is.” (P1i)


>“Gotta be short [15 minutes] and have a benefit.” (P1)

In addition to desiring IPP in a highly trafficked and visible location, Veterans reported that they expected IPP to be available in the enrollment center ((P3, P1i, P3i, P7i), at the pharmacy (P2i), or the ID office (P4). Participant 1i expressed that they would like to find out about IPP “through a triage of nurses and caregivers,” in addition to digital and paper signage. Participant 2i shared that a Proofing Agent could be available and mobile in dense waiting areas so that they could approach people who may have time to spare: “Some people may...wait two hours to take a medicine...I can be knocking out admin stuff which is good.”

IPP has the potential to be integrated with services at VA medical centers and facilities which could ensure that more Veterans become aware and active on VA.gov. Several interview candidates and participants (P4, P4i, P5i, P9i, P11i)  from intercept interviews reported that they donot use VA.gov, which indicates that IPP could become a part of a larger movement around VA.gov adoption.

### 6. IPP is not for everyone, but providing it as an option ensures inclusion

All moderated session participants (5/5) and (P2i, P9i, and P10i) of this study remarked how IPP was a helpful and reassuring service and they valued it for themselves or on behalf of others (P2i, P4). Participants mentioned use cases and users including those who are “less tech savvy” (P2), “older Veterans” (VA staff, P4), and those who are “without phones or who lost their phones” (P2).

>“I felt better [coming in person] because I had someone to hold my hand...you want to make sure it’s in the right place..it’s comforting to have someone check my work [laughs].” (P5)

>“If my father is going in for an appointment, this could take [him] 15 minutes. They could notice you don’t have login.gov and they could ‘make it seamless.’” (P4)

Several Veterans indicated that they would still like to verify online because it is more convenient for them, but they appreciated the in-person option.

>“It would be helpful if there’s somebody here… like hey like what's going on? Let’s verify you. But if the only way I can get in is if I had to stop what I’m doing and come over that would not be helpful. The online option would be better.” (P2i)

>“Good for some. Great to have a choice” (P5i, intercept interviews)

>“Your guy's job is to help us. Ok. So I'm glad you did help me. But should I have to drive from Pasadena down here to help me get online for something that you want me to do?” (P10i)

To continue improving IPP and make it more inclusive, additional work should be done to educate Veterans on verification and provide details about in-person proofing upfront.

>“That's key for me, letting people know upfront that they have to be available within 10 days.” (P5)

>“I'm not stupid, but I'm not as fast as I used to be…I think this has got to be difficult for a lot of the guys and, and there needs to be probably more information that if they need to get this and do this. They bring their smartphone and come here… and have somebody help them get through it.” (P10i)

Through this pilot, IPP has been identified as a service that can successfully help Veterans as long as it is visible and available in multiple locations. Pathways to accommodate broader use cases (on-the-spot registration, rescheduling appointments, alternative locations outside of VAMCs) should be explored to ensure a seamless experience.

Our research indicates that verification can be a major barrier for Veteran adoption and use of VA.gov. As such, additional research and improvements should be made to the remote identity proofing experiences along with supporting inclusive services like In-Person Proofing.

## Recommendations

### Recommendations for the In Person Proofing service

1. Conduct a follow up security assessment workshop with NIST, Login.gov and the VA for in-person identity verification.
2. Given IPP was seen as too quick to be the sole reason to come onsite, IPP should be offered as a tag on service that check-in staff can notify Veterans about and direct to MHV Coordinators.
3. MHV Coordinators are already providing support during account creation related to verification. IPP should be integrated into the account creation workflow that is currently facilitated by MHV Coordinators, i.e. at the point of need.
4. Beyond MHV Coordinators, identify alternative VA staff or other public facing staff that can serve as trusted referee or authorized personnel to proof someone in-person
5. Provide proofing agents with educational material on what an internal control number is and where they can find it across multiple databases.  
6. Enable Veterans to reschedule, select an appointment or ten day window,, or walk-in without a prior confirmation case number set up. [Drafts of low-fidelity pathways illustrating these future state options](https://www.figma.com/design/OKnM2rn0Oyw5UhCUQ41VTi/Future-State-Flows?node-id=9-1628&t=6uPhQ9EpsjGzPW4H-1).
7. Explore alternative identification options for verification, beyond state-issued ID, such as Veteran ID card or passport, that support NIST 800-63 guidelines.

### Recommendations for the application

1. Simplify content across the application to reduce cognitive load for Veterans. Additionally provide links to resources/additional content to answer questions. For example, change language from “Learn more” to “Do you have any questions” on the landing page.
2. Identify an agnostic (multiple applications) or universal method (single application) for verifying a Veteran in a system of record in order to retrieve their Internal Control Number, such as multiple hospital databases.
3. Explore integrating directly with the Master Personnel Index (MPI) via API in the in-person identity proofing application.

### Recommendations for OCTO Identity

1. Consider providing in-person identity verification and support for account creation as an option for helping Veterans with transitions and education with digital services.
2. Provide more educational content about account creation and verification through materials such as videos and pamphlets with graphics
3. Explore, research, and enable knowledge sharing of my HealtheVet Coordinators related to how they support Veterans creating accounts with Login.gov and ID.me
4. Conduct research on Veteran and caregiver experience to better understand pathways and barriers to identity verification for Veterans who depend on caregivers.
5. Create educational materials for caregivers on how to facilitate a Veteran’s identity verification given their role. 
6. Establish a secure method for enabling Caregivers’ access to Veteran accounts (including things like Power of Attorney).
7. Provide educational material, such as videos, on the changes to sign-in and its benefits on VA.gov and in high traffic areas at VAMCs, like elevators and waiting rooms, for Veterans.
8. Provide MHV Coordinators educational material and scripts to help support Veterans when they are trying to verify their identity.
9. Set up collaborative touch points with MHV coordinators to identify the optimal methods to support Veterans during credential transition

### Recommendations for Veteran Affairs

1. Provide more communication around what VA.gov is, how Veterans can sign up for it, and what services it can provide for all facets of life (education, work, retirement, health, etc.)

### Recommendations for OCTO Research

1. Work with Perigean to create guidelines for conducting in person research that does not fall within usability tests, including:
    1. Recommend scheduling sessions no earlier than 9am ET for time to set up as well as easier commute time for participants
    2. Provide information for participants on the parking at the site as well as step-by-step instructions to the testing area to avoid confusion. Have Perigean email information to participants ahead of time.
    3. Over recruit participants to ensure maximum participation and identify the cohorts that will be set up should it exceed nine participants.
    4. Notify check-in desk on the floor of testing area of research occurring and where to direct participants
2. Have a hotspot on-site if the application being tested is not enabled on the VA network to ensure connectivity for application being tested as well as for participants should wifi not be strong enough.

## Methodology

### In-Person Identity Proofing Service Overview

1. A Veteran elects to do in-person identity proofing at a participating site and is assigned a case number via the In-Person Identity Proofing (IPP) application.
2. The Veteran receives a confirmation email with guidance on what identification to bring, the case number, the selected site information, and has 10 days to come in person.
3. The Veteran arrives at the VA site within 10 days and presents their case number to a “proofing agent”, an authorized VA staff person.
4. A Proofing Agent reviews the Veteran’s identification documents and uses the IPP application to verify documentation is authentic and that the Veteran is in the Master Person Index via the Identity Toolkit (a resource all MHV coordinators have access to).
5. Veteran logs into their Login.gov account to confirm their account is verified.

Given the service and application are still prototypes, steps 1-4 were completed on-site on a non-VA computer with a mouse.

Veterans were asked to bring a smartphone and a non-expired state-issued ID.

The feasibility of the 10 day walk-in window was not tested as each Veteran’s “case number” was generated on-site.

Each participant created a test Login.gov account that was deleted at the end of the session. This mapped to a common experience for MHV coordinators in which a Veteran or caregiver has a walk-in without any prior account. This is also why step 5 was not possible to complete as Veterans did not verify a real Login.gov account.

Each participant was sent a confirmation email by one of the researchers after completing Step 1 to simulate the automated process described in the service overview (Step 2). Participants consented to providing their personal email address and receiving an email during the session in their scheduling process with Perigean, the OCTO contractor responsible for research recruitment.

Participants presented fake data in Step 4 to be input into the prototype application since the application was not built to collect PII.

Participants presented their real identification to the VA staff to look up their Internal Control Number on a VA application using a VA computer. This step tested the database recommendation for VA staff to use in order to look up Veterans’ personal information to verify them against the MPI.

[Link to Intake Prototype](https://dev.lighthouse.va.gov/intake)
[Link to Proofing Prototype](https://dev.lighthouse.va.gov/proofing)
**Note:** must be on VA network to access prototype

### Moderated pilot sessions

Participants recruited and scheduled through Perigean use the In-Person Identity Proofing application to complete the intake process. The participants work with the VA staff to complete the proofing agent process. Upon completion of the service the participants complete a survey. Video and audio was recorded with consent and written observations were collected.

The sessions took place in the MHV Coordinator’s office. The participating VA staff member is the My HealtheVet Coordinator for the Baltimore VA Medical Center. 

No PII was collected in the prototype application. As a result, participants had to provide fake participant data created by the research team during the proofing agent stage of the service. Participants had consented to being sent an artificial confirmation email by the research team at the end of the intake process to simulate the intended service.

VA staff complete a survey at the start of the first day, the end of the first and at the end of the last day to capture changes in attitude toward the service and application.

All recordings and notes taken were transcribed and documented in Figma’s FigJam application. Recordings were selectively transcribed for relevant quotations.

### Research Outcomes

Veteran or Caregiver participants and VA staff needed to complete the following activities in order for the session to be considered a successful completion of the in-person proofing service

Intake Process:

1. Veteran brought a smartphone and non-expired state issued identification
2. Veteran is able to create a test Login.gov account
3. Veteran is able to enter a zip code and select the participating VA pilot site
4. Veteran is able to complete the intake flow of the IPP application and receive a confirmation case number
5. Veteran is receives the confirmation email on the smartphone they brought with them

Proofing Agent Process:

6. VA staff accessed the IPP application using their PIV card
7. VA staff entered the confirmation case number and were able to confirm its existence
8. VA staff entered the fake identification information provided by the Veteran correctly
9. VA staff are able to access the Identity Toolkit
10. VA staff are able to find the ICN of the Veteran using the authentic state issued identification the Veteran brought with them
11. VA staff are able to close the verification case

_Veteran participants also deleted their test Login.gov account at the end of the pilot session but that was not considered an action that informed the success of the service._

All Veteran participants (5/5) brought the approved identification and smart phone with them to the sessions. However, Veterans either used their personal data or one participant (P3) had to connect to the hotspot provided by the research team in order to complete the setup of the test Login.gov account or receive the email. No participant was able to complete the service using the guest Wifi provided by Baltimore VAMC.

5/5 participants were able to complete the necessary steps for the intake process.

4/5 participants were able to successfully complete the In-Person Proofing service. One participant was unable to complete the proofing agent process due to their confirmation case number not being recognized. This may be due to the participant not writing it down correctly or an error within the application. This does not raise a major concern as the future service will email the case number directly to the user, instead of requiring the user to write it down. The design team has also developed[ future user flows ](https://www.figma.com/design/OKnM2rn0Oyw5UhCUQ41VTi/Future-State-Flows?node-id=9-1628&t=6uPhQ9EpsjGzPW4H-1)should a new confirmation case number need to be created due to the participant not remembering it or being able to retrieve the confirmation email.

The VA staff was unable to use the Identity Toolkit to look up the Internal Control Number. This was due to the tool not being available to the VA staff. Instead, the VA staff used the CPRS, Computerized Patient Record System, to retrieve the participant’s information. The CPRS can only pull patient information for Veterans who have a My Health_e_Vet account. As a result, two participants were unable to be located in CPRS as one (P2) had a deactivated MHV account due to inactivity while another (P4) never created a MHV account. The VA staff attempted to find the participants’ information by reaching out to the eligibility department via Microsoft Teams.

On average, the service took 10-15 minutes to complete.

### Survey Results

1. Frequency of VA Staff Surveys
    1. First survey at start of first day
    2. Second survey at end of first day
    3. Third survey at end of fourth day
2. Frequency of Veteran Surveys
    4. Surveys were completed at the end of the moderated session

The following visualization shows the responses for the participants after completing the moderated session.

![alt_text](media/participant-questionnaire.jpg "visualization showing data from the participant survey")

The following visualization shows the responses from the survey the VA staff member completed at the start of the pilot, at the end of the first day after completing three sessions and the end of the fourth day after completing a total of five sessions. The pacing of the survey was chosen to enable tracking of the VA staff’s attitude, receptivity, and to identify the “learning curve” of the service.

![alt_text](media/staff-questionnaire.jpg "visualization showing data from the VA Staff survey")

## Demographics

### Participant Demographics for moderated sessions

* [Equality Checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/research/2024-03-Secure%20Sign%20In%20Transition%20Team-In-Person%20Proofing_Pilot/Research%20Findings/2024-03-Secure%20Sign%20In%20Transition%20Team-In-Person%20Proofing_Pilot_%20VA%20Recruitment%20Checker%20for%20Equality.xlsx)
* 2/5 participants in the moderated sessions did not have a verified Login.gov account
* 3/5  participants in the moderated session had a verified Login.gov account

### Participant Demographics for intercept interviews

* [Equality Checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/research/2024-03-Secure%20Sign%20In%20Transition%20Team-In-Person%20Proofing_Pilot/Research%20Findings/2024-03-Secure%20Sign%20In%20Transition%20Team-In-Person%20Proofing_Pilot_Intercept%20Interviews_%20VA%20Recruitment%20Checker%20for%20Equality.xlsx)
* [Raw demographic data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/research/2024-03-Secure%20Sign%20In%20Transition%20Team-In-Person%20Proofing_Pilot/Research%20Findings/Intercept%20Interview%20Demographics%20(Responses).xlsx)
* 8/10 participants were 55+ years old
* 5/10 participants identified as Black
* 4/10 participants identified as Caucasian
* 1/10 participants identified as multiracial, Black, Native, and biracial
* 2/10 participants identified as Other
* 7/10 participants identified as a man
* 3/10 participants identified as a woman
* 8/10 identified as heterosexual
* 2/10 preferred not to answer regarding their sexual orientation
* 7/10 participants had some college but no degree or high school diploma or some equivalent
* 3/10 participants experienced being unhoused
* 4/10 participants identified as having a cognitive consideration, such as TBI, PTSD, etc.

## Additional Context and Background

Veterans Affairs has prioritized the adoption of Login.gov, as well as continued support for ID.me, as the primary sign-in methods for Veterans accessing their benefits. While these credential providers offer a shared service, allowing access to VA and other government agencies via a single account, their remote identity verification success rates are low (less than 50%). The Secure Sign In Transition team, under OCTO Identity, is tasked to understand how VA’s intimacy with Veterans might be leveraged to provide simple, secure, and accessible in-person verification and support for Veterans and their communities. An in-person proofing service and application has been designed to test and better understand the feasibility and adoptability of onsite verification services at VA facilities.

In-Person Proofing services provided by Veteran Affairs would enable Veterans to set up their new secure login and complete identity verification so they can access their benefits and services. Providing in-person proofing at VA facilities allows Veterans to get the support they need in the format they prefer while also enabling them to access several services in one place they know and trust – the VA. Given the presence of trained identity verifiers across VA sites, there are already trained experts that understand the importance of, and have the ability to, ensure a compliant verification process for Veterans. The product being tested in the IPP pilot features a Wizard assistant, removing the need for prior training to use the custom application. Volunteer VA sites and identity verifier participants will play a key role in the development of this in-person verification process, providing feedback and input throughout the process and helping the VA to ensure we meet Veterans where they are so no Veteran is left behind.

### OCTO Priorities

The research supports the OCTO priorities:

* Veterans and their families can apply for all benefits online
* Veterans and their families trust the security, accuracy, and relevancy of VA.gov
* Logged-in users have a personalized experience, with relevant and time-saving features
* Improve the Veteran login experience
* Solidify the VA.gov platform
* Enhance Veterans’ personalized online experience
* Drive OIT’s Digital Transformation Strategy

### Veteran Journey

The In-Person Identity Proofing product is a means to enable Login.gov access to services that require a verified account. Therefore, the product can be utilized throughout the entire Veteran journey. Given that Login.gov enables the ability to apply for and access services and benefits, this product can be pertinent in the “Getting Out” and “Starting Up” phase. 

## Appendix

### Appendix 1: Intercept Interviews

Researchers positioned in the waiting room for lab work at the Baltimore VA Medical center invite Veterans and/or caregivers to participate in a 10-15 minute interview. Participants are compensated for their participation through Perigean. Audio was recorded with consent and written observations were collected.

#### Research Goals for Intercept Interviews

1. Evaluate a Veteran’s attitude and receptivity to the in-person identity verification service as a concept when they are in a VA facility rather than online.
2. Evaluate a caregiver’s attitude and receptivity to the in-person identity verification service as a concept when they are in a VA facility rather than online.
3. Identify improvements for the application and service in preparation for sequential pilots and a scaled service rollout to VA facilities.

#### Research Questions for Intercept Interviews

1. How might we learn from Veterans and/or caregivers the likelihood of them using in-person identity verification as they are in the midst of accessing VA services?
2. How might we learn from Veterans and/or caregivers their receptivity to in-person identity verification  as they are in the midst of accessing VA services?
3. How might we identify pain points or improvements that are needed by getting feedback while a Veteran and/or caregiver are in a VA facility?

### Intercept Interviews Hypothesis and Conclusions

In our pilot research plan, we outlined several insights for our intercept interviews in anticipation of many Veterans and caretakers sharing experiences around account creation and online verification. We found that many interviewees created accounts many years ago, failed verification and never tried to use online services again, or they have only engaged with a limited number of VA services in person or over the phone. Below are our original set of hypotheses for Veterans and caregivers. From the limited amount of information we were able to collect in our interviews, we were able to find evidence that related to three of these hypotheses.

The pilot research plan for intercept interviews aimed to collect data related to account creation and online verification. The hypotheses are listed below. Our interviews provided evidence related to three of these hypotheses.

| --- | ----- | ------- |
|Participant role|Hypothesis|Outcome|
|Veterans & Caregivers|Participants will report neutral or positive feedback that they would use the in-person identity proofing service.|Mostly False|
|Veterans & Caregivers|Participants will report neutral or positive feedback that other Veterans would use the in-person identity proofing service.|Somewhat True|
|Caregivers|Participants will be able to identify ways to support Veterans throughout the in-person identity proofing service to help them successfully verify.|Somewhat False|
|Veterans & Caregivers|Participants will validate our assumptions of how the service will work.|Inconclusive|
|Veterans & Caregivers|Participants will validate our assumptions of how the service should be updated in future iterations.|Inconclusive|
|Veterans & Caregivers|Participants will report neutral or positive feedback to the in-person identity proofing service.|Inconclusive|
|Veterans & Caregivers|Participants will understand why they are completing Identity verification and what benefits it will provide to them.|Inconclusive|

We found that many interviewees created accounts many years ago, failed verification and never tried to use online services again, or they have only engaged with a limited number of VA services in person or over the phone.

#### 1. Veterans will report neutral or positive feedback that they would use the in-person identity proofing service

**Mostly False**

Many Veterans (P2i, P6i, P8i, P10i) expressed concerns around coming in-person to verify their identity largely due to their health conditions, limited time, and desire to get in and out of appointments as fast as possible:

>“I have a traumatic brain injury, I sometimes can’t physically...or mentally do it…Sometimes in-person is not great...sometimes the anxiety, the frustration, the aggravation, irritation...it has to be a hybrid approach.” (P2i)

>“I work six days a week. And so it's easier to do it on the phone.” (P8i)

>“I actually tried to sign up for [my father] for…the MyHealtheVet thing…it required too much information to…verify his identity…Having him do a zoom call was like beyond his capabilities…We went and the person wasn't here and I don't know, he's kind of resistant to it…he's like, I just want to get home.” (P6i, caregiver)

We also accounted for Veterans who would not verify at all. P11i shared a previous experience where they were hesitant to share their personal information, so they chose not to verify or use the VA.gov at all. 

>“I started to use the site to order CPAP supplies and hearing aid supplies, but I found it too intrusive. It was asking for one of my social security number, driver's license, and it was too intrusive. So I said, forget that crap…it wasn't useful to me and I could make a phone call and, and not, that wasn't as intrusive…I got the same results. So basically, VA.gov pissed me off and it was a waste of time.” (P11i)

#### 2. Veterans will report neutral or positive feedback that other Veterans would use the in-person identity proofing service. 

**Somewhat True**

Most Veterans only reported on their own experiences, but two (P2i and P10i) stated that they could imagine other Veterans using IPP to verify their identity.

>“Everybody is not tech savvy...they always need help. We need to set up trying to do stuff for them…A lot of Veterans who have issues... [IPP] is great.” (P2i)


>“I think this has got to be difficult for a lot of the guys and, and there needs to be probably more information that if they need to get this and do this…I may not be around, but hopefully it will help the next guy.” (P10i)

#### 3. Caregivers will be able to identify ways to support Veterans throughout the in-person identity proofing service to help them successfully verify. 

**Somewhat False**

We interviewed one caregiver (P6i) and one Veteran (P8i) who reflected on their experience with their caregiver. Due to information and the limited sample size, we cannot firmly assert that caregivers will know how to support Veterans through identity verification. Caregivers have limited resources to guide them, so they may encounter barriers that prevent them from helping Veterans access VA.gov. When this happens, caregivers may seek help through in-person services or services over the phone.

>“We tried to like, stop in an office here one time we were here to get him signed up and um, like the person wasn't there that did it.” (P6i)

>“[My sister/caregiver] has something online but every now and then they kick her off of it.

Then you gotta go reset the whole thing over again and then I have to be there and authorize it.” (P8i)

### Appendix 2: Observational Study

During the four day study, researchers positioned themselves throughout the VA medical center in areas of high traffic or areas that participants mentioned they would expect to see information about, or utilize, the in-person identity proofing service. Researchers observed the area and noted any distinct characteristics of the area that might support or hinder a Veteran’s ability to complete in-person identity proofing. Researchers also collected written observations on the physical environment, general traffic, user interactions and demographics, and service impact observations. 

**Note:** Due to observational studies excluding direct interaction with individuals and falling to the interpretation of the researcher, there is selection bias risk as well as possible misinterpretation of the demographics or interactions in the space. Demographics were collected from all intercept interviews and moderated sessions to reduce the risk and ensure participants could self identify. Future research is encouraged at this site to reduce the influence of this bias and to gather more accurate data on the demographics of visitor traffic. 

[Link to Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/research/2024-03-Secure%20Sign%20In%20Transition%20Team-In-Person%20Proofing_Pilot/Research%20Findings/Observational%20Study%20(Responses).xlsx)

Observational studies were conducted five times at different times of the day in the following spaces: cafeteria, pharmacy, enrollment center, and the telehealth room where the MHV Coordinator usually meets with Veterans and caregivers.

The following analysis evaluates what features of the spaces might support or hinder the in-person identity proofing service. However, it is important to note that every VA site is different, both in layout and services available, so further research is needed across a variety of sites to develop the optimal strategy for promoting and making in-person identity proofing available.

#### 1. Cafeteria

    The cafeteria served as a gathering place for patients, family, and staff. People used the space to both eat meals as well as sit, talk, or use their phones. Signage to get to the cafeteria was not clear throughout the building. In the cafeteria, announcements are made and there is a television screen showing people’s last names and if their prescription is ready which suggests the space is also used as an unofficial waiting area for the pharmacy. 

    For in-person identity proofing, the cafeteria can be used as an area to promote the service and make people aware, whether through signs or on the television screen. 

#### 2. Pharmacy

    The pharmacy is located in the lobby of the Baltimore VA medical center. Seating is available for people to wait and is easy to access for people with assistive mobility devices. Patients are served by a paper ticket number system provided by a kiosk that they use to check in. Staff appear to follow a routine flow and are able to provide service to patients within two minutes of their receiving a ticket number. A Veteran did have an issue with using a kiosk and needed assistance. 

    The process the pharmacy has established for getting a place in line via a ticket and a designated waiting area could be used for in-person identity proofing. The VA staff member mentioned that they help several people a day and there are high rates of walk-ins so having a set process for getting in line and a waiting area would be beneficial. 

#### 3. Enrollment Center

    The enrollment center is located in the lobby of the Baltimore VA medical center next to the pharmacy. The waiting area is behind automatic transparent doors which block out the sound of the lobby when closed. Enrollment staff and the MHV coordinator sit at desks equipped with plexiglass partitions. Privacy walls separate each station. There is a kiosk with a computer for Veterans that enables them access to VA.gov sites. Upon entering the waiting area, staff immediately welcome a Veteran and ask what they are here for. A participant who needed a new identification card was in and out in 45 seconds. All staff are friendly and welcoming to Veterans and caregivers. The waiting areas and multiple semi-private stations enable many Veterans to be served in a secure and private manner.

    The enrollment center is a possible site to have in-person identity proofing as it is already being used by the MHV coordinator for verification support and has Veteran and VA staff facing computer options. The noise reduction and semi-private cubicles also create an optimal atmosphere for a process where PII is being shared and noise does not disrupt the exchange.

#### 4. Telehealth Office

    The telehealth office is where the moderated pilot sessions were conducted. There is clear signage at the door of the office but finding it on the fourth floor was difficult for participants. The wing of the 4th is used for other administrative and medical purposes so there is often moderate traffic. Staff use their work mobile devices or Teams on computers to communicate to one another. The office itself is private and the door can be closed for privacy and to reduce the noise of hallway traffic and announcements. The 4th floor is accessible for different assistive mobility devices. 

    The telehealth office is a possible site to have in-person identity proofing as it is already being used by the MHV coordinator for verification support. The space would require an additional device for Veterans to use to access the service, if needed. The noise reduction and private space create an optimal atmosphere for a process where PII is being shared and noise does not disrupt the exchange. More research is needed to understand how to improve wayfinding as it is difficult to locate the office. 

### Appendix 3: Shadowing Sessions

All shadowing sessions occurred in the enrollment center, at the My HealtheVet Coordinator’s designated desk. The My HealtheVet Coordinator sits behind a glass partition and has a computer. The Veteran sits at a desk facing the glass partition and has access to a VA computer that only allows for VA.gov site access.

![alt_text](media/shadowing-session.JPG "image_tooltip")

_The MHV Coordinator at their desk in the second cubicle located in the enrollment center. Shadowing sessions were conducted here. The MHV Coordinator often stands during sessions with Veterans to see their kiosk screen, which is on the other side of the divider, positioned against the wall._

#### Session 1

The My HealtheVet coordinator assists a Veteran, an older white male, in upgrading their My HealtheVet account in the enrollment center. The Veteran is able to login and asks, “If I’m already in, why do I need to [reauthenticate]?” The Veteran encounters a white screen and the My HealtheVet Coordinator discovers that they have two accounts, one created several years ago, the other more recently. Ultimately, the My HealtheVet Coordinator is unable to get the Veteran upgraded and provides them a phone number for the IT help desk, which may be the My HealtheVet help desk.

#### Session 2

During the second shadowing session, a Veteran and their Caregiver had been sent after their medical appointment to the enrollment center, where the MHV coordinator was located, in order to set up a My HealtheVet account. Since the Veteran didn’t have a smartphone or email address, the MHV coordinator directed them to create an ID.me account using the Caregiver’s email and phone number. The initial account creation did not present any issues. The identity verification process using ID.me required four attempts in a series of formats (photo uploads, computer video call, smartphone video call). In order to successfully verify, the Veteran had to recite information over a video call with ID.me personnel. The Veteran told the MHV Coordinator that they had difficulty verbally communicating, reading, and remembering information due to two prior strokes. To help the Veteran, the MHV Coordinator had the Caregiver write down the information on a notepad and coach the Veteran through the ID.me video call, since the Veteran was the only individual allowed to speak. 

The verification process, between initial account creation to final verification, took over 25 minutes to complete, and led to a state of frustration for both the caregiver and Veteran. Once the process was completed, the Caregiver said “I would have never gotten this” to the MHV Coordinator.

#### Session 3

MHV Coordinator shares that they serve walk-ins as well as people who are invited to come in-person if they cannot resolve the issue over the phone. Overall, it’s “easier to help them in person” and more difficult if they are using Android devices. There is sometimes confusion due to the MHV Coordinator sitting in enrollment as sometimes Veterans will go to his desk and he cannot help them with any enrollment questions or Veterans will go to enrollment staff when they are trying to find the MHV Coordinator.

The MHV Coordinator is connected to 326 secure messaging groups under the VA healthcare region the site is located in, this includes secure messaging groups for mental health, primary care, and especially. All these secure groups can reach out to the MHV Coordinator for help if someone needs assistance with their account. The MHV Coordinator was able to look up through the MHV Portal that 39,758 users have MHV Premium accounts, that amount is increasing due to the PACT Act, and 23,010 of those users are active unique senders, meaning they’ve sent a message in the last 24 months. Those will be the total number of users in the Baltimore region alone that will be impacted by changes in credential options. This does not include those who use MHV Premium to access the VA App. If there are changes to the credential options, the MHV Coordinator foresees MHV Coordinators leaving their positions due to the new work that will be created for technical support for the changes to sign-in.

Prior to this MHV Coordinator, there was no full time coordinator at this site meaning inconsistent to no support for Veterans.

The MHV Coordinator has a bluetooth mouse setup so they can move the mouse on the screen of the computer kiosk that the Veterans use. This has enabled the MHV Coordinator to show their instructions to Veterans who are unsure where to navigate on VA.gov sites. There are also instances where Veterans struggle to type on their own or it takes a long time and the MHV Coordinator doesn't want the Veteran “to be stuck all day typing”. They will offer to help type in information such as their email address, but not their password.

The MHV Coordinator’s supervisor arrives with a Veteran. The supervisor tried to call the MHV Coordinator but they did not pick up. The Veteran had been trying to set up an ID.me account since the early morning but was unable. Upon arriving onsite, they were directed to the record release department who then redirected the Veteran to the MHV Coordinator.

The Veteran expressed frustration and the MHV Coordinator began guiding them through setting up an ID.me account. The Veteran had misplaced their wallet and had to leave to get it and returned to complete setting up the account. The Veteran has a smartphone and explains that “the password is too long and complicated for me”. The VA staff gives step-by-step instructions on how to set up an ID.me account. The MHV Coordinator offers to take the photo of the identification and the Veteran willingly lets them; they take the Veteran’s smartphone and identification to take the photo. They explain that they have figured out the optimal position to reduce glare. The Veteran then enters their social security number but there is an error message, they re-enter and go to their smartphone to finish verification. The Veteran realizes that the email account on their smartphone is not the one tied to their ID.me account. They try to remember their password for the ID.me email but cannot as it is written down at their home. “If I had realized [I needed to verify with a smartphone] I would have used my gmail to begin with”. Their body language is extremely frustrated, the MHV Coordinator is calm.

The Veteran mentions they prefer ID.me because they have been put on hold for awhile with Login.gov. They cannot verify their ID.me account but they can log in and the account is Identity Assurance Level 1 without verification. They try logging in five times and almost get locked out. They try to reset the password, “I know it’ll be a weaker password…but it’s easier for me to remember”. They try 2-3 times but are unable to and the MHV Coordinator recommends they do this and verify at home to avoid getting locked out.

The Veteran is invited to do an intercept interview, they agree, before the interview begins they share, ““I’ve flown blackhawks, why can’t I sign in?”
