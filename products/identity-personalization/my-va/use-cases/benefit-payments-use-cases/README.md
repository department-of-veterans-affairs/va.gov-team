# My VA: Payments and debts use cases

**Last updated: December 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)
- [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5393-14219&t=cZLTEcVoQuXx90AV-1)
- Test Rail QA

<details><summary>Archive | How to reproduce benefit payments in staging</summary>

- [User has not received any payments from VA in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/no-recent-payments.md#how-to-reproduce)
- [User has received any payments from VA in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/has-recent-payments.md#how-to-reproduce)
- [The payments API is down and we can't display any payment information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases/payment-API-error.md#how-to-reproduce)

</details>

<details><summary>Archive | How to reproduce overpayments and copay bills in staging</summary>

- [User does not have any outstanding VA debt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/no-outstanding-debt.md#how-to-reproduce)
- [User has outstanding overpayment debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/overpayment-debts.md#how-to-reproduce)
- [User has outstanding copays](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/copay-debts.md#how-to-reproduce)
- [The debts API is down and we can't display any overpayment debt information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/debts-API-error.md#how-to-reproduce)
- [The copays API is down and we can't display any copay information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/copay-API-error.md#how-to-reproduce)

</details>

## Phase 1, 3.0 benefit payment experience
- For all of these use cases, the user must be LOA3 (identity verified). **If the user is not LOA3, the user will not see this section on My VA.**
- Benefit payments occur when a Veteran has already applied and been approved for VA benefits. These are paid out monthly via direct deposit or paper check.
- This feature on My VA gives the Veteran a summary of their most recent benefit payment and a link to past payments, if there are any to show.

### Common benefit payment use cases

<details><summary>User has never had any benefits payments</summary>

- **Use case:** If a logged in LOA3 user has no history of payments they receive a message informing them they don't have any and a link to the general payment history tool.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5125-15049&t=cZLTEcVoQuXx90AV-1)
- **Content:** See designs
- **Request:** `GET /v0/profile/payment_history`
  - **Reponse:** `200` [empty mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/payment-history/index.js#L134)

</details>


<details><summary>User has not received any payments from VA in the last 60 days</summary>

- **Use case:** If a LOA3 user signs in and has not received any payments from VA in the last 60 days, they will see a card in the Benefit payments section stating that they have no recent payments as well as a link to review their payment history.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19152&t=cZLTEcVoQuXx90AV-1)
- **Content:** See designs
 - **Request:** `GET /v0/profile/payment_history`
   - **Reponse:** `200` [no recent payment mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/payment-history/index.js#L14)

</details>


<details><summary>User has received any payments from VA in the last 60 days</summary>

- **Use case:** If a LOA3 user has received a payment from VA in the last 60 days, they will see a card in the Benefits payments section that tells them the dollar amount of the payment, the type of benefit payment, the date it was deposited or mailed to them, and a link to the payment history tool. Only the most recent payment is shown.
   - If a user received the payment via direct deposit, then the date text will read "Deposited on" whereas if they received it via mailed paper check, the date text will read "Checked mailed on".
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19238&t=cZLTEcVoQuXx90AV-1)
- **Content:** See designs
- **Request:** `GET /v0/profile/payment_history`
  - **Reponse:** `200` [recent payment mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/payment-history/index.js#L13)

</details>



### Benefit payments edge cases

#### Validation
This feature has no validation use cases.

#### Flags
There are no flags with this feature.

#### Errors

<details><summary>The payments API is down and we can't display any payment information</summary>

- **Use case:** If an LOA3 user logs in and there is an error with the payments API show a warning alert, and hide the payment card. TBD Do we show the link to payment tool or just leave it when this shows? The link could be in the alert.
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5125-15183&t=cZLTEcVoQuXx90AV-1)
- **Content:** See designs
- **Request:** `GET /v0/profile/payment_history`
  - **Reponse:** `500` [failure mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/payment-history/index.js#L147)

</details>



## Phase 1, 3.0 Overpayments and copay bills experience
- For all of these use cases, the user must be LOA3 (identity verified). **If the user is not LOA3, the user will not see this section on My VA.**
- Outstanding debts encompasses overpayment debts and copay debts.
   - Overpayment debts occur when a user is overpaid for VA benefits. This can happen for a variety of reasons, but an example is when a Veteran doesn't update their dependency information and is paid more for their VA benefits than they are entitled to. The Veteran then owes this money back to VA as an overpayment debt.
   - A copay debt is an amount that a Veteran must pay for VA health care services, similar to how copays work with private health insurance. This amount varies depending on a Veteran's health care benefits through VA.


### Overpayments and copay bills common use cases

<details><summary>User has never had any outstanding debts or copays</summary>

- **Use case:** If a logged in LOA3 user has no history of outstanding debts or copays they receive a message informing them they don't have any and a link to the general debts and copays tool.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5125-15049&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `200` [empty mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L254)
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `200` [empty mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L1661)

</details>


#### Overpayment debts

<details><summary>User does not have any outstanding VA debts</summary>

- **Use case:** If a logged in LOA3 user does not have any debt in the combined debt portal or their total debt equals 0, they will see a card informing them that they have no outstanding debts.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19152&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `200` [debt count zero mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L1) (dev mock data wip)
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `200` [copay count zero mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L459) (dev mock data wip)

</details>


<details><summary>User has outstanding overpayment debts</summary>

- **Use case:** If a logged in LOA3 user has any outstanding overpayment debts in the debt portal, they will see a card in this section that tells them how many overpayment debts they have, the date this information was last updated, and a link to the debts page of the combined debt portal.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19238&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `200` [success mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L7)
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `200` [success mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L459)

</details>


#### Copays

<details><summary>User does not have any outstanding copays</summary>

- **Use case:** If a logged in LOA3 user does not have any copays in the combined debt portal or their total copays equals 0, they will see a card informing them that they have no copays.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19152&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `200` [debt count zero mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L1) (dev mock data wip)
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `200` [copay count zero mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L459) (dev mock data wip)
  

</details>


<details><summary>User has outstanding copays</summary>

- **Use case:** If a logged in LOA3 user has any outstanding copay debts in the debt portal, they will see a card in this section that tells them how many copay debts they have, the date this information was last updated, and a link to the copays page of the combined debt portal.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5414-19238&t=cZLTEcVoQuXx90AV-1)
- [Link to code]
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `200` [success mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L7)
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `200` [success mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L459)

</details>


### Overpayments and copay bills edge cases

#### Validation
This feature has no validation use cases.

#### Flags
There are no flags with this feature.

#### Errors

<details><summary>The Lighthouse API is down and we can't display any debts or bills</summary>

- **Use case:** If an LOA3 user logs in and there is an error with the Lighthouse API showing debts and copays, show a warning alert to the user in the card with a link to the debts tool.
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5416-47879&t=cZLTEcVoQuXx90AV-1)
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `500` [failure mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L261)
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `500` [failure mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L1666)

</details>


<details><summary>The debts API is down and we can't display any overpayment debt information</summary>

- **Use case:** If an LOA3 user logs in and there is an error with the debt API (DMC), show a warning alert to the user in the card with a link to the debts tool.
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5125-15744&t=cZLTEcVoQuXx90AV-1)
- [Link to code](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/debts/getDebts)
- **Content:** See designs
- **Request:** `GET /v0/debts`
  - **Reponse:** `500` [failure mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/debts/index.js#L261)

</details>


<details><summary>The copays API is down and we can't display any copay information</summary>

- **Use case:** If an LOA3 user logs in and there is an error with the copay API (VBS), show a warning alert to the user in the card with a link to the debts tool.
- **Status code:** TBD
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5416-19340&t=cZLTEcVoQuXx90AV-1)
- [Link to code](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/medical_copays/getMedicalCopays)
- **Content:** See designs
- **Request:** `GET /v0/medical_copays`
  - **Reponse:** `500` [failure mock](https://github.com/department-of-veterans-affairs/vets-website/blob/v0.1.8621/src/applications/personalization/dashboard/mocks/medical-copays/index.js#L1666)

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

<details><summary>Archive | My VA: Outstanding debts use cases, February 2024</summary>

# My VA: Outstanding debts use cases

**Last updated:** February 16, 2024 - added Figma link

## Overview of Outstanding Debts
* Outstanding debts encompasses overpayment debts and copay debts.
  * Overpayment debts occur when a user is overpaid for VA benefits. This can happen for a variety of reasons but an example is when a Veteran doesn't update their dependency information and is paid more for their VA benefits than they are entitled to. The Veteran then owes this money back to VA as an overpayment debt. 
  * A copay debt is an amount that a Veteran must pay for health care services, similar to how copays work with private health insurance. This amount varies depending on a Veteran's health care benefits through VA.
* This feature on My VA gives the user an overview of their outstanding debts if there are any to show and links them to the combined debt portal.
* For all of these use cases, the user must be LOA3 (identity verified).
* [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will not see this section on My VA.

## Common use cases
- [User has outstanding overpayment debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/overpayment-debts.md)
- [User has outstanding copays](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/copay-debts.md)
- [User does not have any outstanding VA debt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/no-outstanding-debt.md)

## Edge cases

### Flags
There are no flags associated with this feature.

### System
- [The debts API is down and we can't display any overpayment debt information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/debts-API-error.md)
- [The copays API is down and we can't display any copay information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/copay-API-error.md)
- [Both the debts and copays APIs are down and we can't display information for either of them](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/debt-and-copay-error.md)

## Flow diagrams
- [Outstanding debts on My VA user flow](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0-7422&mode=design)

</details>

