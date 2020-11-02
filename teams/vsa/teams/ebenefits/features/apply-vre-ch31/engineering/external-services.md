Moved to sensitive repo
<!-- moved to sensitive repo 
# VRE API Integration

The Veteran Readiness and Employment line of business has a form that communicates to new Veterans their options for services upon leaving the military and working outside the service.  This is primarily transacted through the CH31 form 28-1900.  Previously, this form was submitted by the Veteran and taken to Central Mail where it would presumably be routed to the correct regional office.  Currently, there is an attempt to send the structured data from the form and submit it through a an API that is managaed directly with the line of buisiness within the VA network.

## Overview and Terminology

more detailed description

## Integration Endpoints

**Staging**
External urls:
Internal VA urls:

**Dev**
External urls: 
Internal VA urls: (`in private slack`)

**Prod**
External urls: 
Internal VA urls: 


## Required Configuration

The primary configuration requirement for this integration is for forward proxies that are in place to allow access to AWS, also allow proxy access to the VRE API.

### Assumptions
- The vets-api codebase needs to be on the va network to work with the VRE API/endpoint(s)
  - This shouldn't be a problem in staging/prod
  - We need an ssh/proxy (like we have for BGS to dev/test)
- We have credentials (and urls) we need to get to someone (likely in DevOps) so they can add them to the secrets manager
  - Credentials for development
  - Credentials for Staging
  - Credentials for production

## Known External Dependencies

other dependencies this service relies on

## Troubleshooting

troubleshooting steps to go through

## Outage Status and Maintenance Windows

TBD

## Service Level Agreement

TBD

## Escalation Procedure

TBD

## Contacts
| Role          | Name               | E-mail                     |
|---------------|--------------------|----------------------------|
| POC (VRE)       | sample            | sample@sample.com           |
| POC (EBN)       | sample            | sample@sample.com           |
-->
