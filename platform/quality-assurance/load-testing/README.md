---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Load Testing
In this folder, you will find information specific to load testing on VSP.  Please note that detailed load testing materials are stored in the **[devops](https://github.com/department-of-veterans-affairs/devops/tree/master/loadtest)** repository.

## Load testing expectations for VFS teams
Each VFS team is expected to create or modify load tests appropriately as they work on their product.  VFS teams should work with the analytics team to understand the peak load to expect on their product.
- If you are modifying an existing product you should create and execute load tests prior to modifying the product in order to establish a baseline.  Then once you begin modifying the product you should rerun load tests in order to understand the effects that your team's changes are having on performance.
- If you are creating a new product you should create and execute load tests once your product is ready to be deployed to staging.

## Reference materials
- [Locust Docs](https://docs.locust.io/en/stable/)
- [Getting started with load testing on VSP](https://github.com/department-of-veterans-affairs/devops/tree/master/loadtest)
- **Examples**:
  - [Search](https://github.com/department-of-veterans-affairs/devops/tree/master/loadtest/search)
  - [Appeals](https://github.com/department-of-veterans-affairs/devops/tree/master/loadtest/appealsv2) -- please note that this example requires [authenticated sessions](auth-session-loadtest.md)

## Help
Load testing support is provided by:  
- **Peter Hill**, @Peter Hill on Slack
- [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) on Slack
