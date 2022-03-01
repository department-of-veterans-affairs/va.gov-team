# Address Change Mockup Review

## Attendees
- Christina Gednalske (host)
- Samara Strauss
- Marci McGuire
- Adam Whitlock
- Tom Harrison

## Notes
- Hint text
  - Danielle is reviewing the hint text
  - Christina had a question about whether we decided to add hint text to the Home address also.  We agreed that for consistency that probably would make sense
  - The text for the checkbox has changed to make it easier to understand -- it now says, "Use my mailing address for my home address."  Samara agrees this is an improvement over what was probably the original Profile text that Danielle probably has never reviewed
- Inline alert changes
  - There are two success alerts if both address changes go through
  - If they do not, there will still be inline alerts, and one will be an error alert, and one will be a success alert. 
  - Christina originally thought Liz had suggested having it all in the modal, but it's actually in the page.
- Modal changes
  - The Yes and No buttons don't seem to make sense in the context of the error message in the  modal.  
  - Can we sklp the modal step?  Did Christina discuss that with Josh & Angela and that was the outcome? 
    - Christina will check with Liz; the modal didn't change at all.
    - Samara understands the rationale, but do we actually need this step? 
    - Maybe just taking them back to the page and showing them the confirmation or error
    - We did test with the modal and it tested very well as far as them understanding, but there was confusion with the text that was there originally
    - We need to finesse the other modal; it seems confusing.
    - They've already seen the confirmation, and we ask if they want to save this as their mailing address to match, but it needs to be clear that they need to retry.
    - Instead of trying to follow what would normally happen on the page, maybe we have another modal that directly says we've had trouble updating.  Do we need to keep all that information? 
    - The error state is where it starts to get confusing.
    - Samara wonders if we do need additional info, or we drop them on the page.  Christina can probably figure out a way to make it more clear when the error message occurs.
    - What's tough about this is that the error that appears is probably if you're trying to save the mailing address.  
    - Samara believes that the copy already exists for the error and there is no retry.  Adam confirmed there is nothing in the code for a retry.
    - The error message should just address the final action taken tried to update, it failed) and leave off all the other information
    - Can we specify mailing address?  Adam thinks we can do that.
    - We may be able to use more specific messaging on the error, but Samara doesn't want to say for sure right now
    - Christina was wondering if there is a case where we show more specific errors.  Samara thinks Liz is probably a good person to check with since she did an audit of error messages pretty recently.
  - We are not going to implement the recent changes with address confirmation.  Christina has noted on the mockups that we are not going to include this now.
  - The goal with the modal is to slow people down so they don't forget to update their mailing address, and we're definitely doing that, which is good news.
  - A couple of questions
    - If you save your home address and it's already the same, we won't show these prompts? (it's smart enough to know) - Adam confirmed that there's a diff that happens
    - What happens if they add a home address and there is no mailing address on file? We do need to account for that in the design.  (E.g., if the mailing address is null, it takes out the part that says "we have this mailing address on file for you" or say "we don't have a mailing address on file for you".
    - If there is no mailing address on file, will they just default to the home address?  That's a good question.  We need to account for it just in case.
  - Over time, we could probably improve on this and use notifications to let people know if someone doesn't have a mailing address.  That's probably an outlier case.
  - Ticket in the backlog for the edge case so Adam can swap out the modal content.
