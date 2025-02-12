<h1> Resolving Missing Pega Status Issues </h1>

<h2>Understanding the Issue: </h2>

The "Missing Pega Status" dashboard widget indicates that certain forms haven't been processed by the Pega system. This can lead to delays and potential errors in the form processing workflow.

<h2>Resolving the Issue: </h2>

1. Notify a team member from the Pega/DOCMP team if the forms in question are stuck in queue.

2. Connect to the VA Access Gateway:

* Ensure you have the necessary credentials: VA-issued PIV card, User domain ID, and domain password.
* Connect to the VA Access Gateway using Citrix VPN.

3. Access the Vets-API Pod:

* Open a web browser and navigate to  https://argocd.vfs.va.gov/applications/vets-api-prod?resource=
* Select an open pod, which will have a name beginning with `vets-api-web-`.

4. Use the Rails Console:

* In the pod's command line interface, start the Rails console:

```Bash
# Bash session
bundle exec rails console
```

5. Query the Database:

* Use the IvcChampvaForm model to query the database for forms with a missing pega_status:

```Ruby
# Rails console
IvcChampvaForm.where(pega_status: nil)
```

6. Update the pega_status:

* For each form with a missing pega_status, update the value to "Manually Processed":

```Ruby
# Rails console
form = IvcChampvaForm.find(form_id)
form.update(pega_status: "Manually Processed")
form.save
```

* Replace form_id with the actual ID of the form you want to update.

<h2> Additional Considerations: </h2>

* Root Cause Analysis: While manually updating the pega_status resolves the immediate issue, it's important to investigate the underlying cause of the missing statuses. This could involve checking the Pega system's configuration, network connectivity, or data integrity.

* Monitoring and Alerting: Ensure that appropriate monitoring and alerting mechanisms are in place to detect and notify teams of future missing status issues.

* Documentation: Document the steps involved in resolving missing Pega status issues for future reference.

By following these steps and addressing the root cause, you can effectively resolve missing Pega status issues and maintain the health of the form processing system.






