## Introduction

This document walks through the basics of the technical architecture that supports the Lighthouse Platform API and the Veteran-facing Services Platform (www.va.gov + api.va.gov). This document starts with simple conceptual descriptions and becomes increasingly detailed, allowing the reader to proceed only as far as they need to.

### Basic Concepts

At the highest level, users make requests to www.va.gov and api.va.gov.  These requests are routed to GovCloud, which can then 1. respond to the requests on its own (such as for static content) or 2. reach into the VA network to call an API to help respond to the request (such as to get a user's prescription information). 

![](images/ConceptualArchitecture.png)

In order to serve these requests, there are many pieces of infrastructure inside GovCloud. Once the request reaches GovCloud, it is first routed to a reverse proxy, which then either sends it to S3 for static content and frontend apps or to a load balancer for API content. The API instances have the ability to connect into the VA network via APIs if necessary. 

![](images/SlightlyMoreDetailedConceptualArchitecture.png)

The overall process of requests to the www.va.gov website and API flows like this:

1. A user requests a web URL from www.va.gov. After passing through the Trusted Internet Connection (TIC) maintained by the VA, the request reaches the Reverse Proxies, which direct it to the private S3 bucket for that environment to load the page.
1. Static site content (css, images, etc.) is loaded directly from a public S3 bucket by the client browser. Some content (both static content and applications) is also loaded from the EWIS managed infrastructure.
1. Requests to the API (login, forms, etc.) are routed to the API Instances by the Reverse Proxies, and make calls to backend VA services as needed to fulfill the request.

![](images/vagov-Data-Flow-Basics.png)

## Topology

This diagram contains a more detailed topology of this process. All traffic to and from the AWS environments passes through the VA network. This creates a loop architecture, in which traffic incoming from clients and outgoing from the API goes through the same VPN tunnels to the internal VA network. 

![](images/vagov-aws-topology.png)

This more detailed topology shows most of the components of the environment and how they fit together. There are three main VPCs, one for each environment: dev, staging, and prod. Additionally, there is a fourth VPC, utility, which contains monitoring and deployment infrastructure.

![](images/vagov-detailed-topology.png)

## Topology Descriptions

#### DNS
www.va.gov DNS round robins between two actual TIC endpoints Gateway East(GWE) at `152.130.96.221` and Gateway North (GWN) at `152.133.106.221` Traffic will go to whichever Gateway the user's DNS request responds with at the time of the request, balancing client traffic between them. Requests for new external DNS names should be submitted as an ESECC request by a Federal employee at https://esecc.va.gov/

#### TIC
The [Trusted Internet Connection](https://en.wikipedia.org/wiki/Trusted_Internet_Connection) (TIC) is an [OMB](https://en.wikipedia.org/wiki/Office_of_Management_and_Budget) mandate that all external connections to government systems go through. At VA, the TIC is run by the VA NSOC Gateway Operations team.  The TIC terminates all TLS connections for external DNS names (such as www.va.gov and api.va.gov) to inspect traffic. The most important element of the TIC for our purposes are the F5 load balancers which determine where traffic goes once it leaves the TIC. More detailed information on the TIC architecture and operation can be found in the [VA AWS Transit VPC](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/aws-dx-transit-spoke-architecture/architecture.md) documentation and on the [official TIC information page](https://www.dhs.gov/trusted-internet-connections).

#### Transit VPC
From the TIC, incoming traffic passes through an AWS Direct Connect connection into a Transit VPC. There are different Transit VPCs for each environment: dev, staging, and prod. The Transit VPC contains Cisco Cloud Services Routers (CSRs) which connect via VPN to the "spoke" VPCs (like ours). Our end of these tunnels are configured as Virtual Gateways (VGWs) within each VPC. More information on the Transit VPC architecture can be found in the [VA AWS Transit VPC](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/aws-dx-transit-spoke-architecture/architecture.md) documentation.

#### Reverse Proxies and API Gateways
There are two proxies currently managing access to our APIs: Reverse Proxies and API Gateways. The Reverse Proxies run OpenResty/Nginx and are the older configuration. [The API Gateways run Kong](https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/Developer%20Process/Kong/Overview.md), a more full-featured API gateway built on top of Nginx that we will be able to use to open the API to outside agencies as part of the Lighthouse project.

The reverse proxies also manage access to the legacy EWIS content for www.va.gov; details of this can be found in [EWIS Proxy Details](https://github.com/department-of-veterans-affairs/vets.gov-team/Practice%20Areas/Engineering/EWIS-proxy-details.md)

## Forward Proxies and VA Network

API requests to VA backend dependencies must be routed back to the VA network. This is done by a forward-proxy deployment running [haproxy](http://www.haproxy.org/), which acts as a load balancer for the VA backends. Additionally, there are some external dependencies which must be routed back through the TIC to reach the Internet. Many of these backends are documented in [External Service Integrations](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations)

Most VA systmes also connect to other systems (for example, My HealtheVet connects to VistA and EVSS connects to BGS and VBMS), creating a dependency tree. Much of that complexity is abstracted by API calls, but it can affect our infrastructure, especially when an upstream dependency goes down.

This diagram will constantly be outdated as systems are added, but gives the basic idea:

![](images/VAConnections.png)


## ID.me

This document didn't discuss how www.va.gov communicates with ID.me. This is already well documented, so check out the login flow from the front end perspective [here](https://github.com/department-of-veterans-affairs/www.va.gov-team/blob/master/Products/Identity/Login/reference_documents/Login/FE_login_and_logout.md) and from the API perspective [here](https://github.com/department-of-veterans-affairs/www.va.gov-team/blob/master/Products/Identity/Login/reference_documents/Auth/authentication_and_authorization.md). 
