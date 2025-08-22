## ATO Documentation: 1095-B Tax Form
**_Last Updated: MM/DD/YYYY_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?
1095-B Tax Form
2. Describe its purpose in a few sentences.
Veterans can log in to va.gov and download their 1095-B tax form so they can report health coverage when they file taxes. There was no way to view this form digitally before this page on va.gov was built: https://www.va.gov/records/download-your-irs-1095-b/
3. If you represent multiple products, please describe the relationship between them, if there is any.
We represent multiple products and the only one kind of related to 1095-B is Paperless Delivery. We will have a separate document that covers that product.
4. What is the expected duration of your project? This information helps us understand how our processes need to adapt
We maintain this product so there are always have items on our roadmap for it. In the short term we are rearchitecting the backend to pull tax data from a new API endpoint rather than the current way of storing and reading files from S3.

#### AWS Resources
1. List AWS services used.
2. Describe named instances of each service used.
3. Which of your resources handle PII? List the types of PII.
4. Do you utilize any other cloud resources beyond VA.gov?

#### Repositories
1. List repos maintained by your team, provide links.
2. List repos used by your team, provide links.
3. Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable.
4. List other groups you know use your repos.

#### Tools
1. List CI/CD or Infrastructure as Code tools.
2. Describe where each tool is hosted and if they handle PII.
3. List software included in deployment or generate SBOM.
4. List all packages/plugins/modules/gems/etc. Include version numbers.

#### Connections
1. List the connections your team makes/maintains with systems outside the Platform AWS Environment.
2. Are these connections Internal or External to the VA?
3. Do you have a POC? Please list.
4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).
5. List the types of PII shared (in each direction) with this connection.
6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.

#### Data Flow Diagram
The following is a data flow diagram that shows this product’s relationship to Platform:

