

Default send - 
Veterans who chose to opt-in to health care appts on va.gov prior to notification preferences, will have the opt-in radio button selected.  Otherwise default send will show no radio buttons selected.


Default send - 

**Use Cases**
1. Rx Shipment 
	* When a shipment is ready, VEText checks VA Profile for preferences. 
	* 
	* Checking time stamps for authoritativeness, then update.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.

1. Rx Shipment - Unsubscribe
	* Default Send
	* Veteran types STOP to unsubscribe
	* VANotify passes this back to VEText who places them on the opt out List
	* Veteran logs into VA.gov preferences and selects to receive Rx shipment notifications
	* When a shipment is ready, VEText checks VA Profile for preferences.  It's TRUE, so VEText sends although they are on the opt out list
	* Checking time stamps for authoritativeness, then update opt out list.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.

1. BVA Hearing Reminders
	* Default Send
	* Veteran types STOP to unsubscribe
	* VANotify passes this back to VEText who places them on the opt out List
	* Veteran logs into VA.gov preferences and selects to receive Rx shipment notifications
	* When a shipment is ready, VEText checks VA Profile for preferences.  It's TRUE, so VEText sends although they are on the opt out list
	* Checking time stamps for authoritativeness, then update.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.
