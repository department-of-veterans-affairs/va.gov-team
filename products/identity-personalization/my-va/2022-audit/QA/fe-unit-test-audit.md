# Frontend Unit Test Audit
_Results of audit conducted in Sprint 8 (4/12/23 - 4/25/23)_

### `personalization/dashboard/actions`

| File | Has Tests? | Ticket to Write Missing Test(s)| In use on My VA (y/n) as of mm/yyyy|
| -- | -- | --| --|
| [claims.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/claims.jsx) | ❌ | [#57462](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57462)| |
| [debts.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/debts.js) | ❌ | [#57462](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57462)| |
| [messaging.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/messaging.js) | ❌ | [#57462](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57462)| |
| [notifications.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/notifications.js) | ❌ | [#57462](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57462)| |
| [payments.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/payments.js) | ❌ | [#57462](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57462)| |

### `personalization/dashboard/components`

| File | Has Tests? | Ticket to Write Missing Test(s) | In use on My VA (y/n) as of mm/yyyy|
| -- | -- | -- | --|
| [CTALink.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/CTALink.jsx) | ✅ | [#57466](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57466)|  y - 05/2023  |
| [ClaimsListItem.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/ClaimsListItem.jsx) | ❌ | [#57468](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57468)|  n (removed)  |
| [Dashboard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/Dashboard.jsx) | ✅ | [#57470](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57470)|  y  |
| [DashboardAlert.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/DashboardAlert.jsx) | ✅ |  |  n  |
| [DashboardWidgetWrapper.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/DashboardWidgetWrapper.jsx) | ✅ | [57470](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57470) |  y  |
| [IconCTALink.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/IconCTALink.jsx) | ❌ | [#57471](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57471)    |  y  |
| [RenderWidgetDowntimeNotification.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/RenderWidgetDowntimeNotification.jsx) | ❌ | [#57472](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57472)   | y |
| [CernerWidgets.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/cerner-widgets.js) | ✅ |    |  y  |
| [apply-for-benefits/ApplicationInProgress.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/apply-for-benefits/ApplicationInProgress.jsx) | ✅ |    |  y  |
| [apply-for-benefits/ApplicationsInProgress.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/apply-for-benefits/ApplicationsInProgress.jsx) | ✅ | [#57474](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57474)|  y  |
| [apply-for-benefits/ApplyForBenefits.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/apply-for-benefits/ApplyForBenefits.jsx) | ✅ |    | y |
| [apply-for-benefits/BenefitOfInterest.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/apply-for-benefits/BenefitOfInterest.jsx) | ✅ | [#57474](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57474)|  y  |
| [apply-for-benefits/SavedApplications.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/apply-for-benefits/SavedApplications.jsx) | ✅ | [#57474](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57474)|  y  |
| [benefit-payments/BenefitPayments.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/benefit-payments/BenefitPayments.jsx) | ✅ | [#57476](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57476)|  y  |
| [benefit-payments/PaymentsCard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/benefit-payments/PaymentsCard.jsx) | ✅ | [#57476](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57476)|  y  |
| [claims-and-appeals/hooks/useHighlightedClaimOrAppeal.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals/hooks/useHighlightedClaimOrAppeal.js) | ❌ | [#57477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57477)|  y  |
| [claims-and-appeals/Appeal.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals/Appeal.jsx) | ✅ | [#57477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57477)|  y  |
| [claims-and-appeals/Claim.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals/Claim.jsx) | ✅ | [#57477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57477)|  y  |
| [claims-and-appeals/ClaimsAndAppeals.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals/ClaimsAndAppeals.jsx) | ✅ |  [#57477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57477)  |  y  |
| [claims-and-appeals/Decision.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals/Decision.jsx) | ✅ | [#57477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57477)|  y  |
| [claims-and-appeals/HighlightedClaimAppeal.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals-v2/HighlightedClaimAppealV2.jsx) | ❌ | [#57477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57477)|  y  |
| [debts/CopaysCard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/debts/CopaysCard.jsx) | ✅ | [#57478](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57478)|  y - 9/20/23 |
| [debts/DebtsCard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/debts/DebtsCard.jsx) | ✅ | [#57478](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57478)|  y - 9/20/23 |
| [debts/Debts.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/debts/Debts.jsx) | ✅ | [#57478](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57478)|  y - 9/20/23 |
| [education-and-training/EducationAndTraining.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/education-and-training/EducationAndTraining.jsx) | ✅ | [#57479](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57479)|  y  |
| [health-care/AppointmentsCard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/health-care/AppointmentsCard.jsx) | ✅ | [#57480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57480)|  y  |
| [health-care/HealthCareCTA.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/health-care/HealthCareCTA.jsx) | ✅ | [#57480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57480)|  y  |
| [health-care/HealthCareContent.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/health-care/HealthCareContent.jsx) | ✅ | [#57480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57480)|  y  |
| [health-care/HealthCare.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/health-care/HealthCare.jsx) | ✅ | [#57480](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57480)|  y  |
| [notifications/DebtNotification.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/notifications/DebtNotification.jsx) | ✅ | [#57482](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57482)|  n  |
| [notifications/Notifications.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/notifications/Notifications.jsx) | ✅ | [#57482](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57482)|  y  |

### `personalization/dashboard/constants`

| File | Has Tests? | Ticket to Write Missing Test(s) | In use on My VA (y/n) as of mm/yyyy|
| -- | -- | -- | -- |
| [index.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/constants/index.js) | ❌ |   |   |

### `personalization/dashboard/reducers`

| File | Has Tests? | Ticket to Write Missing Test(s) |In use on My VA (y/n) as of mm/yyyy|
| -- | -- | -- | -- |
| [claimsV2.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/claimsV2.js) | ❌ |   |   |
| [debts.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/debts.js) | ❌ |   |   |
| [folders.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/folders.js) | ✅ |   |   |
| [index.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/index.js) | ❌ |   |   |
| [notifications.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/notifications.js) | ❌ |   |   |
| [payments.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/payments.js) | ❌ |   |   |
| [prescriptions.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/prescriptions.js) | ✅ |   |   |
| [recipients.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/recipients.js) | ✅ |   |   |
| [unreadCount.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/unreadCount.js) | ❌ |   |   |

### `personalization/dashboard/utils`

| File | Has Tests? | Ticket to Write Missing Test(s) |In use on My VA (y/n) as of mm/yyyy|
| -- | -- | -- | -- |
| [appeals-v2-helpers.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/appeals-v2-helpers.jsx) | ❌ |   |   |
| [appointments.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/appointments.js) | ❌ |   |   |
| [claims-helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/claims-helpers.js) | ❌ |   |   |
| [constants.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/constants.js) | ❌ |   |   |
| [getStatusContents.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/getStatusContents.jsx) | ❌ |   |   |
| [helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/helpers.js) | ❌ |   |   |
| [timezone.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/utils/timezone.js) | ❌ |   |   |


### `personalization/dashboard`

| File | Has Tests? | Ticket to Write Missing Test(s) |In use on My VA (y/n) as of mm/yyyy|
| -- | -- | -- | -- |
| [claims-and-appeals-helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/claims-and-appeals-helpers.js) | ❌ |   |   |
| [covid-19.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/covid-19.jsx) | ✅ |   |   |
| [helpers.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/helpers.jsx) | ✅ |   |   |
| [selectors.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/selectors.js) | ❌ |   |   |
| [useDowntimeApproachingRenderMethod.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/useDowntimeApproachingRenderMethod.jsx) | ❌ |   |   |
| [useLastWord.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/useLastWord.js) | ❌ |   |   |
