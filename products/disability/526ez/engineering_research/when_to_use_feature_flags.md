## When to use feature flags for Form 526

Because of the lack of a true staging environment, releasing new features or even bug fixes can be impossible to test and very risky. One way to mitigate the risk of causing issues to users in Production is to use feature flags.

For Form 526, which has so many dependencies and external connections during the application and submission process, we recommend using feature flags for _any_ new functionality and critical bug fixes as a way to safely test before a full deploy. With a feature flag in place, you can turn on the feature flag in Staging for your particular testing user once your code has been merged and deployed. 

Note: some of this information is referenced in a more visual format on the [Release Decision Tree](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741023269404/b25b8ec851c51b0df379e9b271460751cc4612a9) in Mural. 

## How to use feature flags

 To use, follow these steps in Platform's [guide to using Feature Toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide). 

 As a general QA process for using feature flags, we recommend the following:
 1. Merge pull request with new feature gated by the feature flag
 2. Once the pull request has been merged and deployed, turn on the feature flag in Staging for your testing user
 3. Test the feature in Staging for your testing user
 4. [optional] at this point, you could also try a moderated production test user by turning the feature on for a certain production user and walking them through the submission process to confirm your feature is working properly. This would be for more complex/high-risk features. 
 5. Use the test in Staging to gut-check your monitoring dashboard in DataDog for success (Make sure that the Staging user's test actually hit the place you're wanting it to hit.)
 6. If the change looks good on Staging, begin turning on the feature flag for a small percentage of users in Production
 7. For a simple feature that looks good on Staging, turn on the feature for 100% of users in Production. By testing this way first (before removing the feature flag), you can quickly turn off the feature with the feature flag if something goes wrong.
 8. Monitor production error/success metrics in DataDog
 9. Once you've determined the success of the feature, submit a pull request to remove the feature flag. After it's merged, you will need to remove the feature flag from the database.

### Unit testing  

Add the appropriate unit tests with the feature flag enabled and disabled. For backend tests, make sure to generate new VCR cassettes that accurately reflect any changes as a result of the feature flag. 

### Releasing and monitoring feature flags 

- Plan how to track which users have hit the feature (we liked to use logging with Rails.logger.info or statsd, or by checking data in a parameter of the request).
- Track errors within your APM dashboards. For the backend, ensure methods raise exceptions that log the invoker and feature name.
- Anticipate how you will track error percentage changes over time with an incremental rollout
- More on Form 526 standards for trackabilty [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/standards_for_trackability.md)

### Removing feature flags

Because of the nature of the VA ecosystem, it can be hard to remove feature flags in the same sprint as when the feature flag got deployed. Therefore, we recommend using a separate ticket as a "fast-follow" for removing the feature flag. Please make sure to remove the feature flag from the codebase as soon as it isn't needed. NB: you'll need to manually remove the feature flag from the database in Argo after the removal pull request gets merged. 

### Potential issues
Consider these potential complications for using feature flags. 
- Are there multiple feature flags in play at once? How does that affect the code path and user experience?
- How will you determine success of the feature?
- How will you fully release the feature? Are you incrementing by percentage of users? Or is it a simple change and you can deploy to 100% after a quick confirmation from Staging? 
- What will de-commissioning the feature flag look like?
- Are there any long-term implications for the feature flag? Will a certain piece of data be set one way or another as a result? For example, we used `started_form_version` to track which users submitted under one feature flag.

## Environment checks as an alternative to feature flags
Sometimes using a feature flag is impossible, like if the changes are available on a page that doesn't require a user to be logged in, such as the Intro to 526 form page. (We need to use a particular user in order to turn on the feature flag in Staging for testing, so if we don't have a user, we cannot test.) In that case, you can use an environment check in the frontend that looks for the Staging environment.

### Frontend: 
 Here is how we did it for the frontend: `if (!environment.isLocalhost())` ([link to pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/33294/files)).

### Backend:
In the backend environment, vets-api's RAILS_ENV for both Staging and Production environments is actually set to `production.` Therefore, you must use `Settings.vsp_environment` to check for the proper environment. 


