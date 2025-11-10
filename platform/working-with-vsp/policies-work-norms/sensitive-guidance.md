---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----



# Sensitive documentation guidance

This document clarifies what content should live in the publicly-visible [`va.gov-team`](https://github.com/department-of-veterans-affairs/va.gov-team) repository vs. the not-publicly-visible [`va.gov-team-sensitive`](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive) repository.

## Background

All content related to development on VA.gov belongs in the public [`va.gov-team`](https://github.com/department-of-veterans-affairs/va.gov-team) repository when possible. However, there are a limited number of reasons that content should remain private. All content in the [`va.gov-team-sensitive`](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive) repository should fall within one of the following approved use cases.

## Private content

### PII

Veteran PII should not be checked into GitHub. 

[OMB memorandum M-07-16](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2007/m07-16.pdf) includes extensive details about securing PII, including this brief definition:

> The term "personally identifiable information" refers to information which can be used to distinguish or trace an
individual's identity, such as their name, social security number, biometric records, etc. alone, or when combined
with other personal or identifying information which is linked or linkable to a specific individual, such as date and
place of birth, mother’s maiden name, etc.

### Issues related to security issues in production

This includes content such as:

* CVEs that affect libraries used in production
* Issues returned from WASA scans

Inspecting our open-source code will show what packages we're using at which versions, which could lead to security issues --- though in terms of good posture, issues indicating a known security issue and tracking our fixing of that issue and subsequent release should generally remain private.

### Postmortems

As a rule, postmortems should generally be written privately, to allow the team to focus on documenting the important details of what went wrong, who was involved in resolution, and what systems were touched, without worrying about self-censorship for possible security details or contact information, and to avoid blaming any individuals publicly.

After finishing the postmortem, the postmortem SHOULD be copied to a public repository with names and sensitive technical information stripped out.

### Vendor selection process

*Gray area.* If the VA has been *asked* by a vendor to evaluate their software, issues and documentation related to that evaluation should likely remain private. However, if the VA has initiated their own evaluation of a given software, those results are less likely to be sensitive.

Confirm specific cases with DSVA.

### Documentation of VA systems and architecture

*Gray area.* This depends heavily on the systems themselves. Try asking around in DSVA's [#sre](https://dsva.slack.com/channels/sre) Slack channel.

Areas like the VA's network toplogy (including CIDRs), especially regarding the TIC and surrounding systems, are most likely to be considered sensitive by VA's networking and security teams. Specific versions, configurations, or flavors of software may also be considered sensitive as they may offer adversaries avenues for attacks. Anything involving accounts, CIDRs/IP addresses, or other information that could potentially provide adversaries with information on how to attack a system, should also be considered sensitive.

As with everything, when you are unsure about whether something would be considered sensitive, ask around on slack and/or start out the content in the sensitive repo.

### Internal phone numbers / email addresses

Personal contact information for individuals working on VA.gov should generally not be public.

### Internal links

Internal links can be included in publicly facing documentation and must be labeled with `[Internal]` so that public users are informed that internal links won't work for them. 

### Test user information + credentials for lower environments

Credentials should remain private.

### API Keys

API keys and tokens that need to remain private are stored in AWS Parameter Store.  See [this link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=AWS+access+for+%5Bindividual%5D) for instructions on requesting AWS access.  Access the parameter store via AWS Systems Manager to retrieve relevant tokens.  Parameter store can be accessed either via the console or by following [these instructions](https://depo-platform-documentation.scrollhelp.site/developer-docs/store-a-secret-in-parameter-store) for CLI access.  Ensure tokens are stored in a .env file that is not commited to public repos.
