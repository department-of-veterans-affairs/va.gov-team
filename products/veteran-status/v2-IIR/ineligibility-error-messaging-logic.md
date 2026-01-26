# Ineligibility Error Messaging Logic 

## Overview & Context
Prior to 2025, the Veteran Status Card relied on VA Profile API data plus some custom logic to determine who is eligible for the card or not. That logic can be found in the "Previous Ineligibility Logic - Prior to 2025" section. The mobile app team (and IIR) found that access rates using that logic were at 70% which we considered low.

IIR changed the logic in January 2025 to look at the Veteran Service History & Eligibility API which looks at Title 38 eligibility to determine a Veteran's status. More info on that logic can be found in the "Current Ineligibility Logic - 2025" section. While that logic is technical stricter than only looking at discharge statuses through VA Profile API data, we saw access rates increase to around 80% on web and 96% on mobile (mobile is so much higher due to the sheer volume of traffic and also user demographic - no technical differences).

In April 2025, IIR met with Chris Johnston & Melissa Rebstock and shared that much of the other 20% who can't access the card on web come back as "More Research Required". That can mean a lot of different things but we believe that the majority of those are because of unknown discharge statuses in the database. There are also a very small subset of users who were able to access the card before we changed the logic but can't anymore under Title 38 logic. Two things that came out of this meeting: 1) A decision was made that we should eventually look at both APIs to determine who gets the Veteran Status Card - look at the Lighthouse API first and if it comes back as "not confirmed", look at VA Profile API + custom logic that we had before 2) However, we should change the VA Profile API + custom logic so only folks with "Dishonorable" discharge statuses aren't able to access the card because before it also excluded "Bad Conduct" and "Under other than honorable conditions" from getting the card.

IIR has tickets in our backlog to do this work but it's just a matter of prioritization now. We don't expect access rates to JUMP up if we look at both APIs, but they would likely go up a little. There's no way to tell how much before doing it.

## Future Ineligibility Logic - TBD

#### Summary 

> **Note:** The mobile app has its own consolidated Veteran Status Card endpoint (`GET /mobile/v0/veteran_status_card`) that returns either a VSC payload or an alert payload (including SSC-backed outcomes and messaging). For the latest mobile-specific rules and response behavior, see this [doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/mobile/veteran-status-api-logic.md)

Rather than relying on just the [Veteran Service History & Eligibility API](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current) to determine who gets the Veteran Status Card, we want to do a combination of the Lighthouse API data and the VA Profile API data that was used prior to 2025. 

- First, look at the Veteran Service History & Eligitbility API > /status endpoint. If a user comes back as "Confirmed", give them access to the Veteran Status Card.

- Second, if a user comes back as "Not Confirmed" check their discharge statuses via VA Profile API and if they have at least one discharge status that isn't unknown or isn't dishonorable, give them access to the Veteran Status Card.


## Current Ineligibility Logic - 2025

#### Summary
   
The Veteran Status Card is shown to users who come back as "Confirmed" in the [Veteran Service History & Eligibility API](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current) > /status endpoint. The API follows the Title 38 definition of Veteran. If we receive a "Not Confirmed" response from the endpoint, there are four reasons as to why the users isn't confirmed: ERROR, MORE_RESEARCH_REQUIRED, NOT_TITLE_38, and PERSON_NOT_FOUND. If a user comes back with any of these reasons, we surface various error messages to them.

When we reached out to Lighthouse to ask more questions about how those status and reasons are designated, we were given the SSC table below. Green: users who come back as "Confirmed" Yellow: users who come back as MORE_RESEARCH_REQUIRED Orange: users who come back as NOT_TITLE_38

#### Service Summary Codes (SSC)
<img width="765" height="528" alt="Screenshot 2025-08-07 at 8 49 17 AM" src="https://github.com/user-attachments/assets/1a192895-2517-4d2d-a829-321128fedf0d" />

![Screenshot 2025-06-27 at 1 34 26 PM](https://github.com/user-attachments/assets/da908eb7-970f-4a52-9437-0cfed30b8d95)

<img width="697" height="259" alt="Screenshot 2025-08-07 at 8 49 54 AM" src="https://github.com/user-attachments/assets/0d84463d-042e-4c6b-8f82-71c1e7bf812f" />


## Previous Ineligibility Logic - Prior to 2025

#### Parent Component

At the top level, there is a parent component, `src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx`, that decides whether or not the Veteran Status info is shown. If the call to `/profile/service_history` returns successfully with a `serviceHistory` array, then the `ProofOfVeteranStatus` component can display. The `ProofOfVeteranStatus` component is what displays the user's Veteran status card under the "Proof of Veteran status" header. If that `serviceHistory` array is missing, then the `ProofOfVeteranStatus` component does not display.


#### ProofOfVeteranStatus component

In `src/applications/personalization/profile/components/proof-of-veteran-status/ProofOfVeteranStatus.jsx `there are 3 paths of logic for displaying the Veteran Status card:

1. If `serviceHistory` is not empty _and_ there is an honorable discharge in that service history (eligibilityMap.includes('Y')), then the Veteran status card is presented to the user.

   - Honorable discharges are classified in `src/applications/personalization/profile/components/proof-of-veteran-status/constants.js `which is listed in the “Discharge Code mappings” section below.

   - Can see this outcome when logged in as[ vets.gov.user+127@gmail.com](http://vets.gov.user+127@gmail.com) on staging.

2. If `serviceHistory` is not empty, there is not an honorable discharge (!eligibilityMap.includes('Y')), _and_ there is a discharge that indicates not honorable (eligibilityMap.includes('N')), then the following message is displayed without the Veteran status card: "Our records show that you’re not eligible for a Veteran status card. To get a Veteran status card, you must have received an honorable discharge for at least one period of service."

   - Could not find any test users for this scenario.

3. If `serviceHistory` is empty _or_ there is not an honorable discharge (!eligibilityMap.includes('Y')) _and_ there is not a discharge that indicates not honorable (!eligibilityMap.includes('N')), then the following message is displayed without the Veteran status card: "We’re sorry. There’s a problem with your discharge status records. We can’t provide a Veteran status card for you right now."

   - This message will appear for those with a discharge code mapping indicator of "Z", as listed in the "Discharge Code mappings" section below.

   - See this message when logged in as[ vets.gov.user+1@gmail.com](http://vets.gov.user+1@gmail.com) on staging.




#### Discharge Code mappings

Found this mapping of discharge codes in `src/applications/personalization/profile/components/proof-of-veteran-status/constants.js` that is "used to specify whether or not to display proof of veteran status (only honorable discharge)".

```javascript
{
A: {
name: 'Honorable',
indicator: 'Y',
},
B: {
name: 'Under honorable conditions (general)',
indicator: 'Y',
},
D: {
name: 'Bad conduct',
indicator: 'N',
},
E: {
name: 'Under other than honorable conditions',
indicator: 'N',
},
F: {
name: 'Dishonorable',
indicator: 'N',
},
H: {
name: 'Honorable (Assumed) - GRAS periods only',
indicator: 'Y',
},
J: {
name: 'Honorable for VA purposes',
indicator: 'Y',
},
K: {
name: 'Dishonorable for VA purposes',
indicator: 'N',
},
Y: {
name: 'Uncharacterized',
indicator: 'Z',
},
Z: {
name: 'Unknown',
indicator: 'Z',
},
DVN: {
name: 'DoD provided a NULL or blank value',
indicator: 'Z',
},
DVU: {
name: 'DoD provided a value not in the reference table',
indicator: 'Z',
},
CVI: {
name: 'Value is calculated but created an invalid value',
indicator: 'Z',
},
VNA: {
name: 'Value is not applicable for this record type',
indicator: 'Z',
},
}
```


#### How the unit tests document it

- From `src/applications/personalization/profile/tests/e2e/proof-of-veteran-status/proof-of-veteran-status.cypress.spec.js`:

  - If the `dischargeCode` attribute returns as "DVN"(neutral), "F", or the `serviceHistory` attribute array returns empty from `/v0/profile/service_history`, then "Proof of Veteran status" text _should not_ exist on the page.

- From `src/applications/personalization/profile/components/proof-of-veteran-status/ProofOfVeteranStatus.unit.spec.jsx`:

  - If the `characterOfDischargeCode` attribute returns as "A"(eligible), then "Proof of Veteran status" text _should_ exist on the page.

    - What's the difference between `dischargeCode` and `characterOfDischargeCode`?

      - vets-api does not have any mention of `dischargeCode` . It only has `characterOfDischargeCode` which is returned from calls made to[ https://int.vet360.va.gov/profile-service/profile/v3](https://int.vet360.va.gov/profile-service/profile/v3).

      - vets-website shortens `characterOfDischargeCode` to `dischargeCode` in some tests, but relates to the same `serviceHistory` object containing the `characterOfDischargeCode` attribute returned from the call to `/v0/profile/service_history`.

  - Should render the card if service history contains an eligible discharge despite any other discharges. In this test case, the single user has `characterOfDischargeCodes` "A"(eligible), "D"(ineligible), and "DVN"(neutral) within the same `serviceHistory` object.

  - If the `characterOfDischargeCode` attribute returns as "DVN"(neutral), then "We’re sorry. There’s a problem with your discharge status records." text _should_ display on the page.

  - If the `characterOfDischargeCode` attribute returns with "DVN"(neutral) _and_ no "A"(eligible) records, then "Our records show that you’re not eligible for a Veteran status card." text _should_ display on the page.
