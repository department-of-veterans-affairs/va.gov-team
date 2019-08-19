# Feature Flags (aka Feature Toggles, Feature Flippers)

Our feature toggles are powered by an open-source gem called [Flipper gem](https://github.com/jnunemaker/flipper)

## Managing Feature Toggles
Features can be enabled/disabled in the Flipper user interface.  For inital rollout it is protected with HTTP basic Auth.  The values of each toggle are cached in memory for 1 minute, so it may that long to see the effect of enabling/disabling the toggle. 

|Environment|URL|Username|Password|
|---|---|---|---|
|Dev|http://localhost:3000/flipper/features|SUPER_SECRET_USERNAME| SUPER_SECRET_PASSWORD|
|Staging|https://staging-api.va.gov/flipper/features|flipper_admin| set in Settings.flipper.password|
|Production|https://api.va.gov/flipper/features|flipper_admin| set in Settings.flipper.password|

<img width="504" alt="Screen Shot 2019-08-19 at 2 48 23 PM" src="https://user-images.githubusercontent.com/19188/63292432-a07c6a00-c293-11e9-9133-ad33f1b2de47.png">

The most basic action is to toggle the green/red "enable/disable" button to toggle the feature for all users. For a gradual rollout or an a/b test we can use "Percentage of Logged in Users". "Percentage of Logged in Users" will enable the feature for the same users each time they return to the site (presuming the percentage is not changed).

We can also roll out a feature for a select few users by adding the their uuid (without `-`) to the actor's setting. 
For example, if I wanted to add `vets.gov.user+0@gmail.com` as a test/beta user I could get log in as that user, get their uuid from the /user json and add `User;b4b00b5aa99e492aaa94fe40dd3a8d3b` to the `actors` setting (more elegant solution forthcoming). For perfornace reasons, the list of actors is intended to be small, do not use for hundreds of users.

<img width="1397" alt="uuid" src="https://user-images.githubusercontent.com/19188/63297420-59947180-c29f-11e9-96fd-493df36fbed6.png">
<img width="489" alt="Actors" src="https://user-images.githubusercontent.com/19188/63297421-59947180-c29f-11e9-83f6-383a7abe469f.png">


## Front End Implementation
The front end queries the http://localhost:3000/v0/feature_toggles endpoint [documented here](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/site/getFeatureToggless), which returns true/false for each feature toggle.

## Back End Implementation
To check if a feature is enabled within the context of a specific user, call  `Flipper.enabled?('facilityLocatorShowCommunityCares', @current_user))`.  The user parameter is optional.

To initialize the feature flag (defaulted to disabled) in each environment add the feature name to FEATURE_TOGGLES in `config/initializers/flipper.rb`

