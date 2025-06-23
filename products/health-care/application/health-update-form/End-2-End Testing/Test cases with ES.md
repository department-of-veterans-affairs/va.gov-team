## End to End testing with Enrollment System
- Use this document to assist in coordinating tests between VA.gov and the Enrollment System (used by HEC staff).


### Resources
- Main POC: Joshua Faulkner via Slack within our team channel #1010-health-apps
- [Staging QA test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-1010EZR-Update-health-care-benefits.md)
- [MVP End-to-End testing ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70627)
- Test users must have a Disability rating less than 50%
     - Joshua Faulkner can update user data in ES
          - Provide name and test info (last 4 of SSN) to identify test user

### Test cases
#### Copay test already exists for previous year (financials already on file)
- [ ] #1 Financials already exist on record - No Financial data submitted, new Insurance information submitted
     - Test users 11, 40, 228
          - Ensure user is showing all financial data is existing in ES (Coordinate with Joshua Faulkner)
          - Spouse pages skipped
          - Dependents pages skipped
          - Income/Deductibles pages skipped
          - Medicaid - Yes
          - Medicare - Yes, Eff date and 11 digit claim number M1234567890 added
          - Insurance Policy entered - A987654
     - Expected Results:
          - Rx test and Copay test not run, previous test on record
          - Insurance info added

- [ ] #2 Financials already exist on record.  New Insurance data submitted
     - Test users 11, 40, 228
          - Ensure user is showing all insurance and financial data is existing in ES (Coordinate with Joshua Faulkner)
          - Medicaid - Yes
          - Medicare - Yes, Eff date and 11 digit claim number M0987654321 added
          - Insurance Policy entered - A123456
     - Expected Results:
          - Rx test and Copay test not run, previous test on record
          - Medicare are updated with new Claim number on record
          - Private Insurance policy updated with new Company name and Policy number on record

- [ ] #3 Financials already exist on record.  No Insurance data submitted
     - Test users 11, 40, 228
          - Ensure user is showing all insurance and financial data is existing in ES (Coordinate with Joshua Faulkner)
          - No Medicaid
          - No Medicare
          - No Insurance Policy
     - Expected Results:
          - Rx test and Copay test not run, previous test on record
          - Insurance information is retained on record (previously existing)

---

#### Copay test does not exist for previous year (no financials on record)
- [ ] #4 High Income - Spouse, Dependent, Financial & Insurance data submitted when financials DO NOT exist (Means test not yet run for previous year)
     - Test users 11, 40, 228
          - Ensure user is showing as not married, no dependents and all financial data has been removed from ES (Coordinate with Joshua Faulkner)
          - Married, add spouse
          - Dependent, add child
          - Gross Income $15,000
          - Net Farm/business income $15,000
          - Other income $5,000
          - Spouse income $25,000
          - Medical deductible $1,000
          - College deductible $1,500
          - Funeral/burial deductible $2,000
          - Medicaid - Yes
          - Medicare - Yes, Eff date 11/1/2020 and 11 digit claim number M1234567890 added
          - Insurance - No
     - Expected Results:
          - Rx test run but no change, test user is over the income limit for Rx concessions. (unsure of this outcome with spouse & dependent)
          - Copay test is run, as there was no financial data on record.
          - Spouse is added to record
          - Dependent is added to record
          - Medicare added to record
          - Private Insurance is added/retained (if previously existing)

- [x] #5 Low Income - Spouse, Dependent, & Financial data submitted when financials DO NOT exist (Means test not yet run for previous year)
     - Test users 11, 40, 228
          - Ensure user is showing as not married, no dependents and all financial data has been removed from ES (Coordinate with Joshua Faulkner)
          - Married, add spouse
          - Dependent, add child
          - Gross Income $15,000
          - Net Farm/business income $0
          - Other income $0
          - Spouse income $0
          - Medical deductible $500
          - College deductible $0
          - Funeral/burial deductible $0
          - Medicaid - No
          - Medicare - No
          - Insurance Policy entered - A987654
     - Expected Results:
          - Rx test run is updated, test user is under the income limit for Rx concessions.
          - Copay test is run, as there was no financial data on record.
          - Spouse is added to record
          - Dependent is added to record
          - Insurance information is added/retained on record (if previously existing)
