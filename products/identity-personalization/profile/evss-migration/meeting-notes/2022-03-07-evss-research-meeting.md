# Meeting with EVSS Researcher

## Attendees
- Dana Harris (host)
- Nichole Harris 
- Kelly Lein
- Premal Shah
- Sones Lee
- Allexe Law-Flood
- Samara Strauss
- Tom Harrison
- Lihan Li
- Marci McGuire

## Notes
- Meeting is recorded
- Dana is a researcher on the Lighthouse UX team. 
- EVSS is being migrated to Lighthouse
- Want to make sure the endpoints are being migrated in a thoughtful and useful way
- They want to understand how they are being used, what works, what doesn't, improvements that could be made
- Tom sent over the endpoints prior to the meeting
- Samara gave a quick overview of what Authenticated Profile is.
	- Two halves of Authenticated Experience - one half does the user dashboard
	- Profile is the other half - what the VA already knows about you
		- Address
		- Direct Deposit
		- Etc.

- How are we evaluating how Profile is successful?
	- For Direct Deposit - we look at how often we successful retrieve info, update info, how often those events fail

- What does the Get method do?
	- It retrieves the direct deposit information for the user?
		- View existing Disability, Compensation and Pension info (EDU comes from a different service - BGS)
		- In theory, everyone should have one direct deposit, but it's unclear if there is organizational interest in consolidating - it would be a massive org lift.
		- Feasibility aside, would there be an advantage to unifying? 
			- Yes, it would help with some technical challenges
		- View that they are eligible to set up direct deposit for Disability, Compensation and Pension

- What does the Post method do?
	- It sends back updated direct deposit information that has been changed by the user.
		- Add new
		- Edit
		- Save

- Are there any users who can get payments but are not ineligible for DD?
	- Highly unlikely.  There are probably users who have never opted in.
	- Someone may opt in for DD, then later opt out for paper checks, but very uncommon
	
- Existing Challenges
	- Some Veterans also would like to put some funds into different accounts, but that is currently not feasible
	- DSLogon and MyHealteVet fraud compromises caused it to be locked down to users with ID.Me, which a lot of users were extremely upset about.  
	- There used to be an issue where some people couldn't update their banking info online; they had to call.  There were a bunch of routing numbers that were part of a fraud ring, so legit routing numbers got flagged.
	- Direct deposit has always had a higher error rate compared to other areas
	- Some people are getting stuck in a loop when trying to access their direct deposit info - unclear if we are incorrectly detecting whether they are eligible.
	- Determining the underlying root cause has been a challenge

- Can a Veteran sign up for Direct Deposit proactively?
	- No, they have to be actually receiving payments
	- Setting up direct deposit is part of the process once they've been notified they will be receiving funds

- How would we go about finding out what is behind the errors?
	- Samara put in a request this morning with Analytics to try to figure out what "other" errors are, how they correlate to back-end error codes

- Any thoughts from the engineers on the call - high level what it's like workign with these services?
	- Lihan - there haven't be a lot of errors lately.  There used to be more that were related to fraud. We keep a log in Sentry and could go through them and tell Dana in more detail
	- Do we know why the error is happening more often?  Samara believes that organizationally, the fraud is being handled at a different level.
	- There is a fraud team dedicated, so they no longer need the gate for DSLogon and MHV users
	- There have been times where there are fewer errors in Sentry than in GA, and sometimes it's because they different ways they are being recorded in each tool
	- This is the most difficult feature that Samara manages, and the one that people are most unhappy about.
	- Lihan looked and saw 1000 timeout errors in the last 30 days - we try to call the EVSS API and it doesn't give a response within the timeout period

- Any other challenges?
	- Not recently since the fraud has been addressed.

- Other thoughts?
	- When it works, it's great
	- There are thousands of people per week successfully accessing and updating their information
	- They've had a good experience with the EVSS team
	- Changing hands - is there anything that they can note for how they handle the relationship?  
		- Being responsive, helpful, and knowing the ins and outs of the system; very knowledgeable
		- Since we're not the owner of any of our back-ends, we're kind of at the mercy of the owners

- Any data that we are NOT using that's being returned?
	- We display Bank Name and not the routing number
	- We also do not display the account number
	- Address - when we all the payment information, it returns an address (payment address) - we don't use that.

- Are we the only team using this direct deposit info?
	- We don't know, but Samara wants to say no, but not 100% sure
	- Lihan thinks there are other teams who use direct deposit to pre-fill forms - that might be a good question for Matt Self (PO for other benefits applications)

- Any hopes and dreams as we rebuild this service?
	- Improved uptime
	- Making sure Lighthouse keeps good logs so they can help us troubleshoot errors
	- Proactively detecting errors on the backend and being aware before the FE team or users encounters them
	- Magic wand would be one direct deposit service to consolidate benefits payments

- Are there any other direct deposit services apart from this one and BGS?  
	- Unknown; there is a Travel Reimbursement, but unsure if that is a different service from these.  Would not be surprising if there is something else. 

- Has there been any discussion of integrating with PayPal or other payment services?
	- Samara has not heard about anything like that

- Is there a hard date for when EVSS is going to be cut off? 
	- They will work with VA.gov to make sure everything is migrated before its turned off
	- Original deadline was end of August - VERY ambitious!!!

## Action Items
- They are doing intake right now
- Timing for rebuilding/migrating is TBD
- They will reach out when it's time to make sure the transition happens smoothly
- If we have any other thoughts, contact Dana Harris


