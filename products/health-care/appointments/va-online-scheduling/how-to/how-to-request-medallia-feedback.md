# How to Request and Process User Feedback

## Overview

- We request user feedback from Contact Center - [here's the process](#how-to-request-and-process-medallia-feedback). For help, reach out in [#vsp-contact-center-support](https://dsva.slack.com/archives/CNCEXNXK4)
- Appointments user feedback is captured in [this sharepoint folder](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FAppointments%2FUser%20Feedback&viewid=9384f3a8%2De3e8%2D4abb%2Db2ab%2D24cf305ccdac&newTargetListUrl=%2Fsites%2FHealthApartment%2FShared%20Documents&viewpath=%2Fsites%2FHealthApartment%2FShared%20Documents%2FForms%2FAllItems%2Easpx)
- Analytics from the likert scales in these reports are captured in the [MHV CSAT Dashboard in Domo](https://va-gov.domo.com/page/601491420?userId=917050460)

### Feedback sources

User feedback comes from three sources:
- The blue feedback button at the bottom of each page
- The My HealtheVet intercept survey that pops up only under the `va.gov/my-health` URLs for authenticated users
- The VA.gov intercept survey. In October of 2024 this was replaced with the My HealtheVet intercept survey under `va.gov/my-health`. However, we still collect feedback from this survey when it pops up under the `va.gov/health-care/manage-appointments/` URL, as this is a major entry point into the tool.

**Note:** we used to collect data from the VA Application feedback survey which was linked at the bottom of each page in the Need Help section. The link to this survey was removed in April 2025. Historic data is in the 2025 analysis spreadysheet under the `Mobile App - PowerBI` tab.

### Reports

The appointments team delivers the following user feedback report-outs:
- [Weekly Medallia reports](#weekly-medallia-reports) 
- [Monthly IVC reports](#monthly-ivc-reports) 

We also update data in two sources used for other reporting:
- [Monthly MHV on VA.gov health apps spreadsheet](#monthly-mhv-on-vagov-feedback-spreadsheets) 
- [UX Metrics spreadsheet](#ux-metrics-spreadsheet)

## 💬 Request Medallia Feedback

1. Using the template below, submit a ticket in GitHub to Contact Center to collect the Medallia feedback. 
2. If you want feedback delivered on a regular basis (daily/weekly/monthly note that in a comment in the generated ticket).
3. Add a tracking ticket to [this Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102341)

Template: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=Kimberley2019%2C+ATMiddleton%2C+newworld2616%2C+aubreyarcangel&labels=VSP-contact-center%2Ccc-data-request&projects=&template=qualitative-data-request.yml&title=Qualitative+Data+Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=Kimberley2019%2C+ATMiddleton%2C+newworld2616%2C+aubreyarcangel&labels=VSP-contact-center%2Ccc-data-request&projects=&template=qualitative-data-request.yml&title=Qualitative+Data+Request)

### How to fill in the fields

**Data Type Requested**

User Surveys

**Data Source Type**

Medallia

**Date Range Start and End**

[See the Feedback epic for weekly dates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102341)

**Product Name(s)**

Appointments FE

**Product Description**

A tool for Veterans to schedule and manage their appointments online.

**Survey URL(s), key term(s), case category or type**

```
All comments under and including these URLS and all of their sub-URLs.

Public URLs:
- https://www.va.gov/health-care/manage-appointments/
- https://www.va.gov/resources/what-should-i-bring-to-my-health-care-appointments/
- https://www.va.gov/resources/about-managing-health-appointments-online/
- https://www.va.gov/resources/how-to-get-community-care-referrals-and-schedule-appointments/

Logged in experience:
- https://www.va.gov/my-health/appointments
```

**Sub URLs**

Yes

**File delivery format**

All in one file, on one tab

**Word Cloud**

None

**VA Email Address(es)**

[Your VA email address]

Note: Contact Center will email you the feedback to the VA email address you provide. The feedback should be emailed to a VA.gov email address since it may contain PHI/PII information. 

## 🧹 Before Anaylzing the Feedback

1. Download the spreadsheet sent by Contact Center to your machine/locally on the VA network. 

2. Scrub the feedback of PII/PHI. Scan the entire dataset for open text fields and replace personal information with codes as follows:
- Email addresses - PII_EMAIL
- Names - PII_NAME
- Social security numbers - PII_SSN
- Phone numbers - PII_PHONE
- Other identifying info - PII_OTHER

Some of the known open text field columns are:
- Why did you select that rating
- What task were you trying to do today
- What topics are you most interested in for upcoming articles

But make sure to review the entire sheet every time, as new data columns can be added without warning.

3. Copy the feedback into the Medallia tab of the current user feedback file.

4. Check that the headings are correct across the entire sheet. The order the data points are received in does change without warning. It's helpful to copy the heading row in with the rest of the data, then delete it when done.

5. Sort the sheet by "URL". Move any feedback under the unauth urls URL (and any subURLs) to the "Unauth" (previously "Appts Benefits Hub") tab:
- `https://www.va.gov/health-care/manage-appointments/`
- `https://www.va.gov/resources/what-should-i-bring-to-my-health-care-appointments/`

8. Delete the original file from your computer.

## 🧐 How to Code Feedback

Analyzing feedback involves applying codes for themes, feature requests, and sentiment. We also highlight when a user mentions other health tools.

### Coding themes and feature requests

Each line of feedback may include multiple codes for themes or feature requests.  
Separate each code with a comma.  
**Example:**  
`appt-data-issue, fr-data-providername, fr-data-typeofcare, quote`

- **Themes**: Trends or recurring patterns found in the data
- **Feature requests**: User-identified needs for functionality that does not currently exist

Refer to the **[user feedback spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Appointments/User%20Feedback/2025%20Analysis.xlsx?d=wdaa5b5f611b649a28c4fcbc0bc8ef07a&csf=1&web=1&e=ZOW5q7)(2025)** for definitions of each code.


> [!TIP]
> Use the **URL field** to determine what part of the site the user was interacting with.
> If a comment is unclear, check which page the feedback came from to provide context.
  
### Adding and removing codes

- Only introduce new codes after reviewing at least **one month** of data and observing consistent trends.
- **Do not delete** any codes. At year-end, the team will evaluate which codes to retire when launching a new tracker.

 
### Administrative codes

#### `quote`
Use the `quote` code for feedback worth sharing with the team. These quotes are pulled into the team report.

Include comments that are:
- Specific and actionable
- Reveal the reason behind the feedback
- Show emotion that highlights the urgency or need

#### `other-health-tool`
Use this code when feedback refers to tools outside of the main application.  
Always include a value in the **Other Product/Tool** column.

Examples:
- Secure Messaging  
- Medical Records  
- Medications
 
 
### Examples

| Comment                                                                          | Able to complete task | Code                                     | Sentiment | Other Product/Tool | Explanation |
|----------------------------------------------------------------------------------|-----------------------|------------------------------------------|-----------|--------------------|-------------|
| To find out what clinic I'm supposed go to on the 19th of May                    |   No                  | appt-data-issue, fr-data-clinicname      | Negative  |                    |  They didn't fill out any likert ratings, but this is negative because they weren't able to complete their task, which was to identify the clinic. They were on the URL for their appointments list, so they were looking for the name of the clinic there. This is a data issue because important data was missing, and a feature request because they noted the data they wanted on the page          |
| my medications were stopped without warning, i still had refills.....            |  No                    |  unrelated, other-health-tool            | Negative  | Medications       |  This is unrelated to the tools because it's a staff process issue. However, because it mentioned medications, we note it for the Medications team so they can review. Along with the comment being about a generally bad situation, all the likert values were low, so the sentiment is negative         |


### Sentiment Codes

Each feedback item should be coded with **only one** sentiment value:

- **Positive**: The tool/feature meets the user’s needs
- **Negative**: The tool/feature does *not* meet the user’s needs
- **Mixed**: Comment contains both positive and negative aspects
- **Neutral**: No indication whether needs were met

#### When Sentiment is Unclear
Use these fields for guidance:

- **“Were you able to do your task today?”**  
  - A “No” response with a simple task description (e.g., “cancel an appointment”) likely indicates **Negative** sentiment.
- **“What is your overall satisfaction with this site?”**  
  - A Neutral or Negative comment with a **Likert rating of 3 or lower** should be marked **Negative**.
- **“Please rate your experience with this site today”** (MHV surveys only)

If sentiment is still unclear and no helpful ratings are available, leave the field **blank**.


## How to report/share out feedback

### Weekly Medallia reports

Every week we analyze feedback from the previous week and report to OCTO and the delivery team. These reports are generated from Medallia feedback - [here's how to request and code that feedback](#how-to-request-and-process-medallia-feedback).

#### How to collect data for the report

- Filter the Medallia sheet by the date range you're analyzing
- Add a second filter on the codes column for any cell that contains `quote`.
- Copy the quotes into the [Select Quotes sheet](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Appointments/User%20Feedback/2025%20Analysis%20-%20Select%20Quotes.docx?d=w2738630d47d64de68e05cef933b39cea&csf=1&web=1&e=mHnZM7) (2025 example)

#### How to organize the report

- Group the quotes into common themes. Codes can be helpful, but can also be combined here
    - For example, if a lot of comments around canceling and rescheduling, merging those can be helpful to illustrate that they're part of the same workflow - often when a user cancels an appointment, they want to reschedule it
    - If a comment spans categories, include it in the most relevant category
        - Unless each comment is truly separate, like a bulletted list of issues, each of which is a worthy quote. In that case, include in multiple categories.
- Important quotes go to the top.
    - Note any big changes in feedback - and, if possible, why (like if a new feature was released)
    - Note anything that sounds like a bug that needs to be addressed. 
  
#### How to share out the report

- Share links to both the updated spreadsheet and Select Quotes document in the `#appointments-fe-meetup` channel. Note the dates of the updated date, and ping Kay, Kristen, and Robyn Singleton.
   - If you think you identified a bug, ping the PM and Dev Lead. 
- Add the links to the Medallia ticket and close it.


### Monthly IVC reports 

Every month we report on the previous month's Medallia activity in an overall report to IVC.

1. Add a section for the previous month to the Medallia slide deck. Update the dates and copy in the relevant charts. 
2. When the IVC demo deck for that month is done, copy the Medallia slides into that deck. [IVC Monthly Demo Slide Decks](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=mPX7ia&CID=1a315a7a%2D9b50%2D4fd3%2Dbf47%2D79b746fd6e64&FolderCTID=0x012000E6CB91B251F8F14F832E520FAF90885D&id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FAppointments%2FIVC%20Monthly%20Demo)

### Monthly MHV on VA.gov feedback spreadsheets

The MHV teams use a different process and format for analyzing user feedback. We copy the Medallia (auth) feedback into their monthly sheet, including the sentiment analysis but not the codes. The MHV monthly spreadsheets are in [this Sharepoint folder](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?newTargetListUrl=%2Fsites%2FHealthApartment%2FShared%20Documents&viewpath=%2Fsites%2FHealthApartment%2FShared%20Documents%2FForms%2FAllItems%2Easpx&id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FGeneral%2FMonitoring%2C%20Reporting%2C%20and%20Feedback%2FMedallia%20feedback&viewid=9384f3a8%2De3e8%2D4abb%2Db2ab%2D24cf305ccdac)

Process 
- Copy the feedback into the relevant sheet for the month, following the provided format.
- Include data for "sentiment" 
- Include data under "other health tool"
- Don't add the universal codes, or the codes we've added to the report. 

### UX Metrics spreadsheet

The spreadsheet, and instructions on how to update it, are [here](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/_layouts/15/doc.aspx?sourcedoc=%7Bc95ca18b-ba4a-4913-ba21-0545e72d2cc9%7D&action=edit).

