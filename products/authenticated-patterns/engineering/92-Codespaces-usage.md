
# Using GitHub Codespaces for User Research Testing Environments

1. [Introduction](#introduction)
2. [Configuring the codespace environment variables](#configuring-the-codespace-environment-variables)
3. [Setting Up Your Codespace](#setting-up-your-codespace)
4. [Setting Up the Mock Server](#setting-up-the-mock-server)
5. [Making the Mock API Public](#making-the-mock-api-public)
6. [Running the Frontend Development Server](#running-the-frontend-development-server)
7. [Making the Frontend Public](#making-the-frontend-public)
8. [Managing Codespace Timeout and Cost](#managing-codespace-timeout-and-cost)
9. [Preparing for User Research Sessions](#preparing-for-user-research-sessions)
10. [Best Practices](#best-practices)
11. [Troubleshooting](#troubleshooting)
12. [Bonus - Automatic Public Codespace Creation](#bonus---automatic-public-codespace-creation)
13. [Extra Notes on Cost and Performance](#extra-notes-on-cost-and-performance)


## Introduction

This guide will walk you through setting up a testing environment for user research sessions using [GitHub Codespaces](https://github.com/features/codespaces). To streamline the process, we will use `vets-website` without the content-build process and implement a mock server to handle API calls. This approach allows for a faster setup and more controlled testing environment in that the frontend can be updated on the fly, and mock responses for api calls can be tailored to the needs of the research study.

## Configuring the codespace environment variables

To configure a codespace to not try and run content-build, we need to add some encrypted secrets to your individual github account settings. You can read the docs on the [account-specific secrets here](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces).

1. In your GitHub account settings, go to Codespaces.
2. Add an encrypted secret with the name `VETS_WEBSITE_BUILD_CONTENT` and value `NO`.
3. Make this secret accessible to the `vets-website` repository.

![Screenshot 2024-09-09 at 6 30 06 AM](https://github.com/user-attachments/assets/3c4baa9f-d4ee-49f6-8ef6-cd43b8bf2753)

This configuration will significantly speed up the Codespace creation process.

## Setting Up Your Codespace

1. Navigate to the [vets-website GitHub repository](https://github.com/department-of-veterans-affairs/vets-website).
2. Select the branch that you would like to run your codespace from. You may change this after the codespace has been spun up, so starting on the main branch is fine.
3. Click the green "Code" button and select "Open with Codespaces".
4. If this is your first time, select "New codespace".
5. You should then be redirected to a browser based version of Visual Studio Code with the vets website repo open to the branch that the codespace was created from.
6. You can view the codespaces creation log and verify that the codespace-create script has run and then proceed to the rest of the setup.

Note: Due to the VA github organization settings, your Codespace will automatically use a 16-core, 64GB RAM, 128GB disk space container. This cannot be changed at this time.

## Setting Up the Mock Server

We'll use the mocker-api package to mock API responses. The vets-website repository already includes example responses and the necessary dependencies.

1. Navigate to the vets-website directory in your Codespace.

2. Start the mock server in the terminal using the following command:
   ```
   yarn mock-api --responses src/platform/testing/local-dev-mock-api/common.js
   ```

This command will start the mock API using some pre-configured responses. These common responses are just an example, and only provide the user, maintenance_windows, and feature_toggles responses, so you will want to create your own responses file to fit your needs. There are more in depth examples of mock server files to serve as inspiration that have been used for the [profile](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/mocks/server.js), [appeals](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/shared/tests/mock-api.js), and [check-in](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/check-in/api/local-mock-api/index.js) applications.

[Mocker-api](https://github.com/jaywcjlove/mocker-api) is a wrapper around a express server, so the traditional request and response arguments can be used within any endpoint callback to handle dynamic responses and to help create the response data that is required in more complex scenarios.

## Making the Mock API Public

To use the mock API URL in your Codespace:

1. In the Codespace, click on the "Ports" tab in the bottom panel.
2. Find the port where your mock API is running (likely 3000).
3. Right-click on the port and select "Port Visibility" -> "Public".
4. Copy the public URL provided for this port.

Initial alert that allows a port to quickly be set to public:

![An alert that asks if the user want to allow a server port to be public](https://github.com/user-attachments/assets/39ca276e-15a7-4fb5-9903-2cba1045c71c)

How to change the visibility of a port after it is running:

![Screenshot showing the options to change a server's port visibility to public or private](https://github.com/user-attachments/assets/674a3ce2-7279-4d8a-8997-c9d4cf7a634b)


## Running the Frontend Development Server

1. Open a new terminal in your Codespace.
2. Make sure you're in the vets-website directory.
3. Start the development server, using the public URL of your mock API:
   ```
   yarn watch --env entry=profile,auth,static-pages api=https://your-public-mock-api-url-here
   ```
   Replace `https://your-public-mock-api-url-here` with the actual public URL of your mock API, and replace the entry strings with the application names that you would like built. You _can_ run the watch command for all the apps as well, but that makes the build time significantly longer.

## Making the Frontend Public

To allow users to view the frontend in their browsers:

1. In the Codespace, go to the "Ports" tab again.
2. Find the port where your frontend is running (typically 3001).
3. Right-click on this port and select "Port Visibility" -> "Public".
4. Copy the public URL provided for this port. This public URL will be the same for the entirety of the codespaces life, but it is randomly generated by github, and cannot be changed. The only way to get a new/different URL is to create a new codespace instance.
5. Users can now access the frontend using this public URL.

![Screenshot 2024-09-09 at 7 20 52 AM](https://github.com/user-attachments/assets/432d3a5a-5d56-4953-a338-55e765544b5b)


## Managing Codespace Timeout and Cost

Codespace usage for the vets-website repository is paid for by department-of-veterans-affairs. This service is not free and users should strive to minimize costs when possible.
### Increasing Codespace Timeout

By default, Codespaces will timeout after a period of inactivity. The default timeout is 30 minutes. To increase this timeout:

1. Go to your GitHub account settings.
2. Navigate to Codespaces.
3. Under "Default idle timeout", select a longer duration (up to 240 minutes).
4. Click "Save".

This setting will apply to all your _future_ Codespaces across all repositories.

### Understanding Codespace Inactivity

A Codespace is considered inactive when:

- There's no keyboard or mouse activity in the remote environment (usually the VS Code browser based editor).
- There are no active processes or jobs running in the terminal.
- There's no active port forwarding or preview.

Note that having the Codespace tab open in your browser does not count as activity. As long as some sort of edits are being made to a file in a Codespace, then it should remain active.

### Minimizing Codespace Costs

To optimize costs associated with Codespaces:

1. Stop your Codespace when not in use:
   - In the Codespaces interface, click on the ellipsis (...) next to your Codespace.
   - Select "Stop codespace".
   - This does not completely remove the codespace, so the urls that are used will remain the same when it is restarted.
   - You will need to restart your frontend and mock api server after restarting a codespace. They do not start automatically.

2. Delete unnecessary Codespaces:
   - Go to your GitHub Codespaces page.
   - Click on the ellipsis (...) next to the Codespace you want to remove.
   - Select "Delete".

Stopped Codespaces still incur storage costs, but these are significantly lower than active Codespace costs.

[View the billing costs for GitHub Codespaces](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)

## Preparing for User Research Sessions

1. Ensure all necessary features are working with mock data and that the server and frontend ports are public. If you have to restart the server after inactivity, you may lose the public status of the ports, so double check them.
2. Test the environment thoroughly before the research session in an incognito window.
3. Provide the public frontend URL to your research participants. A link shortening service like bitly may be used to make the links easier to copy and paste or send in messages.
4. An initial 'landing page' will be shown to user's when they first visit the Codespace URL. Once the green 'Continue' button is clicked, then the user will not see that landing page again for the rest of their session, but it should be explained that the codespace is just a prototype and no personal information will be saved within this prototype.

The Github Codespace landing page:

![Screenshot 2024-09-09 at 7 37 44 AM](https://github.com/user-attachments/assets/d94f07a5-dfae-4627-9bc0-a3f43f0b7c7a)

## Best Practices

- Keep your mock data up-to-date and representative of real scenarios.
- Document any specific setup steps required for different applications or features.
- Regularly update your Codespace to ensure you're working with the latest vets-website code or that your Codespace is using the branch of vets-website that is required for your session. You can change to any active branch within the Codespace, so you do not need to run from the 'main' branch only.

## Troubleshooting

- If your Codespace freezes during setup, try stopping and restarting it using the command: `Codespaces: Stop Current Codespace`.
- Since the mock server and the frontend are run in watch mode, you can technically update the code in realtime and see those changes reflected in the codespace url.
- Logging the request and response within the mock server endpoints can be helpful when verifying mock server interactions.
- It is also possible to share a codespace with another user that also has access to the github organization. The VS Code Live Share extenstion can be used to generate a sharing url for the editor, and also the various terminals when required.

Remember, Codespaces will spin down after a period of inactivity. If you're running a longer research session, you may need to keep the container active or rebuild it.

## Bonus - Automatic Public Codespace Creation

### Overview

It is now possible to set up your Github account to allow Codespaces to do several steps for you, and to get a public url that can be viewed automatically with minimal extra steps.

1. Automatic application startup in Codespaces when the Codespace is first created
2. Configurable mock server and frontend dev server via secrets
3. Public port setup for prototype sharing via url

The `codespaces-start.sh` script has been updated in `vets-website` to include a new section that automates this application startup process. The GitHub CLI is used in this script to programmatically  set the frontend and mock server ports as public, which is what allows for easy sharing of prototypes with external stakeholders.

### New Codespace Secrets

The following Codespaces user secrets have been introduced. These secrets are added in the same way as was previously outlined for adding `VETS_WEBSITE_BUILD_CONTENT`

1. `MAKE_APP_PUBLIC`: Enables public port setup for the application.
   - Value: Set to "YES" to enable public ports.
   - Usage: Acts as an on/off switch for the public app bootstrapping process. If this is not set, or set to anything other than "YES" the startup script will not start the application for you.

2. `MOCK_RESPONSES`: Specifies the path to mock server responses.
   - Default: `src/platform/testing/local-dev-mock-api/common.js`
   - Usage: Set this to use custom mock responses. An engineer should be able to provide you with the path to your app's mock server entry file (if that has been set up). The default common responses are pretty barebones, so don't expect much to work if you use them, besides some feature toggles, user, and maintenance windows endpoints.

3. `ENTRY_APPS`: Defines specific apps to be built in watch mode.
   - Format: Comma-separated list of app names that should be accessible (e.g., "static-pages,auth")
   - Usage: Optimizes build time by focusing on specific apps, if this is not set, then it will build all applications in the Codespace, and startup time will be extended.

### User Adoption

Users can opt into running public prototypes through Codespaces by configuring their Codespace settings in their GitHub account. This process is designed to be accessible to non-engineers, enabling them to spin up a Codespace with minimal technical knowledge.

### Usage Instructions

1. Set up Codespaces user secrets:
   - Go to GitHub account settings
   - Navigate to Codespaces settings
   - Add the desired secrets (`MOCK_RESPONSES`, `MAKE_APP_PUBLIC`, `ENTRY_APPS`) and their corresponding values

2. Create a new Codespace for the project

3. The application will automatically start based on your configured secrets

4. Access the public prototype using the provided Codespace URL You can view this public url in the 'ports' section of the Codespace VS Code instance that runs in your browser, as was outline in the section [Making the frontend public](#making-the-frontend-public)

5. Navigate to your application's url like `/profile`, `/my-va`, etc

### Related Resources

- Issue: [TMF Auth Exp Design Patterns #110](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/110)
- Codespaces documentation: [GitHub Codespaces](https://docs.github.com/en/codespaces)

### Codespace Walkthrough Video



https://github.com/user-attachments/assets/82c68292-8fa2-417c-96ab-0392bf53d1aa



## Extra Notes on Cost and Performance

The higher priced Codespaces are required when you need to run content-build to get static content into your codesapce. If we could use lower cost machines when content-build is not needed, then we could significantly reduce cost.

### Memory Usage

We have been extensively testing Codespaces and I have found that of the 64GB of provisioned memory, vets-website and mock server will use around 4gb of memory.

This includes:
running vets-website in 'watch' mode, which probably uses more memory due to it actively watching for file changes and rebuilding
running a mock server with 15ish endpoints mocked out and also running in 'watch' mode
VS code server running. This is the process that allows a user to browse and edit code through the browser on a Codespace. This is probably the largest memory / cpu hog but is required

### Disk Space

Disk space is currently set up as a 128gb volume and we use on average 10gb total for the repo and all OS files.

### CPU Utilization

CPU usage when vets-website first builds is high, but once built the dev servers usually sit at around 15% usage. Since NodeJS is single threaded by default, I don't think having a 16 core CPU available is doing us much good.

### Proposed adjustments

- Don't use watch mode for the FE dev server if performance / memory usage becomes an issue. We don't really need to watch for file changes if we aren't doing active development on the Codespace, so just running the local dev server without watch should help
- Don't use mocker-api
  - Using an Express or Fastify would allow us to run a server that doesn't rely on Chokidar to watch files for changes. Mocker-api watches by default and it cannot be turned off, so if we wanted to optimize the mock-server then a different solution would be required.
  - From a DX perspective, Mocker-api is not ideal. Fastify or Express could be easier to maintain and providing backwards compatibility to mocker-api would be trivial.
- Allow engineers to choose their machine type when starting a Codespace
  - The highest tier is the only level of machine available, and we can't explore with a lower level machine to see what would work.
  - The 4-core cpu, 16gb memory, 64gb dish drive level _should_ work fine, and is only $0.36 an hour vs $2.88 an hour for the highest level
  - Github Organization Owners are the only roles who can [adjust what machine types are available for provisioning
](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
