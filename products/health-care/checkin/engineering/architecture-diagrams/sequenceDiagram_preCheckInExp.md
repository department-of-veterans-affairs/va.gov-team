## Pre Check In Sequence Diagrams

### Initiate Pre check-in
Pre check-in is inititated by VEText based on a configurable number of days prior to the appointment. VEText calls CHIP initiate pre check-in lambda, which gets the relevant details about the Veteran's appointment and demographics and saves the data in LoROTA. VEText returns the shortened URL to the Veteran in a text message for them to start pre check-in.

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant val as VistA Stations
    participant vt as VEText
    participant c as CHIP
    participant va as Vista API
    participant l as LoROTA
    participant url as URL Shortener Service

    val->>+vt: initiate pre-check-in
    vt->>+c: initiatePreCheckin

    c->>+va: get appointments
    va->>+val: RPC SDES GET APPTS BY PATIENT DFN2
    break any error occurs
      val--)va: return error
      va--)c: return error
      c--)vt: return error (INTERNAL_SERVER_ERROR)
    end
    val--)-va: appointments
    va--)-c: appointments

    break already checked in
      c--)vt: return error (ALREADY_CHECKED_IN)
    end

    c->>+l: save appointments
    break any error occurs
      l--)c: return error
      c--)vt: return error (INTERNAL_SERVER_ERROR)
    end
    l--)-c: documentId

    c--)-vt: documentId

    vt->>+url: shorten url
    break any error occurs
      url--)vt: return error (INTERNAL_SERVER_ERROR)
    end
    url--)-vt: short url

    vt->>-vet: send text (short url)
```

### Start Pre Check-In
When Veterans click on the link in the text message, they are redirected to the website that calls vets-api to start pre check-in. This is more involved than the start of day of check-in process as vets-api also calls CHIP to refresh the pre check-in data in LoROTA so that Veterans are shown the latest data. Once the refresh is done and an existing session is not found, they are redirected to the auth page.


#### Short URL -> Pre-Check-In URL

```mermaid
sequenceDiagram
  actor vet as Veteran
  participant var as VA.gov Reverse Proxy
  participant url as URL Shortener Service
  participant db as Short URL DB
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
  db--)-url: expanded URL
  url--)-var: 301 redirect
  var--)-vet: 301 redirect
  deactivate vet
```

#### Refresh Pre-Check-In

```mermaid
sequenceDiagram
  actor vet as Veteran
  participant web as vets-website
  participant api as vets-api
  participant c as CHIP
  participant l as LoROTA
  participant va as VistA API
  participant val as VistA Stations
  participant cw as Clinician Workflow

  activate vet

  vet->>+web: load "health-care/appointment-pre-check-in"
  web->>+api: GET /sessions
  api->>+c: refreshPreCheckin

  c->>+l: get saved data
  l--)-c: data

  c->>+va: get appointments
  va->>+val: RPC SDES GET APPTS BY PATIENT DFN2
  val--)-va: appointments
  va--)-c: appointments

  c->>+va: get demographics
  va->>+val: RPC SDEC GETREGA
  val--)-va: demographics
  va--)-c: demographics

  c->>+cw: get demographics status
  cw--)-c: demographics status

  c->>+l: save data
  l--)-c: documentId

  break any error occurs
    c--)api: return error
    api--)web: return error
    web--)vet: show message (???)
  end

  c--)-api: refreshed
  api->>api: check if session exists
  api--)-web: session doesn't exist
  web--)-vet: redirect to login page
  deactivate vet
```

#### Clinician Workflow: Get Demographics Status

CHIP's request to Clinician Workflow for demographics status kicks off its own series of requests to VistA stations via Vista API.

```mermaid
sequenceDiagram
  participant c as CHIP
  participant cw as Clinician Workflow
  participant va as Vista API
  participant val as VistA Stations

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

### Authentication
This is the flow when Veterans submit their last4/last name to complete the LoROTA low auth flow. If successfully authenticated, LoROTA returns the stored data from DynamoDB. The data includes patient's demographic update status. If any of the demographic data requires updates, they are shown those demographic pages to confirm that their data is correct. One additional step in pre check-in authentication scenario is when vets-api calls a CHIP lambda to set the pre check-in started status in VistA.

```mermaid
sequenceDiagram
  actor vet as Veteran
  participant web as vets-website
  participant api as vets-api
  participant c as CHIP
  participant l as LoROTA
  participant va as VistA API
  participant val as VistA Stations

  activate vet

  vet->>+web: Enter last4/last name
  web->>+api: POST /sessions
  api->>api: check in redis and session
  api->>+l: POST /token

  break invalid auth
   l--)api: 401 invalid auth
   api--)web: 401 invalid auth
   web--)vet: error page
  end

  l--)-api: valid session

  api->>api: save token in redis
  api->>+c: set precheckin started

  c->>+l: get appointments
  l--)-c: appointments

  c->>+va: set precheckin started
  va->>+val: RPC SDES SET APPT CHECK-IN STEP
  val--)-va: OK
  va--)-c: OK

  c--)-api: response
  api--)-web: return 'read.full'

  web->>+api: GET pre check-in data
  api->>+l: GET data
  l--)-api: data
  api--)-web: serialized data

  opt demographics confirmations needed
    web--)vet: demographics pages
  end

  web--)-vet: confirmation page

  deactivate vet
```

### Complete Pre check-in
After Veterans confirm their demographics data (if shown), website calls vets-api which calls a CHIP lambda to complete the pre check-in scenario. CHIP sets the PRE-CHECK-IN COMPLETE status in VistA. If the Veterans confirm their demographics information, the status is set in Clinician Workflow.

```mermaid
sequenceDiagram
  actor vet as Veteran

  participant web as vets-website
  participant api as vets-api
  participant c as CHIP
  participant l as LoROTA
  participant cw as Clinician Workflow
  participant va as VistA API
  participant val as VistA Stations

  activate vet

  vet->>+web: start pre check-in

  opt demographics confirmations
    web--)vet: confirm demographics data
    vet->>web: confirmed
  end

  web->>+api: POST /pre-check-in
  api->>+c: preCheckIn

  c->>+l: get appointments
  l--)-c: appointments

  opt demographics confirmations
    c->>+cw: set demographics status
    cw--)-c: response
  end

  c->>+va: set precheckin complete
  va->>+val: RPC SDES SET APPT CHECK-IN STEP
  val--)-va: OK
  va--)-c: OK

  break any error occurs
    c--)api: return error
    api--)web: return error
    web--)vet: show message (???)
  end

  c--)-api: checkin successful
  api--)-web: response
  web--)-vet: success page

  deactivate vet
```


#### Clinician Workflow: Set Demographics Status

CHIP's request to Clinician Workflow to set demographics status kicks off its own series of requests to VistA stations via Vista API.

```mermaid
sequenceDiagram
  participant c as CHIP
  participant cw as Clinician Workflow
  participant va as Vista API
  participant val as VistA Stations

  c->>+va: get Vista token

  activate c

  break any error occurs
    va--)c: return error
  end

  va--)-c: valid token returned

  c->>+cw: set demographics status

  cw->>+va: get VistA token

  break any error occurs
    va--)cw: return error
    cw--)c: return error
  end

  va--)-cw: valid token returned

  cw->>+va: set demographics by patient

  break any error occurs
    va--)cw: return error
    cw--)c: return error
  end

  va->>+val: RPC SDEC EDIT PAT PRE-REGISTRATION

  break any error occurs
    val--)va: return error
    va--)cw: return error
    cw--)c: return error
  end

  val--)-va: demographics returned
  va--)-cw: demographics returned
  cw--)-c: demographics confirmations

  deactivate c
```
