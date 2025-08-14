## Proposal

* Call `getSSOeTraitsByCSPID` at the end of auth 
  * The following verified credential attributes will be used in the request:
    * CSP ID
    * First Name
    * Last Name
    * email
    * csid
    * uid
    * cspbirthDate
    * SSN
    * gender
    * authenticationMethod
    * credAssuranceLevel
    * ial
    * aal
    * issueinstant
    * street1
    * street2
    * street3
    * city
    * state
    * zipcode
    * phone
    * cspidentifier
    * cspMethod
    * proofingAuthority
  * The call will be made async, this will not block auth regardless of success or failure
  * On Success
    * Log success to datadog
  * On Failure
    * Log failure to datadog
* Initially call on staging stack only
  * Rollout to production will be considered later
  * We will gather statistics of authentications on staging first

### Request Attributes
<img width="967" height="716" alt="image 2" src="https://github.com/user-attachments/assets/d74dff58-714b-4d51-a2e1-111f7fc4c8a0" />
<img width="920" height="694" alt="image 3" src="https://github.com/user-attachments/assets/fbb0d629-ba25-4bfa-b69c-f7fea1f1e9a6" />

### Response Attributes
<img width="734" height="715" alt="image 4" src="https://github.com/user-attachments/assets/40fe4a7f-1cab-4295-983b-af40816cf4ba" />

### Documented Errors
<img width="802" height="422" alt="image" src="https://github.com/user-attachments/assets/318bb390-9e71-4913-8039-9f4e9c62ecad" />



### Example cURL
``` bash
curl --location 'https://int.services.eauth.va.gov:9303/psim_webservice/dev/IdMSSOeWebService' --header 'Content-Type: application/xml' --data-raw '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.ssoe.acs">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:getSSOeTraitsByCSPID>
         <ws:cspid>200VIDM_14fe720240929420a910011b0fd0001</ws:cspid>
         <ws:firstname>MARK</ws:firstname>
         <ws:lastname>ADDRCHECKSTEIN</ws:lastname>
         <ws:email>dwighteddington@iamdevtest.com</ws:email>
         <ws:uid>14fe720240929420a910011b0fd0001</ws:uid>
         <ws:cspbirthDate>19780511</ws:cspbirthDate>
         <ws:versioncode>1.0.0</ws:versioncode>
         <ws:pnid>666119014</ws:pnid>
         <ws:authenticationMethod>http://idmanagement.gov/ns/assurance/aal/2</ws:authenticationMethod>
         <ws:credAssuranceLevel>3</ws:credAssuranceLevel>
         <ws:ial>2</ws:ial>
         <ws:issueInstant>2024-10-09T14:51:59Z</ws:issueInstant>
         <ws:street1>123 IDME ADDRESS LANE</ws:street1>
         <ws:city>ORLANDO</ws:city>
         <ws:state>FL</ws:state>
         <ws:zipcode>02915</ws:zipcode>
         <ws:phone>(571)123-0987</ws:phone>
         <ws:cspIdentifier>200VIDM</ws:cspIdentifier>
         <ws:cspMethod>IDME</ws:cspMethod>
         <ws:proofingAuthority>FICAM</ws:proofingAuthority>
      </ws:getSSOeTraitsByCSPID>
   </soapenv:Body>
</soapenv:Envelope>' --cert "/etc/pki/tls/certs/vetsgov-mvi-cert.pem" --key "/etc/pki/tls/private/vetsgov-mvi.key" -vvvvv
```
