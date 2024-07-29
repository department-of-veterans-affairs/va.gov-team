# Facility Locator Engineering README 
TOC:
* [High level](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/README.md#)
* [Facilities-api integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/README.md#)
* [Working with the Facility Locator](#working-with-the-facility-locator)
* Supporting the Facility Locator
    * [URL handling]()
    * [Incident response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/README.md#incident-response)

## **High level:**
The Facility Locator is a React application built in vets-website: [applications/facility-locator](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/facility-locator)

The Facility Locator retrieves data from a few upstream data-sources using the `facilities-api` in vets-api: 
* [modules/facilities_api](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/facilities_api) in vets-api
* [Facilities-api documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api) <br/>

The Locator also uses Mapbox via API key for mapping functionality.


## Facilities-API integration 
All Facility Locator data is delivered via facilities-api.

* [**facilities-api data sources**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api#data-sources) describes all the data sources available to facilities-api
* [**facilities-api Lighthouse API integration**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/README.md#lighthouse-integration) includes information on Lighthouse API endpoint mapping, API consumers / keys, rate limits, and the process to [request a rate limit increase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/README.md#request-api-limit-increase)


### OLD INFO that needs to be verified
Previously, we talked about facilities-api and facility locator interchangeably. Now facilities-api is considered its own product. Some of the old docs are likely out of date, but some information may be valuable. Docs we need to sort out: 

* Data sources & API integrations: [/engineering/data-and-api-integrations](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering/data-and-api-integrations)` contains information about each data integration in the Facility Locator, from ~2022. Is any of this accurate / true in the modern facilities-api? If so: move it to https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api. Each subfolder contains an implementation .md file with details specific to that integration. 

* API Endpoint descriptions: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering/data-and-api-integrations#api-data


# Working with the Facility Locator

* Frontend: To run the Facility Locator locally, you can run the front-end only in vets-website. 
* Backend: To modify the backend, you must run facilities-api from vets-api locally. Follow facilities-api docs: [Working with the facilities-api](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api#working-with-the-facilities-api)

**Platform Developer docs**
- [Platform Developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/) - Platform documentation about infrastructure, integrations, testing, monitoring, and releasing as well as engineering processes, best practices, and standards.
- [Vets-website feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide)



### Interactions with dependent VA backends
TODO: what is this? Is this useful? IF so, add narrative. If not, remove.

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


## Supporting the Facility Locator

### Facility URL handling
In the Facility locator, search results will return Facilities or providers. Facility titles will be linked in search results. Where those facility titles link to is dependent on the state of the Facility modernization / publishing. 

In short: 
* If a facility has a modernized, published Drupal page: The linked title will point to the modernized page.
* If a facility does NOT have a modernized, published Drupal page: the linked title will point to a Facility Locator detail page.

Lighthouse owns a file called the "websites CSV." That file is considered the definitive truth for where any given Facility's content lives, as single source of truth. However: in some cases, a non-modernized site will list the previous TeamSite page as its live page. In these cases, facility locator has code in vets-website that will, instead of pointing out to the TeamSite page listed in websites CSV, will send users to a Facility Locator detail page for that facility's content. 

Meaning: the Facility Locator will never point out to TeamSites. Always only either a modernized, or a facility locator detail, page.

### Incident response  
Last updated: 12/28/2023

#### Points of contact for system and dependent VA backends
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


