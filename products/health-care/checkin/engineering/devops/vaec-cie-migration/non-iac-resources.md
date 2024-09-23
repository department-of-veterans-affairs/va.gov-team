# Non-IaC Resources

These are resources created while working on the `vaec-cie` migration through the console that are not managed in IaC or automatically cleaned up through some other process.

## CloudFormation

- `project-cie-iam-manager`: IAM Role and Policy for creating other IAM Roles and Policies.

## DynamoDB

- `project-cie-tfstate`: Table used for Terraform state locking

## S3

- `project-cie-tfstate`: Bucket used for Terraform state storage

## Secrets Manager

- `global/datadog/tevi/api_key`: Datadog API key for the Tevi Datadog instance.
- `global/datadog/tevi/external_id`: Datadog "External ID" value for assuming roles in `vaec-cie` from the FedRAMP Datadog AWS account.
- `global/github/app/client_secret`: Client Secret for the [Check-In Experience DevOps GitHub App](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops).
- `global/github/app/id`: App ID for the [Check-In Experience DevOps GitHub App](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops).
- `global/github/app/private_key`: Private Key (PEM format) for the [Check-In Experience DevOps GitHub App](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops).
- `(dev|stg|prod)/lorota/hash_salt`: Hash salt.
- `(dev|stg|prod)/lorota/jwt_key`: JWT signing/verification key.
