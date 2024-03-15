# SSOe Load Testing Waiver

We are requesting a waiver for load testing before launch of SSOe integration.

From vets-api infrastructure perspective, the SSOe integration is effectively a 1:1 swap of traffic previously received from ID.me (in the form of SAML assertions to the v0 sessions callback endpoint) for traffic received from SSOe (SAML assertions to the v1 sessions callback endpoint). There is no reason to expect that processing and parsing these SAML assertions will incur any additional load in vets-api.

From the overall systems perspective, we need some level of confidence that SSOe can process the additional login traffic that it will receive from VA.gov. We have provided our average and peak daily and hourly traffic figures to their team in the course of our integration work and they have not expressed any concerns. For due diligence's sake we will confirm what their overall traffic figures look like and ensure that the new traffic from VA.gov is not a major increase in the load they routinely handle.

As further mitigation, we will roll out the SSOe integration in phases using feature flipper, and will plan to monitor our own systems and be in close communication with the IAM operations team as we gradually ramp up the percentage of users using SSOe.
