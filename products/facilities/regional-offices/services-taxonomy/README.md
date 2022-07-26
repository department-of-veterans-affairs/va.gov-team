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
|	Burial claim help	|	---	| ---	| We can help you apply for the burial benefits you've earned, and connect you to services to help you plan for a burial in advance or at time of need.	| ---	| ---	| ---	|
|	Disability claim help |	---	| ---	| If you got sick or injured while serving in the military or your service made an existing condition worse, you may qualify for VA disability benefits. We can help you apply for and manage the Veterans disability benefits you've earned.	| ---	| ---	| ---	|
|	~eBenefits registration help~ |	---	| ---	| ---	| ---	| ---	| eBenefits as a system is being sunset. This will no longer be a needed service.	|
|	Education and career counseling |	---	| ---	| ---	| ---	| ---	| ---	|
|	Education claim help |	---	| ---	| We can help you apply for and manage the VA education and training benefits you've earned for you or your qualified family members.	| ---	| ---	| ---	|
|	Family member claim help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Help for homeless Veterans |	---	| ---	| If you are homeless or at risk of becoming homeless we can help you connect with resources in your community, like homeless shelters or faith-based organizations.	| ---	| ---	| ---	|
|	VA housing assistance  |	VA home loans, Veterans housing assistance grants 	| ---	| We can help Veterans, service members, and their surviving spouses to buy a home or refinance a loan. We also offer benefits and services to help you build, improve, or keep your current home. 	| ---	| ---	| ---	|
|	Insurance claim help and financial counseling |	---	| ---	| We can help you explore your VA life insurance options, manage your policy, and help you, your spouse, or your dependent children file claims to get the insurance benefits you've earned.	| ---	| ---	| ---	|
|	Integrated Disability Evaluation System Assistance (IDES) |	---	| ---	| ---	| ---	| ---	| ---	|
|	Pensions |	---	| ---	| ---	| ---	| ---	| This isn't actually part of VBA_facilities DB	|
|	Pre-discharge claim help |	---	| ---	| If you have an illness or injury that you believe was caused—or made worse—by your active-duty service, we can help you file a claim for disability benefits 180 to 90 days before you leave the military. 	| ---	| ---	| ---	|
|	Transition help |	---	| ---	| ---	| ---	| ---	| ---	|
|	Updating direct deposit information |	---	| ---	| ---	| ---	| ---	| ---	|
|	Vocational Rehabilitation and Employment (VR&E) ~help~ programs |	---	| ---	| If you’re a service member or Veteran and have a disability that was caused—or made worse—by your active-duty service and that limits your ability to work or prevents you from working, we may be able to help you get employment support or services to help you live as independently as possible.	| ---	| ---	| Used by VHA in existing VAMC product and Vet Center product with variation between descriptions. This description was pulled from benefit hubs for VR&E.	|
