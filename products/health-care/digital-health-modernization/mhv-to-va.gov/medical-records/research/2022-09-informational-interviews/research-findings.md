# In progress - Do not use yet

# Medical Records Discovery Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Health Apartment, Medical Records**

Date: 10/3/2022

Coulton Bunney [coulton.bunney@va.gov], Jenny Wang [yizhen.wang@va.gov]

[See the the report here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/f2249c2985724717a928bbe3013e57df5644c2e1/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-09-informational-interviews/research-report.pdf) 

## Research Goals

The Health Apartment team has been tasked with moving MHV onto VA.gov, improving its functionality in a Veteran-centered way, and to deliver a seamless UX whether a patient goes to a VistA or Cerner facility. Within MHV, there are four primary pieces of functionality: appointments, secure messaging, accessing your medical records, and pharmacy. The following research plan seeks to lay the foundation for successfully redesigning and migrating the medical records functionality in MHV.

For a Veteran to properly manage their health, they must understand their health. Medical records are a key component in doing so, providing a record of current and past health issues. Veterans also use medical records to ensure continuity of care when seeing non-VA providers and leverage medical records for evidence when filing disability claims.

The purpose of this research was

- To understand what data exists in MHV medical records and the technical constraints of that data.

- To understand the policies, laws, and product history that influence MHV medical records.

- To understand known usability issues with medical records and garner preliminary ideas for ways to improve them.\

## Research Questions

**Data:**

- Where do the Health Summary and Blue Button sections of MHV pull data from? What mechanism do they use?

- How can the VA Health Summary and Blue Button sections be combined? Should they be combined?

**Policies and laws:**

- What are the policies and laws that pertain to medical records?

- In what ways do laws and policies affect what is included in a medical record and how it must be accessed?

**Product history:**

- Why problems were medical records (Blue Button and VA Health Summary) designed to solve?

- Why are medical records designed to primarily be downloaded and then viewed, rather than viewed in browser?

**Usability:**

- What information in medical records do users access most frequently? What is their primary mode of access?

- What parts of medical records cause Veterans the most frustration?

## Key Findings

### Data

**Finding 1:** There are roughly 13 categories (aka domains) of data included as part of medical records today. A few examples of categories are clinical notes, allergies, and immunizations. Each category's data is pulled individually and possibly from different databases.

**Finding 2:** By VHA policy, some data is not released to patients as soon as it is available.

- Data from six domains are held for 36 hours after becoming available 

- Some records must be "signed" before releasing to a patient, such as progress notes

There may be more policies that apply to records release.

**Finding 3:** We should conduct further technical discovery into which sources of medical records data will best meet the needs of modernized medical records applications in VA.gov. Options uncovered include: (1) PHR Manager, MHV's current API; (2) Lighthouse's Health APIs, (3) Cerner. There are advantages and disadvantages to each. It will be critically important to ensure that Veterans will see the same content regardless of which interface they use (VA.gov web, flagship mobile, MHV, Apple Health, etc.)

### Laws and policies

**Finding 4:** We were unable to locate any laws that strictly define what is required to be included as part of a medical record. Laws are primarily focused on keeping PHI safe and secure, and ensuring a patient's access to their own data.

**Finding 5:** Because VA policy states that patients own data they have requested and been provided, we must ensure that users retain access to all of the data that lives in their MHV eVault, during and after the transition from MHV to VA.gov.

**Finding 6:** The only policy we located that placed requirements on data display was VHA Directive 1164, which outlines "Essential Medication Information Standards."

### Product history

**Finding 7:** Blue Button, VA Health Summary, and VA Medical Images and Reports are the primary ways to access medical records. They are similar on the surface but were designed for very different purposes. Blue Button Reports are meant to serve as a way for patients to download and own their complete medical record. VA Health Summary is an HL7 based Clinical Care Document (CCD) that was meant to be shared electronically with non-VA providers. VA Medical Images and Reports were designed to specifically give access to both written reports of prior imaging procedures and the associated actual DICOM image files. 

**Finding 8:**  Blue Button is not a VA specific branding choice. It is a government-wide initiative to allow citizens easy access and ownership of their personal health information. We did not find any mandate that says we must maintain the Blue Button branding moving forward. We should continue to evaluate how Veterans identify with this brand, and how we can make it clear to them what Blue Button means.

### Medical records usability

**Finding 9:** MHV does not provide an easy way to find or view individual pieces of medical records data, such as a single lab report or progress note.

**Finding 10:** There are three ways to share medical records with an outside provider in MHV: printing and sharing by hand, sending via direct message, or opting into the Veteran's Health Information Exchange (VHIE). Each method has significant usability issues, and it is also not clear to users which method to use when. 

**Finding 11:** Based on analytics, the most frequently requested data from Blue Button are progress notes, followed by labs, appointments and prescriptions. Whether a user views information in browser or downloads it is dependent on whether they use Blue Button, VA Health Summary, or VA Medical Images and Reports.
