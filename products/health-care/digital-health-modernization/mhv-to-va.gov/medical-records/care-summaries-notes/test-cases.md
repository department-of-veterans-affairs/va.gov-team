# Care Summaries and Notes User Acceptance Testing Test Cases

## Use case 1: As a user I can view my list of my care summaries and notes.
### Setup:
User should have at least two pages of care summaries and notes data in their record.
### Steps:
1. Navigate to the Care Summaries and Notes page
2. Verify that pagination works properly
3. Verify that the same care summaries and notes that have been logged in the EHR appear in the list, and that all data fields have been translated correctly.
﻿
﻿
## Use case 2: As a user I can view details about my care summaries and notes
### Setup:
User should have at least two pages of care summaries and notes data in their record.
### Steps:
1. On the care summaries and notes page, click the name of an care summaries and notes
2. Verify that the detail page for the care summaries and notes is displayed
3. Verify that data that has been logged in the EHR for an care summaries and notes appear in the details for that care summaries and notes
﻿
## Use case 3: As a user I can print information about a single care summaries and notes
### Setup:
User should have at least one type of care summaries and notes in their record.
### Steps:
1. On the care summaries and notes page, select Print this page
2. Verify that the browser opens a print dialog
3. If available, select Print to PDF or Microsoft XPS Document Write to verify that the page is formatted properly
4. Verify that all the expected data is included and matches the logged in user’s data.
    - Identifying information
   - Care summaries and notes data
   - Date and time stamps
﻿
## Use case 4: As a user I can generate and view a PDF of a single care summaries and notes
### Setup:
User should have at least one type of care summaries and notes in their record.
### Steps:
1. On the care summaries and notes detail page, select Download PDF of this list
2. Verify that the browser’s download feature provides the ability to open or save a PDF
3. Select the option to view
4. Verify that the PDF opens for viewing
5. Verify that the PDF is formatted properly
6. Verify that all the expected data is included and matches the logged in user’s data.
    - Identifying information
   - Care summaries and notes data
   - Date and time stamps
﻿
## Use case 5: As a user I can download and save a PDF of a single care summaries and notes
### Setup:
1. User should have at least one type of care summaries and notes in their record.
### Steps:
1. On the care summaries and notes detail page, select Download PDF of this list
2. Verify that the browser’s download feature provides the ability to open or save a PDF
3. Select the option to print
4. Save the PDF locally
5. Open the PDF
6. Verify that the PDF is formatted correctly
7. Verify that all the expected data is included and matches the logged in user’s data.
    - Identifying information
   - Care summaries and notes data
   - Date and time stamps
﻿
## Use case 6: As a user I do not want to see data that was erroneously entered into my record
### Setup:
User should have at least one care summary or note flagged as "entered in error"
### Steps:
1. Navigate to the Care Summaries and Notes page
2. Verify that the care summaries and notes flagged as "entered in error" does not appear 
