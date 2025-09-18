## ATO Documentation: Chapter 36
**_Last Updated: 09/17/2025_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?
  - Chapter 36, Personalized Career Planning and Guidance, PCPG
2. Describe its purpose in a few sentences.
  - Offers free educational and career guidance, planning, and resources to Veterans and their dependents who are eligible for a VA education benefit.
3. If you represent multiple products, please describe the relationship between them, if there is any.
  - No relevant relationship between products
4. What is the expected duration of your project? This information helps us understand how our processes need to adapt
  - IIR expects to own and interate on the Chapter 36 form through 2026. Project scope may vary depending on stakeholder needs.

#### AWS Resources
1. List AWS services used.
  - Parameter Store
2. Describe named instances of each service used.
  - No unique instances, runs on vets-api and vets-website resources.
3. Which of your resources handle PII? List the types of PII.
  - No unique resources, therefore no PII handled by unique resources.
4. Do you utilize any other cloud resources beyond VA.gov?
  - No

#### Repositories
1. List repos maintained by your team, provide links.
  - Project maintained by our team exists within [vets-api](https://github.com/department-of-veterans-affairs/vets-api/) and [vets-website](https://github.com/department-of-veterans-affairs/vets-website/)
2. List repos used by your team, provide links.
  - N/A
3. Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable.
  - N/A
4. List other groups you know use your repos.
  - We are not aware of any other groups that use Chapter 36 app code

#### Tools
1. List CI/CD or Infrastructure as Code tools.
  - We are bound to the CI/CD tools implemented on vets-api and vets-website - nothing extra from our team
2. Describe where each tool is hosted and if they handle PII.
  - We use Sidekiq in this app to process background jobs [as made available in vets-api]([url](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/submit_career_counseling_job.rb#L7)). The Sidekiq jobs do handle PII. More info in "Connections" section.
3. List software included in deployment or generate SBOM.
  - N/A
4. List all packages/plugins/modules/gems/etc. Include version numbers.
  - We use packages/gems that are available in vets-api and vets-website

#### Connections
1. List the connections your team makes/maintains with systems outside the Platform AWS Environment.
  - We use several services in this project to provide data, process applications, and log/monitor:
	  - [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake)
	  - VA Notify
	  - Datadog (to log and monitor this application)
	  - Sentry (to log and monitor this application)
2. Are these connections Internal or External to the VA?
  - I believe all would be considered internal except for Datadog and Sentry.
3. Do you have a POC? Please list.
  - LH API team: use [Developer portal support](https://developer.va.gov/support/contact-us) to contact
  - VA Notify: Alexander Evan Parish (Tech Lead)
4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).
  - For requests to LH API, we are using the Faraday connection as setup in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/benefits_intake_service/configuration.rb) which uses the base `Common::Client::Configuration::REST` found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb). This is made available by the Benefits Intake Service, which is not owned by our team.
  - For requests to VA Notify, we are using the Faraday connection as setup in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/va_notify/lib/va_notify/configuration.rb) which uses the base `Common::Client::Configuration::REST` found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb). This is made available by the VA Notify library, which is not owned by our team.
  - Asynchronous processing handled by our [Sidekiq Job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/vre/submit1900_job.rb) receives user_uuid when instantiated, queries for user email, and obtains claimant's first name.
5. List the types of PII shared (in each direction) with this connection.
  - PII sent to LH API includes the form data the claimant provides to create the claim including name, email, address, DOB, etc.
  - PII sent to VA Notify includes veteran email and name.
6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.
  - I don't believe we do, think these connections are covered by broad formal agreements covering all vets-api requests to these internal services.

#### Data Flow Diagram
The following is a data flow diagram that shows this product’s relationship to Platform:

<img width="1898" height="1511" alt="mermaid-diagram-2025-09-16-130908" src="https://github.com/user-attachments/assets/0296afc0-3537-426d-8431-4629d7313704" />
