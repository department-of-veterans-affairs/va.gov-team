# File Catalog

Please include a summary of files after they are reviewed. (Make it easy to CMD+F):

## Prescriptions

These files are relevant to prescriptions:

- MHV OAP and APIs/
  - **MHV Rx Refill API Interface Control Document -v1 8.pdf**
    - JSON/REST API for Rx refills and tracking status
    - Services: session establishment, refill request, list of prescriptions, shipping tracking
  - MHV-BB_API Interface Control Document -v1 5.pdf
    - Personal Health Records JSON/REST API
  - **OAP MHV 12.13 12.14 VFE and IIE Inc 4.pdf**
    - Full server list, including tools/app servers/stack used
    - Support contacts
    - Outlines Fiscal Year 2015 development goals
  - SM-API Interface Control Document 1 0 9 Provider.pdf
    - Secure Messaging API for Providers
  - SM-API Interface Control Document 1.0.10 VA Patient--Veteran.pdf
    - Secure Mssaging API for Clients
- MHV SDD and DDD
    - **MHV_12.14_DDD**
        - list of Oracle data elements in MHV
- HLA_SDD_Inc1-2014
  - describes an assessment tool for veterans for self-identify health issues
- MHV Features and Future Functionality 20151120 v3
  - open question on their end:
	  - plan for handling provider-side on vets.gov?
  - timeline shows “vets.gov modifications” starting about Sept. 2016
- MHV_Sign-in_Partners copy.pptx
  - Describes federated sign-on and IAM
  - Not relevant to vets.gov, since we'll have our own login
- frog demos.md
  - Recorded overviews of EVSS (eBenefits?) and MHV
  - MHV meeting has no audio, so not super useful

### Questions Scratch Notes

- What can veterans do with refills right now? In the redesign?
- How much do need to know about systems linked to MHV? Does the backend abstract interactions for us?
- Can we get an architecture diagram?
- What systems does MHV interact with? (That we need to know of)
- How do we get access to the MHV SharePoint?
  - http://tspr.vista.med.va.gov/warboard/anotebk.asp?proj=1719&Type=Active
- What is the testing environment for the Rx Refill API (or can we setup locally)
- How does someone request a token?
- Does MHV already provide LOA3?
- Docs say everything web client can do can also be accessed via web service integration. Does it?
- What do we need to update the vets.gov ATO
- Account activity log API for FY15...did this get made?
  - If so, docs?
- Medication frequency tables? How are those used/differentiated? Do we need to know?
- what is mymedications journal?
- medication frequency is stored is multiple tables in different ways?
