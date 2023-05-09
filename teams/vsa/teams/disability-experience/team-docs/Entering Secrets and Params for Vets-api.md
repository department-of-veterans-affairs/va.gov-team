
## Request access to AWS

Submit a request: https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=AWS+access+for+%5Bindividual%5D

Sample request: https://github.com/department-of-veterans-affairs/va.gov-team/issues/56501

## Setup your AWS account

Once your request is approved, you will be provided with a username and one time password. Follow [this section](https://depo-platform-documentation.scrollhelp.site/developer-docs/set-up-your-aws-account#SetupyourAWSAccount-Setupsecuritycredentials) on the developer docs

## Setup your params in Parameter Store

Use the intuitive UI in the AWS Management Console to create and populate secrets and other parameters within the [AWS Parameter Store](https://console.amazonaws-us-gov.com/systems-manager/parameters/?region=us-gov-west-1&tab=Table). 

## Setup your params in VSP and devops

Make pull requests to the VSP manifests [repo](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests)
ex. https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/pull/1848

and the devops [repo](https://github.com/department-of-veterans-affairs/devops) (only for the prod environment, currently)
ex. https://github.com/department-of-veterans-affairs/devops/pull/12917

and of course don't forget `vets-api`
ex. https://github.com/department-of-veterans-affairs/vets-api/pull/12467/files#diff-e769bbb8c1ba3711c5403b424ed9c218ffafba7f1890ee394717196f28ff4540
