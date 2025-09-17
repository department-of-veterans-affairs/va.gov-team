# Test User Data

This document provides a snapshot in time of how certain test user information can be requested to be added to a test user account in staging. Some of the sections below contain example values to guide in understanding their reference. The values shown are not guaranteed or exhaustive Dev and localhost operate slightly differently and will follow a different process.

> [!NOTE]   
> As of the writing of this document there is nothing that prevents someone from using a test user and modifying the test data associated with it, either on VA.gov or downstream on other services. This includes the resetting of passwords on idme even without access to the original test email.

## MPI

### Contact/Process:
* Details on how to make user data requests for lower environments (DEV, iDEV, SQA/Stage1A, PreProd) can be found [here](https://dvagov.sharepoint.com/sites/oitiam/SitePages/VA-MPI-Special-Data-Requests.aspx).
* Requestor completes the [request form](https://dvagov.sharepoint.com/sites/oitiam/Pages/VAMPI/IAM%20Data%20Request%20Fillable%20Form.docx) and submits the form to IAMIntegrationProjectManagers@va.gov  
* The supporting iPM will review the request form and work with the requestor for completeness, if necessary, before the iPM forwards the request to the appropriate IAM POCs for processing.  
* The appointed IAM resource will provide the requested data.

### User Values

* "icn"  
* "birls\_id"  
* "edipi"  
* "sec\_id"  
* "logingov\_uuid"  
* "idme\_uuid"  
* "id\_theft\_flag"

## VA Profile

### Contact:

* Catherine Woodhouse (contractor)  
* Process link:

### User Values

* "email"  
* "first\_name"  
* "middle\_name"  
* "last\_name"  
* "preferred\_name"  
* "birth\_date"  
* "gender"  
* "zip"  
* "last\_signed\_in"

## User\_account

### Contact:

* Trevor Bosaw (Contractor), Tom Black, Samara Strauss  
* Process link:

### User Values

* "id": "975d23bc-7704-4324-afe3-d7c7fadc3e77"

## Vets-API Sign in

### Contact:

* Trevor Bosaw (Contractor), Tom Black, Samara Strauss  
* Process link:

### User Values

* "Loa"  
  * "current": 3,  
  * "highest": 3  
* "multifactor": true,  
* "verified": true,  
* "sign\_in": {  
  *   "service\_name": "idme",  
  *   "client\_id": "vaweb",  
  *   "auth\_broker": "sis"  
  * "authn\_context": "http://idmanagement.gov/ns/assurance/loa/3",  
  * "initial\_sign\_in": "2022-01-04T14:33:28.789Z"  
* "session": {  
  * "auth\_broker": "sis",  
  * "ssoe": false,

## Facilities

### Contact:

* unknown  
* Process link:

### User Values

* "facility\_id": "636",  
  * "is\_cerner": false  
* “facility\_id": "459",  
  * "is\_cerner": false  
* "facility\_id": "687",  
  * "is\_cerner": true

## Veteran\_status

### Contact:

* Lighthouse, nameTBD  
* Process link:

### User Values

* "status": "OK",  
* "is\_veteran": false,  
* "served\_in\_military": false

## In\_progress\_forms

### Contact:

* unknown  
* Process link:

### User Values

*   "form": "1010ez",  
* "metadata": {  
  * "version": 8,  
  * "return\_url": "/review-and-submit",  
  * "saved\_at": 1755203619550,  
  * "submission": {  
    *   "status": "applicationSubmitted",  
    *   "error\_message": false,  
    *   "id": false,  
    *   "timestamp": "2025-08-14T20:33:38.667Z",  
    *   "has\_attempted\_submit": true,  
    * "response": {  
      * "id": "138338",  
      * "type": "health\_care\_applications",  
      * "attributes": {  
        *   "state": "pending",  
        *   "form\_submission\_id": null,  
        *   "timestamp": null  
  * "createdAt": 1755203619,  
  * "expiresAt": 1760387619,  
  * "lastUpdated": 1755203619,  
  * "inProgressFormId": 48962  
  * "lastUpdated": 1755203619

},  
{  
  "form": "21-0538",  
  "metadata": {  
"version": 0,  
"return\_url": "/veteran-contact-information",  
"saved\_at": 1757605026297,  
"submission": {  
  "status": false,  
  "error\_message": false,  
  "id": false,  
  "timestamp": false,  
  "has\_attempted\_submit": false  
},  
"createdAt": 1757605026,  
"expiresAt": 1762789026,  
"lastUpdated": 1757605026,  
"inProgressFormId": 50037  
  },  
  "lastUpdated": 1757605026  
},  
{  
  "form": "21-526EZ",  
  "metadata": {  
"version": 11,  
"return\_url": "/supporting-evidence/additional-evidence",  
"saved\_at": 1750084055212,  
"submission": {  
  "status": false,  
  "error\_message": false,  
  "id": false,  
  "timestamp": 1750084055198,  
  "has\_attempted\_submit": true  
},  
"sync\_modern0781\_flow": false,  
"cfiMetric": {  
  "initLogged": true,  
  "cfiLogged": true  
},  
"createdAt": 1706628846,  
"expiresAt": 1775674161,  
"lastUpdated": 1750084055,  
"inProgressFormId": 29472  
  },  
  "lastUpdated": 1750084055  
},  
{  
  "form": "686C-674-V2",  
  "metadata": {  
"version": 1,  
"return\_url": "/review-and-submit",  
"saved\_at": 1751555300570,  
"submission": {  
  "status": "applicationSubmitted",  
  "error\_message": false,  
  "id": false,  
  "timestamp": "2025-07-03T15:07:12.001Z",  
  "has\_attempted\_submit": true,  
  "response": {  
"id": "75176",  
"type": "saved\_claim",  
"attributes": {  
  "submitted\_at": "2025-07-03T15:06:58.428Z",  
  "regional\_office": \[\],  
  "confirmation\_number": "45286e53-0680-41fb-a17f-a1b0a223d2ed",  
  "guid": "45286e53-0680-41fb-a17f-a1b0a223d2ed",  
  "form": "686C-674-V2"  
}  
  }  
},  
"createdAt": 1747341623,  
"expiresAt": 1783091300,  
"lastUpdated": 1751555300,  
"inProgressFormId": 45405  
  },  
  "lastUpdated": 1751555300  
}  
  \],

## Prefills\_available

### Contact:

* unknown  
* Process link:

### User Values

* "40-10007",  
* "0873",  
* "21-22",  
* "21-22A",  
* "26-4555",  
* "26-1880",  
* "20-0995",  
* "20-0996",  
* "10182",  
* "686C-674",  
* "686C-674-V2",  
* "21-0538",  
* "DISPUTE-DEBT",  
* "22-1990",  
* "22-1990N",  
* "22-1990E",  
* "22-1990EMEB",  
* "22-1995",  
* "22-5490",  
* "22-5490E",  
* "22-5495",  
* "22-0993",  
* "22-0994",  
* "FEEDBACK-TOOL",  
* "22-10203",  
* "22-1990S",  
* "22-1990EZ",  
* "22-10297",  
* "21-526EZ",  
* "FORM-MOCK-AE-DESIGN-PATTERNS",  
* "21P-4185-UPLOAD",  
* "21-651-UPLOAD",  
* "21-0304-UPLOAD",  
* "21-8960-UPLOAD",  
* "21P-4706c-UPLOAD",  
* "21-4140-UPLOAD",  
* "21P-4718a-UPLOAD",  
* "21-4193-UPLOAD",  
* "21-0788-UPLOAD",  
* "21-8951-2-UPLOAD",  
* "21-674b-UPLOAD",  
* "21-2680-UPLOAD",  
* "21-0779-UPLOAD",  
* "21-4192-UPLOAD",  
* "21-509-UPLOAD",  
* "21-8940-UPLOAD",  
* "21P-0516-1-UPLOAD",  
* "21P-0517-1-UPLOAD",  
* "21P-0518-1-UPLOAD",  
* "21P-0519C-1-UPLOAD",  
* "21P-0519S-1-UPLOAD",  
* "21P-530a-UPLOAD",  
* "21P-8049-UPLOAD",  
* "5655",  
* "1010ez",  
* "10-10EZR",  
* "21-0966",  
* "10-7959C",  
* "MDOT",  
* "21P-0969",  
* "21P-530EZ",  
* "21P-527EZ",  
* "28-8832",  
* "28-1900",  
* "28-1900-V2"

## Vet360\_contact\_information

### Contact:

* unknown  
* Process link:

### User Values

"vet360\_id": "1134008",  
"va\_profile\_id": "1134008",  
"email": {  
  "created\_at": "2025-04-29T17:09:13.000+00:00",  
  "email\_address": "testreallyreallyreallyreallyreallyreallyreallyreally@gmail.com",  
  "effective\_end\_date": null,  
  "effective\_start\_date": "2025-07-15T14:04:04.000+00:00",  
  "id": 357220,  
  "source\_date": "2025-07-15T14:04:04.000+00:00",  
  "source\_system\_user": null,  
  "transaction\_id": "f73d36ce-5f15-4e0c-b5a6-89d577144c84",  
  "updated\_at": "2025-07-15T14:04:05.000+00:00",  
  "vet360\_id": "1134008",  
  "va\_profile\_id": "1134008"  
},  
"residential\_address": {  
  "bad\_address": false,  
  "address\_line1": "9 E 161st St",  
  "address\_line2": null,  
  "address\_line3": null,  
  "address\_pou": "RESIDENCE",  
  "address\_type": "DOMESTIC",  
  "city": "Bronx",  
  "country\_name": "United States",  
  "country\_code\_iso2": "US",  
  "country\_code\_iso3": "USA",  
  "country\_code\_fips": null,  
  "county\_code": "36005",  
  "county\_name": "Bronx County",  
  "created\_at": "2022-11-03T00:02:51.000+00:00",  
  "effective\_end\_date": null,  
  "effective\_start\_date": "2022-11-03T00:02:47.000+00:00",  
  "geocode\_date": "2022-11-03T00:02:51.000+00:00",  
  "geocode\_precision": 31,  
  "id": 363018,  
  "international\_postal\_code": null,  
  "latitude": 40.8291,  
  "longitude": \-73.928,  
  "province": null,  
  "source\_date": "2022-11-03T00:02:47.000+00:00",  
  "source\_system\_user": null,  
  "state\_code": "NY",  
  "transaction\_id": "2e2d82c7-92bf-434d-a7b1-41fdfa814080",  
  "updated\_at": "2022-11-03T00:02:51.000+00:00",  
  "override\_validation\_key": null,  
  "validation\_key": null,  
  "vet360\_id": "1134008",  
  "va\_profile\_id": "1134008",  
  "zip\_code": "10451",  
  "zip\_code\_suffix": "2100"  
},  
"mailing\_address": {  
  "bad\_address": null,  
  "address\_line1": "7008 Gillings Rd",  
  "address\_line2": null,  
  "address\_line3": null,  
  "address\_pou": "CORRESPONDENCE",  
  "address\_type": "DOMESTIC",  
  "city": "Springfield",  
  "country\_name": "United States",  
  "country\_code\_iso2": "US",  
  "country\_code\_iso3": "USA",  
  "country\_code\_fips": null,  
  "county\_code": "51059",  
  "county\_name": "Fairfax County",  
  "created\_at": "2020-10-19T20:20:23.000+00:00",  
  "effective\_end\_date": null,  
  "effective\_start\_date": "2025-05-15T20:31:25.000+00:00",  
  "geocode\_date": "2025-05-15T20:32:35.000+00:00",  
  "geocode\_precision": 32,  
  "id": 205301,  
  "international\_postal\_code": null,  
  "latitude": 38.7631,  
  "longitude": \-77.2388,  
  "province": null,  
  "source\_date": "2025-05-15T20:31:25.000+00:00",  
  "source\_system\_user": null,  
  "state\_code": "VA",  
  "transaction\_id": "d9f0b819-1a8b-48e9-9256-3980d84701e6",  
  "updated\_at": "2025-05-15T20:32:35.000+00:00",  
  "override\_validation\_key": null,  
  "validation\_key": null,  
  "vet360\_id": "1134008",  
  "va\_profile\_id": "1134008",  
  "zip\_code": "22152",  
  "zip\_code\_suffix": "3235"  
},  
"mobile\_phone": {  
  "area\_code": "905",  
  "country\_code": "1",  
  "created\_at": "2019-08-23T00:00:08.000+00:00",  
  "extension": null,  
  "effective\_end\_date": null,  
  "effective\_start\_date": "2022-12-08T15:50:31.000+00:00",  
  "id": 68699,  
  "is\_international": false,  
  "is\_textable": null,  
  "is\_text\_permitted": null,  
  "is\_tty": null,  
  "is\_voicemailable": null,  
  "phone\_number": "5554897",  
  "phone\_type": "MOBILE",  
  "source\_date": "2022-12-08T15:50:31.000+00:00",  
  "source\_system\_user": null,  
  "transaction\_id": "6e4bfe42-4799-43be-8917-03ba5f63045c",  
  "updated\_at": "2022-12-08T15:51:42.000+00:00",  
  "vet360\_id": "1134008",  
  "va\_profile\_id": "1134008"  
},  
"home\_phone": {  
  "area\_code": "313",  
  "country\_code": "1",  
  "created\_at": "2019-03-25T18:09:05.000+00:00",  
  "extension": null,  
  "effective\_end\_date": null,  
  "effective\_start\_date": "2022-12-08T15:50:31.000+00:00",  
  "id": 57679,  
  "is\_international": false,  
  "is\_textable": null,  
  "is\_text\_permitted": null,  
  "is\_tty": null,  
  "is\_voicemailable": null,  
  "phone\_number": "2222223",  
  "phone\_type": "HOME",  
  "source\_date": "2022-12-08T15:50:31.000+00:00",  
  "source\_system\_user": null,  
  "transaction\_id": "6e4bfe42-4799-43be-8917-03ba5f63045c",  
  "updated\_at": "2022-12-08T15:51:42.000+00:00",  
  "vet360\_id": "1134008",  
  "va\_profile\_id": "1134008"  
},  
"work\_phone": {  
  "area\_code": "703",  
  "country\_code": "1",  
  "created\_at": "2024-01-03T14:53:34.000+00:00",  
  "extension": null,  
  "effective\_end\_date": null,  
  "effective\_start\_date": "2024-01-03T14:52:19.000+00:00",  
  "id": 404513,  
  "is\_international": false,  
  "is\_textable": null,  
  "is\_text\_permitted": null,  
  "is\_tty": null,  
  "is\_voicemailable": null,  
  "phone\_number": "6909355",  
  "phone\_type": "WORK",  
  "source\_date": "2024-01-03T14:52:19.000+00:00",  
  "source\_system\_user": null,  
  "transaction\_id": "6b5e6990-8a7b-4877-b172-fd1ba1dd7e2f",  
  "updated\_at": "2024-01-03T14:53:34.000+00:00",  
  "vet360\_id": "1134008",  
  "va\_profile\_id": "1134008"  
},  
"temporary\_phone": null,  
"fax\_number": null  
  },

## MHV Data
### Contact/Process:
- An issue can be creating following the example ticket [here](https://github.com/department-of-veterans-affairs/mhv-platform/issues/102). Add the description by creating a new issue and add some details.

### User Values
* "va\_patient": true,  
* "active\_mhv\_ids": \[  
  * "23002356",  
  * "28123035"  

## Unknown source

* "is\_cerner\_patient": false,  
* "cerner\_id": null,  
* "cerner\_facility\_ids": \[  
*   "687"
