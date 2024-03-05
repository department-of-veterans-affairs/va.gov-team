# My VA Health Care FE documentation: Updates to My VA Health Care in support of MHV on VA.gov Migration Phase 1B

**Last updated:** February 15, 2024 (August 29, 2023 (first published))

Updates in support of phase 1B include:
- Updates to the Cerner message
- Update to the "schedule and manage your appointments" url where it exists in three scenarios on My VA in the Health Care section:
    1. next appointment card
    2. secondary link position
    3. within the appointments API error state

For full documentation on the Health Care section of My VA, see [My VA: Health Care Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases). 

## When to show the ‘Health care’ section
We show this section for every LOA3 user.

## UX Specs

### If a user does not have VA health care
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A331&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A763&mode=design&t=CREOF8xG3jKa75nz-1)

#### **Content**

You have no health care information to show.

**Secondary link**
- When a user does not have health care, a secondary link should appear for [Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction)
- See more on the [Apply for VA health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/health-care-FE-documentation.md#apply-for-va-health-care-link)

**Positioning**
- The text should appear on the lefthand side on desktop, directly under the "Health care" header.
- The secondary link should appear directly below the text, on the lefthand side on desktop.

---

### Next appointment card
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A12979&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A12968&mode=design&t=CREOF8xG3jKa75nz-1)

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

---

### If a user has VA health care but does not have any upcoming appointments scheduled

- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A370&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A842&mode=design&t=CREOF8xG3jKa75nz-1)

**Show**

- If a user has VA health care but does not have any upcoming appointments scheduled in the [appointments tool](https://va.gov/my-health/appointments).

#### **Content**

You have no upcoming appointments to show.

**Positioning**

- This text should appear on the lefthand side on desktop.
- It should appear directly below the "Health care" header if the user does not have unread messages.
- It should appear directly below the messages notifications if the user does have unread messages.

---

### If a user receives VA health care at a Cerner facility

- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A468&mode=design&t=CREOF8xG3jKa75nz-1)
- [Desktop - expanded, V1 component](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=93%3A15630&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A918&mode=design&t=CREOF8xG3jKa75nz-1))
- [Mobile - expanded](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=85%3A8697&mode=design&t=CREOF8xG3jKa75nz-1))

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

---

### Apply for VA health care link

![Screen Shot 2022-11-17 at 11 07 54 AM](https://user-images.githubusercontent.com/97965610/202497628-f2f6b3d4-81f3-401e-a5e6-f0f6030bdbd3.png)

Use font awesome icon `file-medical` for icon

**Show**
- For users who do not have health care through VA.

**Positioning**
- This link should appear on the lefthand side on desktop, below text stating that the user does not have health care information to show.

#### Content

[Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction)

---

### Go to your inbox link

With unread messages:
<img width="955" alt="Screenshot 2023-08-23 at 2 13 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/692bd74b-c9c6-4e8e-9a27-1ab2401a3c2b">
[Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A305&mode=design&t=CREOF8xG3jKa75nz-1)

[Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A842&mode=design&t=CREOF8xG3jKa75nz-1)

Without unread messages:
<img width="948" alt="Screenshot 2023-08-23 at 2 30 03 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/07d7cc07-f26a-418e-81fe-8b5fe0d4d119">
[Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A318&mode=design&t=CREOF8xG3jKa75nz-1)

[Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A820&mode=design&t=CREOF8xG3jKa75nz-1)

Use font awesome icon `comments` for icon

**Show link**
- For users who have VA health care.

**Show red indicator dot**
- For users who have **any** unread messages in their [secure messaging portal](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging).
- Red dot visual specs:
  - Size: 10x10 px
  - Color: `secondary-dark` in VA pattern library
    - Hex value: #CD2026
  - Margins and positioning: 20 px to the right of the "Go to your inbox" link text for users who have unread messages. Should be positioned in the middle of the link vertically as shown in the screenshot.

**Accessibility specs** 

[Accessibility annotation](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A483&mode=design&t=CREOF8xG3jKa75nz-1)

- There should be an aria label associated with the inbox link **when there are unread messages**. If there are no unread messages, there does not need to be an additional aria label.
  - When a user has unread messages and therefore the dot shows, the aria label should say "Unread messages." and then read the title of the link after that: "Go to your inbox."
  - [Slack thread for context on this decision](https://dsva.slack.com/archives/C909ZG2BB/p1692732654397699)  

**Positioning**
- The "Go to your inbox" link should always appear first in the stack of health care links. The stack of links appears on the lefthand side on desktop if the user does not upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)

---

### Schedule and manage your appointments link

<img width="474" alt="Screenshot 2023-03-14 at 1 42 37 PM" src="https://user-images.githubusercontent.com/97965610/225092377-f59681f3-bcf2-402d-a76c-7aece775f547.png">

Use font awesome icon `calendar` for icon

**Show**
- For users who have VA health care but do not have any upcoming appointments.

**Positioning**
- This link should appear under the "Send a secure message to your health care team" link if that applies, or at the top of the stack of health care links if the user has unread messages. 
- The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Schedule and manage your appointments](https://va.gov/my-health/appointments)

---

### Refill and track your prescriptions link

![Screen Shot 2022-09-30 at 1 50 57 PM](https://user-images.githubusercontent.com/97965610/193331635-504abfdc-91c3-45eb-abe1-ecec34b2ad6d.png)

Use font awesome icon `prescription-bottle` for icon

**Show**
- For users who have VA health care.

**Positioning**
- This link should appear under the "Schedule and manage your appointments" link if that applies, or at the top of the stack of health care links if the user has unread messages and appointments. The stack of links appears on the lefthand side on desktop if the user does not have any unread messages or upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions)

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

[Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data)

---

## Error States

### Error State 1: The `GET/user/` user call fails (can't tell if user has VA health care or not)

#### Visual specs
- Use the [warning alert component](https://design.va.gov/components/alert#warning-alert) for the error message.
>**We can't access any health care information right now**
>
>We're sorry. Something went wrong on our end. If you get health care through VA, you can go to My HealtheVet to access your health care information.
>[Visit My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home)

**Positioning**
- This should appear under the 'Health care' header on the lefthand side on desktop.

**Interaction specs**
- When a user clicks the [Visit My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home) link, My HealtheVet should open **in a new tab**.

**Secondary links**
- When this error shows, do not show any other secondary links in the section since we cannot tell if the user has VA health care.

#### Mock-ups
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A279&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A809&mode=design&t=CREOF8xG3jKa75nz-1)


### Error State 2: The health care appointments API call fails (can't tell if user has appointments scheduled but can tell they have VA health care)

#### Visual specs
- Use the [warning alert component](https://design.va.gov/components/alert#warning-alert) for the error message.
>**We can't access your appointment information**
>
>We're sorry. Something went wrong on our end and we can’t access your appointment information. Please try again later or go to the appointments tool:
>[Schedule and manage your appointments](https://va.gov/my-health/appointments)

**Positioning**
- This should appear under the 'Health care' header on the lefthand side on desktop.
- If the user has unread messages, then this error appears below the unread messages alert and all secondary links appear on the right on desktop.

**Secondary links**
- When this error shows and the user doesn't have unread messages, the following secondary links should appear on the lefthand side on desktop:
  - [Send a secure message to your health care team](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)
  - [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions)
  - [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/)
  - [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data)

- When this error shows and the user has unread messages, the following secondary links should appear on the righthand side on desktop:
  - [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions)
  - [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/)
  - [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data)

#### Mock-ups
- [Desktop without messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A266&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile without messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A798&mode=design&t=CREOF8xG3jKa75nz-1)
- [Desktop with messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A253&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile with messages](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A787&mode=design&t=CREOF8xG3jKa75nz-1)


### Error State 3: The messaging API call fails

#### Visual specs
- When the messaging API call fails, we do not show an error message - we show the [Send a secure message to your heath care team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/health-care-FE-documentation.md#send-a-secure-message-to-your-health-care-team-link) link in the list of links in the health care section.
- Follow all other specs for when this secondary link shows.

#### Mock-ups
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A318&mode=design&t=DRUP9FFJ0OjiE9PN-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A853&mode=design&t=DRUP9FFJ0OjiE9PN-1)
