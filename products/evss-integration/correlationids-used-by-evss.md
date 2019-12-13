# Correlation IDs Used by EVSS

# EDIPI
EDIPI is the DEERS/DMDC correlation ID (EDIPI in MVI).

Because DS Logon uses the EDIPI, this is a required piece of the header information and is used for session validation. It is required to call EVSS services to show that the Veteran is in DEERS (or the user is a dependent). This ID is used to create pseudo headers to pass for access to EVSS even if the Veteran does not have a DS Logon account or has never been in eBenefits.

The EDIPI can also be used to Single Sign On (SSO) to other DoD websites that use EDIPI, such as those connected with milConnect. 

# PID
PID is the Personal ID, or Corporate Database Correlation ID (VBA_CORP_ID in MVI). This number is used to identify all individuals within the corporate database: Veterans, dependents, employees, Service Officers, etc. 

The Corporate Database is used as the VBA source of Veteran information to include Claims (Compensation and Pension), Vocational Rehabilitation and Employement information, Dependent information (as related to claims), Service Organization information, Employee information, application access, sensitivity levels and security levels as it relates to access to Veteran records.

# BIRLS ID
*Info coming from Josh Lindsey as to whether the BIRLSID from MVI is sufficient.*
