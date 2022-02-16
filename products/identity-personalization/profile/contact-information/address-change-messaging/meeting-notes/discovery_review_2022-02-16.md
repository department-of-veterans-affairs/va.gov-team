# Discovery Review

## Attendees
- Christina Gednalske (host)
- Samara Strauss
- Adam Whitlock
- Tom Harrison
- Marci McGuire

## Notes
- Mural: https://app.mural.co/t/vsa8243/m/vsa8243/1644509317557/f8d97fbd5e4ec6c7f8c135f1fa29f077fe05e603?sender=ubc7e3ad210f2b3eb28e46170
- Hint text will help users distinguish between home and mailing address
- We had concerns about the number of inline alerts.  Christina talked with Liz, and the recommendation would be to continue to do the inline alerts like they are.  
- There was also a question about what happens if the mailing address cannot update; sentiment is that the modal should act the same as if you were on a regular page.
- Samara asked for clarification on the use case - it's if they update the home address, and for some reason, the mailing address doesn't save, it would behave the same as it does now when it can't save.  After it attempts to save 3x, the only option it presents will be to close the modal.
- Adam - error in the modal makes sense to him.  There's a mental model of a transaction being conducted on the front end.  He'll just have to dig into that further and see if he can "massage" the success alerts to show two of them.
- There was a question about why there is only a checkbox in the home address to say that it's the same as the mailing address (i.e., why isn't there the same type of checkbox in the Mailing address block?)  Reason - home address is optional, so it makes sense to just leave it as-is.
- Checkbox confirmations - when the "yes" checkbox is checked
- Long-term - someone asked if could we remove the USPS address validation if we did it on the fly (async) while someone inputs an address into the fields.  Christina doesn't remember who asked the question about removing the address validation, but Adam believes that accessibility mentioned it.
- Samara - What were the accessibility questions related to address validation?
  - Christina spoke with Angela and her concern was to ensure we were emphasizing the right place and having it read out
  - Angela's bigger annoyance was the two alerts.  It wasn't a show-stopper (but it's also a necessary evil so the user knows it was updated successfully)
- Military addresses - Liz had done a new design that hasn't been implemented
- There is a scenario where someone could have a military address for their mailing address, but does NOT have the "I live on a United States military base
- We don't need to change the FAQ content for contact information.

## Decisions
- ADD TO THIS PROJECT - Hint text to help users distinguish between home & mailing address
- Address validation changes are out of scope for this
- Edit on a separate page is out of scope for this
- We won't update the modal design at this time
- We won't tackle the military address senario at this time
- We don't need to change the FAQ content for contact information.

## Tickets to create
- ADD TO THIS PROJECT 
  - Hint text to help users distinguish between home & mailing address
    - Design task
    - Content task
    - FE task

- Backlog
  - Edit on a separate page - already in backlog - [#31876](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30373)
  - Modal design - already in backlog - [#31400](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31400)
  - [Discovery] Military address unchecked/checked scenario


