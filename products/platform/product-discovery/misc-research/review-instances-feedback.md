# The following is feedback received from teams about review instances

### What pieces of work if any did the review instances now help?
- The review instances helped us to see front end changes visually before merging to staging. This allows Gibran to make local changes and reduces the PR turnaround time we were experiencing before. However, it has been limited to front end changes only so far.

### Did the review instances help unblock anything or improve anything? 
- We are still blocked by the same primary issue that has been our nemesis.

### What things did your team or you want to see with review instances, but didn't? 
- We hoped the review instances would connect to PPMS (external database) but it seems the middleman server ist configured correctly. They're seeing "bad gateway" errors.
- Logging would help with this issue.
- Even the curl requests were failing when done manually.
- I think if our particular focus wasn't dependent on this external third party data source, we might have seen more benefit from the review instances.
