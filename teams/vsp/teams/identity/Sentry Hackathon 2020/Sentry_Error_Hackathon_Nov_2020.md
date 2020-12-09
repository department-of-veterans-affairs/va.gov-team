# VSP Identity Sentry Error Hackathon Nov 2020

- **Host**: Joe Niquette
- **Date**: 11/18/2020
- **Time**:
  - 1200 to 1600 ET (0900-1300 PT) on 11/18/2020
- **Location**: Virtual/Zoom
- **Attendee information**: [Join Zoom Meeting](https://zoom.us/j/93025140718)

**Background:**
- Sentry Error reporting is an excellent solution to ensure the VSP Identity team is aware of all potential systemic issues regarding SSO. Over time the people who created the rules for the metrics, errors, and logs have rolled onto other projects. It is time for the error reporting to be reviewed again to ensure all new functions are reporting errors correctly and also to modify old error reporting to ensure any systemic issues are resolved as quickly as possible.

**Participant Requirements Before Hackathon Kickoff:**
- [Sentry Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#request-access) - [Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key) for how to obtain access to several internl solutions. Typically requires a few days lead time to gain access. 
  - This facilitates the requirement of having SOCKS proxy access to internal VA tools, follow the instructions in the [link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key).
- Zenhub Access - Request from PM, ensure you have access to the Identity Team board [here](https://app.zenhub.com/workspaces/vsp-identity-5f5bab705a94c9001ba33734/board?labels=sso-login&repos=133843125)
- Github Repo access - Request from PM/Team Lead
  - [Vets-Website Repo](https://github.com/department-of-veterans-affairs/vets-website)
  - [Vets-API Repo](https://github.com/department-of-veterans-affairs/vets-api)
  - [Devops](https://github.com/department-of-veterans-affairs/devops)
- Understanding of how Sentry works
  - [Sentry Error Identity Team filter](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&query=is%3Aunresolved+assigned%3A%23vsp-identity) (Access from Firefox is preferred with socks proxy)
- Understanding of where the errors come from which go into Sentry
- **Optional**
  - [AWS Console access for cloudwatch logs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#aws-console-access)
  - Prometheus metric access/understanding
    - [Prometheus Link](http://prometheus-prod.vfs.va.gov:9090/prometheus/graph)
  - [Grafana SSO Board link](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&from=now-6h&to=now&var-api_version=v1)

## Agenda
Note: Soft agenda to guide us, but this is not rigid, we will take the most productive path
- 1200-1230 (ET): Food, talk through any last minute requirements
- 1230-1300 (ET): SSO Error Overview
  - Agenda Overview
  - Where are the errors generated from (source code)
    - Internal Errors, external errors, missing errors...oh my!
  - How to test changes
  - Create issues in [Zenhub/Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues) 
- 1300-1400 (ET): Error documentation/trace errors to code
- 1400-1430 (ET): Choose/create tickets for error improvements; Rank and talk about documentation 
- 1430-1530 (ET): Work on tickets to fix errors
- 1530-1600 (ET): Present findings, closing remarks

## Links
- [Sentry Issue Owner settings](http://sentry.vfs.va.gov/settings/vsp/projects/platform-api/ownership/)
- [Vets API lib SAML Errors](https://github.com/department-of-veterans-affairs/vets-api/blob/9254a93af093aba9ce4651a18e43209c36bbccf9/lib/saml/errors.rb)

Sentry Error Links:
  - [MVI errors](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)
  - [keepalive errors](http://sentry.vfs.va.gov/organizations/vsp/issues/?groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - [non-errors](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+%21level%3Aerror&statsPeriod=14d)
  - [to be resolved](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+%21message%3A%22SSOe+error%3A%22+%21message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)

## Issue Creation Instructions
- All changes to which we want to make to the errors should start with an issue being created [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues).
- Each issue should use the [Standard Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=&template=standard-issue.md&title=) to start, and reference the appropriate Error bucket file for more details.

## Error Questions
- What to do to suppress, reclassify, reassign, or change error level:
  - Each error is up for discussion in regards to if the level of the error is appropriate. If we want to change the level we need to include this request, along with the justification inside a PR.
  
## Parking Lot
- Note: area where we throw questions into so we can move forward
- [User attributes is missing an ID.me UUID](http://sentry.vfs.va.gov/organizations/vsp/issues/418/?environment=production&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+%21level%3Aerror&statsPeriod=14d) walk through from Eric was offered.
  
## Issue List
- List out tickets created during Hackathon here
- [CODEOWNERS file changes for VSP Identity #16228](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16228)
- [SSOe Errors](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16388)
  
## Closing Remarks and Feedback
- Add feedback here, improvements for next hackathon, current status of sentry error cleanup
