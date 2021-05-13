Anchor Tags Use Cases
Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline.

The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on. Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc

Link to product outline: Anchor Tags https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/anchor-tags.md

Contents

Use Case A

Description: successful engagement with the copy link icon

A user mouses over the the copy link icon
In hover state the background of the icon changes from white to dark gray
Upon clicking the icon a "Link copied" message is displayed for 10 seconds
After 10 seconds text disappears and link icon reverts back to original white background (default state) simultaneously
Link to designs: https://staging.va.gov/coronavirus-veteran-frequently-asked-questions/#como-puedo-seguir-informado-e-27876

Instructions to access in Staging (or Prod for Drupal) https://staging.va.gov/coronavirus-veteran-frequently-asked-questions/#como-puedo-seguir-informado-e-27876

Use Case B

Description: clicking a second copy link icon within 10 second of clicking the first

Upon clicking another icon (within 10 seconds of the first), the previously clicked on "Link copied" message should immediately revert to the default state
Link to designs: see Use Case A

Instructions to access in Staging (or Prod for Drupal) see Use Case A

Use Case C

Description: The URL anchor path uses the anchor text and a unique ID#

User pastes the copied link into their choice of medium - email, SMS, etc.
Upon pasting the copied link into an application such as email, Slack, Facebook etc., the link will display as a hyperlink URL
The URL uses the page URL plus # path based on the partial text of the heading and a unique ID#.
Like this: .gov/coronavirus-veteran-frequently-asked-questions/#are-va-national-cemeteries-ope-37235
Link to designs: see Use Case A

Instructions to access in Staging (or Prod for Drupal): see Use Case A

Use Case D

Description: Recipient clicks on the shared link and it takes them to the deep content

Shareable link takes user to the header text of the deep linked content.
If the content is inside an accordion, it is defaulted to open when the user lands on the page via the link.
Use Case E

Description: Alignment and placement (for accordion content)

The copy link icon should appear inside the accordion, at the end of the answer/accordion text
Description: Alignment and placement (for H3 content that's not inside an accordion)

The copy link icon should appear at the end of the heading text.
When space permits, the "Link copied" text will appear to the right of the icon and the top of the boxes will be aligned.
When there is not enough space to the right of an icon, the "Link copied" text will appear to the left of the icon, overlapping the h3 text.
Use Case F

Description: Screen Readers

The accessible label will contain relevant, content specific titles for the screen reader to announce, e.g. “Copy a sharable link to [How can I stay informed about COVID-19 vaccines at VA]”
Use Case G

Description: Mobile

The link copy function and behavior is identical on desktop and mobile, excluding a hover state for mobile.
