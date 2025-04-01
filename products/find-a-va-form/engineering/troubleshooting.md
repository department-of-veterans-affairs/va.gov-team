# Forms Troubleshooting

- [Find Forms FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/find-forms-faq.md)


## Forms issues are typically due to
| Cause | Looks like | Mitigation | 
-- | -- | --
| **vets-api latency** (broad-scale) | Big batches of "Bad PDF link" emails going to Forms manager <br/><br/>Spikes in Sentry errors, [Forms report](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?id=19&project=4&statsPeriod=7d). | Below: contact Platform Support for help. |
| **API rate limits** | Spikes in Sentry errors, with 429 error message in the logs, [Forms report](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?id=19&project=4&statsPeriod=7d). | Below: request API rate limit increase. |
| **Data sync issues from CMS > Lighthouse** | No CMS data flags on Forms content, but errors in the Forms search UI on va.gov.<br/><br/>Underlying cause may be vets-api latency, or failed sidekiq job | Below: contact Platform Support / Lighthouse for help. |
| **Data entry errors in the Forms DB** | Individual forms in the CMS get flagged as Deleted for Name Changed. <br/><br/>Forms in the Forms DB do not appear in the CMS after migration. | Below: contact the correct Forms Manager to correct the data upstream in the Forms DB. <br/><br/>Verify that [Forms migration](https://prod.cms.va.gov/admin/structure/migrate/manage/forms/migrations) does not display any Messages. Rerun if yes, contact Forms Mgr if no.|

### Contact Platform support 
- Visit #vfs-platform-support, use the Platform support workflow, to request assistance, e.g. https://dsva.slack.com/archives/CBU0KDSB1/p1660066854784409
- Ask them to explore vets-api latency.

### Contact Lighthouse Forms team
If vets-api latency is not an issue, the issue may be due to data import from CMS > Lighthouse. This migration is handled by a Sidekiq job, `VAForms::FetchLatest` (may also be referred to as `VAForms::FormReloader`). The Lighthouse Forms team owns the Sidekiq job.

You can reach the Lighthouse Forms team in #va-forms in DSVA slack. @ Kristen Brown and Matt Kelly who can confirm the Sidekiq job is running correctly and can inspect logs or rerun the job. 

### Request API limit increase
If 429 errors occur in Datadog or Sentry, this indicates that traffic is high and we are being throttled by an API rate limit / requests are being rejected. We can request API limit increases for specific endpoints, and the Lighthouse Forms team can help expedite approvals. **NOTE: Our API KEY IS SHARED.** Rate limit changes will affect all users of the API key, across used APIs. (Slightly more info on shared key [in Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/engineering.md#api-userkey);  [background in Slack](https://dsva.slack.com/archives/CUB5X5MGF/p1695666665300929).)

To request a rate limit increase:
1. Ping #va-forms in DSVA slack, and explain the issue / what you're seeing to the Lighthouse Forms team.
2. LH Forms can provide specifics on what endpoint will need to be increased for limit, and what the current limit is. They can also help suggest the new limit. If you already know this info, skip to 3.
3. Visit https://developer.va.gov/support/contact-us. Fill out the form with endpoint, limit, and limit increase information/
4. Share with #va-forms that request is made. Lighthouse team can then help expedite approval.

Typically, we may want to reduce the limit again after traffic spikes end. If that's true, create a ticket to track requesting the lower limit. **Be sure that rate limit changes should not affect other teams using the shared API key.**

--- 
## Symptom: Reports of Bad PDF link emails
VA Forms managers may report that veterans are sending "Bad PDF Link" emails, and forms access is having problems.

### Typical root cause(s)
1. vets-api is experiencing high latency
2. A VA forms manager changed the name of a PDF while making an update and the CMS data hasn't been merged and re-published yet

### How to troubleshoot

#### **If reported by Forms manager: Verify if internal / external** 
Ask mgr to forward an example link or Form number for the issue. Their support mailbox receives messages from internal and external users, and an example will allow you to confirm that they are referring to the *public* web site form search (va.gov/find-forms) vs. the *internal* VBA forms search (vba.va.gov).  
  - **If internal:** (on vba.va.gov) contact Kevin Reid <Kevin.Reid@va.gov>
  - **If not:** (on va.gov) It's possible that vets-api latency may cause delays / failures to download forms. 
    - Check Sentry for more information: 
      - e.g. for a single form: http://sentry.vfs.va.gov/organizations/vsp/issues/17064/events/?project=4
      - e.g. for large-scale latency event: http://sentry.vfs.va.gov/organizations/vsp/discover/results/?id=19&project=4&statsPeriod=7d

If the form is on va.gov, and Sentry shows a spike in Forms errors:
- Visit #vfs-platform-support, use the Platform support workflow, to request assistance, e.g. https://dsva.slack.com/archives/CBU0KDSB1/p1660066854784409
- Ask them to explore vets-api latency. 


#### **Confirm if data was altered in Forms DB:**
If not a large-scale event, the data for a particular form may have been altered. 
1. Check the [Flagged Content Dashboard](https://prod.cms.va.gov/admin/content/flagged?type=va_form&workbench_access_section__section=All) in Drupal CMS, to see if the reported form was updated.![Screen Shot 2022-08-10 at 6 08 25 PM](https://user-images.githubusercontent.com/85581471/184048356-4fe92e9a-9582-4c92-a6ef-29c23fc3a5b0.png)

2. Click the form name and on Form node, in right sidebar, under Recent Changes, see a description of any change. 
![Screen Shot 2022-08-10 at 6 07 47 PM](https://user-images.githubusercontent.com/85581471/184048365-1c800286-34ef-4893-95ce-88f0f7cc0a8d.png)

3. Click the Revisions tab, and follow these steps to compare revisions / see the full data that changed:   https://dsva.slack.com/archives/CUB5X5MGF/p1626366090043000 

Form managers have been instructed not to make name changes unless absolutely necessary because it causes the form to lose ranking on search engines and can also break links on other parts of VA.gov.

**If form name has been changed:**<br/>
- Email the form manager for the Administration listed on the Form in the CMS. Ask them to revert the name change. 
- After the name has been changed, a Forms DB sync + content release must run to restore the form at the original link.


## Find a Form search errors show an existing form is missing
VA forms managers or stakeholders may report users are emailing to report trouble accessing forms. Sometimes this may appear as an error in Find a Form search: 
![image (6)](https://user-images.githubusercontent.com/85581471/230933518-01edd770-9fdf-487d-9318-15b7ef0c40e6.png)

### Typical root cause
1. Form errors can occur when vets-api is experiencing high latency. 
2. The sidekiq job that copies data from the Forms DB to the vets-api datastore may have failed. 

**Sidekiq job**
`VAForms::FormReloader` sidekiq job runs nightly at 2am ET, and typically takes 15-20 min. to complete.
* [Grafana logs](https://grafana.vfs.va.gov/explore?orgId=1&left=%5B%22now-5d%22,%22now%22,%22Loki%20(Prod)%22,%7B%22exemplar%22:true,%22expr%22:%22%7Bapp%3D%5C%22vets-api-sidekiq%5C%22%7D%20%7C%3D%20%5C%22VAForms::FormReloader%5C%22%22%7D%5D) filtered by the vets-api-sidekiq (EKS application) 
* Equivalent logs in [Datadog](https://vagov.ddog-gov.com/logs?query=%40named_tags.dd.env%3Aeks-prod%20host%3A%2Asidekiq%2A%20VAForms%5C%3A%5C%3AFormReloader&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=time%2Cdesc&viz=stream&from_ts=1680532454231&to_ts=1681137254231&live=true) also

### How to troubleshoot
- Verify if CMS data is showing large batches of altered forms since the last sync: [VA Forms Flagged Content](https://prod.cms.va.gov/admin/content/va-forms/new-deleted) in Drupal CMS. If not, this is a CMS data > Lighthouse issue.
- Visit #vfs-platform-support, use the Platform support workflow, to request assistance to explore vets-api latency, e.g. https://dsva.slack.com/archives/CBU0KDSB1/p1660066854784409
- If no latency is detected, ask Lighthouse contacts to explore whether the `VAForms::FormReloader` sidekiq job has failed, and rerun if so.

## Time lag between VA Form changes & when updated on Find a VA Form
Changes in the Forms DB will appear immediately in the the Find a Form search results (which don't route through Drupal CMS). However: data on each Form detail page relies on Drupal CMS. This means that a change in the Forms DB may break user functionality in Find a Form, during the window between a Forms DB change and the Forms DB > Drupal data migration.

- Detail pages update only after the Forms API merge runs over night, AND after the next day's 9 AM CMS publish.  
- Also see this Slack thread for more details on timing: https://dsva.slack.com/archives/CUB5X5MGF/p1623794210193400
![image](https://user-images.githubusercontent.com/73354907/125852399-af89f562-4ea3-4fe4-80fe-2d524eff2e45.png)

**To troubleshoot:**
- Visit https://github.com/department-of-veterans-affairs/content-build/actions/workflows/content-release.yml to verify if Content Release has deployed successfully. If not, run the workflow to trigger a release. Or,
- visit #cms-support, and @cms-helpdesk to request a content release.

# Form upload tool
Form upload tool is owned by the Veteran Facing Forms team.
On certain Form detail pages, this react widget appears and allows end users to upload a filled-out form to send to VA, from the form detail page. 

If you receive reports of form upload issues, provide details in the #veteran-facing-forms channel, and tag tag Tricia Baker and Matt Dingee.  (March 2025)

Feature documentation is here: https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/DocumentUpload_FindaForm/readme.md

