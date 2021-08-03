# Variant Test - Sorting Facilities

## Problem / Opportunity

Veterans are more often than not registered at more than one VA facility. It can be confusing for them when they have to select from a list of facilities that they are registered at. The list can be overwhelming and may include facilities they no longer visit to receive care (e.g. moved to another state).

Currently, in the VA request flow, approximately 75% of users who land on the facilities page move to the next step. We want to raise the completion rate on this page and increase the speed at which those who complete the page move on to the next step.

## Hypothesis

We believe that if we provide simpler interactions and clearer language on the facility selection page, veterans will be able to more easily understand their options. This will help them complete the facility selection step more quickly, whether they move on to the next step, or drop-off. This will also help them complete the step successfully slightly more often.

## Analytics

Dashboard: [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/OJY0YEinTf2JR4Gk3HsSUw/a50123418w177519031p176188361/)

Funnel: [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361/edit/Z4cFM5gyQhy65K3s4tymQw)

Average time on page report template: [Google Analytics](https://analytics.google.com/analytics/web/template?uid=wJNRUJodTRW30Z7w567VZg)

### Events

- Variant shown (fired once per form use):

  - `vaos-variant-shown`

- Default sort (fired once per form use):

  - `vaos-variant-default-distanceFromResidentialAddress`

  - `vaos-variant-default-distanceFromCurrentLocation`

  - `vaos-variant-default-alphabetical`

- Sort method changed (fired once per change):

  - `vaos-variant-method-distanceFromResidentialAddress`

  - `vaos-variant-method-distanceFromCurrentLocation`

  - `vaos-variant-method-alphabetical`

- Final sort method (fired once per continue button click):

  - `vaos-variant-final-distanceFromResidentialAddress`

  - `vaos-variant-final-distanceFromCurrentLocation`

  - `vaos-variant-final-alphabetical`


## Test and Results

Start Date: July 28, 2021

End Date:

Number of unique users: 
