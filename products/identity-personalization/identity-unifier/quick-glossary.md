An overview of what each system/group is and how it ties in:

## VBA
**BIRLS** - Beneficiary Identity Record Locator Service. Mainframe from the 1980s. Main legacy system for military record and identity within VBA; has largely been overtaken by other systems at this point. Contains on the order of 30 million Veterans. Most records have been imported elsewhere. Many records are thought to be erroneous.

**CorpDB** - VBA Corporate Database, newer system that serves as a data warehouse for C&P beneficiaries(?). All records in VBMS sync to Corp. Corp syncs to MVI. There is some movement at OBPI to get all other VBA systems connected to Corp, but as of yet that is not complete.

**VBMS** - Veterans Benefits Management System, main VBA system for C&P. All identities sync to Corp. eFolder is part of VBMS, and some programs (e.g. VIC) store DD-214s there. No direct integration to MVI.

**PIES** - VA system to request military record files from the National Archives. VBA field officers put in requests through PIES, which are routed to a team in Hines, IL. The Hines team then submits the requests to the National Personnel Records Center in St. Louis.

**BDN** - Benefits Delivery Network. Manages VBA payments.

**Loan Guarantee / LGY** - System for VA loan guarantee beneficiaries.

**Chapter 33** - System for Chapter 33 education benefits beneficiaries.


## VHA
**VISTA** - Legacy EHR system. Note that patients will have a different VISTA ID in each VISTA instance, so up to 170 VISTA IDs.

**MPI** - Master Patient Index; created with VISTA, originally to keep a map of the different VISTA IDs attached to an individual Veteran.

**ES/ADR** - Enrollment System / Administrative Data Repository. ES sometimes shortened to ESR. ES is a relatively new system to manage all applications for VHA services, and record eligibility determinations. Contains Priority Group for all applicants. ADR is ES backend database; they seem to functionally be one and the same system.

**Other DBs** - Some documents refer to other patient databases in VHA that are not VISTA. It is unclear exactly what these are.

## NCA
**AMAS**

**BOSS**

## Other VA
**VIC** - Veterans ID Card. In the VIC 1.0 implementation, Veterans are proofed through vets.gov log-in. If they are not found, they can submit DD-214s via AccessVA to the VIC team. The DD-214 is then stored in the VBMS eFolder.

**AccessVA** - Approved VA portal for external users to log in. Main log-in options are ID.me and DS Logon.

**USVETS** - Analytic dataset maintained by Data of Governance & Analytics for research customers, including VetPop. Updated quarterly. Imports 35 VA data sources as well as SSA and third-party commercial data.

**DGC** - Data Governance Council, chaired by Sarah Sullivan, creates enterprise-wide strategy on common data types.

**IAM IPT** - Identity & Access Management Interagency Program Team. Oversees identity data and MVI.

**MVI** - Master Veteran Index. Since 2010, designated as the VA's authoritative data source for identity. Descendent of the Master Patient Index. Gets all VHA data, some VBA data, some NCA data. Has done some syncs of legacy data. Intends to have record of all Veterans with a business need.

**VADIR** - VA-DOD Identity Repository. VA clone of PDR/DEERS/DMDC. Replicated via "VA Sattelite." VA's authoritative data source for military history. Accessed via eMIS. Sometimes accessed for identity purposes, though this is not kosher.

**Common Population Project** - Ten-year old project to get legacy VBA/VHA data into MVI/DEERS, primarily from BIRLS and VISTA.

**eMIS** - Web service to access military history information in VADIR, queried using EDI PI. Maintained by VIERS.

**VIERS** - Platform for a variety of VA web services including eMIS and D2D.

**VRSS** - Veteran Re-Entry Search Service - web application using VADIR person searchh to identify inncarcerated Veterans.

## DoD

**DEERS** - Main DOD dataset of servicemembers, maintained by DMDC. Contains two portions:

**PDR** - The main dataset we talk about when we talk about DEERS, the personnel record.

**RBS** - A broader dataset within DEERS that appears to also contain family members, etc.

**AAFES** - Army and Air Force Exchange System. Online shopping only Veterans are eligible for. Built the VetVerify system to confirm Veteran status.

**VetVerify** - Veteran verification system built by AAFES. Based on PDR, RBS, NPRC/NARA, and submitted DD-214s.

**DS Logon** - Logon service powered by DEERS identities.

## Other
**NARA/NPRC** - National Archives and Records Administration / National Personnel Records Center. The NPRC is in St. Louis and containns military records for all Veterans going back 100 years. This is where VBA staff send requests when they need to do determinations of service-connection etc.

## Identifiers
**EDI PI** - Native DOD identifier.

**ICN** - Native VHA identifier.

**Corp ID** - Native VBA identifier.
