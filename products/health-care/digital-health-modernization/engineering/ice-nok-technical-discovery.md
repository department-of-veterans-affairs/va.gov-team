
# Next-of-Kin, Emergency Contact (NOK/EC) Technical Discovery (2023/08)

[UX Discovery Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/af9ba7f1c18ae47de6049323ed218414974336f9/products/health-care/digital-health-modernization/mhv-to-va.gov/Next%20of%20Kin-Emergency-Contact/overview-notes.md) by Jonathon Nelson and Cara Frissell

## 10-10EZ

Currently digitized at https://www.va.gov/health-care/how-to-apply/. However, it does not currently collect NOK/EC details.

- [10-10EZ PDF Form](https://www.va.gov/vaforms/medical/pdf/VA_Form_10-10EZ.pdf)

Relevant 10-10EZ Form Fields:

- 13A. Next of Kin Name
- 13B. Next of Kin Address
- 13C. Next of Kin Relationship
- 13D. Next of Kin Telephone Number
- 14A. Emergency Contact Name
- 14B. Emergency Contact Telephone Number

## 10-10EZR

This form is currently being digitized by #1010-health-apps Team.

- [10-10EZR PDF Form](https://www.va.gov/vaforms/medical/pdf/va%20form%2010-10ezr.pdf)

Relevant 10-10EZR Form Fields:

- 10A. Next of Kin Name
- 10B. Next of Kin Address
- 10C. Next of Kin Relationship
- 10D. Next of Kin Telephone Number
- 11A. Emergency Contact Name
- 11B. Emergency Contact Telephone Number

## Findings from `va.gov-team` repository

> NOK/EC can be handled differently between VBA (Benefits) and VHA (Health). - Simone Gully, EZR Presentation Notes 2023JUL25

> VA Profile is updating Associated Persons records (Emergency Contact/Next of Kin) through our Health Interface with VHA ES - [Mike Richard via Slack 2023JUN05](https://dsva.slack.com/archives/C7TE0PFTL/p1685998262690309?thread_ts=1685977200.921009&cid=C7TE0PFTL)

## Suggestions by Patrick Bateman on vetting current systems

### VA Profile (VAPRO, formerly Vet360)

> Confirm with Mike Richard on the VA Profile team that VA Profile continues to “not be authoritative” for NOK/EC info.

VA Profile is not authoritative. Example: Veteran who hasn't applied for health care visits a VAMC Emergency Room and is asked for NOK/EC contacts. Stated that `vets-api` is already provisioned to update ES via VA Profile's Health API. (via Slack Huddle with Mike Richard 2023AUG21)

Writes to this VA Profile API/Health Benefits endpoint will update ES and Vista. ([via Slack 2023AUG29](https://dsva.slack.com/archives/C0581MN69TJ/p1693342398293599?thread_ts=1692818758.906369&cid=C0581MN69TJ))

Documentation on VA Profile's Sharepoint website makes reference to a Cerner integration. **Q**: Does VA Profile sync NOK/EC data with Cerner?

### Enrollment System (ES)

> Talk with Josh Faulkner, who runs the Enrollment System, about the feasibility of read/writes for just NOK/EC from the Enrollment System via `vets-api`.

VA Profile is doing that already from some other partners; leverage their existing health benefit service would be the quickest way. ([via Slack 2023AUG23](https://dsva.slack.com/archives/C0581MN69TJ/p1692818758906369))

### CHIP

> Understand the write capability of the CHIP API.

The CHIP API was created for patient check-in. This API has the capacity to accept NOK/EC fields in the same API endpoint for checking-in a patient, however it seems that these details are predicated on the Veteran having an upcoming appointment. If the Veteran has no upcoming appointments, can we update NOK/EC details, here? My inclination is that this is not an appropriate avenue for updating NOK/EC details. See, [CHIP OpenAPI Specification](https://raw.githubusercontent.com/department-of-veterans-affairs/chip/master/openapi.yml).

## VA Profile Onboarding

> Understand the level of effort for onboarding to the VA Profile Health API

- ITRP intake request (see Jira Service Desk @ max.gov)
- intake/onboarding/reviews

`vets-api` is already integrated with VA Profile. Does MHV-on-VA.gov, Authenticated Experience, or other VFS teams need to onboard for VA Profile? **A:** It is necessary for teams to onboard when utilizing API endpoints that are not currently being accessed by `vets-api`. (VAPRO/MHV meeting 2023AUG30)

See [vets-api/lib/va_profile](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/va_profile/service.rb) for code interacting with VA Profile.


## VA Profile OpenAPI Documentation

This documentation can be found on VA Profile's Sharepoint website within the VA intranet (CAC/PIV required).

## Vet360 (VA Profile) Service Integration into VA.gov

See, [va.gov-team-sensitive/../service-integration/README.md](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/vet360/service-integration) (2019DEC27)

## Next-of-Kin Help Text (via Check-in Experience Team)

[@department-of-veterans-affairs/vets-website/pull/25409](https://github.com/department-of-veterans-affairs/vets-website/pull/25409)