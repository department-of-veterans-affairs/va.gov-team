# Enabling Online Submission for VSOs

Appoint a Representative has the option to end in online submission of VA Form 21-22 (to appoint a Veteran Service Organization). This feature is available to LOA3 Veteran users, that are appointing a VSO with online submission enabled.

### Steps to enable online submission for additional VSOs
1. Determine the VSO's POA code
   1. View the [OGC Accreditation Search website](https://www.va.gov/ogc/apps/accreditation/index.asp)
   2. In the 3rd, lower section, select the "VSOs with Reps" radio option and click the "Download" button.
   3. The download will be titled `orgexcellist.asp` -- rename the file to be `orgexcellist.xls` (essentially changing the file type).
   4. Open the `orgexcellist.xls` in Excel
   5. Locate the organization in Column A and the associated POA code is in Column B
2. Request help from Platform Support to enable online submission
   1. In the OCTO/DSVA Slack space, post in the #vfs-platform-support channel "Can someone please help run this query in a rails console, in Production?" and include a version of the query below.
   2. Example query: `Veteran::Service::Organization.where(poa: ['00V', '036']).update_all(can_accept_digital_poa_requests: true)`
      1. In this example, online submission is being turned on for two VSOs with the POA codes `'00V', '036'`
      2. Make sure that you replace the POA code(s) with the ones you identified in Step 1.
   3. Platform Support may respond, asking if this can be achieved with a migration or rake task. If they do, respond letting them know that:
      1. A migration is not necsesary becuase the query is not updating the schema of the table.
      2. A rake task has the benefit of test coverage, but someone in Platform Support with Production access would still need to run the task; might as well run the query which has the same result.
      3. Provide assurance that this query is safe to run.
      4. If needed, you can reference the [previous Slack request](https://dsva.slack.com/archives/CBU0KDSB1/p1751297197519949) where this was hashed out.
4. Confirm online submission is enabled
   1. Log into VA.gov Production, with an LOA3 Veteran user of VA.gov
   2. Navigate to [Appoint a Representative](https://www.va.gov/get-help-from-accredited-representative/appoint-rep/introduction)
   3. Indicate you're a Veteran claimant
   4. Search for the VSO (or a representative within the VSO)
   5. Confirm in the search results that the VSO/VSO representative now states "Accepts VA Form 21-22 online"


### Example of online submission enabled
In this example, you can see that Brian Daniel is part of a VSO that accepts the online submission of VA Form 21-22. Lisa Daniel is not and can only accept VA Form 21-22 by mail or in person.

<img width="270" height="1070" alt="image" src="https://github.com/user-attachments/assets/aa8df5a9-c356-432f-ab4c-58f44a9be51f" />

## Previous work to enable online submission
Online submission was enabled in June 2025 for Wounded Warrior Project and Montana Dept of Veterans Affairs. As an example of the above process [here is the ticket to track the work](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112473) and the related [Platform Support Slack request](https://dsva.slack.com/archives/CBU0KDSB1/p1751297197519949).
