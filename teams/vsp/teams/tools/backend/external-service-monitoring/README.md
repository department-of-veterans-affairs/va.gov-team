# VSP Toolkit | SLO Tools

## External Service Monitoring

This folder contains tools used for managing external service monitoring reports.

### Generate External Service Performance report

These instructions explain how to use the `Selenium::WebDriver` based script to capture snapshots of each external service dashboard.

#### Prerequisites:

These instructions and corresponding script assume the following:

- `ruby --version` should be `2.3.x` or greater
- `convert --version` should be `Version ImageMagick 6.9.x` or greater [install instructions](https://imagemagick.org/script/downloadphp)
- Firefox version should be `Mozilla Firefox 72.x` or greater
- `geckodriver` [install instructions](https://github.com/mozilla/geckodriver/releases) (or try `brew install
    geckodriver`)

1. Ensure your browser profile is configured to use [SOCKS proxy config](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/scripts/socks/README.md) ([more documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/f60352f90eaaed4ca4e8539cbf05a81bd519cb31/platform/engineering/internal-tools.md#chrome--firefox))
1. Login to GitHub and use OAuth to login to [Grafana](http://grafana.vfs.va.gov)
1. Find your profile name by navigating to `about:profiles` in the Firefox address bar - the active profile name is what you're looking for
1. Close any open instances of your browser - in order to avoid errors with Selenium
1. Substitute the profile name above for `$PROFILE` and run the following command from this directory:

`PROFILE_NAME=$PROFILE bin/capture-slo-screenshots`

**Do not open additional Firefox windows while the script is running.**

This should output some status information as the browser runs in the background, and will generate a collection of screenshots in `tmp/screenshots`.

Once this is completed (~5-15min) generate the PDF by running this command:

`bin/generate-service-docs`

This will generate a set of PDFs in `reports/`.

Please upload this report to the [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK) channel as well as the
[historical reports](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/external-service-monitoring/historical-reports) directory.


#### Known Issues

- Must have browser windows closed or Selenium will throw exception(s)
- Doesn't capture the overall panel view yet, that's gotta be done manually
- Very brittle and hard-coded backend tags will drift out of sync with reality

> Contact Keifer Furzland <keifer@oddball.io> (@kfrz) if you experience issues

## Roadmap

This tool is planned to be used as a stop gap while the tools team(s) work on a more sustainable approach.
