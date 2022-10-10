# My VA Health Care Frontend Documentation

## When to show the ‘Health care’ section
We show this section for every LOA3 user.

## UX Specs

### If a user does not have VA health care
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E6ADDE2C-0D24-484F-A829-CEA239BD56E6)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/2E99F689-11DF-4216-A2AE-6DA7F21A09CC)

#### **Content**

You have no health care information to show.

**Secondary link**
- When a user does not have health care, a secondary link should appear for [Learn how to apply for VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/health-care-FE-documentation.md#learn-how-to-apply-for-va-health-care-link)

**Positioning**
- The text should appear on the lefthand side on desktop, directly under the "Health care" header.
- The secondary link should appear directly below the text, on the lefthand side on desktop.

---

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

[Schedule and manage your appointments](https://va.gov/health-care/schedule-view-va-appointments/appointments)

**Content specs**

- Next appointment: Static text that appears this way for every appointment card
- Date: Date of the soonest appointment in the [appointments tool](https://va.gov/health-care/schedule-view-va-appointments/appointments)
- Time: Time of the soonest appointment in the [appointments tool](https://va.gov/health-care/schedule-view-va-appointments/appointments)
- Location: Location of the soonest appointment in the [appointments tool](https://va.gov/health-care/schedule-view-va-appointments/appointments)

---

### If a user has VA health care but does not have any upcoming appointments scheduled

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ECC10511-998E-4BD9-9D9F-B87E0ADC477B)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E6D7BBA0-BD00-42E1-A445-5C81FBEE0307)

**Show**

- If a user has VA health care but does not have any upcoming appointments scheduled in the [appointments tool](https://va.gov/health-care/schedule-view-va-appointments/appointments).

#### **Content**

You have no upcoming appointments to show.

**Positioning**

- This text should appear on the lefthand side on desktop.
- It should appear directly below the "Health care" header if the user does not have unread messages.
- It should appear directly below the messages notifications if the user does have unread messages.

---

### If a user has unread message(s) from a health care provider(s)

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D3CE5EC9-6925-4086-A1C5-2370E93073CB)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6F32EDF4-2B0A-4277-9963-FB1E45AA0BDD)

**Show**

- If a user has unread messages in the [My HealtheVet secure messaging portal](https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging).

#### **Content**

You have # unread messages. [View your messages](https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging)

**Content specs**

- The notification should contain the number of unread messages that a user has in the [secure messaging portal](https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging).
- If a user has multiple unread messages, the word "messages" should appear as plural.
- If a user has one unread message, the word "message" should appear as singular.

#### Visual specs

- Use the [warning alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--warning) for the messages notification.

**Positioning**
- The unread messages notification should appear under the "Health care" header on the lefthand side on desktop, regardless of any other conditions within the section. If the user also has upcoming appointments, the messages notification should come before the upcoming appointments card.


---

### Learn how to apply for VA health care link

![Screen Shot 2022-10-10 at 2 14 09 PM](https://user-images.githubusercontent.com/97965610/194928816-6af42dfc-2dfd-4726-9572-e9b39ebee4af.png)

Use font awesome icon `file-medical` for icon

**Show**
- For users who do not have health care through VA.

**Positioning**
- This link should appear on the lefthand side on desktop, below text stating that the user does not have health care information to show.

#### Content

[Learn how to apply for VA health care](https://va.gov/health-care/apply/application/introduction)

---

### Send a secure message to your health care team link

![Screen Shot 2022-09-30 at 1 47 18 PM](https://user-images.githubusercontent.com/97965610/193328155-29073239-d536-4672-ad4e-a8922c86c71a.png)

Use font awesome icon `comments` for icon

**Show**
- For users who have VA health care but do not have any unread messages.

**Positioning**
- This link should always appear first in the stack of health care links when it applies. The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Send a secure message to your health care team](https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging)

---

### Schedule and manage your appointments link

![Screen Shot 2022-09-30 at 1 50 51 PM](https://user-images.githubusercontent.com/97965610/193330557-10078363-ce30-4d6d-91db-0c1182ae99c1.png)

Use font awesome icon `calendar-check` for icon

**Show**
- For users who have VA health care but do not have any upcoming appointments.

**Positioning**
- This link should appear under the "Send a secure message to your health care team" link if that applies, or at the top of the stack of health care links if the user has unread messages. The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Schedule and manage your appointments](https://va.gov/health-care/schedule-view-va-appointments/appointments)

---

### Refill and track your prescriptions link

![Screen Shot 2022-09-30 at 1 50 57 PM](https://user-images.githubusercontent.com/97965610/193331635-504abfdc-91c3-45eb-abe1-ecec34b2ad6d.png)

Use font awesome icon `prescription-bottle` for icon

**Show**
- For users who have VA health care.

**Positioning**
- This link should appear under the "Schedule and manage your appointments" link if that applies, or at the top of the stack of health care links if the user has unread messages and appointments. The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Refill and track your prescriptions](https://mhv-syst.myhealth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions)

---

### Request travel reimbursement link

![Screen Shot 2022-09-30 at 1 51 04 PM](https://user-images.githubusercontent.com/97965610/193332543-3f753ce1-5451-46c5-a1e9-5ff14031a8b2.png)

Use font awesome icon `suitcase` for icon

**Show**
- For users who have VA health care.

**Positioning**
- This link should appear under the "Refill and track your prescriptions" link. The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/)

---

### Get your VA medical records and lab and test results link

![Screen Shot 2022-09-30 at 1 51 12 PM](https://user-images.githubusercontent.com/97965610/193333627-9a383f84-4fa7-4b98-8786-4bfb81520483.png)

Use font awesome icon `file-medical` for icon

**Show**
- For users who have VA health care.

**Positioning**
- This link should appear under the "Request travel reimbursement" link. The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Get your VA medical records and lab and test results](https://mhv-syst.myhealth.va.gov/mhv-portal-web/download-my-data)

---

## Error States

### Error State 1: The health care API call fails (can't tell if user has VA health care or not)

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>**We can't access any health care information right now**
>
>We're sorry. Something went wrong on our end. If you get health care through VA, you can go to My HealtheVet to access your health care information.
>[Visit My HealheVet](https://www.myhealth.va.gov/mhv-portal-web/home)

**Positioning**
- This should appear under the 'Health care' header on the lefthand side on desktop.

**Secondary links**
- When this error shows, do not show any other secondary links in the section since we cannot tell if the user has VA health care.

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D44E3932-6985-48FF-AEDA-BC2D85065B04)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D61859AD-13DE-473E-8914-990CED053569)


### Error State 2: The health care appointments API call fails (can't tell if user has appointments scheduled but can tell they have VA health care)

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>**We can't access your appointment information**
>
>We're sorry. Something went wrong on our end and we can’t access your appointment information. Please try again later or go to the appointments tool:
>[Schedule and manage your appointments](https://va.gov/health-care/schedule-view-va-appointments/appointments)

**Positioning**
- This should appear under the 'Health care' header on the lefthand side on desktop.

**Secondary links**
- When this error shows, the following secondary links should appear on the lefthand side on desktop:
  - [Send a secure message to your health care team](https://mhv-syst.myhealth.va.gov/mhv-portal-web/secure-messaging)
  - [Refill and track your prescriptions](https://mhv-syst.myhealth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions)
  - [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/)
  - [Get your VA medical records and lab and test results](https://mhv-syst.myhealth.va.gov/mhv-portal-web/download-my-data)

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/36FD1008-AA20-4E81-BCAF-FFBAE0F4070F)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/v/Krd92n/a/uuid/E9539FDB-7D42-4153-83EF-CC1394FC9C14)
