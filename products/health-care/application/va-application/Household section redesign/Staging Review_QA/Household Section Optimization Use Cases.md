# 10-10 EZ Household section optimization: Use Cases

- Link to product outline: [10-10EZ Veteran Healthcare application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- Link to Initiative: [Household Section Optimization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/ReadMe.md)
- Link to form flow: [Household section form flow](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/12B7255E-72F6-4C6A-83C3-81BF9A1CEBDE/canvas)
- Link to Epic: [Household section optimization epic #41403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41403)
- Link to [TestRail Test Run](https://dsvavsp.testrail.io/index.php?/runs/view/4540&group_by=cases:section_id&group_order=asc)

We are reorganizing and updating the Household section of the 10-10EZ form.  The data gathered will be the same, we are looking to improve the flow and how the information is presented to Veterans.  We are also working to improve accessibility within the section.

Applicants can be either authenticated or unauthenticated to access this application, however this section will **only display** for those applicants with a disability rating 40% or less, or receive a pension only.


## Contents
- [Sketch flow of Household section](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/9lP93nx)
- Instructions to access in Staging (or Prod for Drupal) (_Note: credentials should be stored in sensitive repos only_)
  - Access the Staging Environment(https://staging.va.gov/health-care/apply/application/introduction)
    - Authenticated flow: Log in with **[User 3](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The updated section starts on **Page 13**.
    - Unauthenticated flow: Do not log in and proceed through the application with any test data.  The updated section starts on **Page 17**.
- Use Cases
  - [Use Case A](#use-case-a)
  - [Use Case B](#use-case-b)
  - [Use Case C](#use-case-c)
  - [Use Case D](#use-case-d)
  - [Use Case E](#use-case-e)
  - [Use Case F](#use-case-f)
  - [Use Case G](#use-case-g)
  - [Use Case H](#use-case-h)
  - [Use Case I](#use-case-i)


## Use Cases

### Use Case A
**Applicant does not want to disclose their financial information**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **No** radio button, indicating they do not wish to provide their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page confirming that they do not want to provide their financial information
  6. Applicant clicks the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown.  The selection does not impact the form.
  8. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case B
**Applicant wants to diclose their financial information, is not married, and has no dependents**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are not married.
  8. Applicant clicks the **Continue** button.
  9. Applicant selects **No** radio button, indicating no dependents to report.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Your annual income* page and provides the necessary information.
  12. Applicant clicks the **Continue** button.
  13. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  14. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case C
**Applicant wants to disclose their financial information, is married, and has no dependents; lives with spouse**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are married.
  8. Applicant clicks the **Continue** button.
  9. Applicant reviews the *Spouse's information* page and provides the necessary information.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Spouse's additional information* page and selects the *Yes* radio button for both questions.
  12. Applicant clicks the **Continue** button.
  13. Applicant selects **No** radio button, indicating no dependents to report.
  14. Applicant clicks the **Continue** button.
  15. Applicant reviews the *Your annual income* page and provides the necessary information.
  16. Applicant clicks the **Continue** button.
  17. Applicant reviews the *Spouse's annual income* page and provides the necessary information.
  18. Applicant clicks the **Continue** button.
  19. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  20. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case D
**Applicant wants to disclose their financial information, is married, and has no dependents; does not live with spouse, does not provide financial support**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are married.
  8. Applicant clicks the **Continue** button.
  9. Applicant reviews the *Spouse's information* page and provides the necessary information.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Spouse's additional information* page and selects the **No** radio button for both questions.
  12. Applicant clicks the **Continue** button.
  13. Applicant reviews the *Spouse's financial support* page and selects the **No** radio button, indicating they do not provide financial support to their spouse.
  14. Applicant clicks the **Continue** button.
  15. Applicant reviews the *Spouse's address and phone number* page and provides the necessary information.
  16. Applicant clicks the **Continue** button.
  17. Applicant selects **No** radio button, indicating no dependents to report.
  18. Applicant reviews the *Your annual income* page and provides the necesary information.
  19. Applicant clicks the **Continue** button.
  20. **Do we need to include the spouse's financial information if no financial support is given?**
  21. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  22. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case E
**Applicant wants to disclose their financial information, is married, and has no dependents; does not live with spouse, does provide financial support**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are married.
  8. Applicant clicks the **Continue** button.
  9. Applicant reviews the *Spouse's information* page and provides the necessary information.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Spouse's additional information* page and selects the **No** radio button for both questions.
  12. Applicant clicks the **Continue** button.
  13. Applicant reviews the *Spouse's financial support* page and selects the **Yes** radio button, indicating they provide financial support to their spouse.
  14. Applicant clicks the **Continue** button.
  15. Applicant reviews the *Spouse's address and phone number* page and provides the necessary information.
  16. Applicant clicks the **Continue** button.
  17. Applicant selects **No** radio button, indicating no dependents to report.
  18. Applicant reviews the *Your annual income* page and provides the necesary information.
  19. Applicant clicks the **Continue** button.
  20. Applicant reviews the *Spouse's annual income* page and provides the necessary information.
  21. Applicant clicks the **Continue** button.
  22. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  23. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case F
**Applicant wants to disclose their financial information, is married, and has two dependents; lives with spouse**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are married.
  8. Applicant clicks the **Continue** button.
  9. Applicant reviews the *Spouse's information* page and provides the necessary information.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Spouse's additional information* page and selects the *Yes* radio button for both questions.
  12. Applicant clicks the **Continue** button.
  13. Applicant selects **Yes** radio button, indicating at least one dependent to report.
  14. Applicant clicks the **Continue** button.
  15. Applicant reviews the *Dependent's information* page and provides the necessary information.
  16. Applicant clicks the **Continue** button.
  17. Applicant reviews the *Dependent's additional information* page and provides the necessary information.
  18. Applicant clicks the **Continue** button.
  19. Applicant reviews the *Dependent's support* page and provides the necessary information.
  20. Applicant clicks the **Continue** button.
  21. Applicant selects the **Yes** radio button to indicate they have another dependent to report.
  22. Applicant clicks the **Continue** button.  
  23. Applicant repeats Step 15 through 22.  If Applicant has no other dependents to report, they will select **No** radio option to indicate they do not have another dependent to report
  24. Applicant clicks the **Continue** button.  
  25. Applicant reviews the *Your annual income* page and provides the necesary information.
  26. Applicant clicks the **Continue** button.
  27. Applicant reviews the *Spouse's annual income* page and provides the necessary information.
  28. Applicant clicks the **Continue** button.
  29. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  30. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case G
**Applicant wants to disclose their financial information, is married, and has at least one dependent; does not live with spouse, does not provide financial support**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are married.
  8. Applicant clicks the **Continue** button.
  9. Applicant reviews the *Spouse's information* page and provides the necessary information.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Spouse's additional information* page and selects the **No** radio button for both questions.
  12. Applicant clicks the **Continue** button.
  13. Applicant reviews the *Spouse's financial support* page and selects the **No** radio button, indicating they do not provide financial support to their spouse.
  14. Applicant clicks the **Continue** button.
  15. Applicant reviews the *Spouse's address and phone number* page and provides the necessary information.
  16. Applicant clicks the **Continue** button.
  17. Applicant selects **Yes** radio button, indicating at least one dependent to report.
  18. Applicant clicks the **Continue** button.
  19. Applicant reviews the *Dependent's information* page and provides the necessary information.
  20. Applicant clicks the **Continue** button.
  21. Applicant reviews the *Dependent's additional information* page and provides the necessary information.
  22. Applicant clicks the **Continue** button.
  23. Applicant reviews the *Dependent's support* page and provides the necessary information.
  24. Applicant clicks the **Continue** button.
  25. If the applicant has another dependent, they select the **Yes** radio button.  If the applicant does not have another dependent, they select the **No** radio button.
  26. Applicant clicks the **Continue** button.  If the **Yes** radio option was selected, repeat from Step 19.  If the **No** radio option was selected, move on to Step 27.
  27. Applicant reviews the *Your annual income* page and provides the necesary information.
  28. Applicant clicks the **Continue** button.
  29. **Do we need to include the spouse's financial information if no financial support is given?**
  30. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  31. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case H
**Applicant wants to disclose their financial information, is married, and has at least one dependent; does not live with spouse, does provide financial support, does not live with dependent, does provide financial support**
  1. Applicant reviews the page explaining how the VA will use their financial information.
  2. Applicant clicks the **Continue** button.
  3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
  4. Applicant clicks the **Continue** button.
  5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
  6. Applicant clicks on the **Continue** button.
  7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are married.
  8. Applicant clicks the **Continue** button.
  9. Applicant reviews the *Spouse's information* page and provides the necessary information.
  10. Applicant clicks the **Continue** button.
  11. Applicant reviews the *Spouse's additional information* page and selects the **No** radio button for both questions.
  12. Applicant clicks the **Continue** button.
  13. Applicant reviews the *Spouse's financial support* page and selects the **Yes** radio button, indicating they provide financial support to their spouse.
  14. Applicant clicks the **Continue** button.
  15. Applicant reviews the *Spouse's address and phone number* page and provides the necessary information.
  16. Applicant clicks the **Continue** button.
  17. Applicant selects **Yes** radio button, indicating at least one dependent to report.
  18. Applicant clicks the **Continue** button.
  19. Applicant reviews the *Dependent's information* page and provides the necessary information.
  20. Applicant clicks the **Continue** button.
  21. Applicant reviews the *Dependent's additional information* page and provides the necessary information.
  22. Applicant clicks the **Continue** button.
  23. Applicant reviews the *Dependent's support* page and provides the necessary information.
  24. Applicant clicks the **Continue** button.
  25. Applicant reviews the *Dependent's income* page and provides the necessary information.
  26. Applicant clicks the **Continue** button.
  27. If the applicant has another dependent, they select the **Yes** radio button.  If the applicant does not have another dependent, they select the **No** radio button.
  28. Applicant clicks the **Continue** button.  If the **Yes** radio option was selected, repeat from Step 19.  If the **No** radio option was selected, move on to Step 29.
  29. Applicant reviews the *Your annual income* page and provides the necesary information.
  30. Applicant clicks the **Continue** button.
  31. Applicant reviews the *Spouse's financial income* page and provides the necessary information.
  32. Applicant clicks the **Continue** button.
  33. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
  34. Applicant clicks the **Continue** button and proceeds through the rest of the application.

### Use Case I
**Applicant wants to disclose their financial information, is not married, and has at least one dependent**
1. Applicant reviews the page explaining how the VA will use their financial information.
2. Applicant clicks the **Continue** button.
3. Applicant selects **Yes** radio button, indicating they wish to share their financial information.
4. Applicant clicks the **Continue** button.
5. Applicant reviews the page explaining what income and deductible information will be needed to complete this section of the application
6. Applicant clicks on the **Continue** button.
7. Applicant chooses the correct option from the *Marital Status* dropdown that indicates they are not married.
8. Applicant clicks the **Continue** button.
9. Applicant selects **Yes** radio button, indicating at least one dependent to report.
10. Applicant clicks the **Continue** button.
11. Applicant reviews the *Dependent's information* page and provides the necessary information.
12. Applicant clicks the **Continue** button.
13. Applicant reviews the *Dependent's additional information* page and provides the necessary information.
14. Applicant clicks the **Continue** button.
15. Applicant reviews the *Dependent's support* page and provides the necessary information.
16. Applicant clicks the **Continue** button.
17. Applicant reviews the *Dependent's income* page and provides the necessary information.
18. Applicant clicks the **Continue** button.
19. If the applicant has another dependent, they select the **Yes** radio button.  If the applicant does not have another dependent, they select the **No** radio button.
20. Applicant clicks the **Continue** button.  If the **Yes** radio option was selected, repeat from Step 11.  If the **No** radio option was selected, move on to Step 21.
21. Applicant reviews the *Your annual income* page and provides the necesary information.
22. Applicant clicks the **Continue** button.
23. Applicant reviews the *Last year's deductible expenses* page and provides the necessary information.
24. Applicant clicks the **Continue** button and proceeds through the rest of the application.
