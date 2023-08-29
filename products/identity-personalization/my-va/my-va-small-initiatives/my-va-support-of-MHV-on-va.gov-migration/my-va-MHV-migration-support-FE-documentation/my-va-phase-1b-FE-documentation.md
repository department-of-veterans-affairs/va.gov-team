# My VA Health Care FE documentation: Updates to My VA Health Care in support of MHV on VA.gov Migration Phase 1B

**Last updated:** August 29, 2023 (first published)

This document outlines specs for the "schedule and manage your appointments links", and Cerner messaging within the Health Care section on My VA. These updates were made in support of MHV on VA.gov migration phase 1B. For full documentation on the Health Care section of My VA, see [My VA: Health Care Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases). 

## Appointments Link

### Schedule and manage your appointments link

<img width="474" alt="Screenshot 2023-03-14 at 1 42 37 PM" src="https://user-images.githubusercontent.com/97965610/225092377-f59681f3-bcf2-402d-a76c-7aece775f547.png">

Use font awesome icon `calendar` for icon

**Show**
- For users who have VA health care but do not have any upcoming appointments.

**Positioning**
- This link should appear under the "Go to your inbox" link. 
- The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Schedule and manage your appointments](https://va.gov/my-health/appointments)



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
