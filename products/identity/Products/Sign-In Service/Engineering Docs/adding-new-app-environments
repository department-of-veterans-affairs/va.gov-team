1. 
In order to get a new environment for one of our applications, first we have to add that environment and the relevant files within it’s application folder. 
We can take a look at the staging environment for sign-in-service as an example. 
In this example, we copied over the files from dev to staging and swapped out “dev” for “staging” within the transferred code. 
Later on we will have to ensure that those newly named resources are created for us before we merge this code in: https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps/sign-in-service


2.
The specifications we have made in the applications in vsp-infrastructure-manifests are for the app itself, but the environment needs to be specified in the vsp-infra-argocd repo: 
https://github.com/department-of-veterans-affairs/vsp-infra-argocd
In order to add a new environment, first we have to add a line for this environment within this file: https://github.com/department-of-veterans-affairs/vsp-infra-argocd/blob/main/chart/values.yaml


Ex: Add “staging” on line #111
Check back to the values.yaml for staging in vsp-infra-application-manifests: https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/blob/main/apps/argocd-apps/staging/values.yaml

In the above codeblock, the following blocks are automatically generated once the new environment value has been added to https://github.com/department-of-veterans-affairs/vsp-infra-argocd/blob/main/chart/values.yaml and it has been merged in
``` 
	- name: sign-in-service
	 Autosync_enabled: false
```

3.
The next step involves ensuring that all of the necessary components within the environment will be built out via the terraform code in this repo: (https://github.com/department-of-veterans-affairs/devops/tree/master) 

For example, if we copy over code from dev to staging, we need to have certain components, like roles for those new environments, are already in place. This is handled through the terraform code in the above repo. 
You will need to reach out to the platform team to apply these changes.
Once the terraform provisioning has been applied, ensure that all of the relevant components referenced within step 1 are there.

Now navigate to ArgoCD and ensure that the new environments are visible within app-of-apps

4.
Next step is to run “git log” and get the GIT SHA of the the most current commit

Copy this GIT SHA and when running app-of-apps-<env> replace “HEAD” with the git-sha

Then ensure the components are working correctly.

