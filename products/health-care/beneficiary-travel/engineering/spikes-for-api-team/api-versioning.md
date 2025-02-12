# Problem: API Versioning

The API versioning schema should be related to the endpoints and functional not the release cycle

## Risks

Updating endpoints without updated functionality can cause unneeded overhead and maintenance for both client and API teams

## Proposed Spike

Iterating on our url versioning strategy to align better with

- best practices
- Features (that break/change functionality) not release cycles
-It can also introduce accidental security risks since using the latest/greatest versions of the endpoints is not automatic.

for example:

``` mermaid
flowchart  
  subgraph API  
      direction TB  
      v1 --> v2  
  end  
  subgraph releases  
    direction TB  
    v1.1 --adds endpoint--> v1  
    v1.1 --> v1.2  
    v1.2 --adds response attribute--> v1  
    v1.2 --> v1.2.1  
    v1.2.1 --patches security hole--> v1  
    v1.2.1 --> v1.3  
    v1.3 --removes endpoint--> v2
  end  
```

If clients forget to update to v1.2.1, they don't receive the security fix. If versions are whole numbers, clients will receive the security fix without addl work

## Additional Notes

- We can hold at a current/upcoming release until we work through this

## Risks this aims to address

- Too many endpoints being deployed without any meaningful change
- Leads to confusion on whats the latest spec which endpoint to use and how long will that endpoint be available
- Prevent dramatic, frenzied version cutovers by relying on graceful deprecation of older versions

## Questions to answer

- How can we iterate on our API version strategy to coincide with features, not releases
- How do we determine when to update the URL version?
- Do we have a deprecation strategy in place
- Is this documented in a public place?
- What, if any,  technical updates do we need to do to make this happen?
  - What, if any,  infrastructure changes must happen to support at least 2 live versions of the API?

## Acceptance Criteria

- [ ] Questions are answered
- [ ] The engineering leadership (OCTO + Team leads) agree on a path forward
- [ ] Any tickets are created for follow on work
