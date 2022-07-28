# Vision and challenges for medical records 
July 27, 2022

## Vision for medical records
We can apply the vision described in the [product brief for MHV on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/product-brief.md) (a.k.a. the "health apartment") to medical records.

> We aim to reduce the number of websites, products, and interfaces Veterans must use in order to get health care and manage their health — and we aim to make those experiences easy and intuitive. In a single place on VA.gov, Veterans will be able to manage all interactions with VA related to health, plus learn about health conditions and health news. Interactions that cross VA.gov, the VA.gov flagship mobile app, email, text messages, and VA facilities will be seamless.

That is the broad vision for the Veteran health experience. There are aspects of the MHV on VA.gov experience that also need a vision or a strategy:
- **Patient-generated health data:** We've begun conversations about the vision for the UX. (See below.)
- **Health resources:** We need to figure out how to handle health resources, which come from many groups at VA:
  - Health conditions and topics: Danielle Thierry has details on the health condition pilot underway for PTSD. Other sources of health topics are the Veterans Health Library and the "Research Health" section of My HealtheVet.
  - Programs for health and wellness
  - **Track your health information:** This relates directly to records. Our concept for the "Medical records" landing page has a section called "Add and track your health information."

Note that most of health resources don't relate to records directly.

### Philosophy for patient-generated data on MHV on VA.gov
Also known as patient-generated health data (PGHD), this is health data that Veterans either:
- Enter into the VA website through forms (on My HealtheVet today, referred to as "self-entered" data), or
- Upload from a software application or wearable device (the future for MHV on VA.gov)

PGD includes the existing self-entered data apps at [mobile.va.gov](https://mobile.va.gov/), built by the Office of Connected Care (OCC).

VA’s philosophy:
- EHR (Electronic Health Record) data and data from the patient are 2 discrete things that should be managed separately. 
- The EHR needs to contain an organized set of data that providers can use to make decisions.
- PGD should be separate from the EHR. Wearable devices can contain a tremendous amount of data, and this is difficult for providers to parse and leverage. But a provider can decide to enter data a patient gave them into the EHR.

What’s missing: 
- VA needs to address the question of of PGD being part of the comprehensive health record.
- Cerner doesn’t have an approach to dealing with FitBit data (i.e., data from wearable devices).

Cerner is the electronic health record system VA is implementing. Because this system is not integrated with My HealtheVet, Veterans treated at VA facilities must go to a separate (Cerner) website to see their health data. 

### "Subscribe and prescribe" vision for patient-generated data 
This is the vision of the OCC leadership for patient-generated data, articulated by Dr. Neil Evans, Nancy Wilck, and Theresa Hancock.  
- Veterans want a place to record things. They want to share with their providers.
- VA must communicate openly to Veterans about how their data will be used. 
- If we were to prescribe recording health data and using apps to Veterans, we could have culture change. 
- Providers would subscribe to PGD.
- VA would display PGD in a meaningful way to support clinical decisions (ex: Virtual Care Manager software for VA providers). VA is starting to have data in MHV visible to providers in Virtual Care Manager.

Currently on My HealtheVet: 
- Veterans can opt to share self-entered data or not (the data they typed into the My HealtheVet website). 
- Veterans can go into the “vault,” where the data is. Without VA promoting this, ~10K Vets have and are sharing data (unclear of the time period).
- Veterans cannot connect wearable devices and upload the data to My HealtheVet. 
- OCC is working now on how to improve “sync my health data," to make it easier for Veterans to sync and share. They would like to add a data visualization.

Currently in the Office of the CTO: 
- The DHP Team (Digital Health Platform) is working on enabling Veterans to connect their wearable devices to VA.gov so they can share health data with their care team. Stefany Holguin is the product owner. 

Decision needed: 
- VA needs to address the question of PGHD being part of the patient's comprehensive record.

## Challenges
There are a lot of complexities with records because of:
- Veteran health data that comes from DoD (Department of Defense),
- laws and regulations that dictate how certain data displays,
- privacy and security issues, and
- system interoperability issues (ex: Ideally DoD systems would talk to VA systems.) 

These complexities lead to some challenges:
- Understanding the data and data sources
- Figuring out how to condense the output when a Veteran downloads records (i.e., taking out info that's not needed) and comply with regulations and policies
- Communicating and coordinating with many groups at VA [(See this list of partners, stakeholders, and subject-matter experts.)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/team-partners-SMEs.md)
- Understanding how laws and regulations affect the UX
- Learning about and following privacy and security policies (ex: keep health information private)




