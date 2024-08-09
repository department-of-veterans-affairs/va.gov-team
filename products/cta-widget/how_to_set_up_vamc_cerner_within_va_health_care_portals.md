# How to set up a VAMC's Oracle Health (formerly Cerner) integration within the VA.gov health care portals: hard coded data and CMS data

[As of Nov 2023, Oracle has acquired Cerner, and Cerner is now Oracle Health.]

## Background
There are 2 systems available within VA to manage electronic health records (EHR): VistA or Oracle Health (formerly Cerner). 

VA healthcare systems use one EHR system or the other. VistA is the legacy system; Oracle Health is new to VA starting in 2020, when some systems began migrating from VistA to Oracle Health. 

A Veteran may receive care at multiple healthcare systems, and therefore may have medical records managed in either, or both, EHR systems. When a Veteran or caregiver logs into VA.gov, we must programmatically determine where the logged in user's records are, and which EHR system is used by that healthcare system, in order to accurately direct them to do things like view or request records, prescriptions, send secure messages to providers, schedule appointments, or access lab results. 

When a VAMC system moves from VistA to Oracle Health / Cerner, this document gives examples / steps to switch the EHR system for that VAMC System. 

## A Cerner facility cutover is scheduled
Your PO will tell the team that a Oracle Health facility/system is "ready to cutover." Exciting! This means the team responsible for migrating a System from VistA to Oracle Health has completed their testing, the actual healthcare records system cutover is complete, and the website can be updated to point users to Oracle Health for EHR as well. Now you need some information.

### Step 1: Prep for Testing

For the following steps, we will use the __Alaska VA Medical Center__ as an example.

#### **Task 1: Request / find the facility in Drupal**
The easiest way is to [filter Content by VAMC System](https://prod.cms.va.gov/admin/content?title=&type=health_care_region_page&moderation_state=All&owner=All), and search for the Facility name. Drupal Admin user will be required to access that link. 

For an upcoming cutover, the name you're given for the cutover may not match a VAMC System name. Meaning: If you filter Drupal Content by VAMC System, you may get no results. In that case, the name may instead refer to the VAMC System's main location facility. You can start from the Facility node to verify that assumption and find the VAMC System to edit.

Example: White City

For example: 
* https://prod.cms.va.gov/admin/content - Filter by: VAMC System, Title: "White City" = no results, where we would expect to find a VAMC System to edit
* So let's try a Facility instead: Filter by: VAMC Facility, Title: "White City" = returns a facility node, https://prod.cms.va.gov/node/2290/edit
* On that node: 
  * in "Facility Locator API ID" field you can verify it matches the ID you were provided for the cutover, e.g. 692
  * Under "VAMC system" you can verify the name of the Healthcare system the facility belongs to (in this case: VA Southern Oregon), and that this facility is marked as "Main location" via checkbox. If that's true: we've found our VAMC System.
* Now find the System node: https://prod.cms.va.gov/admin/content - Filter by: VAMC System, Title: "VA Southern Oregon" (the system name you just found on the Facility node) = and now you can edit that node's EHR value.

Make a note of this System level Drupal link. You will need it for Staging launch and Production launch.

#### **Task 2: Testing and Launch Schedule** 

Oracle Health records cutovers typically happen over the weekend, and web tasks happen the Monday after. Confirm the scheduled cutover plan. Engineering tasks should all be completed the week prior, minimum, with only a feature flag update remaining for the day of cutover.

#### **Task 3: Identify any available test users** 

The integration testers who are verifying the records integrations typically have test users available they can share, for use on staging. To request that user information, contact & share the healthcare system / facility ID with:

Anthony Diaz (Contractor) <Anthony.Diaz@va.gov>
System Integration Testing (SIT) Test Lead, Planned Systems International (PSI)

And add that user information to the [CERNER TEST USERS:](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-cerner.md) document.
Without a test user, there is no way to test out the facility's Oracle Health launch on staging. (Test users will not work on production.)

Now that you have the Facility ID, exception cases, and the "go live" date, we can get started with our implementation.


### Step 2: Stage cutover for testing
When a System is ready to test the Oracle Health update, you must update the setting for that System's EHR provider within the Drupal interface. 

1. Log into Drupal (https://prod.cms.va.gov/) using user credentials with Drupal Admin permissions
1. Visit the VAMC System via the link you identified in Task 1 above and click Edit
1. Scroll to the "VA Health Connect and Health Records System" panel.
1. Under Electronic health records system, click "Electronic health records system" dropdown and select, **"Converting to Cerner."**
1. Scroll to the Editorial Workflow.
1. Click "Save as" and select "Published."
1. Enter a brief Revision log message:  "Staging Oracle Health / Cerner cutover for testing"
1. Click "Save."

![Screenshot 2024-08-08 at 4 35 16 PM](https://github.com/user-attachments/assets/e6559228-96df-47c9-b401-4952e878baf5)

This database change in Production will propagate down to the Staging environment overnight. You must make the change one day prior to beginning testing.

### Step 3: Test the cutover in Staging
Visit one of the healthcare task pages: 
1. [View the prescription features page here](https://www.staging.va.gov/health-care/refill-track-prescriptions/)
1. [View the secure messaging features page here](https://www.staging.va.gov/health-care/secure-messaging/)
1. [View the appointment features page here](https://www.staging.va.gov/health-care/schedule-view-va-appointments/)
1. [View the medical records features page here](https://www.staging.va.gov/health-care/get-medical-records/)
1. [View the test and lab results page here](https://www.staging.va.gov/health-care/view-test-and-lab-results/)

Log into Staging using the login widget on the page, with the test credentials you identified in Step 1, Task 3 above. If the test user is correctly associated with Cerner / Oracle Health, once logged in, you will now be able to see that CTA links point to Oracle Health.

If there is any issue with the content of the above pages, you can find the code for each of those pages here:

1. [View the prescription features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/refill-track-prescriptions-page/index.js)
1. [View the secure messaging features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/secure-messaging-page/index.js)
1. [View the appointment features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/schedule-view-va-appointments-page/index.js)
1. [View the medical records features page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/get-medical-records-page/index.js)
1. [View the test and lab results page code here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/health-care-manage-benefits/view-test-and-lab-results-page/index.js)

### Step 4: Launch!
On the Monday morning following a records cutover, the Oracle Health cutover team will verify that the records cutover is successful, & will notify you that we are ready for launch! 🚀 Tasks in Step 4 should be completed ASAP on the Monday morning, before 10am EST if possible.

#### **Task 1**: update "Electronic health records system" setting on the VAMC System node in Drupal
Drupal admins can update the setting, per [this CMS Knowledge Base article](https://prod.cms.va.gov/electronic-health-records-ehr-system-changes), or Helpdesk ticket can be created if necessary. 

1. Log into Drupal (https://prod.cms.va.gov/) using user credentials with Drupal Admin permissions
1. Visit the VAMC System via the link you identified in Task 1 above and click Edit
1. Scroll to the "VA Health Connect and Health Records System" panel.
1. Under Electronic health records system, click "Electronic health records system" dropdown and select, **"Cerner"**
1. Scroll to the Editorial Workflow.
1. Click "Save as" and select "Published."
1. Enter a brief Revision log message:  "Launching Oracle Health / Cerner cutover"
1. Click "Save."

This change will propagate to VA.gov with the next content release, typically from 1-3 hours, depending on the [queue of content-release jobs](https://github.com/department-of-veterans-affairs/content-build/actions/workflows/content-release.yml). The Platform CMS team owns content release and can help troubleshoot or provide deploy information.

Post in #vagov-oracle-launch-coordination & @ mention Lauren Alexanderson to confirm that cutover tasks are complete. 
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


  
## Drupal source of truth
As of Sept 2023, the system documented here is managed entirely by Drupal, and Oracle Health widgets are updated to use Drupal as the source of truth. Apps/widgets are required to adopt the new "API".

[How to opt in to Drupal as the source of truth for Oracle Health-related apps and widgets
](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for)
