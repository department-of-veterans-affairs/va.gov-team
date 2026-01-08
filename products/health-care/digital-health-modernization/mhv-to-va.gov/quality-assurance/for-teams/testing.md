# Process for Testing
This page outlines the aspect of manual review that affect developers and product managers. This
file is restricted to only that, additional information for QA members can be found in the for-qa
folder, and information on other aspects of QA can be found in their respective files as well. 

## Epics and Large Bodies of Work
This is defined as anything that will require a staging review, individual tickets that will eventually 
be included in a staging review should still follow the [smaller bodies of work rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/quality-assurance/for-teams/testing.md#tickets-and-small-bodies-of-work).

### Before Testing
- Loop QA in early
- Test individiual tickets using the small bodies of work process
- Kick-off call at least **3 weeks** prior to artifacts being needed (ticket created)
- Assist gathering test data

A member of QA should be looped into the process as early as possible, ideally before development
has started. This can be in the form of joining planning calls, early access to designs, or whatever
is most convenient for team members. QA will use this collaboration to help surface potential issues
prior to engineering work-hours being spent to develop the feature.

Each small piece of the feature should ideally have its own ticket, and each ticket will follow the
process for small bodies of work outlined in this document. 

No less than **3 weeks** prior to artifacts being needed, an official kick-off should take place. 
This will include a ticket being created on the shared-support workflow for QA's body of work. QA
members will use this time to add any additional documentation that might not have been created previously
in TestRail, such as a regression plan, or feature test plan.

During the official kick-off for the stg review, QA will be responsible for communicating any concerns
relating to testing data. Depending upon what is needed to physically complete testing, the QA team might
need assistance in making sure staging has the appropriate data available.

### During Testing
A subject matter expert should be available to clarify edge cases discovered during exploratory testing.
This can be asynchronous communication via slack, or a team effort in a specific slack channel, whatever
is easiest for the team. Often times additional test cases are discovered during exploratory testing, and
QA might need clarification on expected behavior.

### After testing
A final quick summary call between QA and product will take place. Issues discovered should be reviewed, 
prioritized, and separated into items that must be fixed now vs items that can wait for a fast follow.
QA will also submit a summary in a related location on slack so that the entire team can have visibility. 

## Tickets and Small Bodies of Work
Extremely minor changes such as adjustments to padding may skip this step. It is strongly encouraged
that all changes to functionality or major code refactors follow this process though. Ideally all
tickets will be tested prior to merging the PR using a preview link, however, smaller/quick tasks may
skip that step with the discretion of the developer.

To have QA test smaller bodies of work please:
- place tickets in `QA / A11y Review` state
- Add the label `mhv-shared-qa`
- If applicabale generate a preview link

QA will only pick up work if it is in the `QA / A11y Review` state **AND** has the label `mhv-shared-qa`.
To generate a preview link for the PR perform the followingg steps:
1. Go to [http://jenkins.vfs.va.gov/](http://jenkins.vfs.va.gov/)
2. Navigate to the job: Deploys [Vets.gov Review Application Deploy](http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/)
3. Click Build with Parameters
4. Enter the branch(s) you want to deploy
5. Click Build
6. Monitor the job until it completes and link it to the ticket.

Additional documentation on this process can be [found here](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes#Usingreviewinstancestopreviewchanges-Manualcreation)

Some additional preview tools have been noted [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/quality-assurance/msc/preview-tools.md), in the event the team ever wishes to explore more options.
