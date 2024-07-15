# Login and access

## Overview
Appointments is authenticated and has some access requirements that Veterans must meet to use the tool.

## User stories

- As a Veteran I want to be able to access tools that let me schedule and manage my VA appointments.

## Requirements

### Functional
- A user may only log into VAOS if all the following are true:  
  -  User is registered for care at a VA Medical Center (VAMC).
  -  User has a Premium MyHealtheVet, Id.me, Login.gov,  or DS Logon Level 2 login credential.     
- A message must display to any non-registered veterans informing them they must be registered at a VAMC to use VAOS.  

### Non-functional
- To determine registered facilities, the front end uses the facilities information provided by the VA Profile team.
   - Once the user logs in and is authenticated VAOS FE makes an call to the `/v0/user` 
   - the endpoint returns a response with a field called `vaProfile`.
   - The `vaProfile` field contains a field called `facilities`.  
   - If the field is empty, then the code will determine if the user is ineligible to use VAOS because they have not been registered at a VA facility. 

## Specifications

[User flow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3099&t=4HP199gnu7lXJB8V-4) 



## Metrics
<!--Goals for this feature, and how we track them through analytics-->

None

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- Event 1
- Event 2

[All events VAOS tracks](Link TBD)


## Technical design

<details>
  <summary>Sample response - /v0/user vaProfile field</summary>
  
  Sample response from user in staging registered at 983 and 984.

  ```
  https://staging-api.va.gov/v0/user

  get the data>attribute>vaProfile to see all registered facilities
  {
      "status": "OK",
      "birthDate": "19620101",
      "familyName": "Mhvpsim",
      "gender": "F",
      "givenNames": [
          "Psim"
      ],
      "isCernerPatient": false,
      "facilities": [
          {
              "facilityId": "984",
              "isCerner": false
          },
          {
              "facilityId": "983",
              "isCerner": false
          }
      ],
      "vaPatient": true,
      "mhvAccountState": "MULTIPLE"
  }
  ```
</details>

Notes from Spike [51718](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/51718)

Q: What api call and fields are being looked at by VAOS to determine if a veteran is "enrolled" and "registered"?

A: VAOS FE makes a call to `/v0/user`. That endpoint returns a response with a field named: `vaProfile`. This `vaProfile` field contains a field called `facilities`
Here's a sample response

```
"vaProfile": 
  { "status": "OK", 
    "birthDate": "20010531",
    "familyName": "Morgan",
    "gender": "M",
    "givenNames": [ "Cecil", "Matthew" ],
    "isCernerPatient": false,
    "facilities": [ { "facilityId": "983", "isCerner": false }, { "facilityId": "984", "isCerner": false } ],
    "vaPatient": true,
    "mhvAccountState": "OK"
},
```

Our logic checks if the facilities field is empty. If it is, we determine the user/veteran is ineligible to use VAOS because they have no registered VA Medical center.

Q: Are "enrolled" and "registered" two distinct checks or are they the same thing?

A: It appears they are the same thing. We do not make any other checks apart from the above listed check.
I logged into staging with my account, copied the response gotten from the `/v0/user` endpoint and mocked it locally. I was getting the same error message in the image above but after adding a mock facility into the facilities field, I no longer got the error message and I was able to get into VAOS.

The facilities data is gotten from MPI.

Q: Is the `vaPatient` field used for anything? I'm wondering if it is possible for a Veteran to not be registered at any facility but still have the `vaPatient` field be true? 


A: I toggled the value from `true` - `false` and it did not affect anything. I still got the error message when `vaPatient` was set to `true` and the `facilities` field was empty. When `vaPatient` was set to `false` and the `facilities` field contained a facility, error message did not display so it would appear the value of that field does not affect anything we're checking.
