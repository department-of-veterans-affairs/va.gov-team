# Observational Study Synthesis
- Author: Alexander Hoover (Login.gov)
- Date: December 20, 2022
- Session moderators: Carrie McGrath - QQ2C Shqiponja Hoxha Ocumarez - QQ2-C Princess Ojiaku - QUEACB Annie Hirshman - QQ2C Kelli-Anne Ho - QQ2-CAlexander Hoover
- Session notetakers: Thomas Emerick - QQ2-C Shqiponja Hoxha Ocumarez - QQ2-C Alexander Hoover Carrie McGrath - QQ2C Chanan Delivuk - QQ2C Annie Hirshman - QQ2C Kelli-Anne Ho - QQ2-C Travis Newby Leanna Miller Elizabeth Manning
- Special thanks to: John Rahaghi (VA), Amanda Porter (VA), Crystal Dugan (Perigean), Josh Kim (Ad Hoc via VA), Angela Fowler (Ad Hoc via VA), David Kennedy (Ad Hoc via VA), Alyssa Gallion (VA), Andrea Hewitt(Oddball via VA), Shane Strassberg (VA), Rutvika Gupta - QQ2-C, Benjamin Chait - QQ2D, Jessica Dembe - QD1D-C

## Table of Contents
- Summary
- About the study
   - The goal
   - The context
   - The sessions
   - Who we talked to
- Some numbers
   - Results of the sessions
      - Table 1. Count and rates of each possible session result
   - Reasons for Abandoned, Blocked, Rate Limited, or Success with Bumps
      - Table 2. Analysis of each participant that had an issue.
   - Multi-factor authentication
      - Table 3. Breakdown of participant choices for multi-factor authentication.
- Product-level issues
   - Issues
      - Photo upload was difficult for many
         - Difficulty with auto-capture
         - Difficulty with manual upload
      - Login.gov is not usable for screenreader participants
         - Table 4. Result and session description of each screenreader participant.
      - No fallback options to verify personal details or phone number
      - Difficulty with a Puerto Rican address
      - No state-issued photo ID
      - Possible next steps
         - Explore better auto-capture solutions
         - Remote identity proofing with supervision
         - Human in the loop
         - Define personas for Login.gov users
- Issues requiring some UX love
   - Authentication issues
      - Multi-Factor Authentication
      - Confusion on how to fix a so-so password
      - Finding the “create account” button
   - Identity verification issues
      - Unable to get out of desktop upload page
      - Not clear what to expect with the desktop-to-phone handoff
      - Confusion on whether to include “#” in SMS code
      - Personal keys
      - Auto-capture took blurry photos
      - Manually uploaded photo ID didn’t meet requirements	
      - InstantVerify & Puerto Rico
- Other interesting observations	
   - Preference for calling customer support
   - Address on ID not actual address
- Final thoughts
- Appendices
   - Research assets
   - Related research

## Summary
- A little under half (10 of 21 sessions ) of the participants successfully created an account and proved their identity. 
   - Of the other 11 participants, 
      - 9 abandoned, were rate limited, or were blocked, and 
      - 2 encountered staging bugs or ran out of time. 
      - The biggest issues frustrating or blocking people from completing the process were related to photo ID upload.
- 14 of 21 participants chose one MFA option. 
   - SMS and Face/Touch were basically the only options people picked, with backup codes being a distant third (and never the first option). 
   - Most participants selected one MFA for convenience. 
   - Some participants seemed to believe having more MFA options was about improving security and felt their one MFA was secure enough.
- Login.gov is not usable for screenreader participants. 
   - 3 of the 5 screenreader participants were unsuccessful for reasons related to their being dependent on a screenreader. 
   - 2 of those participants were blocked at the photo ID upload step. 
   - One participant was blocked earlier because they had trouble navigating the sign-in page.
- Users do not have fallback options to verify personal details or phone number.
   - 3 of 21 participants said they did not know how to proceed when rate limited or blocked by a failure to verify something.
- Difficulty with a Puerto Rican address
   - The one participant with a PR address was rate limited after submitting their address for verification too many times.
   - We can see this issue with Puerto Rico in the data. The InstantVerify success rate for Puerto Rico is 12.46%. The InstantVerify rate for all Login.gov users is 82.03%.
- No state-issued photo ID
   - 2 participants did not have a state-issued ID. One had an NYC municipal ID. The other had a DoD-issued ID. Both abandoned at photo ID upload.

## About the study
### The Goal
Get a baseline understanding of how users experience Login.gov’s unsupervised proofing flow, including challenges they face and how they seek to overcome them.

### The context
Before this study, the only observational study of users’ experience with Login.gov focused on users with low/no vision. Login.gov researchers have proposed studies of a broader user base in the past. This team was able to make this study happen by partnering with VA, who provided participant recruitment and compensation. 

### The sessions
The study consisted of 21 remote, hour-long sessions between 10/14 and 12/5/2022. In addition to the participant, a facilitator, and a notetaker, we had some observers from Login.gov and VA join. Accessibility specialists from VA joined as needed.

### Who we talked to
We talked to 21 participants. 3 came from a USDS-recruited trial run. The remaining 18 were veterans recruited through the VA. Our participants included:
- 5 who were regular users of assistive technology, like screenreaders.
- Even split of 8 men and 8 women. 2 participants identified as non-binary.
- 7 participants reported income less than 40k

##Some numbers
### Results of the sessions
A little under half (10 of 21 sessions) of the participants successfully created an account and proved their identity. We had two sessions that ended early because of a staging.login.gov bug or we ran out of time. The remaining 9 sessions (of 21) were Rate Limited, Blocked, or Abandoned.

>>> Table

### Reasons for Abandoned, Blocked, Rate Limited, or Success with Bumps
Most participants that had an issue with Login.gov had an issue at the “Upload state photo ID” step. Most participants were able to succeed despite these issues. Some were blocked or abandoned. Other participants abandoned or were blocked for reasons related to Login.gov’s accessibility or gaps in data.

>>> Table

### Multi-factor authentication
14 of 21 participants chose one MFA option. SMS and Face/Touch were basically the only options people picked, with backup codes being a distant third (and never the first option). Nobody had a security key. None of the participants had a PIV. People either didn’t know what an authenticator app was or they knew what it was but didn’t want another app on their phone.

>>> Table

## Product-level issues
During the study, the team saw a variety of participant experiences. Some participants sailed through without issue. Others abandoned out of frustration or were blocked. For the issues that blocked or caused abandonment, Login.gov will need more than UI/content refinements. These issues include:
- Photo upload was difficult for many
- Login.gov is not usable for screenreader participants
- No fallback options to verify personal details or phone number
- Difficulty with a Puerto Rico address
- No state-issued photo ID
Addressing these issues will require rethinking Login’s flow, coming up with new interactions, and new procurements. 
