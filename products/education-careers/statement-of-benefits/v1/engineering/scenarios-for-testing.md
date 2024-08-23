### Scenarios for testing (FAKE DATA)

#### Scenario 1: no data

- No data at all for the user
- SSN: 796066622
- NULL – No Claimant so FATAL message is returned


#### Scenario 2: disallowed

- 0% eligibility
- 0 months of entitlement
- SSN: 301010302
 

#### Scenario 3: eligible

- Eligibility and Entitlement data available
- No active enrollment
- No enrollment history
- SSN: 796066620
- Active Claimant but no enrollment              
 

#### Scenario 4: eligible, overlapping enrollments

- Eligibility and Entitlement data available
- Has enrollment at an institution
- Has another enrollment at the same institution dated within the range of the original enrollment start and end dates (i.e. overlaps with first enrollment)
- SSN: 301010301                                                          


#### Scenario 5: eligible, non-overlapping enrollments

- Eligibility and Entitlement data available
- Has one enrollment with ‘amendments’
- Has multiple non-overlapping enrollments at same institution
- SSN: 301010303
