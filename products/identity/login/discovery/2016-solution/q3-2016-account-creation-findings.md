## Research and Findings for Account Creation 

### Research Sessions
- Quick Questions (social logins)
- Account Creation prompt
- Full Account Creation Flow
- Claims status prod testing

### Findings (Summary)
- SSN at the end feels like a "gotcha"
  - Recommendation 1: could it be moved to be sooner?
  - Recommendation 2: expand the list of things you'll need (ID, phone) to include information you'll be prompted to provide
- Using your phone twice feels cumbersome (receive a text for ID capture, 2FA setup)
- Entering your phone number multiple times feels repetitive (receive a text for ID capture, ID verification, 2FA setup)
  - Recommendation: ask for phone number just once, then prefill it in subsequent requests (with option to change it)
- It's not clear when steps are for one time (photo of ID) and when it will need to be done every time (2FA)
- Users were unclear on 2FA setup, just thought they were being asked for their phone number again to verify identity
- The last authorization screen has two columns of a list and two buttons. It visually looks like the buttons align with the lists
- Collecting SSN and phone on the initial drivers license might would be better
- After creating an LOA 1 account, user missed the message that said to check email for 6-digit code and instead filled in his own random 6-digits
- Something to consider: a lot of users, especially those who are VA employees will have pop-up blockers. One user's blocker had a glitch and didn't show the log in window right away. 
    
### Some other documents with notes and findings

https://github.com/department-of-veterans-affairs/sunsets-team/blob/master/track-claim-status/design-documents/research/Claim-status-usability-testing-10.21.2016.md

Prototype:
https://marvelapp.com/2g4f4b4/screen/16053534

508 issue: color contrast on ID.me progress spinner does not provide enough contrast for some forms of color blindness. (Protonopia)


