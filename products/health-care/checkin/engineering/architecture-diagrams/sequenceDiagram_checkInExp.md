## Check In Sequence Diagrams

### Initiate Check-in
The check-in flow can be initiated in 2 ways: 
* veterans send the text "check in" to the designated number
* VEText initiates the process 45 minutes before the appointment

In both cases, VEText calls the initiate check-in CHIP function. CHIP retrieves the relevant data from VistA stations through Vista API, puts the data in LoROTA, sets the status, generates a shortened URL, and returns the URL to the Veteran.

**System of Record**: VistA

**VistA References**:
- https://vivian.worldvista.org/vivian-data/8994/8994-4529.html "SDES SET APPT CHECK-IN STEP"
- https://vivian.worldvista.org/dox/Routine_SDESCKNSTEP.html 
- https://vivian.worldvista.org/vivian-data/8994/8994-3521.html "SDEC GETREGA"

```mermaid
sequenceDiagram
  autonumber
  actor vet as Veteran
  participant vt as VEText
  participant c as CHIP
  participant cw as Clinician Workflow
  participant va as Vista API
  participant l as LoROTA
  participant url as URL Shortener Service
  participant val as VistALink

  alt veteran initiated check-in
    vet->>+vt: text "check-in"
    vt->>+c: initiate check-in
  else 45 min reminder
    vt->>c: initiate check-in
  end

  break too few appointments
    c-)vt: return error
    vt-)vet: send text (ERROR_NOT_AVAILABLE)
  end

  break insurance validation needed
    c-)vt: return error
    vt-)vet: send text (ERROR_INSURANCE_VALIDATION)
  end

  break unknown number
    c-)vt: return error
    vt-)vet: send text (ERROR_PHONE_NOT_FOUND)
  end

  c->>+va: get Vista token

  break any error occurs
    va--)c: return error
    c->>vt: return error
    vt-)vet: send text (error: check-in could not be completed)
  end

  va--)-c: valid token returned

  c->>+cw: get demographics status

  break any error occurs
    cw--)c: return error
    c->>vt: call
    vt-)vet: send text (error: check-in could not be completed)
  end

  cw--)-c: demographics status

  c->>+l: save appointments

  break any error occurs
    l--)c: return error
    c->>vt: call
    vt-)vet: send text (error: check-in could not be completed)
  end

  l--)-c: documentId

  c->>+url: get short url

  break any error occurs
    url--)c: return error
    c->>vt: call
    vt-)vet: send text (error: check-in could not be completed)
  end

  url--)-c: short url

  opt veteran initiated check-in
    c->>+va: get Vista token

    break any error occurs
      va--)c: return error
      c->>vt: call
      vt-)vet: send text (error: check-in could not be completed)
    end

    va--)-c: valid token returned
    c->>+va: set status (E-CHECK-IN STARTED)
    va->>+val: RPC SDES SET APPT CHECK-IN STEP

    break any error occurs
      val--)va: return error
      va--)c: return error
      c->>vt: call
      vt-)vet: send text (error: check-in could not be completed)
    end

    val--)-va: OK
    va--)-c: status set
  end

  c->>-vt: return short url
  vt-)-vet: send text (short url)
```

(Zoom-In on CW Portion so we can clean up above)
```mermaid
sequenceDiagram
  participant c as CHIP
  participant t as Twilio
  participant cw as Clinician Workflow
  participant va as Vista API
  participant val as VistALink

  c->>+va: get Vista token

  break any error occurs
    va--)c: return error
  end

  va--)-c: valid token returned

  c->>+cw: get demographics confirmations

  cw->>+va: get VistA token

  break any error occurs
    va--)cw: return error
    cw--)c: return error
  end

  va--)-cw: valid token returned

  cw->>+va: get demographics by patient

  break any error occurs
    va--)cw: return error
    cw--)c: return error
  end

  va->>+val: RPC SDEC GETREGA

  break any error occurs
    val--)va: return error
    va--)-cw: return error
    cw--)-c: return error
  end

  val--)-va: demographics returned
  va--)cw: demographics returned
  cw--)c: demographics confirmations
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
    participant db as DynamoDB
    participant c as CHIP
    participant va as VistA API

        activate vet
        vet->>+web: Enter last name/dob in login page
        web->>+api: POST /check_in/v2/sessions/ {uuid,last_name, dob}
        api->>api: validate uuid, lastname & dob
        alt invalid uuid/lastname/dob parameters
            api->>web: 400 { error: true, message: "Invalid dob or lastname!" }
        else existing session
            api->>web: 200 { permissions: 'read.full', status: 'success'}
        else 
            api->>+l: POST /token 
            alt invalid auth
                l--)api: 401 invalid auth
                api--)web: 401 invalid auth
                web--)vet: error page
            deactivate vet
            else valid auth
                activate vet
                l--)-api: token 
                api->>api: save token in redis
                api--)web: 200 { permissions: 'read.full', status: 'success'}
                deactivate api
                web->>+api: GET /check_in/v2/patient_check_ins/{id}
                opt veteran using old appointment check-in link
                    api->>api: old appointment identifiers exist in redis
                    api->>+c: POST /actions/refresh-appointments/{id} {patient-dfn, station-no}
                    c->>+va: GET /v3/sdes/vista-sites/{sta3ns}/users/{station-duz}/patients/{patient-dfn}/appointments
                    alt Exception from vista
                        c-->>api: {errormessage:, statuscode: 500}
                        api-->>web: BackendServiceException {title: 'Internal Server Error', status: 500}
                        web-->>vet: Sorry check with staff member
                    else No appointments to refresh
                        c-->>api: 200 'No appointments found. No update executed.'
                    else Succeeded refreshing appointments 
                        va--)-c: appointments
                        c--)-l: PATCH /data/uuid {appoinments payload}
                        l-->db: update-item
                        alt error updating appointments
                            db-->l: Error
                            l-->c: {error: }
                            c-->api: {errormessage:, statuscode: 500}
                            api-->>web: BackendServiceException {title: 'Internal Server Error', status: 500}
                            web-->>vet: Sorry check with staff member
                        else Success
                            db-->l: 200 Success
                            l-->c: 200 {message: 'data updated'}
                            c-->api: 200 {body: 'Refresh successful'}
                            api-->l: GET /data/{id}
                            l-->db: get-item
                            db-->l: response
                            alt id not found
                                l-->api: 404 Not Found
                                api-->>web: BackendServiceException {title: 'Data Not Found', status: 404}
                                web-->vet: We're Sorry.  Check in with Staff member
                            else Data expired
                                l-->api: 403 Forbidden
                                api-->>web: BackendServiceException {title: 'Data has expired', status: 403}
                                web-->vet: We're Sorry. This link has expired
                            else Error
                                l->api: 500 Error message
                                api-->web: BackendServiceException {title: 'Operation failed', status: 400}
                                web-->vet: We're Sorry.  Check in with Staff member
                            else Success
                                l-->api: Appointment data
                                api-->>api: Save appointment identifiers
                                alt check-in started flag not set
                                    api->>+c: POST /setECheckInStarted
                                    alt Failed setting setECheckInStarted
                                        c->>api: Throws Exception 500 ECheckInStarted update error
                                        api->>web: BackendServiceException {title: 'Internal Server Error', status: 500}
                                        web->>vet: We're Sorry.  Check in with Staff member
                                    else Successfuly setECheckInStarted
                                        c--)-api: 200 Success
                                        api--)-web: serialized data (appointments + demographics)
                                        web--)-vet: appointments page
                                        deactivate vet                                        
                                    end
                                end
                            end
                        end
                    end
                end
            end
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
