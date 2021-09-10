![Check In Experience Environments Mapping](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/checkin/engineering/cie_environments_mapping.svg)

** Note: In this context, `vets-website` only communicates with `vets-api`, so they are considered as one system for the purpose of this diagram.

## DEV/NONPROD Environments
- CHIP NONPROD -> LoROTA DEV, VistA API STAGING
- vets-api DEV -> CHIP NONPROD, LoROTA DEV

## INTEGRATION Environments
- CHIP INT -> LoROTA INT, VistA API STAGING
- vets-api STAGING (v1) -> CHIP INT, LoROTA INT

## STAGING/PREPROD Environments
- VEText STAGING-> CHIP PREPROD
- CHIP PRERPOD -> LoROTA STAGING, VistA API STAGING
- vets-api STAGING-> CHIP PREPROD, LoROTA STAGING

## PROD Environments
- VEText PROD -> CHIP PROD
- CHIP PROD -> LoROTA PROD, VistA API PROD
- vets-api PROD -> CHIP PROD, LoROTA PROD
