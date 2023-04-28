## Request SOCKS access

You have to be wearing [SOCKS](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy) to access ArgoCD 🧦

## Request ArgoCD GUI Terminal access

[https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D)

Aurora's ticket for reference:  [#57530](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57530)

## ArgoCD UI URL:

[https://argocd.vfs.va.gov/applications/](https://argocd.vfs.va.gov/applications/) (Login with your GH account)

## Go to the <environment (dev|staging|sandbox)> Pod:

[https://argocd.vfs.va.gov/applications/vets-api-staging?resource=&node=%2FPod%2Fvets-api%2Fvets-api-web-6f859cdb5b-zklhh%2F0&tab=exec](https://argocd.vfs.va.gov/applications/vets-api-staging?resource=&node=%2FPod%2Fvets-api%2Fvets-api-web-6f859cdb5b-zklhh%2F0&tab=exec)

Click on one of the running vets-api--web-* pods (usually to the far right

You should be able to run normal developer things like

```
bundle exec rails c
```

## Print out our environment variables in the Terminal

```
printenv | grep FORM526
```

## check if our rsa key is in place

```
ls -la [path to rsa_key found in k8 manifests values.yml]
```
i.e. `/srv/vets-api/secret/lighthouse_form526_veteran_verification.key`

## sample API testing

```
bundle exec rails c
Flipper.enable('disability_compensation_lighthouse_rated_disabilities_provider') # for testing LH calls. Use Flipper.disable() for EVSS calls
settings = Settings.lighthouse.veteran_verification.form526
service = VeteranVerification::Service.new
response = service.get_rated_disabilities(settings.access_token.client_id, settings.access_token.rsa_key, {auth_params: {launch: Base64.encode64(JSON.generate({ patient: '1012845658V192434' }))}})
```
1012845662V671308 - mattie mae
1012845658V192434 - jessie fisher (edited) 
(sourced from [here](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/verification_test_accounts.md))
