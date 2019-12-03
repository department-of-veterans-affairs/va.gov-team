# Overall philosophy

Use an existing API if it's available and will provide what's needed to meet core product functionality and performance standards. If the experience (both user experience and business process experience) for the product in question would be significantly deprecated with any of our existing options, then we need more technical discovery to determine how to create a new service - i.e. should CSRA (or other) build a middle service, or should it be a direct connection that the Vets.gov team builds.

*(Note: "significantly deprecated" is a judgement call to be made by the Team Lead in consultation with their implementation team.)*

### How to find out what services exist that we could explore
- Review Vets.gov [data source documentation](/)
- Ask stakeholders, engineering lead, team lead, and/or partners what other services they're aware of across VA that might be worth looking at

### How to determine if an existing service meets our functionality and performance needs
- What kinds of simplifications would be required when building against this service?
- Would we need branch logic or conditions?
- What data is in there beyond what we need (i.e. is it too bloated or complex for what we need)?
- Is there data we need that's missing?
- How reliable is it?
- Are there decent routes available for resolving issues between sources?

### How to determine who should create a new service if needed?
- Is the data underneath changing frequently?
- For Getting or Posting data, will it have to communicate with more than one system?
- Is there a lot of logic needed to transform the data into what we need for the product?
