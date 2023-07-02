# Choose a location - VA Direct Schedule Flow

## Overview
Veterans are asked to choose where they'd like to receive the type of care they selected from a list of facilities where they are registered. 

## User stories

- As a Veteran I want to choose where I will receive care when I schedule an appointment.
- As scheduling staff I want Veteran appointments to be sent to the right facility.

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

**Display facilities**
- Show facilities if:
    - They are associated with a VistA site where the user is registered
    - The site has marked the facility as accepting either requests or direct appointments for the chosen type of care
- If a user only has one facility that supports online scheduling for the chosen type of care, this page will show that facility without radio buttons.

**Sort facilities**
- If multiple facilites are shown and the user has a residential address in VA Profile
  - Show facilities sorted by distance from that address.
  - Users can choose to sort the facilities by how close they are to their current (browser) location instead of residential address.
  - Show the distance to the facility in miles.
    - Calculate the distance as a straight line between the Veteran's residential address or location and the facility address.
    - Facilities that are within 100 miles of the residential address or current location and do not support any online scheduling can be revealed by clicking on the "Why isn't my facility shown?" link below the facilities options. 
- If the user does not have a residential address, show the facilities in alphabetical order.

**Cerner facilities**
- If the user is registered at a Cerner site, facilities in that site are always shown on this page and include a link to the Cerner portal below the radio button
- If a user choose a Cerner facility and clicks Continue, they're sent to the schedule Cerner page

**Check if user is eligible to schedule**
- After a user chooses a facility and clicks continue, VAOS checks if they're eligible to make a request or to direct schedule online. 
    - VAOS tries to put users in the direct schedule path first, and falls back to the request path if direct scheduling is not available
    - If the user is not eligible for either path, they're shown a modal explaining why
- For the direct scheduling path, there are four potential checks:
    1. Does the facility support direct scheduling (set in VATS)?
    2. Does the veteran have a recent enough visit?
        - This is controlled in VATS, and can be set to 12 or 24 months, or disabled
        - This check does not apply for primary care
    3. Are there available VistA clinics for this facility and type of care?
        - For primary care, this entails finding clinics associated with the user's PACT 
    4. Are there available VistA clinics that the user has interacted with in the past 24 months?
        - This is a front end check, done to reduce the confusion around what clinic a user should choose
        - This will effectively override check 2, if that check is set to allow all users through in VATS
- For the request path, there are three potential checks:
    1. Does the facility support requests (set in VATS)
    2. Does the veteran have a recent enough visit
        - This is controlled in VATS, and can be set to 12 or 24 months, or disabled
        - This check does not apply for primary care
    3. Is the user over the request limit for this facility and type of care
        - This is controlled in VATS and can be set to 1 or 2
- If a user can direct schedule, they're sent to the clinic choice page
- If a user can only make a request, they're sent to the request calendar page

## User interface design

[User flow](Add link) 

[Page template](Add link)

[Page content](Add link)

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- Event 1
- Event 2

[All events VAOS tracks](Link TBD)

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->

### Facility doesn't support direct scheduling
<!-- Add a new section for each alert -->

**Alert trigger**

If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to not accept direct scheduling
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to not accept direct scheduling
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [Alert template](Add link)
- [Alert content](Add link)

### Direct scheduling - Veteran doesn't have a recent enough visit
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Direct scheduling - No VistA clinics are available for this type of care
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility has no VistA clinics available for the selected type of care
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility has no VistA clinics available for the selected type of care
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Direct scheduling - VistA clinics available, but user hasn't interacted with them
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Veteran hasn't interacted with any of the facilities available clinics in the past 24 months
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Veteran hasn't interacted with any of the facilities available clinics in the past 24 months
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Facility doesn't support requests
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility doesn't support direct-scheduled appointments or requests
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility doesn't support direct-scheduled appointments or requests
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Requests - Veteran doesn't have a recent enough visit
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Requests - Veteran has reached request limit
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to limit requests
- Veteran more pending requests than limit allows
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to limit requests
- Veteran more pending requests than limit allows
- Veteran hasn't visited within the required timeframe 
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** [Add staging URL]

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

**Endpoints**
`replace-with-endpoint-1`

`replace-with-endpoint-2`

To see the current api responses:
- Navigate to the [vets-api swagger](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/)
- Search for `https://api.va.gov/vaos/v2/apidocs`

<details>
  <summary>Sample response</summary>

```json
[Add sample response]
```

</details>

## Development testing
<!-- Unit tests, API tests -->

### [Call name] call

[How to use the VCR test framework](https://www.rubydoc.info/gems/vcr/VCR)
  
<details>
  <summary><b>VCR cassette</b></summary>

```
[Add VCR cassette]

```
</details>

<details>
  <summary><b>Example test for "[Call name]" that corresponds to the above VCR cassette.</b></summary>

```
[Add example test]
```
</details>
