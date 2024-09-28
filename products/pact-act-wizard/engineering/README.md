# PACT Act wizard engineering information

## Overview

**App context root**: `/pact-act-eligibility`

The PACT Act is a 2023 law that expands VA benefits and health care for Veterans exposed to burn pits, Agent Orange, and other toxic substances. The app asks a series of questions based on when the Veteran served in the military to determine whether they are eligible for the benefits.

The guidance at the end of the flow (results page) depends on the responses to the app's questions.

## Business logic documentation

The visual representation of the business logic is in this [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692989444688/0044b9825c82d8d23920601f68c41a61d047d681?sender=ue51e6049230e03c1248b5078).

The app does not use any API calls; all of the business logic is housed in the front end ([vets-website](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/pact-act)).

## Content

The content for the app is maintained by the Content, Accessibility, and Information Architecture (CAIA) team.

- [#sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH)

## Running locally

The PACT Act app does not have any reliance on API calls or any other repositories. Once your `vets-website` repository is set up locally, you can run `yarn watch --env entry=pact-act` to run the app.

## Display conditions

The questions shown in the app each have their own display conditions. For example, if question C can only appear when question A and B have both been answered "No," the display conditions will indicate this requirement.

All of the display conditions are in [a constants folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/pact-act/constants/display-conditions), including those that determine which results screen to show. [This README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/pact-act/constants/display-conditions/README.md) describes how the display conditions work. [This Mural]([Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692989444688/0044b9825c82d8d23920601f68c41a61d047d681?sender=ue51e6049230e03c1248b5078)) is a handy document to reference side-by-side with display conditions.

The app has utility functions that use the display conditions to determine which question comes next in the flow (navigating forward or backward). [This directory](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/pact-act/utilities) houses all of the utility functions that control navigation and display of questions and results pages. All functions have JSDocs to describe their purpose and what data they need.

## Testing

The app uses a large suite of Cypress and unit tests to verify flows and functionality. The Cypress test approach is described in [this README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/pact-act/tests/cypress/README.md). Unit tests rendering JSX are limited due to limitations with web components and the shadow DOM (testing tools cannot interact with elements in the shadow DOM). The unit tests cover as much functionality as possible, and the goal of the Cypress tests is to fill in the gaps. Both test suites together are intended to provide significant confidence that the app is functioning as expected, but manual testing is expected and still necessary when code changes are made.

## Product ownership

The PACT Act app is owned by the VA.gov Sitewide Product team, and is part of the Public Websites product portfolio.

- [#sitewide-public-websites](https://dsva.slack.com/archives/C52CL1PKQ)
