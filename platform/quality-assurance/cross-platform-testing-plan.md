----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA.gov-Cross-Platform-Testing.1905000473.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# VA.GOV Cross-Platform Testing Plan
**NOTE:** A version of this document that contains credentials is stored in the [*va.gov-team-sensitive*](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/quality-assurance/cross-platform-testing-plan.md) repository.

## Tools

1. [Sauce Labs](https://saucelabs.com/) is available using the credentials stored in [*va.gov-team-sensitive*](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/quality-assurance/cross-platform-testing-plan.md). It supports over 800 [platforms](https://saucelabs.com/platforms) for testing and is [free for open source projects](https://saucelabs.com/open-source).

2. [BrowserStack](https://accounts.browserstack.com/jointeam/335d37232d79083f9fa736431a074264) has a similar offering of platforms. You should be able to click the [BrowserStack](https://accounts.browserstack.com/jointeam/335d37232d79083f9fa736431a074264) link in order to request access to our organization. Detailed documentation on the use of BrowserStack is not available at this time. You may want to check back in at this location in the future for more details regarding BrowserStack.

## Policies

### General Guidance
* At this time automated E2E testing is not part of the CI/CD pipeline. There are currently no plans to incorporate E2E testing in the pipeline.
* You may wish to kick off your automated test suite against your local instance. Cypress supports several different selectable render modes including --
  * **Chrome** (default)
  * **Edge** (Chromium)
  * **Firefox** (beta)
* In order to gain access to additional platforms you may want to set up the Sauce Connect proxy described below. Consult the list of browsers supported by the platform to understand which platforms you should target.

### Browsers supported by the platform

SauceLabs has an [extensive list](https://saucelabs.com/platforms) of available platforms, but VSP requires support for a limited selection based on the browsers that generate the most traffic on the platform. That list is:
* Desktop
  * Latest Chrome
  * Latest Firefox
  * Internet Explorer 11
  * Latest Edge
  * Latest Safari
* Mobile
  * Android browser
  * iOS browser

## Using Sauce Connect Proxy to test Locally

### Setting up the proxy

SauceLabs requires a proxy application to be running so that requests can be made back and forth between the web browser operating in the SauceLabs environment and the assets and mock API you'll have running locally. You can download a copy of Sauce Connect (sc) [here](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy). This will download a zipfile, inside of which is a `bin` directory containing the executable, `sc`.

### Launching the proxy

By default, all requests from the browser will go through the proxy, which makes things run very slowly when the browser is loading external images and scripts. Using the command listed here to launch the proxy will cause all of the traffic for domains I've identified to be loaded directly from the internet by Sauce.

You will also want to identify the tunnel created by the proxy because Sauce will only allow one tunnel for each identifier, including an empty one which is the default. In the command below, replace {YOUR_IDENTIFIER} with whatever random string you want:

```
./sc -i {YOUR_IDENTIFIER} --direct-domains=isrg.trustid.ocsp.identrust.com,*.bing.com,*.akamaized.net,arc.msn.com,*.microsoft.com,*.symcb.com,*.symcd.com,*.cloudfront.net,dap.digitalgov.gov,*.cdn.mozilla.net,*.usa.gov,*.gstatic.com,*.digicert.com,*.google.com,*.googleapis.com,*.google-analytics.com,*.googleusercontent.com,*.uservoice.com,*.apple.com,*.services.mozilla.com,aus5.mozilla.org --user vetsdotgov --api-key e471bcb9-fa68-47bd-85f7-af25a24a754a
```

If Sauce Connect fails to start the Selenium server, specify a different port with the `--se-port` option:

```
./sc -i {YOUR_IDENTIFIER} --user vetsdotgov --api-key e471bcb9-fa68-47bd-85f7-af25a24a754a --se-port 5555
```

### Running manual tests

To manually test a local branch, first launch the proxy and log into [Sauce Labs](https://saucelabs.com/beta/login). From the dashboard, choose "Manual tests" from the menu on the left. When starting a new session, enter the localhost url you want to test against (for example `http://localhost:3001/health-care/apply/application/veteran-information/birth-information`) and select the sauce connect proxy as the tunnel. If there's only one tunnel available, it may automagically use it.
