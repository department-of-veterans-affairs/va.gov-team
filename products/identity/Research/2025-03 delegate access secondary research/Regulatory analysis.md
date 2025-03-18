# Regulatory analysis #

March 18, 2024

In this document, laws and regulations are discussed specifically as they relate to VA, veterans and representatives.

See also a [list of federal laws related to delegates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2025-03%20delegate%20access%20secondary%20research/delegate%20related%20law%20and%20regs.md)

## What federal/state regulations govern delegation of authority? ##

Federal laws and regulations are mostly focused on privacy, and how different types of delegates can access information

### Privacy laws ###
Privacy laws are especially concerned with how information can and can’t be shared with someone other than the veteran and how that relationship is established.

* Privacy Act of 1974 (5 U.S.C. § 552a).   
  * requires consent by a veteran before the VA can share their personal information  
* HIPPA   
  * sets national standards for health related information  
  * requiring explicit consent by the patient in many cases before PHI may be given to anyone else.  
* 38 U.S. Code § 5701(b)  
  * Considers a veteran’s claim and all supporting documents as confidential  
* 45 CFR § 164  
  * Requires certain safeguards and and information security measures around private and protected information

### Laws around delegates ###
Laws around delegates are especially concerned with licensure and payments of professional delegates. Those with a personal relationship to a veteran are mentioned much less and with much less restrictions 

* 38 U.S. Code § 5701(b)  
  * Allows for claims filings and supporting documentations to be released to a veteran’s representative  
* Privacy Act of 1974, HIPPA, and others  
  * Mention personal agent or representative, acknowledging that in some cases someone other than the patient (or veteran) can have access to information after consent is given  
* 38 C.F.R   
  * includes several sections describing how a veteran’s representative can be appointed for various VA benefits and claims  
* VA Fiduciary Program (38 U.S.C. § 5502, 5506-5510)  
  * Specifically defines fiduciary  
  * Sets up some differences between financial representatives and healthcare representatives   
* 38 U.S. Code § 7332  
  * Allows for disclosure of medical records to representatives when a practitioner deems it necessary for informed consent  
* 38 CFR 1.600–1.603  
  * Establishes policy and procedure around digital access for a delegate  
  * Notably this does not establish a right to electronic access  
* Wounded Warriors Access Act (Public Law 118-21)  
  * Requires a representative to be able to submit an electronic request for records  
  * Notably, it does not require online access for managing care  
* Creating Advanced Streamlined Electronic Services for Constituents (CASES) Act (Public Law 116-50)  
  * Requires agencies to accept electronic forms for records consent

States laws largely mirror federal requirements requiring privacy protections, and allowing delegate status. Similarly at the state level, delegate status sometimes requires opt-in consent by a patient, and sometimes doesn’t, like in the case where a legal proxy or guardianship is already established.  

Some states require training and licences for some medical delegate tasks like giving medication in a caregiving capacity. And some limit the delegate’s access to information with a “minimum necessary” rule.  

Being 50 different states, there is plenty of variation to further consider, but similar to federal level laws and regulations, there may be some electronic submission requirements, but there doesn’t seem to be a requirement for electronic access to managing care.

## Constraints around identity verification, consent, or data access ##

Consent to someone working in a professional capacity comes with some restrictions, like training or even licensure. But consent to someone working in a personal capacity to a veteran seems to be mostly open, other then the need to express in writing, and so most often on a form.

## What are the risks or legal considerations for our implementation? ##
The biggest risks or legal considerations for our team’s implementation seem to be around data privacy and security. The law seems to elevate those requirements over any need for a representative to access information in a digital way.  
We should move forward with a solution that prioritizes the VA’s process of consent, for example filing the required forms before gaining access to any of a veterans information.
