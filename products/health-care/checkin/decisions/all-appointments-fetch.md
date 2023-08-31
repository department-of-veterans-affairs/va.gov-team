# Fetch all appointments
As part of unified check-in. We would like to show all upcoming appointments a patient may have across all stations.

Currently we only fetch appointments per station, using the patient's station specific DFN.

We have identified two potential options to achive this.

## Option 1: use a VAOS endpoint

Pros: 
 - Could potentially do the fetch at render time and avoid adding more data in LoRota.
 - Data would be the same as if the patient looked up their appointments in VAOS or the mobile app.
 - Could mitigate potential latency issues by lazy loading the upcoming appointments.

Cons:
 - Possiblity requires full authentication.
 - Would need to get permission to use with LoRota.

 ## Option 2: have VEText fetch the data for us

 Pros:
  - Less work on our side for integration.
  - Potentially less concerns about auth level.
  - We need to start fetching appointment data for pre-check-in from VEText anyway.

Cons: 
  - More data stored in LoRota.
  - Would need to rely on VEText team to impliment.
  - Potential for added latency on the patient side.
  - Would have to get prioritized with all the work they already have.
