# My VA: Track claims and appeals use cases

**Last updated: May 2025**

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will see the [LOA1 experience](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases).

- PINEAPPLE User flow
- Figma files
- Test Rail QA

## Phase 1, 3.0 experience
- PINEAPPLE This feature includes:
   - Card component: Dynamic claim card, that provides a status update on any open or recently closed claims, and links the user to claims details. Cards only display for up to 60 days after they are "Complete", after that they are removed. Only 1 card shows at a time, and is the most recent update.
   - Card component: Dynamic disability rating card, that provides the Veteran with their combined disabilty rating, and a link to the disability rating page.
   - Link: Link to claims tracker to manage all claims and appeals.

## Common use cases

<details><summary>User does not have an open claim or appeal, or one that has been closed in the last 60 days</summary>

- **Use case:** If a logged in LOA3 user does not have an open claim or appeal or one that has been closed in the last 60 days, they will see informational text and be provided a link to manage all claims and appeals.
- **Status code:** TBD
- **Content:** PINEAPPLE TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>


<details><summary>User has an open claim or appeal</summary>

- **Use case:** If a LOA3 user has an open claim or appeal, they will see a card in this section that tells them the type of claim or appeal, the date the application was received, a current status update, and a link to "Review details" which links to the details page for that specific claim in the claims tool. The claim details link is specific to the claim card. It is in the following format and the ###### is the claim number: https://va.gov/track-claims/your-claims/########/status.
- **Status code:** TBD
- **Content:** Varies on claim and appeal type. See code.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>


<details><summary>User has a claim or appeal that has been closed in the last 60 days</summary>

- **Use case:** If a logged in LOA3 user has a claim or appeal that has been closed in the last 60 days, they will see a card in this section that tells them the type of claim or appeal, the date the application was received, a current status update of “Complete”, and a link to "Review details" which links to the details page for that specific claim in the claims tool. The claim details link is specific to the claim card. It is in the following format and the ###### is the claim number: https://va.gov/track-claims/your-claims/########/status. Once a claim or appeal has been closed for longer than 60 days, the status card will no longer show on My VA.
- **Status code:** TBD
- **Content:** Varies on claim and appeal type. See code.
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code]

</details>


## Edge cases

### Flags
There are no flags associated with this feature.

### System error

<details><summary>The claims API is down and we can’t display any claims or appeals information</summary>
  
- **Use case:** If an LOA3 user logs in and there is an error with the claims API, then we will not be able to show a card for any recent claim or appeal updates.
- **Status code:** TBD
- **Content:**

Header: We can't access your claims or appeals information.

We're sorry. Something went wrong on our end. If you have any claims and appeals, you won't be able to access your claims and appeals information right now. Please refresh or try again later.

- **Format:** [Error alert](https://design.va.gov/components/alert/#error-alert), **no other content appears in the section when the alert is triggered.**
- [Link to designs]
- [Link to code]

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
