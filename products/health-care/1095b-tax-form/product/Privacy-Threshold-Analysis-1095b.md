# Privacy Threshold Analysis (PTA)


## Purpose and Scope
The Privacy Threshold Analysis (PTA) is a tool created by the VA Privacy Service and used by Privacy Officers, Information System Owners, Information System Security Officers (ISSOs), and other stakeholders. Based on the information in the PTA, PIA Support determines whether a Privacy Impact Assessment (PIA) is required under the E-Government Act of 2002.
Upon completion of an initial review, the VSP ATO Specialist will forward a copy to the VA PIA Support Mail Group for final review. After the PTA review, the VSP ATO may contact the PM if a PIA may be required.

### TL:DR 
The PTA needs to be completed for any new project or piece of work on VA.gov.  This helps determine what the impact if any there will be on our ATO.   This ensures that your project and work at the VA is compliant with our ATO. The PTA needs to be complete and evaluated before launch.

## COMPLETE QUESTIONS BELOW
1. Status of project:
- [X]  This is a new IT system 
- [ ] This IT system or project has an existing approved PIA

2. Please describe the purpose of the IT system, project or program in layman’s terms so that a non-technical person can understand.
IRS Form 1095-B reports the months a person had qualifying minimum health coverage to the IRS. The VA sends this document to Veterans to show what months they were covered under the VA healthcare system. Our team is digitizing the 1095-B IRS tax form to make it available to Veterans to download on VA.gov. We do not collect any new information from Veterans. We are taking information the Veteran has submitted to the HEC enrollment center, putting it into a document, and allowing the Veteran to download the document upon request.

3. Do you collect, process, or retain Personally Identifiable Information (PII) on any of the following: (check all that apply)

- [X] Veterans or dependents
- [ ] VA Employees
- [ ] VA Contractors
- [ ] Members of the public
- [ ] Volunteers
- [ ] Clinical Trainees
- [ ] None of the Above
*  If yes, please provide a specific description of information that might be collected, processed, or retained such as name, address, email, health information, financial information, biometrics, etc. 
Name, date of birth, SSN, address, months during which they had health care coverage from the VA

> Provide description

5. How will the PII collected be stored ? 
In a S3 bucket in production

4. Do you use or collect Social Security Numbers (SSNs)?
- [X] Yes
- [ ] No 
*  If Yes (Please provide the function of the SSN within the project and the legal authority to use or collect it.)
SSNs are required as part of the IRS 1095-B tax form

5. Does the IT system or project connect, receive, or share Personally Identifiable Information (PII) with another internal organization, IT system, website or application?
- [X] Yes - pulls the data from the HEC enrollment system
- [ ] No 

6. Does the IT system or project connect, receive, or share Personally Identifiable Information (PII) with any other external (Outside of VA) organization, IT system, third-party website or application?
- [ ] Yes
- [X] No 

7.  If information is shared with external (outside of VA) systems, is this sharing covered by an existing information sharing agreement? This could be a Memorandum of Understanding (MOU), Memorandum of Agreement (MOA), Business Associate Agreement (BAA) Letter of Intent (LOI), Information Exchange Agreement (IEA), etc.
- [ ] Yes
- [ ] No 
