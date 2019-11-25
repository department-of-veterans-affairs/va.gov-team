GIDS SSOe Handoff

# Background
- GIDS is administrative tool used to manage data about educational institutions, to feed the GI Bill Comparison Tool on Vets.gov
- Administrative UI allows users (VA employees, plus one user at CFPB) to upload CSVs, then does some processing/aggregation to convert the data to the necessary format
- GIDS also exposes the aggregated data via a REST API that vets.gov consumes.

# Authentication Project
- Users currently log in with a username/password. 
- The VA CIO has mandated that all internal tools use PIV authentication for VA employees. 
- To comply with this we will integrate GIDS with the VA’s SSOe (Single Sign On external) service, which is provided by the VA’s IAM team.
- SSOe instead of SSOi (internal) to facilitate access by non-VA employee user. 
- SSOe also supports alternate logons like ID.me, which we will allow for the one non-VA employee user.

# Current Auth Implementation
- Current username/password auth is implemented using Devise, a pretty standard Rails library.
- User table in database
- Click log in, enter username/password, Devise validates, creates a session cookie and makes session information available to Rails code via @session object.
- Not currently any authorization component - all users have equal access.

# SAML Authentication
- User logs in on SSOe site, on a landing page specific to GIDS
- SSOe verifies their credentials (PIV+PIN or ID.me creds)
- SSOe redirects browser to GIDS, sending a SAML assertion to a specified callback endpoint in GIDS application.
- The assertion is signed and encrypted to ensure that it is not altered - keypairs exchanged with SSOe.
- Entire interaction happens via user's browser, no direct network connection between SSOe and GIDS.
- GIDS = Service Provider (SP), SSOe = Identity Provider (IdP)

# SAML Assertion - consumption
- GIDS can decrypt/verify the assertion and use it to establish a session for the indicated user.
- Using ruby-saml Gem, library for parsing SAML assertion - methods to say whether assertion is valid, and if so get traits
- The assertion contains a bunch of traits that identify the user - name, email, etc.
- Traits vary depending on credential used (PIV vs. ID.me)

# Requirements
- Implement a static "logged out" page with a link to the SSOe site
- Implement code to consume SAML assertion and establish a session
  - Reset session contents on login to avoid session fixation attack
- Implement a logout mechanism that tears down a session
  - No need for Single Log Out - no interaction with SSOe for logout
- Maintain existing user database
  - No longer used for authentication
  - But do need for authorization - not everybody with a PIV can use GIDS
  - Also need to restrict credential type for certain users, i.e. VA employees *must* use PIV
  - Finally, user model is referenced in CSV upload model.
- Implement metadata endpoint 
  - Metadata is exchanged with SSOe team to configure GIDS as a service in their infrastructure
  - Also how keys are exchanged

# Integration Process
- We have exchanged metadata to connect vets.gov dev environment with SSOe int environment.
- Work in progress branch in gibct-data-service repo: `pv-ssoe-integration`
- Can get as far as receiving SAML assertion
- Need to implement complete login/logout flows
- SSOe team does QA on the integration to make sure it looks correct to them
  - Need to add their users to user database to enable testing
- Once dev is deemed complete, they will configure in staging, repeat QA, then prod
  - staging/prod work for us is just updated metadata/configuration, implementation will be identical and follow our usual development pipeline.

# Logistics
- Not easy to test SAML callback piece locally because SSOe redirects to fixed callback URL in dev
- `#platform-team` can support you deploying a working branch of GIDS repo to dev.vets.gov/gids to facilitate testing
