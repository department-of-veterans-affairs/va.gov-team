# March 2022: Facility Locator - Lighthouse Integration proposal

## Problem Statement
The current integration between the Facility Locator and Lighthouse does not allow Lighthouse to identify the source of traffic, is not secure, and is not the most efficient method.    

## Current method: Backend talks to Lighthouse 

Our publicly available endpoint accesses Lighthouse via an API key which is used by multiple applications.  

As a publicly available endpoint, it is subject to DDos attacks. 

Because Lighthouse has limited visibility into the source of traffic. everything looks like it originates from VetsAPI. In the event of a DDos attack, they would not be able to rate limit by IP address and would have to throttle all traffic, even those which are legit. This could negatively impact the Veteran experience. 

Performance is impacted by the extra time added to each request for serialization and parsing 

Maintaining feature parity requires parsing  

Disadvantages for other applications who tag in on our API: they are at risk of breaking changes and they lack access to data which could be useful for their purposes but which we find irrelevant and choose not to pass  

## Facilities team option: API key in Front end 

API key would be exposed but publicly accessible data anyway 

Would need to cycle API key but this is a standard already 

Other integrations work this way, such as Mapbox and GA
- Mapbox has an approach for cycling API keys  

Any other applications would need to create and maintain their own connections, rather than tagging in on our API  

## Lighthouse option: No API key required  

No advantage of using API key for public data 

Lighthouse would not know which application was source of query - which isn’t guaranteed even with key 

 
