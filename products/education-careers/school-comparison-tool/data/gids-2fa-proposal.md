### Executive Summary
I propose using Vets.gov ID.me login to satisfy the 2FA mandate for GI Bill Data Service. GIDS users will log in to the main vets.gov site, then navigate to the GIDS tool, where their vets.gov API token will be validated in order to initiate a GIDS-specific browser session.

### Background
- GIDS is an administrative tool used to aggregate public data about education institutions into a form that can be consumed by the GIBCT feature of Vets.gov. Its user base consists of VA stakeholders and (currently) one external stakeholder.
- VA has issued a mandate that internal tools need to enforce multifactor authentication. The primary path to achieve this mandate is PIV-based authentication via SSOi or SSOe. It is not clear whether PIV authentication is the only acceptable path or whether other multifactor options are acceptable.
- Integration with SSOi is not feasible because the one key external stakeholder is neither a VA employee nor a VA contractor, and is therefore not eligible to have VA VPN access. SSOi is only usable from the VA network.
- Integration with SSOe, while technically feasible, is not acceptable policy-wise by the IAM team because the tool is not sufficiently external-facing to justify integration with SSOe. 
- ID.me has recently been added as a credential option for SSOe - meaning that ID.me authentication has been vetted and accepted as an enterprise SSOe credential. 

### Proposal
Use the existing Vets.gov ID.me login mechanism to enforce access to GIDS. Because the GIDS application architecture is different from the rest of Vets.gov, we would not re-implement the entire SAML authentication flow and token mechanism. Instead we would use what I am calling a "re-authentication" pattern as described below.

1. User signs in to https://www.vets.gov. This adds a vets.gov API token to the browser session storage. 
2. User navigates within the same browser session to https://www.vets.gov/gids/login. Since GIDS is in a subdomain of the main site, the API session token is still present and available.
3. The GIDS login page makes a POST request and supplies the API token (as a header, or in the request body) to a new GIDS re-authentication controller.
4. The GIDS re-authentication controller in turn uses the token to make a request to the vets-api `/v0/user` API endpoint. This returns the authenticated vets.gov user profile.
5. Assuming the GIDS authentication controller gets a valid response back, it can use the user profile to verify that the user's email is in the GIDS authorized user database, and can use the `multifactor` attribute on the user profile to ensure that the user is enrolled in multifactor authentication. If these conditions are satisfied, then the GIDS controller can initialize a standard Rails HTTP session for the user and redirect them to the GIDS dashboard. If any conditions are not satisfied, bounce the user to a suitable error page.

For the purposes of this integration, I suggest that LOA1 + multifactor is suitable assurance. GIDS manages publically available data about educational institutions, there is no PII or PHI involved. This is also an expedient decision since the key external user resides outside the US and may not be able to complete ID.me identity proofing. 

If there is consensus that this approach is technically feasible, I can write up a high-level memo proposing the overall approach and justifying why ID.me multifactor login satisfies the requirements of the 2FA mandate even though it does not use SSOi/SSOe directly.
