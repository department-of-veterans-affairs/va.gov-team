# Welcome to the Identity Team Sentry Hackathon

### Table of contents
  * [Getting Started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#getting-started)
  * [Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#scope-of-hackathon)
  * [Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#goals)
  * [Agenda](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#agenda)
  * [Error Buckets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/README.md#error-buckets)

### Getting Started
The hackathon event is broken into buckets of errors which the team reviews within Sentry and other locations. The error buckets have been broken out in this folder. Review the descriptions of each one below to determine where the error information is stored. This is a temporary location for this event only. Once we have all the errors and proper troubleshooting steps documented then we will move them to another area of this repo. If you find an error related to SSO that is not yet documented in this folder please use this [Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Sentry%20Hackathon%202020/Error%20Buckets/TEMPLATE_errors.md) as a guide for all error bucket breakouts.

This is the first event of hopefully many focused hackathon events for the Identity team. Below is the agenda for the first Identity Team Sentry Hackathon event scheduled for Wednesday November 18th from Noon until 4 PM ET.

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
