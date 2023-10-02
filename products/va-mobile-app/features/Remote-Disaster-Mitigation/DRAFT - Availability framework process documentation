### Availability Framework
The mobile app team has an availability framework to remotely address critical issues found in the app. The benefit of this framework is our use of Remote Configuration by which we can "turn off" or restrict users' access to all or parts of the app while we fix a critical issue. 

In this framework, we communicate 4 things to users:
1. We know there's an issue.
2. We're fixing the issue.
3. Veterans can still access their information in other ways, whether by visiting VA.gov or calling a phone number.
4. Veterans know how to regain access via the mobile app (once available).

### Use cases

**Use case 1 (all users)**
Problem: The app has experienced a critical issue whereby a screen can't be rendered without crashing the app or presenting a problematic screen (code instead of UI).
Goal: We want to prevent users from attempting to load the problematic screen until a fix has been made and to prevent the app from crashing. 
Solution: We'll show a native modal alert instead of attempting to load the problem screen. The copy will communicate to the users that we know there's a problem, we're fixing the problem, and that they can still get their information on VA.gov. 
Reasoning: We chose a native modal alert for use case 1, because a screen can't be rendered in this situation. In addition, we may not know the specific task a user intended to do when this use case occurs. Therefore, we direct users to go to VA.gov instead of providing a specific phone number.
Example: A coding error would mean the mobile app would show unrecognizable information instead of normal UI.

**Use case 2 (all users)**
Problem: A feature (or part of a feature) is broken in the mobile app. The feature entry point can still be accessed and a screen can still be rendered. 
Goal: We want to prevent users from accessing the feature. We also want to offer users the ability to access their information in some other way and then empower users to fix it with an app update when available.
Solution: We'll show 2 separate red alert boxes. The first alert box communicates that we know there's a problem, we're fixing the problem, and that they can complete the task by calling a specific number. The second alert box will communicate that the problem is fixed and that to regain access to this part of the app, users will need to update the app. We will display a button that will take users to their app store. We'll still provide a phone number for users to complete their tasks should they not want to update the app in the moment.
Reasoning: We chose the red alert box due to the flexibility of the component and ability to include several actionable elements. We also chose to show 2 separate messages depending on if we were actively fixing the issue versus if the issue was fixed.
Example: We're showing the wrong personal information in Prescriptions. The feature is still working, and we can show the appropriate UI. But it's there's an error critical enough to the user experience that we need to shut down the feature and fix it.


**USE CASE 3**:  **A screen element, feature, or part of feature is broken (for SOME users, not all)**. The feature entry point can still be accessed and a screen can still be rendered, but some folks can see data within the feature and others can’t.
A. We are working to resolve it remotely
B. The problem is now resolved and installing a new version of the app will correct the problem

Goal: For a feature that is broken for SOME USERS but not all, set expectations and provide guidance (around how to get that info some other way in the meantime (A&B) and then empower users to fix it (B)) that helps the affected segment until a fix has been made, but do it without preventing access to that feature for the users who are not affected by the issue.












