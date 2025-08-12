# Forms MVP Usability Study Notes
Testing flow: Submitting a statement in support of a claim, from the VA Health & Benefits app.
Session dates: 8/12-8/15

## P1: 

### Per designer:

Forms UXR Session 081225 0700 PT

iOS / Internet Explorer (said this verbatim, maybe they weren’t sure about their actual default browser—could be it’s Safari?).

Hesitated when asked about filling out forms on VA, wasn’t sure about time he had done this before.

Prototype isn’t correct, wasn’t built to spec (mismatch w/ Figma)

We won’t know if the new navigation button we wanted to test is usable or desirable from this study.

WebView date in form—Error state launches before user has attempted to fill in all fields, this is incorrect—shouldn’t lead to a fail state before we we’ve allowed users to try to succeed.

Couldn’t find “Done” link to dismiss the WebView, needed prompting from moderator to continue.

Should we make confirmation numbers and status both available in the app? So users don’t have to go to WebView when troubleshooting or providing the number to someone else?

“It’s in the mail, going to a place” = Vet’s “In progress” mental model.

Mimic’d “easy” question back to us as feedback, did we slip in a leading question in by accident?

I thought it was interesting that dismissing the WebView was a struggle, I wouldn't have guess that.

### Per engineer:

Finding the “Done” or “Close” button wad difficult - I feel as though this is going to be a trend.

IE response was interesting, they could have meant Micosoft Edge and not IE - you can use Edge on the phone.

Most pauses were just figuring out how to close the webview (closing it to fill out later and closing it cause you have submitted the form).

### Per researcher upon review of recording:

#### Warm-up Questions:

Confirmed Veteran

Device type: iPhone

Default web browser: Internet Explorer

Had downloaded testing app prior to the session

Filled out form for the VA before? Used the app, doesn’t remember if there is forms on there or not.

VA Health & Benefits already downloaded on their device

Use it today for, 
- Apt reminders
- Medication refills
- Messages back and forth with providers
- Proving benefits

Experience with the app so far: Good

#### User Tasks/Prototype:

Screenshare, saw menu options, found share. Loading “screen broadcast” screen. Share device audio enabled by default.

User did not swipe away zoom screen (may have desired to 

User went to Test Flight app vs. VA testing app to open prototype

Was already logged in, reported no difficulties with login. *skipped initial log in task but confirmed no difficulties with that section.

**Note** Ideally we would not send them the link ahead of the sessions so we could go through the process of login with them. However, since login was not what we were testing specifically and credentials were assumed it does not negatively impact the study goals or purpose.

Question: “What would you assume this section to be called?” user stated verbatim what was on the screen vs. suggesting something new. 

Screen: “Submit a statement to support a claim”

6:14 Notable Quote (larger quote available in transcript), “Everything is pretty much standard for the VA”

Screen: “What would you like to do?”

Thought he should select “I have new evidence to submit for an open claim”

Was prompted to select the bottom option “What I want to do isn’t listed here” to continue on the prototype flow.

Filling out the form.

Noticed “Date of Birth” produces errors while the user is entering each portion of the date (i.e. Month, day)

SSN error response: Couldn’t tell if it was enough numbers (likely due to using the same number as a fake number)

User attempted to troubleshoot by counting numbers and tried to retype to correct the errors

Did not report other issues

Did not report anything being difficult or hard to understand

User could not find where to go to leave the form mid-form. Had to be prompted to “Done”.

User was able to select “Continue form” without prompting

The previous invalid SSN was still retained in the form when continuing back to it, but was not shown with the error (would validation have caught error if user had kept the previous entry and pressed “Continue” prompting the user to reenter the error?).

iPhones may remember address typically typed on the device and offer a single click entry to the field. (inherit phone feature that improves form entry)

User had a spelling error when typing in the email that they did not correct and moved forward with.

User used predictive swiping motion to type free text sentence. (another inherit phone feature that may improve form entry for users from a mobile device, although they did have to correct when the intended word “test” was captured instead as tree.

The user reported that they did not encounter any issues from their device.

They reported that nothing was difficult to navigate or understand.

They reported that there were no confusing labels on the form.

To return to the app the user did not know where to go. They clicked on the link button “Go back to VA.gov homepage” towards the bottom of the confirmation screen.

They had to be prompted to instead click Done.

#### Forms submission

User understood that the form was submitted because the text on the screen told them so.

Status meaning quote from user time stamp 14:10 “It’s in like the mail, going to a place, and then somebody will review it.”

Expect to see if they check back later
- An email or text notification that there is a status update on your claim
- A notification of some sort

SuS link was easy to access for this user from the chat, results were captured in Optimal Workshop. 

