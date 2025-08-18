# Offline Feasibility Notes & Findings

## Document ways we can deliver offline content to users
To support offline functionality, the app will use a SQLite database to store previously made requests on a per query basis to load in where apprioriate while the app is not able to connect to the services in the standard online pattern. 

## Confirm if/how login works when app is offline
In the current state, login does not function while the app is offline. Access to the app requires going through either the biometric login and refreshing the stored token or standard login flows through the webview.

## Document how we are currently communicating with users when endpoints are down and how we might improve that communication
The app has a system of downtime constants representing endpoints mapped to screens that use those endpoints to display an error screen displaying the expected maintenance window we retrieve from the service. During downtime, this error page is the only information displayed and they user cannot get to the standard experience for a feature during downtime. 

For unexpected errors such as a lack of online connection, an error screen is displayed saying there is a problem with the app. In our error screen component, errors are sorted into an error type (network connection, app error, app error with refresh) based on whether we want to allow the user to retry or if we think something has gone wrong that repeat attempts would not solve (such as an entirely missing endpoint). For network connection errors, there is a dedicated network connection error screen that informs the user the app is not able to connect to the internet. For other errors, the error screen directs the user to call the help center if they continue to have problems.

#### App Error Types
```
NETWORK_CONNECTION_ERROR
APP_LEVEL_ERROR
APP_LEVEL_ERROR_WITH_REFRESH
DOWNTIME_ERROR
CUSTOM_ERROR
CUSTOM_ERROR_WITH_REFRESH
```

## Identify areas of the app that would be good candidates for this behavior
- History/list screens for appointments, prescriptions, claims, 

## Identify areas of the app that would be bad candidates for this behavior
- Secure Messaging
- Prescription refill flow
- Submitting claims
- Profile updates
