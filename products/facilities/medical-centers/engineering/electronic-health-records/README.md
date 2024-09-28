## Electronic Health Records management README

Each VAMC System uses an Electronic Health Records (EHR) system to manage patient healthcare records. There are multiple EHRs in play: 
1. VistA - legacy system
2. Oracle Health (as of Nov 2023, formerly Cerner)

Which EHR a system uses is set on the [VAMC System node form](https://prod.cms.va.gov/node/add/health_care_region_page), using the "VA Health Connect and Health Records System" field. This field has 3 values (Jan 2024): 
1. VistA
2. Converting to Cerner -- used while Systems are testing the cutover from VistA to Oracle Health
3. Cerner

Epic [#16079](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16079) tracks the work to rename Cerner to Oracle Health, everywhere.


## Relevant resources
- [How to set up a VAMC's Oracle Health (formerly Cerner) integration within the VA.gov health care portals: hard coded data and CMS data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/healthcare-widget-support/how_to_set_up_vamc_cerner_within_va_health_care_portals.md) (Github)
- [Electronic health records (EHR) system changes KB](https://prod.cms.va.gov/electronic-health-records-ehr-system-changes) (CMS)
- [Sept 2023 knowledge transfer about state of Cerner](https://app.zenhub.com/workspaces/sitewide-facilities-639f5253e4b702a32376339e/issues/gh/department-of-veterans-affairs/va.gov-cms/13823#issuecomment-1578842422) with links to documentation by Ryan K
- Related: CMS: Rename Cerner to Oracle Health [#16079](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16079)
