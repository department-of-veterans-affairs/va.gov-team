## [WIP] When to use feature flags

Because of the lack of a true staging environment, releasing new features, or even bug fixes, can be impossible to test and very risky. One way to mitigate the risk of causing issues to users in production is to use Feature Flags.

We recommend using feature flags for any new functionality and critical bug fixes as a way to safely test before a full deploy.
With a feature flag in place, you can turn on the feature flag in Staging for your particular testing user once your code has been merged and deployed. 

## How to use feature flags

 To use, follow these steps in Platform's [guide to using Feature Toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide). Please make sure to remove the feature flag from the codebase as soon as it isn't needed. 

### Releasing and monitoring feature flags 

As with any release, plan ways to track feature flag usage with error handling and APM dashboards. For the backend, ensure methods raise exceptions that log the invoker and feature name. 

### Potential issues
Consider any long-term implications of feature flags. Do you have any way to track which users have hit which feature? 

## Alternative to feature flags: environment check
Sometimes using a feature flag is impossible 


