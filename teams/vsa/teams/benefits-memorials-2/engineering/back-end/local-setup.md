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

## Commands to meet CI/CD Requirements

To check if specific test files pass, run RSpec with `rspec <PATH(S)>`. If this does not work, try `bundle exec rspec <PATH(S)>`.

To check if specific files pass the linting rules, run Rubocop with `bundle exec rubocop <PATH(S)>`.
