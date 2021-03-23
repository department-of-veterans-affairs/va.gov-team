# Veterans Rapid Retraining Assistance Program (VRRAP)

Single page solution


## Intro page


### Criteria for eligibility (for info / awareness)

To be eligible for VRRAP, Veterans must:

* Be between ages 22-66;
* Be unemployed as a result of the COVID-19 pandemic;
* Not be eligible for any federal GI Bill program (if eligible for the Post-9/11 GI Bill, they must have transferred their benefits to family members -- thereby having no GI Bill eligibility for themselves);
* Not be VA rated as totally disabled due to unemployability;
* Not be enrolled in any other federal or state employment programs; or
* Not be in receipt of any unemployment or CARES Act benefits.


[ Continue ]() { button } 

## Title of form

{ if logged in, display info alert }

This is the personal information we have on file for you.

{ end if }

### Applicant information
  
* Your first name (*Required) { text field, prefill if present }
* Your middle name { text field, prefill if present }
* Your last name (*Required) { text field, prefill if present }
* Suffix { dropdown, prefill if present }
* Social Security number (*Required) { text field, prefill if present }
* Your date of birth: { prefill if present } (*Required)
* Gender: { prefilled }

### Contact information

**Phone & email**
* Phone number (* Required) { text field, prefilled if present. } 
* Alternate phone number { text field, prefilled if present }
* Email address (* Required) { text field, prefilled if present. }  


**Mailing address**
{ Address, prefilled if present } 
* Country (* Required) { dropdown, prefilled if present. }
* Street address (* Required) { text field, prefilled if present. }
* Street address line 2 { text field, prefilled if present. }
* Street address line 3 { text field, prefilled if present. }
* City (* Required) { text field, prefilled if present. } 
* State (* Required) { if USA, dropdown, prefilled if present }
* Postal code (* Required) { if USA, text field, prefilled if present }

#### Direct deposit information { Use the new & improved DD pattern on VA.gov - I think it's from STEM }

{ If bank account is on file }

This is the bank account information we have on file for you. We’ll pay your housing stipend to this account.

**Payment information**

**Checking Account** { prefill if present } 

* Bank routing number: ∙∙∙∙00000 { prefill if present, masked with last 4 digits visible if prefill or if new data is saved. }
* Account number: ∙∙∙∙00000 { prefill if present, masked with last 4 digits visible if prefill or if new data is saved. }

[ Update Account ] { button }

{ Success alert for users who click Update Account, make any changes, then click Save }

Thank you for providing your direct deposit information. **This new account won’t be updated right away.** We'll deposit your housing stipend into this account if your VET TEC application is approved.

{ End alert message } 

{ End if bank account on file }

{ Else (no bank account on file) }

We don’t have your bank information on file. Please provide your direct deposit information below. We’ll pay your housing stipend to this account.

**Update bank account**
* Account type { pre-fill: radio, Checking, Savings }
*	Bank routing number (9 digits at the lower left of your check). { text field, prefill if present. }
*	Account number { text field, prefill if present. }

[ Save ] { button }


**Note:** Any updates you make here to your bank account information will apply to your other Veteran benefits, including compensation, pension, and education. Updates here won’t change accounts on file for your VA health benefits.

{ help-link } What if I don’t have a bank account?  { end help-link }

{ help-text} 

The Department of Treasury requires all federal benefit payments be made by electronic funds transfer (EFT), also called direct deposit. 

If you don’t have a bank account, or don’t wish to provide your bank account information, you must receive your payment through Direct Express Debit MasterCard. To request a Direct Express Debit MasterCard, apply at [www.usdirectexpress.com]() or call [1-800-333-1795](). 

If you choose not to enroll, you’ll need to call the Department of Treasury at [1-888-224-2950]() and speak to a representative handling waiver requests. They’ll encourage you to participate in EFT and address any questions or concerns you have.

{ collapse help content link }

{ end help-text}

### Confirm you're eligible for VRRAP

{ note - eligibility requirements to come from Education & needs to be refined w/ DEPO }
To be eligible for VRRAP, Veterans must:

* Be between ages 22-66;
* Be unemployed as a result of the COVID-19 pandemic;
* Not be eligible for any federal GI Bill program (if eligible for the Post-9/11 GI Bill, they must have transferred their benefits to family members -- thereby having no GI Bill eligibility for themselves);
* Not be VA rated as totally disabled due to unemployability;
* Not be enrolled in any other federal or state employment programs;  
* Not be in receipt of any unemployment or CARES Act benefits.


Yes, I meet all of the eligibility criteria  and want to apply for this benefit { checkbox - use language from STEM or VET TEC for attestation }


[ Submit form ]() { button } 
 
## Confirmation page

Thanks, we have your application.  Content to come.  
