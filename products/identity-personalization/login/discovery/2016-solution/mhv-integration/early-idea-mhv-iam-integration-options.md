# MHV Login Federation Options

## (1) Liferay SAML Provider Plugin

A new version of MyHealtheVet that is currently in beta (https://www.myhealth.va.gov/beta.html) is based on Liferay. Liferay has a SAML 2.0 Provider feature that federates logins.

### Work involved:

 - Setup and configure MHV Liferay SAML 2.0 Provider plugin to respond to authentication requests from ID.me (in progress) (MHV)
   - ~~Encountered an issue with SSL termination at the reverse proxy level, MHV team is investigating.~~ Resolved 9/12
   - Encountered issue with proxy redirects, may be a terminal blocker.
 - Add additional data fields from MHV eVault (email, full name, DOB, SSN, etc.) to SAML assertion. (MHV)
   - MHV team has Liferay consultants available to assist
 - Customize login and consent pages as needed. (MHV + vets.gov)

### Unknowns

 - State of login and consent pages

### Estimated completion date

~~10/1~~ Unknow

### Status

9/13 - Unable to resolve issues around proxy redirects due to way in which MHV utilizes reverse proxies + Liferay.

## (2) IDP application connected to MHV eVault

Install (Shibboleth) or build (saml_idp gem) a SAML IDP that connects to the MHV system to authenticate users (either through eVault or LDAP) and retrieve information from eVault relevant to the user (email, full name, etc).

### Work involved

 - Setup and configure a SAML IDP that has access to the MHV eVault and LDAP services (in progress) (vets.gov)
 - Determine how authentication happens (either via eVault service or direct to LDAP) (in progress) (MHV + vets.gov)
  - MHV is going to provide us with access to their source code to reverse engineer.
 - Implement authentication on the back end (vets.gov)
  - MHV needs to provide us documentation and access to the eVault system and/or LDAP service
 - Integrate with eVault to pull the user information
  - MHV needs to provide us documentation and access to the eVault system
 - Design the login and consent page to look similar to MHV (vets.gov)

### Unknowns

 - Authentication mechanism
 - Integration complexity/feasibility with eVault
 - Integration complexity with LDAP (likely low)

### Estimated completion date

Unknown, ~~likely 10/15~~

### Status

9/19 - requested access to source code and development environments, meeting with MHV team later this week.

## (3) IDP application connected to MHV LDAP

Install (Shibboleth) or build (saml_idp gem) a SAML IDP that connects to the MHV LDAP system to authenticate users, retrieve any information available on user via LDAP.

### Work involved

 - Setup and configure a SAML IDP that has access to the MHV LDAP service
 - Retrieve user information from LDAP
 - Design the login and consent page to look similar to MHV

### Unknowns

 - Integration complexity with LDAP (likely low)

### Problems

 - LDAP system does not have access to full set of user information
 - LDAP system contains only credential information, does not contain information or logic to determine if a MHV account has been disabled.

### Estimated completion date

Unknown, likely 10/1
