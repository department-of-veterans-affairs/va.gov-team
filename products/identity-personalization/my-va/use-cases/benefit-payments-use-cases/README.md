# My VA: Benefit payments use cases

**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)
- [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5393-14219&t=cZLTEcVoQuXx90AV-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User has not received any payments from VA in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/no-recent-payments.md#how-to-reproduce)
- [User has received any payments from VA in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/has-recent-payments.md#how-to-reproduce)
- [The payments API is down and we can't display any payment information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/payment-API-error.md#how-to-reproduce)

</details>

## Phase 1, 3.0 experience
- For all of these use cases, the user must be LOA3 (identity verified). **If the user is not LOA3, the user will not see this section on My VA.**
- Benefit payments occur when a Veteran has already applied and been approved for VA benefits. These are paid out monthly via direct deposit or paper check.
- This feature on My VA gives the Veteran a summary of their most recent benefit payment and a link to past payments, if there are any to show.

## Common use cases

<details><summary>User has never had any benefits payments</summary>

- **Use case:** If a logged in LOA3 user has no history of payments they receive a message informing them they don't have any and a link to the general payment history tool.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5125-15049&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


<details><summary>User has not received any payments from VA in the last 60 days</summary>

- **Use case:** If a LOA3 user signs in and has not received any payments from VA in the last 60 days, they will see a card in the Benefit payments section stating that they have no recent payments as well as a link to review their payment history.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19152&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


<details><summary>User has received any payments from VA in the last 60 days</summary>

- **Use case:** If a LOA3 user has received a payment from VA in the last 60 days, they will see a card in the Benefits payments section that tells them the dollar amount of the payment, the type of benefit payment, the date it was deposited or mailed to them, and a link to the payment history tool. Only the most recent payment is shown.
   - If a user received the payment via direct deposit, then the date text will read "Deposited on" whereas if they received it via mailed paper check, the date text will read "Checked mailed on".
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19238&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs

</details>


## Edge cases

### Validation
This feature has no validation use cases.

### Flags
There are no flags with this feature.

### Errors

<details><summary>The payments API is down and we can't display any payment information</summary>

- **Use case:** If an LOA3 user logs in and there is an error with the payments API show a warning alert, and hide the payment card. TBD Do we show the link to payment tool or just leave it when this shows? The link could be in the alert.
- **Status code:** TBD
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5125-15183&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:**

We can’t show your payment history right now. Refresh this page or try again later.

</details>

---

<details><summary>Archive | My VA: Benefit Payments Use Cases, December 2022</summary>
  
# My VA: Benefit Payments Use Cases

**Last updated:** December 14, 2022

## Overview of Benefit Payments

* Benefit payments occur when a Veteran has already applied and been approved for VA benefits. These are paid out monthly via direct deposit or paper check.
* This feature on My VA gives the Veteran a summary of their most recent benefit payment and a link to past payments, if there are any to show.
* For all of these use cases, the user must be LOA3 (identity verified).
* [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will not see this section on My VA.

## Common use cases
- [User *has* received a payment from VA in the last 60 days via direct deposit or paper check](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/has-recent-payments.md)
- [User *has not* received any payments from VA in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/no-recent-payments.md)

## Edge cases

### Flags
There are no flags associated with this feature.

### System
- [The payments API is down and we can't display any payment information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/payment-API-error.md)

## Flow diagrams
- [User flow for benefit payments on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A7514&mode=design&t=ZhUs1Oeae2EQjVFh-1)

</details>
