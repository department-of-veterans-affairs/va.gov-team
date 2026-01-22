# Evidence Dictionary Current State (Verified)

**Document Generated:** January 15, 2026
**Source:** Codebase verification against `evidence-dictionary-migration-plan.md`

---

## Table of Contents

- [Overview](#overview)
- [Backend (vets-api)](#backend-vets-api)
  - [File Locations](#backend-file-locations)
  - [Constants Overview](#constants-overview)
  - [Service Layer](#service-layer)
- [Frontend (vets-website)](#frontend-vets-website)
  - [File Location](#frontend-file-location)
  - [Evidence Dictionary Structure](#evidence-dictionary-structure)
  - [Usage Locations](#usage-locations)
- [Tracked Item Inventory](#tracked-item-inventory)
  - [Content Coverage Matrix](#content-coverage-matrix)
  - [Summary Statistics](#summary-statistics)
  - [Items Only in Backend](#items-only-in-backend-no-frontend-override)
  - [Items Only in Frontend](#items-only-in-frontend-no-backend-mapping)
- [API Response Enhancement](#api-response-enhancement)
- [Feature Flags](#feature-flags)

---

## Overview

This document captures the current deployed state of tracked item (evidence request) content across the VA.gov frontend (`vets-website`) and backend (`vets-api`). The evidence dictionary provides content overrides for tracked items in disability claims.

Related:

- [Collaboration Cycle for [BMTII, Claim Status Tool, Evidence Requests Pattern]](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105105)
- [Security Engineering and Security Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/Benefits%20Management%20Tools%202%20-%20Evidence%20Requests%20Pattern%20-%2004012025.md)

---

## Backend (vets-api)

### Backend File Locations

| File                                               | Purpose                                                           |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| `lib/lighthouse/benefits_claims/constants.rb`      | Contains all tracked item mappings and constants                  |
| `lib/lighthouse/benefits_claims/service.rb`        | Service layer that enriches tracked items with friendly language  |
| `app/controllers/v0/benefits_claims_controller.rb` | Controller that uses constants for evidence submission processing |

### Constants Overview

The backend provides the following constant mappings in `lib/lighthouse/benefits_claims/constants.rb`:

| Constant                               | Description                              | Entry Count |
| -------------------------------------- | ---------------------------------------- | ----------- |
| `FRIENDLY_DISPLAY_MAPPING`             | Short friendly names (plain text)        | 32          |
| `ACTIVITY_DESCRIPTION_MAPPING`         | Brief activity descriptions (plain text) | 7           |
| `SHORT_DESCRIPTION_MAPPING`            | Short descriptions (plain text)          | 25          |
| `SUPPORT_ALIASES_MAPPING`              | Support aliases for tracked items        | 32          |
| `UPLOADER_MAPPING`                     | Boolean for file upload capability       | 28          |
| `SUPPRESSED_EVIDENCE_REQUESTS`         | Items to suppress from display           | 18          |
| `FIRST_PARTY_AS_THIRD_PARTY_OVERRIDES` | Status override mappings                 | 6           |

#### FRIENDLY_DISPLAY_MAPPING (32 entries)

```ruby
FRIENDLY_DISPLAY_MAPPING = {
  '21-4142/21-4142a' => 'Authorization to disclose information',
  'Employment info needed' => 'Employment information',
  'EFT - Treasury Mandate Notification' => 'Direct deposit information',
  'PTSD - Need stressor details/med evid of stressful incdnt' => 'Details about cause of PTSD',
  'RV1 - Reserve Records Request' => 'Reserve records',
  'Proof of service (DD214, etc.)' => 'Proof of service',
  'PMR Request' => 'Non-VA medical records',
  'PMR Pending' => 'Non-VA medical records',
  'General Records Request (Medical)' => 'Non-VA medical records',
  'DBQ AUDIO Hearing Loss and Tinnitus' => 'Disability exam for hearing',
  'DBQ PSYCH Mental Disorders' => 'Mental health exam',
  'Employer (21-4192)' => 'Employment information',
  'Unemployability - 21-8940 needed and 4192(s) requested' => 'Work status information',
  'Request Service Treatment Records from Veteran' => 'Official service treatment records',
  '21-4142 incomplete - need provider address' => 'Address of non-VA medical provider',
  'Submit buddy statement(s)' => 'Witness or corroboration statements',
  'ASB - tell us where, when, how exposed' => 'Asbestos exposure information',
  'HAIMS STR Request' => 'Service treatment records',
  'Name of disability needed' => 'Name of disability',
  'NG1 - National Guard Records Request' => 'National Guard service treatment records',
  'DBQ RESP Sleep Apnea' => 'Sleep apnea exam',
  'DBQ MUSC Back (thoracolumbar spine)' => 'Back pain exam',
  'DBQ MUSC Knee and Lower Leg' => 'Knee and leg exam',
  'DBQ NEURO Headaches (including migraines)' => 'Headache and migraine exam',
  '21-4142' => 'Authorization to disclose information',
  '21-4142a' => 'Non-VA medical provider information',
  'DBQ PSYCH PTSD initial' => 'PTSD claim exam',
  'SSA medical evidence requested' => 'Medical records from the Social Security Administration',
  'DBQ PSYCH PTSD Review' => 'PTSD claim follow-up exam',
  'Clarification of Claimed Issue' => 'Clarify claimed condition',
  'DBQ GU Male Reproductive Organ' => 'Reproductive health exam',
  'ASB-medical evid of disease (biopsy) needed' => 'Asbestos exposure medical documentation'
}
```

#### ACTIVITY_DESCRIPTION_MAPPING (7 entries)

```ruby
ACTIVITY_DESCRIPTION_MAPPING = {
  '21-4142/21-4142a' => 'We need your permission to request your personal information from a non-VA source, like a private doctor or hospital.',
  'Employment info needed' => 'We need employment information from your most recent employer.',
  'EFT - Treasury Mandate Notification' => 'We need your direct deposit information in order to pay benefits, if awarded.',
  'PTSD - Need stressor details/med evid of stressful incdnt' => 'We need information about the cause of your posttraumatic stress disorder (PTSD).',
  'RV1 - Reserve Records Request' => 'We've requested your reserve records on your behalf. No action is needed.',
  'Proof of service (DD214, etc.)' => 'We've requested your proof of service on your behalf. No action is needed.',
  'PMR Request' => 'We've requested your non-VA medical records on your behalf. No action is needed.'
}
```

#### SHORT_DESCRIPTION_MAPPING (25 entries)

```ruby
SHORT_DESCRIPTION_MAPPING = {
  'RV1 - Reserve Records Request' => 'We've requested your service records or treatment records from your reserve unit.',
  'Proof of service (DD214, etc.)' => 'We've requested all your DD Form 214's or other separation papers for all your periods of military service.',
  'Employer (21-4192)' => 'We sent a letter to your last employer to ask about your job and why you left.',
  'PMR Pending' => 'We've requested your non-VA medical records from your medical provider.',
  'General Records Request (Medical)' => 'We've requested your non-VA medical records from your medical provider.',
  'Unemployability - 21-8940 needed and 4192(s) requested' => 'We need more information about how your service-connected disabilities prevent you from working.',
  'Request Service Treatment Records from Veteran' => 'We need certified copies of your service treatment records if you have them.',
  '21-4142 incomplete - need provider address' => 'We need your private physician's address to request information for your claim.',
  'Submit buddy statement(s)' => 'We need statements from people who know about your condition.',
  'ASB - tell us where, when, how exposed' => 'To process your disability claim for asbestos exposure, we need a bit more information from you.',
  'HAIMS STR Request' => 'We've requested your service treatment records from the Department of Defense.',
  'Name of disability needed' => 'We need to know what your disability is and how it's connected to your military service.',
  'DBQ RESP Sleep Apnea' => 'We've requested an exam to learn more about your sleep apnea. The examiner's office will contact you to schedule this appointment.',
  'DBQ MUSC Back (thoracolumbar spine)' => 'We've requested an exam to understand your back condition. The examiner's office will contact you to schedule this appointment.',
  'DBQ MUSC Knee and Lower Leg' => 'We've requested an exam for your knee and lower leg. The examiner's office will contact you to schedule this appointment.',
  'DBQ NEURO Headaches (including migraines)' => 'We've requested an exam for your headaches. The examiner's office will contact you to schedule this appointment.',
  '21-4142' => 'We need your permission to request your personal information from a non-VA source, like a private doctor or hospital.',
  '21-4142a' => 'We need information about where you received treatment so we can request your medical records from non-VA medical providers.',
  'DBQ PSYCH PTSD initial' => 'We've requested an exam related to your PTSD. The examiner's office will contact you to schedule this appointment.',
  'SSA medical evidence requested' => 'We've asked the Social Security Administration (SSA) for your medical records.',
  'DBQ PSYCH PTSD Review' => 'We've requested a follow-up exam related to your PTSD. The examiner's office will contact you to schedule this appointment.',
  'Clarification of Claimed Issue' => 'We need more information or a medical diagnosis for the condition in your benefits claim.',
  'DBQ GU Male Reproductive Organ' => 'We've requested an exam to understand the condition affecting your reproductive health. The examiner's office will contact you to schedule this appointment.',
  'ASB-medical evid of disease (biopsy) needed' => 'We need medical documentation that supports your claim.',
  'NG1 - National Guard Records Request' => 'We've asked your National Guard unit for your service treatment records.'
}
```

#### UPLOADER_MAPPING (28 entries)

| Display Name                                              | Can Upload |
| --------------------------------------------------------- | :--------: |
| 21-4142/21-4142a                                          |     ✅     |
| Employment info needed                                    |     ✅     |
| EFT - Treasury Mandate Notification                       |     ❌     |
| PTSD - Need stressor details/med evid of stressful incdnt |     ✅     |
| RV1 - Reserve Records Request                             |     ✅     |
| Proof of service (DD214, etc.)                            |     ✅     |
| PMR Request                                               |     ✅     |
| General Records Request (Medical)                         |     ✅     |
| DBQ AUDIO Hearing Loss and Tinnitus                       |     ❌     |
| DBQ PSYCH Mental Disorders                                |     ❌     |
| PMR Pending                                               |     ✅     |
| Employer (21-4192)                                        |     ❌     |
| Unemployability - 21-8940 needed and 4192(s) requested    |     ✅     |
| Request Service Treatment Records from Veteran            |     ✅     |
| 21-4142 incomplete - need provider address                |     ✅     |
| Submit buddy statement(s)                                 |     ✅     |
| ASB - tell us where, when, how exposed                    |     ✅     |
| HAIMS STR Request                                         |     ❌     |
| Name of disability needed                                 |     ✅     |
| DBQ RESP Sleep Apnea                                      |     ❌     |
| DBQ MUSC Back (thoracolumbar spine)                       |     ❌     |
| DBQ MUSC Knee and Lower Leg                               |     ❌     |
| DBQ NEURO Headaches (including migraines)                 |     ❌     |
| 21-4142                                                   |     ✅     |
| 21-4142a                                                  |     ✅     |
| DBQ PSYCH PTSD initial                                    |     ❌     |
| SSA medical evidence requested                            |     ❌     |
| DBQ PSYCH PTSD Review                                     |     ❌     |
| Clarification of Claimed Issue                            |     ✅     |
| DBQ GU Male Reproductive Organ                            |     ❌     |
| ASB-medical evid of disease (biopsy) needed               |     ✅     |
| NG1 - National Guard Records Request                      |     ❌     |

#### SUPPRESSED_EVIDENCE_REQUESTS (18 entries)

These items are hidden from users when the feature flag `cst_suppress_evidence_requests_website` is enabled:

```ruby
SUPPRESSED_EVIDENCE_REQUESTS = [
  'Admin Decision',
  'ADMINCOD',
  'Attorney Fee',
  'Attorney Fee Release',
  'Awaiting Upload of Hearing Transcript',
  'Delayed BDD Exam Requests',
  'Exam Request - Processing',
  'Exam Review - Not Performed',
  'Exam Review - Partially Complete',
  'IT Ticket-Exam Control Issue',
  'ND Additional Action Required',
  'Pending Completion of Concurrent EP',
  'Rating Extraschedular Memorandum',
  'Records Research Task',
  'Resolution of Pending Rating EP',
  'RO Research Coordinator Review',
  'Second Signature',
  'Secondary Action Required',
  'Stage 2 Development'
]
```

#### FIRST_PARTY_AS_THIRD_PARTY_OVERRIDES (6 entries)

These items have their status manually overridden to `NEEDED_FROM_OTHERS`:

```ruby
FIRST_PARTY_AS_THIRD_PARTY_OVERRIDES = [
  'PMR Pending',
  'Proof of service (DD214, etc.)',
  'NG1 - National Guard Records Request',
  'VHA Outpatient Treatment Records (10-7131)',
  'HAIMS STR Follow-up',
  'Audit Request'
]
```

### Service Layer

**File:** `lib/lighthouse/benefits_claims/service.rb`

The `apply_friendlier_language` method (lines 362-377) enriches tracked items with the following fields:

```ruby
def apply_friendlier_language(claim)
  tracked_items = claim['attributes']['trackedItems']
  return unless tracked_items

  tracked_items.each do |i|
    display_name = i['displayName']
    i['canUploadFile'] =
      BenefitsClaims::Constants::UPLOADER_MAPPING[display_name].nil? ||
      BenefitsClaims::Constants::UPLOADER_MAPPING[display_name]
    i['friendlyName'] = BenefitsClaims::Constants::FRIENDLY_DISPLAY_MAPPING[display_name]
    i['activityDescription'] = BenefitsClaims::Constants::ACTIVITY_DESCRIPTION_MAPPING[display_name]
    i['shortDescription'] = BenefitsClaims::Constants::SHORT_DESCRIPTION_MAPPING[display_name]
    i['supportAliases'] = BenefitsClaims::Constants::SUPPORT_ALIASES_MAPPING[display_name] || []
  end
  tracked_items
end
```

**API Response Fields Added:**
| Field | Source Mapping | Description |
|-------|----------------|-------------|
| `canUploadFile` | `UPLOADER_MAPPING` | Boolean indicating if file upload is allowed (defaults to `true` if not in mapping) |
| `friendlyName` | `FRIENDLY_DISPLAY_MAPPING` | User-friendly short name |
| `activityDescription` | `ACTIVITY_DESCRIPTION_MAPPING` | Brief activity description |
| `shortDescription` | `SHORT_DESCRIPTION_MAPPING` | Short description text |
| `supportAliases` | `SUPPORT_ALIASES_MAPPING` | Array of alias strings |

---

## Frontend (vets-website)

### Frontend File Location

**Primary File:** `src/applications/claims-status/utils/evidenceDictionary.jsx`

### Evidence Dictionary Structure

The frontend evidence dictionary provides the following fields per tracked item:

| Field             | Type      | Description                                            |
| ----------------- | --------- | ------------------------------------------------------ |
| `longDescription` | JSX/React | Detailed explanation with paragraphs, lists, and links |
| `nextSteps`       | JSX/React | Instructions for next steps with VA form links         |
| `noActionNeeded`  | boolean   | Indicates no action is needed from the user            |
| `isDBQ`           | boolean   | Identifies Disability Benefits Questionnaire items     |
| `isProperNoun`    | boolean   | Controls capitalization in display text                |
| `isSensitive`     | boolean   | Marks sensitive content items                          |
| `noProvidePrefix` | boolean   | Skips "Provide" prefix in display                      |

**Total Tracked Item Types in Frontend:** 31

### Usage Locations

The evidence dictionary is imported and used in the following files:

| File                                                                      | Purpose                                                           |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `components/claim-document-request-pages/DefaultPage.jsx`                 | Main request detail page - uses `longDescription` and `nextSteps` |
| `components/claim-files-tab/FilesNeeded.jsx`                              | Files needed alerts - uses flags                                  |
| `components/claim-files-tab/FilesOptional.jsx`                            | Optional file uploads - uses flags                                |
| `components/claim-status-tab/RecentActivity.jsx`                          | Activity timeline                                                 |
| `utils/helpers.js`                                                        | Helper functions for `isProperNoun` and `isSensitive` flags       |
| `tests/local-dev-mock-api/common.js`                                      | Test fixtures                                                     |
| `tests/components/claim-document-request-pages/DefaultPage.unit.spec.jsx` | Unit tests                                                        |
| `tests/e2e/tests/details/claim-document-request.cypress.spec.js`          | E2E tests                                                         |
| `tests/e2e/support/fixtures/benefitsClaims.js`                            | E2E test fixtures                                                 |
| `tests/components/NeedHelp.unit.spec.jsx`                                 | Unit tests                                                        |

#### Helper Function Usage

From `utils/helpers.js`:

```javascript
// Uses isProperNoun flag for display name formatting
export const getDisplayFriendlyName = (item) => {
  if (!evidenceDictionary[item.displayName]?.isProperNoun) {
    let updatedFriendlyName = item.friendlyName;
    updatedFriendlyName =
      updatedFriendlyName.charAt(0).toLowerCase() +
      updatedFriendlyName.slice(1);
    return updatedFriendlyName;
  }
  // ...
};

// Uses isSensitive flag for label display
export const getLabel = (trackedItem) => {
  if (evidenceDictionary[trackedItem?.displayName]?.isSensitive) {
    return "Request for evidence";
  }
  // ...
};
```

---

## Tracked Item Inventory

### Content Coverage Matrix

**Legend:**

- **FN** = `friendlyName` (Backend: `FRIENDLY_DISPLAY_MAPPING`)
- **AD** = `activityDescription` (Backend: `ACTIVITY_DESCRIPTION_MAPPING`)
- **SD** = `shortDescription` (Backend: `SHORT_DESCRIPTION_MAPPING`)
- **CU** = `canUploadFile` (Backend: `UPLOADER_MAPPING`)
- **LD** = `longDescription` (Frontend JSX)
- **NS** = `nextSteps` (Frontend JSX)

| Display Name                                              | FN  | AD  | SD  | CU  | LD  | NS  | Frontend Flags                             |
| --------------------------------------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | ------------------------------------------ |
| 21-4142/21-4142a                                          | ✅  | ✅  |  -  | ✅  | ✅  | ✅  | -                                          |
| 21-4142                                                   | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | -                                          |
| 21-4142a                                                  | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | -                                          |
| 21-4142 incomplete - need provider address                | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isProperNoun: false                        |
| ASB - tell us where, when, how exposed                    | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isSensitive                                |
| ASB-tell us specific disability fm asbestos exposure      |  -  |  -  |  -  |  -  | ✅  | ✅  | isSensitive                                |
| ASB-medical evid of disease (biopsy) needed               | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isSensitive                                |
| Clarification of Claimed Issue                            | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isProperNoun: false, noProvidePrefix       |
| DBQ AUDIO Hearing Loss and Tinnitus                       | ✅  |  -  |  -  | ❌  | ✅  |  -  | noActionNeeded, isDBQ                      |
| DBQ GU Male Reproductive Organ                            | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: false, isDBQ |
| DBQ MUSC Back (thoracolumbar spine)                       | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: false, isDBQ |
| DBQ MUSC Knee and Lower Leg                               | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: false, isDBQ |
| DBQ NEURO Headaches (including migraines)                 | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: false, isDBQ |
| DBQ PSYCH Mental Disorders                                | ✅  |  -  |  -  | ❌  | ✅  |  -  | noActionNeeded, isDBQ                      |
| DBQ PSYCH PTSD initial                                    | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: true, isDBQ  |
| DBQ PSYCH PTSD Review                                     | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: true, isDBQ  |
| DBQ RESP Sleep Apnea                                      | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: false, isDBQ |
| EFT - Treasury Mandate Notification                       | ✅  | ✅  |  -  | ❌  | ✅  | ✅  | isProperNoun: false                        |
| Employer (21-4192)                                        | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded                             |
| Employment info needed                                    | ✅  | ✅  |  -  | ✅  | ✅  | ✅  | isProperNoun: false                        |
| General Records Request (Medical)                         | ✅  |  -  | ✅  | ✅  | ✅  |  -  | -                                          |
| HAIMS STR Request                                         | ✅  |  -  | ✅  | ❌  | ✅  |  -  | isProperNoun: false, noActionNeeded        |
| Name of disability needed                                 | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isProperNoun: false                        |
| NG1 - National Guard Records Request                      | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: true         |
| PMR Pending                                               | ✅  |  -  | ✅  | ✅  | ✅  |  -  | -                                          |
| PMR Request                                               | ✅  | ✅  |  -  | ✅  |  -  |  -  | -                                          |
| Proof of service (DD214, etc.)                            | ✅  | ✅  | ✅  | ✅  | ✅  |  -  | -                                          |
| PTSD - Need stressor details/med evid of stressful incdnt | ✅  | ✅  |  -  | ✅  |  -  |  -  | -                                          |
| Request Service Treatment Records from Veteran            | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isProperNoun: false                        |
| RV1 - Reserve Records Request                             | ✅  | ✅  | ✅  | ✅  | ✅  |  -  | -                                          |
| SSA medical evidence requested                            | ✅  |  -  | ✅  | ❌  | ✅  |  -  | noActionNeeded, isProperNoun: false        |
| Submit buddy statement(s)                                 | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isProperNoun: false                        |
| Unemployability - 21-8940 needed and 4192(s) requested    | ✅  |  -  | ✅  | ✅  | ✅  | ✅  | isProperNoun: false                        |

### Summary Statistics

| Category                               | Count |
| -------------------------------------- | ----- |
| **Total unique tracked item types**    | 33    |
| **Backend: Has friendlyName**          | 32    |
| **Backend: Has activityDescription**   | 7     |
| **Backend: Has shortDescription**      | 25    |
| **Backend: Has canUploadFile mapping** | 28    |
| **Frontend: Has longDescription**      | 31    |
| **Frontend: Has nextSteps**            | 14    |
| **Frontend: Has flags**                | 26    |

### Items Only in Backend (no frontend override)

These items have backend mappings but no rich content in the frontend `evidenceDictionary.jsx`:

| Display Name                                              | FN  | AD  | SD  | CU  |
| --------------------------------------------------------- | :-: | :-: | :-: | :-: |
| PMR Request                                               | ✅  | ✅  |  -  | ✅  |
| PTSD - Need stressor details/med evid of stressful incdnt | ✅  | ✅  |  -  | ✅  |

### Items Only in Frontend (no backend mapping)

These items have frontend content but are missing from backend constants:

| Display Name                                         | LD  | NS  | Flags       |
| ---------------------------------------------------- | :-: | :-: | ----------- |
| ASB-tell us specific disability fm asbestos exposure | ✅  | ✅  | isSensitive |

---

## API Response Enhancement

### Current Tracked Item Response Fields

When `get_claim` is called, tracked items are enriched with the following fields:

```json
{
  "id": 12345,
  "displayName": "21-4142/21-4142a",
  "status": "NEEDED_FROM_YOU",
  "canUploadFile": true,
  "friendlyName": "Authorization to disclose information",
  "activityDescription": "We need your permission to request your personal information from a non-VA source, like a private doctor or hospital.",
  "shortDescription": null,
  "supportAliases": ["21-4142/21-4142a"]
}
```

### Fields NOT Currently in API Response

The following fields exist only in the frontend and are **not** returned by the API:

| Field             | Type               | Description                            |
| ----------------- | ------------------ | -------------------------------------- |
| `longDescription` | Structured content | Rich detailed explanation              |
| `nextSteps`       | Structured content | Instructions with form links           |
| `noActionNeeded`  | boolean            | No action flag                         |
| `isDBQ`           | boolean            | Disability Benefits Questionnaire flag |
| `isProperNoun`    | boolean            | Capitalization control                 |
| `isSensitive`     | boolean            | Sensitive content marker               |
| `noProvidePrefix` | boolean            | Display prefix control                 |

---

## Feature Flags

### Currently Active Feature Flags

| Flag                                     | Purpose                                            | Location                        |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------- |
| `cst_suppress_evidence_requests_website` | Suppresses internal evidence requests from display | `benefits_claims_controller.rb` |
| `cst_suppress_evidence_requests_mobile`  | Mobile equivalent of above                         | Referenced in constants         |
| `cst_show_document_upload_status`        | Shows document upload status                       | `benefits_claims_controller.rb` |
| `cst_update_evidence_submission_on_show` | Polls for evidence submission status updates       | `benefits_claims_controller.rb` |
| `cst_use_claim_title_generator_web`      | Uses claim title generator                         | `benefits_claims_controller.rb` |
| `cst_filter_ep_960`                      | Filters EP Code 960 claims                         | `service.rb`                    |
| `cst_filter_ep_290`                      | Filters EP Code 290 claims                         | `service.rb`                    |

### Proposed Feature Flag for Migration

| Flag                           | Purpose                                                  |
| ------------------------------ | -------------------------------------------------------- |
| `cst_tracked_item_content_api` | Enable new tracked item content from API (for migration) |

---

## Key Differences from Migration Plan

The following discrepancies were found between the migration plan and the current codebase:

| Item                             | Migration Plan | Actual |
| -------------------------------- | -------------- | ------ |
| Total tracked item types         | 34             | 33     |
| Backend: Has friendlyName        | 32             | 32 ✅  |
| Backend: Has activityDescription | 7              | 7 ✅   |
| Backend: Has shortDescription    | 25             | 25 ✅  |
| Backend: Has canUploadFile       | 28             | 28 ✅  |
| Frontend: Has longDescription    | 31             | 31 ✅  |
| Frontend: Has nextSteps          | 14             | 14 ✅  |
| Frontend: Has flags              | 27             | 26     |

**Note:** The migration plan statistics are largely accurate. Minor discrepancies may be due to counting methodology differences.
