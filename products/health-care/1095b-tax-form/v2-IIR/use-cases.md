# 1095-B Proof of Healthcare use cases
**Last updated: September 2025**

- [User flow](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1036-24356&t=4u2RwT3RjCOwd9gC-1)
- [Figma files](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32186&t=4u2RwT3RjCOwd9gC-1)


## Current experience
- This page allows users to download their 1095-B proof of healthcare.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

 
## Common use cases
### User logs in with LOA3 account

<details><summary>User was enrolled in healthcare for the previous tax year and they were not a CHAMPVA</summary>

- **Use case:** If a user was enrolled in VA healthcare for the previous year and they were not a CHAMPVA they will see a card component and have the ability to download a PDF or download a Text file.
- **Format:** [Card component)](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32252&t=4u2RwT3RjCOwd9gC-1)
- [Link to code]
- **Content:** [See design](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-39900&t=4u2RwT3RjCOwd9gC-1)

</details>

<details><summary>User wasn’t enrolled in healthcare for the previous tax year</summary>

- **Use case:** If a user was not enrolled in VA healthcare for the previous year they will see an informational alert.
- **Status code:** TBD
- **Format:** [Informational alert component(default)](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32246&t=4u2RwT3RjCOwd9gC-1)
- [Link to code]
- **Content:**

Header: You don’t have a 1095-B  tax form available right now

You do not have a 1095-B  tax form available. This could be because you were a CHAMPVA beneficiary or you weren’t enrolled in VA healthcare in 2024. If you think you were enrolled, call us at 877-222-8387 (TTY:711).  We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

</details>

<details><summary>User was a CHAMPVA for the previous tax year</summary>

- **Use case:** If a user was a CHAMPVA for the previous year they will see an informational alert.
- **Status code:** TBD
- **Format:** [Informational alert component(default)](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32246&t=4u2RwT3RjCOwd9gC-1)
- [Link to code]
- **Content:**

Header: You don’t have a 1095-B  tax form available right now

You do not have a 1095-B  tax form available. This could be because you were a CHAMPVA beneficiary or you weren’t enrolled in VA healthcare in 2024. If you think you were enrolled, call us at 877-222-8387 (TTY:711).  We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

</details>

## Edge cases
### Validation
<details><summary>User is not enrolled in VA healthcare</summary>

- **Use case:** If a user is not enrolled in healthcare then we show an informational alert in the section where the checkbox to opt in to paperless delivery would be.
- **Format:** [Informational alert component(default)](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Links to designs](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2593-24053&t=z8k7qVk61u67asjJ-1)
- [Link to code]
- **Content:**

H2: Paperless delivery not available yet

You’re not enrolled in any VA benefits that offer paperless delivery options.

</details>


### Flags 
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors
#### System errors
