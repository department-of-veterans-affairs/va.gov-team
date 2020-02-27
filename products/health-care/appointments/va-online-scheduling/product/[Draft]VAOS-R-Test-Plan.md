##Scope
As part of the redesign and development, VA Online Scheduling implemented the follow test plan to assure quality and usability.

### Automated unit & end to end testing for VAOS front-end

### Automated unit and end to end testing for vets-api
### Local and staging testing of user flows - 3 flow paths
### Production testing of flows with veterans and scheduling clerks - performed X number of UAT in production
### Load testing
Though scripts were written to enable VAOS-R load testing, the VistA instances associated with the VAMF Staging environment has rules prohibiting load testing.  Additionally, because Staging is not production-like, any load testing performed there may not be indicative of success in Production.

Based on the inability to load test, we will be heavily dependent on our phased rollout plan for MVP deployment. This also means that here is a greater chance of experiencing issues during the phased roll out that will need to be addressed and may cause delays to the phased rollout schedule.  
