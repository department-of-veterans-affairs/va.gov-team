# Cerner data questions and answers

These are the questions we have for accomodating Cerner systems in the interim period before EAS is rolled out. We expect only a handful of Cerner facilities to be online during this time.

Note that we have a separate set of questions/concerns below about the Columbus site, which is moving from EPIC to Cerner.

## What information about Cerner does the VAOS front end need?

The VAOS front end needs to be able to tell that a patient is registered with Cerner and what Cerner sites are live. We also need a link to the Cerner portal.

## Where will we be able to get the above information from?

Based on converations in DSVA Slack, we should be able to get all the information we need from MVI, either through the VAMF MVI service that is being used by VAOS now, or through the VA.gov profile MVI lookup.

VA.gov profile work ticket is https://github.com/department-of-veterans-affairs/va.gov-team/issues/5405

## What MVI data will we need to use?

The data we should expect from MVI is outlined at https://dsva.slack.com/archives/GM5JJ5388/p1580335197031100 and https://dsva.slack.com/archives/CMNQT72LX/p1582216115268200

> Veteran logs in at full Cerner site (ie spokane), we should get 220CRNR ID in MVI

> Veteran logs in at a CSS site (Columbus)  - we will get 200CRNR  ID in MVI

(via Lauren Alexanderson)

> Patients whose records have been added to Cerner will have a 200CRNR correlation. Additionally, as VistA sites are converted the VistA patient correlations will have a ^C added to the end (Example 123456^PI^station#OfVHASystem^USVHA^C).

(via Damien DeAntonio)

This should cover everything we need, however it's possible we will need to maintain a list of active Cerner sites if the `^C` identifier being added does not match the exact go live times.

## What is the patient-level Cerner data we have access to? (Parent system IDs, facility IDs, etc.)

There's only one Cerner "system," compared with many VistA sites, but based on the MVI information we have, we will have a list of all the "registered" sites for a user and an identifier that tells us if it's moved to Cerner or not (`^C`).

This creation of ids for individual sites will continue for the forseeable future, but will be stopped at some point. For our current interim use case, we should be able to check for identifiers with `^C` (see discussion in https://dsva.slack.com/archives/GM5JJ5388/p1582212755096000).

> I stand corrected, I got the following from our team: the post IOC environment there is a dual registration business process. The patient is registered in Millennium and in the converted VistA. (making a DFN^C correlation in the VA MPI.)

(via Damien DeAntonio)

## What will Cerner sites look like in the UI when, for example, a veteran gets to the system selection page in VAOS

Without any changes, Cerner sites will appear as usual in the UI up to the system selection page. On that page, what happens will depend on any changes to the underlying VAOS apis that turn off or prevent fetching information about VistA sites.

We will be making various UI changes to notify users about Cerner and to direct them to the portal mid-stream in the new appointment flow.

## Does any of the above information change for Columbus, which is moving from EPIC?

This is currently unknown. We don't know if those sites show up in VAOS at all and what the data looks like. However, as long as we have some indication through MVI that a patient is registered at the Columbus site, we should be able to accomodate other differences.
