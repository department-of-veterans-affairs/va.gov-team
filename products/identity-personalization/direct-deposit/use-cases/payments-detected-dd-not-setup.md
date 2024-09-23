# Direct deposit: user receives payments, but hasn't set up direct deposit for any payment type

**Last update: February 14, 2024**

If an ID.me or Login.gov LOA3 user (identity verified) logs in to VA.gov, navigates to the direct deposit page, and we detect they're receiving payments, they'll see different messages in each payment section of the page.

## UX
- [Desktop mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-500&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Mobile mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-139&mode=design&t=JeBw2hRh9J5QSuL7-11)

### Adding direct deposit information
- Content prompts user to add account information
- Clicking the `Add` button will enable edit mode within this section. A user can add their routing number, account number, and account type.
- Bank name will be automatically filled in based on the routing number; users can't manually add their bank name.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)


## Codes

N/A

## How to reproduce

**PLEASE DO NOT SAVE DIRECT DEPOSIT INFORMATION FOR THESE USERS. There is no way to delete it, so once it's added, we no longer have users where we can check this use case.**

1. Log into staging with users 80, 82, 230. 
2. Navigate to Profile > Direct deposit
3. Do not save any account information for this user.
