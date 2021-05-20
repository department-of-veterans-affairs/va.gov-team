# Meetings with Lighthouse Re: Search Logic

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



