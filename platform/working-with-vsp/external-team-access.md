
# Access for External Teams

This document explains the rationale behind the access we've granted (or not granted) to external teams.

* Includes permission level
* Includes whether access+permission applies to the Github Parent Team or Github Subteam

<hr/>

* [Slack](#slack)
* [Github repos - Current](#github-repos---current)
* [Github repos - Future](#github-repos---future)
* [GovCloud](#govcloud)
* [Github repos - Previous](#github-repos---previous---jul-aug-2018)

<hr/>


## Slack

* **Product channel** - Allows entire external team to share product-related information with other teams working in a similar area. E.g., teams who are working on 526 forms are in the *#claimsmodern* channel.
  * If team is working on an existing product, add them to the existing product channel (e.g., *#claimsmodern*). 
  * If team is working on a new product, create a new channel for them.

* **Support channel** - Allows entire external team to ask process questions about onboarding, development, deployment, and project management.
  * Add team to *#support-external* channel.

* **<i>#devops</i> channel - NO access**. DSVA/AdHoc want this channel to remain internal only.

<hr/>

## Github repos - Current 

#### Current as of Sep 2018

* **vets.gov-team - WRITE access** - Parent team
  * Allows external team to reference related product information and process docs, as well as file agile/project management issues and issues requesting DSVA review/support.

* **vets.gov-ato - READ access** - Parent team
  * Allows external team to review the ATO documents for the Veteran Tools Platform and reference them if needed within VA.

* **vets-website - WRITE access** - Subteam

* **vets-api - WRITE access** - Subteam

* **vets-json-schema - WRITE access** - Subteam

* **vets-api-mockdata - READ access** - Subteam
  *  Access to the above 4 repos allows external team to work with the Veteran Tools Platform code.

* **devops - READ access** - Subteam
  * Read access allows them to view/clone the ```ssh-config``` file in this repo, which they need to use the SOCKS proxy.

* **vets-contrib - NO access**
  * Process to get SSH keys added to the authorized list has been revised so external teams do not need access to this repo.
  
<hr/>

### Github Repos - Future

* **vets.gov-team - WRITE access** - Parent team
  * Allows external team to reference related product information and process docs, as well as file agile/project management issues and issues requesting DSVA review/support.

* **vets.gov-ato - READ access** - Parent team
  * Allows external team to review the ATO documents for the Veteran Tools Platform and reference them if needed within VA.

* **vets-website - WRITE access** - Subteam

* **vets-api - WRITE access** - Subteam

* **vets-json-schema - WRITE access** - Subteam

* **vets-api-mockdata - READ access** - Subteam
  *  Access to the above 4 repos allows external team to work with the Veteran Tools Platform code.

* **devops - NO access** - Subteam
  * Process to view/clone the ```ssh-config``` file will be revised so external teams do not need access to this repo.

* **vets-contrib - NO access** - Subteam
  * Process to get SSH keys added to the authorized list has been revised so external teams do not need access to this repo.

<hr/>

### Other Github access

Our general POV is that external teams only need access to vets.gov-team repo, vets-ato repo, and the code repos.

Access to additional Github repos can be considered on a case-by-case basis by the DSVA contact in consultation with Engineering/Devops.

* Before providing access, consider DSVA/AdHoc information that may be in the repo that should not be exposed to an external contractor, e.g., for contract purposes.

* Limit to **READ access** unless external team can demonstrate they need unsupervised ability to add/edit information in the repo.

<hr/>

## GovCloud

**NO access**

GovCloud does handle logging, which could be useful for external contractors. However, GovCloud contains information about Amazon services that external teams should not have access to.

### Logging

1. **Now**

    * If BAH or Community Care teams want to see logs, they should do this via their review instances.
      * They can ssh to the review instance and see the logs there. These are the "same" as staging/production.
      * They can also see dashboard and metrics from grafana and exceptions in sentry.

    * When their code goes to staging/production, if there are errors, they will need AdHoc/DSVA help to view those. E.g., AdHoc/DSVA will notice the error and need to contact the external team so they can figure it out.
      * Errors that might occur in staging/production are likely to be environment-related errors.
      * We will have to wait and see if this becomes a problem (e.g., it's taking too much time for AdHoc/DSVA).

2. **Mid-term**

    * Create a system to expose the logs for the external team's portion of the environments logs with an audit trail like Heroku.
      * May not be needed depending on when the Future process is completed vs the time it would take to complete this Mid-term effort.

3. **Future**

    * When external teams always go through the PIV process, we should trust them with access to GovCloud.


### New services

External teams who need to provision a new service need to do so through the DSVA Product Manager, who will talk with the appropriate DSVA/AdHoc people to make it happen.


<hr/>

## Github repos - Previous - Jul-Aug 2018

#### For reference

* **vets.gov-team - WRITE access** - Parent team
  * Allows external team to reference related product information and process docs, as well as file agile/project management issues and issues requesting DSVA review/support.

* **vets.gov-ato - READ access** - Parent team
  * Allows external team to review the ATO documents for the Veteran Tools Platform and reference them if needed within VA.

* **vets-website - WRITE access** - Subteam

* **vets-api - WRITE access** - Subteam

* **vets-json-schema - WRITE access** - Subteam

* **vets-api-mockdata - READ access** - Subteam
  *  Access to the above 4 repos allows external team to work with the Veteran Tools Platform code.

* **devops - READ access** - Subteam
  * Read access allows them to view/clone the ```ssh-config``` file in this repo, which they need to use the SOCKS proxy.

* **vets-contrib - READ access** - Subteam
  * Read access allows them to be notified when their SSH key has been added to the list of authorized keys.

