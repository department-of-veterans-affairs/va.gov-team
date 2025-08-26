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

Android - Chrome browser

#### Previous experience with VA forms
- Participant has previously filled out travel form
- Last time she did it, had an interruption b/c app needed mileage, she input it (same
mileage she always had) and the app changed it from what she input

#### Where would she expect to find forms?
- Typically types in the word forms because she’s not sure where to find it
- Specific wording she used was “go to claims”
- Screen where she clicked “continue” after going to forms, said it should be bigger even
though she’s wearing glasses

#### While scrolling through the initial intro screen to forms
- Likes that you can come back to the form “unless I dedicate specific time, I won’t
complete the form”
- “When you use technology like this and it tells me you need to complete more than one
form at the same time and have to switch between screens, I may miss something or
something gets lost, may get lost in transition”
- “This happened to me when I filled out a form and I had to call the office that was
dedicated to doing that form and the lady had to walk through with me to finish the form”
- Respondent burden: what does that mean? You only have 15 minutes to complete this?

#### Started form
- Chose what I want to do isn’t listed here

- This page is great because you never ask these questions like I want to request my
personal records, like your DD214, because I’ve asked multiple times how to request your
DD214 and couldn’t we just go through the VA to do this?
- Participant navigated through and name input and date of birth without commentary
- Participant asked “no dashes?” When inputting social security
- Participant said “now that’s a little....” When asked to click Done to leave the form
- Said she wouldn’t have suspected it to be in the top left hand corner
- Said she would’ve suspected it to be near the continue but did note in the top left
corner was a “good place to have it”
- No issues entering data in the fields from her device

#### Re-entering form after stepping away
- No commentary while inputting address
- No commentary while inputting email
- Asked if information is automatically saved after each piece is entered
- No commentary while entering statement

#### Questions after submission
- Once you submit, can you go back and edit the form? She didn’t see it said anywhere that
you can’t
- No issues using device with this form, just didn’t know if you hit submission, that’s the
end. Needs a notice that says “once submitted, can no longer be...”
- Didn’t find any labels confusing on the form
- Asked to navigate back to forms, asked “How do I do that?”

#### Back in app after submission
- Statement in support of a claim - in progress means it’s in the VA - not sure if I can come
back and see what the status is later

- “I would expect to come back and see the steps I normally see and see what step it’s in”
- “Sometimes it stays in one step for months or a year or two”
- “I would like to see dates, which they probably cannot do, to tell me the status, like
‘updated as of such and such date’...or something

#### How did she find this process?
- “Interesting, although I can’t see any interaction where you could call and say ‘I’m at this
step’ or ‘I’m here’ and the representative could go into your file and explain it to you
- I don’t know if this app explains enough or gives you enough explanation on what’s going
on and if there’s a number you could call
- I like the app, the forms are available right there because now you literally have to go and
search for forms, there’s no link that’s readily available
- No parts that felt especially frustrating or tiring
- Only thing that says when I first went in and it said you have to do several forms, you
could lose something while switching between screens
- Using technology sometimes is a challenge so when you’re taking us through a lot of
different steps, it may become confusing

### Per engineer:

Install on Android is definitely more difficult for users - for user testing purposes.

She had alot of good feedback on the form flow(ex. asking what pages meant, or what happens after you submit, and call assistance ).

The done button strikes again 3/3.

Also, we should check if the App Tester app was still installed and uninstall for next time. 

### Per researcher:

P4 Notes Forms Usability Study

Device: Android Mobile
Default Web Browser: Chrome
Yes has filled out forms before: The travel form, when traveling to appointments.

2:15  “Hasn’t done it in a while. Had a little interruption with doing it because it, I think it was um, it was trying to figure out the mileage and I knew the mileage that it was didn’t change but for some reason it changed it. And I don’t know why. I went to the um, pay agent, to tell them, so that they could do it and I started doing hard copies because for some reason the form just started, I don’ tknow it wasn’t, it just stopped working the way it used to work.”

It was changing the mileage for her. 

Does have the VA health and benefits app. 

Had difficulty sharing her screen from zoom.

Note: Developer contact on email received displays VA PO direct VA email address. May be a concern. 

Download app tester button produces a warning on the phone “Link may be harmful” user has to click ‘Download anyways’.

Participant was confused and thought it was funny that her phone told her “you are now a developer” when setting up the testing app.

The participant had to uninstall their VA app to install the testing app
Thought the VA testing app would be called something else like “VA tester”, it was hard to identify which app was the testing version.

The app warning message about “App Login Issue” confused the participants. 

“Codespace access development port” is tiny and difficult for users to click continue to move forward. They manually zoom in on the screen first.

Prototype launched

#### Navigation to forms

Scenario: Submit a statement in support of a claim

18:00 “Normally when I come into this, I type in the word forms, because I don’t know where to get it.”

Expect it to be called?
“Submit a claim”

User easily identified the “Go to my forms” section on the screen after scrolling down (location not apparent at first due to scrolling required, needed prompting to scroll down).

Re: Screen 1 “Alert: You can save this application in progress, and come back later to finish filling it out.”
20:36 “Ok, I like the um, that you can save this and come back. That statement there that says you can save this and come back. Normally, unless I dedicate specific time I would never complete the form.” 

#### Re: Screen 1
20:59 “The other thing I see in here, is telling you to go… Normally, when you’re using technology like this, for me, when it tells me I have to fill out, I guess a new form or a different form every time or at the same time, when trying to complete more than one form within the same thing. When I go out, like we just did, it has a little confusion, with going from one screen to another, it’s lost in transition. I may miss something or something gets lost. And it takes so much time to research it and get it. This happened to me when I filled out form, with VA, the form for um, I forgot the form number, that is what happened. I had to literally call the office who is dedicated to doing that form, and the lady had to walk through with me for us to finish the form. So what I’m trying to say is it says in here I have to use more than one form, when I click from one thing and click back, it sometimes gets lost.”
Question what does the respondent burden 15 minutes mean? It will take 15 minutes to complete this?

#### Re: Screen 2
24:04 “I’m just going to be the advocate and say ‘What I want to do isn’t listed here.’

24:20 “No it was actually really good because you’ve never asked these questions, or whatever. I want to reduce my personal records, I’ve asked numbers of time how do people, who are looking for their DD214, access their DD214 without going to the St. Louis DDT and requesting their personal records. Couldn’t we just go through VA to request your DD214.”

Typing on the phone offers predictive text options

SSN: “No dashes?”

User counted numbers entered before leaving field to ensure it was properly typed. 

#### Leaving the form:
User asked what to do. 

27:14 “Now that’s a little…”

27:30 - 28:04 “The only thing, the ‘Done’ button. I wouldn’t have expected it to be up there in the left hand corner.” - “That’s a good place to have it, but I wouldn’t have suspected it to be there. Because when you were saying hit done, I looked below.”

Would expect that to be near where the Continue was.  

Reported no issues entering data in the fields from her device. 

#### Re: Return to form

User did not dismiss the toast message.

Went to ‘Complete’ forms tab, back to ‘Active’, scrolled, saw “Continue form” and clicked that without prompting. 


#### Re: Filling out the form

Question “each time I’m entering information will it be automatically saved, without having to hit continue?”

Used swipe motion for typing their statement. 1 sentence w/ “thank you for this form”

Here you can review this page:

User did not expand the components to review the entered content, just scrolled down to move forward.

#### Submit application:
32:31 “No, once you hit submission. Are you allowed to go back?”
NO
Missing content: “It doesn’t state that in there, I didn’t see that statement.”

33:10 “I didn’t know that if you hit submission, that’s the end. You know, some kind of notice that say once submitted can no longer be…”

Scrolled through page steps and reviewed after submission

33:35 “Just the ‘Done’ button, I don’t like it up there, and that’s just my personal preference.”

Navigation reported as not challenging.

No confusing labels.

User asked how to navigate back to the app from the submission page, did not know how to do that.

Did not dismiss toast. 

#### Knows the form is submitted: 
34:10 “It tells me it is submitted and it’s telling me it’s in progress.”

#### Status meaning ‘In progress’ to the user: 
“Now that what I filled out is in review by VA, or a representative of VA. And I don’t know how long, when I can come back. I don’t know if you can come back to just look at this to see what the status is later?”

#### Expect to see check back in later:
34:52 “Come back to the way it used to be where it would say the steps, it normally would say what step you in. Like in progress, here, let’s say its in progress. It used to, when I’d go into VA in the claims. It would say it’s in step 2, or step 5. Sometimes it stays in one step for months, or a year, or two.”

“Like to see dates, which they probably cannot do to tell me the status. Like updated as of such and such date. Like it says submitted on August 13, updated on Dec. 10th, or something.”

“I don’t see my VA app anymore” 
This was a concern for the user returning after deleting the testing app.

Support for the App users needed, by phone.

#### Process overall:
42:07 “Interesting, although I don’t see any interaction where you can, you know like, speaking to your personally now, or like when we did the claims. When you went into your claims thing you could call and say I’m on this step, or I’m in here and it says this, and the representative could go into your file and explain it to you. - I’m not sure if this app explains enough, or gives you enough explanation of what is going on. And, I’m not sure if you can call the 800 number, 1000 number, and will they be able to help you as they help you now?”

#### Process from the mobile app:
43:14 “You know, I actually like it, to tell the truth.I like that the forms are available right there because as I said now, you have to literally go and search for forms. There’s no link that is really available.”

43:56 “The only thing, as I said, when you’re switching that when I first went in and it says I have to do several forms. When you switch back and forth you may lose something in transition. And it could be the user, as an individual, who could lose it because I don’t know what I’m doing. As Veterans, we as Veterans, the majority of us as Veterans, we’re older, so using technology sometimes is a challenge. So when you are taking us through a lot of different steps, it may become confusing.”

45:35 “Oh, I love doing these because the last one that I did I did for the travel form, whatever, doing that thing. The girl said really helped because that was woo wee, that was frustrating.”


## P5:

### per designer:

App optimized for Tablets would be useful and that "done" button is obviously a bit confusing to find.

iOS - Safari

#### Previous experience with VA forms
- On a computer, didn’t have any trouble with it
- Has previously tried to fill out form on phone, preferred to do it on a computer because it
was easier, mentioned fighting with keyboard

#### Where would they expect to find forms?
- Hopefully there’s something labelled forms (while scrolling through homepage)

#### While scrolling through the initial intro screen to forms
- No questions

#### Started form
- It’s not 100% clear what claim this would be for
- Said “there’s a dropdown for months” when Christine said “4/30”
- No issues entering into form fields, haven’t had any “fat finger issues”
- No parts that were hard to navigate or understand
- Didn’t see “done” in top left corner to return to app

#### Re-entering form after stepping away
- Toast notification in app was blocking view (wasn’t sticking to bottom of screen)
- Regarding phone number input - “lets see if this is going to require dashes”
- While typing statement “this is not fun on a tiny screen, iPad would’ve been a lot easier”

#### Questions after submission
- No issues really using their device
- Nothing hard to navigate or understand
- “Looks like a typical VA form”
- No confusing labels in the form

#### Back in app after submission
- Participant scrolled up and down page a few times to get back to app
- “Was that the done thing or back to the VA.gov homepage”?
- In progress means “waiting to be evaluate”
- If they returned, they would just expect to see the status

#### How did you find this process?
- Other than trying to do this on their phone, it was fine
- Usually will use iPad for an iOS app
- Nothing felt frustrating or tiring

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

iPhone
Safari

Filled out a VA form online via a computer yes. 
Experience with that form: “I didn’t have any trouble with it.”

#### Re: Used the VAHB app before
1:52 “I did once in the past, and it was too much of a hassle trying to do it on a small phone screen. I prefer doing it on a computer where I can actually type and not fight with a virtual keyboard.”

Difficulty sharing screen on zoom “I rarely use Zoom on a phone, I usually do it on a computer so I am not familiar.” - ”I’ll be honest, I really don’t know where that is at on the iOS version of zoom.” (was on the top not the bottom for this user).

“Ok, so let’s see if this will even install.”

Asked about sign in technology now with ID.me or Login.gov

“It’s such a hassle because other government sites are going strictly to Login.gov so its hard to keep them all straight.”

#### Re: Navigation

“Hopefully, there is something labeled forms.”

Zoomed in on codespace screen to read and find button.

#### Re: Screen 1

9:18 “No I, don’t really have any real questions.”

#### Re: Screen 2

9:41 “Is this to be doing a new claim or doing something existing?”

10:07 “Ok, it’s not 100% of what a new claim would be other than, I’m guessing maybe the one at the top of the screen right now?”

Would choose option ‘I have evidence to submit for an open claim’.

“Huh, ok. Well that was the next option, I don’t see anything crystal clear about a claim.”

#### Re: Filling out the form

11:41 while experiencing the error state on SSN “Nope, what didn’t it like… Required, entered. Hold on, let me just count 9 1s it would be easier. I just miscounted the number of 1s.”

Other issues?
12:18 “Nope, actually so far I haven’t had any fat finger issues so.”

Hard to navigate or understand?
No

#### Re: Leaving form
User selected “Finish my application later” link under form field on page.

User did not dismiss the toast message. Scrolled around it

#### Re: Returning to started form

User went from the ‘active’ tab to ‘complete’ tab to find the started form, then back to the ‘active’ tab. 
13:33 “I’m not seeing anything active, or calling up what I had just done. Continue, uh, continue form.”

#### Re: Toast message
13:42 “That little thing was blocking my view.”

#### Re: Form entry

When prompted to select United States in the Country, the user first checked the box for “I live on a United States military base outside of the U.S.” then caught himself, unchecked that box and navigated down to the country field to select “United States.”

User asked if the phone number field required dashes. Noted that it doesn’t say one or the other.

User made a typo when entering email. Caught himself, backed up and corrected before continuing.

#### Statement entry:
User misspelled test when entering it into this field, twice in a row due to hitting the a instead of s button on his phone (likely due to size of keypad).  
16:40 “Oh geez, this is not fun on a tiny screen by the way. iPad would have been a lot easier.”

#### Re: review page

User did not expand any content at first just previewed full length of page then went back up to the top to open the areas to review his content before continuing on.

#### Re: Submission

User scrolled through submission page back and forth a few times.

This looks like a typical VA form.

Found no labels confusing. 

#### Re: Returning back to the app
Scrolled up and down on the page several times, paused onscreen over “Go back to Va.gov homepage” link area then stated.

18:40 “Oh goodness, I don’t know where we started from for that. Was that the ‘Done’ thing or the ‘Va.gov homepage’.”

User noted they know their form was submitted from this Forms page in the app because of the text “Submitted on August 13, 2025” and status “in progress”.

Status means = 19:15 “The it’s in progress, it’s waiting to be evaluated I assume.”

Check on the submission later, expect to see the status.

This participant was unable to open the SuS survey link. They attempted to refresh, I attempted to generate a new link and share but the user only got a white screen. 

User had some difficulty navigating between apps and back to their homescreen on their phone.

#### Found the process overall
26:35 “Um, other than trying to do it on this little phone, it was um, it was just fine. Like I said, I’m not somebody who normally does everything on the phone, usually if it’s an iOS app I’ll use my iPad, or just go to my computer.”


## P6:

### per designer:

the "done" button continues to be a cunning little fox

that toast message wasn't in the way this time but still was randomly in the middle of the screen

Android - Chrome

#### Previous experience with VA forms
- Has filled out a form, it went well
- Either one of “our” forms or one of the ones the doctor had them fill out
- Easy to do
- Has the VA app, uses mainly for secure message, reordering prescriptions
- Experience has been good so far

#### Where would they expect to find forms?
- Claims

#### While scrolling through the initial intro screen to forms
- Wanted to select “What I want to do isn’t listed here”

#### Started form
- Didn’t have commentary while inputting information
- Added in dashes after typing social security number

- Clicked to re-open claim instead of “done” when asked to navigate back to the app
- No issues other than social security error message
- Finding button to return to app was hard to find/figure out

#### Re-entering form after stepping away
- No commentary while inputting address/phone number

#### Questions after submission
- Pretty straightforward, no issues
- Nothing hard to navigate or understand
- Said 30 days is “good for the military” and better than 60, 90 days

#### Back in app after submission
- In Progress means it hasn’t been received yet, still in-progress
- Would expect to be able to log in later and be able to see this, would probably move to
completed when this disappears off the active screen
- Color code tags for stage of claim process

#### How did you find this process?
- Fairly easy
- Like how they’re starting to update the app more and make a lot of needed changes;
making it simpler for veterans, especially older veterans
- Nothing that felt tiring/especially tiring

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

Android User

VA form online yes filled it out. It went good, either one of our forms or the form the doctor made.

VA has so many different form numbers, I don’t even remember which one it is. But it was fairly easy to do.

Uses the app today, yes. 

2:01 “I use it primarily for secure messages, to order my prescriptions, I think that’s all I can do is the secure messaging and to prescriptions. I could do at one point, VA letters and stuff if I need to. I never have used that yet.”

Experience with mobile app so far:  “So far so good, I haven’t had any issues with it.”

No difficulty sharing screen on zoom

Already had email to download latest build. Had to uninstall the VA app, and install the testing version.

It took several minutes for the app to install on his phone. He mentioned not having the best internet service, he had to drive outside of his work environment in get better service on his phone.

User had been able to set up the developer mode settings on his phone prior to joining the call with us live.

#### Re: Find forms location
Expect it to be under ‘Claims’
Or scrolled down and then suggested ‘Go to my forms’ as another option

#### Re: Screen 1 
Read through this silently and quickly, did not mention any thoughts or questions.

#### Re: Screen 2
What would you like to do?
Asked what the background of this task. Important to distinguish between new or existing claim. 
Read through the options multiple times, and suggested
“What I want to do isn’t listed here.”

#### Re: Form field entry
Phone seemed to have delay during entry like freezing (may be due to low connectivity)
SSN error, scrolled up and down, had to enter dashes to confirm # format as entered into the SSN. 

#### Re: Leaving form
Selected ‘Finish this application later’ then saw that it was saved.
To navigate back to the app, user selected ‘Continue form’ instead of ‘Done’, had to be guided to select ‘Done’ to leave web view and return to the app.

Part hard to navigate or understand?
16:56 “ Probably finding out where that, the done button is to go back out. That may be a little hard for some to find out, if you hadn’t told me I would have had to look for it. May be a little harder for maybe older vets, or some that are technology challenged.”

Found ‘Continue form’ on the screen without any difficulty to return to the form.

User checked the “I live on a Unites States military base outside of the U.S.” at first instead of selecting United States from Country field. Quickly caught that, removed, and corrected.

Service froze during street address, experienced delay in entry due to service

User seemed to move through fields with ease.

In the ‘Your statement’ field user entered ‘I make this statement of fact.’, had a typo but quickly caught it, backed up and corrected.

#### Review page
Did open/expand each section to review entered details. 
Submitted w/ ease.

Any issues using your device on this form?
22:10 “No, it’s pretty straightforward.”

Hard to navigate or understand?
“No”

Any labels confusing?
22:29 “No. I am sad that it says it’ll take up to 30 days for them to receive the form. I know its the military, I guess 30 days is pretty good for them instead of 60, 90 days or more.”

#### Leaving form returning to the app
User scrolled down on the page and back up, then found the ‘Done’ button this time to return to the app.

Knows the form was submitted because it says it was Submitted on date and under active.

Status ‘in progress’ means they haven’t received it, it’s still in progress.

Expect to see later:
“Just to log in and see it. Once it disappears it would probably go to the completed tab.”
24:03 “ Another thing you could do for some people, I know who are OCD, you could color code them like yellow could be where its in that holding stage or submitted stage. Green is where its completed and red where its not done. Just have three colors. I have some veterans that file their systems that way.”

Took the Sus survey, did experience delays due to service for loading/selection.

#### Uninstall/Reinstall apps
User had difficulty finding the testing apps in the Play Store to uninstall at first, had to filter to search.

User did not have or need App Tester

User did not have to set up Developer options on his phone settings either. 
User could not find systems under settings on his phone, checked in ‘About’, he was good and did not need to change the developer options.

#### Overall experience with task
Found this process overall?
30:43 “Fairly easy, I like how they are starting to update the app more and make a lot of needed changes. Make it more simple for a lot of Veterans, especially the older Veterans.”

Especially frustrating or mentally tiring?
No


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

iPhone
Safari
Just submitted the mileage reimbursement on their phone via the app.
1:25 “Super easy, it was awesome. I literally did it while I was at my appointment. I finished my appointment, it literally prompted me. It was an online check-in, which was phenomenal. It then prompted, like it literally, everything was thing step by step, I didn’t have questions, it was much faster than it was online.”

App experience so far: 
The stuff that is there is good, its not bad at all.
2:32 Wish it had: to access certain things, like making appointments. I don’t know if it’s not showing a doctor and I have to call and look for that. 
2:50 “In general, it would be like I’m able to send a message to my primary care but for example if I have dental I can’t leave them a message I have to call on the phone. It would be nice to have, to alleviate the phone, because you have to go through the whole process of like connecting through the main lines and they connect you. I just want the capability to send them a direct message. I’m not asking for someone to answer the phone, but just the ability to send a message.”

Use the app today for:
My VA claim
My health
Appointments, put in my iphone calendar but don’t write down the locate so I reference the app to see what building number or what room number. That is really helpful.
#### Downloading the testing apps
Easy to download and enter.
Login, no problems.
Got an error message to update once in and when clicked update now it took her to the full version not the test flight. 
Ignore the update.

####  Find forms in the app
Would go to ‘Benefits’
Clicked on Benefits but I directed her back tot the homepage, scrolled down, directed her to click ‘Go to my forms’

#### Re: Screen 1
Had no comment

#### Re: Screen 2
Would choose ‘I want to provide context or details about a claim.’ OR ‘I want to submit new evidence in support of an existing claim’.
Prompted user to select ‘What I want to do isn’t listed here.’

#### Re: Form entry
Misspelling of last name, caught and corrected quickly. 
SSN error: tried to add an additional number, thought she did not put enough numbers into the SSN field.

#### Re: leave form
Asked about ‘finish this application later’
Clicked that, wasn’t sure how to return to the app main page from here. 
‘Maybe click Done I don’t, I don’t know.”

12:42 “That was confusing, what type of, because of knowing which type of form. When you say statement in support of a claim, that part was confusing a little bit.”

#### Re: Completing the form
User dismissed the toast after a while to find ‘Continue form’, previously the toast blocked the entire section. She noticed it only after attempting to scroll.

User did not experience difficulty entering to form fields.

Provide your statement she entered “ The sky is blue.”

User expanded each section to review data entered before entering full name for statement of truth. 

#### Re: Submit the application
Navigating back to the app, found the Done button without prompting this time.

Labels
16:01 “No, cause it’s similar to the online. Where you do, like on my computer, its very like the same thing and I’ve done it online before which is why it was very familiar to me.”

Knows the form was submitted by going to ‘Benefits’ and then ‘Claims’, had to redirect her back to the home screen ‘Go to my forms’

Knows the form was submitted because…
16:51 “I would click on complete, but it says I don’t have any completed forms so its not complete.”

Status: 
17:05 “Well I see it’s in progress but, I guess it’s confusing to me, meaning, when it’s saying complete does that mean I completed the form or they completed seeing it. That is a little confusing to me because I just submitted it. You know what I mean.”
17:25 “Instead of saying in progress it could say submitted or something. In progress is kind of vague. It could mean that I didn’t finish it but I did finish it, so that would be a little bit of confusion for me.”

Expect to see later:
17:52 “ I would expect to see submitted, or not in progress, something to say it was submitted. Then go to ‘Complete’ part and it is showing it as completed.”

How did you find this process overall?
21:46 “Good.”

Any part that was frustrating or tiring?
“No”

22:22 “I know that, I will say that my dad, like he’s older and I’ve helped him with his stuff. I just think for older people this might be trickier, like in general this is great. This used to be such a frustrating process and I appreciate you continuing to improve this process. This is great.”

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

- For this particular style of forms where you need to put in a statement, preferred to be on desktop as often she write long statements for detail
  
- Prefilled information was something she mention it would be nice to have. It something already implemented on other forms but for this particular used case it was asked to be removed

- Phone number would have been nice to be formatted as it helps ensure all her number was correct. Helping the user read things easier is helpful to ensure they have to do a re-review of their forms.

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

### per researcher

iPhone
Default browser: Safari
Yes has filled out a VA form online before.
Most recent experience. 
1:33 “Actually I just completed VR&E form online. It was ok, it was pretty easy. It was a lot shorter than I though. Pretty standard with all the forms. Is that considered a form? I don’t even know.”

VAHB app user yes
Uses it for
Medication refills
Experience so far:
2:18 “I wish if I had a refill remaining I could click in it and start a message to my provider. Instead I have to go back to find my provider and create  message to remember which medication it is. I have a lot of medications so its hard to remember which one. I do refill meds multiple times every few months. It just gets tiring, I don’t want to do it, and then I forget. I guess its just decent for what it is.”

Sign in no problem
User scrolled down on screen once landing on the homescreen.

Expect to find forms like these
“Is it already a thing I started? If so, I would click on claims. If its a brand new one I would think I would start on claims.”

Advised to click on ‘Go to my forms’ > ‘Start statement’
Github page received is pretty tiny, had to zoom in to read.

#### Re: Screen 1
6:43 “Right now, this confuses me. That it’s for a new claim I haven’t submitted. Typically if you select to submit a statement its because you are giving information to the examiner to support your claim. Doing this is like being proactive. I don’t really know what I’m looking at. That’s just me.”

I’ve been working on an active claim I have, and I filed it on May. 

8:00 “well now I kind of get it, I’ve already started the claim. Now its telling me I’m going to need this to submit a statement. Too many pages to go to.”

If I already started that claim I would rather it tell me what that claim is here. I have two claims for disability, it would be easier to know which.

8:47 “Ok that kind of sucks. If you want to submit more than one statement for the same claim you’ll need to use a new form. That’s just me.”

9:20 “I just think that’s a lot of work because its the mobile app and if my statement has to be long I don’t want to type so much. It’s easier on my computer than it would be on the app.”

#### Re: Screen 2
User would select option ‘I want to provide context or details about a claim.’


Prompted user to select ‘What I want to do isn’t listed here.”

#### Re: Form entry
Use typed fast on her phone.
SSN: it was hard to tell how many numbers they had entered. When received the error tried to count numbers entered.

11:22 “Because i’m already signed into the app I wish that it would populate everything like it does online. Like when I filled out the VR&E it said something like we’ve prefilled all of your info. I’m assuming this statement is only coming from me, what is annoying is that I have to enter everything and its so different from the website.”

Issue was one-page I couldn’t really read after it said start my statement screen 1.

#### Re: Leaving form
Selected finish my application later link.
Needed prompted to select done from the top corner. Scrolled and couldn’t find out how to leave initially.

“To pull up form, I didn’t even read the continue form I was trying to click on statement in support. “

#### Completing form
Had a typo spelling address court, caught and corrected. 

Mistyped name while typing in address

“I don’t like that home phone number. It makes me what to read the whole thing and correct it. It makes me what to put the parentheses in there and correct it. It’s like ok did I type enough? The social automatically put the dashes after, but this one is like hold on I got to check on that again.

15:20 “Especially if its like a statement. I don’t want to get anything wrong. Or if they call me about it. I don’t want to miss it.”

In the provide your statement section user entered ‘It is very … My claim will include records from private doctors since I only got the VA health benefits in 2022 even if I was discharged in 2006.
Experienced typos and started over. 
Engaged auto correct to continue typing.
User had to correct a lot of typos.

Review page.
16:55 “Oh I can’t see it, I would expect I could click on those dots. Just to make sure again, I entered the right number because on a claim I dont’ want any reason it could be delayed. Its like ok I got to start the review process over for months because I entered the social wrong or whatever.”

It’s formatted on the review page which is cool, I don’t have to read numbers here again. 

I forget if there is a limit in the statement or character count. What if its a really really long one like to establish nexis or something can I just upload from my phone and then view it here? I like to write a lot. 

18:16 “The statements really matter, whether its like here I’m submitting new medical records or hey heres a nexis letter or you know just a file. Otherwise I have to go to my computer and submit it which defeats the mobile app process. I do everything on my phone, for the most part.”

Submission page.
19:24 “This box is a little confusing. Yeah its submitted but its started on the 14th and then it says its in progress. Because I finished it I would hope and assume that it goes all the way not in the checklist again. Since there’s a confirmation number it would have been checked in. The second sentence tells me you gotta keep checking the app or get an email that it went through which would be so inefficient.”

User did scroll down on confirmation page to review steps in what to expect.

What if I had a really long statement and I want to upload this record because I can write a statement please see attached doctors whatever or my doctor wrote this letter and I just copy and paste but I can’t upload another one. I know I selected submit a statement to give more info or context but maybe I have to go to another form or selection to upload a file. It’s better if its all in one place that has to do with providing more context or details.

This is confusing to me the green box. The first part doesn’t tell me its complete but I know its completed. 

Found some more info lower in the page after reading “what to expect”

I expect the form is fully submitted but the next step is someone reviewing it or it landing in the hands of a reviewer. 

I don’t have the best memory…

It’s pretty straight forward like the website. 

#### Re:Leaving to return to the app
User scrolled up and down the page to find and said “I don’t know what where to do that. I don’t know if i click the Go back to VA.gov homepage it’ll take me back to Safari homepage which I don’t know that I want to do.
Was prompted to select done at top.

“I would have missed that, I would have closed the app and go back in.”

Submitted: “To me this is a draft because of what it says at the top. To me, this is still being drafted because it says in progress and its in active. But the line that says submitted on August 14th actually tells me that is submitted that is the only way. I would think it would be in complete not active. 

Kind of like VA messages you close out of it but you go back to your drafts and finish it. 

To me, I didn’t finish it if it says in progress.

Expect to see later:
25:47 “I would expect that the submitted one is under complete. That this isn’t showing here. So I would not see it in Active. I would expect not to see it in Active, I’d expect for it to be in complete and the status could say it’s in progress meaning they’re working on it they have it.”

31:22 “I think if I had to type a lot in the statement that I entered I would have gotten very annoyed. Just on the app it might take long.”


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

iOS 16
Default web browser: Believes its Chrome

Has filled out a VA form online before
1:20 “Probably when they were transitioning over to the ID verification thing. You know, everything wants a different password right? Not only do I do it for myself but I also do it for my husband who is a 76 year old veteran and I had to get it done because its a requirement because he wasn’t going to do it so I had to do it. It was asking for his driver license number and social, I had to go back and forth with that. If I was gone for a certain amount of time it would lock you out and I would have to start over again and go through the whole process.”

Uses the VAHB for the first time for the purpose of downloading for this study. 

Before this test had not used this particular app, at some point maybe a year and a half during covid used the video appointment system for the VA exercise classes, used that app but it was very inconsistent. Sometimes she could get on or sometimes she couldn’t. She more or less stopped because it wasn’t reliable.

#### Re: Find forms 
“Under claims”
Titled “Claims (forms, guidance).”
Was directed to select “Go to my forms”

User utilized dark mode on their phone

#### Re: Screen 1
“Ok, it’s pretty clear.”

#### Re: Screen 2
User would select ‘I disagree with VA’s decision on my benefit or claim, and I’d like to request a decision review. In some situations, you can submit new evidence for closed claims.’

Directed her to select ‘What I want to do isn’t listed here.’

#### Re: Form entry
User had typos entering name, had to correct.
SSN entry user entered dashes. User saw the SSN error but did not attempt to correct.
To leave the form and return to the app the user would select “Finish this application later.”
Directed her to select the ‘Done’ button
No issues reported so far with form entry fields.

#### Re: Continue form
User tried to go to tab ‘Active’ despite being there already. And then scrolled on the page a few times to identify the section that said ‘Continue form’.

User was confused by country “united states” prompt, she said “I see the checkbox for I live on a United States military base outside of the U.S. but I don’t see united states elsewhere. Want me to just write it in the blank?”

Phone suggested field entry based on commonly entered information like name, address, and phone number.

Providing the statement the user typed ‘Hi there’

On review page the user did not expand the sections to review if her information was entered correctly. 

After submission the user did not report any problems, thought it was pretty clear.

Found no labels confusing.

#### Re: Navigate back to the general forms location
User scrolled down on the summary page and paused over the “go to Va.gov homepage.” but then asked where she needed to go back. Had to direct her to select ‘Done’ in the top left corner of her screen.

#### Re: Confirming form submission
18:14 “On the bottom it says forms updated successfully, it does not indicate that its been submitted but it does say that it’s in progress.”

Status in progress means to her 18:28 “It has not been submitted. IF its in progress I would assume that there is something else that I need to get in there and do.”

Expect to see later “Done, follow up in two weeks or done follow up within a specific time frame or to check the status.”

Had difficulty existing the VA app and returning to her phone. Had difficulty pulling up the apps like zoom app, did not know where it was placed on her phone or how to search with it.

Didn’t know the difference between VA apps utilized previously and the one we tested today.

Found the process overall
23:36 “It was relatively easy, I, it was a little frustrating when I couldn't go back and forth to do the things that you wanted. I can assume that others would probably, and I’m 72, I would think that others may have some difficulty and frustration and say I’m not going to do that.” 
24:23 “So I’m still involved in it, and I’ll try. And if you talk me through it I could probably figure my way through it. I think individuals who don’t have that type of networking or avenue for support, I think they would have difficulty.”

Frustrating
24:47“Only when closing browsers. I was like oh my goodness, like I say tell me how to do this. It’s probably simple things that were outside the norm for me, I never thought to do that, now I know. You know, I do learn from experiences. So, just the maneuvering aspect of it I think is the most convoluted piece for me.”


## P10

### per designer:

In the context of other sessions, the form submission process (entering information and completing/submitting the form) seems to be fairly easy, it's navigating between the app and webview that's causing friction

Adding some more detail to the form status screen seems to be part of recurring feedback

Android – Edge

#### Previous experience with VA forms
⁃ Went fine, pretty self explanatory
⁃ Has used VA app before for sending messages, information, getting lab reports,
medical reports primarily
⁃ Experience has been pretty good so far “hasn’t had a glitch for a little while”

#### Where would they expect to find forms?
⁃ “It says at the bottom, go to my forms”
⁃ *after clicking go to my forms*: “It says, start a statement”

#### While scrolling through the initial intro screen to forms
⁃ Only thing I would say is have a little button for if you have questions/to submit
questions

#### Started form
⁃ “I would click ‘I have new evidence to submit for an open claim’”
⁃ No commentary while filling in name
⁃ Wasn’t sure where to click to return to forms
⁃ Hasn’t encountered any issues using device
⁃ Nothing has been hard to navigate or understand: “has been explained pretty well”

#### Re-entering form after stepping away

⁃ “I’m going to press continue form”
⁃ No commentary while entering address
⁃ No commentary while entering phone and email
⁃ No commentary while reviewing form before submission

#### Questions after submission
⁃ No issues using phone for this “I can’t say that I’ve [had any issues]”
⁃ “Not really [hard] to navigate but the only thing I would add is a button if you’re
having problems or can’t understand, here’s somewhere to click to get more
information, that would be useful”

#### Back in app after submission
⁃ Knows the form was submitted because in the middle of the screen it says
“Submitted on August 15, 2025”
⁃ That status “In Progress” means someone is working on it, hopefully
⁃ For some people, it may be clearer if you said “may take up to 30 days, if you have an
immediate need call this number but I guess that’s a bit up and above”
⁃ If you need to check submission later: “going to this page, clicking that ‘In Progress’
tab” to see if there’s a problem or checking the exact status

#### How did you find this process?
⁃ Clicking the link and it taking some time to open was a bit frustrating (I think this was
in reference to getting started in the beginning)

### per engineer:

Would prefer to have a help button - dont think the user noticed the option at the bottom ‘Get Help’. Worth moving to the top?

Most users do not dismiss the toast immediately but was not an issue for this user as they had alot of real estate

Done button strikes again but remembered about it the second time after submitting

In-progress status - is not detailed enough wants more information

### per researcher:

Android Motorola PowerG cellphone
Edge as default web browser

Yes, has filled out a VA form online.
About experience 1:11 “Uh, I think it went fine. Its pretty much self explanatory. I was able to upload it to VA.”

Yes has used the VA mobile app.
Uses the app for… 1:38 “Sending messages, sending information. Getting lab reports, medical reports, primarily.”

About experience so far
1:58 “Ah, pretty good. I don’t think I’ve had a glitch for a little while.”

User may have low connectivity issues or low storage available as the download speed was rather slow for them to download the testing version of the app. Took 3 minutes to download the app on their phone.

User had light mode

#### Re: Finding forms
Would expect to find this ‘Go to my forms’
Found easily ‘Start a statement’

#### Re: Screen 1
Skipped over reading the content and asked if they could move forward with the action button at the bottom.
Asked the user to read through the text and let me know if they had any questions or thoughts.
13:49 “Maybe have a little button that says if you have questions or need to submit questions maybe a little link or something.”

#### Re: Screen 2
User would chose 
14:20-15:05 (took that amount of time to read options on the screen) 
15:06 “I would select I have new evidence to submit for an open claim.”


Their audio broke up a bit here.

#### Re: Form entry
Page loaded in chunks (slow loading due to connection maybe?)
User had no difficulties with typing in the fields.
User entered dashes, experienced the error and did not try to correct. To enter dashes the user has to change the displayed keyboard on their screen. 
They counted the numbers entered to ensure they typed it correctly. 

#### Re: Returning to the app
Should I back up?
Prompted them to select the done button.
Any issues? Not yet
18:40 “No, it was pretty, explained pretty well.”

Found continue form without prompting. 

#### Re: Completing the form
User did not type in dashes when entering the phone number.
In provide a statement field entered “This is a test.”

Review and submit page
User did review the information by expanding each section.
On confirmation page, the user scrolled down to the what to expect section to view the steps.

Anything hard to navigate or understand?
24:13 “Not really, the only thing I would say is that to have a little button or something that says if you’re having problems with this here is how you can get more information click here.”

To return to the app the user asked if they should click ‘Done’

#### Re: Form submission 
Knows the form was submitted because 25:10 “Right in the middle it says Submitted on August 15, 2025. And it says in progress so that is telling me it’s not completed but its in progress.”

Status means “Somebody is working on it hopefully. I guess for some people it might be a little bit clearer if you said in progress maybe it stated, may take up to 30 days if you have an immediate need call this number. I guess that’s a little up and above.”

Expect to see later:
26:05 “Being able to get back to this page, clicking on that dot, that in progress tab. Going to a screen where I might get an explain of exactly what is happening. In other words, in work forms are needed there’s a problem the exact status.”

Was able to easily close out the app and navigate to the zoom app.
Found this process overall
“Pretty good, not really any glitches.”

Frustrating or tiring.
“Initially getting into zoom, and clicked the link it was loading. That was a little bit frustrating I don’t know if you can work on that.”


## P11

### per designer:

Clarifying text for each option before starting form would be helpful.

Progress tags changing as the form goes through the submission process would be helpful as well - seems like this is recurring feedback

Agree w/ Ken - we should see if the print button works and maybe also add some clarification on where the (reference? can't remember the exact phrasing) number after submission will be located

Android - Chrome

#### Previous experience with VA forms
⁃ Has filled out VA form before
⁃ Most recent form for applying for benefits for burial, pretty easy to navigate
⁃ Did have to stop form and restart later, was able to pause and log in and continue
⁃ Has VA app on phone, primarily uses it to connect to MyHealthyVet and check
appointments; did benefit claim (travel reimbursement) for the first time; uses it
when she doesn’t have access to a laptop
⁃ So far so good, hasn’t had any glitches

#### Where would they expect to find forms?
⁃ Needed to be directed to “go to forms” button on home page

#### While scrolling through the initial intro screen to forms
⁃ “If you want to do this more than one time, you need do this for each statement is
what I understand”

#### Started form
⁃ No issues with filling out form besides social security number
⁃ No part has been hard to navigate or understand
⁃ Needed to be told to click “done” in top left corner

#### Re-entering form after stepping away

⁃ “Oh, it takes me back to where I stopped. Okay, cool”
⁃ No commentary while filling out address
⁃ No commentary while filling out phone number/email

#### Questions after submission
⁃ “If I was using this and I couldn’t print it, do I write my confirmation down or does it
email the confirmation number or do I need to login to see the confirmation
number? The only reason I’m asking is if someone didn’t have access to a printer or I
wasn’t doing this at home.”
⁃ No issues using this on her device
⁃ No part that was hard to understand except that tiny part (think this was the dev
screen between the app and the web view)
⁃ Didn’t find any labels confusing

#### Back in app after submission
⁃ Knows the form is submitted because it says “submitted on” and it gives me the
date and says it’s “in progress”
⁃ In progress means it was submitted and it’s in the process of being looked at/waiting
to be reviewed
⁃ Would hope to see some progress if she checked submission later (like in two
weeks, she’d hope to see “in review”)

#### How did you find this process?
⁃ I found it pretty easy, if I was doing this just myself logging in, it was pretty easy for
me, pretty self-explanatory
⁃ If I was someone who wasn’t tech-savvy, there might be issues where they would
need to get help
⁃ Questions were pretty simple to answer

⁃ Maybe figuring out which form to choose, some people may not know what the
options mean (such as a buddy statement) so additional information for each option
might be helpful for others

### per engineer:

Done button - its either users click on “Finish this application later”(web’s flow) or frozen until they are prompted to click the Done button

We should test if printing actually works - its probably does but lets confirm

On bigger devices that toast continue to block the card

Good feedback -> how do we capture the confirmation number? We should probably put it in the card if we can

### per engineer (2):

Initially she mentioned she would look in Claims for the ability to submit forms

She noted that the indicator of how much time she had left to complete a form was nice

She was pleasantly surprised that when coming back to the form it brought her back to the correct place

She said she’d expect to come back in after some time and see that the form was “In Review”

She asked about ways to access the confirmation if she could not print in that moment. Maybe it would be helpful to make those methods more apparent on that screen.

Awesome work everyone! That was very cool to sit in on and see.

### product manager:

#### Intro/ General

Has Mobile App downloaded, uses it for claims and Appointments

Has had glitches, used it for the first time for Travel Reimbursement, which was “interesting” (no further details)

This Veteran had a custom keyboard on their phone that allowed them to enter text in different fonts - just a note if we ever get a bug report to this effect

#### Forms Webview

Did not have any issues with data entry on the form

Hasn’t found any of it hard to navigate or understand

Needed prompting to get back to the Forms page

Upon re-entering the Forms experience - “Oh it took me back to where I was! Cool!”

“If I were using this, would it send me a copy of my confirmation number.” Also mentioned that if she weren’t home she would want a digital copy to retain the number

#### Forms Page

Knew it was submitted based on it saying “Submitted on [Date]”

“In progress” means it was submitted and waiting to be reviewed

If she were to check back later, she’d hope to see some progress, would hope to see “In Review”

#### Overall

Found the process pretty easy and self explanatory overall

Felt the questions were pretty simple

Wanted to make sure Veterans with accessibility issues/ visibility issues are able to view the text (this has been addressed by the fix for webview font resizing support)

### per researcher:

Pending

## P12

### per designer:

There needs to be a way to allow people to print from a link emailed to them now that two people have brought that up

The postal code insight was useful, not sure if that's something difficult to implement but could help with form submission

I'm not sure if I noted it in a previous session but I think at least one other person may have vocalized they weren't sure whether to press "finish later" or "continue" when trying to leave the form and complete it later

iPhone - Safari

#### Previous experience with VA forms
⁃ Has previously filled out VA form
⁃ Felt pretty easy, filled out a form for an appointment and also a form for travel
reimbursement
⁃ Both were really easy and there weren’t a lot of options, didn’t have any options
⁃ Has VA app, primarily uses it for refilling prescriptions or remind himself of an
appointment
⁃ Experience in app has been good, easy to use; don’t think there’s Face ID in the app,
has to use email/password (Christine said she’ll help him set this up at the end)

#### Where would they expect to find forms?
⁃ I’d probably expect it to be right there in claims (participant had alert at the top of
the screen so they had to scroll farther and didn’t scroll down far enough to see “go
to forms”

#### While scrolling through the initial intro screen to forms
⁃ On the page detailing what to know before filling out the form, participant said they
probably wouldn’t “read a lot of that stuff”
⁃ Suggested showing just first part with the three bullet points, then click next to see
the next section (progressive disclosure)
⁃ Said his tendency is to scroll until he sees something actionable
⁃ Would probably select “I have new evidence to submit for an open claim”
- Accidentally hit an option he didn’t mean to and wants to de-select; don’t think
he realized you have to choose a different option to de-select the current one

⁃ Changed mind, chose “What I want to do isn’t listed here”

#### Started form
⁃ No commentary while entering name and date of birth
⁃ No commentary while entering social security number
⁃ Asked if he should select “finish this application later” or “continue” to leave form
⁃ Asked if he should “close app completely and select ‘Done’
⁃ No issues navigating app so far
⁃ Nothing has been hard to understand

#### Re-entering form after stepping away
⁃ Went to Home Screen and then clicked “go to my forms”; opened in-progress form
from there
⁃ “I like it when I put in the postal code first and it populates the information for
me...that’s nice, some forms have that option”
⁃ No commentary while entering phone number/email

#### Questions after submission
⁃ No questions after submission

#### Back in app after submission
⁃ It said one thing about I could print that thing right then, some people have trouble
printing from their phone, I have that set up but some people don’t; do you send a
link through email so that people can print it? It’s something I’ve seen other apps do
that help people
⁃ I see the form was submitted because it’s in the Active section, it says submitted
today

⁃ In-progress status means I’ve done everything I needed to do and if they need more
information, they’ll come back to me and if they don’t come back to me, they’ll
make a decision
⁃ If I checked on this later, it would be interesting if it would say some sort of
“Reviewed”, “Final Decision”, some sort of gauge of where I am in the process
-“It could be three or four steps or a bar that’s moving toward complete like a

tank of gas; I would like to see that”

#### How did you find this process?
⁃ Found it pretty easy and surprising, I’m actually better with my laptop than with my
phone
⁃ No part of this that was especially frustrating or mentally tiring

### per engineer:

11/11 Done Button 

Prefers Postal code to be first for filling out the form

Can they also send an email for printing out the form - not everyone can print out from the mobile

In progress - want more context

### per researcher:

Pending
