# Authenticated, Past Appointments Mileage-Only Claim Submission

## Work Identification
### VA.gov Travel Pay Team
* Travel Pay status FE updates/refinement
* Travel Pay status BE updates/refinement
* Travel Pay mileage expense submission flow FE
* Travel Pay mileage expense submission flow BE

Basically: All Travel Pay work on vets-api and self-contained Travel Pay apps on vets-website.

### Travel Pay API Team
*Potentially*:
* Updates to `/claims` endpoint
* Inclusion of `/claims-by-id` endpoint
* Any endpoints related to claim submission

Basically: Any API stuff

### UAE Team
* FE link to Travel Pay status page from relevant Appointment details
* FE link to Travel Pay submit mileage page from relevant Appointment details
* FE logic to determine whether to display "go to status" or "go to submit"

Basically: Integration work on vets-website that links appointments to mileage claims

## Integration Points
* **UAE Team** needs `/get-claim` endpoint on vets-api implemented by **Travel Pay Team**
* **Travel Pay Team** needs *appointment timestamp* from the link implemented by **UAE Team**
* **Travel Pay Team** needs `/get-appt` endpoint on Travel Pay API implemented by **API Team**
* **Travel Pay Team** needs `/create-claim` endpoint on Travel Pay API implemented by **API Team**
* **Travel Pay Team** needs `/add-expense` endpoint on Travel Pay API implemented by **API Team**
* **Travel Pay Team** *potentially* needs updated versions of existing endpoints on Travel Pay API implemented by **API Team**

## Diagram
```mermaid
sequenceDiagram
  actor vet as Veteran
  participant appts as Appointments: VA.gov
  participant status as Travel Pay Status: VA.gov
  participant smoc as Mileage Claim Submission: VA.gov
  participant vapi as vets-api
  participant tpapi as Travel Pay API

    vet ->> appts: View appointment details

    activate appts
    appts ->> vapi: Get appt details
    
    activate vapi
      vapi ->> appts: Appt Details
    deactivate vapi

    appts ->> vapi: GET /claim?appt=<timestamp>

    alt expense DOES NOT exist
      activate vapi
        vapi ->> appts: 404
      deactivate vapi

      appts ->> vet: <a href="/claim">Click here to submit a mileage expense</a>
      vet ->> appts: Click "Submit expense"

      appts ->> smoc: /submit-expense?appt=<datetime>
      deactivate appts

      activate smoc
        smoc ->> vapi: /find-btsss-appt

        activate vapi
            vapi ->>+ tpapi: /find-appt-by-date?appt-date={appt_datetime}\
            break when appointment not found in Travel Pay API
              tpapi ->>- vapi: 404
              vapi ->> smoc: 404
              smoc ->> vet: Appointment not found
              vet ->> vet: dang.
            end

            activate tpapi
              tpapi ->> vapi: AppointmentModel
            deactivate tpapi

            vapi ->> smoc: AppointmentModel
        deactivate vapi

        smoc ->> vet: Show "own car" prompt
        smoc ->> vet: Show "appt address" prompt
        smoc ->> vet: Show "own address" prompt        

        vet ->> smoc: Click "Create claim" button

        note over smoc,vapi: Mileage calculated on the API side.<br/>No information needs to be passed<br/> other than expense type
        smoc ->> vapi: /submit-mileage-claim

        %% Should this all be transactional? E.g. what happens
        %% when a claim is created, but mileage expense creation
        %% fails? Delete the claim? Try mileage add again, then
        %% roll back? Does the API handle this already?
        activate vapi
          vapi ->>+ tpapi: /create-new-claim/{AppointmentModel.id}
          tpapi ->>- vapi: ClaimModel

          vapi ->>+ tpapi: /add-mileage-expense/{ClaimModel.id}
          tpapi ->>- vapi: OK

          vapi ->> smoc: OK
        deactivate vapi

        activate status
          smoc ->> status: /status/TC12345
          status ->> vet: Shows claim (in some way)
        deactivate status
        vet ->> vet: cool.
      deactivate smoc

      else expense DOES exist
        activate vapi
          vapi ->>+ appts: ClaimModel
        deactivate vapi
        appts ->> vet: <a href="/status/{ClaimModel.id}">Click here to view existing claim</a>
        vet ->> appts: Click "view existing claim"
        appts ->>+ status: /status/{ClaimModel.id}
        status ->>+ vapi: /claims
        vapi ->>- status: ClaimModel [0...N]
        status ->>- vet: Shows claim (in some way)
        vet ->> vet: cool.

    end
```
