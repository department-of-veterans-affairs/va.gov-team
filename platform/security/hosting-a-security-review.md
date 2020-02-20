# Hosting a security review

**Audience**: VSP security reviewers

**Context**: details and process for hosting a security review

## Philosophy

The goal of the security review is to ask, "what ways can this system break? How can it be misused?" By nature, a security review defies a concrete checklist.

The goal of this list of questions is to provide starting points for relevant discussions, and to ensure that "obvious" considerations aren't forgotten or missed.

## Questions

This list of questions is _not_ intended to be comprehensive. It _is_ intended to be comprehensively covered in a review.

### Privacy

#### Logs

* Are there any new logging statements? (FE or BE). This includes data sent to Sentry, Cloudwatch, Google Analytics, ...?
* What kinds of information are logged in the new logging? Is there anything that uniquely identifies a user (Personally Identifiable Information)?

#### User tracking / identity

* Are there any new cookies?
* Are there any new uses of existing cookies?

### Security

* How are systems authenticating with one another?
* Is anyone bypassing any obvious built-in protections? (CSRF protection in form submissions, auto-escaping in FE template rendering systems, use of `innerHTML`)

#### Frontend

* Is anyone using `innerHTML`, or otherwise bypassing template rendering system protections like auto-escaping?
* Are there any new cookies?
* Are there any new uses of existing cookies?

#### Backend

* Are there any new REST endpoints exposed by `vets-api`, or new behavior change on existing endpoints?
    * What new interactions are allowed?
    * Is there any new risky data being sent to `vets-api` (XML, file uploads, etc.)?
    * How could this endpoint be misused?
* Are there new integrations with VA backends?
    * What data are we sending to this backend?
    * How could this backend integration be misused?

### Infrastructure readiness

#### Traffic

* How much new traffic are you expecting to send to `vets-api`?
    * Consider both average (typical weekday traffic) and burst (e.g. an email blast to Veterans)

#### Rollout

* What's your rollout plan? Specifically:
    * What % of users are you rolling out to at each phase?
    * What metrics are you looking at before deciding to continue rollout?

#### Incident response

* Is there a playbook for investigating and handling likely failure modes?
* Are there new integrations with VA backends?
    * What is this backend's latency/availability profile?
    * Do we have points of contact for each new backend, in case of outages or security incidents? (TODO: link to where these should be stored/documented)

#### SLO definition

*Note: tentative while SLO infrastructure work is underway*

* Are there any new REST endpoints exposed on `vets-api`?
    * Do all new endpoints exposed on `vets-api` have availability + latency expectations?
    * Are those expectations configured in our SLO monitoring system? (TODO)
