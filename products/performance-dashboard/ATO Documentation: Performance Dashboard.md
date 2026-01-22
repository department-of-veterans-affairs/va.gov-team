## ATO Documentation: VA.gov Performance Dashboard
**_Last Updated: 09/24/2025_**

_Please Note: The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment._

#### POC
1. What is the name of your product(s)/system(s)?

   - VA.gov Performance Dashboard
   
2. Describe its purpose in a few sentences.

   - The Performance Dashboard provides some high-level metrics about the VA.gov website. It is mostly intended for internal VA stakeholders as a way of quickly viewing high-level metrics.

3. If you represent multiple products, please describe the relationship between them, if there is any.

   - We represent multiple products but no other products relate to this one.
  
5. What is the expected duration of your project? This information helps us understand how our processes need to adapt

   - We maintain this product so there are always items on our roadmap for it. In the short term we are redesigning the page and expect to complete that work in the first half of 2026. 

#### AWS Resources
1. List AWS services used.
   - Parameter Store
   - s3
2. Describe named instances of each service used.
   - s3 instances:
	   - Dev: This s3 object routes to https://dev.va.gov/performance-dashboard
	   - Staging: This s3 object routes to https://staging.va.gov/performance-dashboard
	   - Prod: This s3 object routes to https://www.va.gov/performance-dashboard
3. Which of your resources handle PII? List the types of PII.
   - This project does not use or process any PII
4. Do you utilize any other cloud resources beyond VA.gov?
   - No

#### Repositories
1. List repos maintained by your team, provide links.
   - The project exists within its own repo [here](https://github.com/department-of-veterans-affairs/performance-dashboard)
2. List repos used by your team, provide links.
   - This project makes use of JavaScript and stylesheets from [VA's CSS Library](https://www.npmjs.com/package/@department-of-veterans-affairs/css-library)
   - This project uses the VA [codeql-tools repo](https://github.com/department-of-veterans-affairs/codeql-tools) for CodeQL Analysis as found in [this GH Workflow](https://github.com/department-of-veterans-affairs/performance-dashboard/blob/development/.github/workflows/codeql-analysis.yml)
   - In the [pre-commit-config](https://github.com/department-of-veterans-affairs/performance-dashboard/blob/development/.pre-commit-config.yaml), this project uses the [pre-commit](https://github.com/pre-commit/pre-commit-hooks) and [psf](https://github.com/psf/black) GitHub repos
   - This project also downloads assets from `s3://prod-va-gov-assets/fonts/` in [this GitHub Workflow](https://github.com/department-of-veterans-affairs/performance-dashboard/blob/development/.github/workflows/gather-assets.yml)
3. Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable.
   - For the VA's CSS Library, might be best to reach out in the #vfs-frontend DSVA Slack channel
4. List other groups you know use your repos.
   - We are not aware of any other groups that use Performance Dashboard app code

#### Tools
1. List CI/CD or Infrastructure as Code tools.
   - GitHub Actions
   - AWS Actions
   - CodeQL
   - Flake8
   - Docker
   - Makefile
   - Jest
   - Cypress
   - Pytest
2. Describe where each tool is hosted and if they handle PII.
   - Where each tool is hosted:
	   - GitHub Actions: Hosted on GitHub, workflows are in the `workflows` directory
	   - Makefile: In the project root as Makefile
	   - Docker: Dockerfiles and related scripts are in the project root and scripts
	   - Jest: Configured in `jest.config.ts` and used in the project root and tests
	   - Cypress: Configured in `cypress.config.ts` and used in the cypress directory
	   - Pytest: Used for Python scripts in scripts and configured via `pytest.ini`
	   - AWS Actions: Used within GitHub Actions workflows, not hosted locally
	   - CodeQL: GitHub-hosted, configured in `codeql-analysis.yml`
	   - Flake8: Configured in `setup.cfg`, Makefile, and included in `dev-requirements.in` and `dev-requirements.txt`
   - There is no PII used in this app
3. List software included in deployment or generate SBOM.
   - I have generated an SBOM [here](https://github.com/department-of-veterans-affairs/performance-dashboard/blob/1958-sbom-ato-doc/sbom-cyclonedx.json)
4. List all packages/plugins/modules/gems/etc. Include version numbers.
   - package.json:
   	- "@department-of-veterans-affairs/component-library": "^50.5.0",
   	- "@department-of-veterans-affairs/css-library": "^0.22.1",
   	- "chart.js": "^2.9.4",
   	- "json5": "^2.2.3",
   	- "next": "14.2.10",
   	- "react": "^18",
   	- "react-dom": "^18"
   	- "@eslint/css": "^0.8.1",
   	- "@eslint/js": "^9.27.0",
   	- "@eslint/json": "^0.12.0",
   	- "@eslint/markdown": "^6.4.0",
   	- "@next/eslint-plugin-next": "^15.3.2",
   	- "@testing-library/jest-dom": "^6.4.2",
   	- "@testing-library/react": "^14.2.2",
   	- "@types/chart.js": "^2.9.41",
   	- "@types/jest": "^29.5.12",
   	- "@types/node": "^20",
   	- "@types/react": "^18",
   	- "@types/react-dom": "^18",
   	- "autoprefixer": "^10.0.1",
   	- "axe-core": "^4.10.0",
   	- "copy-webpack-plugin": "^13.0.0",
   	- "cypress": "^13.15.0",
   	- "cypress-axe": "^1.5.0",
   	- "eslint": "^9.27.0",
   	- "eslint-config-prettier": "^10.1.5",
   	- "eslint-plugin-react": "^7.37.5",
   	- "globals": "^16.1.0",
   	- "husky": "^9.1.7",
   	- "jest": "^29.7.0",
   	- "jest-canvas-mock": "^2.5.2",
   	- "jest-environment-jsdom": "^29.7.0",
   	- "json5-jest": "^2.0.0",
   	- "lint-staged": "^16.0.0",
   	- "prettier": "^3.5.3",
   	- "sass": "^1.88.0",
   	- "string-replace-loader": "^3.1.0",
   	- "ts-node": "^10.9.2",
   	- "typescript": "^5",
   	- "typescript-eslint": "^8.32.1"
   - requirements.in, dev-requirements.in:
   	- pydomo==0.3.0.10
   	- github3.py==3.0
   	- google-api-python-client==2.33
   	- pandas==2.2.3
   	- pyOpenSSL==21.0
   	- PySocks==1.7
   	- PyYAML>=6.0.1
   	- tenacity==8.0
   	- numpy==2.2.1
   	- python-dateutil>=2.8.2
   	- setuptools==75.8.0
   	- flake8==7.1.1
   	- freezegun==1.2.0
   	- pytest-cov==4.1.0
   	- pre-commit==3.5
   	- pandas-stubs==2.2.3.241126
   	- debugpy==1.8.0
   	- pytest==8.3.4

#### Connections
1. List the connections your team makes/maintains with systems outside the Platform AWS Environment.
   - Domo
2. Are these connections Internal or External to the VA?
   - I believe Domo would be considered external
3. Do you have a POC? Please list.
   - For Domo, we reach out in the DSVA #vfs-analytics channel with any questions or support
4. Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed).
   - The connection to Domo uses tls 1.3, issued by DigiCert Global via the [SDK we are using](https://github.com/domoinc/domo-python-sdk/blob/master/pydomo/datasets/DataSetClient.py#L24)
5. List the types of PII shared (in each direction) with this connection.
   - This project does not use PII in any way
6. Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it.
   - I do not know of any formal agreement that documents the connection to Domo

#### Data Flow Diagram
The following is a data flow diagram that shows this product’s relationship to Platform:
   - The data flow diagram for this application is quite simple, as we are just retrieving some data from Domo, and otherwise everything is completed inside the Platform, or shared AWS account:

```
[main() in fetch_data.py]
|
v
[DomoDataManager().run()]   [DomoProvider()]
|                        |
|                        v
|                [Domo API (ds_query)]
|                        |
|                        v
|<------------------[DataFrames]<-------------------|
|                                                  |
v                                                  |
[retrieve_data_from_domo]                                  |
|                                                  |
v                                                  |
[Data Processing Functions]---------------------------------|
|
v
[Write JSON files to s3: all_transactions.json, all_logged_in_users_per_month.json, counts.json, etc.]
```
