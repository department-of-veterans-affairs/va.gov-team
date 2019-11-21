## Form 22-1990 Discovery Questions

### Answered

- What format does data live in at each stage of processing?
  – Data lives on the Philly VONAPP DB server. (while completing and for a while after) Once submitted, it is also sent to RPOs in a text file (.spl).
- What, if any, APIs are involved?
  - None
- Who are the business stakeholders?
  - Education Service. Regional Processing Offices
- Who are the SMEs around the technical implementation of the system?
  - Chris Marino, Michael Le
  - Both are Philly ITC employees
- Aside from VONAPP, what are other ways the veteran can submit the form?
  - Via Mail
- What issues does the system currently have?
  – Print has been disabled due to security concerns. Need to have it operational in any new environment.
- Does the backend system experience routine downtime?
  - Not usually.
- Who uses TIMS? What is a VCE?
  - Vce is a Veterans Claims Examiner. They are the folks that process the EDU applications.
- Is it desired that 22-1990 forms get sent to the VBMS eFolder instead of the existing process?
  - Challenge: Can't upload a file to a veteran's eFolder if they have never filed a disability claim (i.e. the efolder doesn't exist yet)
  - Education does not use VBMS and did not want to send docs to the vbms efolder. We were going to do it in EVSS in addition to the spool file only so that it would be visible to the Vet when efolder exposure came out.

### Unanswered

- What _is_ a SPOOL file? (it's plain text, but what is the format of things in it)
  - What is the format?
  - What does the text in it look like? Example?
  - Is each SPOOL file identical? (the ones that get distributed to each Regional Processing Office)
- Is there a test environment for VONAPP's background processes?
  - This would let us test to see if a Vets.gov produced SPOOL file worked
  - This is key to gauging the technical feasibility and/or level of effort
- What is the flow between VONAPP, Regional Processing Offices, and TIMS?
  - This probably is answered in the referenced docs, but there are different flows in different docs -- we should clearly map this

## Document notes:

- [0000PM_16393 008_EVSSDOM_Education_Forms_Presentation_20150714v1.pdf](../general-background/0000PM_16393 008_EVSSDOM_Education_Forms_Presentation_20150714v1.pdf)
  - Goals of EVSS port (on page 8), including:
    - >80% of applications come via online
    - Processed within 12.5 days
  - Perceived customer needs for education forms (not sure where research comes from though)
  - Has 22-1990 high level processing workflow on page 19
  - List of systems that are used (page 20), including:
    - TIMS
    - LTS - long term solution (Ch 33)
    - BDN - benefits delivery network (Ch 30)
- [CSRA_EducationApplication_FinalPres_Final.pdf](../general-background/CSRA_EducationApplication_FinalPres_Final.pdf)
  - Prioritized feature list from stakeholders (via KJ exercise by Frog Design), with high priorities being:
    - Error handling
    - Mobile friendly
    - Improved selecting a school section
    - Improved review application section
    - Context help and coashing
    - UX rationals and documentation (?)
  - Has design wireframes and explanations (pages 16-45)
- [DRAFT_EVSS_REQ_EDU_Process_maps.vsd.pdf](../general-background/DRAFT_EVSS_REQ_EDU_Process_maps.vsd.pdf)
  - Has some flows for processing claims, as it is today
- [EDU CHAP 33 BRD Automating COEs BRD FINAL 3_distributed.pdf](../general-background/EDU CHAP 33 BRD Automating COEs BRD FINAL 3_distributed.pdf)
  - PMAS Business Requirements document
  - Intro has short description of different Chapter 3x programs and COE
- [Education Benefits End to End.pptx](../general-background/Education Benefits End to End.pptx)
  - Vets.gov team's summary of the process end-to-end
- [Education Concept Rating.xlsx](../general-background/Education Concept Rating.xlsx)
  - Concept Rating tab has proposed improvements
- [Education Forms Integration Work by EVSS.docm](../general-background/Education Forms Integration Work by EVSS.docm)
  - Has requirements for eBenefits implementing 22-1990 backend functions (porting from VONAPP)
  - EVSS decided to keep the existing TIMS backend (EVSS was.not given a choice re the backend systems -jq)
  - EVSS determined that retrieving data from TIMS is not viable, resulting in manual work to check status
  - Has proposed EVSS implementation system diagram on page 8
  - Submission sequence diagram on page 17
- [Education Mockup_draft_02.pptx](../general-background/Education Mockup_draft_02.pptx)
  - Some draft wireframes for education benefits in eBenefits
- [EDUsystemflow.pptx](../general-background/EDUsystemflow.pptx)
  - Systems the proposed EVSS/eBenefits system would have interacted with
- [EVSS_REQ_VDC_Prepare Forms 22-1990 Supplemental Specification_v4.doc](../general-background/EVSS_REQ_VDC_Prepare Forms 22-1990 Supplemental Specification_v4.doc)
  - Contains proposed validations for form fields
- [Final Draft EVSS_REQ_FeatureName_DAM_v2 22-1990_10.xlsx](../general-background/Final Draft EVSS_REQ_FeatureName_DAM_v2 22-1990_10.xlsx)
  - Contains information on each form field in the proposed revamp of 22-1990
- [Final EVSS_REQ_22-1990 Education Form Automation_UserStories_23.docx](../general-background/Final EVSS_REQ_22-1990 Education Form Automation_UserStories_23.docx)
  - Not helpful
  - 89 pages of one line user stories
- [FINAL REQ_22-1990_Process_maps VA7.vsd](../general-background/FINAL REQ_22-1990_Process_maps VA7.vsd)
  - First page contains an existing process map for using VONAPP
    - This looks different than the other process flows? Which is correct?
  - Remainder pages talk about EVSS proposed solution
- [Options](../general-background/Options.xlsx)
  - Vets.gov team implementation options following discovery
- [Military address tips from stamps.com](../general-background/usps-military-mail-guide.pdf)
  - Reference for address forms
- [Sample spool file](../general-background/sample-spool-file-v2.txt)
  - Sample of the VONAPP generated spool file sent to TIMS.
- [VBA Late 2016 Form 22-1990](../general-background/VBA-22-1990-ARE.pdf)
  - Paper form 22-1990 from late 2016.
- [VONAPP Gap Analysis1 - Draft v1.pptx](../general-background/VONAPP Gap Analysis1 - Draft v1.pptx)
  - Summary of VONAPP forms, and how the data gets loaded for VA processing
- [VONAPP EDU form submission stats](../general-background/VONAPP-EDU-form-stats.md)
  - Relative numbers of submissions for each of the 6 Education Benefits forms on VONAPP.
  - Stats are from Oct 1 2015 to July 1 2016.
- [VONAPP flow stopping points](../general-background/VONAPP-flow-stopping-points.md)
  - Anecdotal list of points where applicants frequently abandon the VONAPP version of the form.
