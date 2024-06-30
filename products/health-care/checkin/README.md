# MODERNIZED CHECK-IN TEAM HOME PAGE

## Quick Links
- [Team Members](#team-members)
- [Terminology](#terminology)
- [Product](#product)
    - [Product Documentation](#product-documentation)
    - [Priorities, Backlog, Sprints](#priorities-backlog-sprints)
    - [Product Releases](#product-releases)
    - [Metrics and Veteran Feedback](#metrics-and-veteran-feedback)
    - [Production Designs](#production-designs-figma)
    - [Research](#research)    
    - [Testing](#testing)
    - [Production Support](#production-support)
- [Process](#process)
    - [Process Documentation](#process-documentation)
    - [Translations](#translations)
    - [Service Now Knowledge Articles for Support](#service-now-knowledge-articles-for-support)
- [Engineering](#engineering)
- [SME Contacts](#sme-contacts)
    - [CAIA Key Contacts Supporting Check In](#caia-key-contacts-supporting-check-in)
    - [OCTO Health Tools Shared Support SMEs](#octo-health-tools-shared-support-smes)
    - [VEText SMEs](#vetext-smes)
- [Resources Developed outside the CIE Team](#resources-developed-outside-the-cie-team)

## Team Members
- OCTO health pod
    - Kay Lawyer (PO)
    - Kristen McConnell (UX)
    - Stephen Barrs (Eng)
- Product Manager - [Lori Pusey](https://dsva.slack.com/team/U035BMZ07PD)
- Delivery Manager & Scrum Master - [Anita Halici](https://dsva.slack.com/archives/D055G32ES79)
- UX Researchers & Designers
  - [Ben Brasso](https://dsva.slack.com/team/U0360TY9E9H)
  - [Zach Park](https://dsva.slack.com/team/U02FQ4X5J8M)
  - [Christina Gednalske](https://dsva.slack.com/team/U02KVPC82VA)
- Full Stack Engineers
  - [Lee DeLarm](https://dsva.slack.com/archives/D05B37XJF8C)
- Frontend Engineers
  - [Brian Seek](https://dsva.slack.com/team/U02FLCLQ6J2)
  - [John Woolschlager](https://dsva.slack.com/team/U03LZEZCYAV)  
- Backend Engineers
  - [Gaurav Gupta](https://dsva.slack.com/team/U02DB4BC10F)
  - [Kanchana Suriyamoorthy](https://dsva.slack.com/team/U02EFEF4ZB2)
- DevOps Engineers
  - [Nathan Douglas](https://dsva.slack.com/team/U01DADWHLM6)
  - [Eric Oliver](https://dsva.slack.com/archives/D06M78EK1JM)

## Terminology
- **Pre-Registration:** The verification of up to date insurance information, contact information, next of kin, and emergency contact information for VA medical appointments. As a VHA Directive, pre-registration must be completed at least once within 7 days of an appointment and does not need to be completed again if another appointment is within 7 days of its completion.  
- **Pre-Check-In:** The Patient Check In (PCI) application workflow that occurs one to seven days before an appointment to collect Pre-Registration information. It is initiated after a Veteran confirms their appointment through an appointment reminder. 
- **Check In:** The Patient Check In (PCI) application workflow that occurs within a window that is no more than 45 minutes before and up to 15 minutes after a Veteran's appointment. Online check in has logic to include pre-registration, checking in (which sets the VistA status to e-check-in: complete, and filing for travel reimbursment.  
- [Acronyms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/acroynyms.md)

## Product 

#### Product Documentation
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/README.md)
- [Product Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/README.md)
- [Product Guides](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product/product-guides)
- [Other Product FAQs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/faqs/faqs.md)
- [Product Demo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product/product-demos#product-demo)
- [Responding to Veteran Complaints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/responding-to-veteran-complaints.md)
- PCI Service Blueprint with 45MR, filing BT claim and "Are you at the facility?" page
    - [Review Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696788763395/d3aa60a7420ece422a6f6b84659c33350279b782?sender=u37bb983bd3fc3cc00c7d3286)
    - [Download PDF](https://github.com/department-of-veterans-affairs/va.gov-team/files/15504772/PCI.Service.Blueprint_2024-05-30_19-13-58.pdf)
    - [Download from SharePoint](https://dvagov-my.sharepoint.com/:b:/g/personal/benjamin_brasso_va_gov/Ec8XLnzURmlBkvUn0uGs2xIBs_wvb9M_NrUHMULmwGKvjg?e=ZlSzUL)
- Review BT app at OH sites service blueprint in
    - [Sharepoint](https://dvagov-my.sharepoint.com/:b:/g/personal/benjamin_brasso_va_gov/EauN-T6HLZZDmLfjGpUW7OkBtcPngYEHDD94AErO0SIsWA?e=dkMYaf) or
    - [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707427471672/75fb6b9eea27c7b854e8b31c0e9017e2a54bb95a?sender=u37bb983bd3fc3cc00c7d3286)

#### Priorities, Backlog, Sprints
- [Priorities](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715270046440/b2cf85a53d09a8caca454415626fecb5bae24a9b?sender=uc584f7fcc9a5090000259578)
- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719321335255/bee29c80ac07f79dda849e071acaa88b17e2f5f6?sender=uc584f7fcc9a5090000259578)
- [Scrum Board](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/board?repos=133843125)
- [Sprint Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/sprints/sprint-goals.md)
- [Sprint Reviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/sprintdemo/readme.md) 

#### Product Releases 
- [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md)
- [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-planned-releases.md)
- [Feature Flags](https://api.va.gov/flipper/features)

#### Metrics and Veteran Feedback
- [Analytics Dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/analytics#readme)
- [Google Analytics Events](https://docs.google.com/spreadsheets/d/1BPOlI6vzH-tMTswvUrci3Q0NkBmfIIfo8Cgj_nM10gk/edit#gid=0)
- [Google Analytics Filters](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/ga-filters.md)
- [How to Request and Process VSignals Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/VSignals)
- [How to Request and Process Medallia Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/Medalia/how-to-request-medalia-feedback.md)
- [How to Generate an Analytics Report for VA Stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/how-to-generate-analytics-report-for-stakeholders.md)
  
#### Production Designs (Figma)
- [Production | Pre-check-in and check-in](https://www.figma.com/file/sK2vIx6giAynNqUFR0l4Wx/Production-%7C-Check-in?type=design&node-id=2%3A1305&mode=design&t=0lRYfw3kcVScWClF-1)
- [Working | Check-in](https://www.figma.com/file/pnR05o7NPJDS0KFUSQ0eE3/Check-in-%7C-Check-in?type=design&node-id=0%3A1&mode=design&t=xPKUeH49IJf3iY0Y-1)
- [Working | Pre-check-in](https://www.figma.com/file/mVg6S9xgiQpWbAOAvptQOZ/Pre-check-in-%7C-Check-in?type=design&node-id=0%3A1&mode=design&t=wncuIj1Ko8hFd9sf-1)
- [Working | Unified check-in](https://www.figma.com/file/7Ib7RxiIC4QB53FDBO2a8c/Unified-check-in-%7C-Check-in?type=design&mode=design&t=87McIUiwLhq3yP2R-1)
- [Working | Telehealth content matrix](https://www.figma.com/file/th4V0mCvPbKYLCDgaZjovw/Telehealth-%7C-Check-in?type=design&node-id=7%3A484&mode=design&t=jLY1RZvjDDbrO4zA-1)

#### Research
- [Veteran and staff research studies](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research#all-check-in-research-studies)
- [Beneficiary travel reimbursement discovery and research findings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/discovery/travel-reimbursement)
 
#### Testing
- [Facility Directory](https://www.va.gov/directory/guide/rpt_fac_list.cfm?sort=Sta&list_by=all&oid=all)
- [VAMC EHR Facility json](https://www.va.gov/data/cms/vamc-ehr.json)
- [Testing Setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md)
- [Testing for Travel Claim](https://github.com/department-of-veterans-affairs/va.gov-team/blob/4fb13e011b8bdea026e3f39e669602de356c3104/products/health-care/beneficiary-travel/engineering/test.data.md)
- [TestRail Test Plans & Cases](https://dsvavsp.testrail.io/index.php?/projects/overview/62)

#### Production Support
- [Responding to Veteran Complaints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/responding-to-veteran-complaints.md)
- [Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/vetext-pci-incident-response/incident-response-playbook.md)
- [Production Support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/production-support.md)
- [How to Send SNOW Incident Reports](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/snow-reports.md)
- [How to Send Patient Check-in System Down Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/system-down-notifications.md)

## Process 

#### Process Documentation
- [CIE Development Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md)
- [Decision Register](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/decisions/DecisionRegister.md)

#### Translations
- [Main page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/translations)
- [Process to submit translations to the State Department](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/translations/submit-translations-to-state-department.md)
- [JSON Files in Master Branch](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/check-in/locales)

#### Service Now Knowledge Articles for Support
- [Patient Check-in](https://yourit.va.gov/va?sys_kb_id=4967ba681b1a59d04f6f5316624bcbbb&id=kb_article_view&sysparm_rank=3&sysparm_tsqueryId=2dbb7b091baad190005287b8624bcbcd)
- [Pre-Check-in](https://yourit.va.gov/kb_view.do?sys_kb_id=8c9bd58f1bcbc1d09641a867624bcba9&sysparm_rank=1&sysparm_tsqueryId=d4bae8c11b5b05541c29a867624bcbff)
- [eCheck-in](https://yourit.va.gov/kb_view.do?sys_kb_id=07548a9787478dd03502b889cebb3587&sysparm_rank=2&sysparm_tsqueryId=d4bae8c11b5b05541c29a867624bcbff)

## Engineering
- Code Repositories
  - [vets-website](https://github.com/department-of-veterans-affairs/vets-website)
  - [vets-api](https://github.com/department-of-veterans-affairs/vets-api)
  - [CHIP API](https://github.com/department-of-veterans-affairs/chip)
  - [LoROTA API](https://github.com/department-of-veterans-affairs/lorota)
  - [checkin-devops](https://github.com/department-of-veterans-affairs/checkin-devops/)
  - [cie-staging-scheduler](https://github.com/department-of-veterans-affairs/cie-staging-scheduler/)
  - [cie-datadog-log-forwarder](https://github.com/department-of-veterans-affairs/cie-datadog-log-forwarder/)
  - [octo-vista-api](https://github.com/department-of-veterans-affairs/octo-vista-api/)
- [Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering/architecture-diagrams)
- [System Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering)
- [QA](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering/qa)
- [Training Environment](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering/training-environment)
- [Developer Guide](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/check-in/README.md)
- [Error Types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/error-types.md)
- [AWS Key Rotation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/rotating-iam-keys.md)
- [DevOps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering/devops/)

## SME Contacts

#### CAIA Key Contacts Supporting Check In 
- [Laura Willwerth](https://dsva.slack.com/team/U03CHM52JBF) - Content
- [Sara Smith](https://dsva.slack.com/team/U04NBMUH5C4) - A11y

#### MHV Shared Support SMEs
- [Riley Orr](https://dsva.slack.com/team/U079QRM8WGN) - A11y
- [Sara Sterkenburg](https://dsva.slack.com/team/U045GGS6V25) - IA

#### VEText SMEs
- [Shane Elliott (VA Lead)](https://dsva.slack.com/team/U0108220A22)
- [Chris Horton (Eng)](https://dsva.slack.com/team/U02HSM1A798)
- [Justin Wowk (Program Manager)](https://dsva.slack.com/team/U01DWSX9Y2D)
- [Ariel Hicks (Communication, Content)](https://dsva.slack.com/team/U04M7H63XTN)

## Resources developed outside the CIE Team

For questions, reach out to [VHAIVCPatientEngagementTeam@va.gov](mailto:VHAIVCPatientEngagementTeam@va.gov)

- [PCI - Enterprise Implementation Team](https://teams.microsoft.com/l/team/19%3awwjxmJilnNQkrSuL1_UDJccHQcMIPF2OnFC73KpNN9s1%40thread.tacv2/conversations?groupId=7b702e1f-7c29-419b-8215-35b0346ca2b5&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
-	[PCI Dashboard](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2Fvhapcirollout%2FSitePages%2FDashboard.aspx&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=fivCnQ1MdP5xTjJEEweW6tiwqAjgYQsp0Co51VvyNwQ%3D&reserved=0)
-	[Clinic Profile Overview Potential Errors Dashboard](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapp.powerbigov.us%2Fgroups%2Fme%2Fapps%2F741625e9-a049-4f8e-a424-d13c7a723da7%2Freports%2F1e199d02-3cc6-4d5c-8caa-9a5a41bb4214%2FReportSectiond556eaa893a5006c1840&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=csLtdBgcCIWljNYzZxoN16REWs28Y1Sqk3kFrlNBdqc%3D&reserved=0)
-	[FAQs](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2Fvhapcirollout%2FSitePages%2FExpanded-FAQs.aspx&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=JeRdUBhlWM5DmklW9AOBOZ1HR0hdFOO%2FXbwQhG9sSR8%3D&reserved=0)
- [Communications Toolkit](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2F%3Af%3A%2Fr%2Fsites%2Fvhapcirollout%2FShared%2520Documents%2FGeneral%2FCommunications%2FCommunications%2520Toolkit%3Fcsf%3D1%26web%3D1%26e%3DFTZ2Ld&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=R%2FqYarQ1DLfwrHC%2BaP5O%2BTs9hx7EKcBmtmd4iTWqOBU%3D&reserved=0)
-	[Training Materials](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2Fvhapcirollout%2FShared%2520Documents%2FForms%2FAllItems.aspx%3FRootFolder%3D%252fsites%252fvhapcirollout%252fShared%2BDocuments%252fGeneral%252fTraining%26FolderCTID%3D0x0120005C8B77BE0D43B94EA31C6D6BE6BC4DB0&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=nNvhWuvPuQ6ABfXPeeWpiFlZGD4iSXYEmRoPkKInuXM%3D&reserved=0)
-	[Posters and Signage Guidance](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2Fvhapcirollout%2FShared%2520Documents%2FForms%2FAllItems.aspx%3FRootFolder%3D%252fsites%252fvhapcirollout%252fShared%2BDocuments%252fGeneral%252fPCI%2BSignage%26FolderCTID%3D0x0120005C8B77BE0D43B94EA31C6D6BE6BC4DB0&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=7Xmh%2Fbgm6Ih0wNuDde8Qa07ke%2BNUIiPTYioZMMbeklk%3D&reserved=0)
-	[Configuration Guidance](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2Fvhapcirollout%2FShared%2520Documents%2FForms%2FAllItems.aspx%3FRootFolder%3D%252fsites%252fvhapcirollout%252fShared%2BDocuments%252fGeneral%252fSite%2BConfiguration%26FolderCTID%3D0x0120005C8B77BE0D43B94EA31C6D6BE6BC4DB0&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=hnqoXQRpzJQZUMukwvJQ3ZsZN2j%2F015f27E2afDwVGU%3D&reserved=0)
-	[Suggestion Form](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmyvapm.force.com%2FETIntake%2Fs%2Fsuggestions&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653446221%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=E7Ai%2FngU4RvqnMZuSsO1GyxMquJWxPJKXjZkFe16Ogs%3D&reserved=0)
-	[VISN/Site Point of Contact List](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2Fvhaet%2FSitePages%2FPET_PCI_POC.aspx&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653602585%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=0Gbp4e3%2Few2dxEY9Ao2CBVVJrvgTrDcI6YunSas9r%2B8%3D&reserved=0)
-	[Enterprise Guest Wi-Fi Program](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2FVAWiFi-EnterpriseGuestWiFiIOP%2FSitePages%2FHome.aspx&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653602585%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=UV8RbgMDfgJkEW2gb4dkvkjZ6Ifuy2dSPOx9JO0WFBA%3D&reserved=0)
-	[NextGen Wi-Fi Program](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdvagov.sharepoint.com%2Fsites%2FOITSDM%2FNIM%2FWireless%3FOR%3DTeams-HL%26CT%3D1630410475405&data=05%7C01%7C%7C4b23436bf4384f3504cb08dbf5beecca%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638373972653602585%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=C%2B%2FNjh%2Fuamq9Gkp8PsMtSOmqNLhmsAAR4zElsgoxCrk%3D&reserved=0)
- [VSE for Clinical Staff User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/files/12824914/vsecs_user_guide.pdf)
