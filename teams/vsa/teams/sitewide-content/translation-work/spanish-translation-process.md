# Spanish translation process for static content pages
Follow these processes when working on Spanish translation pages. The CAIA bilingual copy editor completes most of this work. A CAIA copy editor completes the QA and publishing steps. The OCTO translation lead facilitates communication with the State Department and other teams.  

## Sending content to the State Department for translation 
- The bilingual copy editor creates a Word document using the content from the most recent draft of a VA.gov page that’s saved in Drupal.  
- Copy and paste all the content on the page, including the meta description. Also include the English content in the left navigation so we'll have the Spanish version when the toggle is created later on. Label each content block with header levels and note if there are alerts and accordion titles. 
- Using the [checklist for content readiness for translation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/editorial-resources/preparing-content-for-translation-checklist.md), read through the Word document and make any edits needed to ensure accurate translation. Track all changes.
- Post the live URL at the top of the page and include a word count.
- Save the document using the H1 of the page as a title and upload it to the Github ticket.
- The OCTO translation lead reviews the Word doc and accepts all changes when complete.They note in the Github ticket when it's ready to send out for translation.
- The CAIA PM uploads the new document to the [State Department translation work folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/sitewide-content/translation-work/State%20Department%20translation%20work) in Github. Add it to either an existing benefit hub subfolder or create a new one if needed.
- The CAIA PM adds this page to the [translation process tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/translation-work/State%20Department%20translation%20work/translation-tracker.md), completing all the needed information, and emails the State Department that a new page is ready for them. Unless this is urgent work, the “date needed by” should be 10 business days from the date sent. Be sure to include the work order number in the subject line of the email.
- The CAIA PM comments in the ticket that the page has been sent out for translation and closes the ticket.
- The CAIA PM creates a backlog ticket for building and publishing the Drupal page.

## Building and publishing translated Drupal pages 
- The State Department emails the translated content attached as a Word document.
- The CAIA PM uploads the Word document to the building and publishing ticket in Github and marks the date in the [translation process tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/translation-work/State%20Department%20translation%20work/translation-tracker.md).
- The bilingual copy editor creates a new Drupal node using the template that matches the English page. (Often this will be a benefit detail page.)
- Copy and paste the content from the Word document into the correct content blocks in the Drupal template. Save as you go.
- When all the content is added, preview the Drupal page to ensure that formatting is correct (bolding, bullets, no extra line spaces).
- Compare the Drupal preview to the live English page to confirm they match.
- Post the preview link in the building and publishing Github ticket and alert the copy editor that the page is ready to be reviewed.
- The copy editor reviews the translated page, comparing it against the Word document that was provided to ensure no content is missing.
- The copy editor uses the [translation pre-publishing checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/checklists/translation-pre-publish-checklist.md), sets up the URL, and publishes the page.
- Once the page is live, the CAIA PM emails the link to the State Department letting them know the page is ready for QA. Record this date in the translation process tracker.

### A few things to remember when building a page
- When adding links, if it goes to an English page, be sure to include “(en inglés)” after the link.
- If linking to another VA.gov page, check the [list of translated pages on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/translation-work/list%20of%20translated%20pages.md) to see if the page has already been translated. Link to the Spanish Drupal node if there is one.
- If a phone number is listed on the page, check if a non-English speaker could get what they need if they called.

## Making changes when QA is returned from the State Department 
- When the State Department emails their QA with changes, the CAIA PM adds the Word document to the building and publishing ticket and records it on the translation tracker.
- The bilingual copy editor makes any changes in the Drupal node. If there are questions or concerns, they should work with the State Department to come to a solution.
- The bilingual copy editor comments in the ticket that the page is ready to be reviewed.
- The copy editor reviews the changes, publishes the page, and comments in the ticket.
- The CAIA PM opens a [Public Websites intake form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jilladams%2CFranECross&labels=Public+Websites%2CNeeds+refining&projects=&template=public-websites-intake.yml&title=PW+intake%3A+%3CType+of+Request%3E+from+%3CTeam%3E) for the team to add a Spanish toggle and set up the left nav on the page. Include the Spanish left nav content that the State Department provided when initially sending back the translation.

## After a translated page is published
- Once the page is live with the Spanish toggle, the CAIA PM adds it to the [list of translated pages on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/translation-work/list%20of%20translated%20pages.md).
- The CAIA PM creates a ticket to add the page to the [Spanish language assistance page](https://www.va.gov/asistencia-y-recursos-en-espanol/).
- The CAIA PM reviews the pages on the list of translated pages on VA.gov and checks if any have links to the English version of the new page. If so, they create a ticket for the bilingual copy editor to update the links to the Spanish node instead. 
