# Direct Deposit
What is required in order to port the direct deposit functionality from eBenefits to VA.gov? 

## Summary
- Direct Deposit would likely be a natural addition to the VA Profile
- We can immediately begin FE integration for retrieving the Direct Deposit payment information behind Compensation & Pension.
- We can begin implementation of an API method for updating Direct Deposit payment information for Compensation & Pension, but will have to coordinate with the EVSS team to ensure this method is production ready.
- The Direct Deposit data for Post-9/11 GI Bill is stored in a separate data source, and will require further research.

## Background
Currently, eBenefits contains functionality for veterans to view and make changes to the payment methods associated with their benefits. For example, a veteran can configure a bank account to receive funds for their Pension benefits via direct deposit. 

An overview of this feature's UX is showcased in these screenshots -

1. [Landing Page](https://images.zenhubusercontent.com/59cb9de1b0222d5de47953d8/0451e10e-a503-42e8-9ad1-752a22841797)
2. [Dashboard](https://images.zenhubusercontent.com/59cb9de1b0222d5de47953d8/e3b60f47-fe2c-4f6d-819e-6a664a83a59e)
3. [Personal Information: Payment Information](https://images.zenhubusercontent.com/59cb9de1b0222d5de47953d8/380f851b-3f84-4ba6-a6c5-ca1f8ccb65ad)
    - _Note that the Payment Information section is subtitled "For Compensation & Pension and Post-9/11 GI Bill Benefits". This suggests to me that payment methods for only these benefits are available for configuration from eBenefits. Also note that the second column of the table reads "Payment Method" and currently says "Direct Deposit" in the cell of the first record. I'm not certain, but I think this is somewhat misleading in that it suggests other payment methods are configurable (such as by check), but I believe direct deposit is the only option because the edit form does not render an input for that field._
4. [Edit Personal Information](https://images.zenhubusercontent.com/59cb9de1b0222d5de47953d8/1dc57681-51eb-497e-8a44-af9097c36e49)
5. [Edit Personal Information -> Change direct deposit information](https://images.zenhubusercontent.com/59cb9de1b0222d5de47953d8/718ad0fb-fcbc-404e-8591-3e1205d2d2c5)

_Note: These screenshots were collected via these [instructions](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-ebenefits.md)._

The caveat is not in the functionality itself, but rather that because eBenefits does not currently have multifactor authentication (MFA), it is not secured well. By porting this functionality to VA.gov, we can take advantage of VA.gov's MFA, as well as its modern UX and technology architecture.

## User Experience
The Personal Information page of eBenefits, which contains the Direct Deposit functionality, closely resembles the look and functionality of the VA.gov Profile. It seems a natural fit for the VA Profile to be extended to contain a Direct Deposit section. 

**Flows to consider**

1. LOA1 users need to verify their identity before they can use the profile (and, therefore, direct deposit).
2. LOA3 user can update and add direct deposit info to their profile.
- To the best of my understanding, adding 2FA is part of the identity verification process.
3. Confirmation (likely email) when someone's deposit information is updated.
- Should be able to use GovDelivery/Granicus for this.
4. Announcing and introducing people to this feature on VA.gov.
- Can use new feature announcement for this.

**Pages to update**

1. LOA3 Profile.
2. LOA1 Profile (maybe)
- Consider saying what features people will be able to access once they have verified their identities.
3. Dashboard (maybe)
- Need to consider if we want to link to/mention this feature from there either temporarily or long-term.

## Technical Requirements
To fully port the Direct Deposit functionality from eBenefits into VA.gov, we need the ability to read and edit the associated data. This ultimately requires -

1. [A method of _retrieving_ and _updating_ the current bank account for Compensation & Pension](#compensation--pension)
2. [A method of _retrieving_ and _updating_ the current bank account for Post-9/11 GI Bill](#post-911-gi-bill)

Researching this information is the core of this discovery effort.

### Compensation & Pension
The payment methods associated with Compensation & Pensions are available via the EVSS service, [PPIU](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/eBenefits-EVSS/ppiu-payment-info), which stores data in [CorpDB](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/corporate-db). PPIU exposes an endpoint for retreiving the bank account data for Compensation & Pension data, as well as updating it.

The endpoint for retrieving this data is located at `GET [EVSS]/wss-ppiu-services-web/rest/ppiuServices/v1`. Vets-API has already wrapped this API in its own [controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/ppiu_controller.rb) and has published this method at `[Vets-API]v0/ppiu/payment_information`. This method is already being consumed by the VA.gov Front-End as part of the pre-fill functionality of form [526EX](https://github.com/department-of-veterans-affairs/vets-website/blob/ca27b4377a965696b8804f5c92b0f41c6c572521/src/applications/disability-benefits/526EZ/helpers.jsx#L7640).

PPIU also exposes a second endpoint used for updating this data located at `POST [EVSS]/wss-ppiu-services-web/rest/ppiuServices/v1`. Per this [comment](https://dsva.slack.com/archives/C1VBAHWQL/p1551731782045700), this PPIU method is available only in the VA INT environment. Vets-API has not implemented a wrapper for this method.

There are also some Swagger docs available for [PPIU](https://csraciapp6.evss.srarad.com/wss-ppiu-services-web/swagger-ui/index.html). There are also additional [Swagger docs](https://csraciapp6.evss.srarad.com/wss-ppiu-services-web/swagger-ui/index.html?url=https://csraciapp6.evss.srarad.com/wss-ppiu-services-web/rest/swagger.yaml#!/ppiuServices/updatePaymentInfo), but those require [EVSS VPN](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/evss-integration) and a proxy to be setup.

### Post-9/11 GI Bill
At this time, it seems that the payment methods associated with the Post-9/11 GI Bill are stored in _LTS Ch33_ but have not been exposed in a consumable service, although this is still being researched.

## Additional Considerations

1. __Can we leverage Vet360 for working with this payment information?__

Although there is interest, Vet360 does not provide any banking-related information at this time.

2. __How does VA.gov currently handle direct deposit?__

There are various forms, including the Education forms as well as form 526EZ that contain a section for a user to input direct deposit information. In the case of 526EZ, this form is pre-filled with data from PPIU. In any case, the submitted direct deposit data is contained only to that form. 
