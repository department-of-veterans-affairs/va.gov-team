# Meetings with Lighthouse Re: Search Logic

## 2021-06-08 Meeting with Lighthouse Re: Popularity Logic

### Attendees
- Marci McGuire, Decision Tools PM
- John Hashimoto, Decision Tools PO
- Zach Morel, FE Engineer
- Mark Viterna, Lighthouse Team Engineer
- Nichole Harris, Lighthouse PM

### Notes
- Mark will diagram out how the CMS data relates to the API and the Staging environment (which environments are talking to which).
- Most relevant now  uses the popularity data to enhance the relevance results (weights/curates)
- It's fine the way it is, but down the road, is there value in highlighting that the thing at the top is a top recommendation?
- 1990 Per Mark - doesn't show 
- Mark explained what that new "tags" column provides us the ability to add keywords ('gi bill', 'coe' -- checks that field first before it goes to title).
- Nichole has a ticket to create a Slack alert when the VA changes the name of a PDF
- They would like their sandbox environment to be very production-like that would let us test with their changes. Mark and Zach have since determined that it's a non-issue.
- Test scripts - Marci will complete today (6/8/2021)
- How are other searches being done on VA.gov?  Sam is using a library in his search.
- Does Zach have any way to detect that the results being returned did not exactly match what the user entered?  Mark didn't see that feature out of the box, but it's open source, so they might be able do add that functionality.
- Add to backlog to possibly add a feature that says "no match for X, did you mean Y?"
- Add to backlog to possibly enhance so that results can be sorted by popularity.

## 2021-04-13 Meeting with Lighthouse Re: Weighting Logic

### Attendees
- Marci McGuire, Decision Tools PM
- John Hashimoto, Decision Tools PO
- Mark Viterna, Lighthouse Team Engineer
- Nichole Harris, Lighthouse PM

### Notes
- Mark showed us how VA.gov search works (spell check is baked in)
- We want to make sure we're aligned with  other tools. 
- John clarified that global search is relying on Search.gov for the spell check
- Mark clarified that if the VA wants the same rules applied, that would need to be done on the front end.
- Nichole asked that Mark show what kind of spell check is now included. 
- If there's a strict rule around using root words, do we need to keep this out and put it on the front end? 
- John - they key here is consistency
- John - seems that we understand what R&S is doing and talk to Search
- I mentioned that Mark is using a PostGres library that is vetted and had a lot of developers contribute to it
- John asked what exactly is going with Search.gov and what Megan and Denise are doing with Search.gov, and what Brian's team is doing with Search.gov.  He asked me to put together a comparison of the fault tolerences.  We'll ask each team for information about the rules.
- This research will be for future improvements, but we are OK with using the PostGres library.
- Do we want to hold on ranking by popularity until the research is done? 
- Ideally they would work the same, but we are not going to do away with a better experience on Find a VA form because another product can't do it.
- Nichole - with the abbreviations, they may also have opportunities for abbreviations.  
- Another PM (Kathy) suggested that we would display "we didn't find X but we found Y and here are the results".  
- I mentioned that we could consider it, but it would require the API to return the corrected term
- Rundown
   - 21Pxxx gets transformed into 21P-xxx
   - 22P also happens (Zach's doesn't do that)
   - Also extends it so that VA Form 21674 returns 21-674
   - Anything that that two digits will have a dash after them
   - Misspelling
        - Buriall worked, but bureal didn't
    - Root words (plurals, etc)
        - Buried, bury, burying
    - Sorting English before Spanish
    - Ignoring "VA" and "form"

### Action items (Marci)
- Determine what our target refinement rate is and let Nichole know
- Determine what the delta is between Find a VA Form, Global Search & Resources & Support

## 2021-04-13 Meeting with Lighthouse Re: Weighting Logic

### Attendees
- Mark Viterna, Lighthouse Team Engineer
- Marci McGuire, Decision Tools PM
- Zach Morel, Decision Tools FE Engineer

### Notes
- Coding should start next sprint
- Testing the following sprint
- Deploy around first week of May
- Internal Staging test to determine if we are good with rolling out, or if we want Lighthouse team to test with another Forms API user that has a much smaller audience
- Zach could put a feature flag to use a different endpoint on Staging or we could test with a new parameter.
- We may reach out to forms SME at the VA to also test
- We will include Mark in our standups starting Tue as long as Nichole is good with that.



