## Check In Sequence Diagrams

### Initiate Check-in

When Veterans send the text "check in" to the designated number, VEText receives the text and intiates the check-in process. CHIP retrieves the relevant data through VistA APIs, puts the data in LoROTA, sets the status and generates and sends the shortened URL back to the Veteran.

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

    vet->>+vt: text "check-in"
    vt->>-c: initiate check-in
    activate c
    alt valid
      par
        c->>+va: get appointments
        va--)-c: appointments
      and
        c->>+va: check insurance validation
        va--)-c: validation not needed
      end
      par
        c->>+cw: get demographics
        par
            cw->>+vp: GET /cuf/contact-information/v1/<id>
            vp--)-cw: contact information
            cw->>+vp: get demographics (get endpoints)
            vp--)-cw: demographics
        end
        cw--)-c: demographics
      and
        c->>+cw: get demographics confirmations


        cw--)-c: demographics confirmations
      end
        c->>+l: save appointments
        l--)-c: documentId
        c->>+va: set status (E-CHECK-IN STARTED)
        va--)-c: status set
        c->>+url: get short url
        url--)-c: short url
        c->>+t: call
        t-)-vet: send text (short url)
        deactivate c
    else unknown number
        c->>+t: call
        t-)-vet: send text (error phone not found)
    else no appointments
        c->>+t: call
        t-)-vet: send text (error phone not found)
    end
```

### Start Check-in

Once they click on the link, they are redirected to the website, which checks if their session exists. If not, they are redirected to the low auth page.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant url as URL Shortener Service
    participant web as vets-website
    participant api as vets-api

    activate vet
    vet->>+url: Click on "check-in" short URL
    url--)-vet: 301 redirect
    vet->>+web: load "health-care/appointment-check-in"
    web->>+api: GET /sessions
    api->>api: check if session exists
    api--)-web: session doesn't exist
    web--)-vet: redirect to login page
    deactivate vet
```

### Authentication

This is the flow when Veterans submit their last4/last name to complete the LoROTA low auth flow. If successfully authenticated, LoROTA returns the stored data from DynamoDB. The data includes patient's demographic update status. If any of the demographic data requires updates, they are shown those demographic pages to confirm that their data is correct.

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
        api--)web: return 'read.full'
        deactivate api
        web->>+api: GET check-in appointments
        opt appointment identifiers exist
            api->>+c: refresh appointments
            c->>+va: get appointments
            va--)-c: appointments
            c--)-l: data
        end
        api->>+l: GET data
        l--)-api: data
        api--)-web: serialized data (appointments + demographics)
        opt demographics confirmations needed
            web--)vet: demographics page
        end
        web--)-vet: appointments page
        deactivate vet
    end
```

### Check In

When Veterans confirm and check-in to their appointment, a call is made to CHIP which sets the check-in status to `E-CHECKIN COMPLETE` in VistA. If the Veteran confirms their demographics information, the status is set in Clinician Workflow.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant web as vets-website
    participant api as vets-api
    participant l as LoROTA
    participant c as CHIP
    participant va as VistA API
    participant cw as Clinician Workflow

    activate vet
    vet->>+web: Click check-in
    opt demographics confirmations
        web->>+api: PUT /demographics
        api->>+c: confirm demographics
        c->>+cw: set patient demographic status
        cw--)-c: status set
        c--)-api: response
        api--)-web: response
    end
    web->>+api: POST /check-in
    api->>+c: check-in
    c->>+l: get appointment
    l--)-c: appointment
    par
        c->>+va: set checkin
        va--)-c: response
    and
        c->>+va: set appointment status (E-CHECKIN COMPLETE)
        va--)-c: response
    and
        c->>+cw: set checkin step
        cw--)-c: response
    end
    c--)-api: checkin successful
    api--)-web: response
    web--)-vet: successful checked in page
    deactivate vet
```
