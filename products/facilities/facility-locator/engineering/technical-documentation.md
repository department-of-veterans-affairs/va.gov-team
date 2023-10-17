# Facility Locator Technical Documentation

 
## Incident Response
last updated January 12, 2022

### Points of contact for system and dependent VA backends
   - Lighthouse 
     - Adam Stilton, Engineering lead (adam.stilton@libertyits.com)
   - VSP (DevOps)
     - Gabriel Olavarria, Chief DevOps Engineer (321-503-8489, Gabriel.OlavarriaRivera@va.gov)
     - Steven Bair, Deputy Chief DevOps Engineer (812-453-6850, Steven.Bair@va.gov)
   - PPMS (upstream system) 
     - incidents must be reported via [YourIT Service Portal](https://yourit.va.gov/va?id=va_report_incident)
     - [Instructions for creating a Service Now issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/Service%20Now%20instructions.pdf)
 

### Links to dashboards that help identify and debug application issues
#### Datadog Dashbaord
 - [Facilities Alerting Dashboard including Facility-Locator API resources](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities)
#### Grafana Dashboards
 - [VSP/Forward Proxy](http://grafana.vfs.va.gov/d/000000032/forward-proxy?orgId=1)
 - [Facility Locator(PPMS)](http://grafana.vfs.va.gov/d/000000048/facility-locator-ppms?orgId=1)

## Technical diagrams 
![Architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/facilities%20technical%20diagram%2001.12.22.PNG)

[Lighthouse API diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/Lighthouse%20arch%20diagram.png) for reference

<details>
 <summary> Previous technical diagram </summary> 
 
 ![Architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/FL%20Arch%20diagram.jpg)

 </details>
 
## Sequence diagrams 
These diagrams show the ordered flow of data and operations between systems

### PPMS 
<details>
 <summary> PPMS Provider Locator Sequence, with round trip for Provider details (Deprecated 12/2020) </summary>
  
  ![PPMS Provider Locator Sequence, with round trip for Provider details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/PPMS%20Provider%20Locator%20Sequence.png)

 </details>
 
### PPMS Provider Locator Sequence, optimized v1 query
![PPMS Provider Locator Sequence, optimized v1 query](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v1%20ppms%20provider%20locator%20sequence.png)

### PPMS and Lighthouse Mashups
- "Mash-up" searches for all urgent care locations (Community care/PPMS + VA) are performed on the front end.
- "Mash-up" searches for all emergency care locations (Community care/PPMS + VA) are performed on the front end.

### Endpoint descriptions 

**/facilities_api/v1/va** 
Used for searches in which Facility type =
- VA health
- VA benefits
- Cemeteries
- Vet Centers
- Urgent care + Service type = VA urgent care

**/facilities_api/v1/ccp/provider**
Used for searches in which Facility type =
- Community care providers (in VA’s network)

**/facilities_api/v1/ccp/specialties**
Used to populate the typeahead for searches in which Facility type =
- Community care providers (in VA’s network)

**/facilities_api/v1/ccp/pharmacy**
Used for searches in which Facility type =
- Community care pharmacies

**/facilities_api/v1/ccp/urgent_care** 
Used for searches in which Facility type =
- Urgent care + Service type = Community urgent care (in VA’s network)

### Monitors for Facility-Locator and Facilities pages
**/v1/facilities/va and /facilities_api/v1/ccp/*** 
- [Joins CCP and Facility lookup because they both use the same consumer](https://vagov.ddog-gov.com/monitors/161751)
- Warning currently set at 400 req/minute and alert at 450 req/minute
- Warnings and Alerts sent to #facilities-monitoring on DSVA slack.
**/v1/facilities/va**
- [Facility lookup 500 Errors](https://vagov.ddog-gov.com/monitors/164800)
- This determines if errors on the endpoint are above 5/minute for a warning and 15 for an alert.
- Warnings and Alerts sent to #facilities-monitoring on DSVA slack.
**/facilities_api/v1/ccp/**
- [CCP lookup 500 Errors](https://vagov.ddog-gov.com/monitors/168062)
- This determines if errors on the endpoint are above 5/minute for a warning and 15 for an alert.
- Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

**Why /v1/facilities/va and not /facilities_api/v1/va**
In Datadog, /facilities_api/v1/va yields the same data /v1/facilities/va does. The endpoint we use in the app is /v1/facilities/va and so for clarity's sake, this metric source was used.

### Interactions with dependent VA backends

**Query examples**
```
https://sandbox-api.va.gov/facilities_api/v1/va?bbox%5B%5D=-122.440689&bbox%5B%5D=-122.786758&bbox%5B%5D=45.451913&bbox%5B%5D=45.64&type=benefits
```

```
https://np.dws.ppms.va.gov/v1.0/PlaceOfServiceLocator?address=40.415217,-74.057114&maxResults=11&posCodes=17,20&radius=200
```

```
https://np.dws.ppms.va.gov/v1.0/ProviderLocator?acceptingnewpatients=0&address=40.415217,-74.057114&driveTime=10000&gender=0&maxResults=11&network=0&primarycare=0&radius=200&specialtycode1=%27213E00000X%27&specialtycode2=null&specialtycode3=null&specialtycode4=null
```

```
https://np.dws.ppms.va.gov/v1.0/ProviderLocator?address=40.415217,-74.057114&maxResults=11&radius=200&specialtycode1=213E00000X
```
