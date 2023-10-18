# Allergies User Acceptance Testing 10/17/2023 Test Run

## Use case 1: As a user I can view my list of allergies.
### Setup:
User should have at least two pages of allergy data in their record.
### Steps:
1. Navigate to the Allergies page
2. Verify that pagination works properly  **Test Result: PASS**
3. Verify that the same allergies that have been logged in the EHR appear in the list, and that all data fields have been translated correctly.   **Test Result: PASS**
﻿
## Use case 2: As a user I can print my list of allergies.
### Setup:
User should have at least two pages of allergy data in their record.
### Steps:
1. On the allergies page, select Print this list   **Test Result: PASS**
2. Verify that the browser opens a print dialog   **Test Result: PASS**
3. If available, select Print to PDF or Microsoft XPS Document Write to verify that the page is formatted properly   **Test Result: PASS**
4. Verify that all the expected data is included and matches the logged in user’s data:
   - Identifying information   **Test Result: PASS**
   - Allergies data   **Test Result: PASS**
   - Date and time stamps   **Test Result: PASS**
﻿
## Use case 3: As a user I can generate and view a PDF of my list of allergies
### Setup:
User should have at least two pages of allergy data in their record.
### Steps:
1. On the allergies page, select Download PDF of this list   **Test Result: PASS**
2. Verify that the browser’s download feature provides the ability to open or save a PDF   **Test Result: PASS**
3. Select the option to view   **Test Result: PASS**
4. Verify that the PDF opens for viewing   **Test Result: PASS**
5. Verify that the PDF is formatted properly   **Test Result: PASS**
6. Verify that all the expected data is included and matches the logged in user’s data.
    - Identifying information   **Test Result: PASS**
   - Allergies data   **Test Result: PASS**
   - Date and time stamps   **Test Result: PASS**
## Use case 4: As a user I can download and save a PDF of my list of allergies.
### Setup:
User should have at least two pages of allergy data in their record.
### Steps:
1. On the allergies page, select Download PDF of this list   **Test Result: PASS**
2. Verify that the browser’s download feature provides the ability to open or save a PDF   **Test Result: PASS**
3. Select the option to print   **Test Result: PASS**
4. Save the PDF locally   **Test Result: PASS**
5. Open the PDF   **Test Result: PASS**
6. Verify that the PDF is formatted correctly   **Test Result: PASS**
7. Verify that all the expected data is included and matches the logged in user’s data.
    - Identifying information   **Test Result: PASS**
   - Allergies data   **Test Result: PASS**
   - Date and time stamps   **Test Result: PASS**
﻿
## Use case 5: As a user I can view details about my allergies
### Setup:
User should have at least two pages of allergy data in their record.
### Steps:
1. On the allergies page, click the name of an allergy   **Test Result: PASS**
2. Verify that the detail page for the allergy is displayed   **Test Result: PASS**
3. Verify that data that has been logged in the EHR for an allergy appear in the details for that allergy   **Test Result: PASS**
﻿
## Use case 6: As a user I can print information about a single allergy
### Setup:
User should have at least one type of allergy in their record.
### Steps:
1. On the allergies page, select Print this page   **Test Result: PASS**
2. Verify that the browser opens a print dialog   **Test Result: PASS**
3. If available, select Print to PDF or Microsoft XPS Document Write to verify that the page is formatted properly   **Test Result: PASS**
4. Verify that all the expected data is included and matches the logged in user’s data.   **Test Result: PASS**
    - Identifying information   **Test Result: PASS**
   - Allergies data   **Test Result: PASS**
   - Date and time stamps   **Test Result: PASS**
﻿
## Use case 7: As a user I can generate and view a PDF of a single allergy
### Setup:
User should have at least one type of allergy in their record.
### Steps:
1. On the allergy detail page, select Download PDF of this list   **Test Result: PASS**
2. Verify that the browser’s download feature provides the ability to open or save a PDF   **Test Result: PASS**
3. Select the option to view   **Test Result: PASS**
4. Verify that the PDF opens for viewing   **Test Result: PASS**
5. Verify that the PDF is formatted properly   **Test Result: PASS**
6. Verify that all the expected data is included and matches the logged in user’s data.   **Test Result: PASS**
    - Identifying information   **Test Result: PASS**
   - Allergies data   **Test Result: PASS**
   - Date and time stamps   **Test Result: PASS**
﻿
## Use case 8: As a user I can download and save a PDF of a single allergy
### Setup:
1. User should have at least one type of allergy in their record.
### Steps:
1. On the allergies detail page, select Download PDF of this list   **Test Result: PASS**
2. Verify that the browser’s download feature provides the ability to open or save a PDF   **Test Result: PASS**
3. Select the option to print   **Test Result: PASS**
4. Save the PDF locally   **Test Result: PASS**
5. Open the PDF   **Test Result: PASS**
6. Verify that the PDF is formatted correctly   **Test Result: PASS**
7. Verify that all the expected data is included and matches the logged in user’s data.
    - Identifying information   **Test Result: PASS**
   - Allergies data   **Test Result: PASS**
   - Date and time stamps   **Test Result: PASS**
﻿
## Use case 9: As a user I do not want to see data that was erroneously entered into my record
### Setup:
User should have at least one allergy flagged as "entered in error"
### Steps:
1. Navigate to the Allergies page   **Test Result: PASS**
2. Verify that the allergy flagged as "entered in error" does not appear    **Test Result: PASS**
