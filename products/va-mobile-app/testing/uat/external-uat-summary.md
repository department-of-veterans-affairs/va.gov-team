# External UAT Summary

May 28, 2021

## Approach

Moderated 60-minute conversations with 5 participants. We asked participants to join a Zoom meeting from their Android or iOS device, sign in, and check the app section by section to determine if their data was displaying as expected. We did not ask participants to complete tasks (i.e. Sending a Secure Message, uploading a file to a claim, editing their personal information). We kept track of issues we observed in a Google sheet and ranked them using our agreed upon issue tracking framework ([see test plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/VA%20Mobile%20App%20Test%20Plan.md#issue-tracking)). We ran internal sessions from May 24 - May 27.

### Participants:

We recruited 12 and spoke to 5 participants who can be described as follows:

- Age ranges: (1) 25-34, (1) 35-44, (1) 45-64, (1) 55-64, (1) unknown
- Credentials: (2) MyHealtheVet, (2) DS Logon, (1) tried but could not complete sign in with DS Logon or ID.me 
- 4 participants had a service-connected disability rating, ranging from 60% to 100%
- 4 participants live in a rural area, 1 live in an urban area.
- 1 Female, 4 Male

## Issues Found

Here, the issues found are summarized and the relevant follow up ticket is linked. We did not note any issues that had previously come up in our [internal UAT testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/uat/internal-uat-summary.md). **We are keeping close track of issues found in a Google Sheet that is accessible to internal team members. Please reference the internal Google Sheet and/or the related ZenHub tickets for the most recent information about an issue. This document serves to document issue findings but will not be updated as issues are resolved.**

This section is broken into 4 parts:
- [Critical and High Issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/uat/external-uat-summary.md#critical-and-high-issues)
- [Medium and Low Issues]()
- [Future Improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/uat/external-uat-summary.md#future-improvements)
- [Feature Suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/uat/external-uat-summary.md#feature-suggestions)


### Critical and High Issues

The critical and high issues we found were follows:
<table>
  <thead>
  <tr>
   <th>Severity</th>
   <th>App Section</th>
   <th>Error Description</th>
   <th>Expected Behavior & Notes</th>
   <th>Follow up / ticket</th>
  </tr>
  </thead>
  <tbody>
  <tr>
   <td>High
   </td>
   <td>Authentication
   </td>
   <td>The participant said that they use 2FA with DS Logon on VA.gov, and the app did not do 2FA for DS Logon. They asked if it was intentional to remove this.
   </td>
   <td>VA.gov just added ID.me as a 2FA in their auth flow but we do not do it on our end. 
   </td>
   <td>Will look into what percentage of DSLogon users have have direct deposit on VA.gov analytics.
   </td>
  </tr>
  </tbody>
</table>

---

### Medium and Low Issues 

The medium and low issues we found were follows:
<table>
  <tr>
   <th>Severity</th>
   <th>App Section</th>
   <th>Error Description</th>
   <th>Expected Behavior & Notes</th>
   <th>Follow up / ticket</th>
  </tr>
  </thead>
  <tbody>
  <tr>
   <td>Medium
   </td>
   <td>Secure Messaging - View Message
   </td>
   <td>Participant had to scroll through a long thread to get to message they had tapped on (latest).
   </td>
   <td>Known issue - this is an open ticket and we need to determine the issue.
   </td>
   <td><a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/23318">#23318</a>
   </td>
  </tr>
  <tr>
   <td>Low
   </td>
   <td>Claims and Appeals - Higher Level Review Detail Screen
   </td>
   <td>The participant had an open Higher Level Review (HLR). When they tapped into the appeal's detail screen, their events list was missing two event titles. There was a row and date for the events correctly showing. These events were VA changing a decisions. 
<p>
Also, there was no Current Status listed for the HLR. The card displayed with the title "Current Status", but there was no information listed.
<p>
Another participant had one event that was also missing a title, but their "Current Status" was displaying as expected.
   </td>
   <td>The app should display titles for all events listed in the appeal step table
<p>
The app should display a Current Status if there is one displaying on VA.gov.
<p>
The data in the app for the Higher Level Review was not matching what was shown o<a href="http://va.gov/">n VA.g</a><span style="text-decoration:underline;">ov</span>.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Low
   </td>
   <td>Claims and Appeals - List View
   </td>
   <td>The text for higher level review was running together, displaying as "higherlevelreview"
   </td>
   <td>Text should have spaces between each word
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Low
   </td>
   <td>Secure Messaging - Sent Folder
   </td>
   <td>Saw multiple asterisk characters (**) displaying in provider’s names along with other characters that didn’t seem to be part of the provider name.
   </td>
   <td>We believe that is how it is entered the database and so not under our control.
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td>Low
   </td>
   <td>Secure Messaging - Compose a Message
   </td>
   <td>When the participant hit the Compose button, an app error briefly flashed, then the form loaded successfully.
   </td>
   <td>Shouldn’t see flash of error message before form loads.
   </td>
   <td><a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/24831">#24831</a>
   </td>
  </tr>
  </tbody>
</table>

---

### Future Improvements

Based on moderator and observer observations the following UX improvements should be considered.

#### Authentication

A participant changed their My HealtheVet (MHV) password during the authentication flow, which then sent them to the MHV website instead of the app once they had successfully signed in. Suggestion is to find a way to direct users back to the app once they reset their password on MHV. It was not clear they were not supposed to continue using the MHV website.

#### Font-scaling

Re-consider where font scaling is not enabled in the app (e.g Header, Toolbar Navigation).


#### Address Update/Edit

Consider using a primary button at the end of the form instead of _Save_ action in the upper right of screen. One participant who tried to add their address had trouble finding Save action.

### Feature  Suggestions

#### RX list

A participant indicated when asked for feedback that they would like to have a list of their prescriptions in the app. They find it valuable knowing which prescriptions are active or expired, which need refills, in the same way as on the My HealtheVet website. The participant also likes being able to download or print a PDF of their medication list. 

#### Notifications

When asked for feedback a participant talked about wanting app notifications for things like prescription refills, but also being able to control which of those notifications they received. They were worried about being “drowned in a bunch of notifications”, and weren't interested in getting notifications like "wellness reminders”.
