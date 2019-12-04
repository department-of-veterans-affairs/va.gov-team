# VA Facilities Naming Schema
How we are using official facility names, new customer-freindly names, and new URLs across our digital product ecosystem

> Pay attention to title case vs. sentence case--it's intentional!

**Why facility short names are important:**
- They save space in product UIs (e.g., navigation, dropdowns, etc.), especially on mobile devices
- They clarify what type of facility is (e.g., "VA Pittsburgh" -- is that referring to a VAMC, RO, or cemetery?)
- They are plain-language and often map to how customers refer to the facility (e.g., "I go to the VA University Drive hospital.")

## VHA health care facilities naming schema
This example schema below is for the VA Pittsburgh Healthcare System. It represents a **VAMC facility network** (i.e., VAMC is parent facility, with health clinics as children facilities; customers get access to the entire network). It should apply to _most_ VAMC systems.

|          | Facility type            |  Official facility name                         | New facility short name         | Old website URL                                                   | New website URL                                                    | 
| -------- | ------------------------ | ----------------------------------------------- | ------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Source_ | _VAST_                   | _VAST_                                          | _Drupal_                        | _Facilities API_                                                  | _Facilities API_                                                   |
|          | Health care system       | VA Pittsburgh Healthcare System                 | VA Pittsburgh health care       | https://www.pittsburgh.va.gov/                                    | https://www.va.gov/pittsburgh-health-care/                         |
|          | VAMC                     | Pittsburgh VA Medical Center-University Drive   | University Drive campus         | https://www.pittsburgh.va.gov/locations/university-drive.asp      | https://www.va.gov/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/ |
|          | VAMC                     | H. John Heinz III Department of Veterans Affairs Medical Center | H.J. Heinz III campus        | https://www.pittsburgh.va.gov/locations/HJ-heinz.asp      | https://www.va.gov/pittsburgh-health-care/locations/h-john-heinz-iii-department-of-veterans-affairs-medical-center/ |
|          | CBOC                     | Beaver County VA Clinic                         | Beaver County clinic            | https://www.pittsburgh.va.gov/locations/beaver.asp      | https://www.va.gov/pittsburgh-health-care/locations/beaver-county-va-clinic/ |
|          | CBOC                     | Belmont County VA Clinic   | Belmont County clinic         | https://www.pittsburgh.va.gov/locations/belmont.asp      | https://www.va.gov/pittsburgh-health-care/locations/belmont-county-va-clinic/ |
|          | CBOC                     | Fayette County VA Clinic   | Fayette County clinic         | https://www.pittsburgh.va.gov/locations/fayette.asp      | https://www.va.gov/pittsburgh-health-care/locations/fayette-county-va-clinic/ |
|          | CBOC                     | Washington County VA Clinic   | Washington County clinic         | https://www.pittsburgh.va.gov/locations/washington.asp      | https://www.va.gov/pittsburgh-health-care/locations/washington-county-va-clinic/ |
|          | CBOC                     | Westmoreland County VA Clinic   | Westmoreland County clinic         | https://www.pittsburgh.va.gov/locations/westmoreland.asp      | https://www.va.gov/pittsburgh-health-care/locations/westmoreland-county-va-clinic/ |


## VBA benefits facilities naming schema
This example schema below is for the VA Pittsburgh Healthcare System. It represents a **VAMC facility network** (i.e., VAMC is parent facility, with health clinics as children facilities; customers get access to the entire network). It should apply to _most_ VAMC systems.

> This schema is a work in progress!! It requires more research.

|          | Facility type            |  Official facility name                         | New facility short name         | Old website URL                                                   | New website URL                                                    | 
| -------- | ------------------------ | ----------------------------------------------- | ------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Source_ | _VAST_                   | _VAST_                                          | _Drupal_                        | _Facilities API_                                                  | _Facilities API_                                                   |
|          | Health care system       | VA Pittsburgh Healthcare System                 | VA Pittsburgh health care       | https://www.pittsburgh.va.gov/                                    | https://www.va.gov/pittsburgh-health-care/                         |
|          | VAMC                     | Pittsburgh VA Medical Center-University Drive   | University Drive campus         | https://www.pittsburgh.va.gov/locations/university-drive.asp      | https://www.va.gov/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/ |


## VHA Vet Center facilities naming schema
This example schema below is for a Vet Center. It represents an **individual VHA facility** (i.e., not a network).

|          | Facility type            |  Official facility name                         | New facility short name         | Old website URL                                                   | New website URL                                                    | 
| -------- | ------------------------ | ----------------------------------------------- | ------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Source_ | _VAST_                   | _VAST_                                          | _Drupal_                        | _Facilities API_                                                  | _Facilities API_                                                   |
|          | Vet Center               | Baltimore Vet Center                            | VA Baltimore Vet Center         | N/A                                                               | https://www.va.gov/va-baltimore-vet-center                         |


## NCA cemetery facilities naming schema
This example schema below is for a national cemetery. It represents an **individual NCA facility** (i.e., not a network).

|          | Facility type            |  Official facility name                         | New facility short name         | Old website URL                                                   | New website URL                                                    | 
| -------- | ------------------------ | ----------------------------------------------- | ------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| _Source_ | _VAST_                   | _VAST_                                          | _Drupal_                        | _Facilities API_                                                  | _Facilities API_                                                   |
|          | National cemetery        | Riverside National Cemetery                     | VA Riverside National Cemetery  | https://www.cem.va.gov/cems/nchp/riverside.asp                    | https://www.va.gov/va-riverside-national-cemetery                  |
