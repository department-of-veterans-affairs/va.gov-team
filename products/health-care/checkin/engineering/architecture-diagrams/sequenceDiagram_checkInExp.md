## Check In Sequence Diagrams

### Initiate Check-in
The check-in flow can be initiated in 2 ways: 
* veterans send the text "check in" to the designated number
* VEText initiates the process 45 minutes before the appointment

In both cases, VEText calls the initiate check-in CHIP function. CHIP retrieves the relevant data from VistA stations through Vista API, puts the data in LoROTA, sets the status, generates a shortened URL, and returns the URL to the Veteran.

**System of Record** VistA

**VistA References**:
- https://vivian.worldvista.org/vivian-data/8994/8994-4529.html "SDES SET APPT CHECK-IN STEP"
- https://vivian.worldvista.org/dox/Routine_SDESCKNSTEP.html 
- https://vivian.worldvista.org/vivian-data/8994/8994-3521.html "SDEC GETREGA"


```mermaid
sequenceDiagram
    actor vet as Veteran
    participant vt as VEText
    participant c as CHIP
    participant t as Twilio
    participant cw as Clinician Workflow
    participant va as Vista API
    participant l as LoROTA
    participant url as URL Shortener Service
    participant val as VistALink

    alt veteran initiated check-in
    vet->>+vt: text "check-in"
    vt->>-c: initiate check-in
    end
    alt 45 min reminder
    vt->>c: initiate check-in
    end
    activate c
    alt valid
      alt insurance validation needed
        c->>+t: call
        t-)-vet: send text (error validation needed)
      end
      c->>+va: get Vista token
      alt token returned
        va--)c: valid token returned
        c->>+cw: get demographics confirmations
        cw->>+va: get Vista token
        alt token returned
          va--)cw: valid token returned
          cw->>+va: get demographics by patient
          alt demographics returned
            va ->>+val: RPC SDEC GETREGA
            val--)-va: demographics returned
            va--)cw: demographics returned
            cw--)c: demographics confirmations
          else any error occurred
            va--)cw: return error
            cw--)c: return error
            c->>+t: call
            t-)-vet: send text (error check-in could not be completed)
          end
        else any error occurred
          va--)cw: return error
          cw--)-c: return error
          c->>+t: call
          t-)-vet: send text (error check-in could not be completed)
        end
      else any error occurred
        va--)-c: return error
        c->>+t: call
        t-)-vet: send text (error check-in could not be completed)
      end
      c->>+l: save appointments
      l--)-c: documentId
      c->>+url: get short url
      url--)-c: short url
      opt veteran initiated check-in
        c->>+va: get Vista token
        alt token returned
          va--)c: valid token returned
          c->>+va: set status (E-CHECK-IN STARTED)
          va->>+val: RPC SDES SET APPT CHECK-IN STEP
          val--)-va: OK
          va--)-c: status set
        else any error occurred
          va--)-c: return error
          c->>+t: call
          t-)-vet: send text (error check-in could not be completed)
        end
      end
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
    participant db as Short URL DB
    participant web as vets-website
    participant api as vets-api

    activate vet
    note right of vet: Click on "check-in" short URL
    vet->>+url: GET /short-urls/{id}
    url->>+db: GET /{key: id, TableName: table-name}
    alt id not found 
        db--)url: 404 Not Found
    else url expired
        db--)url: 404 Short URL expired
    else url found
        db--)-url: 200 Long URL
    end
    url--)-vet: 301 redirect {headers: {location: Long URL}}
    vet->>+web: load "health-care/appointment-check-in"
    web->>+api: GET /check_in/v2/sessions/{id}
    api->>api: check if session exists in redis
    api--)-web: 200 { permissions: 'read.none', status: 'success', uuid: }
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
        alt check-in started flag not set
            api->>+c: POST /setECheckInStarted
            c--)-api: success
        end
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
