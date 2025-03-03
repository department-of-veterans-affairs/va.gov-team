# Zero Silent Failures 
For Veterans who have submitted disability claims through the VA.gov, includes PTSD Ancillary data (0781 and 0781a), the authorization to disclose medical information(4142 supplemental data), and the process to upload that data to EVSS or Lighthouse fails.
This solution was to notify the Veteran via an email alerting to them that there was a failure on the va.gov side that requires their attention and what actions to take.

# Silent failure
Silent failures are any errors that occur within the application on any public facing VA platform (VA.gov, mobile application, VA Notify, et. al.) whereby the user (Veteran, claimant, 3rd party, etc.) interacting with your application is NOT made aware that an error has occurred.
[How to discover if your application has a silent failure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md)


# VA Notify
The following emails were implemented for the ZSF initiative

1. [21-526EZ - Action needed](https://staging.notifications.va.gov/services/a61f1c81-a4a5-4552-b98b-375b63a25648/templates/a4b5df4f-6f29-4b0d-a61e-fb02e1ebdb40)

    This email is used when the user's 526EZ form failed post submission. The email let's the user know how to confirm their file for intent and to submit the PDF version instead.

    Release date: November 18, 2024
   
3. [526 - 0781 Doc Upload Failure Email](https://staging.notifications.va.gov/services/a61f1c81-a4a5-4552-b98b-375b63a25648/templates/27b1e1e4-db4a-44cc-9e20-bd7a2371244e)

   This email is used when the user's 0781 and/or 0781a form failed post submission. The email let's the user know they should submit the PDF version instead.

   Release date: October 8, 2024
   
5. [526 - 4142 Doc Upload Failure Email](https://staging.notifications.va.gov/services/a61f1c81-a4a5-4552-b98b-375b63a25648/templates/b0187876-f463-4782-92c3-f8887fca1ba7)

   This email is used when the user's 4142 form failed post submission. The email let's the user know they should submit the PDF version instead.

   Release date: September 10, 2024
   
7. [526 - Generic Doc Upload Failure Email](https://staging.notifications.va.gov/services/a61f1c81-a4a5-4552-b98b-375b63a25648/templates/5d08a51f-69c7-43f9-9f64-d7c65d5979e8)

   This email is used when the user's supporting docuemnts for evidence uploads ailed post submission. The email let's the user know they should submit their evidence via mail.

   Release date: October 7, 2024
