# Community Care Provider Taxonomy Brain Dump

## Source of data

The source of the data comes from PPMS. The API for querying PPMS supports geo-location, search radius, and type of care (specialty code) filtering, all of which are needed to build the type of UI we feel is most suitable for veterans to select their provider based on proximity and medical needs.

## Problems with the data

1. The taxonomy that PPMS uses for "specialty codes" is different than the taxonomy that VHA uses. It is far more granular than the type of care codes we commonly use across the rest of VAOS.
2. While PPMS does have slightly more generic specialty codes, commonly referred to as "rollup specialty codes," there are still 244 of these more generic specialty codes. Furthmore, not all 6 million records necessarily have a roll-up specialty code associated with them.
3. The PPMS API is limited in allowing you to only query by 4 of specialty codes at a time. This is a problem since the VAOS notion of type of care is far more generic than the types of care that PPMS has (even their rollup).

### "Type of Care" taxonomies across the VA 

There are many different "Type of Care" classifications or taxonomies. A few of the most relevant ones are referenced below:

|           Taxonomy          |    Count    | Reference Documentation | Additional Notes |
|:---------------------------:|:-----------:|:-----------------------:|:----------------:|
| VHA                         | unknown     |                         |                  |
| VAOS                        | 6 (CC)      | https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/utils/constants.js#L61 |  Only look at the ccID   |
| Lighthouse Service Types    | 14          | https://developer.va.gov/explore/health/docs/community_care?version=current                                            |  Have to drill down into parameteers to see supporter Service Types |
| PPMS Specialty Codes        | 800+        | https://staging-api.va.gov/v1/facilities/ccp/specialties.json] | This is a complete set of specialty codes from PPMS |
| PPMS Specialty Rollup Codes | 245         | https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/notes/PPMS/20201111_ppms_specialties.csv] | The specialty code for the first row of each rollup is the actual rollup id |
| Cerner                      | unknown     |                         |                  |
| HSRM                        | unknown     |                         |                  |

VAOS currently supports 6 CC types of care.

1. Primary Care
2. Audiology - Routine hearing exam
3. Audiology - Hearing aid support
4. Nutrition
5. Podiatry
6. Optometry

The Light house facility API maps to 5 of these 6 types uniquely. The two Audiology type of care, are captured by the same type of care on Facilities API. For all intents and purposes, if we use the Facilities API to return results, we really only have 5 "Types of Care" to be concerned with in mapping to PPMS. If we instead, want to integrate with PPMS directly, we would have 6, and the mapping for Audiology would use distinct subsets of PPMS specialty codes in the query to return the most accurate result.

###  Examining PPMS Specialty Codes more closely

I've taken the liberty of sorting the PPMS specialty codes according to the prefix of the ID which correseponds to a distinct classification of sub-specialties. In most cases, the first row is actually considered a generic sub specialty which could be associated with some but not all facilities in the 6 million records PPMS has in its database. It's necessary to search through this sorted list for various keywords to identify potential target specialty codes for mapping taxonomies.

For example, in the case of Primary Care we could search for the word "Primary" or "General" or in the case of Audiology we might want to look at "Audio", "Hear", "Speech" to help identify a set of PPMS specialty codes we might want for our taxonomy mapping.

The data for specialties is fetched via the Facilities API. Then using a ruby script, I've sorted and grouped the results according to the first 4 of the id. The script is available [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/notes/PPMS/ppms_rollup_specialties.rb](here). And the results are available [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/notes/PPMS/20201111_ppms_specialties.csv](here).

#### Primary Care

keywords searched: 'Primary', 'General', 'Internal Medicine'

261Q	261QP2300X	Clinic/Center - Primary Care
208D  208D00000X	General Practice
207R	207R00000X	Internal Medicine
207R	207RA0000X	Internal Medicine - Adolescent Medicine
207R	207RA0001X	Internal Medicine - Advanced Heart Failure and Transplant Cardiology
207R	207RA0002X	Internal Medicine - Adult Congenital Heart Disease
207R	207RA0201X	Internal Medicine - Allergy & Immunology
207R	207RA0401X	Internal Medicine - Addiction Medicine
207R	207RB0002X	Internal Medicine - Obesity Medicine
207R	207RC0000X	Internal Medicine - Cardiovascular Disease
207R	207RC0001X	Internal Medicine - Clinical Cardiac Electrophysiology
207R	207RC0200X	Internal Medicine - Critical Care Medicine
207R	207RE0101X	Internal Medicine - Endocrinology, Diabetes & Metabolism
207R	207RG0100X	Internal Medicine - Gastroenterology
207R	207RG0300X	Internal Medicine - Geriatric Medicine
207R	207RH0000X	Internal Medicine - Hematology
207R	207RH0002X	Internal Medicine - Hospice and Palliative Medicine
207R	207RH0003X	Internal Medicine - Hematology & Oncology
207R	207RH0005X	Internal Medicine - Hypertension Specialist
207R	207RI0001X	Internal Medicine - Clinical & Laboratory Immunology
207R	207RI0008X	Internal Medicine - Hepatology
207R	207RI0011X	Internal Medicine - Interventional Cardiology
207R	207RI0200X	Internal Medicine - Infectious Disease
207R	207RM1200X	Internal Medicine - Magnetic Resonance Imaging (MRI)
207R	207RN0300X	Internal Medicine - Nephrology
207R	207RP1001X	Internal Medicine - Pulmonary Disease
207R	207RR0500X	Internal Medicine - Rheumatology
207R	207RS0010X	Internal Medicine - Sports Medicine
207R	207RS0012X	Internal Medicine - Sleep Medicine
207R	207RT0003X	Internal Medicine - Transplant Hepatology
207R	207RX0202X	Internal Medicine - Medical Oncology

#### Audiology

Lighthouses Facility API only supports one categorization for both of the VAOS Audiology types. 

1. Audiology - Routine hearing exam
2. Audiology - Hearing aid support


keywords searched: 'hearing exam', 'hearing', 'audiology', 'routine', 'hearing aid', 'hearing support', 'audiology'

332S	332S00000X	Hearing Aid Equipment
2376	237600000X	Audiologist-Hearing Aid Fitter
2377	237700000X	Hearing Instrument Specialist
261Q	261QH0700X	Clinic/Center - Hearing and Speech
231H	231H00000X	Audiologist
231H	231HA2400X	Audiologist - Assistive Technology Practitioner
231H	231HA2500X	Audiologist - Assistive Technology Supplier
2355	2355A2700X	Specialist/Technologist - Audiology Assistant
2355	2355S0801X	Specialist/Technologist - Speech-Language Assistant
235Z	235Z00000X	Speech-Language Pathologist

#### Nutrition

keywords searched 'nutrit', 'dietician'

133N	133N00000X	Nutritionist
133N	133NN1002X	Nutritionist - Nutrition, Education
133V	133V00000X	Dietitian, Registered
133V	133VN1004X	Dietitian, Registered - Nutrition, Pediatric
133V	133VN1005X	Dietitian, Registered - Nutrition, Renal
133V	133VN1006X	Dietitian, Registered - Nutrition, Metabolic
133V	133VN1101X	Dietitian, Registered - Nutrition, Gerontological
133V	133VN1201X	Dietitian, Registered - Nutrition, Obesity and Weight Management
133V	133VN1301X	Dietitian, Registered - Nutrition, Oncology
133V	133VN1401X	Dietitian, Registered - Nutrition, Pediatric Critical Care
133V	133VN1501X	Dietitian, Registered - Nutrition, Sports Dietetics
136A	136A00000X	Dietetic Technician, Registered
1327	132700000X	Dietary Manager

#### Podiatry

keyword searched 'foot', 'ankle', 'podiatr'

211D	211D00000X	Assistant, Podiatric
213E	213E00000X	Podiatrist
213E	213EG0000X	Podiatrist - General Practice
213E	213EP0504X	Podiatrist - Public Medicine
213E	213EP1101X	Podiatrist - Primary Podiatric Medicine
213E	213ER0200X	Podiatrist - Radiology
213E	213ES0000X	Podiatrist - Sports Medicine
213E	213ES0103X	Podiatrist - Foot & Ankle Surgery
213E	213ES0131X	Podiatrist - Foot Surgery
261Q	261QP1100X	Clinic/Center - Podiatric
207X	207XX0004X	Orthopaedic Surgery - Foot and Ankle Surgery

#### Optometry

keyword searched 'vision', 'eye', 'optom', 'opti'

152W	152W00000X	Optometrist
152W	152WC0802X	Optometrist - Corneal and Contact Management
152W	152WL0500X	Optometrist - Low Vision Rehabilitation
152W	152WP0200X	Optometrist - Pediatrics
152W	152WS0006X	Optometrist - Sports Vision
152W	152WV0400X	Optometrist - Vision Therapy
152W	152WX0102X	Optometrist - Occupational Vision
156F	156F00000X	Technician/Technologist
156F	156FC0800X	Technician/Technologist - Contact Lens
156F	156FC0801X	Technician/Technologist - Contact Lens Fitter
156F	156FX1100X	Technician/Technologist - Ophthalmic
156F	156FX1101X	Technician/Technologist - Ophthalmic Assistant
156F	156FX1201X	Technician/Technologist - Optometric Assistant
156F	156FX1202X	Technician/Technologist - Optometric Technician
156F	156FX1700X	Technician/Technologist - Ocularist
156F	156FX1800X	Technician/Technologist - Optician
224Z	224ZL0004X	Occupational Therapy Assistant - Low Vision

### Challenge of mapping taxonomies

We want to identify a set of 4 specialty codes for each of the above categorizations. Some of the research being conducted in the weeks ahead with schedulers and veterans alike, as well physicians and stakeholders should set some light on the ideal set of specialty codes we will use. In the meantime good judgment by selecting 4 of the more general specialty codes from each category should provide us a starting point for future iteration.

### Iteration

### Short Term Strategy

### Medium Term Strategy

### Long Term Strategy

### Summary


