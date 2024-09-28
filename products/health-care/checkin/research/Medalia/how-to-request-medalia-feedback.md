# **How to Request and Process Medallia Feedback**

- [How to Collect and Process Feedback](#how-to-collect-and-process-feedback)
- [How to Submit a Request Ticket](#how-to-submit-a-request-ticket)

## How to Collect and Process Feedback

1. Submit a data collection request ticket to the Contact Center (see [How to Submit a Request Ticket](#how-to-submit-a-request-ticket)).
2. The Contact Center will email the Veteran feedback to the address you provided in the request ticket.
3. Once you get the email, download the feedback spreadsheet to your machine on the VA network. 
4. Rename the spreadsheet in the following format (this lets us sort all the feedback files by date):
   `CIE Medallia [YYYY] Q[#] Sprint[##]` 
   For example: CIE Medallia 2024 Q1 Sprint 5
5. Scrub the feedback of PII/PHI. Read through every user comment and replace personal information with asterisks or number symbols. Replace data with codes as follows
   - Email addresses - PII_EMAIL
   - Names - PII_NAME
   - Social security numbers - PII_SSN
   - Phone numbers - PII_PHONE
   - Other identifying info - PII_OTHER
6. Create a GitHub document similar to [this one](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/Medalia/2024/2024-05-16-Medallia.md)
7. Paste a link to the document in [check-in-experience Slack channel](https://dsva.slack.com/archives/C022AC2STBM) and call out these folks:  Kay Lawyer, Kristen McConnell, Stephen Barrs and the CIE team

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
 





   
 
