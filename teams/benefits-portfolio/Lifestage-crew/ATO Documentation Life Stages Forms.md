## ATO Documentation: Life Stages Forms


#### POC
1. What is the name of your product(s)/system(s)?

   | Form Name                 | Form Number     |
   | ------------------------- | --------------- |
   | Dependents                | 21-686c, 21-674 |
   | Dependent Verification    | 21-0538         |
   | Pension                   | 21P-527EZ       |
   | Burial                    | 21P-530EZ       |
   | Pension Income and Assets | 21P-0969        |

   

2. Describe its purpose in a few sentences.

   - Veterans can log in to va.gov and fill out these forms to receive benefits, manage their dependents, request compensation for burial expenses.

3. If you represent multiple products, please describe the relationship between them, if there is any.

   - Dependents and Dependent Verification are related to the same topic
   - Pension and Pension Income & Assets are related

4. What is the expected duration of your project? This information helps us understand how our processes need to adapt

   - The Life Stages contract has a duration of three years, concluding in March of 2027.

#### AWS Resources
1. List AWS services used.

   - AWS System Manager --> Parameter store
   
2. Describe named instances of each service used.

   - We have parameters that are used to track flippers and template Id's for VA Notify, but these are not managed by our team.
   
   - We have parameters for VA Notify API Keys
      - /dsva-vagov/vets-api/sandbox/env_vars/vanotify/services/burials/api_key
      
      - /dsva-vagov/vets-api/prod/env_vars/vanotify/services/burials/api_key
      
      - /dsva-vagov/vets-api/staging/env_vars/vanotify/services/pensions/api_key
      
      - /dsva-vagov/vets-api/sandbox/env_vars/vanotify/services/pensions/api_key
      
      - /dsva-vagov/vets-api/prod/env_vars/vanotify/services/pensions/api_key
      
      - /dsva-vagov/vets-api/dev/env_vars/vanotify/services/pensions/api_key
      
   
 3. Do your resources handle PII? 
       - No
       - List the types of PII.
       - None.  The VA Notify API keys are used for API calls and don't directly handle PII.



   4. Do you utilize any other cloud resources beyond VA.gov?
   
      - No.

#### Repositories
1. List repos maintained by your team, provide links.

   - [vets-api](https://github.com/department-of-veterans-affairs/vets-api) (refer to codeowners file for specific files)
   - [vets-website](https://github.com/department-of-veterans-affairs/vets-website) (refer to codeowners file for specific files)
   - [Vets-jsons-schema](https://github.com/department-of-veterans-affairs/vets-json-schema)

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

There are a number of diagrams and data flows that have been provided here:

https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/practices/zero-silent-failures/findings



| Form Name  | URL                                                          |
| ---------- | ------------------------------------------------------------ |
| 527 EZ     | https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/pension_21P-527/checklist.md |
| 21P-530    | https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/burials_21P-530/checklist.md |
| Dependents | https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/dependents_21-674/checklist.md |

