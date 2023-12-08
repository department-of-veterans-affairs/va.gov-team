---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----



# POV related to Logging, Monitoring, Rate Limits, and Alert Configuration

### Decision made Sep 17, 2018 by James K and Liz Hunt

> Note: The process below is the solution we'll use until we learn that external teams want (or DSVA wants) more specific logging, monitoring, etc.

#### We *will not* ask external teams to set up logging, monitoring, rate limits, or alert configuration beyond the global things DSVA has already set up.

* DSVA already has global platform-wide logging and monitoring. 
* DSVA already has global platform-wide rate limits.
* DSVA already has global platform-wide alert configuration.
  * If external teams want more specific alerts, e.g., when X happens, they should use Google Analytics to monitor that.
 
With these three processes, we think we’re in good shape: no need for additional tasks for external developers.
