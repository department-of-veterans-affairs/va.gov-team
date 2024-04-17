# Direct deposit account override sync

4/17/24

Attendees: Julie Strothman, Laura Willwerth, Liz Lantz, Travis Cahill and Adam Whitlock

## Background
We got together to discuss [this Figma thread](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=375-8435&mode=design&t=zcrFlCxeM64W1hBr-11), which called out an edge case that occurs today that we were previously unaware of:
- If a user has an open claim once it is approved, VA will override any DD info in their profile with whatever account information is in the application.
- This means that if a user updates their DD info while VA is evaluating their application, it could be reverted back to something outdated without them knowing.
- Now that edu is migrating to CorpDB, this will also impact open EDU benefit applications.

Ideally, account information is included in the confirmation when a Veteran receives benefits, but that’s not always the case and we can’t guarantee that.

## Discussion
- The Benefits Claims API does have whether there's an open claim, but we don’t have the benefits claims API on the direct deposit page page.
  - we’re not able to conditionally show any content based on whether or not someone has an open claim without adding more  API calls to the page
  - They might be adding “open claim” to the DD API (seems that this would only apply to claims not edu)
- We’re not sure of the scale of the problem, but impact could be severe. Imagine the use case of someone involved in a contentious divorce and suddenly their money starts going into the wrong account and they can’t pay rent. Yikes.
- Currently, we only send an email notification if DD info changes on the front end. 
  - We can explore getting these notifications triggered any time a change is made, but that’s would be a separate effort

## Decisions
- Profile team will add an alert to the DD page that shows to all users, that tells them about the situation

## Next steps
- Julie will let us know what steps we could offer to a veteran to remedy the situation
- Laura will work on content needs once we know more from Julie
  - Potential content needs here: 
    - Note on this profile screen explaining the scenario and any next steps they can take
    - Consider static unauth content to answer “What should I do if I need to change my direct deposit information after I submitted a claim?”
    - Once we confirm if there are steps people can take to prevent an unwanted change from an open claim, we could add a question to this page: https://www.va.gov/change-direct-deposit/
- Profile team will work on adding the alert once we have word from Julie
- Profile team will explore getting email notifications sent anytime DD info is changed whether it happens on the FE by the user or BE by VA
  - Event bus could be something to use for this solution

