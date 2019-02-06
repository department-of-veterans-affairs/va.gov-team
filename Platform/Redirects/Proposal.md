# Redirects Strategy Suggestion

- Owner: Robbie Holmes
- Date: 2/1/19

## Current State

- The state of redirects currently is a bit confusing, there are three distinct types of redirects that are in play in the vag.gov ecosytem that we will explain what they are and why they exist.  This current set of solutions is in place because the tech teams were tasked with solving redirects and they were successful, but there was never a holistic view and solutioning applied to this problem.

### Network infrastructure level redirects

These are straight forward, there is a configuration file that is written out with all the redirects required at the reverse proxy level of our network infrastructure.  Overall the redirect is done before it reaches application servers, and it is rerouted within the va.gov routed space, and has the correct status codes associated with them (301 - Moved Permanently or 302 - Temporarily Moved) so no negative impact on SEO.

### In Page (HTML) VA.gov Redirects
There are redirects that are handled in the page, often known as meta refresh redirects, that can be added to a specific path going to a new path.  This is not the most effective type of redirect because there is no HTTP status code associated with this type of redirect (301 - Moved Permanently, 302 - Found, 307 - Temporary Redirect) to indicate to search engines and improve SEO. These are handled in the va.gov routed space so can be handled in the same way as the previously described network infrastructure level redirects.

### In header Redirects (benefits.va.gov)
This is similiar to the in page va.gov redirects but they are on domains that aren't routed through the reverse proxy and can be converted to in network infrastructure level redirects.  So currently the vets-website build process creates files that are included on these pages that do the same kind of in page redirect described above as the in page va.gov redirects.  We will need to continue to support this type of redirect until these domains are routed through the network infrastructure that the platform team supports.

## Proposed Solution

### Short Term

There is a need for a solution that has support for two types of redirects until benefits.va.gov style redirects can go away. 
Overall the general proposal is to migrate all redirects into the CMS so that we can take advantage of the solution for validating and verifying cyclical redirects, duplicate redirects and possibly multi-hop redirects.
The build process for the reverse proxies will need to be updated to query/consume the Content API's redirect data and convert to the proper configuration files on build and deploy.  
The header redirects will also be stored in the the Content API and the current header file build process will need to request redirects data from the Content API and create the final files that are included on the non va.gov domains for redirects.
The CMS team will have to create a custom module for Drupal that will allow for a "type" of redirect so we can query for the 2 distinct types we have identified.


### Long Term
The next step of the process should be to try to move all header style redirects to the infrastructure level, but that can't de done until the domains are routed through the same infrastructure.

## Proposed Process

### Short Term
Create a Redirects Admin role in the CMS
setup an email account that is used for requesting redirects
designate someone to be have a user account in the Content API to have the newly created Redirects Admin role who can add, remove or edit redirects. (maybe can be a helpdesk person).

### Long Term
Once we know what the amount of these requests and people that will be a part of this process
Create a workflow in the Content API for the Redirects Admin role
