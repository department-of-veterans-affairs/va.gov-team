# Decision log - Income Limits app

2/22/23 - 3/2/23
Prototype flow finalized after some uncertainty about aid-and-attendance (A&A) and Housebound thresholds.

**Decision:** The Income Limits app will not need to base any thresholds on whether a Veteran receives additional pension through A&A or Housebound benefits.

Background:
- The old wizard indicated that Veterans receive "Free medications and beneficiary travel reimbursement" (Rx and BT) at different income limits depending on whether they receive A&A, HB, or neither.
- On 2/22 the team presented a prototype flow to stakeholders from the Healthcare Eligibility Center (HEC) and its sub-group EED (Enrollment Eligibility Division).
  - EED said that Rx and BT benefits are automatic for Veterans who receive a pension, regardless of income
  - EED said healthcare is free with pension, A&A or HB
  - EED said that for Veterans not receiving a pension, we should ask whether they receive A&A or HB and then adjust the Rx-BT threshold accordingly
  - Hence, our next prototype got additional branches for pension, A&A, and HB beneficiaries.
- Danielle Thierry spotted an inconsistency – the [benefit hub page about priority groups](https://www.va.gov/health-care/eligibility/priority-groups/) states that any Veteran receiving Housebound and A&A benefits are automatically in Priority Group 4. PG 4 Veterans automatically receive the "Free medications and travel reimbursement" benefit level.
  - This means that separate benefit levels for A&A and Housebound are not relevant.






