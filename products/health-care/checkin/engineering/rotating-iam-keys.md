# Rotating IAM Keys
As per VAEC policy, AWS IAM Access Keys should be rotated every 60 days. Warnings are typically sent out when keys are greater than 90 days old.
## Key locations
- Datadog
- AWS Secrets manager
- GitHub
## Key Rotation Procedure
1. Generate a new IAM access key
    - Log into the AWS account
    - Navigate to `IAM` > `Users` > `CMS-service-account-1` > `Security Credentials` tab > `Access Keys` > `Create Access Key`, select the use case of `other` and make sure to copy secret key.
    - Navigate to `IAM` > `Users` > `CMS-service-account-2` > `Security Credentials` tab > `Access Keys` > `Create Access Key`, select the use case of `other` and make sure to copy secret key.
1. Update AWS Secrets Manager
![Screenshot 2024-03-26 at 2 47 37 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/2982977/0412938a-a974-4977-ba11-6a16f0c86934)
    - Navigate to `AWS Secrets Manager` > `Secrets`
    - Update `tevi/cms_service_account_1/aws_access_key_id`
    - Update `tevi/cms_service_account_1/aws_secret_access_key`
    - Update `tevi/cms_service_account_2/aws_access_key_id`
    - Update `tevi/cms_service_account_2/aws_secret_access_key`
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

