### MHV & VFT tools have the same logic and user flow
- **If a user is not logged in,** they will land on a static page in front of the tool. From there the user will be asked to log in. 
- **If a user is logged in but does not have the necessary account type for the tool,** they will be prompted to upgrade their account and taken through the account upgrade flow on VA.gov. Then:
- **If a user is logged in with the account type necessary for the tool,** they will be taken directly to the tool.
  - MHV tool opens in a new tab with the user already logged in (SSO)
  - VFT tool loads in the same window

### eBenefits tools have the same logic and user flow regardless of whether the user is logged in or not
- User lands on a VA.gov static page in front of each eBenefits tool
  - Each tool has its own custom page, not a universal page for every tool
- From the static page they can click directly to the eBenefits tool
- eBenefits tool page opens in a new tab
- User must log in to eBenefits from that page, then will be taken to the tool
