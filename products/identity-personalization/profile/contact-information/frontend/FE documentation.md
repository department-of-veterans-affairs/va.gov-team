# Bad Address Indicator Front-End Documentation


An initial email blast will go out to Veterans with flagged addresses. Following this, an even-triggered email will go out to Veterans with any newly flagged emails. This email will be accompanied by alerts on the Personal information page and Contact information page.

- [Personal information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md)
- [Contact information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md)
- [Confirmation modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md)
- [Email content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#email)

Sketch Mockups (low to mid fi): [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/3OMD28m) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/WK0EMb0)

## Personal information page Alert

- In-line warning alert above H1 heading. 
- Appears immediately upon logging into Profile. 

- Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/3OMD28m) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/WK0EMb0)

### Heading (H2):
- Please update your mailing address

### Body: 
- We believe the mailing address we have on file for you may no longer be valid.

### Link:
- Review and edit your address

<img width="673" alt="Screen Shot 2022-03-15 at 9 39 48 AM" src="https://user-images.githubusercontent.com/79372956/159099448-e7184863-5987-45b9-bab9-2c441803c545.png">

## Contact information page

- In-line warning alert in mailing address field, above “Mailing.” 
- Appears immediately upon arriving on Contact info page.

- Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/v8nO2w3) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/bgnMrQ5)

### Heading (H2):
Please update your mailing address

### Body:
We believe the address we have on file for you may no longer be valid.
Review and edit your mailing address below.
If the address listed is correct, confirm it here.

### Button:
Confirm my address

<img width="633" alt="Screen Shot 2022-03-15 at 9 40 03 AM" src="https://user-images.githubusercontent.com/79372956/159099570-263bbd2e-c395-4c01-aaa8-e7d3bf605f7f.png">

## Confirmation Modal

- There exists the possibility that a Veteran's mailing address could be flagged in error in the event of a USPS mistake (sent to wrong address), clerical error, or a scenario where a Veteran moves into/out of/back into the same location where the address is invalid for a short time, but later becomes valid (ex - lived with parents, moved out, moved back in). Using a modal, the UI also provides affordance for Veterans to confirm a flagged address is valid without actually making any changes to the address on file.

- Appears after selecting "Confirm my address" in the Contact information alert

- Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/Jndjrgk) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/4anlvKD)

### Heading (H2):
Confirm your mailing address

### Body:
Confirm that you want us to use this mailing address. Or, cancel to go back and edit it.

### Button:
Use this address

<img width="701" alt="Screen Shot 2022-03-15 at 2 04 19 PM" src="https://user-images.githubusercontent.com/79372956/159099546-5651d2a8-bfea-4bfb-8721-0109890eef41.png">

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


