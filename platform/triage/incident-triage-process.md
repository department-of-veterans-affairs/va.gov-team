# Triage Process - including Tier 2 and 3 Support

*Note: this is an MVP process and we will continue to capture pain points as we test this out and learn what works well and what doesn't. It is intended to change as we learn!*

## Step One: Discover an issue
We have automated ways of discovering problems throughout the VA.gov ecoysystem via Pager Duty notifications in our [`#oncall`](https://dsva.slack.com/messages/C30LCU8S3) DSVA Slack channel and directly to the on-call person. (Read more about on-call approach and rotation (link TODO).)

We also monitor reports of issues from folks (i.e. VFS Teams and VA Stakeholders) who notice them and report them in the [`#vfs-platform-support`](https://dsva.slack.com/messages/CBU0KDSB1) DSVA Slack channel.

We would like to be monitoring user-reported issues as well, but our access to that data at this time is extremely limited, so that's something we'll be working on getting better access to.

<details>
  <summary><b>Current sources</b></summary>
<br>
<ul>
<li>Prometheus pager-duty alerts</li>
<li>ServiceNow tickets [ need more detail on how these arre assigned to us and who they go to ]</li>
<li>Downtime email listsserves</li>
<li>Product team members reporting in `#oncall` Slack channel or `#vfs-platform-support` Slack channel</li>
<li>Sentry</li>
<li>VA Stakeholders emailing someone they know</li>
<li>"Get Help Signing in to VA.gov" submissions from `[ who??? ]`</li>
</ul>

</details>

<details>

<summary><b>High priority desired sources</b></summary>
<br>
<ul>
<li>Reported issues from Contact Centers</li>
<li>Reported issues from IRIS</li>

</details>

<details>

<summary><b>Low priority or potential desired sources</b></summary>
<br>
<li>Foresee (or other user feedback mechanism)</li>
<li>Social media</li>

</details>

## Step Two: Determine Priority
We will perform some initial discovey and Q&A around a reported problem to try and understand how urgent it is - how many people are likely affected, and how severely their ability to access/manage benefits is hampered.

Once we have this basic info, we'll write up a ZenHub issue and rank the issue's priority, and determine whether we need to work on an immediate fix, put it into our backlog, or re-assign the ZenHub issue to a VFS Product Owner / Business Owner for resolution.

## Step Three: Investigate + Recommend
For issues that need immediate resolution, or that we pull out of the backlog to start working on, we will collaborate in Slack to dig deeper into the problem and propose a solution.

## Step Four: Resolve
Resolution and Investigation are often intertwined. For example, sometimes we will put up a maintenance window as part of the resolution, while we continue investigating to work out exactly what needs to happen for a fix.

Sometimes at this point we will realize that it's an issue that needs to be handed to a VFS Product Owner / Business Owner for resolution, so we will hand it off via Slack and by re-assigning the ZenHub issue.

During this time, the we will continue to communicate and share updates either in the [`#oncall`](https://dsva.slack.com/messages/C30LCU8S3) channel for urgent issues, or in the ZenHub issue itself for less time-sensitive issues.

## Step Five: Document 
We do this via Post Mortems for significant issues, or simply by documenting the fix and closing the relevant ZenHub issue.

Sometimes there will be a need for follow up work like adjusting test coverage in `vets-website` / `vets-api`, or adjusting documentation in `va.gov-team`.

## Step Six: Communicate Resolution
Mass email? Mass Slack update? Just updating the ZH issue and @ mentioning the original source? TBD

