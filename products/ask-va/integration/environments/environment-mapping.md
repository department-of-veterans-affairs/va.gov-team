## Environments and Workflows

To kick off our meeting, we reviewed the current landscape of each team's environments and how their deployment processes work from environment to environment.

### VA.gov Environments

<img width="511" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/80f68fe8-3632-49e5-a224-2bb0d226ab73">

### VA.gov Workflow

<img width="858" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/dd2274f2-2672-4b6b-8b1b-acc8cb0dae0d">

### CRM Environments

<img width="264" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/699be390-254c-4ae2-830d-0a2113a1b87f">

### CRM Workflow

<img width="509" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/6474428b-becf-4523-8034-9afd35a2ed13">

## Meeting Notes

We did some white-boarding, considering several configurations.

### Environment Mappings (Brainstorming)

<img width="955" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/8d43b498-caba-4f3e-8c2e-c80ec6f7fd30">

#### OLD DIAGRAM

<img width="1164" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/84222e1a-2ff8-4a52-82fa-c0412631e296">

### Random Notecard Notes

* Might the Review Instance on the VA.gov side be useful as a semi-long-lived server instance?
* Ask Platform if they have similar exp? Many may have had environment mismatching?
* Ask TravelPay team for their exp?
* Khoa and Kyle's JSON exchange, automated? OR repo of JSON files to share?
Postman / Insomnia as a part of this flow?
* tool to post selection of JSON that was captured from E2E testing?
* CRM's QA Engineer lives in their INT environment.
  * E2E... CRM is manual today. Each environment has it's own instance of the portal today.
  * Simulates the actual vet experience.
  * CRM Test process needs UI to test their changes
  * As a part of the testing, the UI's logic is naturally tested in the QA process.
  * Minimize potential impact to testing? Silo data by specific users for each team?
* Automated tests
  * Automated testing in this env. is harder because of tooling?
  * Postman replaces VA.gov portal for unconnected instances?
  * Gateway for automated testing of API / contracts?
* Deployments
  * CRM has github action to import the solution into higher envs.
  * QA happens long before PROD deploy. Changes might invalidate her testing. ex: form logic changes.
* Karl to provide links for contract testing in [#ask-va-integration](https://dsva.slack.com/archives/C06LN37RT47).\
(*SEE 'ONLINE ARTICLES' BELOW*)


## Online Articles

* [Use Insomnia with Dataverse Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/insomnia)
  * **Client API Tools:** The article discusses various tools for authenticating and sending requests to the Microsoft Dataverse Web API, emphasizing the use of local tools for privacy.
  * **Insomnia Scratch Pad:** Instructions are provided for using Insomnia local Scratch Pad, a privacy-focused tool that doesn’t require an account or store request information.
  * **PowerShell & Visual Studio Code:** An alternative method for authenticating with Dataverse Web API using PowerShell and Visual Studio Code is mentioned.
  * **Web API Functions:** The article covers how to configure requests, use the CSDL $metadata document for reference, and perform operations like retrieving and deleting records using the Dataverse Web API.

* Automated E2E Testing, Contact Testing, ...
  * [Automated Cypress E2E testing for the VA Chatbot](https://github.com/department-of-veterans-affairs/va-virtual-agent/blob/master/scripts/cypress/e2e/lower_envs/cypress-lower_envs-integration-test.cy.js)
  * [High-Level Discussion of Contract Testing](https://microsoft.github.io/code-with-engineering-playbook/automated-testing/cdc-testing/)
  * [VA Lighthouse API Engineering Standards](https://probable-bassoon-wlq5g3k.pages.github.io/testing/)
  * [Document - Strategy for API Testing](https://dsva.slack.com/files/UPXQ7DSUQ/F0704HUSA8Z/template___api_testing_strategy.docx)
  * [Slides - Strategy for API Testing](https://dsva.slack.com/files/UPXQ7DSUQ/F0704HUSA8Z/template___api_testing_strategy.docx)
* Tools and Frameworks
  * [Notes on Postman](https://community.dynamics.com/blogs/post/?postid=c1c3afed-3f90-458a-97f4-2f0cbd2a9657)
  * [More Notes on Postman](https://learning.postman.com/docs/designing-and-developing-your-api/testing-an-api/)
  * [Bruno](https://www.usebruno.com/) Postman alternative
  * [Insomnia](https://insomnia.rest/) Postman alternative
  * [Karate](https://karatelabs.github.io/karate/)
    * [API Testing with Karate](https://medium.com/insiderengineering/api-testing-with-karate-framework-d62d4135447b)
    * [API Testing with Karate Framework (BDD Examples)](https://github.com/karatelabs/karate-todo/blob/main/src/test/java/app/api/simple/restful-booker.feature)
* DevOps, Tools, etc ...
  * [XMR Toolbox tools for Dataverse](https://www.xrmtoolbox.com/)
  * [XMR API Tester Plugin](https://www.xrmtoolbox.com/plugins/Rappen.XrmToolBox.CustomAPITester/)
  * [Application Lifecycle Management (ALM) for Power Platform](https://learn.microsoft.com/en-us/power-platform/guidance/alm-accelerator/overview)
  * [ALM GitHub Actions for Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/devops-github-actions)
  * [GitHub Actions for Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/devops-github-actions)
  * [Workflows that Automate PowerApps Deployments](https://github.com/department-of-veterans-affairs/va-virtual-agent/tree/master/.github/workflows)

## Next Steps

CRM team will discuss this more internally, then we will reconvene to review as a larger group.

## Resources

Our call was centered around this mural.

- [Environment Mapping Brainstorming Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713441954247/287ab1734dc89d497ee2f5097815f978ef2d1899?sender=ua897010d1bf6a729ffb34329)
