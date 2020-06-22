# HealthcareService Service

* [APIs Covered](#apis-covered)
* [Functions](#functions)
* [Feature Flag](#feature-flag)

<a name="apis-covered"></a>
## APIs Covered

- VAR
  - `/vaos/v0/facilities/{facilityId}/clinics`
- VSP
  - `/HealthcareService`

<a name="functions"></a>

## Functions

<dl>
<dt><a href="#transformAvailableClinic">transformAvailableClinic(facilityId, clinic)</a> ⇒ <code>Object</code></dt>
<dd><p>Transforms
/vaos/v0/facilities/{facilityId}/clinics
to
/HealthcareService</p>
</dd>
<dt><a href="#transformAvailableClinics">transformAvailableClinics(facilityId, clinics)</a> ⇒ <code>Array</code></dt>
<dd><p>Transforms
/vaos/v0/facilities/{facilityId}/clinics
to
/HealthcareService</p>
</dd>
<dt><a href="#findCharacteristic">findCharacteristic(clinic, characteristic)</a> ⇒ <code>String</code></dt>
<dd><p>Method to find a particular characteristic of a clinic.</p>
</dd>
</dl>

<a name="transformAvailableClinic"></a>

## transformAvailableClinic(facilityId, clinic) ⇒ <code>Object</code>
Transforms
/vaos/v0/facilities/{facilityId}/clinics
to
/HealthcareService

**Kind**: global function  
**Returns**: <code>Object</code> - A FHIR HealthcareService object  

| Param | Type | Description |
| --- | --- | --- |
| facilityId | <code>String</code> |  |
| clinic | <code>Object</code> | Clinic object to transform to HealthcareService object |

<a name="transformAvailableClinics"></a>

## transformAvailableClinics(facilityId, clinics) ⇒ <code>Array</code>
Transforms
/vaos/v0/facilities/{facilityId}/clinics
to
/HealthcareService

**Kind**: global function  
**Returns**: <code>Array</code> - An array of FHIR HealthcareService objects  

| Param | Type | Description |
| --- | --- | --- |
| facilityId | <code>String</code> |  |
| clinics | <code>Array</code> | Array of clinic objects to transform to HealthcareService objects |

<a name="findCharacteristic"></a>

## findCharacteristic(clinic, characteristic) ⇒ <code>String</code>
Method to find a particular characteristic of a clinic.

**Kind**: global function  
**Returns**: <code>String</code> - The display name of the characteristic search for or an empty string.  

| Param | Type | Description |
| --- | --- | --- |
| clinic | <code>Object</code> |  |
| characteristic | <code>String</code> | The characteristic to search for. |

