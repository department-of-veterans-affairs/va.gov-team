# 686c and 674 Off-Ramp Scenarios

VA.gov sends certain 21-686c and 21-674 claims with a "claim type" of `MANUAL_VAGOV` with a note to BIS. BIS then off-ramps those claims to the Central Mail manual processing queue rather than sending them to RBPS for automated processing.

In March 2025, VA.gov removed the `MANUAL_VAGOV` "flag" from 674-only claims (see [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97875)), and started sending all 674-only claims to RBPS for automated processing. If the 674-only claim meets all the conditions within RBPS, it will be processed automatically. However, if the claim contains any of the following conditions, RBPS will off-ramp the claim for manual processing (as intended):
   - School is listed as not accredited.
   - Continuous school term could not be determined as school start date is near 18th birthdate.
   - School term begin date is in future.
   - Existing dependency decisions exist for this veteran with the same birthdate. Please review to avoid duplicate dependent for veteran. ([#61672](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61672) could mitigate this issue.)
   - Prior term start is after current award for prior school child.
   - Child's tuition/allowance is being paid by US government.
   - This is an attorney fee case.
   - A change in the net amount or in the future award line was detected.
   - Veteran has an overseas address.
   - No award exists for Veteran.
   - Child's name, ssn, dob does not match corporate records. ([#61672](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61672) could mitigate this issue.)
   - Child does not exist on award. ([#61672](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61672) could mitigate this issue.)

The following claim types still receive the `MANUAL_VAGOV` "flag" and are off-ramped by BIS before they reach RBPS. This logic should be [reviewed as some point with RBPS stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89907) to ensure RBPS has not added logic to process these claims automatically.
- All 686c claims submitted with a 674
- Adding a spouse due to a non-religious or non-civil marriage
- Removing a parent due to death
- Removing a school child over 18 who has stopped attending school
- Removing a step-child that has left the household
- Removing a married minor child


