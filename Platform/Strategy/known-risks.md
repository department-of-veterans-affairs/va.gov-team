# Known platform engineering risks
The following were [documented during 2018](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Platform-Support/research/supporting-docs/Platform%20Implementation%20Plan.pdf). Many, if not all, are still very much applicable.

## Team Size Scaling Limits

There is a practical limit to how much concurrent development can happen in the current pair of
monolithic repositories/applications. This is not really a technical limitation about writing code,
it’s a question of intra-team communication and development culture. Additional developers
need to be ingrained in the local culture of the Vets.gov and have open communication across
the project. At some point expanding that communication/culture becomes infeasible, which will
result in conflicting code, incompatible software architecture and design, and an overall
slowdown in project velocity.
The actual numerical limit on team size is not easy to quantify.

## ATO Management
Even though system boundaries don’t necessarily need to align with code repository structure,
the assumption is that all components built on this monolithic platform will become part of the
Vets.gov system boundary for ATO purposes.

Adding any number of teams will stretch the current ATO management process thin. Ensuring
accuracy of the stated information in ISA/MOUs, PIA/PTA documents, and the System Security
Plan is already a challenge with the current number of sprint teams and may be impossible
without increased staffing or an alternative process for ATO management. Having multiple
contractors contribute to the platform raises challenges for ATO management in terms of one
contractor needing to direct the work of another contractor to ensure ATO compliance.

## Security and Architectural Oversight
Similar to the ATO process, ensuring the security and architectural correctness of the system’s
implementation will be a challenge with an increased number of contributors. This raises the
same issue of a “platform” contractor directing work of other contractors to ensure the
implementation remains secure. DSVA does not currently have sufficient engineering staffing to
provide this oversight.

## Gem Dependency Conflicts
A specific technical issue - as part of a monolithic Rails application, all components will be
required to use the same versions of any third-party Ruby library dependencies. If one team
identifies a requirement to upgrade a shared dependency, how is the process managed? What
if another team consumes the same dependency but does not have the engineering capacity to
implement that update? If these are contractors who directs that work?

## Code Redundancy/Inconsistency
The designs described above for making both frontend and backend more modular, and
allowing contributed applications to be more self-contained, have a trade-off. It is likely that
teams building separate sub-applications will re-implement similar functionality either because it
is not available in any common utility provided by the platform, or the common utility doesn’t
quite suit their needs.

The actual code redundancy is a minor problem, but it will lead to slightly differing
implementation details/corner cases. We have already observed this within the current sprint
team structure - two sprint teams implement slightly different mechanisms for storing uploaded
data, or two ways of downloading PDFs that work differently on various browsers, leading to an
inconsistent user experience across the site.

## Operations - Establishing Connections and Launch Readiness
Establishing connections to existing VA systems has proven to be one of the big roadblocks in
launching new features on Vets.gov. The process is opaque and difficult to predict how long it
will take. This causes churn on the platform/devops staff who have to support establishing these
connections. Adding more teams and presumably more backend connections will further reduce
the devops staff’s ability to make progress on other objectives.

The platform team is also involved with other aspects of launch preparation - load testing,
environment configuration, provisioning infrastructure in support of new features. It is already
hard to keep open communication about these topics within one contracting team.

## Operations - On-call Management and Incident Response
Additional teams who contribute to the platform need to contribute to on-call responsibilities for
the components that they add to the platform, and ideally to some of the shared on-call
responsibility for the platform as a whole.

In the case of an incident, whether critical or not, who among multiple development teams has
ultimate responsibility for resolving the issue? What if their response is not adequate or not
timely enough?
