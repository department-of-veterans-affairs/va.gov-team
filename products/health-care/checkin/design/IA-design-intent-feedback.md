# General IA/Site organization:

[MUST] The "Schedule and manage appointments" tool has grown in features and capabilities and is very complex product living under a small link buried in the health care hub. With each feature added, we try to change the name of the tool to accommodate the new capability rather than re-evaluating how we are presenting it on the site to users and where it lives. Its not a small tool for scheduling any longer, it is a robust tool for all things related to health care appointments - scheduling, requesting, cancelling, confirming, pre-appt questionnaires, checking in, etc. Connect with the Digital Health Management team on this work so they can account for it within their strategy and provide any feedback.

# User flows:

[MUST] Some of the flows do not currently represent all of the steps the user would need to take. For example, in the My VA flow, most users will start on the home page, then need to sign in, before they even get to the My VA page. As you get into more detailed flows and look at doing user testing, these flows must be as accurate as possible. This may also help identify where an existing flow may need to be modified, or a flow may just be too lengthy and complex to make it worth it to the user.
[SHOULD] The number of steps to complete the task on mobile app is high - when I counted the steps needed (including those not represented in the mocks), it took 7 steps to complete the check in process. This was the most of any of the flows. If the push notification provides specific data in the notification, it should link directly to that specific page for a direct flow.
[SHOULD] One thing to note in regards to the VAOS static page, the standard is that once a user is authenticated, they would bypass the static landing page and go straight to the tool. The rationale is the static page doesn't provide value once you are signed in. That is something that we could look at fixing with this work in order to simplify the flows.

# Authentication

[MUST] If a light-weight ID verification method is used for the check in, the user's authentication must be accurately represented in the flows, screens and links, especially if the light-weight version isn't a full authentication. For example, the user's name should not appear in the header, links to other auth tools should indicate that sign in is required, sign-in pages should be included in flows where applicable, etc.
Mobile app detection
[Question] Can any of the flows that link the user to the website on a mobile phone detect if the user has the mobile app on their phone and ask them if they want to "Open in the mobile app?". For example, if a user scans the QR code via their camera or a QR code app, instead of going directly to the website in a browser, it checks for the mobile app and either goes directly to it, or asks the user what they prefer.
H1s and links
[MUST] Links to and H1 of VAOS static page should not include the words "check in". That H1 was recently changed to utilize "manage" to be more all-encompassing. It is recommended that the existing label is tested in the context of these user flows to determine if there is an issue prior to making a change.
