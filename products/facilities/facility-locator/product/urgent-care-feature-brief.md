## Feature Brief - Community Care: Urgent Care 

### User Problem Statement(s)
_What problems are we trying to solve?_ 
**As a Veteran, I need to be able to find the appropriate urgent care facility for my situation so I can use my benefits for care.**

### Project Rationale
_Why should this project be a priority?_ 

**Stakeholder/Business drivers**
- The Office of Community Care has been dissatisfied with the community care implementation. 
- Urgent care is a particularly high visibility subset of Community Care functionality. Searches continue to be directed to an external TriWest Provider locator due to Veteran confusion and data quality concerns. 
- The impending addition of the Optum network of providers on 2/1/2020 increases the priority of this work. 

**Findings from research conucted December 2019**
- Veterans are not aware of the type of care they can receive at urgent care facilities. There is a general lack of communication/education around the difference between community care providers and VA health care
- When prompted to choose an urgent care location to stitch a wound, a majority of participants mentioned that they would visit an ER or VA facility and not an Urgent Care location.
- Participants were drawn to location input and dropdowns and did not choose to filter their search results.
- Overlapping benefits cause confusion when visiting in-network providers.
- Internal language and inconsistent labeling cause users to hesitate when looking into facilities.
- Participants did not understand the difference between "retail" urgent care and urgent care until they were given a definition and example treatments

### Project Scope and Scale
_What's in and what's out?_

**MVP**
- Iteration incorporates previous community and urgent care research, Facility Locator discovery research and feedback
- Veterans are assisted in understanding the sub-type choices for urgent care and are able to determine which facility type meets their current need.
- Veteran can differentiate between urgent care sub-type in search results (but do not necessarily need to be able to filter or search by sub-type in MVP)
- Facilities returned as results of urgent care search do not reference a need for referral. [#4241]
- Veterans have easy access to the PDF (or a placeholder) explaining the urgent care benefit.
- Workflow includes information to help the Veteran understand how to fill an Urgent Care Pharmacy Prescription
- Design does not include TriWest link (which will be removed pending OCC approval)

**Future**
- Veteran may need to filter/search based on urgent care sub-type. (Will be informed by future research)
- Workflow iterations for urgent care prescriptions

### Measuring Success
_How will we know if we are successful?_

**Objective: Reform Community Care Implementation**
  - Key Result #1: The rate of search refinements for Community Care will be at parity with VA facility searches by July 1, 2020. 
  - Key Result #2: All urgent care searches will be performed using the modernized Facility Locator by February 2, 2020.  

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Team/Internal dependencies**
  -  Ability to differentiate among facility sub-types is access dependent.
  - Comprehensive QA strategy requires lower environment with PPMS data for testing. 
  
**Partner dependencies**
  - Data quality is dependent on data owners, in part. (PPMS)
  - Benefit PDF will be available, pending OCC approval. 

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._
