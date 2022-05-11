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

Generally the path that Veterans will take to get to a feature is intended to begin with a static page in Drupal. Since these pages are not written in React we as engineers need to build a React widget that taps into the feature toggle so that we can show different content on these static pages for those users intended to have a `true` value for the feature toggle. In practice the content you will usually be changing will be text and/ or links but this can vary depending on the app. These React widgets sit on the Drupal static page and when loaded read the value of a feature toggle, discussed in the previous section, being either `true` or `false` and this value can be used in logic statements to show different content.

> It is important to note that when you are performing a phased rollout you will generally want to show the content that was originally on the static > Drupal page to those who get a `false` value in the feature toggle (those outside the percentage you are releasing the app to). You should work with the Public Websites and content teams to determine what this original content was as well as what the new content for those who get a `true` value in the feature toggle should be.

There is documentation from the platform on how to build a feature toggle [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/Creating-a-new-React-widget.1849425948.html) however it is worth noting that this document does not provide steps to test your React widget. Here are the general steps to test your React widget -

<details><summary>Testing a React widget</summary>
<p>

 Once you have followed the steps for creating a React widget you most likely want to test it to make sure it works as intended. Since your React widget will be used on a static page it should be tested on a static page set up by the `content-build` repo. 

</p>
</details>










