# Regression Test Plan for Terms of Use

## Frontend Regression

Steps for `content-build`: (this will force Terms of Use to go back to staging)
1. Navigate to `content-build` repository
2. Create a Pull Request that changes the `registry.json` file for Terms of Use from `"vagovprod": true` to `"vagovprod": false`
3. Merge that Pull Request

## Backend Regression

Steps for `vets-api`:

No regression changes necessary.
