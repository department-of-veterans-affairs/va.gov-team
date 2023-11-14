# How to set up a VAMC's Oracle Health (formerly Cerner) integration within the VA.gov health care portals: hard coded data and CMS data

As of Nov 2023, Oracle has acquired Cerner, and Cerner is now Oracle Health.

## Purpose
As healthcare systems migrate to using Oracle Health (formerly Cerner) for electronic health records, the website will update to point users to Oracle Health API / UI for tasks like prescription refills, appointment scheduling, viewing lab results, messaging healthcare team, etc. As a result, some of the links that we direct our users to if they belong to that facility need to reflect that change. This document gives examples / steps for a Oracle Health cutover using hard coded data.

## A Cerner facility cutover is scheduled
Your PO will tell the team that a Oracle Health facility/system is "ready to go live" or "ready to cutover." Exciting! This means the team responsible for migrating a System from VistA to Oracle Health has completed their testing, the healthcare records system cutover is complete, and the website can be updated to point users to Oracle Health triggers as well. Now you need some information.

### Step 1: Derive Oracle Health facility information

For the following steps, we will use the __Alaska VA Medical Center__ as an example.

**Task 1: Request / find the facility ID**  
(should be 3 digits) of the facility that will soon go live as a Oracle Health facility, e.g.

```
463 | Alaska VA
531 | Boise, ID
648 | Portland, OR
653 | Roseburg (Roseburg OR)
663 | Puget Sound (Seattle WA)
668 | Mann Grandstaff
687 | Walla Walla, WA
692 | White City, OR
757 | Chalmers P. Wylie Veterans Outpatient Clinic
```
  - In our example, we determine from leadership that the facility ID of the Alaska VA Medical Center is __463__. If you aren't sure about the ID, confirm with your PO or the Oracle Health cutover team.

That ID is pivotal for the following tasks:


**Task 2: Identify if the Facility has exceptions** 

By default, once you have set up a VAMC's Oracle Health integration, it is enabled for _all_ health care portals, including prescription refills, secure messaging, appointments, medical records, and test results. There may be cases where a VAMC's Oracle Health integration is limited to only one or more of these. In this case, you can add the VAMC's facility ID into a health care portal's "blocklist", which will disable the VAMC's Oracle Health integration for that particular health care portal.

Exceptions:

1. Facility is Oracle Health but does not have Oracle Health prescription features. ([View the prescription features page here](https://www.va.gov/health-care/refill-track-prescriptions/))
1. Facility is Oracle Health but does not have Oracle Health secure messaging features. ([View the secure messaging features page here](https://www.va.gov/health-care/secure-messaging/))
1. Facility is Oracle Health but does not have Oracle Health appointment features. ([View the appointment features page here](https://www.va.gov/health-care/schedule-view-va-appointments/))
1. Facility is Oracle Health but does not have Oracle Health medical records features. ([View the medical records features page here](https://www.va.gov/health-care/get-medical-records/))
1. Facility is Oracle Health but does not have Oracle Health test and lab results. ([View the test and lab results page here](https://www.va.gov/health-care/view-test-and-lab-results/))

If you answered yes to any of these, keep that information for code changes in Step 2.4 below.

**Task 3: Schedule** 

Oracle Health records cutovers typically happen over the weekend, and web tasks happen the Monday after. Confirm the scheduled cutover plan. Engineering tasks should all be completed the week prior, minimum, with only a feature flag update remaining for the day of cutover.

_All Oracle Health cutovers after Boise are delayed until 2023._

**Task 4: Identify any available test users** 

The integration testers who are verifying the records integrations typically have test users available they can share, for use on staging. To request that user information, contact & share the healthcare system / facility ID with:

Anthony Diaz (Contractor) <Anthony.Diaz@va.gov>
System Integration Testing (SIT) Test Lead, Planned Systems International (PSI)

And add that user information to the [Test User Dashboard](https://tud.vfs.va.gov/), Without a test user, there is no way to test out the facility's Oracle Health launch on staging. (Test users will not work on production.)

Now that you have the Facility ID, exception cases, and the "go live" date, we can get started with our implementation.

### Some much needed context

In an ideal world, when we fetch facilities that a user belongs to, there should exist a key-value pair on them that is `isCerner: true/false`. However, we have noticed that *every facility that has migrated to Oracle Health is still showing `isCerner: false`*, which is incorrect.

Since that `isCerner` flag is unreliable, we have resorted to maintaining a [list of Oracle Health facility IDs both in `vets-website`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/cerner/index.js#L5) as well as [on Flipper with `cerner_override_{facilityID}`](https://api.va.gov/flipper/features) (to test various environments before launching).

### Step 2: Create feature toggle & Exceptions

**Task 1: create a Oracle Health feature toggle for the facility** 

The feature toggle should be named `cerner_override_{facilityID}` because [this code that derives a user's Oracle Health facilities](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/selectors.js#L31) is expecting that syntax.

Add a feature toggle [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml#L26). Here is an example:

```yml
  cerner_override_463:
    actor_type: user
    description: This will show the Oracle Health facility 463 as `isCerner`.
```
Wait until your `vets-api` Pull Request is merged **and deployed**. You will then be able to find your feature toggles at https://api.va.gov/flipper/features. Refer to [the guide on how to work with Flipper feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) for more details on how to enable/disable/etc. your new feature toggles.

Example Pull Request: https://github.com/department-of-veterans-affairs/vets-api/pull/6045/files.

**WARNING: YOU MUST MERGE AND DEPLOY THE `vets-api` PULL REQUEST BEFORE MERGING THE `vets-website` PULL REQUEST DESCRIBED BELOW.**


**Task 2: add your new feature toggle in vets-website**  

For example, for facility ID 463 you would add `cernerOverride463: 'cerner_override_463',` in [`featureFlagNames.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/feature-toggles/featureFlagNames.js#L5). 

Example Pull Request: https://github.com/department-of-veterans-affairs/vets-website/pull/16295/files

**Task 3: add the facility ID**

Add the facility ID to `CERNER_FACILITY_IDS` in [vets-website/src/platform/utilities/cerner/index.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/cerner/index.js#L5).

Example Pull Request: https://github.com/department-of-veterans-affairs/vets-website/pull/16220/files


**Task 4: add Exceptions**

In **Step 1, Task 2** above, if the facility matches any of the below cases, below be sure to add their facilityID to the respective blocklist in [vets-website/src/platform/utilities/cerner/index.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/cerner/index.js#L20):

1. Facility is Oracle Health but does not have Oracle Health prescription features.
1. Facility is Oracle Health but does not have Oracle Health secure messaging features.
1. Facility is Oracle Health but does not have Oracle Health appointment features.
1. Facility is Oracle Health but does not have Oracle Health medical records features.
1. Facility is Oracle Health but does not have Oracle Health test and lab results.


Merge and deploy the newly created `vets-website` Pull Request. 
At this point, both the `vets-website` and `vets-api` Pull Requests should be merged and deployed. 


### Step 3: Staging validation
Merge your changes. Now that the facility ID has been added to our list of Oracle Health facility IDs in vets-website, the feature toggle has been created, and you have added the facility ID to all necessary blocklists, we are ready to allow stakeholders to test on Staging. 

#### **Task 1**: Update flipper feature toggle in staging
1. https://staging-api.va.gov/flipper/features
2. Login with a verified ID.me account. (An account that is not properly verified will run into errors. Follow [id.me steps to Verify](https://www.va.gov/resources/verifying-your-identity-on-vagov/).)
4. Toggle the feature toggle to on
5. You can test on Staging with Oracle Health test users, but not on prod. For staging testing, staging.va.gov, log in with a user that belongs to the facility ID (from the **Step 1, Task 4** above). 

Once logged in, test that the CTA widget appears as desired for the user on the following STAGING pages:

1. [View the prescription features page here](https://www.staging.va.gov/health-care/refill-track-prescriptions/)
1. [View the secure messaging features page here](https://www.staging.va.gov/health-care/secure-messaging/)
1. [View the appointment features page here](https://www.staging.va.gov/health-care/schedule-view-va-appointments/)
1. [View the medical records features page here](https://www.staging.va.gov/health-care/get-medical-records/)
1. [View the test and lab results page here](https://www.staging.va.gov/health-care/view-test-and-lab-results/)

If there is any issue with the content of the above pages, you can find the code for each of those pages here:

1. [View the prescription features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/refill-track-prescriptions-page/index.js)
1. [View the secure messaging features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/secure-messaging-page/index.js)
1. [View the appointment features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/schedule-view-va-appointments-page/index.js)
1. [View the medical records features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/get-medical-records-page/index.js)
1. [View the test and lab results page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/view-test-and-lab-results-page/index.js)

#### **Task 2**: Update Drupal EHR value to Converting to Oracle Health
As Drupal admin, in prod CMS: 
1. Content > Filter by content type = VAMC System, identify the Healthcare System, Edit. 
1. On the system node, go to the "VA Health Connect and Health Records System" panel.
1. Under Electronic health records system, click "Electronic health records system" and select, **"Converting to Cerner."**
1. Go to the Editorial Workflow.
1. Click "Save as" and select "Published."
1. Enter a brief Revision log message.
1. Click "Save."

If you aren't clear which VAMC System to edit, check VAMC Facility > System note below.

### Step 4: Launch!
On the Monday morning following a records cutover, Dave Conlon or Lauren Alexanderson will verify that the records cutover is successful, & will notify you that we are ready for launch! 🚀 Tasks in Step 4 should be completed ASAP on the Monday morning, before 10am EST if possible.

#### **Task 1**: Update flipper feature toggle in production
1. https://api.va.gov/flipper/features 
3. Login with a verified ID.me account. (An account that is not properly verified will run into errors. Follow [id.me steps to Verify](https://www.va.gov/resources/verifying-your-identity-on-vagov/).)
4. Toggle the feature toggle to on

Once logged in, re-test that the CTA widget appears as desired for the user on the following PROD pages:

1. [View the prescription features page here](https://www.va.gov/health-care/refill-track-prescriptions/)
1. [View the secure messaging features page here](https://www.va.gov/health-care/secure-messaging/)
1. [View the appointment features page here](https://www.va.gov/health-care/schedule-view-va-appointments/)
1. [View the medical records features page here](https://www.va.gov/health-care/get-medical-records/)
1. [View the test and lab results page here](https://www.va.gov/health-care/view-test-and-lab-results/)


#### **Task 2**: update "Electronic health records system" setting on the VAMC System node in Drupal
Public Websites team (as Drupal admins) can update the setting, per [this CMS Knowledge Base article](https://prod.cms.va.gov/electronic-health-records-ehr-system-changes), or Helpdesk ticket can be created if necessary. 

In prod CMS: 
1. Content > Filter by content type = VAMC System, identify the Healthcare System, Edit. 
1. On the system node, go to the "VA Health Connect and Health Records System" panel.
1. Under Electronic health records system, click "Electronic health records system" and select, **"Cerner"**
1. Go to the Editorial Workflow.
1. Click "Save as" and select "Published."
1. Enter a brief Revision log message.
1. Click "Save."

Post in #vagov-oracle-launch-coordination & @ mention Lauren Alexanderson and Dave Conlon to confirm that cutover tasks are complete. 
Reach out to relevant stakeholders if you need any help/advice for any questions that may come up.

#### **Task 3**: Trigger Change Management email
After launch, we must notify VA-side contacts to send a Change Management email to editors at the cutover center. Copy is documented [in this issue comment](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9338#issuecomment-1204434889).

- Email to: Jeffrey.Grandon@va.gov and Steve.Tokar2@va.gov, cc. denise.eisner@civicactions.com
- Subject: Oracle Health facility cutover: send editor change management email
- Body:
> Hi,
> `VAMC System name` was moved to Oracle Health on `cutover date`. Please inform the VA medical center internet website editor(s) at that location of the change with the standard reply we developed with your team (attached).
- Attachment:  [2022 Cerner cutover email notification_st_cmsteam.docx](https://github.com/department-of-veterans-affairs/va.gov-cms/files/9300517/2022.Cerner.cutover.email.notification_st_cmsteam.docx)

Issue reference: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9338#issuecomment-1204434889


## Identifying VAMC System
For an upcoming cutover, the name you're given for the cutover may not match a VAMC System name. Meaning: If you filter Drupal Content by VAMC System, you may get no results. In that case, the name may instead refer to the VAMC System's main location facility. You can start from the Facility node to verify that assumption and find the VAMC System to edit.

Example: White City

For example: 
* https://prod.cms.va.gov/admin/content - Filter by: VAMC System, Title: "White City" = no results, where we would expect to find a VAMC System to edit
* So let's try a Facility instead: Filter by: VAMC Facility, Title: "White City" = returns a facility node, https://prod.cms.va.gov/node/2290/edit
* On that node: 
  * in "Facility Locator API ID" field you can verify it matches the ID you were provided for the cutover, e.g. 692
  * Under "VAMC system" you can verify the name of the Healthcare system the facility belongs to (in this case: VA Southern Oregon), and that this facility is marked as "Main location" via checkbox. If that's true: we've found our VAMC System.
* Now find the System node: https://prod.cms.va.gov/admin/content - Filter by: VAMC System, Title: "VA Southern Oregon" <the system name you just found on the Facility node> = and now you can edit that node's EHR value.
  
## Drupal source of truth
As of Sept 2023, the system documented here is managed entirely by Drupal, and Oracle Health widgets are updated to use Drupal as the source of truth. Apps/widgets are required to adopt the new "API".

[How to opt in to Drupal as the source of truth for Oracle Health-related apps and widgets
](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for)