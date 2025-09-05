## ATO Documentation: Veteran Status Card
**_Last Updated: 09/03/2025_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?
  - Veteran Status Card
2. Describe its purpose in a few sentences.
  - The Veteran Status Card is a digital card that eligible Veterans can access in their Profile on va.gov or the mobile app. It doesn't entitle them to any benefits, it is just to prove their service to businesses and organizations offering Veteran discounts. The card has their name, latest period of serivce, DoD ID number, and disability rating on it.
3. If you represent multiple products, please describe the relationship between them, if there is any.
  - We represent multiple products but no other product we own relates to this one.
4. What is the expected duration of your project? This information helps us understand how our processes need to adapt
  - We maintain this product so there are always items on our roadmap for it. In the short term we are planning to create a shared service that both va.gov and the mobile app can pull from so eligibility logic and messaging remains consistent.

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
  - Project maintained by our team exists within vets-api and vets-website
2. List repos used by your team, provide links.
  - We use two internal services to provide data for this project:
	  - [Lighthouse VSH&E API]([url](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current))
	  - [Profile API]([url](https://qa.vaprofile.va.gov:7005/profile-service/swagger-ui/index.html?urls.primaryName=ProfileServiceV3))
3. Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable.
  - Lighthouse API team: Use [Developer portal support](https://developer.va.gov/support/contact-us)
  - Profile API team: Believe best place to reach them is through [this DSVA channel](https://dsva.slack.com/archives/C7TE0PFTL)
4. List other groups you know use your repos.
  - Our API and backend business logic is also used by the MFS mobile team

#### Tools
1. List CI/CD or Infrastructure as Code tools.
  - We are bound to the CI/CD tools implemented on vets-api and vets-website. Nothing extra from our team.
2. Describe where each tool is hosted and if they handle PII.
  - N/A
3. List software included in deployment or generate SBOM.
  - N/A
4. List all packages/plugins/modules/gems/etc. Include version numbers.
  - We use packages/gems that are available in vets-api and vets-website

#### Connections
1. List the connections your team makes/maintains with systems outside the Platform AWS Environment.
  - We use two internal services to provide data for this project:
    - [Lighthouse VSH&E API](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current)
    - [Profile API](https://qa.vaprofile.va.gov:7005/profile-service/swagger-ui/index.html?urls.primaryName=ProfileServiceV3)
  - We use Datadog to log and monitor this application.
2. Are these connections Internal or External to the VA?
  - Internal
3. Do you have a POC? Please list.
  - Use [Developer portal support](https://developer.va.gov/support/contact-us) to contact LH API team
  - Believe best place to reach Profile API team is through this [DSVA channel](https://dsva.slack.com/archives/C7TE0PFTL)
4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).
  - For the requests to LH API, we are using the Faraday connection as setup in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/veteran_verification/configuration.rb) which uses the base `Common::Client::Configuration::REST` found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb).
  - For requests to Profile API, we are using the Faraday connection setup found in [this config file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/va_profile/configuration.rb#L14).
5. List the types of PII shared (in each direction) with this connection.
  - In regards to LH API requests, we send the veteran's ICN as required by the LH API to identify the veteran and the LH API response includes the ICN and the individual's veteran status.
  - In regards to Profile API requests, the [MilitaryPersonnel::Service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/va_profile/military_personnel/service.rb#L32), which we utilize in our implementation, sends along the EDIPI and returns Service History information for the veteran.
6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.
  - I don't believe we do, think these connections are covered by broad formal agreements covering all vets-api requests to Lighthouse APIs and the VA Profile API.

#### Data Flow Diagram
The following is a data flow diagram that shows this product’s relationship to Platform:
<img width="1653" height="1511" alt="Vets Status Data Flow Diagram" src="https://github.com/user-attachments/assets/f567cb26-f4be-49a1-906d-5bf10c692074" />

