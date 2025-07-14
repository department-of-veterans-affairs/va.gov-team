# [Design Review a11y findings]: Accredited Representation Management (September 2023)
[Prototype link](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692888741111/2474c0612887653142ab991d234898b6968dbf0e?sender=u1c2b512a71f68e7b5a5c0324) <br>
[DSVA slack channel for contacting product team](https://dsva.slack.com/archives/C05L6HSJLHM)  <br>

## Product team
- OCTO-DE product owner: Zach Goldfine <br>
- Product manager: Lindsay Li-Smith  <br>
- Designer: Michael Tri (starting 9/25) <br>

## Auditor(s): Jamie Klenetsky Fay

## Testing Coverage: 

### Manual
 * [ ] Color contrast checks (recommend using whocanuse.com for beyond compliance reports) _not applicable, B&W wireframe_
 * [ ] Color blindness checks _not applicable, B&W wireframe_
 * [x] Buttons vs links
 * [x] Cognitive flow
 * [ ] Design consistency across screens _not applicable, B&W wireframe_
 
### Screen Reader
 * [x] Behavior & navigation advice

## Findings
All major findings are listed here and on the [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692888741111/2474c0612887653142ab991d234898b6968dbf0e?wid=0-1695239947965).

### All pages
Phone numbers in “Need help?” section (at the bottom of most screens) need to be linked (see examples in https://design.va.gov/content-style-guide/dates-and-numbers#phone-numbers)

### Find a local representative
There's no mockup for after someone logs in and their current representative is on screen. Not sure what that'll look like.

Two things for "Select your representative type:"
- They're styled as checkboxes currently, and I'm not sure if they should be? Should a user be able to select more than 1 answer here?
- Tooltips are tricky to make accessible. You should do the following with the tooltips:
 1. Remove them
 2. Put all the definitions together
 3. Put that in an [Additional info component](https://design.va.gov/components/additional-info) with the title "What are the different types of representatives?" or similar, below the checkboxes. (Or you can put it directly under the "Select your representative type" label too. Both work, I have a preference for below :) )

#### When someone selects their representative
H1s and page titles should reflect what’s happening on the page. If someone selects a representative from the “Find a Local Representative” page, the next page should say “Representative Selected” as the H1 (since they aren’t FINDING a rep anymore - they’ve found one!).

#### Adjusting the form flow
~~This is really an issue for the CAIA IA team to dive into, but I suggest that the "Find a Local Representative" flow be pulled into the larger form flow. If I understand this flow correctly, a Vet **must** pick find a representative in order to complete the form process. As such, I don't see a reason to separate these two flows out, as they are currently. It's really one big process - log in, find a rep, confirm your personal info, give authorization, download the PDF - and I think it'd be easier for Vets to understand if it was designed that way. (If I'm misunderstanding the process here, let me know!)~~ Janelle Finnerty confirmed that this flow can be completed unauthenticated, so my suggestion doesn't apply. 

### Step 3 of 6: Claimant Information
As per the “one thing per page” philosophy on “Complete a sub task” (https://design.va.gov/patterns/help-users-to/complete-a-sub-task), on Step 3 of the form, if the user says “No,” a new page should open. It can be structured as follows:
- Your Personal Information
- Your Contact Information (or Your Phone and Email, or similar)
- Your Mailing Address
This reduces cognitive confusion, and technical difficulties, with hidden fields. (So one page is “are you the vet?” And one page is “if you’re not, we need your contact information too.”)

The “Claimant Information” header is unnecessary here - you can make “Are you the Veterans who…” a heading AND a label using [this pattern](https://design.va.gov/components/form/radio-button#label-header)

### Step 4 of 6: Authorization for Record Access
What happens if the person says NO to authorization? I don’t see anything in the flow for that case.

### Step 5 of 6: Authorization for Address Change
What happens if the person says NO to authorization? I don’t see anything in the flow for that case.

### Step 6 of 6: Review & Submit
Some cognitive confusion in the title of this page. You aren't "submitting" this form, you're filling it out and generating a filled paper copy. "Submit" implies that they'll be done once they hit that "submit" button.

Maybe the title should be "Review & complete form", and the "submit" button should just say "Next"?

### Form Ready for Download
The “Download your completed form” button should be a link and [look like this](https://design.va.gov/components/link/#download)

“Where do I submit my completed VA 21-22 form?” should be visible, not in an Additional info component. It should be a heading, at the same level as “What are your next steps?” And the “Online,” “By Mail,” and “In-Person” headings need to actually be headings - they don’t look like headings in the wireframe. If “Where do I submit…” is an H3, “Online” should be an H4.
- **Reasoning:** most screen reader users navigate through a web page by heading. If those aren’t proper headings, they’ll have a much harder time finding the different submission options.

Under "When can me rep start helping me?", the link "You can view your representative information and form status here" needs to be _descriptive_. Folks navigate web pages by link, and "here" doesn't explain what the link is! You could instead link the phrase "Review your representative information and form status".
