## ATO Documentation: Chapter 31
**_Last Updated: 09/09/2025_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?
  - Mike to answer
2. Describe its purpose in a few sentences.
  - Mike to answer
3. If you represent multiple products, please describe the relationship between them, if there is any.
  - Mike to answer
4. What is the expected duration of your project? This information helps us understand how our processes need to adapt
  - Mike to answer

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
  - We are not aware of any other groups that use Chapter 31 app code

#### Tools
1. List CI/CD or Infrastructure as Code tools.
  - We are bound to the CI/CD tools implemented on vets-api and vets-website - nothing extra from our team
2. Describe where each tool is hosted and if they handle PII.
  - We use Sidekiq in this app to process background jobs as [made available in vets-api](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/vre/submit1900_job.rb#L8). The Sidekiq jobs do handle PII, which is encrypted.
3. List software included in deployment or generate SBOM.
  - N/A
4. List all packages/plugins/modules/gems/etc. Include version numbers.
  - We use packages/gems that are available in vets-api and vets-website

#### Connections
1. List the connections your team makes/maintains with systems outside the Platform AWS Environment.
  - We use several services in this project to provide data, process applications, and log/monitor:
	  - BGS (Benefits Gateway Service) via the VA's `bgs-ext` gem
	  - VBMS (Veteran Benefits Management System) [made available in vets-api](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/lib/claims_api/vbms_uploader.rb)
	  - [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake)
	  - RES
	  - VA Notify
    - VeteranReadinessEmploymentMailer
	  - Datadog (to log and monitor this application)
2. Are these connections Internal or External to the VA?
  - I believe all would be considered internal except for Datadog.
3. Do you have a POC? Please list.
  - BGS: No contact
  - VBMS: Alex Mikuliak (Lead Data Architect OIT), Donna Robinson (Program Analyst VBACO - Stakeholder)
  - LH API team: use [Developer portal support](https://developer.va.gov/support/contact-us) to contact
  - RES: Daniel Newman (VBA GovCIO Software Development Manager), Andrew O'Dell (VBA Gov CIO Test Lead), Sunna Bennett (Program Manager)
  - VA Notify: Alexander Evan Parish (Tech Lead)
4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).
  - For requests to BGS, we are using the VA's `bgs-ext` gem which utilizes the service found [here](https://github.com/department-of-veterans-affairs/bgs-ext/blob/master/lib/bgs/services.rb).
  - For requests to VBMS, we are using the [ClaimsAPI::VBMSUploader class](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/lib/claims_api/vbms_uploader.rb) which uses the [VBMS::Client](https://github.com/department-of-veterans-affairs/connect_vbms/blob/master/lib/vbms/client.rb) in the VA's `connect_vbms` gem.
  - For requests to LH API, we are using the Faraday connection as setup in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/benefits_intake_service/configuration.rb) which uses the base `Common::Client::Configuration::REST` found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb). This is made available by the Benefits Intake Service, which is not owned by our team.
  - For requests to RES, we are using the Faraday connection as setup in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/res/configuration.rb) which uses the base `Common::Client::Configuration::REST` found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb).
  - For requests to VA Notify, we are using the Faraday connection as setup in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/va_notify/lib/va_notify/configuration.rb) which uses the base `Common::Client::Configuration::REST` found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb). This is made available by the VA Notify library, which is not owned by our team.
  - Asynchronous processing handled by [our Sidekiq Job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/vre/submit1900_job.rb) receives an user object encrypted via the `kms_encrypted` gem utilized throughout vets-api.
5. List the types of PII shared (in each direction) with this connection.
  - PII sent to BGS includes much of the current_user object including SSN, EDIPI, ICN, name, email, address info, etc.
  - PII sent to VBMS includes the form data the veteran provides to create the claim including name, email, address, DOB, SSN, etc.
  - PII sent to LH API includes the form data the veteran provides to create the claim including name, email, address, DOB, etc.
  - PII sent to RES includes the form data the veteran provides to create the claim including name, email, address, DOB, etc.
  - PII sent to VA Notify includes veteran email and name.
  - PII sent to VeteranReadinessEmploymentMailer veteran participant ID.
6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.
  - I don't believe we do, think these connections are covered by broad formal agreements covering all vets-api requests to these internal services.

#### Data Flow Diagram
The following is a data flow diagram that shows this product’s relationship to Platform:
<img width="5292" height="3160" alt="VR E Data Flow Chart" src="https://github.com/user-attachments/assets/abdd1785-df8c-4191-8e0a-7cbb6c6d72d9" />

