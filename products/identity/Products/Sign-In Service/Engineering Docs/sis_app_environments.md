# Sign-in Service App Environments

1. Sign-in Service environments are managed in [`vsp-infra-application-manifests`](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps/sign-in-service). A new environment can be copied from one of the existing, ie. copying the `dev` directory to `staging` and updating all of the relevant names in the contained files.

2. The app specifications have now been covered, but the new environment still needs to be specified in the [`vsp-infra-argocd`](https://github.com/department-of-veterans-affairs/vsp-infra-argocd) repository in order for the Docker image to be created properly. Update the `sign-in-service` entry in [`/chart/values.yml`](https://github.com/department-of-veterans-affairs/vsp-infra-argocd/blob/main/chart/values.yaml) to include the new environment:

    ```yaml
    - name: sign-in-service
    environments:
      - staging
    autosync_enabled: false
    ```

3. After `vsp-infra-argocd` has been updated the `vsp-infra-application-manifest` repository should be automatically updated with the new environment. Check `/apps/argocd-apps/[env]/values.yaml` to find the SiS environment:

    ```yaml
    # apps/argocd-apps/staging/values.yml
    Applications:
    ...
    - name: sign-in-service
      autosync_enabled: false
    ```

4. Next, you will need to ensure that all of the necessary components within the environment will be built out via the terraform code in [`devops` repository](https://github.com/department-of-veterans-affairs/devops). In order to make these changes you will need to reach out to the platform team to perform the updates on your behalf.
Once the terraform provisioning has been applied, ensure that all of the relevant components referenced within step 1 are there.

5. Navigate [to ArgoCD](https://argocd.vfs.va.gov/applications) and ensure that the new environment is visible within `app-of-apps-[env]` for your chosen environment.

6. Once you have found the Argo app in the appropriate `app-of-apps-[env]` you will need to add the most recent SiS commit tag to it. The easiest way to do this is to open the repository in your console and run `git log` to see the most recent git SHA.

    Copy this git SHA and when running `app-of-apps-[env]` replace “HEAD” with the git SHA, then ensure the components are working correctly.
