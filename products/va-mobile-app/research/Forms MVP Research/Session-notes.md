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

This user cancelled.

## P3

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

## P4: 

### Per designer:

We need to make it clearer how to return to the app after submitting a form + we need additional information about the form submission throughout the process are my two biggest takeaways. 

That placing a link on the home page directly to the forms is super helpful.

### Per engineer:

Install on Android is definitely more difficult for users - for user testing purposes.

She had alot of good feedback on the form flow(ex. asking what pages meant, or what happens after you submit, and call assistance ).

The done button strikes again 3/3.

Also, we should check if the App Tester app was still installed and uninstall for next time. 

### Per researcher:

To be added upon review of recording

## P5:

### per designer:

App optimized for Tablets would be useful and that "done" button is obviously a bit confusing to find.

### per engineer:

4/4 on done button

Toasts seems helpful but every user has not dismissed it immediately and blocks the “Continue form”  button.

Another person using dark mode but the webview did not reflect that -> something we should look into.

### per product manager:

#### General

Has used forms online (web)

Login is a hassle because different government sites have different login providers

#### Forms Web View/ Data Entry:

Didn’t find the form options “crystal clear as to what a claim would be”

Had no trouble entering the

Paused after the error state on date

Understood the significance of the error state on the social security error

On Phone Number, was confused about whether he needed to include dashes

“iPad would’ve been a lot easier”

“Geez, so many fat fingers. This is hard on a tiny screen”

“Was there any part that was hard to navigate or understand?” “No[…] this looks like a typical VA form”

Had difficult knowing how to go back to the Forms location in the app, didn’t seem to know he was in the web view —> We should rename “Done” to “Back to Forms”

#### On Forms Page:

Selected “Continue” to exit out of the web view, and submitted the form accidentally

The toast message covered the form status, he knew to move/ scroll his screen but it was still difficult to hold it in place for enough time

“The “In Progress” status means it is waiting to be evaluated”

If he checked back, he would be expect to see the status

### per researcher:

Pending review of recording.

## P6:

### per designer:

the "done" button continues to be a cunning little fox

that toast message wasn't in the way this time but still was randomly in the middle of the screen

### per engineer:

First though was forms would be in claims

Done button 5/5 <- this button name needs to be contextual I feel. “Close”,  “Dismiss”, “Go back App” or something

Standardize status(green for done, yellow for in-progress, and red for in-progress or draft)

### per product manager:

#### General

Uses the app for Secure Messaging and Prescriptions, and viewing VA letters

Finds the Disability Rating and Latest Payment Privacy Feature “neat”

General observations: Seemed tech savvy, had it already downloaded and developer option on

Found the whole experience straightforward

Initial Navigation

“To submit a statement in support of a claim, I’d either go to Claims or ‘Go to Forms’”

#### Webview/ Data Entry:

Was a bit confused by error message, did not have trouble with data entry

Found the social security prompt confusing (due to incorrect data) but otherwise everything was straightforward

Regarding the confirmation screen, was disappointed by the 30 day timeline 

#### Forms Page

Understood it was submitted

Understood status of in progress to mean it hasn’t been received

“Once it disappears, it’ll probably go to the Completed tab”

Suggested color coding statuses - “yellow to be in a holding stage, green is where it’s completed, red is where it’s not done”:arrow_right: love that this is a potential design and he suggested it; shows this kind of thing would be intuitive for the user.

### per researcher:

Pending review of recording

## P7

### per designer:

iOS / Safari

Recently did travel pay reimbursement with the app, “Super easy, it was awesome…”

Online check-in “phenomenal”

See video for feedback about app overall, P provided lots of qual data

Might want to review this for offline mode, systems resilience types of feedback

Would expect to find Forms in Benefits section

Screener radio options continue to be a challenge for accessing this form, but that might not be a bad ting for reducing overall VA paperwork intake though.

“Finish this later” might be confusing for users

“Done, I don’t know.” Was confused about how to leave the WebView

P noted that they were confused about what type of form to use when presented with options

How much control do users want vs. how much control is VA able to give them when selecting a form?

Didn’t note any usability issues when asked, did not that having parity with mobile and desktop for content and/or copy was helpful because it made things recognizable.

“I would click on complete”, would look for a submitted form in “complete”, was confused about what “In progress” status meant

“I just submitted it…in progress is kind of vague, that would be confusing for me...”

Would expect to find submitted forms in “Complete”

	•		•	Positive sentiment overall when filling out exit survey
 
9:28
For retro on this study, could we do a section on Test Flight—I want to make sure that the lift for testing in browser is really worth it for users.

### per engineer: 

Done” and “finish the application later” is a bit crossover between mobile and web that is causing a weird user experience. This is like the 2-3rd user who has tried using the “finish the application later” to close the webview.

“In progress” status was not detail enough - why is in progress when I already submitted.

Expected forms to be in the benefits tabs. Depending how often people do forms it might be worth moving the button higher up on the HomeScreen

The update version that showed up on the HomeScreen I believe is likely due to the hotfix(login issues) that just came out. Users can ignore that right now and just use whats installed through TestFlight.

### per researcher:

Pending recording review.

## P8

### per designer:

iOS / Safari

I’m excited for this one because it seems like the P is in a busy-ish location and/or is slightly distracted which is a very real situation, good for context building

“Decent for what it is…” app isn’t meeting needs around handling 3P medical care, it’s 3/5 star okay.

Where should the ingress be? “[If it’s in progress I would click on claims, if it’s new I would click on claims]”

Issue with “continue” button on GH portal, “A little tiny”

“I’ve been working on an active claim” Good context for user’s mental model of what a “Form” is or might be

Should we test this for forms that aren’t related to claims, how might something like VR&E or Travel Pay change the users mental model if we expose them to multiple types of forms in one study?

“Okay that kind of sucks” re: needing to submit one form per statement, “I think that’s a lot of work, [for mobile typing is difficult], it’s easier on a computer to do that.”

“I wish it would [pre-fill]...annoying that I have to enter everything.”

Couldn’t read one of the pages, text was too small to use on mobile (GH portal page?)

Needed to be prompted on how to exit WebView

Tried to click on whole card to continue form, “I was trying to click on “Statement in Support of a Claim…”

So many when there’s only one contextual action we can make the whole card clickable? Would like to text this interaction too and see if it’s confusing when there’s multiple contextual actions.

“I don’t like the phone number…I wish it put the parenthesis in there”, would like it to include punctuation—

“If it’s a statement I don’t want to put anything wrong” so the form isn’t providing psychological safety, it may be a bit untrustworthy or uncomfortable.

Reviewing info in recap, “I wish I could click on those dots” about un-hashing SSN, reiterated need for information on a claim to be accurate to avoid making claim “restart” or take a long time.

“What if it’s a really really long one, like to establish nexus or something.” Re: reading their own statement back

“The statements really matter…otherwise I need to go to my computer to [check it or attach a file]”

Does most tacks on their phone so really good context here

“Yeah the form submitting…it says its in progress…there a confirmation number so they got all the info…” P recommended swapping content order/updating IA so that “in progress” is later in the alert

Users are saying things aren’t difficult to understand but are also having difficulty understanding things, so there’s some lurking bias here—might need to rephrase this question to make it more open ended.

“[submission success alert] is confusing to me…”

“I submitted it and there’s a confirmation so I expect that the form is fully submitted…” then detailed their mental models for VA reviewing the form after submission

Asked for help returning to the app from the WebView, knew that doing to the VA.gov HP in the WebView was undesirable

“To me this is a draft because of what it says in the top...it’s a little confusing.”

“[In-progress] means I haven’t submitted it…”

Copy at the top of the page is confusing users, VA’s ideas about statuses don’t match users mental models

“I would expect not to see [submitted] forms in Active, [but in complete].”

Negative sentiment while filling out exit survey

(edited)
11:10
I built an MLP for status with alternative copy, we may consider testing this in future usability studies to learn more about how users conceptualize active vs. complete.

### per engineer:

Pending

### per product manager:

Uses app to refill meds multiple times a month; finds this process tiring but “decent”

Would think to click on “Claims” to submit further evidence on a claim; had to be directed to go to forms

#### Forms Webview/ Data Entry

Understood they had likely already started a claim

Feels like it’s a lot of work to submit a whole statement on the mobile app

“Because I’m already signed into the app, I wish it would populate everything”

For the phone number entry, “Wish it automatically put the parentheses around the area code”, i.e. it feels hard to verify the number is correct with our formatting

“I forget if there was a limit/ character count in the statement”

“What if I had a long statement, it would probably be hard to enter”

Did not know how to exit the web view (from confirmation screen back to Forms), “I would’ve missed that”

Reading the overall forms list and the status, would’ve understood to go back there to see form

Did not understand the in progress status - “In progress status means I haven’t submitted it”

#### Overall

Thought the process of submitting the form was easy enough

Would’ve been annoyed if she had had to type a lot for the statement section

## P9

### per designer:

iOS/Chrome (probably?)

Has filled out Identity transitions forms on mobile, had some difficulties with verifying identity using mobile esp. with managing documents

Started using app recently, right before the study when they were asked to download the prototype

Has used video chat with the VA via one of the other apps

Expressed that they weren’t the most tech literate, had some trouble with iOS features—good context

Would expect to find Forms in Claims or “Claims (information)”

Pinched to zoom to find “continue” on GH page, didn’t need to zoom in for WebView form

Did appear to have default type size increased though and it caused some layout issue in the WebView (arrow tag w/ blue background)

Increase type sized also caused some issues with layout of native components (date picker) where the component was outside of or overlapping the WebView panel, a little funky

Prompted to hit “done” to leave WebView said, “Ahhhhhh” when panel closed, an “Ah ha!” moment

Continued missed with toast covering important UI, need to find a way to make these toasts dismiss themselves—shouldn’t be dependent on pressing “dismiss” for toast to disappear, too heavy handed as is.

No issues with entering data when prompted, maybe this where an unmoderated study would help though—can users complete these tasks without moderation?

Submit application button layout is broken based on increased type size

Per usual, scrolled down to “go back to app”, closing the WebView has been the #1 challenge for users across this study

“Does not indicate that it’s been submitted”, “….something else that I need to do” “[If it’s in progress isn’t not submitted.]”

“Done, follow up…” would be preferred status tags for submitted forms

Was also in a “busy” setting, at home with TV(?) on and people in the background, good context for simulating IRL situation

Had some more issues with navigating iOS navigation between app, good to know for interactions where we might be sending users to browsers or asking them to switch between apps

“Convoluting!” V candid feedback, also noted that P tries hard to keep up with changing technology (edited) 

### per engineer:

- Done button strikes again
  
- There is still desktop specific links that we can probably/suggest to remove(ex. Print at the confirmation page)
  
- The codespaces page keeps coming up as a painpoint - just be clear this only happens during user research when we need to open the vet-website in the webview. They wouldnt be seeing it at all if this
  goes live

### per product manager: 

#### General

Had never used the app before; has used the video system for the exercise classes

Expected see Forms in the Information/ Guidance section (?)

#### Forms Webview/ Data Entry

Found the introductory/ explanatory content “pretty clear”

Did not find it difficult to navigate or understand

#### Forms Page

Knew to view in-progress form in the Active tab

Toast menu covered Forms options and statuses; knew to scroll past it and re-select them

For Country selection, was a bit confused, but seemingly was due to wanting to see the United States option upfront due to the prompt - had no difficulty selecting it once she was told she could select and look for the option in the dropdown

Didn’t know how to get back to “Forms”

For checking back on the form, expected to look at the status to find it, would expect to see “Done” or “Follow up” - some sort of action item if not Done
Overall

Mentioned tech savviness is difficult to come by for more mature individuals, but she has been able to adapt

### per researcher:

## P10

