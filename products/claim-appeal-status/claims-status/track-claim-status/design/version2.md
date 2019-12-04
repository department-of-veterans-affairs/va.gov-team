# Major Things

1. Expand to all claim types
2. Notifications
3. Custom headers and descriptions



# Things we should investigate/improve for post-launch
- [ ] Add links to related static content from claim status tool (and coordinate how/where with other products)
- [ ] SO CO suggests changing "decision letter" to "decision notice" (didn't initially change becuase "decision letter" is used on pages I don't have full powers to edit)
- [ ] SO CO suggests changing "We sent you a development letter" to "We sent you a letter asking for more information" -- this seems reasonable but Josh says he's not sure they're always about getting more info.. so we will have to consult someone.
- [ ] link to VSO info from the details tab if "Your representative" is blank?
- [ ] Full plain language and style guide review of tracked item headers and descriptions
- [ ] 4 types of claims (reopen, new, increase, secondary) - rethink displaying those labels or link them to a glossary page like Rx
- [ ] Optional upload - should we add guidelines on recommended evidence to upload? Molly shared a copy of the print letter that gets sent out that includes this kind of language (this screen: https://marvelapp.com/2dh4dia/screen/15297510)
- [ ] Integrate the [disability rating & benefits page](https://github.com/department-of-veterans-affairs/sunsets-team/issues/88)'
    - [ ] Potentially link to this from a completed claim
    - [ ] Where in the Vets.gov IA does this fit in?
- [ ] Consolidated claims:
    - [ ] Add a status update to a claim when a new claim is consolidated into it (triggered by new contentions being added)
    - [ ] Filter out consolidated claims from appearing on the claims list
    - [ ] Add backend support to identify claims that will be/have been consolidated, so that we can show more relevant/timely messaging - See issue [#101](https://github.com/department-of-veterans-affairs/sunsets-team/issues/101)
- [ ] Investigate modifying the [downtime/cached message](https://marvelapp.com/2dh4dia/screen/15301009) to a less obtrusive inline timestamp that always appears on claim status
    - Figure out how this plays together with the "Last update" timestamp on the claims list page
- [ ] Add visual distinction between open and closed claims (green check icon?) Related to: https://github.com/department-of-veterans-affairs/sunsets-team/issues/156
- [ ] Up for discussion: Do we want claims to be sortable by status? 
- [ ] Tracked items in microtransactions - ideally, a new item would be added when state changes and old one stays in the list to maintain the timeline aspect. Eg. there would be 3 separate lines for: item requested, item uploaded, item reviewed by VA.
- [ ] Better handling for tracked items that are notices rather than evidence requests
    - [ ] Can we give notices a different experience since they don't have a due date and don't require file upload or any action from the user?
    
    
