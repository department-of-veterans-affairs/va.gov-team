This folder is to store all artifacts related to the Event Bus onboarding.

#### Resources
- [Event Bus Developer Portal](https://department-of-veterans-affairs.github.io/ves-event-bus-developer-portal/get-support/)
- Slack channel
     - [#ves-event-bus](https://dsva.slack.com/archives/C042ZQ7JUAX)

**Initiated with this post:**
>Patrick Bateman 
>  2:48 PM 2/20/2024
>
>next up: had a call with other folks in VES (the office, not the enrollment system) about their work creating an enterprise customer transaction tracing systems (aka the enterprise event bus). basically a central point where systems report in changes in status for transactions. so for 1010ez (or cg for that matter) va.gov would notify the event bus whenever a user submits an application. and then enrollment system would notify event bus when it is received, and then again when it gets to the next phase of processing, and so on through completion. systems could subscribe to event bus topics (e.g., “1010EZ events”) and build logic off changing transaction status (e.g. notifications). in addition, all event data will be dumped into a big analytics database so we can collectively identify choke points / issues / gaps between systems.
>
>there is interest in 1010EZ events being the first type of transaction traced in the system.
>
>what this means for us: at some point, probably this summer, we’ll need to integrate with the event bus to send 1010ez submission events. this should be relatively low lift as im told the vets-api <<-->> event bus system integration is being done by another team, so we’d just leverage that.
>
>the next thing is that it means we can start exposing really meaningful 1010ez status information to users (whether on screen, via a notification, both, or other) based on events that are sent to the event bus from the enrollment system. that means understanding what status information is useful, what’s the best way to deliver it, and other UX opportunities. and then actually building it.
