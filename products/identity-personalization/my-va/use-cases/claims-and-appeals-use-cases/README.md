# My VA: Claims and appeals use cases

**Last updated: May 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)
- [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5294-36867&t=KhCgIDPMpZ6FClDG-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User has open claim or appeal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/user-has-open-claim-or-appeal.md#how-to-reproduce)
- [User has open claim or appeal that has closed in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/user-has-recently-closed-claim.md#how-to-reproduce)
- [User does not have an open claim or appeal that has closed in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/user-has-no-claims-or-appeals.md#how-to-reproduce)
- [Claims API is down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/claims-api-down.md#how-to-reproduce)

</details>


## Phase 1, 3.0 experience
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will see the [LOA1 experience](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases).
- This feature highlights a users in progress claims and appeals, their disability rating, and a link to access all their claims and appeals.
   - A claim card, that provides a status update on any open or recently closed claims, and links to the claimc details. Cards only display for up to 60 days after they are "Complete", after that they are removed. Only 1 card shows at a time, and is the most recent update.
   - Link to claims tracker to manage all claims and appeals.
   - Disability rating card, that provides the Veteran with their combined disabilty rating, and a link to the disability rating page.
- Use cases for when a user does not have all available information are outlined below.


## Common use cases

### Claims and appeals

<details><summary>User does not have an open claim or appeal, or one that has been closed in the last 60 days</summary>

- **Use case:** If a logged in LOA3 user does not have an open claim or appeal or one that has been closed in the last 60 days, they will see informational text and be provided a link to check all claims and appeals.
- **Status code:** TBD
- **Format:** Paragraph copy. See designs.
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5165-13907&t=Qplg9wUFJEDlP70M-1)
- [Link to code]
- **Content:** See designs.

</details>


<details><summary>User has an open claim or appeal</summary>

- **Use case:** If a LOA3 user has an open claim or appeal, they will see a card in this section that tells them the type of claim or appeal, the date the application was received, a current status update, and a link to "Review details" which links to the details page for that specific claim in the claims tool. The claim details link is specific to the claim card. It is in the following format and the ###### is the claim number: https://va.gov/track-claims/your-claims/########/status.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5069-18389&t=Qplg9wUFJEDlP70M-1)
- [Link to code]
- **Content:** Varies on claim and appeal type.

</details>


<details><summary>User has a claim or appeal that has been closed in the last 60 days</summary>

- **Use case:** If a logged in LOA3 user has a claim or appeal that has been closed in the last 60 days, they will see a card in this section that tells them the type of claim or appeal, the date the application was received, a current status update of “Complete”, and a link to "Review details" which links to the details page for that specific claim in the claims tool. The claim details link is specific to the claim card. It is in the following format and the ###### is the claim number: https://va.gov/track-claims/your-claims/########/status. Once a claim or appeal has been closed for longer than 60 days, the status card will no longer show on My VA.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5069-18446&t=Qplg9wUFJEDlP70M-1)
- [Link to code]
- **Content:** Varies on claim and appeal type. See code.

</details>


### Disability rating

<details><summary>User does not have a disability rating</summary>

- **Use case:** If a logged in LOA3 user does not have a disability rating they see information informing them they do not have a disability rating, and a link to learn more.
- **Status code:** TBD
- **Format:** Paragraph copy. See designs.
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5261-51052&t=KhCgIDPMpZ6FClDG-1)
- [Link to code]
- **Content:** See designs.

</details>


<details><summary>User has a disability rating</summary>

- **Use case:** If a logged in LOA3 user has a disability rating they see a card with their combined disability rating, and a link to review the rating breakdown.
- **Status code:** 200
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5072-18503&t=Qplg9wUFJEDlP70M-1)
- [Link to code]
- **Content:** See designs.

</details>


## Edge cases

### Validation
This feature has no validation use cases.

### Flags
There are no flags with this feature.

### Errors

<details><summary>The claims API is down and we can’t display any claims or appeals information</summary>
  
- **Use case:** If an LOA3 user logs in and there is an error with the claims API, then we will not be able to show a card for any recent claim or appeal updates. A link to go to the claims tracker still shows in the section.
- **Status code:** TBD
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#web-2)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5074-19242&t=Qplg9wUFJEDlP70M-1)
- [Link to code]
- **Content:**

We can't show your claims or appeals information right now. Refresh this page or try again later.

</details>


<details><summary>The API that shows the disability rating is down</summary>
  
- **Use case:** If an LOA3 user logs in and there is an error with the API that displays the disability rating, then we show an alert informing the user the information is currently unavailable. A link to the disability page is still available in the section.
- **Status code:** TBD
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5072-18605&t=Qplg9wUFJEDlP70M-1)
- [Link to code]
- **Content:**

We can't show your disability rating right now. Refresh this page or try again later.

</details>

---

<details><summary>Archive | My VA: Claims and Appeals Use Cases, August 2023</summary>
  
# My VA: Claims and Appeals Use Cases

**Last updated:** August 1, 2023

- This feature on My VA gives the user a status update on any open or recently closed claims (within the last 60 days) and links them to the claims tool to see more details. 
- This feature also contains a link to the claims tool to manage all claims and appeals and a link for them to learn more about filing claims.
- For all use cases, the user must be LOA3 (identity verified). All LOA3 users will see this section on My VA.
- [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will not see this section on My VA.

## Common use cases
- [User has an open claim or appeal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/user-has-open-claim-or-appeal.md)
- [User has a claim or appeal that has been closed in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/user-has-recently-closed-claim.md)
- [User does not have an open claim or appeal, or one that has been closed in the last 60 days](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/user-has-no-claims-or-appeals.md)

## Edge cases

### Flags
There are no flags associated with this feature.

### System
- [The claims API is down and we can’t display any claims or appeals information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases/claims-api-down.md)

## Flow diagrams
- [User flow for claims and appeals on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0-7177&mode=design)

</details>
