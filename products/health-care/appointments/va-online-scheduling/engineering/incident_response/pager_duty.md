## Maintenance messages in VAOS

We have the ability to create two different kinds of maintenance messages in VAOS:

### Warning message

This message is an alert that is displayed on VAOS pages, but leaves the app up and running. It warns a user that there may be problems using the application.

To enable this message:

1. Choose which environment to enable maintenance message:
    1. For Staging open https://dsva.pagerduty.com/service-directory/PK8LY9N
    2. For Production open https://dsva.pagerduty.com/service-directory/P4M0YBT
2. Click Add a maintenance window at the bottom
3. Make sure the "Which services are affected" box says
    1. "Staging: VAOS - warning message" for Staging
    2. "VAOS - warning message" for Production
4. Choose your desired time frame
5. Click Create button


### Full maintenence mode message

This message will replace the entire VAOS application and prevent any access to it. We typically only use this if there is downtime in one of our dependent services is down and this will take VAOS entirely down for a period of time.

To enable this message:

1. Choose which environment to enable maintenance message:
    1. For Staging open https://dsva.pagerduty.com/service-directory/PK8LY9N
    2. For Production open https://dsva.pagerduty.com/service-directory/PFDNA11
2. Click Add a maintenance window at the bottom
3. Make sure the "Which services are affected" box says:
    1. "Staging: VAOS" for Staging
    2. "VAOS" for Production
5. Choose your desired time frame
6. Click Create button

### Custom maintenence mode message

This allows a custom message to be displayed for either a Warning or Full maintenance window.

To enable this message:

1. Follow the instructions above to create a Warning or Full maintenance mode message
2. In the description box enter:
    1. USER_MESSAGE:Message Title|Message body text
    2. Total message in description box cannot exceed 255 characters including USER_MESSAGE: and seperators
3. Example message entry

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/97117349/21d77049-51e3-426f-84c6-63fb205878f7)

4. Example message that displays to user

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/97117349/6b849e9d-df43-4cb7-af40-469aaa0a8592)
