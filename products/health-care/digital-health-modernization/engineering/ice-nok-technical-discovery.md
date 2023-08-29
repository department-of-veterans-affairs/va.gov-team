
# ICE/NOK Technical Discovery (2023/08)

## 10-10EZ

Currently digitized at https://www.va.gov/health-care/how-to-apply/. However, it does not currently collect ICE/NOK details.

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

## Notes

> ICE/NOK can be handled differently between VBA (Benefits) and VHA (Health). - Simone Gully, EZR Presentation Notes (2023JUL25)

> VA Profile is updating Associated Persons records (Emergency Contact/Next of Kin) through our Health Interface with VHA ES - [Mike Richard via Slack (2023JUN05)](https://dsva.slack.com/archives/C7TE0PFTL/p1685998262690309?thread_ts=1685977200.921009&cid=C7TE0PFTL)

## Suggestions from Patrick Bateman on vetting current systems

- **Q:** Confirm with Mike Richard on the VA Profile team that VA Profile continues to “not be authoritative” for EC/NOK info. "Based on a conversation you had a few months back, you stated that the VA Profile API is not authoritative for EC/NOK data. I'm curious if this is still the case, and if you happen to know which system or API is authoritative for this data."
  * **A:**: VA Profile is not authoritative. Example: Veteran who hasn't applied for health care visits a VAMC Emergency Room and is asked for NOK/ICE contacts. Stated that vets-api is already provisioned to update ES via VA Profile's Health API. (via Slack Huddle with Mike Richard (2023AUG21))

- **Q:** Talk with Josh Faulkner, who runs the Enrollment System, about the feasibility of read/writes for just EC/NOK from the Enrollment System via vets-api. "What is the feasibility of reading/writing just NOK/EC data in the Enrollment System from vets-api?"
  * **A:** VA Profile is doing that already from some other partners; leverage their existing health benefit service would be the quickest way. ([via Slack (2023AUG23)](https://dsva.slack.com/archives/C0581MN69TJ/p1692818758906369))
  * **A:** Changes to NOK/EC made through the VA Profile Health Benefits service would be reflected in Vista. [via Slack (2023AUG23)](https://dsva.slack.com/archives/C0581MN69TJ/p1693342398293599?thread_ts=1692818758.906369&cid=C0581MN69TJ)

- **Q:** Understand the write capability of the CHIP API.
  * **A:** The CHIP API was created for patient check-in. This API has the capacity to accept NOK/ICE fields in the same API endpoint for checking-in a patient, however it seems that these details are predicated on the Veteran having an upcoming appointment. If the Veteran has no upcoming appointments, can we update NOK/ICE details, here? My inclination is that this is not an appropriate avenue for updating ICE/NOK details. [CHIP OpenAPI Specification](https://raw.githubusercontent.com/department-of-veterans-affairs/chip/master/openapi.yml)

- **Q:** Understand the level of effort for onboarding to the VA Profile Health API
  * **A:**: Is vets-api already provisioned for VA Profile API? Writes to this VA Profile API/Health Benefits endpoint will update ES, Vista, and (possibly) Cerner.

### What will it take to get onboarded to VA Profile Health API?

- ITRP intake request (see Jira Service Desk @ max.gov)
- intake/onboarding/reviews
- Mike Richard states vets-api is already provisioned for VA Profile Health API, so this step may not be necessary.

**Q:** Does MHV-on-VA.gov and/or Authenticated Experience teams need to onboard for VA Profile?

See [vets-api/lib/va_profile](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/va_profile/service.rb) for code interacting with VA Profile.
