[526 Claims for Increase MVP Mock Data Research](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/vets.gov-team/issues/10039)

Conducted 4/20/18

Participant: Paris

Moderator: Mike

Notetaker: Mark

## Dry Run Notes

> Alex responses

1. Pre-start content: says one year to fill out the form, is this actually accurate given the wonkiness of the ITF process?
  > Would be one year from current ITF. Would help if we can surface that in the event of exisiting ITF
  MVP: check with Paul about likelihood of this scenario and address this one accordingly
  Phase 2: We get a creation date and expiration date from the endpoint. We want to surface notification users regarding stored ITF and effective date to let them know they have a year from that date to finish the application. Feasibility dependent on when we get data from the endpoints. Latency unknown. Alert can be shown after 'Start' in the event there is an existing ITF. Consider adding a page re: ITF status 
2. When the user is moving soon: only option was to click "edit" on the address shown. Started editing to overwrite the original address, then saw the forwarding address checkbox (all the way at the bottom of the expander). Was confused about whether to check the box or not - what would happen to the original address? 
  > This is tricky. Just moving the box further up causes other complications; Checkbox should be next to the review card and seen in the initial 'View' not after going into 'Edit'
3. Address field order seems off: both country and state above street address
  > Country is suposed to be, state is not
4. Pre-fill USA in the dropdown of countries for all addresses (also, probably want to make it 'United States of America' since all the other countries are fully spelled out)
 > Write ticket for 3 & 4
5. Are you FDC eligible if you requested a medical records release request (vs uploading the medical records yourself)
  > My understanding is yes, but we should follow up with Paul
  > Clarify in writing (ticket) whether BE is building out 4142 functionality for pdf submission to Central Mail
6. 'We're sorry. Some information in your application is missing or not valid' - what's not valid / missing?
  > This appeared during an attempt to 'Submit' but wasn't tied to any specific data. We'll keep tracking this and trying to recreate the error to further troubleshoot. (Possibly if follow-up questions/evidence was not submitted for a condition that was selected earlier in the flow??)
  
  ## Additional Engineering Notes (have already been incorporated into tickets)
- First run-through gave a `TypeError` when clicking the privacy policy acceptance checkbox
- Can't validate the submit, so form doesn't submit
- Expanding 'Your Rated Disabilities' on `review-and-submit` page gives undefined `uiSchema` (and also `title`)
- We should probably obscure bank information (definitely an issue on the review screen, maybe in the flow as well)
- Address Type shouldn't be in the UI - it's an implementation detail
- What's going on with zip code dash: `12345-`. Was this entered this way (should fail the pattern) or was it autofilled?
- Last page, 'federal' is lower-cased. Is this a content bug?
- Validations: backslash needs escaping (\ -> \\)
  
  
