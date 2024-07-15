## VAOS Registration Check (FE) 

This content has been moved to the [VAOS feature reference](../../feature-reference/README.md)

You can delete this page after 02/01/2024.

<!--

### Technical Spec

- When VAOS FE makes an call to the `/v0/user` the endpoint returns a response with a field called `vaProfile`.
The `vaProfile` field contains a field called `facilities`. 
- The logic checks if the facilities field is empty. If the field is empty, then the code will determine if the user is ineligible to
  use VAOS because they have not been registered at a VA facility. 


Sample response: 

`"vaProfile": { "status": "OK", "birthDate": "20010531", "familyName": "Morgan", "gender": "M", "givenNames": [ "Cecil", "Matthew" ], "isCernerPatient": false, "facilities": [ { "facilityId": "983", "isCerner": false }, { "facilityId": "984", "isCerner": false } ], "vaPatient": true, "mhvAccountState": "OK" },`
-->