## [WIP] When to use feature flags for Form 526

Because of the lack of a true staging environment, releasing new features or even bug fixes can be impossible to test and very risky. One way to mitigate the risk of causing issues to users in production is to use feature flags.

For Form 526, which has so many dependencies and external connections during the application and submission process, we recommend using feature flags for _any_ new functionality and critical bug fixes as a way to safely test before a full deploy. With a feature flag in place, you can turn on the feature flag in Staging for your particular testing user once your code has been merged and deployed. 

## How to use feature flags

 To use, follow these steps in Platform's [guide to using Feature Toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide). 

### Unit testing  

Add the appropriate unit tests with the feature flag enabled and disabled. For backend tests, make sure to generate new VCR cassettes that accurately reflect any changes as a result of the feature flag. 

### Releasing and monitoring feature flags 

As with any release, plan ways to track feature flag usage with error handling and APM dashboards. For the backend, ensure methods raise exceptions that log the invoker and feature name. 

### Removing feature flags

Because of the nature of the VA ecosystem, it can be hard to remove feature flags in the same sprint as when the feature flag got deployed. Therefore, we recommend using a separate ticket as a "fast-follow" for removing the feature flag. Please make sure to remove the feature flag from the codebase as soon as it isn't needed. NB: you'll need to manually remove the feature flag from the database in Argo after the removal pull request gets merged. 

### Potential issues
Consider any long-term implications of feature flags. 
- Do you have any way to track which users have hit which feature?
- Are there multiple feature flags in play at once? How does that affect the code path and user experience?
- How will you determine success of the feature?
- How will you fully release the feature? Are you incrementing by percentage of users? Or is it a simple change and you can deploy to 100% after a quick confirmation from Staging? 
- What will de-commissioning the feature flag look like? 

## Environment checks as an alternative to feature flags
Sometimes using a feature flag is impossible, like if the changes are available on a page that doesn't require a user to be logged in, such as the Intro to 526 form page. (We need to use a particular user in order to turn on the feature flag in Staging for testing, so if we don't have a user, we cannnot test.) In that case, you can use an environment check in the frontend that looks for the Staging environment.

### Frontend: 
 Here is how we did it for the frontend: `if (!environment.isLocalhost())` ([link to pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/33294/files)).

### Backend:
In the backend environment, vets-api uses RAILS_ENV but both Staging and Production environments are actually set to `production.` Therefore, you must use `Settings.vsp_environment` to check for the proper environment. 


