# Frontend e2e Test Audit
_Results of audit conducted in Sprint 9 (4/26/23 - 5/10/23)_

Based on test cases in the va.gov-team-sensitive repo and FE documentation

---

## Table of contents

<!-- TOC -->

  - [LOA1 user dashboard](#loa1-user-dashboard)
  - [LOA3 user dashboard](#loa3-user-dashboard)
    - [⚠️ Error states](#-error-states)
  - [Nametag](#nametag)
    - [⚠️ Error states](#-error-states)
  - [Onsite notifications](#onsite-notifications)
    - [⚠️ Error states](#-error-states)
  - [Claims and appeals](#claims-and-appeals)
    - [⚠️ Error states](#-error-states)
  - [Health care](#health-care)
    - [Appointments](#appointments)
    - [Messaging](#messaging)
    - [Combinations](#combinations)
    - [⚠️ Error states](#-error-states)
  - [Outstanding debts](#outstanding-debts)
    - [⚠️ Error states](#-error-states)
  - [Benefit payments](#benefit-payments)
    - [⚠️ Error states](#-error-states)
  - [Education and training](#education-and-training)
  - [Benefit application drafts](#benefit-application-drafts)
    - [⚠️ Error states](#-error-states)
  - [My VA redirect from homepage only](#my-va-redirect-from-homepage-only)

<!-- /TOC -->

---

### LOA1 user dashboard
- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/loa1_design.md)
- [My VA copy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/my-va-copy.md)


| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User signs in and is only LOA1 | Show prompt (warning alert) with headline "Verify your identity...", body copy "We need to make sure you're you...", CTA button [Verify your identity](), and "Apply for VA benefits" section below. Do not show Outstanding debts and Benefit payments sections. | yes, but needs update for outdated `viewport` method. | 1111 |

---

### LOA3 user dashboard

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User signs in and is LOA3 | Show all sections whether they are empty or not: Claims and appeals, Health care, Outstanding debts, Benefit payments, Education and training, Benefit application drafts | yes, but needs to include more axeCheck calls and update for outdated `viewport` method. I think we can also remove any Nametag tests into its own file. | 1111 |

#### ⚠️ Error states

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/full-page-error-FE-documentation.md)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| ⚠️ User gets `GET /user/` API error | Entire My VA page should show an error | yes, but needs to be updated to match updated specs and copy | 1111 |

---

### Nametag

- [Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)
- [Figma file (all scenarios)](https://www.figma.com/file/takD53OoltCjdlmGBwK3DH/Sketch-Archive---Authenticated-Experience?type=design&node-id=1-3754&mode=design)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#nametag) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User is LOA1 | Do not show Nametag | yes | |
| User is LOA3 | Show Nametag | yes | |
| User has disability rating and branch of service | Show Nametag with name, branch of service, and "[Your disability rating: x% service connected](https://www.va.gov/disability/view-disability-rating/rating)" | yes, but need to include intersections of disability w branch | 1111 |
| User has no disability rating but has branch of service | Show Nametag with name and branch of service | yes, but need to include intersections of disability w branch | 1111 |
| _User has disability rating but no branch of service_ | _does having a branch of service imply user also has disability rating?_ | tbd | 1111 |
| User has no branch of service | Show Nametag with name only (no disability rating)| no | 1111 |
| User has no disability rating AND no branch of service | 👆 same as above | yes, but need to include intersections of disability w branch | 1111 |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| ⚠️ User gets legal/full name API error | Do not show Nametag | no | 1111 |
| ⚠️ User gets disability rating API error | Show Nametag with name, branch of service, **no** disability rating, and an active link "View disability rating" (check w Angela) | yes | |
| ⚠️ User gets military info API error | Show Nametag with name, disability rating (if applicable). Do not show military branch or branch name. | no | 1111 |

---

### Onsite notifications

- [Test cases from Tze](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User has new debt update | Show Notifications section, and a notification at the top of the page with headline "You have a new debt.", corresponding date, and active link "Manage your VA debt" | yes | |
| User dismisses all notifications | Do not show Notifications section, or any notifications | yes | |
| User has multiple notifications, and dismisses one | Show Notifications section, and all notifications that user did not dismiss | no | 1111 |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| ⚠️ User gets onsite notification API error | --- | yes | |
| ⚠️ User gets error when dismissing a notification | --- | no | 1111 |

---

### Claims and appeals 

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/claims-and-appeals-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#claims-and-appeals-section) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User has an open claim (or claims) | Show claims card and **right-aligned** secondary link [Manage all claims and appeals](https://www.va.gov/claim-or-appeal-status/) | no | 1111 |
| User has a claim or appeal that closed in the last 60 days | 👆 same as above | no | 1111 |
| User has an open appeal (or appeals) | 🚧? | no | 1111 |
| User has multiple claims or appeals that are open, or have been closed in last 60 days | Show only most recent claim or appeal card | yes |  |
| User has no open claim and no open appeal (closed more than 60 days ago) | Show Claims and appeals heading, text "You have no claims or appeals to show.", and two **left-aligned** secondary links: [Learn how to file a claim](https://www.va.gov/disability/how-to-file-claim/) and [Manage all claims and appeals](https://www.va.gov/claim-or-appeal-status/) | yes |  |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| ⚠️ User gets claims API error | Show error alert with heading "We can't access your claims or appeals information", body "... If you have any claims and appeals, you won't be able to access your claims and appeals information right now...", and no secondary links | no | 1111 |
| ⚠️ User gets appeals API error, regardless if they have open claim(s) | 👆 same as above | yes |  |

---

### Health care 

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/health-care-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section) (va.gov-team-sensitive)

#### Appointments

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User does not have VA health care | Show copy "You have no health care information to show." under header, and left-aligned secondary link [Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction) | no | 1111 |
| User has VA health care and has an upcoming appointment (not matter how far into future) | Show Next appointment card (date, time, location, active link [Schedule and manage your appointments](https://va.gov/health-care/schedule-view-va-appointments/appointments)), and right-aligned secondary links:  | yes, but need to clean up bc there's dupe code | 1111 |
| User has multiple upcoming appointments | Show only one Next appointment card – for closest appointment to today's date | no | 1111 |
| User has VA health at a Cerner facility | Show warning alert with headline "Choose your health management portal" and copy "Your care team may now use our new My VA Health portal... For {{health care facility name}}: [Use My VA Health (opens in new tab)](https://patientportal.myhealth.va.gov/clear-session?to=https%3A%2F%2Fstaging-patientportal.myhealth.va.gov%3Fauthenticated%3Dtrue) For any other VA health facility: [Use My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home)" | yes |  |

#### Messaging

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User has one unread message from health care provider(s) | Show warning alert with copy "You have 1 unread message." and active link [Review your messages](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging), with secondary links [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data). **Do not show** Send secure message link. | yes | |
| User has multiple unread messages | 👆 same as above, but with plural "**messages**" | no | 1111 |

#### Combinations

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User has **no** unread messages and **no** upcoming appointments | Show "You have no upcoming appointments to show", and **left-aligned** secondary links [Send a secure message to your health care team](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging), [Schedule and manage your appointments](https://va.gov/health-care/schedule-view-va-appointments/appointments), [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data)| yes, but needs to be updated | 1111 |
| User has unread message(s) and **no** upcoming appointments | Show warning alert above "You have no upcoming appointments to show", secondary links 👆 same as above, but omit [Send a secure message](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging), and should be **right-aligned** secondary | yes | |
| User has unread message(s) and has upcoming appointment(s) | Show warning alert above Next appointment card, and **right-aligned** secondary links 👆 same as above, but omit both [Send a secure message](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging), [Schedule and manage your appointments](https://va.gov/health-care/schedule-view-va-appointments/appointments) | no | 1111 |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User encounters /user/ API call error | Show error alert with headline "We can't access any health care inforamtion right now." and copy "We're sorry. Something went wrong on our end. If you get health care through VA, you can go to My HealtheVet to access your health care information. [Visit My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/home)" | see [LOA3 user dashboard](#loa3-user-dashboard) section | 1111 |
| User gets health care API error and has unread messages | Show unread messages notification, error alert, and right-aligned secondary links: [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data) | yes, but needs to be cleaned up (dupe code) and updated to check for messages | 1111 |
| User gets health care API error and has **no** unread messages | Show error alert and left-aligned secondary links: [Send a secure message to your health care team](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging), [Refill and track your prescriptions](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/refill-prescriptions), [Request travel reimbursement](https://va.gov/health-care/get-reimbursed-for-travel-pay/), and [Get your VA medical records and lab and test results](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data) | yes | |
| User gets messaging API error, regardless of having upcoming appointments or not | Do not show error alert, but include secondary link [Send a secure message to your health care team](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging) in list of links | no | 1111 |

---

### Outstanding debts

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/outstanding-debts-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-outstanding-debts-section) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User has overpayment debt(s) AND copay bill(s) | Show both cards and always show the debts card first, then the copays card. On desktop, the cards should be side by side. On mobile they should stack with copays on the bottom. ![https://user-images.githubusercontent.com/97965610/202773989-1aca5ea2-616f-4e05-893a-ecef1c48eb4d.png](https://user-images.githubusercontent.com/97965610/202773989-1aca5ea2-616f-4e05-893a-ecef1c48eb4d.png) Don't show "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)". | yes, but needs to check that Learn about VA debt link does not exist | 11111 |
| User has no overpayment debts AND no copay bills | User is shown the copy "You have no overpayment debts or copays to show." with a secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)", both left-aligned | yes |  |
| User has debts AND no copay | User is shown a debt card and no secondary links | yes, but need to check for no secondary links | 1111 |
| User has no debts but has copay bills | User is shown a copay card, with a secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)", right-aligned | yes, but need to check for secondary link | 1111 |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| ⚠️ User gets a copay or debt API error (one or both fail) AND has no copay or debt card to show | Show one error message, secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)" should be left-aligned | yes | |
| ⚠️ User gets a **debt** API error AND has a **copay** card to show | Show error alert and show the copay card.  Secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)" should be right-aligned | yes | |
| ⚠️ User gets a **debt** API error AND has no copays |  👆 same as above (with right-aligned secondary link) but no copay card  | yes | |
| ⚠️ User gets a **copay** API error AND has no debts |  👆 same as above (with right-aligned secondary link) but no debt card | yes | |
| ⚠️ User gets a **copay** API error AND has a **debt** card to show | Show error alert and show the debt card. **Don't show** link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)". | yes | |
| ⚠️ User gets both **copay** API error AND **debt** API error | Show one error alert. Secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)" should be left-aligned | yes | |

---

### Benefit payments

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/benefit-payments-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-benefit-payments-section) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| Benefit payments section should show for all LOA3 users | Show Benefit payments header and secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)". | yes (see [LOA3 user dashboard](#loa3-user-dashboard) section) | |
| User has no payment cards to show | Show copy "You have no recent payments to show.", and secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)", should be left-aligned. |  | 1111 |
| User has no payment cards to show, but has received payments in the past (more than 60 days ago) | 👆 same as above, with secondary link "[Review your payment history](https://www.va.gov/va-payment-history/payments)", below "Manage your direct deposit info" | yes | |
| User has never received a payment | 👆 same as above, (with Manage your direct deposit information link) but **do not show** secondary link "[Review your payment history](https://www.va.gov/va-payment-history/payments)" | yes | |
| User has received a payment in the last 60 days | Show payment card with dollar amount, type of payment, whether it was deposited or mailed, and active link [Review your payment history](https://www.va.gov/va-payment-history/payments). Show secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)", should be right-aligned. | yes | |
| User has multiple payments in the same day | 👆 same as above, but only one card for the most recent payment.| no | 1111 |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| ⚠️ User gets a payment API error | Show error alert with headline "**We can't access your payment history**", and body "We're sorry. We can't access your payment history right now. We're working to fix this problem. Please check back later.". Secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)", should still appear and be left-aligned. Show secondary link <a herf="https://www.va.gov/va-payment-history/payments">Review your payment history</a> below, only if user has received payments in the past (more than 60 days ago). | yes |  |

---

### Education and training

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/education-and-training-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#education-and-training-section) (va.gov-team-sensitive)


| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User is LOA3 | Show left-aligned secondary links under header: [Learn how to apply for VA education benefits](https://va.gov/education/how-to-apply/), [Compare GI Bill benefits by school](https://va.gov/education/gi-bill-comparison-tool), [Check your Post-9/11 GI Bill benefits](https://va.gov/education/gi-bill/post-9-11/ch-33-benefit/status) | no | 1111 |

---

### Benefit application drafts

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/applications-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#benefit-applications-section) (va.gov-team-sensitive)


| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| "What benefits does VA offer?" drop-down is shown | Show additional info component directly below the "Benefit application drafts" header. When opened, show the following links: [Health care](https://va.gov/health-care/), [Education and training](https://va.gov/education/), [Disability compensation](https://va.gov/disability/), [Careers and employment](https://va.gov/careers-employment/), [Pension](https://va.gov/pension/), [Housing assistance](https://va.gov/housing-assistance/), [Burials and memorials](https://va.gov/burials-memorials/), [Life insurance](https://va.gov/life-insurance/), [Service member benefits](https://va.gov/service-member-benefits/), [Family member benefits](https://va.gov/family-member-benefits/) | no | 1111 |
| User has started an application for benefit but hasn't submitted | Show Benefit application draft card - form code, application type, expiration date, last opened date, active link [Continue your application]() | yes, but we should update the names of these test (currently `benefits-of-interest.cypress.spec.js` and `in-progress-forms.cypress.spec.js`) | |
| User has multiple benefit application drafts | Show Benefit application draft cards side by side, max two per row | yes, but we should test for >2 applications | 1111 |
| User has no benefit application drafts | Show copy "You have no benefit applications to show." | yes |  |

#### ⚠️ Error states

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| Main user API call fails | Entire My VA should show an error | see [LOA3 user dashboard](#loa3-user-dashboard) section | 1111 |

---

### My VA redirect from homepage only

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| **Unauthenticated user**: User has not signed in to VA.gov | User is shown My VA in the main navigation below the 'Sign in' button, if clicked on it should prompt the user to sign in. Once logged in it will take them to directly to My VA. | no | 11111 |
| Log in with Login.gov | From the VA.gov homepage, user clicks the sign-in button, clicks the Login.gov sign-in option and proceeds through the Login.gov sign-in process. After successful authentication they land on My VA | no | 1111 | 
| Log in with ID.me | 👆 same as above through the ID.me sign-in process | no | 1111 |
| Log in with DS Logon | 👆 same as above through the DS Logon sign-in process | no | 1111 | 
| Log in with My HealtheVet | From the VA.gov homepage, user clicks the sign in button, then they click the My HealtheVet sign-in option and proceeds through the DS Logon sign-in process. After successful authentication they land on My VA | no | 1111 | 
| NO Redirect from any page on VA.gov that is not the homepage with Login.gov sign-in | Post sign-in with Login.gov from any page on VA.gov that is not the homepage, user does NOT land on My VA | no | 1111 | 
| 👆 same as above through the ID.me sign-in process |  | no | 1111 | 
| 👆 same as above through the DS Logon sign-in process |  | no | 1111 | 
| 👆 same as above through the MyHealtheVet sign-in process |  | no | 1111 | 
| Redirect from deep-linking to a page requiring authentication with Login.gov sign-in | Example: User goes to https://staging.va.gov/profile, selects the Loginå.gov option when prompted for sign-in, and proceeds through the Login.gov sign-in process. After successful authentication they land on the "Profile" page and is NOT redirected to My VA | no | 1111 | 
| 👆 same as above through the ID.me sign-in process |  | no | 1111 | 
| 👆 same as above through the DS Logon sign-in process |  | no | 1111 | 
| 👆 same as above through the MyHealtheVet sign-in process |  | no | 1111 | 
