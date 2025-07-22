
# Conversation Guide: API Key Management Prototype
## Session Overview
**Goal:** Evaluate usability of the self-service API key flow, with focus on environment selection, key naming (suffix), and inactive key visibility.
**Format:** Remote moderated usability research (30 min)
**Prototype:** Figma (clickable)
**Teams included in research:**
1.  VEText
2.  iMed (good candidate for a newer team)
3.  BVA/Case Flow (Case Flow is the technical team)
4.  VETs API
5.  VA Notify
6.  VBA Education
7.  Lighthouse (note: there are two groups under this umbrella)
8.  Quick Submit

## Introduction (2–3 min)
### Script:

> Hi! Thanks for making time to chat with us today. I’m Elissa, and I also have a couple of teammates on the line who are here to observe and take notes.
> 
> Since you already work with VA Notify, I won’t go into all the background—but we’re testing a new self-service feature today that would allow service teams to manage their own API keys directly in the portal.
> 
> Before we start, I'd like to record today’s session so we can capture your experience accurately. Is that okay with you?
> 
> Just a quick reminder: we’re not testing you, we’re testing the design. If something’s confusing or doesn’t work the way you expect, that’s actually really helpful for us to hear.
> 
> We really appreciate your honest feedback, positive or negative, because they will help us improve the experience.
> 
> Any questions before we dive in?
> 

## Warm-Up Questions
_Use these to understand their baseline familiarity:_

> - How familiar are you with working in VA Notify?
> - How familiar are you with API keys or managing them at VA? 
> - Have you ever requested or rotated an API key before?
> - How often do you work with keys? Regularly or just occasionally? 
> - If you had to rotate your API keys tomorrow, where would you first look for help? 
> - What kind of help or resources would you want available when it’s time to rotate your API keys? 
> - What format would you expect the instructions to be in (e.g. step-by-step instructions, video, quick summary for reference?)
> - In what way(s) would you expect to be made aware that your API keys need to be rotated? 
> - Would you expect to see any alerts in the portal itself, or just email? 
> - If you missed the email, how else would you expect to find out?


## Scenario/Prompt (Intro to Task 1):

> Let’s say you’ve received an alert that one of your API keys is about to expire. You need to rotate it. That means you’ll need to create a new key, update your integration, and then disable the old key once everything’s working.


## Task 1: Generate a New API Key
### Prompt:

> Walk me through how you would generate a new key for this purpose.


**Watch for:**
- Environment selection
- Naming behavior (suffix)
- Comprehension of one-time visibility
- Use of review screen

**Follow-ups:**
- What do you expect after choosing this environment?
- The environment appears as part of the name (suffix), does that make sense to you?
- Would this change how you name your keys?
- Do you have any internal naming conventions that this suffix approach might conflict with?
- Do you follow a standard naming convention for API keys?
- Would you like suggestions or required patterns (e.g. include environment name)?
- How do you avoid duplicate or confusing key names?
- Is it obvious that this is your only chance to copy the key?

## Task 2: Revoke an Existing Key
### Prompt:

> We're going to pretend that your new key is in place, everything’s been tested, and you’re ready to revoke the old one. How would you go about doing that?

**Watch for:**
- Confidence in taking this action
- Understanding of impact

**Follow-ups:**
- What do you expect will happen after revoking?
- Would you feel confident doing this in production?

## Task 3: View Inactive Keys
### Prompt:

> Now that you've revoked the old key, take a look at this section. Can you talk me though anything that might stand out to you?


**Watch for:**
- Comprehension of “most recent per environment” logic
- Expectations around history/audit

**Follow-ups:**
 - Does this layout make sense to you?
 - Would you expect to see more than one revoked key?
 - Is anything missing?

**Visibility vs. Access:**
 - If you landed on this page but saw no option to generate or revoke
   keys, what would you think?
 - Would you prefer to see a message explaining that you lack
   permissions?
 - Would it be more helpful to not see this page at all if you can’t
   take action?

## Wrap-Up Questions

> - Was anything unclear or confusing in this process?
> - Is there anything you would improve or do differently?
> - Does this experience meet your expectations for something as sensitive as API key management?
> - Does everything we showed today make sense? Any questions or final thoughts?
> - If you had a magic wand and could change _anything_ about this tool, what would you change?
>
>
> Thank you so much for your time today. We really appreciate it!

