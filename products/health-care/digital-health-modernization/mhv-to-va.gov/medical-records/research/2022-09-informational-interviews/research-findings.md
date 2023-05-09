# Medical Records Discovery Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Health Apartment, Medical Records**

Date: 10/3/2022

Coulton Bunney [coulton.bunney@va.gov], Jenny Wang [yizhen.wang@va.gov]

[See the the report here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/f2249c2985724717a928bbe3013e57df5644c2e1/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-09-informational-interviews/research-report.pdf) 

## Table of contents
- [Research goals](#research-goals)
- [Research questions](#research-questions)
- [Key findings](#key-findings)
- [Detailed key findings](#details-of-findings)
- [Additional insights](#additional-insights)
- [Recommendations](#recommendations)
- [Appendix](#appendix)

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

## Details of Findings

### Data

#### Finding 1: There are roughly 13 categories (aka domains) of data included as part of medical records today. A few examples of categories are clinical notes, allergies, and immunizations. Each category's data is pulled individually and possibly from different databases.

Nearly everyone we talked with defined medical records recursively. What is included in the Blue Button report was the most common answer we received. When asked whether patient generated health data was also part of the record most folks said no. PGHD was only considered part of the health record once a provider viewed it and then entered it back into VistA themselves, which would then be available via VA specific categories of Blue Button.

We explored what categories of data are available in Blue Button today, from where they are pulled ([Table 1](https://dvagov-my.sharepoint.com/personal/coulton_bunney_va_gov/Documents/Desktop/Updated%20Medical%20Records%20Discovery%20Findings%20.docx#table1)), and whether data for each domain is available via Lighthouse APIs ([Table 2](https://dvagov-my.sharepoint.com/personal/coulton_bunney_va_gov/Documents/Desktop/Updated%20Medical%20Records%20Discovery%20Findings%20.docx#table2)).

Supporting quotes:

- What was originally included in BB was determined by "a VA group...I don't know what they are called.... I think it is a PHR group of VA doctors and staff that decided on that. Probably based on some other data gathered outside of the VA -- maybe some other big healthcare providers; based off of what was available in CPRS and then again what of that data is important to Veterans and what is useful to outside providers."

Supporting information:

- <https://www.myhealth.va.gov/the-va-blue-button-my-download-request-screen>


#### Finding 2: By VHA policy, some data is not released to patients as soon as it is available. Data from six categories is held for 36 hours after it becomes available and some records must be "signed" before releasing to a patient, such as progress notes

The following data categories are held for 36 hours before being released to a patient.

- Lab results
- Pathology reports
- Radiology reports
- VA Problem List
- VA Notes
- VA Admission & Discharge Summaries

This 36-hour hold was put in place to give clinicians time to call patients to discuss results, especially those that are abnormal. The 36 hours timer begins once data has been entered into the record.

In addition to the 36-hour hold, most records must be signed by a clinician, essentially acknowledging that they have seen the record, before it is released to a patient. Signing a record generates a timestamp for the record.

Supporting quotes:

- "There are quality checks, and we have to check if some things are signed before we can release it to the Veteran. CCDA has similar rules; they use the same criteria because they don't want results from two different interfaces."
- "The primary filter is essentially to say whether they sign the record. Once they sign it, they put a time stamp on it, and it can be release. The majority of records get signed; it is very rare that something doesn't get signed, in which case it is probably a glitch. Some records might say that a record is pending but not available yet. Signature date is the most important one."
- "They all have special rules, but we don't necessarily know what they are. If it is a highly classified account, that data may get filtered before it comes back to us."

Supporting information:

- <https://www.myhealth.va.gov/mhv-portal-web/blue-button-availability>.
- <https://www.navao.org/wp-content/uploads/2020/07/Operational-Memo-2020-06-32-Changes_to_My_HealtheVet_VA_Blue_Button_Data_Hold_Period.pdf>

#### Finding 3: We should conduct further technical discovery into which sources of medical records data will best meet the needs of modernized medical records applications in VA.gov. Options uncovered include: (1) PHR Manager, MHV's current API; (2) Lighthouse's Health APIs, (3) Cerner. There are advantages and disadvantages to each. It will be critically important to ensure that Veterans will see the same content regardless of which interface they use (VA.gov web, flagship mobile, MHV, Apple Health, etc.)

##### PHR Manager:

PHR Manager is the name of the API that MHV uses to retrieve a patient's medical record data. It was built by Bylight specifically for MHV and pulls data from a variety of sources maintained by teams across the VA. After speaking with technical staff from MHV, we discovered many advantages and disadvantages.

Pros:
* PHR manager is already in use today. 
* PHR includes logic that filters out data that does not meet the 36 hour hold policy and filters out unsigned pieces of data.
* The Bylight team has in-house expertise using PHR Manager.

Cons: 
* PHR manager is not well documented.  The only documentation we located was a System Design Document.
* PHR does not currently have access to Cerner data, and there are no current plans drawn up to integrate it once access is given. Mapping Cerner data (or vice-versa) so that it is represented in the same way as Vista data may be a challenge because PHR does not represent Vista data in a standardized way today. 
* Fetching data via PHR can be slow. In some cases, it can take 30+ seconds to get a single domain of data. 
* PHR pulls data on users’ request, except in the case of notify events (which primarily includes medication changes or updates). In practice, this means that when I log into MHV today, the data I am presented with is from the last time I manually refreshed.

Supporting quotes: 
* "Everyone in Digital Services asks me for documentation. I came in on the Business in 2011. I worked on the IT level since 2003. At one time it existed, but I haven’t a clue where it is now, because there have been so many changes in repositories. I have no idea where anything is in 2022, but I do know that it existed one point."
* “Expecting to have real time results on a browser (which would be the dream) isn’t reasonable or possible because the systems don’t have the ability to scale to that level. Some networks could take 30+ seconds.”
* “PHR manager, which pulls data from various sources, has a lot of built-in logic for dealing with legacy data.”

##### Lighthouse APIs:

Lighthouse APIs are built and maintained by the product engineering group in OIT. The Lighthouse Health APIs were originally built to allow patients to add their VA medical record to Apple Health. There are two Lighthouse Health APIs that are relevant to us: Patient Health API and Clinical Health API. The Patient Health API pulls from the Corporate Data Warehouse (CDW) and is accessible to external parties. The Clinical Health API pulls directly from VistA sources. The Clinical Health API is more similar to how PHR Manager works. After speaking with technical staff from Lighthouse and reviewing developer.va.gov, we discovered many advantages and disadvantages.

Pros:
* Lighthouse APIs are well documented
* There is a plan in place to make Cerner data available via Lighthouse APIs as soon as access is given.
* Lighthouse Health APIs use [HL7's Fast Healthcare Interoperability Resources (FHIR) framework](https://www.hl7.org/fhir/overview.html) for providing healthcare data in a standardized format.
* Clinical Health API is not subject to the same 24-36 hour delay that Patient Health API is, because it pulls data directly from Vista sources, rather than CDW.

Cons: 
* Lighthouse APIs may only have access to up to 10 years’ worth of patient data.
* Lighthouse APIs don’t have all categories of data that are currently available in MHV. See Figure 2. 
* There is 24 to 36 hours delay for all data in CDW, which the Patient Health API pulls from. 
* Patient Health API has not been tested by the load of MHV (though has been tested by the load of Apple Health).
* Bylight has not previously worked with Lighthouse APIs.
* Lighthouse APIs may not have built-in logic for dealing with legacy data.

Supporting quotes:
- "I think weeks, a month or two for getting both Vista and Cerner data in the Patient Health API [once access is available]. We had roadblocks. [Cerner] just got paid, millennium API is being built."
- "[Some teams think they can] just go to CDW and get your information from there. Then they have to ask if the data was cleansed; if the answer is no, then don't touch CDW because then you would run into the problem that a lot of apps are in right now."

Supporting information:
- <https://developer.va.gov/explore/health>

### Laws and policy

#### Finding 4: We were unable to locate any laws that strictly define what is required to be included as part of a medical record. Laws are primarily focused on keeping PHI safe and secure, and ensuring a patient's access to their own data.

During our conversations, we uncovered four laws that apply to VA patients' medical records. We attempted to understand how each of these laws affects our work.

- [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html#:~:text=The%20HIPAA%20Privacy%20Rule&text=The%20Rule%20requires%20appropriate%20safeguards,information%20without%20an%20individual's%20authorization.)
  - We must keep a patient's protected health information (PHI) private and secure.
  - A patient has a right to access all information that is used to treat them or bill them. This is referred to as right to access.
  - A provider (in our case, the VA) is permitted to disclose PHI to the individual that it pertains to. This is referred to as a HIPAA disclosure.
- [Privacy Act of 1974](https://www.hhs.gov/foia/privacy/index.html)
  - Federal agencies must protect records about individuals retrieved by personal identifiers.
  - Individuals have a right to request access to and correction of records about them.
- [38 USC 7332](https://www.law.cornell.edu/uscode/text/38/7332)
  - Information that relates to drug or alcohol abuse, HIV, or sickle-cell anemia should be restricted to the patient, and those they have given explicit permission to.
- [38 USC 5701](https://www.law.cornell.edu/uscode/text/38/5701)
  - Records and files maintained by VA on Veterans and beneficiaries, including medical records, are generally confidential, and VA may not disclose or release these materials except as provided by law.

The laws do not state how we must keep track of right of access requests nor HIPAA disclosures. However, because the VA interprets right of access requests as needing to be written, we must track electronic requests in a log to satisfy the "written" requirement.

Supporting quotes:

- "We track the right of access because our regulations and statute require a written request. If you want a copy, you HAVE to make a written request. That can be electronic, like the button we offer. It has to be written in such a way. That is why it is tracked."


#### Finding 5: Because VA policy states that patients own data they have requested and been provided, we must ensure that users retain access to all of the data that lives in their MHV eVault, during and after the transition from MHV to VA.gov.

- As outlined in HIPAA and the Privacy Act, Veterans have a right to access their data.
- As outlined in VHA Directive 1605.01, Veterans are entitled to their data within 20 days of making a request.
- Once a patient receives data they have requested, either via Blue Button, Health Summary, or some other method, they own that data.
- MHV's eVault serves as a VA provided way for Veterans to store data they have requested and now own. Removing access to this data is akin to seizing a private citizen's property, which is illegal.

Supporting sections of Directive 1605.01:

- "Electronic requests received through VA information technology (IT) software and applications, such as My HealtheVet and Mobile Applications, will be accepted and processed automatically within the software or application requiring no action by the System Manager for the VHA system of records in which the records are maintained, the facility Privacy Officer, or the designee of either position."
- "VHA health care facilities must process all requests for review or copies of individually-identifiable information within 20 working days (excluding weekends and Federal holidays) of receipt of the request, whenever possible. If the right of access request cannot be processed within the 20 working day time frame, an acknowledgment letter of the request to the requester must be sent within the same 20 working days."
- "A right of access request for a record may be denied in very limited circumstances. When a right of access request to a record is denied, the System Manager for the VHA system of records in which the record is maintained, the facility Privacy Officer, or the designee of either position, must promptly prepare a notification to the individual of the decision. This notification must:"
- "Electronic requests received through VA information technology (IT) software and applications, such as My HealtheVet and Mobile Applications, will be accepted and processed automatically within the software or application requiring no action by the System Manager for the VHA system of records in which the records are maintained, the facility Privacy Officer, or the designee of either position."

Supporting quotes:

- "Whatever they see in MHV, it is THEIR copy that they can do whatever they want with."
- "No different than if they walked in and handed us a piece of paper. Nothing that is stored in the portal is OUR data. They can give us a copy and we can give them a copy. Any release of their data from blue button, etc. -- it is theirs."
- "I think the biggest thing is realizing that everything in MHV -- the data that is there, not the administrative data for the account -- everything is owned by the Veteran. In the transition to my VA health, they tried to take their data away. Think of the Evault as your iCloud space. And think of apple taking it away. It is unlawful seizure of property if we take it away. They thought they could take away the data in the transition. The Veteran is viewing our record and database real time. MHV was set up like I cloud -- we are giving you space on a server with your data. That is property. The fed government can't take your property. OGC said you can't do that. The fed gov can appropriate citizens property. That is why these things are still very separate."

#### Finding 6: VHA Directive 1164 places specific requirements on the review, management, and communication of medication information with patients, caregivers, and their health care teams.

The only policy we located that placed requirements on data display was VHA Directive 1164, which outlines "Essential Medication Information Standards."

Appendix A of VHA Directive 1164 outlines essential medication information content. Appendix B of VHA Directive 1164 outlines pharmacy data file structure Appendix C of VHA Directive 1164 outlines medication information display standards.

Supporting information:

- <https://www.va.gov/vhapublications/ViewPublication.asp?pub_ID=3119>
- [Appendices and Guidance (Soon to be Program Guides)](https://dvagov.sharepoint.com/:f:/r/sites/VHAMedRecon/Essential%20Medication%20Information%20Standards%20Directi/VHA%20Directive%201164/Appendices%20and%20Guidance%20(Soon%20to%20be%20Program%20Guides)?csf=1&web=1&e=U2JwMO)

### Product history

#### Finding 7: Blue Button, VA Health Summary, and VA Medical Images and Reports are the primary ways to access medical records. While they are perceived to be similar, they were designed for different purposes.

Blue Button Reports are meant to serve as a way for patients to download and own their complete medical record. The goal of Blue Button is to get as much data to patients as quickly as possible. How the data is made available was of secondary concern. In practice, a user can request their medical data from Blue Button by specifying a date range and which combination of data categories they are interested in. BB requests are processed asynchronously, with the requested data returned as a PDF or txt file. This file can be downloaded or viewed in browser. We were unable to find a way to access previously requested Blue Button reports via the MHV interface.

VA Health Summary is an HL7 based Clinical Care Document (CCD) that was meant to be shared electronically with non-VA providers. The goal of VA Health Summary is to allow users to share a VA specified summary of their medical record to non-VA providers. Upon navigating to the VA Health Summary page, a user is presented with their current VA Health Summary as of the last time they logged in and their previous VA Health Summary. They can "update" these summaries asynchronously and "refresh" the page when new summaries are available. An MHV Health Summary is a CCD document that can be viewed in a new tab as an html file, downloaded as a PDF, downloaded as an XML file, or sent via Direct Message to a participating provider. We learned that the functionality to send via Direct Message was built before EHRs had been widely adopted and even after they had, there was limited participation by non-VA providers. From a study an interviewee conducted, most patients don't know about Health Summary and how they can benefit from it.

The goal of VA Medical Images and Reports is to give users access to both written reports and the actual image files for Radiology procedures. Upon navigating to the VA Medical Images and Reports page, a user can see a list of their Radiology procedures. For each, they can immediately view a PDF version of written reports, request the DICOM image files, and after requesting and waiting for the file to be fetched, download that file. It was not clear from research why this has been separated out from other sections, other than the fact that DICOM images are massive files that should not be regularly fetched.

Supporting quotes:

- "BB movement [is the] quick and dirty way to get data to Veterans. Lots of data is EHR."
- "CCDA [VA Health Summary] can be exchanged with external provider. If you're exchanging what's in the records, it's just a summary.... CCDA was a way to standardize and to share external through Direct."
- "One way we expose Veterans health information to them is through health summary standard, which uses a standardized style sheet from the health information exchange team to display that data."
- "I wouldn't say they are not interested in VA Health Summary. They didn't see the importance and grasp the idea of CCDA. It's a new concept."

Supporting information:

- <https://www.myhealth.va.gov/learn-more-bb>
- <https://www.myhealth.va.gov/health-summary-va-ccd-learn-more>
- <https://www.myhealth.va.gov/va-medical-images-reports-learn-more>

#### Finding 8: The branding of Blue Button is not a VA specific choice. It is rather a government-wide initiative to allow citizens easy access and ownership of their personal health information. We did not find any mandate that says we must maintain the Blue Button branding moving forward. We should continue to evaluate how Veterans identify with this brand, and how we can make it clear to them what Blue Button means.

Supporting quotes:

- "Blue Button's name might not mean anything now, but it did back then."
- "Blue Button is a government wide initiative, not a VA specific one."
- "I think there should be some context like share my data above the Blue Button logo."

Supporting information:

- <https://www.va.gov/bluebutton/>
- <https://www.healthit.gov/topic/health-it-initiatives/blue-button>
- <https://bluebutton.cms.gov/>

### Medical records usability

#### Finding 9: MHV does not provide an easy way to find or view *individual* pieces of medical records data, such as a single lab report or progress note.

MHV was designed to request your medical record data from a specific time period, not to browse for and view individual pieces of information.

Based on conversations with internal staff, users say that

1. Finding and viewing specific data in MHV is difficult
   - Veterans are unable to *easily* browse, find, and review individual pieces of data they may be interested in, such as a specific progress note or recent lab result.
   - Users can't easily search and find specific data for their needs. Instead, they must request data, open what they requested, see if they find what they are looking for, rinse and repeat. The only true search in MHV today is command-F in a PDF. 
   - Veterans must continually log in and check whether new data is available in their medical record.
   - Veterans can't easily view a web native version of their medical record, rather they are pushed to download or view a PDF version in browser

1. Veterans are sometimes confused as to what to find where, as are the SMEs we spoke with. Much of this is due to unclear navigation and terminology.
   - Veterans are confused about the differences between Blue Button and VA Health Summary
   - Blue Button, VA Health Summary, and VA Medical Images and Reports are located under Personal Information > Download My Data.
   - There is a way to view individual lab results, but it is located under Track My Health > Labs & Tests. The Track My Health section primarily houses the ability to enter PGHD.

Supporting quotes:

- "If Veterans want to know about one medication, they have to print out a list of all their medications."
- "Veterans hope to find anything that will justify their claim, so they need to see every detail."
- "We need to find a solution for letting Veterans see their record "live" before downloading and learning that it doesn't contain the information they need.

#### Finding 10: There are three ways to share medical records with an outside provider in MHV: printing and sharing by hand, sending via direct message, or opting into the Veteran's Health Information Exchange (VHIE). Each method has significant usability issues, and it is also not clear to users which method to use when.

A user can share their record in three ways.

1. They can print out a Blue Button Report or VA Health Summary and hand deliver it to the interested party.
2. They can share their VA Health Summary via Direct Message to a participating provider.
3. They can opt into the Veterans Health Information Exchange (VHIE). Participating providers can pull a user's information from VHIE.

However, each of these methods can be frustrating or confusing.

- Blue Button reports and VA Health Summary often reach in the tens of pages. Printing this amount of information is inconvenient and expensive. 
- Users must provide the direct message address they would like to share their VA Health Summary to. Obtaining a direct message address can be confusing and not all providers can provide one.
- Understanding what it means to opt into a HIE is complex to explain, and it is not easy to understand if the non-VA provider you are seeing has access to the VHIE.

There is also no way today to share your medical record directly to other parts of the VA, such as when filing a disability claim.

Supporting quotes:
- "When patients download the whole Blue Button Report, [the patient must] deliver it to someone who's going to help with disability claim."
- "At the time, we created it, that wasn't enough people using direct exchange. [...]the country wasn't ready for it. What I [would] like va.gov to do [is], "I want to share my data summary", click button, and I can exchange CCDA through direct. [or] I'd like VA to share, it would go to the VA health exchange to send it. I send it *or* VA sends it."

#### Finding 11: Based on analytics, the most frequently requested data from Blue Button are progress notes, followed by labs, appointments and prescriptions. Whether a user views information in browser or downloads it is dependent on whether they use Blue Button, VA Health Summary, or VA Medical Images and Reports.

Users are more likely to download a Blue Button Report to view offline and to view their VA Health Summary in browser via an .html file that can be opened in a new browser tab outside of MHV. Radiology reports are also widely consulted, but radiology images are seldom requested.

We received data from MHV data analytics team for the usage data of VA Blue Button, Health Summary and VA Images. Highlights include,

- The top category of information requested via Blue Button is Progress Notes. 
- Users are more likely to download a Blue Button Report than view it in browser. This aligns with what our interviewees said. (Figure 4)
- Users are more to view their VA Health Summary in browser via the generated .html file. 
- Radiology reports are also widely consulted, but radiology images are seldom requested.
- Blue Button has far more users (5x+) than VA Health Summary and VA Images.

Supporting quotes:
- "The concept of download and view the comprehensive record indexes much higher at VA than it would elsewhere."
- "Download comprehensive record is a much-needed feature for Veterans. They print and take it to apply different services."

## Additional insights

**Medical records use cases**

Based on our conversations, Veterans primarily use medical records

1. To stay updated, on top of, and involved in their health. This includes reviewing what happened during their last visit, reviewing testing results, and finding specific pieces of data. 
2. To gather evidence to support VA claims, most importantly disability claims.
3. Because up to 50% of VA health care enrollees receive care from non-VA facilities, they need to share their health record with these providers for continuity of care.

**Medications/Pharmacy**

Self-entered medication data is quite important, especially for maintaining an accurate medication list. Currently, there is no consistent way to have comprehensive medication information across all providers.

- "Medication list should connect to secure messaging, refill and other actions that patients likely to take after viewing medication."*
- "Blue Button is the source for any historical medication information, since it falls off the medication list after 180 days of inactivity."*

**Possible Challenges with Pulling Data**

Data is pulled from all over the place, and each source has varying level of data cleansing. In some cases, data that is returned needs organization and standardization so that data is not lost and can be used in a meaningful way.

- "Data is pulling from everywhere. We need to make sense of the data structure first and see if we can pull any insights from that."
- "[Some teams think they can] just go to CDW and get your information from there. Then they have to ask if the data was cleansed; if the answer is no, then don't touch CDW because then you would run into the problem that a lot of apps are in right now."

**Blue Button Report generation**

* "BB reports may be generated by calling stored procedures, rather than returned via an API. This may present issues when it comes to surfacing the included data in new ways."

**Records schedule**

Information requests must be maintained for a variable amount of time, from 90 days to 6 years depending on the type of request. (Record Control Schedule 10-1, section 1006)

A patient's electronic health records must be maintained for 75 years after the last episode of care. (Record Control Schedule 10-1, section 6000.2)

Supporting information:
- <https://www.va.gov/vhapublications/rcs10/rcs10-1.pdf>

## Recommendations

### Recommendation 1.1: Design and develop medical records category by category.

Medical records are not a monolith and our research provides evidence that they should not be treated as such. Working on medical records category by category will allow us to give each type of data the attention it requires to do a good job. Taking a category by category approach will also allow teams to show consistent progress over time in an agile fashion.

Suggested sequence

1. Can learn from VA Mobile
   - Immunizations
2. 36 hour hold categories
   - Lab results
   - Pathology reports
   - Radiology reports
   - VA Problem List
   - VA Notes
   - VA Admission & Discharge Summaries
3. Work with other VA teams
  - VA Demographics (VA Profile)
  - DoD Military Service Information (DoD teams)
  - Appointment history (VA Mobile)
4. Coordinate with MHV Pharmacy team
  - Allergies
  - Medication history
5. Remaining
   - Vitals

Next steps:

- Define the sequence by which we will work on the 13 categories of data.
- Assign both designer and developer to work on the first data category together. Design should not get too far ahead of development to ensure all API and data issues are identified proactively.
- Repeat for the remaining categories.

_Associated findings: 1, 2, 6, 11_

### Recommendation 1.2: To determine which set of APIs to use, conduct technical discovery to determine which can best support our use cases both in the short term (without Cerner data) and long term (with Cerner data).

One of the most important decisions we will make is how we will fetch data for medical records. Making an informed decision now will help accelerate our work in the future by creating a smoother path to integration with Cerner and delivering a more responsive user experience.

Important questions to be answered:

- Does the API return a user's medical record data on a category-by-category basis?
- Users are entitled to their medical data, regardless of its age. Therefore, does the API return data dating back to the start of a user's record?
- Does the API allow us to build HTML native "View" functionality of individual pieces of data, rather than just asynchronously downloading a PDF of it?
- When will the API integrate Cerner data? Do we have a clear understanding of the new planned architecture, and the work to be done to get us there?
- Does the API allow for notifying users that new data is available, such as new lab results, via VA Notify?
- What is the average response time for each API? Are there clear SLAs defined for response time?
- What is the stability of the API, and are there clear SLAs defined for uptime?

Next step:
- Form a small sprint team of architects and engineers to complete technical discovery. By the end of PI 8 we should have a clearly articulated point of view on which APIs will be used to support medical records functionality.

_Associated findings: 1, 2, 3, 5, 9_

### Recommendation 2.1: Build functionality that enables users to easily view individual records so they can find information without first needing to download it.

Our research provided evidence that finding specific pieces of data is difficult for users. A key part of finding what you are looking for is quickly viewing the results of your search. In MHV today, this requires downloading and opening a PDF, which is anything but quick. Viewing pieces of data quickly will improve users' ability to find what they are looking for, reduce the time it takes to do so, and if done in a web-native way has the potential to improve the accessibility of MHV. Viewing individual pieces of data in a patient record is a modern EHR standard and increasingly, users expect to be able to view their data in a patient portal without first downloading it.

Important questions to be answered:
- What data should be displayed for each data category?
- Can the API support real-time viewing of information? If not, what updates are needed to support this functionality?

Next steps:

- Choose a category to design the view experience for.
- Design the view experience and usability test with Veterans.
- Repeat for remaining categories.

_Associated findings: 7, 9_

### Recommendation 2.2: Reframe Blue Button functionality as "Download your medical record" and downplay Blue Button branding in the information architecture and left navigation in favor of plain language clarity.

Blue Button was designed to give users a path to own their data by downloading it as a PDF or text file. This should be made clearer to users by making Blue Button branding secondary to describing functionality. For example, it should be "Download your medical record, powered by Blue Button" rather than "Blue Button Report. This will also help differentiate this functionality from viewing your record (Rec 2.1) and sharing your record (Rec 2.3).

Next steps:
- Complete designs for this recommendation and Rec 2.3 and usability test with users.

_Associated findings: 7, 8_

### Recommendation 2.3: Reframe the VA Health Summary as "Share your medical record with non-VA providers" and more closely associate it with opting into or out of VHIE.

VA Health Summary was designed to give users a way to directly share their health summary with non-VA providers. Opting into VHIE was designed as a way for users indirectly share their health summary with non-VA providers. Today, this set of functionalities is not associated.

Because the VA Health Summary and opting into VHIE are so related, they should be more clearly associated in the product. Reframing them as two ways to share your record will provide clarity to users. Additionally, the VA Health Summary branding should be downplayed or abandoned to not confuse it with downloading your record (Rec 2.2).

Next steps:
- Complete designs for this recommendation and Rec 2.2 and usability test with users.

_Associated findings: 7, 10_

### Recommendation 2.4: Conduct generative user research with Veterans to better understand how to group medical records information for easy browsing and findability.

Our research provided evidence that finding specific pieces of data is difficult for users. As outlined in Finding 9, some of this is due to confusing IA and navigation. By better understanding how users group information, we can design a clearer IA and navigation structure to reduce the effort it takes to find the information you are looking for. Research for the unreleased Search My Record feature indicates that improving findability was well-received by users.

Some examples of grouping include by category, by visit, and by action items.

Next steps:
- Complete and submit a research plan for the generative research described above

_Associated findings: 7, 9_

### Recommendation 3.1: For each category of medical records, identify and frequently present work to clinical SMEs in that area.

Our research provided evidence that for at least some categories of data, namely medications, there are many details that we must get right in the name of patient safety. While medications were the only category we found that had published guidelines for doing so, we did not definitively rule out the possibility that there were not similar considerations for other categories. Designing with clinical SMEs and then testing with users will help our teams proactively incorporate patient safety concerns into our designs.

Next steps:

- Identify SMEs for each data category.
- Hold an introductory meeting with each SME.
- For each category, hold recurring design critiques with the relevant SME in that area.

_Associated findings: 2_

### Recommendation 3.2: Get sign off on designs from VA privacy team at the beginning and midpoint of each collaboration cycle for medical records.

Our research provided evidence that the primary laws that apply to medical records concern keeping data safe and secure and providing access in a timely manner. To ensure our designs are meeting the requirements set out by these laws, teams should meet with the VA privacy team periodically to get feedback and sign off on our approach.

Next steps:
- Set up an introductory meeting with Peggy Pugh and/or Stephania Griffin.

_Associated findings: 4_

### Recommendation 3.3: Develop a plan for users to maintain access to their historical eVault data on VA.gov.

Our research uncovered the notion that Veterans own data they have requested and been provided. Removing access to this data is akin to illegally seizing a private citizen's property. Therefore, we must develop a plan for users to retain access to the information currently stored in their eVault during and after the transition to VA.gov.

Next steps:
- Conduct technical discovery to understand what is *actually* stored in eVault, and understand what we need to do to ensure that users retain access to the data they own.

_Associated findings: 5_

### Recommendation 4: Integrate medical records with other services provided at the VA, starting with disabilities claims.

During our research, we time and again heard that Veterans use medical records as important information for their disability claims. However, to use this data, they must download PDFs, search through them, and then provide them back to the VA when filing a claim. Given that both services are provided by the VA, we recommend exploring ways to reduce the burden on Veterans to make this connection.

Next steps:
- Conduct generative research with Veterans to understand what data they seek in medical records for disability claims.
- Conduct interviews with disability claims SMEs to understand what data is most useful from medical records for disability claims.

_Associated findings: 10_

## Appendix

### Documents

- [Research plan] <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-09-informational-interviews/research-plan.md>
- [Conversation guide] <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-09-informational-interviews/conversation-guide-data-focus.md>
- [Interview transcripts] <https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/2022-09-discovery-research>
- [Previous medical records research] <https://github.com/department-of-veterans-affairs/va.gov-team/blob/7312c648ff741593535535994cfac64c4cb374ab/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/1-background-research.md>

### Tools used for Synthesis

Mural: [Medical record discovery](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1661955319813?sender=uc3d00e74790ec52e1e689660&key=d09b9b8d-d516-4165-9971-6b64c1b25930)

### Who we talked to
- 6 experts from Bylight, the contractor responsible for building MHV
  - 3 engineers
  - 2 designers
  - 1 product manager
- 1 technical expert from OIT, Lighthouse APIs
- 4 leaders from OCC
  - 2 MHV Business Line Owners
  - 2 Executive Leaders
- 2 privacy experts from VHA Office of Information Access and Privacy
- 3 pharmacy clinical experts
