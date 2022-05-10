# Bad Address Indicator Front-End Documentation

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator)

An initial email blast will go out to Veterans with flagged addresses. Following this, an event-triggered email will go out to Veterans with any newly flagged emails. This email will be accompanied by alerts on the Personal information page and Contact information page. 

- [Personal information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#personal-information-page-alert)
- [Contact information main alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#contact-information-page-main-alert)
- [Contact information in-line alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#contact-information-page-in-line-alert)
- [Email content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#email)

Sketch Mockups (high-fidelity): [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/eKeeAl0) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/wLqqgOp) _Note: Mockups begin with Personal information alert. View Contact information alert and states by arrowing right._

--------

## Personal information page Alert

- In-line warning alert above H1 heading. Check in with Josh on proper implementation when adding above H1. Per his instructions - something might need to be done to the code here to make it ok that it is above H1.
- Appears immediately upon logging into Profile. 

- High-Fi Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/eKeeAl0) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/EPqp12/a/wLqqgOp/r/O8adb4)

#### Heading (H2):
- Review your mailing address

#### Body: 
- The mailing address we have on file for you may not be correct. 

#### Link:
- Go to your contact information to review your address

<img width="663" alt="Screen Shot 2022-05-06 at 11 12 04 AM" src="https://user-images.githubusercontent.com/79372956/167194602-bf7c8d58-96fd-4b7c-9007-bd23997d0405.png">


--------

## Contact information page main alert

- Main alert at top of page, immediately below H1 Contact information. 
- Appears immediately upon arriving on Contact info page.
- Jump link takes user to Mailing address field. Ask accessibility where focus should go.

- Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/9P11OE7) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/EPqp12/a/qe11qZk)

#### Heading (H2):

- Review your mailing address

#### Body:

- The address we have on file for you may not be correct. To change or confirm your address, select **Edit**. Once you've changed your address, or if it's already correct, select **Update** to confirm.

	_Note: Edit and Update are **bold**._

#### Jump Link:

- Review your mailing address

<img width="664" alt="Screen Shot 2022-05-06 at 11 11 06 AM" src="https://user-images.githubusercontent.com/79372956/167194327-040ed284-7e4a-4b1d-bbee-a7eebb9e7dce.png">

--------

## Contact information page in-line alert
- Appears within Mailing address field directly below hint text.
- Appears immediately upon arriving on Contact info page.

- Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/9P11OE7) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/EPqp12/a/qe11qZk)

### Read-only state with warning

#### Text
- Review your address.

<img width="660" alt="Screen Shot 2022-05-06 at 11 07 59 AM" src="https://user-images.githubusercontent.com/79372956/167193911-ddb4eb93-0b5b-4220-ad2e-7ae176b05717.png">



### Edit state with warning
- Warning alert remains in Mailing address field below hint text.

- Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/25aaz55) & [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/L0mmL3d)

<img width="657" alt="Screen Shot 2022-05-06 at 11 25 48 AM" src="https://user-images.githubusercontent.com/79372956/167196778-89ed23f2-1863-4a5c-9886-ce9052881273.png">



### Error  
- Yellow warning alert disappears. Red error alert appears above Update/Cancel buttons.

- Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/MyDD9ym) & [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/7yoov38)

<img width="656" alt="Screen Shot 2022-05-06 at 11 26 09 AM" src="https://user-images.githubusercontent.com/79372956/167196745-4ccff6ae-11ad-4032-8194-24b79f42d8aa.png">



### Success
- Screen returns to read-only state. Green success alert appears above Update/Cancel buttons

- Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/bgJJkgO) & [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/ygEE2DA)

<img width="655" alt="Screen Shot 2022-05-06 at 11 26 25 AM" src="https://user-images.githubusercontent.com/79372956/167196811-92aa2cd4-e7f4-4f77-81e5-232bcd19a17a.png">


--------

## Email

This initial email template will be sent out through VA Notify to alert Veterans that their email address has been flagged as invalid and needs reviewing.

- **Initial email blast** - Initially, the email will be sent out at once to all Veterans with addresses that are currently flagged as invalid. 
- **Event triggered emails** - Following the initial email blast, the email will be sent out to Veterans with newly flagged addresses - on a daily or weekly basis. Sent out when new addresses are flagged as bad addresses - whenever a new bad address is added.
- **Copy:**

### Confirm your address on file with VA

Dear ((First Name)) ((Last Name)),

We recently sent you mail that the U.S. Postal Service couldn't deliver and returned to the VA. Please log in to VA.gov to update your address information, or confirm that your current address is correct.

#### What you need to do now

To change your address, sign in to your VA.gov profile at: http://va.gov/profile/contact-information. Then choose Edit to change your address.

If your address is correct, you can also confirm it from your profile.

#### How we use the address in your VA.gov profile

We use this address to send you information about these VA benefits and services:

- VA health care (including prescriptions, appointment reminders, lab and test results, and communications from your VA medical center)

- Disability compensation

- Pension benefits

- Claims and appeals

- Veteran Readiness and Employment (VR&E)

Do you need to change your address for other VA benefits and services too? Find out how to change your address for different benefits and services here: https://www.va.gov/resources/change-your-address-on-file-with-va/.

_Screenshot:_


