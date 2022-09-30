# Remote Config Documentation (Feature Flipper/Toggles)


## Background
Due of the growing complexity of the Flagship app and the types of features we are incorporating, we have an increasing need for the ability to manage aspects of the app remotely. In mobile, as in web, the best way to do this is by incorporating a remote configuration that allows features, behavior, and appearance aspects of the app to be updated without issuing a full app update.

[Firebase's Remote Config](https://firebase.google.com/docs/remote-config) product allows us to store and modify values remotely, enable or disable certain app features, as well as roll them out to a certain percentage of users at a time.

## Fetching and Activation Strategy
Remote config values will be fetched on app launch, however they will not be activated until the *next* app launch.  This prevents any jarring UI changes from appearing to the user.  For more information on this strategy see this article, [Firebase Remote Config loading strategies](https://firebase.google.com/docs/remote-config/loading#strategy_3_load_new_values_for_next_startup).

## Environments
The values set in Firebase are for production only. Any overrides we'll use for development or in QA will be stored and overridden in our FE code in `src/utils/remoteConfig.ts`.  The app will only fetch values from Firebase if it detects that our `ENVIRONMENT === 'Production'`. Otherwise it will use the defaults for staging/dev that are set in `remoteConfig.ts`

## Guidelines
2. The feature for consideration should be relatively self-contained and require a minimal amount of logic to switch between its enabled and disabled state (e.g. request appointment flow)
3. Addition of a new remote config value should be approved by @lexicalninja, @dumathane, and @narin
4. Values should be named using snake case (i.e. `my_test_value`)
5. Values should be named using the feature by itself, and not any boolean indicating prefix or suffix such as `is` or `enabled`

## Data Schema
While the number of remote config values we have will be small, it's important that we set some guidelines about naming conventions and structure of our configurations as they grow.

Firebase allows for 4 different data types:
* String
* Boolean
* Number
* JSON

For the foreseeable future, we'll only make use of the Boolean data type.

The data schema will be a flat structure consisting of booleans:

### Example
```json
{
  "SIS": true,
  "prescriptions": false,
  "appointment_requests": false
}
```

