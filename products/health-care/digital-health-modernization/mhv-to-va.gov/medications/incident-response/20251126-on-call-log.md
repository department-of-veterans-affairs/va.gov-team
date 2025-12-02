# MHV Medications | On-call Log

On-call: Richard Davis
Schedule: 20251120 11 AM EST through 20251127 11AM EST (Thursday to Thursday)
Previous week: Ian Seabock
Next week: Chris Donelson

[PagerDuty | On Call Schedules](https://ecc.pagerduty.com/schedules-new)

## Incidents/Outages

- 20251123 8:23 AM - 9:14 AM EST -- [ROES/DALC upstream service returns 499, 503, 504 response codes][datadog-roes-outage-log]
  - Michael S. [informs us][ms-teams--roes-maintenance-window-schedule] the ROES/DALC has a regular maintenance window Sundays 12AM - 8AM MST.
  - [x] Set the channel topic in [#va-cto-supply-reordering-alerts][slack--va-cto-supply-reordering-alerts] with the ROES/DALC maintenance schedule.
  - [x] Created a new [PagerDuty Maintenance Window](https://ecc.pagerduty.com/service-directory/PCSLIAU) for this upcoming Sunday, scheduled for 20251130 0201 through 20251130 1000 EST.
  - [ ] ⟳ **Reoccuring task**: Set a [PagerDuty Maintenace Window for the MDOT service][pager-duty--mdot-service] for the upcoming Sunday.

- 20251127 1:42 PM EST - 2:01 PM [#mhv-medications-alerts-issues](https://dsva.slack.com/archives/C068231MD6V/p1764182561435399) -- 6% of requests return HTTP status 500.
  - The fwdproxy went down due to a bad certificate being deployed. [A fix](https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/pull/804) was quickly merged and deployed, resolving the issue.
  - [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1/p1764183325606349)
  - [vsp-platform-fwdproxy](https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy#readme)

- **Shai-Hulud NPM Worm** -- An active software supply chain exploit that is replicating through CI/CD pipelines.
  - 20250917 [#platform-security](https://dsva.slack.com/archives/C01CJV0L9PS/p1758130039843059) -- **Are we tracking this?** -- Trevor B.
  - 20250924 [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1/p1758748859201529?thread_ts=1758748110.602929&cid=CBU0KDSB1)
  - 20250924 [#platform-cop-frontend](https://dsva.slack.com/archives/C04868KS69L/p1758748927228159)
  - 20251124 [#platform-security](https://dsva.slack.com/archives/C01CJV0L9PS/p1764019450597639)
  - 20251125 [#cds-devops-alerts](https://dsva.slack.com/archives/C06H6PD01A5/p1764117531994859) -- **first sign of compromise**
  - 20251126 [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK/p1764182477856349) -- **What you should do** -- Bill C., OCTO Director of Engineering & Shane E.
    - Rotate all secrets, ssh keys. (e.g. -- Login to github, invalidate all ssh keys, authentication tokens)
    - Refrain from building code until you check your system [with an approved tool](https://github.com/Cobenian/shai-hulud-detect).
  - Search 'shai-hulud' in [DSVA Slack](https://app.slack.com/client/T03FECE8V/search) for more information.

[datadog-roes-outage-log]: https://vagov.ddog-gov.com/logs?query=mdot%20-status%3A%28info%20OR%20ok%29&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&messageDisplay=inline&refresh_mode=paused&storage=hot&stream_sort=time%2Casc&viz=stream&from_ts=1763902800000&to_ts=1763906400000&live=false
[ms-teams--roes-maintenance-window-schedule]: https://teams.microsoft.com/l/message/19:f0db76db670d4a93881bc64945aacd05@thread.v2/1764018253826?context=%7B%22contextType%22%3A%22chat%22%7D
[slack--va-cto-supply-reordering-alerts]: https://dsva.slack.com/archives/C07BSFDCK2B
[pager-duty--mdot-service]: https://ecc.pagerduty.com/service-directory/PCSLIAU
