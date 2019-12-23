# MyHealtheVet / Vets.gov SAML Integration Project Plan

### Required Tasks
The following tasks have been identified and are required to complete the integration.

#### Task 1: Install and configure the Liferay SAML 2.0 Provider plugin to MyHealtheVet to federate identities to ID.me
This consists of:

1. Installing the Liferay SAML 2.0 Provider plugin to a lower environment.
2. Configuring the Liferay SAML 2.0 Provider plugin to federate identities to ID.me's credential broker in a lower environment.
3. Testing federated authentication in a lower environment.

The same steps must be taken in the production environment as well.

#### Task 2: Connect MyHealtheVet Liferay to eVault to add additional attributes to the SAML assertion returned by the Liferay SAML 2.0 Provider plugin.
At minimum, ID.me requires:
 - MBUN (Meaningless But Unique Identifier)

The following attributes are highly desired:
 - Email address

If the above are only optional on the MyHealtheVet side, they should be included when available.

The following attributes are desired:

 - Full name (First, middle name or middle initial, last)
 - Date of Birth
 - Social Security number
 - MHV Correlation ID
 - Gender

Completion of this task requires that the MyHealtheVet be integrated with the Liferay system, and the associated attributes be made available to the Liferay SAML 2.0 Provider plugin, and incorporated into the SAML assertion returned by the plugin.

### Potential Tasks
The following tasks may be required after further discovery.

1. Customization of the MyHealtheVet Liferay SAML 2.0 Provider plugin login page.
2. Customization of the MyHealtheVet Liferay SAML 2.0 Provider plugin consent page.
