# Heuristic Analysis - Champ VA Pay
## App Background
This app allows users to check whether various health care services and supplies are covered by CHAMP VA. The user must already know what the code is for the health care service in order for this app to be of use.
This app seems to be intended for medical offices/billing, rather than Veterans or their families managing their own health care
CHAMP VA (The Civilian Health and Medical Program of the Department of Veterans Affairs), is a VHA program where the VA shares the cost of covered health care services with eligible Veterans/beneficiaries (spouse, widow, children of disabled SC Veterans). This background information is not given in the app itself, but can be found by following a link to the CHAMPVA website from the home screen of the app
No login is needed to use this app.
Based on reviews in the Android/Google Play store, it seems the Android app just links to the web app: https://play.google.com/store/apps/details?id=gov.va.mobilehealth.champvalauncher&showAllReviews=true
## Strive for consistency
### Does this experience feel like it is one thing, made by one team? Do patterns feel like they all came from the same set? Are controls in similar places, is behavior easy to predict? 
The Check Codes page is consistently labeled in the navigation bar and in buttons.

## Keep users in control
### Do people feel like they are in charge, or the technology? Can they bail out of interactions whenever they want?
The app provides very bare bones information and presumes a level of knowledge by users about what CHAMP VA is, and what medical codes are. This may be fine for sophisticated Veterans/beneficiaries, or for medical billing administrators.
There is no way to look up whether a particular service is covered by CHAMP VA on this app without the code.
The Check Code page does add a check mark to the open form field to confirm that a user has filled in an alphanumeric code that meets the requirements (eg, number of characters), before the user hits the Submit button.


## Reduce users’ minimum steps
### How complex are interactions? How is the balance between number of steps, and clarity of next action?
Interactions are very simple and it only takes ~2 clicks to find out the basic information that the web app provides (whether or not a certain code is covered by Champ VA or not). The available interactions are to:
- Navigate to the Check Codes screen from the home screen
- Enter a code from the Check Codes screen in one of 4 categories
- Navigate back to the Check Codes screen from the Checked Code screen, which tells you whether or not a code is covered
The app does not provide cost information, or information on whether a particular code is covered at 100% or less by CHAMP VA

## Users should know where they are
### Is it easy to understand where to find things?
Very simple navigation, although its unclear why the navigation bar links to a browser landing page for the Launchpad app.


## Use plain language
### Clear labels, simple instructions, minimize jargon.
Assuming the intended audience here understands and knows what category of code they have, the language seems relatively simple.

## Make the ui aesthetically appropriate
### Does the feel of the experience feel like it is tonally appropriate to its context?
The different color coded boxes (see above) seem more aesthetic than to provide clarity for a user navigating, but the bare-bones UI may be fitting given the very specific and narrow use-case.

## Present new information with meaningful aids to interpretation
### Does the experience scaffold new ideas for people?
