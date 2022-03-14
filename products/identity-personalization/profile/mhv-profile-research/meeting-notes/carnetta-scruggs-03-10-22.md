# Interview with Carnetta Scruggs
3/10/2022
Attendees: Liz Lantz, Carnetta Scruggs, Samara Strauss

## MHV profile transition
1. What expectations do you have around the MHV to VA.gov profile transition?
	- Veterans will ultimately view and update their profile information on VA.gov
	- The MHV profile will not be there, or if it is, it’ll be very short. We might say “if you’re looking for this information, go to VA.gov’s profile page”.
	- **Background:** A few years ago, we had a face to face meeting in MD, Charles Worthington and a few other people from digital service to talk about the profile page merging into one (Lauren A. had just started)
		- From that meeting on, MHV business office had planned on sharing our profile page and what’s on there today, and hopefully start migrating users to VA.gov profile.
		- We’re going to not have a MHV profile page
	- **Timeline**: Around September, we don’t want to have MHV registration button anymore in MHV
		- If someone wants a MHV acct, they’ll need to go to VA.gov first, log in from there, set up their profile page, and through single sign on, they’ll come through to the health apartment, which will be the MHV portal
		- They want to start the flow change through this calendar year
	- If they don’t register in MHV, they’re not going to have the opportunity to enter a user id, contact info or email in MHV. 
		- They have to do this in VA.gov first, so when they go to MHV, its natural that will pull from what they entered on VA.gov
	- For users that already have a MHV acct but they never shared contact information, or they want to update information, then they’re going to need to go to VA.gov to update/add their contact information, and MHV will need to start pulling it from VA.gov.
	- Flow needs to be more organically as “I need to change information” > they need to go to VA.gov instead of a profile page on MHV.
	- MHV works in increments (3 months) and sprints (2 months); in the next increment we’re going to start flushing out the next phase of this transition.
	- We do need to talk about items in MHV profile page that are not in VA.gov profile page; we might end up having that the MHV profile page might be really small
- By Light contract is up in April - with the new contract, the expectation is that they’re going to have to know from the start of the new contract that this is the direction that we’re going on.

2. Ask about specific sections:

**My Profile: What is your relationship with VA?**
	- I believe that the people can self-select during the MHV registration process, and then if they are matched, any roles found in IAM will be automatically checked for them in their profile.  **True?**
		- True
		- This question is how MHV gets their money. As a medical center director, you’re rated on how many MHV patients are using their 
		- They still use this information to report to OMB “how many people are using MHV”
		- A lot of this information can be sent through IAM, so Carnetta is talking to Theresa to discuss whether or not this can go away. 
			- This would make directors nervous to take away. Push back is largely based on the fact that director’s performance measures, marketing in medical centers, funding.  This isn’t something we can’t disappear without a lot of work.
		- **But is it necessary for a Veteran to see and edit this?** Carnetta’s opinion is no. She has asked for this - she put it in a funnel to have this removed during planning and it got quickly blocked.	
	- How is that handled for people who don’t register through MHV but instead access MHV through ID.me or DS Log on (or other ways that are supported)?

**My Profile: Blood type**
	- Blood type is going away
	- Move those fields to be edited as part of of the health information card (as well as donor)

**My Profile: Welcome bar personalization**
		- This is for Veterans who want to be addressed by their military title.
		- Users love this.
		- This Welcome bar is what bonded them to their online health record, because they can personalize it

**Personal Information: In case of emergency**
		- What do you know about how Veterans or coordinators are using this?
			- This is only for the health information card.
		- Where is this data stored?
			- Only lives in MHV system of record
				- Legal system of record source where certain things only live here and we’re not allowed to share it with anyone else if the Veteran doesn’t give permission
		- **Future plan for this section**: whatever makes sense to the Veteran. 
		- **Do you plan on adding this to VA profile backend?** We haven’t talked about this yet, but we can.

**Personal Information: Health Information**
		- This used to be the biggest feature of MHV.
		- This is the only place they can ever put an address
		- They never finished it, they’re thinking of getting rid of it instead of putting money in it
		- I would bring Blood type and organ donor here.
		- She thinks the health information card is critical to have in their wallet for MHV users.

**Personal Information: My links**
		- It’s all their personal preference, as long as it wasn’t a link flagged by the VA network
		- What do you know about how Veterans or coordinators are using this?
			- Chip Harmon thought no one was using it - so he took it down around 2012. It generated so many help desk tickets!
			- Once the older Veteran had it set up, that’s how they went to places online and navigated the web.
			- Carnetta hasn’t given a thought to this at all yet; expects we’ll have a meeting together and do research. 

3. What else should we consider as we think about how the VA.gov profile may need to support MHV users?
	- Including allergy information and medication list - that’s something missing from the health information card.
	- “What are all the ways I can log in?” 
	- We should be separating “information about my online account” vs “this is information about me” 

## Post-interview follow up questions
- My VA Treating Facilities
	- I see this in both My Profile and under “Get Care”. What is the connection between these two sections?
	- Are there other places in MHV where “my treating facility” data lives?
	- Are those checkboxes automatically checked for people when a facility is found in their Veteran record?
	- Thoughts on how useful this section is for Veterans to be able to manage?
- Is MHV the only way you can access the health information card?
- I know that some of the data points in the profile are auto-populated when a match is made against IAM.  Is there anything in the DB that captures the source of the data? (updated on MHV vs updated via a match in IAM)
- I heard that there have been some issues with incorrect addresses for pharmacy in MHV, but it wasn’t super clear. 
	- Do you have any insight to that? 
	- Are there addresses in MHV that aren’t tied to MPI?
- You said there are about “1.51 active users out of the 3.6 registrants”; I received some data from the By Light team. It’s from an email that is generated each morning and shows different counts. Would like to learn about the numbers.
- Review Google Analytics URLs and see if she has any insight to why there are so many variations.

## Next steps
Get answers to above questions
