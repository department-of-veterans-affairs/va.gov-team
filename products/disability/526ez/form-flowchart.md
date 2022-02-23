# Flow of 526EZ submission

Mermaid flowchart of the flow of the 21-526EZ disability compensation form, based on [the mural](https://app.mural.co/t/vsa8243/m/vsa8243/1636749936875/50f454702e8cd9ddf5d4e18b7209a7f6872b51a1?sender=ae9f125f-266e-4da1-9139-b15ad66209ae) and [the actual form](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction).

```mermaid

flowchart TD
    subgraph Need to file 526EZ?
    Start[File for disability compensation] --> needed-form(Is this the form I need?)
    needed-form[Is this the form I need?] --> | Yes | active-duty[Are you on active duty right now?]
    active-duty --> |Yes| active-duty-yes
    active-duty --> |No| new-claim
    new-claim[New claim or disagreeing with a VA decision?] --> |New Claim| H
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
    condition-type --> PTSD
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
    subgraph Supporting-evidence
        supporting-evidence --> supporting-evidence-info
    end
     Additional-benefits --> Supporting-evidence
    PTSD-info --> POW
    PTSD:combat --> POW
    POW --> Additional-benefits
    Supporting-evidence --> Contact-info
    Contact-info --> Additional-info
    Additional-info --> FDC-review-submit
```
