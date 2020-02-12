# Draft Plan of Action and Milestones for VEText 
*Shane Elliot and VEText Team*

When a patient does not come to their scheduled medical appointment, the provider and ancillary support clinical staff's time set aside for the patient's appointment is not used resulting in inefficiencies and an appointment time that could have been given to another Veteran.  This is also called a missed opportunity or no-show.   Utilizing text message reminders has proven effective in targeting no-shows and increasing access to care.  For patients, it provides a convenient service to directly cancel and/or confirm appointments without waiting on phone lines.  Text message appointment reminders are also becoming the standard of practice in all healthcare settings outside of VA and an expectation of our Veterans. 

In an effort to leverage all avenues of communicating with patients regarding appointments the Loma Linda VA has developed software to send automated reminder messages for upcoming appointments to patients via SMS text messaging.  Over 90 percent of Veterans have basic cellphones.  Thus, SMS text messaging offers an opportunity to address a large segment of our patient population.  The software we have developed, called VEText, also facilitates patient-initiated cancellation of appointments.  The goal is to provide patients with a valuable service while at the same time reducing no-shows, missed opportunity rates, and increase access to VA appointment for other Veterans.
 
VEText was piloted in August of 2015 and the pilot demonstrated the potential for great impact on the care we provide to Veterans.  Over the past couple of years Loma Linda has continued to expand this technology to additional clinics, and we have been using it successfully with a number of other high no-show clinics.  To date we have seen a greater than a 5% decrease in the overall no-show rates for the facility.  Other sites that are using VEText have reported similar success in reducing their no-show rates.  Feedback from patients, family, and caregivers has been overwhelmingly positive. 
 
 
VEText sends appointment reminders to patients via simple Messaging Service (SMS) or text messages.  VEText retrieves lists of patients from VistA who have appointments with a given clinic on a specific date and then constructs reminder messages to send to the patients with instructions on how to cancel the appointment referenced in the message.  The current version of VEText is compliant with the current Privacy Guidance (attached).  This guidance does not allow the inclusion of information that that is considered PHI including the clinic name.   Clinic name is important to provide more specific information to our veterans that have multiple appointments per day and for the next version of VEText we would like to deploy.  
 
VEText would like to implement a new feature to help improve access to our veterans by offering appointment slots that were recently canceled to veterans waiting greater than 30 days by SMS message.  When one veteran cancels an appointment, VEText will identify the patient with the longest wait time (calculated as the difference between PID and appointment date) and send them an SMS message offering them an earlier appointment.   If the Veteran agrees, they will be scheduled for an earlier appointment.  To achieve this, VEText must send the Veteran and the clinic name.
 
To implement the next version of VEText, we intend to send clinic name to veterans via SMS messages.  The system retrieving the information from VistA and sending the messages resides within the VA firewall and communicates with the SMS gateway provider via secure connections, however the transmission of this information to the patient will be over cellular networks and unsecure as SMS has no method for encrypting messages.   The recommended mitigating procedure to permit the use of SMS messages between VHA and the patient is the following security controls and risk mitigation actions:
 
 
1. Control: Text messages will only be exchanged with patients that have expressly opted into VEText by completing an electronic consent.  By completing this consent the patient will acknowledge acceptance of the risks of sending and receiving unsecured text messages and exercising their rights of access. 
 
 
Risk Mitigation Action Implementation: Before sending text messages to a patient, an opt-in text message will be sent to the patient including the risks associated with sending and receiving unsecured text messages.  Veterans will be required to confirm via text message and a follow-up authentication will be send requesting the veterans date of birth.  If veteran responds to with the correct date of birth, the veteran will be considered consented and enrolled in VEText. 
 
2. Control: Text messages will be sent individually and only to the telephone number listed in the patient’s medical record and only after the patient confirms the telephone number is theirs and re-confirms annually.
 
Risk Mitigation Action Implementation: Text messages will only be sent to the mobile number listed in the patient’s VistA record only after the patient has verified the number belongs to them by responding to the enrollment consent with their date of birth.  Additionally an annual message will be sent to the patient requiring them to validate the number is still theirs by responding with their date of birth.
 
3. Control: The Veteran may opt out at any time by sending a text message reply to VEText.
 
Risk Mitigation Action Implementation: The Veteran may opt out at any time by sending a text message with the word STOP to VEText via the designated phone number or by responding to any message received from VEText.
 
4. Control: Protected information under 38 U.S.C Section 7332 will NOT be sent via unsecure text messages to the patient.
 
Risk Mitigation Action Implementation: Section 7332 information includes information pertaining to drug abuse, alcoholism or alcohol abuse, infection with HIV or sickle cell anemia.   VEText will filter any appointment with a clinic name that includes these conditions and not send the reminder.
 
 
 
