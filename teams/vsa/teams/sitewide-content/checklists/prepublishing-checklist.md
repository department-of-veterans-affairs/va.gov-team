# Pre-publishing checklist

## For all VA.gov pages (including those in Resources and Support)

### Before you begin
- [ ] Confirm that there are no updates in draft by other content authors that aren't ready to be published. Check the revision log and then confirm with the content author who made the previous edits that the page is ready to publish.

### Accessibility standards

- [ ] If your link or button will take the user off VA.gov, confirm that the text for the link or button contains a purpose and a target. The user should be able to tell from the link or button text what the call to action is (the purpose) and where they will end up if they click on the link (the target). The following link is an example of this: <br>[Read more about making links accessible on AccessibilityOz](https://www.accessibilityoz.com/2014/02/links-and-accessibility/)</br> 
**Note:** When you direct the user to another VA.gov page, the link only needs to contain text indicating purpose (the call to action).
- [ ] Confirm all phone numbers are in aria labels. [Learn how to code numbers with aria labels](https://design.va.gov/content-style-guide/dates-and-numbers#phone-numbers)
- [ ] Confirm that the heirarchy of section and subsection titles is correct (H1 to H2 to H3—levels shouldn't be skipped). [Learn more about section titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [ ] Replace any sighted language ("view," "see," "look") with a word that's inclusive of our screen reader users ("check," "go to," "review").
- [ ] Avoid using other ability-focused language. ("hear back from")

### Link standards

- [ ] Confirm that links work (aren't broken—no error message) and point to the intended page (you pasted in the correct URL or chose the correct node ID).
- [ ] Confirm all link text is 100 characters or less.
- [ ] Check that you've selected a node ID for all links pointing to VA.gov (internal) pages. Only paste in a URL if the page you're linking to doesn't live in our CMS (isn't one of our modernized pages). [Learn how to add node IDs in Drupal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/how-to-do-different-tasks/linking-with-node-ids.md) 

### CMS standards

- [ ] Make sure all apostrophes and quotation marks are curly not straight. (Once this is automatic in Drupal, we can remove this item.)
- [ ] If publishing a brand-new page, confirm the left nav and url are set up correclty. (If the page is a child page, the section needs to be the same as the parent page in order for the left nav to show.) [Learn how to set up a url and left nav in Drupal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/how-to-do-different-tasks/adding-left-nav-and-url.md)

### Additional checks for Resources and Support articles

- [ ] Confirm H2s, H3s, and H4s are within the 70-character limit.
- [ ] Confirm related links have been added to the file and make sense for the topic of the page (i.e., they’re actually related to the article—rather than “something you may also be interested in”—and there isn’t an obvious one that’s missing).
- [ ] Determine if this new article should be added as a related link on any live articles. 
- [ ] When considering the wording for your CTA text, check to see if a label is already in use for this CTA on VA.gov. Reuse existing CTA text when possible. [Check the master list of labels for buttons and action links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/resources-and-support/rs-cta-button-audit.md)
- [ ] If linking off of VA.gov, make sure the words in the text link, action link, or button indicate to the user that they're leaving VA.gov.
- [ ] Confirm that screen shots or other images have alt text that describes the image. Screen readers will read this text to the user, and search engines use it to assess the purpose of the page. [Learn how to write alt text on WebAIM](https://webaim.org/techniques/alttext/)
- [ ] **For multiple FAQs:** First publish each single Q&A and then publish the multiple FAQ.

**Also confirm these components are checked in the Drupal file:**</br>
- [ ] The correct primary article category and additional article categories. 
- [ ] The correct benefit hub contacts. 
- [ ] The appropriate audience and topic tags. 
- [ ] "Repeat CTA buttons" box if it's a long article. This will display the action link at both the top and bottom of the page.
- [ ] **For a single Q&A:** "Enable standalone Resources and support page for this Q&A."

## Post-publishing R&S checklist

- [ ] Add the article to the R&S landing page in the correct hub. If there are already more than 5 articles in that hub, you don't need to add it unless you want it to replace another article already on the page.
- [ ] If the article is the sixth one in a hub to be published, add the "Go to all articles" link at the bottom of the hub section on the landing page.
- [ ] [Add the action link wording to our Github file of action link labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/resources-and-support/rs-cta-button-audit.md).
- [ ] [Add the new article to our Github file of R&S articles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/resources-and-support/resources-and-support-article-list.md).
- [ ] Notify the Content Center Support team in their Slack channel (#vsp-contact-center-support) that we've published a new article. Provide the link and a few details about the article. It may be helpful to them for either communicating with Veterans or researching questions themselves. 

**Note:** All published pages must meet VA.gov's experience standards. [Review the list of experience standards](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/VA.gov-experience-standards.1683980311.html)  
