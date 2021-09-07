# RFC: Automate SOCKS Access Requests

- Date: 2021-09-07
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/27159

## Background
Access requests (specifically those involving SOCKS), are currently done the following way (happy path):

1. User opens an access request GH issue using template
![image](https://user-images.githubusercontent.com/3077884/132381834-dd51bdf5-02e4-4421-9ec2-43438f51e2e8.png)
2. The oncall ops member creates a new branch & manually edits config.yml & a new ssh key using the info from the GH issue
3. The oncall ops member opens a PR and links back to original ticket
4. The oncall ops member asks for a PR approval in slack (or just waits for one)
5. The oncall ops member merges the PR and SOCK access is fully granted

Some common pitfalls exist in this process that could be handled by automation. This would act as a win-win scenrio for
access requesters and for oncall ops members.

## Motivations
Due to how "manual" the process is, there's a number of downsides - both for platform team members and access requester.
By adding more automation to the process, we hope to:

1. Reduce wait times for requesters
2. Reduce context switching for oncall engineers
3. Reduce notification noise in Slack & email
4. Reduce risk of provisioning access to someone who shouldn't receive it

#### Wait Times & Context Switching
Managing all of the inflight access requests can be a logistical headache. It's not uncommon for
multiple rounds of back-and-forth to occur in the GH issue comments for various reasons.

Access requests will sometimes "fall through the cracks". These requests can remain unattended for days 
& weeks at a time. This is especially true for access requests that span across multiple oncall
shifts (1 week long).

#### Security Concerns
`va.gov-team` (where access requests originate) is a public GitHub repo - anyone
with a GH account may open a SOCKS access request. It's up to the oncall operations member to
verify that the requester is a member of the `department-of-veterans-affairs` GH organization.

The oncall member might:

- forget to verify entirely
- make a mistake while verifying
- be tricked by a malicious user who spoofed their membership

#### Perceived Gatekeeping
The operations team does not act as "Gatekeepers" to who gets SOCKS access. That job is left to 
https://github.com/department-of-veterans-affairs/github-user-requests. The operations team only
provides the mechanism to issue said SOCKS access.

When others perceive the ops team to be acting as gatekeepers, it can result in:

1. Resentment/frustration from SOCKS access requesters
2. A false sense of security for those who assume operations is vetting requesters

## Design

A github workflow that triggers upon creation of an access request. The workflow exits early if:

- The opened GH issue is not an access request of SOCKS
- The GH issue owner is not a member of the `department-of-veterans-affairs` GH org

Next, more validations occur:

- The user ssh key and email are able to be parsed from the issue
- The ssh key is a valid ssh key

The latter set of validations are actionable by the user, so a bot user will make a 'self-help' style comment that the user may then take action upon.

#### Changes to the Access Request GH Issue Template
An "Access Type" field will be added to the GH issue template. It will read:

> Access Type: Please choose 'Developer' or 'Viewer'.

> [Read more on which access type you need](https://vfs.atlassian.net/wiki/spaces/OT/pages/1792114735/Onboard+New+Team+Members+Granting+Access+to+Internal+Tools). For an access type other than 'Developer' or 'Viewer', please contact the #vfs-platform-support slack channel.

#### Automatic Pull Request

Once all validations have passed, the bot will open a PR to the devops repo. The PR body will consist of:

- the github user for whom this ssh key is for
- a link back to the GH issue
- a GH label named `automatic-socks-request`

The PR will then be reviewed & approved normally just like any other PR.

## Risks
There will now exist a way to open PRs in a _private repo_ by making issues in a _public repo_. At worst, a user could flood the devops PRs with fake access requests.

This risk is however mitigated by:
- the user must be a member of the `department-of-veterans-affairs` GH org
- all opened PR's will contain the unique `automatic-socks-request` label and would be easily closable by a script

## Alternatives

#### Notify a slack channel instead of opening a PR
Instead of opening the PR automatically, the GH workflow would notify a slack channel. The ops oncall member would then review said slack channel and respond accordingly. In this scenario, the GH workflow for opening a socks request PR would still exist, except now it would have to be manually triggered instead being automatic.

**Pros**
- creates some level of separation between the public and private repos of `va.gov-team` & `devops`, respectively

**Cons**
- still requires _some_ context switching for ops members
- still requires _some_ wait times for requesters

