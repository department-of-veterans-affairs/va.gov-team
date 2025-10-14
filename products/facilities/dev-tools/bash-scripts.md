# Bash Scripts

## Environment aliases
**Note: These scripts are working under the assumption code repos are being stored in `~/code/department-of-veterans-affairs`, you may need to adjust them to point to the correct path for your machine**

```
# For creating blank commits to trigger CI to rebuild (useful for dealing with flaky tests in CI)
alias trigger-build-commit="git commit --allow-empty -m 'Trigger Build'"

# Various Server Startup Scripts
alias content-build-server="vtk socks on && cd ~/code/department-of-veterans-affairs/content-build && yarn build --pull-drupal && yarn serve"
alias vets-api-server="cd ~/code/department-of-veterans-affairs/vets-api && foreman start -m all=1,clamd=0,freshclam=0"
function vets-website-server {
  local env=${1:-static-pages}
  cd ~/code/department-of-veterans-affairs/vets-website && yarn watch --env=$env
}

# Component library script to spin up a local storybook for component development 
function cl-storybook {
  cd ~/code/department-of-veterans-affairs/component-library/packages/web-components/
  nvm use 18.20.4
  yarn install
  yarn build
  yarn build-bindings
  cd ../react-components/
  yarn install
  yarn build
  cd ../core/
  yarn install
  yarn build
  cd ../storybook/
  yarn install
  yarn storybook
}
```

