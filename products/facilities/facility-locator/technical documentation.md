# Facility Locator Technical Documentation

 
## Incident Response

### Points of contact for system and dependent VA backends
   - Lighthouse
   - Facilities
   - VSP (DevOps)
   - PPMS (upstream system)

### Links to dashboards that help identify and debug application issues

## Technical diagrams 

[Architecture diagram]

[Sequence diagram showing the ordered flow of data and operations between systems]

## Endpoint descriptions 

**v1/facilities/va** 

When Facility type =
- VA health
- VA benefits
- Cemeteries
- Vet Centers
- Urgent care + Service type = VA urgent care

**v1/facilities/ccp**

When Facility type =
- Community care providers (in VA’s network)
- Community care pharmacies
- Urgent care + Service type = Community urgent care (in VA’s network)

**/v1/facilities/va_ccp/urgent_care** 
When Facility type =
- Urgent care + Service type = Community urgent care (in VA’s network)

## Interactions with dependent VA backends

### Query examples
