# User flows for creating a new Login.gov and ID.me account on VA.gov and VA mobile app
## Synthesis of audit findings

# Overview
Based on [user research for secure sign-in transition changes to VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Research/2024-08%20Sign%20in%20transition), one [key finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md#key-findings) was that most research participants experienced technical issues when creating a new account with a modern Credential Service Provider (CSP). This included both ID.me and Login.gov accounts.

This audit documents the user flow for creating a new Login.gov and ID.me account on both VA.gov and the VA mobile app (including identity verification). The goal was to identify opportunities to improve the user experience for Veterans setting up a new modern account.

## User flows with annotations

- [Create Login.gov account on VA.gov](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=25-335&t=t4eCz395VCmkjsFT-4)
- [Create Login.gov account on VA mobile app (includes identity verification)](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=25-217&t=t4eCz395VCmkjsFT-4)
- [Create ID.me account on VA.gov](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=25-296&t=t4eCz395VCmkjsFT-4)
- [Create ID.me account on VA mobile app (includes identity verification)](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=25-112&t=t4eCz395VCmkjsFT-4)

## Touchpoints documented
- VA.gov
- VA mobile application
- Login.gov
- ID.me
- Email
- Text

# Key findings

## Gaps in the user flow
**Summary:** instances where the user needs to manually navigate to another page in order to move forward.
- Unclear eauth timeout error messages are overly technical and don't contain next steps.
- The user needs to navigate manually to VA.gov after verifying their email for ID.me.
- [Link to detailed findings](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=30-471&t=Wh11CihOhFh7Lcxm-4).

## Unclear UX
**Summary:** unexpected friction in the user experience, including unclear interactions and content.

- The same phone number I used to set up MFA failed to pass identity verification. Volunteers at in-person signup days confirmed through [Login.gov](http://login.gov/) Help Desk:
    - User's name and phone number must typically match a public records check.
    - If name on [Login.gov](http://login.gov/) account doesn't match phone accountholder doesn't match, it will likely get denied UNLESS user has had the phone for at a minimum 2 years (but sometimes longer).
        -   Note: in  my case, I've had this phone number for 20 years and it failed to pass.
    - Having multiple lines under varying names can also cause denial in verification.
- When identity verification isn't successful on Login.gov, users who need to verify in person can do so at their local US Postal Service. To search for USPS locations, users are **required** to search with a detailed address that includes **all** of the following fields: Street address, City, State, Zip Code. Conversely, [USPS only requires a zip code to search for locations on their website.](https://tools.usps.com/locations/)
- "Authentication method" language was flagged as unclear during research, but the term is defined and explained in earlier screens within the user flow.
- When uploading documents for identity verification on ID.me, it's not clear that the user has the option to take a photo (language says "Select" photo).
- After creating an unverified Login.gov account, the VA mobile app displayed an unclear warning message banner, which says: "Your email address has already been confirmed."
- [Link to detailed findings](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=30-464&t=PPDJK4XilglCYOwC-4).

## Inconsistent experiences
**Summary:** other ways the account creation process differed between CSPs.
- ID.me has email touchpoints to confirm each step of the process. Login.gov only verifies the email address.
- ID.me prompts the user to provide consent to collect and store senstive information, while Login.gov does not.
- [Link to detailed findings](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=30-458&t=PPDJK4XilglCYOwC-4).

## All findings

[Link to all detailed findings](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=30-457&t=nGBolF7UdIem4LOC-4).

# Next steps

- Content recommendations for improved eauth error messages (collaboration with IAM team)
- Share UX recommendations with support contacts at Login.gov and ID.me.
