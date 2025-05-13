# 686c and 674 Off-Ramp Scenarios

VA.gov sends certain 21-686c and 21-674 claims with a "claim type" of `MANUAL_VAGOV` with a note to BIS. BIS then off-ramps those claims to the Central Mail manual processing queue rather than sending them to RBPS for automated processing. [This is a dashboard](https://vagov.ddog-gov.com/logs?query=%40payload.txt%3AClaim%5C%20set%5C%20to%5C%20manual%5C%20by%2A&agg_m=count&agg_m_source=base&agg_q=%40payload.txt&agg_q_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.txt&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1735711200000&to_ts=1742831337044&live=false) that shows the volume of 686/674 claim types off-ramped by VA.gov.

In March 2025, VA.gov removed the `MANUAL_VAGOV` "flag" from 674-only claims (see [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97875)), and started sending all 674-only claims to RBPS for automated processing. This resulted in RBPS auto-processing 30% of 674-only claims. The remainder were off-ramped for manual processing by RBPS for expected reasons. If the 674-only claim meets all the conditions within RBPS, it will be processed automatically. However, if the claim contains any of the following conditions, RBPS will off-ramp the claim for manual processing (as intended):
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

The following claim types still receive the `MANUAL_VAGOV` "flag" and are off-ramped by BIS before they reach RBPS.
- All 686c claims submitted with a 674
   - These claim types are off-ramped bc VA.gov assigns a seperate procID to each claim type. [Work needs to be done](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25030) to merge both claims under the same procID. Once this is done, these claim types can go directly to RBPS and no longer need to be off-ramped by VA.gov
- Adding a spouse due to a non-religious or non-civil marriage
- Removing a child or parent due to death
- Removing a school child over 18 who has stopped attending school
- Removing a step-child that has left the household
- Removing a married minor child

The code that controls the off-ramping done by VA.gov is executed in this order, which may impact how off-ramp scenarios are counted.
```
def set_to_manual_vagov(reason_code)
      @note_text = 'Claim set to manual by VA.gov: This application needs manual review because a 686 was submitted '

      case reason_code
      when 'report_death'
        @note_text += 'for removal of a child/dependent parent due to death.'
      when 'add_spouse'
        @note_text += 'to add a spouse due to civic/non-ceremonial marriage.'
      when 'report_stepchild_not_in_household'
        @note_text += 'for removal of a step-child that has left household.'
      when 'report_marriage_of_child_under18'
        @note_text += 'for removal of a married minor child.'
      when 'report_child18_or_older_is_not_attending_school'
        @note_text += 'for removal of a schoolchild over 18 who has stopped attending school.'
      when 'report674'
        @note_text += 'along with a 674.'
      end

      'MANUAL_VAGOV'
    end
  end
```

*NOTE:* Code was added to VA.gov in 2021 that was intended to off-ramp 686c requests to remove a dependent if the claimant was receiving pension, but the code was never turned on (placed behind a flipper) because the BGS Award Service API was not working (see this spike [#76465](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76465)). We believe these claims are still going to RBPS, but RBPS is off-ramping them (rather than VA.gov). Before fixing the API and turning on the flipper, [we need to understand](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89909) if the current logic for off-ramping pension claims is still correct. As part of this process, VA.gov also needs to [send the answers](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103842) to two income-related questions to RBPS, so it can automatically process pension-related dependent changes.
