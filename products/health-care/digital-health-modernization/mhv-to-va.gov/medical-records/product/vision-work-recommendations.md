# Vision, work, and recommendations for medical records 
July 27, 2022

## Vision for medical records
We can apply the vision described in the [product brief for MHV on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/product-brief.md) (a.k.a. the "health apartment") to medical records.

> We aim to reduce the number of websites, products, and interfaces Veterans must use in order to get health care and manage their health — and we aim to make those experiences easy and intuitive. In a single place on VA.gov, Veterans will be able to manage all interactions with VA related to health, plus learn about health conditions and health news. Interactions that cross VA.gov, the VA.gov flagship mobile app, email, text messages, and VA facilities will be seamless.

That is the broad vision for the Veteran health experience. There are aspects of the experience that also need a vision, and we've begun conversations about things like patient-generated health data. 

Note that there are a lot of complexities with records because of:
- Veteran health data that comes from DoD (Department of Defense),
- privacy and security issues, and
- system interoperability issues (ex: Ideally DoD systems would talk to VA systems.) 

### Philosophy for patient-generated data on MHV on VA.gov
Also known as patient-generated health data (PGHD), this is health data that Veterans either:
- Enter into the VA website through forms (on My HealtheVet today), or
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

Decision needed: 
- VA needs to address the question of PGHD being part of the patient's comprehensive record.

## Where we are with records analysis
**1) We've met with these partners, stakeholders, and subject-matter experts and incorporated learnings from them in Github and Mural:**
- My HealtheVet designers (Arienne Walters, Bobby Bailey) - July 14
- My HealtheVet records section PoCs (Carnetta Scruggs, Bresha Lipscomb) - June 22 [(See notes from this meeting in Mural.)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1654869136822/fd8bebaa98bd723136ea04c71212d888f75f3c83?sender=megpeters0505)
- OCC and OCTO leadership + the OCC senior adviser (Nancy Wilck, Theresa Hancock, Chris Johnston, Lauren Alexanderson, Dr. Neil Evans) - July 18
- "Search my record" (Rich Beaudoin, David/Boomer Rawlins) - July 20

**2) We've gathered screen shots of:**
- the My HealtheVet Records section, and
- Cerner records screens

[See the Mural of My HealtheVet and Cerner records screens.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1658960897509/d517d764e4df567e41585d1c53831cebd17e40af?sender=megpeters0505)

**3) The My HealtheVet Team did analysis and a usability study on "Search my record" in October 2021.**
"Search my record" is a software application that lets you apply filters to your VA medical records. In your results set, each data point (ex: a set of lab results), is a separate item you can click into for details.

After the dark launch of ["Search my record,"](https://www.myhealth.va.gov/mhv-portal-web/search-my-record) the My HealtheVet UCD Team did a research study with Veterans and provided recommendations for usability fixes to the UI. MHV's UCD Team was not involved in the original design and development of "Search my record." In making recommendations, they tried to create a customizable way for Veterans to use records quickly while on the go.

[View the “Search my record” usability findings.](https://xd.adobe.com/view/1ddcbf09-eae3-4d64-89bf-2d9e9d548f38-488f/) 

[Read the doc that outlines the differences between Blue Button Report and "Search my record" by the MHV UCD Team's Arienne Walters and Bobby Bailey.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/Search%20My%20VA%20Health%20Record%20-%20Differences%20from%20Blue%20Button.docx) 










