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

