# OAuth Web
Initial draft of differences between the SiS implementation for web based apps (such as VA.gov) and mobile apps (such as vamobile). 

## Diagram
![Sign in Service - Web](https://user-images.githubusercontent.com/71290526/171727846-73623244-3d42-4f1a-a63c-9edf493eb315.png)

## Token_info
The use of the token info endpoint will facilitate automatic logout due to user inactivity on web based versions of the SiS. The intent is the web app will read the `token_info` cookie and extract the refresh token expiration to determine when to display the inactivity modal and subsequent auto logout.

## Introspection
Web based apps will not require the use of an introspection endpoint because the web based version will use internal user storage mechanisms.
