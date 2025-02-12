# Ineligibility Error Messaging Logic 

Current Behavior for Web Experience as of 8/28/2024

[SPIKE] Document Error/Ineligibility Messaging Logic: [973](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/973)

Goal: As an engineer, I want to know when certain error messages should appear for users accessing their Vet Status Card online, so that I can implement that same logic for the mobile app.


### Parent Component

At the top level, there is a parent component, `src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx`, that decides whether or not the Veteran Status info is shown. If the call to `/profile/service_history` returns successfully with a `serviceHistory` array, then the `ProofOfVeteranStatus` component can display. The `ProofOfVeteranStatus` component is what displays the user's Veteran status card under the "Proof of Veteran status" header. If that `serviceHistory` array is missing, then the `ProofOfVeteranStatus` component does not display.


### ProofOfVeteranStatus component

In `src/applications/personalization/profile/components/proof-of-veteran-status/ProofOfVeteranStatus.jsx `there are 3 paths of logic for displaying the Veteran Status card:

1. If `serviceHistory` is not empty _and_ there is an honorable discharge in that service history (eligibilityMap.includes('Y')), then the Veteran status card is presented to the user.

   - Honorable discharges are classified in `src/applications/personalization/profile/components/proof-of-veteran-status/constants.js `which is listed in the “Discharge Code mappings” section below.

   - Can see this outcome when logged in as[ vets.gov.user+127@gmail.com](http://vets.gov.user+127@gmail.com) on staging.

2. If `serviceHistory` is not empty, there is not an honorable discharge (!eligibilityMap.includes('Y')), _and_ there is a discharge that indicates not honorable (eligibilityMap.includes('N')), then the following message is displayed without the Veteran status card: "Our records show that you’re not eligible for a Veteran status card. To get a Veteran status card, you must have received an honorable discharge for at least one period of service."

   - Could not find any test users for this scenario.

3. If `serviceHistory` is empty _or_ there is not an honorable discharge (!eligibilityMap.includes('Y')) _and_ there is not a discharge that indicates not honorable (!eligibilityMap.includes('N')), then the following message is displayed without the Veteran status card: "We’re sorry. There’s a problem with your discharge status records. We can’t provide a Veteran status card for you right now."

   - This message will appear for those with a discharge code mapping indicator of "Z", as listed in the "Discharge Code mappings" section below.

   - See this message when logged in as[ vets.gov.user+1@gmail.com](http://vets.gov.user+1@gmail.com) on staging.




### Discharge Code mappings

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




### How the unit tests document it

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
