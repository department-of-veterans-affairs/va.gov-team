This document discusses the available options for developing MHV features on VA.gov, given the constraints of developer laptops, API reachability, etc.

# Background

## Moving Pieces and Constraints
1. The general architecture is that VA.gov frontend (vets-website, written in React) makes API requests to VA.gov backend (vets-api, written in Ruby on Rails), which then makes requests to the MHV service APIs. 
2. The VA.gov backend is a thin proxy over the upstream MHV service APIs. But, it's necessary to make things like site-wide authentication work. **For SM, the VA.gov backend code is largely already written and deployed and should not need much active development.**
3. MHV service APIs are intranet-only. 
4. MHV developers have GFEs that can access the intranet, but these are underpowered for running vets-api or vets-website locally. 
5. MHV developers have corporate-issued laptops that can run vets-api or vets-website locally (both of these code bases are open-source/public repos), but can't access the intranet. 
6. VA.gov's lower environments are continuously deployed from the master branch as follows:

VA.gov Environment | MHV environment | Frontend domain | Backend domain 
---|---|---|---
dev | intb | dev.va.gov | dev-api.va.gov
staging | sysb | staging.va.gov | staging-api.va.gov

So given the above, what's the ideal setup for MHV developers to be productive? They will _mostly_ be actively developing frontend React code, but may need to tweak vets-api behavior as well. Initial development can probably proceed against a fairly static set of test data (opening the possibility of mocking data), but we should expect the need to test/debug against a live MHV lower environment.  

# Options

### Local frontend, local API, local mocked data
* Run vets-website and vets-api locally, with vets-api configured to use mock data for upstream API requests to MHV.
* vets-api already has a robust mocking system in place.  It works best for read-only requests so could be viable for a lot of the baseline SM functionality of navigating folders and view messages.
* There's not a ton of mock data recorded already. Recording new mock data is a little bit roundabout but feasible. 
* This is probably the shortest path to getting to first frontend PR. 

### Local frontend, dev-api.va.gov
* Run vets-website locally, point it at dev-api.va.gov. Since we don't anticipate a lot of work needed in vets-api, use it as-is and focus on frontend development.
* dev-api.va.gov is configured to allow "localhost" as an origin, so we think this works as expected, but don't know how many VA.gov developers use this model actively.
* dev-api points at intb so any test users/data in that environment would be available. 
* Requires some quick validation that this approach still works, and specifically make sure sign-in works as expected.

### Local frontend, local API, tunnel to upstream (?)
* In the past, it has been possible to set up an SSH tunnel via a jumpbox or Amazon SSM. This tunnel can point at the VA.gov forward proxy which in turn points at any desired MHV lower environment. Then you configure vets-api to use the tunnel as the MHV upstream API endpoint.
* If this is still workable in network security terms, it provides a pretty seamless local development experience. But, it may have been locked down, and it's unknown if the platform would officially support this approach. 

### Review instances
* VA.gov platform has a concept of review instances, where any PR branch gets a self-contained EC2 instance containing the desired frontend and backend code branches. The instance is accessible via the SOCKS proxy, and is deployed in the staging environment so would be able to reach MHV sysb.
* These work, but don't work that well for a seamless code-test-debug cycle. You need to push changes to your PR branch, wait for them to deploy (and possibly wait for CI aka the entire test suite to pass). 
* But, they might be useful as a bridge between local development against mock data, and being able to deploy and test against the available test users/data in staging/sysb. 
* One way these are useful is a developer can shell in to them and use them as a basis for recording mock data against the staging/sysb environment. 

### Other - codespaces or interactive review instance? 
* We know of at least one developer who hacked together the ability to point a VSCode debugger at a review instance, and push new code directly to the instance without the normal review instance PR/CI/deploy cycle. It's unknown how repeatable this was, or how brittle it was to work with.
* But, we know review instances are due for some re-investment, and it's possible we can investigate formalizing this approach to make them more like a hosted development instance, possibly with a connection to Github codespaces. 
* This option is the most speculative and would not be available for several sprints at a minimum. 
