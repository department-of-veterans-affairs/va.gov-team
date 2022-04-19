# What is an RFC?
An RFC is a [Request for Comments](https://en.wikipedia.org/wiki/Request_for_Comments)

An RFC is a reflection of the team's thoughts and plans _at that moment_.

# Why do we use RFCs?
We write an RFC to *communicate intent and get feedback* before we start building something. [RFC driven development](https://engineering-management.space/post/rfc-driven-development/) is a good concept to consider as we build for the Platform.

# Who writes an RFC?
You! Anyone on a team, including product managers, UX, research, as well as engineers.

# When do I write an RFC?
Anytime! Whenever your team is making a decision that could affect the platform, write the details and get feedback from others on the Platform.

# How do I create an RFC and manage its lifecycle?
An RFC's lifecycle is managed through the github PR process.

Steps:
* create a branch
* create your RFC from this [template](zz-RFC-template.md)
* name your rfcs file using this format: `YYYY-MM-DD-<definitive statement of your decision>`
* write!
* push your branch
* open a PR
  - append `template=issue_template.md` to the "compare" url to add the description template (optional - description should be minimal or even blank, all the content should be in the RFC md file itself)
  - name the PR similar to the title of your RFC: `RFC: YYYY-MM-DD <definitive statement of your decision>`
* share widely. solicit comments directly from folks you think should be involved
* resolve comments by updating your RFC file. treat the process like a code PR
* after all comments are resolved, and all discussion has ended, merge your PR
* after merge, if further discussion is needed, or if the decision in the RFC has changed, create a new RFC to reflect that
