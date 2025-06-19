### Description
The online 28-1900 form allows Veterans with a service-connected disability that limits their ability to work or prevents them from working helps them explore employment options and address education or training needs. In some cases, the Veteran's family members may also qualify for certain benefits.

Our desired user outcomes are as follows:

The VR&E online form flow submits information that can be successfully processed by downstream systems

Claims that fail to submit are successfully processed through a backup submission flow

Veterans have a positive experience when completing the online form

Veterans do not encounter accessibility issues with completing the online form

New digital form complies with VA's v3 component styling

## Step 1: Development

![Screenshot 2025-06-18 at 10 06 20 AM](https://github.com/user-attachments/assets/cd6f303b-d10d-4804-8cc3-e277f13aa922)


All new vets-website apps and form apps use a value in content-build called vagovprod that gets turned from false to true to display on va.gov.


## Production rollout

We will be performing a direct cutover with the new form while taking the place of the old form with this deployment.  We have a cutover notice in place that notifies applicants of losing Save In Progress data when this takes place.  This notice will be in Prod for around 60 days prior to launch.

### Define the Rollback process

- If something goes wrong with the release that we've identified, our first step will be to assess the problem and determine its significance.
- If it requires us to immediately address the issue and the scope seems maneageable, we will attempt a hot fix and potentially an OOB deployment.
- If a hot fix isn't sufficient or reccommended, our rollback process is outlined in a [ticket](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?filterQuery=-label%3Aepic+-status%3Adone+-sprint%3A%40previous+product%3A+chapter+31&pane=issue&itemId=108911576&issue=department-of-veterans-affairs%7Cva-iir%7C1681).


#### Planning

- Desired date range or test duration: [06/16/25 - 06/20/25]
- Desired number of users: [5-10]
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [Internal testing with mock test user accounts and/or authenticated veterans employed by VA]

#### Results

- Number of users: []
- Number of bugs identified / fixed: []/[]
  - [FILL_IN] : [Bug Ticket]()

- Was any downstream service affected by the change?: yes/no, [No]
- Types of errors logged: []
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [No]: yes/no

## Post Launch metrics

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
