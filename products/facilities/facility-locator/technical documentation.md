# Facility Locator Technical Documentation

 
## Incident Response

### Points of contact for system and dependent VA backends
   - Lighthouse
   - Facilities
   - VSP (DevOps)
   - PPMS (upstream system)

### Links to dashboards that help identify and debug application issues

## Technical diagrams 

![Architecture diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/FL%20Arch%20diagram.jpg)

[Lighthouse API diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/Lighthouse%20arch%20diagram.png) for reference

[Sequence diagram showing the ordered flow of data and operations between systems]

### Endpoint descriptions 

**v1/facilities/va** 
Used for searches in which Facility type =
- VA health
- VA benefits
- Cemeteries
- Vet Centers
- Urgent care + Service type = VA urgent care

**v1/facilities/ccp**
Used for searches in which Facility type =
- Community care providers (in VA’s network)
- Community care pharmacies
- Urgent care + Service type = Community urgent care (in VA’s network)

**/v1/facilities/va_ccp/urgent_care** 
Used for searches in whichFacility type =
- Urgent care + Service type = Community urgent care (in VA’s network)

### Interactions with dependent VA backends

**Query examples**
```
https://sandbox-api.va.gov/services/va_facilities/v0/facilities?bbox%5B%5D=-122.440689&bbox%5B%5D=-122.786758&bbox%5B%5D=45.451913&bbox%5B%5D=45.64&type=benefits
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
