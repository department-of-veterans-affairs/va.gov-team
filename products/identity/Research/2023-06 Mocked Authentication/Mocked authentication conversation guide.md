# Conversation Guide for Core Identity, Mocked Authentication, Usability Test

## Moderator logistics 5-10 minutes before each session

- Sign onto Zoom session
- Admit the session’s notetaker
- Check Settings > Meeting > In Meeting (Basic) >
   - Sound notification when someone joins or leaves: OFF
   - Who can share > All Participants
- Open standalone browser tab to prototype 
- Do Not Disturb ON so no notifications
- Make sure everyone is muted except moderator (me) and the participant
- Mute your Slack notifications.


## Start the session | 5 minutes

[If the participant doesn't show up in the first few minutes, reach out on Slack]
[Have your camera on]

- Thank you for joining this session today! I first want to make sure that we are able to hear each other.
- [WAIT FOR RESPONSE - if can’t hear, troubleshoot; otherwise…]
- Great! I’m [YOUR NAME] and I’m a researcher on the Core Identity Team
- I also have [NOTE TAKER NAME] here today, who I’ll now ask to introduce themself.
[PAUSE FOR NOTE TAKER to introduce themself]
- Would you like to give a quick introduction of yourself?
- Nice to meet you! I’ll first give some overview information about what we're doing today.
   - The subject of our research today is the Mocked Authentication product.
   - We want to hear your honest opinions. We will not be offended by any opinions you express, and I welcome your candid feedback.
   - This entire session will take no more than 30 minutes. 
   - I do want you to be as comfortable as possible, so if for any reason and at any time you want to pause or stop the session, please let me know.
   - Let’s have each of our note takers and observers quickly go around and introduce themselves with cameras on, please. 
      - [PAUSE for observers to introduce themselves]
      - Ok and now I’ll ask our notetakers and observers to mute themselves and turn off their cameras for the remainder of the sessions to save on distractions and to save Zoom bandwidth.
   - I would like to get your permission to record this session. This helps us if we need to look back for clarifications like to make sure we noted your opinions correctly. We delete recordings after we finish analysis, which usually takes a couple weeks. Also we sometimes use written quotes to help others understand why we want to make certain changes, but your name will not be directly linked to any of your comments.
      - Knowing that, are you comfortable if I record my screen and our audio as we talk today?
      - [IF YES - RECORD TO CLOUD] 
      - Now that we are recording, I am going to confirm once more, are you ok if I record my screen and the audio as we talk today?
      - [WAIT FOR RESPONSE]


## Questions: Mock Auth for devs | 5 minutes

- I’d like to start with a few questions to get to know how you work and how mocked authentication might fit into your workflow.
- What products or features have you recently worked on?
   - [REFER BACK TO THIS LATER]
- Do you generally work in a local environment or in the dev.va.gov?
- When you are working on code for a [PRODUCT] and want to check that what you just did is working correctly, what do you do?
   - e.g. Where do you go? What step do you take?
- How well does that solution fit into your workflow?
   - What pain points do you have with that?
   - What works well?
- If you could create your own process for being able to “fake sign in” to the VA, what are some things that would be important for you to include?
- Thinking about tools that you generally use when coding or working, what is your normal way to get to them?
   - [PROMT] like do you save bookmarks? Keep tabs open?
- How do you learn about tools that you can use for your work at the VA?
   - [PROMT] Slack reminders? Platform website? ToTs announcements?


## Task 1: Product Usability Walk through | 10 minutes

- Now we’d like to take you to the Mocked Authentication page
   - [IF PARTICIPANT would normally code in local then “image you were checking your code on the dev stack…”]
- Is this the first time you are seeing this?
- If you found a link on your own and came here, is it clear what you would do next?
   - Would you generally jump right in on a tool like this, or do you generally prefer to read documentation first?
   - What information would be helpful to know before you get started here?
- Is there anything here that seems confusing, like it’s not needed, or like it’s missing?
- Go ahead and take the next action you would take on this page
   - [IF GO TO GH info guide, allow time to read]
   - [GUIDE THEM to choose CSP and select “Mock Authentication” button if needed]
   - Would you normally select [the CSP they chose]
      - Is there a case when you would select a different one?
   - Was it clear what button you’d select to move on?
      - It was called Mock Authentication - is that label clear?
         - [ENCOURAGE to push back button if visual is needed]
      - Would it make more sense if it said “select provider”?
- Ok now we’re on this next page…
   - [GO FORWARD to it if still on prev page]
- Is it clear what you need to do on this page?
- How would you decide which mock user profile to select?
- Can you adequately choose the mock user you need from this page?
- How are you deciding which mock user to select? 
   - What about if you need one that you don’t normally use?
- Is there anything on this page that seems confusing, like it’s not needed, or like it’s missing?
   - [IF NEEDED - specifically call out the presentation of the mock user info in code]
- Now that you are in a mock signed-in state, is there anything else you’d need from an identity standpoint here to continue working on and checking your code?


## Task 2: Adding new mock user | 10 minutes

- Do you have a mock user that is your go-to?
- Have you ever felt the need to or wished you could make a new mocked user for certain traits?
- If you wanted to set up a new mock user, how might you start that process?
- [OFFER TIME for them to read through documentation]
- Would you want to try creating a new mock user now?
   - [IF SO] Go ahead and go through, please speak out loud any thoughts you have as you do.


## Thank-You and Closing | 2 minutes

- That brings us to the end of what we wanted to look at today. Do you have any other thoughts or comments for our team about this product?
- Any questions for us?
- We really appreciate you taking the time to share your thoughts with us today. Thank you, and enjoy the rest of your day!


