## Maintenance messages in VAOS

We have the ability to create two different kinds of maintenance messages in VAOS:

### Warning message

This message is an alert that is displayed on VAOS pages, but leaves the app up and running. It warns a user that there may be problems using the application.

To enable this message:

1. Open https://dsva.pagerduty.com/service-directory/P4M0YBT
2. Click Add a maintenance window at the bottom
3. Make sure the "Which services are affected" box says "VAOS - warning message"
4. Choose your desired time frame
5. Click Create button


### Full maintenence mode message

This message will replace the entire VAOS application and prevent any access to it. We typically only use this if there is downtime in one of our dependent services is down and this will take VAOS entirely down for a period of time.

To enable this message:

1. Open https://dsva.pagerduty.com/service-directory/PFDNA11
2. Click Add a maintenance window at the bottom
3. Make sure the "Which services are affected" box says "VAOS"
4. Choose your desired time frame
5. Click Create button
