# Translation pre-publish checklist #

## Content checks ##

- [ ] Compare translated version against the English version to make sure all the paragraphs are accounted for. Look for any missing headers, sentences, or bullet list items.
- [ ] If translating a page that is getting frequent updates and we don't have the latest version available, add an alert that explains we're awaiting translation. **Example:** [This COVID alert in Spanish](https://prod.cms.va.gov/admin/content/block/269?destination=/admin/content/alerts)

## Formatting checks ##

- [ ]    Confirm all phone numbers are in aria labels. [Learn how to code numbers with aria labels](https://design.va.gov/content-style-guide/dates-and-numbers#phone-numbers)
- [ ]    Confirm that the hierarchy of section and subsection titles is correct (H1 to H2 to H3---levels shouldn't be skipped). [Learn more about section titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [ ]    Make sure all the styling is consistent between the English version and the translated versions, like bolded text, action links, bullets, and spacing.
- [ ]    Make sure there are no extra line breaks between content blocks.

## Link checks ##

- [ ]    Confirm that links work (aren't broken---no error message) and point to the intended page (you pasted in the correct URL or chose the correct node ID).
- [ ]    Check that you've selected a node ID for all links pointing to VA.gov (internal) pages. Only paste in a URL if the page you're linking to doesn't live in our CMS (isn't one of our modernized pages). [Learn how to add node IDs in Drupal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/how-to-do-different-tasks/linking-with-node-ids.md)
- [ ]    Check to make sure all links that direct to English pages are noted. For example, the link has "(en inglés)" at the end for Spanish pages and "(sa English)" at the end for Tagalog pages.
- [ ]    Compare all links against [list of translated pages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/translation-work/list%20of%20translated%20pages.md). Link to translated pages when possible. **Example:** If you're publishing a Spanish page that links to Supplemental Claims, make sure to link to our [Spanish version of Supplemental Claims](https://www.va.gov/decision-reviews/supplemental-claim-esp/).
- [ ]    Change the URL to match our pattern for translated pages by adding **-esp/** or **-tag/** at the end of the English URL. (Example: /health-care/covid-19-vaccine-esp/vaccine-record-esp/)

## Post-publish steps ## 

- [ ]    When publishing a new translated page, [add it to our list of translated pages on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/translation-work/list%20of%20translated%20pages.md).
- [ ]    Confirm with the translation manager on OCTO that the page is ready for QA from the translation service.
- [ ]    Once the page gets cleared from QA, coordinate with the translation manager on OCTO to get the language toggle and left nav set up. We'll need to create a ticket for Public Websites to implement.
- [ ]    If publishing a translated page for the Resources and support section, [add the new article to our Github file of R&S articles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/resources-and-support/resources-and-support-article-list.md).
