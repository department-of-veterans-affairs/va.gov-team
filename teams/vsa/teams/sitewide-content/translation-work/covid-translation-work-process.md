# Process for updating COVID-19 pages

This is the process to follow when we have updates to any of our COVID-19 pages that we also have translated content for:
- [Coronavirus FAQs](https://www.va.gov/coronavirus-veteran-frequently-asked-questions)
- [COVID-19 vaccines at VA](https://www.va.gov/health-care/covid-19-vaccine/)
- [About COVID-19 vaccines](https://www.va.gov/health-care/covid-19-vaccine/about-covid-19-vaccine/)
- [COVID-19 booster shots and additional doses](https://www.va.gov/health-care/covid-19-vaccine/booster-shots-and-additional-doses/)
- [How to get your COVID-19 vaccine records online](https://www.va.gov/health-care/covid-19-vaccine/vaccine-record/)

1. Danielle updates the content. Depending on the updates and how quickly they need to be published, her changes can be in a Word doc or in a Drupal page.
2. The copy editor does a copy edit of the content (either in a Word doc or in Drupal).
3. Danielle sends the updates for JTF approval.
4. Once approved, Danielle makes any necessary changes and the copy editor does a final read and publishes the page.
5. Once the page is published, the copy editor creates a Word doc to send to the translation team and provides the link to the page with updates. For the Word doc, copy the paragraph that contains updates and be sure to include any H2s or H3s that will help identify where on the page the changes are. Highlight each full sentence that's changing.
6. Copy editor sends the Word doc to the translation team and asks for translations in both Spanish and Tagalog.
7. Also once the English page is published, a content team member makes any necessary changes to the chatbot. These changes are made in GitHub and on a new branch, not the master (ex: vaccine_updates.2.21.22). The content team member then creates a PR for the copy editor to review changes.
8. The copy editor reviews the chatbot changes and approves the PR.
9. The content team member who made the changes to the chatbot adds chatbot team members to the PR for review and alerts them in their Slack channel (#covid-19-chatbots) that there are chatbots updates for review. The content team member should also include a link to the PR in their Slack message.
10. The chatbot team member reviews the PR and pushes the updates to the staging environment for review. They'll alert the content team member through Slack that the changes are available for review in staging before going live in the prod environment. The content team member reviews the changes in staging and sends a message in the chatbot team's Slack channel that the changes can be pushed to prod. If additional changes are needed, the content team member will restart the process for updating the chatbot.
11. Once the translation comes back, a content team member inputs the changes to both the Spanish and Tagalog pages. If there are any missing translations, the content team member includes it in their notes in the Github ticket during the pass off for copy edit. If the missing translations are minor, the content team member can use Google translate to translate the text, but should also note it in the Github ticket so that the copy editor can contact the translation team for a proper translation.
12. The copy editor reviews these pages, making sure all the translated content has been added to the page. They also review the page for any errors with spacing, capitalization, and punctuation and makes sure all links work. 
13. The copy editor publishes the page.
14. Once the page is live, the copy editor sends links of the live pages to the volunteer translation team, and points out where on the page changes were made. The volunteer translation team reviews the content to make sure there are no egregious errors and the content matches the meaning on the English page. 
15. A content team member enters any changes from the volunteer translation team's review.
16. The copy editor reviews the changes and publishes the page.
