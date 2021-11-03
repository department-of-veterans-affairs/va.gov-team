

** Use Cases**
1. Rx Shipment
	* Default Send
	* Veteran types STOP to unsubscribe
	* VANotify passes this back to VEText who places them on the opt out List
	* Veteran logs into VA.gov preferences and selects to receive Rx shipment notifications
	* When a shipment is ready, VEText checks VA Profile for preferences.  It's TRUE, so VEText sends although they are on the opt out list
	* Checking time stamps for authoritativeness, then update.
	* VEText makes a call to VANotify to send
	* VANotify sends the notification.

