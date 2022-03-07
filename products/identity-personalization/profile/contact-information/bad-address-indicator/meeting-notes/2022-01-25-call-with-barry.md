# Bad address indicator call with Barry Willbanks & auth experience team, 1.25.22

In attendance: Samara, Marci, Adam, Tom, and Barry

### Samara's Notes
- In the beginning (idk when), VA Profile only had good data (ie. good addresses. phone numbers, and emails).
- Then for mailing address, they added bad address indicator.
  - This is largely driven by partners and is determined by returned mail.
- Bad address indicator = the street address might be valid, but the person doesn't live there anymore. It's invalid for *that person* only.
- While they had the indicator, there was no system where they could really do anything with it.
- Then, they decided add a "dirty data repository", which includes any data they know to be bad for address, phone, and email. Stuff that might be allowed to save but we know it won't work (eg. 555-555-5555 for a phone number).
- Bad address indicator is actually in the "good data" world, but they are re-thinking that even though the addresses might be real.
- They are recommending that bad address data be moved to the dirty data repository.
- This is really relevant from a backend perspective. Does not affect the FE experience.
- Barry's suggestion: if we do not get a full profile, we should prompt to fill it out.
- What turns bad address indicator off: someone updates their address.
- Auto-notify: They are thinking of auto-generating communication if contact info is no longer complete or if address is bad.
- Can we tell that people had bad address without them signing in? If so, email or proactive outreach makes sense. If not, we don't need proactive functionality and should just alert people when they log in.
- Should this project encompass more than address?
- 300K people have bad address indicators.

### Marci's Notes

- Background about where they are:
  - Initially, VA Profile had only good data
    - Address 
      - Residence
      - Correspondence
        - Bad address indicator
          - Partner-driven - based on UPS returned mail
          - Street address could be valid, but person doesn't live there anymore (invalid FOR THAT PERSON)
    - Phone
      - Home
      - Work
      - Mobile
    - Email
  - Theoretically, bad data would be sent to a repo to be cleaned up, but it never happened.
  - Data was falling into this system where they couldn't really do much with it, so they put into a Dirty Data Repo 
    - Failed validation business rules (formatting or a fake number)
    - Email missing an @
    - Cannot fulfill its intended person
    - Dirty data repo had same fields, but the bad address indicator still lived in the good address world
    - Processes in place where the good data can clear the bad data
    - They are making a recommendation to move the bad address indicator to the bad address repo because there should never be bad addresses in the good repo.
    - There are also conversations about flagging invalid phone numbers or emails
      - Number is valid but person has changed their number

- What is the process for having a bad address indicator removed?
  - right now its a newer address update that doesnt have the bad address indicator that removes it

- Are there similar flags for other info like phone number or email?
  -  In email there is a emailStatusCode and in telephone a connectionStatusCode, but I cant answer well how often they are utilized
- Do we know how many people currently have addresses flagged as invalid?
  - 340K

- At present, VA.gov good data repo would get a good residence, home phone good
- Why no correspondence address? 
  - If the residence address is 123 main st and the correspondence is the same, they would set the bad address indicator on the correspondence.   Partners can't assert that the residential address is bad.
- Our assumption is that we would check the indicator and it's bad, we would display something
- Barry's recommendation is that if we pull the VA Profile, and there is an absence of data in those fields, you could conceivably say "your profile information is incomplete…"
- Today, if the data is missing, people can missing, but that's different than prompting someone to correct an address.
- Something else worth noting - if we build something looking for the bad address indicator and they move it to the dirty data repo, that only changes where we get it.
- When will there be a decision about where the flag lives? 
- If I go in and update my address, is that enough to turn my address off? Or do they have to have mail successfully delivered to that address? 
- If it's not incumbent upon a successful mailing happening.  Barry gave example of a Veteran living with parents, moving out, then moving back in.
- Auto-notify - the premise is if we have a good correspondence address, then we find out it's bad, VA Profile would automatically generate an email or some other communication to the Veteran saying "your contact information is no longer complete, (text TBD), please go to VA.gov or call this number to review and update your contact information
- Longer-term - in their road map, part of their PI planning exercise in two weeks -- driving volume, understanding what that might mean to us.  How can we simplify the log in process, etc.

- Barry's question
  - We would want to drive them somewhere where it's easy for them to update - if the person is already on VA.gov - we would show something to encourage them to change it without having to wait for a text or an email
  - Longer term - if someone changes their info, they are notified that it was changed. 

- Next steps
  - Does the dirty data repo exist now  Yes, but the bad address flag does not exist
  - 300k who have bad address indicators, but there are probably millions not flagged
  - They do not have a service now that would allow us to pull from the dirty data repo

### Tom's Notes
- Indicates that the address is not valid for the vet (ex. returned mail); does not indicate an invalid address (an address that does not exist).
- The flag is set externally (not from within the application).
- There was some discussion around where this data should be stored (good data repo / dirty data repo).

Suggestions:
- Calling this “bad address” is confusing, especially considering that this feature may be applied to phones and emails. A more general term, such as a “contact declined” or “communication failure” may be more clear.\

Questions:
- Data returned from some of the contact-information endpoints contain a “badAddress” field. Is this the field we’re looking for?
- If a user updates an address that is flagged with a “bad indicator”, the assumption is that the flag will be removed. This doesn’t necessarily mean the new address is valid or won’t be flagged with a “bad indicator” at some point in the future. Is this assumption correct?
