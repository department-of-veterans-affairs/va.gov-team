# My VA Frontend e2e Test Audit
_Results of audit conducted in Sprint 9 (4/26/23 - 5/10/23)_

Based on test cases in the va.gov-team-sensitive repo and FE documentation. Last updated: May 10, 2023.


### LOA1 user dashboard
- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/loa1_design.md)
- [My VA copy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/my-va-copy.md)


| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User signs in and is only LOA1 | Show prompt (warning alert) with headline "Verify your identity...", body copy "We need to make sure you're you...", CTA button [Verify your identity](), and "Apply for VA benefits" section below. Do not show Outstanding debts and Benefit payments sections. | no | 1111 |

---

### Nametag

- [Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/nametag.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#nametag) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User is LOA1 | Do not show Nametag | no | 1111 |
| User is LOA3 | Show Nametag | no | 1111 |
| User has disability rating | Show Nametag | no | 1111 |
| ⚠️ User gets legal/full name API error  | Do not show Nametag | no | 1111 |


---

### Onsite notifications

- [Test cases from Tze](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| User has new debt update | Show Notifications section, and a notification at the top of the page with headline "You have a new debt.", corresponding date, and active link "Manage your VA debt" | no | 1111 |
| User dismisses all notifications | Do not show Notifications section, or any notifications | no | 1111 |
| User has multiple notifications, and dismisses one | Show Notifications section, and all notifications that user did not dismiss | no | 1111 |

---

### Claims and appeals 

### Health care 

### Outstanding debts

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/outstanding-debts-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-outstanding-debts-section) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| Outstanding debts section should show for all LOA3 users | Show Outstanding debts header | no | 1111 |
| User has overpayment debt(s) AND copay bill(s) | Show both cards and always show the debts card first, then the copays card. On desktop, the cards should be side by side. On mobile they should stack with copays on the bottom. ![https://user-images.githubusercontent.com/97965610/202773989-1aca5ea2-616f-4e05-893a-ecef1c48eb4d.png](https://user-images.githubusercontent.com/97965610/202773989-1aca5ea2-616f-4e05-893a-ecef1c48eb4d.png) Don't show "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)". | yes | 11111 |
| User has no overpayment debts AND no copay bills | User is shown the copy "You have no overpayment debts or copays to show." with a secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)", both left-aligned | no | 1111 |
| User has debts AND no copay | User is shown a debt card and no secondary links | no | 1111 |
| User has no debts but has copay bills | User is shown a copay card, with a secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)", right-aligned | no | 1111 |
| ⚠️ User gets a copay or debt API error (one or both fail) AND has no copay or debt card to show | Show one error message, secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)" should be left-aligned | no | 1111 |
| ⚠️ User gets a **debt** API error AND has a **copay** card to show | Show error alert and show the copay card.  Secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)" should be right-aligned | no | 1111 |
| ⚠️ User gets a **debt** API error AND has no copays |  👆 same as above (with right-aligned secondary link) but no copay card  | no | 1111 |
| ⚠️ User gets a **copay** API error AND has no debts |  👆 same as above (with right-aligned secondary link) but no debt card | no | 1111 |
| ⚠️ User gets a **copay** API error AND has a **debt** card to show | Show error alert and show the debt card. **Don't show** link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)". | no | 1111 |
| ⚠️ User gets both **copay** API error AND **debt** API error | Show one error alert. Secondary link "[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)" should be left-aligned | no | 1111 |



### Benefit payments

- [FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/benefit-payments-FE-documentation.md)
- [Audit 2022 test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-benefit-payments-section) (va.gov-team-sensitive)

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| Benefit payments section should show for all LOA3 users | Show Benefit paymenets header and secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)". | no | 1111 |
| User has no payment cards to show | Show copy "", and secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)", should be left-aligned. | no | 1111 |
| User has no payment cards to show, but has received payments in the past (more than 60 days ago) | 👆 same as above, with secondary link "[Review your payment history](https://www.va.gov/va-payment-history/payments)", below "Manage your direct deposit info" | no | 1111 |
| User has never received a payment | 👆 same as above, (with Manage your direct deposit information link) but **do not show** secondary link "[Review your payment history](https://www.va.gov/va-payment-history/payments)" | no | 1111 |
| User has received a payment in the last 60 days | Show payment card with dollar amount, type of payment, whether it was deposited or mailed, and active link [Review your payment history](https://www.va.gov/va-payment-history/payments). Show secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)", should be right-aligned. | no | 1111 |
| User has multiple payments in the same day | 👆 same as above, but only one card for the most recent payment.| no | 1111 |
| ⚠️ User gets a payment API error AND has a **debt** card to show | Show error alert with headline "**We can't access your payment history**", and body "We're sorry. We can't access your payment history right now. We're working to fix this problem. Please check back later.". Secondary link "[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)", should still appear and be left-aligned. Show secondary link <a herf="https://www.va.gov/va-payment-history/payments">Review your payment history</a> below, only if user has received payments in the past (more than 60 days ago). | no | 1111 |



### Education and training

### Benefit application drafts


---

### My VA redirect from homepage only

| Test case | User flow | Test? | Ticket |
| -- | -- | -- | -- |
| **Unauthenticated user**: User has not signed in to VA.gov | User is shown My VA in the main navigation below the 'Sign in' button, if clicked on it should prompt the user to sign in. Once logged in it will take them to directly to My VA. | yes | 11111 |
| Log in with Login.gov | From the VA.gov homepage, user clicks the sign-in button, clicks the Login.gov sign-in option and proceeds through the Login.gov sign-in process. After successful authentication they land on My VA | no | 1111 | 
| Log in with ID.me | 👆 same as above through the ID.me sign-in process | no | 1111 |
| Log in with DS Logon | 👆 same as above through the DS Logon sign-in process | no | 1111 | 
| Log in with My HealtheVet | From the VA.gov homepage, user clicks the sign in button, then they click the My HealtheVet sign-in option and proceeds through the DS Logon sign-in process. After successful authentication they land on My VA | no | 1111 | 
| NO Redirect from any page on VA.gov that is not the homepage with Login.gov sign-in | Post sign-in with Login.gov from any page on VA.gov that is not the homepage, user does NOT land on My VA | no | 1111 | 
| 👆 same as above through the ID.me sign-in process |  | no | 1111 | 
| 👆 same as above through the DS Logon sign-in process |  | no | 1111 | 
| 👆 same as above through the MyHealtheVet sign-in process |  | no | 1111 | 
| Redirect from deep-linking to a page requiring authentication with Login.gov sign-in | Example: User goes to https://staging.va.gov/profile, selects the Login.gov option when prompted for sign-in, and proceeds through the Login.gov sign-in process. After successful authentication they land on the "Profile" page and is NOT redirected to My VA | no | 1111 | 
| 👆 same as above through the ID.me sign-in process |  | no | 1111 | 
| 👆 same as above through the DS Logon sign-in process |  | no | 1111 | 
| 👆 same as above through the MyHealtheVet sign-in process |  | no | 1111 | 
