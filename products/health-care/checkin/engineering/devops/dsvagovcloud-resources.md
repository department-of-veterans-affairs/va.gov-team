# `dsvagovcloud` Resources

This document lists resources important to the Check-In Experience products that are managed in the `dsvagovcloud` AWS account, rather than the `vaec-cms` or `vaec-cie` AWS accounts. These resources are not managed directly by the team, are not defined in the team's Infrastructure-as-Code (IaC), and are thus somewhat vulnerable to mistaken or inadvertent loss or deletion.

From time to time, the VA.gov Platform Team will refactor its projects, moving resources from repository to repository. We are not necessarily notified of this. **Any locations noted below are subject to change without warning, and their absence or the absence of references to our resources should not be interpreted as deprecation or absence of the resources themselves.**

Environment names have been standardized to `dev`, `stg`, and `prod` for the sake of consistency. Where the actual environment name differs, or when a different or additional environment is mapped to our resource, it will be noted in parentheses.

## Travel Claims / BTSSS
- Processing travel claims requires a connection to BTSSS. This is proxied via the Forward Proxy on `stg` and `prod`, but not `dev`.
  - `stg` (`staging`): https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/blob/d3cccd9d98c416d676a06378592276d8c0250e21/fwdproxy-config/fwdproxy-vagov-staging-vars.yml#L574
  - `prod`: WIP pending this PR: https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/pull/482

## Reverse Proxy for Review Instances
- Review Instances need to proxy connections to CHIP. This is handled in a few different places:
  - DNS records for the `dev`, `stg`, and `prod` environments are created in the utility VPC and managed in the Platform DevOps repo.
    - Platform DevOps: https://github.com/department-of-veterans-affairs/devops/blob/03f7c7b1d798753804d5c9773fa27bf9868075a6/terraform/environments/dsva-vagov-utility/chip.tf#L2
  - Backends for `dev` and `stg`, but not `prod`, environments are managed in the Forward Proxy.
    - `dev` (`sandbox`): https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/blob/d3cccd9d98c416d676a06378592276d8c0250e21/fwdproxy-config/fwdproxy-vagov-sandbox-vars.yml#L83
    - `dev`: https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/blob/d3cccd9d98c416d676a06378592276d8c0250e21/fwdproxy-config/fwdproxy-vagov-dev-vars.yml#L96
    - `stg` (`staging`): https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/blob/d3cccd9d98c416d676a06378592276d8c0250e21/fwdproxy-config/fwdproxy-vagov-staging-vars.yml#L98C1-L104C1
