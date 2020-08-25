# Key Decisions for Mobile Authentication

## Purpose
The mobile app team needs three decisions to proceed with the authentication work. Below we have outlined the three decisions, some context around each and provided a recommendation. 

## Background
VA is using OAuth to authenticate users when they login to the app. OAuth is often also used to authenticate third-party apps, so many of the standards aren’t directly applicable to our use case. For example, when Veterans authorize Apple Health to access their VA data, then it makes sense to ask for consent, and allow for a long period of time before re-authorization using login and password. Whereas if a user is logging directly into their Apple Health account, that does not make sense.

OIT has set standards for OAuth, however their standards are web-based and the VA mobile app is a new use case. In particular, mobile apps allow for biometric authentication, which protects the credentials on the device in secure storage. This new use case is more similar to a banking app, in which you login in once per year using your credentials and thereafter can use biometric authentication. 

## Decision 1: Refresh token expiration 
### *How long should a user be able to login using biometrics before they have to re-enter their VA login information (Username + Password)?*

### Decision Points:
#### Length
- Longer (60d or more) - allows the user to stay logged in longer - fewer times going through the login flow
- Shorter (7d or 30d) - user has to sign in more often. More secure in the rare instance that the refresh token is leaked. It will be stored securely on the device (iOS keychain for instance)
#### Rolling vs. Fixed Expiration
- Fixed expiration (30d from issue) - this means the user must re sign in after 30d
- Rolling expiration (30d from last use) - allows the user to remain logged in as long as they use the app every 30d (note that SSOe seems to not support this)

### Examples:
- Lighthouse has a 42-day rolling refresh token

### Our recommendation: 
- Length:  > 60d (allows for fewer sign in requests)
- Rolling vs. Fixed expiration: Rolling expiration (note that this may not be possible with SSOe)

## Decision 2: Access token expiration
### *How long are user’s sessions?*

### Decision Point:
#### Length 
- Longer (60m or more) - allows for fewer access token re-issues during a session. How long is an average user session? Make this longer than that). 
- Shorter (1m, 5m) - means the app will silently be doing more network requests. More secure in the rare instance that the access token is leaked

### Examples:
- Lighthouse has a 60m access token

### Our recommendation: 
- Length: 60m (long enough to not incur extra network calls)


## Decision 3: Consent screens
### *Since users are logging into the VA directly (as opposed to through a third-party), is the consent screen required?*

### Context
Consent screens are useful when authorizing a 3rd party app, such as “yes I allow the VA to share my profile details with widgetapp.com”. However, their utility is reduced in a first-party context, when the Veteran is simply authenticating to the VA.

### Our recommendation: 
- Turn screens off




