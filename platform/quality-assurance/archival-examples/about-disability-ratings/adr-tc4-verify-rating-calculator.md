# "About disability ratings" rating calculator functions test case

## Precondition: The user is viewing the "About disability ratings" page (https://staging.va.gov/disability/about-disability-ratings-beta/)

| Step Num | Action | Expected | Actual | Pass/Fail |
| -------------- | ------------- | --------------- | ------------- | ------ |
| 1. | Navigate within the page to the "VA combined disability rating calculator" widget | The rating calculator widget is displayed with a gray background | - | - |
| 2. | Enter a number that is not a multiple of 10 (example: 11,25, 99) into the "Disability rating" input box on the first row | The input box is populated with the number you entered | - | - |
| 3. | Enter a number that is not a multiple of 10 (example: 11,25, 99) into the "Disability rating" input box on the second row | The input box is populated with the number you entered | - | - |
| 4. | Click the calculate button | An error message in red text appears above the first and second row's input boxes that reads, "Disability ratings are given in 10% increments." | - | - |
| 5. | Enter a multiple of 10 into the first row's "Disability rating" input box | The input box is populated with a multiple of 10 | - | - |
| 6. | Click the calculate button | The error message for the first row has cleared.  An error message in red text appears above the second row's input boxes that reads, "Disability ratings are given in 10% increments." | - | - |
| 7. | Enter a multiple of 10 into the second row's "Disability rating" input box| The input box is populated with a multiple of 10 | - | - |
| 8. | Click the calculate button | The error message for the second row has cleared. A message with the text, "Your VA disability rating" is displayed with the calculated number below it. | - | - |
| 9. | Enter a string into the first row's "Optional description" box | The text box is populated with a description | - | - |
| 10. | Enter a string into the second row's "Optional description" box | The text box is populated with a description | - | - |
| 11. | Click the calculate button | A message with the text, "Your VA disability rating" is displayed with the calculated number below it. | - | - |
| 12. | Click the clear all button | Row 1's "Disability rating" and "Optional description" boxes are empty.  Row 2's "Disability rating" and "Optional description" boxes are empty. | - | - |