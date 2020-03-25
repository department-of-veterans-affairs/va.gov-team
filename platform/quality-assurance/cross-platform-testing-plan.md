# VA.GOV Cross-Platform Testing Plan
An up-to-date version of this file is present in the [*sensitive*](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/quality-assurance/cross-platform-testing-plan.md) version of this repo because it contains credentials.  The credentials that were included in this file previously have been changed, and credentials have been removed from this file.

## Tools

We use [Sauce Labs](https://saucelabs.com/) as our testing platform. It supports over 800 [platforms](https://saucelabs.com/platforms) for testing and is [free for open source projects](https://saucelabs.com/open-source). The credentials for our account are:

```
Username: [redacted]
Password: [redacted]
Access Key: [redacted]
```

## Policies

All new features should be accompanied with a suite of e2e tests to verify their functionality. The testing plan for these tests should be developed in coordination between the development team and the product team to make sure that the test coverage is comprehensive enough.

The test suite should be run automatically on a daily basis to ensure that it works correctly on all of the browsers we wish to test against.

The list of browsers used should be any of the ones that make up > 5% of the traffic on vets.gov. Various versions of those browsers may be using the site at any time, but we don't have the resources to test against every version and platform combination. For most browsers, the tests should execute against the latest version. For IE, we should consider using multiple versions if older ones make up a considerable amount of our traffic.

## Running tests on sauce

### Setting up the proxy

Sauce requires a proxy application to be running so that requests can be made back and forth between the web browser they're operating and the assets and mock API you'll have running locally. You can download a copy of Sauce Connect (sc) [here](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy). This will download a zipfile, inside of which is a `bin` directory containing the executable, `sc`.

### Launching the proxy

By default, all requests from the browser will go through the proxy, which makes things run very slowly when the browser is loading external images and scripts. Using the command listed here to launch the proxy will cause all of the traffic for domains I've identified to be loaded directly from the internet by Sauce.

You will also want to identify the tunnel created by the proxy because Sauce will only allow one tunnel for each identifier, including an empty one which is the default. In the command below, replace {YOUR_IDENTIFIER} with whatever random string you want:

```
./sc -i {YOUR_IDENTIFIER} --direct-domains=isrg.trustid.ocsp.identrust.com,*.bing.com,*.akamaized.net,arc.msn.com,*.microsoft.com,*.symcb.com,*.symcd.com,*.cloudfront.net,dap.digitalgov.gov,*.cdn.mozilla.net,*.usa.gov,*.gstatic.com,*.digicert.com,*.google.com,*.googleapis.com,*.google-analytics.com,*.googleusercontent.com,*.uservoice.com,*.apple.com,*.services.mozilla.com,aus5.mozilla.org --user vetsdotgov --api-key 53cf8d23-c929-4392-9735-ce9c0ac3cae5
```

If Sauce Connect fails to start the Selenium server, specify a different port with the `--se-port` option:

```
./sc -i {YOUR_IDENTIFIER} --user [redacted] --api-key [redacted] --se-port 5555
```

### Running manual tests

To manually test a local branch, first launch the proxy and log into [Sauce Labs](https://saucelabs.com/beta/login). From the dashboard, choose "Manual tests" from the menu on the left. When starting a new session, enter the localhost url you want to test against (for example `http://localhost:3001/health-care/apply/application/veteran-information/birth-information`) and select the sauce connect proxy as the tunnel. If there's only one tunnel available, it may automagically use it.

### Running e2e tests

To execute the entire e2e test suite on sauce, run one of the following replacing {YOUR_IDENTIFIER} with the identifier you used when starting sauce connect:

```
SAUCE_CONNECT_TUNNEL_IDENTIFIER={YOUR_IDENTIFIER} SAUCE_USERNAME=[redacted] SAUCE_ACCESS_KEY=[redacted] npm run test:sauce:desktop
SAUCE_CONNECT_TUNNEL_IDENTIFIER={YOUR_IDENTIFIER} SAUCE_USERNAME=[redacted] SAUCE_ACCESS_KEY=[redacted] npm run test:sauce:mobile
```

To execute a specific test, you can run a similar command:

```
SAUCE_CONNECT_TUNNEL_IDENTIFIER={YOUR_IDENTIFIER} SAUCE_USERNAME=[redacted] SAUCE_ACCESS_KEY=[redacted] npm run test:sauce:desktop -- test/gibct/*.e2e.spec.js
```

Replace the `test/gibct...` part of that command with the path to the specs you want to run.

If you had to specify a different port for the Selenium server, use the same port in the `SELENIUM_PORT` environment variable:

```
SAUCE_CONNECT_TUNNEL_IDENTIFIER={YOUR_IDENTIFIER} SELENIUM_PORT=5555 SAUCE_USERNAME=[redacted] SAUCE_ACCESS_KEY=[redacted] npm run test:sauce:desktop
```

### Browsers supported

The [nightwatch-sauce.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/nightwatch-sauce.js) file in vets-website defines environments for each of the browsers we test against. Sauce labs has an [extensive list](https://saucelabs.com/platforms) of available platforms available, but we have chosen a limited selection based on the browsers that we commonly see on the site. That list is:

* Latest Chrome
* Latest Firefox
* Latest IE
* Latest Edge
* Android browser
* iOS browser

This list does not include Safari because there appears to be no combination of Selenium versions and Safari versions that will work properly on Sauce. They have some well-documented issues here, and we will add Safari as they work them out.

Sauce also has a handy [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/) tool for getting the settings you would need to update the nightwatch-sauce.js file to add platforms or update existing ones. If you want to configure a mobile browser, you must choose Appium as the API at the top of that page. We don't run Appium locally, so this is very confusing, but it doesn't appear to matter.

### Running the tests against specific browsers

By default, the commands above will run the tests against all of the browsers we test with by type. Because that process will be painfully slow, you may wish to run it against only a specific browser or platform. To do this, change the above commands to use the `test:sauce` command and pass in one or more environments you would like to use with the `-e` flag. For example:

```
SAUCE_CONNECT_TUNNEL_IDENTIFIER={YOUR_IDENTIFIER} SAUCE_USERNAME=[redacted] SAUCE_ACCESS_KEY=[redacted] npm run test:sauce -- -e ie,chrome
```

The list of available environments are defined in the [nightwatch-sauce config file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/nightwatch-sauce.js) in vets-website. The command will accept a comma-separated list of environments, up to five.
