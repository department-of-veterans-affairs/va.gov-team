# Automatic Cypress Viewport Updater

The Automatic Cypress Viewport Updater updates the following files in `vets-website` each month with recent data from Google Analytics:

- `config/cypress.json`
- `src/platform/testing/e2e/cypress/support/commands/viewportPreset.js`

The updater:

- Requests two Google Analytics reports from the `ga.gov` organization:
  - Total number of users in the previous month
  - Total number of users in the previous month using 1) each type of device type (mobile, tablet, and desktop), and 2) screen resolution (viewport width/height), sorted by number of users descending
- Parses the reports and creates viewport objects, categorized by device type
- Grabs the the `cypress.json` and `viewportPreset.js` files from Github
- Updates the files
- Creates a new feature branch
- Commits the updated files
- Submits a pull request

## The Number of Top Viewports

When this feature launched, the updater set viewport data for the top 5 mobile, tablet and desktop viewports. However, you can set the number of top viewports for each device type by updating the `NUM_TOP_VIEWPORTS` constant in `CypressViewportUpdater::Viewports`:

```ruby
NUM_TOP_VIEWPORTS = { mobile: 5, tablet: 5, desktop: 5 }.freeze
```

## `DEVICES` Lookup Table

Each viewport object has a `devicesWithViewport` property that lists the most popular devices for each viewport. These lists are stored in the `DEVICES` lookup table.

If a viewport is missing from the lookup table this property will be set to the following string: `This viewport is missing from the devices lookup table. Please contact the Testing Tools Team to have it added.`

Desktop viewports do not use this property; it is set to `This property is not set for desktops.`

## Sidekiq Job

The updater is a Sidekiq job on `vets-api` that runs at 12pm EST on the 3rd of each month.

- Job files: `url_goes-here`
- Job unit tests: `url_goes-here`
- Job VCR cassettes: `url_goes-here`
- Scheduled job: `url_goes-here`

The job is scheduled to run on the 3rd day of each month at noon because it apparently takes Google 24-48 to fully update Google Analytics data. I can’t find official documentation about how often Google updates Google Analytics data but I found [this post](#https://www.ecommercetribune.com/marketing/analytics-data/how-often-does-google-analytics-update/) which is similar to a number of other recommendations I found.

> …according to Google, the statistics update every 24 hours for standard accounts. Google also states that it might have a processing latency of 24-48 hours for the accounts which send more than 200.000 sessions per day. This can delay the updates for up to 2 days.
>
> For premium paid Google 360 accounts, the data is updated every 4 hours or less.

## Secrets

Google API Service Account credentials with read access to va.gov Google Analytics was provided by `#vsp-analytics` and is stored in `credstash`.

A GitHub personal access token with `public_repo` permissions to `vets-website` was provided by `#vsp-testing-tools-team`. The team has an email list/email address with a corresponding Github account that provides the personal access token. This token is also stored in `credstash`.

All sensitive Google API and Github secrets that VCR normally records in each cassette `yml` files is filtered out.
