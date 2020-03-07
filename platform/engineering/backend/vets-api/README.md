# Vets API Introduction

Vets.gov's frontend repo(Vets-Website) uses Vets-API as a service layer for all features. To expose new data or systems to Vets-Website, engineers should create an integration in Vets-API. If you would like to expose an existing service's API, without an associated Vets-Website form, save in progress functionality, or prefill, please reach out to the DSVA for additional options.

The Vets-API Platform is a wrapper around VA data services with utilities and tools that support interaction with those services on behalf of a Veteran. It exposes tools to retrieve information and submit data to VA systems, and does so with a unified sign-in mechanism. When services are down or are experiencing problems, Vets-API integrations are designed to gracefully handle failures and provide useful notifications to consumers. Vets-API is built on top of Ruby on Rails, providing a unified JSON-based REST interface and additional resilience for VA data services that may not be designed to operate directly with users 24x7.

## Platform Features

* Authentication / Authorization
* PDF Generation
* Monitoring
* Exception Tracking
* Downtime Notifications / Maintenance Windows

## Development

See the [Vets-API Development](development.md) documentation to get started with
a local instance of Vets-API and for guidance on how to submit changes and new features.

## Integration Overview

A Vets-API integration must handle user requests, validate inputs, make one or multiple requests to another (external) service, and then render a response based on the results of those external service responses. To expose a service integration, a developer must:

1. Provide Routing for a new endpoint on api.va.gov
2. Authorize requests to this endpoint appropriately through a Policy
3. Validate user input or form submissions
3. Instantiate an External Service Client connection and interact with an External Service
4. Serialize and render response data

Vets-API provides utilities and patterns for appropriate instrumentation, error handling, and documentation for defining this integration consistently and resiliently. Refer to the guides in the sidebar for more information on how to utilize each of these features and develop  an integration.

<hr>

Back: [Creating Form Schema](../creating-form-schema.md)

Next: [Vets API Development](development.md)
