### Call 3/12/19

**Question: What does eBenefits do re: PPIU that is production ready? Comp and Pen uses a different system than the GI Bill. What systems are used for Comp and Pen?**

- They dont use PPIU. That was a service created for Vets.gov. They are using other services in something called "Common Services."
- One of the things the DSVA team and Naranjan used was to take the Common Services bucket that supported eBenefits and taking out individual services as needed to support Vets/VA.gov. PPIU was derived from the Common Services component that supported eBenefits.
- PPIU may not be production ready in some regards, but what eBenefits uses now is production ready.

**What is Common services doing vs. PPIU?**

- Mike will have to research but Naranjan might know.

**Why is PPIU's update method not production ready?**

- Not sure. Check with Naranjan. May not have been tested yet. Doesn't think it's because code is broken or not ready. Thinks it's more likely because there wasn't yet a consumer of the code.

**Confirm: PPIU should be used outside of eBenfits?**

- PPIU and PCIU were both created for Vets.gov. 
- PPIU is payment related; PCIU is contact info related.

**GI Bill info: What is powering this?**

- Doesn't look like we have a dedicated Chapter 33 service.
- Common services is available for us to consume, but this should be at the bottom of the list for us because it is a huge conglomereation of services and it hasn't been (and sounds like it is unlikely to be) reengineered for the cloud.

**What is the advantage of a microsystem?**

- Maintainability. Common Services is a huge beast and is not sustainment friendly.
- Framework Common Services is built on is old and is not [something] compliant.
- Microservices are easier to maintain going forward.

**Common Services — Java system?**

- Yes.

**PPIU can be difficult to work with re: routing numbers. Any thoughts on this or how a consumer should work with this validation?**

- Some are blacklisted due to fraud, but they are unsure on how this is done.
- **Nick Anderson** is the person to talk to about this.
- Something about blacklisted numbers not able to be changed online and people have to call.

**Any recommendations for VA.gov team trying to implement payment info?**

- This is one of the biggest areas of fraud so go about it carefully.
- One thing they hope to come from this is that we implement 2FA.
- Education doesn't use corportate (common?) services like Comp & Pen does. 
- Fraud is primarily with C&P payments.
- Want to integrate direct deposit info with Vet360 (payment address).
  - This is on Vet360 roadmap but they haven't started. They are still gathering requirements.
  - Plan should be that we integrate with Vet360 instead of CorpDB.
  - Other people in VA may need to use payment address information.
  - Plan: Incorporate CorpDB payment info first. Incorporate Education benefits payment info into CorpDB to use the same info as Comp & Pen.
  - Nick's summary: Eventually there will be one set of account/address info for direct deposit.
- Education benefits will be the most impacted. It sounds like it will be consolidated with Comp & Pen info, and they are not sure they can or should keep it up on eBenefits as this happens. This info is then planned to be integrated with Vet360.
- Mitigating fraud: Email notifications have helped to keep veterans aware of changes to their account info.

**Any value in building off of PPIU or should we wait for Vet360?**

- Vet360 is currently doing work for Cerner merger. Need to check where payment info is in the roadmap and to see if it is set to be completed in the fiscal year.
- Payment info can currently go to fiduciaries as well, and right now, we only let veterans log in.
- Veterans can not change info for fiduciaries.
- For Vet360, mailing address has the same restrictions so Vet360 doesn't share that info Vet360 < > CorpDB.

**Payment account info – is that next up for Vet360?**

- One of many. Was set to come up faster but then got pushed back because of Cerner.
- May need to work with EVSS/PPIU and not wait for Vet360 because of high priority and fraud issues.
  - This may be more doable for Comp & Pen, but Nick feels less comfortable with bringing over Education benefits info because it uses Common Services. Mike suggests we talk to Naranjan about this to confirm this assumption.
