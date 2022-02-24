# Flow of 526EZ submission

Mermaid flowchart of the flow of the 21-526EZ disability compensation form, based on [the mural](https://app.mural.co/t/vsa8243/m/vsa8243/1636749936875/50f454702e8cd9ddf5d4e18b7209a7f6872b51a1?sender=ae9f125f-266e-4da1-9139-b15ad66209ae) and [the actual form](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction).

```mermaid

flowchart TD
  subgraph Need to file 526EZ?
    Start[File for disability compensation] --> needed-form(Is this the form I need?)
    needed-form[Is this the form I need?] --> | Yes | active-duty[Are you on active duty right now?]
    active-duty --> |Yes| active-duty-yes
    active-duty --> |No| new-claim
    new-claim[New claim or disagreeing with a VA decision?] --> |New Claim| file-526
    new-claim[New claim or disagreeing with a VA decision?] --> |Existing Claim| existing-claim
    existing-claim[Update your disability claim] 
    active-duty-yes[Date of Discharge 90 - 180 days] --> |Not within 90 - 180 days| no-claim
    active-duty-yes[Date of Discharge] --> |Within 90 - 180 days| file-526
    no-claim[No claim]
  end
  subgraph File 526EZ
    file-526[File a 526 disability claim online] --> File-526-start
    File-526-start[Start File 526 ] --> Vet-details
  end
  subgraph Add conditions
    Vet-details --> add-conditions
    add-conditions --> new-rated
    new-rated -->  new-condition
    new-rated -->  rated-condition-worse
    rated-condition-worse --> TODO
    new-condition --> condition-type
    condition-type --> condition-cause
    condition-cause --> military-service
    condition-cause --> before-military-got-worse
    condition-cause --> while-receiving-va-care
    military-service --> PTSD
    before-military-got-worse --> PTSD
    while-receiving-va-care --> PTSD
  end
  direction LR
  subgraph PTSD-info
    PTSD --> |Yes| PTSD-event-type-combat
    PTSD-event-type-combat --> |yes| already-filled-21-0781
    PTSD-event-type-combat --> |No| file-combat-online
  end
  subgraph PTSD:combat
    file-combat-online --> Medals-citations --> event-date --> assignment-details
    --> event-location --> break-crisis? --> individuals-involved --> event-description
    --> additional-events --> anything-else 
  end
  subgraph More-info
    PTSD --> |No| More
  end
  subgraph POW
    pow --> pow-info
  end
  subgraph Additional-benefits
    Help-buying-modifying-home? --> Help-buying-modifying-car?
    Help-buying-modifying-car? --> Granted-auto-allowance?
    Granted-auto-allowance? --> Cofined-to-home?
    Cofined-to-home?
  end
  subgraph Supporting-evidence-step-3
    supporting-evidence --> any-info
    any-info--> | yes| supporting-evidence-info
    supporting-evidence-info --> VA-medical-records
    VA-medical-records --> VA-medical-records-details
    supporting-evidence-info --> private-medical-records
    private-medical-records --> private-medical-records-details
    supporting-evidence-info --> supporting-statements
    supporting-statements --> supporting-statements-details
  end
  subgraph Contact-info-step-4
    contact-info --> bank-account-info
    bank-account-info --> homeless?
    homeless? --> terminally-ill?
    terminally-ill? --> VA-employee?
    VA-employee? --> fully-developed-claim?
    fully-developed-claim?
  end
  subgraph Review-application-step-5
    review-application --> successfully-submitted
    successfully-submitted
  end


  Additional-benefits --> Supporting-evidence-step-3
  PTSD-info --> POW
  PTSD:combat --> POW
  POW --> Additional-benefits
  Supporting-evidence-step-3 --> Contact-info-step-4
  Contact-info-step-4 --> Review-application-step-5
```
