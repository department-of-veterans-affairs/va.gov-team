# Coverage for references

## Github Issue to Test Case Mapping

**Scope:** Document Status
**Purpose:** Document traceability between GitHub issues and test cases to ensure complete test coverage of all requirements.
**Source:** GitHub Issues fetched from department-of-veterans-affairs/va.gov-team
**Test Plan:** [Document Status Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/7270)

### Overview

This traceability report maps each GitHub issue (implementation tickets, bug reports, qa fixes) to the corresponding test cases in the Test Plan. This ensures that all functional requirements, identified bugs, and platform feedback are adequately tested.

Source Documents:

- [Github Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue%20parent-issue%3Adepartment-of-veterans-affairs%2Fva.gov-team%23120479%20label%3Afrontend%2Cengineering%20-label%3Abackend)
- [Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/7270)

### Test Cases

#### Happy Path

- [C157667](https://dsvavsp.testrail.io/index.php?/cases/view/C157667) - Files Tab - Empty State
- [C157668](https://dsvavsp.testrail.io/index.php?/cases/view/C157668) - Files Tab - Empty State for File Submissions in Progress
- [C157669](https://dsvavsp.testrail.io/index.php?/cases/view/C157669) - Files Tab - Empty State for Files Received
- [C157670](https://dsvavsp.testrail.io/index.php?/cases/view/C157670) - Files We Couldn't Receive Page - Empty State
- [C157671](https://dsvavsp.testrail.io/index.php?/cases/view/C157671) - Additional Evidence Upload Success
- [C157672](https://dsvavsp.testrail.io/index.php?/cases/view/C157672) - Evidence Request Upload Success
- [C157673](https://dsvavsp.testrail.io/index.php?/cases/view/C157673) - Evidence Request - Anchor link to "Send your documents another way"
- [C157680](https://dsvavsp.testrail.io/index.php?/cases/view/157680) - Files Tab - Fully Populated State

#### Type 1 Error

- [C157674](https://dsvavsp.testrail.io/index.php?/cases/view/C157674) - Additional Evidence Upload Error - Duplicate File
- [C157675](https://dsvavsp.testrail.io/index.php?/cases/view/C157675) - Additional Evidence Upload Error - Other issue
- [C157676](https://dsvavsp.testrail.io/index.php?/cases/view/C157676) - Evidence Request Upload Error - Duplicate File
- [C157677](https://dsvavsp.testrail.io/index.php?/cases/view/C157677) - Evidence Request Upload Error - Other Issue

#### Type 2 Error

- [C157662](https://dsvavsp.testrail.io/index.php?/cases/view/C157662) - Slim Alert on Claim Card in Claims List
- [C157678](https://dsvavsp.testrail.io/index.php?/cases/view/C157678) - Error < 30 days old
- [C157679](https://dsvavsp.testrail.io/index.php?/cases/view/C157679) - Error > 30 days old

### Implementation Issues to Test Case Mapping

#### Legend

- ✅ Fully Covered
- ❌ Not Covered
- ◻️ N/A

_\* implies it affects all of CST_

#### Mappings

| Issue #                                                                                | Issue Title                                                                                                                      | Type                 | Coverage                 | Mapped Test Case(s)                         |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------ | ------------------------------------------- |
| [#119341](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119341) | Add cst_show_document_upload_status feature flag                                                                                 | frontend             | ◻️                       |                                             |
| [#119373](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119373) | Add toggle component based on feature flag to CST - OtherWaysToSendYourDocuments                                                 | frontend             | ✅                       | C157667, C157668, C157669, C157670          |
| [#119379](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119379) | Add "Files we couldn't receive" controller endpoint                                                                              | backend              | ✅                       | C157670, C157678, C157679                   |
| [#120490](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120490) | Add new `File Submissions in Progress` and `Files Received` components with empty state                                          | frontend             | ✅                       | C157667, C157668, C157669                   |
| [#120498](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120498) | Populate Document Filed sections for files in progress and files received                                                        | frontend             | ✅                       | C157669, C157670                            |
| [#120514](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120514) | Add and Populate "Files We Couldn't Receive" Page                                                                                | frontend             | ✅                       | C157678, C157679                            |
| [#121299](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121299) | Update Confirmation Alert for Successful Evidence Submission and Show in File Submissions Progress Section                       | frontend             | ✅                       | C157671                                     |
| [#121301](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121301) | Prevent duplicate file display when submission is both in-progress and received in e-folder                                      | backend              | ✅                       | C157671, C157672                            |
| [#121302](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121302) | Implement type 1 error alert for additional evidence file upload failures                                                        | frontend             | ✅                       | C157674, C157675, C157676, C157677          |
| [#121419](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121419) | Implement Type 2 failure full alerts on individual claim status and files tabs                                                   | frontend             | ✅                       | C157678, C157679                            |
| [#121428](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121428) | Create persistent entry point for "Files We Couldn't Receive" section, and populate empty state for File Submissions in Progress | frontend             | ✅                       | C157678                                     |
| [#121431](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121431) | Update Files Received cards to display "On File" status for "no longer needed" documents                                         | frontend             | ✅                       | C157680                                     |
| [#121515](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121515) | Implement Type 2 failure slim alert on claims list page                                                                          | frontend, backend    | ✅                       | C157662                                     |
| [#121811](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121811) | Files we couldn't receive - Add "showing x - x of x results" span and manage focus                                               | frontend             | ✅                       | C157678                                     |
| [#121816](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121816) | Files we couldn't receive - Disable scroll when user prefers-reduced-motion                                                      | frontend             | ◻️                       |                                             |
| [#121847](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121847) | Doc Status - Look into why tabindex="-1" is adding non-interactive card headers to Form Controls Rotor                           | frontend             | ◻️                       |                                             |
| [#122708](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122708) | Update benefits claims controller to provide on-demand evidence submissions polling                                              | backend              | ◻️                       |                                             |
| [#123354](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123354) | Implement type 1 error alert for evidence request document upload failures                                                       | frontend             | ✅                       | C157676, C157677                            |
| [#123390](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123390) | Remove hasFailedUploads flag from Claim Status Tool index page                                                                   | frontend, backend    | ◻️                       |                                             |
| [#123393](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123393) | Redirect to status tab after successful evidence submission with confirmation alert                                              | frontend             | ✅                       | C157672                                     |
| [#123833](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123833) | Add Redis Caching to Evidence Submission Polling                                                                                 | backend              | ◻️                       |                                             |
| [#124420](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124420) | Remove extra separator div when there are no failed evidence submissions                                                         | frontend             | ✅                       | C157667, C157668, C157669                   |
| [#124573](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124573) | Fix the anchor link in the evidence request confirmation alert                                                                   | frontend             | ✅                       | C157672                                     |
| [#124575](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124575) | Remove all smooth scrolling from CST                                                                                             | frontend             | ◻️                       |                                             |
| [#125286](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125286) | Replace Imposter links with VALink component                                                                                     | frontend             | ◻️                       |                                             |
| [#125358](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125358) | Backend Investigation: De-duplication of Processed Evidence Submissions in Files Received                                        | backend              | ◻️                       |                                             |
| [#125363](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125363) | Fix QA issues: empty states, spacing, and duplicate upload link                                                                  | frontend             | ✅                       | C157668, C157670, C157674, C157676          |
| [#125469](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125469) | Add Evidence Submissions to Claims Index Endpoint for Type 2 Alert Display                                                       | backend              | ✅                       | C157662                                     |
| [#126090](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126090) | Add tracked_item_friendly_name to the response to benefits claims controller responses                                           | backend              | ✅                       | C157668, C157669 , C157678, C157679         |
| [#125649](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125649) | Add Google Analytics events for document upload failure tracking and retry behavior                                              | frontend             | ◻️                       |                                             |
| [#126083](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126083) | Remove unused EvidenceSubmissionsController superseded by BenefitsClaimsController endpoint                                      | backend              | ◻️                       |                                             |
| [#126092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126092) | Update Request Type Display Logic with trackedItemFriendlyDisplayName Fallback                                                   | frontend             | ✅                       | C157668, C157669 , C157678, C157679         |
| [#127087](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127087) | Investigate and fix scroll behavior when clicking anchor links in Claim Status Tool                                              | frontend             | ◻️                       |                                             |
| [#127088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127088) | Implement file card styling updates for file card components                                                                     | frontend             | ✅                       | C157668, C157669 , C157678, C157679         |
| [#127196](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127196) | Revert button text to "Submit documents for review" in AddFilesForm                                                              | frontend             | ✅                       | C157667                                     |
| [#127198](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127198) | Remove frontend feature toggle logic for `cst_show_document_upload_status`                                                       | frontend             | ◻️                       |                                             |
| [#127200](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127200) | Remove old unused document status components after feature release                                                               | frontend             | ◻️                       |                                             |
| [#127201](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127201) | Remove Document Status feature flags from vets-api                                                                               | backend              | ◻️                       |                                             |
| [#127205](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127205) | Remove Document Status feature toggles from database                                                                             | backend              | ◻️                       |                                             |
| [#127280](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127280) | Document status - card titles with long filenames should wrap to the next line                                                   | frontend             | ✅                       | C157668, C157669, C157678, C157679, C157680 |
| [#127462](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127462) | Remove period from "Learn about other ways to send your documents" anchor link text                                              | frontend             | ✅                       | C157670                                     |
| [#127507](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127507) | Update the "other ways to send documents" link on evidence request page                                                          | frontend             | ✅                       | C157673                                     |
| [#127635](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127635) | Replace Imposter Component Links                                                                                                 | frontend             | ◻️                       |                                             |
| [#127648](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127648) | Fix Keyboard A11y of links inside Doc Status Alerts                                                                              | frontend             | ◻️                       |                                             |
| ---                                                                                    | ---                                                                                                                              | ---                  | ---                      | ---                                         |
| **Totals**                                                                             | **44 Issues**                                                                                                                    | ✅ 26 / ❌ 0 / ◻️ 18 | **100%** (26/26 non-N/A) |                                             |

### Test Case to Issue Mapping

| Test Case | Test Case Title                                                     | Referenced Issues                                                               |
| --------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| C157662   | Slim Alert on Claim Card in Claims List                             | #121515, #125469                                                                |
| C157667   | Files Tab - Empty State                                             | #119373, #120490, #124420, #127196                                              |
| C157668   | Files Tab - Empty State for File Submissions in Progress            | #119373, #120490, #124420, #125363, #126090, #126092, #127088, #127280          |
| C157669   | Files Tab - Empty State for Files Received                          | #119373, #120490, #120498, #124420, #126090, #126092, #127088, #127280          |
| C157670   | Files We Couldn't Receive Page - Empty State                        | #119373, #119379, #120498, #125363, #127462                                     |
| C157671   | Additional Evidence Upload Success                                  | #121299, #121301                                                                |
| C157672   | Evidence Request Upload Success                                     | #121301, #123393, #124573                                                       |
| C157673   | Evidence Request - Anchor link to "Send your documents another way" | #127507                                                                         |
| C157674   | Additional Evidence Upload Error - Duplicate File                   | #121302, #125363                                                                |
| C157675   | Additional Evidence Upload Error - Other issue                      | #121302                                                                         |
| C157676   | Evidence Request Upload Error - Duplicate File                      | #121302, #123354, #125363                                                       |
| C157677   | Evidence Request Upload Error - Other Issue                         | #121302, #123354                                                                |
| C157678   | Error < 30 days old                                                 | #119379, #120514, #121419, #121428, #121811, #126090, #126092, #127088, #127280 |
| C157679   | Error > 30 days old                                                 | #119379, #120514, #121419, #126090, #126092, #127088, #127280                   |
| C157680   | Files Tab - Fully Populated State                                   | #121431, #127280                                                                |
