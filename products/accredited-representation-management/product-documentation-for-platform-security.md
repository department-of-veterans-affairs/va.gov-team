POC

- What is the name of your product(s)/system(s)?

  - Find A Representative

  - Appoint a Representative (form 2122, 2122a)

  - Representative Status My VA/Profile

  - Representative Status Widget

  - Accredited Representative Facing Form 21a

- Describe its purpose in a few sentences.

  - Find A Representative - Allows veterans to find an accredited representative in their area

  - Appoint a Representative (form 2122, 2122a) - Allows veterans to appoint an accredited representative as their POA by completing and downloading a PDF version of form 2122 and 2122a, or by digitally submitting form 2122

  - Representative Status My VA - Displays the veteran’s POA in their Profile

  - Representative Status Widget - Displays the veteran’s POA on a widget that can be placed on any page on VA.gov

  - Accredited Representative Facing From 21a - An online application for accreditation as a claims agent or attorney with the Department of Veterans Affairs

- If you represent multiple products, please describe the relationship between them, if there is any.

  - All of our products except for Form 21a use the same vets-api Postgres database tables and therefore also rely on the processes to update the tables:

    - `veteran_representatives`

    - `veteran_organizations`

    - `accredited_individuals`

    - `accredited_organizations`

    - `accreditations`

  - By the very nature of the Representative Status Widget being a widget, it is used within Find a Representative, Appoint a Representative, and Representative Status in My VA/Profile

- What is the expected duration of your project? This information helps us understand how our processes need to adapt

  - The FAR/ARM contract ended on August 6, 2025

AWS Resources

- List AWS services used

  - All of the services used to support the [VA.gov](http://va.gov) website as our products are sections within the [VA.gov](http://va.gov) website

- Describe named instances of each service used

  - NA

- Which of your resources handle PII? List the types of PII

  - We handle and publish representatives’ names, phone numbers, email addresses, and addresses in our products but that information is not private; it’s also published [here](https://www.va.gov/ogc/apps/accreditation/index.asp).

- Do you utilize any other cloud resources beyond [VA.gov](http://va.gov)?

  - No

Repos

- List repos maintained by your team, provide links

  - NA

- List repos used by your team, provide links

  - <https://github.com/department-of-veterans-affairs/vets-api>

  - <https://github.com/department-of-veterans-affairs/vets-website>

  - <https://github.com/department-of-veterans-affairs/vets-json-schema>

- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable

  - No

- List other groups you know use your repos

  - NA

Tools

- List CI/CD or Infrastructure as Code tools

  - All the CI/CD tools used by the Platform Team to power CD/CD for [VA.gov](http://va.gov) (Terraform, GitHub Actions, etc.)

- Describe where each tool is hosted and if they handle PII

  - Please ask the VA.gov Platform Team

- List software included in deployment or generate SBOM

  - Please ask the VA.gov Platform Team

- List all packages/plugins/modules/gems/etc. Include version numbers

  - vets-api - see <https://github.com/department-of-veterans-affairs/vets-api/blob/master/Gemfile.lock>

  - vets-website - see <https://github.com/department-of-veterans-affairs/vets-website/blob/main/yarn.lock>

Connections

- List the connections your team makes/maintains with systems outside the Platform AWS Environment

  - OGC Accreditation API

    - Prod - <https://ogccoapp01.dva.va.gov:4501>

    - Staging - <https://ogccotst1.dva.va.gov:4501>

  - OGC 21a API

    - Prod - <https://ogccotst1.dva.va.gov:4701>

    - Staging - <https://ogccotst1.dva.va.gov:4501> (the same as the Accreditation API)

- Are these connections Internal or External to the VA?

  - Internal

- Do you have a POC? Please list

  - Jennifer Bertsch, Jennifer.Bertsch@va.gov

- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)

  - TLS 1.2, VA Internal Cert

- List the types of PII shared (in each direction) with this connection

  - Accredited representative and organization data

- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it

  - The MOU also contains more details on encryption and a table of POCs. Ken and Casey from Platform Security have been helping us with it. The draft is [here](https://dvagov-my.sharepoint.com/:w:/r/personal/samuel_raudabaugh_va_gov/Documents/Documents/scla_gclaws_mou_isa_-_draft_08.12.2025_sam_edited.docx?d=w7d1a8db9e1b24acdaf7d32d4d2ff367a&csf=1&web=1&e=gDlDwJ)

Provide a data flow diagram that shows your product’s relationship to Platform.

- Accreditation API [Diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/accreditation-api/technical-documentation/images)
- Appoint a Representative [Diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative/technical-documentation/images/v2)
- Find A Representative [Diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/technical-documentation/arm-architecture-diagrams.pdf)
- Representative Status Widget [Diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status/technical-documentation/architecture_diagrams.pdf)
