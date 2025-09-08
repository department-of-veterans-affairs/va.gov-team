## ATO Documentation: Paperless Delivery
**_Last Updated: 09/05/2025_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?

  - Paperless Delivery

2. Describe its purpose in a few sentences.

  - Allows users to indicate that they would like to receive their 1095-B forms electronically and without any paper being mailed to them. This feature can be extended to include other forms in the future.

3. If you represent multiple products, please describe the relationship between them, if there is any.

   - We represent multiple products and the only one kind of related to Paperless Delivery is 1095-B. We have a separate document that covers that product.

4. What is the expected duration of your project? This information helps us understand how our processes need to adapt

  - This product will be complete by end of year, but we will be responsible for the va.gov portion of it for the foreseeable future.

#### AWS Resources
1. List AWS services used.

  - None.

2. Describe named instances of each service used.

  - N/A

3. Which of your resources handle PII? List the types of PII.

  - N/A

4. Do you utilize any other cloud resources beyond VA.gov?

  - No.

#### Repositories
1. List repos maintained by your team, provide links.

   - vets-api (refer to codeowners file for specific files)
   - vets-website (refer to codeowners file for specific files)

2. List repos used by your team, provide links.

   - None that are relevant to this feature.

3. Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable.

  - N/A

4. List other groups you know use your repos.

  - N/A

#### Tools
1. List CI/CD or Infrastructure as Code tools.

  - This feature exists in the vets-api and vets-website and is subject to their CI/CD pipelines.

2. Describe where each tool is hosted and if they handle PII.

  - N/A

3. List software included in deployment or generate SBOM.

  - N/A

4. List all packages/plugins/modules/gems/etc. Include version numbers.

  - N/A

#### Connections
1. List the connections your team makes/maintains with systems outside the Platform AWS Environment.

  - VA Profile - fetches and updates communication preferences

2. Are these connections Internal or External to the VA?

  - Internal

3. Do you have a POC? Please list.

  - Michael Richard

4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).

  - Unknown. The connection to VA Profile has existed for years. We made no changes for Paperless Delivery.

5. List the types of PII shared (in each direction) with this connection.

  - None.

6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.

  - No.

#### Data Flow Diagram
The following is a data flow diagram that shows this product’s relationship to Platform:
