# Phased Rollouts


## Overview
Usually when we release a "significant" new feature on VA.gov we do so using a phased rollout plan. This document describes these phased rollouts at a high level and then links out to other documents with deep-dives on how these phased rollouts are achieved from an engineering perspective.

## High level view
In order to mitigate as much risk as possible with rolling out a new feature we generally release the feature to a limited percentage of users first. Once we execute this initial release we can then monitor the feature to make sure that everything is working as expected. If everything is working as expected then we can increase the percentage of users that can access the feature. We wil generally then monitor this larger group to make sure everything is still working as expected. Depending on the size, reach, and complexity of the feature this process of increase usage percentage and monitor could be done a few more times in varying increments before the feature is available to the full population using VA.gov.

When we perform these phased rollouts, sometimes called scaled rollouts, we do this using a few key pieces of technology -

1. A feature toggle that can control what percentage of users can see a particular feature
2. One or more React widgets on the static pages leading to a particular feature
3. Some type of monitoring

Each of these pieces of technology will be covered more in depth however it is good to get a high level understanding of them first.

### A feature toggle

On VA.gov we have the ability to use feature toggles in the code to only execute that code based on if the feature toggle is `true` or `false`. When a feature toggle is set up there are both back end and front end components to it and there is an admin dashboard that engineers can use to set values for who will get a `true` value from the feature toggle and who will get a `false` value. The values can either be set as a percentage of users, specific user accounts (a list of login emails that are enabled), or a percentage of time. For the sake of phased rollouts it is advised that onle the first two possible options (percentage of time or specific emails) be used as a percentage of time can produce unexpected results.

Once the back and and front end peices of the feature toggle are set up you will be able to change the values of who can see the code wrapped in the feature toggle using an admin dashboard. You can read about how to set up a feature toggle on VA.gov [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/Feature-toggles.1859780873.html). You will also need to have a login for VA.gov and all lower environments that uses your email and is set as an admin of the feature toggle dashboard. You can request this access by putting in a pull request with your email added to [this list](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/settings.yml).


### A React widget

Generally the path that Veterans will take to get to a feature is intended to begin with a static page in Drupal. Since these pages are not written in React we as engineers need to build a React widget that taps into the feature toggle so that we can show different content on these static pages for those users intended to have a `true` value for the feature toggle.








