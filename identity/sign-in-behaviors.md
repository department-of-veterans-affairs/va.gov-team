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


### Dashboard
- IF the user logs in from the VA.gov homepage, they are taken to their dashboard after logging in
- ~IF the user logs in from any page except the homepage, they stay on the page they're currently on~ <-- discussion necessary for this; we have a vast content ecosystem and need to be thoughtful about behavior (8/9)
- IF the user is logged in, from anywhere on the site they can click "My VA" from the Account menu (in the global header) and that takes them to their dashboard
- IF the user is logged in or not, from anywhere on the site, when they click the VA logo in the top left corner (in the global header) they are taken to the VA.gov homepage
