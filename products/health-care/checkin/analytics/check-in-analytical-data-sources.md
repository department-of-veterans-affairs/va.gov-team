# Where to find CIE/PCI/mobile check-in related analyitical data

## Google Analytics
### Scope
VA.gov portions of the check-in and pre-check-in process.
### Access
Request GA access in [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1). 

### Notes
Useful for analyzing web flows / conversions. Also useful for seeing where users might be going on VA.gov after a check-in transaction, e.g., are people clicking the beneficiary travel link?

See also [Check-In Experience Reporting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/reporting.md#check-in-experience-reporting), which includes the above link and links to other operational data sources.

## Corporate Data Warehouse

### Scope
Completed mobile check-ins; total number of appointments; clinical information; patient demographics.

### Access
CDW access is tightly restricted. National SSN access for SPatient and SStaff is necessary. Inquire in [#check-in-experience](https://dsva.slack.com/archives/C022AC2STBM) if you need access.

### Notes
CDW is VA's repository for electronic health record (EHR) and other operational data, primiarly in the health care domain. Data from all EHRs (the numerous location installations of VistA or the national Cerner EHR) is replicated nightly to CDW. Data lags one day. Of particular interest is data on the `CDWWork.Appt.Apppintment` table, which includes information about how an appointment was checked in. Appointments that are checked in by a "staff member" with a SID on `OVAC_VEText.dflt.VISTALINK_Accounts` are considered to be mobile check-ins. As of June 2022, CDW does not include the pre-check-in / e-check-in enabled data for each clinic; it is on the CDW team's roadmap.

## VSE for Clinical Staff Reporting API

### Scope
Transactional reporting from our own backends, including pre-check-in steps/outcomes, mobile check-in steps/outcomes, and clinician workflow (VSECS) data.

### Access
Inquire in [#check-in-experience](https://dsva.slack.com/archives/C022AC2STBM) if you need access. Data can be downloaded via `curl` with basic station and start/end date parameters.

### Notes
Highly granular data that is useful for identifying specific patterns or behaviors. For example, could use this dataset to track how long users take to make it through the pre-check-in process, and the timings of each step. For validation of mobile check-in outcomes, compare with CDW, above.

Data from the VSECS reporting API is consumed by one or more PowerBI dashboards. These dashboards are intended to be used by stakeholders.


## VSignals customer feedback reports
### Scope
Mentions of key words (e.g., "check in") in free text patient surveys.

### Access
Inquire in [#check-in-experience](https://dsva.slack.com/archives/C022AC2STBM) if you need access. As of June 2022, delivered via email once weekly.

### Notes
Raw feedback generated from after visit/encounter surveys sent to patients. Comments tend negative for obvious reasons. Useful for a quick pulse check on how things might be going and for identifying unanticipated behaviors or outcomes.
