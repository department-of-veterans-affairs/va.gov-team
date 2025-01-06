# Problem: API Versioning

The API versioning schema should be related to the endpoints and functional not the release cycle

## Risks

Updating endpoints without updated functionality can cause unneeded overhead and maintenance for both client and API teams

## Proposed Spike

Iterating on our url versioning strategy to align better with

- best practices
- Features (that break/change functionality) not release cycles

## Additional Notes

- We can hold at a current/upcoming release until we work through this

## Risks this aims to address

- Too many endpoints being deployed without any meaningful change
- Leads to confusion on whats the latest spec which endpoint to use and how long will that endpoint be availible

## Questions to answer

- How can we iterate on our API version strategy to coincide with features, not releases
- How do we determine when to update the URL version?
- Do we have a deprecation strategy in place
- Is this documented in a public place?
- What technical updates do we need to do to make this happen?

## Acceptance Criteria

- [ ] Questions are answered
- [ ] The engineering leadership (OCTO + Team leads) agree on a path forward
- [ ] Any tickets are created for follow on work
