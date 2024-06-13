``` mermaid
sequenceDiagram
    participant User_Browser
    participant patient_portal
    participant VA.gov
    participant EAuth
    participant vets_api
    participant IDme
    participant SuS_API
    

    User_Browser ->> patient_portal: GET / 302
    patient_portal ->> User_Browser: Redirect to https://staging.va.gov/
    User_Browser ->> VA.gov: GET /sign-in/?application=myvahealth&to={redirect_url} 200
    VA.gov ->> EAuth: HEAD /keepalive (check for current valid session) 200
    Note over EAuth: user not logged in yet
    VA.gov ->> vets_api: GET /v1/sessions/idme_verified/new 200
    vets_api ->> EAuth: POST /isam/sps/saml20idp/saml20/login 302
    vets_api ->> EAuth: GET /isam/sps/auth?PartnerId= 200
    EAuth ->> EAuth: GET /scripts/login.js 200
    EAuth ->> EAuth: GET /accessva/?cspSelectFor 200
    EAuth ->> EAuth: GET /isam/sps/saml20sp/saml20/logininitial?&ForceAuthn=true 200
    EAuth ->> IDme: POST /saml/SingleSignOnService 200
    IDme ->> IDme: GET /en/session/new
    Note over IDme: User Logs in with username and password
    IDme ->> EAuth: POST /isam/sps/saml20sp/saml20/login 302
    IDme ->> EAuth: GET /accessva/broker?PartnerId=https://ssoe-sp-staging.va.gov 302
    IDme ->> EAuth: GET /isam/sps/auth?PartnerId=https://ssoe-sp-staging.va.gov 200
    EAuth ->> EAuth: GET /accessva/resources/js/isam-oauth/saml.js 200
    EAuth ->> vets_api: POST /v1/sessions/callback 302
    vets_api ->> VA.gov: GET /terms-of-use?redirect_url= 200
    VA.gov ->> vets_api: GET /v0/terms_of_use_agreements/v1/latest 200
    VA.gov ->> vets_api: GET /v0/user 401 Unauthorized
    VA.gov ->> EAuth: HEAD /keepalive (check for current valid session) 200
    Note over VA.gov: valid session detected
    VA.gov ->> vets_api: GET /v1/sessions/custom/new? 200
    vets_api ->> EAuth: POST /isam/sps/saml20idp/saml20/login 200
    EAuth ->> EAuth: GET /accessva/resources/js/isam-oauth/saml.js 200
    EAuth ->> vets_api: POST /v1/sessions/callback 302
    vets_api ->> VA.gov: GET /terms-of-use?redirect_url= 200
    VA.gov ->> vets_api: GET /v0/terms_of_use_agreements/v1/latest 200
    VA.gov ->> EAuth: HEAD /keepalive (check for current valid session) 200
    Note over VA.gov: User accepts terms of use by clicking accept button
    VA.gov ->> vets_api: POST /v0/terms_of_use_agreements/v1/accept 201
    vets_api ->> SuS_API: POST /agreements 201
    VA.gov ->> EAuth: HEAD /keepalive (check for current valid session) 200
    VA.gov ->> VA.gov: GET /auth/login/callback?type=custom 200
    VA.gov ->> patient_portal: GET /session-api/realm/{string}?authenticated=true 200
    patient_portal ->> EAuth: POST /isam/sps/saml20idp/saml20/login 302
    Note over EAuth: EAuth checks for cerner_consent cookie, not found
    EAuth ->> VA.gov: GET /terms-of-use/myvahealth/?ssoeTarget={patient portal url} 200
    VA.gov ->> vets_api: PUT /v0/terms_of_use_agreements/update_provisioning 200
    vets_api ->> SuS_API: PUT /provisioning/cerner 200
    Note over vets_api: Cerner_Consent=Accepted Cookie set
    VA.gov ->> EAuth: HEAD /keepalive (check for current valid session) 200
    VA.gov ->> EAuth: GET /isam/sps/auth?PartnerId=https://staging-patientportal 200
    EAuth ->> EAuth: GET /accessva/resources/js/isam-oauth/saml.js 200
    Note over EAuth: EAuth checks for cerner_consent cookie, found
    EAuth ->> patient_portal: POST /session-api/protocol/saml2/sso 303
    EAuth ->> patient_portal: GET / 200
    patient_portal ->> patient_portal: POST /session_tokens 200
    Note over patient_portal: User logged in successfully and accepted terms
```
