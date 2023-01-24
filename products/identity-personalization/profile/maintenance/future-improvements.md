#  Ideas for Profile improvements

**Last updated: July 14, 2022**
- ~Better communication of success and error messages, something more mobile friendly. More actionable error messages. Is "please try again" useful?~ Completed fall 2021
- Re-examine borders on tables and how we're handling that. Are they necessary? We need padding if we have borders and this takes up precious real estate on small screens
- Can profile be smart enough to inform people of relevant things when they're making edits (e.g. tell people their prescriptions will go to this new address when they're making changes to the address field and we know they have prescriptions)
- ~Move edit button to bottom left corner of "cards". Current placement is problematic for instances where we have a list of things to edit (e.g notifications), and for folks zoomed in~ completed July 2021
- We currently allow profile updates given a fiduciary/incompetent flag, but we shouldn't. We need to figure out how to stop this altogether.
  - Thankfully, VA Profile currently blocks this information from getting saved as follows. 
  - From the [#va-profile](https://dsva.slack.com/channels/va-profile) Slack on 5.27.20:
  - > Joshua Lindsey Today at 3:49 PM: @Samara (She/Her) - just another view to make sure that the fudiciary scenario response is complete.  If VBA (VBA Corporate) has a person identified as having a fiduciary.  VA Profile will not update the  VBA Corporate record.  This logic is bi-directional, VA Profile also does not accept those changes to that record from Corporate. DB either.  Example,
If the address is sent from va.gov to VA Profile.  VA Profile will accept the address but will exclude it from what is shared with VBA Corporate.

