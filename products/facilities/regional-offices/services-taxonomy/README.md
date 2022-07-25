# VBA Benefits Services Taxonomy

## What we need to do

- Research, design, and write new VBA benefits services taxonomy (as necessary)
- Build VBA benefits services taxonomy in Drupal and integrate into larger VA Services Taxonomy
- Integrate into the Facilities API

## Assumptions
- The pattern established by the VAMC and Vet Center services can easily extended to the VBA services
- We will need to coordinate communications between VHA and VBA due to re-use of taxons (e.g. Vocational rehabilitation) and ensure alignment as-necessary.

|	Assumption/early discussion	|	Decision	|
|	---	|	---	|


## Original list of services

The following is the list that is in the Lighthouse Facilities API (v0). The only data source for the mapping of these services to location is currently the VBA_facilities database in the CDW.

- Applying for benefits
- Burial claim help
- Disability claim help
- eBenefits registration help
- Education and career counseling
- Education claim help
- Family member claim help
- Help for homeless Veterans
- VA home loan help
- Insurance claim help and financial counseling
- Integrated Disability Evaluation System Assistance (IDES)
- Pensions* (note: although this exists in Facilities API, there is no data source mapped to this data)
- Pre-discharge claim help
- Transition help
- Updating direct deposit information
- Vocational Rehabilitation and Employment (VR&E) help


## Research

- [VBA Service Label Usability Research Findings - Feb 2022](/products/facilities/facility-locator/research/user-research/services-benefits-taxonomy-USERS/VBA-service-labels-usability-research-findings.md)

## MVP Services

| Service name  | Veteran-friendly name(s)  | "Common conditions" | Description | Type of care  | Required(?) | VHA Use?  | Notes |
|	---	|	---	| ---	| ---	| ---	| ---	| ---	| ---	|
|	Applying for benefits	|	---	| ---	| ---	| ---	| ---	| ---	|
|	Burial claim help	|	---	| ---	| ---	| ---	| ---	| ---	|
|	Disability claim help |	---	| ---	| ---	| ---	| ---	| ---	|
|	~eBenefits registration help~ |	---	| ---	| ---	| ---	| ---	| eBenefits as a system is being sunset. This will no longer be a needed service.	|
|	Education and career counseling |	---	| ---	| ---	| ---	| ---	| ---	|
|	Education claim help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Family member claim help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Help for homeless Veterans |	---	| ---	| ---	| ---	| ---	| ---	|
|	VA home loan help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Insurance claim help and financial counseling |	---	| ---	| ---	| ---	| ---	| ---	|
|	Integrated Disability Evaluation System Assistance (IDES) |	---	| ---	| ---	| ---	| ---	| ---	|
|	Pensions |	---	| ---	| ---	| ---	| ---	| This isn't actually part of VBA_facilities DB	|
|	Pre-discharge claim help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Transition help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Updating direct deposit information |	---	| ---	| ---	| ---	| ---	| ---	|
|	Vocational Rehabilitation and Employment (VR&E) ~help~ programs |	---	| ---	| We can help you reach your job and career goals with one-on-one support, counseling, and training.	| ---	| ---	| Used by VHA in existing VAMC product and Vet Center product with variation between descriptions.	|
