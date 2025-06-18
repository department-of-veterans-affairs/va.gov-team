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

Our app follows the deployment conventions of the `vets-website` repository—changes into the `main` branch are deployed to production daily at 1 PM ET. It's recommended that changes are merged into the `main` branch by 12 PM ET to be included in the daily production deployment.

More importantly, our app is enrolled in [Staged Continuous Deployments](https://depo-platform-documentation.scrollhelp.site/developer-docs/continuous-deployment), which allows us to deploy to production outside the daily deployment window. Changes merged to `main` are automatically deployed to the [dev](https://dev.va.gov) and [staging](https://staging.va.gov) environments. After these deployments, the pipeline pauses, awaiting [manual approval](https://depo-platform-documentation.scrollhelp.site/developer-docs/continuous-deployment#StagedContinuousDeployment-Approvingyourapplication%E2%80%99sdeployment) before proceeding to production. This gives us the flexibility to: 

- Deploy outside the daily production window without needing to request an out-of-band deployment.
- Control when changes go to production.
- Allow sufficient time for testing in staging before release.

_Note_: If a change is merged into main but not manually approved, it will still be included in the next daily production deployment. To prevent untested changes from reaching production, ensure all testing is completed beforehand—or hide the feature in production using a conditional environment check or feature toggle.

#### QA process

Before any functional or content changes are merged into the `main` branch, they must be validated by at least one other team member **outside of engineering** - for example, someone from Product, Design, or Research. There are several ways to review changes in a pull request, ranging from technical to non-technical. Choose the approach that best matches your comfort level and setup.

##### Running the branch locally

This is the most technical approach and requires your machine to be configured to run `vets-website`. It’s typically used by engineers or others comfortable with local development environments. To get started, follow the [local development instructions](https://depo-platform-documentation.scrollhelp.site/developer-docs/run-and-build-va-gov-locally).

##### Review instances

A [review instances](https://depo-platform-documentation.scrollhelp.site/developer-docs/review-instances) is automatically created for every pull request in `vets-website`, allowing people to quickly see changes in that pull request. Once SOCKS proxy access is configured, review instances make it easy to preview and test changes—especially for visual or content updates. This is a semi-technical option that works well for many people.

- [Get SOCKS proxy access](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy)
- [Access a review instance](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes#Usingreviewinstancestopreviewchanges-ReviewingvisualorcontentchangestoVA.gov)

##### Codespaces

[GitHub Codespaces](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-github-codespaces) is a browser-based development environment that can host changes in a pull request for others to review, even if they don’t have SOCKS proxy access. This makes it a good option for sharing work with stakeholders or people who don't have SOCKS proxy access.
While setup requires some technical steps (typically done by an engineer), it offers a flexible, public-friendly way to preview changes. 

- [Set up Codespaces for development](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-github-codespaces)

#### Adding Large Features

##### Overview
When introducing large features, especially those requiring extensive testing, they should be hidden behind either a production environment check or a feature toggle to ensure they're only active in staging until fully validated. 

##### Conditional rendering based on environment check

Use the [isProduction](https://github.com/department-of-veterans-affairs/vets-website/blob/ba4af448866f5f7113ff2a14878f8ae5d0639735/src/platform/utilities/environment/index.js#L69-L77) utility to conditionally render changes in staging only ([example usage](https://github.com/department-of-veterans-affairs/vets-website/blob/237a35bb97fdc4e9ab12247d8f7c94d4e17cc1d7/src/applications/discover-your-benefits/config/form.js#L105)). This gives you as much time as needed to test the feature without risking an unintended production release.

Once the feature has been thoroughly tested by the appropriate team members, you can open a pull request to **remove the environment check**. Be sure to perform final testing on the PR branch before merging.

To avoid deployment conflicts, try to merge the PR outside of the [daily production deployment window](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployments#Deployments-Automateddeploymentschedule) (1 PM ET). This allows time for a quick verification in staging before the next scheduled deployment. After confirming the changes in staging, an engineer can manually approve the production deployment.

_Note_: Out of band deployments can be requested by other contributors, so it's not guaranteed that change will stay in staging just because it hasn't been manually approved.

##### Feature toggles

[Feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide) offer a more flexible and robust approach to managing feature rollouts in `vets-website`. 

Some key benefits: of feature toggles are:

- Enable or disable features dynamically without code changes.

- Control visibility separately in staging and production.

- Facilitate gradual rollouts or rollback plans.

Toggles must be configured in both:

- [Frontend](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#FeatureTogglesGuide-Addinganewfeaturetoggle(frontend))
- [Backend (vets-api)](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#FeatureTogglesGuide-Addinganewfeaturetoggle(backend))

They can be toggled via Flipper:

- [Staging Flipper](https://staging.api.va.gov/flipper/features)
- [Production Flipper](https://api.va.gov/flipper/features)

###### Using feature toggles for a rollout

Once the feature has been tested in staging, coordinate with the product manager to determine when to enable it in production. After enabling, keep the toggle in place for at least a few weeks to monitor behavior in production. The recommended maximum duration is 4 weeks, unless otherwise agreed upon.

###### Cleaning up unused feature toggles

Once the feature is validated and considered stable, remove the toggle to reduce tech debt.
See: [Toggle Cleanup Instructions](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide#FeatureTogglesGuide-Removingold/unusedfeaturetoggles).

##### Choosing Between Environment Check and Feature Toggle

When deciding whether to use an environment check or a feature toggle, consider the following:

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

Minor changes—such as content updates, small UI tweaks, and minor bug fixes—**do not need to be gated** behind an environment check or feature toggle.

These changes should be tested within the pull request using one of the supported [QA methods](#qa-process) listed above.

Once validated, the PR can be merged into the `main` branch. After merging:

- Confirm the changes in the **staging environment**.
- Approve the production deployment when you're confident in the changes.

Since these changes are low-risk and already reviewed, it's not critical to coordinate the merge around the daily production deployment window.

#### Tracking changes in environments

To monitor what changes have been deployed to **staging** and **production**, use the [Frontend Support Dashboard](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/). This dashboard shows the **30 most recent commits** to the `vets-website` repository.

Look for:

- ✅ Commits listed by SHA and description.

- ⚡️ A lightning bolt icon, which indicates that the commit was deployed via Staged Continuous Deployment.

### Work Reprioritization
- Things that change mid-sprint
- How to determine the urgency of reprioritized work
