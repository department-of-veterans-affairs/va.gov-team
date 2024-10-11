# Benefit applications and forms

**Last updated:** October 11, 2024

## Sequence
```mermaid
  flowchart LR
      A[Dashboard.jsx] --> B[BenefitApplications.jsx]
      B --> C[ApplicationsInProgress.jsx]
      C --> D[ApplicationInProgress.jsx]
      C --> my_va_form_submission_statuses
      subgraph my_va_form_submission_statuses
      E[SubmissionCard.jsx] --> G[ReceivedContent]
      E[SubmissionCard.jsx] --> H[InProgressContent]
      E[SubmissionCard.jsx] --> I[ActionNeededContent]
      F[DraftCard.jsx]
      end

```

## Class diagram
```mermaid
    classDiagram
      Dashboard ..> BenefitApplications
      <<component>> Dashboard
      Dashboard : -render()

      BenefitApplications ..> ApplicationsInProgress
      <<component>> BenefitApplications
      class BenefitApplications {
        -shouldGetESRStatus()
        -getESREnrollmentStatus()
        -getFormStatuses()
        -render()
      }
      
      <<component>> ApplicationsInProgress
      class ApplicationsInProgress {
        +bool hideH3
        +Array savedForms
        +bool submittedError
        +Array submittedForms
        -render()
      }

      ApplicationsInProgress --|> ApplicationInProgress

      class ApplicationInProgress {
        <<component>>
        formId
        formTitle
        lastSavedDate
        presentableFormId
        continueUrl
        expirationDate
      }

      ApplicationsInProgress --|> SubmissionCard

      ApplicationsInProgress --|> DraftCard 
      
      namespace my_va_form_submission_statuses { 
        class SubmissionCard {
          <<component>> 
          formId
          formTitle
          lastSavedDate
          submittedDate
          presentableFormId
          status
        }
        class DraftCard {
          <<component>> 
          formId
          formTitle
          lastSavedDate
          presentableFormId
          continueUrl
          expirationDate
        }
      }
```
