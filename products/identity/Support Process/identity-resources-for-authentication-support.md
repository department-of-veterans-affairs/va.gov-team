# **Resources for identity and VA.gov authentication support**

**Who we are**

The OCTO Identity team manages the authentication integration for VA.gov. We work with identity partners to confirm who’s signing in and provide secure access to VA.gov resources. Our team understands how identity and security works across the entire platform.

**How we can help**

We help teams set up and monitor a secure signed in experience for VA.gov applications and services. Schedule [flexible office hours or engineering pairing sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-office-hours.md) with us to collaborate anytime.

## **Recommended troubleshooting steps**

- Search [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN/p1713293899320349) for keywords in your issue to see if it’s come up before.
- Confirm [vets-api and mock data is up to date](https://dsva.slack.com/archives/CSFV4QTKN/p1713297530249979?thread_ts=1713293899.320349&cid=CSFV4QTKN).
- Clear your cache and cookies, as this can solve a lot of common issues.

## **Authentication**

| :white_check_mark: What we do support | :pushpin: Resources that can help |
| --- | --- |
| Authentication errors | [Troubleshooting documentation about authentication errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/troubleshooting_signin.md) |
| Consulting on best practices for frontend and backend engineering | [Shedule a pairing session](https://github.com/department-of-veterans-affairs/va.gov-team/blob/470b2ba8c4c6c1b7cf168737755ce2607fc92954/products/identity/Support%20Process/identity-office-hours.md) |
| Master Persons Index (MPI) integration with [VA.gov](http://va.gov/) | [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/mvi) |
|  | [MPI Service Description documentation](https://dvagov.sharepoint.com/sites/OITEPMOIAM/playbooks/Documents/MPI/VA_MPI_Service_Description.pdf) (requires PIV card) |
| Mocked authentication | [Mocked authentication user guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/d4640bb7398e8b7de94dac54af4273ff27475c46/products/identity/Products/Mocked%20Authentication/readme.md#L4) |
| Sign-in errors | [Login error handling flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/sign-in-error-handling.md) |
|  | [Sign in FAQ](https://www.va.gov/resources/signing-in-to-vagov/) |
| Sign-in Service (SiS) | [Sign-in Service (SiS) overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service) |
|  | [SiS developer documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs) |
| SSOe on VA.gov | [SSOe outage policy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Policies%20and%20Procedures/SSOe_Outage_Response.md) |
| Unified sign-in page (USiP) | [Design documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/unified-sign-in-pages) |
| User account creation | [User account creation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/470b2ba8c4c6c1b7cf168737755ce2607fc92954/products/identity/Products/Design%20Documents/UserAccount_Creation_Flow.md) |
| User attribute rules for authenticated endpoints | [User attribute rules documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/470b2ba8c4c6c1b7cf168737755ce2607fc92954/products/identity/Products/Design%20Documents/UserAttribute_Rules.md) |
|  | [List of user attributes returned for authenticated endpoints](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) |

## **Security**

| :white_check_mark: What we do support | :pushpin: Resources that can help |
| --- | --- |
| Authentication certificate rotation for MPI, SAML, and SiS | [Certificate expiration overview and tracking](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Security/Rotate_certs.md) |
| Policies for LOA required for direct deposit | [Details on the policy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Policies%20and%20Procedures/Require_MFA_VAgov.md) |
| Consulting on best practices or questions about security or metrics | [Schedule office hours](https://github.com/department-of-veterans-affairs/va.gov-team/blob/470b2ba8c4c6c1b7cf168737755ce2607fc92954/products/identity/Support%20Process/identity-office-hours.md) |
| :no_entry: What we don’t support | :pushpin: Resources that can help |
| Direct deposit tool | [Auth experience team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#readme) |
| Security review for applications | [Platform security review process](https://depo-platform-documentation.scrollhelp.site/developer-docs/security-review) |
|  | [Github issue template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/new?assignees=kaipyroami&labels=security-review,platform-security,platform-security-review&projects=&template=privacy-and-security-review.md&title=Readiness+Review+%5BTeam-Name,+Feature-Name%5D) |

## **Policies and compliance**

| :white_check_mark: What we do support | :pushpin: Resources that can help |
| --- | --- |
| Approving pull requests (PRs) on code owned by the Identity team | [Code review policy with list of repos](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Policies%20and%20Procedures/VA.gov%20Identity%20Solution%20Code%20Review%20Policy.md) |
| Policies for Level of Assurance (LOA) required for different [VA.gov](http://va.gov/) resources | [Github documentation about authorization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization.md#authorization) |
|  | [LOA by Credential Service Provider (CSP)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso/ssoe_saml_response_attributes.md) |
|  | [List of user attributes returned for authenticated endpoints](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) |
| SSOe on [VA.gov](http://va.gov/) | [SSOe outage policy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Policies%20and%20Procedures/SSOe_Outage_Response.md) |
| :no_entry: What we don’t support | :pushpin: Resources that can help |
| Local environment setup | [Frontend local enviroment setup](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment) |
|  | [Backend local enviroment setup](https://depo-platform-documentation.scrollhelp.site/developer-docs/developer-setup) |
|  | [Mock data setup](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/a523e46183625ea11bb3ebde02813976cd2dd472/products/identity-personalization/developer/mock_data.md) |
| Testing PRs | [Pull review request best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/pull-request-best-practices) |

## **Datadog**

| :white_check_mark: What we do support | :pushpin: Resources that can help |
| --- | --- |
| Dashboards that monitor authentication performance and logging | [Datadog primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Datadog_primer.md) |
| Dashboards that monitor performance by browser type | [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/3tc-7xs-77j/identity-tots?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1714501880442&to_ts=1714505480442&live=true) |
| Public stats by CSP and [VA.gov](http://va.gov/) authentication service | [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats---public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711913682931&to_ts=1714505682931&live=true) |
| Dashboards that monitor Identity SLOs | [Link to SLO dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1712053821461&to_ts=1712068221461&live=true) |
| :no_entry: What we don’t support | :pushpin: Resources that can help |
| Getting access to Datadog | [Platform documentation on how to get access](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog) |
| Datadog training | [Platform resources for using Datadog](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-acquainted-with-datadog) |

## **Credential Service Providers (CSPs)**

| :white_check_mark: What we do support | :pushpin: Resources that can help |
| --- | --- |
| Level of Assurance (LOA) required for different [VA.gov](http://va.gov/) resources | [LOA by Credential Service Provider (CSP)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso/ssoe_saml_response_attributes.md) |
| Triaging issues that can’t be resolved with CSP documentation | [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) |
| Errors redirecting to [VA.gov](http://va.gov/) from CSP) |  |
| Providing feedback to CSPs |  |
| :no_entry: Managed by CSPs | :pushpin: Resources that can help |
| Individual account management, password reset, errors signing into DS Logon | [Platform documentation about DS Logon integration and incident responses](https://depo-platform-documentation.scrollhelp.site/developer-docs/ds-logon) |
| Individual account management, password reset, errors signing into http://login.gov/ | [Loging.gov test identity proofing](https://developers.login.gov/testing/#testing-identity-proofing) |
|  | [Login.gov developers documentation](https://developers.login.gov/) |
| Individual account management, password reset, errors signing into ID.me | [#idme-va-gov](https://dsva.slack.com/archives/C6WGBD0SW) |
|  | [Platform documentation on ID.me](https://depo-platform-documentation.scrollhelp.site/developer-docs/id-me) |
| Individual account management, password reset, errors signing into My HealtheVet | [Platform documentation on My HealthVet](https://depo-platform-documentation.scrollhelp.site/developer-docs/my-healthe-vet) |

## **Test users**

| :white_check_mark: What we do support | :pushpin: Resources that can help |
| --- | --- |
| Authentication-related issues with test users | [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/mock-users-and-data-helper-functions) |
|  | [Test user account creation guide](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/memos/test-accounts-creation.md) |
| :no_entry: What we don’t support | :pushpin: Resources that can help |
| All test users | [Test user dashboard](https://tud.vfs.va.gov/) (requires PIV card or SOCKS access) |
| Finding test users who meet specific criteria | [Information on how to work with local mock data for test users](https://github.com/department-of-veterans-affairs/vets-api-mockdata?tab=readme-ov-file#add-credential-mocked-data-for-a-new-user---sign-in-service-login) |
| Test user data in downstream systems |  |
| Unlocking test user accounts | [#idme-va-gov](https://dsva.slack.com/archives/C6WGBD0SW) (for ID.me) |

## **Terminology**

### **Active concepts**

- **Identity and Access Management ([IAM](https://dvagov.sharepoint.com/sites/OITEPMOIAM/playbooks/Pages/IAM%20Playbook%20Home.aspx)):** a process to vet users and manage digital identities, and a set of capabilities that support authentication and authorization of user access for VA applications.
- **Integration Control Number (ICN):** this is used as a [primary identifier](https://github.com/department-of-veterans-affairs/va.gov-team/blob/470b2ba8c4c6c1b7cf168737755ce2607fc92954/products/identity/Products/Design%20Documents/UserAccount_Creation_Flow.md) for MPI queries. Only verified users will have an ICN.
- **Level of Assurance (LOA):** guarantees that the user initiating the request is correlated to the identifying information within the User object. There are 4 possible [Levels of Assurance](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication#Authentication-LevelsofAssurance) provided based on the mechanism by which the user authenticated.
- **Master Persons Index (MPI):** contains a [comprehensive record for a VA-affiliated individual](https://depo-platform-documentation.scrollhelp.site/developer-docs/mvi) (not always a Veteran) and links their identity across systems. Formerly known as the Master Veteran Index (MVI).
- **Sign-in Service (SiS):** a client service that authenticates login credentials, and grants access to vets-api resources.
- **Unified Sign-in Page (USiP):** a web-based application on [VA.gov](http://va.gov/) used to authenticate and redirect to external applications.
- **Universally Unique Identifier (UUID):** a 36-character alphanumeric string that can be used to identify information. All [VA.gov](http://va.gov/) users have a UUID.

### **Deprecated concepts**

- **Enterprise Military Information Service (EMIS):** contains information on a veteran's service record from the military. Note that EMIS is now decommissioned, and that data should be coming from VA Profile.
- **Master Veterans Index (MVI):** deprecated term for Master Persons Index (MPI). Changed because individuals logging in and accessing [VA.gov](http://va.gov/) are not always Veterans.

## **Feedback on this documentation?**

- [Submit a new product issue](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/.github/ISSUE_TEMPLATE/1dentity-product-support.yml).
    - Select the **Other** issue type.
    - Enter as much detail as possible about your feedback.
    - Include links and examples, if applicable.
