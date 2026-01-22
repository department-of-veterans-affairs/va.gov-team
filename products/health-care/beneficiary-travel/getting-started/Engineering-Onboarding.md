# [Onboarding Checklist (WIP)](https://adhoc.slack.com/archives/C0965STG404)

**General** 

## Slack channels to add yourself to
    - Adhoc/Agile 6 channels:
        - #uae-travel-pay-mobile-web 
        - #proj-cerner-integrations-cieappt
    - Mobile DSVA Slack channels:
        - #va-mobile-app 
        - #va-mobile-app-engineering
        - #va-mobile-app-analytics
        - #va-mobile-app-design
        - #va-mobile-app-shared-systems
        - #va-mobile-app-alerts
    - Travel Pay DSVA Slack channels
        - #beneficiary-travel-team
        - #beneficiary-travel-team-alerts
        - #btsss-product-ux-eng
        - private-team-beneficiary-travel-pay (requires an invitation)
        - #travel-pay
        - #unified-appointment-experience
    - Other helpful channels - Because we interact with the appointments and check in teams:
        - #appointments-team
        - #vaos-engineering
        - #check-in-experience
        - #check-in-experience-engineering

## General Travel Pay Knowledge
Here are some links for general travel pay knowledge:
- General Team Information (Team Charter - DRAFT)
- Main directory with readme
- Primary Product Outline
- Engineering
- Architecture overview (most recently completed initiative)
- Sequence diagram
- Datadog dashboard
- Local Auth Workflow walkthrough/demo
- Travel Pay Product Guide  (A guide for VA Helpdesk staffers) - Available in Sharepoint (within VA.gov CAG)

## Engineering
- Repos to pull down
    - vets-website
    - vets-api
    - vets-api-mockdata
    - content-build
- When writing vets-api tests that use vcr cassettes you’ll want to make sure that the uri is using a filter from spec/support/vcr.rb . 
    - NOTE: The filter will reference something in config/settings.yml that will most likely reference something from the AWS params store (if you add a param you will need one for dev, staging, sandbox and production). Also when your vcr test runs locally it will actually reference the values set in config/settings/test.yml.

Access for the below requires you to have github va access and your e-App email approved

* NOTE: you will need a screen shot of your e-App with the subject line ‘Transmittal Notice’ to get AWS access and SOCKS access 

Get Flipper Access to Staging

* https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees[…]per-ui-access.yaml&title=Flipper+UI+access+for+%5Bindividual%5

Get AWS Access

* Fill out a github ticket for access to AWS 
* https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees[…]te=aws-access-request.yml&title=AWS+access+for+%5Bindividual%5D
* NOTE: you will need to change your AWS password every 60 days. If you forget to change your password within this timeframe then the next time that you login you will have to reset it

Get Sidekiq Access

* Fill out a github ticket for access to Sidekiq follow 
* https://github.com/department-of-veterans-affairs/va.gov-team/issues/82233
* NOTE: Once you are granted access you will need to save the link to this ticket and re-request access 6 months later

SOCKS access

* Create a socks request by selecting this link 
    * EX: https://github.com/department-of-veterans-affairs/va.gov-team/issues/75536
    * Note: You’ll need SOCKS access in order to create an ssh tunnel to the forward proxy and to have access to Sentry. You will also have access to Jenkins, ArgoCD, and other tools.
* Once you have access go to this link here and follow the steps listed under ‘Configuring SOCKS Proxy on Mac’ steps 1-4. 

Access for the below requires you to have your piv card and piv card reader 

VA Email

* NOTE: you will need to log into your VA email account every 30 days otherwise you will lose access to your VA email. If this happens to you, you’ll need to reach out to Jeff Langworthy for help

How to login with Citrix

* Make sure your PIV card is plugged into your computer
* Go to https://citrixaccess.va.gov/vpn/index_citrix_splash.html
* Select click here to use Smartcard
    * Okay to pop up
    * Type in Pin #, enter
* A new screen will load
* Select 1VA-General Desktop
    * Open
* A Download will occur, once its done loading open the download
* A new screen will load (1VA-General Desktop)...it may take a few minutes to load

How to login with Azure

* Make sure your PIV card is plugged into your computer
* Go to https://client.wvd.microsoft.com/arm/webclient/ 
* If it is your first time logging in…
    * Enter your VA email address and click submit
    * Browser will redirect to https://prod.adfs.federation.va.gov
    * Click “Sign in using an X.509 certificate”
    * If you get an error, you can retry by clicking “Sign in with other options”
    * A popup should appear prompting you for your PIV pin.
    * It will also prompt to select a certificate, the default should be fine.
    * Window will appear asking if you would like to stay signed in.
    * A list of available desktops will appear
    * Select default: 1VA-MAIN—Desktop
    * A new screen will load (1VA-MAIN—Desktop)...it may take a few minutes to load
* If it is NOT your first time logging in you should see your account info with your VA email…
    * Select your account 
    * Window will appear asking if you would like to stay signed in.
    * A list of available desktops will appear
    * Select default: 1VA-MAIN—Desktop 
    * A new screen will load (1VA-MAIN—Desktop)...it may take a few minutes to load

NOTE: If your browser says that a popup has been blocked, enable popups on the page.
VA Things you can access once logged into Azure or Citrix
Outlook

* Used to look at your VA email
* Must log in every 30 days or you will be logged out

You IT

* Used for logging ticket in service now

ArgoCD

* Helps developers manage applications and infrastructure in one place
* Can pull updated code from Git repos and deploy it to Kuberbetes
* Uses declarative approach to ensure the desired state of an app matches its live state
* Monitors appa nd reports when their live state differs from the desired state. It can also then automatically or manually sync the app back to the desired state
* Provides visualizations of differences between the desired and live state of an application.
* Provides an interface for debugging applications.
* Allows developers to group applications into projects to isolate workloads and teams

How to get ArgoCD Access

* Create a github ticket and fill this out https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&projects=&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D

How to login into ArgoCD

* Make sure your PIV card is plugged into your computer
* If you have SOCKS access you can do the following…
    * Go to https://argocd.vfs.va.gov 
    * Click the button “Log in via github”
    * Enter your github credentials that you use for the VA
    * You should now be logged into ArgoCD

How to use ArgoCD with rails console

* Go to a terminal and log into socks
* Once SOCKS is running go to Argo and login → https://argocd.vfs.va.gov 
* Search for the project that you want to view (EX: vets-api-staging)
* Selected a pod with `vets-api-web` and select Exec
* Type bundle exec rails c - -sandbox
* Now you can use the rails console in argo and look at staging and production data

How to set up credentials for VA Notify - ** PIV card is not needed

* Link with Steps here 
* Steps:

    1. Go to vets-api, edit your settings.local.yml and add this 

vanotify:
 client_url: https://staging-api.va.gov/vanotify
 services:
 benefits_management_tools:
 api_key: benefits-management-staging-key-efd5806d-64d8-4453-acc9-8f842b2c5d65-4a6f6ac7-4bc2-4f4d-a0ce-4c68f0df3d41
 template_id:
 evidence_submission_failure_email: 85c72a70-7dde-4682-91da-e841f927f12c

b. Go to the two files that you changed for the jobs and set the retries to 0  sidekiq_options retry: 0, queue: 'low'
How to look up information in Datadog

* Log into datadog
* Go to Dashboards
* Go to Claim Status Tool Statistics

How to look up error logs in Datadog for silent failures

* Log into datadog
* Go to Recent → Logs
* In the search bar enter: 

How to Create a Staging account with ID.me

1. Go to https://staging.va.gov/
2. Click the blue Sign in button 
3. Click the green ID.me button
4. Click the Create an ID.me account link
5. Fill out the details providing an email and password and Submit
6. You will have an email with a 6 digit code sent to you, input that code and submit.
7. You’ll be asked about multifactor authentication, set that up and pick a type and verify.
8. You’ll be asked to verify your identity, pick a type and verify.
9. Once done verifying you will have a staging user and you can use rails console to get your user account, update evidence submission records with your user ICN

How to get Travel Pay API Swagger documentation

1. Open CAG
2. Open Postman
3. Make a new request: `POST https://login.microsoftonline.us/TENANT_ID/oauth2/token`
4. Add this as the body
    1. client_id:CLIENT_ID
    2. client_secret:CLIENT_SECRET
    3. client_info:1
    4. grant_type:client_credentials
    5. resource:RESOURCE_ID
5. Send it
6. Copy the access_token from the request body
7. Make a new request: `GET https://nonprod.integration.d365.va.gov/eis/api/btsss/travelclaim/swagger/v2025.5.0/swagger.json`
8. Set the auth type to Bearer Token
9. Paste the access_token from the first request
10. Add this as the headers:
    1. Ocp-Apim-Subscription-Key:SUBSCRIPTION_KEY
11. Swagger achieved

