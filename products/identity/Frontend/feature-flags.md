# Feature Flags
Feature flags are handled and created via `Flipper` which is built into `vets-api`

> Flipper URLs
> `[API environment]/flipper/features`
> Example for staging `https://staging-api.va.gov/flipper/features`

## Creating a new flipper flag
1. Create a PR on `vets-api` that adds/removes a flag in `config/features.yml`
    1. Example - note `cookie` should be `cookie_id`
2. Update list of Identity owned flags [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Identity%20Team%20Responsibilities/Flipper_features.md)

## Using a flipper flag
1. Add flag from `vets-api` PR into `featureFlagNames.js`
2. Create selector using `toggleValues` [Example](https://github.com/department-of-veterans-affairs/vets-website/blob/484d3259330a15e343afad78b95da2c53ae78ff2/src/platform/user/authentication/selectors.js#L38-L39)
3. Import and use the selector in `mapStateToProps` in the needed component

```javascript
import { loginGov } from "path/to/selector";

function mapStateToProps(state) {
  return {
    loginGovEnabled: loginGov(state)
  };
}
```

4. Use created prop, in this case `loginGovEnabled` to conditionally show features
