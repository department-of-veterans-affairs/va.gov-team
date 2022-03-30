## Testing documentation

### Test scripts
These are the test scripts that testers of the MEB follow for testing the UI and they have been exported from JIRA. The test scripts are:

- [Claim Submission Tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/test-scripts/Submit-Claim-Test-Set.docx)
- [Claim Decision Sets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/test-scripts/MEB-Claim-Decision-Test-Set.docx)

### Defect report
- This is the list of [MEB defects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/test-scripts/MEB-defect-report.csv) found during testing.

### 508 Testing
- [AXE reports](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/test-scripts/axeDt-reports.zip) as of 03/24/2022
- The VA Section 508 Office performed MEB testing and certified zero defects found on 02/15/2022. Official VA Section 508 Validation Status document can be provided upon request.

### Test URL
- The application can be accessed directly at https://staging.va.gov/education/apply-for-benefits-form-22-1990/ 

### Testing accounts
- The application REQUIRES that the logged in user has a matching claimant on the VADIR instance referenced by the external UAT DGIB service. If a match is not found, the user is redirected to the existing application https://staging.va.gov/education/apply-for-education-benefits/application/1990, so a claimant can submit a claim anyway by entering all information by hand. We do not test this application as it an existing separately developed application. To get access to accounts that have matching records on DGIB so you can test MEB, please contact Anhthu Vohuu at VA.gov slack channel.

### Testing contacts
- MEB Lead: Cesar Santiago @ VA.gov Slack channel
- MEB Test Lead: Branden Bartlett @ VA.gov Slack channel
- MEB UAT testing accounts access: Anhthu Vohuu @ VA.gov Slack channel
