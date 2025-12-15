## 10-10d v2: Eligibility and Demographics Service (EDS) API Discovery

### Objective
We want to explore connecting to the Eligibility and Demographics Service (EDS) API, as we'll likely use it in an upcoming project to screen for eligibility based on TriCare enrollment. 
This discovery work will help us understand integration requirements, available data fields, authentication needs, and any constraints that may affect design or timeline.

[Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126459)

[Figma](https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA---10-10d--and-OHI-Certification--10-7559c--WIP?node-id=8969-5389&p=f&t=1uH7JXYsbDr4j5ZU-0) 

### What is DEERS and EDS
DEERS is the system of record for eligibility and enrollment information. Applications query DEERS to determine eligibility and enrollment status for a given period. Inquiries can be made for periods up to six (6) years in the past or six (6) months into the future. Limiting inquiry periods to cover the episode of care generally improves performance.

DEERS serves as the database of record for:
- Person Identification
- Eligibility
- Enrollment and Primary Care Manager (PCM) information
- Year-to-date totals for Catastrophic Cap and Deductible (CC&D) amounts
- Point of Service (POS) deductible amounts
- Other Government Programs (OGP)
- Entitlement Factors (copayment, cost-shares, etc.)

The Eligibility and Demographics Service (EDS) supports business events associated with obtaining information related to eligibility, claims, and demographics.

### Authentication and Authorization with EDS
EDS allows client systems to exchange information using JSON over HTTPS/Public Key Infrastructure (PKI).

EDS clients must be pre-approved and registered through established DMDC processes.
Provisioning of clients requires the machine public certificate to be mapped in the DMDC Authorization system to the Site ID ahead of time. Contact DMDC Point of Contact for policy steps

**Authentication/Authorization flow using PKI and TLS**:

<img width="409" height="259" alt="image" src="https://github.com/user-attachments/assets/7c066542-a97e-44e1-80f3-88673f32df12" />

### SLA with regards to Response Time and Performance
DMDC systems provide a response time of 3.0 seconds or less for 99.5% of all requests, given that the clients transaction volume does not exceed the baseline estimate by more than 25%.

### Client Requests
EDS offers three classes of inquiry: Family, Family Member, and Person

**Required Information**
All inquires must include the following information:
- Inquiry type: Family, Family Member, or Person
- Business context
- Inquiry healthcare program type
- Begin and end dates for the inquiry period
- The begin date may not be greater than six (6) years in the past from the current date and the end date may not be greater than six (6) months into the future
- Person identification number for either sponsor, or inquiry person, or both
- Person identification type code for sponsor, inquiry person, or both

**Flow diagram of client requests and responses**:
<img width="884" height="522" alt="image" src="https://github.com/user-attachments/assets/87e25506-f639-47d0-bf6e-d2aba750985f" />

#### Choosing an Inquiry Type

<img width="822" height="155" alt="image" src="https://github.com/user-attachments/assets/1afcd9eb-34c4-4108-85ea-481e9da16183" />

Providing any of the identification number types listed in the table above offers the fastest and most complete response to a query.
Some form of identification number is required in all types of EDS queries.

- If you require only the personal information for a sponsor and do not need information on that sponsor’s family, create a `person` pull using one of the sponsor’s known identification numbers
- Use a `family` pull if you are certain of the sponsor’s identity but have limited or no information on a dependent of the sponsor
- A `familyMember` pull using a sponsor’s ID (sponsorPersonID) and the dependent’s details (personId and personIdTypeCode, OR personFirstName, OR personBirthDate) will return the eligibility information for that dependent under that specific sponsor, along with that sponsor’s information. In the event that multiple dependents within the family are a match, such as in the case of twins sharing a date of birth, both dependents’ information will be returned.
- If a `familyMember` pull is selected, the correct sponsor ID must be provided. If the family member’s ID is provided without the correct sponsor’s ID, a response will be returned indicating that the person inquired upon was not found. EDS will not be able to return information for a family member of an unidentified or unassociated sponsor using the `familyMember` inquiry type
- In the event that is unknown whether an ID belongs to a sponsor or a dependent, or that the ID belongs to the dependent of an unknown sponsor, a `person` pull return the eligibility information for that individual. **A `person` pull is only recommended if it is not possible to use a `family` or `familyMember` pull as it possible for a person to exist within multiple families.**

### Business Context
EDS defines four groups of data sets categorized as business contexts - `Eligibility`, `EligibilityLite`, `Claims`, and `ClaimsLite`.

DMDC works with new users of EDS to identify the appropriate business context to use based on business needs. Only one business context may be used per transaction.

**Relevant business contexts for eligibility data:**
- Eligibility: Select this business context to receive data sets that include overall healthcare coverage eligibility and enrollment status of beneficiaries
- EligibilityLite: As a service provider, select this business context to receive data sets that include eligibility and demographic details of beneficiaries. This data set contains similar beneficiary details as Global Nurse Advice Line EDS (NAL-EDS) interface. This is a subset of Eligibility business context.

### Inquiry healthcare program type (Healthcare Delivery Program “HCDP” type)
<img width="429" height="195" alt="image" src="https://github.com/user-attachments/assets/80e15423-3cc6-445c-b7bd-c102b8e474e3" />

### Inquiry Date Range
`inquiryBeginDate` and `inquiryEndDate` are both required inputs.

`inquiryBeginDate` must be a date that is:
- No more than six (6) years in the past from the current date, and
- No more than six (6) months in the future from the current date

If the inquiry is within the valid inquiry period the CCD totals will only return the current fiscal year and two (2) years prior.

### Identification Number Type Codes
EDS will attempt to match on both current and past identification numbers but will filter out matches on past IDs if multiple instances of the same ID are returned.

<img width="343" height="385" alt="image" src="https://github.com/user-attachments/assets/163b6d0e-1ed9-486d-9618-c80a232f9465" />

### Soft Match Data
The name and date of birth may be used to assist the search. The sponsor’s First Name, Last Name, and Birthdate may be entered when doing a Family search or a Family Member search. An individual’s first name, last name, and birthdate may be entered in the person segment of the search when pulling a Family Member search or a Person search.

### Response Codes
DEERS uses a combination of Transaction Return Status Codes (`txnReturnStatusCode`), Transaction Return Codes (`txnReturnCod`), and the Transaction Description to identify responses and describe error/warning conditions, if any.

The following table defines the Response Codes and the related Transaction Descriptions provided in the message header and the associated Contractor Responses:

<img width="410" height="407" alt="image" src="https://github.com/user-attachments/assets/682d0faf-c6f6-4031-88d6-d3ac118f0486" />

### Sample EDS JSON Request

```
{
    "inquiryRequest": {
		"header": {
	            "softwareId": "732",
	            "txnVersionId": "03",
	            "siteId": "[Enter Appropriate Site ID Here]",
	            "userId": "0",
	            "submissionId": "0",
	            "runId": "0",
	            "txnDate": "20171201",
	            "txnTime": "134853",
	            "txnReturnStatusCode": "0",
	            "txnReturnCode": "00000",
	            "txnDescription": "Provide descriptive text about transaction to assist with troubleshooting. Cannot be blank",
	            "txnUniqueId": "Control-ID-1234567890"
        },
        "inquiryType": "family",
        "businessContext": "[Enter Appropriate Business Context Here]",
        "hcdpTypeCode": "1",
        "inquiryBeginDate": "20181016",
        "inquiryEndDate": "20181016",
        "sponsorDetail": {
            "sponsorPersonId": "",
            "sponsorPersonIdTypeCode": "[Enter Appropriate ID Type Code Here]",
            "sponsorPersonLastName": "",
            "sponsorPersonFirstName": "",
            "sponsorPersonBirthDate": ""
        },
        "personDetail": {
            "personId": "",
            "personIdTypeCode": "",
            "personLastName": "",
            "personFirstName": "",
            "personBirthDate": ""
        }
	}
}
```

### Sample EDS EligibilityLite JSON Response

```
{
	"inquiryResponse": {
		"header": {
			"softwareId": "732",
			"txnVersionId": "03",
			"siteId": "[Site ID will be Displayed Here]",
			"userId": "0",
			"submissionId": "0",
			"runId": "0",
			"txnDate": "20190401",
			"txnTime": "134853",
			"txnReturnStatusCode": "0",
			"txnReturnCode": "00000",
			"txnDescription": "SUCCESS",
			"txnUniqueId": "Control-ID-1234567890"
		},
		"main": {
		"numberOfFamilies": 1,
		"sponsor": [
			{
				"personLastName": "",
				"personFirstName": "",
				"personMidName": "",
				"personCadencyName": "",
				"personBirthDate": "",
				"personSexCode": "",
				"personDeathDate": "",
				"personIdentity": {
					"dodEdiPersonId": "",
					"personId": "",
					"personIdTypeCode": "",
					"personDuplicateId": ""
				},
				"personnel": [
					{
						"personnelCategoryCode": "",
						"serviceCode": "",
						"payGrade": [
							{
								"payGradeCode": "",
								"payGradeDate": "",
								"payPlanCode": "",
								"rankCode": ""
							}
						],
						"unitIdentificationCode": [{"unitIdCode": ""}]
					}
				],
				"personAssociation": {
					"personAssociationReasonCode": "",
					"personAssociationBeginDate": "",
					"personAssociationTerminationDate": ""
				},
				"benefit": [{
					"deersFamilyId": "",
					"deersBeneficiaryId": "",
					"guardActivationLegalAuthority": {
						"activeGuardReserveServiceLegalAuthorityCode": ""
					},
					"medicalBeneficiary": [
						{
							"dentalHealthCareCoverage": [
								{
									"hcdpTypeCode": "",
									"hccBeginDate": "",
									"hccEndDate": "",
									"hcdpPlanCoverageCode": "",
									"hccCopaymentFactorCode": "",
									"hccMemberRelationshipCode": "",
									"hccEndReasonCode": "",
									"hccMemberCategoryCode": "",
									"hccServiceCode": ""
								}
							],
							"hcdp": [
								{
									"hcdpBeginDate": "",
									"hcdpEnrollmentManagementContractor": [
										{
											"enrollmentManagementContractorEnrollmentBeginDate": "",
											"primaryCareManagerSelection": [
												{
													"pcmEnrollmentDivisionDmisId": "",
													"pcmNationalProviderId": "",
													"pcmName": "",
													"dmisProviderId": "",
													"pcmNationalProviderIdTypeCode": "",
													"pcmProviderTypeCode": "",
													"pcmRegionCode": "",
													"pcmSelectionBeginDate": "",
													"pcmSelectionTerminationDate": "",
													"pcmSelectionTerminationReasonCode": "",
													"pcmTelephoneNumberCode": "",
													"pcmId": "",
													"pcmIdTypeCode": "",
													"pcmGroupId": "",
													"pcmGroupName": "",
													"pcmSpecialCode": "",
													"pcmPlaceOfCareId": "",
													"pcmPlaceOfCareNameText": "",
													"hcdpPlanCoverageCode": ""
												}
											]
										}
									]
								}
							],
							"medicalHealthCareCoverage": [
								{
									"hcdpTypeCode": "",
									"hccBeginDate": "",
									"hccEndDate": "",
									"hcdpPlanCoverageCode": "",
									"hccCopaymentFactorCode": "",
									"hccMemberRelationshipCode": "",
									"hccEndReasonCode": "",
									"hccMemberCategoryCode": "",
									"hccServiceCode": ""
								}
							],
							"pharmacyHealthCareCoverage": [
								{
									"hcdpTypeCode": "",
									"hccBeginDate": "",
									"hccEndDate": "",
									"hcdpPlanCoverageCode": "",
									"hccCopaymentFactorCode": "",
									"hccMemberRelationshipCode": "",
									"hccEndReasonCode": "",
									"hccMemberCategoryCode": "",
									"hccServiceCode": ""
								}
							],
							"specialHealthCareCoverage": [
								{
									"hcdpTypeCode": "",
									"hccBeginDate": "",
									"hccEndDate": "",
									"hcdpPlanCoverageCode": "",
									"hccCopaymentFactorCode": "",
									"hccMemberRelationshipCode": "",
									"hccEndReasonCode": "",
									"hccMemberCategoryCode": "",
									"hccSpecialCopaymentFactorCode": "",
									"hccServiceCode": "",
									"episodeOfCareCode": "",
									"episodeOfCareDescriptionText": ""
								}
							]
						}
					]
				}],
				"mailingAddress": {
					"mailingAddressLine1Text": "",
					"mailingAddressLine2Text": "",
					"mailingAddressMaintenanceSourceCode": "",
					"mailingAddressCityName": "",
					"mailDeliveryQualityCode": "",
					"mailingAddressStateCode": "",
					"mailingAddressCountryCode": "",
					"mailingAddressPostalRegionZipCode": "",
					"mailingAddressPostalRegionZipExtensionCode": "",
					"mailingAddressTypeCode": "",
					"mailingAddressIsoAlpha3CountryCode": "",
					"mailingAddressIsoCountryCode": "",
					"mailingAddressDate": ""
				},
				"emailAddress": [
					{
						"emailAddressText": "",
						"emailAddressUsePriorityCode": ""
					}
				],
				"telephoneNumber": [
					{
						"telephoneNumberCode": "",
						"telephoneNumberTypeCode": ""
					}
				],
				"numberOfDependents": 1,
				"dependent": [
					{
						"personLastName": "",
						"personFirstName": "",
						"personMidName": "",
						"personCadencyName": "",
						"personBirthDate": "",
						"personSexCode": "",
						"personDeathDate": "",
						"personIdentity": {
							"dodEdiPersonId": "",
							"personId": "",
							"personIdTypeCode": ""
						},
						"personAssociation": {
							"personAssociationReasonCode": "",
							"personAssociationBeginDate": "",
							"personAssociationTerminationDate": ""						},
						"benefit": [{
							"deersFamilyId": "",
							"deersBeneficiaryId": "",
							"guardActivationLegalAuthority": {
								"activeGuardReserveServiceLegalAuthorityCode": ""
							},
							"medicalBeneficiary": [
								{
									"dentalHealthCareCoverage": [
										{
											"hcdpTypeCode": "",
											"hccBeginDate": "",
											"hccEndDate": "",
											"hcdpPlanCoverageCode": "",
											"hccCopaymentFactorCode": "",
											"hccMemberRelationshipCode": "",
											"hccEndReasonCode": "",
											"hccMemberCategoryCode": "",
											"hccServiceCode": ""
										}
									],
									"hcdp": [
										{
											"hcdpBeginDate": "",
											"hcdpEnrollmentManagementContractor": [
												{
													"enrollmentManagementContractorEnrollmentBeginDate": "",
													"primaryCareManagerSelection": [
														{
															"pcmEnrollmentDivisionDmisId": "",
															"pcmNationalProviderId": "",
															"pcmName": "",
															"dmisProviderId": "",
															"pcmNationalProviderIdTypeCode": "",
															"pcmProviderTypeCode": "",
															"pcmRegionCode": "",
															"pcmSelectionBeginDate": "",
															"pcmSelectionTerminationDate": "",
															"pcmSelectionTerminationReasonCode": "",
															"pcmTelephoneNumberCode": "",
															"pcmId": "",
															"pcmIdTypeCode": "",
															"pcmGroupId": "",
															"pcmGroupName": "",
															"pcmSpecialCode": "",
															"pcmPlaceOfCareId": "",
															"pcmPlaceOfCareNameText": "",
															"hcdpPlanCoverageCode": ""
														}
													]
												}
											]
										}
									],
									"medicalHealthCareCoverage": [
										{
											"hcdpTypeCode": "",
											"hccBeginDate": "",
											"hccEndDate": "",
											"hcdpPlanCoverageCode": "",
											"hccCopaymentFactorCode": "",
											"hccMemberRelationshipCode": "",
											"hccEndReasonCode": "",
											"hccMemberCategoryCode": "",
											"hccServiceCode": ""
										}
									],
									"pharmacyHealthCareCoverage": [
										{
											"hcdpTypeCode": "",
											"hccBeginDate": "",
											"hccEndDate": "",
											"hcdpPlanCoverageCode": "",
											"hccCopaymentFactorCode": "",
											"hccMemberRelationshipCode": "",
											"hccEndReasonCode": "",
											"hccMemberCategoryCode": "",
											"hccServiceCode": ""
										}
									],
									"specialHealthCareCoverage": [
										{
											"hcdpTypeCode": "",
											"hccBeginDate": "",
											"hccEndDate": "",
											"hcdpPlanCoverageCode": "",
											"hccCopaymentFactorCode": "",
											"hccMemberRelationshipCode": "",
											"hccEndReasonCode": "",
											"hccMemberCategoryCode": "",
											"hccSpecialCopaymentFactorCode": "",
											"hccServiceCode": "",
											"episodeOfCareCode": "",
											"episodeOfCareDescriptionText": ""
										}
									]
								}
							]
						}],
						"mailingAddress": {
							"mailingAddressLine1Text": "",
							"mailingAddressLine2Text": "",
							"mailingAddressMaintenanceSourceCode": "",
							"mailingAddressCityName": "",
							"mailDeliveryQualityCode": "",
							"mailingAddressStateCode": "",
							"mailingAddressCountryCode": "",
							"mailingAddressPostalRegionZipCode": "",
							"mailingAddressPostalRegionZipExtensionCode": "",
							"mailingAddressTypeCode": "",
							"mailingAddressIsoAlpha3CountryCode": "",
							"mailingAddressIsoCountryCode": "",
							"mailingAddressDate": ""
						},
						"emailAddress": [
							{
								"emailAddressText": "",
								"emailAddressUsePriorityCode": ""
							}
						],
						"telephoneNumber": [
							{
								"telephoneNumberCode": "",
								"telephoneNumberTypeCode": ""
							}
						]
					}
				]
			}
		]}
	}
}
```











 









