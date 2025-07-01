Last updated 8/20/2024

This is a folder for the Cerner integration work. 

# Cerner Integration Status

 ![image](https://user-images.githubusercontent.com/72028011/204892453-26fb3347-cc14-4bb0-8853-9833501dcd7d.png)

| Product  | Status |  Note(s) |
| ------------- | ------------- | ------------- |
| [VEText 2.0](https://github.com/department-of-veterans-affairs/vetext/wiki/VEText-2.0-Cerner-MVP) | Deployed in P0630 | ------------- |
| Applications for Visit Summaries (AVS) | Future Phase  |  |
| MyHealtheVet (MHV) |  | ------------- |
| [Covid-19 Patient Manager](https://github.com/department-of-veterans-affairs/covid-patient-manager/) (CPM) | Deployed in P0630 | ------------- |
| [Lung Cancer Screening](https://github.com/department-of-veterans-affairs/lung-cancer-screen-and-track) (LCS) | Deployed in P0630 | ------------- |
| Precision Oncology (PO) | No Cerner Integration | ------------- |

# Cerner Dev Sandbox
- [Build Smart on FHIR Overview](https://docs.oracle.com/en/industries/health/millennium-platform-apis/build-smart-on-fhir-apps/#overview)
- [App set up Instructions](https://engineering.cerner.com/smart-on-fhir-tutorial/)
- [Oracle Health Code Console ](https://code-console.cerner.com/)
- [Developer Resources](https://www.oracle.com/health/developer/program/#tools)
- [Developer Forum](https://forums.oracle.com/ords/apexds/domain/open-developer-experience)
- Front end (needs Oracle Health consultant to grant access): C1941 https://cernabcn.cernerworks.com/Citrix/ProdWeb/

# Cerner Environments
- Dev Sandbox: C1941 https://cernabcn.cernerworks.com/Citrix/ProdWeb/
- Stage: B1930 https://ssoiaccess.valehrpreprod.cernerworks.ehr.gov/
- Prod: P0630 https://ssoiaccess.valehr.cernerworks.ehr.gov/

# Requesting Access to Cerner Environments
- Federal Domain Access -- [National URAC Process](https://dvagov.sharepoint.com/:w:/r/sites/VACO.OEHRMvisn/SitesDeploy/_layouts/15/Doc.aspx?sourcedoc=%7B1C47011C-F604-4618-B4F5-8E0DC10A7F48%7D&file=National%20URAC%20Provisioning%20Process.docx&action=default&mobileredirect=true&DefaultItemOpen=1&wdhostclicktime=1667246077835&web=1&cid=ff60d63d-0a80-4a6f-abc8-ff1a819ec4d0) (simplified instructions below)

Cerner Request Process: 

1. Email OEHRMNationalURAC@va.gov to start request process 
2. Complete request form (example spreadsheet)
 - Column A (Provisioning Activity): Modification-Add 
 - Column B (Environment) - include one row per environment
  a. B1930 – testing of app in VA domain 
  b. P0630 – federal production domain 
 - Column G (Station Number): National (No station affiliation) 
 - Column H (HPT): yes
 - Columns I – AB: leave blank 
 - Column AC (EHRM Primary Role):
 a. For testing domains (B1930) the role we need is Facility Informatics, however, this is not an option currently on the spreadsheet. Instead, just use Informatics and specify in the email the role you actually need is Facility Informatics  
 b. For production domain (P0630) use VA View Only  
 - Columns AD – AR: leave blank 
 - Column AS (Cerner DIRECT): NO 
 - Column AT (HIE Reporting):   NO 
 - Column AU (3M360): NO 
3. Email completed form to OEHRMNationalURAC@va.gov 
 - Include brief justification
4. Typically completion time is two weeks. Follow up with URAC for any status updates.
   
# Fundamental Documents and Links

- [VA.gov Health Products: Cerner API Requirements](https://dvagov.sharepoint.com/:w:/r/sites/CDSProgramTeam/Shared%20Documents/General/Resources/Cerner%20Integration/2020-jan-cerner-api-documentation-revision.docx?d=w62faab7c4cf14024a89d651351d9ca09&csf=1&web=1&e=E93zGz)
- [EHRM Deployment Schedule](https://digital.va.gov/ehr-modernization/resources/ehr-deployment-schedule/)

# Cerner Integration Points

## Covid-19 Patient Manager
- Create CPM FHIR app deployed as a Cerner mPage component 
- Integrated CPM within Provider Workflow mPages
- Reads Cerner vital signs, specific labs, imaging using FHIR Observation 
- Writes to Cerner proprietary event codes using FHIR Observation ([link](https://github.com/department-of-veterans-affairs/covid-patient-manager/wiki/Developer-Resources#cerner-writeback-and-resources))
- Created auto-text (commonly referred to as "dot-phrases") natively in Cerner using proprietary event codes
- CPM Team documentation re: [Cerner Integration ](https://github.com/department-of-veterans-affairs/covid-patient-manager/wiki/Cerner-Integration)
