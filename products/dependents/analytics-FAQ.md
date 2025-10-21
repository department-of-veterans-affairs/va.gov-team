# Analytics FAQs
_This file is intended to record common questions that arise out of the dependent manage DataDog dashboards._

### Why are there two different off-ramping logs -- one for 686c+674 and one for 674+674c on [this dashboard](https://vagov.ddog-gov.com/dashboard/75y-zzz-nq9/bgs-686c-674-dashboard-v2?fromUser=false&refresh_mode=sliding&from_ts=1758471435839&to_ts=1761063435839&live=true)?
([source of question](https://dsva.slack.com/archives/C0547Q0K0LF/p1761053403961489))
- One message comes from  the 686 submission call when it submits to manual and one message comes from  the 674 submission call  when it submits to manual. Because they submit separately, we get two individual messages
- Why are the number different?
   -  It's likely that they're different because they got flagged for manual for a different reason
      -  The first thing we do is get its `state_type` which, if it flags for things like report_death, or add_spouse (for certain reasons) or removing a child, it calls `set_to_manual_va_gov`. All of those conditions happen before we check for 674, so if we submitted a dual claim, it gets stamped as manual for one of any number of reasons on the 686 side, and then the 674 gets stamped as manual because it's with a 686
