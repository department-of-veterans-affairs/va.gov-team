# My VA Use Cases
**Last updated: June 2025**

Updated to reflect My VA 3.0 Phase 1 use cases.

## Common Use Cases

### User logs in with LOA1 account

- [User logs in with LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases)

### User logs in with LOA3 account

- [Claims and appeals use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases)
- [Forms and applications use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases)
- [Health care use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases)
- [Benefit payments use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases)
- [Outstanding debts use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases)
- Removed for My VA 3.0 Phase 1 | [Education and training use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/education-and-training-use-cases)

## Edge Cases
Edge cases specific to each section are captured in their individual sections linked above.

### Validation
This feature has no page level validation use cases.

### Flags

<details><summary>User does not have completed contact information on file</summary>

- **Use case:** If an LOA3 user logs in and is missing their mobile phone number, contact email, or mailing address they are prompted to add that information from My VA through an alert that appears at the top.
- **Status code:** TBD
- **Format:** [Informational alert](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5456-14077&t=P0cKxHnGArzgrnSK-1)
- [Link to product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/product-outline.md)
- [Link to full user flows](https://www.figma.com/design/CertVj7cu66kFv9TnseR30/Welcome-to-My-VA?node-id=2091-58559&t=SZ6okAzhOr9D6BCB-1)

</details>


### Errors
- [System can't connect to MPI error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/system-cant-connect-to-MPI.md)
