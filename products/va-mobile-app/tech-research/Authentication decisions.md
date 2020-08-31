# Key Decisions for Mobile Authentication

## Purpose
The mobile app team needs to come to consensus on four decisions to proceed with the authentication work. Below we have outlined the four decisions, some context around each and provided a recommendation. 

## Background
The mobile app will use SSOe OAuth to authenticate users into the app. OAuth is often used to authenticate third-party apps, so many of the standards aren’t directly applicable to our use case. For example, when Veterans authorize Apple Health to access their VA data, then it makes sense to ask for consent, and allow for a long period of time before re-authorization using login and password. Whereas if a user is logging directly into their Apple Health account, those standards do not make sense.

[OIT has set standards](https://www.oit.va.gov/library/recurring/edp/) for OAuth, however their standards are web-based and the VA mobile app is a new use case. In particular, mobile apps allow for biometric authentication, which protects the credentials on the device in secure storage. This new use case is more similar to a banking app, in which you login in once per year using your credentials and thereafter can use biometric authentication. 


## Decision 1: Refresh token expiration 
### *How long should a user be able to login using biometrics before they have to re-enter their VA login information (Username + Password)?*

### Decision Points:
#### Length
- Longer (60d or more) - allows the user to stay logged in longer - fewer times going through the login flow
- Shorter (7d or 30d) - user has to sign in more often. More secure in the rare instance that the refresh token is leaked. It will be stored securely on the device (iOS keychain for instance)
#### Rolling vs. Fixed Expiration
- Fixed expiration (30d from issue) - this means the user must re-sign in after 30d, even if they use the app daily
- Rolling expiration (30d from last use) - allows the user to remain logged in as long as they use the app at least once every 30d (note that SSOe seems to not support this)

### Examples:
- Lighthouse has a 42-day rolling refresh token

### Our recommendation: 
- Length: 45d (based on discussions with Cory Trimm)
- Rolling vs. Fixed expiration: rolling expiration would be preferred, but IAM SSOe only allows for fixed expiration

This means app-using Veterans will have to re-enter the authentication flow about once every 6 weeks.

## Decision 2: Access token expiration
### *How long is the average user session?*

### Decision Point:
#### Length 
- Longer (60m or more) - allows for fewer access token re-issues during a session. This is handled quietly in the background, but incurs a network request and adds some latency.
- Shorter (1m, 5m) - More secure in the rare instance that the access token is leaked, but means the app will silently be doing more network requests. 

### Examples:
- Lighthouse has a 60m access token

### Our recommendation: 
- Length: 30m (long enough to not incur extra network calls during a long session, also based on discussions with Cory Trimm)


## Decision 3: Consent screens
### *Since users are logging into the VA directly (as opposed to through a third-party), are consent screens required?*

### Context
Consent screens are useful when authorizing a 3rd party app, such as “yes I allow the VA to share my profile details with widgetapp.com”. However, their utility is reduced in a first-party context, when the Veteran is simply authenticating to the VA to access their own information.

### Our recommendation: 
- disable consent screens

## Decision 4: LOA1 users
### *Given our app will be LOA 3, how would we handle LOA 1 users in the MVP?*

### Context

Our app is targeting users who already have a VA account and want to see information that is personal and relevant to them. Therefore our app is requires LOA 3 to see this personal data (both claims and health). However, this means that individuals who have not completed identify proofing will not be able to do much with the app beyond Logging in, accessing the Veterans Crisis Line and viewing Facility Locator. 

### Our recommendation: 
- For the MVP, the app should require users to have LOA 3 and direct them to VA.gov if not.


