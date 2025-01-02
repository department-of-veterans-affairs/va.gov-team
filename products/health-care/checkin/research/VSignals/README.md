# How to Access and Process VSignals Feedback

1. Go to this [VSignals Live Feed & Search](https://va.voice.va.gov/sso/va/applications/ex_WEB-5/pages/1294?roleId=30908&f.search=%25kiosk%25%20OR%20%25check%20in%25%20OR%20%25check-in%25%20OR%20%25checkin%25%20NOT%20rx%20NOT%20pharmacy%20NOT%20prescription%20NOT%20prescriptions&f.question-score=k_va_vhaconsolidated_ease_scale5&f.timeperiod=10078&f.reporting-date=k_vavoice_response_date_timezone_datetime)
    - Click on Time Period (top of the page)
        - ![image](https://github.com/user-attachments/assets/e4934e17-1a69-425f-a6fe-df7dd690629f)
    - Click + to add a new time range
        - ![image](https://github.com/user-attachments/assets/1168c35c-c943-40e7-8d75-ba1c169726dc)
    - Enter a new date range and click Save
        - ![image](https://github.com/user-attachments/assets/79973dd1-a94a-42a7-88b2-b45b7b3a358a)
    - Scroll down halway and click Run on the right side of the page
        - ![image](https://github.com/user-attachments/assets/5fd01434-225c-4941-8284-a634da9d8cdf)
    - Click download in the upper right and select Excel
        - ![image](https://github.com/user-attachments/assets/67fd2a07-32fe-43c6-a043-df0e153d4370)
2. Download [this spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/VSignals/VSignalsCommentCopier.xlsm) that has macros to process the data
3. Copy everything from the VSignals spreadsheet you downloaded to the macro spreadsheet
4. Run macro 'VSignalsFormatter' to format the data that you copied into the spreadsheet, this macro does the following
    - Deletes unnecessary columns
    - Adds the rating columns
    - Wraps all columns so that you can see the titles & data
    - Sizes the Comments column so that you can easily read the comments
    - Filters to ONLY show the 'OUTPATIENT - HEALTHCARE VISIT' Survey Type
    - Filters to hide all rows with blank Comments
11. Read each comment and place a '1' in the macro spreadsheet column that matches the Veteran's comment sentiments
       * Like PCI - Veteran indicated that they like PCI
       * Mobile CI - Bad - Veteran did not like PCI
       * General Check-in - Good - Veteran had positive commments about the check-in process (ignore comments about staff behavior)
       * General Check-in - Bad	- Veteran had negative commments about the check-in process (ignore comments about staff behavior)
       * Staff not using PCI even though Veterans are - Veteran used PCI but staff told them it doesn't work or the clinic doesn't use it
       * Trouble navigating larger facilities - Veteran had issues finding where to go in the facility
       * Staff not contacting Veterans when appointments are canceled - Veteran thought they had an appointment but it was cancelled without their knowledge 
       * Concerns with check in at kiosks - Veteran indicated they want the kiosk back 
       * Facilities still using QR Codes - Veteran tried to use the QR code 
       * Long wait times at check in or no staff at check in counter - Veteran encountered long wait times at check-in counters or found no staff at check-in counter 
       * Conflicting instructions to Veterans in appointment reminders - Veteran was confused by the appointment reminders 
       * Trouble updating contact info - Veteran wanted to update their contact information via PCI but got frustrated when they found they could not 
       * Issues verifying identity - Veteran had trouble verifying their identity 
       * Pre-Check-in or Check-in link issues - Veteran if the Veteran encountered issues with their PCI link 
       * Too many notifications - Veteran felt they were receiving too many notifications
12. Run macro 'CopyCommentsAsMarkDown' to copy the comments for columns where you placed a '1', change the comments to markdown format, and save them to a new text file 
13. Sum the '1's in these columns
    -  Like PCI
    -  Mobile CI - Bad
    -  General Check-in - Good
    -  General Check-in - Bad
14. Determine the % of 1's in the 4 columns above by dividing by the total number of comments
15. Copy the % for each of the 4 columns above into [this VSignalsGraphs spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/VSignals/VSignals%20Graphs.xlsm)
    - Add your new date range to the bottom of the table
    - Copy the % for each of the 4 columns to the table
    - Click on each of the 2 graphs and change the data range to include your new date range
    - Save the file and re-upload it to GitHub for the next person to use
17. Create a GitHub document similar to [this one](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/VSignals/2024/2024-12-15-VSignals.md)
    - Copy the comments from the text file created by the 'CopyCommentsAsMarkDown' macro to this new GitHub document
    - Take a screenshot of each of the 2 graphs from the graph spreadsheet and past into the GitHub document
    - Scrub the comments of PII/PHI. Read through every user comment you pasted into the GitHub docuemnt and replace personal information with asterisks or number symbols. Replace data with codes as follows
        - Email addresses - PII_EMAIL
        - Names - PII_NAME
        - Social security numbers - PII_SSN
        - Phone numbers - PII_PHONE
        - Other identifying info - PII_OTHER   
13. Commit the new GitHub document
14. Paste a link to the document in [check-in-experience Slack channel](https://dsva.slack.com/archives/C022AC2STBM) and call out these folks:  Kay Lawyer, Kristen McConnell, Stephen Barrs and the CIE team
15. In order to ensure there is no PII/PHI on your local machine
    - Permanently delete the spreadsheet downloaded from the VSignals feed
    - Permanently delete the VSignals comments text file
    - Remove the data from the macro spreadsheet and save it for use next sprint
