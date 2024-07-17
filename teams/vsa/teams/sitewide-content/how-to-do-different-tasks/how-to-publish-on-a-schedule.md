# How to publish on a schedule with CMS content builds

We can't schedule posts for an exact time in Drupal. But editors can monitor the content builds to get a sense of when content may go live.

- A node generally goes live between 1 to 2 hours after it gets published.
- Updates need to go through a "content build" before they go live. Example: page gets published at 9:50, content build starts at 9:52, content release happens at 10:52 and page is live. If the page gets published after the content build starts--say, 9:53 in this same example--then it would go live in the next release, in the following hour.
- Editors can follow the schedule for content builds in the #status-content-build
