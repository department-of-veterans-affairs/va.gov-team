# Direct deposit: user has set up direct deposit for one or both payment types

**Last update: February 14, 2024**

If an ID.me or Login.gov LOA3 user (identity verified) logs in to VA.gov, navigates to the direct deposit page, and has set up direct deposit for comp+pen and education payment, they will be able to view and edit bank account information for whichever type they are eligible.

## UX and design
- Bank information will show as read-only in the comp+pen section and the education section, which a corresponding `edit` button for both.
- Clicking the `edit` button will enable edit mode within the corresponding section. A user can edit their routing number, account number, and account type.
- Bank name is automatically filled in based on the routing number; users can't edit their bank name.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)
- There is no way for a user to completely remove a direct deposit account online.
- [Read view: Desktop mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-691&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Read view: Mobile mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-76&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Editing view documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)

## Codes
TBD

## How to reproduce
1. Log in with one of the following users
2. Navigate to Profile > Direct deposit

|User| Direct deposit types|
|----|---------------------|
|81| Comp & pen only|
|201| Comp & pen only|
|226| Comp & pen only|
|378| Both comp & pen and education|
