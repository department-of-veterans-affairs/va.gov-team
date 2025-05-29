# Vets API Integration Discovery

## Overview

The intent of this writeup is to explore the technical requirements, reasonability, and lift for integrating the BDS API with the `Discover your Benefits` app on VA.gov.

## Vets API Overview

All apps on VA.gov that rely on any API have to go through [vets-api](https://github.com/department-of-veterans-affairs/vets-api), the API that powers VA.gov applications. This is because of how VA.gov is configured. The [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) for the VA.gov server is setup to only allow requests from [api.va.gov](https://api.va.gov/). This means attempting to access an upstream API service (i.e. one hosted via lighthouse, e.g. BDS) directly isn't possible, for more than one reason.

This means that in order to integrate with the BDS API, we would most likely need to create a module in the `vets-api` repo, which would essentially be it's own API that handles requests to and from the BDS API. Implementing this API in `vets-api` would require work from backend engineers familiar with Ruby on Rails.

## Authentication

Apps on VA.gov do not need to require users to be authenticated in order to use an API from `vets-api`. An example of this can be seen with the [Find VA locations](https://www.va.gov/find-locations) and [GI Bill Comparison Tool](https://www.va.gov/education/gi-bill-comparison-tool) applications. This means we could still manage an unauthenticated experience even when integrating with the BDS API.

### Benefits of authentication

Some potential benefits to having users be authenticated are:

- Having some of their data already pre-populated, so we wouldn't need to ask them as many questions
- Being able to save their recommended benefits to their account, so they would return and access them at a future time

This would need to be verified by the backend engineer who works on the `vets-api` portion of this work.

### Frontend authentication

Authentication can be made required via the [RequiredLoginView](https://github.com/department-of-veterans-affairs/vets-website/blob/89fafd8f72c9acb15394af779231a48b539971bc/src/platform/user/authorization/components/RequiredLoginView.jsx#L38) component, which checks whether an active authenticated session is present before allowing access to the app, and if one isn't, the user will be prompted to sign in.

This works great for the authenticated workflow of our app, but becomes a bit more tricky accounting for both the authenticated and unauthenticated workflows. From my findings, there aren't any apps that support both authenticated and unauthenticated workflows, so our app would potentially be the first to do so. There are a few ways we could potentially handle this:

- The [Sign-in](https://www.va.gov/sign-in) application on the VA.gov website essentially directs the user to the sign-in page so they can authenticate. We could have an entry page to the app that allows the user to choose whether they want to log in and continue the app (explaining the benefits of logging in) or continue unauthenticated, and based on that selection, we would navigate them to the `Sign-in` app so they can authenticate.

- Another approach, similar to the first option is that after the user decides which workflow to proceed with, instead of routing them to the `Sign-in` application, we render the version of the app wrapped in the `RequiredLoginView`, that way we are enforcing authentication before they continue.

- One last way would be to not ask the user whether they would like to sign in, and just check whether they are authenticated or not, and if they are authenticated, use the authenticated workflow.

## Scalability of Vets API Integration

By integrating `vets-api` into the app, we gain more scalability in the sense that there is room for additions to the app. We could eventually get to a place where we could have some sort of benefit portal where we help veterans track which recommended benefits they've applied to, potentially even showing status updates to them.

But in the near future, we would still gain reducing the amount of questions we ask veterans on the form by having their information pre-populated, and being able to save their benefits for them to revisit on the site.

## Next steps

I think the main focus for the path forward should be in integrating with the BDS API, so that we can get as much of the recommended benefits as possible from their API. This would mean holding off on authentication until the API integration is complete.

Doing the work in this order would give us an even clearer vision of what we would need in our app's API to support a seamless authenticated experience.
