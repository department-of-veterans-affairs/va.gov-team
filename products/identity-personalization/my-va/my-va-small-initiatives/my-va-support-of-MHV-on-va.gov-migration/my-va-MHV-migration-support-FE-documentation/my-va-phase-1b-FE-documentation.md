# My VA Health Care FE documentation: Updates to My VA Health Care in support of MHV on VA.gov Migration Phase 1B

**Last updated:** August 29, 2023 (first published)

This document outlines specs for the "schedule and manage your appointments" links (url update in three locations: next appointment card, secondary link position, link with error state), and Cerner messaging within the Health Care section on My VA. These updates were made in support of MHV on VA.gov migration phase 1B. For full documentation on the Health Care section of My VA, see [My VA: Health Care Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases). 

----
## Schedule and Manage your Appointments Link (three locations)

### Next appointment card
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

**Show card**

- If a user has VA health care and has an upcoming appointment scheduled, no matter how far in the future it is.

**Do NOT show card**

- If a user does not have any future appointments scheduled.

**If a user has multiple future appointments scheduled**

- Only show a card for the closest appointment to today's date.

#### **Content**

Next appointment

Date

Time

Location

[Schedule and manage your appointments](https://va.gov/my-health/appointments)

**Content specs**

- Next appointment: Static text that appears this way for every appointment card
- Date: Date of the soonest appointment in the [appointments tool](https://va.gov/my-health/appointments)
- Time: Time of the soonest appointment in the [appointments tool](https://va.gov/my-health/appointments)
- Location: Location of the soonest appointment in the [appointments tool](https://va.gov/my-health/appointments)


### Schedule and manage your appointments secondary link

<img width="474" alt="Screenshot 2023-03-14 at 1 42 37 PM" src="https://user-images.githubusercontent.com/97965610/225092377-f59681f3-bcf2-402d-a76c-7aece775f547.png">

Use font awesome icon `calendar` for icon

**Show**
- For users who have VA health care but do not have any upcoming appointments.

**Positioning**
- This link should appear under the "Go to your inbox" link. 
- The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Schedule and manage your appointments](https://va.gov/my-health/appointments)


### Error State 2: The health care appointments API call fails (can't tell if user has appointments scheduled but can tell they have VA health care)

#### Visual specs
- Use the [warning alert component](https://design.va.gov/components/alert#warning-alert) for the error message.
>**We can't access your appointment information**
>
>We're sorry. Something went wrong on our end and we can’t access your appointment information. Please try again later or go to the appointments tool:
>[Schedule and manage your appointments](https://va.gov/my-health/appointments)

**Positioning**
- This should appear under the 'Health care' header on the lefthand side on desktop.

**Secondary links**
- When this error shows the following secondary links should appear on the lefthand side on desktop:
  - [Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)
  - [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions)
  - [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/)
  - [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data)


#### Mock-ups
- [Desktop without messages](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/36FD1008-AA20-4E81-BCAF-FFBAE0F4070F)
- [Mobile without messages](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1Yjlkj)
- [Desktop with messages](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C19F6AA0-62CE-4F92-89BD-65680DE67F60)
- [Mobile with messages](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/0C2845E1-A9E9-412C-B653-11B292A822A0)



## Cerner 
### If a user receives VA health care at a Cerner facility

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ADCF0E10-E520-4E53-AA3A-70B27D06AD46)
- [Desktop - expanded](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/Ryd9gKQ)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B86A600B-1B19-4128-854C-299A3A7AAD07)
- [Mobile - expanded](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/L4PYeML)

**Show**

- If we detect that a user receives VA health care services from a Cerner facility via the [Drupal integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for).

**Do not show**

- If we detect that a user does not receive VA health care services from any Cerner facility via the [Drupal integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for).

#### **Content**

**Choose the right health portal**

To manage your health care at these facilities, go to My VA  Health:
- (**Health care facility name**)
- (**Health care facility name**)

[Go to My VA Health](https://patientportal.myhealth.va.gov/clear-session?to=https%3A%2F%2Fstaging-patientportal.myhealth.va.gov%3Fauthenticated%3Dtrue)

Having trouble opening My VA Health?

*Expanded content:* 

Try these steps:
- Disable your browser's pop-up blocker
- Sign in to My VA Health with the same account you used to sign in to VA.gov

For **any other facility, go to My HealtheVet.**

[Go to My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home)

**Content specs**

- The health care facility names should use the Drupal integration to show only the names of facilities that a user receives VA health care at that are Cerner facilities. **This content is dynamic.**

#### Visual specs

- Use the [warning alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--warning) for the Cerner alert.
- Use the [additional info](https://design.va.gov/components/additional-info) component for the dropdown that says "Having trouble opening My VA Health?"
- Use the [secondary action link](https://design.va.gov/components/link/action#secondary) for the "Go to My VA Health" and "Go to My HealtheVet" CTA links.

**Positioning**
- This alert should appear directly below the health care header and nothing else should be shown in the section besides this alert.
