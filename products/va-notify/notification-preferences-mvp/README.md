# Notification Preferences MVP

Default send - A veteran is automatically opted in to a particular notification because they 

Veterans who chose to opt-in to health care appts on va.gov prior to notification preferences, will have the opt-in radio button selected.  Otherwise default send will show no radio buttons selected.

True - preference is set to "Send" 
False - preference is set to "Do not send" 
Null - no preference is set 


**Use Cases**
1. Rx Shipment 
	* When a shipment is ready, VEText checks VA Profile for preferences. 
	* If true or null, 
	* Checking time stamps for authoritativeness, then update.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.

2. Rx Shipment - Unsubscribe
	* Default Send
	* Veteran types STOP to unsubscribe
	* VANotify passes this back to VEText who places them on the opt out List
	* Veteran logs into VA.gov preferences and selects to receive Rx shipment notifications
	* When a shipment is ready, VEText checks VA Profile for preferences.  It's TRUE, so VEText sends although they are on the opt out list
	* Checking time stamps for authoritativeness, then update opt out list.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.

3. BVA Hearing Reminders
	* Default Send
	* Veteran types STOP to unsubscribe
	* VANotify passes this back to VEText who places them on the opt out List
	* Veteran logs into VA.gov preferences and selects to receive Rx shipment notifications
	* When a shipment is ready, VEText checks VA Profile for preferences.  It's TRUE, so VEText sends although they are on the opt out list
	* Checking time stamps for authoritativeness, then update.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.
