# Accessing Endpoints

## PPMS Endpoints
The PPMS endpoints are available only on the VA network or through CAG. They are as follows:

### DEV
- https://dws-dev-ppms.devtest.vaec.va.gov/swagger/ui/index
- Swagger

### NPROD
https://nprod-apim.developer.ppms.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

### PROD EAST
https://api-east.apim.developer.ppms.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

### PROD SOUTH
https://api-south.apim.developer.ppms.va.gov/
-  Microsoft Azure API Management - developer portal (va.gov), subscription key required

## Key Management
Subscription keys for endpoints called by the Facility Locator are in the AWS Systems Manager (SSM) Parameter Store.

Please contact a member of the [@cms-devops-engineers](https://app.slack.com/client/T03FECE8V/CT4GZBM8F/user_groups/S01JXBLLMJL) group in the DSVA Slack to add, modify, or to get information about a Parameter Store secret.
