__Please note: some links in this document point to the vets.gov-team repo.__

# Operations

Repository for team information, planning docs, meeting notes, etc.

## Mission
Provide reliable infrastructure, secure access controls, and CI/CD tooling to allow safe deployments for the platform.

## Responsibilities
- CI/CD: maintaining build, test, and deployment infrastructure
- Access management
- Managing Cloud resources
- Infrastructure

## Communications

Join the #vsp-operations channel in DSVA Slack if you have a question or want to join the conversation.

There are a few other channels that would be useful to join:

- #vetsgov-devops: this has a collection of VSP and non-VSP engineers that work within the same infrastructure to discuss the intersection of infrastructure and code
- #devops-alerts: non-critical warnings from monitoring that are infrastructure-focused. These should be looked into by on-call when available but should not be emergencies
- #oncall: critical events from PagerDuty, and discussion on response. See [Incident Response Playbook](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/OnCall/Incident%20Response%20Playbook.md) for info on when something should migrate into a dedicated channel and incident response info in general.
- #devops-deploys: receives information about deployment failures and successes and can help with general situational awareness
- #sre: a shared channel between programs within DSVA for folks doing Operations and SRE type work

Like the rest of VSP, we also use Keybase as a fallback in case Slack is inaccessible. See [AlternateCommunicationChannels](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/OnCall/Alternative%20Communication%20Channels.md) for information on how to join.

Additionally, we have a mailing list that can be used to reach the entire group. If you are a new member of this team, be sure to join the mailing list with instructions [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/VA-Systems/MailingListInfo.md).

## Tracking work

VSP uses ZenHub to manage work, use [this board](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=operations&repos=133843125) to open tickets in this repo and add the `operations` label. 
