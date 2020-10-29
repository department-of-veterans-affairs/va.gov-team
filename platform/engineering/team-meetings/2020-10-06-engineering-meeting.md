# VSP & VFS Engineering Meeting

## When & Where

_2020 October 6, 2:30-3:20p ET_

- https://zoom.us/j/93387192601
- Meeting ID: 933 8719 2601
- +16468769923,,93387192601# US (New York)
- +13017158592,,93387192601# US (Germantown)
- Find your local number: https://zoom.us/u/adVwap8E0X

## Recording

- URL: https://zoom.us/rec/share/repSfE41YhMYYZyqJNvYnYsBO5-vWTixSn-aJuxLFva-aLsTY1ZQPFB_l6epoQZL.18hF-EfvkYL1v3uv
- Passphrase: howl claw succint !2

## Agenda

- Greetings
  - [x] Start recording
- Announcements
- Topics
  - Pact Demo (@f1337)
  - Sentry 10 Demo (@krfz)
- Review action items
- Schedule next meeting’s talks
- Goodbye
  - [x] End recording
  - [x] Update notes with [recording](https://zoom.us/recording)
  - [x] Share meeting notes in [#platform-team](https://dsva.slack.com/archives/CJRQ85PQB), [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK), [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1), & [#vfs-engineers](https://dsva.slack.com/archives/C0MQ281DJ)

## Announcements

- None

## Pact Demo

_presented by @f1337_

### Overview

The front end defines the specification, which looks a lot like a RSpec converted to JSON:
https://github.com/department-of-veterans-affairs/vets-website/pull/14212/files#diff-67615f1fcc37263af71accbe505753ac

The back-end hook code (called a "provider state" in Pact parlance) which tells the `pact:verify` spec which endpoints to verify:
https://github.com/department-of-veterans-affairs/vets-api/pull/4933/files#diff-67b1fb821b639c48ee1dcbcfada48bd6

When the front-end specification is run in CI, it pushes a JSON specification to the Broker:
https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Facility%20Locator/latest

The `pact:verify` task in `vets-api` verifies the configured providers against the published Broker specifications, and reports the results to the Broker. This task is run in CI, and can also be run in local development.

## Sentry 10

_presented by @krfz_

### Overview

Sentry 10 is now live in all environments for the following projects:

- vets-api ([platform-api](http://sentry10.vfs.va.gov/organizations/vsp/issues/?project=3))
- vets-website ([platform-web](http://sentry10.vfs.va.gov/organizations/vsp/issues/?project=4))
- gibct-data-service ([platform-gi-bill-data-service](http://sentry10.vfs.va.gov/organizations/vsp/issues/?project=5))
- content-preview ([platform-content-preview](http://sentry10.vfs.va.gov/organizations/vsp/issues/?project=8))

## Action items

- None
