# Feature Toggles v0.2
Feature Toggles will enable teams to test out new functionality (Applications, features, Vagov Content Pages, Metalsmith) in the VSP development, staging or production environments for a set of users. Feature toggles can be used in both vets-api and vets-website.
### Toggle can activate new functionality for:
- All users at once
- A percentage of logged in users
- Specific set of users (determined by email address)
- Critera defined in a method

### Toggles are administrated
- By a select set of administrators (determined by email address)
- To gain access as an administrator 


## Product Guides\Documentation:
- [Feature Flag Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/feature-toggles.md)
- [Front-End feature flags Overview](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags/)


## Product Responsibility (Last updated: 1-16-20 )
Features Toggles curently are a shared responsibility by the FE and BE Tools Teams.
- Troubleshooting: #vsp-product-support
- Onboarding: #vsp-product-support
- Maintenance: #vsp-tools-fe or #vsp-tools-fe
- Training Documents: #vsp-tools-fe or #vsp-tools-fe
- Product Feedback or New Feature Requests: #vsp-tools-fe or #vsp-tools-fe

## Examples or References of usage:
- Direct Deposit Team used feature toggles for a % rollout - [Ticket](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/1674)

## Version Notes:
### Release v0.2 - Sprint 11 (10-29-19)
Adding basic user management and logging to the Flipper Admin Portal so we can better regulate and track "who" toggled "what" and "when" - [#1764](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1764)
- Updated UI to improve the experience in setting up % of useres

### Release v0.1 
- Added the ability for VSA teams to leverage Flipper to create feature\release toggles.
- Added the ability for VSA teams to allow only a % of users to be affected by a feature\release toggle to help support better QA efforts, beta and UAT testing.


## Feature Requests:
- Unique URL for testing - We were hoping that the Auth Exp team would be able to pilot these toggles, but they are looking for something to help with Beta & UAT testing. The issue is that the current toggle requires you specify which users are affected by it. The team felt like this was too heavy an ask as it would ultimately lead to UAT or Beta users not knowing what to do. They wanted to a unique url that they could give out that when they clicked on it the user would activate the toggle. This is going to require more discovery and development work to unravel. I will be adding a story into the backlog for this continued work. We are going to look to leverage the existing beta enrollment tool to create a unified experience. [Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1130)
- Add Logging to the Admin Portal & Authenticate Admin Users - We received additional feedback from the VSA teams regarding the need to authenticate users who can access the feature toggles. Teams were just concerned that as they look to rely on them more and more that we need to ensure that only authorized users can access the toggles. In addition, there was a request for logging to added so in case of an issue we can track which user accessed the admin portal and what toggle they activated\deactivated. (Completed in v0.2)

