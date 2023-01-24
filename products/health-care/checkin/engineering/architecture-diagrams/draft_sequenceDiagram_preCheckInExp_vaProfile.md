## Pre Check In Sequence Diagrams

### Initiate Pre check-in

Pre check-in is inititated by VEText based on a configurable number of days prior to the appointment. VEText calls CHIP initiate pre check-in lambda, which gets the relevant details about the Veteran's appointment and demographics and saves the data in LoROTA. VEText returns the shortened URL to the Veteran in a text message for them to start pre check-in.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant l as LoROTA
    participant c as CHIP
    participant vt as VEText
    participant t as Twilio
    participant va as VistA API
    participant cw as Clinician Workflow
    participant vp as VA Profile
    participant url as URL Shortener Service

    vt->>+c: initiate pre check-in
    activate vt
    c->>+va: get appointments
    va--)-c: appointments
    c->>+cw: get demographics and confirmations
        cw->>+vp: GET VA Profile data
            vp--)-cw: contact info, NoK and emergency contact
        cw--)-c: demographics and confirmations
    c->>+l: save appointments
    l--)-c: documentId
    c--)-vt: documentId
    vt->>+url: get short url
    url--)-vt: short url
    vt->>+t: call
    deactivate vt
    t-)-vet: send text (short url)
```

### Start Pre check-in

When Veterans click on the link in the text message, they are redirected to the website that calls vets-api to start pre check-in. This is more involved than the start of day of check-in process as vets-api also calls CHIP to refresh the pre check-in data in LoROTA so that Veterans are shown the latest data. Once the refresh is done and an existing session is not found, they are redirected to the auth page.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant url as URL Shortener Service
    participant web as vets-website
    participant api as vets-api
    participant c as CHIP
    participant l as LoROTA
    participant va as VistA API
    participant cw as Clinician Workflow
    participant vp as VA Profile

    activate vet
    vet->>+url: Click on short URL
    url--)-vet: 301 redirect
    vet->>+web: load "health-care/appointment-pre-check-in"
    web->>+api: GET /sessions
    api->>+c: refresh precheckin
    c->>+l: get saved data
    l--)-c: data
    c->>+va: get appointments
    va--)-c: appointments
    c->>+cw: get demographics and confirmations
        cw->>+vp: GET VA Profile data
            vp--)-cw: contact info, NoK and emergency contact
        cw--)-c: demographics and confirmations
    c->>+l: save data
    l--)-c: documentId
    c--)-api: refreshed
    api->>api: check if session exists
    api--)-web: session doesn't exist
    web--)-vet: redirect to login page
    deactivate vet
```

### Authentication

This is the flow when Veterans submit their last4/last name to complete the LoROTA low auth flow. If successfully authenticated, LoROTA returns the stored data from DynamoDB. The data includes patient's demographic update status. If any of the demographic data requires updates, they are shown those demographic pages to confirm that their data is correct. One additional step in pre check-in authentication scenario is when vets-api calls a CHIP lambda to set the pre check-in started status in VistA.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant web as vets-website
    participant api as vets-api
    participant l as LoROTA
    participant c as CHIP
    participant va as VistA API

    alt invalid auth
        activate vet
        vet->>+web: Enter last4/last name
        web->>+api: POST /sessions
        api->>api: check in redis and session
        api->>+l: POST /token
        l--)-api: 401 invalid auth
        api--)-web: 401 invalid auth
        web--)-vet: error page
        deactivate vet
    else valid auth
        activate vet
        vet->>+web: Enter last4/last name
        web->>+api: POST /sessions
        api->>api: check in redis and session
        api->>+l: POST /token
        l--)-api: valid session
        api->>api: save token in redis
        api->>+c: set precheckin started
        c->>+l: get appointments
        l--)-c: appointments
        c->>+va: set precheckin started
        va--)-c: set
        c--)-api: response
        api--)web: return 'read.full'
        deactivate api
        web->>+api: GET pre check-in data
        api->>+l: GET data
        l--)-api: data
        api--)-web: serialized data
        opt demographics confirmations needed
            web--)vet: demographics pages
        end
        web--)-vet: confirmation page
        deactivate vet
    end
```

### Complete Pre check-in

After Veterans confirm their demographics data (if shown), website calls vets-api which calls a CHIP lambda to complete the pre check-in scenario. CHIP sets the PRE-CHECK-IN COMPLETE status in VistA. If the Veterans confirm their demographics information, the status is set in Clinician Workflow.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant web as vets-website
    participant api as vets-api
    participant l as LoROTA
    participant c as CHIP
    participant va as VistA API
    participant cw as Clinician Workflow
    participant vp as VA Profile

    activate vet
    vet->>+web: start pre check-in
    opt demographics confirmations
        web--)vet: confirm demographics data
        vet->>web: confirmed
    end
    web->>+api: POST /pre check-in
    api->>+c: pre check-in
    c->>+l: get appointment
    l--)-c: appointment
    opt demographics confirmations
        c->>+cw: set demographics status
        opt demographics up to date
            cw->>+vp: update timestamp
            vp--)-cw: response
        end
        cw--)-c: response
    end
    c->>+va: set precheckin complete
    va--)-c: response
    c--)-api: checkin successful
    api--)-web: response
    web--)-vet: success page
    deactivate vet
```
