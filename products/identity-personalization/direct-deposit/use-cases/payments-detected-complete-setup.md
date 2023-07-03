# Direct deposit: user has set up direct deposit for one or both payment types

**Last update: March 10, 2023 -- adding mocks that show the edit state**

If an ID.me or Login.gov LOA3 user (identity verified) logs in to VA.gov, navigates to the direct deposit page, and has set up direct deposit for comp+pen and education payment, they will be able to view and edit bank account information for whichever type they are eligible.

## UX and design
- Bank information will show as read-only in the comp+pen section and the education section, which a corresponding `edit` button for both.
- Clicking the `edit` button will enable edit mode within the corresponding section. A user can edit their routing number, account number, and account type.
- Bank name is automatically filled in based on the routing number; users can't edit their bank name.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)
- There is no way for a user to completely remove a direct deposit account online.
- [Read-only view: Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/v8Gk703)
- [Read-only view: Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Gm3e1Ww)
- [Edit view: Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Jn3mY79)
- [Edit view: Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Omxl74R)

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
