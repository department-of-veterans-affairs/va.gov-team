# Ask VA overview for VA.gov Platform.md
This doc provided requested info for the VA.gov Platform team as they're defining their security boundary. VFS teams are included in VA.gov's Authority to Operate (ATO). This is also just a helpful overview for Ask VA!

In this doc:
- POC
- AWS Resources
- Repos
- Tools
- Connections
- Data flow diagram
- ## Connections with systems outside Platform AWS environment

The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment.

## POC
What is the name of your product(s)/system(s)?
Describe its purpose in a few sentences.
If you represent multiple products, please describe the relationship between them, if there is any.
What is the expected duration of your project? This information helps us understand how our processes need to adapt

## AWS Resources
- List AWS services used
- Describe named instances of each service used
- Which of your resources handle PII? List the types of PII
- Do you utilize any other cloud resources beyond VA.gov?

## Repos
- List repos maintained by your team, provide links
- List repos used by your team, provide links
- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable
- List other groups you know use your repos
 
## Tools
- List CI/CD or Infrastructure as Code tools
- Describe where each tool is hosted and if they handle PII
- List software included in deployment or generate SBOM
- List all packages/plugins/modules/gems/etc. Include version numbers
 
## Connections
- List the connections your team makes/maintains with systems outside the Platform AWS Environment
- Are these connections Internal or External to the VA?
- Do you have a POC? Please list
- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
- List the types of PII shared (in each direction) with this connection
Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it

## Data flow diagram
Provide a data flow diagram that shows your product’s relationship to Platform

Reference: [What is considered PII?](https://dsva.slack.com/archives/C01CJV0L9PS/p1751551763852079)
