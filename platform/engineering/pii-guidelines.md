----
# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Personal-Identifiable-Information-(PII)-guidelines.894271679.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Personally Identifiable Information (PII) Guidelines

This document covers the rules, processes, and requirements for dealing with any personally identifiable information (PII) collected or stored by the VSP platform. These guidelines are intended to protect the privacy and security of VA.gov users and comply with federal privacy regulations.

[OMB memorandum M-07-16](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2007/m07-16.pdf) includes extensive details about securing PII, including this brief definition:

>The term "personally identifiable information" refers to information which can be used to distinguish or trace an individual's identity, such as their name, social security number, biometric records, etc. alone, or when combined with other personal or identifying information which is linked or linkable to a specific individual, such as date and place of birth, mother’s maiden name, etc.

We expect developers to use the minimum amount of PII required by their application and be aware of where and how that data is stored throughout the web request lifecycle.

## Existing capabilities

There are several points in the web request lifecycle where PII can be filtered or sanitized in the `vets-api` application:

* log filtering using the [capabilities built into Rails](https://guides.rubyonrails.org/action_controller_overview.html#log-filtering)
* error report filtering in Sentry using a [custom list of sanitized fields](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/sentry/processor/pii_sanitizer.rb)

This should ensure most PII is filtered automatically. If your application interacts with any new PII, especially from a new data source, you should ensure that the PII is filtered in both the Rails log and in any errors thrown by the application. You may need to add new PII fields to the Sentry PII sanitizer.

## PII with the `PersonalInformationLog`

If you _must_ log PII to implement a specific solution, the VSP application does have a `PersonalInformationLog` which is designed to store PII. This can be useful for tracking the data relating to specific errors involving PII, logging PII during the rollout of new features, or running scheduled tasks that require access to PII.

Any use of the `PersonalInformationLog` will require additional review from the platform engineering team and _you are advised to discuss the need for storing PII early in the development process_.

## An open source reminder

Much of the code for VSP, including `vets-api` and `vets-website` is open source and available to anyone through GitHub. This means that you should be particularly careful about embedding anything that could be PII in your code, especially in tests.

Common PII that you should avoid:

* Any data that uniquely identifies an individual such as SSN, ICN, EDIPI numbers
* [Internal VA phone numbers and addresses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md#internal-phone-numbers--email-addresses)
* [Test user information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md#test-user-information--credentials-for-lower-environments)
* Any private settings configuration, in `settings.yml` for example

If you have any questions about PII and protecting it, you should discuss it with your project lead or the product support team.
