# 21-526ez Metrics

## Must have
| Goal                                     | Metrics                                               | Definition                                                   | Location |
|------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------|----------|
| Ensure completely successful submissions | % of successful and failed form submissions           | **Overall submission volume** Count of unique forms where a user has hit the "Submit" button and received a confirmation page |          |
| Ensure completely successful submissions | % of successful and failed form submissions           | **Submission total failure error %** - Number and % of submissions that are submitted on VA.gov (user receives a successful confirmation message) but never reach the next system |          |
| Ensure completely successful submissions | % of successful and failed form submissions           | **Backup path usage** - Number and % of submissions that are submitted on VA.gov (user receives a successful confirmation message) and fail automatic establishment but succeed using a backup path of a document package to the centralized mail portal. (only where applicable: dependency and disability |          |
| Ensure completely successful submissions | % of successful and failed ancillary form submissions | **Overall submission volume** - Count of unique submissions that contain sub-form flows (0781 and 4142) along with the primary submission (such as 526 or 0995) |          |
| Ensure completely successful submissions | % of successful and failed ancillary form submissions | **Submission error %** - Number and % of submissions that are submitted on VA.gov (user receives a successful confirmation message) but never reach the next system |          |
| Ensure completely successful submissions | % of successful and failed evidence submissions       | **Overall submission volume** - Count of unique pieces of evidence submitted with forms, total and per form |          |
| Ensure completely successful submissions | % of successful and failed evidence submissions       | **Submission error %** - Number and % of submissions that are submitted on VA.gov (user receives a successful confirmation message) but never reach the next system |          |
| Make it easy to complete the form        | User satisfaction                                     | **CSAT Score** - (TBD)                                       | [Medallia Data](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data#AccessingandUtilizingVeteranSupportData-AccessingMedalliaData) > "Please rate your experience with VA.gov today."        |
| Make it easy to complete the form        | User form completion behavior                         | **Number of sessions to complete a form** - How many unique sessions between the moment the form is started and the moment the form is submitted |          |
| Make it easy to complete the form        | User form completion behavior                         | **Time to complete form** - overall elapsed time (days, weeks) from InProgressForm creation to submission) |          |
| Stay compliant                           | Are Form content and generated PDF up to date?        | Number of weeks/months that the digital form and paper form are out of date |          |

## Nice to have
| Goal                                      | Metrics                                       | Definition                                                   | Location |
|-------------------------------------------|-----------------------------------------------|--------------------------------------------------------------|----------|
| Empower completely successful submissions | Integrations                                  | response time of APIs                                        |          |
| Empower completely successful submissions | Integrations                                  | downtime of APIs/downstream systems                          |          |
| Make it easy to complete the form         | Form-specific interaction friction and errors | ITF error percentages                                        |          |
| Make it easy to complete the form         | Form-specific interaction friction and errors | doc upload frontend errors                                   |          |
| Make it easy to complete the form         | Call center feedabck                          | Volume/topic of call center tickets                          |          |
| Make it easy to complete the form         | User form completion behavior                 | Number of users who start a form and never complete it.      |          |
| Make it easy to complete the form         | User form completion behavior                 | Active Time to complete form (active time in form or overall elapsed time from creation to submission) |          |
| Make it easy to complete the form         | User form completion behavior                 | Dropoff/abandonment rates On each page in the form, what percentage of people drop-off and don't continue to the next page |          |
| Make it easy to complete the form         | User form completion behavior                 | Time to complete particular sections or screens              |          |
| Make it easy to complete the form         | User form completion behavior                 | % Blocked from submitting number and % of users who try to submit their form but receive a message on the front end that blocks them from getting a confirmation page |          |

