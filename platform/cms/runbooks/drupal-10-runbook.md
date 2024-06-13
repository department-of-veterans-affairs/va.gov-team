# Drupal 10 Runbook
## Introduction
Drupal is an open-source content management system (CMS) utilized by VA.gov. Drupal 10 became available in December 2022. The CMS team implemented the upgrade from Drupal 9 to Drupal 10 in November 2023. 

Regular and consistent updates to Drupal core benefit security, efficiency, and help deliver a better user experience. It’s good practice for the CMS team to regularly and consistently update Drupal to the current version. 

The purpose of this runbook is to provide a knowledge transfer of the most recent Drupal upgrade and to provide a repeatable process for consistency and efficiency when upgrading versions of Drupal. 

## Overview
### Project Description
Upgrade from current version of Drupal to Drupal 10
### Project Goals and Objectives
The primary objective of this project is to upgrade our current version of Drupal to Drupal 10, establishing a streamlined and repeatable process. This upgrade aims to enhance security, take advantage of new features, and ensure compatibility within our vast digital ecosystem at VA.gov.

By achieving this objective, we aim to enhance the overall stability, security, and performance of our CMS while ensuring a smooth and reliable upgrade process for future releases. This approach aligns with our team's commitment to delivering a robust and stable digital infrastructure while minimizing disruptions to our users and content editors. 
## Timeline and Milestones
**Testing Readiness (6 - 8 weeks)**
* Outcome: Roadmap alignment across products (Sitewide Facilities and Public Websites)
* Participants: CMS Team, Products (Sitewide Facilities and Public Websites)

**Bug Squash (2 - 4 weeks)**
* Outcome: All defects captured with decision
* Participants: CMS Team, Products (Sitewide Facilities and Public Websites)

**Deployment Plan (2 - 4 weeks)**
* Outcome: Final approach and coordination
* Participants: CMS Team, Products (Sitewide Facilities and Public Websites)

**Production Push (2 - 4 weeks)**
* Outcome: Upgrade stability
* Participants: CMS Team, Products (Sitewide Facilities and Public Websites)
## Engineering Practices
**Outward Communication** 
* Kickoff meeting with stakeholders 
  * VHA DM
  * Sitewide Facilities
  * VBA
* Topics to communicate in kickoff:
  * What does it address? (weighted by UX)
  * What doesn’t it address? (weighted by UX)
  * Fix existing issues (weighted by UX)
  * Security/Vulnerabilities addressed (weighted by DevSecOps)
  * RACI for CMS components defined
* Collect feedback and barriers to upgrade

**Release Plan Build**
* Infra readiness evaluation (CMS Team)
  * PHP
    * Verify the PHP version required/recommended by the version of Drupal
    * Check to see if there are any additional PHP libraries/modules/extensions needed
  * NodeJS
    * Verify the required version of NodeJS for build processes
      * Note: Core often requires updated versions
  * Login/Auth functionality and integration
    * Verify readiness of simplesamlphp for the next version of Drupal and compatibility with VA SSOi
  * NextJS
    * Verify that requirements are going to be met
  * Content-build/AP readiness: Verify the versions and requirements for the following modules that are specific to content-build and Accelerated Publishing
    * GraphQL
    * jsonapi (core)
    * Jsonapi_extras
    * Next
    * Next_jsonapi
    * Serialization
    * Computed_breadcrumbs
    * Easy_breadcrumb
    * Consumers
    * Simple_oauth
    * Decoupled_router
* CMS readiness evaluation (CMS Team)
    * WYSIWYG
      * Verify what, if any, changes are coming for Ckeditor
    * Contrib code readiness
      * Run the Upgrade Status report at /admin/reports/upgrade-status
      * Start working with maintainers to patch and release updates for contrib modules.
    * Custom code readiness
      * Run the Upgrade Status report at /admin/reports/upgrade-status
      * Start making updates by refactoring custom code using the results from the Upgrade Status report
    * PR review process determined and communicated to stakeholders
* Automated test cases built (CMS Team)
  * Unit
  * Functional
  * Visual
  * Sitewide development teams RACI (Sitewide)
* Timeline artifact (CMS Team)
  * States:
    * Draft
    * Approved by CMS team
    * Approved by stakeholders
  * Includes:
    * Test Window (Bug squash plan)
      * Tugboat link
      * Pathway to report 
      * Areas of focus (manual vs. automated)
      * Frequency/coordination of tugboat builds
    * Deployment planning
      * Verification by product teams that testing is complete
      * Review test results
      * Address and/or fix issues found in testing
        * this can be happening concurrently with testing
      * Re-test if necessary
        * If there are major blockers that significantly delay deployment retesting may be called for
      * Go/no go meeting with stakeholders, POs
        * Review of progress, current state, risks (mitigated and yet existing)
        * Deferred bugs - final decision by POs
        * Deployment expectations/assistance/indicators of success/roll back plan
        * Assumption: product teams own communication for their product’s stakeholders
      * Submitted/approved OIT deployment time
        * Time of Day
        * Date
        * Length
        * Expected outages
      * Post-deployment validation and stabilization
        * Pathways to report defects
        * DevSecOps daily health reports
        * Issues since deploy
        * Duration: one sprint following unless volume of defects and/or DevSecOps health reports indicate otherwise. Sprint-by-sprint at that point.
    * CMS Communication plan for each stage
* Implementation of Plan (CMS Team)
  * Weekly progress readouts against the agreed-to plan
    * Quantification of volume of defects
    * % complete
    * Projected deploy date
  * Discovered hurdles, risks and impacts
    * Quantify and qualify
  * Backlog sync in Scrum of Scrums
## QA Practices
We want to ensure that the CMS editorial experience after the upgrade is the same or better than the experience prior to the upgrade. With this in mind, we want to test as much of the CMS as possible to ensure that no issues have been introduced with the new version of Drupal. This includes testing:

* All existing content types (edit, create, and view screens)
* Multiple views (i.e. Content view, Outdated content report Facility Status, People, etc.)
* Media Library (add, edit, and view screens)
* Taxonomies (create, edit, and view screens)
* Knowledge Base section
* Menus administration
* Blocks administration

**How to test**

The CMS experience will vary depending on the user role; various elements can be hidden or shown based on the roles. It’s important that different permission levels are tested in order to account for these differences. Testing should be done using a full **Administrator** role and a more typical **Content admin** role.

**Manual testing**

Currently, the majority of Quality Assurance (QA) testing is being done manually. Manual testing is needed to ensure that the CMS functions as expected and the user interface of the CMS looks as it should. 

**Functional checks**

The CMS should be checked routinely to ensure that workflows and actions:
* Continue to function without errors (Can each workflow/action be performed completely and successfully?)
* Follow expected patterns and behaviors (Does each workflow/action continue to function exactly as it currently does on production?)

Common user workflows and actions should be tested in order to confirm these functional checks. These are some examples of common workflows:

* Publishing a new node
* Editing an existing node
* Uploading an image
* Editing a taxonomy
* Filtering within a content view

**Visual checks**

Testing also needs to make sure that the visual aspects of the CMS experience have not been negatively impacted with the upgrade. This means that, unless expected and accounted for within the scope of the upgrade, the display of elements is not changed from what is currently in production. These are some examples of what to look for:

* Spacing and alignment of fields
* Conditional fields show and hide the correct information
* Order of fields within a form
## Accessibility Practices
**Accessibility standards**

The CMS is built on Drupal, an open source software that aims to comply with WCAG 2.1 AA standards. This is in alignment with VA Platform standards. 

**Resources**
* [Drupal Accessibility](https://www.drupal.org/about/features/accessibility)
* [VA experience standards](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards)
* [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

**What to test**

As much of the CMS, as possible, should be tested to ensure that critical accessibility issues have not been introduced with the new version of Drupal. This includes:

* All existing content types (edit, create, and view screens)
* Multiple views (i.e. Content view, Outdated content report, Facility Status, People, etc.)
* Media Library (add, edit, and view screens)
* Taxonomies (create, edit, and view screens)
* Knowledge Base section
* Menus administration
* Blocks administration

**How to test**

The CMS experience is different depending on the user role; various elements can be hidden or shown based on the roles. It is important that different permission levels are tested in order to account for these differences. Testing should be done using a full Administrator role and a more typical Content admin role.

**Automated testing tools**
Automated testing is quick and efficient. Automated testing tools are able to find common accessibility errors within the code of a webpage that violate the Web Content Accessibility Guidelines (WCAG) standards. There are multiple testing tools available; these are some of the most common and easy to use:

* [axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/)
* [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)
* [WAVE](https://wave.webaim.org/)

Each page within the CMS should be tested using at least two of the automated tools. Each automated tool will flag different errors, which is why using multiple tools when testing is always best to provide the most robust automated test coverage.

**Future state**

Cypress-axe is currently used to run automated testing on the CMS. However, this testing is not as comprehensive as it could be. Backlog tickets have been created to expand the cypress-axe tests to run on a node of each content type. When completed, running automated testing manually for each page will no longer be needed as this will be handled by the automated cypress tests.

**Manual testing**

While automated testing is quick, it unfortunately can only catch only about 20 to 30% of accessibility errors. Manual testing is needed to test for the majority of accessibility errors that automated testing is unable to find.

**Keyboard testing**

Keyboard testing focuses on three main points, ensuring that someone who relies on the keyboard only to access and navigate the information on a webpage is able to do so without obstacles.

* All interactive elements must be available and actionable using the keyboard only.
  * Interactive elements can include links, buttons, form inputs, checkboxes, radio buttons, select menus, and custom elements.
  * Use TAB to move forward through the page and SHIFT + TAB to go backwards.
  * SPACE and ENTER are the most comment keys to activate elements but for more custom elements  WebAIM provides a good resource for keyboard testing
* Each element must have a visible focus indicator when focused on.
  * The CMS design system indicates that this visual indicator should be a green outline around the element.
* The order of tabbing must make sense within the product. The tab order should not randomly jump around within the page elements.

**Screen reader testing**

Similarly to automated testing tools, there are multiple screen readers available and at least one should be used to test pages within the CMS. Most often, this will be determined by the hardware the tester is using.

A Mac user should test with VoiceOver, as this is the default and most commonly used screen reader on Mac.

Windows users can test with either:

* **NVDA** - a free screen reader available for download on Windows
* **JAWS** - a screen reader that requires a license to run the full version but is very popular and if available, it should be used for testing

When testing with the screen reader, the following should be confirmed:

* Do all elements have an accessible name? Are they announced properly by the screen reader so that it is clear what the element is?
* Are interactions and states of elements announced? For example, if a button expands a menu, is the collapsed and expanded state announced?
* Are related elements announced together? For example, if help text is associated with an input field, is that text read out when the user focuses on the field?
* Is keyboard interaction still correct? Can all elements and interactions still occur even with the screen reader turned on?

**Content review**

Content review isn’t referring to the content that editors are creating, but rather the content that is part of the CMS itself. This review would include labels, help text, descriptions, link text, etc. 

This content should be reviewed to ensure:

* It uses plain language
* It clearly explains what the editor is supposed to do
* Link text is unique and descriptive
* Link text indicates if it opens in a new tab
## UX Practices
Upgrading to a new version of Drupal involves many teams and practice areas beyond the CMS team. All teams that build on the CMS also have a hand in checking over the portions of the CMS that their team is responsible for. There could be requests from other teams outside of the CMS team as they notice visual changes from doing their portion of testing as part of the Drupal upgrade process. It is the responsibility of the UI/UX Designer(s) on the CMS team to respond to these requests appropriately.

Visual testing is needed in order to catch any UI changes or UX flows that are needed as part of the Drupal upgrade and allow the UI/UX Designers on the CMS team enough time to give feedback and/or make appropriate updates to necessary tools/libraries/documentation.

Visual UI/UX testing should be done as soon as the new version of Drupal is available to test on a lower level environment. Failure to include the UX team as part of the Drupal upgrade process would be considered launch blocking.

**Needed for testing:**

**The style guide for the current version of the Drupal theme that we use.**

To access the style guide, log into the Production environment of Drupal with your admin account and navigate to Manage > Appearance > Style guides. Once here, you will choose the current style guide for the Drupal Admin theme that is currently in use.

* Here is a link to the [VA.gov Claro Admin Theme Style Guide](https://prod.cms.va.gov/admin/appearance/styleguide/vagovclaro)that our team uses as of Oct 2023.
* Please note that the style guide gives a good overview of the commonly used components throughout the CMS, however, it is not an extensive list. Some additional spot-testing of the CMS will be needed for components used that are not a part of the style guide.

**A test environment with the version of Drupal that we will be upgrading to.**

* Ask a developer on the CMS team for a link to the test environment if you do not have it.
* Within this test environment, you will need to navigate to the same style guide as the step above in order to compare the Production environment and the test environment to each other.
  * Manage > Appearance > Style guides. Once here, you will choose the style guide for the Drupal Admin theme that we will be upgrading to. This may or may not be the same theme as what we use in the current version of the Production environment.

**A place to make notes of visual changes that you notice.**

CMS Team has used a spreadsheet during previous Drupal upgrades, including version 10, that can be used as a guide and adapted when creating a spreadsheet for future Drupal upgrades. Here is a link to the [Drupal 10 Visual Testing Spreadsheet](https://docs.google.com/spreadsheets/d/1v5vc4PS1WxzctjK-qrulEL3BrVXhcTmV7VcRzin_oj4/edit#gid=0), for reference. 

Columns in the spreadsheet should include:
* A column for elements of the current Production environment that align with the different sections of the current style guide.
* A column for elements in the test environment that align with what will be in the style guide for the version of Drupal that we will be upgrading to.
* A “Pass” column to check if there ARE NOT visual differences between the two environments.
* A “Fail” column to check if there ARE visual differences between the two environments.
* A “Notes” column to leave any notes explaining the visual differences between the two environments that you notice.

Rows in the spreadsheet should include:
* A list of all of the different components outlined in both of the different environments. 
  * Components of the same type should be on the same line as each other. 
  * Copying and pasting the bulleted list outline of components from each of the environments into your spreadsheet is an easy way to get the component data from the different environments into the spreadsheet along with a link to the respective component in the respective environment.

**An Epic to place tickets that you create.**

This Epic will house tickets that you create for all of the visual changes that are marked as “Fail” meaning that there **ARE** visual differences between the current version of Drupal and the upgraded version. Ask your Delivery Manager/Product Manager what the most appropriate Epic is for you to put these tickets that you create.

Most likely, any components marked as “Fail” will need an update of some kind from one of the practice areas on the CMS team.

Some examples of UI/UX updates that might require a ticket include:
* A visual change happened that will require an update to a CMS Design System component.
* A visual change goes against rules that are part of the CMS Design System and will require a Developer to update CSS to maintain compliance.
* A necessary update that is needed for the Drupal upgrade changes/removes UI elements or changes/removes a UX flow that CMS users are accustomed to.
## Troubleshooting and Resolution

During testing, issues found should be tracked in GitHub. Before creating a new issue ticket, be sure to review [existing tickets](https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility+). Duplicate tickets should be avoided whenever possible. If a new issue ticket needs to be created, these are the items it should include:
* Labels:
  * “UX” if applicable
  * “Accessibility” if applicable
  *  “Defect”
  * “CMS Team”
    * The CMS team will be the first to review the issue. 
    * Upon review, CMS Team will determine whether the issue might be deemed more appropriate for a particular product team to handle.
* Clear description of the issue
* Screenshot(s)
  * If there is a clear visual difference between the updated version and the current version, a comparison screenshot would be particularly helpful
  * Link to example page(s) of where the issue is occurring
  * Related information (i.e. additional tickets, [Drupal - Open Source CMS  issues](http://drupal.org/), etc.)
















