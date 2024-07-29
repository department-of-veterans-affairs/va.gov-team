# Creating a Codespaces Test Environment

## Introduction
Codespaces provides a convenient way to create a development environment in the cloud. This guide will walk you through the process of setting up a Codespaces test environment from this repository.

## Prerequisites
Before you begin, make sure you have the following:
- A GitHub account
- Access to the [vets-website repository](https://github.com/department-of-veterans-affairs/vets-website) 

## Steps


### 1. Configure Codespaces Secrets
1. In Github, click on your profile icon in the top right corner. Select Settings
2. In the left hand navigation panel, navigate to Codespaces
3. Click on the "New secret" button.
4. Enter the name `VETS_WEBSITE_MHV_MOCK_SERVICE` and value `YES` for your secret, and click on the "Add secret" button.
5. To speed the the build time and if static content is not required, optionally set another secret name `VETS_WEBSITE_BUILD_CONTENT` with value `NO`

### 2. Open the `vets-website` Repository in Codespaces
1. Navigate to the [vets-website repository](https://github.com/department-of-veterans-affairs/vets-website) in your web browser.
2. Click on the green "Code" button, switch to `Codespaces` tab, click `+`
![2024-06-07 15 02 10](https://github.com/department-of-veterans-affairs/va.gov-team/assets/87077843/abe668fa-bfc8-486f-aaef-0fd06cd6e3c2)


3. Wait for the Codespaces environment to be provisioned.
4. In the lower panel, select "Ports" tab. When ports `3000` and `3001` have `Running Process` field populated, that indicates
   the environemnt is deployed and running
![2024-06-07 15 04 35](https://github.com/department-of-veterans-affairs/va.gov-team/assets/87077843/056a4264-09d8-4d00-b949-aa03bdf64d35)


5. For both ports `3000` and `3001`, right click on a row, go to "Port Visibility", change to "Public"
![2024-06-07 15 06 22](https://github.com/department-of-veterans-affairs/va.gov-team/assets/87077843/e8acbf21-dd34-4068-aa24-6ab52b0d5cac)


6. The URL on `vets-website` port `3001` can now be used to access the environment
![2024-06-07 15 07 04](https://github.com/department-of-veterans-affairs/va.gov-team/assets/87077843/7e3c9c07-6887-4d79-b3c0-b150422d541d)



## Notes
- It is advised to create a new instance to ensure that the environment contains all recent updates
- Keep Codespaces tab running to prevent it from stopping
