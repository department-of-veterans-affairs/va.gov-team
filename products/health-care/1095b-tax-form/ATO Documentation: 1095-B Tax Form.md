## ATO Documentation: 1095-B Tax Form
**_Last Updated: 08/27/2025_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?

   - 1095-B Tax Form

2. Describe its purpose in a few sentences.

   - Veterans can log in to va.gov and download their 1095-B tax form so they can report health coverage when they file taxes. There was no way to view this form digitally before this page on va.gov was built: https://www.va.gov/records/download-your-irs-1095-b/

3. If you represent multiple products, please describe the relationship between them, if there is any.

   - We represent multiple products and the only one kind of related to 1095-B is Paperless Delivery. We will have a separate document that covers that product.

4. What is the expected duration of your project? This information helps us understand how our processes need to adapt

   - We maintain this product so there are always items on our roadmap for it. In the short term we are rearchitecting the backend to pull tax data from a new API endpoint rather than the current way of storing and reading files from S3.

#### AWS Resources
1. List AWS services used.

   - S3 bucket for transferring data from enrollmenty system. This process will be deprecated later this year and S3 will no longer be used by this feature.
   - Parameter store

2. Describe named instances of each service used.

   - S3 Buckets dev, staging, sandbox, and production environments:
      - arn:aws-us-gov:ssm:us-gov-west-1:008577686731:parameter/dsva-vagov/vets-api/#{env}/env_vars/form1095_b/s3/bucket

   - We have parameters for each of the following in the dev, staging, sandbox, and production environments:
      - `/dsva-vagov/vets-api/#{env}/env_vars/form1095_b/s3/aws_access_key_id`
      - `/dsva-vagov/vets-api/#{env}/env_vars/form1095_b/s3/aws_secret_access_key`
      - `/dsva-vagov/vets-api/#{env}/env_vars/form1095_b/s3/bucket`
      - `/dsva-vagov/vets-api/#{env}/env_vars/form1095_b/s3/region`

3. Which of your resources handle PII? List the types of PII.

   - PII is transferred in text files via S3 bucket. Includes:
      - first, middle, last name
      - address
      - last four digits of SSN
      - birth date

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

   - None.

2. Are these connections Internal or External to the VA?

   - N/A

3. Do you have a POC? Please list.

   - N/A

4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).

   - N/A

5. List the types of PII shared (in each direction) with this connection.

   - N/A

6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.

   - N/A

#### Data Flow Diagram

The following is a data flow diagram that shows this product’s relationship to Platform:
<img width="720" alt="image" src="https://user-images.githubusercontent.com/93789249/183568394-857d5036-d619-49b0-b138-ee8e9a66d3ef.png">
