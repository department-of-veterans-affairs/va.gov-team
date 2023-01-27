# Making forward proxy changes

This is a brief guide on how to add a new interface to the VA.gov forward proxy.

# Update `devops` repo

1. Add the new interface to the forward proxy configuration file.
2. Add a new listener port in the `main.tf` file for the relevant environment.
3. Update the `vets-api` settings Jinja template to reference the new connection, if necessary.
  - The settings in the Jinja templates are not being used for `vets-api` currently, due to the transition to EKS. However, the EKS team would still like to keep these configuration files in-sync for the time being. 
5. Once PR is merged, request a deployment of the forward proxy.
6. Once re-deployed, connect to the forward proxy and `curl` against `localhost` with whatever port you've assigned to the interface, as well as the healthcheck endpoint.
  - This will let you know if the interface has been configured correctly.
  - ie: `curl -i -k https://localhost:4498/mhv-sm-api/patient/v1/session`

Example PR:
- https://github.com/department-of-veterans-affairs/devops/pull/12492

# Update `vsp-infra-application-manifests` repo

_This step may not be needed, depending on your changes. This will only affect applications deployed to EKS._

1. Add any new SSM parameters to the `values.yaml` and `templates.yaml`.
  - Make sure they are added/updated in AWS SSM as well! 
3. Make sure to update or add any environment variable references in `values.yaml` also.

Example PR:
- https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/pull/1329
