# Contract Testing
Contract testing on VA.gov is accomplished using Pact.

Pact is a tool that enables consumer-driven contract testing (CDCT) by defining a contract between service consumers and providers (e.g. `vets-website` applications and `vets-api`). As explained by Pact, “Contract testing is a technique for testing an integration point by checking each application in isolation to ensure the messages it sends or receives conform to a shared understanding that is documented in a 'contract'.“

In this way, Pact enables VFS teams to test integration points with `vets-api` in a non-production environment. This gives VFS teams the ability to ensure that their app is production-ready, and helps VSP ensure that platform-wide changes are non-breaking. Pact allows VFS and VSP to catch issues with integrations before they reach production.

As of 1/7/21, VSP is in the process of rolling out Pact to VFS teams.

--- 

## Documentation
* [Using Pact for contract testing on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/contract-testing/how-to-use-pact-for-contract-testing.md)
* [VSP’s contract testing policy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/contract-testing/how-to-use-pact-for-contract-testing.md#requirements)
* [Pact product documentation](https://docs.pact.io/)
* [Pact broker dashboard](https://dev.va.gov/_vfs/pact-broker/)

---

## Points of contact
For support with contract testing or Pact in particular, please reach out to Lindsey H (VSP BE Tools team) & Eugene D (VSP FE Tools team) in the #vfs-platform-support Slack channel. Please avoiding direct messaging for support. 

If those contacts are unavailable, please tag the frontend and/or backend support developer in the same channel (#vfs-platform-support#). You can find out who’s on support by viewing the channel description.

(Points of contact last updated 1/7/21)

---

## Examples

[Search example in Pact broker](https://dev.va.gov/_vfs/pact-broker/pacts/provider/VA.gov%20API/consumer/Search/latest)

[Backend configuration of search](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3)

[Frontend configuration of search](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/tests/search.pact.spec.js)

---
