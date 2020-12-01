---
tags: 2020, October, VFS, VSP
---

# VSP & VFS Engineering Meeting

[![hackmd-github-sync-badge](https://hackmd.io/5_ITf74TRK6c-zAMnEs1WQ/badge)](https://hackmd.io/5_ITf74TRK6c-zAMnEs1WQ)


_2020 October 20, 2:30-3:20p ET_

- https://zoom.us/j/93387192601
- Meeting ID: 933 8719 2601
- +16468769923,,93387192601# US (New York)
- +13017158592,,93387192601# US (Germantown)
- Find your local number: https://zoom.us/u/adVwap8E0X

## Recording

- URL: https://zoom.us/rec/share/MzMs2JmotUAiBk4tiVsn0XKcdfPVh60UfOiwdvHiSiWPHgf0rSPrhqBZg2yZLQ_C.ZsVcHjyrgjYeRN1y
- Passphrase: greet9public@cursive

## Agenda

- Greetings
  - [x] OK to record?
- Announcements
- Topics
  - Loki (@pnwstevan)
  - Forms library decoupling (_@cvalarida_)
- Review action items
- Schedule next meeting’s talks
- Goodbye
  - [x] End recording
  - [x] Update notes with [recording](https://zoom.us/recording)
  - [x] Share meeting notes in [#platform-team](https://dsva.slack.com/archives/CJRQ85PQB), [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK), [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1), & [#vfs-engineers](https://dsva.slack.com/archives/C0MQ281DJ)

## Announcements

None.

## Loki

_presented by @pnwstevan_

### Overview

Full text logging & structured querying tool from the folks who made Grafana & Prometheus.

Use Cases
- Proactive detection of problems
- Reactive response to problems
- Auditing & compliance (ATO, etc)

Status
- Up and running in dev env today
- Standing up in staging currently
- 

Highlights
- Stevan wrote a Lamba script which scrapes cloudwatch data into Loki via promtail.
- [VFS Confluence documentation](https://vfs.atlassian.net/wiki/spaces/VI/pages/619119010/Loki+-+Centralized+Logging+in+VSP)
- A separate Loki for each environment: production, staging, etc.
- Can create alerts from a Grafana query.

### Q&A

- Does Grafana/Loki provide something similar to ELK's ability to explore anomalies and root causes?
    - Stevan plans to ask at an upcoming conference.

## Forms library decoupling

_presented by @cvalarida_

### Overview

Removing a single import reduced build-time memory usage by .6GB (25%), reduced build size by 50%, and reduced build time 25-40%. Production vets-website build was reduced by ~3.5m

### Q&A

## Action Items

None.
