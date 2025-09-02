# Paperless delivery settings use cases
**Last updated: August 2025**

- [User flow](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2592-20588&t=z8k7qVk61u67asjJ-1)
- [Figma files](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2593-24032&t=z8k7qVk61u67asjJ-1)


## Current experience
- This page allows users to opt in and out of some mailed documents on the VA.gov Profile.
   - The page is supported by VA Profile, and VA Notifiy. If you need to set up new integrations please speak to the respective teams. These use cases are ONLY for the VA.gov Profile experience.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

 
## Common use cases
### User logs in with LOA3 account

<details><summary>User doesn't have email on file</summary>

- **Use case:** If a user does not have a contact email on file they see an informational alert prompting them to add contact information. The link directs the user to the edit-as-a-subtask pattern.
- **Status code:** TBD
- **Format:** [Informational alert component(default)](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2592-20900&t=z8k7qVk61u67asjJ-1)
- [Link to code]
- **Content:**

Header: Add your email to get notified when documents are ready

You don’t have an email address in your VA profile. If you add one, we’ll email you when your documents are ready.

</details>


<details><summary>User has a contact email on file</summary>

- **Use case:** If a user has a contact email on file, we show:
   - The information on file with a link to edit, which prompts the edit-as-a-subtask flow.
- **Format:** See designs
- [Links to designs](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2596-8564&t=z8k7qVk61u67asjJ-1)
- [Link to code]
- **Content:** See designs

</details>

#### Editing information

[Save in progress alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)

[Saving information: Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)

[Saving information: Error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)

[Canceling edit changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)

[Edit as a sub-task shared use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)


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

<details><summary>Application is down for maintenance</summary>

- **Use case:** This is displayed during downtime maintenance (external)
- **Format:** [Warning Alert Component](https://design.va.gov/components/alert/#warning-alert)
- [Links to designs](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2593-23341&t=z8k7qVk61u67asjJ-1)
- [Link to code]
- **Content:**
- 
H2: This application is down for maintenance

We’re making some updates to this application to help make it even better for Veterans, service members, and family members like you. We’re sorry it’s not working right now. Please check back soon.

</details>

<details><summary>Tool is down for maintainance</summary>

- **Use case:** This is the "global" downtime alert (internal maintenance)
- **Format:** [Warning Alert Component](https://design.va.gov/components/alert/#warning-alert)
- [Links to designs](https://www.figma.com/design/DWOjExui9JzyzwhMBWOFkw/Paperless-delivery-opt-in?node-id=2593-23349&t=z8k7qVk61u67asjJ-1)
- [Link to code]
- **Content:**
- 
H2: This tool is down for maintenance

We’re making some updates to this tool. We’re sorry it’s not working right now an we hope to be finished by [Month Date] at [00:00 a.m./p.m.] ET. Please check back soon.
</details>

[Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

[Cannot display section information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)
