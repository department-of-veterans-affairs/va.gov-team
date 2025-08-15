### Discussed in https://github.com/department-of-veterans-affairs/va.gov-team/discussions/39115

<div type='discussions-op-text'>

<sup>Originally posted by **dginther** March 24, 2022</sup>
- Start Date: 2022-03-24
- Relevant Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/39028

# Summary

We intend to separate the Lighthouse API (and give control of the associated domains *-api.va.gov and api.va.gov to Lighthouse) from the APIs hosted in the vets-api process, as well as any other internal API services that are hosted within the DSVA AWS account.

To this end, we need to determine what will route the traffic to vets-api and any other internal API services hosted in the DSVA account.

# Motivation

In order to ensure proper routing of traffic to the vets-api (and any other services, or future services) APIs, we will need _something_ to replace the functionality that is currently controlled by a combination of the revproxy and/or Kong.

In addition, if a team wanted to bring up an API that was _not_ inside of vets-api, it would be nice to be able to offer an easy path to integrating that API into the existing set of APIs without a lot of hassle.

# Possible Options

Currently, the Lighthouse team has a Kong (modified nginx) server which routes requests which are routed from the revproxy to the lighthouse APIs. Some of these requests appear to eventually make it back to the vets-api hosted services as well, we are investigating the Kong routes currently.

Once the Lighthouse team has transitioned to the Google Apigee software, they will no longer need (or want!) to maintain the Kong instances in the DSVA DVP subnets. This presents the platform with a decision to be made.

It is possible that we could just use some routing rules on an AWS ALB to send the traffic to the correct instances (and in the future, to the EKS cluster) This supposes that there is no need for manipulation of the traffic between the time it enters from the endpoint and when it reaches the internal endpoints (vets-api). It is my assumption that this will not be technically feasible and that some manipulation will need to be done.

If it is determined that the plain ALB is not a sufficient solution, we are presented with various options. All of these options initially take ingress traffic from an AWS ALB.

1. Use the revproxy we already have to route the traffic.
- This is an "Openresty" reverse proxy (based on nginx)
- We currently configure this reverse proxy with BRD, and once we move the revproxy into EKS, it will be configured by a jinja2 template init container (https://github.com/department-of-veterans-affairs/vsp-jinja2-init)
- To my knowledge, it is intended to eventually replace this Openresty server with a collection of rules in the EKS ingress controller, "Traefik"
- The configuration of the Openresty server via templates is a complicated and somewhat hard process to understand, it has a learning curve, because the templates are complicated with a lot of conditional statements.
- Makes addition of new services, especially ones not encompassed inside vets-api more difficult, and require more configuration.

2. Use the already installed EKS Ingress controller, "Traefik", along with configured middlewares to route traffic to APIs.
- We currently use the 'Community' version of Traefik as an ingress controller on the EKS clusters.
  - There are middlewares available for manipulating and mangling ingress traffic and headers
  - There is a Traefik 'Enterprise' version available (for a cost) which would enable more specific API capabilities
- Configuration is dynamic, Kubernetes yaml resources are used to control the rules and middlewares
- Not as fully featured as a purpose-built API Gateway software
- Would make integration of future services moderately easier

3. Use a purpose-built API Gateway software.
- There are a variety of API Gateway products, prefer OSS
  - Possible options include things like:
    - Tyk (or Tyk Operator)
    - Fusio
    - Envoy-based solutions
    - Kong
- Would require a new product to be spun up likely in the EKS infrastructure
- Could make future integration of new services extremely simple

4. Inherit the Kong instances from Lighthouse
- Not recommended</div>
