# Facility Locator Engineering README 

The Facility Locator is a vets-website front-end product in VA.gov, that sits on a vets-api backend. The Locator uses Mapbox via API key for mapping functionality.

The vets-api implementation is integrated with the Lighthouse Facilities API, and a growing list of other data sources.

To run the Facility Locator locally, you can run the front-end only, or you will need to run vets-api locally to modify the API itself. 

Technical documentation is broken up, then, into 3 sections: 
1. Working with the Facility Locator
   * Vets-api / backend
    * Front-end
2. Data sources / API integrations
3. Supporting the Facility Locator
    * [Incident response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/README.md#incident-response)
    * [Facility Locator technical diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/README.md#technical-diagrams)




# 1. Working with the Facility Locator


## Vets-api / backend: Configuring your environment

* [Sandbox](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/fwdproxy-vagov-sandbox.yml)
* [Production](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/fwdproxy-vagov-prod.yml)

### Platform Developer docs
- [Platform Developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/) - Platform documentation about infrastructure, integrations, testing, monitoring, and releasing as well as engineering processes, best practices, and standards.
- [Vets-website feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide)

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

### Troubleshooting 


## FE: Configuring your environment 


### Troubleshooting



# Data sources & API integrations
`[/engineering/data-and-api-integrations](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering/data-and-api-integrations)` contains information about each data integration in the Facility Locator. 

Each subfolder contains an implementation .md file with details specific to that integration. 

## API Endpoint descriptions 
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering/data-and-api-integrations#api-data

# Supporting the Facility Locator

## Incident response  
Last updated: 12/28/2023

### Points of contact for system and dependent VA backends
   - Lighthouse 
     - #api-facilities in DSVA Slack
     - Dawn Pruitt, VA PO
     - Adam Stilton, Engineering lead (adam.stilton@libertyits.com)
   - Platform team / vets-api: #vfs-platform-support in DSVA slack  
   - PPMS (upstream system) 
     - incidents must be reported via [YourIT Service Portal](https://yourit.va.gov/va?id=va_report_incident)
     - [Instructions for creating a Service Now issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/Service%20Now%20instructions.pdf)
 

### Monitoring
Links to dashboards that help identify and debug application issues

[monitoring.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/monitoring.md)


## Technical diagrams 
![Architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/facilities%20technical%20diagram%2001.12.22.PNG)



