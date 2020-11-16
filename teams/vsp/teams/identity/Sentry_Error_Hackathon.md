# VSP Identity Sentry Error Hackathon Nov 2020

- **Host**: Joe Niquette
- **Date**: 11/18/2020
- **Time**:
  - 1200 to 1600 ET (0900-1300 PT) on 11/18/2020
- **Location**: Virtual/Zoom
- **Attendee information**: [Join Zoom Meeting](https://zoom.us/j/93025140718)

Background:
- Sentry Error reporting is an excellent solution to ensure the VSP Identity team is aware of all potential systemic issues regarding SSO. Over time the people who created the rules for the metrics, errors, and logs have rolled onto other projects. It is time for the error reporting to be reviewed again to ensure all new functions are reporting errors correctly and also to modify old error reporting to ensure any systemic issues are resolved as quickly as possible.

Scope:
- This hackathon is restricted towards errors that are currently being reported by all SSO functions. If an error is not reporting into Sentry, or is not reporting required details to ensure the error can be investigated for a potential fix, then **it is** in scope of this exercise.
- Error reporting from downstream systems is also in scope, with the understanding we may be limited as to the action that can be taken to remediation any discrepancies.
- Error reporting for SSO from ID.me, MHV, EAuth/ISAM and DSLogon.
- Out of scope: Errors which do not provide information directly about any of the SSO functions.
- Note: This exercise may result in some tickets that require research and coordination with other teams, this is fine, but the main focus is to document all error improvements, then break it out by responsibility. A portion of the hackathon is going to be focued on documententing where we are via issues in Github [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues). We will then pivot towards picking out some of the tickets and writing code to improve them.

Requirements:
- [Sentry Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#request-access) - [Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key) for how to obtain access to several internl solutions. Typically requires a few days lead time to gain access. 
  - This facilitates the requirement of having SOCKS proxy access to internal VA tools, follow the instructions in the [link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key).
- Zenhub Access - Request from PM, ensure you have access to the Identity Team board [here](https://app.zenhub.com/workspaces/vsp-identity-5f5bab705a94c9001ba33734/board?labels=sso-login&repos=133843125)
- Github Repo access - Request from PM/Team Lead
  - [Vets-Website Repo](https://github.com/department-of-veterans-affairs/vets-website)
  - [Vets-API Repo](https://github.com/department-of-veterans-affairs/vets-api)
  - [Devops](https://github.com/department-of-veterans-affairs/devops)
- Understanding of how Sentry works
  - [Sentry Error Identity Team filter](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&query=is%3Aunresolved+assigned%3A%23vsp-identity) (Access from Firefox is preffered with socks proxy)
- Understanding of where the errors come from which go into Sentry
- **Optional**
  - [AWS Console access for cloudwatch logs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#aws-console-access)
  - Prometheus metric access/understanding
    - [Prometheus Link](http://prometheus-prod.vfs.va.gov:9090/prometheus/graph)
  - [Grafana SSO Board link](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&from=now-6h&to=now&var-api_version=v1)

## Agenda
- 1200-1230 (ET): Food, talk through any last minute requirments
- 1230-1300 (ET): SSO Error Overview
  - Agenda Overview
  - Where are the errors generated from (source code)
    - Internal Errors, external errors, missing errors...oh my!
  - How to test changes
  - Create issues in [Zenhub/Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues) 
- 1300-1400 (ET): Error documentation/trace errors to code
- 1400-1430 (ET): Choose/create tickets for error improvements; Rank and talk about documentation 
- 1430-1530  (ET): Work on tickets to fix errors
- 1530-1600 (ET): Present findings, closing remarks
