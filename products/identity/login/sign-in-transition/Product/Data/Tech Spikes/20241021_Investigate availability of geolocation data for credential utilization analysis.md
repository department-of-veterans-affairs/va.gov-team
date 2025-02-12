# Spike: Investigate availability of geolocation data for credential utilization analysis
**Completed:** October 21, 2024  
**Contributor:** Steve Dickson  
**Jira Ticket:** [SIT-123](https://jira.devops.va.gov/browse/SIT-123)

## Situation
We sought to investigate whether geolocation data could be captured and used alongside credential type data to analyze credential utilization patterns and identify sign-up hotspots. The investigation focused on determining if geolocation data is currently captured, whether it is accessible via systems, and if there are any privacy concerns related to its use.

## Findings
There are various options for retrieving geolocation. In general, you can retrieve a location associated with an authentication event, or you can get location (and other demographics) associated with the user from an identity or profile datastore.

### **Authentication Events**  
Datadog captures a location associated with each authentication. Depending on the device and access to the internet, there are varying degrees of accuracy of this data.

The location is available as attributes in the Datadog authentication event logs. Fields include: city, subdivision (e.g. state), country, continent, latitude, longitude.

Some configuration would be required in Datadog to start filtering events capturing this information in a way that it can be shared with Domo (e.g. logs can't be shared with Domo, only metrics in aggregate). 

### **Identity and Profile Stores**
MPI and VA Notify also have address and other user demographic information. For example, an ETL process could be implemented to import, transform, and report within Domo.
