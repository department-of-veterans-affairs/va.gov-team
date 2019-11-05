# Incident Response Playbook

This playbook assumes that you are the engineer on call for vets.gov systems. It
contains a series of instructions that you should follow in the event that you
are paged to address an incident.

1. **Acknowledge the Incident**

After receiving a page from PagerDuty, acknowledge the incident. You will
continue to be paged regarding the incident at a pre-defined time period until
the incident is resolved. This is generally every 30 minutes. If you are unable
to respond to the issue, do not acknowledge the incident. The page will be
delivered to the next engineer in the escalation path.

2. **Visit #oncall on Slack**

[#oncall][#oncall]

See if anyone else is actively working on the issue or if there are any relevant
updates. Slack is your primary communication mechanism for reporting incident
status or discussing incident details. You may need to call other parties by
phone to include them in this channel when necessary.

3. **Categorize the Incident**

Use the [Incident Categorization](./Incident%20Categorization.md) guidelines to
categorize the incident. If the incident is `Severe` or `Critical`, immediately
assign the incident to the person oncall in the [Incident Commander PagerDuty rotation](https://dsva.pagerduty.com/schedules#PTO4ZQ5) and continue
through this playbook. The Incident Commander will reach out to you and request
any addition required information, and will take point on stakeholder communications.

 If at any point during your evaluation you determine that the system has been
 compromised by a third party, that there is a leak of personally identifiable
 information, or that the system is under attack, you must contact the Information
 Security Officer or Privacy Officer to initiate the VA procedures
 for reporting and assessment. Contact the secondary on-call engineer for
 assistance, and consult the [Security Incident Response
 Playbook](EmergencyOperatingProcedures/SecurityIncidentResponsePlaybook.md).

4. **Find the Dashboard**

Every page - aside from some security alarms - should be associated with a
dashboard containing other metrics that may give you more information on what's
happening. Find the dashboard and ensure that you have the information necessary
to begin troubleshooting.

5. **Begin an impact assessment**

If the issue will not violate a Service Level Objective and may be addressed
during business hours, create a GitHub issue in [vets.gov-team][issues].
You may assign the "Priority" label if this issue deserves priority. If this
issue affects a large percentage of traffic, you'll need to address it
immediately.

Use your best judgement. An application exception affecting a small subset of
users can be tackled with a clearer mind in the morning. If an issue is
affecting a large number of users, or the impact is not immediately apparent,
contact the secondary on-call engineer for assistance. Don't hesitate to reach
out for help.

6. **Troubleshoot**

Do your best to isolate the issue - take a divide and conquer approach to
evaluate connected systems, check expected system statuses, and determine what
may be behind the problem.

Take notes during this period and update the [#oncall][#oncall] Slack channel
with the information you collect. This information can be helpful to those who
may help address the problem later, or during postmortem evaluation.

7. **Assign to the Appropriate Team**

If the issue is caused by a component that you are not familiar with or
responsible for, use the PagerDuty system to assign ownership to the appropriate
on-call team. Transfer all necessary information with the new assignee via the
[Slack channel][#oncall].

You may need to contact an external service provider for assistance resolving the
issue. You can find the relevant contact information / procedures in
[External Service Provider Contacts](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations).

Be prepared to wait until service is restored or you have confirmation that the
issue is entirely isolated to their systems.  It's often possible that external
service restoration will require further action on your side (such as restarting
a server). Understand the characteristics of the integration and be certain that
whoever you assign the issue to can either resolve it entirely or has an
internal escalation path (vetsgov owned) of their own before leaving.

8. **Restore Service**

If the incident is simple to understand, and can be quickly addressed with
minimal changes to the infrastructure or server, address it immediately.

The primary goal of your response is to restore service. If a disk is full, add
more capacity. If servers are receiving high amounts of traffic, increase the
number of servers. Try to ensure as much information is available as possible
for later analysis, but don't hesitate to make updates to restore service when necessary. For instance, you may lose information by restarting a server that's
not responding appropriately, but do it if you believe this action may restore
service.

Take careful notes during this process to ensure you have as much information as
possible for permanent fixes and reporting during the postmortem. If you are
having trouble finding a way to restore service, ask for help!

9. **Mark Incident as Resolved**

A permanent solution or full analysis can be performed the next day.

10. **Create Followup Issues**

Create GitHub issues where appropriate so the team can address the issue
permanently or continue evaluation. Create a GitHub issue to track the creation
of a postmortem.

A postmortem should be written to accompany any page or service level
interruption. See [Postmortems](/Postmortems) for more details and a template.

[#oncall]: https://dsva.slack.com/messages/oncall/
[issues]: https://github.com/department-of-veterans-affairs/va.gov-team/issues/new
[external-integrations]: https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations
