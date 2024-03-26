# Rotating IAM Keys
As per VAEC policy, AWS IAM Access Keys should be rotated every 60 days. Warnings are typically sent out when keys are greater than 90 days old.
## Key locations
- Datadog
- AWS Secrets manager
- GitHub
## Key Rotation Procedure
1. Generate a new IAM access key
    - Log into the AWS account
    - Navigate to `IAM` > `Users` > `CMS-service-account-1` > `Security Credentials` tab > `Access Keys` > `Create Access Key`, select the use case of `other` and make sure to copy secret key. (github)
    - Navigate to `IAM` > `Users` > `CMS-service-account-2` > `Security Credentials` tab > `Access Keys` > `Create Access Key`, select the use case of `other` and make sure to copy secret key. (Datadog)
1. Update AWS Secrets Manager
    - Navigate to `AWS Secrets Manager` > `Secrets`
    - Update `tevi/cms_service_account_1/aws_access_key_id`
    - Update `tevi/cms_service_account_1/aws_secret_access_key`
    - Update `tevi/cms_service_account_2/aws_access_key_id`
    - Update `tevi/cms_service_account_2/aws_secret_access_key`
1. Reach out in #vetext-engineering channel on slack when rotating `CMS-service-account-2`. VeTEXT Datadog uses that keypair for tracking vista-api.
1. Update Datadog
    - Log in to Datadog
    - Modify the [Amazon Web Services Inegration Configuration](https://tevi.ddog-gov.com/integrations?accountId=7f66207a-2e15-4496-b9fb-0572a40c2008&integrationId=amazon-web-services)
        - Navigate to `Integrations` > `Amazon Web Services` > `vaec-cms` account
        - At the bottom of the account details tab, update the `AWS Access Key` and `AWS Secret Key` with value from `CMS-service-account-2`
![Screenshot 2024-02-19 at 4 18 49 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/13967174/d14c2639-ef42-49b3-9c46-2f0792376989)
1. Update github repos
    - [CHIP](https://github.com/department-of-veterans-affairs/chip/)
    - [LoRota](https://github.com/department-of-veterans-affairs/lorota)
    - [vista-api](https://github.com/department-of-veterans-affairs/octo-vista-api-x)
    - Navigate to `Settings` > `Secrets and variables` > `Actions`
    - Update `AWS_ACCESS_KEY_ID` and `AWS_ACCESS_KEY_SECRET` in `Repository secrets` with the value from `CMS-service-account-1`
1. Wait 24-48 hours and verify the old key hasn't been used
    - Log into the AWS account
    - Navigate to `IAM` > `Users` > `CMS-service-account-1` > `Security Credentials tab` > `Access Keys` > `<old key>` > `Last used`
    - Navigate to `IAM` > `Users` > `CMS-service-account-2` > `Security Credentials tab` > `Access Keys` > `<old key>` > `Last used`
1. After the key hasn't been used for 24-48 hours, deactivate the old key
    - Log into the AWS account
    - Navigate to `IAM` > `Users` > `CMS-service-account-1` > `Security Credentials` tab > `Access Keys` > `<old key>` > `actions` > `Deactivate`
    - Navigate to `IAM` > `Users` > `CMS-service-account-2` > `Security Credentials` tab > `Access Keys` > `<old key>` > `actions` > `Deactivate`
1. Wait an additional 24-48 hours to verify nothing is broken

1. Delete old key

    - Log into the AWS account
    - Navigate to `IAM` > `Users` > `CMS-service-account-1` > `Security Credentials` tab > `Access Keys` > `<old key>` > `actions` > `Delete`
    - Navigate to `IAM` > `Users` > `CMS-service-account-2` > `Security Credentials` tab > `Access Keys` > `<old key>` > `actions` > `Delete`

