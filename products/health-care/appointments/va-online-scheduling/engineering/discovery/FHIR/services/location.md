# Location Service

* [APIs Covered](#apis-covered)
* [Functions](#functions)
* [Feature Flag](#feature-flag)

<a name="apis-covered"></a>
## APIs Covered

- VAR
  - `/vaos/v0/systems/${systemId}/direct_scheduling_facilities?type_of_care_id=${typeOfCareId}&parent_code=${parentId}`
- VSP
  - `/Location`
- Other (Facilities API)
  - `/facilities/va/vha_${facilityId}`
  - `/facilities/va?ids=${idList}`

<a name="functions"></a>
## Functions

<dl>
<dt><a href="#getSupportedLocationsByTypeOfCare">getSupportedLocationsByTypeOfCare(locationsParams)</a> ⇒ <code>Object</code></dt>
<dd><p>Fetch facility information for the facilities in the given site, based on type of care</p>
</dd>
<dt><a href="#getLocations">getLocations(locationsParams)</a> ⇒ <code>Object</code></dt>
<dd><p>Fetch list of facilities</p>
</dd>
<dt><a href="#getLocation">getLocation(locationsParams)</a> ⇒ <code>Object</code></dt>
<dd><p>Fetch facility information for the given site</p>
</dd>
<dt><a href="#getParentOfLocation">getParentOfLocation(organizations, location)</a> ⇒ <code>Object</code></dt>
<dd><p>Get the parent organization of a given location</p>
</dd>
<dt><a href="#getFacilityIdFromLocation">getFacilityIdFromLocation(location)</a> ⇒ <code>String</code></dt>
<dd><p>Pulls the VistA id from an Location resource</p>
</dd>
</dl>

<a name="getSupportedLocationsByTypeOfCare"></a>

### getSupportedLocationsByTypeOfCare(locationsParams) ⇒ <code>Object</code>
Fetch facility information for the facilities in the given site, based on type of care

  
**Returns**: <code>Object</code> - A FHIR searchset of Location resources  

| Param | Type | Description |
| --- | --- | --- |
| locationsParams | <code>Object</code> | Parameters needed for fetching locations |
| locationParams.rootOrgId | <code>Array</code> | An id for the organization of the VistA site to pull child facilities for |
| locationParams.parentId | <code>Array</code> | An id for the parent organization of the facilities being pulled |
| locationParams.typeOfCareId | <code>Array</code> | An id for the type of care to check for the chosen organization |

<a name="getLocations"></a>

### getLocations(locationsParams) ⇒ <code>Object</code>
Fetch list of facilities

  
**Returns**: <code>Object</code> - A FHIR searchset of Location resources  

| Param | Type | Description |
| --- | --- | --- |
| locationsParams | <code>Object</code> | Parameters needed for fetching locations |
| locationParams.facilityIds | <code>Array</code> | A list of va facility ids to fetch |

<a name="getLocation"></a>

### getLocation(locationsParams) ⇒ <code>Object</code>
Fetch facility information for the given site

  
**Returns**: <code>Object</code> - A FHIR Location resource  

| Param | Type | Description |
| --- | --- | --- |
| locationsParams | <code>Object</code> | Parameters needed for fetching locations |
| locationParams.facilityId | <code>Array</code> | An id for the facility to fetch info for |

<a name="getParentOfLocation"></a>

### getParentOfLocation(organizations, location) ⇒ <code>Object</code>
Get the parent organization of a given location

  
**Returns**: <code>Object</code> - The parent organization  

| Param | Type | Description |
| --- | --- | --- |
| organizations | <code>Arrray</code> | The organizations to search through |
| location | <code>Object</code> | The location resource to find the parent of |

<a name="getFacilityIdFromLocation"></a>

### getFacilityIdFromLocation(location) ⇒ <code>String</code>
Pulls the VistA id from an Location resource

  
**Returns**: <code>String</code> - Three digit or 5 digit VistA id  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | The location to get an id for |

<a name="feature-flag"></a>
## Feature Flag
