# Back-End Kickoff with VA Profile

## Purpose
- Kick off back-end integration for adding new SIGI fields to the VA.gov profile Personal Information page
- Make sure Tom has the right point of contact at VA Profile

## Attendees
- Samara Strauss
- Tom Harrison
- Marci McGuire
- Josh Lindsey
- Amin Ray
- Maria Harmon
- Sudip Khadka
- Ian McEwan
- Takeyna Hill

## Notes
- Session is recorded
- First thing Tom would like to do is understand where the API is and what the end points are
- Josh - VA.gov is integrated with two other hubs already
- This is a new hub (demographics)
- This is in the demo hub, but largely vaporware.  Can see the fields, but won't be fully functional until late next week
- Lindsey's expectation is that Tom would retrieve all four SIGI fields at the same time.  Best pull is probably the demographics pull what will bring back the full bio
- Display name is their model for Preferred Name
- Gender (Sex Assigned at Birth) is part of the pull, but we will not be using that
- Behavior-wise, it will work the same as Contact info.  They will receive an asynch Put or Post from us and send back a status on the transaction; identical to Contact info
- Best point of contact for Tom  - Josh or Ian.  Both are on Lighthouse Slack and VA.gov Slack. 
- We probably don't need a separate channel.  [VA Profile on DSVA](https://dsva.slack.com/archives/C7TE0PFTL) for now.  If we start to create a lot of noise, we can create a seperate channel.
