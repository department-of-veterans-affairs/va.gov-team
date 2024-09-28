# Travel claim application for OH appointments
<aside>
🚧 WIP

</aside>

## Goal
Allow patients at Oracle Health facilities to file a mileage only travel claim with a personal device on the day of their appointment. This wouild be similar to what we offer Vista patients during day-of check-in. 
## Overview
To achieve this goal we will create a new application that just submits mileage only travel claims. 
## Scope
Initially this will only be for Oracle Health appointments, but this could get extended to cover Vista appointments and be used for things like post appointment messages in the future.
## Design
We are still working on how the initiation for this flow will happen. It could be a proactive text to the patient with a short link to the app, it could be patient initiated with a text. The diagram below shows a patient initiated flow. All of the parts will be in play from a technical point of view no matter which direction we go on initiation.
```mermaid
sequenceDiagram
    actor vet as Veteran
    participant ve as veTEXT
    participant ce as Oracle Health (cerner)
    participant ch as CHIP
    participant l as LoROTA
    participant web as vets-website
    participant api as vets-api
    participant btsss as BTSSS
    participant vn as VA Notify
        vet->>+ve: sends check-in text<br /> (how this is initiated is TBD)
        ve->>+ce: fetch appointments 
        ce--)-ve: return appointments
        ve->>+ch: initiate travel claim
        ch->>+l: write lorota entry
        l--)-ch: return UUID
        ch--)-ve: return short URL
        ve--)-vet: Return text message with link
        vet->>web: Clicks link to start travel application <br> and validates last & dob
        activate web
        web->>api: POST /sessions
        api->>+l: POST /token
        l--)-api: valid session
        api--)web: return 'read.full'
        web->>+api: GET patient data
        api->>+api: caches appointment identifiers by uuid
        api--)-web: return appointments payload
        web->>+vet: present Travel questions to veteran
        deactivate web
        vet->>web: answers travel questions
        web->>+api: POST travel claim with appointment date
        api->>+api:  Reads IDIPI from cache
        api->>+btsss: POST token
        btsss--)-api: returns token
        api->>+btsss: POST submitclaim
        btsss--)-api: returns claims status
        api->>+vn: Send SMS to veteran on travel claim status
        vn--)-vet: Notifies travel claim status
        api--)-web: 202 (claim submitted)
        vn->>vet: Success/fail of travel claim submission
```
