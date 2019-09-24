# Feature Flags (aka Feature Toggles, Feature Flippers)
VSP has feture toggles that can be used in both vets-api and vets-website. 
It's possible to enable/disable a feature entirely, for a percentage of all users, a percentage of all logged in users, a list of users, or using some criteria defined in a method. At this time the feautre toggles are managed by a select few administrators (ask in #VSP-Platform-Support slack), but we intend to allow more access in the future.

Our feature toggles are powered by an open-source gem called [Flipper gem](https://github.com/jnunemaker/flipper)

## Managing Feature Toggles
Features can be enabled/disabled in the Flipper user interface.  For inital rollout it is protected with HTTP basic Auth.  The values of each toggle are cached in memory for 1 minute, so it may that long to see the effect of enabling/disabling the toggle. 

|Environment|URL|Username|Password|
|---|---|---|---|
|Dev|http://localhost:3000/flipper/features|SUPER_SECRET_USERNAME| SUPER_SECRET_PASSWORD|
|Staging|https://staging-api.va.gov/flipper/features|flipper_admin| set in Settings.flipper.password|
|Production|https://api.va.gov/flipper/features|flipper_admin| set in Settings.flipper.password|


The most basic action is to toggle the green/red "enable/disable" button to toggle the feature for all users. For a gradual rollout or an a/b test we can use "Percentage of Logged in Users". "Percentage of Logged in Users" will enable the feature for the same users each time they return to the site (presuming the percentage is not changed).

We can also roll out a feature for a select few users by adding the their email adddress to the actors section. For performace reasons, the list of actors is intended to be small, do not use for hundreds of users.

## Front End Implementation
The front end queries the http://localhost:3000/v0/feature_toggles endpoint [documented here](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/site/getFeatureToggless), which returns true/false for each feature toggle.

## Back End Implementation
To check if a feature is enabled within the context of a specific user, call  `Flipper.enabled?('facility_locator_show_community_cares', @current_user))`.  The user parameter is optional.

To initialize the feature flag (defaulted to disabled) in each environment add the feature name to FEATURE_TOGGLES in [config/features.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml)
