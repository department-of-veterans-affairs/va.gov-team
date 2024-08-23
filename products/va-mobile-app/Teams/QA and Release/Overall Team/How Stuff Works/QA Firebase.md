# Firebase
## Screen definitions:

 * CustomQLViewController appears to be a controller wrapped in the 'RnFileViewerManager' which I interpret as reviewing attachments or other file selection.
 * SFAuthenticationViewController: This is the webview for login for iOS only
 * WebviewLogin: I believe includes both the iOS and Android login
 * AVFullScreenViewController: this should only be for playing video. I guess it's possible if a doctor sends video to a user in SM?

## IDs
 * The ID returned in v2/user is the uuid. Per Andrew: for other endpoints, if the object has it's own id, we'll use that but if it doesn't then we typically sub in the user uuid

## Messages

 * Remote into CAG, and open https://smclinician-sysb.myhealth.va.gov/web/sm-clinician/home?DUZ=35539&station=989
 * Log in via PIV card and you’re in!
 * Remote Config (Feature Flags)

 * In PROD, RC gets cached for 12 hours, so each time they open the app we check ‘is their most recent RC value within the last 12 hours’. If yes, we don’t check RC again. If no, we do pull new RC info.
 * Also! Current feature flags don’t take effect until the NEXT time the user launches the app. So the ‘getting the new RC with a feature flag newly-on” stuff (per the bullet above) will take place on the subsequent app launch.
 * How this all looks in practice: I haven’t launched the app for at least 12 hours. I open the app and it applies my most recently fetched configuration(config #1), then fetches the new version(config #2). I then immediately hard close the app and open it again. My config #2 loads up and it doesn't attempt to retrieve a new RC since I'm in the 12 hour window.
 * Instructions for how to turn on a feature flag override (that I often need to send to Product, UX, or various other peoples who are not in the app constantly): Profile > Settings > Developer Screen > Remote Config > toggle the feature flag you’re looking for and tap “apply changes” > You are logged out of the app > log back in again & see the feature you’re looking for

## What’s New

 * How do I test What’s New internally?
 * In demo mode (and potentially only in iOS? But maybe both platforms): go to dev screen and make sure override for encouraged update is the same as the store version (because EU takes precedence over what’s new)
 * Set what’s new override to a valid existing version – the content that will show in the banner, will be whatever is mapped to that version in the common.json folder in the ‘what’s new’ strings that are on the very bottom of the file
 * Log out and back in again - what’s new appears
