# Consumer-driven Contract Testing with Pact

## Problem
There is a lack of integration test coverage between the front-end (FE, or website) and back-end (BE, or API) on VA.gov.

The existing end-to-end (E2E) tests on the FE are supposed to represent typical UI flows in various VA.gov apps, and to automate those flows, the tests mock out expected responses from the BE to requests made by the FE.

However, those mocked responses are not validated against any real responses that the API might produce, so the tests don't really instill confidence in the accuracy of the interaction between FE and BE. The validity of the integration ends up being determined entirely by the test maintainers' own expectations, and the mock responses can be tweaked just to get the tests to pass.

## Proposed Solution
Having integration tests that are truly representative of the request-response interaction between the website and API would give us the confidence that we're testing scenarios as realistically as possible.

This is where consumer-driven contract testing (CDCT) comes in. It's a process that codifies the interactions between a consumer (like an app) and provider (like an API) into a contract, or a file that is formatted to represent those interactions. The format for each interaction typically consists of a request and the expected response to it, and as the name suggests, it's the consumer that initially proposes this interaction. In return, the provider verifies this interaction by actually running its own code with the request that is sent, and the result of this verification step determines whether the consumer is good to deploy. The process is designed to facilitate a tighter communication loop between the consumer and provider and to explicitly describe how the consumer interacts with the provider.

The particular CDCT framework that we are experimenting with is [Pact](https://docs.pact.io/). In addition to the process outlined above, it also offers a broker to handle the communication of publishing a contract (or pact, in the case of this framework) and publishing the results of the verification.
