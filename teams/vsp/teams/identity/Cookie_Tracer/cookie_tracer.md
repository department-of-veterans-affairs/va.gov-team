### Current State
VA.gov currently has two authentication processes for Veterans. One of these processes is a single sign-on (SSO) solution which facilitates a Veteran to be able to login to VA.gov with three different credential providers, DSLogon, MyHealtheVet, and ID.me. The SSO solution currently is offered on a random basis to 30% of all Veterans who attempt to login to VA.gov. There is also an option for a Veteran to login at one of these partner sites, DSLogon or MyHealtheVet, then go to VA.gov and continue to be logged in instead of needing to re-enter their credentials. The key metric to determine the Veteran login experience is the “SAML Response Rate.” This metric determines if a Veteran is able to complete the login flow. 
### SAML Response Rate Flow
  The expected SAML cookie tracker flow [reference image below]:
1. Veteran clicks on the sign-in button on VA.gov. This button opens a modal that presents the Veteran with the three login options. 
2. Once they click on any of these methods, a SAML request is created within the VA.gov API and logged on our backend servers. 
3. As this request is created, the VA.gov frontend creates a request which is then POSTed to the next hop, the Identity Broker, also known as the ISAM. 
4. The Veteran is redirected through the Identity broker and onto the credential provider.
    1. Within the Veterans browser a cookie is created, something that can be used to uniquely identify the Veterans login attempt before they authenticate. 
    2. This cookie information is also logged by the VA.gov API to facilitate the measurement of the “SAML Response Rate.” 
5. The Veteran then enters their credentials and Multi-Factor Authentication (MFA) information into the credential providers site. 
    1. One of the credential providers, ID.me, has adopted the storage of the above mentioned cookie tracker information and also stores this information in their logs to measure the Veteran Login experience. 
6. After the credentials have been accepted, the Veteran is redirected back to the ISAM along with the tracking cookie information from the original VA.gov API. 
    1. The ISAM logs the response from the credential provider with the cookie tracker data. 
7. The ISAM records and repackages the users information from the credential provider and redirects them back to VA.gov. 
8. VA.gov consumes the cookie tracking information from the ISAM and records this as a SAML response. 
9. The combination of every request and response is then matched up to calculate the “SAML Response Rate.” More specifically, an identifier from the SAML request is matched up with an identifier from the SAML response via the cookie tracker. 
    1. If a SAML response identifier cannot be found to match the SAML request, then we annotate this as a “missing response.” We measure the matches overtime to determine the “SAML Response Rate”. 
![SAML Cookie Tracker (2)](https://user-images.githubusercontent.com/71290526/116739664-ef175c80-a9c1-11eb-91bd-838561531dda.png)



...more to follow...


