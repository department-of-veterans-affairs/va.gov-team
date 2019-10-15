# Security review process

## Context

Before launching an application on VA.gov, the feature should be reviewed by a VSP security engineer.

This isn't intended to be a thorough audit, but a high-level overview of your application, with a focus on any sensitive areas.

**Note: this is extremely low-process today and will be more fleshed out in the future.**

## Process

1. File a [GitHub issue in `va.gov-team`](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new):
    * Provide the title "Security Review for [feature name]"
    * Tag with the label `security-review`
    * Provide the following in the ticket:
        * an architecture diagram, showing involved systems + data flows
        * description of any new publicly-exposed endpoints (`vets-api` or otherwise)
        * description of any new interactions with dependent services (i.e. `vets-api` --> ???)
        * description of any other security hotspots you're concerned about / want extra attention on
1. Schedule an hour "Security Review" meeting with Andrew Gunsch (`@gunsch`), including:
    * Invite both a lead engineer responsible for developing the feature and a product manager / product owner responsible for the feature
    * Include a link to the security review GitHub issue
1. During the review, `@gunsch` (and any other VSP members) will review the application, and may provide action items to follow up on before launch. These items will be posted in the same GitHub issue.
1. Once those actions are complete, assign the GitHub issue to `@gunsch`, and wait for him to confirm and close out the issue, signalling approval of the security review.
