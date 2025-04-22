# Claims‑Status File Relationship Map

## 🔍 Scan Summary

- **Files scanned:** 226
- **Entry file:** `src/applications/claims-status/routes.jsx`
- **Direct route components:** 16
- **Feature‑toggle refs:** 15

## 🗺️ Routes & Dependencies

### `components/TogglerRoute.jsx`

_No local dependencies_

### `containers/YourClaimsPageV2.jsx`

- `actions/types.js`
- `components/AppealsUnavailable.jsx`
- `components/ClaimCard/ClaimCard.jsx`
- `components/ClaimCard/ClaimCardLink.jsx`
- `components/ClaimCard/index.jsx`
- `components/ClaimsAppealsUnavailable.jsx`
- `components/ClaimsBreadcrumbs.jsx`
- `components/ClaimsListItem.jsx`
- `components/ClaimsUnavailable.jsx`
- `components/FeaturesWarning.jsx`
- `components/NeedHelp.jsx`
- `components/NoClaims.jsx`
- `components/StemClaimListItem.jsx`
- `components/appeals-v2/AppealListItem.jsx`
- `components/claim-letters/ClaimLetterSection.jsx`
- `constants.js`
- `selectors/index.js`
- `utils/helpers.js`
- `utils/page.js`
- `utils/withRouter.jsx`

### `containers/YourClaimLetters/index.jsx`

- `actions/index.js`
- `actions/types.js`
- `components/ClaimsBreadcrumbs.jsx`
- `components/WIP.jsx`
- `components/appeals-v2/Decision.jsx`
- `components/claim-letters/ClaimLetterList.jsx`
- `components/claim-letters/ClaimLetterListItem.jsx`
- `constants.js`
- `containers/YourClaimLetters/errorComponents/NoLettersContent.jsx`
- `containers/YourClaimLetters/errorComponents/ServerErrorContent.jsx`
- `containers/YourClaimLetters/errorComponents/UnauthenticatedContent.jsx`
- `selectors/index.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/helpers.js`
- `utils/page.js`

### `containers/ClaimPage.jsx`

_No local dependencies_

### `containers/ClaimStatusPage.jsx`

- `actions/index.js`
- `actions/types.js`
- `components/AddingDetails.jsx`
- `components/ClaimContentionList.jsx`
- `components/ClaimDetailLayout.jsx`
- `components/ClaimStatusHeader.jsx`
- `components/ClaimsBreadcrumbs.jsx`
- `components/ClaimsUnavailable.jsx`
- `components/DueDate.jsx`
- `components/IndexLink.jsx`
- `components/NeedHelp.jsx`
- `components/Notification.jsx`
- `components/TabItem.jsx`
- `components/TabNav.jsx`
- `components/appeals-v2/Decision.jsx`
- `components/claim-files-tab/FilesNeeded.jsx`
- `components/claim-status-tab/ClosedClaimAlert.jsx`
- `components/claim-status-tab/NextSteps.jsx`
- `components/claim-status-tab/Payments.jsx`
- `components/claim-status-tab/RecentActivity.jsx`
- `components/claim-status-tab/WhatWeAreDoing.jsx`
- `components/claim-status-tab/WhatYouNeedToDo.jsx`
- `constants.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/evidenceDictionary.jsx`
- `utils/helpers.js`
- `utils/page.js`

### `containers/StemClaimStatusPage.jsx`

- `actions/index.js`
- `actions/types.js`
- `components/ClaimsBreadcrumbs.jsx`
- `components/ClaimsUnavailable.jsx`
- `components/StemAskVAQuestions.jsx`
- `components/StemDeniedDetails.jsx`
- `components/appeals-v2/Decision.jsx`
- `constants.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/helpers.js`
- `utils/page.js`
- `utils/withRouter.jsx`

### `containers/FilesPage.jsx`

- `actions/index.js`
- `actions/types.js`
- `components/AddingDetails.jsx`
- `components/AskVAToDecide.jsx`
- `components/ClaimContentionList.jsx`
- `components/ClaimDetailLayout.jsx`
- `components/ClaimsBreadcrumbs.jsx`
- `components/ClaimsUnavailable.jsx`
- `components/DueDate.jsx`
- `components/IndexLink.jsx`
- `components/MailMessage.jsx`
- `components/NeedHelp.jsx`
- `components/Notification.jsx`
- `components/TabItem.jsx`
- `components/TabNav.jsx`
- `components/UploadStatus.jsx`
- `components/appeals-v2/Decision.jsx`
- `components/claim-files-tab/AddFilesForm.jsx`
- `components/claim-files-tab/AdditionalEvidencePage.jsx`
- `components/claim-files-tab/ClaimFileHeader.jsx`
- `components/claim-files-tab/DocumentsFiled.jsx`
- `components/claim-files-tab/FilesNeeded.jsx`
- `components/claim-files-tab/FilesOptional.jsx`
- `components/claim-files-tab/RemoveFileModal.jsx`
- `constants.js`
- `selectors/index.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/evidenceDictionary.jsx`
- `utils/helpers.js`
- `utils/page.js`
- `utils/withRouter.jsx`

### `containers/AskVAPage.jsx`

- `actions/types.js`
- `components/ClaimsBreadcrumbs.jsx`
- `components/NeedHelp.jsx`
- `constants.js`
- `utils/helpers.js`
- `utils/page.js`
- `utils/withRouter.jsx`

### `containers/DocumentRequestPage.jsx`

- `actions/types.js`
- `components/ClaimsBreadcrumbs.jsx`
- `components/DueDate.jsx`
- `components/MailMessage.jsx`
- `components/NeedHelp.jsx`
- `components/Notification.jsx`
- `components/UploadStatus.jsx`
- `components/claim-document-request-pages/Default5103EvidenceNotice.jsx`
- `components/claim-document-request-pages/DefaultPage.jsx`
- `components/claim-files-tab/AddFilesForm.jsx`
- `components/claim-files-tab/RemoveFileModal.jsx`
- `constants.js`
- `selectors/index.js`
- `utils/evidenceDictionary.jsx`
- `utils/helpers.js`
- `utils/page.js`
- `utils/withRouter.jsx`

### `containers/ClaimEstimationPage.jsx`

- `actions/types.js`
- `components/ClaimsBreadcrumbs.jsx`
- `components/NeedHelp.jsx`
- `constants.js`
- `utils/helpers.js`
- `utils/page.js`

### `containers/AppealsV2StatusPage.jsx`

- `components/appeals-v2/Alert.jsx`
- `components/appeals-v2/AlertsList.jsx`
- `components/appeals-v2/CurrentStatus.jsx`
- `components/appeals-v2/Decision.jsx`
- `components/appeals-v2/Docket.jsx`
- `components/appeals-v2/DocketCard.jsx`
- `components/appeals-v2/Expander.jsx`
- `components/appeals-v2/NextEvent.jsx`
- `components/appeals-v2/PastEvent.jsx`
- `components/appeals-v2/Timeline.jsx`
- `components/appeals-v2/WhatsNext.jsx`
- `constants.js`
- `utils/appeals-v2-helpers.jsx`

### `containers/AppealsV2DetailPage.jsx`

- `components/appeals-v2/Decision.jsx`
- `components/appeals-v2/Issues.jsx`
- `constants.js`
- `utils/appeals-v2-helpers.jsx`

### `containers/AppealInfo.jsx`

- `actions/index.js`
- `actions/types.js`
- `components/ClaimsBreadcrumbs.jsx`
- `components/CopyOfExam.jsx`
- `components/IndexLink.jsx`
- `components/NeedHelp.jsx`
- `components/TabItem.jsx`
- `components/appeals-v2/AppealHeader.jsx`
- `components/appeals-v2/AppealHelpSidebar.jsx`
- `components/appeals-v2/AppealNotFound.jsx`
- `components/appeals-v2/AppealsV2TabNav.jsx`
- `components/appeals-v2/Decision.jsx`
- `constants.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/page.js`
- `utils/withRouter.jsx`

### `containers/ClaimsStatusApp.jsx`

- `actions/index.js`
- `components/ClaimsAppealsUnavailable.jsx`
- `components/appeals-v2/Decision.jsx`
- `constants.js`
- `selectors/index.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/datadog-rum/initializeRealUserMonitoring.js`
- `utils/datadog-rum/useBrowserMonitoring.js`

### `containers/OverviewPage.jsx`

- `actions/index.js`
- `actions/types.js`
- `components/AddingDetails.jsx`
- `components/ClaimContentionList.jsx`
- `components/ClaimDetailLayout.jsx`
- `components/ClaimPhase.jsx`
- `components/ClaimTimeline.jsx`
- `components/ClaimsBreadcrumbs.jsx`
- `components/ClaimsUnavailable.jsx`
- `components/IndexLink.jsx`
- `components/NeedHelp.jsx`
- `components/Notification.jsx`
- `components/PhaseBackWarning.jsx`
- `components/TabItem.jsx`
- `components/TabNav.jsx`
- `components/appeals-v2/Decision.jsx`
- `components/claim-overview-tab/ClaimOverviewHeader.jsx`
- `components/claim-overview-tab/ClaimPhaseStepper.jsx`
- `components/claim-overview-tab/DesktopClaimPhaseDiagram.jsx`
- `components/claim-overview-tab/MobileClaimPhaseDiagram.jsx`
- `constants.js`
- `tests/e2e/fixtures/mocks/mock-api/index.js`
- `utils/appeals-v2-helpers.jsx`
- `utils/helpers.js`
- `utils/page.js`

### `containers/Standard5103NoticePage.jsx`

- `components/ClaimsBreadcrumbs.jsx`
- `components/NeedHelp.jsx`
- `components/claim-document-request-pages/Default5103EvidenceNotice.jsx`
- `constants.js`
- `utils/page.js`
- `utils/withRouter.jsx`

## 🚩 Feature Toggles

| File | Toggle Name |
| ---- | ----------- |
| `components/claim-document-request-pages/DefaultPage.jsx` | `cstFriendlyEvidenceRequests` |
| `components/claim-files-tab/AddFilesForm.jsx` | `cstFriendlyEvidenceRequests` |
| `containers/DocumentRequestPage.jsx` | `cst5103UpdateEnabled` |
| `containers/FilesPage.jsx` | `cst5103UpdateEnabled` |
| `containers/OverviewPage.jsx` | `cstClaimPhases` |
| `containers/YourClaimsPageV2.jsx` | `FEATURE_FLAG_NAMES` |
| `selectors/index.js` | `FEATURE_FLAG_NAMES` |
| `utils/appeals-v2-helpers.jsx` | `cstIncludeDdlBoaLetters` |
| `utils/appeals-v2-helpers.jsx` | `cstIncludeDdlBoaLetters` |```
