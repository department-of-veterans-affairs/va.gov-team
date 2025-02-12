# **How to Request and Process Medallia Feedback**

- [How to Collect and Process Feedback](#how-to-collect-and-process-feedback)
- [How to Submit a Request Ticket](#how-to-submit-a-request-ticket)

## How to Collect and Process Feedback

1. Submit a data collection request ticket to the Contact Center (see [How to Submit a Request Ticket](#how-to-submit-a-request-ticket)).
2. The Contact Center will email the Veteran feedback to the VA email address you provided in the request ticket.
3. Once you get the email, open the spreadsheet in the browser
4. Download [this spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/Medalia/Medallia%20Formatter.xlsm) that has macros for processing the data
5. Copy everything from the Medallia spreadsheet to the macro spreadsheet
6. Run macro 'CalculateCSAT' to gather the CSAT scores and save them to a new spreadsheet 
    - CSAT scores are reported monthly to OCTO 
7. Run macro 'FormatMedalliaData' to format the data that you copied into the spreadsheet, this macro does the following
    - Concatenates columns E and K because these, historically, have comments in them (even though K is what task were you doing)
    - Removes the remainder of the columns
    - Adds the rating columns
    - Wraps all columns so that you can see the titles & data
    - Widens the Comments column so that you can easily read the comments
    - Filter the macro spreadsheet to hide all rows with blank comments
8. Read each comment and place a '1' in the macro spreadsheet column that matches the Veteran's comment sentiments 
    - Like PCI - Veteran indicated that they like PCI
    - Staff not using PCI even though Veterans are - Veteran used PCI but staff told them it doesn't work or the clinic doesn't use it
    - Trouble navigating larger facilities - Veteran had issues finding where to go in the facility
    - Staff not contacting Veterans when appointments are canceled - Veteran thought they had an appointment but it was cancelled without their knowledge 
    - Concerns with check in at kiosks - Veteran indicated they want the kiosk back 
    - Facilities still using QR Codes - Veteran tried to use the QR code 
    - Long wait times at check in or no staff at check in counter - Veteran encountered long wait times at check-in counters or found no staff at check-in counter 
    - Conflicting instructions to Veterans in appointment reminders - Veteran was confused by the appointment reminders 
    - Trouble updating contact info - Veteran wanted to update their contact information via PCI but got frustrated when they found they could not 
    - Issues verifying identity - Veteran had trouble verifying their identity 
    - Pre-Check-in or Check-in link issues - Veteran if the Veteran encountered issues with their PCI link 
    - Too many notifications - Veteran felt they were receiving too many notifications
9. Run macro 'CopyCommentsAsMarkDown' to copy the comments for columns where you placed a '1', change the comments to markdown format, and save them to a new text file 
10. Create a GitHub document similar to [this one](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/Medalia/2024/2024-12-15-Medallia.md)
    - Copy the comments from the text file created by the 'CopyCommentsAsMarkDown' macro to this new GitHub document 
    - Scrub the comments of PII/PHI. Read through every user comment you pasted into the GitHub docuemnt and replace personal information with asterisks or number symbols. Replace data with codes as follows
        - Email addresses - PII_EMAIL
        - Names - PII_NAME
        - Social security numbers - PII_SSN
        - Phone numbers - PII_PHONE
        - Other identifying info - PII_OTHER   
11. Commit the new GitHub document
12. Paste a link to the document in [check-in-experience Slack channel](https://dsva.slack.com/archives/C022AC2STBM) and call out these folks:  Kay Lawyer, Kristen McConnell, Stephen Barrs and the CIE team
13. In order to ensure there is no PII/PHI on your local machine
    - Permanently delete any spreadsheets downloaded from the Contact Center SharePoint site 
    - Permanently delete the Medallia comments text file
    - Remove the data from the macro spreadsheet and save it for use next sprint

## How to Submit a Request Ticket

Using the template below, submit a ticket in GitHub to the Contact Center to collect the Medallia feedback. The feedback should be emailed to a VA.gov email address since it may contain PHI/PII information. All feedback request tickets should be attached to the [CIE Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42190) Epic.

- [Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=Kimberley2019%2C+ATMiddleton%2C+newworld2616%2C+aubreyarcangel&labels=VSP-contact-center%2Ccc-data-request&projects=&template=qualitative-data-request.yml&title=Qualitative+Data+Request)

- Template Fields 
   - **Data Type Requested** - User Surveys
   - **Data Source Type** - Medallia
   - **Date Range** - 2 week range that starts with the end of the last request
   - **Product Name(s)** - eCheck-in, Pre-Check-in
       - NOTE: Add Travel in once we release it
   - **Product Description** - Applications that allow Veterans to verify their contact information prior to a VA health appointment, check in upon arrival for a VA health appointment, and submit a mileage-only travel reimbursement claim on the day of their VA health appointment.
   - **Survey URL(s), key term(s), case category or type** - All comments under and including these URLS and all of their sub-URLs:
       - https://www.va.gov/health-care/appointment-check-in/
       - https://www.va.gov/health-care/appointment-pre-check-in/
       - https://www.va.gov/my-health/appointment-travel-claim/
          - NOTE: only include travel after we release it
   - **File delivery format** - All in one file, on one tab
   - **Word Cloud** - Yes
   - **VA Email Address(es)** - [Your VA email address]
 





   
 
