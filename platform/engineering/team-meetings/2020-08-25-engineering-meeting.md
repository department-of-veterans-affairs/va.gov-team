# VSP & VFS Engineering Meeting

_2020 August 25, 2:30-3:20p ET_

- https://zoom.us/j/93387192601
- Meeting ID: 933 8719 2601
- +16468769923,,93387192601# US (New York)
- +13017158592,,93387192601# US (Germantown)
- Find your local number: https://zoom.us/u/adVwap8E0X

## Agenda

- Greetings
- Start recording
- Announcements
- Demo: Save In-Progress
- Talk: Grafana
- Review action items
- Schedule next meeting’s talks
- End recording

## Announcements

- @johnpaulashenfelter is leaving for startup land
- Sept 4, @gunsch is hosting a web security presentation

## Demo: Save In-Progress

_presented by @Mottie_

### Problem statement

Filling out forms is a pain, especially for testing.

### What it does

- Allows us to stop & later resume multi-step forms at any step.
- URL slugs turn the feature on and off `#dev-on` and `#dev-off`
- Pre-filled form data is available for all the forms

### Q&A

- Q: is this just for testing? is this veteran-facing?
- A: it's only available on staging & local development

- Q: where does the example data come from?
- A: not sure we clearly answered this question?

- Q: could we start using the #hash-mode to turn on developer mode for other features?
- A: yes

- Q: does this need to be enabled per-form?
- A: it's enabled for all forms that use the forms library


## Demo: Grafana

_presented by @krfz_

### Overview

- we're using Grafana for VSP+VFS observability
- recently upgraded, shiny new features, UI improvements, perf improvements

### Q&A

- Q: how do we do annotations?
- A: click on the graph, and add annotation via the UI. there's also an API.

- Q: how do we do alerts?
- A: create a query, then add an alert for it

- Q: could we use this to track usage of the camel case header, ala source-app-name?
- A: will continue discussion offline. in revproxy, some lua code.

- Q: how did you define total on the legend?
- A: summing the increase of requests per interval

## Notes


## Action items

- [x] @f1337: Add announcements to future agendas
- [x] @f1337: Look into Github team discussions
- [ ] @omgitsbillryan @krfz: Look into getting @saneshark an alpha account to Sentry 10
- [ ] @f1337: Find a collaborative voting tool for topic suggestions

## Topics for next time

- Please respond to the [Platform Satisfaction Survey](https://dsva.slack.com/archives/CE4304QPK/p1598547094042800) ([direct link](https://ows.io/qs/01s2dd7l))
- Intro to PACT: @LindseySaari & @U-DON
- Intro to Sentry 10 (@krfz)

## Future Topic Suggestions

- Alerting & notifications (suggested by @annaswims)
- Sentry 10 API tinker workshop (suggested by @saneshark)
- Error handling in external services & i18n (suggested by @annaswims)
- Caching: models in Redis vs rails cache (suggested by @annaswims)
