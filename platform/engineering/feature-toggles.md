# Feature Flags (aka Feature Toggles, Feature Flippers)
VSP has feature toggles that can be used in both vets-api and vets-website. 
It's possible to enable/disable a feature entirely, for a percentage of all users, a percentage of all logged in users, a list of users, or using some criteria defined in a method. At this time the feautre toggles are managed by a select few administrators (ask in #VSP-Platform-Support slack), but we intend to allow more access in the future.

Our feature toggles are powered by an open-source gem called [Flipper gem](https://github.com/jnunemaker/flipper)

## Managing Feature Toggles
Features can be enabled/disabled in the Flipper user interface. To access the Flipper UI, first log in using an identity-verified id.me user listed in  [settings.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/settings.yml#L397). If you're not sure if your account is identity-verified, you can check by going to [this page](https://www.va.gov/profile/). If you need to verify your account you'll see a "Verify with ID.me" button.

|Environment|URL|
|---|---|
|Dev|http://localhost:3000/flipper/features|
|Staging|https://staging-api.va.gov/flipper/features| 
|Production|https://api.va.gov/flipper/features|

The most basic action is to toggle the green/red "enable/disable" button to toggle the feature for all users. For a gradual rollout or an a/b test we can use "Percentage of Logged in Users". "Percentage of Logged in Users" will enable the feature for the same users each time they return to the site (presuming the percentage is not changed). The values of each toggle are cached in memory for 1 minute, so it may that long to see the effect of enabling/disabling the toggle. 

We can also roll out a feature for a select few users by adding the their email adddress to the actors section. For performace reasons, the list of actors is intended to be small, do not use for hundreds of users.

<img width="1287" alt="Screen Shot" src="https://user-images.githubusercontent.com/19188/74881655-b4d11a80-533b-11ea-8e97-fdea24c10830.png">


## Front End Implementation
The front end queries the `/v0/feature_toggles` endpoint ([swagger](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/site/getFeatureToggless)), which returns true/false for each feature toggle.
Full [vets-website feture toggle documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags/) (see Release Toggles)

## Back End Implementation
To check if a feature is enabled within the context of a specific user, call  `Flipper.enabled?('facility_locator_show_community_cares', @current_user))`.  The user parameter is optional.

To initialize the feature flag (defaulted to disabled in stanging and production and enabled in development and test) in each environment add the feature name to FEATURE_TOGGLES in [config/features.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml)
