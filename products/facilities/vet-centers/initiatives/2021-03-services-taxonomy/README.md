# VHA Vet Center Services Taxonomy

## What we need to do

- Research, design, and write new Vet Center service taxonomy
- Build Vet Center service taxonomy in Drupal, and integrate into the Facilities API

## Assumptions and decisions

|	Assumption/early discussion	|	Decision	|
|	---	|	---	|
|	Vet Centers are considered health care facilities, so its taxonomy may overlap with the VHA health services taxonomy	|	We can share the taxon/service but use different national descriptions to keep them tailored to the place of service. For example, we'll avoid references to "health" in Vet Center service descriptions. 	|
|	For overlapping or duplicative services, we will need to make it clear to users which VHA facility they will receive care at |	This will be evident based on page where it appears and in the service description	|
|	The Vet Center taxonomy should follow the same structure as the VHA health service taxonomy: Service name (required)/ Patient-friendly name / Common conditions / Description (required)	|	Vet Center services can have this structure with unique details	|
|	Vet Centers will need their own "Care we provide at VA Baltimore Vet Center" content block	|	Not in MVP	|
|	We should follow the same "Appointments""structured content design as our VAMC product: Referral needed? No / Walk-ins accepted? Yes / Phone: 412-822-3728	|	Not in MVP	|

## Original list of services

This is the list that is in the Facility Locator 1.0 tool for Vet Center services.

- Individual and group counseling for Veterans, service members, and their families
- Family counseling for military related issues
- Bereavement (grief) counseling
- Military sexual trauma counseling and referral
- Community outreach and education
- Substance abuse assessment and referral
- Employment referral
- Referral of other VA services

## Vet Center services (MVP)

These are not yet available via Lighthouse API and therefore not yet searchable on Facility Locator

|	VAMC type of care	|	Vet Center type of care	|	Service name	|	Required Vet Center service?	|
|	---	|	---	|	---	|	---	|
|	Mental health care	|	Referral services	|	Addiction and substance abuse care	|	Required	|
|	Other	|	Other services	|	Community engagement	|	Required	|
|	Other	|	Counseling services	|	Couples and family counseling	|	Required	|
|	n/a	|	Counseling services	|	Grief and bereavement counseling	|	Required	|
|	Social programs and services	|	Referral services	|	Homeless Veteran care	|	Optional	|
|	Social programs and services	|	Counseling	|	Intimate partner violence support	|	Optional	|
|	Social programs and services	|	Counseling	|	LGBTQ+ Veteran care	|	Optional	|
|	Mental health care	|	Counseling services	|	Mental health care	|	Required	|
|	Mental health care	|	Counseling services	|	Military sexual trauma care	|	Required	|
|	Social programs and services	|	Counseling	|	Minority Veteran care	|	Optional	|
|	Mental health care	|	Counseling services	|	PTSD care	|	Required	|
|	Social programs and services	|	Counseling	|	Recreational and creative arts therapy	|	Optional	|
|	Social programs and services	|	Counseling services	|	Returning service member care	|	Required	|
|	Mental health care	|	Referral services	|	Suicide prevention	|	Required	|
|	Other services	|	Other services	|	Telehealth	|	Optional	|
|	n/a	|	Referral services	|	Veteran conenctions	|	Required	|
|	Other services	|	Other services	|	Vocational rehabilitation and employment programs	|	Optional	|
|	Other services	|	Counseling	|	Whole health	|	Optonal	|
