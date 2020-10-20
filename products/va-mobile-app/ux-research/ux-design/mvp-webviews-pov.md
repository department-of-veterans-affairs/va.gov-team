# Point of view: webviews in the MVP mobile app

September 2, 2020

## Purpose of this document
This document summarizes where we may use webviews in the MVP mobile app & the pros and cons of doing so.

## Things we're definitely using a webview for and why
1. **Sign in flow:** It's a mobile app convention to bring up a webview within an app to use the website to sign in. We don't see any cons to this approach.

## Things we're considering using a webview for and why
1. **Facility Locator**: Initially we planned to build this natively. However, we're now considering a web view for a few reasons:
    - First, the VA.gov webview does not pre-populate locations, instead a user needs to select a facility type. This change was made to aid in discoverability of Urgent Care facilities. To benefit from using a user's location data to serve up a list of facilities witout them interacting, we'd need to serve up a list of facilities of all types *or* select a facility type to focus on. We don't want to select a facility type to focus on because that may harm discovery of other facility types and we don't actually know what a user might be searching for. We also don't want to serve up a full list of all facility types based just on location data because Urgent Care facilities would (in most places) overwhelm the other facility types.
    - Second, since Urgent Care facilities do not have detail pages on the current tool, we'd need to surface all information at each of those facilities (name, full address, link to directions, message that a user needs to call to confirm hours, CTA to In-network urgent care benefit). This would result in a lengthy list at a user's first interaction with Facility Locator.
 
- **Pros of using a webview include:**
    - Low effort for MVP and making future development choices based on data
    - From a UX perspective, prioritizing findability 

- **Cons of using a webview include:**
    - Could potentially frustrate users

2. **Coronavirus FAQ**: We are still exploring if our MVP can hook up to notifications about COVID-19 from the COVID task force or somewhere else. Regardless of if we're able to do this, we may want to link to the Coronavirus FAQ page on VA.gov to ensure our app is highlighting that information during the pandemic.

3. **Privacy Policy**: We would like to use a webview to provide access to VA's privacy policy if we do not need to create a mobile-specific privacy policy.
