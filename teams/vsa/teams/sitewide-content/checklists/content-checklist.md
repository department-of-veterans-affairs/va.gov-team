# Content standards checklist

## For all VA.gov pages (including those in Resources and Support)

**Before you begin:**
- [ ] Confirm that there are no updates in draft by other content authors that aren't ready to be published. Check the revision log and then confirm with the content author who made the previous edits that the page is ready to publish.

### Accessibility standards

- [ ] Confirm all links contain a purpose and a target. A user will know from just the link text what the link does and where it is sending them. [Read more about making links accessible](https://www.accessibilityoz.com/2014/02/links-and-accessibility/) NOTE: When we have a style guide entry for purpose and target, we'll link there instead. 
- [ ] Confirm all phone numbers are in aria labels. [Learn how to code numbers with aria labels](https://design.va.gov/content-style-guide/dates-and-numbers#phone-numbers)
- [ ] Confirm that the heirarchy of headings is correct (H1 to H2 to H3—levels shouldn't be skipped). [Read WCAG documentation](https://www.w3.org/WAI/tutorials/page-structure/headings/) NOTE: After we add a link to this from our style guide entry for "Page titles and section titles", change this content checklist link to point to our style guide entry.

### Link standards

- [ ] Check all links to confirm they work and point to the intended page.
- [ ] Confirm all links are 100 characters or less.
- [ ] Check that we use node IDs instead of urls to link to other pages within Drupal. [Learn how to add node IDs in Drupal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/how-to-do-different-tasks/linking-with-node-ids.md) 

### Additional checks for Resources and Support articles

- [ ] Confirm H2s, H3s, and H4s are within the 70-character limit.
- [ ] Confirm related links have been added to the file and make sense for the topic of the page (i.e., they’re actually related to the article—rather than “something you may also be interested in”—and there isn’t an obvious one that’s missing).
- [ ] Determine if this new article should be added as a related link on any live articles. 
- [ ] Make sure the wording for the action link (call to action link text) matches other pages that use the same link. [Check the master list of button labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/resources-and-support/rs-cta-button-audit.md)
- [ ] If linking off of VA.gov, make sure the words in the label or button indicate to the user that they're leaving VA.gov.
- [ ] Check that any screenshots contain alt text that contain context.
- [ ] **For multiple FAQs:** First publish each single Q&A and then publish the multiple FAQ.

**Also confirm these components are checked in the Drupal file:**</br>
- [ ] The correct primary article category and additional article categories. 
- [ ] The correct benefit hub contacts. 
- [ ] The appropriate audience and topic tags. 
- [ ] "Repeat CTA buttons" box if it's a long article. This will display the action link at both the top and bottom of the page.
- [ ] **For a single Q&A:** "Enable standalone Resources and support page for this Q&A."
