# Local Back-end Engineering Setup

## Configuration

1. Download the `vets-api-mockdata` repo in the same directory as `vets-api`. The two local repositories should be adjacent to each other.
2. In `config/settings/development.yml`, make sure `cache_dir: ../vets-api-mockdata` is there
3. In `config/settings.local.yml`, make sure this key is present:

```yaml
betamocks:
    cache_dir: ../vets-api-mockdata
```

## Commands

For [running `vets-api` natively](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/native.md) (recommended), use `foreman start -m all=1,clamd=0,freshclam=0`.

For [running `vets-api` on Docker](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/docker.md), use `docker-compose -f docker-compose-deps.yml up`.

### For Checking CI/CD Requirements

To check if specific test files pass, run RSpec with `rspec <PATH(S)>`. If this does not work, try `bundle exec rspec <PATH(S)>`.

To check if specific files pass the linting rules, run Rubocop with `bundle exec rubocop <PATH(S)>`.

### For Updating Database

1. Run `foreman start -m all=1,clamd=0,freshclam=0` to run the database.
2. In a separate terminal, run `bundle exec rake db:migrate`

### For Accessing Rails Console

Run `bundle exec rails c` to open the Rails terminal.

This command can also be used in for checking data in Argo CD.

1. In ArgoCD, go to `vets-api-prod`.
2. Go to a pod that begind with `vets-api-web`.
3. Click the "terminal" tab.
4. Run `bundle exec rails c` in the web terminal.
