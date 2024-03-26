# Regression Test Plan for Terms of Use

## Frontend Regression

Steps for `content-build`: (this will force Terms of Use to go back to staging)
1. Navigate to `content-build` repository
2. Create a Pull Request that changes the `registry.json` file for Terms of Use from `"vagovprod": true` to `"vagovprod": false`
3. Merge that Pull Request

## Backend Regression

Steps for `vets-api`:

SSOe disable:
  1. Create PR that removes apps from `TERMS_OF_USE_ENABLED_CLIENTS` in `lib/saml/url_service.rb`

SiS disable:
  1. In the rails console, set `enforced_terms` on all `ClientConfigs` to `nil`
