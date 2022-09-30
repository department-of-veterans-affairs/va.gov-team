# VBA Benefits Services Taxonomy

## What we need to do

- Research, design, and write new VBA benefits services taxonomy (as necessary)
- Build VBA benefits services taxonomy in Drupal and integrate into larger VA Services Taxonomy
- Integrate into the Facilities API

## Assumptions


|	Assumption/early discussion	|	Decision	|
|	---	|	---	|
|	The pattern established by the VAMC and Vet Center services can easily extended to the VBA services	|	---	|
|	Re-use of taxons (e.g. Vocational rehabilitation) between administrations	|	Leverage the taxonomy working group to work through these definitions and overlays. May require change management with VAMC folks and/or additional discovery. (fast-follow on whether these are overlap or not?)	|


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
|	Burial claim help	|	---	| ---	| We can help you apply for the burial benefits you've earned, and connect you to services to help you plan for a burial in advance or at time of need.	([Hub link](https://www.va.gov/burials-memorials/))| ---	| ---	| ---	|
|	Disability claim help |	---	| ---	| If you got sick or injured while serving in the military or your service made an existing condition worse, you may qualify for VA disability benefits. We can help you apply for and manage the Veterans disability benefits you've earned. ([Hub link](https://www.va.gov/disability/))	| ---	| ---	| ---	|
|	~eBenefits registration help~ |	---	| ---	| ---	| ---	| ---	|  ---	| eBenefits as a system is being sunset. This will no longer be a needed service.	|
|	Education and career counseling |	---	| ---	|  If you’re leaving active service soon or have been discharged within the past year, we can help you apply for Personalized Career Planning and Guidance (PCPG), or VA Chapter 36 - free educational and career guidance, planning, and resources to Veterans and their dependents who are eligible for a VA education benefit.	 ([Hub link](https://www.va.gov/careers-employment/education-and-career-counseling/))	| ---	| ---	|
|	Education claim help |	---	| ---	| We can help you apply for and manage the VA education and training benefits you've earned for you or your qualified family members.	([Hub link](https://www.va.gov/careers-employment/))  ---	| ---	| ---	|
|	Family member claim help |	---	 | ---	| As the spouse or dependent child of a Veteran or service member, you may qualify for certain benefits, like health care, life insurance, or money to help pay for school or training. We can help you learn which benefits you may qualify for and how to access them. ([Hub link](https://www.va.gov/family-member-benefits/))	| ---	| ---	| ---	|
|	Help for homeless Veterans |	---	| ---	| If you are homeless or at risk of becoming homeless we can help you connect with resources in your community, like homeless shelters or faith-based organizations. (Hub link) | ---	| ---	| ---	|
|	VA housing assistance  |	VA home loans, Veterans housing assistance grants 	| ---	| We can help Veterans, service members, and their surviving spouses to buy a home or refinance a loan. We also offer benefits and services to help you build, improve, or keep your current home. ([Hub Link](https://www.va.gov/housing-assistance/))	| ---	| ---	| ---	|
|	Insurance claim help and financial counseling |	---	| ---	| We can help you explore your VA life insurance options, manage your policy, and help you, your spouse, or your dependent children file claims to get the insurance benefits you've earned. ([Hub link](https://www.va.gov/life-insurance/))	| ---	| ---	| ---	|
|	Integrated Disability Evaluation System Assistance (IDES) |	---	| ---	| Our joint DoD and VA disability evaluation process will help determine if wounded, ill, or injured service members are fit for continued military service and provide disability benefits to service members and Veterans, if appropriate. ([Web link](https://www.benefits.va.gov/predischarge/ides.asp))	| ---	| ---	| ---	|
|	Pensions |	---	| ---	| --- We can help you find out if you are eligible for VA pension benefits that are available to some wartime Veterans and help you to apply. ([Hub link](https://www.va.gov/pension/)) 	| ---	| ---	| This isn't actually part of VBA_facilities DB but is listed on Lighthouse (no data source tho). Also I know this description it just plain awful because I wrote it :-) 	|
|	Pre-discharge claim help |	---	| ---	| If you have an illness or injury that you believe was caused—or made worse—by your active-duty service, we can help you file a claim for disability benefits 180 to 90 days before you leave the military. ([Hub Link](https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/))	| ---	| ---	| ---	|
|	Transition help |	---	| ---	| We are here to help you and your family use the benefits you’ve earned throughout your military career. Every transition experience is different. We can help you discover the benefits you can use in and out of uniform. ([Benefit link](https://benefits.va.gov/transition/transition-home.asp)) | ---	| ---	| ---	|
|	Updating direct deposit information |	---	| ---	| Change your VA direct deposit information for disability compensation, pension benefits, or education benefits in peroson or online. ([Hub link](https://www.va.gov/change-direct-deposit/))	| ---	| ---	| How much traffic does this generate at a facility?	|
|	Vocational Rehabilitation and Employment (VR&E) ~help~ programs |	---	| ---	| If you’re a service member or Veteran and have a disability that was caused—or made worse—by your active-duty service and that limits your ability to work or prevents you from working, we may be able to help you get employment support or services to help you live as independently as possible. ([Hub link](https://www.va.gov/careers-employment/vocational-rehabilitation/))	| ---	| ---	| Used by VHA in existing VAMC product and Vet Center product with variation between descriptions. This description was pulled from benefit hubs for VR&E.	|
