---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----



# How QA on VSP can mature beyond the basics

- Integrate more closely with VFS teams to gain
    - Short feedback loops
    - Report quality risks as early in development lifecycle as possible
- Test "as you go" - i.e. more frequently and earlier than pre-release to help with scenario definition and edge case documentation
    - Mid-sprint testing
    - End of sprint testing
    - Regression testing during next sprint
- Communicate with developers to assess risk to any part of the VA site by implementation of new feature
- Regression moke tests after release to staging environments
    - Go beyond dead link checker
    - Automate regression tests of the VA site -- in case a conflict with unknown dependencies triggered defects on parts of the site unrelated to the release
- Either
    - Create a dedicated integrated test environment that does not pull from **main** so as to avoid the overhead associated with committing to **main**
    - Reduce / automate some of the overhead associated with committing to **main** in order to enhance the accessibility / usability of **staging** for testers
