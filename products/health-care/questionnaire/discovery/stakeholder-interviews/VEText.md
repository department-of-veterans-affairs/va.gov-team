
# Notifications Questions

 1. Is the notifications a reusable service  and front end by other VA teams? yes VetTet
	 - Prebuilt Templates for constancy across VA?
 2. Template of what the message says. 
	 - for scheduling example.  sites have the ability to modify the template. can add additional text.  Ability to configure the when the notification get sent.
	 -  We will need to need to build the api for the right form if they are not generic to put into the notification template - to make each one dynamic. This is likely not in their scope today ...will need to enhance.    
 3. What is the content editor for notification type and description
	 - The notification engine has a content editor that can be customized and then work with the profile team for notification type and template to send. 
 4. delivery methods ie. native push, badges/banners/email/paper & call (this would not impact us other than not sending a notification. 
	 - mobile app will be the future- once we have a mobile app framework native push is strategy
 5. Does the notification engine have a decision tree...ie confirmation sand followup notifications based on what was sent to the veteran?  
	 - not now but future.  Pilot to opt in for future pilots.  or reply for Confirming you are doing a task.  
 6. Is there a notification list for the veteran to see on the authenticated va.gov to manage notifications?
	 - not today- Plan to build the notification list in the future. on va.gov action center. 
 8. What API do we call to leverage the service?
 9. How does notifications work - Push or Pull from the server - failed ? 
 10. Preferences - are in profile. Consent business line- text appts, preferences how you will contact you.  
 	- examples from Bennefits 

## Clarice Experience with Online Forms and Notifications 
**Loma-Linda VA- hospital - shadow hospital - what are the pain points**  
- Benefits onboarding understanding of registration and enrollment 
-  Thought they enrolled by registering and instead they never enrolled in the plan.
- No way to retroactive way to cover the veteran
- paper process image she will send
	- intake printing out the web form how poorly formatted from the clinical record is not printed out nicely for the clinician to talk to the patient to fill out
	- Access to care- vetlink kiosk (not standard every where) check, type in your name, and your in the waiting room.  
	- some veterans can wait for hours for ticket numbers instead of names. benefits to move to the kiosk.
	
**SaltLake City**
- calls into contact center
- "veteran called and I will not let the VA drown me in my paperwork"
- **Is Registration and Enrollment a digital form that is filled out today?**

**Notifications**
- drive and reduce friction in communication in disability claims status
	- idea today 100 day to process a disability claim
	- collecting and gathering evidence- when VSR is going through the claim to be process- additional data about the visit or from the veteran
		- VSR will call you to get he info from the veteran
		- if you miss the call you will be sent a letter and then back into the queue and new VSR will start the claim.
		- Stop sending a notice via mail- or 1 account manager instead the strategy is to fix with a notification
		- Confirm or reply with update 
		- Digital notification- build engine- don't get a confirmation today for enrolling in healthcare.
		- applying multiple times cause they do not know it went though and its just taking a long time to process

1. Notify engine- email example - disability claim we will send a confirmation email.
2. Contact Center- volume of calls am I receiving my $ and when.  
3. send a text in advance of them calling payment is processed and expect it on X date and here is what to expect and where to go to get more details.

Home gown appt. reminder system- out of LomaLinda.
- hacka-thon - va employees build a demo scrapped scheduling system sent to [twillio f](https://ahoy.twilio.com/twilio-products?pdv=c&pcrid=384475908685&pmt=b&pkw=%2btwilio&campaign=G_S_Brand_NAMER_USA&CA_mCPC=&utm_source=google&utm_medium=cpc&utm_term=%2btwilio&utm_campaign=G_S_Brand_NAMER_USA&CA_mCPC=&utm_adgroup=&utm_content=EAIaIQobChMIzNH0h8386QIV0cDACh0OsQdnEAAYASAAEgI_i_D_BwE&gclid=EAIaIQobChMIzNH0h8386QIV0cDACh0OsQdnEAAYASAAEgI_i_D_BwE&gclsrc=aw.ds)or appt. reminders
	- proved the no show rate drastically reduced.
	-  ended up scaling it nation wide 7 and 3 days out send notification

Notifications Engine - Strategy -Build a system that other teams can use their engine to put in triggers
- focused on is the direct business line communication not marketing
- personalized and service driven touch-points.
- VetText- send blast texts similar to an Amber alert. Be safe and where access to virtual care or mental health and walk in care, financial deadlines for taxes, stimulus checks.
- Might use eGain, *Granakis (not sure spelling)* or another didn't catch the name.
