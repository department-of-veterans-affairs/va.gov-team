# MHV UX team check in 
2/25/22
Liz Lantz, Marci McGuire, Lexi Wunder, Arienne Walters

## Summary
- We first discussed the current work around MHV’s profile: 
	- seeking to eliminating duplicative fields from MHV (as compared to VA.gov’s profile)
	- They have a design for an interim solution to ease the transition for Veterans
- Discussed future state
	- Not there yet; planning on collaborating with VA.gov team
- Reviewed specific fields; some are proposed for removal and others are confirmed
- They have requested some analytics (will share) and can help us get more

## Current work
Currently working on thinking through an in-between state between now and the complete health apartment transition
- They’ve compared the fields in “My Profile” (MHV) and VA.gov’s profile to see where things align
- Goal is to minimize confusion for users to have double profile information (in both places); will do this by
	- sending people to VA.gov to update any profile information that is currently in **both** places, and removing that information from the MHV profile
	- They’ll still reflect that information in MHV (e.g. first and last name), but it won’t be editable
	- they’re trying to eliminate MHV-only fields that may not be useful to Veterans or VA staff (e.g. title, suffix, etc)
	- Matching the look and feel of VA.gov’s profile, to minimize jarring changes for the users (reflected in design concepts)
		- concepts show an alert on the homepage with an `update contact information` call to action > triggers modal with conflicting information, allowing user to choose the updated information. 
		- After saving info in the modal, they’re directed to MHV profile
		- Any info coming from MPI will be not editable and user will be deep linked to VA.gov/profile to update any info they can change there.
- They’re removing the registration page; there are outstanding questions about what will be available/editable for unmatched users 

### My Profile fields
We reviewed [this mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1645732777530/3b751dac638c58f4463823ac9476e4e25dc1240f?sender=lizlantz1528) and discussed their approach to each field. 

#### Confirmed for removal from My Profile front end
- Contact info
- Social security number

#### Proposed for removal from My Profile front end (awaiting stakeholder approval)
This data would still be available in the MHV database for the MHV admin portal.
- Title
- Suffix
- Alias (will merge with VA.gov’s profile to preferred name)
- Gender (this is their version of sex assigned at birth)
- Marital status
- Current occupation
- Welcome bar personalization
	- How would you like to be addressed?
	- Which military branches have you served?
	- They want to pull from MPI like we do to 
- Blood type 
	- want to move this to health info card
	- pull data instead of making it user defined 
- Password hint questions and answers will be moved to My Account section

#### Fields to learn more about
- What is your relationship to VA? 
	- This was the #1 issue for help desk; if the question is wrong, they can’t be matched
	- VA patient can never be unchecked once you’re matched
	- need to have further discussion on this
- My VA Treating Facilites
	- Team wants to look into this more; 
	- It’s not clear where facilities are chosen elsewhere on the site.
	- Unsure how it’s used or if it’s useful
	- Seemed in research they did that Veterans didn’t use this or understand what it is for
- Email notifications and reminders
	- Heard from Carnetta that they’re merging with VA.gov’s notifications, and they need to learn more about this
	- They’re removing this from the registration page

## Future work
The team hasn’t gotten to the point of planning post-health apartment because they expect that we’ll take that over or they’ll be working closely with us

## MHV misc info
- MHV does not currently use MPI for the most part; MHV houses all the data on their own right now
	- Name, DOB fields come from MPI if they are matched
- Federal regulations are mandating that SSN be removed from the My Profile page and Registration page by September 2022
	- SSN is used to match to military and Veteran system
	- They’re going to make it so people have to use ID.me, DS Logon or Login.gov to register (no more MHV registration).
	- If there isn’t a military record match, they’re considered “basic unmatched” and have limited access to MHV features
	- Changes coming for new users to registration
	- Trying to force people to match
- 3 different types of accounts
	- Basic unmatched
	- Basic matched (MHV found their data but they haven’t verified their ID)
	- Premium (took an additional step to verify their ID)
- MHV had100K new account registrations between Oct-Dec 2021	

## Follow-up questions
- What is the timeline for the convergence?
- I know you said you hadn’t gotten to the point of planning post-health apartment transition.  What plans do you have so far (if any) for sunsetting the MHV profile?
- You mentioned that some fields will be removed from the FE for Veterans, but that you’d still pull that data for the help desk.  It seems like that will be straightforward for existing account, but how will you anticipate getting that data from new users for the help desk if there is no longer a registration page? We were talking about martial status and current occupation when you made that comment.
- Can you share more about the work you have already doing to start to get MHV profile data into VA Profile or other backends?
- You briefly mentioned some research around the facility checkbox; what else do you know about how people use the profile? Are there any links to studies you can share?
