## Testing documentation

### Test scenarios
These are [the test scenarios](./Enrollment-verification-jira-test-plan.docx) that for enrollment verification testers. They have been exported from JIRA.

### Defect report
- This is [the list of bugs](./Enrollment-verification-bugs.csv) found during testing.

### 508 Testing
- Axe Reports [here](./axeDt-reports_EnrollmentVerfication.zip)(zip file)

### Test URL
- The application can be accessed directly at https://staging.va.gov/education/verify-school-enrollment/

### Testing accounts
- The application REQUIRES that the logged in user has a matching claimant on the VADIR instance referenced by the external UAT DGIB service. If a match is not found, no enrollments will be found. To properly stage accounts that have matching records on DGIB so you can test MEB, please contact Cesar Santiago at VA.gov slack channel when you are ready to test.

### Testing contacts
- MEB Lead: Cesar Santiago @ VA.gov Slack channel
- MEB Test Lead: Branden Bartlett @ VA.gov Slack channel
