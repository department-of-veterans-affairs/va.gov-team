# Non-IaC Resources

These are resources created while working on the `vaec-cie` migration through the console that are not managed in IaC or automatically cleaned up through some other process.

## CloudFormation

- `project-cie-iam-manager`: IAM Role and Policy for creating other IAM Roles and Policies.

## DynamoDB

- `project-cie-tfstate`: Table used for Terraform state locking

## S3

- `project-cie-tfstate`: Bucket used for Terraform state storage
- `project-cie-artifacts`: Bucket used for random artifacts

## Secrets Manager

### Global

- `global/datadog/tevi/api_key`: Datadog API key for the Tevi Datadog instance.
- `global/datadog/tevi/external_id`: Datadog "External ID" value for assuming roles in `vaec-cie` from the FedRAMP Datadog AWS account.
- `global/datadog/tevi/github_webhook_url`: Webhook URL (including API key) used by GitHub repos to send events to Datadog.
- `global/github/app/client_secret`: Client Secret for the [Check-In Experience DevOps GitHub App](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops).
- `global/github/app/id`: App ID for the [Check-In Experience DevOps GitHub App](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops).
- `global/github/app/private_key`: Private Key (PEM format) for the [Check-In Experience DevOps GitHub App](https://github.com/organizations/department-of-veterans-affairs/settings/apps/va-gov-check-in-experience-devops).

### Per Env
- `(dev|stg|prod)/chip/assorted_credentials`: Client (e.g. Vets-API, VEText) credentials used to connect to CHIP
- `(dev|stg|prod)/chip/assorted_api_keys`: API keys used by CHIP to connect to other services (e.g. Vista API, VEText)
- `(dev|stg|prod)/chip/jwt_key`: JWT signing/verification key.
- `(dev|stg|prod)/lorota/hash_salt`: LoROTA hash salt for validating user auth requests.
- `(dev|stg|prod)/lorota/jwt_key`: JWT signing/verification key.
- `(dev|stg|prod)/cie_upstream_api/station_map`: Station Number-to-DUZ Map for working with Vista API (deprecated)
- `(dev|stg|prod)/cie_upstream_api/station_duz_map`: Station Number-to-DUZ Map for working with Vista API
- `(dev|stg|prod)/cie_upstream_api/vista_api_key`: Vista API key (REST)
- `(dev|stg|prod)/cie_upstream_api/vista_rpc_key`: Vista API key (RPC)
- `(dev|stg|prod)/cie_upstream_api/vetext_rpc_key` VEText API key
- `(dev|stg|prod)/cie_upstream_api/vista_api_x/api_key`: Vista API X API key
