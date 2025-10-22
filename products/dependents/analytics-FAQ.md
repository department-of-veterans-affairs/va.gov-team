# Analytics FAQs
_This file is intended to record common questions that arise out of the dependent manage DataDog dashboards._

## [BGS 686c-674 Dashboard v2](https://vagov.ddog-gov.com/dashboard/75y-zzz-nq9/bgs-686c-674-dashboard-v2?fromUser=false&refresh_mode=sliding&from_ts=1758471435839&to_ts=1761063435839&live=true)
### Why are there two different off-ramping logs -- one for 686c+674 and one for 674+674c?
([source of question](https://dsva.slack.com/archives/C0547Q0K0LF/p1761053403961489))
- One message comes from  the 686 submission call when it submits to manual and one message comes from  the 674 submission call  when it submits to manual. Because they submit separately, we get two individual messages
- Why are the number different?
   -  It's likely that they're different because they got flagged for manual for a different reason
      -  The first thing we do is get its `state_type` which, if it flags for things like report_death, or add_spouse (for certain reasons) or removing a child, it calls `set_to_manual_va_gov`. All of those conditions happen before we check for 674, so if we submitted a dual claim, it gets stamped as manual for one of any number of reasons on the 686 side, and then the 674 gets stamped as manual because it's with a 686

## [Benefits - Dependents 686/674-v2](https://vagov.ddog-gov.com/dashboard/txg-mfx-xha/benefits-dependents-686674-v2?fromUser=false&refresh_mode=paused&from_ts=1751346000000&to_ts=1759294799999&live=false)

### What causes this error:
<img width="1141" height="136" alt="image" src="https://github.com/user-attachments/assets/3c1d33ac-2e28-44c7-9455-a86649a40878" />

- VBA confirmed that this error is caused when the Veteran's profile/account has been flagged for fraud. Despite message saying 'success' at the end, BGS didn't create the claim as this is valid failure.
- Following standard process, VA.gov sends these claims to the backup path via PDF to central mail. [VA.gov asked David Reis](https://dsva.slack.com/archives/C0547Q0K0LF/p1752779043106719): Are these later on rejected during manual processing? Should va.gov parse this error and reject claims all together or could there be a real veteran falling into this 'fraud flag' and we should let system work as is?
   - David Reis: We should let the system function as is.  We do not want to block submissions.  Sometimes that "Fraud Flag" is not used not because the Veteran committed fraud, but perhaps someone else attempted t take action that record that is not the Veteran.
