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

## P2

### Per designer

Forms UXR Session 081225 1000 PT

iOS / Safari

Seemed versed in app skills—does appointments, SM, and travel pay on the app, “…it’s actually pretty good.”

No issues navigating to WebView, easily recovered from technical difficulties

When asked, didn’t verbalize any issues with navigation or flow, was able to complete flow.

We didn’t design or develop for dark mode so the UX isn’t 100% right, there’s also an issue with corner radius on one of the tags for “[days left to complete]”

Didn’t interact with the collapsed info to review before submitting (recap info), so didn’t review info before submitting.

No navigation issues, typing on phone was difficult.

Negative sentiment for first screen in WebView, too many options/busy.

Struggled to close the WebView to get back into the app UX, second time we’ve seen this.

Identified “submitted” info from toast, correctly identified status tag and meaning.

Provided feedback about how in progress might be less-than-helpful in terms of determining an exact status for this form.

Could we redesign the VA test app icon so it’s not only green but also includes “TEST” as text in the icon and/or name info?

Twice is a row with WebView nav, unexpected but good to know!

Thoughts on icon: I think we picked the wrong icon for this BECAUSE it was originally designed to be an in-app or WebView experience and the "Go to..." button has a navigate to page icon (right-facing arrow), not a navigate to WebView icon (box w/ arrow to upper right)—might be why people are having a hard time closing the WebView, because they may be having some banner blindness to that top WebView UI and also believe they're in a page on the app. Icon was never switched after we started development because this didn't go through any kind of operationalized handoff process, that change fell through the Ops cracks.

### Per developer

Noticed that the user had his font scaled up - the toast was covering the ‘Continue form’ part so it was not immediate obvious where to click to continue the form

Realizing that running these user testing that they may need to uninstall their current VA app on their phone to install the demo version.

### Per product manager

#### On Form Selection

Mentioned that he’d likely select the first option

In Data Entry

Veteran was confused about the error message

Mentioned the flow was not hard to understand

Needed prompting to “leave” the form

#### General Feedback

Found the first screen the most confusing (i.e. form selection)

Understood status, knew that “in progress” meant it’s likely being looked at by somebody.

If checking back later, would expect to see a difference status

In general found the experience pretty easy; but could see how other would find it cumbersome to use

### Per researcher

#### Warm-up questions
Veteran: confirmed

Device using an iPhone

Default web browser: Safari

Did receive the testing link, downloaded prior to study, no noted difficulties

Yes, have completed a VA form online before

Does have the VA Health & Benefits app downloaded on their device.

Uses to checkin upon arrival at facility, travel reimbursements, and to check secure messaging between self and providers.

Experience so far: “It’s actually pretty good.”

Participant noted being unable to see themself or me upon sharing screen. 

Got a “ready to test screen” that required a Redeem code. The participant asked about it and was told it would be provided during the testing session. This was not experienced by the previous participant. It was noted by the developer following the call that this was due to the participant not having also clicked on the step 2 button in the instructions. 

Tried number inside link as redeem code, but participant had difficulty with his keyboard allowing him to enter a lowercase, and then experienced some delay/freezing from the device as he was entering the code.

Had to click step 2 “view in testflight” and “install” , got the already have app installed modal and clicked “install”.

Launched the testing app

#### User tasks

Login: no problems. User was experiencing window overlap with the app blocking a portion of the screen.

Participant had no problem finding the “Go to forms” button on the homescreen, intuitively scrolled down.

Screen: “Submit a statement to support a claim”

No comments

Screen: “What would you like to do?:

Believed option 1 “I have new evidence to submit for an open claim” was the correct option to select, same as P1.

Noted “Well, it could be any of these, couldn’t it.”

Prompted to select “What I want to do isn’t listed here” to move forward in the flow.

#### Form entry

Phone suggests Names to prefill fields in 1 click (inherit benefit of iOS)

SSN troubleshooting: Did not have any other issues so far before this error, noted nothing else was hard to navigate or understand.

Upon instruction to leave the form user scrolled down, asked for support to leave screen

Noticed “Form updated successfully’ overlap overlapped with the area on the screen that the user needed to click on to “Continue form”, user had to scroll to see that it was there.

User also was in dark mode which changed the view of the app but not the web view as they were working through the prototype.

**Note to self: should also test with a non-US address to test the fields.**

It can take awhile to scroll down to the correct state for users, with states such as Texas.

User did not open collapse components to preview data entered prior to submission.

Submission screen

Did not encounter any issues with the form

Quote at 16:48 “No, not really. Only, submitting on the phone is a little harder  typing. But other than that, not too bad.”

Navigating was not deemed challenging

Quote at 17:16. No labels were noted as confusing however, participant noted the first screen looked at where it told us purpose of the form. A few of the options sounded a like.

User had difficulty navigating back to the app from the confirmation page. Needed prompting to exit to Done at top of screen.

Form submission

Knew form was submitted because it was stated directly on the screen when the form was submitted.

Status to the user means that it currently in progress, probably being looked at by somebody. Or it could be routed to somebody.

Quote 18:45. Would hope to see when checking on the form later. “Probably a different status, or, at least I would hope that it would walk me through where it’s at right now. Being reviewed by intake, being reviewed by case manager. Something like that. To kind of show me that it is moving, rather than just in progress. Because that could mean anything.”

Did not encounter issues using their device so far.

#### SuS submitted

Results in Optimal Workshop.

Noted he wasn’t sure about question 5 (well integrated)

Noted on question 7, disagree because not everyone is not technically savvy.

Did feel pretty confident using the system. 

VA testing app overrode the users actual VA app

#### Closing

How did the user find this process overall: Quote 24:10 “It’s pretty… like I said earlier, it’s pretty easy to navigate. But I can see where a lot of people could get confused and find it cumbersome to use. 

1st page with specific questions with purpose of the form was confusing.
