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
  participant val as VistA Stations

  alt veteran initiated check-in
    vet->>+vt: text "check-in"
    vt->>+c: initiate check-in
  else 45 min reminder
    vt->>c: initiate check-in
  end

  break too few appointments
    c--)vt: return error
    vt-)vet: send text (ERROR_NOT_AVAILABLE)
  end

  break insurance validation needed
    c--)vt: return error
    vt-)vet: send text (ERROR_INSURANCE_VALIDATION)
  end

  break unknown number
    c--)vt: return error
    vt-)vet: send text (ERROR_PHONE_NOT_FOUND)
  end

  c->>+va: get Vista token

  break any error occurs
    va--)c: return error
    c--)vt: return error
    vt-)vet: send text (error: check-in could not be completed)
  end

  va--)-c: valid token returned

  c->>+cw: get demographics status

  break any error occurs
    cw--)c: return error
    c--)vt: return error
    vt-)vet: send text (error: check-in could not be completed)
  end

  cw--)-c: demographics status

  c->>+l: save appointments

  break any error occurs
    l--)c: return error
    c--)vt: return error
    vt-)vet: send text (error: check-in could not be completed)
  end

  l--)-c: documentId

  c->>+url: get short url

  break any error occurs
    url--)c: return error
    c--)vt: return error
    vt-)vet: send text (error: check-in could not be completed)
  end

  url--)-c: short url

  opt veteran initiated check-in
    c->>+va: get Vista token

    break any error occurs
      va--)c: return error
      c--)vt: return error
      vt-)vet: send text (error: check-in could not be completed)
    end

    va--)-c: valid token returned
    c->>+va: set status (E-CHECK-IN STARTED)
    va->>+val: RPC SDES SET APPT CHECK-IN STEP

    break any error occurs
      val--)va: return error
      va--)c: return error
      c--)vt: return error
      vt-)vet: send text (error: check-in could not be completed)
    end

    val--)-va: OK
    va--)-c: status set
  end

  c->>-vt: return short url
  vt-)-vet: send text (short url)
```

#### Clinician Workflow: Get Demographics Status

CHIP's request to Clinician Workflow for demographics status kicks off its own series of requests to VistA stations via Vista API.

```mermaid
sequenceDiagram
  participant c as CHIP
  participant cw as Clinician Workflow
  participant va as Vista API
  participant val as VistALink

  c->>+va: get Vista token

  break any error occurs
    va--)c: return error
  end

  va--)-c: valid token returned

  c->>+cw: get demographics status

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
    participant var as VA.gov Reverse Proxy
    participant url as URL Shortener Service
    participant db as Short URL DB
    participant web as vets-website
    participant api as vets-api

    activate vet
    note right of vet: Click on "check-in" short URL
    vet->>+var: GET /c/{id}
    var->>+url: GET /short-urls/{id}
    url->>+db: GET /{key: id, TableName: table-name}
    break id not found 
      db--)url: 404 Not Found
      url--)var: 404 Not Found
      var--)vet: 404 Not Found      
    end
    break url expired
      db--)url: 404 Short URL expired
      url--)var: 404 Short URL expired
      var--)vet: 404 Short URL expired
    end
    db--)-url: 200 Long URL
    url--)-var: 301 redirect {headers: {location: Long URL}}
    var--)-vet: 301 redirect {headers: {location: Long URL}}
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
    participant btsss as BTSSS
    participant c as CHIP
    participant va as VistA API
    participant cw as Clinician Workflow

    activate vet
    alt if confirmation > 7 days or demographicsNeedsUpdate status == false
        vet->>+web: Reviews demographics page
        alt demographics data up-to date
            web->>+api: PATCH /check_in/v2/demographics/{id}
            api->>+c: /actions/confirm-demographics {patientDfn:, stationNo:, demographicConfirmations: {demographicsConfirmationPayload}}
            alt Invalid request
                api--)web: 400 'Invalid parameter request'
                web--)vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
            else No token
                api--)web: 401 { permissions: 'read.none', status: 'success', uuid: }
                web--)vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
            else 
                c->>+cw: POST /api/v1/vista-sites/{station3No}/patient_demographics_status {patientDfn:, demographicsConfirmationPayload}
                alt Successful setting demographics status
                    cw--)-c: Response data
                    c--)-api: 200 {confirmation response}
                    api--)web: 200 {confirmation response}
                else Exception from Clinician Workflow
                    cw->>c: 500 'Unknown clinician workflow error'
                    c--)api: 500 'Unknown error'
                    api--)-web: 500 'Internal Server Error'
                    web--)-vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
                end
            end
        end
    end
    web->>+api: POST /check_in/v0/travel_claims/
    note right of web: see Check In - Travel Claims
    api--)-web: 202 Accepted
    vet->>+web: Click check-in from appointment details page
    web->>+api: POST /check_in/v2/patient_check_ins/ {id:,appt_ien:,travel_enabled:,travel_submitted:}
    alt Authorized session exists
        api--)web: 200 { permissions: 'read.none', status: 'success', uuid: }
        web--)vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
    else
        api->>+c: POST /actions/check-in/{id} {appt_ien:,travel_params:}
        c->>+l: GET /data/{id}
        alt Exception from LoROTA
            l--)c: 500 'Unable to find appointments in {id}'
            c--)api: 404 'Unable to find appointment {appt_ien} in {id}'
            api--)web: 404 'Not Found'
            web--)vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
        else Succeeded getting appointments
            l--)-c: Returns appointment for {appt_ien} in {id}'
            c--)c: Get appointment station number
            c-->+va: /v1/sdes/checkin/{station_number}/{appt_ien}
            alt Exception/Error checking in for the appt_ien
                va--)c: 500 'VISTA_ERROR'
                c--)api: 500 'VISTA_ERROR'
                api--)web: 500 'Internal Server Error'
                web--)vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
            else
                va--)c: 200 Response data
                c-->+va: PUT /v1/sdes/checkin-status-set/{station_number}/{appt_ien}/CHECK_IN_COMPLETE
                alt Exception
                    va--)c: 500 'VISTA_ERROR
                    c--)api: 500 'VISTA_ERROR'
                    api--)web: 500 'Internal Server Error'
                    web--)vet: "We're sorry. Something went wront on our end. Check-in with a staff member"
                else Setting CHECK_IN_COMPLETE Success
                    va--)c: 200 Response data
                    c--)api: 200 Checkin Successful
                    api--)web: 200 Checkin Successful
                    api--)vet: Checkedin Successfully
                end
            end
        end
    end
    deactivate vet
```

### Check In - Travel Claims
This diagram shows the sequence of submitting travel claims to BTSSS as part of check-in steps, as well as checking the status of the claim through BTSSS in case of timeouts.

#### Claim Submission - Initiation
When the veterans submit the travel claim, website makes a call to vets-api controller, which in turns submits a worker (sidekiq) job to call the BTSSS API. The actual travel claim submission to BTSSS happens asynchronously, and veterans are notified via va-notify when BTSSS receives the submission.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant web as vets-website
    participant api as vets-api
    participant vaw as vets-api-worker
    participant btsss as BTSSS

    activate vet
    vet->>+web: Click check-in
    web->>+api: POST /travel_claims
    api-)vaw: submit job to call BTSSS
    api--)-web: 202 Accepted
    web--)-vet: claim submitted
    deactivate vet
```

#### Claim Submission to BTSSS
To submit the claim to BTSSS service, we first need to get the auth token through VEIS. If there's any error getting the token, we send an error text to Veterans so they are aware and can submit/follow up on their claim through other means. Upon receiving the token, we call BTSSS to submit the claim. If BTSSS returns any error, we send an error notification to the Veteran via va-notify. If the claim is submitted successfully, BTSSS returns a claim number, which is then sent to the Veteran via va-notify.

```mermaid
sequenceDiagram
  actor vet as Veteran
  participant api as vets-api
  participant vaw as vets-api-worker
  participant veis as VEIS
  participant bt as BTSSS
  participant van as va-notify

  api -) vaw: submit job to call BTSSS
  vaw ->>+ veis: POST /oauth2/token
  alt successful token
    veis --) vaw: successful token
    alt successful claim submission
      vaw ->>+ bt: POST /submitclaim
      bt --)- vaw: success
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim created"
    else duplicate claim
      vaw ->>+ bt: POST /submitclaim
      bt --)- vaw: error 'duplicate claim'
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "duplicate claim"
    else timeout
      vaw ->>+ bt: POST /submitclaim
      bt --)- vaw: timeout
      vaw ->> vaw: schedule Status Check job
      note right of vaw: see Status Check SD
    else unknown error
      vaw ->>+ bt: POST /submitclaim
      bt --)- vaw: unknown error
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim submission error"
    end
  else token call failed
    veis --) vaw: error
    vaw ->>+ van: POST /notifications/sms
    van --)- vaw: 201 created
    van -) vet: sms "claim submission error"
  end
```

#### Timeout handling for BTSSS claim submission
In case we get a timeout when calling BTSSS claim ingest API, we schedule another job to be run in 5 minutes. This job calls the BTSSS status endpoint to check the status of the claim, and sends a text notification to the veteran based on the status received.

```mermaid
sequenceDiagram
  actor vet as Veteran
  participant vaw as vets-api-worker
  participant veis as VEIS
  participant bt as BTSSS
  participant van as va-notify

  vaw ->>+ veis: POST /oauth2/token
  alt successful token
    veis --) vaw: successful token
    alt claim submitted successfully
      vaw ->>+ bt: POST /claimstatus
      bt --)- vaw: claim success
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim submitted"
    else claim submitted but has errors
      vaw ->>+ bt: POST /claimstatus
      bt --)- vaw: claim submitted but has errors
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim failure"
    else empty or multiple status response
      vaw ->>+ bt: POST /claimstatus
      bt --)- vaw: empty or multiple status response
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim submission error"
    else timeout
      vaw ->>+ bt: POST /claimstatus
      bt --)- vaw: timeout
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim timeout"
    else any other error
      vaw ->>+ bt: POST /claimstatus
      bt --)- vaw: error
      vaw ->>+ van: POST /notifications/sms
      van --)- vaw: 201 created
      van -) vet: sms "claim submission error"
    end
  else token call failed
    veis --) vaw: error
    vaw ->>+ van: POST /notifications/sms
    van --)- vaw: 201 created
    van -) vet: sms "claim submission error"
  end
```

