# Proposal to refactor SentryLogging (remove Raven)

## NOTE!!!
I’m not proposing getting rid of Sentry logging, this proposal is for the refactoring of a module called SentryLogging.  The naming is confusing, but this is an important distinction to keep in mind.  We are not yet in a position to get rid of Sentry or Grafana, even though word on the street is they will eventually be marginalized in favor of DataDog.
## What:
SentryLogging is a module that wraps Raven, a gem which allows us to log directly to sentry.
## Why is it there:
According to Kevin Duesing and Kyle Soskin, Sentry was originally the non-platform Dev logging solution.  Once upon a time, Platform wanted to keep DataDog info to themselves, so we sent logs to Grafana and Sentry. More context
## Why it’s not longer useful:
- It actually logs to the Rails logs, then to Sentry, and in many cases re-raises the error.  So at best we are polluting Sentry with redundant kruft. (see the code here)
- Assumptions worth noting, but not deal breakers if they don’t happen:
  - We are now giving DataDog access to all users. 
  - Grafana is Deprecated in favor of DataDog. 
# Why it’s actually harmful:
- Our current logging best practice is to use Rails.logger, which writes to a log file which is then parsed to both DataDog AND Sentry.  Writing directly to Sentry breaks this convention and creates disparate sources of truth.  
- Sentry will catch 100% of errors that are raised in our API.  The convention of catching errors and quietly logging them with SentryLogging is an anti-pattern that allows for the following failures
  - SentryLogging & Raven fail to connect to Sentry and the error is not logged.
  - The error is logged with the incorrect level, e.g. warn instead of alert
  - Code gets changed and the SentryLogging call is accidentally subverted, removed, broken, etc. 
- The fork we are using isn’t actively maintained, possibly out of sync
  - Sentry-ruby is regularly maintained.  Migrating would probably be a medium lift, but why??
  - The Nate Berkopec-authored fork we are using, sentry-raven is way deprecated (2013).  It seems likely given that we are on version 2.13 of the gem, that sentry-raven (fork) is actually pulling from sentry-ruby (master)?  Requires more investigation but either way this indirection isn’t rad.
## How hard would it be to remove completely:
- Not at all.  If we pulled out every single instance of SentryLogging and replaced it with Rails.logger, the exact same data would still be going to Sentry, but it would also be going to DataDog
  - This needs hard confirmation, but is apparently correct.
- Several small, sane PR.s
  - **Refactor**: Remove Raven.
    - Refactor Raven tag setting to Rails.logger metadata setting
    - Remove all references to Raven
    - This is probably the only real lift of the batch
  - **Rename**: Second, we go through and update naming conventions 
    - so the SentryLogger just becomes something like GlobalLogger 
    - methods like log_to_sentry become something like write_to_global_logs.
    - This is very easy.
  - **Encapsulate**: Third, over time, normalize our usage.  If it makes sense to have a proprietary Rails.logger wrapper (which I think it does), then we can slowly refactor explicit calls to Rails.logger into GlobalLogger
    - Encapsulation makes our logging much more testable.
    - Encapsulation would make it easy to have a ‘logging health’ dashboard that specifically tests the health of our logging ecosystem!  This may be redundant, but is a cool idea.
- I would estimate one dev, 3 sprints at most, probably / possibly less.
## What would the benefits be:
- Improved error coverage in sentry.  Less chance of “Black Holes”
- Improved coverage with DataDog.  DataDog is MUCH better at organizing logs than Sentry, because Sentry was not originally intended to be a logs platform.  Sentry requires manual tagging of data dashboard configuration, whereas DataDog dynamically associates like data, making dense logs highly traversable.
- Less proprietary code / less potential points of failure. 
- Possibility of “logging health” insights and alerts.

## Outstanding Questions:
- What is the latency introduced by the log scraper?  Would that be a reason to keep direct-to-sentry logging?

