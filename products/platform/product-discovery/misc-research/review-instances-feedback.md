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



## VSA feedback:

Review Instance Feedback
20/20/2019

1.	Lihan: “I first tried to access an instance that Github said was ready but it wasn't working (this instance was deployed a few days ago). Then I made a new commit and the review instance was rebuilt then it started working. Then I tried to change a user's mailing address on the profile page (/profile), but some configuration setting made the frontend think it was still in the dev environment so it wasn't sending API calls to the backend, instead it was mocking them. So I wasn't able to test the thing I needed to test and instead had to manually deploy to staging using jenkins.”

2.	Gibran: 

“[Although we found temporary local workarounds to unblock some front end top back end integration testing] Review Instances are still needed to test specific branches”

“They are useful, especially for communicating with ppms backends. I think they are even more useful for lance [the backend developer]. So far my feedback is good although it would be nice to use ‘https’ for the website because for example they use http 1 ‘http://38968abcc2467e172450e68b2dc8346f.review.vetsgov-internal/’ and some browsers warn about insecure connection.

3.	Amen and Marhariel (BM2):
At first: “Kool” (they started digging around, testing it)
This morning: “All the links were not working”

4.	Follow-up today at VSA developer’s meeting: three or four developers had issues with the Heroku Review Instance. This lead to some discussions about the size of the Heroku instance, (500 GB limitations?), questions about building only what is needed or whether a CDN alternative would be better, etc.

5.	Garrison brought this up at the meeting and developers quickly chimed in also:
Requirement for SOCKS access limits his ability to show designers and accessibility experts. Even if they were given access, it is currently complicated (for non-tecnical audience) to set up, so that by itself could be a barrier to get the right people to see the work.

6.	Overall, the developers like this feature, acknowledged it was needed, so most of the comments started off with that acknowledgement; however, they want more, and have noticed a few things in the process of trying it out.
