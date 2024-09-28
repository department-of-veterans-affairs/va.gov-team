# 10-10EZR Test Document

- Link to test plan with test results in [TestRail](https://dsvavsp.testrail.io/index.php?/plans/view/5373) includes:
  - Functional test cases
  - Regression test cases
  - Acessibility test cases  
- Test Cases:
  - [Test Case 1: Verify applicant can answer NO to provide TERA information](#test-case-1)
  - [Test Case 2: Verify applicant can answer NO on TERA questions](#test-case-2)
  - [Test Case 3: Verify applicant can answer YES to all TERA questions but leaves date ranges empty](#test-case-3)
  - [Test Case 4: Verify applicant can select "Other" for Other toxic exposure](#test-case-4)
  - [Test Case 5: Verify applicant can answer YES to some TERA questions and NO to the others but leaves date ranges empty](#test-case-5)
  - [Test Case 6: Verify applicant can answer YES to some TERA questions and NO to some TERA questions and fills out date range completely](#test-case-6)
  - [Test Case 7: Verify applicant cannot continue application with invalid date ranges](#test-case-7)
  - [Test Case 8: Verify applicant cannot continue application with only month field](#test-case-8)
  - [Test Case 9: Verify applicant can continue application with only year field](#test-case-9)
  - [Test Case 10: Verify applicant cannot continue application with special characters in year field](#test-case-10)
  - [Test Case 11: Verify applicant can answer YES to all TERA questions and provide complete date ranges](#test-case-11)
  - [Test Case 12: Verify applicant can go back and change responses as expected](#test-case-12)
  - [Test Case 13: Verify applicant can save and finish their application at a later date](#test-case-13)
  - [Test Case 14: Verify TERA questions are shown correctly in the review page](#test-case-14)

-------------------------------------------------

<a name="test-case-1"></a>
### Test Case 1: Verify applicant can answer NO to provide TERA information
Steps:
1. Applicant reviews the page explaining about Toxic Exposure
2. Applicant selects No radio button, indicating they do not wish to answer questions about toxic exposure
3. Applicant clicks the Continue button and proceeds through the rest of the application

<a name="test-case-2"></a>
### Test Case 2: Verify applicant can answer NO on TERA questions
Steps:
1. Applicant reviews the page explaining about Toxic Exposure
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects NO radio button for Cleanup and response efforts
5. Applicant clicks on Continue button
6. Applicant selects NO radio button for Gulf War locations
7. Applicant clicks on Continue button
8. Applicant selects NO radio button for Operations
9. Applicant clicks on Continue button
10. Applicant selects NO radio button for Agent Orange locations
11. Applicant clicks on Continue button
12. Applicant selects no check boxes for Other toxic exposures
13. Applicant clicks on Continue button and proceeds through rest of the application.

<a name="test-case-3"></a>
### Test Case 3: Verify applicant can answer YES to all TERA questions but leaves date ranges empty
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant leaves the date fields blank in the Service dates for Gulf War locations question
9. Applicant clicks the Continue button
10. Applicant selects YES radio button for Combat Operations
11. Applicant clicks the Continue button
12. Applicant selects YES radio button for Agent Orange
13. Applicant clicks the Continue button
14. Applicant checks some of the boxes for Other toxic exposures
15. Applicant clicks the Continue button and proceeds through the rest of the application

<a name="test-case-4"></a>
### Test Case 4: Verify applicant can select "Other" for Other toxic exposure		
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects NO radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects NO radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant selects NO radio button for Combat Operations
9. Applicant clicks the Continue button
10. Applicant selects NO radio button for Agent Orange
11. Applicant clicks the Continue button
12. Applicant selects "Other toxins or hazards not listed here" box for Other toxic exposures
13. Applicant clicks the Continue button
14. Applicant enters text in form field stating another type of toxin or hazard they were exposed to and the response contains a number
15. Applicant sees an error message that says their response can only contain alphanumeric characters
16. Applicant changes response in form field to only include letters but types a response that's over 100 characters
17. Applicant sees an error message that says their response must be 100 characters or less
18. Applicant changes response in form field to less than 100 characters
19. Applicant clicks the Continue button
20. Applicant enters a date range in the Service dates for other toxic exposure fields
21. Applicant clicks the Continue button and proceeds through the rest of the application

<a name="test-case-5"></a>
### Test Case 5: Verify applicant can answer YES to some TERA questions and NO to the others but leaves date ranges empty
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects NO radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant leaves the date fields blank in the Service dates for Gulf War locations question
9. Applicant clicks the Continue button
10. Applicant selects YES radio button for Combat Operations
11. Applicant clicks the Continue button
12. Applicant selects NO radio button for Agent Orange
13. Applicant clicks the Continue button
14. Applicant selects a couple of the checkboxes for Other toxic exposures
15. Applicant clicks the Continue button and proceeds through the rest of the application

<a name="test-case-6"></a>
### Test Case 6: Verify applicant can answer YES to some TERA questions and NO to some TERA questions and fills out date range completely
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects NO radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant selects NO radio button for Combat Operations
9. Applicant clicks the Continue button
10. Applicant selects YES radio button for Agent Orange
11. Applicant fills out the date fields blank in the Service dates for Agent Orange locations question
12. Applicant clicks the Continue button
13. Applicant selects NO boxes for Other toxic exposures
14. Applicant clicks the Continue button and proceeds through the rest of the application

<a name="test-case-7"></a>
### Test Case 7: Verify applicant cannot continue application with invalid date ranges
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant enters a year that occurs in the future for the Service dates for Gulf War locations question and navigates away from that field
9. Applicant sees an error message above the date picker that says "Please provide a valid current or past date."
10. Applicant changes year to a date in the past
11. Applicant enters a date in the "Service end date" fields that occurs before the start date they entered and navigates away from that field.
12. Applicant sees an error message above the date picker that says "Service end date must be after the service start date."
13. Applicant changes year to a date after the service start date.
14. Applicant clicks the Continue button

<a name="test-case-8"></a>
### Test Case 8: Verify applicant cannot continue application with only month field
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant enters a only a month leaves year field empty
9. Applicant clicks the Continue button

<a name="test-case-9"></a>
### Test Case 9: Verify applicant can continue application with only year field
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant enters a only a year and leaves month field empty
9. Applicant clicks the Continue button

<a name="test-case-10"></a>
### Test Case 10: Verify applicant cannot continue application with special characters in year field
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant enters special characters into the year field (comma, period, whitespace before and after year, etc)
9. Applicant clicks the Continue button

<a name="test-case-11"></a>
### Test Case 11: Verify applicant can answer YES to all TERA questions and provide complete date ranges
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant enters a date range in the Service dates for Gulf War locations fields
9. Applicant clicks the Continue button
10. Applicant selects YES radio button for Combat Operations
11. Applicant clicks the Continue button
12. Applicant selects YES radio button for Agent Orange
13. Applicant clicks the Continue button
14. Applicant enters a date range in the Service dates for Agent Orange locations fields
15. Applicant clicks the Continue button
16. Applicant selects all boxes for Other toxic exposures
17. Applicant clicks the Continue button
18. Applicant enters additional toxic exposure details in the free form text field (should be limited to alphanumeric characters only)
19. Applicant clicks the Continue button
20. Applicant enters a date range in the Dates of exposure fields
21. Applicant clicks the Continue button and proceeds through the rest of the application

<a name="test-case-12"></a>
### Test Case 12: Verify applicant can go back and change responses as expected
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant provides a date range for service period
9. Applicant clicks the Continue button
10. Applicant clicks on the Back button
11. Applicant changes the date range from the initial values and clicks on Continue button
12. Applicant clicks on the Back button

<a name="test-case-13"></a>
### Test Case 13: Verify applicant can save and finish their application at a later date
Steps:
1. Applicant reviews the page explaining about Toxic Exposure.
2. Applicant selects YES radio button, indicating they wish to answer questions about toxic exposure
3. Applicant clicks the Continue button
4. Applicant selects YES radio button for Cleanup or Response question
5. Applicant clicks the Continue button
6. Applicant selects YES radio button for Service in Gulf War
7. Applicant clicks the Continue button
8. Applicant enters a year and selects a month for service start and end dates
9. Applicant clicks the Continue button
10. Applicant clicks on the "Finish this application later" link
11. Applicant comes back and reopens the application

<a name="test-case-14"></a>
### Test Case 14: Verify TERA questions are shown correctly in the review page
Steps:
1. Go to the review page of the application
2. Verify that the TERA questions appear on the review page as expected

