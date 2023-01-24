Mulesoft Integration (Phase 1) work occurred in 2021, with final implementation in March 2022.

Originally, va.gov vets-api was directly connected with CARMA, which is the system used to process the CG application. In March 2022, MuleSoft was introduced as a middleware to reduce CARMA failures due to timeouts. The decision to use Mulesoft was made in early 2021, there is not alot of documentation around this decision. 

In the summer of 2022, it was decided to implement both Mulesoft Queuing (Phase 2) and vets-api retry capabilities to mitigate outages, failures and timeouts from both sides. Production release successful on September 23, 2022.
