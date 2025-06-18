# Software Development Lifecycle Document (WIP)
## Purpose
The purpose of this document is to outline the stages involved in our Software Development Lifecycle (SDLC). Having a clear understanding of the processes at each stage will help us develop high quality systems in a repeatable way. 

This will be a living document that we can add to and edit throughout the project lifecycle. 

## Research & Analysis

## Design

## Implementation

## Testing

## Deployment

## Maintenance

# Brainstorm/Notes:
## Scrum Ceremonies 
### Backlog Refinement 
- Agenda
- Ticket creation
- Backlog & "Needs Refinement" Sprint
- Refine & estimate tickets

### Ticket Validation 
### Where Documentation Lives 
- GitHub vs Sharepoint vs EnjoyHQ

### Jira
  
### Releases & Feature Flags

#### Deployment process

Our app follows the deployment conventions of the `vets-website` repository, in that changes in the `main` branch are deployed to production daily at 1 PM ET. It's recommended that changes be merged into the `main` branch by approximately 12 PM ET for the daily production deployment.

More importantly, our app is enrolled in [Staged Continuous Deployments](https://depo-platform-documentation.scrollhelp.site/developer-docs/continuous-deployment), which means we have the ability to deploy changes to production outside the daily production deployment band. Changes merged to `main` will always be deployed to the [dev](https://dev.va.gov) and [staging](https://staging.va.gov) environments. Following those deployments, the pipeline will pause, awaiting [manual approval](https://depo-platform-documentation.scrollhelp.site/developer-docs/continuous-deployment#StagedContinuousDeployment-Approvingyourapplication%E2%80%99sdeployment) for the production deployment of the app. This gives us the flexibility to deploy changes to production outside the daily deployment, without needing to request an out-of-band deployment from the platform team, while still allowing us to control when changes are deployed to production, giving us ample time for testing in staging.

_Note_: With staged continuous deployments, changes merged to `main` that aren't manually approved for production deployment will still be deployed in the next daily production deployment, so it is important to perform testing in staging before the next daily deployment, or programmatically hide the feature in production with a conditional environment check.

#### QA process

Before any functional or content changes are merged to the `main` branch, they must be validated by at least 1 other member on the team, outside of engineering, e.g. Product, Design, etc. The changes in a pull request can be reviewed in a number of ways, some more technically involved than others, so it's important to use the tool that best fits your comfort.

##### Running the branch locally

This is the most technical approach to testing changes in a PR, as it requires your computer to be configured to run `vets-website`. This approach is only recommended for engineers or people who don't mind configuring their computer for local development. Instructions on setting up your computer for local development can be found [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/run-and-build-va-gov-locally).

##### Review instances

Although still more of a technical approach, once configured, fairly easy to use. A [review instances](https://depo-platform-documentation.scrollhelp.site/developer-docs/review-instances) is created for every PR in `vets-website`, allowing people to quickly see changes in that pull request. This requires [SOCKS  proxy access](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy), so there is a small amount of work required to get access, but once SOCKS has been configured on your computer, [accessing the review instance](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes#Usingreviewinstancestopreviewchanges-ReviewingvisualorcontentchangestoVA.gov) is effortless.

##### Codespaces

Codespaces is an integrated development environment that can be access online. This can be used to host changes in a PR, allowing others public access to the changes. This doesn't require access to the SOCKS proxy, so this is a good option for showing changes to people without SOCKS proxy access, before merging to staging. There are [steps](https://depo-platform-documentation.scrollhelp.site/developer-docs/set-up-codespaces-for-development) involved in getting a codespace up and running, so this will most likely be configured by an engineer. More general information on codespaces can be found [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-github-codespaces).

#### Adding large features

##### Overview
When adding large features to the app, specifically features that require extensive testing, they should be hidden behind either a production environment check, or a feature toggle to ensure they only run in staging. 

##### Conditional rendering based on environment check

The [isProduction](https://github.com/department-of-veterans-affairs/vets-website/blob/ba4af448866f5f7113ff2a14878f8ae5d0639735/src/platform/utilities/environment/index.js#L69-L77) environment utility function can be used to conditionally render changes in only staging ([example](https://github.com/department-of-veterans-affairs/vets-website/blob/237a35bb97fdc4e9ab12247d8f7c94d4e17cc1d7/src/applications/discover-your-benefits/config/form.js#L105)). This allows as much time as needed to test the changes in staging, without needing to worry about them being deployed to production in the daily deployment.

Once the feature has been thoroughly tested by the appropriate people, a pull request can be opened to remove the environment check. At this point, further testing should be done, to ensure the feature is still working as intended on the PR's branch before merging.

Ideally, the PR removing the environment should be merged into the `main` branch at a time that doesn't conflict with the [daily production deployment](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployments#Deployments-Automateddeploymentschedule) of `vets-website`. The reason for this is to allow enough time to perform an additional quick test of the feature in staging before the next daily production deployment takes place. Once changes have been confirmed working in staging, the changes can be manually approved to be deployed to production by one of the engineers on the team.

_Note_: Out of band deployments can be requested by other contributors to the `vets-website` repository, so it is not guaranteed that changes pushed to the `main` branch won't be deployed until we manually approve the production deployment or the next daily deployment.

##### Feature toggles

Feature toggles are a more robust way of managing feature releases in `vets-website`. Some of the added benefits of feature toggles are listed [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide), but most notably, they allow dynamic toggling for features that use it. This means a pull request doesn't have to be made to turn a feature on in the production environment. That can be done via the Vets-API Flipper endpoints for [staging](https://staging.api.va.gov/flipper/features) and [production](https://api.va.gov/flipper/features). They require configuration in the [vets-api](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml) repository. There are documented instructions on how to add feature toggles to the [backend](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#FeatureTogglesGuide-Addinganewfeaturetoggle(backend)) and [frontend](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#FeatureTogglesGuide-Addinganewfeaturetoggle(frontend)). Both must be configured in order to use feature toggles.

###### Using feature toggles for a rollout

Once the feature has been thoroughly tested in staging, coordination with the product manager must happen to determine when the feature will be enabled in production. After the feature has been enabled in production at the agreed upon time, the feature flag should remain in the app for enough time to validate the performance of the feature in production. The duration of how long the feature toggle should remain should also be coordinated with the product manager, but ideally should not be longer than 4 weeks.

###### Cleaning up unused feature toggles

After the feature has been validated as working correctly in production and the appropriate amount of time has passed, the feature toggle should be removed to prevent tech debt from accumulating.

For instructions on removing a feature toggle, read the platform documentation of [toggle cleanup](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#FeatureTogglesGuide-Removingold/unusedfeaturetoggles).

##### Deciding between environment check or feature toggle

When deciding whether to use a feature toggle or conditionally render the feature based on an environment check, there are a few things to consider.

- Do we anticipate needing to disable the feature in production if an issue arises?
- Is this something that only needs to be on staging for a short time to allow more extensive testing?
- Is the feature solely a proof of concept that won't be released to production in the near future?

Here's a table listing different scenarios and the appropriate tool to use:

| Scenario                                                                 | Use Feature Toggle | Use Environment Check |
|--------------------------------------------------------------------------|--------------------|------------------------|
| You may need to **dynamically turn the feature on/off** in production    | ✅                 |                        |
| Feature will be **released to production** eventually                    | ✅                 | ✅                       |
| Feature needs to be **tested in staging** only for a short period        |                    | ✅                     |
| Feature is a **long-running proof of concept** not ready for production  |                    | ✅                     |
| Feature requires **collaboration with product** on release timing        | ✅                 |                        |
| You want to **avoid code changes** to enable/disable the feature         | ✅                 |                        |
| The feature is **experimental or not confirmed for release**             |                    | ✅                     |
| You need to **gradually roll out** the feature or perform **A/B testing**| ✅                 |                        |
| Feature is **ready but not yet approved** for production release         | ✅                 | ✅ (short-term use)    |
| You want to **ensure feature won't accidentally ship** via daily deploy  | ✅                 | ✅                     |
| Feature will be **short-lived or quickly removed** after testing         |                    | ✅                     |


#### Adding minor changes

Small changes such as content updates, minor bug fixes, etc. do not need to be hidden behind an environment check before being merged. They should be tested within the PR using one of the supported QA methods listed above. 

Once the changes have been validated in the PR, they can be merged into the `main` branch and verified on staging before approving the production deployment for the commit. It's not as critical to coordinate merging these type of changes around the daily deployment, since they would have already been validated in the PR. 

#### Tracking changes in environments

To keep track of what changes have been deployed to staging and production, you can use the [Frontend Support Dashboard](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/). This dashboard gives an overview of the most recent 30 commits in the `vets-website` repository. The commits with the lightning bolts besides them signifies changes it was deployed via staged continuous deployment.


### Work Reprioritization
- Things that change mid-sprint
- How to determine the urgency of reprioritized work
