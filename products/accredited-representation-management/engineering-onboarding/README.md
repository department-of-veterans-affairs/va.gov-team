# FAR/ARM Team

The Find a Representative/Accredited Representative Management Team is in charge of 4 services:

- Find a Representative [Staging URL](https://staging.va.gov/get-help-from-accredited-representative/find-rep/)
- Appoint a Representative [Staging URL](https://staging.va.gov/get-help-from-accredited-representative/appoint-rep/introduction/)
- Profile - Representative Status [Staging URL](https://staging.va.gov/profile/accredited-representative)
- Accredited Representative Portal / Form 21A [Staging URL for Accredited Representative Portal](https://staging.va.gov/representative/) [Staging URL for Form 21A](https://staging.va.gov/representative/accreditation/attorney-claims-agent-form-21a/introduction)

The Find a Representative/Accredited Representative Management Team also partially owns these two services, but any PRs need to involve the Platform Team:

- Get help from an Accredited Representative or VSO Landing Page [Staging URL](https://staging.va.gov/get-help-from-accredited-representative/)
- Accredited Representative FAQs [Staging URL](https://staging.va.gov/resources/va-accredited-representative-faqs/)

## Find a Representative

This tool allows VA users to search for an accredited attorney, claims agent, or Veterans Service Organization (VSO) representative who can help them file a claim or request a decision review.
They can use this search tool to find one of these types of accredited representatives to help them.

You can learn more about this service [here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/product-outline-find-a-representative.md)

### Frontend Code (vets-website)

**Main Application Directory:** [`src/applications/representative-search`](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/representative-search)

### Backend Code (vets-api)

**Controllers:**
- [`representatives_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/controllers/veteran/v0/representatives_controller.rb)
- [`vso_accredited_representatives_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/controllers/veteran/v0/vso_accredited_representatives_controller.rb)
- [`other_accredited_representatives_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/controllers/veteran/v0/other_accredited_representatives_controller.rb)

**Models:**
- [`representative.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/models/veteran/service/representative.rb)
- [`organization.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/models/veteran/service/organization.rb)

### How to Run Locally

[Go here for information on running locally](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/representative-search/README.md)

## Appoint a Representative

This tool allows VA users to pre-fill their VA Form 21-22 to appoint a Veteran Service Organization (VSO).
They can also use this online tool to pre-fill their VA Form 21-22a to appoint a VA accredited attorney or claims agent.

You can learn more about this service [here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/product-outline-appoint-a-representative.md)

### Frontend Code (vets-website)

**Main Application Directory:** [`src/applications/representative-appoint`](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/representative-appoint)

### Backend Code (vets-api)

**Controllers:**
- [`power_of_attorney_requests_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/controllers/representation_management/v0/power_of_attorney_requests_controller.rb)
- [`pdf_generator_2122_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/controllers/representation_management/v0/pdf_generator_2122_controller.rb) - Form 21-22 PDF generation
- [`pdf_generator_2122a_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/controllers/representation_management/v0/pdf_generator_2122a_controller.rb) - Form 21-22a PDF generation

**PDF Construction:**
- [`form_2122.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/lib/representation_management/v0/pdf_constructor/form_2122.rb) - Form 21-22
- [`form_2122a.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/lib/representation_management/v0/pdf_constructor/form_2122a.rb) - Form 21-22a

### How to Run Locally

[Go here for information on running locally](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/representative-appoint/README.md)

## Profile - Representative Status

This tool allows a VA user to go to the home page and select `Profile` from the dropdown under their name.
The Profile page then directs the user to various cards with information that pertains to them. By selecting the link in the card `Accredited representative or VSO`, a Veteran will learn if they have a representative or VSO.

You can learn more about this service [here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status/readme.md)

### Frontend Code (vets-website)

**Main Component Directories:**
- [`src/applications/personalization/profile/components/accredited-representative`](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/components/accredited-representative)
- [`src/platform/user/widgets/representative-status`](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/user/widgets/representative-status)

### Backend Code (vets-api)

**Controller:**
- [`power_of_attorney_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/controllers/representation_management/v0/power_of_attorney_controller.rb)

**Model:**
- [`user.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/app/models/veteran/user.rb) - Veteran user model with representative associations

### How to Run Locally

**Note:** The README file for this component is located at `src/applications/personalization/profile/components/accredited-representative/README.md`

[Go here for information on running locally](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/accredited-representative/README.md)

## Accredited Representative Portal - Form 21A

This tool allows an attorney or claims agent to start the application process to become a VA-accredited representative. They can fill out the Form 21A online and submit it.

### Frontend Code (vets-website)

**Main Application Directory:** [`src/applications/accreditation/21a`](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/accreditation/21a)

### Backend Code (vets-api)

**Controllers:**
- [`accredited_individuals_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/controllers/representation_management/v0/accredited_individuals_controller.rb)
- [`flag_accredited_representatives_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/controllers/representation_management/v0/flag_accredited_representatives_controller.rb)

**Background Jobs:**
- [`accredited_individuals_update.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/sidekiq/representation_management/accredited_individuals_update.rb)
- [`accredited_entities_queue_updates.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/sidekiq/representation_management/accredited_entities_queue_updates.rb)

### How to Run Locally

[Go here for information on running locally](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/accreditation/21a/README.md)

## Claims Agents, Attorneys, Representatives, and Veteran Service Organizations Intake

We will soon be transitioning to our new Accreditation API-based intake for all of these records. You can find the details for how that works [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/app/sidekiq/representation_management/README.md).

## Supporting Backend Services

### Background Jobs
- Power of Attorney email notifications in [`modules/representation_management/app/sidekiq/power_of_attorney_requests/`](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/representation_management/app/sidekiq/power_of_attorney_requests)
- Representative data updates in [`modules/veteran/app/sidekiq/`](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/veteran/app/sidekiq)

### External Service Integrations
- GCLAWS integration in [`modules/representation_management/app/services/representation_management/gclaws/`](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/representation_management/app/services/representation_management/gclaws)
- Power of Attorney orchestration service

### API Routes
- [`modules/representation_management/config/routes.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/representation_management/config/routes.rb)
- [`modules/veteran/config/routes.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/veteran/config/routes.rb)

## Engineering Onboarding Resources

### Access and Setup

- [GitHub Access](./onboarding/github-access.md) - How to set up your GitHub account and SSH keys
- [AWS Access](./onboarding/aws-access.md) - Steps to request and configure AWS access
- [SOCKS and Sentry Access](./onboarding/socks-and-sentry-access.md) - Guide for obtaining SOCKS proxy and Sentry access
- [ArgoCD](./onboarding/argocd.md) - How to get access to and use ArgoCD for deployments

### Development Environment

- [Creating Certificates for Localhost](./onboarding/create-certificate-for-localhost.md) - Set up SSL certificates for local development
- [Feature Flags](./onboarding/feature-flags.md) - How to access and manage feature flags (Flipper)

### Testing

- [Testing in vets-website](./onboarding/testing-in-vets-website.md) - Guide for running unit tests, Cypress tests, and coverage reports in vets-website
- [Testing in vets-api](./onboarding/testing-in-vets-api.md) - Testing guidelines and resources for vets-api development
