# Overview | VA Mobile App Test Plan

A test plan is a documented approach to testing a software product. It is an agreement between the project developers, product managers and quality assurance on the process for testing and verifying the delivery of product functionality.

The VA Mobile App is a mobile application that will allow veterans to access their healthcare services and claims information via their mobile devices.

The objective of this Test Plan is to document the process we will use to verify that the software developed for the VA Mobile App works as defined in the product requirements.

## Test strategy

We are taking an integrated approach to testing - building QA activities into the agile development process so that testing takes place early and often as a key part of sprint operations. Identifying issues during development will minimize technical and functional debt and make for better product quality and more accurate progress reporting and delivery status. In addition, we will leverage automated testing tools in the development delivery chain to provide real time integration and accessibility checks.

## Features to test

Testing will be performed throughout the development process based on the prioritization and delivery of features in the product backlog. As product management prioritizes features and the development team implements those features, Quality Assurance will write associated test cases and execute those test cases, verifying that the features delivered meet the requirements and function as intended. Features that have not been prioritized and implemented will not be tested. For a detailed description of test and acceptance criteria please refer to the product backlog. At a high level, testing will cover the following functionality:

- All delivered features related to login and authentication flows including biometric authentication
- All delivered features related to navigation and general app behavior
- All delivered features related to military information
- All delivered features related to direct deposit
- All delivered features related to app home screen
- All delivered features related to profile and contact information
- All delivered features related to letters and documentation
- All delivered features related to Veteran Crisis Line
- All delivered features related to notifications including push notifications
- All delivered features related to claims and appeals
- All delivered features related to application settings
- All delivered features related to appointments
- All delivered features related to facility locator
- All delivered features related to COVID-19 resources
- All delivered features using accessibility controls (see accessibility test plan for more detail)

## Who is responsible

Software quality is a team effort. Developers will be responsible for writing unit tests and building in automated integration tests to the code. The product team will be responsible for acceptance testing of the delivered features. Quality Assurance is responsible for manually testing the product functionality and various user flows through the application.

## Testing methods

The following testing methods will be employed during development and testing of the VA Mobile App.

| **Method** | **Description** | **Primary Owner** |
| --- | --- | --- |
| User Stories &amp; Acceptance Criteria | Requirements are defined by the product team and written as user stories in the product backlog. Acceptance criteria (AC) are written as part of the user story and describe the conditions that must be met in order for the story to be accepted as complete. | Product |
| Test Cases &amp; Functional Testing | Test cases are defined by the QA team and are written not only to make sure all stories and their acceptance criteria are met but will also account for edge cases (scenarios that happen outside of normal operating conditions) like attempting to upload the wrong file type or entering text characters into a date field. Test cases are used to perform manual functional testing in which QA interacts with the application as would an end user to identify any issues. | QA |
| Unit Testing | Unit tests are written into the code by developers and target the smallest components of the code that can be logically isolated from the rest of the system. These tests are typically fast and can run any time the code is changed to help identify and isolate defects during development. The purpose of unit tests is to make sure the code functions are defect-free before merging into the larger code base. | Developers |
| Integration Testing | In contrast to unit tests, integration tests run across individual modules of code to validate that separately developed modules are working together properly. Integration tests are also used to validate that the VA Mobile App front end interfaces with other systems and services, such as the VA.gov APIs, as designed. | Developers |
| End-to-end Testing | End-to-end testing, or system testing, looks to validate that the system as a whole works as intended. These tests are similar in nature to integration tests but are focused on the superset of delivered software and its connections to other systems. End-to-end testing will be done prior to release and will consist of both manual and automated testing to ensure adequate coverage of the delivered functionality. | Developers, QA, Product |
| Acceptance Testing | Acceptance Testing, sometimes referred to as &quot;UAT&quot;, involves the product team and other stakeholders interacting with the application to simulate real-world usage and signing off that the delivered software functions as defined in the designs and requirements. We will leverage pre-production distribution tools such as TestFlight to get the app in the hands of stakeholders to facilitate Acceptance Testing. | Product, Stakeholder community |
| Accessibility Testing | Accessibility is a major requirement for the VA Mobile App and requires additional consideration beyond the standard testing process. Developers will write in accessibility tests during implementation using automation tools and QA will include accessibility checks in the manual functional testing activities. For a more detailed plan on accessibility testing approach see the [Mobile Accessibility Testing Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/Accessibility%20Test%20Plan.md). | Developers, QA |
| Compatibility Testing | Software may behave differently depending on the specific device and operating system that it is running on. In order to validate that the software developed will work as intended across a variety of devices we will also perform manual functional testing of each feature on a variety of physical devices and OSs as defined in the [test device matrix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#what-did-you-decide-on-6). | QA |
| Performance Testing (TBD) | Performance testing aims to validate that the system as a whole meets the performance requirements defined by the VA. | TBD |
| Security Testing (TBD) | Security testing aims to validate that the system as a whole meets the security requirements defined by the VA. | TBD |

## Testing tools

In addition the testing methods listed above we will employ several tools to aid in quality activities.

| **Tool** | **Usage** |
| --- | --- |
| jest | Unit tests |
| Appium | Integration testing |
| Deque | Automated accessibility testing |
| SauceLabs | Automated integration testing |

## Testing accounts and data

In order to support testing activities we will need test user accounts with test data that is representative of the variations anticipated in production user data. The purpose of test accounts and test data is to simulate the possible variations that may occur in production data to stress test the application and ensure it has been designed and built to accommodate real world user variance. Specific test cases will be built out and executed on a sprint by sprint basis depending on priority in the then-current product backlog but some examples of test user data variance include:

- User address / location (international, domestic)
- User name and profile information (including long format names)
- User bank account information (including different bank account information formats)
- User military history (including users with service in multiple service branches)
- Users with multi-page letters
- Users with different levels of access to letters (including accounts with no permitted letters)
- Users with multiple locations for claims and appointments (including a user with appointments in different time zones)
- Users with different volumes of claims and appointments (including accounts with no claims or appointments)

## Issue tracking

Issues identified during a development sprint will be managed and addressed on the story ticket. Issues identified after a story has been closed and delivered will be logged as a separate issue ticket and linked to the story in question. The Product Owner may prioritize logged issues into upcoming sprints for the development team to address. At the POs discretion, issue tickets are not scoped and do not add to a team&#39;s velocity.

Issues should be classified according to severity based on an agreed upon scale.

| **Severity** | **Impact** |
| --- | --- |
| Critical |• This bug crashes system in use; causes file or data corruption, or causes data potential data loss including audit data<br>• This bug causes an abnormal return to the operating system (crash or system failure messages)<br>• This bug ‘hangs’ the system such that a soft or hard reboot of the device is the only exit from the condition|
| High |• This bug causes a lack of vital program functionality but has an available workaround |
| Medium |• This bug will degrade the quality or performance of the system to a point to be considered unusable. However, if an intelligent workaround exists for achieving desired functionality or performance this can be moved to Low<br>• This bug prevents other areas of the product from being tested, however, does not prevent other areas of the product from being tested if this bug is not induced.|
| Low |• There is insufficient or unclear error message conditions but has a minimal or no visible impact on product use from the end user perspective |

Potential fields to log when tracking issues:

| **Field** | **Description** |
| --- | --- |
| **Issue Title:** | Concise, descriptive title |
| **Severity:** | Severity based on severity categories |
| **Linked Story:** | Link to Zenhub story |
| **Device:** | What device was the app being run on |
| **OS:** | What OS was the app being run on |
| **Accessibility State:** | Was the app being run in an accessibility state? |
| **User Account:** | What test account was being used to test |
| **What happened / steps to reproduce:** | Describe in detail what went wrong |
| **Desired behavior:** | Describe in detail what was supposed to happen; reference existing Zenhub issue that contains the solution if possible |
| **Attachment:** | Attach either a screenshot or, preferably, a GIF file |

## Test activity reporting

QA activities will primarily be tracked in ZenHub as commentary on sprint stories or logged issues.

| **Activity** | **Summary** |
| --- | --- |
| **Acceptance Criteria / Test Cases** | Added to ZenHub and associated to user stories |
| **Issue Tickets** | Maintained in ZenHub |
| **Weekly QA Report** | One page report of open issue count by severity, unit test coverage, resolved issues and overall quality status summary |
