# `dsvagovcloud` Resources

This document lists resources important to the Check-In Experience products that are managed in the `dsvagovcloud` AWS account, rather than the `vaec-cms` or `vaec-cie` AWS accounts. These resources are not managed directly by the team, are not defined in the team's Infrastructure-as-Code (IaC), and are thus somewhat vulnerable to mistaken or inadvertent loss or deletion.

From time to time, the VA.gov Platform Team will refactor its projects, moving resources from repository to repository. We are not necessarily notified of this. **Any locations noted below are subject to change without warning, and their absence or the absence of references to our resources should not be interpreted as deprecation or absence of the resources themselves.**

Environment names have been standardized to `dev`, `stg`, and `prod` for the sake of consistency. Where the actual environment name differs, it will be noted in parentheses.

## Travel Claims / BTSSS
- Processing travel claims requires a connection to BTSSS. This is proxied via the Forward Proxy [^1].




[^1]: Forward Proxy: https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy
  `stg` (`staging`): https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/blob/d3cccd9d98c416d676a06378592276d8c0250e21/fwdproxy-config/fwdproxy-vagov-staging-vars.yml#L574
  `prod` (`prod`): WIP pending this PR: https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/pull/482
