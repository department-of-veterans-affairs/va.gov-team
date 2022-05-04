# Welcome to the Identity Team Sentry Hackathon

- **Host**: Joe Niquette
- **Date**: 11/18/2020
- **Time**:
  - 1200 to 1600 ET (0900-1300 PT) on 11/18/2020
- **Location**: Virtual/Zoom
- **Attendee information**: [Join Zoom Meeting](https://zoom.us/j/93025140718)

### Table of contents
  * [Getting Started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#getting-started)
  * [Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#scope-of-hackathon)
  * [Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#goals)
  * [Agenda](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#agenda)
  * [Error Buckets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#error-buckets)
  * [Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#links)
  * [Issue Creation Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#issue-creation-instructions)
  * [Error Questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#error-questions)
  * [Parking Lot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#parking-lot)
  * [Issue List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#issue-list)
  * [Closing Remarks and Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#closing-remarks-and-feedback)

### Getting Started
The hackathon event is broken into buckets of errors which the team reviews within Sentry and other locations. The error buckets have been broken out in this folder. Review the descriptions of each one below to determine where the error information is stored. This is a temporary location for this event only. Once we have all the errors and proper troubleshooting steps documented then we will move them to another area of this repo. If you find an error related to SSO that is not yet documented in this folder please use this [Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/Error%20Buckets/TEMPLATE_errors.md) as a guide for all error bucket breakouts.

This is the first event of hopefully many focused hackathon events for the Identity team. Below is the agenda for the first Identity Team Sentry Hackathon event scheduled for Wednesday November 18th from Noon until 4 PM ET.

### Background
Sentry Error reporting is an excellent solution to ensure the VSP Identity team is aware of all potential systemic issues regarding SSO. Over time the people who created the rules for the metrics, errors, and logs have rolled onto other projects. It is time for the error reporting to be reviewed again to ensure all new functions are reporting errors correctly and also to modify old error reporting to ensure any systemic issues are resolved as quickly as possible.

### Scope of Hackathon
- This hackathon is restricted towards errors that are currently being reported by all SSO functions. If an error is not reporting into Sentry, or is not reporting required details to ensure the error can be investigated for a potential fix, then **it is** in scope of this exercise.
- Error reporting from downstream systems is also in scope, with the understanding we may be limited as to the action that can be taken to remediation any discrepancies.
- Error reporting related to SSO from ID.me, MHV, EAuth/ISAM and DSLogon.
- Out of scope: Errors which do not provide information directly about any of the SSO functions.
- Note: This exercise may result in some tickets that require research and coordination with other teams, this is fine, but the main focus is to document all error improvements, then break it out by responsibility. A portion of the hackathon is going to be focused on documententing where we are via issues in Github [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues). We will then pivot towards picking out some of the tickets and writing code to improve them.

### Goals
1. Every Identity team member should feel comfortable explaining each of the errors inside Sentry
    1. This may come in the form of a collection of error documentation for the Identity team
    2. Clear understanding of each of the Sentry Errors that the Identity team is responsible for
2. Document research and resolution flows for as many errors/groups of errors as we can
3. Ensure current errors have the appropriate level assigned to them (warning, info, etc.)
4. Document a "parking lot" to ensure we can continue the work required for all team members to feel comfortable with the errors that being reported
5. Create PRs for as many of the error corrections that we can make

### Agenda
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

### Error Buckets
The following is a breakdown of the current `vsp-identity` issues into high level categories that should be helpful for consolidating and addressing the issues.

#### [MVI errors](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)
17 errors related to MVI request problems

#### [keepalive errors](http://sentry.vfs.va.gov/organizations/vsp/issues/?groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
14 errors related to making `https://eauth.va.gov/keepalive` calls

#### [non-errors](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+%21level%3Aerror&statsPeriod=14d)
15 warning/info issues relalted to known error cases.  For example the user's MVI record may be in a state that needs resolution and we opt not to log the user in until their MVI record has been fixed.

#### [to be resolved](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+%21message%3A%22SSOe+error%3A%22+%21message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)
These 8 errors don't fall into any of the above buckets and need to be resolved individually.

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
- [Failed to fetch errors](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15883)
  
## Closing Remarks and Feedback
- Went Well:
    - "Knowledge-shring and collaborating within the team"
    - "A lot of informative background information"
    - "Excellent overview of error buckets before the event and during the event by Eric Buckley"
    - "Error buckets helped group common/similar problems, makes them seem more manageable than dozens of "different" errors/issues to tackle"
    - "Everyone was very engaged, team seemed to gel during the event"
- To Improve:
    - "Get access/permission (SOCKS, AWS, etc) to those who need it so they can participate"
    - "Hard to get substantial amount of work done in relatively short time frame; much of time spent familiarizing with issue"
    - "Felt like only half of the meeting was spent "hacking" on solutions"
    - "Providing more background reading before the hackathon starts (eg Sentry overview documentation)
    - "More hackathons"
- Action Items
    - More hackathons:
        - [Need to schedule the next hackathon to at least complete the last two error buckets](https://app.zenhub.com/workspaces/vsp-identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/16758)
        - [Build template for future hackathons](https://app.zenhub.com/workspaces/vsp-identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/16759)


