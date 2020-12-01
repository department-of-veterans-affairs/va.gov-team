# Platform Support Tracker

Without a better understanding of how VSP teams' time is spent on customer support work, we don't know what areas we could focus on to make improvements - such as writing documentation - that allow VFS teams to figure out their own answers or get unblocked without needing assistance from VSP.

The support tracker is a standardized way to log customer support requests so that VSP can use the data to identify roadmap initiatives.

***

[Support tracking process flow](https://docs.google.com/drawings/d/1GA9aIKZP-BVE1sPtygQyZ8wGlJOa1crK3E-qpiUYDUM/edit?usp=sharing)

***

## Installing the support tracker

[Follow the instructions located here](https://github.com/department-of-veterans-affairs/va.gov-support-slackbot) to install the tracker in your Slack workspace.

## Support tracker commands and use in Slack

### Tracking and Resolving
* @Support track => start tracking the thread
* @Support resolve => stop tracking the thread

Adding the “@” command within a Slack conversation starts the tracking of a thread. It automatically generates a Github issue and link that can be referenced. 

When the issue or request is resolved, use @support resolved to end the tracking process.

### Categories
* @Support add category  => add a category to the tracked thread.
* @Support list categories => list the categories added to this tracked thread.

When a request falls into a specific category, apply a “label”. To list available categories use the command “list categories”. If a label does not exist, you can create a new label by calling “@support add category”. 

There is no limit on labels that can be applied, and it is encouraged to add any that are relevant. All requests should have at minimum the “Documentation”, if documentation was provided, or “No Documentation”, applied.

### Links
* @Support add link  => add a link to the tracked thread.
* @Support list links => list the links added to this tracked thread.
@Support remove link => remove a link from this tracked thread.
Link commands should be used when providing links to documentations or other external resources. 

### Help
An overview of all commands used by the tracker can be referenced in Slack by calling “@Support help”.

### Github Issue Description
Once a support request has been resolved, include a description of the incident and additional detail on the issue ticket that can assist in identifying documentation priorities or gaps.

## Roadmap
* Analytics Dashboard
* Label categorizations
