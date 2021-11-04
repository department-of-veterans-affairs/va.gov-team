# Notification Preferences - Communication Items & Different Types of Consent 


##Context:

1- Explicit Consent: Setting preference on VA.gov, messaging start stop on some number - this will result in a specific setting being written back to VA Profile and reflecting in the radio button in VA.gov relative to that specific communication item

2- Implicit Consent: Communication items may have implicit consent strategies i.e. filling out a VA.gov form and sharing contact information - this will allow VA.gov to send notifications to the user assuming there is no explicit consent preference set that contra-indicts
 
If a user expresses their preference, VANotify will always honor and prioritize that. If the user has not expressed a preferences for that specific communication item – we will follow the business rule, which is determined by their consent strategy.



##Key Question:

Do, and if so how do we surface communication items that have implicit consent in the VA.gov Preferences experience? 
 

##Current State: 

Veterans will receive some communication items via an implicit consent strategy and in that case will not see any indication of that on VA.gov preferences. 

## User Explicit Permission Settings

True - preference is set to "Send"\
False - preference is set to "Do not send"\
Null - no preference is set

--------------------------------- 

#Proposed Future State

Communication Item Implicit Permission Settings

True - notification is sent to anyone without explicit prefence set to false 
False - notification requires explicit consent set by user in order to send 




**Example Communication Flows Currently In Prod**
1. Rx Shipment - Consent via 1010EZ
	* Implicit Consent
	* When a shipment is ready
	* VEText checks VA Profile for preferences. 
	* If true or null, VEText makes a call to VA Notify API to send
	* VANotify sends the notification.
	* If false, VEText does not call the VA Notify API

2. Rx Shipment - Unsubscribe thru text
	* Implicit Consent
	* Veteran types STOP to unsubscribe
	* VANotify passes this back to VEText, which sets explicit preference to false
	
	
3. BVA Hearing Reminders
	* Default Send
	* When a it's time for a hearing reminder, VEText checks internal opt out list
	* VEText checks VA Profile for preferences. 
	* If true or null, VEText makes a call to VA Notify API to send
	* VANotify sends the notification.
	* If false, VEText does not call the VA Notify API
