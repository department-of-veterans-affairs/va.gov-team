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
