
# ICE/NOK Technical Discovery (2023/08)

## 10-10EZ

Currently digitized at https://www.va.gov/health-care/how-to-apply/

- [10-10EZ PDF Form](https://www.va.gov/vaforms/medical/pdf/VA_Form_10-10EZ.pdf)

Relevant 10-10EZ Form Fields:

- 13A. Next of Kin Name
- 13B. Next of Kin Address
- 13C. Next of Kin Relationship
- 13D. Next of Kin Telephone Number
- 14A. Emergency Contact Name
- 14B. Emergency Contact Telephone Number

## 10-10EZR

Currently being digitized by #1010-health-apps Team.

- [10-10EZR PDF Form](https://www.va.gov/vaforms/medical/pdf/va%20form%2010-10ezr.pdf)

Relevant 10-10EZR Form Fields:

- 10A. Next of Kin Name
- 10B. Next of Kin Address
- 10C. Next of Kin Relationship
- 10D. Next of Kin Telephone Number
- 11A. Emergency Contact Name
- 11B. Emergency Contact Telephone Number

## vets-website: Check-in Application

As part of the (pre-)check-in process, a Veteran is shown their current ICE/NOK information, and asked to confirm that this information is up-to-date. If not, they are prompted to see a staff member to update their NOK infomration.

- [EmergencyContact.jsx Component](https://github.com/department-of-veterans-affairs/vets-website/blob/8c13c2815ea3e813b1cb78627e2b72331c756105/src/applications/check-in/day-of/pages/EmergencyContact.jsx#L54)
- [NextOfKin.jsx Component](https://github.com/department-of-veterans-affairs/vets-website/blob/8c13c2815ea3e813b1cb78627e2b72331c756105/src/applications/check-in/day-of/pages/NextOfKin.jsx#L53)

## vets-api: Check-in Module

The Check-in Module connects to the [CHIP API](https://github.com/department-of-veterans-affairs/chip) to get demographics/ICE/NOK information. Based on the the CHIP flow chart, the Veteran updates their ICE/NOK information by interacting with a member of staff.

## CHIP API

The CHIP API can use Vetext (as well as VistA) to retrieve a Veteran's demographic information.

- [`src/initiateCheckIn/index.js`](https://github.com/department-of-veterans-affairs/chip/blob/93842e192cc1bfe6b578ddc6bb0e9e715098c476/src/initiateCheckin/index.js#L344)

It appears that the CHIP API v2 has the capability to update demographics/ICE/NOK information in VistA through the `initiate-checkin` function (API path: `/actions/initiate-checkin`).

- [`docs/Initiate-Checkin-Flow.md`](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/Initiate-Checkin-Flow.md#chip-v2x)

Put the CHIP API specification `openapi.yml` into the OpenAPI/Swagger-UI at `https://petstore.swagger.io` to view the generated API documentation.

See [`layers/utilities/nodejs/functionalVistaService.js`](https://github.com/department-of-veterans-affairs/chip/blob/93842e192cc1bfe6b578ddc6bb0e9e715098c476/layers/utilities/nodejs/functionalVistaService.js/#L180-L181) for an example of interacting with the VistA API, retrieving demographics data.

## LoROTA & the Check-in Experience

Read [How Check In Experience uses LoROTA](https://github.com/department-of-veterans-affairs/lorota#how-check-in-experience-uses-lorota)
